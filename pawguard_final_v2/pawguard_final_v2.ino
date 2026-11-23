#define ENABLE_USER_AUTH
#define ENABLE_FIRESTORE

#include <WiFi.h>
#include <Wire.h>
#include <math.h>
#include <FirebaseClient.h>
#include "ExampleFunctions.h"

#include <MAX30100_PulseOximeter.h>
#include <TinyGPSPlus.h>
#include <OneWire.h>
#include <DallasTemperature.h>

// ============================== CONFIG ====================================
#define WIFI_SSID      "//wifiname"
#define WIFI_PASSWORD  "//password"

#define API_KEY        "//APIkey"
#define USER_EMAIL     "//Email ID"
#define USER_PASSWORD  "//password"
#define PROJECT_ID     "id"
#define PET_ID         "pet1"
#define PET_NAME       "Buddy"

#define I2C_SDA     21
#define I2C_SCL     22
#define TEMP_PIN    4
#define GPS_RX      16
#define GPS_TX      17
#define BATTERY_PIN 34

// 1 = if GPS has no fix yet, upload this location (indoor demo). 0 = upload raw (0.0).
#define USE_FALLBACK_LOCATION 1
#define FALLBACK_LAT 13.05
#define FALLBACK_LON 77.58

#define MPU_ADDR 0x68

const unsigned long WRITE_INTERVAL_MS = 5000;
// ==========================================================================

UserAuth user_auth(API_KEY, USER_EMAIL, USER_PASSWORD, 3000);
FirebaseApp app;
SSL_CLIENT ssl_client;
using AsyncClient = AsyncClientClass;
AsyncClient aClient(ssl_client);
Firestore::Documents Docs;

PulseOximeter pox;
TinyGPSPlus gps;
HardwareSerial gpsSerial(2);
OneWire oneWire(TEMP_PIN);
DallasTemperature tempSensor(&oneWire);

bool mpuOk = false, poxOk = false;
bool firebaseStarted = false, authenticated = false;
volatile bool writeInProgress = false;
unsigned long lastWriteTime = 0;

// Written by the sensor task, read by loop()
volatile float accelX = 0, accelY = 0, accelZ = 0;
volatile float heartRate = 0, spo2 = 0;
volatile int   activityPercent = 0;
volatile unsigned long steps = 0;

// Written by loop()
float temperatureC = 0;
int   batteryPercent = 0;
unsigned long lastTempStart = 0;
bool tempRequested = false;

// ---------------------------------------------------------------------------
// MPU6050 read directly over I2C (no library, works with clone chips too)
// ---------------------------------------------------------------------------
bool mpuInit()
{
  Wire.beginTransmission(MPU_ADDR);
  Wire.write(0x6B);            // PWR_MGMT_1
  Wire.write(0x00);            // wake up
  if (Wire.endTransmission() != 0) return false;

  Wire.beginTransmission(MPU_ADDR);
  Wire.write(0x1C);            // ACCEL_CONFIG
  Wire.write(0x10);            // +/-8 g  (4096 LSB per g)
  return Wire.endTransmission() == 0;
}

bool mpuRead(float &ax, float &ay, float &az)
{
  Wire.beginTransmission(MPU_ADDR);
  Wire.write(0x3B);            // ACCEL_XOUT_H
  if (Wire.endTransmission(false) != 0) return false;
  if (Wire.requestFrom((uint8_t)MPU_ADDR, (uint8_t)6) != 6) return false;

  int16_t rx = (Wire.read() << 8) | Wire.read();
  int16_t ry = (Wire.read() << 8) | Wire.read();
  int16_t rz = (Wire.read() << 8) | Wire.read();

  ax = rx / 4096.0f * 9.81f;   // m/s^2
  ay = ry / 4096.0f * 9.81f;
  az = rz / 4096.0f * 9.81f;
  return true;
}

// ---------------------------------------------------------------------------
// Sensor task: ALL I2C work lives here and runs at higher priority than loop(),
// so Firebase/TLS/WiFi pauses in loop() can no longer starve the MAX30100.
// ---------------------------------------------------------------------------
void sensorTask(void *param)
{
  unsigned long lastMpu = 0;
  bool above = false;

  for (;;)
  {
    if (poxOk)
    {
      pox.update();
      heartRate = pox.getHeartRate();
      spo2      = pox.getSpO2();
    }

    unsigned long now = millis();
    if (mpuOk && now - lastMpu >= 50)
    {
      lastMpu = now;
      float ax, ay, az;
      if (mpuRead(ax, ay, az)) { accelX = ax; accelY = ay; accelZ = az; }

      float mag = sqrtf(accelX * accelX + accelY * accelY + accelZ * accelZ);
      activityPercent = constrain((int)(fabsf(mag - 9.81f) * 20.0f), 0, 100);

      // Steps: one step each time the reading jumps above 12 m/s^2
      if (mag > 12.0f && !above) { steps++; above = true; }
      if (mag < 11.0f) above = false;
    }

    vTaskDelay(1);   // yield 1 ms
  }
}

// ---------------------------------------------------------------------------
void firestoreCallback(AsyncResult &result)
{
  if (result.isError())
  {
    Serial.printf("FIRESTORE ERROR (%d): %s\n", result.error().code(), result.error().message().c_str());
    writeInProgress = false;
  }
  if (result.available())
  {
    Serial.println("Firestore write OK.");
    writeInProgress = false;
  }
}

