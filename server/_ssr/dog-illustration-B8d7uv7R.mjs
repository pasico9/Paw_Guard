import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dog-illustration-B8d7uv7R.js
var import_jsx_runtime = require_jsx_runtime();
function DogIllustration({ className, variant = "resting" }) {
	if (variant === "sleeping") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SleepingDog, { className });
	if (variant === "walking") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WalkingDog, { className });
	if (variant === "sitting") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SittingDog, { className });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RestingDog, { className });
}
var stroke = "var(--kombu)";
function RestingDog({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 320 200",
		className,
		fill: "none",
		stroke,
		strokeWidth: "2.4",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M20 165 Q 160 175 300 165",
			opacity: "0.35",
			strokeDasharray: "2 6"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			className: "animate-breathe",
			style: { transformOrigin: "160px 140px" },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M70 150 Q 80 105 130 100 Q 190 96 230 108 Q 265 118 270 145 Q 272 160 258 162 L 90 162 Q 70 162 70 150 Z",
					fill: "var(--tan)",
					fillOpacity: "0.55"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M110 160 L 110 172 M 138 160 L 138 172 M 226 160 L 226 172 M 250 160 L 250 172" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M268 132 Q 288 118 290 100",
					className: "animate-tail-wag",
					style: { transformOrigin: "268px 132px" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M70 150 Q 40 138 42 108 Q 44 78 78 78 Q 108 78 112 108 Q 112 128 100 138",
					fill: "var(--bone)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M52 82 Q 46 62 62 58 Q 76 60 74 82",
					fill: "var(--moss)",
					fillOpacity: "0.55"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "82",
					cy: "108",
					r: "2.2",
					fill: stroke,
					stroke: "none"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M46 118 Q 40 120 42 124" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "43",
					cy: "120",
					r: "2",
					fill: stroke,
					stroke: "none"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M50 128 Q 62 132 74 128",
					opacity: "0.5"
				})
			]
		})]
	});
}
function SleepingDog({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 320 200",
		className,
		fill: "none",
		stroke,
		strokeWidth: "2.4",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "160",
				cy: "170",
				rx: "130",
				ry: "8",
				fill: "var(--tan)",
				fillOpacity: "0.25",
				stroke: "none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				className: "animate-breathe",
				style: { transformOrigin: "160px 145px" },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M60 158 Q 80 118 150 116 Q 230 114 260 138 Q 275 152 260 162 L 78 162 Q 60 162 60 158 Z",
						fill: "var(--tan)",
						fillOpacity: "0.55"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M60 158 Q 42 152 40 132 Q 40 108 66 106 Q 92 106 96 130",
						fill: "var(--bone)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M48 112 Q 44 96 58 92 Q 68 96 66 110",
						fill: "var(--moss)",
						fillOpacity: "0.5"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M62 128 Q 68 132 74 128" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "42",
						cy: "140",
						r: "1.8",
						fill: stroke,
						stroke: "none"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				stroke,
				opacity: "0.6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M210 90 h 14 l -14 14 h 14" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M232 70 h 10 l -10 10 h 10" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M250 54 h 7 l -7 7 h 7" })
				]
			})
		]
	});
}
function SittingDog({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 240 240",
		className,
		fill: "none",
		stroke,
		strokeWidth: "2.4",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M40 210 Q 120 218 200 210",
			opacity: "0.35",
			strokeDasharray: "2 6"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			className: "animate-breathe",
			style: { transformOrigin: "120px 150px" },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M80 200 Q 70 140 100 118 Q 130 100 158 118 Q 176 132 172 168 Q 168 200 158 204 Z",
					fill: "var(--tan)",
					fillOpacity: "0.55"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M104 180 L 104 206 M 130 180 L 130 206" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M100 118 Q 88 92 104 74 Q 128 60 148 76 Q 162 92 152 116",
					fill: "var(--bone)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M100 82 Q 88 60 104 58 Q 116 66 114 82",
					fill: "var(--moss)",
					fillOpacity: "0.55"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M148 82 Q 160 60 144 58 Q 132 66 134 82",
					fill: "var(--moss)",
					fillOpacity: "0.55"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "116",
					cy: "94",
					r: "1.8",
					fill: stroke,
					stroke: "none"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "138",
					cy: "94",
					r: "1.8",
					fill: stroke,
					stroke: "none"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M124 108 Q 128 112 132 108" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "128",
					cy: "105",
					r: "1.8",
					fill: stroke,
					stroke: "none"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M170 180 Q 196 174 200 156",
					className: "animate-tail-wag",
					style: { transformOrigin: "170px 180px" }
				})
			]
		})]
	});
}
function WalkingDog({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 320 200",
		className,
		fill: "none",
		stroke,
		strokeWidth: "2.4",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M20 170 Q 160 178 300 170",
			opacity: "0.35",
			strokeDasharray: "2 6"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			className: "animate-float-y",
			style: { transformOrigin: "160px 130px" },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M90 155 Q 100 105 160 100 Q 220 96 250 118 Q 268 132 260 150 L 100 158 Q 90 158 90 155 Z",
					fill: "var(--tan)",
					fillOpacity: "0.55"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M110 155 L 108 175 M 140 158 L 148 178 M 220 158 L 216 178 M 245 152 L 252 174" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M90 155 Q 66 150 62 122 Q 62 92 92 88 Q 122 88 128 118 Q 128 138 116 148",
					fill: "var(--bone)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M68 92 Q 60 72 78 68 Q 92 72 90 92",
					fill: "var(--moss)",
					fillOpacity: "0.55"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "94",
					cy: "118",
					r: "2",
					fill: stroke,
					stroke: "none"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "62",
					cy: "132",
					r: "2",
					fill: stroke,
					stroke: "none"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M258 128 Q 282 122 288 100",
					className: "animate-tail-wag",
					style: { transformOrigin: "258px 128px" }
				})
			]
		})]
	});
}
//#endregion
export { DogIllustration as t };
