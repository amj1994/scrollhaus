# Design System — Agent Instructions

This skill describes the visual design language for all UI output. Every component, layout, and page should follow the design specs in the module files below. These describe *what the design looks like* — you choose how to implement the styles.

## Style
A bold neo-brutalist interface with high contrast, thick black borders, hard offset shadows, bright vivid colors, and unapologetically loud shapes — designed to grab attention and make a statement


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

- **Wrapper:** full width, 2px solid black border (border-default), 6px radius — clips first/last item corners
- **Item separator:** 2px bottom border (border-default) on every item except last

## Trigger (Button)

- **Layout:** flex, space-between, full width
- **Padding:** 20px horizontal, 16px vertical
- **Font:** 14px, bold weight
- **Text color:** heading (black)
- **Background:** neutral-secondary-soft
- **Hover:** neutral-tertiary-soft background, shadow grows
- **Focus:** outline none, 3px ring in brand color
- **Transition:** colors, 150ms
- **Open state:** neutral-tertiary-soft background

## Panel (Content)

- **Padding:** 20px horizontal, 16px vertical
- **Background:** neutral-primary-soft (white)
- **Top border:** 2px solid black (border-default)
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
Each item is independent — has its own 2px solid black border, 6px radius, and shadow-sm. 8px bottom margin between items. No shared outer border.

### Always Open
Multiple panels can expand simultaneously. Same styling as Default.

### Flush
No outer border. Trigger and panel have transparent backgrounds. Only 2px solid black bottom border dividers between items. Use inside containers that already provide a background.

## States

| State | Trigger appearance |
|---|---|
| Closed | heading text, neutral-secondary-soft background |
| Open | heading text, neutral-tertiary-soft background |
| Hover | neutral-tertiary-soft background |
| Focus | 3px brand ring, no outline |
| Disabled | fg-disabled text, not-allowed cursor, no hover/focus |

---

## Source file: `alerts.md`

# Alerts

> Dependencies: `colors.md`, `radius.md`

## Core Specs

- **Padding:** 16px
- **Radius:** 6px (base)
- **Border:** 2px solid black
- **Heading:** 16px, bold weight
- **Body:** 14px, normal weight, 1.6 line-height
- **Shadow:** shadow-xs (subtle hard offset)

## Variants

### Brand
- **Background:** brand-softer
- **Border:** 2px solid black
- **Text:** fg-brand-strong

### Success
- **Background:** success-soft
- **Border:** 2px solid black
- **Text:** fg-success-strong

### Danger
- **Background:** danger-soft
- **Border:** 2px solid black
- **Text:** fg-danger-strong

### Warning
- **Background:** warning-soft
- **Border:** 2px solid black
- **Text:** fg-warning

---

## Source file: `avatars.md`

# Avatars

> Dependencies: `colors.md`, `radius.md`

## Core Specs

- **Circular shape:** fully rounded (9999px)
- **Rounded square shape:** 6px radius
- **Default size:** 40x40px
- **Image fit:** cover
- **Border:** 2px solid black on all avatar shapes

## Sizes

| Size | Dimensions | Radius |
|---|---|---|
| Extra Small | 18x18px | 2px |
| Small | 24x24px | 2px |
| Base | 32x32px | 6px |
| Large | 44x44px | 6px |
| XL | 56x56px | 6px |
| 2XL | 64x64px | 6px |

## Bordered Avatar

- 4px padding, fully rounded, 2px solid black outline
- Alternative: 2px box-shadow ring in border-default color (black)

## Stacked Avatars

- Displayed in a row (flex)
- Each avatar: 40x40px, fully rounded, 2px solid black border
- Overlap: -16px negative margin on all except first

### Stacked Counter
- Same size as avatars (40x40px), fully rounded
- Background: dark-strong (black), text: white, 12px font, bold weight
- Same overlap margin as other avatars
- Border: 2px solid black

## Avatar with Text

- Flex row, 10px gap between avatar and text
- Avatar: 40x40px, fully rounded, cover fit, 2px solid black border
- Name: heading color, bold weight
- Subtitle: 14px, body color

---

## Source file: `badges.md`

# Badges

> Dependencies: `colors.md`, `radius.md`

## Core Specs

- **Border:** 2px solid black
- **Default radius:** 4px
- **Pill radius:** 9999px

## Sizes

| Size | Font size | Horizontal padding | Vertical padding |
|---|---|---|---|
| Default (small) | 12px | 6px | 2px |
| Large | 14px | 8px | 4px |

## Variants

### Brand
- **Background:** brand-softer
- **Border:** 2px solid black
- **Text:** fg-brand-strong

