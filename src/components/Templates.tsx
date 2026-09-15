import { TEMPLATES } from '@/data/templates'

// No click-through: what used to be a small preview card that opened a full
// pane on click is now just... the actual content, full size, the moment you
// land on /templates. One step, not two. Each entry is its own section with
// a full-height iframe already showing the real page — scroll down for the
// next one, nothing to open first.
export default function Templates() {
  return (
    <main className="mx-auto max-w-[1600px] px-4 py-8 sm:px-6">
      <h1 className="text-[24px] font-bold tracking-[-0.02em] text-white sm:text-[30px]">Templates</h1>

      {TEMPLATES.length === 0 ? (
        <p className="py-24 text-center text-[13px] text-white/30">Nothing here yet.</p>
      ) : (
        <div className="mt-6 flex flex-col gap-12">
          {TEMPLATES.map(t => (
            <section key={t.id}>
              <div className="mb-3 flex items-baseline justify-between gap-3">
                <h2 className="text-[16px] font-semibold tracking-tight text-white">{t.title}</h2>
                <span className="text-[11px] text-white/35">{t.label}</span>
              </div>
              <div
                className="overflow-hidden rounded-2xl bg-neutral-900 ring-1 ring-white/10"
                style={{ height: '85vh', minHeight: 520 }}
              >
                <iframe
                  src={t.url}
                  title={t.title}
                  className="h-full w-full"
                  loading="lazy"
                  // allow-popups (+ -to-escape-sandbox) is load-bearing here: this
                  // page's whole job is "click a template card to open it," which
                  // opens lovable.dev in a new tab. Without allow-popups the browser
                  // silently swallows that click — no error, no navigation, nothing
                  // visibly happens, which is exactly the bug this fixes. Escaping
                  // the sandbox means the new tab isn't itself crippled by these
                  // restrictions once it opens.
                  sandbox="allow-scripts allow-same-origin allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox"
                  // Some cards copy code to the clipboard instead of navigating —
                  // sandbox tokens don't gate that, Permissions Policy does.
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
