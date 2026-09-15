import { useEffect, useRef, useState } from 'react'
import { TEMPLATES } from '@/data/templates'

// The design canvas the live preview is rendered at before being scaled down
// into the card. 1280x800 is a plain desktop viewport — most sites in this
// section are built for one, so this is what makes the preview read as "the
// real page," just smaller, rather than a mobile layout stretched.
const DESIGN_W = 1280
const DESIGN_H = 800

/** A live, non-interactive preview of `url`, scaled to fill its container.
 *  Same idea as SiteCard's hover video, but there's no captured asset here —
 *  the iframe itself is the preview, and it's always current. */
function LivePreview({ url, title }: { url: string; title: string }) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(0.28)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => {
      const w = entry.contentRect.width
      if (w > 0) setScale(w / DESIGN_W)
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <div ref={wrapRef} className="absolute inset-0 overflow-hidden bg-neutral-950">
      <iframe
        src={url}
        title={title}
        loading="lazy"
        tabIndex={-1}
        aria-hidden="true"
        // Decorative only: the card itself is the click target, not the frame.
        sandbox="allow-scripts allow-same-origin"
        style={{
          width: DESIGN_W,
          height: DESIGN_H,
          border: 0,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}

function TemplateCard({
  id,
  title,
  label,
  url,
  onOpen,
}: {
  id: string
  title: string
  label: string
  url: string
  onOpen: (id: string) => void
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(id)}
      aria-label={`Open ${title}`}
      className="group flex flex-col text-left"
    >
      <div
        className="relative w-full overflow-hidden rounded-lg bg-neutral-900 ring-1 ring-white/10 transition-shadow group-hover:ring-white/25"
        style={{ aspectRatio: `${DESIGN_W} / ${DESIGN_H}` }}
      >
        <LivePreview url={url} title={title} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="mt-2.5 flex items-baseline justify-between gap-3 px-0.5">
        <div className="min-w-0">
          <div className="truncate text-[13px] font-semibold tracking-tight text-white">{title}</div>
          <div className="mt-0.5 truncate text-[11px] text-white/35">{label}</div>
        </div>
      </div>
    </button>
  )
}

function TemplateDetail({
  title,
  label,
  url,
  onBack,
}: {
  title: string
  label: string
  url: string
  onBack: () => void
}) {
  return (
    <div className="mx-auto max-w-[1600px] px-4 py-6 sm:px-6">
      <button
        type="button"
        onClick={onBack}
        aria-label="Back to Templates"
        className="mb-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition-colors hover:border-white/25 hover:text-white"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
      </button>

      <div
        className="overflow-hidden rounded-2xl bg-neutral-900 ring-1 ring-white/10"
        style={{ height: 'calc(100vh - 140px)', minHeight: 480 }}
      >
        <iframe
          key={url}
          src={url}
          title={title}
          className="h-full w-full"
          sandbox="allow-scripts allow-same-origin allow-forms allow-pointer-lock"
        />
      </div>

      <div className="mt-4">
        <div className="text-[15px] font-semibold tracking-tight text-white">{title}</div>
        <div className="mt-0.5 text-[12px] text-white/35">{label}</div>
      </div>
    </div>
  )
}

export default function Templates() {
  const [openId, setOpenId] = useState<string | null>(null)
  const open = openId ? TEMPLATES.find(t => t.id === openId) ?? null : null

  if (open) {
    return <TemplateDetail title={open.title} label={open.label} url={open.url} onBack={() => setOpenId(null)} />
  }

  return (
    <main className="mx-auto max-w-[1600px] px-4 py-8 sm:px-6">
      <h1 className="text-[24px] font-bold tracking-[-0.02em] text-white sm:text-[30px]">Templates</h1>

      {TEMPLATES.length === 0 ? (
        <p className="py-24 text-center text-[13px] text-white/30">Nothing here yet.</p>
      ) : (
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {TEMPLATES.map(t => (
            <TemplateCard key={t.id} id={t.id} title={t.title} label={t.label} url={t.url} onOpen={setOpenId} />
          ))}
        </div>
      )}
    </main>
  )
}
