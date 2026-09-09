// The Creative catalog — design skills, layout prompts, and micro-interaction
// animations. Data lives as static JSON under /creative so it loads once, is
// cached forever by the browser, and never bloats the JS bundle the way
// inlining ~800 records would.

// hasRealContent marks whether /creative/skills-content/<slug>.md exists — a real,
// fetched SKILL.md, not the generic templated instruction. Monthly API quota limits
// how many of the 94 skills have one at any given time.
export type CreativeSkill = { name: string; slug: string; preview: string; hasRealContent?: boolean }
// promptText is real, fetched content — the exact spec a paste-ready prompt sends to an
// AI coding tool. Not every catalog item has one yet (design skills are fetched
// separately, and TypeUI quota limits how much can be pulled per month).
export type PromptItem = { name: string; slug: string; promptText: string }
export type PromptCategory = { name: string; slug: string; items: PromptItem[] }
export type PromptGroup = { group: string; categories: PromptCategory[] }
export type Animation = { name: string; category: string }

export type Catalog = {
  skills: { skills: CreativeSkill[] }
  prompts: { groups: PromptGroup[] }
  animations: { animations: Animation[] }
}

export const SECTIONS = [
  { id: 'skills', label: 'Design Skills', count: 94 },
  { id: 'prompts', label: 'UI Prompts', count: 449 },
  { id: 'animations', label: 'UI Animations', count: 281 },
  { id: 'brandkit', label: 'Brand Kit Creator' },
  { id: 'audit', label: 'UI/UX Audit' },
] as const

export type SectionId = (typeof SECTIONS)[number]['id']

let catalogPromise: Promise<Catalog> | null = null
export function loadCatalog(): Promise<Catalog> {
  if (!catalogPromise) {
    catalogPromise = Promise.all([
      fetch('/creative/prompts.json').then(r => r.json()),
      fetch('/creative/skills.json').then(r => r.json()),
      fetch('/creative/animations.json').then(r => r.json()),
    ]).then(([prompts, skills, animations]) => ({ prompts, skills, animations }))
  }
  return catalogPromise
}

const skillContentCache = new Map<string, Promise<string>>()
export function loadSkillContent(slug: string): Promise<string> {
  let p = skillContentCache.get(slug)
  if (!p) {
    p = fetch(`/creative/skills-content/${slug}.md`).then(r => {
      if (!r.ok) throw new Error(`skill content ${slug}: ${r.status}`)
      return r.text()
    })
    skillContentCache.set(slug, p)
  }
  return p
}
