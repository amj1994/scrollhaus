# Design System — Agent Instructions

This skill describes the visual design language for all UI output. Every component, layout, and page should follow the design specs in the module files below. These describe *what the design looks like* — you choose how to implement the styles.

## Style
A serif-driven, editorial fashion aesthetic with bold gradient accents (purple #A855F7 → coral #FF2A52 → orange #FF6B35), soft lavender-to-blush background gradients, and dramatically oversized typography — evoking high-fashion magazine layouts and avant-garde editorial design


## Before Writing Any Code

1. **Read every module that applies.** For a landing page, read at minimum: `layout.md`, `typography.md`, `colors.md`, `buttons.md`, `cards.md`, `shadows.md`, `radius.md`, `borders.md`. Do NOT write JSX until you have loaded all relevant modules.

## Critical Rules

- **Tokens are AGNOSTIC, NOT Tailwind classes:** The tokens defined in the `.md` files (like `neutral-primary-soft`, `heading`, `border-default`) are agnostic design system tokens, NOT literal Tailwind classes. Do not blindly use classes like `bg-neutral-primary-soft` unless you have explicitly mapped them in the CSS/Tailwind configuration. You must implement the mapping yourself.

- **Cross-reference modules.** A card containing buttons must satisfy both `cards.md` AND `buttons.md`.
- **Dark mode is automatic.** The CSS custom properties resolve differently in light/dark via `@media (prefers-color-scheme: dark)`. Never manually swap colors.
- **Every interactive element needs hover, focus, and disabled states** — defined in the relevant module.
- **Use semantic HTML:** proper heading hierarchy (`h1`→`h6`), `<button>` for actions, `<a>` for navigation, ARIA attributes where needed.
- **Typography page types:** Read `typography.md` page-type rules. Dashboard and e-commerce app surfaces use compact headings (max 28px, prefer 24px). Only e-commerce storefront heroes may use full display scale.

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

- **Wrapper:** full width, 1px border (border-default color), 0px radius — sharp corners
- **Item separator:** 1px bottom border (border-default) on every item except last

## Trigger (Button)

- **Layout:** flex, space-between, full width
- **Padding:** 20px horizontal, 16px vertical
- **Font:** 14px, medium weight
- **Text color:** heading
- **Background:** neutral-secondary-soft
- **Hover:** neutral-tertiary-soft background
- **Focus:** outline none, 2px ring in brand color
- **Transition:** colors, 150ms
- **Open state:** neutral-tertiary-soft background

## Panel (Content)

- **Padding:** 20px horizontal, 16px vertical
- **Background:** neutral-primary-soft
- **Top border:** 1px, border-default color
- **Font:** 14px, body color, 1.625 line-height

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
Each item is independent — has its own 1px border, 0px radius, and shadow-xs. 8px bottom margin between items. No shared outer border.

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
- **Radius:** 0px
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

- **Circular shape:** 0px radius (sharp square)
- **Rounded square shape:** 0px radius
- **Default size:** 40x40px
- **Image fit:** cover

## Sizes

| Size | Dimensions | Radius |
|---|---|---|
| Extra Small | 18x18px | 0px |
| Small | 24x24px | 0px |
| Base | 32x32px | 0px |
| Large | 44x44px | 0px |
| XL | 56x56px | 0px |
| 2XL | 64x64px | 0px |

## Bordered Avatar

- 4px padding, 0px radius, 2px outline in border-default color
- Alternative: 2px box-shadow ring in border-default color

## Stacked Avatars

- Displayed in a row (flex)
- Each avatar: 40x40px, 0px radius, 2px border in border-buffer color
- Overlap: -16px negative margin on all except first

### Stacked Counter
- Same size as avatars (40x40px), 0px radius
- Background: dark-strong, text: white, 12px font, medium weight
- Same overlap margin as other avatars

## Avatar with Text

- Flex row, 10px gap between avatar and text
- Avatar: 40x40px, 0px radius, cover fit
- Name: heading color, medium weight
- Subtitle: 14px, body color

---

## Source file: `badges.md`

# Badges

> Dependencies: `colors.md`, `radius.md`

## Core Specs

- **Border:** 1px
- **Default radius:** 0px
- **Pill radius:** 0px

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

All badge variants use 0px radius — sharp corners everywhere.

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
- Size: 12x12px, 0px radius
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

- **Wrapper:** inline-flex, 0px radius, shadow-xs
- **Children overlap:** -1px left margin on all except first button
- **Buttons inside the group must NOT have individual shadows.** Only the wrapper has a shadow.

## Anatomy

### Wrapper
- Display: inline-flex
- Radius: 0px
- Shadow: shadow-xs

### First Button
- 0px radius on all sides

### Middle Button(s)
- No radius (0 on all corners)

### Last Button
- 0px radius on all sides

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

- **Radius:** 0px (sharp corners on all buttons, including pills)
- **Border:** 1px solid
- **Shadow:** shadow-xs
- **Font weight:** 600 (semibold)
- **Font:** Charis SIL
- **Box sizing:** border-box
- **Transition:** all properties on hover, 250ms ease-out

## Sizes

| Size | Font size | Horizontal padding | Vertical padding |
|---|---|---|---|
| Extra small | 12px | 14px | 8px |
| Small | 14px | 16px | 10px |
| Base (default) | 14px | 20px | 12px |
| Large | 16px | 24px | 14px |
| Extra large | 16px | 28px | 16px |

## Variants

### Brand
- **Background:** brand gradient (`linear-gradient(135deg, #A855F7, #FF2A52, #FF6B35)`)
- **Border:** transparent
- **Text:** white
- **Hover:** gradient shifts brighter (increase saturation/lightness by ~8%), subtle lift with shadow-sm
- **Focus ring:** 4px, brand-medium color
- **Glint:** no

### Secondary
- **Background:** neutral-secondary-medium
- **Border:** border-default-medium
- **Text:** body color
- **Hover:** neutral-tertiary-medium background, heading text color
- **Focus ring:** 4px, neutral-tertiary color
- **Glint:** yes

### Tertiary
- **Background:** neutral-primary-soft
- **Border:** border-default
- **Text:** body color
- **Hover:** neutral-secondary-medium background, heading text color
- **Focus ring:** 4px, neutral-tertiary-soft color
- **Glint:** yes

### Success
- **Background:** success token
- **Border:** transparent
- **Text:** white
- **Hover:** success-strong background
- **Focus ring:** 4px, success-medium color
- **Glint:** yes

### Danger
- **Background:** danger token
- **Border:** transparent
- **Text:** white
- **Hover:** danger-strong background
- **Focus ring:** 4px, danger-medium color
- **Glint:** yes

### Warning
- **Background:** warning token
- **Border:** transparent
- **Text:** white
- **Hover:** warning-strong background
- **Focus ring:** 4px, warning-medium color
- **Glint:** yes

### Dark
- **Background:** dark token
- **Border:** transparent
- **Text:** white; optionally use gradient text (`linear-gradient(135deg, #A855F7, #FF2A52, #FF6B35)`) via `background-clip: text` for editorial emphasis
- **Hover:** dark-strong background, subtle shadow-sm lift
- **Focus ring:** 4px, neutral-tertiary color
- **Glint:** yes

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
- **Radius:** 0px
- **Shadow:** shadow-xs

## Card Heading

- Desktop: 20px, medium weight, heading color
- Mobile: 16px, medium weight, heading color
- Never skip heading levels — the page hierarchy must logically arrive at the card heading level.

## States

### Static Card (no interactivity)
- Background: neutral-primary-soft
- Border: 1px, border-default
- Radius: 0px
- Shadow: shadow-xs
- No hover styles. Non-interactive cards must NOT have hover background changes.

### Interactive Card (clickable)
- Same base styles as static card
- Hover: neutral-secondary-medium background
- Transition: colors
- Cursor: pointer

## Rules

- Background: neutral-primary-soft
- Border: 1px, border-default
- Radius: 0px
- Shadow: shadow-xs
- Interactive hover: neutral-secondary-medium background
- Non-interactive: no hover styles

---

## Source file: `colors.md`

# Color Tokens


## Background Tokens

### Neutral
| Token | Light | Dark |
|---|---|---|
| neutral-primary-soft | #FDFBF9 | #0E0B08 |
| neutral-primary | #FDFBF9 | #080604 |
| neutral-primary-medium | #FDFBF9 | #1E1A16 |
| neutral-primary-strong | #F9F6F0 | #352F28 |
| neutral-secondary-soft | #F5F0EB | #0E0B08 |
| neutral-secondary | #F5F0EB | #080604 |
| neutral-secondary-medium | #F5F0EB | #1E1A16 |
| neutral-secondary-strong | #F5F0EB | #352F28 |
| neutral-tertiary-soft | #EDE7E0 | #0E0B08 |
| neutral-tertiary | #EDE7E0 | #1E1A16 |
| neutral-tertiary-medium | #EDE7E0 | #352F28 |
| neutral-quaternary | #E2DCD4 | #352F28 |
| quaternary-medium | #E2DCD4 | #423B34 |
| gray | #C8BFB3 | #423B34 |

### Brand
| Token | Light | Dark |
|---|---|---|
| brand-softer | #F9F6F0 | #2B0D14 |
| brand-soft | #FDDCE3 | #4D1A2A |
| brand | #FF2A52 | #FF2A52 |
| brand-medium | #FF8DA2 | #4D1A2A |
| brand-strong | #D9224A | #FF2A52 |

### Status
| Token | Light | Dark |
|---|---|---|
| success-soft | #ECFDF5 | #002C22 |
| success | #007A55 | #009966 |
| success-medium | #D0FAE5 | #004F3B |
| success-strong | #006045 | #007A55 |
| danger-soft | #FEF0F2 | #4D0218 |
| danger | #C70036 | #C70036 |
| danger-medium | #FFE4E6 | #8B0836 |
| danger-strong | #A50036 | #A50036 |
| warning-soft | #FFF7ED | #7C2D12 |
| warning | #F97316 | #F97316 |
| warning-medium | #FFEDD5 | #7C2D12 |
| warning-strong | #C2410C | #C2410C |

### Button Glint (CSS custom properties, used for the glint box-shadow effect)
| Variable | Light | Dark |
|---|---|---|
| `--color-1-400` | rgba(255,255,255,0.18) | rgba(255,255,255,0.10) |
| `--color-1-700` | rgba(0,0,0,0.06) | rgba(0,0,0,0.18) |

### Utility
| Token | Light | Dark |
|---|---|---|
| dark | #1A1412 | #1A1412 |
| dark-strong | #0E0B08 | #352F28 |
| disabled | #EDE7E0 | #1A1412 |

### Accent
| Token | Value (same both modes) |
|---|---|
| purple | #A855F7 |
| sky | #0EA5E9 |
| teal | #0D9488 |
| pink | #FF2A52 |
| cyan | #06B6D4 |
| fuchsia | #C026D3 |
| indigo | #4F46E5 |
| orange | #FF6B35 |

## Text Color Tokens

### Base
| Token | Light | Dark |
|---|---|---|
| white | #FFFFFF | #FFFFFF |
| black | #0E0B08 | #0E0B08 |
| heading | #1A1412 | #FDFBF9 |
| body | #5C544A | #9C958C |
| body-subtle | #78706A | #9C958C |

### Brand
| Token | Light | Dark |
|---|---|---|
| fg-brand-subtle | #FF8DA2 | #4D1A2A |
| fg-brand | #FF2A52 | #FF2A52 |
| fg-brand-strong | #D9224A | #FF8DA2 |

### Status
| Token | Light | Dark |
|---|---|---|
| fg-success | #047857 | #065F46 |
| fg-success-strong | #065F46 | #10B981 |
| fg-danger | #BE123C | #F43F5E |
| fg-danger-strong | #881337 | #F87171 |
| fg-warning-subtle | #EA580C | #F97316 |
| fg-warning | #7C2D12 | #FBBF24 |
| fg-disabled | #9C958C | #5C544A |

### Informational / Accent
| Token | Light | Dark |
|---|---|---|
| fg-yellow | #FACC15 | #FACC15 |
| fg-info | #312E81 | #93C5FD |
| fg-purple | #9333EA | #A855F7 |
| fg-purple-strong | #7E3AF2 | #DDD6FE |
| fg-cyan | #0891B2 | #06B6D4 |
| fg-indigo | #4F46E5 | #4F46E5 |
| fg-pink | #FF2A52 | #FF2A52 |
| fg-lime | #65A30D | #84CC16 |

## Border Color Tokens

| Token | Light | Dark |
|---|---|---|
| border-dark | #1A1412 | #4D4840 |
| border-buffer | #FDFBF9 | #080604 |
| border-buffer-medium | #FDFBF9 | #1A1412 |
| border-buffer-strong | #FDFBF9 | #352F28 |
| border-muted | #E2DCD4 | #352F28 |
| border-light-subtle | #EDE7E0 | #2B1E18 |
| border-light | #DDD6CC | #423B34 |
| border-light-medium | #C8BFB3 | #352F28 |
| border-default-subtle | #EDE7E0 | #2B1E18 |
| border-default | #DDD6CC | #423B34 |
| border-default-medium | #C8BFB3 | #352F28 |
| border-default-strong | #A89F94 | #1E1A16 |
| border-success-subtle | #A7F3D0 | #064E3B |
| border-success | #047857 | #065F46 |
| border-danger-subtle | #FECDD3 | #881337 |
| border-danger | #BE123C | #BE123C |
| border-warning-subtle | #FED7AA | #7C2D12 |
| border-warning | #EA580C | #F97316 |
| border-brand-subtle | #FDDCE3 | #4D1A2A |
| border-brand-light | #FF2A52 | #FF2A52 |
| border-brand | #D9224A | #FF2A52 |
| border-dark-subtle | #1A1412 | #352F28 |
| border-purple | #A855F7 | #A855F7 |
| border-orange | #FF6B35 | #FF6B35 |

## Semantic Usage Rules

- Page/section backgrounds: neutral-primary-soft (default) with soft gradient overlays (`linear-gradient(135deg, #F3E8FF 0%, #FDFBF9 40%, #FFF1F3 100%)`) for hero and feature sections
- Primary buttons: brand gradient background (`linear-gradient(135deg, #A855F7, #FF2A52, #FF6B35)`) with white text
- Headings: hero/feature headings use gradient text (`linear-gradient(135deg, #A855F7, #FF2A52, #FF6B35)`) via `background-clip: text` and `-webkit-text-fill-color: transparent`; standard headings use the heading text color
- Body text: body text color
- CTA links: fg-brand text color
- Default borders: border-default (subtle warm neutral)
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
| Standard | 1280px | 24px |
| Internal (reading) | 768px | — (45–75 char line length) |

## Vertical Padding

| Breakpoint | Vertical padding |
|---|---|
| Mobile | 24px |
| Tablet (≥768px) | 32px |
| Desktop (≥1024px) | 64px or 80px for hero/feature sections |

## Grid System

Mobile-first with flexible desktop configurations.

| Context | Gap |
|---|---|
| Standard content/cards | 24px |
| Compact widgets/metadata | 12px |

### Responsive Columns

| Breakpoint | Columns |
|---|---|
| Mobile (default) | 1–2 |
| Small/Tablet (≥640px) | 2–4 |
| Desktop (≥1024px) | 3–12 |

Full support for 6, 7, 8, 9+ column grids where needed.

## Breakpoints

| Name | Width |
|---|---|
| Small | 640px |
| Medium | 768px |
| Large | 1024px |
| Extra large | 1280px |
| 2x Extra large | 1536px |

## Rules

- Always design mobile-first
- Use layout shifts (column → row) to accommodate horizontal space
- Lists: 16px indentation, 8px vertical gap between items
- Body copy: 16px, 1.6 line-height
- All interactive links follow brand underline/hover protocol

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
- Radius: 0px
- Shadow: shadow-lg
- Z-index: elevated above content

### Menu List
- Padding: 8px
- Font: 14px, body color, medium weight

### Menu Item
- Layout: inline-flex, vertically centered, full width
- Padding: 8px horizontal, 8px vertical
- Radius: 0px
- Hover: neutral-tertiary-medium background, heading text
- Transition: colors, 150ms

## Trigger Sizes

| Size | Font size | Horizontal padding | Vertical padding |
|---|---|---|---|
| Small | 14px | 12px | 8px |
| Base | 14px | 16px | 10px |
| Large | 16px | 20px | 12px |

## Icon-only Trigger

- Padding: 8px
- Min size: 44x44px
- Icon: 20x20px

## Variants

### Default
- Menu width: 176px, items have 0px radius

### With Divider
- Top border (border-default) between child groups, skip first group

### With Header
- Header padding: 16px horizontal, 12px vertical
- Bottom border: border-default
- Name: heading color, 14px, semibold weight
- Email: body-subtle color, 14px, truncated

### With Icons
- Icon before label: 16x16px, 8px right margin, body color
- On hover, icon color changes to heading

### With Checkbox / Radio
- Inputs: 16x16px, 0px radius, focus ring in brand-soft
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
- Circle: 0px radius (sharp square)
- Rounded square: 0px radius (all sizes)

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
- **Radius:** 0px
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

Base unit: **4px**. All spacing values should be multiples of 4px.

| Context | Value |
|---|---|
| Section vertical padding | 80px |
| Section header → content | 40px or 56px |
| Heading → paragraph | 16px |
| Container horizontal padding | 24px |
| Flex/grid row gap | 16px |
| Card grid gap | 24px |
| Wide component grid gap | 32px |
| Column layout gap | 40px |

## Container

Standard section container: max-width 1280px, centered, 24px horizontal padding.

Every major section wraps content in this container.

## Content Composition Order

Inside each section, follow this order:
1. Heading (`h1`–`h3`)
2. Leading paragraph
3. Normal paragraph(s)
4. Lists, CTA links, or component grids

## Section Pattern

Each section has:
- 80px vertical padding
- Background: neutral-primary-soft (#FDFBF9) as the base — hero and feature sections layer a soft gradient overlay on top
- A centered container (max-width 1280px, 24px horizontal padding)
- A section header area with 40px bottom margin
- Section content below

### Critical: Soft Gradient Background Rule

- **Hero and feature sections** use a soft multi-stop gradient overlay: `linear-gradient(135deg, #F3E8FF 0%, #FDFBF9 40%, #FFF1F3 100%)` — lavender to warm white to blush pink
- **Standard sections** use neutral-primary-soft (#FDFBF9) as a flat warm off-white background
- **Alternating sections** may use neutral-secondary-soft (#F5F0EB) to create subtle separation
- Section dividers (when needed): a thin 1px solid border in border-default color between sections, or generous whitespace (120px+ gap) as the primary separator
- The overall page tone is light, warm, and airy — no heavy dark surfaces unless used for intentional dramatic contrast (e.g., a dark hero card or CTA block)

### Editorial Color Discipline

- **Text**: Headings use heading text color for standard content; hero/feature headings use gradient text (`linear-gradient(135deg, #A855F7, #FF2A52, #FF6B35)`) via `background-clip: text`. Body text uses body/body-subtle tokens
- **Borders**: Subtle warm neutrals (border-default, border-light) for cards, inputs, and containers. Brand border tokens (border-brand, border-brand-light) reserved for active/focus states and brand-accented elements only
- **Buttons**: Brand gradient for primary CTA (`linear-gradient(135deg, #A855F7, #FF2A52, #FF6B35)`); dark token for strong/editorial CTAs; neutral tokens for secondary/tertiary buttons
- **Cards**: Warm off-white background (neutral-primary-soft) with subtle 1px border (border-default). Minimal shadows. Clean whitespace inside
- **Links and interactive elements**: fg-brand for default state, fg-brand-strong for hover
- **Icons**: body color for neutral, fg-brand for highlighted/active
- **Dominant palette**: warm whites (#FDFBF9, #F9F6F0), soft gradients (lavender → blush), and the brand gradient for emphasis. Dark (#1A1412) used sparingly for high-contrast text and CTAs

## Motion & Animation

- Prefer CSS-native: `transition`, `animation`, `@keyframes`. Use Motion library only when CSS cannot achieve the behavior.
- Prioritize high-impact orchestrated moments over scattered micro-interactions. A single well-sequenced page-load animation using staggered `animation-delay` delivers more perceived quality than many isolated effects.
- Reserve scroll-triggered and hover transitions for moments that reinforce hierarchy or reward attention.
- Editorial fashion aesthetic favors elegant, smooth transitions — keep durations moderate (200–400ms) with ease-out or cubic-bezier curves for a refined, luxurious feel.

## Backgrounds & Visual Depth

- Default to a warm off-white (#FDFBF9) base across the page. Hero and feature sections layer soft gradient overlays (lavender → warm white → blush pink) to create depth without heavy colors.
- Apply subtle editorial treatments — faint gradient washes, soft vignettes, or barely-visible paper textures — all at very low opacity (3–8%) so the warm white base stays dominant.
- Section separation is achieved primarily through generous vertical spacing (80–120px) and optional thin neutral borders, not through hard background color changes.
- Every decorative element must serve a compositional purpose (depth, separation, or emphasis). No purely ornamental effects competing with content.
- Card and container depth comes from subtle shadows (shadow-xs to shadow-sm) and thin neutral borders, not from heavy elevation or colored borders.

## Must

- All sections: consistent 80px vertical padding
- All containers: max-width 1280px, centered, 24px horizontal padding
- Section headers: 40px or 56px bottom margin
- Consistent vertical rhythm, no crowded sections
- Layouts readable and properly spaced on both desktop and mobile
- **Hero/feature backgrounds use soft gradient overlays** — lavender (#F3E8FF) through warm white (#FDFBF9) to blush (#FFF1F3)
- **Hero/feature headings use gradient text** — `linear-gradient(135deg, #A855F7, #FF2A52, #FF6B35)` via `background-clip: text`
- **Primary CTA buttons use gradient background** — same gradient direction and stops
- **Body surfaces stay warm and light** — neutral-primary-soft or neutral-secondary-soft, never heavy dark surfaces for general content
- **Sections separated by generous whitespace** and optional thin neutral borders, not by contrasting background colors
- **Photography and imagery should be large, dramatic, and high-contrast** — editorial fashion feel with generous whitespace framing

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
- Background: black at 50% opacity
- Backdrop blur: small amount

### Content Container
- Background: neutral-primary
- Radius: 0px
- Shadow: shadow-xl
- Padding: 20px

## Anatomy

### Header
- Bottom border: border-default
- Top corners sharp (0px)
- Title: 20px, semibold weight, heading color
- Close button: Ghost variant from `buttons.md`, 6px padding

### Body
- Vertical padding: 24px
- Vertical spacing between elements: 24px
- Text: 16px, 1.625 line-height, body color

### Footer
- Top border: border-default
- Bottom corners sharp (0px)

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
- Content: neutral-primary background, 0px radius, shadow-xl
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
- Size: 36x36px (or 40x40px)
- Text: body color, medium weight
- Background: neutral-secondary-medium
- Border: 1px, border-default-medium
- Hover: neutral-tertiary-medium background, heading text
- Focus: no outline
- Overlap: -1px left margin

## Previous / Next Buttons

- Horizontal padding: 12px, height: 36px
- First item: 0px radius (sharp corners)
- Last item: 0px radius (sharp corners)

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
- Radius: 0px
- Border: 1px, border-default-medium
- Background: neutral-secondary-medium
- Focus ring: 2px, brand-soft

### Disabled
- Border: border-light
- Text: fg-disabled

## Radio

- Size: 16x16px
- Radius: 0px
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
- 0px radius
- Background: neutral-quaternary
- Focus-within ring: 2px, brand-soft
- Checked track: brand background
- Disabled track: neutral-tertiary background

### Thumb
- 0px radius
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
| base | 0px | Buttons, cards, inputs, modals, sections |
| default | 0px | Badges, tooltips, dropdown items, small controls |
| sm | 0px | Checkboxes, tiny elements |
| full | 0px | Pills, avatars, toggles, dot indicators |

## Rules

- 0px is the radius for every element across the product — all corners are sharp
- Never use arbitrary radius values; every element must have 0px border-radius
- No rounded corners on any component, including pills, avatars, and toggles

---

## Source file: `shadows.md`

# Shadows

| Token | CSS value |
|---|---|
| shadow-2xs | `0 1px rgb(0 0 0 / 0.02)` |
| shadow-xs | `0 1px 2px 0 rgb(0 0 0 / 0.03)` |
| shadow-sm | `0 1px 3px 0 rgb(0 0 0 / 0.05), 0 1px 2px -1px rgb(0 0 0 / 0.04)` |
| shadow-md | `0 2px 6px -1px rgb(0 0 0 / 0.05), 0 1px 3px -1px rgb(0 0 0 / 0.03)` |
| shadow-lg | `0 4px 10px -2px rgb(0 0 0 / 0.06), 0 2px 4px -2px rgb(0 0 0 / 0.03)` |
| shadow-xl | `0 8px 20px -4px rgb(0 0 0 / 0.07), 0 4px 8px -4px rgb(0 0 0 / 0.03)` |
| shadow-2xl | `0 16px 32px -8px rgb(0 0 0 / 0.12)` |

## Component Mapping

| Component type | Token |
|---|---|
| Subtle separators, tiny UI details | shadow-2xs or shadow-xs |
| Inputs, buttons, small controls, lightweight cards | shadow-xs or shadow-sm |
| Standard cards, popovers, dropdowns | shadow-sm or shadow-md |
| Prominent cards, sticky surfaces | shadow-md or shadow-lg |
| Modals, high-priority overlays | shadow-lg or shadow-xl |
| Hero overlays, top-level emphasis (sparingly) | shadow-xl or shadow-2xl |

## Rules

- Use only these tokens — no custom box-shadow values
- Keep elevation steps intentional; avoid jumping multiple levels
- Components in the same family share the same baseline elevation
- Hover/focus on interactive elevated elements: step up by one level
- Never stack multiple shadow tokens on one element
- Never use shadow-xl/shadow-2xl for dense list items or body containers
- Shadows should be soft and diffused — the editorial aesthetic avoids hard, crisp shadow edges

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
- Padding: 8px horizontal, 8px vertical
- Text: heading color
- Radius: 0px
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
- Radius: 0px
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
- Radius: 0px
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
- Padding: 16px horizontal, 16px vertical
- Bottom border: 2px, transparent
- Top corners: 0px radius
- Transition: colors, 150ms

| State | Appearance |
|---|---|
| Active | fg-brand text, border-brand bottom border |
| Inactive | transparent bottom border; hover → heading text, border-default-strong bottom border |
| Disabled | fg-disabled text, not-allowed cursor |

### 2. Pills

**Tab Item:**
- Padding: 16px horizontal, 10px vertical
- Radius: 0px
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
- Padding: 16px horizontal, 16px vertical
- Background: neutral-primary-soft
- Border: 1px, border-default
- Transition: colors, 150ms
- Hover: neutral-secondary-medium background, heading text

| State | Appearance |
|---|---|
| Active | neutral-secondary-soft background, fg-brand text |
| First item | sharp corners (0px) |
| Last item | sharp corners (0px) |

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
- Radius: 0px
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
- Radius: 0px
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

- Tooltips: 0px radius
- Popovers: 0px radius
- Dark tooltips: dark background, white text
- Light tooltips/popovers: semantic neutral background + border tokens
- Arrows match parent background color

---

## Source file: `typography.md`

# Typography

> Dependencies: `colors.md`

## Core Rules

- **Font:** Charis SIL, serif — configured at app level, never override
- **Headings:** bold weight (700), heading text color; hero/feature headings use gradient text (`linear-gradient(135deg, #A855F7, #FF2A52, #FF6B35)`) via `background-clip: text` and `-webkit-text-fill-color: transparent`
- **Body copy:** body text color, never use brand color for paragraphs longer than one sentence
- **Semantic HTML:** Use `h1`–`h6` in order, never skip levels
- **Do not override heading sizes** with arbitrary `text-[…]` or viewport units (`vw`) unless a page-type rule below explicitly allows it

## Heading Scale (Marketing / Landing pages)

Use the global `h1`–`h6` styles from `globals.css`. Do not inflate beyond this scale.

### Desktop (≥1024px)

| Element | Size | Line-height | Letter-spacing | Margin-bottom |
|---|---|---|---|---|
| `h1` | 60px | 1.1 | -0.8px | 32px |
| `h2` | 44px | 1.15 | -0.5px | — |
| `h3` | 36px | 1.2 | -0.3px | — |
| `h4` | 30px | 1.25 | — | — |
| `h5` | 24px | 1.3 | — | — |
| `h6` | 20px | 1.35 | — | — |

### Responsive

| Element | Tablet (≥768px) | Mobile (default) |
|---|---|---|
| `h1` | 40px | 32px |
| `h2` | 36px | 28px |
| `h3` | 30px | 24px |
| `h4` | 24px | 20px |
| `h5` | 20px | 18px |
| `h6` | 16px | 16px |

Mobile-first: start with mobile sizes, scale up at tablet and desktop breakpoints.

Differentiate hierarchy through weight, color, gradient usage, letter-spacing, and semantic HTML order — not through oversized or viewport-based sizing.

Never reduce line-height below 1.1 for any heading.

## Page-Type Heading Rules

### Dashboard pages

- Set `data-surface="dashboard"` on the root app shell (e.g. `<main>` or layout wrapper).
- **All headings** (`h1`–`h6`) must stay **compact: maximum 28px, preferably 24px**.
- Page title (`h1`): **24px** preferred.
- Section titles (`h2`): **22–24px**.
- Panel / card titles (`h3`–`h4`): **20–24px**.
- Never use display-scale marketing sizes in dashboard sidebars, tables, stats, or settings.

### E-commerce pages (app surfaces)

- Set `data-surface="ecommerce-app"` on the storefront layout root.
- **All headings outside the storefront hero** follow the same compact rule as dashboard: **max 28px, prefer 24px**.
- Product grid titles, category headers, cart, and footer sections: **20–24px**.
- Do not use oversized `text-[…]` utilities on e-commerce app headings.

### E-commerce storefront hero (exception)

- Only the **above-the-fold marketing hero** on an e-commerce landing page may use the full **Landing Heading Scale** (`h1` up to 60px desktop).
- Mark the hero wrapper with `data-section="storefront-hero"` inside `data-surface="ecommerce-app"`.
- Hero supporting copy stays at **20px** leading paragraph size; hero `h2` subheads max **44px** desktop.
- All sections below the hero revert to compact e-commerce heading rules.

## Paragraphs

### Leading Paragraph
- Size: 20px
- Weight: normal
- Color: body
- Line-height: 1.6
- Max width: ~65 characters

### Normal Paragraph
- Size: 16px
- Weight: normal
- Color: body
- Line-height: 1.6
- Max width: ~60 characters

### Small Supporting Copy
- Size: 13px
- Weight: normal
- Color: body
- Line-height: 1.5
- Use only for helper text, legal text, captions, metadata.

## UI Labels

| Context | Size | Weight |
|---|---|---|
| Button labels | 14px | 600 (semibold) |
| Input labels | 13px or 14px | 500 (medium) |
| Captions / meta / badges | 11px or 12px | 500 (medium) |

Do not apply paragraph line-height (1.6) to control labels.

## Links

- **Inline links:** Same size as surrounding text, fg-brand color, underline, hover → no underline
- **CTA links:** fg-brand color, semibold weight, underline, hover → no underline

## Emphasis

- `<strong>` for high-priority emphasis in body text
- `<em>` for tone emphasis only, not visual hierarchy
- All-caps only for short labels: uppercase, 1px letter-spacing, 12px or 13px

## Dark Mode

Hierarchy stays identical. Only color tokens change (automatic via CSS custom properties). Size, weight, and spacing remain constant.
