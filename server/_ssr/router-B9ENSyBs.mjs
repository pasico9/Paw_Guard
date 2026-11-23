import { r as __toESM, t as __exportAll } from "./rolldown-runtime-D7D4PA-g.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, v as createFileRoute, x as useRouter, y as createRootRouteWithContext } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { C as ArrowLeft, a as Shield, d as MapPin, f as House, m as Footprints, o as Settings, p as Heart, u as Moon, v as CircleAlert, w as Activity, x as Bell } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-B9ENSyBs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-Bb_f51Ha.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1, viewport-fit=cover"
			},
			{
				name: "theme-color",
				content: "#E5D7C4"
			},
			{ title: "PetGuard — Premium wellness for your dog" },
			{
				name: "description",
				content: "PetGuard is a premium smart-collar companion app for real-time health, activity, and location wellbeing."
			},
			{
				name: "author",
				content: "PetGuard"
			},
			{
				property: "og:title",
				content: "PetGuard — Premium wellness for your dog"
			},
			{
				property: "og:description",
				content: "Real-time heart rate, temperature, sleep and location — quietly, beautifully."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$4 = () => import("./routes-Co8e6bao.mjs");
var Route$6 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "PetGuard — A calmer way to care for your dog" },
		{
			name: "description",
			content: "PetGuard is a premium smart-collar companion app for real-time health, activity, and location wellbeing."
		},
		{
			property: "og:title",
			content: "PetGuard — A calmer way to care for your dog"
		},
		{
			property: "og:description",
			content: "Real-time heart rate, temperature, sleep and location — quietly, beautifully."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./activity-Cv2Krl2Z.mjs");
var Route$5 = createFileRoute("/activity")({
	head: () => ({ meta: [{ title: "Activity · PetGuard" }, {
		name: "description",
		content: "Walks, rest and daily activity goals for your dog."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./gps-DL4EAJbW.mjs");
var Route$4 = createFileRoute("/gps")({
	head: () => ({ meta: [{ title: "Location · PetGuard" }, {
		name: "description",
		content: "Live GPS tracking, safe zones and route history for your dog."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./health-QvYCpyok.mjs");
var Route$3 = createFileRoute("/health")({
	head: () => ({ meta: [{ title: "Health · PetGuard" }, {
		name: "description",
		content: "Heart rate, temperature, sleep and wellness trends for your dog."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var nav = [
	{
		to: "/",
		label: "Home",
		icon: House
	},
	{
		to: "/health",
		label: "Health",
		icon: Heart
	},
	{
		to: "/gps",
		label: "Location",
		icon: MapPin
	},
	{
		to: "/activity",
		label: "Activity",
		icon: Activity
	},
	{
		to: "/settings",
		label: "Settings",
		icon: Settings
	}
];
function MobileShell({ children, title, showBell = true }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen w-full flex justify-center bg-[var(--muted)] py-0 sm:py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-[440px] min-h-screen sm:min-h-[900px] bg-background sm:rounded-[40px] sm:shadow-[0_30px_80px_-30px_oklch(0.3_0.04_70/0.25)] overflow-hidden relative flex flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between px-7 pt-4 pb-1 text-[11px] tracking-wider text-foreground/70",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "9:41" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1 h-1 rounded-full bg-foreground/70" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1 h-1 rounded-full bg-foreground/70" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1 h-1 rounded-full bg-foreground/40" })
						]
					})]
				}),
				title && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "px-7 pt-4 pb-2 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl",
						children: title
					}), showBell && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/notifications",
						className: "press relative w-11 h-11 rounded-full bg-secondary grid place-items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, {
							className: "w-[18px] h-[18px] text-foreground",
							strokeWidth: 1.8
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-2.5 right-3 w-1.5 h-1.5 rounded-full bg-[var(--alert)]" })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1 pb-28",
					children
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "absolute bottom-3 left-3 right-3 rounded-full bg-[var(--kombu)] text-[var(--bone)] px-3 py-2.5 flex items-center justify-between shadow-[0_20px_50px_-15px_oklch(0.3_0.04_70/0.4)]",
					children: nav.map((n) => {
						const active = pathname === n.to;
						const Icon = n.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: n.to,
							className: `press relative flex items-center gap-2 rounded-full px-3 py-2 transition-all ${active ? "bg-[var(--bone)] text-[var(--kombu)]" : "text-[var(--bone)]/80"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "w-[18px] h-[18px]",
								strokeWidth: 1.8
							}), active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-medium",
								children: n.label
							})]
						}, n.to);
					})
				})
			]
		})
	});
}
function Card({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `card-elevated p-5 ${className}`,
		children
	});
}
var Route$2 = createFileRoute("/notifications")({
	head: () => ({ meta: [{ title: "Notifications · PetGuard" }, {
		name: "description",
		content: "Calm, thoughtful updates about your dog's day."
	}] }),
	component: NotificationsPage
});
var items = [
	{
		icon: CircleAlert,
		tone: "alert",
		title: "A gentle check-in",
		body: "Buddy's heart rate appears higher than usual. Please check on them.",
		time: "just now"
	},
	{
		icon: Footprints,
		tone: "moss",
		title: "A lovely walk",
		body: "Buddy enjoyed a healthy walk in Willow Park today.",
		time: "1h ago"
	},
	{
		icon: Moon,
		tone: "cafe",
		title: "Resting peacefully",
		body: "Buddy is deep asleep in the living room.",
		time: "3h ago"
	},
	{
		icon: Shield,
		tone: "kombu",
		title: "Everything looks normal",
		body: "All vitals are steady and within Buddy's healthy range.",
		time: "This morning"
	},
	{
		icon: Heart,
		tone: "moss",
		title: "Weekly summary ready",
		body: "Buddy had a wonderful week — activity up by 18%.",
		time: "Yesterday"
	}
];
function NotificationsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MobileShell, {
		showBell: false,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-7 pt-2 flex items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "press w-11 h-11 rounded-full bg-secondary grid place-items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "w-4 h-4" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl",
					children: "Updates"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-11" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "px-4 mt-4 space-y-2.5",
			children: items.map((n, i) => {
				const Icon = n.icon;
				const isAlert = n.tone === "alert";
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "flex gap-3 animate-stagger",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-11 h-11 rounded-full grid place-items-center shrink-0",
						style: { background: isAlert ? "oklch(0.58 0.13 25 / 0.12)" : "var(--bone)" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "w-4 h-4",
							style: { color: isAlert ? "var(--alert)" : `var(--${n.tone})` },
							strokeWidth: 1.8
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium truncate",
								children: n.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] text-muted-foreground shrink-0",
								children: n.time
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground mt-1 leading-snug",
							children: n.body
						})]
					})]
				}, i);
			})
		})]
	});
}
var $$splitComponentImporter = () => import("./settings-CaB87XtK.mjs");
var Route$1 = createFileRoute("/settings")({
	head: () => ({ meta: [{ title: "Settings · PetGuard" }, {
		name: "description",
		content: "Manage collar, connectivity, veterinarian and notifications."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$6.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	ActivityRoute: Route$5.update({
		id: "/activity",
		path: "/activity",
		getParentRoute: () => Route$7
	}),
	GpsRoute: Route$4.update({
		id: "/gps",
		path: "/gps",
		getParentRoute: () => Route$7
	}),
	HealthRoute: Route$3.update({
		id: "/health",
		path: "/health",
		getParentRoute: () => Route$7
	}),
	NotificationsRoute: Route$2.update({
		id: "/notifications",
		path: "/notifications",
		getParentRoute: () => Route$7
	}),
	SettingsRoute: Route$1.update({
		id: "/settings",
		path: "/settings",
		getParentRoute: () => Route$7
	})
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { Card as n, MobileShell as r, router_exports as t };
