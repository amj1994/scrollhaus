import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Leaf,
  Zap,
  ShieldCheck,
  Sparkles,
  Droplet,
  ArrowRight,
  Menu,
  X,
  ShoppingBag,
  Plus,
  Minus,
  PhoneCall,
} from "lucide-react";

const FLAVOR = "#ffd5a4";
const HERO_VIDEO = "/hero.mp4";

const INGREDIENTS = [
  {
    icon: Leaf,
    title: "Real Fruit Extracts",
    desc: "Made with real peaches for a naturally delicious taste.",
  },
  {
    icon: Droplet,
    title: "Essential Hydration",
    desc: "Electrolytes & minerals to support your daily hydration.",
  },
  {
    icon: ShieldCheck,
    title: "Better for You",
    desc: "No artificial colors, flavors, or preservatives.",
  },
];

const NAV_ITEMS = ["Products", "Ingredients", "About Us", "Stories"];

type Toast = { id: number; message: string };
type CartItem = { id: string; name: string; price: number; qty: number };

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Products");
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  const pushToast = (message: string) => {
    const id = Date.now();
    setToasts((t) => [...t, { id, message }]);
    window.setTimeout(() => {
      setToasts((t) => t.filter((x) => x.id !== id));
    }, 3000);
  };

  const navigate = (tab: string) => {
    setActiveTab(tab);
    setMenuOpen(false);
    pushToast(`Navigated to ${tab}`);
  };

  const quickAdd = () => {
    setCart((c) => {
      const existing = c.find((i) => i.id === "peach-perfect");
      if (existing) {
        return c.map((i) =>
          i.id === "peach-perfect" ? { ...i, qty: i.qty + 1 } : i,
        );
      }
      return [...c, { id: "peach-perfect", name: "Peach Perfect", price: 2.99, qty: 1 }];
    });
    pushToast("Added Peach Perfect to cart");
  };

  const updateQty = (id: string, delta: number) => {
    setCart((c) =>
      c
        .map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0),
    );
  };

  const removeItem = (id: string) => {
    setCart((c) => c.filter((i) => i.id !== id));
  };

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const itemCount = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-[#ffd5a4] selection:text-black overflow-x-hidden">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Oswald:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div
        className="pointer-events-none absolute inset-0 -z-10 transition-all duration-1000 ease-in-out"
        style={{
          background: `radial-gradient(circle 500px at 50% 50%, ${FLAVOR}15, transparent)`,
        }}
      />

      {/* Toasts */}
      <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2">
        <AnimatePresence>
          {toasts.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: -50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="flex items-center gap-3 bg-[#131314] border border-white/10 px-6 py-3 rounded-2xl shadow-2xl"
            >
              <span
                className="w-2 h-2 rounded-full animate-ping"
                style={{ backgroundColor: FLAVOR }}
              />
              <span className="text-sm font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                {t.message}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled ? "bg-black/85 backdrop-blur-md py-4 border-b border-white/5" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1680px] mx-auto px-8 lg:px-12 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 px-4 py-2 bg-[#1a1b1e]/80 backdrop-blur-md border border-white/10 rounded-xl hover:bg-[#232226] transition-colors"
          >
            <Zap size={18} style={{ color: FLAVOR }} fill={FLAVOR} />
            <span
              className="font-bold tracking-tight"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: "20px" }}
            >
              Verve
            </span>
          </motion.div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="p-2.5 rounded-xl bg-[#1a1b1e]/80 border border-white/10 hover:bg-[#232226] transition-colors"
            >
              <Menu size={18} />
            </button>
            <motion.button
              type="button"
              onClick={() => setContactOpen(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-2.5 rounded-xl bg-white text-black font-semibold shadow-md hover:bg-white/95 transition-colors"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: 16 }}
            >
              Contact Us
            </motion.button>
            <button
              type="button"
              onClick={() => setCartOpen(true)}
              aria-label="Open cart"
              className="relative p-2.5 rounded-xl bg-[#1a1b1e]/80 border border-white/10 hover:bg-[#232226] transition-colors"
            >
              <ShoppingBag size={18} />
              {itemCount > 0 && (
                <span
                  className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full text-[10px] font-bold flex items-center justify-center text-black"
                  style={{ backgroundColor: FLAVOR }}
                >
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-80 h-full bg-[#0d0c0e] border-l border-white/5 z-50 p-6 flex flex-col justify-between shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-2">
                    <span className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                      <Zap size={18} className="text-black" fill="black" />
                    </span>
                    <span className="text-xl font-bold" style={{ fontFamily: "'Inter', sans-serif" }}>
                      verve
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close menu"
                    className="p-1.5 rounded-full bg-white/5 border border-white/10"
                  >
                    <X size={16} />
                  </button>
                </div>
                <nav className="flex flex-col">
                  {NAV_ITEMS.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => navigate(item)}
                      className={`text-left text-lg font-medium py-2 transition-colors ${
                        activeTab === item ? "" : "text-gray-400 hover:text-white"
                      }`}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        color: activeTab === item ? FLAVOR : undefined,
                      }}
                    >
                      {item}
                    </button>
                  ))}
                </nav>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-[#161719] flex items-center justify-center shrink-0">
                    <PhoneCall size={16} />
                  </span>
                  <div>
                    <div
                      className="text-[10px] uppercase tracking-widest text-gray-500"
                      style={{ fontFamily: "monospace" }}
                    >
                      Call Support
                    </div>
                    <div className="text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                      +1 (800) 555-VERVE
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    setContactOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-black"
                  style={{ backgroundColor: FLAVOR, fontFamily: "'Inter', sans-serif" }}
                >
                  Contact Us
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero */}
      <section className="relative min-h-screen pt-32 pb-16 lg:py-0 lg:h-screen flex items-center justify-center z-10 overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-90 scale-100 lg:scale-[1.05] -z-10 transition-all duration-1000 ease-in-out"
          src={HERO_VIDEO}
          autoPlay
          loop
          muted
          playsInline
          style={{ filter: "hue-rotate(0deg) saturate(1.1)" }}
        />
        <div
          className="pointer-events-none absolute w-96 h-96 rounded-full blur-[140px] opacity-25 mix-blend-screen -z-10"
          style={{ backgroundColor: FLAVOR }}
        />

        <div className="max-w-[1680px] mx-auto px-8 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 z-20">
            <h1
              className="font-normal tracking-tight text-[2.6rem] sm:text-[3.8rem] lg:text-[67px] leading-[1.1] lg:leading-[80px] uppercase"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              POWERFUL
              <br />
              DRINKS.
              <br />
              BUILT FOR
              <br />
              EVERY
              <br />
              ADVENTURE.
            </h1>
          </div>

          <div className="lg:col-span-3 order-1 lg:order-2 h-[220px] sm:h-[300px] lg:h-full" />

          <div className="lg:col-span-4 order-3 z-20 space-y-6 lg:items-end lg:text-right flex flex-col">
            <h2
              className="text-3xl lg:text-[32px] font-semibold tracking-tight leading-[1.15]"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Clean Ingredients.
              <br />
              Real Results.
            </h2>
            <div className="flex flex-col gap-4 w-full items-end">
              {INGREDIENTS.map((ing, idx) => {
                const Icon = ing.icon;
                return (
                  <motion.div
                    key={ing.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-center gap-4 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[20px] p-[18px] w-[300px] max-w-full hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 text-left"
                  >
                    <span className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                      <Icon size={18} style={{ color: FLAVOR }} />
                    </span>
                    <div>
                      <div
                        className="font-semibold"
                        style={{ fontFamily: "'Inter', sans-serif", fontSize: 18 }}
                      >
                        {ing.title}
                      </div>
                      <div
                        className="text-gray-400"
                        style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: "19px" }}
                      >
                        {ing.desc}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-6 right-8 z-30 text-[11px] tracking-widest text-white/35 font-medium uppercase"
          style={{ fontFamily: "monospace" }}
        >
          V.01
        </div>
      </section>

      {/* Cart */}
      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCartOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-full sm:w-[28rem] h-full bg-[#0d0c0e] border-l border-white/10 z-50 p-6 flex flex-col justify-between shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <ShoppingBag size={20} style={{ color: FLAVOR }} />
                    <span className="text-lg font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Your Cart ({itemCount} items)
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setCartOpen(false)}
                    aria-label="Close cart"
                    className="p-1.5 rounded-full bg-white/5 border border-white/10"
                  >
                    <X size={16} />
                  </button>
                </div>

                {cart.length === 0 ? (
                  <div className="flex flex-col items-center text-center gap-4 py-12">
                    <span className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-gray-500">
                      <ShoppingBag size={28} />
                    </span>
                    <div>
                      <div className="font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Your cart is empty
                      </div>
                      <div className="text-sm text-gray-400 mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Add a drink to get started.
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={quickAdd}
                      className="px-5 py-2.5 rounded-xl font-semibold text-black"
                      style={{ backgroundColor: FLAVOR, fontFamily: "'Inter', sans-serif" }}
                    >
                      Quick Add Peach Perfect
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-3">
                    {cart.map((item) => (
                      <div key={item.id} className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex items-center gap-4">
                        <span className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-2xl">
                          🍑
                        </span>
                        <div className="flex-1">
                          <div className="font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                            {item.name}
                          </div>
                          <div style={{ color: FLAVOR, fontFamily: "monospace" }}>
                            ${item.price.toFixed(2)}
                          </div>
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              type="button"
                              onClick={() => updateQty(item.id, -1)}
                              className="w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="text-sm w-4 text-center">{item.qty}</span>
                            <button
                              type="button"
                              onClick={() => updateQty(item.id, 1)}
                              className="w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center"
                            >
                              <Plus size={12} />
                            </button>
                            <button
                              type="button"
                              onClick={() => removeItem(item.id)}
                              className="ml-auto text-xs text-red-400 hover:text-red-300"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div
                      className="rounded-2xl p-4 flex items-center gap-3"
                      style={{ backgroundColor: `${FLAVOR}0d`, borderColor: `${FLAVOR}1a`, borderWidth: 1 }}
                    >
                      <Sparkles size={16} style={{ color: FLAVOR }} />
                      <span className="text-xs text-gray-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                        You've unlocked free shipping!
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {cart.length > 0 && (
                <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between text-sm text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <span className="text-gray-400">Shipping</span>
                    <span className="text-green-400">FREE</span>
                  </div>
                  <div
                    className="flex items-center justify-between text-base font-semibold"
                    style={{ fontFamily: "monospace" }}
                  >
                    <span>Total</span>
                    <span style={{ color: FLAVOR }}>${subtotal.toFixed(2)}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setCartOpen(false);
                      pushToast("Order placed — thank you!");
                      setCart([]);
                    }}
                    className="w-full py-3 rounded-xl text-black font-bold"
                    style={{
                      backgroundColor: FLAVOR,
                      boxShadow: `0 8px 24px -6px ${FLAVOR}40`,
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    Proceed to Checkout
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Contact modal */}
      <AnimatePresence>
        {contactOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setContactOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-md w-full bg-[#0d0c0e] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Get In Touch
                </h3>
                <button
                  type="button"
                  onClick={() => setContactOpen(false)}
                  aria-label="Close"
                  className="p-1.5 rounded-full bg-white/5 border border-white/10"
                >
                  <X size={16} />
                </button>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setContactOpen(false);
                  pushToast("Message sent — we'll be in touch!");
                }}
                className="flex flex-col gap-4"
              >
                <label className="flex flex-col gap-1.5">
                  <span
                    className="text-xs uppercase tracking-wider text-gray-500"
                    style={{ fontFamily: "monospace" }}
                  >
                    Full Name
                  </span>
                  <input
                    required
                    type="text"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#ffd5a4] transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span
                    className="text-xs uppercase tracking-wider text-gray-500"
                    style={{ fontFamily: "monospace" }}
                  >
                    Email Address
                  </span>
                  <input
                    required
                    type="email"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#ffd5a4] transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span
                    className="text-xs uppercase tracking-wider text-gray-500"
                    style={{ fontFamily: "monospace" }}
                  >
                    Your Message
                  </span>
                  <textarea
                    required
                    rows={3}
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#ffd5a4] transition-colors resize-none"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </label>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-black"
                  style={{ backgroundColor: FLAVOR, fontFamily: "'Inter', sans-serif" }}
                >
                  Send Message
                  <ArrowRight size={16} />
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
