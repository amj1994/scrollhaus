import { n as __toESM } from "../_runtime.mjs";
import { i as performance_default } from "../_libs/h3-v2+rou3+srvx+unenv.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as Lenis } from "../_libs/lenis.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Dg_u8qRj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useSmoothScroll() {
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const lenis = new Lenis({
			duration: 1.1,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			smoothWheel: true
		});
		let raf = 0;
		const tick = (time) => {
			lenis.raf(time);
			raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => {
			cancelAnimationFrame(raf);
			lenis.destroy();
		};
	}, []);
}
var logoHeader = "https://qclay.design/lovable/shyen/logo-header.svg";
var headerVideo = "/hero-video.mp4";
var avatar = "https://qclay.design/lovable/shyen/header_elipse.png";
var logoBottom$1 = "https://qclay.design/lovable/shyen/logo_bottom.svg";
var leftBg = "https://qclay.design/lovable/shyen/left.png";
var EASE$2 = "cubic-bezier(0.22, 1, 0.36, 1)";
function Hero() {
	const [mounted, setMounted] = (0, import_react.useState)(false);
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const id = requestAnimationFrame(() => setMounted(true));
		return () => cancelAnimationFrame(id);
	}, []);
	const menuItems = [
		{
			label: "Home",
			href: "#"
		},
		{
			label: "Features",
			href: "#features"
		},
		{
			label: "How it works",
			href: "#how"
		},
		{
			label: "Stories",
			href: "#stories"
		},
		{
			label: "Contact",
			href: "#contact"
		}
	];
	const T = {
		video: 0,
		nav: 960,
		logo: 1500,
		burger2: 1620,
		cta: 1700,
		heading: 1900,
		paragraph: 2800,
		form: 3300,
		avatar: 4e3,
		testimonial: 4250,
		labels: 4600
	};
	const headingWords = [
		"Your",
		"mind",
		"never",
		"gonna",
		"stop."
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "hero-section relative w-full h-screen overflow-hidden bg-[#091814]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute z-0",
				style: {
					width: "1808px",
					height: "1808px",
					borderRadius: "1808px",
					background: "linear-gradient(325deg, #375B39 59.55%, #FAFF67 93.35%)",
					filter: "blur(150px)",
					left: "-300px",
					top: "-500px"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes heroFormPulse {
          0%   { opacity: 0; transform: scale(0.85); }
          60%  { opacity: 1; transform: scale(1.04); }
          100% { opacity: 1; transform: scale(1); }
        }
      ` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 grid h-full grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative h-full",
					style: {
						backgroundImage: `url(${leftBg})`,
						backgroundSize: "cover",
						backgroundPosition: "center"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute left-10 bottom-12 right-[133px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-white",
								style: {
									fontFamily: "Halant, serif",
									fontSize: "96px",
									fontWeight: 400,
									lineHeight: "80px",
									letterSpacing: "-7.68px"
								},
								children: [headingWords.slice(0, 3), headingWords.slice(3)].map((line, li) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: { display: "block" },
									children: line.map((w, wi) => {
										const idx = li === 0 ? wi : 3 + wi;
										const delay = T.heading + idx * 110;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											style: {
												display: "inline-block",
												paddingBottom: "0.15em",
												paddingTop: "0.1em",
												marginRight: wi === line.length - 1 ? 0 : "0.18em"
											},
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												style: {
													display: "inline-block",
													opacity: mounted ? 1 : 0,
													transform: mounted ? "translateY(0)" : "translateY(35px)",
													transition: `opacity 0.8s ${EASE$2} ${delay}ms, transform 0.9s ${EASE$2} ${delay}ms`
												},
												children: w
											})
										}, wi);
									})
								}, li))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-white/70",
								style: {
									fontFamily: "Geist, sans-serif",
									fontSize: "20px",
									lineHeight: "26px",
									letterSpacing: "-0.4px"
								},
								children: [
									"Shyen is 24/7 support for your mind. Created by",
									"renowned clinicians, it gives you the support you need,",
									"right when you need it."
								].map((line, i) => {
									const delay = T.paragraph + i * 100;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: {
											display: "block",
											opacity: mounted ? 1 : 0,
											transform: mounted ? "translateY(0)" : "translateY(20px)",
											transition: `opacity 0.7s ${EASE$2} ${delay}ms, transform 0.7s ${EASE$2} ${delay}ms`
										},
										children: line
									}, i);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								className: "mt-8 flex items-center justify-between",
								style: {
									width: "583px",
									padding: "7px 8px 7px 7px",
									borderRadius: "58px",
									background: "rgba(0, 0, 0, 0.16)",
									backdropFilter: "blur(15px)",
									WebkitBackdropFilter: "blur(15px)",
									transformOrigin: "left center",
									opacity: mounted ? 1 : 0,
									animation: mounted ? `heroFormPulse 0.7s ${EASE$2} ${T.form}ms both` : "none"
								},
								onSubmit: (e) => e.preventDefault(),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "email",
									placeholder: "Enter your email address",
									className: "flex-1 bg-transparent border-0 outline-none px-5 text-white placeholder:text-white/40",
									style: {
										fontFamily: "Geist, sans-serif",
										fontSize: "18px",
										lineHeight: "20px",
										letterSpacing: "-0.18px"
									}
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillButton, { children: "Join waitlist" })]
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative h-full overflow-hidden",
					style: {
						clipPath: mounted ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
						WebkitClipPath: mounted ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
						transition: `clip-path 1.2s ${EASE$2}, -webkit-clip-path 1.2s ${EASE$2}`
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
							className: "absolute inset-0 h-full w-full object-cover",
							style: { objectPosition: "center 33%" },
							src: headerVideo,
							poster: "/hero-poster.webp",
							autoPlay: true,
							muted: true,
							loop: true,
							playsInline: true,
							preload: "auto"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"aria-hidden": true,
							className: "pointer-events-none absolute z-10",
							style: {
								left: 0,
								right: 0,
								bottom: 0,
								top: "calc(100% - 246px)",
								background: "linear-gradient(179deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.06) 80%)",
								backdropFilter: "blur(8px)",
								WebkitBackdropFilter: "blur(8px)",
								maskImage: "linear-gradient(to bottom, transparent 0%, black 30%)",
								WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 30%)"
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute z-20",
							style: {
								top: "59px",
								right: "40px",
								opacity: mounted ? 1 : 0,
								transform: mounted ? "translateY(0)" : "translateY(15px)",
								transition: `opacity 0.5s ${EASE$2} ${T.cta}ms, transform 0.5s ${EASE$2} ${T.cta}ms`
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillButton, { children: "Join waitlist" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute z-20 flex flex-col items-end",
							style: {
								right: "40px",
								bottom: "48px",
								gap: "8px"
							},
							children: [
								"AI Meditation",
								"Full Body syncing",
								"AI and Data into actions"
							].map((t, i) => {
								const delay = T.labels + i * 120;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-white",
									style: {
										display: "flex",
										height: "40px",
										padding: "8px 18px",
										justifyContent: "center",
										alignItems: "center",
										gap: "8px",
										borderRadius: "48px",
										background: "rgba(17, 33, 21, 0.20)",
										backdropFilter: "blur(15px)",
										WebkitBackdropFilter: "blur(15px)",
										fontFamily: "Geist, sans-serif",
										fontSize: "16px",
										lineHeight: "normal",
										letterSpacing: "-0.32px",
										transformOrigin: "left center",
										opacity: mounted ? 1 : 0,
										transform: mounted ? "scaleX(1)" : "scaleX(0)",
										transition: `opacity 0.5s ${EASE$2} ${delay}ms, transform 0.7s ${EASE$2} ${delay}ms`
									},
									children: t
								}, t);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute z-20",
							style: {
								left: "40px",
								bottom: "246px",
								width: "390px",
								opacity: mounted ? 1 : 0,
								transform: mounted ? "translate(0, 0)" : "translate(-40px, 40px)",
								transition: `opacity 0.9s ${EASE$2} ${T.testimonial}ms, transform 1s ${EASE$2} ${T.testimonial}ms`
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									padding: "20px",
									borderRadius: "24px",
									background: "rgba(17, 33, 21, 0.24)",
									boxShadow: "0 0 10px 0 rgba(17, 33, 21, 0.13) inset",
									backdropFilter: "blur(5px)",
									WebkitBackdropFilter: "blur(5px)"
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-white",
									style: {
										fontFamily: "Geist, sans-serif",
										fontSize: "18px",
										lineHeight: "20px",
										letterSpacing: "-0.36px"
									},
									children: "\"This helped me organize my thoughts when I felt overwhelmed, and finally had a place to express myself without fear of judgment.\""
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex items-center gap-3",
								style: {
									opacity: mounted ? 1 : 0,
									transform: mounted ? "translateX(0)" : "translateX(30px)",
									transition: `opacity 0.7s ${EASE$2} ${T.avatar}ms, transform 0.7s ${EASE$2} ${T.avatar}ms`
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-9 w-9",
									style: {
										borderRadius: "36px",
										border: "1px solid rgba(255, 255, 255, 0.61)",
										backgroundImage: `url(${avatar})`,
										backgroundSize: "cover",
										backgroundPosition: "center"
									}
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-white",
									style: {
										fontFamily: "Halant, serif",
										fontSize: "20px",
										lineHeight: "20px",
										letterSpacing: "-0.4px"
									},
									children: "Lara simon"
								})]
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute z-30 flex items-center gap-4",
				style: {
					left: "calc(50% + 40px)",
					bottom: "48px",
					opacity: mounted ? 1 : 0,
					transform: mounted ? "translateX(0)" : "translateX(-30px)",
					transition: `opacity 0.7s ${EASE$2} ${T.avatar}ms, transform 0.7s ${EASE$2} ${T.avatar}ms`
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: logoBottom$1,
					alt: "",
					style: {
						width: "25.102px",
						height: "25.097px",
						opacity: .4,
						animation: "spin 12s linear infinite"
					}
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-[6px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block rounded-full",
							style: {
								width: "10px",
								height: "10px",
								background: "#FFF",
								animation: "loaderPulse 1.8s ease-in-out infinite",
								animationDelay: "0s"
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block rounded-full",
							style: {
								width: "8px",
								height: "8px",
								background: "#FFF",
								animation: "loaderPulse 1.8s ease-in-out infinite",
								animationDelay: "0.6s"
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block rounded-full",
							style: {
								width: "6px",
								height: "6px",
								background: "#FFF",
								animation: "loaderPulse 1.8s ease-in-out infinite",
								animationDelay: "1.2s"
							}
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "absolute z-30 flex items-center justify-between",
				style: {
					top: "40px",
					left: "40px",
					width: "676px",
					padding: "16px 20px",
					borderRadius: "16px",
					background: "rgba(17, 33, 21, 0.20)",
					backdropFilter: "blur(15px)",
					WebkitBackdropFilter: "blur(15px)",
					transformOrigin: "left center",
					transform: mounted ? "scaleX(1)" : "scaleX(0)",
					transition: `transform 0.7s ${EASE$2} ${T.nav}ms`
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: logoHeader,
					alt: "Shyen",
					className: "h-[26px] w-auto",
					style: {
						opacity: mounted ? 1 : 0,
						transform: mounted ? "translateY(0)" : "translateY(10px)",
						transition: `opacity 0.6s ${EASE$2} ${T.logo}ms, transform 0.6s ${EASE$2} ${T.logo}ms`
					}
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						"aria-label": "Menu",
						"aria-expanded": menuOpen,
						onClick: () => setMenuOpen((v) => !v),
						className: "relative flex items-center justify-center w-7 h-7 cursor-pointer",
						style: {
							transform: menuOpen ? "scale(0.94)" : "scale(1)",
							transition: `transform 0.25s ${EASE$2}`
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute",
								style: {
									top: "50%",
									left: "50%",
									width: "20px",
									height: "2px",
									borderRadius: "2px",
									background: "#FFF",
									transformOrigin: "50% 50%",
									backfaceVisibility: "hidden",
									transform: mounted ? menuOpen ? "translate(-50%, -50%) rotate(45deg)" : "translate(-50%, calc(-50% - 6px))" : "translate(-50%, calc(-50% - 6px)) scaleX(0)",
									transition: `transform 0.4s ${EASE$2}`,
									willChange: "transform"
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute",
								style: {
									top: "50%",
									left: "50%",
									width: "20px",
									height: "2px",
									borderRadius: "2px",
									background: "#FFF",
									backfaceVisibility: "hidden",
									opacity: mounted ? menuOpen ? 0 : 1 : 0,
									transform: mounted ? "translate(-50%, -50%) scaleX(1)" : "translate(-50%, -50%) scaleX(0)",
									transition: `transform 0.4s ${EASE$2}, opacity 0.2s ${EASE$2}`,
									willChange: "transform, opacity"
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute",
								style: {
									top: "50%",
									left: "50%",
									width: "20px",
									height: "2px",
									borderRadius: "2px",
									background: "#FFF",
									transformOrigin: "50% 50%",
									backfaceVisibility: "hidden",
									transform: mounted ? menuOpen ? "translate(-50%, -50%) rotate(-45deg)" : "translate(-50%, calc(-50% + 6px))" : "translate(-50%, calc(-50% + 6px)) scaleX(0)",
									transition: `transform 0.4s ${EASE$2}`,
									willChange: "transform"
								}
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute right-0 overflow-hidden",
						style: {
							top: "calc(100% + 18px)",
							width: "320px",
							borderRadius: "20px",
							background: "linear-gradient(180deg, rgba(22, 42, 28, 0.78) 0%, rgba(9, 24, 20, 0.78) 100%)",
							backdropFilter: "blur(28px) saturate(140%)",
							border: "1px solid rgba(255,255,255,0.10)",
							boxShadow: "0 30px 60px -20px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.06)",
							opacity: menuOpen ? 1 : 0,
							transform: menuOpen ? "translateY(0) scale(1)" : "translateY(-10px) scale(0.97)",
							transformOrigin: "top right",
							pointerEvents: menuOpen ? "auto" : "none",
							transition: `opacity 0.32s ${EASE$2}, transform 0.32s ${EASE$2}`
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									padding: "18px 22px 12px",
									fontFamily: "Geist, sans-serif",
									fontSize: "11px",
									letterSpacing: "0.18em",
									textTransform: "uppercase",
									color: "rgba(255,255,255,0.45)"
								},
								children: "Menu"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "flex flex-col px-3 pb-3",
								children: menuItems.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: item.href,
									onClick: () => setMenuOpen(false),
									className: "group flex items-baseline justify-between text-white/85 hover:text-white",
									style: {
										padding: "14px 16px",
										borderRadius: "12px",
										transition: "background 0.25s ease, color 0.25s ease, transform 0.25s ease",
										opacity: menuOpen ? 1 : 0,
										transform: menuOpen ? "translateY(0)" : "translateY(-4px)",
										transitionDelay: `${menuOpen ? 80 + i * 40 : 0}ms`
									},
									onMouseEnter: (e) => e.currentTarget.style.background = "rgba(255,255,255,0.06)",
									onMouseLeave: (e) => e.currentTarget.style.background = "transparent",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: {
											fontFamily: "Halant, serif",
											fontSize: "22px",
											fontWeight: 400,
											letterSpacing: "-0.5px",
											lineHeight: 1
										},
										children: item.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: {
											fontFamily: "Geist, sans-serif",
											fontSize: "11px",
											color: "rgba(255,255,255,0.35)",
											letterSpacing: "0.1em"
										},
										children: String(i + 1).padStart(2, "0")
									})]
								}) }, item.label))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									borderTop: "1px solid rgba(255,255,255,0.08)",
									padding: "14px 22px 18px",
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									fontFamily: "Geist, sans-serif",
									fontSize: "12px",
									color: "rgba(255,255,255,0.5)"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "shyen.ai" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: { color: "rgba(255,255,255,0.7)" },
									children: "Join waitlist →"
								})]
							})
						]
					})]
				})]
			}),
			menuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				onClick: () => setMenuOpen(false),
				className: "fixed inset-0 z-20"
			})
		]
	});
}
function PillButton({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "submit",
		className: "transition-transform duration-300 hover:scale-[1.02]",
		style: {
			height: "48px",
			padding: "8px 24px",
			borderRadius: "48px",
			background: "#FFF",
			color: "#091814",
			fontFamily: "Geist, sans-serif",
			fontSize: "17px",
			fontWeight: 500,
			letterSpacing: "-0.34px"
		},
		children
	});
}
function useInView(options = { threshold: .15 }) {
	const ref = (0, import_react.useRef)(null);
	const [inView, setInView] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const obs = new IntersectionObserver((entries) => {
			for (const entry of entries) if (entry.isIntersecting) {
				setInView(true);
				obs.disconnect();
				break;
			}
		}, options);
		obs.observe(el);
		return () => obs.disconnect();
	}, []);
	return {
		ref,
		inView
	};
}
var iconSara = "https://qclay.design/lovable/shyen/icon_sara.png";
var iconAnjum = "https://qclay.design/lovable/shyen/icon_anjum.png";
var logoFrame = "https://qclay.design/lovable/shyen/logo_frame.png";
var cardBg = "linear-gradient(87deg, rgba(128, 142, 63, 0.50) -0.37%, rgba(255, 255, 255, 0.00) 109.46%)";
var EASE$1 = "cubic-bezier(0.22, 1, 0.36, 1)";
var T = {
	heading: 0,
	paragraph: 500,
	saraRow: 1e3,
	card1: 1150,
	shyenRow: 1900,
	card2: 2050,
	anjumRow: 2900,
	card3: 3050
};
var headingWords = [[
	"24/7",
	"support",
	"to",
	"care",
	"for"
], [
	"your",
	"mental",
	"health."
]];
var paragraphLines = ["Instant, intelligent support that helps you manage stress, find", "calm, and stay in control anytime, anywhere."];
function CareSection() {
	const { ref, inView } = useInView({ threshold: .2 });
	const fadeUp = (delay, y = 15) => ({
		opacity: inView ? 1 : 0,
		transform: inView ? "translateY(0)" : `translateY(${y}px)`,
		transition: `opacity 0.8s ${EASE$1} ${delay}ms, transform 0.8s ${EASE$1} ${delay}ms`
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref,
		className: "care-section relative w-full overflow-hidden bg-[#112115]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-[1240px] px-6",
			style: { minHeight: "100vh" },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: { paddingTop: "124px" },
				className: "flex flex-col items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					style: {
						color: "#EAF1C1",
						textAlign: "center",
						fontFamily: "Halant, serif",
						fontSize: "72px",
						fontWeight: 400,
						lineHeight: "72px",
						letterSpacing: "-3.6px"
					},
					children: headingWords.map((line, li) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: { display: "block" },
						children: line.map((w, wi) => {
							const idx = (li === 0 ? 0 : headingWords[0].length) + wi;
							const delay = T.heading + idx * 90;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: {
									display: "inline-block",
									paddingBottom: "0.15em",
									paddingTop: "0.1em",
									marginRight: wi === line.length - 1 ? 0 : "0.22em"
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: {
										display: "inline-block",
										opacity: inView ? 1 : 0,
										transform: inView ? "translateY(0)" : "translateY(35px)",
										transition: `opacity 0.85s ${EASE$1} ${delay}ms, transform 0.95s ${EASE$1} ${delay}ms`
									},
									children: w
								})
							}, wi);
						})
					}, li))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					style: {
						marginTop: "24px",
						textAlign: "center",
						fontFamily: "Geist, sans-serif",
						fontSize: "20px",
						fontWeight: 400,
						lineHeight: "26px",
						letterSpacing: "-0.4px"
					},
					children: paragraphLines.map((line, i) => {
						const delay = T.paragraph + i * 100;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: {
								display: "block",
								color: "#FFF",
								opacity: inView ? .4 : 0,
								transform: inView ? "translateY(0)" : "translateY(20px)",
								transition: `opacity 0.7s ${EASE$1} ${delay}ms, transform 0.7s ${EASE$1} ${delay}ms`
							},
							children: line
						}, i);
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				style: {
					marginTop: "72px",
					height: "520px"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute left-1/2 -translate-x-1/2",
						style: { top: "0" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								display: "flex",
								width: "446px",
								padding: "20px",
								justifyContent: "center",
								alignItems: "center",
								gap: "8px",
								borderRadius: "100px",
								border: "2px solid rgba(255, 255, 255, 0.05)",
								background: cardBg,
								backdropFilter: "blur(5px)",
								WebkitBackdropFilter: "blur(5px)",
								color: "#FFF",
								fontFamily: "Halant, serif",
								fontSize: "18px",
								lineHeight: "20px",
								letterSpacing: "-0.36px",
								opacity: inView ? 1 : 0,
								transform: inView ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
								transition: `opacity 0.8s ${EASE$1} ${T.card1}ms, transform 0.8s ${EASE$1} ${T.card1}ms`
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: { color: "#EAF1C1" },
								children: "Hey 👋 Shyen.AI!"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "could you help me sync full body?" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: fadeUp(T.saraRow),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileRow, {
								icon: iconSara,
								name: "Sara ali",
								borderColor: "#EBFF6F",
								align: "center"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute",
						style: {
							top: "140px",
							left: "155px"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								display: "inline-flex",
								width: "390px",
								padding: "20px",
								justifyContent: "center",
								alignItems: "center",
								gap: "8px",
								borderRadius: "24px",
								border: "2px solid rgba(255, 255, 255, 0.05)",
								background: cardBg,
								backdropFilter: "blur(5px)",
								WebkitBackdropFilter: "blur(5px)",
								color: "#FFF",
								fontFamily: "Halant, serif",
								fontSize: "18px",
								lineHeight: "20px",
								letterSpacing: "-0.36px",
								opacity: inView ? 1 : 0,
								transform: inView ? "translate(0, 0)" : "translate(-35px, 35px)",
								transition: `opacity 0.9s ${EASE$1} ${T.card2}ms, transform 1s ${EASE$1} ${T.card2}ms`
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"It seems like things feel overwhelming right",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"now. Would you like a quick exercise to help",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"you reset?"
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							style: {
								paddingTop: "16px",
								...fadeUp(T.shyenRow)
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: logoFrame,
								alt: "",
								style: {
									width: "20.894px",
									height: "20.89px"
								}
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: {
									color: "#EAF1C1",
									fontFamily: "Halant, serif",
									fontSize: "20px",
									lineHeight: "20px",
									letterSpacing: "-0.4px"
								},
								children: "Shyen.AI"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute",
						style: {
							top: "170px",
							right: "188px"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								display: "inline-flex",
								width: "432px",
								padding: "20px",
								justifyContent: "center",
								alignItems: "center",
								gap: "8px",
								borderRadius: "24px",
								border: "2px solid rgba(255, 255, 255, 0.05)",
								background: cardBg,
								backdropFilter: "blur(5px)",
								WebkitBackdropFilter: "blur(5px)",
								color: "#FFF",
								fontFamily: "Halant, serif",
								fontSize: "18px",
								lineHeight: "20px",
								letterSpacing: "-0.36px",
								opacity: inView ? 1 : 0,
								transform: inView ? "translate(0, 0)" : "translate(35px, 35px)",
								transition: `opacity 0.9s ${EASE$1} ${T.card3}ms, transform 1s ${EASE$1} ${T.card3}ms`
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"Use your AI capabilities to tailor my preferences,",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"helping me reduce stress, boost focus, and",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"maintain emotional balance daily."
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-end gap-2",
							style: {
								paddingTop: "16px",
								...fadeUp(T.anjumRow)
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: {
									color: "#EAF1C1",
									fontFamily: "Halant, serif",
									fontSize: "20px",
									lineHeight: "20px",
									letterSpacing: "-0.4px"
								},
								children: "Anjum bigan"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
								width: "36px",
								height: "36px",
								borderRadius: "36px",
								border: "1px solid #AAB851",
								backgroundImage: `url(${iconAnjum})`,
								backgroundSize: "cover",
								backgroundPosition: "center"
							} })]
						})]
					})
				]
			})]
		})
	});
}
function ProfileRow({ icon, name, borderColor, align }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex items-center gap-2 ${align === "center" ? "justify-center" : "justify-end"}`,
		style: { paddingTop: "16px" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
			width: "36px",
			height: "36px",
			borderRadius: "36px",
			border: `1px solid ${borderColor}`,
			backgroundImage: `url(${icon})`,
			backgroundSize: "cover",
			backgroundPosition: "center"
		} }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			style: {
				color: "#EAF1C1",
				fontFamily: "Halant, serif",
				fontSize: "20px",
				lineHeight: "20px",
				letterSpacing: "-0.4px"
			},
			children: name
		})]
	});
}
var iconAI = "https://qclay.design/lovable/shyen/icon_ai.png";
var improvedSvg = "https://qclay.design/lovable/shyen/improved.svg";
var improvedDottSvg = "https://qclay.design/lovable/shyen/improved_dott.svg";
var chartSvg = "https://qclay.design/lovable/shyen/chart.svg";
function ToolkitSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative w-full overflow-hidden bg-[#112115]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-[1240px] px-6",
			style: {
				paddingTop: "124px",
				paddingBottom: "0px"
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex flex-col items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					style: {
						color: "#EAF1C1",
						textAlign: "center",
						fontFamily: "Halant, serif",
						fontSize: "72px",
						fontWeight: 400,
						lineHeight: "72px",
						letterSpacing: "-3.6px"
					},
					children: [
						"A full toolkit for a full",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"calmer mind."
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					style: {
						marginTop: "24px",
						color: "#EAF1C1",
						textAlign: "center",
						fontFamily: "Geist, sans-serif",
						fontSize: "20px",
						fontWeight: 400,
						lineHeight: "26px",
						letterSpacing: "-0.4px",
						opacity: .5
					},
					children: [
						"Personalized tools powered by AI to help you manage stress,",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"improve focus, and build emotional balance every day."
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					position: "relative",
					marginTop: "72px"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "pointer-events-none absolute",
					style: {
						inset: "-120px -80px -40px -80px",
						background: "linear-gradient(0deg, #112115 31.31%, #375B39 69.37%, #FAFF67 94%)",
						filter: "blur(93px)",
						zIndex: 0
					}
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						position: "relative",
						zIndex: 1,
						display: "grid",
						gridTemplateColumns: "1fr 1fr",
						gap: "20px"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroRecoveryCard, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoodTrackingCard, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImprovedCard, {})
					]
				})]
			})]
		})
	});
}
function HeroRecoveryCard() {
	const { ref, inView } = useInView({ threshold: .25 });
	const [count, setCount] = (0, import_react.useState)(0);
	const [textIn, setTextIn] = (0, import_react.useState)(false);
	const [badgeIn, setBadgeIn] = (0, import_react.useState)(false);
	const [chartIn, setChartIn] = (0, import_react.useState)(false);
	const [pillsIn, setPillsIn] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		const start = performance_default.now();
		const dur = 1500;
		const easeOut = (t) => 1 - Math.pow(1 - t, 3);
		let raf = 0;
		const tick = (now) => {
			const t = Math.min(1, (now - start) / dur);
			setCount(Math.round(400 * easeOut(t)));
			if (t < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		const tText = setTimeout(() => setTextIn(true), 700);
		const tBadge = setTimeout(() => setBadgeIn(true), 1300);
		const tChart = setTimeout(() => setChartIn(true), 1600);
		const tPills = setTimeout(() => setPillsIn(true), 3200);
		return () => {
			cancelAnimationFrame(raf);
			clearTimeout(tText);
			clearTimeout(tBadge);
			clearTimeout(tChart);
			clearTimeout(tPills);
		};
	}, [inView]);
	const ease = "cubic-bezier(0.22,1,0.36,1)";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		style: {
			gridColumn: "1 / -1",
			height: "460px",
			borderRadius: "32px",
			background: "#FBFFE6",
			position: "relative",
			overflow: "hidden",
			padding: "14px 32px"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: {
				display: "grid",
				gridTemplateColumns: "1fr 1.15fr",
				gap: "32px",
				height: "100%",
				alignItems: "stretch"
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col",
				style: {
					paddingTop: "18px",
					paddingBottom: "18px"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						style: {
							color: "#112115",
							fontFamily: "Halant, serif",
							fontSize: "80px",
							fontWeight: 400,
							lineHeight: "normal",
							letterSpacing: "-3.2px"
						},
						children: [count, "+"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						style: {
							marginTop: "15px",
							color: "#112115",
							fontFamily: "Halant, serif",
							fontSize: "32px",
							fontWeight: 400,
							lineHeight: "31px",
							letterSpacing: "-0.96px",
							opacity: textIn ? 1 : 0,
							transform: textIn ? "translateY(0)" : "translateY(20px)",
							transition: `opacity 800ms ${ease}, transform 800ms ${ease}`
						},
						children: [
							"Patients recovered 5x faster with",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"AI-powered support."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						style: {
							marginTop: "20px",
							color: "#112115",
							fontFamily: "Geist, sans-serif",
							fontSize: "18px",
							fontWeight: 400,
							lineHeight: "normal",
							letterSpacing: "-0.36px",
							opacity: textIn ? .5 : 0,
							transform: textIn ? "translateY(0)" : "translateY(20px)",
							maxWidth: "440px",
							transition: `opacity 800ms ${ease} 120ms, transform 800ms ${ease} 120ms`
						},
						children: [
							"Our personalized care, real-time guidance, and",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"proactive support help patients overcome challenges",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"and regain well-being faster."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							marginTop: "70px",
							opacity: badgeIn ? 1 : 0,
							transform: badgeIn ? "translateY(0)" : "translateY(16px)",
							transition: `opacity 700ms ${ease}, transform 700ms ${ease}`
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								display: "flex",
								width: "336px",
								padding: "12px",
								alignItems: "center",
								gap: "8px",
								borderRadius: "20px",
								background: "#EBF1C9"
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: iconAI,
									alt: "",
									style: {
										width: "32px",
										height: "32px",
										flexShrink: 0
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: {
										color: "#112115",
										fontFamily: "Halant, serif",
										fontSize: "20px",
										fontWeight: 400,
										lineHeight: "20px",
										letterSpacing: "-0.4px",
										marginRight: "0.8px"
									},
									children: "Shyen.AI"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: {
										color: "rgba(17, 33, 21, 0.60)",
										fontFamily: "Halant, serif",
										fontSize: "13px",
										fontWeight: 400,
										lineHeight: "20px",
										letterSpacing: "-0.65px"
									},
									children: "Backed by real patient outcomes"
								})
							]
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecoveryChart, {
				chartIn,
				pillsIn
			})]
		})
	});
}
function RecoveryChart({ chartIn, pillsIn }) {
	const ease = "cubic-bezier(0.22,1,0.36,1)";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: {
			position: "relative",
			width: "100%",
			height: "100%",
			background: "transparent",
			borderRadius: 36,
			overflow: "hidden"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				style: {
					position: "absolute",
					top: "24px",
					right: "28px",
					color: "#112115",
					fontFamily: "Geist, sans-serif",
					fontSize: "18px",
					fontWeight: 400,
					lineHeight: "normal",
					letterSpacing: "-0.36px",
					opacity: .6,
					zIndex: 4
				},
				children: "Recovery"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				style: {
					position: "absolute",
					inset: 0,
					clipPath: chartIn ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
					transition: `clip-path 1400ms ${ease}`
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: chartSvg,
					alt: "",
					style: {
						width: "100%",
						height: "100%",
						display: "block",
						objectFit: "fill"
					}
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: {
					position: "absolute",
					top: "15%",
					left: "30%",
					zIndex: 5,
					opacity: pillsIn ? 1 : 0,
					transform: pillsIn ? "translateY(0)" : "translateY(10px)",
					transition: `opacity 600ms ${ease}, transform 600ms ${ease}`
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillBadge, {
					bg: "#E8A969",
					text: "Avg recovery: 5X"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: {
					position: "absolute",
					top: "40%",
					right: "5%",
					zIndex: 5,
					opacity: pillsIn ? 1 : 0,
					transform: pillsIn ? "translateY(0)" : "translateY(10px)",
					transition: `opacity 600ms ${ease} 120ms, transform 600ms ${ease} 120ms`
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillBadge, {
					bg: "#BECB6D",
					text: "Traditional approach",
					hideOval: true
				})
			})
		]
	});
}
function PillBadge({ bg, text, hideOval }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		style: {
			display: "inline-flex",
			height: "40px",
			padding: "8px 18px",
			justifyContent: "center",
			alignItems: "center",
			gap: "8px",
			borderRadius: "48px",
			background: bg,
			backdropFilter: "blur(10px)",
			WebkitBackdropFilter: "blur(10px)"
		},
		children: [!hideOval && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			width: "11",
			height: "11",
			viewBox: "0 0 11 11",
			fill: "none",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "5.5",
				cy: "5.5",
				r: "4.5",
				transform: "matrix(-1 0 0 1 11 0)",
				fill: "#F0A06E",
				stroke: "#FFFCF9",
				strokeWidth: "2"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			style: {
				color: "#FFFCF9",
				fontFamily: "Geist, sans-serif",
				fontSize: "16px",
				fontWeight: 500,
				lineHeight: "normal",
				letterSpacing: "-0.32px"
			},
			children: text
		})]
	});
}
var EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
var MOODS = [
	"Happy",
	"Calm mode",
	"Stressed",
	"Focused",
	"Relaxed"
];
var LABEL_H = 40;
var LABEL_GAP = 8;
var ROW_H = 48;
var SCROLL_DURATION = MOODS.length * 1.6;
function MoodTrackingCard() {
	const { ref, inView } = useInView({ threshold: .3 });
	const [count, setCount] = (0, import_react.useState)(0);
	const [arcAngle, setArcAngle] = (0, import_react.useState)(0);
	const [titleIn, setTitleIn] = (0, import_react.useState)(false);
	const [ovalIn, setOvalIn] = (0, import_react.useState)(false);
	const [textIn, setTextIn] = (0, import_react.useState)(false);
	const [activeIdx, setActiveIdx] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		const stepMs = SCROLL_DURATION * 1e3 / MOODS.length;
		const id = setInterval(() => {
			setActiveIdx((i) => (i - 1 + MOODS.length) % MOODS.length);
		}, stepMs);
		return () => clearInterval(id);
	}, [inView]);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		setTitleIn(true);
		const start = performance_default.now();
		const dur = 1600;
		const easeOut = (t) => 1 - Math.pow(1 - t, 3);
		let raf = 0;
		const tick = (now) => {
			const t = Math.min(1, (now - start) / dur);
			setCount(Math.round(45 * easeOut(t)));
			if (t < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [inView]);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		const ovalTimer = setTimeout(() => setOvalIn(true), 350);
		const arcStartDelay = 700;
		let raf = 0;
		const arcTimer = setTimeout(() => {
			const start = performance_default.now();
			const dur = 1400;
			const easeOut = (t) => 1 - Math.pow(1 - t, 3);
			const tick = (now) => {
				const t = Math.min(1, (now - start) / dur);
				setArcAngle(90 * easeOut(t));
				if (t < 1) raf = requestAnimationFrame(tick);
			};
			raf = requestAnimationFrame(tick);
		}, arcStartDelay);
		const textTimer = setTimeout(() => setTextIn(true), 900);
		return () => {
			cancelAnimationFrame(raf);
			clearTimeout(ovalTimer);
			clearTimeout(arcTimer);
			clearTimeout(textTimer);
		};
	}, [inView]);
	const loopList = [...MOODS, ...MOODS];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		style: {
			background: "#EAF1C1",
			borderRadius: "32px",
			position: "relative",
			overflow: "hidden",
			padding: "36px",
			minHeight: "460px"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
				style: {
					position: "absolute",
					top: "36px",
					left: "36px",
					color: "#112115",
					fontFamily: "Halant, serif",
					fontSize: "72px",
					fontStyle: "normal",
					fontWeight: 400,
					lineHeight: "normal",
					letterSpacing: "-2.88px",
					margin: 0,
					opacity: titleIn ? 1 : 0,
					transform: titleIn ? "translateY(0)" : "translateY(24px)",
					transition: `opacity 900ms ${EASE}, transform 900ms ${EASE}`
				},
				children: [
					"10 – ",
					count,
					"%"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				style: {
					position: "absolute",
					top: "44px",
					right: "36px",
					color: "#112115",
					fontFamily: "Geist, sans-serif",
					fontSize: "18px",
					fontWeight: 400,
					lineHeight: "normal",
					letterSpacing: "-0.36px",
					opacity: .6
				},
				children: "Mode"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					position: "absolute",
					top: "168px",
					left: "36px",
					width: "180px",
					height: `136px`,
					overflow: "hidden",
					WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, #000 30%, #000 70%, transparent 100%)",
					maskImage: "linear-gradient(to bottom, transparent 0%, #000 30%, #000 70%, transparent 100%)"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					style: {
						display: "flex",
						flexDirection: "column",
						gap: `${LABEL_GAP}px`,
						animation: `moodScroll ${SCROLL_DURATION}s linear infinite`
					},
					children: loopList.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoodLabel, {
						text: m,
						active: i % MOODS.length === activeIdx
					}, `${m}-${i}`))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
          @keyframes moodScroll {
            from { transform: translateY(-${ROW_H * MOODS.length}px); }
            to { transform: translateY(0); }
          }
        ` })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: {
					position: "absolute",
					top: "119px",
					right: "36px",
					opacity: ovalIn ? 1 : 0,
					transform: ovalIn ? "translateY(0) scale(1)" : "translateY(16px) scale(0.92)",
					transition: `opacity 900ms ${EASE}, transform 900ms ${EASE}`
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OvalProgress, { angle: arcAngle })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					position: "absolute",
					top: "330px",
					left: "36px",
					right: "36px"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					style: {
						color: "#112115",
						fontFamily: "Geist, sans-serif",
						fontSize: "32px",
						fontWeight: 400,
						lineHeight: "normal",
						letterSpacing: "-0.64px",
						margin: 0,
						opacity: textIn ? 1 : 0,
						transform: textIn ? "translateY(0)" : "translateY(30px)",
						transition: `opacity 800ms ${EASE}, transform 800ms ${EASE}`
					},
					children: "Mood tracking"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					style: {
						marginTop: "12px",
						color: "#112115",
						fontFamily: "Geist, sans-serif",
						fontSize: "18px",
						fontWeight: 400,
						lineHeight: "normal",
						letterSpacing: "-0.36px",
						opacity: textIn ? .7 : 0,
						transform: textIn ? "translateY(0)" : "translateY(20px)",
						transition: `opacity 900ms ${EASE} 180ms, transform 900ms ${EASE} 180ms`
					},
					children: [
						"Gentle check-ins that reveal long-term",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"emotional trends."
					]
				})]
			})
		]
	});
}
function MoodLabel({ text, active = false }) {
	if (active) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: {
			display: "flex",
			height: "40px",
			padding: "8px 18px",
			justifyContent: "center",
			alignItems: "center",
			gap: "8px",
			alignSelf: "stretch",
			borderRadius: "18px",
			background: "#BECB6D",
			backdropFilter: "blur(10px)",
			WebkitBackdropFilter: "blur(10px)",
			boxShadow: "0 8px 24px -10px rgba(128,140,62,0.45)",
			transition: `background 500ms ${EASE}`
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": true,
			style: {
				width: "11px",
				height: "11px",
				flexShrink: 0,
				borderRadius: "999px",
				background: "#EAF1C1"
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			style: {
				color: "#FFF",
				fontFamily: "Geist, sans-serif",
				fontSize: "16px",
				fontWeight: 400,
				lineHeight: "normal",
				letterSpacing: "-0.32px",
				whiteSpace: "nowrap"
			},
			children: text
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: {
			position: "relative",
			display: "flex",
			height: `${LABEL_H}px`,
			paddingLeft: "36px",
			paddingRight: "18px",
			alignItems: "center",
			borderRadius: "18px",
			background: "rgba(190,203,109,0.35)",
			boxShadow: "0 0 0 1px rgba(255,255,255,0.15) inset",
			backdropFilter: "blur(10px)",
			WebkitBackdropFilter: "blur(10px)",
			transition: `background 500ms ${EASE}, box-shadow 500ms ${EASE}`
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": true,
			style: {
				position: "absolute",
				left: "18px",
				top: "50%",
				transform: "translateY(-50%)",
				width: "11px",
				height: "11px",
				borderRadius: "999px",
				background: "rgba(234,241,193,0.55)"
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			style: {
				color: "rgba(17,33,21,0.55)",
				fontFamily: "Geist, sans-serif",
				fontSize: "16px",
				fontWeight: 400,
				lineHeight: "normal",
				letterSpacing: "-0.32px",
				whiteSpace: "nowrap"
			},
			children: text
		})]
	});
}
function OvalProgress({ angle }) {
	const size = 270.926;
	const cx = size / 2;
	const cy = size / 2;
	const stroke = 2.52;
	const r = size / 2 - stroke;
	const rad = (angle - 90) * (Math.PI / 180);
	const endX = cx + r * Math.cos(rad);
	const endY = cy + r * Math.sin(rad);
	const arcPath = angle <= .01 ? "" : `M ${cx} ${cy} L ${cx} 2.5200000000000102 A ${r} ${r} 0 ${angle > 180 ? 1 : 0} 1 ${endX} ${endY} Z`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		width: size,
		height: size,
		viewBox: `0 0 ${size} ${size}`,
		fill: "none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "oval-fill",
				x1: "0",
				y1: "0",
				x2: "0",
				y2: "1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "25.46%",
					stopColor: "rgba(181, 196, 104, 0.70)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "99.83%",
					stopColor: "rgba(181, 196, 104, 0)"
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx,
				cy,
				r,
				fill: "none",
				stroke: "#808C3E",
				strokeWidth: stroke
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: cx,
				y1: 254.926,
				x2: cx,
				y2: 268.926,
				stroke: "#808C3E",
				strokeWidth: stroke,
				opacity: "0.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: 16,
				y1: cy,
				x2: 2,
				y2: cy,
				stroke: "#808C3E",
				strokeWidth: stroke,
				opacity: "0.5"
			}),
			arcPath && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: arcPath,
				fill: "url(#oval-fill)",
				stroke: "#808C3E",
				strokeWidth: stroke,
				strokeLinejoin: "round"
			})
		]
	});
}
function ImprovedCard() {
	const { ref, inView } = useInView({ threshold: .3 });
	const [titleIn, setTitleIn] = (0, import_react.useState)(false);
	const [bottomSvgIn, setBottomSvgIn] = (0, import_react.useState)(false);
	const [dottSvgIn, setDottSvgIn] = (0, import_react.useState)(false);
	const [pillIn, setPillIn] = (0, import_react.useState)(false);
	const [textIn, setTextIn] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		const t1 = setTimeout(() => setTitleIn(true), 0);
		const t2 = setTimeout(() => setBottomSvgIn(true), 350);
		const t3 = setTimeout(() => setDottSvgIn(true), 1400);
		const t4 = setTimeout(() => setPillIn(true), 2300);
		const t5 = setTimeout(() => setTextIn(true), 900);
		return () => {
			clearTimeout(t1);
			clearTimeout(t2);
			clearTimeout(t3);
			clearTimeout(t4);
			clearTimeout(t5);
		};
	}, [inView]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		style: {
			background: "#EAF1C1",
			borderRadius: "32px",
			position: "relative",
			overflow: "hidden",
			padding: "36px",
			minHeight: "460px"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				style: {
					position: "absolute",
					left: 0,
					right: 0,
					bottom: 0,
					height: "300px",
					zIndex: 0,
					clipPath: bottomSvgIn ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
					transition: `clip-path 1100ms ${EASE}`
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: improvedSvg,
					alt: "",
					style: {
						position: "absolute",
						inset: 0,
						width: "100%",
						height: "100%",
						display: "block",
						objectFit: "fill"
					}
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				style: {
					position: "absolute",
					left: 0,
					right: 0,
					bottom: "60px",
					height: "130px",
					zIndex: 1,
					clipPath: dottSvgIn ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
					transition: `clip-path 900ms ${EASE}`
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: improvedDottSvg,
					alt: "",
					style: {
						position: "absolute",
						inset: 0,
						width: "100%",
						height: "100%",
						display: "block",
						objectFit: "fill",
						transform: "rotate(-2.5deg)",
						transformOrigin: "left center"
					}
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				style: {
					position: "absolute",
					top: "36px",
					left: "36px",
					color: "#112115",
					fontFamily: "Halant, serif",
					fontSize: "72px",
					fontStyle: "normal",
					fontWeight: 400,
					lineHeight: "normal",
					letterSpacing: "-2.88px",
					margin: 0,
					zIndex: 3,
					opacity: titleIn ? 1 : 0,
					transform: titleIn ? "translateY(0)" : "translateY(24px)",
					transition: `opacity 900ms ${EASE}, transform 900ms ${EASE}`
				},
				children: "Improved"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				style: {
					position: "absolute",
					top: "44px",
					right: "36px",
					color: "#112115",
					fontFamily: "Geist, sans-serif",
					fontSize: "18px",
					fontWeight: 400,
					lineHeight: "normal",
					letterSpacing: "-0.36px",
					opacity: .6,
					zIndex: 3
				},
				children: "Tools"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: {
					position: "absolute",
					top: "225px",
					left: "168px",
					zIndex: 3,
					opacity: pillIn ? 1 : 0,
					transform: pillIn ? "translateY(0) scale(1)" : "translateY(12px) scale(0.96)",
					transition: `opacity 700ms ${EASE}, transform 700ms ${EASE}`
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: {
						display: "inline-flex",
						height: "40px",
						padding: "8px 18px",
						justifyContent: "center",
						alignItems: "center",
						gap: "8px",
						borderRadius: "48px",
						border: "2px solid #EAF1C1",
						background: "#BECB6D",
						backdropFilter: "blur(10px)",
						WebkitBackdropFilter: "blur(10px)",
						color: "#FFF",
						fontFamily: "Geist, sans-serif",
						fontSize: "16px",
						fontWeight: 400,
						lineHeight: "normal",
						letterSpacing: "-0.32px"
					},
					children: "Avg sleep: 28%"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					position: "absolute",
					top: "330px",
					left: "36px",
					right: "36px",
					zIndex: 3
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					style: {
						color: "#112115",
						fontFamily: "Geist, sans-serif",
						fontSize: "32px",
						fontWeight: 400,
						lineHeight: "normal",
						letterSpacing: "-0.64px",
						margin: 0,
						opacity: textIn ? 1 : 0,
						transform: textIn ? "translateY(0)" : "translateY(30px)",
						transition: `opacity 800ms ${EASE}, transform 800ms ${EASE}`
					},
					children: "Sleep tools"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					style: {
						marginTop: "12px",
						color: "#112115",
						fontFamily: "Geist, sans-serif",
						fontSize: "18px",
						fontWeight: 400,
						lineHeight: "normal",
						letterSpacing: "-0.36px",
						opacity: textIn ? .7 : 0,
						transform: textIn ? "translateY(0)" : "translateY(20px)",
						transition: `opacity 900ms ${EASE} 180ms, transform 900ms ${EASE} 180ms`
					},
					children: [
						"Wind-down routines, soundscapes, and stories",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"for deeper rest."
					]
				})]
			})
		]
	});
}
var logos = [
	{
		src: "https://qclay.design/lovable/shyen/logo_develop_health.png",
		alt: "Develop Health"
	},
	{
		src: "https://qclay.design/lovable/shyen/logo_health_ai.png",
		alt: "Health AI"
	},
	{
		src: "https://qclay.design/lovable/shyen/logo_ai_in_health.png",
		alt: "AI in Health Research Network"
	},
	{
		src: "https://qclay.design/lovable/shyen/logo_quantum.png",
		alt: "Quantum Health AI"
	},
	{
		src: "https://qclay.design/lovable/shyen/logo_ai_medical.png",
		alt: "AI Medical Technology"
	}
];
function CollabLogos() {
	const track = [...logos, ...logos];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "collab-section w-full",
		style: { background: "#112115" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1240px] px-6",
			style: {
				paddingTop: "56px",
				paddingBottom: "96px"
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				style: {
					color: "#EAF1C1",
					fontFamily: "Geist, sans-serif",
					fontSize: "24px",
					fontWeight: 400,
					lineHeight: "20px",
					letterSpacing: "-0.48px",
					textAlign: "left",
					opacity: .5
				},
				children: "Shyen AI Collaborations with"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: {
					marginTop: "40px",
					position: "relative",
					overflow: "hidden",
					WebkitMaskImage: "linear-gradient(to right, transparent 0, #000 12%, #000 88%, transparent 100%)",
					maskImage: "linear-gradient(to right, transparent 0, #000 12%, #000 88%, transparent 100%)"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					style: {
						display: "flex",
						gap: "96px",
						width: "max-content",
						animation: "collabMarquee 40s linear infinite",
						willChange: "transform"
					},
					children: track.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							flexShrink: 0,
							height: "56px",
							display: "flex",
							alignItems: "center",
							justifyContent: "center"
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: l.src,
							alt: l.alt,
							style: {
								height: "100%",
								width: "auto",
								objectFit: "contain",
								display: "block"
							}
						})
					}, i))
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes collabMarquee {
          from { transform: translate3d(0,0,0); }
          to { transform: translate3d(-50%,0,0); }
        }
      ` })]
	});
}
var secondVideo = "https://qclay.design/lovable/shyen/second.mp4";
var topGradient = "https://qclay.design/lovable/shyen/top_gradient.png";
var logoBottom = "https://qclay.design/lovable/shyen/logo_bottom.svg";
var bigLine = "https://qclay.design/lovable/shyen/big_line.svg";
var smallLine = "https://qclay.design/lovable/shyen/small_line.svg";
var whoop = "https://qclay.design/lovable/shyen/whoop.svg";
var apple = "https://qclay.design/lovable/shyen/apple.svg";
var dotLogo = "https://qclay.design/lovable/shyen/dot_logo.svg";
var iconClock = "https://qclay.design/lovable/shyen/icon_clock.svg";
var garmin = "https://qclay.design/lovable/shyen/garmin.svg";
var cruasan = "https://qclay.design/lovable/shyen/cruasan.svg";
var HEADING_STAGGER = .09;
var HEADING_DURATION = .9;
var PARAGRAPH_DELAY = 1.35 + .1;
var CARD_WIDTH = 308;
var CARD_GAP = 12;
var DOTS = [
	[
		null,
		"empty",
		"empty",
		"empty",
		"empty",
		"filled",
		"empty"
	],
	[
		"empty",
		"empty",
		"filled",
		"empty",
		"filled",
		"filled",
		"empty"
	],
	[
		"empty",
		"empty",
		"filled",
		"empty",
		"empty",
		"empty",
		"empty"
	],
	[
		"filled",
		"filled",
		"empty",
		"empty",
		"empty",
		"empty",
		"empty"
	],
	[
		"empty",
		"empty",
		"empty",
		"outlined",
		"outlined",
		"outlined",
		"outlined"
	]
];
function ConnectedSection() {
	const ref = (0, import_react.useRef)(null);
	const [inView, setInView] = (0, import_react.useState)(false);
	const [progress, setProgress] = (0, import_react.useState)(0);
	const [activeCard, setActiveCard] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					setInView(true);
					io.disconnect();
				}
			});
		}, { threshold: .2 });
		io.observe(el);
		return () => io.disconnect();
	}, []);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const onScroll = () => {
			const rect = el.getBoundingClientRect();
			const vh = window.innerHeight;
			const p = Math.min(1, Math.max(0, -rect.top / vh));
			setProgress(p);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
		};
	}, []);
	const lines = [[
		"Connected",
		"to",
		"the"
	], [
		"way",
		"you",
		"live."
	]];
	const shift = progress * -80;
	const blockTranslate = (1 - progress) * 80;
	const blockOpacity = Math.min(1, .15 + progress * 1.4);
	const trackOffset = -activeCard * 320;
	const thumbX = activeCard * 216;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		className: "connected-section relative w-full overflow-hidden",
		style: {
			background: "#FBFFE6",
			minHeight: "160vh"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: topGradient,
			alt: "",
			"aria-hidden": true,
			style: {
				position: "absolute",
				top: 0,
				left: 0,
				width: "100%",
				height: "auto",
				pointerEvents: "none",
				userSelect: "none",
				zIndex: 0
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-[1240px] px-6",
			style: { zIndex: 1 },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					paddingTop: "415px",
					paddingBottom: "0px",
					transform: `translateY(${shift}px)`,
					transition: "transform 0.2s linear",
					willChange: "transform"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					style: {
						color: "#122216",
						textAlign: "center",
						fontFamily: "Halant, serif",
						fontSize: "72px",
						fontWeight: 400,
						lineHeight: "72px",
						letterSpacing: "-3.6px",
						margin: 0
					},
					children: lines.map((words, li) => {
						const offset = li === 0 ? 0 : lines[0].length;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: {
								display: "block",
								paddingBottom: "0.15em",
								paddingTop: "0.1em"
							},
							children: words.map((w, wi) => {
								const idx = offset + wi;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									style: {
										display: "inline-block",
										opacity: inView ? 1 : 0,
										transform: inView ? "translateY(0)" : "translateY(40px)",
										transition: `opacity ${HEADING_DURATION}s cubic-bezier(0.22,1,0.36,1) ${idx * HEADING_STAGGER}s, transform ${HEADING_DURATION}s cubic-bezier(0.22,1,0.36,1) ${idx * HEADING_STAGGER}s`,
										willChange: "transform, opacity"
									},
									children: [w, wi < words.length - 1 ? "\xA0" : ""]
								}, wi);
							})
						}, li);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					style: {
						marginTop: "24px",
						marginBottom: 0,
						color: "#122215",
						textAlign: "center",
						fontFamily: "Geist, sans-serif",
						fontSize: "20px",
						fontWeight: 400,
						lineHeight: "26px",
						letterSpacing: "-0.4px",
						opacity: inView ? .5 : 0,
						transform: inView ? "translateY(0)" : "translateY(20px)",
						transition: `opacity 0.9s cubic-bezier(0.22,1,0.36,1) ${PARAGRAPH_DELAY}s, transform 0.9s cubic-bezier(0.22,1,0.36,1) ${PARAGRAPH_DELAY}s`,
						willChange: "transform, opacity"
					},
					children: [
						"Sync wearables to bring heart rate, sleep, and movement",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"into your wellness picture."
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					marginTop: "40px",
					position: "relative",
					height: "460px",
					minWidth: "1272px",
					borderRadius: "32px",
					overflow: "hidden",
					border: "2px solid rgba(255,255,255,0.32)",
					backdropFilter: "blur(14px)",
					WebkitBackdropFilter: "blur(14px)",
					transform: `translateY(${blockTranslate}px)`,
					opacity: blockOpacity,
					transition: "transform 0.25s linear, opacity 0.25s linear",
					willChange: "transform, opacity"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
						src: secondVideo,
						autoPlay: true,
						muted: true,
						loop: true,
						playsInline: true,
						style: {
							position: "absolute",
							inset: 0,
							width: "100%",
							height: "100%",
							objectFit: "cover"
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						style: {
							position: "absolute",
							inset: 0,
							background: "linear-gradient(129deg, rgba(0,0,0,0.70) 0%, rgba(102,102,102,0.00) 47.85%)",
							pointerEvents: "none"
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							position: "absolute",
							inset: 0,
							padding: "48px",
							display: "flex",
							gap: "48px",
							zIndex: 2
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								flex: "1 1 auto",
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between",
								minWidth: 0
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								style: {
									color: "#FFF",
									fontFamily: "Halant, serif",
									fontSize: "48px",
									fontWeight: 400,
									lineHeight: "45px",
									letterSpacing: "-2.4px",
									margin: 0
								},
								children: [
									"Connect Shyen to",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"wearables or calendars for",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"realtime suggestions."
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									display: "grid",
									gridTemplateColumns: "max-content max-content",
									gap: "8px",
									width: "max-content"
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { children: "Heart variability" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { children: "Daily movement" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { children: "Stress signals" })
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								flex: "0 0 auto",
								width: `628px`,
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									width: "100%",
									overflow: "hidden",
									borderRadius: "32px"
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										display: "flex",
										gap: `${CARD_GAP}px`,
										transform: `translateX(${trackOffset}px)`,
										transition: "transform 0.9s cubic-bezier(0.22,1,0.36,1)",
										willChange: "transform"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderCard, {
											active: activeCard === 0,
											onClick: () => setActiveCard(0),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarCard, { animate: activeCard === 0 })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderCard, {
											active: activeCard >= 0,
											onClick: () => setActiveCard(1),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrbitCard, {})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderCard, {
											active: activeCard === 1,
											onClick: () => setActiveCard(1),
											padding: "0px 22px 22px 22px",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatCard, { animate: activeCard === 1 })
										})
									]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								role: "slider",
								"aria-valuemin": 0,
								"aria-valuemax": 1,
								"aria-valuenow": activeCard,
								tabIndex: 0,
								onClick: (e) => {
									const rect = e.currentTarget.getBoundingClientRect();
									const x = e.clientX - rect.left;
									setActiveCard(x < rect.width / 2 ? 0 : 1);
								},
								style: {
									width: "576px",
									height: "13px",
									borderRadius: "56px",
									background: "rgba(234,241,193,0.31)",
									backdropFilter: "blur(10px)",
									WebkitBackdropFilter: "blur(10px)",
									position: "relative",
									cursor: "pointer"
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
									position: "absolute",
									top: 0,
									left: 0,
									width: "360px",
									height: "13px",
									borderRadius: "56px",
									background: "#EAF1C1",
									transform: `translateX(${thumbX}px)`,
									transition: "transform 0.9s cubic-bezier(0.22,1,0.36,1)"
								} })
							})]
						})]
					})
				]
			})]
		})]
	});
}
function Tag({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		style: {
			display: "flex",
			height: "40px",
			padding: "8px 18px",
			justifyContent: "center",
			alignItems: "center",
			gap: "8px",
			borderRadius: "48px",
			background: "rgba(0,0,0,0.20)",
			color: "#FFF",
			fontFamily: "Geist, sans-serif",
			fontSize: "16px",
			fontWeight: 400,
			letterSpacing: "-0.32px",
			whiteSpace: "nowrap"
		},
		children
	});
}
function SliderCard({ children, active, onClick, padding }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		onClick,
		style: {
			flex: "0 0 auto",
			width: `${CARD_WIDTH}px`,
			maxHeight: "293px",
			display: "flex",
			padding: padding ?? "22px 21px 51px 22px",
			flexDirection: "column",
			alignItems: "flex-start",
			gap: "16px",
			borderRadius: "32px",
			border: "2px solid rgba(255,255,255,0.32)",
			background: "#EAF1C1",
			backdropFilter: "blur(14px)",
			WebkitBackdropFilter: "blur(14px)",
			opacity: active ? 1 : .92,
			transition: "opacity 0.6s ease",
			cursor: onClick ? "pointer" : "default"
		},
		children
	});
}
function CalendarCard({ animate }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		style: {
			color: "#000",
			fontFamily: "Halant, serif",
			fontSize: "32px",
			fontWeight: 400,
			lineHeight: "45px",
			letterSpacing: "-0.96px"
		},
		children: "April 2026"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		style: {
			marginTop: "0px",
			display: "grid",
			gridTemplateColumns: "repeat(7, 19px)",
			gridAutoRows: "19px",
			gap: "14px"
		},
		children: DOTS.flatMap((row, ri) => row.map((kind, ci) => {
			const delay = (ri * 7 + ci) * .05;
			const common = {
				width: "19px",
				height: "19px",
				borderRadius: "50%",
				transform: animate ? "scale(1)" : "scale(0)",
				opacity: animate ? 1 : 0,
				transition: `transform 0.5s cubic-bezier(0.34,1.56,0.64,1) ${delay}s, opacity 0.5s ease ${delay}s`
			};
			if (kind === null) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
				width: "19px",
				height: "19px"
			} }, `${ri}-${ci}`);
			if (kind === "filled") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
				...common,
				background: "#B5C468"
			} }, `${ri}-${ci}`);
			if (kind === "outlined") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
				...common,
				background: "transparent",
				border: "2px solid #B5C468"
			} }, `${ri}-${ci}`);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
				...common,
				background: "rgba(0,0,0,0.08)"
			} }, `${ri}-${ci}`);
		}))
	})] });
}
function OrbitCard() {
	const outerLogos = [
		whoop,
		apple,
		dotLogo,
		iconClock,
		garmin
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: {
			position: "relative",
			width: "100%",
			height: "320px",
			display: "flex",
			alignItems: "center",
			justifyContent: "center"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: bigLine,
				alt: "",
				style: {
					position: "absolute",
					width: "196px",
					height: "196px"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: smallLine,
				alt: "",
				style: {
					position: "absolute",
					width: "132px",
					height: "132px"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: logoBottom,
				alt: "",
				style: {
					position: "relative",
					width: "32.894px",
					height: "32.887px",
					opacity: .4,
					zIndex: 3
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: {
					position: "absolute",
					width: "calc(98px * 2)",
					height: "calc(98px * 2)",
					animation: "spin 24s linear infinite"
				},
				children: outerLogos.map((src, i) => {
					const angle = i / outerLogos.length * 360;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src,
						alt: "",
						style: {
							position: "absolute",
							top: "50%",
							left: "50%",
							width: "33px",
							height: "33px",
							transform: `rotate(${angle}deg) translate(98px) rotate(-${angle}deg) translate(-16.5px, -16.5px)`
						}
					}, i);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: {
					position: "absolute",
					width: "132px",
					height: "132px",
					animation: "spinReverse 18s linear infinite"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: cruasan,
					alt: "",
					style: {
						position: "absolute",
						top: "50%",
						left: "50%",
						width: "27px",
						height: "27px",
						transform: "translate(-50%, -50%) translateY(-66px)"
					}
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes spinReverse { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
      ` })
		]
	});
}
function ChatCard({ animate }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: {
			position: "relative",
			width: "266px",
			height: "305px",
			padding: "0px 16px 16px 16px",
			borderRadius: "32px",
			borderTopLeftRadius: "0px",
			borderTopRightRadius: "0px",
			borderTop: "none",
			borderRight: "3px solid #112115",
			borderLeft: "3px solid #112115",
			borderBottom: "3px solid #112115",
			background: "linear-gradient(0deg, #B5C468 -4.1%, rgba(181,196,104,0.00) 89.34%)",
			marginLeft: "-1px",
			overflow: "hidden"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: {
					position: "absolute",
					top: animate ? "5px" : "calc(5px + 14px + 90px)",
					left: "16px",
					right: "16px",
					opacity: animate ? 1 : 0,
					transition: "top 0.8s cubic-bezier(0.22,1,0.36,1) 0.4s, opacity 0.5s ease 0.1s"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ChatBubble, { children: [
					"I’ve noticed your heart rate is higher",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"than usual while you’re at rest.",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"This can sometimes indicate stress",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"how are you feeling right now?"
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: {
					position: "absolute",
					top: "calc(5px + 90px + 14px)",
					left: "16px",
					right: "16px",
					opacity: animate ? 1 : 0,
					transform: animate ? "translateY(0)" : "translateY(10px)",
					transition: "opacity 0.6s ease 1.4s, transform 0.6s cubic-bezier(0.22,1,0.36,1) 1.4s"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ChatBubble, { children: [
					"It looks like your heart rate is a bit",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"elevated while you’re sitting.",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"That can happen when your body is",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"on alert — how are you feeling this",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"afternoon?"
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					position: "absolute",
					left: "24px",
					bottom: "17.63px",
					display: "flex",
					alignItems: "center",
					gap: "10px",
					opacity: animate ? 1 : 0,
					transition: "opacity 0.4s ease 2s"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: logoBottom,
					alt: "",
					style: {
						width: "20px",
						height: "20px",
						opacity: .5,
						animation: "spin 12s linear infinite",
						filter: "invert(1)"
					}
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					style: {
						display: "flex",
						alignItems: "center",
						gap: "6px"
					},
					children: [
						10,
						8,
						6
					].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: {
						display: "block",
						width: `${s}px`,
						height: `${s}px`,
						borderRadius: "999px",
						background: "#112115",
						animation: "loaderPulse 1.8s ease-in-out infinite",
						animationDelay: `${i * .6}s`
					} }, i))
				})]
			})
		]
	});
}
function ChatBubble({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		style: {
			display: "flex",
			width: "234px",
			padding: "14px",
			justifyContent: "center",
			alignItems: "center",
			gap: "8px",
			borderRadius: "16px",
			background: "#A6B16E",
			backdropFilter: "blur(5px)",
			WebkitBackdropFilter: "blur(5px)",
			color: "#FFF",
			fontFamily: "Geist, sans-serif",
			fontSize: "13px",
			lineHeight: "15px",
			letterSpacing: "-0.26px",
			textAlign: "center"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children })
	});
}
var aiLogo = "https://qclay.design/lovable/shyen/AI.png";
var threeVideo = "https://qclay.design/lovable/shyen/three.mp4";
var CARDS = [
	{
		img: "https://qclay.design/lovable/shyen/tho_package.png",
		num: "02"
	},
	{
		img: "https://qclay.design/lovable/shyen/first_package.png",
		num: "03"
	},
	{
		img: "https://qclay.design/lovable/shyen/three_package.png",
		num: "04"
	}
];
var HEADLINE_LINES = [
	[
		"Find",
		"what",
		"your",
		"mind"
	],
	[
		"and",
		"body",
		"need",
		"with"
	],
	["Shyen", "AI."]
];
function ProductsSection() {
	const { ref, inView } = useInView({ threshold: .18 });
	const T = {
		headlineBase: 0,
		perWord: 70,
		headlineDone: 0,
		videoCard: 600,
		card1: 1050,
		card2: 1200,
		videoLabel: 1300,
		card3: 1380,
		paragraph: 1700,
		button: 1900
	};
	const fadeStyle = (delay, y = 24) => ({
		opacity: inView ? 1 : 0,
		transform: inView ? "translateY(0)" : `translateY(${y}px)`,
		transition: `opacity 800ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 800ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`
	});
	let wordIdx = 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref,
		className: "relative w-full overflow-hidden",
		style: { background: "#FBFFE6" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-[1240px] px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					display: "flex",
					gap: "45px",
					paddingTop: "150.5px",
					paddingBottom: "150.5px"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						paddingTop: "150px",
						flex: "0 0 auto",
						width: "524px"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							style: {
								color: "#122216",
								fontFamily: "Halant, serif",
								fontSize: "64px",
								fontWeight: 400,
								lineHeight: "60px",
								letterSpacing: "-3.2px",
								margin: 0
							},
							children: HEADLINE_LINES.map((line, li) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: { display: "block" },
								children: line.map((w, i) => {
									const delay = T.headlineBase + wordIdx * T.perWord;
									wordIdx += 1;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: {
											display: "inline-block",
											paddingBottom: "0.15em",
											paddingTop: "0.1em",
											marginRight: i === line.length - 1 ? 0 : "0.24em"
										},
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											style: {
												display: "inline-block",
												opacity: inView ? 1 : 0,
												transform: inView ? "translateY(0)" : "translateY(30px)",
												transition: `opacity 700ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 700ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`
											},
											children: w
										})
									}, i);
								})
							}, li))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							style: {
								marginTop: "32px",
								marginBottom: "32px",
								color: "#122215",
								fontFamily: "Geist, sans-serif",
								fontSize: "20px",
								fontWeight: 400,
								lineHeight: "26px",
								letterSpacing: "-0.4px",
								opacity: inView ? .5 : 0,
								transform: inView ? "translateY(0)" : "translateY(16px)",
								transition: `opacity 800ms cubic-bezier(0.22,1,0.36,1) ${T.paragraph}ms, transform 800ms cubic-bezier(0.22,1,0.36,1) ${T.paragraph}ms`
							},
							children: [
								"From calm moments to better habits, discover what your",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"mind and body truly need."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							style: {
								display: "flex",
								height: "56px",
								padding: "8px 24px",
								justifyContent: "center",
								alignItems: "center",
								gap: "8px",
								borderRadius: "48px",
								border: "1px solid rgba(18,34,22,0.30)",
								background: "transparent",
								color: "#122216",
								fontFamily: "Geist, sans-serif",
								fontSize: "17px",
								fontWeight: 500,
								letterSpacing: "-0.34px",
								cursor: "pointer",
								...fadeStyle(T.button, 16)
							},
							children: "Discover More Products"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: { flex: "0 0 auto" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							position: "relative",
							width: "671px",
							height: "442px",
							aspectRatio: "334/223",
							borderRadius: "32px",
							background: "#D3DBA1",
							overflow: "hidden",
							...fadeStyle(T.videoCard, 30)
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
							src: threeVideo,
							autoPlay: true,
							muted: true,
							loop: true,
							playsInline: true,
							preload: "auto",
							style: {
								position: "absolute",
								inset: 0,
								width: "100%",
								height: "100%",
								objectFit: "cover"
							}
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								position: "absolute",
								left: "30px",
								bottom: "21px",
								display: "inline-flex",
								alignItems: "center",
								gap: "10px",
								padding: "8px 16px 8px 8px",
								borderRadius: "999px",
								background: "rgba(234,241,193,0.92)",
								backdropFilter: "blur(10px)",
								WebkitBackdropFilter: "blur(10px)",
								zIndex: 2,
								...fadeStyle(T.videoLabel, 12)
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: {
										display: "inline-flex",
										width: "28px",
										height: "28px",
										borderRadius: "50%",
										background: "#FBFFE6",
										alignItems: "center",
										justifyContent: "center"
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: aiLogo,
										alt: "",
										style: {
											width: "20px",
											height: "20px"
										}
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: {
										color: "#122216",
										fontFamily: "Geist, sans-serif",
										fontSize: "15px",
										fontWeight: 500,
										letterSpacing: "-0.3px"
									},
									children: "Shyen.AI"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: {
										color: "rgba(18,34,22,0.55)",
										fontFamily: "Geist, sans-serif",
										fontSize: "13px",
										fontWeight: 400,
										letterSpacing: "-0.26px"
									},
									children: "Powered by"
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							display: "flex",
							gap: "12px",
							marginTop: "11px",
							paddingLeft: "7px",
							paddingRight: "7px"
						},
						children: CARDS.map((c, i) => {
							const delay = [
								T.card1,
								T.card2,
								T.card3
							][i];
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									position: "relative",
									width: "212px",
									height: "200px",
									borderRadius: "24px",
									background: "#ECF0D3",
									overflow: "hidden",
									...fadeStyle(delay, 24)
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: {
										position: "absolute",
										top: "14px",
										right: "18px",
										color: "#A7AF79",
										fontFamily: "Halant, serif",
										fontSize: "20px",
										fontWeight: 400,
										lineHeight: "23px",
										letterSpacing: "-0.4px"
									},
									children: c.num
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: c.img,
									alt: "",
									style: {
										position: "absolute",
										left: "50%",
										bottom: 0,
										transform: "translateX(-50%)",
										width: "93px",
										height: "182px",
										aspectRatio: "70/137",
										objectFit: "contain"
									}
								})]
							}, c.num);
						})
					})]
				})]
			})
		})
	});
}
var fourVideo = "https://qclay.design/lovable/shyen/four.mp4";
var logo = "https://qclay.design/lovable/shyen/Logo.svg";
var beforeNumber = "https://qclay.design/lovable/shyen/before_number.svg";
var thoPackage = "https://qclay.design/lovable/shyen/tho_package.png";
var threePackage = "https://qclay.design/lovable/shyen/three_package.png";
var firstPackage = "https://qclay.design/lovable/shyen/first_package.png";
var TOP_TEXT = "Shyen AI discovered your mind and habits\nand recommended meditation products\nthat truly fit you.";
var BOTTOM_TEXT = "Carefully matched recommendations to\nsupport your meditation journey and inner\nbalance every day.";
var SLIDES$1 = {
	"01": {
		image: thoPackage,
		top: TOP_TEXT,
		bottom: BOTTOM_TEXT
	},
	"02": {
		image: threePackage,
		top: TOP_TEXT,
		bottom: BOTTOM_TEXT
	},
	"03": {
		image: firstPackage,
		top: TOP_TEXT,
		bottom: BOTTOM_TEXT
	}
};
var NUMS = [
	"01",
	"02",
	"03"
];
var DOT_COUNT = 36;
function DotRow({ inView, baseDelay, perDot = 25 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: {
			display: "flex",
			alignItems: "center",
			flexDirection: "row-reverse",
			justifyContent: "flex-start"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: {
			display: "block",
			width: "16px",
			height: "16px",
			borderRadius: "16px",
			background: "#FFF",
			flexShrink: 0,
			opacity: inView ? 1 : 0,
			transform: inView ? "scale(1)" : "scale(0.6)",
			transition: `opacity 320ms ease-out ${baseDelay}ms, transform 320ms ease-out ${baseDelay}ms`
		} }), Array.from({ length: DOT_COUNT }).map((_, i) => {
			const delay = baseDelay + 200 + i * perDot;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: {
				display: "block",
				width: "2px",
				height: "2px",
				marginLeft: "3px",
				background: "rgba(255,255,255,0.5)",
				flexShrink: 0,
				opacity: inView ? 1 : 0,
				transition: `opacity 260ms ease-out ${delay}ms`
			} }, i);
		})]
	});
}
function useCount(to, inView, durationMs = 1400, startDelay = 0) {
	const [value, setValue] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		let raf = 0;
		let start = 0;
		const t = window.setTimeout(() => {
			const step = (ts) => {
				if (!start) start = ts;
				const p = Math.min(1, (ts - start) / durationMs);
				const eased = 1 - Math.pow(1 - p, 3);
				setValue(to * eased);
				if (p < 1) raf = requestAnimationFrame(step);
			};
			raf = requestAnimationFrame(step);
		}, startDelay);
		return () => {
			window.clearTimeout(t);
			cancelAnimationFrame(raf);
		};
	}, [
		to,
		inView,
		durationMs,
		startDelay
	]);
	return value;
}
function RecommendedSection() {
	const [active, setActive] = (0, import_react.useState)("02");
	const { ref, inView } = useInView({ threshold: .2 });
	const transition = "opacity 500ms cubic-bezier(0.22,1,0.36,1), transform 500ms cubic-bezier(0.22,1,0.36,1)";
	const T = {
		glass: 0,
		logo: 350,
		headlineLine1: 550,
		productImage: 600,
		headlineLine2: 950,
		statsCard: 1250,
		counter: 1300,
		descBelow: 1750,
		rightDotsBase: 600,
		rightDotsPerDot: 28,
		topDescLine: 1688,
		numberNav: 0,
		bottomDots: 0,
		bottomDesc: 0
	};
	T.numberNav = T.topDescLine + 450;
	T.bottomDots = T.numberNav + 350;
	T.bottomDesc = T.bottomDots + 1008 + 80;
	const counterValue = useCount(5.1, inView, 1500, T.counter);
	const headlineLine1Words = ["Most", "recommended"];
	const headlineLine2Words = [
		"Product",
		"all",
		"the",
		"time."
	];
	const renderWords = (words, baseDelay, perWord = 70) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		style: {
			display: "inline-block",
			whiteSpace: "nowrap"
		},
		children: words.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			style: {
				display: "inline-block",
				paddingBottom: "0.15em",
				paddingTop: "0.1em",
				marginRight: i === words.length - 1 ? 0 : "0.28em"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				style: {
					display: "inline-block",
					opacity: inView ? 1 : 0,
					transform: inView ? "translateY(0)" : "translateY(30px)",
					transition: `opacity 700ms cubic-bezier(0.22,1,0.36,1) ${baseDelay + i * perWord}ms, transform 700ms cubic-bezier(0.22,1,0.36,1) ${baseDelay + i * perWord}ms`
				},
				children: w
			})
		}, i))
	});
	const fadeStyle = (delay, y = 16) => ({
		opacity: inView ? 1 : 0,
		transform: inView ? "translateY(0)" : `translateY(${y}px)`,
		transition: `opacity 700ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 700ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		className: "recommended-section relative w-full overflow-hidden",
		style: { background: "#FBFFE6" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				src: fourVideo,
				autoPlay: true,
				muted: true,
				loop: true,
				playsInline: true,
				preload: "auto",
				style: {
					position: "absolute",
					inset: 0,
					width: "100%",
					height: "100%",
					objectFit: "cover",
					zIndex: 0
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				style: {
					position: "absolute",
					left: 0,
					right: 0,
					bottom: 0,
					height: "32%",
					background: "linear-gradient(180deg, rgba(0,0,0,0.00) 22.79%, rgba(0,0,0,0.03) 110.59%)",
					filter: "blur(9px)",
					backdropFilter: "blur(3px)",
					WebkitBackdropFilter: "blur(50px)",
					zIndex: 1,
					pointerEvents: "none",
					WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 30%)",
					maskImage: "linear-gradient(to bottom, transparent 0%, black 30%)"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto",
				style: {
					maxWidth: "1280px",
					padding: "120px 20px",
					zIndex: 2
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					style: {
						position: "relative",
						width: "100%",
						height: "520px",
						borderRadius: "40px",
						overflow: "hidden",
						background: "rgba(0,0,0,0.25)",
						backdropFilter: "blur(100px)",
						WebkitBackdropFilter: "blur(100px)",
						...fadeStyle(T.glass, 40)
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							position: "absolute",
							inset: 0,
							padding: "60px",
							display: "flex",
							gap: "40px"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								flex: "0 0 520px",
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										display: "inline-flex",
										alignItems: "center",
										gap: "10px",
										color: "rgba(255,255,255,0.7)",
										fontFamily: "Geist, sans-serif",
										fontSize: "14px",
										letterSpacing: "-0.28px",
										marginBottom: "24px",
										...fadeStyle(T.logo, 12)
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: logo,
										alt: "",
										style: {
											width: "22px",
											height: "22px"
										}
									}), "AI-Powered Wellness"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									style: {
										color: "#FFF",
										fontFamily: "Halant, serif",
										fontSize: "56px",
										fontWeight: 400,
										lineHeight: "56px",
										letterSpacing: "-2.8px",
										margin: 0
									},
									children: [
										renderWords(headlineLine1Words, T.headlineLine1),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										renderWords(headlineLine2Words, T.headlineLine2)
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										marginTop: "40px",
										width: "440px",
										borderRadius: "24px",
										border: "1px solid rgba(255,255,255,0.18)",
										background: "rgba(255,255,255,0.08)",
										backdropFilter: "blur(14px)",
										WebkitBackdropFilter: "blur(14px)",
										paddingTop: "24px",
										paddingLeft: "24px",
										paddingRight: "24px",
										paddingBottom: "26px",
										...fadeStyle(T.statsCard, 20)
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: {
											display: "flex",
											alignItems: "center",
											justifyContent: "space-between",
											gap: "14px"
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											style: {
												display: "flex",
												alignItems: "center",
												gap: "14px"
											},
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												style: {
													display: "inline-flex",
													height: "32px",
													padding: "0 12px",
													alignItems: "center",
													justifyContent: "center",
													borderRadius: "999px",
													border: "1px solid rgba(255,255,255,0.35)",
													color: "#FFF",
													fontFamily: "Geist, sans-serif",
													fontSize: "14px",
													fontWeight: 500
												},
												children: "30%"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												style: {
													color: "#FFF",
													fontFamily: "Geist, sans-serif",
													fontSize: "20px",
													fontWeight: 400,
													lineHeight: "26px",
													letterSpacing: "-0.4px"
												},
												children: "Stress Reduction"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											style: {
												color: "#FFF",
												fontFamily: "Halant, serif",
												fontSize: "40px",
												fontWeight: 400,
												letterSpacing: "-2px",
												lineHeight: 1
											},
											children: [counterValue.toFixed(1), "X"]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											marginTop: "6px",
											color: "#FFF",
											fontFamily: "Geist, sans-serif",
											fontSize: "16px",
											fontWeight: 500,
											lineHeight: "26px",
											letterSpacing: "-0.32px"
										},
										children: "Deeper Relaxation"
									})]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								style: {
									color: "rgba(255,255,255,0.7)",
									fontFamily: "Geist, sans-serif",
									fontSize: "16px",
									lineHeight: "24px",
									letterSpacing: "-0.32px",
									margin: 0,
									maxWidth: "440px",
									...fadeStyle(T.descBelow, 16)
								},
								children: [
									"From guided sessions to natural supplements, find what",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"helps you meditate better and live calmer."
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								flex: "1 1 0",
								position: "relative"
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										position: "absolute",
										top: "0px",
										left: "165px"
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DotRow, {
										inView,
										baseDelay: T.rightDotsBase,
										perDot: T.rightDotsPerDot
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										position: "absolute",
										top: "53px",
										left: "23px",
										right: 0,
										height: "78px",
										...fadeStyle(T.topDescLine, 12)
									},
									children: NUMS.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											position: "absolute",
											inset: 0,
											color: "#FFF",
											fontFamily: "Geist, sans-serif",
											fontSize: "18px",
											fontWeight: 400,
											lineHeight: "26px",
											letterSpacing: "-0.36px",
											whiteSpace: "pre-line",
											opacity: active === n ? 1 : 0,
											transform: active === n ? "translateY(0)" : "translateY(8px)",
											transition,
											pointerEvents: active === n ? "auto" : "none"
										},
										children: SLIDES$1[n].top
									}, n))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										position: "absolute",
										top: "165px",
										left: "23px",
										display: "flex",
										alignItems: "center",
										gap: "16px",
										...fadeStyle(T.numberNav, 12)
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: beforeNumber,
										alt: "",
										style: {
											width: "30px",
											height: "30px"
										}
									}), NUMS.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setActive(n),
										style: {
											background: "transparent",
											border: "none",
											padding: 0,
											cursor: "pointer",
											color: "#FFF",
											opacity: active === n ? 1 : .45,
											fontFamily: "Geist, sans-serif",
											fontSize: "17px",
											fontWeight: active === n ? 500 : 400,
											letterSpacing: "-0.34px",
											transition: "opacity 0.35s ease, font-weight 0.35s ease"
										},
										children: n
									}, n))]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										position: "absolute",
										top: "285px",
										left: "190px"
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DotRow, {
										inView,
										baseDelay: T.bottomDots,
										perDot: T.rightDotsPerDot
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										position: "absolute",
										top: "325px",
										left: "23px",
										right: 0,
										height: "72px",
										...fadeStyle(T.bottomDesc, 12)
									},
									children: NUMS.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											position: "absolute",
											inset: 0,
											color: "rgba(255,255,255,0.7)",
											fontFamily: "Geist, sans-serif",
											fontSize: "16px",
											fontWeight: 400,
											lineHeight: "24px",
											letterSpacing: "-0.32px",
											whiteSpace: "pre-line",
											opacity: active === n ? 1 : 0,
											transform: active === n ? "translateY(0)" : "translateY(8px)",
											transition,
											pointerEvents: active === n ? "auto" : "none"
										},
										children: SLIDES$1[n].bottom
									}, n))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										position: "absolute",
										right: "-20px",
										top: "50%",
										width: "203px",
										height: "459px",
										transform: "translateY(-50%)"
									},
									children: NUMS.map((n) => {
										const isActive = active === n;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: SLIDES$1[n].image,
											alt: "",
											style: {
												position: "absolute",
												inset: 0,
												width: "100%",
												height: "100%",
												objectFit: "contain",
												opacity: inView ? isActive ? 1 : 0 : 0,
												transform: inView ? isActive ? "translateY(0)" : "translateY(12px)" : "translateY(24px)",
												transition: `opacity 700ms cubic-bezier(0.22,1,0.36,1) ${isActive && !inView ? 0 : isActive ? T.productImage : 0}ms, transform 700ms cubic-bezier(0.22,1,0.36,1) ${isActive ? T.productImage : 0}ms`
											}
										}, n);
									})
								})
							]
						})]
					})
				})
			})
		]
	});
}
var PersonIcon = "https://qclay.design/lovable/shyen/Person.svg";
var MoonIcon = "https://qclay.design/lovable/shyen/Moon.svg";
var SmilyIcon = "https://qclay.design/lovable/shyen/Smily.svg";
var LogoDark = "https://qclay.design/lovable/shyen/Logo_dark.svg";
var HorizontalSvg = "https://qclay.design/lovable/shyen/horizontal.svg";
var LineSvg = "https://qclay.design/lovable/shyen/line.svg";
var BoolSvg = "https://qclay.design/lovable/shyen/bool.svg";
var SliderBg = "https://qclay.design/lovable/shyen/slider_bg.png";
var BeforeNumber$1 = "https://qclay.design/lovable/shyen/before_number.svg";
var UpRight = "https://qclay.design/lovable/shyen/UpRight.svg";
var ITEMS = [
	{
		icon: PersonIcon,
		label: "Relaxation & Focus",
		title: "Relaxation & Focus",
		list: [
			"Practice guided breathing to instantly reduce stress and reset your mind",
			"Track your mood patterns to understand what affects your energy",
			"Take mindful breaks during the day to avoid burnout",
			"Build a consistent routine with AI-powered recommendations"
		]
	},
	{
		icon: MoonIcon,
		label: "Sleep and Recovery",
		title: "Sleep and Recovery",
		list: [
			"Wind down with guided routines that prepare your mind for sleep",
			"Track recovery patterns synced with your wearables",
			"Personalized AI tips for deeper, restorative rest",
			"Build a consistent sleep rhythm that energizes your day"
		]
	},
	{
		icon: SmilyIcon,
		label: "Mental Clarity & Mood",
		title: "Mental Clarity & Mood",
		list: [
			"Track your mood patterns to understand what affects your energy",
			"Daily check-ins powered by Shyen AI mood intelligence",
			"Identify triggers and improve emotional balance",
			"Boost clarity with personalized mindfulness practices"
		]
	},
	{
		icon: LogoDark,
		label: "Shyen AI tips",
		title: "Shyen AI tips",
		list: [
			"Personalized AI tips tailored to your daily mental state",
			"Smart recommendations that evolve with your habits",
			"Instant guidance for stress, focus, and recovery",
			"Unlimited science-backed insights from Shyen AI"
		]
	}
];
var ICON_SIZE = 80;
var GAP = 72;
var STEP = 152;
var LINE_W = 220;
var LINE_H = 1088;
var BOOL_TOP_IN_LINE = 635;
var BOOL_OFFSET = BOOL_TOP_IN_LINE - LINE_H / 2;
function HoverSliderSection() {
	const [active, setActive] = (0, import_react.useState)(null);
	const hasActive = active !== null;
	const activeItem = hasActive ? ITEMS[active] : null;
	const itemCenter = (i) => i * STEP + ICON_SIZE / 2;
	const menuHeight = ITEMS.length * ICON_SIZE + (ITEMS.length - 1) * GAP;
	const lineTranslate = (hasActive ? itemCenter(active) : menuHeight / 2) - menuHeight / 2 - BOOL_OFFSET;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative w-full overflow-hidden",
		style: { background: "#FBFFE6" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-[1440px]",
			style: {
				paddingTop: 140,
				paddingBottom: 140
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					position: "relative",
					display: "flex",
					alignItems: "center",
					minHeight: menuHeight + 80
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							display: "flex",
							flexDirection: "column",
							gap: `${GAP}px`
						},
						children: ITEMS.map((it, i) => {
							const isActive = active === i;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								onMouseEnter: () => setActive(i),
								style: {
									display: "flex",
									alignItems: "center",
									gap: 24,
									cursor: "pointer",
									opacity: !isActive ? .5 : 1,
									transition: "opacity 500ms cubic-bezier(0.22,1,0.36,1)"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										display: "flex",
										width: 80,
										height: 80,
										justifyContent: "center",
										alignItems: "center",
										aspectRatio: "1/1",
										borderRadius: 96,
										border: isActive ? "2px solid rgba(18,34,22,0.10)" : "2px solid transparent",
										background: "#DDE3B9",
										boxShadow: "0 0 36px 0 rgba(255,255,255,0.60) inset",
										transition: "border-color 400ms ease",
										flexShrink: 0
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: it.icon,
										alt: "",
										style: {
											width: 32,
											height: 32
										}
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: {
										color: "#122216",
										fontFamily: "Halant, serif",
										fontSize: 32,
										fontWeight: 400,
										lineHeight: "26px",
										letterSpacing: "-1.6px"
									},
									children: it.label
								})]
							}, i);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							position: "absolute",
							left: 560,
							top: "50%",
							transform: "translateY(-50%)",
							width: LINE_W,
							height: menuHeight,
							pointerEvents: "none"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								position: "absolute",
								left: "50%",
								top: "50%",
								transform: "translate(-50%, -50%)",
								marginLeft: 94,
								height: 1400,
								width: 10,
								WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
								maskImage: "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
								pointerEvents: "none"
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: HorizontalSvg,
								alt: "",
								style: {
									width: 10,
									height: 1400,
									display: "block"
								}
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								position: "absolute",
								left: 0,
								top: "50%",
								transform: "translateY(-50%)",
								width: LINE_W,
								height: menuHeight,
								WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
								maskImage: "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)"
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									position: "absolute",
									left: 0,
									top: "50%",
									width: LINE_W,
									height: LINE_H,
									transform: `translateY(calc(-50% + ${lineTranslate}px))`,
									transition: "transform 0.9s cubic-bezier(0.22, 1, 0.36, 1)",
									willChange: "transform"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: LineSvg,
									alt: "",
									style: {
										position: "absolute",
										left: 0,
										top: 0,
										width: LINE_W,
										height: LINE_H
									}
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: BoolSvg,
									alt: "",
									style: {
										position: "absolute",
										left: 20,
										top: BOOL_TOP_IN_LINE,
										width: 56,
										height: 56,
										transform: "translate(-50%, -50%)"
									}
								})]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							marginLeft: "auto",
							width: 560,
							minHeight: menuHeight
						},
						children: hasActive && activeItem && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RightContent, { item: activeItem }, activeItem.label)
					})
				]
			})
		})
	});
}
function RightContent({ item }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			style: {
				position: "relative",
				minWidth: 512,
				height: 314,
				borderRadius: 24,
				border: "1px solid #FFF",
				background: `#122216 url(${SliderBg}) center/cover no-repeat`,
				boxShadow: "0 20px 68px 0 rgba(255,255,255,0.43) inset",
				overflow: "hidden",
				animation: "hssFadeUp 600ms cubic-bezier(0.22,1,0.36,1) 0ms both"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelInner, { item })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
			style: {
				marginTop: 48,
				marginBottom: 0,
				color: "#122216",
				fontFamily: "Halant, serif",
				fontSize: 40,
				fontWeight: 400,
				lineHeight: "40px",
				letterSpacing: "-2px",
				animation: "hssFadeUp 600ms cubic-bezier(0.22,1,0.36,1) 700ms both"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: { display: "block" },
					children: "Relaxation & Focus designed to"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: { display: "block" },
					children: "calm your mind and sharpen"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: { display: "block" },
					children: "your clarity"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			style: {
				marginTop: 23,
				marginBottom: 0,
				color: "#122216",
				fontFamily: "Geist, sans-serif",
				fontSize: 20,
				fontWeight: 400,
				lineHeight: "23px",
				letterSpacing: "-0.4px",
				opacity: .7,
				animation: "hssFadeUp 600ms cubic-bezier(0.22,1,0.36,1) 820ms both"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: { display: "block" },
					children: "Find your balance with AI-guided support that helps you"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: { display: "block" },
					children: "reduce stress, stay present, and improve your focus"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: { display: "block" },
					children: "throughout the day."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: {
				marginTop: 48,
				display: "flex",
				height: 60,
				padding: 20,
				alignItems: "center",
				gap: 8,
				alignSelf: "stretch",
				borderRadius: 100,
				border: "1px solid #FBFFE6",
				background: "#BECB6D",
				boxShadow: "0 0 0 1.5px rgba(19,35,23,0.10), 0 0 54px 0 #FFF inset, 0 0 14px 0 #FFF inset",
				animation: "hssFadeUp 600ms cubic-bezier(0.22,1,0.36,1) 940ms both"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: LogoDark,
					alt: "",
					style: {
						width: 25.102,
						height: 25.097
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: {
						marginLeft: 8,
						color: "#122216",
						fontFamily: "Halant, serif",
						fontSize: 18,
						fontWeight: 400,
						lineHeight: "20px",
						letterSpacing: "-0.36px"
					},
					children: "Get unlimited tips from Shyen AI"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					style: {
						marginLeft: "auto",
						width: 36,
						height: 36,
						borderRadius: "50%",
						background: "#F0F3DF",
						display: "flex",
						alignItems: "center",
						justifyContent: "center"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: UpRight,
						alt: "",
						style: {
							width: 24,
							height: 24
						}
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes hssFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      ` })
	] });
}
function PanelInner({ item }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		style: {
			position: "absolute",
			left: 24,
			top: 30,
			color: "#FFF",
			fontFamily: "Halant, serif",
			fontSize: 32,
			fontWeight: 400,
			lineHeight: "26px",
			letterSpacing: "-1.6px",
			animation: "hssFadeUp 500ms cubic-bezier(0.22,1,0.36,1) 180ms both"
		},
		children: item.title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		style: {
			position: "absolute",
			left: 24,
			right: 24,
			top: 74,
			display: "flex",
			padding: 20,
			flexDirection: "column",
			alignItems: "flex-start",
			gap: 12,
			borderRadius: 16,
			border: "1.5px solid rgba(255,255,255,0.20)",
			background: "rgba(190,203,109,0.60)",
			boxShadow: "0 20px 124px 0 rgba(255,255,255,0.30) inset",
			backdropFilter: "blur(26px)",
			WebkitBackdropFilter: "blur(26px)",
			animation: "hssFadeUp 500ms cubic-bezier(0.22,1,0.36,1) 260ms both"
		},
		children: item.list.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: {
				display: "flex",
				alignItems: "flex-start",
				gap: 16,
				animation: `hssFadeUp 450ms cubic-bezier(0.22,1,0.36,1) ${320 + i * 90}ms both`
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: BeforeNumber$1,
				alt: "",
				style: {
					width: 17,
					height: 17,
					opacity: .6,
					marginTop: 2,
					flexShrink: 0
				}
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				style: {
					color: "#FFF",
					fontFamily: "Geist, sans-serif",
					fontSize: 16,
					fontWeight: 400,
					lineHeight: "20px",
					letterSpacing: "-0.32px"
				},
				children: row
			})]
		}, i))
	})] });
}
var BgGreen = "https://qclay.design/lovable/shyen/bg_green_big.png";
var BgDoctorGreen = "https://qclay.design/lovable/shyen/bg_doctor_green.png";
var BgOrange = "https://qclay.design/lovable/shyen/orange_br_big.png";
var BgTwoSector = "https://qclay.design/lovable/shyen/two_sector.png";
var Doctor = "https://qclay.design/lovable/shyen/doctor.png";
var Doctor2 = "https://qclay.design/lovable/shyen/doctor2.png";
var Quote = "https://qclay.design/lovable/shyen/quote.svg";
var BeforeNumber = "https://qclay.design/lovable/shyen/before_number.svg";
var LeftArrow = "https://qclay.design/lovable/shyen/left.svg";
var RightArrow = "https://qclay.design/lovable/shyen/right.svg";
var LogoDevelop = "https://qclay.design/lovable/shyen/develop_health_b.png";
var LogoHealthAI = "https://qclay.design/lovable/shyen/health_ai_b.png";
var LogoAIInHealth = "https://qclay.design/lovable/shyen/ai_in_health_b.png";
var LogoQuantum = "https://qclay.design/lovable/shyen/quantum_b.png";
var LogoAIMedical = "https://qclay.design/lovable/shyen/ai_medical_b.png";
var SLIDES = [
	{
		reviewBg: BgGreen,
		cardBg: BgDoctorGreen,
		image: Doctor,
		textLines: [
			"Aa a doc I struggled with focus and stress daily.",
			"Shyen AI gave me a routine that works, like a",
			"personal guide for my mind, always there when",
			"needed."
		],
		author: "Dr. Philip Deibel"
	},
	{
		reviewBg: BgOrange,
		cardBg: BgTwoSector,
		image: Doctor2,
		textLines: [
			"Shyen is one of the best ai tool for calming and",
			"health, i m now more focused on my work.. and i m",
			"loving it..."
		],
		author: "Lara simaon"
	},
	{
		reviewBg: BgGreen,
		cardBg: BgDoctorGreen,
		image: Doctor,
		textLines: [
			"Aa a doc I struggled with focus and stress daily.",
			"Shyen AI gave me a routine that works, like a",
			"personal guide for my mind, always there when",
			"needed."
		],
		author: "Dr. Philip Deibel"
	},
	{
		reviewBg: BgOrange,
		cardBg: BgTwoSector,
		image: Doctor2,
		textLines: [
			"Shyen is one of the best ai tool for calming and",
			"health, i m now more focused on my work.. and i m",
			"loving it..."
		],
		author: "Lara simaon"
	}
];
var REVIEW_W = 850;
var CARD_W = 350;
var INNER_GAP = 20;
var SLIDE_GAP = 40;
var PARTNER_LOGOS = [
	{
		src: LogoDevelop,
		alt: "Develop Health"
	},
	{
		src: LogoHealthAI,
		alt: "Health AI"
	},
	{
		src: LogoAIInHealth,
		alt: "AI in Health Research Network"
	},
	{
		src: LogoQuantum,
		alt: "Quantum Health AI"
	},
	{
		src: LogoAIMedical,
		alt: "AI Medical Technology"
	}
];
function StoriesSection() {
	const { ref, inView } = useInView({ threshold: .15 });
	const [drag, setDrag] = (0, import_react.useState)(0);
	const [base, setBase] = (0, import_react.useState)(0);
	const [start, setStart] = (0, import_react.useState)(null);
	const [activeIndex, setActiveIndex] = (0, import_react.useState)(0);
	const maxOffset = -(SLIDES.length - 1) * 1260;
	const offset = Math.max(maxOffset, Math.min(0, base + drag));
	const goTo = (idx) => {
		const clamped = Math.max(0, Math.min(SLIDES.length - 1, idx));
		setBase(-clamped * 1260);
		setDrag(0);
		setActiveIndex(clamped);
	};
	const onDown = (e) => {
		setStart(e.clientX);
		e.target.setPointerCapture(e.pointerId);
	};
	const onMove = (e) => {
		if (start === null) return;
		setDrag(e.clientX - start);
	};
	const onUp = () => {
		if (start === null) return;
		let nextIdx = activeIndex;
		if (drag < -100) nextIdx = activeIndex + 1;
		else if (drag > 100) nextIdx = activeIndex - 1;
		nextIdx = Math.max(0, Math.min(SLIDES.length - 1, nextIdx));
		setActiveIndex(nextIdx);
		setBase(-nextIdx * 1260);
		setDrag(0);
		setStart(null);
	};
	const headingWords = [
		"The",
		"real",
		"stories.",
		"Real",
		"impact."
	];
	const partnerTrack = [...PARTNER_LOGOS, ...PARTNER_LOGOS];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		className: "relative w-full overflow-hidden",
		style: { background: "#EEF2D8" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-[1440px]",
				style: { paddingTop: 144 },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: { textAlign: "center" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						style: {
							margin: 0,
							color: "#122216",
							fontFamily: "Halant, serif",
							fontSize: 72,
							fontWeight: 400,
							lineHeight: "72px",
							letterSpacing: "-3.6px"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { display: "block" },
							children: headingWords.slice(0, 3).map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: {
									display: "inline-block",
									marginRight: i < 2 ? "0.28em" : 0,
									opacity: inView ? 1 : 0,
									transform: inView ? "translateY(0)" : "translateY(30px)",
									transition: `opacity 700ms cubic-bezier(0.22,1,0.36,1) ${i * 80}ms, transform 700ms cubic-bezier(0.22,1,0.36,1) ${i * 80}ms`
								},
								children: w
							}, i))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { display: "block" },
							children: headingWords.slice(3).map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: {
									display: "inline-block",
									marginRight: i < 1 ? "0.28em" : 0,
									opacity: inView ? 1 : 0,
									transform: inView ? "translateY(0)" : "translateY(30px)",
									transition: `opacity 700ms cubic-bezier(0.22,1,0.36,1) ${(3 + i) * 80}ms, transform 700ms cubic-bezier(0.22,1,0.36,1) ${(3 + i) * 80}ms`
								},
								children: w
							}, i))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						style: {
							marginTop: 24,
							marginBottom: 0,
							color: "#122215",
							fontFamily: "Geist, sans-serif",
							fontSize: 20,
							fontWeight: 400,
							lineHeight: "26px",
							letterSpacing: "-0.4px",
							opacity: inView ? .5 : 0,
							transform: inView ? "translateY(0)" : "translateY(20px)",
							transition: "opacity 700ms cubic-bezier(0.22,1,0.36,1) 500ms, transform 700ms cubic-bezier(0.22,1,0.36,1) 500ms"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { display: "block" },
							children: "See how Shyen helps others, and find out"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { display: "block" },
							children: "what it can do for you."
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: {
					marginTop: 48,
					opacity: inView ? 1 : 0,
					transform: inView ? "translateY(0)" : "translateY(40px)",
					transition: "opacity 800ms cubic-bezier(0.22,1,0.36,1) 700ms, transform 800ms cubic-bezier(0.22,1,0.36,1) 700ms"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					style: {
						overflow: "hidden",
						touchAction: "pan-y",
						cursor: start !== null ? "grabbing" : "grab",
						userSelect: "none",
						WebkitMaskImage: "linear-gradient(to right, black 0%, black 92%, transparent 100%)",
						maskImage: "linear-gradient(to right, black 0%, black 92%, transparent 100%)"
					},
					onPointerDown: onDown,
					onPointerMove: onMove,
					onPointerUp: onUp,
					onPointerCancel: onUp,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							display: "flex",
							gap: SLIDE_GAP,
							paddingLeft: "max(120px, calc((100vw - 1440px) / 2 + 120px))",
							paddingRight: 120,
							transform: `translateX(${offset}px)`,
							transition: start !== null ? "none" : "transform 900ms cubic-bezier(0.22,1,0.36,1)",
							willChange: "transform"
						},
						children: SLIDES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideItem, {
							slide: s,
							index: i,
							inView,
							fade: i >= activeIndex ? 1 : 0,
							dragging: start !== null
						}, i))
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1440px]",
				style: { paddingBottom: 144 },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							marginTop: 48,
							paddingLeft: 120,
							paddingRight: 120,
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							opacity: inView ? 1 : 0,
							transition: "opacity 700ms cubic-bezier(0.22,1,0.36,1) 1100ms"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								display: "flex",
								alignItems: "center",
								gap: 32
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: BeforeNumber,
								alt: "",
								style: {
									width: 36,
									height: 36
								},
								draggable: false
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									display: "flex",
									alignItems: "center",
									gap: 24
								},
								children: SLIDES.map((_, i) => {
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => goTo(i),
										style: {
											background: "transparent",
											border: "none",
											padding: 0,
											cursor: "pointer",
											color: "#122216",
											fontFamily: "Halant, serif",
											fontSize: 28,
											fontWeight: 400,
											lineHeight: "29.598px",
											letterSpacing: "-0.56px",
											opacity: i === activeIndex ? 1 : .4,
											transition: "opacity 300ms ease"
										},
										children: String(i + 1).padStart(2, "0")
									}, i);
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								display: "flex",
								alignItems: "center",
								gap: 20
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowButton, {
								src: LeftArrow,
								disabled: activeIndex === 0,
								onClick: () => goTo(activeIndex - 1)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowButton, {
								src: RightArrow,
								disabled: activeIndex >= SLIDES.length - 1,
								onClick: () => goTo(activeIndex + 1)
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							marginTop: 52,
							display: "flex",
							justifyContent: "center"
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
							width: 1272,
							maxWidth: "calc(100% - 240px)",
							borderTop: "1.5px solid rgba(18, 34, 22, 0.10)"
						} })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							marginTop: 56,
							position: "relative",
							overflow: "hidden",
							paddingLeft: 120,
							paddingRight: 120,
							WebkitMaskImage: "linear-gradient(to right, transparent 0, #000 12%, #000 88%, transparent 100%)",
							maskImage: "linear-gradient(to right, transparent 0, #000 12%, #000 88%, transparent 100%)"
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								display: "flex",
								gap: 96,
								width: "max-content",
								animation: "storiesMarquee 40s linear infinite",
								willChange: "transform"
							},
							children: partnerTrack.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									flexShrink: 0,
									height: 56,
									display: "flex",
									alignItems: "center",
									justifyContent: "center"
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: l.src,
									alt: l.alt,
									style: {
										height: "100%",
										width: "auto",
										objectFit: "contain",
										display: "block"
									},
									draggable: false
								})
							}, i))
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes storiesMarquee {
          from { transform: translate3d(0,0,0); }
          to { transform: translate3d(-50%,0,0); }
        }
      ` })
		]
	});
}
function ArrowButton({ src, disabled, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick,
		disabled,
		style: {
			width: 48.537,
			height: 48.537,
			borderRadius: "50%",
			background: "#FFF",
			opacity: disabled ? .4 : 1,
			boxShadow: "0 1px 20px 0 #EEEADE",
			border: "none",
			padding: 0,
			cursor: disabled ? "default" : "pointer",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			transition: "opacity 300ms ease"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt: "",
			style: {
				width: 32,
				height: 32
			},
			draggable: false
		})
	});
}
function SlideItem({ slide, index, inView, fade, dragging }) {
	const baseDelay = 900 + index * 120;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: {
			display: "flex",
			gap: INNER_GAP,
			flexShrink: 0,
			opacity: inView ? dragging ? Math.max(fade, .5) : fade : 0,
			transition: dragging ? "none" : "opacity 700ms cubic-bezier(0.22,1,0.36,1)"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: {
				position: "relative",
				width: REVIEW_W,
				height: 400,
				borderRadius: 24,
				background: `#BECB6D url(${slide.reviewBg}) center/cover no-repeat`,
				overflow: "hidden",
				transform: inView ? "translateY(0)" : "translateY(40px)",
				transition: `transform 800ms cubic-bezier(0.22,1,0.36,1) ${baseDelay}ms`
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: Quote,
					alt: "",
					style: {
						position: "absolute",
						left: 54,
						top: 49,
						width: 29,
						height: 33
					},
					draggable: false
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					style: {
						position: "absolute",
						left: 54,
						top: 122,
						right: 54,
						color: "#FFF",
						fontFamily: "Halant, serif",
						fontSize: 32,
						fontWeight: 400,
						lineHeight: "33px",
						letterSpacing: "-0.64px"
					},
					children: slide.textLines.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: { display: "block" },
						children: l
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					style: {
						position: "absolute",
						left: 54,
						bottom: 49,
						color: "#FFF",
						fontFamily: "Geist, sans-serif",
						fontSize: 20,
						fontWeight: 500,
						lineHeight: "26px",
						letterSpacing: "-0.4px"
					},
					children: slide.author
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			style: {
				position: "relative",
				width: CARD_W,
				height: 400,
				borderRadius: 24,
				background: `#BECB6D url(${slide.cardBg}) center/cover no-repeat`,
				overflow: "hidden",
				transform: inView ? "translateY(0)" : "translateY(40px)",
				transition: `transform 800ms cubic-bezier(0.22,1,0.36,1) ${baseDelay + 140}ms`
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: slide.image,
				alt: "",
				draggable: false,
				style: {
					position: "absolute",
					left: "50%",
					bottom: 0,
					transform: "translateX(-50%)",
					width: 381,
					height: 453,
					objectFit: "cover",
					objectPosition: "center"
				}
			})
		})]
	});
}
var Phone = "https://qclay.design/lovable/shyen/phone.png";
function MobileSection() {
	const { ref, inView } = useInView({ threshold: .15 });
	const headingLine1 = [
		"Shyen",
		"is",
		"not",
		"only"
	];
	const headingLine2 = [
		"on",
		"big",
		"screens."
	];
	const allWords = [...headingLine1, ...headingLine2];
	const ease = "cubic-bezier(0.22,1,0.36,1)";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref,
		className: "relative w-full overflow-hidden",
		style: { background: "#EEF2D8" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-[1440px]",
			style: {
				paddingTop: 144,
				paddingLeft: 24,
				paddingRight: 24
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: { textAlign: "center" },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						style: {
							margin: 0,
							color: "#122216",
							fontFamily: "Halant, serif",
							fontSize: 72,
							fontWeight: 400,
							lineHeight: "72px",
							letterSpacing: "-3.6px"
						},
						children: [headingLine1, headingLine2].map((line, lineIdx) => {
							const startIdx = lineIdx === 0 ? 0 : headingLine1.length;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: {
									display: "block",
									paddingBottom: "0.15em",
									paddingTop: "0.1em"
								},
								children: line.map((w, i) => {
									const globalIdx = startIdx + i;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: {
											display: "inline-block",
											marginRight: i < line.length - 1 ? "0.28em" : 0,
											opacity: inView ? 1 : 0,
											transform: inView ? "translateY(0)" : "translateY(40px)",
											transition: `opacity 800ms ${ease} ${globalIdx * 90}ms, transform 800ms ${ease} ${globalIdx * 90}ms`
										},
										children: w
									}, i);
								})
							}, lineIdx);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						style: {
							marginTop: 24,
							marginBottom: 0,
							color: "#122215",
							fontFamily: "Geist, sans-serif",
							fontSize: 20,
							fontWeight: 400,
							lineHeight: "26px",
							letterSpacing: "-0.4px",
							opacity: inView ? .5 : 0,
							transform: inView ? "translateY(0)" : "translateY(30px)",
							transition: `opacity 800ms ${ease} ${allWords.length * 90 + 100}ms, transform 800ms ${ease} ${allWords.length * 90 + 100}ms`
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { display: "block" },
							children: "A meditation app tailored to your biology"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { display: "block" },
							children: "and lifestyle, powered by AI."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							marginTop: 24,
							display: "flex",
							justifyContent: "center",
							opacity: inView ? 1 : 0,
							transform: inView ? "translateY(0)" : "translateY(30px)",
							transition: `opacity 800ms ${ease} ${allWords.length * 90 + 300}ms, transform 800ms ${ease} ${allWords.length * 90 + 300}ms`
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							style: {
								display: "flex",
								height: 56,
								padding: "8px 32px",
								justifyContent: "center",
								alignItems: "center",
								gap: 8,
								borderRadius: 48,
								border: "1px solid rgba(18, 34, 22, 0.30)",
								background: "transparent",
								color: "#122216",
								fontFamily: "Geist, sans-serif",
								fontSize: 17,
								fontWeight: 500,
								lineHeight: "normal",
								letterSpacing: "-0.34px",
								cursor: "pointer"
							},
							children: "Join waitlist"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							marginTop: 33,
							display: "flex",
							justifyContent: "center",
							opacity: inView ? 1 : 0,
							transform: inView ? "translateY(0)" : "translateY(80px)",
							transition: `opacity 1100ms ${ease} ${allWords.length * 90 + 500}ms, transform 1100ms ${ease} ${allWords.length * 90 + 500}ms`
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: Phone,
							alt: "Shyen mobile app",
							style: {
								display: "block",
								width: "100%",
								maxWidth: 490,
								height: "auto"
							},
							draggable: false
						})
					})
				]
			})
		})
	});
}
var bottomGradient = "https://qclay.design/lovable/shyen/bottom_gradient.png";
function FinalCtaSection() {
	const { ref, inView } = useInView({ threshold: .15 });
	const line1 = [
		"Experience",
		"smarter",
		"mental"
	];
	const line2 = [
		"wellness",
		"with",
		"Shyen"
	];
	const allWords = [...line1, ...line2];
	const ease = "cubic-bezier(0.22,1,0.36,1)";
	const paragraphDelay = allWords.length * 90 + 100;
	const formDelay = allWords.length * 90 + 300;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		className: "relative w-full overflow-hidden",
		style: {
			height: "100vh",
			background: "#122115"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: bottomGradient,
			alt: "",
			"aria-hidden": true,
			style: {
				position: "absolute",
				top: 0,
				left: "50%",
				width: "100%",
				height: "auto",
				zIndex: 0,
				pointerEvents: "none",
				transform: "translateX(-50%) scaleX(1.4)"
			},
			draggable: false
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			style: {
				position: "relative",
				zIndex: 1,
				width: "100%",
				marginTop: 500
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1440px]",
				style: {
					paddingLeft: 24,
					paddingRight: 24,
					textAlign: "center"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						style: {
							margin: 0,
							color: "#EAF1C1",
							fontFamily: "Halant, serif",
							fontSize: 72,
							fontWeight: 400,
							lineHeight: "72px",
							letterSpacing: "-3.6px",
							textAlign: "center"
						},
						children: [line1, line2].map((line, lineIdx) => {
							const startIdx = lineIdx === 0 ? 0 : line1.length;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: {
									display: "block",
									overflow: "hidden"
								},
								children: line.map((w, i) => {
									const globalIdx = startIdx + i;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: {
											display: "inline-block",
											marginRight: i < line.length - 1 ? "0.28em" : 0,
											opacity: inView ? 1 : 0,
											transform: inView ? "translateY(0)" : "translateY(40px)",
											transition: `opacity 800ms ${ease} ${globalIdx * 90}ms, transform 800ms ${ease} ${globalIdx * 90}ms`
										},
										children: w
									}, i);
								})
							}, lineIdx);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						style: {
							marginTop: 24,
							marginBottom: 0,
							color: "#FBFFE3",
							fontFamily: "Geist, sans-serif",
							fontSize: 20,
							fontWeight: 400,
							lineHeight: "26px",
							letterSpacing: "-0.4px",
							opacity: inView ? .5 : 0,
							transform: inView ? "translateY(0)" : "translateY(30px)",
							transition: `opacity 800ms ${ease} ${paragraphDelay}ms, transform 800ms ${ease} ${paragraphDelay}ms`
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { display: "block" },
							children: "Personalized guidance designed to help you"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { display: "block" },
							children: "relax, focus, and feel better every day."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							marginTop: 24,
							display: "flex",
							justifyContent: "center",
							opacity: inView ? 1 : 0,
							transform: inView ? "translateY(0)" : "translateY(30px)",
							transition: `opacity 800ms ${ease} ${formDelay}ms, transform 800ms ${ease} ${formDelay}ms`
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "flex items-center justify-between",
							style: {
								width: "583px",
								maxWidth: "100%",
								padding: "7px 8px 7px 7px",
								borderRadius: "58px",
								background: "rgba(0, 0, 0, 0.16)",
								backdropFilter: "blur(15px)",
								WebkitBackdropFilter: "blur(15px)"
							},
							onSubmit: (e) => e.preventDefault(),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								placeholder: "Enter your email address",
								className: "flex-1 bg-transparent border-0 outline-none px-5 text-white placeholder:text-white/40",
								style: {
									fontFamily: "Geist, sans-serif",
									fontSize: "18px",
									lineHeight: "20px",
									letterSpacing: "-0.18px"
								}
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "transition-transform duration-300 hover:scale-[1.02]",
								style: {
									height: "48px",
									padding: "8px 24px",
									borderRadius: "48px",
									background: "#FFF",
									color: "#091814",
									fontFamily: "Geist, sans-serif",
									fontSize: "17px",
									fontWeight: 500,
									letterSpacing: "-0.34px"
								},
								children: "Join waitlist"
							})]
						})
					})
				]
			})
		})]
	});
}
var googlePlay = "https://qclay.design/lovable/shyen/google_play.svg";
var appleMarket = "https://qclay.design/lovable/shyen/apple_market.svg";
var instagram = "https://qclay.design/lovable/shyen/instagram.svg";
var linkedin = "https://qclay.design/lovable/shyen/linkedin.svg";
var youtube = "https://qclay.design/lovable/shyen/youtube.svg";
var logoFooter = "https://qclay.design/lovable/shyen/logo_footer.svg";
var ease = "cubic-bezier(0.22,1,0.36,1)";
var iconBtn = {
	display: "flex",
	width: 46,
	height: 46,
	justifyContent: "center",
	alignItems: "center",
	flexShrink: 0,
	borderRadius: 56,
	background: "rgba(234, 241, 193, 0.10)"
};
var linkStyle = {
	color: "rgba(234, 241, 193, 0.70)",
	fontFamily: "Geist, sans-serif",
	fontSize: 16,
	fontWeight: 400,
	lineHeight: "16px",
	textDecoration: "none"
};
var titleStyle = {
	color: "rgba(234, 241, 193, 0.70)",
	fontFamily: "Halant, serif",
	fontSize: 15,
	fontWeight: 400,
	lineHeight: "16px",
	letterSpacing: "0.45px",
	textTransform: "uppercase",
	opacity: .5,
	margin: 0
};
function fadeUp(inView, delay, distance = 20) {
	return {
		opacity: inView ? 1 : 0,
		transform: inView ? "translateY(0)" : `translateY(${distance}px)`,
		transition: `opacity 700ms ${ease} ${delay}ms, transform 700ms ${ease} ${delay}ms`
	};
}
function fadeRight(inView, delay) {
	return {
		opacity: inView ? 1 : 0,
		transform: inView ? "translateX(0)" : "translateX(-20px)",
		transition: `opacity 700ms ${ease} ${delay}ms, transform 700ms ${ease} ${delay}ms`
	};
}
function Footer() {
	const { ref, inView } = useInView({ threshold: .1 });
	const d = {
		description: 0,
		appRow: 200,
		appStep: 120,
		logo: 700,
		col1Title: 800,
		col1Step: 100,
		col2Title: 1300,
		col2Step: 100,
		legal: 2e3,
		legalStep: 120
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		ref,
		style: {
			background: "#122115",
			position: "relative",
			width: "100%",
			overflow: "hidden",
			paddingLeft: 40,
			paddingRight: 40,
			paddingBottom: 48
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					display: "flex",
					justifyContent: "space-between",
					gap: 80,
					flexWrap: "wrap",
					marginTop: 110
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: { maxWidth: 640 },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						style: {
							margin: 0,
							color: "#EAF1C1",
							fontFamily: "Halant, serif",
							fontSize: 28,
							fontWeight: 400,
							lineHeight: "28px",
							letterSpacing: "-0.56px",
							...fadeUp(inView, d.description, 30)
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: { display: "block" },
								children: "Shyen is 24/7 support for your mind. Created by"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: { display: "block" },
								children: "renowned clinicians, it gives you the support you"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: { display: "block" },
								children: "need, right when you need it."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							marginTop: 48,
							display: "flex",
							alignItems: "center"
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									display: "flex",
									gap: 8
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									style: {
										...iconBtn,
										...fadeUp(inView, d.appRow)
									},
									"aria-label": "Google Play",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: googlePlay,
										alt: "",
										style: {
											width: 18,
											height: 20
										}
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									style: {
										...iconBtn,
										...fadeUp(inView, d.appRow + d.appStep)
									},
									"aria-label": "App Store",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: appleMarket,
										alt: "",
										style: {
											width: 25,
											height: 25
										}
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									marginLeft: 16,
									color: "rgba(234, 241, 193, 0.70)",
									fontFamily: "Geist, sans-serif",
									fontSize: 16,
									fontWeight: 300,
									lineHeight: "16px",
									letterSpacing: "0.16px",
									...fadeUp(inView, d.appRow + d.appStep * 2)
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: { display: "block" },
									children: "Download"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: {
										display: "block",
										marginTop: 4
									},
									children: "the App"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									marginLeft: 12,
									display: "flex",
									padding: "8px 12px",
									justifyContent: "center",
									alignItems: "center",
									gap: 8,
									borderRadius: 40,
									border: "1px solid #FAFF67",
									...fadeUp(inView, d.appRow + d.appStep * 3)
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: {
										color: "#FAFF67",
										fontFamily: "Geist, sans-serif",
										fontSize: 11,
										fontWeight: 400,
										letterSpacing: "0.11px"
									},
									children: "COMING SOON"
								})
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						display: "flex",
						gap: 133
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						style: {
							...titleStyle,
							...fadeUp(inView, d.col1Title)
						},
						children: "SHYEN AI"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						style: {
							listStyle: "none",
							margin: 0,
							padding: 0,
							marginTop: 28,
							display: "flex",
							flexDirection: "column",
							gap: 24
						},
						children: [
							"Home",
							"Meditations",
							"Our Products",
							"About us"
						].map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							style: fadeUp(inView, d.col1Title + d.col1Step * (i + 1)),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								style: linkStyle,
								children: l
							})
						}, l))
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						style: {
							...titleStyle,
							...fadeUp(inView, d.col2Title)
						},
						children: "GET IN TOUCH"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							marginTop: 28,
							display: "flex",
							flexDirection: "column",
							gap: 24
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:Team@shyenai.support",
								style: {
									...linkStyle,
									...fadeUp(inView, d.col2Title + d.col2Step)
								},
								children: "Team@shyenai.support"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "tel:+9154355539430",
								style: {
									...linkStyle,
									marginTop: -14,
									...fadeUp(inView, d.col2Title + d.col2Step * 2)
								},
								children: "+91 5435 5539 430"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									...linkStyle,
									...fadeUp(inView, d.col2Title + d.col2Step * 3)
								},
								children: "Follow us"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									display: "flex",
									gap: 8,
									marginTop: -4
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#",
										style: {
											...iconBtn,
											...fadeUp(inView, d.col2Title + d.col2Step * 4)
										},
										"aria-label": "Instagram",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: instagram,
											alt: "",
											style: {
												width: 16,
												height: 17
											}
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#",
										style: {
											...iconBtn,
											...fadeUp(inView, d.col2Title + d.col2Step * 5)
										},
										"aria-label": "LinkedIn",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: linkedin,
											alt: "",
											style: {
												width: 16,
												height: 15
											}
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#",
										style: {
											...iconBtn,
											...fadeUp(inView, d.col2Title + d.col2Step * 6)
										},
										"aria-label": "YouTube",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: youtube,
											alt: "",
											style: {
												width: 17,
												height: 14
											}
										})
									})
								]
							})
						]
					})] })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: fadeUp(inView, d.logo, 30),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: logoFooter,
					alt: "",
					style: {
						display: "block",
						width: "100%",
						height: "auto",
						maxWidth: "72%",
						WebkitMaskImage: "linear-gradient(to top, transparent 18%, black 109%)",
						maskImage: "linear-gradient(to top, transparent 18%, black 109%)"
					},
					draggable: false
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					marginTop: -50,
					display: "flex",
					alignItems: "center",
					justifyContent: "flex-end",
					gap: 20
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: {
							color: "#EAF1C1",
							fontFamily: "Halant, serif",
							fontSize: 16,
							fontWeight: 400,
							letterSpacing: "-0.32px",
							opacity: .5,
							marginRight: 50,
							...fadeRight(inView, d.legal)
						},
						children: "© 2026 shyen.ai, All Rights Reserved"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						style: {
							color: "rgba(234, 241, 193, 0.70)",
							fontFamily: "Geist, sans-serif",
							fontSize: 13,
							fontWeight: 400,
							lineHeight: "16px",
							textDecorationLine: "underline",
							opacity: .5,
							...fadeRight(inView, d.legal + d.legalStep)
						},
						children: "Privacy & Policy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						style: {
							color: "rgba(234, 241, 193, 0.70)",
							fontFamily: "Geist, sans-serif",
							fontSize: 13,
							fontWeight: 400,
							lineHeight: "16px",
							textDecorationLine: "underline",
							opacity: .5,
							...fadeRight(inView, d.legal + d.legalStep * 2)
						},
						children: "Terms & conditions"
					})
				]
			})
		]
	});
}
function Index() {
	useSmoothScroll();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CareSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolkitSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollabLogos, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConnectedSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductsSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecommendedSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoverSliderSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoriesSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCtaSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { Index as component };
