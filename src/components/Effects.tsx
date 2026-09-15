import { EFFECTS, effectUrlOf } from '@/data/effects'

// Same "no click-through" treatment as Templates: land on /effects and the
// real, live library is already on screen — no card, no open step.
export default function Effects() {
  return (
    <main className="mx-auto max-w-[1600px] px-4 py-8 sm:px-6">
      <h1 className="text-[24px] font-bold tracking-[-0.02em] text-white sm:text-[30px]">Effects</h1>

      {EFFECTS.length === 0 ? (
        <p className="py-24 text-center text-[13px] text-white/30">Nothing here yet.</p>
      ) : (
        <div className="mt-6 flex flex-col gap-12">
          {EFFECTS.map(e => (
            <section key={e.id}>
              <div className="mb-3 flex items-baseline justify-between gap-3">
                <h2 className="text-[16px] font-semibold tracking-tight text-white">{e.title}</h2>
                <span className="text-[11px] text-white/35">{e.category}</span>
              </div>
              <div
                className="overflow-hidden rounded-2xl bg-neutral-900 ring-1 ring-white/10"
                style={{ height: '85vh', minHeight: 520 }}
              >
                <iframe
                  src={effectUrlOf(e.id)}
                  title={e.title}
                  className="h-full w-full"
                  loading="lazy"
                  // Matches Templates.tsx: allow-popups so any link this content
                  // opens in a new tab actually opens instead of being silently
                  // swallowed by the sandbox, and clipboard-write for the Copy
                  // buttons on each effect card.
                  sandbox="allow-scripts allow-same-origin allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox"
                  allow="clipboard-write"
                />
              </div>
            </section>
          ))}
        </div>
      )}
    </main>
  )
}
