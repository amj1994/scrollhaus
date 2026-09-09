import { useEffect, useMemo, useState } from 'react'
import { loadCatalog, loadSkillContent, SECTIONS, type Catalog, type SectionId } from '@/data/creative'

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text)
  } catch {
    const textarea = document.createElement('textarea')
    textarea.value = text
    textarea.style.cssText = 'position:fixed;opacity:0'
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
  }
}

function CopyButton({ getText, ariaLabel }: { getText: () => string | Promise<string>; ariaLabel: string }) {
  const [state, setState] = useState<'idle' | 'ok' | 'err'>('idle')
  const run = async () => {
    try {
      await copyText(await getText())
      setState('ok')
    } catch {
      setState('err')
    }
    window.setTimeout(() => setState('idle'), 1600)
  }
  return (
    <button
      type="button"
      onClick={run}
      aria-label={ariaLabel}
      className="flex items-center gap-1.5 rounded-md bg-white px-2.5 py-1.5 text-[11px] font-semibold text-black transition-colors hover:bg-white/85"
    >
      {state === 'ok' ? 'Copied' : state === 'err' ? 'Retry' : 'Copy'}
    </button>
  )
}

const cardRise = {
  opacity: 0,
  transform: 'translateY(14px)',
  animation: 'creative-rise .5s cubic-bezier(0.22,1,0.36,1) forwards',
} as const

