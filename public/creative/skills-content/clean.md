# Design System — Agent Instructions

This skill describes the visual design language for all UI output. Every component, layout, and page should follow the design specs in the module files below. These describe *what the design looks like* — you choose how to implement the styles.


## Before Writing Any Code

1. **Read every module that applies.** For a landing page, read at minimum: `layout.md`, `typography.md`, `colors.md`, `buttons.md`, `cards.md`, `shadows.md`, `radius.md`, `borders.md`. Do NOT write JSX until you have loaded all relevant modules.

## Critical Rules

- **Tokens are AGNOSTIC, NOT Tailwind classes:** The tokens defined in the `.md` files (like `neutral-primary-soft`, `heading`, `border-default`) are agnostic design system tokens, NOT literal Tailwind classes. Do not blindly use classes like `bg-neutral-primary-soft` unless you have explicitly mapped them in the CSS/Tailwind configuration. You must implement the mapping yourself.

- **Cross-reference modules.** A card containing buttons must satisfy both `cards.md` AND `buttons.md`.
- **Dark mode is automatic.** The CSS custom properties resolve differently in light/dark via `@media (prefers-color-scheme: dark)`. Never manually swap colors.
- **Every interactive element needs hover, focus, and disabled states** — defined in the relevant module.
- **Use semantic HTML:** proper heading hierarchy (`h1`→`h6`), `<button>` for actions, `<a>` for navigation, ARIA attributes where needed.

## Module Index

### Foundation (read first for any UI work)
- [colors.md](colors.md) — all background, text, and border color tokens
- [typography.md](typography.md) — heading scale, paragraphs, labels, links
- [layout.md](layout.md) — spacing rhythm, containers, animation, visual depth
- [radius.md](radius.md) — border-radius scale
- [shadows.md](shadows.md) — elevation tokens
- [borders.md](borders.md) — border widths and styles

### Components
- [buttons.md](buttons.md) — button variants, sizes, states, glint effect
- [button-group.md](button-group.md) — grouped button structure
- [cards.md](cards.md) — card structure, background, interactivity
- [inputs.md](inputs.md) — form controls, labels, states
- [alerts.md](alerts.md) — alert variants
- [badges.md](badges.md) — badge variants, sizes, dismissible chips
- [lists.md](lists.md) — list components
- [avatars.md](avatars.md) — avatar variants, sizes, indicators
- [icon-shapes.md](icon-shapes.md) — icon containers

### Complex Components
- [accordion.md](accordion.md) — accordion variants
- [dropdown.md](dropdown.md) — dropdown menus
- [modals.md](modals.md) — modal dialogs
- [tabs.md](tabs.md) — tab navigation
- [tables.md](tables.md) — table structure
- [pagination.md](pagination.md) — pagination components
- [sidebars.md](sidebars.md) — sidebar navigation
- [radios-checkboxes-toggle.md](radios-checkboxes-toggle.md) — selection controls
- [tooltips-popovers.md](tooltips-popovers.md) — tooltips and popovers
- [content.md](content.md) — grid system, responsiveness

---

## Source file: `accordion.md`

# Accordion

> Dependencies: `colors.md`, `radius.md`

## Core Specs

- **Wrapper:** full width, 1px border (border-default color), 12px radius — clips first/last item corners
- **Item separator:** 1px bottom border (border-default) on every item except last

## Trigger (Button)

- **Layout:** flex, space-between, full width
- **Padding:** 16px horizontal, 14px vertical
- **Font:** 14px, medium weight
- **Text color:** heading
- **Background:** neutral-secondary-soft
- **Hover:** neutral-tertiary-soft background
- **Focus:** outline none, 2px ring in brand color
- **Transition:** colors, 150ms
- **Open state:** neutral-tertiary-soft background

## Panel (Content)

- **Padding:** 16px horizontal, 14px vertical
- **Background:** neutral-primary-soft
- **Top border:** 1px, border-default color
- **Font:** 14px, body color, 1.6 line-height

## Chevron Icon

- Size: 16x16px
- Color: body text color
- Closed: 0deg rotation
- Open: 180deg rotation
- Transition: transform, 150ms

## Variants

### Default (Collapse)
One panel open at a time. Items stacked inside a single shared bordered/rounded wrapper.

### Separated Cards
Each item is independent — has its own 1px border, 12px radius, and shadow-xs. 8px bottom margin between items. No shared outer border.

### Always Open
Multiple panels can expand simultaneously. Same styling as Default.

### Flush
No outer border. Trigger and panel have transparent backgrounds. Only bottom border dividers between items. Use inside containers that already provide a background.

## States

| State | Trigger appearance |
|---|---|
| Closed | heading text, neutral-secondary-soft background |
| Open | heading text, neutral-tertiary-soft background |
| Hover | neutral-tertiary-soft background |
| Focus | 2px brand ring, no outline |
| Disabled | fg-disabled text, not-allowed cursor, no hover/focus |

---

## Source file: `alerts.md`

# Alerts

> Dependencies: `colors.md`, `radius.md`

## Core Specs

- **Padding:** 16px
- **Radius:** 12px (base)
- **Border:** 1px
- **Heading:** 16px, medium weight
- **Body:** 14px, normal weight, 1.6 line-height

## Variants

### Brand
- **Background:** brand-softer
- **Border:** border-brand-subtle
- **Text:** fg-brand-strong

### Success
- **Background:** success-soft
- **Border:** border-success-subtle
- **Text:** fg-success-strong

### Danger
- **Background:** danger-soft
- **Border:** border-danger-subtle
- **Text:** fg-danger-strong

### Warning
- **Background:** warning-soft
- **Border:** border-warning-subtle
- **Text:** fg-warning

---

## Source file: `avatars.md`

# Avatars

> Dependencies: `colors.md`, `radius.md`

## Core Specs

- **Circular shape:** fully rounded (9999px)
- **Rounded square shape:** 12px radius
- **Default size:** 40x40px
- **Image fit:** cover

## Sizes

| Size | Dimensions | Radius |
|---|---|---|
| Extra Small | 18x18px | 4px |
| Small | 24x24px | 4px |
| Base | 32x32px | 12px |
| Large | 44x44px | 12px |
| XL | 56x56px | 12px |
| 2XL | 64x64px | 12px |