### Alternative (Neutral Soft)
- **Background:** neutral-primary-soft
- **Border:** 2px solid black
- **Text:** heading

### Gray (Neutral Medium)
- **Background:** neutral-secondary-medium
- **Border:** 2px solid black
- **Text:** heading

### Danger
- **Background:** danger-soft
- **Border:** 2px solid black
- **Text:** fg-danger-strong

### Success
- **Background:** success-soft
- **Border:** 2px solid black
- **Text:** fg-success-strong

### Warning
- **Background:** warning-soft
- **Border:** 2px solid black
- **Text:** fg-warning

### Dark
- **Background:** dark
- **Border:** 2px solid black
- **Text:** white

## Pill Badges

Use 9999px radius instead of 4px on any variant.

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
| Default (inputs, buttons, cards, containers) | 2px |
| Emphasis / focus | 3px |

## Rules

- Use solid borders by default — always solid black (border-default token) for the neo-brutalist aesthetic
- All visible component borders must be 2px solid black — this is the defining brutalist border style
- Dashed borders only for special cases like file dropzones
- Components in the same family must use matching border widths
- Never mix 2px and 3px borders within a single component

## Usage

| Context | Width |
|---|---|
| Inputs / selects / textareas | 2px default; 3px on focus or error |
| Buttons | 2px solid black on all variants |
| Cards / containers | 2px solid black |

---

## Source file: `button-group.md`

# Button Groups

> Dependencies: `buttons.md`, `colors.md`, `radius.md`

## Core Specs

- **Wrapper:** inline-flex, 6px radius, shadow-sm, 2px solid black border
- **Children overlap:** -2px left margin on all except first button (to account for 2px borders)
- **Buttons inside the group must NOT have individual shadows.** Only the wrapper has a shadow.

## Anatomy

### Wrapper
- Display: inline-flex
- Radius: 6px
- Shadow: shadow-sm
- Border: 2px solid black

### First Button
- 6px radius on inline-start side only, 0 on inline-end

### Middle Button(s)
- No radius (0 on all corners)

### Last Button
- 6px radius on inline-end side only, 0 on inline-start

### All buttons except first
- -2px left margin to overlap borders

## Rules

- Buttons inside groups follow all styles from `buttons.md` (background, border, focus rings) except individual shadows
- Icon-only buttons: 16x16px icon, match height of text buttons

---

## Source file: `buttons.md`

# Buttons

> Dependencies: `colors.md`, `radius.md`, `shadows.md`

## Core Specs (every button except ghost and disabled)

- **Radius:** 6px (base) or 9999px for pills
- **Border:** 2px solid black (border-default)
- **Shadow:** shadow-xs (2px 2px 0px solid black)
- **Glint effect:** Every button except ghost and disabled gets a hard offset shadow that steps up on hover:
  - Default: `var(--shadow-xs)`
  - Hover: `var(--shadow-sm)` (shadow grows on hover for brutalist depth)
- **Font weight:** 700 (bold)
- **Font:** "Darker Grotesque"
- **Box sizing:** border-box
- **Transition:** background-color and shadow on hover

## Sizes

| Size | Font size | Horizontal padding | Vertical padding |
|---|---|---|---|
| Extra small | 12px | 12px | 6px |
| Small | 14px | 12px | 8px |
| Base (default) | 14px | 16px | 10px |
| Large | 16px | 20px | 12px |
| Extra large | 16px | 24px | 14px |

## Variants

### Brand
- **Background:** brand token
- **Border:** 2px solid black
- **Text:** black
- **Hover:** brand-strong background, shadow-sm
- **Focus ring:** 4px, brand-medium color
- **Glint:** yes

### Secondary
- **Background:** neutral-secondary-medium
- **Border:** 2px solid black
- **Text:** black
- **Hover:** neutral-tertiary-medium background, shadow-sm
- **Focus ring:** 4px, neutral-tertiary color
- **Glint:** yes

### Tertiary
- **Background:** neutral-primary-soft
- **Border:** 2px solid black
- **Text:** black
- **Hover:** neutral-secondary-medium background, shadow-sm
- **Focus ring:** 4px, neutral-tertiary-soft color
- **Glint:** yes

### Success
- **Background:** success token
- **Border:** 2px solid black
- **Text:** black
- **Hover:** success-strong background, shadow-sm
- **Focus ring:** 4px, success-medium color
- **Glint:** yes

### Danger
- **Background:** danger token
- **Border:** 2px solid black
- **Text:** white
- **Hover:** danger-strong background, shadow-sm
- **Focus ring:** 4px, danger-medium color
- **Glint:** yes

