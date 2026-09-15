import { useState } from 'react'
import { EFFECTS, effectUrlOf } from '@/data/effects'
import { LivePreview, PREVIEW_DESIGN_H, PREVIEW_DESIGN_W } from '@/components/LivePreview'

// Own section, deliberately separate from Templates: everything here is a
// real file this account owns (hosted at /effects/<id>/index.html, same
// convention as siteUrlOf for Library entries), not someone else's page.
// So there's no outbound link and no source-domain label under the title —
// unlike Templates, there's nothing here to credit or point away from.

function EffectCard({ id, title, category, onOpen }: { id: string; title: string; category: string; onOpen: (id: string) => void }) {
  const url = effectUrlOf(id)
  return (
    <button
      type="button"
      onClick={() => onOpen(id)}
      aria-label={`Open ${title}`}
      className="group flex flex-col text-left"
    >
      <div
        className="relative w-full overflow-hidden rounded-lg bg-neutral-900 ring-1 ring-white/10 transition-shadow group-hover:ring-white/25"
        style={{ aspectRatio: `${PREVIEW_DESIGN_W} / ${PREVIEW_DESIGN_H}` }}
      >
        <LivePreview src={url} title={title} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="mt-2.5 flex items-baseline justify-between gap-3 px-0.5">
        <div className="min-w-0">
          <div className="truncate text-[13px] font-semibold tracking-tight text-white">{title}</div>
          <div className="mt-0.5 truncate text-[11px] text-white/35">{category}</div>
        </div>
      </div>
    </button>
  )
}

function EffectDetail({ id, title, onBack }: { id: string; title: string; onBack: () => void }) {
  const url = effectUrlOf(id)
  return (
    <div className="mx-auto max-w-[1600px] px-4 py-6 sm:px-6">
      <button
        type="button"
        onClick={onBack}
        aria-label="Back to Effects"
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
    </div>
  )
}

export default function Effects() {
  const [openId, setOpenId] = useState<string | null>(null)
  const open = openId ? EFFECTS.find(e => e.id === openId) ?? null : null

  if (open) {
    return <EffectDetail id={open.id} title={open.title} onBack={() => setOpenId(null)} />
  }

  return (
    <main className="mx-auto max-w-[1600px] px-4 py-8 sm:px-6">
      <h1 className="text-[24px] font-bold tracking-[-0.02em] text-white sm:text-[30px]">Effects</h1>

      {EFFECTS.length === 0 ? (
        <p className="py-24 text-center text-[13px] text-white/30">Nothing here yet.</p>
      ) : (
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {EFFECTS.map(e => (
            <EffectCard key={e.id} id={e.id} title={e.title} category={e.category} onOpen={setOpenId} />
          ))}
        </div>
      )}
    </main>
  )
}
