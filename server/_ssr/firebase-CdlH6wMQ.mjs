import { o as initializeApp } from "../_libs/@firebase/app+[...].mjs";
import { i as getFirestore } from "../_libs/@firebase/firestore+[...].mjs";
import "../_libs/firebase.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/firebase-CdlH6wMQ.js
var app = initializeApp({
	apiKey: "AIzaSyDyM7VWEyOk6xLSieQ9YatR2z0bYUJEgw",
	authDomain: "pawguard-cd1d4.firebaseapp.com",
	projectId: "pawguard-cd1d4",
	storageBucket: "pawguard-cd1d4.firebasestorage.app",
	messagingSenderId: "563408530669",
	appId: "1:563408530669:web:b7521b4c4008b8df87f0e4",
	measurementId: "G-MQZ4WJF2Z5"
});
var database = getFirestore(app);
//#endregion
export { database as t };