## Bordered Avatar

- 4px padding, fully rounded, 2px outline in border-default color
- Alternative: 2px box-shadow ring in border-default color

## Stacked Avatars

- Displayed in a row (flex)
- Each avatar: 40x40px, fully rounded, 2px border in border-buffer color
- Overlap: -16px negative margin on all except first

### Stacked Counter
- Same size as avatars (40x40px), fully rounded
- Background: dark-strong, text: white, 12px font, medium weight
- Same overlap margin as other avatars

## Avatar with Text

- Flex row, 10px gap between avatar and text
- Avatar: 40x40px, fully rounded, cover fit
- Name: heading color, medium weight
- Subtitle: 14px, body color

---

## Source file: `badges.md`

# Badges

> Dependencies: `colors.md`, `radius.md`

## Core Specs

- **Border:** 1px
- **Default radius:** 8px
- **Pill radius:** 9999px

## Sizes

| Size | Font size | Horizontal padding | Vertical padding |
|---|---|---|---|
| Default (small) | 12px | 6px | 2px |
| Large | 14px | 8px | 4px |

## Variants

### Brand
- **Background:** brand-softer
- **Border:** border-brand-subtle
- **Text:** fg-brand-strong

### Alternative (Neutral Soft)
- **Background:** neutral-primary-soft
- **Border:** border-default
- **Text:** heading

### Gray (Neutral Medium)
- **Background:** neutral-secondary-medium
- **Border:** border-default
- **Text:** heading

### Danger
- **Background:** danger-soft
- **Border:** border-danger-subtle
- **Text:** fg-danger-strong

### Success
- **Background:** success-soft
- **Border:** border-success-subtle
- **Text:** fg-success-strong

### Warning
- **Background:** warning-soft
- **Border:** border-warning-subtle
- **Text:** fg-warning

### Dark
- **Background:** dark
- **Border:** transparent
- **Text:** white

## Pill Badges

Use 9999px radius instead of 8px on any variant.

## Badges with Icons

- Icon size (default): 12x12px
- Icon size (large): 14x14px
- Icon spacing: 4px margin next to label

## Icon-only Badge

Square shape — equalize dimensions to 24x24px, no horizontal text padding.

## Dismissible Badges

Badge content + a close button. Close button hover backgrounds per variant:

| Variant | Close button hover background |
|---|---|
| Brand | brand-soft |
| Alternative | neutral-tertiary |
| Gray | neutral-quaternary |
| Danger | danger-medium |
| Success | success-medium |
| Warning | warning-medium |

## Dot / Notification Badge

- Positioned absolutely: -4px top, -4px right
- Size: 12x12px, fully rounded
- 2px border in border-buffer color
- Background: danger

---

## Source file: `borders.md`

# Borders

## Width Scale

| Context | Width |
|---|---|
| Default (inputs, buttons, cards) | 1px |
| Emphasis / focus | 2px |

## Rules

- Use solid borders by default
- Dashed borders only for special cases like file dropzones
- Components in the same family must use matching border widths
- Never mix 1px and 2px borders within a single component

## Usage

| Context | Width |
|---|---|
| Inputs / selects / textareas | 1px default; 2px on focus or error |
| Buttons | 1px for variants that require outlining |
| Cards / containers | 1px subtle; avoid stacked heavy borders |

---

## Source file: `button-group.md`

# Button Groups

> Dependencies: `buttons.md`, `colors.md`, `radius.md`

## Core Specs

- **Wrapper:** inline-flex, 8px radius, shadow-xs
- **Children overlap:** -1px left margin on all except first button
- **Buttons inside the group must NOT have individual shadows.** Only the wrapper has a shadow.

## Anatomy

### Wrapper
- Display: inline-flex
- Radius: 8px
- Shadow: shadow-xs

### First Button
- 8px radius on inline-start side only, 0 on inline-end

### Middle Button(s)
- No radius (0 on all corners)

### Last Button
- 8px radius on inline-end side only, 0 on inline-start

### All buttons except first
- -1px left margin to overlap borders

## Rules

- Buttons inside groups follow all styles from `buttons.md` (background, border, focus rings) except individual shadows
- Icon-only buttons: 16x16px icon, match height of text buttons

---

## Source file: `buttons.md`

# Buttons

> Dependencies: `colors.md`, `radius.md`, `shadows.md`

## Core Specs (every button except ghost and disabled)

- **Radius:** 8px (default) or 9999px for pills
- **Border:** 1px solid
- **Shadow:** shadow-xs
- **Glint effect:** Every button except ghost and disabled gets a combined box-shadow that layers the base shadow with an inset top-edge highlight and a subtle outer color glow:
  - `var(--shadow-xs), inset var(--color-1-400) 0 6px 0px -5px, var(--color-1-700) 0 4px 10px -5px`
- **Font weight:** 600 (semibold)
- **Font:** Lato
- **Box sizing:** border-box
- **Transition:** all 0.15s ease

## Sizes

| Size | Font size | Horizontal padding | Vertical padding |
|---|---|---|---|
| Extra small | 12px | 10px | 6px |
| Small | 13px | 14px | 8px |
| Base (default) | 14px | 16px | 10px |
| Large | 15px | 24px | 12px |
| Extra large | 16px | 24px | 14px |

## Variants

### Brand
- **Background:** linear gradient from brand to brand-strong (180deg)
- **Border:** transparent
- **Text:** white
- **Hover:** linear gradient from brand-strong to brand-strong; enhanced glow: `var(--shadow-sm), inset var(--color-1-400) 0 6px 0px -5px, 0 4px 16px -4px rgba(108, 71, 255, 0.3)`
- **Focus ring:** 4px, brand-medium color
- **Glint:** yes

### Secondary
- **Background:** neutral-primary-soft
- **Border:** border-default-medium
- **Text:** heading color
- **Hover:** neutral-secondary-medium background, border-default-strong border, heading text color
- **Focus ring:** 4px, neutral-tertiary color
- **Glint:** yes

