// Templates section — entries here are OTHER people's live sites, rendered
// in-app via iframe rather than mirrored. No source, no spec, no preview
// asset: the iframe IS the content, always current, never a stale copy.
//
// `label` is shown under the title at the same size/weight as a Site's
// category text elsewhere in this app — it exists so the entry isn't
// presented as a Scrollhaus-authored build, nothing more than that.
export type TemplateEntry = {
  id: string
  title: string
  label: string
  url: string
  added: string
}

export const TEMPLATES: TemplateEntry[] = [
  {
    id: 'lovable-templates',
    title: '131 Website Templates',
    label: 'lovable-templates.vercel.app',
    url: 'https://lovable-templates.vercel.app/',
    added: '2026-09-15',
  },
  {
    id: 'webstudio-backgrounds',
    title: 'Jaw-Dropping Animated Backgrounds',
    label: 'webstudio-backgrounds.vercel.app',
    url: 'https://webstudio-backgrounds.vercel.app/',
    added: '2026-09-15',
  },
]