### Warning
- **Background:** warning token
- **Border:** 2px solid black
- **Text:** black
- **Hover:** warning-strong background, shadow-sm
- **Focus ring:** 4px, warning-medium color
- **Glint:** yes

### Dark
- **Background:** dark token
- **Border:** 2px solid black
- **Text:** white
- **Hover:** shadow-sm
- **Focus ring:** 4px, neutral-tertiary color
- **Glint:** yes

### Ghost (NO shadow, NO glint)
- **Background:** transparent
- **Border:** 2px solid black
- **Text:** heading color
- **Hover:** neutral-secondary-medium background
- **Focus ring:** 4px, neutral-tertiary color
- **No shadow, no glint effect**

### Disabled (NO shadow, NO glint)
- **Background:** disabled token
- **Border:** 2px solid border-default-medium
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

- **Background:** neutral-primary-soft (white)
- **Border:** 2px solid black (border-default)
- **Radius:** 6px (base)
- **Shadow:** shadow-sm (3px 3px hard offset)

## Card Heading

- Desktop: 20px, bold weight, heading color
- Mobile: 16px, bold weight, heading color
- Never skip heading levels — the page hierarchy must logically arrive at the card heading level.

## States

### Static Card (no interactivity)
- Background: neutral-primary-soft
- Border: 2px solid black (border-default)
- Radius: 6px
- Shadow: shadow-sm
- No hover styles. Non-interactive cards must NOT have hover background changes.

### Interactive Card (clickable)
- Same base styles as static card
- Hover: shadow-xl (8px 8px hard offset), slight translate for brutalist pop effect
- Transition: shadow, transform
- Cursor: pointer

## Rules

- Background: neutral-primary-soft
- Border: 2px solid black (border-default)
- Radius: 6px
- Shadow: shadow-sm
- Interactive hover: shadow-xl (8px 8px 0px black) — matching the reference card hover
- Non-interactive: no hover styles
- Card images/figures: separated by a 2px solid black bottom border inside the card

---

## Source file: `colors.md`

# Color Tokens


## Background Tokens

### Neutral
| Token | Light | Dark |
|---|---|---|
| neutral-primary-soft | #FFFFFF | #0A0A0A |
| neutral-primary | #FFFFFF | #000000 |
| neutral-primary-medium | #FFFFFF | #1A1A1A |
| neutral-primary-strong | #FFFFFF | #2A2A2A |
| neutral-secondary-soft | #F5F0E6 | #0A0A0A |
| neutral-secondary | #F5F0E6 | #000000 |
| neutral-secondary-medium | #F5F0E6 | #1A1A1A |
| neutral-secondary-strong | #F5F0E6 | #2A2A2A |
| neutral-tertiary-soft | #EDE6D6 | #0A0A0A |
| neutral-tertiary | #EDE6D6 | #1A1A1A |
| neutral-tertiary-medium | #EDE6D6 | #2A2A2A |
| neutral-quaternary | #E0D5C0 | #2A2A2A |
| quaternary-medium | #E0D5C0 | #3A3A3A |
| gray | #D4C9B4 | #3A3A3A |

### Brand
| Token | Light | Dark |
|---|---|---|
| brand-softer | #FEF5E5 | #3A2B0F |
| brand-soft | #F8E4B8 | #5C4416 |
| brand | #DAA346 | #DAA346 |
| brand-medium | #F0D08A | #5C4416 |
| brand-strong | #B8862E | #DAA346 |

### Status
| Token | Light | Dark |
|---|---|---|
| success-soft | #D1FAE5 | #002C22 |
| success | #16A34A | #22C55E |
| success-medium | #A7F3D0 | #004F3B |
| success-strong | #15803D | #16A34A |
| danger-soft | #FFE4E6 | #4D0218 |
| danger | #DD644E | #DD644E |
| danger-medium | #FECDD3 | #8B0836 |
| danger-strong | #C4503C | #DD644E |
| warning-soft | #FEF3C7 | #7C2D12 |
| warning | #F59E0B | #F59E0B |
| warning-medium | #FDE68A | #7C2D12 |
| warning-strong | #D97706 | #D97706 |

### Button Glint (CSS custom properties, used for the glint box-shadow effect)
| Variable | Light | Dark |
|---|---|---|
| `--color-1-400` | rgba(0,0,0,1) | rgba(0,0,0,1) |
| `--color-1-700` | rgba(0,0,0,1) | rgba(0,0,0,1) |

### Utility
| Token | Light | Dark |
|---|---|---|
| dark | #000000 | #000000 |
| dark-strong | #000000 | #1A1A1A |
| disabled | #E5E5E5 | #1A1A1A |