### Tertiary
- **Background:** neutral-primary-soft
- **Border:** border-default
- **Text:** body color
- **Hover:** neutral-secondary-medium background, heading text color
- **Focus ring:** 4px, neutral-tertiary-soft color

### Success
- **Background:** success token
- **Border:** transparent
- **Text:** white
- **Hover:** success-strong background
- **Focus ring:** 4px, success-medium color

### Danger
- **Background:** danger token
- **Border:** transparent
- **Text:** white
- **Hover:** danger-strong background
- **Focus ring:** 4px, danger-medium color

### Warning
- **Background:** warning token
- **Border:** transparent
- **Text:** white
- **Hover:** warning-strong background
- **Focus ring:** 4px, warning-medium color

### Dark
- **Background:** dark token
- **Border:** transparent
- **Text:** white
- **Hover:** dark-strong background
- **Focus ring:** 4px, neutral-tertiary color

### Ghost (NO shadow, NO glint)
- **Background:** transparent
- **Border:** transparent
- **Text:** heading color
- **Hover:** neutral-secondary-medium background
- **Focus ring:** 4px, neutral-tertiary color
- **No shadow, no glint effect**

### Disabled (NO shadow, NO glint)
- **Background:** disabled token
- **Border:** border-default-medium
- **Text:** fg-disabled color
- **Cursor:** not-allowed
- **No hover, no focus, no shadow, no glint**

## Icons in Buttons

- Icon size: 16x16px
- Spacing: 8px gap between icon and label
- Layout: inline-flex, vertically centered

---

## Source file: `cards.md`

# Cards

> Dependencies: `colors.md`, `radius.md`, `shadows.md`, `typography.md`

## Core Specs

- **Background:** neutral-primary-soft
- **Border:** 1px, border-default color
- **Radius:** 12px (base)
- **Shadow:** shadow-xs

## Card Heading

- Desktop: 20px, medium weight, heading color
- Mobile: 16px, medium weight, heading color
- Never skip heading levels — the page hierarchy must logically arrive at the card heading level.

## Variants

### Static Card (`.card`, no interactivity)
- Background: neutral-primary-soft
- Border: 1px, border-default
- Radius: 12px
- Shadow: shadow-xs
- No hover styles. Non-interactive cards must NOT have hover background changes.

### Interactive Card (`.card`, clickable)
- Same base styles as static card
- Hover: border-default-strong border color
- Transition: colors
- Cursor: pointer

### Testimonial Card (`.card-testimonial`)
- Background: neutral-primary-soft
- Border: 1px, border-default
- Radius: 12px (base)
- Padding: 32px
- Layout: flex column, 24px gap
- Content: quote text (15px, body color, relaxed leading) + author row
- Author row: separated by top border (border-default), includes avatar (40px circle, brand-softer bg, initials), name (14px, medium, heading), and role/company (12px, body-subtle)
- No shadow by default — relies on border for definition

### Feature Card (`.card` with icon)
- Standard `.card` with 32px padding
- Icon container: 48×48px, rounded-default, colored background per intent (brand-softer, success-soft, warning-soft), ring-1 with matching subtle border, 24px bottom margin
- Heading: 16–20px, medium weight, heading color, 12px bottom margin
- Body: base size, body color

## Rules

- Background: neutral-primary-soft
- Border: 1px, border-default
- Radius: 12px
- Shadow: shadow-xs (static and feature cards only; testimonial cards omit shadow)
- Interactive hover: border-default-strong border color
- Non-interactive: no hover styles

---

## Source file: `colors.md`

# Color Tokens

> All values are CSS custom properties defined in `globals.css`. Reference them by token name. They handle light/dark mode automatically.

## Background Tokens

### Neutral
| Token | Light | Dark |
|---|---|---|
| neutral-primary-soft | #FFFFFF | #111116 |
| neutral-primary | #FFFFFF | #0D0D12 |
| neutral-primary-medium | #FFFFFF | #1A1A21 |
| neutral-primary-strong | #FFFFFF | #2C2C35 |
| neutral-secondary-soft | #FAFBFC | #111116 |
| neutral-secondary | #FAFBFC | #0D0D12 |
| neutral-secondary-medium | #F2F2F5 | #1A1A21 |
| neutral-secondary-strong | #F2F2F5 | #2C2C35 |
| neutral-tertiary-soft | #EDEDF0 | #111116 |
| neutral-tertiary | #EDEDF0 | #1A1A21 |
| neutral-tertiary-medium | #EDEDF0 | #2C2C35 |
| neutral-quaternary | #DFDFE3 | #2C2C35 |
| quaternary-medium | #DFDFE3 | #3F3F48 |
| gray | #C8C8D0 | #3F3F48 |

### Brand
| Token | Light | Dark |
|---|---|---|
| brand-softer | #F4F0FF | #1A0F36 |
| brand-soft | #E8DEFF | #2D1B69 |
| brand | #6C47FF | #7C5CFF |
| brand-medium | #D4C4FF | #2D1B69 |
| brand-strong | #5535DC | #6C47FF |

### Status
| Token | Light | Dark |
|---|---|---|
| success-soft | #ECFDF5 | #052E1C |
| success | #059669 | #10B981 |
| success-medium | #D1FAE5 | #064E3B |
| success-strong | #047857 | #059669 |
| danger-soft | #FEF2F2 | #450A0A |
| danger | #DC2626 | #EF4444 |
| danger-medium | #FEE2E2 | #7F1D1D |
| danger-strong | #B91C1C | #DC2626 |
| warning-soft | #FFFBEB | #451A03 |
| warning | #D97706 | #F59E0B |
| warning-medium | #FEF3C7 | #78350F |
| warning-strong | #B45309 | #D97706 |

### Button Glint (CSS custom properties, used for the glint box-shadow effect)
| Variable | Light | Dark |
|---|---|---|
| `--color-1-400` | rgba(255,255,255,0.15) | rgba(255,255,255,0.08) |
| `--color-1-700` | rgba(0,0,0,0.08) | rgba(0,0,0,0.15) |

### Utility
| Token | Light | Dark |
|---|---|---|
| dark | #131316 | #131316 |
| dark-strong | #0D0D12 | #2C2C35 |
| disabled | #F2F2F5 | #1A1A21 |

