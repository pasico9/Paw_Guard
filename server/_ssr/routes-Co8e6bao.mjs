import { r as __toESM } from "./rolldown-runtime-D7D4PA-g.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as BatteryMedium, d as MapPin, n as Thermometer, p as Heart, u as Moon, w as Activity } from "../_libs/lucide-react.mjs";
import { n as Card, r as MobileShell } from "./router-B9ENSyBs.mjs";
import { n as ProgressRing, r as Sparkline } from "./metrics-Dgju09XR.mjs";
import { t as DogIllustration } from "./dog-illustration-B8d7uv7R.mjs";
import { n as onSnapshot, r as doc } from "../_libs/@firebase/firestore+[...].mjs";
import "../_libs/firebase.mjs";
import { t as database } from "./firebase-CdlH6wMQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Co8e6bao.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const [pet, setPet] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const petRef = doc(database, "pets", "pet1");
		return onSnapshot(petRef, (snapshot) => {
			if (snapshot.exists()) setPet(snapshot.data());
		});
	}, []);
	const heartRate = pet?.heartRate ?? 74;
	const temperature = pet?.temperature ?? 38.4;
	const steps = pet?.steps ?? 4120;
	const activityPercent = pet?.activityPercent ?? 68;
	const sleepHours = pet?.sleepHours ?? 7.7;
	const sleepQuality = pet?.sleepQuality ?? "Deep";
	const battery = pet?.battery ?? 76;
	const wellnessScore = pet?.wellnessScore ?? 92;
	const mood = pet?.mood ?? "Calm · Rested";
	const latitude = pet?.latitude;
	const longitude = pet?.longitude;
	const location = latitude != null && longitude != null ? `${Number(latitude).toFixed(6)}, ${Number(longitude).toFixed(6)}` : pet?.location ?? "Waiting for GPS...";
	const hrHistory = pet?.history?.heartRate ?? [
		72,
		75,
		73,
		78,
		76,
		74,
		74
	];
	const sleepHoursDisplay = `${Math.floor(sleepHours)}h ${Math.round(sleepHours % 1 * 60)}m`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MobileShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "px-7 pt-4 animate-stagger",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "Good afternoon, Tanya"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "font-display text-[32px] leading-[1.1] mt-1 text-foreground",
				children: [
					"Buddy had a",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "italic text-[var(--kombu)]",
						children: "peaceful"
					}),
					" ",
					"morning."
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-4 mt-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative rounded-[28px] bg-[var(--bone)] overflow-hidden h-52",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 grid place-items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DogIllustration, {
						variant: "sleeping",
						className: "w-[86%] h-auto"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute bottom-4 left-5 right-5 flex items-end justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.18em] text-[var(--cafe)]/60",
						children: "Wellness Score"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-4xl text-[var(--cafe)]",
						children: wellnessScore
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] uppercase tracking-[0.18em] text-[var(--cafe)]/60",
							children: "Mood"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-[var(--cafe)]",
							children: mood
						})]
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "px-4 mt-4 grid grid-cols-2 gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "animate-stagger",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Heart rate"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
								className: "w-4 h-4 text-[var(--alert)] animate-heartbeat",
								fill: "currentColor",
								strokeWidth: 1.5
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-3xl mt-2",
							children: [heartRate, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted-foreground ml-1",
								children: "bpm"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 -mx-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkline, {
								data: hrHistory,
								height: 40
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "animate-stagger",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Temperature"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Thermometer, {
								className: "w-4 h-4 text-[var(--moss)]",
								strokeWidth: 1.8
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-3xl mt-2",
							children: [temperature.toFixed(1), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted-foreground ml-1",
								children: "°C"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mt-1",
							children: "Within normal range"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 h-1.5 rounded-full bg-secondary overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-2/3 rounded-full bg-[var(--moss)]" })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "animate-stagger",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Activity"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, {
							className: "w-4 h-4 text-[var(--kombu)]",
							strokeWidth: 1.8
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end gap-3 mt-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressRing, {
							value: activityPercent,
							size: 72,
							stroke: 7,
							color: "var(--kombu)",
							track: "var(--tan)",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-display text-lg",
								children: [activityPercent, "%"]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pb-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Daily goal"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm",
								children: [steps.toLocaleString(), " steps"]
							})]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "animate-stagger",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Sleep quality"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, {
								className: "w-4 h-4 text-[var(--cafe)]",
								strokeWidth: 1.8
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-3xl mt-2",
							children: sleepQuality
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground mt-1",
							children: [sleepHoursDisplay, " · restful"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex gap-1",
							children: [
								.4,
								.7,
								.9,
								1,
								.8,
								.5,
								.3
							].map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex-1 rounded-full bg-[var(--moss)]",
								style: {
									height: 22 * v,
									opacity: .4 + v * .6
								}
							}, i))
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "px-4 mt-3 grid grid-cols-[1.4fr_1fr] gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/gps",
				className: "press",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "relative overflow-hidden h-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Live location"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
								className: "w-4 h-4 text-[var(--gps)]",
								strokeWidth: 1.8
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg mt-1",
							children: location
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: latitude != null && longitude != null ? "GPS coordinates · Live data" : "Waiting for GPS signal"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniMap, {})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Collar"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BatteryMedium, {
						className: "w-4 h-4 text-[var(--moss)]",
						strokeWidth: 1.8
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-display text-3xl mt-2",
					children: [battery, "%"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: "≈ 3 days left"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 rounded-full h-1.5 bg-secondary overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full rounded-full bg-[var(--kombu)]",
						style: { width: `${battery}%` }
					})
				})
			] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-4 mt-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
					children: "Daily wellness summary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xl mt-2 leading-snug",
					children: "Buddy walked 2.4 km, slept deeply, and stayed within safe zones all day."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex items-center justify-between text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-xs",
							children: "Walks"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: "3"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-xs",
							children: "Distance"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: "2.4 km"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-xs",
							children: "Calories"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: "312"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-xs",
							children: "Rest"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: "8h"
						})] })
					]
				})
			] })
		})
	] });
}
function MiniMap() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 200 100",
		className: "mt-3 w-full h-20 rounded-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "200",
				height: "100",
				rx: "14",
				fill: "var(--bone)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M0 60 Q 40 40 80 55 T 200 45",
				stroke: "var(--tan)",
				strokeWidth: "6",
				fill: "none",
				opacity: "0.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M0 30 Q 60 20 120 40 T 200 30",
				stroke: "var(--tan)",
				strokeWidth: "4",
				fill: "none",
				opacity: "0.35"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M20 80 Q 60 60 100 65 T 180 40",
				stroke: "var(--gps)",
				strokeWidth: "2.4",
				fill: "none",
				strokeLinecap: "round",
				strokeDasharray: "600",
				style: { animation: "draw-path 2.6s ease-out forwards" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "180",
					cy: "40",
					r: "14",
					fill: "var(--gps)",
					opacity: "0.2",
					className: "animate-pulse-ring",
					style: { transformOrigin: "180px 40px" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "180",
					cy: "40",
					r: "5",
					fill: "var(--gps)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "180",
					cy: "40",
					r: "2",
					fill: "white"
				})
			] })
		]
	});
}
//#endregion
export { Home as component };
