import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Flame, m as Footprints, s as Route } from "../_libs/lucide-react.mjs";
import { n as Card, r as MobileShell } from "./router-B9ENSyBs.mjs";
import { n as ProgressRing, t as Bars } from "./metrics-Dgju09XR.mjs";
import { t as DogIllustration } from "./dog-illustration-B8d7uv7R.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/activity-Cv2Krl2Z.js
var import_jsx_runtime = require_jsx_runtime();
function ActivityPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileShell, {
		title: "Activity",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-4 space-y-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "flex items-center gap-4 animate-stagger",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressRing, {
							value: 68,
							size: 140,
							stroke: 12,
							color: "var(--kombu)",
							track: "var(--bone)",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-3xl",
									children: "68%"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] uppercase tracking-widest text-muted-foreground",
									children: "of goal"
								})]
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
								children: "Today"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-2xl mt-1 leading-tight",
								children: "A steady, gentle day."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 space-y-1.5 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footprints, { className: "w-4 h-4 text-[var(--kombu)]" }),
										label: "Steps",
										value: "4,120"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, { className: "w-4 h-4 text-[var(--moss)]" }),
										label: "Distance",
										value: "2.4 km"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "w-4 h-4 text-[var(--alert)]" }),
										label: "Calories",
										value: "312 kcal"
									})
								]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-3 gap-3",
					children: [
						{
							label: "Walking",
							value: "1h 12m",
							color: "var(--kombu)"
						},
						{
							label: "Running",
							value: "24m",
							color: "var(--moss)"
						},
						{
							label: "Resting",
							value: "6h",
							color: "var(--tan)"
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "animate-stagger",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] uppercase tracking-widest text-muted-foreground",
								children: s.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xl mt-2",
								children: s.value
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 h-1.5 rounded-full bg-secondary overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full rounded-full",
									style: {
										width: "70%",
										background: s.color
									}
								})
							})
						]
					}, s.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "animate-stagger",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
								children: "This week"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-[var(--kombu)]",
								children: "+18% vs last"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl mt-1",
							children: "14.6 km walked"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bars, {
								data: [
									35,
									48,
									62,
									55,
									70,
									82,
									68
								],
								height: 110
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
					className: "bg-[var(--bone)] flex items-center gap-3 animate-stagger",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DogIllustration, {
						variant: "walking",
						className: "w-28 h-20"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-lg leading-snug",
						children: "Time for an evening stroll?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground mt-1",
						children: "Buddy is 32% away from today's goal."
					})] })]
				})
			]
		})
	});
}
function Row({ icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex items-center gap-2 text-muted-foreground",
			children: [icon, label]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-medium",
			children: value
		})]
	});
}
//#endregion
export { ActivityPage as component };