### Accent
| Token | Value (same both modes) |
|---|---|
| purple | #A388EE |
| sky | #88AAEE |
| teal | #7CDB8A |
| pink | #FF99C8 |
| cyan | #A6FAFF |
| fuchsia | #E879F9 |
| indigo | #818CF8 |
| orange | #DD644E |

### Section Colors (vivid backgrounds for colorful neo-brutalist sections)
| Token | Value (same both modes) |
|---|---|
| section-brand | #DAA346 |
| section-secondary | #DD644E |
| section-cyan | #A6FAFF |
| section-purple | #A388EE |
| section-green | #7CDB8A |
| section-pink | #FF99C8 |
| section-blue | #88AAEE |
| section-yellow | #FFD166 |

## Text Color Tokens

### Base
| Token | Light | Dark |
|---|---|---|
| white | #FFFFFF | #FFFFFF |
| black | #000000 | #000000 |
| heading | #000000 | #FFFFFF |
| body | #1A1A1A | #E5E5E5 |
| body-subtle | #3A3A3A | #CCCCCC |

### Brand
| Token | Light | Dark |
|---|---|---|
| fg-brand-subtle | #F0D08A | #5C4416 |
| fg-brand | #DAA346 | #E8BC6A |
| fg-brand-strong | #B8862E | #F0D08A |

### Status
| Token | Light | Dark |
|---|---|---|
| fg-success | #16A34A | #15803D |
| fg-success-strong | #15803D | #22C55E |
| fg-danger | #DD644E | #DD644E |
| fg-danger-strong | #C4503C | #FF7A68 |
| fg-warning-subtle | #D97706 | #F59E0B |
| fg-warning | #92400E | #FBBF24 |
| fg-disabled | #9CA3AF | #6B7280 |

### Informational / Accent
| Token | Light | Dark |
|---|---|---|
| fg-yellow | #DAA346 | #DAA346 |
| fg-info | #1E3A5F | #88AAEE |
| fg-purple | #7C3AED | #A388EE |
| fg-purple-strong | #6D28D9 | #C4B5FD |
| fg-cyan | #0891B2 | #A6FAFF |
| fg-indigo | #4F46E5 | #818CF8 |
| fg-pink | #DB2777 | #FF99C8 |
| fg-lime | #65A30D | #84CC16 |

## Border Color Tokens

| Token | Light | Dark |
|---|---|---|
| border-dark | #000000 | #FFFFFF |
| border-buffer | #FFFFFF | #000000 |
| border-buffer-medium | #FFFFFF | #1A1A1A |
| border-buffer-strong | #FFFFFF | #2A2A2A |
| border-muted | #000000 | #FFFFFF |
| border-light-subtle | #000000 | #FFFFFF |
| border-light | #000000 | #FFFFFF |
| border-light-medium | #000000 | #FFFFFF |
| border-default-subtle | #000000 | #FFFFFF |
| border-default | #000000 | #FFFFFF |
| border-default-medium | #000000 | #FFFFFF |
| border-default-strong | #000000 | #FFFFFF |
| border-success-subtle | #16A34A | #15803D |
| border-success | #16A34A | #15803D |
| border-danger-subtle | #DD644E | #C4503C |
| border-danger | #DD644E | #DD644E |
| border-warning-subtle | #D97706 | #92400E |
| border-warning | #D97706 | #F59E0B |
| border-brand-subtle | #DAA346 | #5C4416 |
| border-brand-light | #DAA346 | #DAA346 |
| border-brand | #DAA346 | #E8BC6A |
| border-dark-subtle | #000000 | #FFFFFF |
| border-purple | #A388EE | #A388EE |
| border-orange | #DD644E | #DD644E |

## Semantic Usage Rules

- Page/section backgrounds: neutral-primary-soft (default), or vivid section-* colors for colorful brutalist sections
- Primary buttons: brand background with 2px solid black border and hard offset shadow
- Headings: heading text color (pure black for maximum contrast)
- Body text: body text color
- CTA links: fg-brand text color
- Default borders: border-default (always solid black in brutalist style)
- Status borders match intent: success → border-success, danger → border-danger, warning → border-warning
- Disabled: disabled background + fg-disabled text
- Sections should alternate between white/warm neutral and vivid section-* colors for the colorful brutalist aesthetic

## Prohibited

- No raw hex/rgb values in component code — always use design tokens
- No brand text color for long-form paragraphs
- No accent text tokens (fg-purple, etc.) for body copy or navigation
- No brand/accent backgrounds for large layout surfaces (pages, sections) unless it's a hero/campaign area or a colorful brutalist section
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
| Standard content/cards | 32px |
| Compact widgets/metadata | 16px |

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
- Lists: 24px indentation, 8px vertical gap between items
- Body copy: 16px, 1.625 line-height
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
- Background: neutral-primary-soft (white)
- Border: 2px solid black (border-default)
- Radius: 6px (base)
- Shadow: shadow-lg (6px 6px hard offset)
- Z-index: elevated above content

