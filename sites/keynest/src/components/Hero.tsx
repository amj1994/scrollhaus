import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Zap,
  LockKeyhole,
  Fingerprint,
  ArrowRightCircle,
  Menu,
  X,
} from 'lucide-react'

const GUMLET_VIDEO = 'assets/video/keynest-hero.mp4'

const NAV_LINKS = ['Vault', 'Pricing', 'Apps', 'Blog', 'Support']

const LogoSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="none"
    overflow="visible"
    viewBox="0 0 256 256"
  >
    <path
      d="M 64 128 L 64.5 128 L 32 95 L 0 64 L 0 0 L 64 0 L 128 64 L 128 64.5 L 161 32 L 192 0 L 256 0 L 256 64 L 192 128 L 128 128 L 128 192 L 96 223 L 63.5 256 L 0 256 L 0 192 Z M 256 192 L 224 223 L 191.5 256 L 128 256 L 128 192 L 192 128 L 256 128 Z"
      fill="#192837"
    />
  </svg>
)

const fadeUp = (delay: number) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] as number[] },
  },
})

const iconStyle: React.CSSProperties = {
  display: 'inline-block',
  verticalAlign: 'middle',
  position: 'relative',
  top: '-2px',
  color: '#192837',
}

export default function Hero() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div
      className="relative w-full min-h-screen"
      style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text)', background: '#F0EEE8' }}
    >
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={GUMLET_VIDEO}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay — very light to keep text readable on bright video */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(242,242,238,0.18)' }}
      />

      {/* Navbar */}
      <nav
        className="relative z-10"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        <div
          className="mx-auto flex items-center justify-between px-5 sm:px-8 py-4 sm:py-5"
          style={{ maxWidth: 1280 }}
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <LogoSVG />
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '1.1rem',
                color: 'var(--color-text)',
                letterSpacing: '-0.01em',
              }}
            >
              KeyNest
            </span>
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm font-medium transition-opacity duration-150"
                style={{ color: 'var(--color-text)', opacity: 0.7 }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.7')}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#"
              className="text-sm font-semibold rounded-full px-5 py-2.5 transition-all duration-150 hover:brightness-110"
              style={{
                background: 'var(--color-accent)',
                color: '#fff',
              }}
            >
              Start For Free
            </a>
            <a
              href="#"
              className="text-sm font-medium rounded-full px-5 py-2.5 transition-all duration-150 hover:brightness-95"
              style={{
                background: 'var(--color-login-bg)',
                color: 'var(--color-text)',
              }}
            >
              Sign In
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg"
            style={{ color: 'var(--color-text)' }}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-20"
              style={{ background: 'rgba(25,40,55,0.35)', backdropFilter: 'blur(4px)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Sheet */}
            <motion.div
              className="fixed right-0 top-0 z-30 flex flex-col"
              style={{
                width: 'min(88vw, 360px)',
                height: '100dvh',
                background: '#CFC8C5',
                boxShadow: '-12px 0 48px rgba(25,40,55,0.18)',
              }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5">
                <div className="flex items-center gap-2">
                  <LogoSVG />
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      color: 'var(--color-text)',
                    }}
                  >
                    KeyNest
                  </span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  style={{ color: 'var(--color-text)' }}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Divider */}
              <div style={{ height: '1px', background: 'rgba(25,40,55,0.12)', marginBottom: 8 }} />

              {/* Nav links */}
              <div className="flex flex-col px-6 py-4 gap-1 flex-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link}
                    href="#"
                    className="text-base font-medium py-3 border-b"
                    style={{
                      color: 'var(--color-text)',
                      borderColor: 'rgba(25,40,55,0.1)',
                    }}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.18 + i * 0.07, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {link}
                  </motion.a>
                ))}
              </div>

              {/* Bottom CTAs */}
              <div className="px-6 pb-8 flex flex-col gap-3">
                <a
                  href="#"
                  className="text-sm font-semibold rounded-full px-5 py-3 text-center"
                  style={{ background: 'var(--color-accent)', color: '#fff' }}
                >
                  Start For Free
                </a>
                <a
                  href="#"
                  className="text-sm font-medium rounded-full px-5 py-3 text-center"
                  style={{ background: 'var(--color-login-bg)', color: 'var(--color-text)' }}
                >
                  Sign In
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero content */}
      <div
        className="relative z-10 mx-auto px-5 sm:px-8"
        style={{
          maxWidth: 1280,
          paddingTop: 'clamp(40px, 8vw, 72px)',
        }}
      >
        <div style={{ maxWidth: 560 }}>
          {/* Heading */}
          <motion.h1
            variants={fadeUp(0)}
            initial="hidden"
            animate="visible"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.65rem, 5vw, 3rem)',
              lineHeight: 1.02,
              letterSpacing: '-0.02em',
              color: '#192837',
              marginBottom: 24,
              fontWeight: 700,
            }}
          >
            <Zap size={24} style={iconStyle} />{' '}
            Seal Every Login{' '}
            <LockKeyhole size={24} style={iconStyle} />{' '}
            Behind One Unbreakable Key{' '}
            <Fingerprint size={24} style={iconStyle} />
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp(0.15)}
            initial="hidden"
            animate="visible"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
              lineHeight: 1.65,
              opacity: 0.8,
              maxWidth: 560,
              marginBottom: 36,
              color: '#192837',
            }}
          >
            No more sticky notes or reused passwords. KeyNest holds everything in
            encrypted storage, fills it in with one tap, and watches the breach
            feeds so you don't have to.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeUp(0.3)}
            initial="hidden"
            animate="visible"
          >
            <motion.a
              href="#"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 32,
                background: 'var(--color-accent)',
                color: '#fff',
                borderRadius: 50,
                padding: '17px 24px',
                fontWeight: 600,
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                boxShadow: '0 4px 24px rgba(76,59,232,0.28)',
                minWidth: 210,
                textDecoration: 'none',
                fontFamily: 'var(--font-body)',
              }}
              whileHover={{ scale: 1.04, filter: 'brightness(1.1)' }}
              whileTap={{ scale: 0.96 }}
            >
              <span>Start Free</span>
              <ArrowRightCircle size={20} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
