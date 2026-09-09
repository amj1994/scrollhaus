import { useEffect, useMemo, useState } from 'react'
import { loadCatalog, loadSkillContent, type Catalog, type SectionId } from '@/data/creative'

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

// Every skill in skills.json and every prompt in prompts.json is real, fetched content
// (see src/data/creative.ts) — nothing here falls back to a generic template. Sections
// that only ever had generic placeholder copy (Animations, Brand Kit Creator, UI/UX
// Audit) were removed rather than shipped looking real when they weren't.
const SECTIONS = [
  { id: 'skills' as const, label: 'Design Skills' },
  { id: 'prompts' as const, label: 'UI Prompts' },
]

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

  const totalSkills = catalog?.skills.skills.length ?? 0
  const totalPrompts = catalog ? catalog.prompts.groups.flatMap(g => g.categories).flatMap(c => c.items).length : 0

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
              Design skills &amp; prompts —
              <br />
              <span className="text-white/45">browse the catalog, copy, build.</span>
            </h1>
            <p className="max-w-md text-[13px] leading-relaxed text-white/55">
              Every card here is real, fetched content — the exact spec a paste-ready prompt sends to an AI
              coding tool. Nothing generic, nothing placeholder.
            </p>
            <div className="mt-1 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-white/40">
              <span><span className="font-semibold text-white/80">{totalSkills}</span> design skills</span>
              <span className="h-3 w-px bg-white/15" />
              <span><span className="font-semibold text-white/80">{totalPrompts}</span> UI prompts</span>
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
              <option key={s.id} value={s.id} className="bg-[#141414]">{s.label}</option>
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

          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search"
            aria-label="Search the catalog"
            className="ml-auto w-32 rounded-md border border-white/10 bg-white/[0.04] py-1.5 px-2.5 text-[12px] text-white placeholder:text-white/25 outline-none transition-all focus:w-52 focus:border-white/25 sm:w-44 sm:focus:w-64"
          />
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
                      ariaLabel={`Copy the real SKILL.md for the ${s.name} design skill`}
                      getText={() => loadSkillContent(s.slug)}
                    />
                  </div>
                </div>
                <div className="mt-2.5 flex items-baseline justify-between gap-3 px-0.5">
                  <div className="min-w-0">
                    <div className="truncate text-[13px] font-semibold tracking-tight text-white">{s.name}</div>
                    <div className="mt-0.5 text-[11px] text-white/35">Design skill <span className="text-emerald-400/70">· real SKILL.md</span></div>
                  </div>
                </div>
              </div>
            ))}
            {filteredSkills.length === 0 && <p className="py-24 text-center text-[13px] text-white/30 col-span-full">Nothing here yet.</p>}
          </div>
        )}

        {catalog && section === 'prompts' && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredPrompts.map((p, i) => (
              <div key={`${p.categorySlug}-${p.slug}`} className="group card-cv" style={{ ...cardRise, animationDelay: `${Math.min(i, 12) * 30}ms` }}>
                <div className="relative flex aspect-video flex-col items-center justify-center gap-3 overflow-hidden rounded-lg bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-5 text-center ring-1 ring-white/10 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02] group-hover:ring-white/25">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_90%_at_50%_-10%,rgba(232,116,42,0.14),transparent_60%)] transition-opacity duration-500 group-hover:opacity-0" />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_90%_at_50%_-10%,rgba(232,116,42,0.32),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="relative rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-white/50">{p.categoryName}</span>
                  <span className="relative line-clamp-2 max-w-[92%] text-[14px] font-semibold leading-snug tracking-tight text-white">{p.name}</span>
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
      </main>
    </>
  )
}