void addDouble(Document<Values::Value> &doc, const char *name, double v)
{
  Values::DoubleValue val(v);
  doc.add(name, Values::Value(val));
}

void addInt(Document<Values::Value> &doc, const char *name, int v)
{
  Values::IntegerValue val(v);
  doc.add(name, Values::Value(val));
}

void addString(Document<Values::Value> &doc, const char *name, const char *v)
{
  Values::StringValue val(v);
  doc.add(name, Values::Value(val));
}

// ---------------------------------------------------------------------------
void setup()
{
  Serial.begin(115200);
  delay(500);

  Wire.begin(I2C_SDA, I2C_SCL);

  poxOk = pox.begin();
  if (poxOk) pox.setIRLedCurrent(MAX30100_LED_CURR_24MA);
  Serial.println(poxOk ? "MAX30100 ready." : "MAX30100 NOT found");

  Wire.setClock(100000);       // slower, more reliable with two sensors on jumper wires

  mpuOk = mpuInit();
  Serial.println(mpuOk ? "MPU6050 ready." : "MPU6050 NOT found (init failed)");

  tempSensor.begin();
  tempSensor.setWaitForConversion(false);   // non-blocking temperature

  gpsSerial.setRxBufferSize(1024);          // don't lose GPS data while Firebase is busy
  gpsSerial.begin(9600, SERIAL_8N1, GPS_RX, GPS_TX);

  analogReadResolution(12);

  // Start the sensor task on core 1 (same core as loop) with higher priority
  xTaskCreatePinnedToCore(sensorTask, "sensors", 6144, NULL, 2, NULL, 1);

  WiFi.mode(WIFI_STA);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.println("Connecting to Wi-Fi...");
}

// ---------------------------------------------------------------------------
void loop()
{
  while (gpsSerial.available()) gps.encode(gpsSerial.read());

  unsigned long now = millis();

  // Temperature: request, then read ~800 ms later (no waiting)
  if (!tempRequested && now - lastTempStart >= 2000)
  {
    tempSensor.requestTemperatures();
    lastTempStart = now;
    tempRequested = true;
  }
  else if (tempRequested && now - lastTempStart >= 800)
  {
    temperatureC = tempSensor.getTempCByIndex(0);
    tempRequested = false;
  }

  if (WiFi.status() != WL_CONNECTED) { delay(10); return; }

  if (!firebaseStarted)
  {
    set_ssl_client_insecure_and_buffer(ssl_client);
    initializeApp(aClient, app, getAuth(user_auth), auth_debug_print, "authTask");
    app.getApp<Firestore::Documents>(Docs);
    firebaseStarted = true;
  }

  app.loop();
  Docs.loop();

  if (app.ready() && !authenticated)
  {
    authenticated = true;
    Serial.println("Firebase authenticated.");
  }

  if (!authenticated || writeInProgress || now - lastWriteTime < WRITE_INTERVAL_MS) return;
  lastWriteTime = now;

  float v = analogReadMilliVolts(BATTERY_PIN) * 2.0f / 1000.0f;
  batteryPercent = constrain((int)((v - 3.3f) / (4.2f - 3.3f) * 100.0f), 0, 100);

  int act = activityPercent;
  const char *activityStatus = act < 10 ? "Resting" : act < 35 ? "Walking" : act < 70 ? "Active" : "Running";

  double lat = gps.location.lat();
  double lon = gps.location.lng();
#if USE_FALLBACK_LOCATION
  if (!gps.location.isValid()) { lat = FALLBACK_LAT; lon = FALLBACK_LON; }
#endif

  Values::StringValue nameVal(PET_NAME);
  Document<Values::Value> doc("name", Values::Value(nameVal));

  addDouble(doc, "accelX", accelX);
  addDouble(doc, "accelY", accelY);
  addDouble(doc, "accelZ", accelZ);
  addInt   (doc, "activityPercent", act);
  addString(doc, "activityStatus", activityStatus);
  addInt   (doc, "battery", batteryPercent);
  addDouble(doc, "heartRate", heartRate);
  addDouble(doc, "latitude", lat);
  addDouble(doc, "longitude", lon);
  addDouble(doc, "spo2", spo2);
  addInt   (doc, "steps", (int)steps);
  addDouble(doc, "temperature", temperatureC);

  Serial.printf("\naccel %.2f/%.2f/%.2f | act %d%% %s | steps %lu\n",
                (float)accelX, (float)accelY, (float)accelZ, act, activityStatus, (unsigned long)steps);
  Serial.printf("HR %.0f | SpO2 %.0f | Temp %.2f | Batt %d%% | GPS %.5f, %.5f (sats %d)\n",
                (float)heartRate, (float)spo2, temperatureC, batteryPercent, lat, lon, (int)gps.satellites.value());

  writeInProgress = true;

  PatchDocumentOptions options{ DocumentMask(), DocumentMask(), Precondition() };
  Docs.patch(aClient, Firestore::Parent(PROJECT_ID), String("pets/") + PET_ID,
             options, doc, firestoreCallback, "updatePawGuard");
}
