import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/metrics-Dgju09XR.js
var import_jsx_runtime = require_jsx_runtime();
function ProgressRing({ value, max = 100, size = 120, stroke = 10, color = "var(--kombu)", track = "var(--bone)", children }) {
	const r = (size - stroke) / 2;
	const c = 2 * Math.PI * r;
	const offset = c * (1 - Math.min(1, value / max));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative grid place-items-center",
		style: {
			width: size,
			height: size
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			width: size,
			height: size,
			className: "-rotate-90",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: size / 2,
				cy: size / 2,
				r,
				stroke: track,
				strokeWidth: stroke,
				fill: "none",
				opacity: .45
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: size / 2,
				cy: size / 2,
				r,
				stroke: color,
				strokeWidth: stroke,
				fill: "none",
				strokeLinecap: "round",
				strokeDasharray: c,
				strokeDashoffset: offset,
				style: { transition: "stroke-dashoffset 1.4s cubic-bezier(0.22,1,0.36,1)" }
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 grid place-items-center text-center",
			children
		})]
	});
}
function Sparkline({ data, color = "var(--kombu)", fill = "var(--moss)", height = 60, animate = true }) {
	const w = 300;
	const h = height;
	const min = Math.min(...data);
	const range = Math.max(...data) - min || 1;
	const step = w / (data.length - 1);
	const pts = data.map((v, i) => [i * step, h - (v - min) / range * (h - 8) - 4]);
	const d = pts.reduce((acc, [x, y], i) => {
		if (i === 0) return `M ${x} ${y}`;
		const [px, py] = pts[i - 1];
		const cx = (px + x) / 2;
		return `${acc} Q ${cx} ${py} ${cx} ${(py + y) / 2} T ${x} ${y}`;
	}, "");
	const area = `${d} L ${w} ${h} L 0 ${h} Z`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: `0 0 ${w} ${h}`,
		className: "w-full",
		preserveAspectRatio: "none",
		style: { height },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "spark-fill",
				x1: "0",
				x2: "0",
				y1: "0",
				y2: "1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "0%",
					stopColor: fill,
					stopOpacity: "0.35"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "100%",
					stopColor: fill,
					stopOpacity: "0"
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: area,
				fill: "url(#spark-fill)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d,
				fill: "none",
				stroke: color,
				strokeWidth: "2.4",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				style: animate ? {
					strokeDasharray: 800,
					animation: "draw-path 2.2s ease-out forwards"
				} : void 0
			})
		]
	});
}
function Bars({ data, color = "var(--moss)", height = 90 }) {
	const max = Math.max(...data);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-end gap-2",
		style: { height },
		children: data.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex-1 flex flex-col items-center gap-1.5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-full rounded-full animate-stagger",
				style: {
					height: `${v / max * (height - 20)}px`,
					background: color,
					opacity: i === data.length - 1 ? 1 : .55,
					animationDelay: `${i * 60}ms`
				}
			})
		}, i))
	});
}
//#endregion
export { ProgressRing as n, Sparkline as r, Bars as t };