### Menu List
- Padding: 8px
- Font: 14px, body color, semibold weight

### Menu Item
- Layout: inline-flex, vertically centered, full width
- Padding: 8px horizontal, 8px vertical
- Radius: 4px (default)
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
- Menu width: 176px, items have 4px radius

### With Divider
- Top border (2px solid black border-default) between child groups, skip first group

### With Header
- Header padding: 16px horizontal, 12px vertical
- Bottom border: 2px solid black (border-default)
- Name: heading color, 14px, bold weight
- Email: body-subtle color, 14px, truncated

### With Icons
- Icon before label: 16x16px, 8px right margin, body color
- On hover, icon color changes to heading

### With Checkbox / Radio
- Inputs: 16x16px, 2px radius, focus ring in brand-soft
- Helper text: 12px, body-subtle color, 2px top margin

### With Search
- Search input at top of menu following `inputs.md` specs
- Left icon: 12px left padding, input 36px left padding

### Scrollable
- Max height: 192px, vertical scroll overflow

## States

| State | Appearance |
|---|---|
| Focused trigger | no outline, 3px brand ring |
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
- Rounded square: 6px radius (MD/LG/XL), 4px radius (XS/SM)
- Border: 2px solid black on all icon shape containers

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
- Border: 2px solid black

### Gray
- Shape: circle
- Background: neutral-secondary-soft
- Icon color: body
- Border: 2px solid black

### Danger
- Shape: circle
- Background: danger-soft
- Icon color: fg-danger-strong
- Border: 2px solid black

### Success
- Shape: circle
- Background: success-soft
- Icon color: fg-success-strong
- Border: 2px solid black

### Warning
- Shape: circle
- Background: warning-soft
- Icon color: fg-warning
- Border: 2px solid black

---

## Source file: `inputs.md`

# Inputs

> Dependencies: `colors.md`, `radius.md`

## Core Specs

- **Display:** block, full width
- **Radius:** 6px (base)
- **Border:** 2px solid black (border-default)
- **Background:** neutral-primary-soft (white)
- **Shadow:** shadow-xs
- **Font:** 14px, heading color
- **Padding:** 12px horizontal, 10px vertical
- **Placeholder:** body color
- **Transition:** all properties, 200ms

## Label

- Display: block
- Font: 14px, semibold weight (600), heading color
- Margin bottom: 8px
- Label `htmlFor` must match the input `id`

## States

### Default
- Border: 2px solid black (border-default)
- Background: neutral-primary-soft

### Hover
- Shadow: shadow-sm (shadow grows on hover)

### Focus
- No outline
- Border: 3px solid black (border-brand)
- Ring: 1px, brand color

### Success
- Border: 2px solid border-success
- Focus ring: 1px, success color

### Error / Danger
- Border: 2px solid border-danger
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

Standard section container: max-width 1152px, centered, 24px horizontal padding.

Every major section wraps content in this container.

## Content Composition Order

Inside each section, follow this order:
1. Heading (`h1`–`h3`)
2. Leading paragraph
3. Normal paragraph(s)
4. Lists, CTA links, or component grids

## Section Pattern

Each section has:
- 96px vertical padding
- A background color — alternate between neutral-primary-soft (white) and vivid section-* colors from the color tokens for a bold, colorful brutalist layout
- A 2px solid black border on the top and/or bottom edges to separate sections
- A centered container (max-width 1152px, 24px horizontal padding)
- A section header area with 48px bottom margin
- Section content below

### Colorful Brutalist Sections
Sections should cycle through vivid background colors to create the eye-catching, playful neo-brutalist aesthetic seen on the reference site. Use the section-* color tokens (section-brand, section-secondary, section-cyan, section-purple, section-green, section-pink, section-blue, section-yellow) as section backgrounds. Alternate white sections with colored sections. When a section uses a vivid background:
- Text must remain high-contrast (heading color for titles, body color for paragraphs)
- All borders stay 2px solid black
- Cards and components inside colored sections keep their white (neutral-primary-soft) backgrounds with 2px solid black borders, creating contrast against the vivid section background
- Hard offset shadows remain solid black

## Motion & Animation

- Prefer CSS-native: `transition`, `animation`, `@keyframes`. Use Motion library only when CSS cannot achieve the behavior.
- Keep animations bold and snappy — fast transitions (150ms–200ms) with no easing or linear easing for a raw, mechanical brutalist feel.
- Reserve scroll-triggered and hover transitions for moments that reinforce hierarchy or reward attention.

