// The Creative catalog — design skills, layout prompts, and micro-interaction
// animations. Data lives as static JSON under /creative so it loads once, is
// cached forever by the browser, and never bloats the JS bundle the way
// inlining ~800 records would.

// skills.json only ever contains skills with a real, fetched SKILL.md — see
// scripts/notes in git history if you need to re-add more once TypeUI quota resets.
export type CreativeSkill = { name: string; slug: string; preview: string }
// promptText is real, fetched content — the exact spec a paste-ready prompt sends to an
// AI coding tool. Every item in prompts.json has one; there is no generic fallback.
export type PromptItem = { name: string; slug: string; promptText: string }
export type PromptCategory = { name: string; slug: string; items: PromptItem[] }
export type PromptGroup = { group: string; categories: PromptCategory[] }

export type Catalog = {
  skills: { skills: CreativeSkill[] }
  prompts: { groups: PromptGroup[] }
}

export type SectionId = 'skills' | 'prompts'

let catalogPromise: Promise<Catalog> | null = null
export function loadCatalog(): Promise<Catalog> {
  if (!catalogPromise) {
    catalogPromise = Promise.all([
      fetch('/creative/prompts.json').then(r => r.json()),
      fetch('/creative/skills.json').then(r => r.json()),
    ]).then(([prompts, skills]) => ({ prompts, skills }))
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
