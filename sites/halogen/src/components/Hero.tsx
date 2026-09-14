import { useEffect, useState } from 'react'
import { useTypewriter } from '../hooks/useTypewriter'

const TYPEWRITER_TEXT = "Good of you to wander in. Taste usually arrives before the brief. So — what are we making?"

const WHITE_PILLS = [
  'Pitch a project',
  'Join the studio',
  'Just saying hello',
  'How we operate',
]

const EMAIL = 'studio@halogen.works'

function CopyIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="3.5" y="0.5" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1" fill="none" />
      <rect x="0.5" y="3.5" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
  )
}

export default function Hero() {
  const { displayed, done } = useTypewriter(TYPEWRITER_TEXT, 38, 600)
  const [pillsVisible, setPillsVisible] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setPillsVisible(true), 400)
    return () => clearTimeout(t)
  }, [])

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback: do nothing
    }
  }

  return (
    <section
      style={{
        position: 'relative',
        zIndex: 1,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
      className="justify-end pb-12 md:justify-center md:pb-0 px-5 sm:px-8 md:px-10"
    >
      <div style={{ maxWidth: '36rem', position: 'relative', zIndex: 10 }}>
        {/* Blurred intro label */}
        <p
          style={{
            fontSize: 'clamp(18px, 4vw, 26px)',
            lineHeight: 1.3,
            fontWeight: 400,
            color: '#fff',
            filter: 'blur(4px)',
            pointerEvents: 'none',
            userSelect: 'none',
            marginBottom: 'clamp(1.25rem, 2vw, 1.5rem)',
          }}
          aria-hidden="true"
        >
          Hey there, meet IRIS,<br />
          Halogen's Intake &amp; Routing Intelligence System
        </p>

        {/* Typewriter paragraph */}
        <p
          style={{
            fontSize: 'clamp(18px, 4vw, 26px)',
            lineHeight: 1.35,
            fontWeight: 400,
            color: '#fff',
            marginBottom: 'clamp(1.25rem, 2vw, 1.5rem)',
            minHeight: '54px',
          }}
        >
          {displayed}
          {!done && <span className="cursor-blink" aria-hidden="true" />}
        </p>

        {/* Action pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 0,
            opacity: pillsVisible ? 1 : 0,
            transform: pillsVisible ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
          }}
        >
          {WHITE_PILLS.map(label => (
            <button
              key={label}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#fff',
                color: '#000',
                border: '1px solid rgba(0,0,0,0.10)',
                borderRadius: '9999px',
                fontSize: 'clamp(13px, 1.5vw, 15px)',
                padding: '0.3em 1.25em',
                margin: '0.2em',
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                transition: 'background-color 200ms, color 200ms',
                fontFamily: 'var(--font-body)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.background = '#000'
                el.style.color = '#fff'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.background = '#fff'
                el.style.color = '#000'
              }}
            >
              {label}
            </button>
          ))}

          {/* Outline pill — email */}
          <button
            onClick={handleCopyEmail}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'clamp(0.5rem, 1vw, 0.75rem)',
              background: 'transparent',
              color: '#fff',
              border: '1px solid #fff',
              borderRadius: '9999px',
              fontSize: 'clamp(13px, 1.5vw, 15px)',
              padding: '0.3em 1.25em',
              margin: '0.2em',
              whiteSpace: 'nowrap',
              cursor: 'pointer',
              transition: 'background-color 200ms, color 200ms',
              fontFamily: 'var(--font-body)',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget
              el.style.background = '#fff'
              el.style.color = '#000'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget
              el.style.background = 'transparent'
              el.style.color = '#fff'
            }}
            aria-label={`Copy email ${EMAIL}`}
          >
            <span>
              Reach us:{' '}
              <span
                style={{
                  textDecoration: 'underline',
                  textUnderlineOffset: '1px',
                }}
              >
                {copied ? 'Copied!' : EMAIL}
              </span>
            </span>
            <CopyIcon />
          </button>
        </div>
      </div>
    </section>
  )
}