### Accent
| Token | Value (same both modes) |
|---|---|
| purple | #A855F7 |
| sky | #0EA5E9 |
| teal | #14B8A6 |
| pink | #EC4899 |
| cyan | #06B6D4 |
| fuchsia | #D946EF |
| indigo | #6366F1 |
| orange | #FB923C |

## Text Color Tokens

### Base
| Token | Light | Dark |
|---|---|---|
| white | #FFFFFF | #FFFFFF |
| black | #131316 | #131316 |
| heading | #131316 | #F5F5F7 |
| body | #5E5F6E | #9394A1 |
| body-subtle | #747686 | #9394A1 |

### Brand
| Token | Light | Dark |
|---|---|---|
| fg-brand-subtle | #D4C4FF | #2D1B69 |
| fg-brand | #6C47FF | #A78BFF |
| fg-brand-strong | #5535DC | #D4C4FF |

### Status
| Token | Light | Dark |
|---|---|---|
| fg-success | #059669 | #065F46 |
| fg-success-strong | #047857 | #10B981 |
| fg-danger | #DC2626 | #EF4444 |
| fg-danger-strong | #991B1B | #FCA5A5 |
| fg-warning-subtle | #D97706 | #F59E0B |
| fg-warning | #92400E | #FCD34D |
| fg-disabled | #9CA3AF | #6B7280 |

### Informational / Accent
| Token | Light | Dark |
|---|---|---|
| fg-yellow | #EAB308 | #FACC15 |
| fg-info | #3730A3 | #A5B4FC |
| fg-purple | #7C3AED | #A78BFF |
| fg-purple-strong | #6D28D9 | #D4C4FF |
| fg-cyan | #0891B2 | #06B6D4 |
| fg-indigo | #6366F1 | #818CF8 |
| fg-pink | #EC4899 | #F472B6 |
| fg-lime | #65A30D | #84CC16 |

## Border Color Tokens

| Token | Light | Dark |
|---|---|---|
| border-dark | #1F1F25 | #3F3F48 |
| border-buffer | #FFFFFF | #0D0D12 |
| border-buffer-medium | #FFFFFF | #1A1A21 |
| border-buffer-strong | #FFFFFF | #2C2C35 |
| border-muted | #FAFBFC | #111116 |
| border-light-subtle | #F2F2F5 | #111116 |
| border-light | #F2F2F5 | #1A1A21 |
| border-light-medium | #F2F2F5 | #2C2C35 |
| border-default-subtle | #E8E8EC | #111116 |
| border-default | #E8E8EC | #1F1F25 |
| border-default-medium | #E8E8EC | #2C2C35 |
| border-default-strong | #E8E8EC | #3F3F48 |
| border-success-subtle | #A7F3D0 | #064E3B |
| border-success | #059669 | #047857 |
| border-danger-subtle | #FECACA | #7F1D1D |
| border-danger | #DC2626 | #DC2626 |
| border-warning-subtle | #FDE68A | #78350F |
| border-warning | #D97706 | #F59E0B |
| border-brand-subtle | #D4C4FF | #2D1B69 |
| border-brand-light | #7C5CFF | #7C5CFF |
| border-brand | #6C47FF | #A78BFF |
| border-dark-subtle | #1F1F25 | #2C2C35 |
| border-purple | #A855F7 | #A855F7 |
| border-orange | #FB923C | #FB923C |

## Semantic Usage Rules

- Page/section backgrounds: neutral-primary-soft (default), neutral-secondary-soft (alternating)
- Primary buttons: brand background
- Headings: heading text color
- Body text: body text color
- CTA links: fg-brand text color
- Default borders: border-default
- Status borders match intent: success → border-success, danger → border-danger, warning → border-warning
- Disabled: disabled background + fg-disabled text

## Prohibited

- No raw hex/rgb values in component code — always use design tokens
- No brand text color for long-form paragraphs
- No accent text tokens (fg-purple, etc.) for body copy or navigation
- No brand/accent backgrounds for large layout surfaces (pages, sections) unless it's a hero/campaign area
- No manual light/dark value swapping — let the CSS custom properties handle it

---

## Source file: `content.md`

# Content & Grid System

> Dependencies: `layout.md`, `typography.md`

## Containers

| Type | Max width | Horizontal padding |
|---|---|---|
| Standard | 1280px | 16px |
| Internal (reading) | 768px | — (45–75 char line length) |
| Section (`.container-section`) | 1200px | 24px |

## Vertical Padding

| Breakpoint | Vertical padding |
|---|---|
| Mobile | 32px |
| Tablet (≥768px) | 48px |
| Desktop (≥1024px) | 64px or 96px for hero/feature sections |

## Grid System

Mobile-first with flexible desktop configurations.

| Context | Gap |
|---|---|
| Standard content/cards | 24px |
| Feature icon grid | 32px horizontal, 48px vertical |
| Compact widgets/metadata | 16px |
| Testimonial cards | 24px |

### Responsive Columns

| Breakpoint | Columns |
|---|---|
| Mobile (default) | 1–2 |
| Small/Tablet (≥640px) | 2–4 |
| Desktop (≥1024px) | 3–12 |

Full support for 6, 7, 8, 9+ column grids where needed.

### Common Grid Configurations

| Section type | Mobile | Tablet | Desktop |
|---|---|---|---|
| Bento features | 1 col | 3 col with spans | 3 col with spans |
| Capability list (icon + text) | 1 col | 2 col | 3 col |
| Pricing cards | 1 col | 2 col | 2 col (max-w 4xl) |
| Testimonials | 1 col | 2 col | 3 col |
| Integration logos | 2 col | 3 col | 6 col |
| Tool badges | 2 col | 4 col | 4 col |

## Breakpoints

| Name | Width |
|---|---|
| Small | 640px |
| Medium | 768px |
| Large | 1024px |
| Extra large | 1280px |
| 2x Extra large | 1536px |

## Page Section Order (Landing Page)

1. Navigation (sticky header)
2. Hero (badge, headline, lead, CTAs, trust bar)
3. Product showcase / visual demo
4. Primary features (bento grid)
5. Capabilities list (icon + title + description grid)
6. Pricing
7. Testimonials
8. Integrations / framework support
9. CTA band (final conversion section)
10. Footer