## Backgrounds & Visual Depth

- Default to flat, bold, high-contrast backgrounds — avoid gradients, blurs, or soft atmospheric effects.
- Use solid vivid colors from the section-* token palette for section backgrounds.
- Depth comes from hard offset shadows and thick black borders, not from opacity or blur.
- Every decorative element must serve a compositional purpose (separation, emphasis, or visual rhythm). No soft or ornamental effects competing with content.

## Must

- All sections: consistent 96px vertical padding
- All containers: max-width 1152px, centered, 24px horizontal padding
- Section headers: 48px or 64px bottom margin
- Consistent vertical rhythm, no crowded sections
- Layouts readable and properly spaced on both desktop and mobile
- Sections alternate between white and vivid colors for the colorful brutalist feel
- All section dividers: 2px solid black borders

---

## Source file: `lists.md`

# Lists

> Dependencies: `colors.md`

## Core Specs

- Item spacing: 16px vertical gap between list items
- Text: body color
- Font weight: normal (400) for list text, bold (700) for list headings

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
- No backdrop blur (brutalist — keep it raw)

### Content Container
- Background: neutral-primary (white)
- Radius: 6px (base)
- Shadow: shadow-xl (8px 8px hard offset)
- Border: 2px solid black
- Padding: 20px

## Anatomy

### Header
- Bottom border: 2px solid black (border-default)
- Top corners rounded (6px)
- Title: 20px, bold weight, heading color
- Close button: Ghost variant from `buttons.md`, 6px padding

### Body
- Vertical padding: 24px
- Vertical spacing between elements: 24px
- Text: 16px, 1.625 line-height, body color

### Footer
- Top border: 2px solid black (border-default)
- Bottom corners rounded (6px)

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
- Content: neutral-primary background, 6px radius, shadow-xl, 2px solid black border
- Header/Footer separated by 2px solid black borders
- Close button must be present and functional
- Accessibility: `role="dialog"`, implement focus trap in code
- Dark mode automatic via token system

---

## Source file: `pagination.md`

# Pagination

> Dependencies: `colors.md`, `radius.md`

## Container

Font: 14px. Items displayed as flex with -2px overlap for seamless borders.

## Pagination Item

- Layout: flex, centered both axes
- Size: 36x36px (or 40x40px)
- Text: body color, bold weight
- Background: neutral-secondary-medium
- Border: 2px solid black (border-default)
- Hover: neutral-tertiary-medium background, heading text, shadow-xs
- Focus: no outline
- Overlap: -2px left margin

## Previous / Next Buttons

- Horizontal padding: 12px, height: 36px
- First item: 6px radius on inline-start side
- Last item: 6px radius on inline-end side

## Active Page Item

- Text: fg-brand color
- Background: neutral-tertiary-medium
- Hover text: fg-brand (stays same)

## Rules

- Display as flex with -2px child overlap for seamless borders
- Items: neutral-secondary-medium background, 2px solid black border, body text
- Active: fg-brand text, neutral-tertiary-medium background
- First item: rounded start, Last item: rounded end
- All items need hover and focus states

---

## Source file: `radios-checkboxes-toggle.md`

# Radios, Checkboxes & Toggles

> Dependencies: `colors.md`, `radius.md`

## Checkbox

- Size: 16x16px
- Radius: 2px
- Border: 2px solid black (border-default)
- Background: neutral-primary-soft (white)
- Focus ring: 3px, brand-soft

### Disabled
- Border: border-light
- Text: fg-disabled

## Radio

- Size: 16x16px
- Radius: fully rounded
- Border: 2px solid black (border-default)
- Background: neutral-primary-soft (white)
- Focus ring: 3px, brand-soft
- Checked: border-brand, indicator: neutral-primary color

### Disabled
- Border: border-light-medium
- Text: fg-disabled

Group all radio items under the same `name` attribute.

## Toggle

### Track
- Fully rounded
- Border: 2px solid black
- Background: neutral-quaternary
- Focus-within ring: 3px, brand-soft
- Checked track: brand background
- Disabled track: neutral-tertiary background

### Thumb
- Fully rounded
- Background: white
- Border: 2px solid black

### Disabled
- Track: neutral-tertiary background
- Label: fg-disabled text

## Rules

- All selection inputs must have `id` matching label `htmlFor`
- Focus states use the appropriate brand token for each control type
- Disabled states: no hover/focus interaction
- All controls have 2px solid black borders for the brutalist aesthetic

---

## Source file: `radius.md`

