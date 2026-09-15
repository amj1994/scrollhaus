import { GALLERIES, galleryThumbOf } from '@/data/galleries'

const cardRise = {
  opacity: 0,
  transform: 'translateY(14px)',
  animation: 'creative-rise .5s cubic-bezier(0.22,1,0.36,1) forwards',
} as const

export default function Templates() {
  return (
    <main className="mx-auto max-w-[1600px] px-4 py-8 sm:px-6">
      <style>{`@keyframes creative-rise{to{opacity:1;transform:none}}`}</style>
      <div className="max-w-2xl">
        <h1 className="text-[24px] font-bold tracking-[-0.02em] text-white sm:text-[30px]">
          Template galleries
        </h1>
        <p className="mt-2 text-[13px] leading-relaxed text-white/50">
          Other people's directories of other people's templates — curated here as links, not
          copied in. Nothing on this page is Scrollhaus build inventory: no source under{' '}
          <code className="rounded bg-white/[0.06] px-1 py-0.5 text-[11px] text-white/70">/sites</code>,
          no spec to copy, no preview we recorded. Click through and build on the platform each one
          actually targets.
        </p>
      </div>

      {GALLERIES.length === 0 ? (
        <p className="py-24 text-center text-[13px] text-white/30">Nothing here yet.</p>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERIES.map((g, i) => (
            <a
              key={g.id}
              href={g.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...cardRise, animationDelay: `${Math.min(i, 8) * 0.04}s` }}
              className="group flex flex-col overflow-hidden rounded-lg bg-neutral-900 ring-1 ring-white/10 transition-colors hover:ring-white/25"
            >
              <div className="relative aspect-[16/7] w-full shrink-0 overflow-hidden bg-neutral-800">
                <img
                  src={galleryThumbOf(g.id)}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute right-2 top-2 flex items-center gap-1 rounded-md bg-black/70 px-2 py-1 text-[10px] font-medium text-white/70 backdrop-blur-sm ring-1 ring-white/15">
                  External
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-2 p-4">
                <div className="min-w-0">
                  <div className="truncate text-[14px] font-semibold tracking-tight text-white">
                    {g.title}
                  </div>
                  {g.by && <div className="mt-0.5 text-[11px] text-white/35">by {g.by}</div>}
                </div>

                <p className="text-[12px] leading-relaxed text-white/55">{g.description}</p>

                {(g.stat || g.tools?.length) && (
                  <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-1">
                    {g.stat && (
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] font-medium text-white/50">
                        {g.stat}
                      </span>
                    )}
                    {g.tools?.slice(0, 3).map(t => (
                      <span key={t} className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] text-white/40">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>
      )}

      <p className="mt-8 max-w-2xl text-[11px] leading-relaxed text-white/25">
        Templates linked here belong to their original creators and the platforms that host them.
        Scrollhaus is not affiliated with any gallery listed and doesn't vouch for what's currently
        live on the other end — check the source before you build.
      </p>
    </main>
  )
}