## Rules

- Always design mobile-first
- Use layout shifts (column → row) to accommodate horizontal space
- Lists: 24px indentation, 8px vertical gap between items
- Body copy: 16px, 1.6 line-height
- All interactive links follow brand underline/hover protocol
- Section headers always use the label → headline → description pattern (see `layout.md`)

---

## Source file: `dropdown.md`

# Dropdown

> Dependencies: `colors.md`, `radius.md`, `shadows.md`, `inputs.md`

## Core Specs

### Chevron Icon
- Size: 16x16px
- Spacing: 6px left margin, -2px right margin
- Color: inherits from trigger button

### Menu Container
- Background: neutral-primary-soft
- Border: 1px, border-default
- Radius: 12px (base)
- Shadow: shadow-lg
- Z-index: elevated above content

### Menu List
- Padding: 8px
- Font: 14px, body color, medium weight

### Menu Item
- Layout: inline-flex, vertically centered, full width
- Padding: 8px horizontal, 8px vertical
- Radius: 8px (default)
- Hover: neutral-tertiary-medium background, heading text
- Transition: colors, 150ms

## Trigger Sizes

| Size | Font size | Horizontal padding | Vertical padding |
|---|---|---|---|
| Small | 13px | 12px | 8px |
| Base | 14px | 16px | 10px |
| Large | 14px | 20px | 12px |

## Icon-only Trigger

- Padding: 8px
- Min size: 44x44px
- Icon: 20x20px

## Variants

### Default
- Menu width: 176px, items have 8px radius

### With Divider
- Top border (border-default) between child groups, skip first group

### With Header
- Header padding: 16px horizontal, 12px vertical
- Bottom border: border-default
- Name: heading color, 14px, bold weight
- Email: body-subtle color, 14px, truncated

### With Icons
- Icon before label: 16x16px, 8px right margin, body color
- On hover, icon color changes to heading

### With Checkbox / Radio
- Inputs: 16x16px, 4px radius, focus ring in brand-soft
- Helper text: 12px, body-subtle color, 2px top margin

### With Search
- Search input at top of menu following `inputs.md` specs
- Left icon: 12px left padding, input 36px left padding

### Scrollable
- Max height: 192px, vertical scroll overflow

## States

| State | Appearance |
|---|---|
| Focused trigger | no outline, 2px brand ring |
| Hover item | neutral-tertiary-medium background, heading text |
| Active/open item | neutral-tertiary-soft background, heading text |
| Disabled item | fg-disabled text, not-allowed cursor, no pointer events |

---

## Source file: `icon-shapes.md`

# Icon Shapes

> Dependencies: `colors.md`, `radius.md`

## Core Specs

- Box sizing: border-box
- Icon must be perfectly centered (inline-flex, centered both axes)
- Circle: fully rounded (9999px)
- Rounded square: 12px radius (MD/LG/XL), 8px radius (XS/SM)

## Sizes

| Size | Container | Icon |
|---|---|---|
| XS | 24x24px | 14x14px |
| SM | 32x32px | 16x16px |
| MD | 40x40px | 20x20px |
| LG | 48x48px | 24x24px |
| XL | 56x56px | 28x28px |

## Color Variants

### Brand
- Shape: circle
- Background: brand-softer
- Icon color: fg-brand-strong

### Gray
- Shape: circle
- Background: neutral-secondary-soft
- Icon color: body

### Danger
- Shape: circle
- Background: danger-soft
- Icon color: fg-danger-strong

### Success
- Shape: circle
- Background: success-soft
- Icon color: fg-success-strong

### Warning
- Shape: circle
- Background: warning-soft
- Icon color: fg-warning

---

## Source file: `inputs.md`

# Inputs

> Dependencies: `colors.md`, `radius.md`

## Core Specs

- **Display:** block, full width
- **Radius:** 8px (default)
- **Border:** 1px, border-default-medium
- **Background:** neutral-secondary-medium
- **Shadow:** shadow-xs
- **Font:** 14px, heading color
- **Padding:** 12px horizontal, 10px vertical
- **Placeholder:** body color
- **Transition:** all properties, 200ms

## Label

- Display: block
- Font: 14px, medium weight, heading color
- Margin bottom: 8px
- Label `htmlFor` must match the input `id`

## States

### Default
- Border: border-default-medium
- Background: neutral-secondary-medium

### Hover
- Border: border-default-strong

### Focus
- No outline
- Border: border-brand
- Ring: 1px, brand color

### Success
- Border: border-success
- Focus ring: 1px, success color

### Error / Danger
- Border: border-danger
- Focus ring: 1px, danger color

### Disabled
- Background: disabled
- Text: fg-disabled
- Cursor: not-allowed

## Input with Icons

- Icon size: 16x16px
- Icon color: body
- Container: relative positioned wrapper
- Start icon: absolutely positioned left, 12px left padding — input gets 36px left padding
- End icon: absolutely positioned right, 12px right padding — input gets 36px right padding
- Icons vertically centered within the wrapper

## Rules

- Every input must have a unique `id`
- Every label must have a matching `htmlFor`
- Padding: 12px horizontal, 10px vertical unless overridden for icon variants
- No arbitrary hex or hardcoded colors

---

## Source file: `layout.md`

# Layout & Spacing

## Spacing Rhythm

Base unit: **8px**. All spacing values should be multiples of 8px.

| Context | Value |
|---|---|
| Section vertical padding | 96px |
| Section header → content | 48px or 64px |
| Heading → paragraph | 16px |
| Container horizontal padding | 24px |
| Flex/grid row gap | 16px |
| Card grid gap | 24px |
| Wide component grid gap | 32px |
| Column layout gap | 48px |

## Container

Standard section container: max-width 1200px, centered, 24px horizontal padding.

Every major section wraps content in this container.

## Content Composition Order

Inside each section, follow this order:
1. Section label (optional — small category text above headline)
2. Heading (`h1`–`h3`)
3. Leading paragraph
4. Normal paragraph(s)
5. Lists, CTA links, or component grids

## Section Header Pattern