export default function Creative() {
  const [section, setSection] = useState<SectionId>('skills')
  const [group, setGroup] = useState('All')
  const [category, setCategory] = useState('all')
  const [query, setQuery] = useState('')
  const [data, setData] = useState<Catalog | 'error' | null>(null)

  useEffect(() => {
    loadCatalog().then(setData).catch(() => setData('error'))
  }, [])

  const catalog = data && data !== 'error' ? data : null
  const q = query.trim().toLowerCase()

  const promptCategories = useMemo(() => {
    if (!catalog) return []
    if (group === 'All') return catalog.prompts.groups.flatMap(g => g.categories)
    const g = catalog.prompts.groups.find(x => x.group === group)
    return g ? g.categories : []
  }, [catalog, group])

  const promptItems = useMemo(() => {
    if (!catalog) return []
    let cats = promptCategories
    if (category !== 'all') cats = cats.filter(c => c.slug === category)
    return cats.flatMap(c => c.items.map(item => ({ ...item, categorySlug: c.slug, categoryName: c.name })))
  }, [promptCategories, category, catalog])

  const filteredPrompts = useMemo(
    () => promptItems.filter(p => !q || p.name.toLowerCase().includes(q) || p.categoryName.toLowerCase().includes(q)),
    [promptItems, q],
  )

  const filteredSkills = useMemo(() => {
    if (!catalog) return []
    return catalog.skills.skills.filter(s => !q || s.name.toLowerCase().includes(q))
  }, [catalog, q])

  const filteredAnimations = useMemo(() => {
    if (!catalog) return []
    return catalog.animations.animations.filter(
      a => !q || a.name.toLowerCase().includes(q) || a.category.toLowerCase().includes(q),
    )
  }, [catalog, q])

  const selectCls =
    'rounded-md border border-white/10 bg-white/[0.04] py-1.5 px-2.5 text-[12px] text-white outline-none transition-colors focus:border-white/25'

  return (
    <>
      <style>{`@keyframes creative-rise{to{opacity:1;transform:none}}`}</style>

      <section className="mx-auto max-w-[1600px] px-4 pb-6 pt-6 sm:px-6 sm:pt-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a1207] via-[#12100c] to-[#0b0b0b] p-6 ring-1 ring-white/10 sm:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_85%_10%,rgba(232,116,42,0.18),transparent_60%)]" />
          <div className="relative flex max-w-3xl flex-col gap-4">
            <span className="w-fit rounded-full border border-white/15 bg-white/[0.06] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-white/70 backdrop-blur-sm">
              Prompt Library
            </span>
            <h1 className="text-[28px] font-bold leading-[1.08] tracking-[-0.03em] text-white sm:text-[42px]">
              Design skills, prompts &amp; animations —
              <br />
              <span className="text-white/45">browse the catalog, copy, build.</span>
            </h1>
            <p className="max-w-md text-[13px] leading-relaxed text-white/55">
              Every card carries a ready-to-paste prompt for your AI coding tool. Pick a section, preview the
              layouts, hit copy, and ship it with your own content and brand.
            </p>
            <div className="mt-1 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-white/40">
              <span><span className="font-semibold text-white/80">94</span> design skills</span>
              <span className="h-3 w-px bg-white/15" />
              <span><span className="font-semibold text-white/80">449</span> UI prompts</span>
              <span className="h-3 w-px bg-white/15" />
              <span><span className="font-semibold text-white/80">281</span> UI animations</span>
            </div>
          </div>
        </div>
      </section>

      <div className="sticky top-[57px] z-40 border-y border-white/[0.07] bg-[#080808]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center gap-3 px-4 py-2.5 sm:px-6">
          <select
            value={section}
            onChange={e => { setSection(e.target.value as SectionId); setCategory('all'); setQuery('') }}
            aria-label="Choose a section"
            className={selectCls}
          >
            {SECTIONS.map(s => (
              <option key={s.id} value={s.id} className="bg-[#141414]">
                {s.label}{'count' in s ? ` — ${s.count}` : ''}
              </option>
            ))}
          </select>

          {section === 'prompts' && catalog && (
            <>
              <select value={group} onChange={e => { setGroup(e.target.value); setCategory('all') }} aria-label="Prompt group" className={selectCls}>
                {['All', ...catalog.prompts.groups.map(g => g.group)].map(g => (
                  <option key={g} value={g} className="bg-[#141414]">{g}</option>
                ))}
              </select>
              <select value={category} onChange={e => setCategory(e.target.value)} aria-label="Prompt category" className={selectCls}>
                <option value="all" className="bg-[#141414]">All categories</option>
                {promptCategories.map(c => (
                  <option key={c.slug} value={c.slug} className="bg-[#141414]">{c.name} ({c.items.length})</option>
                ))}
              </select>
              <span className="text-[11px] tabular-nums text-white/30">{filteredPrompts.length} layouts</span>
            </>
          )}

          {section === 'skills' && catalog && (
            <span className="text-[11px] tabular-nums text-white/30">{filteredSkills.length} skills</span>
          )}
          {section === 'animations' && catalog && (
            <span className="text-[11px] tabular-nums text-white/30">{filteredAnimations.length} animations</span>
          )}

          {(['skills', 'prompts', 'animations'] as SectionId[]).includes(section) && (
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search"
              aria-label="Search the catalog"
              className="ml-auto w-32 rounded-md border border-white/10 bg-white/[0.04] py-1.5 px-2.5 text-[12px] text-white placeholder:text-white/25 outline-none transition-all focus:w-52 focus:border-white/25 sm:w-44 sm:focus:w-64"
            />
          )}
        </div>
      </div>

      <main className="mx-auto max-w-[1600px] px-4 py-6 sm:px-6">
        {data === null && <p className="py-24 text-center text-[13px] text-white/30">Loading the catalog…</p>}
        {data === 'error' && <p className="py-24 text-center text-[13px] text-white/30">Couldn't load the catalog.</p>}

        {catalog && section === 'skills' && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredSkills.map((s, i) => (
              <div key={s.slug} className="group card-cv" style={{ ...cardRise, animationDelay: `${Math.min(i, 12) * 30}ms` }}>
                <div className="relative aspect-video overflow-hidden rounded-lg bg-white ring-1 ring-white/10">
                  <img src={s.preview} alt={`${s.name} design skill preview`} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute right-2 top-2 flex items-center gap-1.5">
                    <CopyButton
                      ariaLabel={s.hasRealContent
                        ? `Copy the real SKILL.md for the ${s.name} design skill`
                        : `Copy a prompt card for the ${s.name} design skill`}
                      getText={() =>
                        s.hasRealContent
                          ? loadSkillContent(s.slug)
                          : `Build my next page using the "${s.name}" design skill.\n\nApply its visual direction — typography, color, spacing, and component detailing — to my project. Keep my content, follow the skill's aesthetic system faithfully.\n\nRequirements: semantic HTML, responsive, accessible (contrast, focus states, prefers-reduced-motion), polished micro-interactions and hover states.`
                      }
                    />
                  </div>
                </div>
                <div className="mt-2.5 flex items-baseline justify-between gap-3 px-0.5">
                  <div className="min-w-0">
                    <div className="truncate text-[13px] font-semibold tracking-tight text-white">{s.name}</div>
                    <div className="mt-0.5 text-[11px] text-white/35">
                      Design skill{s.hasRealContent && <span className="ml-1.5 text-emerald-400/70">· real SKILL.md</span>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {catalog && section === 'prompts' && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredPrompts.map((p, i) => (
              <div key={`${p.categorySlug}-${p.slug}`} className="group card-cv" style={{ ...cardRise, animationDelay: `${Math.min(i, 12) * 30}ms` }}>
                <div className="relative flex aspect-video flex-col items-center justify-center gap-3 overflow-hidden rounded-lg bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-5 text-center ring-1 ring-white/10">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_90%_at_50%_-10%,rgba(232,116,42,0.14),transparent_60%)]" />
                  <span className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-white/50">{p.categoryName}</span>
                  <span className="line-clamp-2 max-w-[92%] text-[14px] font-semibold leading-snug tracking-tight text-white">{p.name}</span>
                  <div className="absolute right-2 top-2 flex items-center gap-1.5">
                    <CopyButton
                      ariaLabel={`Copy the real build prompt for the ${p.name} layout`}
                      getText={() => p.promptText}
                    />
                  </div>
                </div>
                <div className="mt-2.5 flex items-baseline justify-between gap-3 px-0.5">
                  <div className="min-w-0">
                    <div className="truncate text-[13px] font-semibold tracking-tight text-white">{p.name}</div>
                    <div className="mt-0.5 truncate text-[11px] text-white/35">{p.categoryName}</div>
                  </div>
                </div>
              </div>
            ))}
            {filteredPrompts.length === 0 && <p className="py-24 text-center text-[13px] text-white/30 col-span-full">Nothing here yet.</p>}
          </div>
        )}

        {catalog && section === 'animations' && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredAnimations.map((a, i) => (
              <div key={a.name} className="group card-cv" style={{ ...cardRise, animationDelay: `${Math.min(i, 12) * 30}ms` }}>
                <div className="relative flex aspect-video flex-col items-center justify-center gap-3 overflow-hidden rounded-lg bg-gradient-to-br from-white/[0.07] to-white/[0.02] ring-1 ring-white/10">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_90%_at_50%_110%,rgba(232,116,42,0.14),transparent_60%)]" />
                  <span className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-white/50">{a.category.replace(/-/g, ' ')}</span>
                  <span className="max-w-[80%] truncate text-center text-[15px] font-semibold tracking-tight text-white">{a.name}</span>
                  <div className="absolute right-2 top-2 flex items-center gap-1.5">
                    <CopyButton
                      ariaLabel={`Copy a prompt for the ${a.name} animation`}
                      getText={() =>
                        `Add a "${a.name}" micro-interaction to my UI (${a.category.replace(/-/g, ' ')}).\n\nImplement it with the platform's native animation tools (CSS transitions, Web Animations API, or a spring library), respecting prefers-reduced-motion. Keep it subtle, quick, and interruptible.`
                      }
                    />
                  </div>
                </div>
                <div className="mt-2.5 flex items-baseline justify-between gap-3 px-0.5">
                  <div className="min-w-0">
                    <div className="truncate text-[13px] font-semibold tracking-tight text-white">{a.name}</div>
                    <div className="mt-0.5 text-[11px] text-white/35">{a.category.replace(/-/g, ' ')}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {catalog && section === 'brandkit' && (
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#241108] via-[#160d06] to-[#0b0b0b] p-8 ring-1 ring-white/10 sm:p-10">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_80%_0%,rgba(232,116,42,0.2),transparent_60%)]" />
              <div className="relative flex flex-col gap-4">
                <span className="w-fit rounded-full border border-white/15 bg-white/[0.06] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-white/70">Brand Kit Creator</span>
                <h2 className="max-w-md text-[26px] font-bold leading-tight tracking-[-0.02em] text-white sm:text-[32px]">Give every project an identity before it has a pixel.</h2>
                <p className="max-w-lg text-[13px] leading-relaxed text-white/55">
                  Generate brand kits — logo direction, color tokens, typography, and AI project identity — then let
                  your AI coding tool build every screen inside that system. Create kits for clients, products, or
                  campaigns and keep each one consistent.
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-3">
                  <CopyButton ariaLabel="Copy a brand kit generation prompt" getText={() => `Create a complete brand kit for my project.\n\nDeliver: logo direction, color tokens (primary, accent, surface, text — hex values), typography scale (display, body, mono — sizes, weights, line-heights), spacing scale, and component styling notes (buttons, cards, inputs, states).\n\nFormat it as a structured design reference I can paste into any AI coding tool and build against.`} />
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-white/[0.03] p-8 ring-1 ring-white/10 sm:p-10">
              <h3 className="text-[18px] font-semibold tracking-tight text-white">How your visitors use it</h3>
              <ol className="mt-5 flex flex-col gap-4 text-[13px] leading-relaxed text-white/60">
                <li><span className="font-semibold text-white/85">1. Browse</span> — pick a design skill, a layout prompt, or an animation above.</li>
                <li><span className="font-semibold text-white/85">2. Copy</span> — every card copies a ready-to-paste prompt for any AI coding tool.</li>
                <li><span className="font-semibold text-white/85">3. Build</span> — paste it into Claude, Codex, Cursor, or OpenCode and ship the section.</li>
                <li><span className="font-semibold text-white/85">4. Go deeper</span> — layer these prompts into your own design system and ship consistently.</li>
              </ol>
            </div>
          </div>
        )}

        {catalog && section === 'audit' && (
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#071a1f] via-[#08120f] to-[#0b0b0b] p-8 ring-1 ring-white/10 sm:p-10">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_80%_0%,rgba(34,224,255,0.12),transparent_60%)]" />
              <div className="relative flex flex-col gap-4">
                <span className="w-fit rounded-full border border-white/15 bg-white/[0.06] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-white/70">UI/UX Audit</span>
                <h2 className="max-w-md text-[26px] font-bold leading-tight tracking-[-0.02em] text-white sm:text-[32px]">Audit any page like a senior designer.</h2>
                <p className="max-w-lg text-[13px] leading-relaxed text-white/55">
                  Run a complete website audit across accessibility, typography, color, usability, and visual design.
                  Get structured findings you can hand straight to your AI coding tool to fix.
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-3">
                  <CopyButton ariaLabel="Copy a UI/UX audit prompt" getText={() => `Run a full UI/UX audit on my page or component.\n\nReview and report on:\n1. Visual hierarchy — spacing rhythm, typographic scale, contrast ratios (WCAG AA).\n2. Accessibility — semantics, focus order, keyboard operability, aria usage, reduced-motion.\n3. Color — palette consistency, state colors, dark-surface legibility.\n4. Usability — affordances, empty/error/loading states, touch targets, responsive behavior.\n5. Motion — purpose, duration, easing, interruption behavior.\n\nFor each finding: severity (critical / major / minor), what's wrong, and the exact fix. End with a prioritized fix list I can paste back into my AI coding tool.`} />
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-white/[0.03] p-8 ring-1 ring-white/10 sm:p-10">
              <h3 className="text-[18px] font-semibold tracking-tight text-white">What gets checked</h3>
              <ul className="mt-5 flex flex-col gap-3 text-[13px] leading-relaxed text-white/60">
                <li>· Accessibility — semantics, contrast, focus, keyboard paths</li>
                <li>· Typography — scale, hierarchy, line-height, measure</li>
                <li>· Color — tokens, states, legibility on every surface</li>
                <li>· Usability — affordances, states, targets, responsive</li>
                <li>· Visual design — spacing rhythm, alignment, detail polish</li>
              </ul>
            </div>
          </div>
        )}
      </main>
    </>
  )
}
