import { useEffect, useMemo, useRef, useState } from 'react'
import { ALL_SITES, githubOf, previewOf, siteUrlOf, thumbOf, type Site } from '@/data/sites'
import { extractHtml, loadSpec } from '@/lib/specs'
import { useLike } from '@/lib/likes'
import { bentoSpan } from '@/lib/bento'
import { useMasonry } from '@/lib/masonry'
import SiteCard from './SiteCard'

type CopyState = 'idle' | 'ok' | 'err'

function CopyButton({ label, onCopy, className }: { label: string; onCopy: () => Promise<string>; className?: string }) {
  const [state, setState] = useState<CopyState>('idle')
  const click = async () => {
    try {
      const text = await onCopy()
      try {
        await navigator.clipboard.writeText(text)
      } catch {
        const ta = document.createElement('textarea')
        ta.value = text
        ta.style.cssText = 'position:fixed;opacity:0'
        document.body.appendChild(ta)
        ta.select()
        document.execCommand('copy')
        document.body.removeChild(ta)
      }
      setState('ok')
    } catch {
      setState('err')
    }
    window.setTimeout(() => setState('idle'), 1600)
  }
  return (
    <button type="button" onClick={click} className={className}>
      {state === 'ok' ? 'Copied' : state === 'err' ? 'Retry' : label}
    </button>
  )
}

export default function SiteDetail({
  site,
  onBack,
  onOpen,
  onPremiumClick,
}: {
  site: Site
  onBack: () => void
  onOpen: (id: string) => void
  onPremiumClick: () => void
}) {
  const { liked, count, toggle } = useLike(site.id)

  // Escape closes, same as the back arrow.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onBack() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onBack])

  // New site, new scroll position — the previous card's scroll offset inside
  // this same overlay would otherwise carry over.
  useEffect(() => { window.scrollTo(0, 0) }, [site.id])

  const more = useMemo(
    () => ALL_SITES.filter(s => s.id !== site.id).sort((a, b) => b.added.localeCompare(a.added)).slice(0, 12),
    [site.id],
  )

  const moreGridRef = useRef<HTMLDivElement>(null)
  useMasonry(moreGridRef, [site.id])

  return (
    <div className="mx-auto max-w-[1600px] px-4 py-4 sm:px-6">
      <button
        type="button"
        onClick={onBack}
        aria-label="Back to the library"
        className="mb-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition-colors hover:border-white/25 hover:text-white"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
      </button>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_340px]">
        <div className="overflow-hidden rounded-2xl bg-neutral-900 ring-1 ring-white/10" style={{ height: 'calc(100vh - 140px)', minHeight: 480 }}>
          {site.live ? (
            <iframe
              key={site.id}
              src={siteUrlOf(site.id)}
              title={`Live preview of ${site.title}`}
              className="h-full w-full"
              sandbox="allow-scripts allow-same-origin allow-forms allow-pointer-lock"
            />
          ) : (
            // No verified live build for this entry — see the `live` field's
            // doc comment in data/sites.ts. The recorded scroll-through video
            // fills the same pane rather than leaving it blank or broken.
            <video
              key={site.id}
              src={previewOf(site.id, site.previewV)}
              poster={thumbOf(site.id)}
              autoPlay
              muted
              loop
              playsInline
              controls
              className="h-full w-full object-contain"
              aria-label={`Scroll-through preview of ${site.title}`}
            />
          )}
        </div>

        <aside className="flex flex-col gap-5">
          <div>
            <h1 className="text-[22px] font-bold tracking-tight text-white">{site.title}</h1>
            <p className="mt-1 text-[13px] text-white/40">{site.category}</p>
          </div>

          <button
            type="button"
            onClick={toggle}
            aria-pressed={liked}
            className="flex w-fit items-center gap-2 text-[13px] text-white/60 transition-colors hover:text-white"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill={liked ? '#f43f5e' : 'none'} stroke={liked ? '#f43f5e' : 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
            </svg>
            {count} {count === 1 ? 'like' : 'likes'}
          </button>

          {site.free ? (
            <CopyButton
              label="Copy full prompt"
              onCopy={() => loadSpec(site.id)}
              className="flex h-11 items-center justify-center gap-2 rounded-lg bg-white text-[13px] font-semibold text-black transition-colors hover:bg-white/85"
            />
          ) : (
            <button
              type="button"
              onClick={onPremiumClick}
              className="flex h-11 items-center justify-center gap-2 rounded-lg bg-white text-[13px] font-semibold text-black transition-colors hover:bg-white/85"
            >
              See plans to unlock
            </button>
          )}

          <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] py-2.5 pl-3.5 pr-2">
            <span className="flex items-center gap-2 text-[13px] font-medium text-white/70">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m8 6-6 6 6 6M16 6l6 6-6 6" />
              </svg>
              HTML Code
            </span>
            <CopyButton
              label="Copy"
              onCopy={async () => {
                if (site.live) {
                  const r = await fetch(siteUrlOf(site.id))
                  if (!r.ok) throw new Error('fetch failed')
                  return r.text()
                }
                return extractHtml(await loadSpec(site.id))
              }}
              className="rounded-md bg-white/10 px-3 py-1.5 text-[12px] font-semibold text-white transition-colors hover:bg-white/20"
            />
          </div>

          <a
            href={githubOf(site.id, site.free)}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg border border-white/10 py-2.5 text-[13px] font-medium text-white/60 transition-colors hover:border-white/25 hover:text-white"
          >
            View on GitHub
          </a>

          {!site.live && (
            <p className="text-[11px] leading-relaxed text-white/25">
              This entry's live source isn't mirrored for an interactive preview yet — showing the recorded scroll-through instead. The full code is still in "Copy full prompt".
            </p>
          )}
        </aside>
      </div>

      <div className="mt-12">
        <h2 className="text-[15px] font-semibold text-white">More from the library</h2>
        <div ref={moreGridRef} className="mt-4 grid grid-cols-2 gap-4 [grid-auto-rows:8px] sm:grid-cols-3 lg:grid-cols-4">
          {more.map((s, i) => (
            <SiteCard key={s.id} site={s} index={i} ratio={bentoSpan(i)} onOpen={onOpen} onPremiumClick={onPremiumClick} />
          ))}
        </div>
      </div>
    </div>
  )
}