Each section header follows the **label → headline → description** pattern:

1. **Section label** (`.section-label`): 14px, font-weight 600, fg-brand color, 0.02em letter-spacing, 12px bottom margin. Includes an optional 16×16 icon to the left with 8px gap. Centered with `justify-center` for centered sections.
2. **Headline** (`h2`): standard heading scale (28px mobile → 36px tablet → 44px desktop), bold, heading color, 16px bottom margin.
3. **Description** (`.text-lead`): 20px, body color, max-width 70ch, centered with `mx-auto` for centered sections.
4. **Bottom margin**: 64px from header group to section content.

## Section Pattern

Each section has:
- 96px vertical padding
- A background color (alternate between neutral-primary-soft and neutral-secondary-soft)
- A centered container (max-width 1200px, 24px horizontal padding)
- A section header area (label + headline + description) with 64px bottom margin
- Section content below

## Hero Pattern

The hero section follows a centered layout:
1. **Announcement badge**: pill badge (rounded-full), border-default, neutral-secondary-soft background, xs text, with a pulsing brand dot indicator.
2. **Headline**: largest heading (36px → 48px → 64px), bold, with a gradient-highlighted keyword using `bg-clip-text text-transparent bg-linear-to-r from-brand to-purple`.
3. **Lead paragraph**: centered, max-width 2xl.
4. **CTA buttons**: two buttons centered (brand primary + secondary).
5. **Trust bar**: below CTAs, separated by a top border. Includes a label ("Trusted by...") and a row of company names/logos at 50% opacity, increasing to 70% on hover.

## Trust Bar / Logo Bar

- Class: `.logo-bar`
- Layout: flex, wrap, centered, 32px gap
- Default opacity: 50% — hover: 70%
- Separated from hero content by a top border (border-default) with 80px top margin and 48px top padding
- Label above: 14px, body-subtle color, font-medium, centered, 32px bottom margin

## Motion & Animation

- Prefer CSS-native: `transition`, `animation`, `@keyframes`. Use Motion library only when CSS cannot achieve the behavior.
- Prioritize high-impact orchestrated moments over scattered micro-interactions. A single well-sequenced page-load animation using staggered `animation-delay` delivers more perceived quality than many isolated effects.
- Reserve scroll-triggered and hover transitions for moments that reinforce hierarchy or reward attention.

## Backgrounds & Visual Depth

- Default to layered, atmospheric backgrounds rather than flat solid fills.
- Apply contextual treatments — gradient meshes, noise textures, geometric patterns, layered transparencies, dramatic shadows, decorative borders, grain overlays — that align with brand aesthetic.
- Every decorative element must serve a compositional purpose (depth, separation, or emphasis). No purely ornamental effects competing with content.

## Must

- All sections: consistent 96px vertical padding
- All containers: max-width 1200px, centered, 24px horizontal padding
- Section headers: use label → headline → description pattern with 64px bottom margin
- Consistent vertical rhythm, no crowded sections
- Layouts readable and properly spaced on both desktop and mobile

---

## Source file: `lists.md`

# Lists

> Dependencies: `colors.md`

## Core Specs

- Item spacing: 16px vertical gap between list items
- Text: body color

## List Icons

- Size: 20x20px
- Prevent squishing: no shrink
- Spacing: 6px right margin between icon and text
- Active/featured icon: fg-brand color
- Neutral icon: body color

## Inactive / Disabled Items

Strikethrough text with body color decoration on the list item.

## Pattern

Vertical flex list with 16px gap. Each item is a flex row with centered alignment — icon (20x20, no-shrink, 6px right margin) followed by a span of body-colored text.

---

## Source file: `modals.md`

# Modals

> Dependencies: `colors.md`, `radius.md`, `shadows.md`, `buttons.md`, `inputs.md`

## Core Specs

### Overlay (Backdrop)
- Fixed, covers full screen
- Z-index: 40
- Background: black at 40% opacity
- Backdrop blur: small amount

### Content Container
- Background: neutral-primary
- Radius: 12px (base)
- Shadow: shadow-xl
- Padding: 24px

## Anatomy

### Header
- Bottom border: border-default
- Top corners rounded (12px)
- Title: 20px, bold weight, heading color
- Close button: Ghost variant from `buttons.md`, 6px padding

### Body
- Vertical padding: 24px
- Vertical spacing between elements: 24px
- Text: 16px, 1.6 line-height, body color

### Footer
- Top border: border-default
- Bottom corners rounded (12px)

## Variants

### Default (Information)
Standard header + body + footer with primary/secondary action buttons.

### Pop-up (Confirmation)
Centered text, prominent icon, reduced padding:
- Body: 24px padding, text centered
- Icon: centered, 16px bottom margin, 48x48px, gray color

### Form Modal
Body contains inputs following `inputs.md`. Vertical spacing between form elements: 16px.

## Rules

- Backdrop covers full screen with fixed positioning
- Content: neutral-primary background, 12px radius, shadow-xl
- Header/Footer separated by border-default borders
- Close button must be present and functional
- Accessibility: `role="dialog"`, implement focus trap in code
- Dark mode automatic via token system

---

## Source file: `pagination.md`

# Pagination

> Dependencies: `colors.md`, `radius.md`

## Container

Font: 14px. Items displayed as flex with -1px overlap for seamless borders.

## Pagination Item

- Layout: flex, centered both axes
- Size: 36x36px
- Text: body color, medium weight
- Background: neutral-secondary-medium
- Border: 1px, border-default-medium
- Hover: neutral-tertiary-medium background, heading text
- Focus: no outline
- Overlap: -1px left margin

## Previous / Next Buttons

- Horizontal padding: 12px, height: 36px
- First item: 8px radius on inline-start side
- Last item: 8px radius on inline-end side

## Active Page Item

- Text: fg-brand color
- Background: neutral-tertiary-medium
- Hover text: fg-brand (stays same)

## Rules

- Display as flex with -1px child overlap for seamless borders
- Items: neutral-secondary-medium background, border-default-medium border, body text
- Active: fg-brand text, neutral-tertiary-medium background
- First item: rounded start, Last item: rounded end
- All items need hover and focus states

---

