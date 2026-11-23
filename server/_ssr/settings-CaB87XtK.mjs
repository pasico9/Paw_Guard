import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { S as BatteryMedium, _ as Cpu, b as Bluetooth, c as Phone, g as Download, r as Stethoscope, t as Wifi, u as Moon, x as Bell, y as ChevronRight } from "../_libs/lucide-react.mjs";
import { n as Card, r as MobileShell } from "./router-B9ENSyBs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/settings-CaB87XtK.js
var import_jsx_runtime = require_jsx_runtime();
function SettingsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileShell, {
		title: "Settings",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-4 space-y-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "flex items-center gap-4 animate-stagger",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-16 h-16 rounded-full bg-[var(--bone)] grid place-items-center overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-2xl text-[var(--cafe)]",
								children: "B"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xl",
								children: "Buddy"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Golden Retriever · 4 years · 28 kg"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-4 h-4 text-muted-foreground" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "animate-stagger",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-10 h-10 rounded-full bg-[var(--kombu)]/10 grid place-items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "w-4 h-4 text-[var(--kombu)]" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: "PetGuard Collar"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "v2.4.1 · Connected"
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-[var(--moss)] animate-heartbeat" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 grid grid-cols-3 gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniStat, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BatteryMedium, { className: "w-3.5 h-3.5" }),
								label: "Battery",
								value: "76%"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniStat, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bluetooth, { className: "w-3.5 h-3.5" }),
								label: "Signal",
								value: "Strong"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniStat, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wifi, { className: "w-3.5 h-3.5" }),
								label: "Sync",
								value: "Live"
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionList, {
					title: "Care",
					items: [
						{
							icon: Stethoscope,
							label: "Veterinarian",
							meta: "Dr. Alvarez"
						},
						{
							icon: Phone,
							label: "Emergency contacts",
							meta: "2 saved"
						},
						{
							icon: Download,
							label: "Health history",
							meta: "Export"
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionList, {
					title: "Preferences",
					items: [
						{
							icon: Bell,
							label: "Notifications",
							meta: "Calm mode"
						},
						{
							icon: Moon,
							label: "Appearance",
							meta: "System"
						},
						{
							icon: Download,
							label: "Firmware updates",
							meta: "Automatic"
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-[11px] text-muted-foreground pt-2",
					children: "PetGuard · Made with care for Buddy"
				})
			]
		})
	});
}
function MiniStat({ icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl bg-secondary/60 p-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-1.5 text-muted-foreground text-[10px] uppercase tracking-widest",
			children: [icon, label]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-lg mt-1",
			children: value
		})]
	});
}
function SectionList({ title, items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "animate-stagger",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			className: "!p-0 divide-y divide-border",
			children: items.map((it) => {
				const Icon = it.icon;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "press w-full flex items-center gap-3 px-5 py-4 text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-9 h-9 rounded-full bg-[var(--bone)] grid place-items-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "w-4 h-4 text-[var(--kombu)]",
								strokeWidth: 1.8
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex-1 min-w-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium truncate",
								children: it.label
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground",
							children: it.meta
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-4 h-4 text-muted-foreground" })
					]
				}, it.label);
			})
		})]
	});
}
//#endregion
export { SettingsPage as component };
