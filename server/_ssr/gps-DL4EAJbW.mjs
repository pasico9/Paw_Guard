import { r as __toESM } from "./rolldown-runtime-D7D4PA-g.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as Shield, d as MapPin, l as Navigation } from "../_libs/lucide-react.mjs";
import { n as Card, r as MobileShell } from "./router-B9ENSyBs.mjs";
import { n as onSnapshot, r as doc } from "../_libs/@firebase/firestore+[...].mjs";
import "../_libs/firebase.mjs";
import { t as database } from "./firebase-CdlH6wMQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gps-DL4EAJbW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function GPS() {
	const [pet, setPet] = (0, import_react.useState)(null);
	const [gpsError, setGpsError] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const petRef = doc(database, "pets", "pet1");
		return onSnapshot(petRef, (snapshot) => {
			if (snapshot.exists()) {
				setPet(snapshot.data());
				setGpsError(false);
			}
		}, (error) => {
			console.error("Firestore location error:", error);
			setGpsError(true);
		});
	}, []);
	const latitude = pet?.latitude;
	const longitude = pet?.longitude;
	const hasGPS = latitude != null && longitude != null && Number.isFinite(Number(latitude)) && Number.isFinite(Number(longitude));
	const coordinates = hasGPS ? `${Number(latitude).toFixed(6)}, ${Number(longitude).toFixed(6)}` : "Waiting for GPS signal";
	const mapsUrl = hasGPS ? `https://www.google.com/maps?q=${latitude},${longitude}` : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileShell, {
		title: "Location",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative rounded-[28px] overflow-hidden h-[420px] bg-[var(--bone)] animate-stagger",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapCanvas, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute top-4 left-4 right-4 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-full bg-background/90 backdrop-blur px-4 py-2 text-xs flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `w-2 h-2 rounded-full ${hasGPS && !gpsError ? "bg-[var(--moss)] animate-heartbeat" : "bg-muted-foreground"}` }), gpsError ? "Connection error" : hasGPS ? "Live · GPS connected" : "Waiting for GPS"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "press w-10 h-10 rounded-full bg-background/90 backdrop-blur grid place-items-center disabled:opacity-40",
							onClick: () => {
								if (mapsUrl) window.open(mapsUrl, "_blank", "noopener,noreferrer");
							},
							disabled: !hasGPS,
							"aria-label": "Open current location in Google Maps",
							title: "Open in Google Maps",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "w-4 h-4 text-[var(--kombu)]" })
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "-mt-8 relative z-10 mx-2 animate-stagger",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-10 h-1 bg-border rounded-full mx-auto mb-3" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
										children: "Current location"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-xl mt-1 break-words",
										children: coordinates
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground mt-1",
										children: gpsError ? "Unable to load location data" : hasGPS ? "Live coordinates from your GPS sensor" : "Waiting for location data from Firebase"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex shrink-0 items-center gap-1 rounded-full bg-[var(--moss)]/15 text-[var(--kombu)] px-3 py-1.5 text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "w-3.5 h-3.5" }), "GPS"]
							})]
						}),
						hasGPS && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: mapsUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-block mt-4 text-sm text-[var(--gps)] underline",
							children: "View coordinates on Google Maps"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-3 text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
						children: "Safe zones"
					}), [
						{
							name: "Home",
							note: "Radius 40 m",
							active: true
						},
						{
							name: "Willow Park",
							note: "Radius 120 m",
							active: true
						},
						{
							name: "Vet clinic",
							note: "Radius 25 m",
							active: false
						}
					].map((zone) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "flex items-center justify-between !py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-10 h-10 rounded-full bg-[var(--bone)] grid place-items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-4 h-4 text-[var(--kombu)]" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: zone.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: zone.note
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, { on: zone.active })]
					}, zone.name))]
				})
			]
		})
	});
}
function Toggle({ on }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `w-10 h-6 rounded-full p-0.5 transition-colors ${on ? "bg-[var(--kombu)]" : "bg-border"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `w-5 h-5 rounded-full bg-background transition-transform ${on ? "translate-x-4" : ""}` })
	});
}
function MapCanvas() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 400 420",
		className: "absolute inset-0 w-full h-full",
		"aria-label": "Decorative map illustration",
		role: "img",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pattern", {
				id: "gps-grid",
				width: "40",
				height: "40",
				patternUnits: "userSpaceOnUse",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M 40 0 L 0 0 0 40",
					fill: "none",
					stroke: "var(--tan)",
					strokeWidth: "0.5",
					opacity: "0.4"
				})
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "400",
				height: "420",
				fill: "var(--bone)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "400",
				height: "420",
				fill: "url(#gps-grid)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M0 260 Q 120 240 220 280 T 400 260",
				stroke: "var(--tan)",
				strokeWidth: "24",
				fill: "none",
				opacity: "0.65",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M120 0 Q 130 160 100 280 T 140 420",
				stroke: "var(--tan)",
				strokeWidth: "18",
				fill: "none",
				opacity: "0.55",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M300 0 Q 280 100 320 200 T 300 420",
				stroke: "var(--tan)",
				strokeWidth: "16",
				fill: "none",
				opacity: "0.5",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M180 80 Q 260 60 320 110 Q 360 170 320 220 Q 240 250 180 210 Q 130 160 180 80 Z",
				fill: "var(--moss)",
				opacity: "0.28"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "240",
				y: "160",
				fontFamily: "Fraunces",
				fontSize: "14",
				fill: "var(--kombu)",
				opacity: "0.6",
				textAnchor: "middle",
				children: "Willow Park"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "250",
				cy: "170",
				r: "80",
				fill: "var(--gps)",
				opacity: "0.06"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "250",
				cy: "170",
				r: "80",
				fill: "none",
				stroke: "var(--gps)",
				strokeWidth: "1.5",
				strokeDasharray: "4 6",
				opacity: "0.55"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 360 Q 130 320 160 280 Q 190 230 220 210 Q 245 190 250 170",
				stroke: "var(--gps)",
				strokeWidth: "3.2",
				fill: "none",
				strokeLinecap: "round",
				strokeDasharray: "700",
				style: { animation: "draw-path 3s ease-out forwards" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				transform: "translate(80,360)",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					r: "8",
					fill: "var(--cafe)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					r: "3",
					fill: "white"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "94",
				y: "356",
				fontSize: "10",
				fill: "var(--cafe)",
				fontFamily: "Inter",
				children: "Home"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				transform: "translate(250,170)",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						r: "26",
						fill: "var(--gps)",
						opacity: "0.15",
						className: "animate-pulse-ring",
						style: { transformOrigin: "0 0" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						r: "14",
						fill: "var(--gps)",
						opacity: "0.25"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						r: "9",
						fill: "var(--gps)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						r: "3",
						fill: "white"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "266",
				y: "168",
				fontSize: "11",
				fill: "var(--kombu)",
				fontFamily: "Inter",
				fontWeight: "500",
				children: "Buddy"
			})
		]
	});
}
//#endregion
export { GPS as component };