## Source file: `radios-checkboxes-toggle.md`

# Radios, Checkboxes & Toggles

> Dependencies: `colors.md`, `radius.md`

## Checkbox

- Size: 16x16px
- Radius: 4px
- Border: 1px, border-default-medium
- Background: neutral-secondary-medium
- Focus ring: 2px, brand-soft

### Disabled
- Border: border-light
- Text: fg-disabled

## Radio

- Size: 16x16px
- Radius: fully rounded
- Border: 1px, border-default-medium
- Background: neutral-secondary-medium
- Focus ring: 2px, brand-soft
- Checked: border-brand, indicator: neutral-primary color

### Disabled
- Border: border-light-medium
- Text: fg-disabled

Group all radio items under the same `name` attribute.

## Toggle

### Track
- Fully rounded
- Background: neutral-quaternary
- Focus-within ring: 2px, brand-soft
- Checked track: brand background
- Disabled track: neutral-tertiary background

### Thumb
- Fully rounded
- Background: white
- Border: border-buffer

### Disabled
- Track: neutral-tertiary background
- Label: fg-disabled text

## Rules

- All selection inputs must have `id` matching label `htmlFor`
- Focus states use the appropriate brand token for each control type
- Disabled states: no hover/focus interaction

---

## Source file: `radius.md`

# Border Radius

| Token | Value | Default usage |
|---|---|---|
| base | 12px | Cards, modals, accordions, popovers, sections |
| default | 8px | Buttons, inputs, badges, tooltips, dropdown items |
| sm | 4px | Checkboxes, tiny elements |
| full | 9999px | Pills, avatars, toggles, dot indicators |

## Rules

- 12px (base) for containers and surfaces; 8px (default) for interactive controls
- Never use arbitrary radius values outside this scale
- Radius must be consistent within each component family

---

## Source file: `shadows.md`

# Shadows

| Token | CSS value |
|---|---|
| shadow-2xs | `0 1px rgb(0 0 0 / 0.04)` |
| shadow-xs | `0 1px 2px 0 rgb(0 0 0 / 0.04)` |
| shadow-sm | `0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.06)` |
| shadow-md | `0 4px 6px -1px rgb(0 0 0 / 0.06), 0 2px 4px -2px rgb(0 0 0 / 0.06)` |
| shadow-lg | `0 10px 15px -3px rgb(0 0 0 / 0.07), 0 4px 6px -4px rgb(0 0 0 / 0.07)` |
| shadow-xl | `0 20px 25px -5px rgb(0 0 0 / 0.08), 0 8px 10px -6px rgb(0 0 0 / 0.08)` |
| shadow-2xl | `0 25px 50px -12px rgb(0 0 0 / 0.18)` |

## Component Mapping

| Component type | Token |
|---|---|
| Subtle separators, tiny UI details | shadow-2xs or shadow-xs |
| Inputs, buttons, small controls, lightweight cards | shadow-xs or shadow-sm |
| Standard cards, popovers, dropdowns | shadow-md |
| Prominent cards, sticky surfaces | shadow-lg |
| Modals, high-priority overlays | shadow-xl |
| Hero overlays, top-level emphasis (sparingly) | shadow-2xl |

## Rules

- Use only these tokens — no custom box-shadow values
- Keep elevation steps intentional; avoid jumping multiple levels
- Components in the same family share the same baseline elevation
- Hover/focus on interactive elevated elements: step up by one level
- Never stack multiple shadow tokens on one element
- Never use shadow-xl/shadow-2xl for dense list items or body containers

---

## Source file: `sidebars.md`

# Sidebars

> Dependencies: `colors.md`, `radius.md`, `typography.md`, `badges.md`, `alerts.md`

## Core Specs

- Background: neutral-primary-soft
- Right border: 1px, border-default (for left-sidebar); left border for right-sidebar
- Width: 256px

## Anatomy

### Outer Container
Hidden on mobile, visible at small breakpoint. Needs a toggle/trigger for mobile.

### Inner Wrapper
- Full height, vertical scroll overflow
- Padding: 12px horizontal, 16px vertical

### Navigation List
- Vertical spacing: 8px between items
- Font weight: medium

### Navigation Item
- Layout: flex, vertically centered
- Padding: 10px horizontal, 8px vertical
- Text: heading color
- Radius: 8px (default)
- Hover: neutral-secondary-medium background
- Transition: colors
- Icon: 20x20px, body color, hover → heading color, 75ms transition
- Label: 12px left margin from icon

### Active Item
- Background: neutral-secondary-strong
- Text: fg-brand-strong

### Separator
- 16px top padding, 16px top margin
- Top border: border-default
- 8px vertical spacing below

### Bottom CTA / Card
- Padding: 16px
- Top margin: 24px
- Radius: 12px (base)
- Background: brand-softer
- Can also use any alert variant from `alerts.md`

## Rules

- Responsive: hidden on mobile with a trigger mechanism
- Icons: 20x20px, body color (hover: heading color)
- Multi-level menus: indent with 44px left padding
- Spacing follows 8px grid
- Only neutral, brand, or status tokens — no arbitrary colors

---

## Source file: `tables.md`

# Tables

> Dependencies: `colors.md`, `radius.md`, `shadows.md`

## Wrapper

- Horizontal scroll overflow
- Background: neutral-primary-soft
- Radius: 12px (base)
- Border: 1px, border-default
- Shadow: shadow-xs

## Table Element

- Full width, left-aligned text (right-aligned for RTL)
- Font: 14px, body color

## Table Head

- Font: 14px, body color, medium weight
- Background: neutral-secondary-soft
- Bottom border: border-default
- Cell padding: 24px horizontal, 12px vertical

## Table Body

- Row background: neutral-primary
- Row bottom border: border-default (omit on last row to avoid doubling with wrapper border)
- Row hover: neutral-secondary-soft background (optional)
- Row header: medium weight, heading color, no-wrap
- Cell padding: 24px horizontal, 16px vertical

## Rules

- Wrapper must have horizontal scroll overflow for responsive scrolling
- Last row: omit bottom border to avoid doubling with wrapper border
- Row headers: always `scope="row"` for semantic structure
- Hover on rows is optional
- No arbitrary hex codes — use token colors only