# Border Radius

| Token | Value | Default usage |
|---|---|---|
| base | 6px | Buttons, cards, inputs, modals, sections |
| default | 4px | Badges, tooltips, dropdown items, small controls |
| sm | 2px | Checkboxes, tiny elements |
| full | 9999px | Pills, avatars, toggles, dot indicators |

## Rules

- 6px is the default radius across the product — matching the neo-brutalist rounded-md convention
- Never use arbitrary radius values outside this scale
- Radius must be consistent within each component family
- Sharp corners (0px) are acceptable for extra-raw brutalist variants

---

## Source file: `shadows.md`

# Shadows

| Token | CSS value |
|---|---|
| shadow-2xs | `1px 1px 0px rgba(0,0,0,1)` |
| shadow-xs | `2px 2px 0px rgba(0,0,0,1)` |
| shadow-sm | `3px 3px 0px rgba(0,0,0,1)` |
| shadow-md | `4px 4px 0px rgba(0,0,0,1)` |
| shadow-lg | `6px 6px 0px rgba(0,0,0,1)` |
| shadow-xl | `8px 8px 0px rgba(0,0,0,1)` |
| shadow-2xl | `12px 12px 0px rgba(0,0,0,1)` |

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
- All shadows are hard offset (no blur, no spread beyond offset) with solid black — this is the core brutalist shadow style
- Hover/focus on interactive elevated elements: step up by one level (e.g. shadow-sm → shadow-md)
- Components in the same family share the same baseline elevation
- Never stack multiple shadow tokens on one element
- Never use shadow-xl/shadow-2xl for dense list items or body containers

---

## Source file: `sidebars.md`

# Sidebars

> Dependencies: `colors.md`, `radius.md`, `typography.md`, `badges.md`, `alerts.md`

## Core Specs

- Background: neutral-primary-soft (white)
- Right border: 2px solid black (border-default) for left-sidebar; left border for right-sidebar
- Width: 256px

## Anatomy

### Outer Container
Hidden on mobile, visible at small breakpoint. Needs a toggle/trigger for mobile.

### Inner Wrapper
- Full height, vertical scroll overflow
- Padding: 12px horizontal, 16px vertical

### Navigation List
- Vertical spacing: 8px between items
- Font weight: bold

### Navigation Item
- Layout: flex, vertically centered
- Padding: 8px horizontal, 8px vertical
- Text: heading color (black)
- Radius: 6px (base)
- Hover: neutral-secondary-medium background
- Transition: colors
- Icon: 20x20px, body color, hover → heading color, 75ms transition
- Label: 12px left margin from icon

### Active Item
- Background: brand-softer
- Text: fg-brand-strong
- Border-left: 3px solid brand (optional brutalist accent)

### Separator
- 16px top padding, 16px top margin
- Top border: 2px solid black (border-default)
- 8px vertical spacing below

### Bottom CTA / Card
- Padding: 16px
- Top margin: 24px
- Radius: 6px (base)
- Background: brand-softer
- Border: 2px solid black
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
- Radius: 6px (base)
- Border: 2px solid black (border-default)
- Shadow: shadow-sm

## Table Element

- Full width, left-aligned text (right-aligned for RTL)
- Font: 14px, body color

## Table Head

- Font: 14px, body color, bold weight
- Background: neutral-secondary-soft
- Bottom border: 2px solid black (border-default)
- Cell padding: 24px horizontal, 12px vertical

## Table Body

- Row background: neutral-primary
- Row bottom border: 2px solid black (border-default) (omit on last row to avoid doubling with wrapper border)
- Row hover: neutral-secondary-soft background (optional)
- Row header: bold weight, heading color, no-wrap
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

- Typography: 14px, bold weight, body color
- Transitions: all properties, 200ms

## Variants

### 1. Underline (Default)

**Wrapper:** bottom border, 2px solid black (border-default)

**Tab Item:**
- Padding: 16px horizontal, 16px vertical
- Bottom border: 3px, transparent
- Top corners: 6px radius
- Transition: colors, 150ms

| State | Appearance |
|---|---|
| Active | fg-brand text, border-brand bottom border (3px) |
| Inactive | transparent bottom border; hover → heading text, border-default-strong bottom border |
| Disabled | fg-disabled text, not-allowed cursor |

### 2. Pills

**Tab Item:**
- Padding: 16px horizontal, 10px vertical
- Radius: 6px (base)
- Font weight: bold
- Border: 2px solid black
- Transition: all, 200ms

| State | Appearance |
|---|---|
| Active | brand background, black text, shadow-sm |
| Inactive | body text; hover → neutral-secondary-soft background, heading text |
| Disabled | fg-disabled text, not-allowed cursor |

