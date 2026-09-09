import { useMemo, useState } from 'react'
import { SITES, CATEGORIES } from '@/data/sites'
import SiteCard from '@/components/SiteCard'
import Creative from '@/components/Creative'
import Pricing from '@/components/Pricing'

const BRAND = 'Scrollhaus'

const AI_TOOLS = [
  { name: 'Claude', logo: '/logos/claude.webp' },
  { name: 'Codex', logo: '/logos/openai.webp' },
  { name: 'Lovable', logo: '/logos/lovable.webp' },
  { name: 'Bolt', logo: '/logos/bolt.webp' },
  { name: 'Replit', logo: '/logos/replit.webp' },
  { name: 'Readdy', logo: '/logos/readdy.webp' },
]

export default function App() {
  const [view, setView] = useState<'library' | 'creative' | 'pricing'>('library')
  const [active, setActive] = useState<string>('All')
  const [q, setQ] = useState('')

  const shown = useMemo(() => {
    const needle = q.trim().toLowerCase()
    return SITES
      .filter(s => active === 'All' || s.category === active)
      .filter(s => !needle || s.title.toLowerCase().includes(needle) || s.category.toLowerCase().includes(needle))
      .sort((a, b) => b.added.localeCompare(a.added))
  }, [active, q])

  const used = useMemo(() => {
    const set = new Set(SITES.map(s => s.category))
    return CATEGORIES.filter(c => c === 'All' || set.has(c))
  }, [])

  return (
    <div className="min-h-screen bg-[#080808]">
      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#080808]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1600px] items-center gap-6 px-4 py-3.5 sm:px-6">
          <a href="/" className="flex shrink-0 items-center" aria-label="Scrollhaus home">
            <img src="/scrollhaus-lockup.webp" alt="Scrollhaus — 3D websites, powered by AI"
                 width={109} height={30} className="h-[30px] w-auto shrink-0" />
          </a>

          <nav className="flex shrink-0 items-center gap-3 sm:gap-5">
            <button
              type="button"
              onClick={() => setView('library')}
              className={`text-[13px] transition-colors ${view === 'library' ? 'text-white' : 'text-white/45 hover:text-white'}`}
            >
              Library
            </button>
            <button
              type="button"
              onClick={() => setView('creative')}
              className={`text-[13px] transition-colors ${view === 'creative' ? 'text-white' : 'text-white/45 hover:text-white'}`}
            >
              Creative
            </button>
            <button
              type="button"
              onClick={() => setView('pricing')}
              className={`shine-text text-[13px] font-semibold transition-opacity ${view === 'pricing' ? 'opacity-100' : 'opacity-90 hover:opacity-100'}`}
            >
              Pricing
            </button>
          </nav>

          <div className="ml-auto flex items-center gap-3">
            <div className="relative">
              <svg className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-white/30" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.2-3.2" /></svg>
              <input
                value={q}
                onChange={e => setQ(e.target.value)}
                placeholder="Search"
                aria-label="Search the library"
                className="w-32 rounded-md border border-white/10 bg-white/[0.04] py-1.5 pl-7 pr-2.5 text-[12px] text-white placeholder:text-white/25 outline-none transition-all focus:w-52 focus:border-white/25 sm:w-44 sm:focus:w-64"
              />
            </div>
            <div className="grid h-7 w-7 place-items-center rounded-full bg-white/10 text-[10px] font-semibold text-white/70">AM</div>
          </div>
        </div>
      </header>

      {view === 'library' ? (
        <>
          {/* Motion banner. The headline lives over the footage rather than above it, the way a
              storefront hero does — the copy that used to sit in a flat text block is the overlay. */}
          <section className="mx-auto max-w-[1600px] px-4 pb-6 pt-6 sm:px-6 sm:pt-8">
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src="/banner.mp4"
                poster="/banner-poster.webp"
                autoPlay loop muted playsInline preload="metadata" aria-hidden="true"
              />
              {/* Scrim tuned so the copy stays legible on the left while the chrome still reads on
                  the right. A full-width veil crushes the footage to black and wastes the shot. */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(90deg,#050505 0%,rgba(5,5,5,0.9) 24%,rgba(5,5,5,0.55) 46%,rgba(5,5,5,0.12) 70%,rgba(5,5,5,0) 88%)' }}
              />

              <div className="relative flex min-h-[230px] items-center justify-between gap-8 p-6 sm:min-h-[290px] sm:p-10">
                <div className="flex flex-col gap-4">
                  <span className="w-fit rounded-full border border-white/15 bg-white/[0.06] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-white/70 backdrop-blur-sm">
                    New drops weekly
                  </span>
                  <h1 className="max-w-2xl text-[28px] font-bold leading-[1.08] tracking-[-0.03em] text-white sm:text-[42px]">
                    Scroll-driven sites,<br />
                    <span className="text-white/45">with the spec to rebuild them.</span>
                  </h1>
                  <p className="max-w-md text-[13px] leading-relaxed text-white/55">
                    Every entry ships with the complete build spec — stack, classes, animation constants,
                    asset requirements, and the bugs that bite. Hit copy, paste it into Claude, ship it.
                  </p>
                  <div className="mt-1 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-white/40">
                    <span><span className="font-semibold text-white/80">{SITES.length}</span> in the library</span>
                    <span className="h-3 w-px bg-white/15" />
                    <span>3D websites, powered by AI</span>
                  </div>
                </div>

                <div className="hidden shrink-0 flex-col items-end gap-4 text-right lg:flex">
                  <p className="max-w-[360px] text-[13px] leading-relaxed text-white/45">
                    Every spec is plain prompt text — paste it into any of these and ship.
                  </p>
                  <div className="flex flex-nowrap items-center justify-end gap-3">
                    {AI_TOOLS.map(t => (
                      <img
                        key={t.name}
                        src={t.logo}
                        alt={t.name}
                        title={t.name}
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-lg bg-white/[0.06] p-1.5 ring-1 ring-white/10"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="sticky top-[57px] z-40 border-y border-white/[0.07] bg-[#080808]/90 backdrop-blur-xl">
            <div className="mx-auto max-w-[1600px] px-4 sm:px-6">
              <div className="flex gap-2 overflow-x-auto py-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {used.map(c => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setActive(c)}
                    aria-pressed={active === c}
                    className={`shrink-0 rounded-full px-3.5 py-1.5 text-[12px] font-medium transition-colors ${
                      active === c
                        ? 'bg-white text-black'
                        : 'border border-white/10 text-white/50 hover:border-white/25 hover:text-white'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <main className="mx-auto max-w-[1600px] px-4 py-6 sm:px-6">
            {shown.length === 0 ? (
              <p className="py-24 text-center text-[13px] text-white/30">Nothing here yet.</p>
            ) : (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {shown.map(s => <SiteCard key={s.id} site={s} />)}
              </div>
            )}
          </main>
        </>
      ) : view === 'creative' ? (
        <Creative />
      ) : (
        <Pricing />
      )}

      <footer className="mt-10 border-t border-white/[0.07]">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-3 px-4 py-8 text-[11px] text-white/25 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>&copy; {BRAND} MMXXV &middot; 3D websites, powered by AI</span>
          <span>Built with Claude Code</span>
        </div>
      </footer>
    </div>
  )
}