---

## Source file: `tabs.md`

# Tabs

> Dependencies: `colors.md`, `radius.md`, `shadows.md`

## Core Specs

- Typography: 14px, medium weight, body color
- Transitions: all properties, 200ms

## Variants

### 1. Underline (Default)

**Wrapper:** bottom border, border-default

**Tab Item:**
- Padding: 16px horizontal, 12px vertical
- Bottom border: 2px, transparent
- Top corners: 8px radius
- Transition: colors, 150ms

| State | Appearance |
|---|---|
| Active | fg-brand text, border-brand bottom border |
| Inactive | transparent bottom border; hover → heading text, border-default-strong bottom border |
| Disabled | fg-disabled text, not-allowed cursor |

### 2. Pills

**Tab Item:**
- Padding: 14px horizontal, 8px vertical
- Radius: 8px (default)
- Font weight: medium
- Transition: all, 200ms

| State | Appearance |
|---|---|
| Active | brand background, white text, shadow-sm |
| Inactive | body text; hover → neutral-secondary-soft background, heading text |
| Disabled | fg-disabled text, not-allowed cursor |

### 3. Full Width

Children overlap with -1px left margin on all except first.

**Tab Item:**
- Full width, centered text
- Padding: 16px horizontal, 12px vertical
- Background: neutral-primary-soft
- Border: 1px, border-default
- Transition: colors, 150ms
- Hover: neutral-secondary-medium background, heading text

| State | Appearance |
|---|---|
| Active | neutral-secondary-soft background, fg-brand text |
| First item | rounded start (8px) |
| Last item | rounded end (8px) |

## Tabs with Icons

- Icon size: 16x16px or 20x20px
- Spacing: 8px right margin
- Layout: inline-flex, centered
- Icons inherit the text color of the tab state

---

## Source file: `tooltips-popovers.md`

# Tooltips & Popovers

> Dependencies: `colors.md`, `radius.md`, `shadows.md`

## Tooltips

### Core Specs
- Padding: 12px horizontal, 8px vertical
- Font: 14px, medium weight
- Radius: 8px (default)
- Shadow: shadow-xs
- Transition: opacity, 300ms

### Dark (Default)
- Background: dark
- Text: white
- Border: transparent

### Light
- Background: neutral-primary-medium
- Text: heading color
- Border: 1px, border-default

## Popovers

### Core Specs
- Background: neutral-primary
- Radius: 12px (base)
- Shadow: shadow-md
- Border: 1px, border-default
- Transition: opacity, 300ms

### Header / Title
- Padding: 12px horizontal, 8px vertical
- Background: neutral-secondary-soft
- Bottom border: border-default
- Font: 14px, medium weight, heading color

### Body / Content
- Standard: 12px horizontal, 8px vertical padding; 14px, body color
- Rich: 16px padding; 14px, body color

## Arrows

- Size: 8x8px rotated 45deg
- Color must match the background of the tooltip/popover variant

## Rules

- Tooltips: 8px radius
- Popovers: 12px radius
- Dark tooltips: dark background, white text
- Light tooltips/popovers: semantic neutral background + border tokens
- Arrows match parent background color

---

## Source file: `typography.md`

# Typography

> Dependencies: `colors.md`

## Core Rules

- **Font:** Lato, sans-serif — configured at app level, never override
- **Headings:** bold weight (700), heading text color
- **Body copy:** body text color, never use brand color for paragraphs longer than one sentence
- **Semantic HTML:** Use `h1`–`h6` in order, never skip levels

## Heading Scale

### Desktop

| Element | Size | Line-height | Letter-spacing | Margin-bottom |
|---|---|---|---|---|
| `h1` | 60px | 1 | -1.2px | 24px |
| `h2` | 44px | 1.1 | -0.5px | — |
| `h3` | 36px | 1.15 | -0.3px | — |
| `h4` | 30px | 1.25 | -0.2px | — |
| `h5` | 24px | 1.35 | — | — |
| `h6` | 20px | 1.25 | — | — |

### Responsive

| Element | Tablet (≥768px) | Mobile (default) |
|---|---|---|
| `h1` | 40px | 32px |
| `h2` | 36px | 28px |
| `h3` | 30px | 24px |
| `h4` | 26px | 22px |
| `h5` | 22px | 20px |
| `h6` | 18px | 18px |

Mobile-first: start with mobile sizes, scale up at tablet and desktop breakpoints.

Never reduce line-height below 1.1 for any heading.

## Paragraphs

### Leading Paragraph
- Size: 20px
- Weight: normal
- Color: body
- Line-height: 1.6
- Max width: ~70 characters

### Normal Paragraph
- Size: 16px
- Weight: normal
- Color: body
- Line-height: 1.6
- Max width: ~65 characters

### Small Supporting Copy
- Size: 14px
- Weight: normal
- Color: body
- Line-height: 1.5
- Use only for helper text, legal text, captions, metadata.

## Section Label

- Class: `.section-label`
- Size: 14px
- Weight: 600
- Color: fg-brand
- Letter-spacing: 0.02em
- Bottom margin: 12px
- Layout: inline-flex, centered items, 8px gap
- Optional 16×16 icon to the left
- Used above section headlines to categorize content (e.g. "Agentic Features", "Pricing", "Integrations")

## UI Labels

| Context | Size | Weight |
|---|---|---|
| Button labels | 14px | 500 (medium) |
| Input labels | 14px or 16px | 500 (medium) |
| Captions / meta / badges | 12px or 14px | 500 (medium) |
| Section labels | 14px | 600 (semibold) |

Do not apply paragraph line-height (1.6) to control labels.

## Links

- **Inline links:** Same size as surrounding text, fg-brand color, underline, hover → no underline
- **CTA links:** fg-brand color, medium weight, underline, hover → no underline

## Emphasis

- `<strong>` for high-priority emphasis in body text
- `<em>` for tone emphasis only, not visual hierarchy
- All-caps only for short labels: uppercase, 0.4px letter-spacing, 12px or 14px

## Dark Mode

Hierarchy stays identical. Only color tokens change (automatic via CSS custom properties). Size, weight, and spacing remain constant.