### 3. Full Width

Children overlap with -1px left margin on all except first.

**Tab Item:**
- Full width, centered text
- Padding: 16px horizontal, 16px vertical
- Background: neutral-primary-soft
- Border: 2px solid black (border-default)
- Transition: colors, 150ms
- Hover: neutral-secondary-medium background, heading text

| State | Appearance |
|---|---|
| Active | neutral-secondary-soft background, fg-brand text |
| First item | rounded start (6px) |
| Last item | rounded end (6px) |

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
- Font: 14px, bold weight
- Radius: 4px (default)
- Shadow: shadow-xs (2px 2px hard offset)
- Border: 2px solid black
- Transition: opacity, 300ms

### Dark (Default)
- Background: dark (black)
- Text: white
- Border: 2px solid black

### Light
- Background: neutral-primary-medium (white)
- Text: heading color
- Border: 2px solid black

## Popovers

### Core Specs
- Background: neutral-primary (white)
- Radius: 6px (base)
- Shadow: shadow-md (4px 4px hard offset)
- Border: 2px solid black (border-default)
- Transition: opacity, 300ms

### Header / Title
- Padding: 12px horizontal, 8px vertical
- Background: neutral-secondary-soft
- Bottom border: 2px solid black (border-default)
- Font: 14px, bold weight, heading color

### Body / Content
- Standard: 12px horizontal, 8px vertical padding; 14px, body color
- Rich: 16px padding; 14px, body color

## Arrows

- Size: 8x8px rotated 45deg
- Color must match the background of the tooltip/popover variant
- Border: 2px solid black on exposed edges

## Rules

- Tooltips: 4px radius, 2px solid black border
- Popovers: 6px radius, 2px solid black border
- Dark tooltips: dark background, white text
- Light tooltips/popovers: semantic neutral background + 2px solid black border
- Arrows match parent background color with black border on visible edges

---

## Source file: `typography.md`

# Typography

> Dependencies: `colors.md`

## Core Rules

- **Font:** "Darker Grotesque", sans-serif — configured at app level via Google Fonts import, never override
- **Headings:** bold weight (700), heading text color, uppercase optional for h1/h2 for extra brutalist punch
- **Body copy:** body text color, never use brand color for paragraphs longer than one sentence
- **Semantic HTML:** Use `h1`–`h6` in order, never skip levels

## Heading Scale

### Desktop

| Element | Size | Line-height | Letter-spacing | Margin-bottom |
|---|---|---|---|---|
| `h1` | 64px | 0.95 | -1px | 24px |
| `h2` | 48px | 1 | -0.5px | — |
| `h3` | 36px | 1.1 | — | — |
| `h4` | 30px | 1.15 | — | — |
| `h5` | 24px | 1.3 | — | — |
| `h6` | 20px | 1.3 | — | — |

### Responsive

| Element | Tablet (≥768px) | Mobile (default) |
|---|---|---|
| `h1` | 44px | 36px |
| `h2` | 36px | 30px |
| `h3` | 30px | 24px |
| `h4` | 26px | 22px |
| `h5` | 22px | 20px |
| `h6` | 18px | 18px |

Mobile-first: start with mobile sizes, scale up at tablet and desktop breakpoints.

Never reduce line-height below 1.0 for any heading.

## Paragraphs

### Leading Paragraph
- Size: 20px
- Weight: normal (400)
- Color: body
- Line-height: 1.7
- Max width: ~70 characters

### Normal Paragraph
- Size: 16px
- Weight: normal (400)
- Color: body
- Line-height: 1.7
- Max width: ~65 characters

### Small Supporting Copy
- Size: 14px
- Weight: normal (400)
- Color: body
- Line-height: 1.6
- Use only for helper text, legal text, captions, metadata.

## UI Labels

| Context | Size | Weight |
|---|---|---|
| Button labels | 16px | 700 (bold) |
| Input labels | 14px or 16px | 600 (semibold) |
| Captions / meta / badges | 12px or 14px | 600 (semibold) |

Do not apply paragraph line-height (1.7) to control labels.

## Links

- **Inline links:** Same size as surrounding text, fg-brand color, underline, hover → no underline
- **CTA links:** fg-brand color, bold weight, underline, hover → no underline

## Emphasis

- `<strong>` for high-priority emphasis in body text
- `<em>` for tone emphasis only, not visual hierarchy
- All-caps only for short labels: uppercase, 1px letter-spacing, 12px or 14px

## Dark Mode

Hierarchy stays identical. Only color tokens change (automatic via CSS custom properties). Size, weight, and spacing remain constant.
