import { r as __toESM } from "./rolldown-runtime-D7D4PA-g.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { i as Sparkles, n as Thermometer, p as Heart } from "../_libs/lucide-react.mjs";
import { n as Card, r as MobileShell } from "./router-B9ENSyBs.mjs";
import { n as ProgressRing, r as Sparkline, t as Bars } from "./metrics-Dgju09XR.mjs";
import { r as doc, t as getDoc } from "../_libs/@firebase/firestore+[...].mjs";
import "../_libs/firebase.mjs";
import { t as database } from "./firebase-CdlH6wMQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/health-QvYCpyok.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Health() {
	const [pet, setPet] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const loadPet = async () => {
			const snapshot = await getDoc(doc(database, "pets", "pet1"));
			if (snapshot.exists()) setPet(snapshot.data());
		};
		loadPet();
	}, []);
	const wellness = pet?.wellnessScore ?? 92;
	const heartRate = pet?.heartRate ?? 74;
	const temperature = pet?.temperature ?? 38.4;
	const spo2 = pet?.spo2 ?? 98;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileShell, {
		title: "Health",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-4 space-y-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "flex items-center gap-5 animate-stagger",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressRing, {
						value: wellness,
						size: 120,
						stroke: 10,
						color: "var(--kombu)",
						track: "var(--bone)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-3xl",
								children: wellness
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] uppercase tracking-widest text-muted-foreground",
								children: "score"
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
							children: "Wellness"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl mt-1",
							children: "Thriving"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground mt-1 leading-snug",
							children: "All vitals are steady and within Buddy's healthy range."
						})
					] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "animate-stagger",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
								children: "Heart rate"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-display text-3xl mt-1",
								children: [
									heartRate,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-muted-foreground",
										children: "bpm · resting"
									})
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
								className: "w-6 h-6 text-[var(--alert)] animate-heartbeat",
								fill: "currentColor",
								strokeWidth: 1.5
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkline, {
								data: [
									64,
									68,
									70,
									72,
									78,
									74,
									70,
									68,
									66,
									70,
									74,
									72,
									76,
									80,
									78,
									74,
									70,
									heartRate
								],
								height: 90
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex justify-between text-[11px] text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "6 AM" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "12 PM" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "6 PM" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Now" })
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "animate-stagger",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
							children: "Body temperature"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-3xl mt-1",
							children: [
								temperature,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm text-muted-foreground",
									children: "°C"
								})
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Thermometer, {
							className: "w-6 h-6 text-[var(--moss)]",
							strokeWidth: 1.6
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 rounded-full bg-gradient-to-r from-[var(--gps)]/40 via-[var(--moss)] to-[var(--alert)]/60" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-1 left-[55%] w-4 h-4 rounded-full bg-background border-2 border-[var(--kombu)] shadow" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-[10px] text-muted-foreground mt-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "37.0" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "38.5" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "40.0" })
								]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "animate-stagger",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
							children: "SpO₂"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-[var(--kombu)]",
							children: "Current reading"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-3xl mt-1",
						children: [
							spo2,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted-foreground",
								children: "%"
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "animate-stagger",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
								children: "Weekly activity"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-[var(--kombu)]",
								children: "+12% vs last week"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl mt-1",
							children: "Consistent pace"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bars, {
								data: [
									42,
									55,
									68,
									72,
									65,
									78,
									84
								],
								height: 100
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 flex justify-between text-[11px] text-muted-foreground",
							children: [
								"M",
								"T",
								"W",
								"T",
								"F",
								"S",
								"S"
							].map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: d }, i))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "bg-[var(--kombu)] text-[var(--bone)] animate-stagger",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
								className: "w-4 h-4",
								strokeWidth: 1.8
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] uppercase tracking-[0.18em] opacity-70",
								children: "Insight"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl mt-2 leading-snug",
							children: "Buddy's evening walks are lifting his mood scores. Consider one more short outing this week."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "press mt-4 text-sm rounded-full bg-[var(--bone)] text-[var(--kombu)] px-4 py-2",
							children: "See recommendations"
						})
					]
				})
			]
		})
	});
}
//#endregion
export { Health as component };
