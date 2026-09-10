import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = ["Features", "Solutions", "Pricing", "About"];

// Invented customer wordmarks — the source spec used real, trademarked
// company logos (Google, Amazon, Microsoft, ...) presented as Kelo
// customers, which implies partnerships that don't exist. Kept the
// mechanic (a faded, staggered logo wall that lifts on hover) but swapped
// in names that aren't real companies.
const CUSTOMERS = ["Solstice", "Northline", "Meridian", "Ashgrove", "Ridgeline", "Vaultic", "Cardinal", "Halcyon", "Fenwick"];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.5 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

function Wordmark({ label }: { label: string }) {
  return (
    <motion.span
      variants={itemVariants}
      whileHover={{ scale: 1.1, opacity: 1 }}
      className="text-lg font-semibold tracking-tight text-white/90"
    >
      {label}
    </motion.span>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative min-h-[110vh] w-full flex flex-col bg-black">
      {/* CSS-only ambient background in place of a hosted hero video. */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="kelo-orb kelo-orb-a absolute w-[60vw] h-[60vw] rounded-full bg-indigo-500/30 blur-[120px]" />
        <div className="kelo-orb kelo-orb-b absolute w-[45vw] h-[45vw] rounded-full bg-fuchsia-500/20 blur-[120px]" />
        <div className="kelo-orb kelo-orb-c absolute w-[35vw] h-[35vw] rounded-full bg-cyan-400/15 blur-[110px]" />
      </div>
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* Nav */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-6 left-0 right-0 z-50 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between p-2 px-4 rounded-full bg-white/5 backdrop-blur-xl border border-white/10">
            <span className="text-[15px] font-bold tracking-tight text-white">Kelo</span>

            <div className="hidden md:flex items-center gap-5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="relative group text-[13px] font-medium text-white/70 hover:text-white"
                >
                  {link}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-2">
              <button type="button" className="text-[13px] font-medium text-white/70 hover:text-white px-2 py-1.5">
                Log in
              </button>
              <button
                type="button"
                className="rounded-full px-4 py-1.5 text-[13px] font-semibold bg-white text-black hover:bg-white/90 hover:scale-105 active:scale-95 transition-transform"
              >
                Get Started
              </button>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-[5px]"
            >
              <span
                className={`w-5 h-[2px] bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
              />
              <span className={`w-5 h-[2px] bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span
                className={`w-5 h-[2px] bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
              />
            </button>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="md:hidden mt-2 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 p-4 flex flex-col gap-3"
              >
                {NAV_LINKS.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="text-[15px] py-2 px-3 rounded-lg hover:bg-white/10 text-white/90"
                  >
                    {link}
                  </a>
                ))}
                <div className="border-t border-white/10 pt-3 mt-1 flex flex-col gap-2">
                  <button type="button" className="text-left text-[15px] font-medium text-white/70 hover:text-white">
                    Log in
                  </button>
                  <button
                    type="button"
                    className="rounded-full px-5 py-2.5 text-[15px] font-semibold bg-white text-black text-center"
                  >
                    Get Started
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Hero content */}
      <div className="relative flex-1 flex flex-col items-center justify-center text-center px-6 pt-[148px] pb-16 z-10">
        <div className="flex flex-col items-center w-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="font-semibold text-5xl md:text-6xl lg:text-[66px] leading-[1.1] tracking-[-0.02em] text-white max-w-4xl mt-0 mb-5"
          >
            The Future of
            <br />
            The Next-Gen <span className="italic">Chatbot</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-base md:text-lg text-white/90 max-w-[480px] leading-relaxed mb-8"
          >
            The smarter way to manage sales starts with using tools that streamline every step of the process
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col items-center gap-3"
          >
            <button
              type="button"
              style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)" }}
              className="rounded-full px-8 py-4 text-base font-semibold bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/20 shadow-2xl hover:scale-105 active:scale-95 transition-transform"
            >
              Get 14 Days Free Trial
            </button>
            <span className="text-sm text-white/60">No Credit Card Required</span>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="mt-[60px] flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 hover:opacity-80 transition-opacity duration-500"
          >
            {CUSTOMERS.map((name) => (
              <Wordmark key={name} label={name} />
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes kelo-drift-a { 0%,100% { transform: translate(-10%, -10%); } 50% { transform: translate(5%, 8%); } }
        @keyframes kelo-drift-b { 0%,100% { transform: translate(30%, 20%); } 50% { transform: translate(15%, 0%); } }
        @keyframes kelo-drift-c { 0%,100% { transform: translate(60%, 60%); } 50% { transform: translate(50%, 45%); } }
        .kelo-orb-a { top: -10%; left: -10%; animation: kelo-drift-a 18s ease-in-out infinite; }
        .kelo-orb-b { top: 10%; left: 30%; animation: kelo-drift-b 22s ease-in-out infinite; }
        .kelo-orb-c { top: 30%; left: 40%; animation: kelo-drift-c 26s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
