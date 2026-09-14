import { useState } from 'react'

const NAV_LINKS = ['Work', 'Studio', 'Careers', 'Journal']

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(prev => !prev)

  return (
    <>
      {/* Main navbar */}
      <nav
        style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 10 }}
        className="flex flex-row justify-between items-center px-5 sm:px-8 py-4 sm:py-5"
      >
        {/* Logo */}
        <div className="flex flex-row items-center gap-3">
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 500,
              fontSize: 'clamp(21px, 2.5vw, 26px)',
              letterSpacing: '-0.02em',
              color: '#fff',
            }}
          >
            Halogen&#174;
          </span>
          <span
            style={{
              fontSize: 'clamp(25px, 3vw, 30px)',
              color: '#fff',
              letterSpacing: '-0.02em',
              userSelect: 'none',
              lineHeight: 1,
            }}
            aria-hidden="true"
          >
            ✳︎
          </span>
        </div>

        {/* Desktop nav centre */}
        <div className="hidden md:flex flex-row items-center" style={{ fontSize: '23px', color: '#fff' }}>
          {NAV_LINKS.map((link, i) => (
            <span key={link}>
              <a
                href="#"
                className="hover:opacity-60 transition-opacity duration-200"
                style={{ color: '#fff', textDecoration: 'none' }}
              >
                {link}
              </a>
              {/* whiteSpace:'pre' is load-bearing: each wrapper span is a flex item, and a
                  flex item's trailing space collapses at its box edge, closing up the comma. */}
              {i < NAV_LINKS.length - 1 && <span style={{ opacity: 0.5, whiteSpace: 'pre' }}>, </span>}
            </span>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#"
          className="hidden md:inline-block hover:opacity-60 transition-opacity duration-200"
          style={{
            fontSize: '23px',
            color: '#fff',
            textDecoration: 'underline',
            textUnderlineOffset: '2px',
          }}
        >
          Get in touch
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-[5px]"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}
        >
          <span
            style={{
              display: 'block',
              width: '24px',
              height: '2px',
              background: '#fff',
              transition: 'transform 300ms, opacity 300ms',
              transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none',
            }}
          />
          <span
            style={{
              display: 'block',
              width: '24px',
              height: '2px',
              background: '#fff',
              transition: 'opacity 300ms',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: 'block',
              width: '24px',
              height: '2px',
              background: '#fff',
              transition: 'transform 300ms, opacity 300ms',
              transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none',
            }}
          />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className="md:hidden"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9,
          background: 'rgba(0,0,0,0.90)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          paddingLeft: '2rem',
          gap: '2rem',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 300ms',
        }}
      >
        {NAV_LINKS.map(link => (
          <a
            key={link}
            href="#"
            onClick={() => setMenuOpen(false)}
            style={{
              fontSize: '32px',
              fontWeight: 500,
              color: '#fff',
              textDecoration: 'none',
            }}
          >
            {link}
          </a>
        ))}
        <a
          href="#"
          onClick={() => setMenuOpen(false)}
          style={{
            fontSize: '32px',
            fontWeight: 500,
            color: '#fff',
            textDecoration: 'underline',
            textUnderlineOffset: '2px',
          }}
        >
          Get in touch
        </a>
      </div>
    </>
  )
}
