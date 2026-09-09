# Design System — Agent Instructions

This skill describes the visual design language for all UI output. Every component, layout, and page should follow the design specs in the module files below. These describe *what the design looks like* — you choose how to implement the styles.

## Style
A playful, energetic, cartoonesque interface inspired by friendly children's-book illustrations — warm cream backgrounds, big bold custom display typography, saturated brand color blocks, thick black outlines, generously rounded shapes, flat surfaces with almost no shadows, and decorative hand-drawn-feeling illustrations in every section.


## Before Writing Any Code

1. **Read every module that applies.** For a landing page, read at minimum: `layout.md`, `typography.md`, `colors.md`, `buttons.md`, `cards.md`, `shadows.md`, `radius.md`, `borders.md`. Do NOT write JSX until you have loaded all relevant modules.

## Critical Rules

- **Tokens are AGNOSTIC design system tokens:** The tokens defined in the `.md` files (like `neutral-primary-soft`, `heading`, `border-default`) are stack-agnostic semantic names. They are NOT literal class names from any framework. Map them yourself in your CSS / theme configuration.

- **Cross-reference modules.** A card containing buttons must satisfy both `cards.md` AND `buttons.md`.
- **Dark mode is automatic.** The custom properties resolve differently in light/dark via `prefers-color-scheme`. Never manually swap colors.
- **Every interactive element needs hover, focus, and disabled states** — defined in the relevant module.
- **Use semantic HTML:** proper heading hierarchy (`h1`→`h6`), `<button>` for actions, `<a>` for navigation, ARIA attributes where needed.

## Global Design Rules (apply to every page)

- **Headings are oversized.** Display headings start at 96px and go up. Each heading is hard-capped at **maximum 2 rows** — wrap to a new line / shrink wording if it would overflow. Always reserve generous empty space above and below headings.
- **Paragraphs are short and breathable.** Limit body paragraphs to **maximum 4 rows**. Always reserve generous empty space around paragraphs (top, bottom, sides).
- **Sections alternate colors playfully.** Page sections rotate through five backgrounds in this order: brand → secondary-brand → tertiary-brand → quaternary-brand → quinary-brand → (loop). Adjacent sections must never share the same background.
- **Cards on a section use a derivative lighter tint of that section's color** (see `cards.md`). They never use a flat white surface inside a colored section.
- **Every component (cards, buttons, inputs, badges, alerts, etc.) carries a 4px brand-color outline.**
- **Components use 16px radius. Cards use 32px radius.**
- **Flat aesthetic.** Buttons, cards, inputs are flat color blocks with a thick brand outline. Avoid drop shadows, gradients, blurs. Shadows, when present, are tiny offset shapes (see `shadows.md`).
- **Every section must include a playful graphic** — a cartoon icon, illustration, character, sticker, sparkle, doodle, or oversized punctuation mark — placed as a decorative anchor inside the section. Sections without illustrative assets are not allowed.

## Do

- Always use the configured brand typeface (Cossette Texte) for every text element to maintain brand personality.
- Use `secondary-brand` (Canvas Almond) as the primary page background color for a warm, inviting foundation.
- Reach for `brand-strong` (Type Black) for primary text content so it lands with high contrast against the warm light backgrounds.
- Lean into the vibrant accent colors — `tertiary-brand` (Grape Punch), `quaternary-brand` (Sunshine Yellow), `quinary-brand` (Bubblegum Red) — for card backgrounds and highlight elements to create visual energy and playfulness.
- Apply card border-radius rules from `radius.md`: 32px for main cards, 15px for general / accent rectangular elements, 5px for small buttons, 144px for speech-bubble shapes.
- Space elements using multiples of the 6px base unit (per `layout.md`); favor `elementGap` of 12px for tight clusters and `cardPadding` of 29px for content blocks.
- Use ghost buttons with `white` text and `border-brand` outline for navigation and secondary actions on dark / colored sections — keep them light and non-obtrusive.
- Embrace rounded corners and slightly irregular forms; let elements feel a bit hand-placed.

## Don't

- Avoid traditional soft / blurred drop shadows. Rely on vibrant background colors, thick brand outlines, offset-block shadows, and irregular shapes for element definition.
- Do not introduce additional font families — the configured brand typeface (Cossette Texte) is the sole typographic voice of the system.
- Refrain from heavily structured grid layouts; allow elements to be positioned more organically, like "sticker bombing" — slight rotations, varied placements, overlapping playful assets.
- Do not use dark, desaturated colors as primary background elements. The system thrives on a light, warm canvas (`secondary-brand` / `neutral-primary-soft`) with vivid accents.
- Avoid strictly symmetrical or rigid component designs; embrace rounded corners and slightly irregular forms.
- Never use generic blue for primary interactive elements. Leverage the brand's vibrant palette — especially `tertiary-brand` (Grape Punch), `success` (Leafy Green), or `quinary-brand` (Bubblegum Red).
- Do not apply padding to ghost buttons. They must read as text-only interactive elements framed by their 4px brand border.

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

- **Wrapper:** full width, 4px border (border-brand color), 16px radius — clips first/last item corners
- **Item separator:** 2px bottom border (border-default-subtle) on every item except last

## Trigger (Button)

- **Layout:** flex, space-between, full width
- **Padding:** 32px horizontal, 24px vertical
- **Font:** 20px, bold weight
- **Text color:** heading
- **Background:** secondary-brand-softer
- **Hover:** secondary-brand-soft background
- **Focus:** outline none, 4px ring in tertiary-brand-soft color
- **Transition:** colors, 150ms
- **Open state:** secondary-brand-soft background

## Panel (Content)

- **Padding:** 32px horizontal, 24px vertical
- **Background:** secondary-brand-softer
- **Top border:** 2px, border-default-subtle color
- **Font:** 18px, body color, 1.6 line-height (max 4 rows per paragraph)

## Chevron Icon

- Size: 20x20px
- Color: heading text color
- Closed: 0deg rotation
- Open: 180deg rotation
- Transition: transform, 150ms

## Variants

### Default (Collapse)
One panel open at a time. Items stacked inside a single shared bordered/rounded wrapper.

### Separated Cards
Each item is independent — has its own 4px brand border, 32px radius, and no shadow. 16px bottom margin between items. No shared outer border.

### Always Open
Multiple panels can expand simultaneously. Same styling as Default.

### Flush
No outer border. Trigger and panel have transparent backgrounds. Only 2px bottom border dividers between items. Use inside containers that already provide a background.

## States

| State | Trigger appearance |
|---|---|
| Closed | heading text, secondary-brand-softer background |
| Open | heading text, secondary-brand-soft background |
| Hover | secondary-brand-soft background |
| Focus | 4px tertiary-brand-soft ring, no outline |
| Disabled | fg-disabled text, not-allowed cursor, no hover/focus |

---

## Source file: `alerts.md`

# Alerts

> Dependencies: `colors.md`, `radius.md`

## Core Specs

- **Padding:** 24px
- **Radius:** 16px (base)
- **Border:** 4px solid
- **Heading:** 20px, bold weight
- **Body:** 16px, normal weight, 1.6 line-height (max 4 rows)

## Variants

### Brand
- **Background:** secondary-brand-softer
- **Border:** 4px, border-brand
- **Text:** heading

### Success
- **Background:** success-soft
- **Border:** 4px, border-success
- **Text:** fg-success-strong

### Danger
- **Background:** danger-soft
- **Border:** 4px, border-danger
- **Text:** fg-danger-strong

### Warning
- **Background:** warning-soft
- **Border:** 4px, border-warning
- **Text:** heading

---

## Source file: `avatars.md`

# Avatars

> Dependencies: `colors.md`, `radius.md`

## Core Specs

- **Circular shape:** fully rounded (9999px)
- **Rounded square shape:** 16px radius
- **Default size:** 48x48px
- **Image fit:** cover
- **Border:** every avatar has a 4px brand outline (border-brand)

## Sizes

| Size | Dimensions | Radius |
|---|---|---|
| Extra Small | 24x24px | 8px |
| Small | 32x32px | 8px |
| Base | 40x40px | 16px |
| Large | 56x56px | 16px |
| XL | 72x72px | 16px |
| 2XL | 96x96px | 16px |

## Bordered Avatar

- 4px solid brand outline (default for all avatars)
- Optional: 4px box-shadow ring in border-brand color for stacked / focus emphasis

## Stacked Avatars

- Displayed in a row (flex)
- Each avatar: 48x48px, fully rounded, 4px border in border-brand color
- Overlap: -20px negative margin on all except first

### Stacked Counter
- Same size as avatars (48x48px), fully rounded
- Background: brand, text: white, 14px font, bold weight
- Same overlap margin as other avatars

## Avatar with Text

- Flex row, 16px gap between avatar and text
- Avatar: 48x48px, fully rounded, cover fit, 4px brand border
- Name: heading color, bold weight, 18px
- Subtitle: 16px, body color

---

## Source file: `badges.md`

# Badges

> Dependencies: `colors.md`, `radius.md`

## Core Specs

- **Border:** 4px solid
- **Default radius:** 16px
- **Pill radius:** 9999px

## Sizes

| Size | Font size | Horizontal padding | Vertical padding |
|---|---|---|---|
| Default (small) | 14px | 12px | 4px |
| Large | 16px | 16px | 6px |

## Variants

### Brand
- **Background:** secondary-brand
- **Border:** 4px, border-brand
- **Text:** heading

### Alternative (Neutral Soft)
- **Background:** neutral-primary-soft
- **Border:** 4px, border-brand
- **Text:** heading

### Gray (Neutral Medium)
- **Background:** neutral-secondary-medium
- **Border:** 4px, border-brand
- **Text:** heading

### Danger
- **Background:** danger-soft
- **Border:** 4px, border-danger
- **Text:** fg-danger-strong

### Success
- **Background:** success-soft
- **Border:** 4px, border-success
- **Text:** fg-success-strong

### Warning
- **Background:** warning-soft
- **Border:** 4px, border-warning
- **Text:** heading

### Dark
- **Background:** dark
- **Border:** 4px, border-brand
- **Text:** white

### Tertiary (Vivid Purple)
- **Background:** tertiary-brand-soft
- **Border:** 4px, border-brand
- **Text:** heading

### Quinary (Warm Red-Orange)
- **Background:** quinary-brand-soft
- **Border:** 4px, border-brand
- **Text:** heading

## Pill Badges

Use 9999px radius instead of 16px on any variant. Border stays 4px.

## Badges with Icons

- Icon size (default): 14x14px
- Icon size (large): 16x16px
- Icon spacing: 6px margin next to label

## Icon-only Badge

Square shape — equalize dimensions to 32x32px, no horizontal text padding.

## Dismissible Badges

Badge content + a close button. Close button hover backgrounds per variant:

| Variant | Close button hover background |
|---|---|
| Brand | secondary-brand-medium |
| Alternative | neutral-tertiary |
| Gray | neutral-quaternary |
| Danger | danger-medium |
| Success | success-medium |
| Warning | warning-medium |
| Tertiary | tertiary-brand-medium |
| Quinary | quinary-brand-medium |

## Dot / Notification Badge

- Positioned absolutely: -6px top, -6px right
- Size: 16x16px, fully rounded
- 4px border in border-brand color
- Background: danger

---

## Source file: `borders.md`

# Borders

## Width Scale

| Context | Width |
|---|---|
| Default (cards, buttons, inputs, badges, alerts, modals, dropdowns, all components) | 4px |
| Emphasis / focus ring | 4px |
| Internal dividers (table rows, accordion items, list separators, sidebar separators) | 2px |

## Color

- **Default border color across every component:** border-brand (#222222) — the brand-color outline is a defining feature of the system.
- Status variants (success, danger, warning) use their respective `border-success` / `border-danger` / `border-warning` tokens at 4px.
- Internal dividers may use `border-default-subtle` or `border-light` at 2px so they read quieter than component outlines.

## Rules

- Use solid borders by default.
- Dashed borders only for special cases like file dropzones (still 4px, brand color).
- Components in the same family must use matching border widths.
- Never mix border widths within a single component (one component = one border width).
- Never reduce a component outline below 4px to "soften" it — use a softer color instead.

## Usage

| Context | Width | Color |
|---|---|---|
| Inputs / selects / textareas | 4px default; 4px brand on focus or status color on error | border-brand / border-danger / border-success |
| Buttons | 4px on every variant (including primary, secondary, ghost-style) | border-brand or matching status color |
| Cards / containers | 4px | border-brand |
| Internal dividers | 2px | border-default-subtle / border-light |

---

## Source file: `button-group.md`

# Button Groups

> Dependencies: `buttons.md`, `colors.md`, `radius.md`

## Core Specs

- **Wrapper:** inline-flex, 16px radius, no shadow (flat aesthetic — the 4px brand outline carries the visual weight)
- **Children overlap:** -4px left margin on all except first button (so the 4px brand outlines merge into one shared edge)
- **Buttons inside the group keep their 4px brand outline** but should not double-stack at the seams (handled by the -4px overlap).

## Anatomy

### Wrapper
- Display: inline-flex
- Radius: 16px
- Shadow: none

### First Button
- 16px radius on inline-start side only, 0 on inline-end

### Middle Button(s)
- No radius (0 on all corners)

### Last Button
- 16px radius on inline-end side only, 0 on inline-start

### All buttons except first
- -4px left margin to merge the brand outlines into one shared 4px edge

## Rules

- Buttons inside groups follow all styles from `buttons.md` (background, 4px brand border, focus rings)
- Icon-only buttons: 18x18px icon, match height of text buttons

---

## Source file: `buttons.md`

# Buttons

> Dependencies: `colors.md`, `radius.md`, `shadows.md`

## Core Specs (every button except disabled)

- **Radius:** 16px (base) or 9999px for pills
- **Border:** 4px solid (brand color by default; status color for status variants)
- **Shadow:** none — flat style. Hover may add `shadow-sm` (2px offset block) for the lift effect.
- **Glint effect:** disabled in this system (kept as no-op for compatibility). Buttons read as flat colored blocks with a thick brand outline.
- **Font weight:** 700 (bold)
- **Font:** Cossette Texte
- **Box sizing:** border-box
- **Transition:** color and transform transitions on hover (150ms)

## Sizes

| Size | Font size | Horizontal padding | Vertical padding | Radius |
|---|---|---|---|---|
| Extra small | 14px | 16px | 8px | 5px (xs from `radius.md`) |
| Small | 16px | 20px | 10px | 16px (base) |
| Base (default) | 18px | 24px | 14px | 16px (base) |
| Large | 20px | 32px | 18px | 16px (base) |
| Extra large | 24px | 40px | 22px | 16px (base) |

## Variants

### Brand
- **Background:** brand token (#222222)
- **Border:** 4px, border-brand
- **Text:** white (cream)
- **Hover:** brand-strong background, translate -2px / +2px (offset feel), shadow-sm
- **Focus ring:** 4px, brand-medium color
- **Glint:** none

### Secondary
- **Background:** secondary-brand (warm cream)
- **Border:** 4px, border-brand
- **Text:** heading color
- **Hover:** secondary-brand-medium background, shadow-sm
- **Focus ring:** 4px, secondary-brand-strong
- **Glint:** none

### Tertiary
- **Background:** tertiary-brand (vivid purple)
- **Border:** 4px, border-brand
- **Text:** white
- **Hover:** tertiary-brand-medium background, shadow-sm
- **Focus ring:** 4px, tertiary-brand-soft
- **Glint:** none

### Success
- **Background:** success token
- **Border:** 4px, border-brand
- **Text:** white
- **Hover:** success-strong background, shadow-sm
- **Focus ring:** 4px, success-medium color
- **Glint:** none

### Danger
- **Background:** danger token (#FD4C38)
- **Border:** 4px, border-brand
- **Text:** white
- **Hover:** danger-strong background, shadow-sm
- **Focus ring:** 4px, danger-medium color
- **Glint:** none

### Warning
- **Background:** warning token (#FFD80B)
- **Border:** 4px, border-brand
- **Text:** heading color (dark on yellow for contrast)
- **Hover:** warning-strong background, shadow-sm
- **Focus ring:** 4px, warning-medium color
- **Glint:** none

### Dark
- **Background:** dark token (#222222)
- **Border:** 4px, border-brand
- **Text:** white
- **Hover:** dark-strong background, shadow-sm
- **Focus ring:** 4px, neutral-tertiary color
- **Glint:** none

### Ghost (text-only, framed by border — used on dark / colored sections for navigation and secondary actions)
- **Background:** transparent
- **Border:** 4px, border-brand (or `white` border when used on dark `brand` sections so it reads against the dark fill)
- **Text:** `white` (Paper White)
- **Padding:** **none** — ghost buttons have no internal padding. They appear as text-only interactive elements framed tightly by their 4px border.
- **Hover:** subtle text underline; optionally fill background with `secondary-brand-softer` at low opacity. No background swap that adds visual weight.
- **Focus ring:** 4px, `secondary-brand-medium`
- **No shadow, no glint, no padding**

### Disabled (NO shadow, NO glint)
- **Background:** disabled token
- **Border:** 4px, border-brand-subtle
- **Text:** fg-disabled color
- **Cursor:** not-allowed
- **No hover, no focus, no shadow, no glint**

## Icons in Buttons

- Icon size: 18x18px (base), scale with size step
- Spacing: 10px gap between icon and label (matches `elementGap` from `layout.md`)
- Layout: inline-flex, vertically centered

## Don't

- **Never use generic blue for primary interactive buttons.** Use the brand's vibrant palette: `brand`, `tertiary-brand` (Grape Punch), `success` (Leafy Green), or `quinary-brand` (Bubblegum Red).
- **Do not apply padding to ghost buttons.** They must read as text-only interactive elements framed by their 4px border.
- **Never use traditional soft / blurred drop shadows on buttons.** Hover lift uses offset-block shadows from `shadows.md`.
- Do not introduce additional radius values for buttons outside the scale defined in `radius.md`.

---

## Source file: `cards.md`

# Cards

> Dependencies: `colors.md`, `radius.md`, `shadows.md`, `typography.md`

## Core Specs

- **Background:** a derivative lighter tint of the parent section's color (see "Card Surface Color" below). Vibrant accent cards may use full-saturation `tertiary-brand` (Grape Punch), `quaternary-brand` (Sunshine Yellow), or `quinary-brand` (Bubblegum Red) backgrounds for high-energy moments.
- **Border:** 4px solid, `border-brand` color
- **Radius:** 32px (main cards). Smaller rectangular accent / sticker-style cards use 15px (`accent` from `radius.md`). Speech-bubble cards use 144px (`speech-bubble`).
- **Shadow:** none on rest. Hover may add `shadow-sm` (2px offset block).
- **Padding:** `cardPadding` token (29px) by default; 24px for compact cards; 36px for spacious cards.

## Card Surface Color

A card always sits on top of a section that uses one of the brand colors. Its background must be the **softer derivative** of that section's color so it reads as a lighter "sticker" on top of the colored field — never plain white.

| Parent section background | Card background |
|---|---|
| brand (#222222) | brand-softer |
| secondary-brand (#FFE9CE) | secondary-brand-softer |
| tertiary-brand (#8B53FF) | tertiary-brand-softer |
| quaternary-brand (#FFD80B) | quaternary-brand-softer |
| quinary-brand (#FD4C38) | quinary-brand-softer |
| neutral-primary-soft (cream page bg) | neutral-primary-medium |

If a card sits inside another card, step the surface one tint lighter again.

### Vibrant Accent Cards

For highlight cards, feature callouts, or energy moments, use a **full-saturation** brand accent as the card background instead of the softer derivative:

| Accent intent | Card background | Card text |
|---|---|---|
| Playful highlight | `tertiary-brand` (Grape Punch) | `white` |
| Bright optimistic | `quaternary-brand` (Sunshine Yellow) | `heading` |
| Hot / urgent / energetic | `quinary-brand` (Bubblegum Red) | `white` |

Vibrant accent cards still use 4px `border-brand` outline and the standard card radius (32px main / 15px accent rectangle / 144px speech-bubble).

## Card Heading

- Desktop: 40px, bold weight, heading color
- Mobile: 28px, bold weight, heading color
- Max 2 rows (per `typography.md`)
- Never skip heading levels — the page hierarchy must logically arrive at the card heading level.

## States

### Static Card (no interactivity)
- Background: derivative of section color (per table above)
- Border: 4px, border-brand
- Radius: 32px
- Shadow: none
- No hover styles. Non-interactive cards must NOT have hover background changes.

### Interactive Card (clickable)
- Same base styles as static card
- Hover: nudge with shadow-sm (2px brand-color offset block) and translate -2px / +2px for a playful "pop" feel
- Transition: transform and box-shadow, 150ms
- Cursor: pointer

## Rules

- Background: lighter derivative tint of parent section color (never plain white inside a colored section), or a full-saturation accent (`tertiary-brand` / `quaternary-brand` / `quinary-brand`) for highlight cards
- Border: 4px, `border-brand`
- Radius: 32px for main cards, 15px for rectangular accent / sticker-style mini cards, 144px for speech-bubble cards
- Padding: `cardPadding` (29px) by default
- Shadow: none on rest, optional `shadow-sm` on interactive hover
- Interactive hover: subtle 2px translate + offset block shadow
- Non-interactive: no hover styles
- Every card must contain its content with at least 24px of inner breathing room around headings and paragraphs (per `typography.md`)
- Embrace slightly irregular forms — accent / sticker cards may use slight rotations (-6deg to +6deg) per the sticker-bombing rules in `layout.md`

## Don't

- Do not use a plain white card background on top of a colored brand section.
- Do not use generic blue or any out-of-palette color for card backgrounds.
- Do not apply traditional soft drop shadows to cards.
- Do not arrange cards in strictly symmetrical, perfectly-aligned grids — embrace organic placement and rounded, slightly irregular forms.

---

## Source file: `colors.md`

# Color Tokens

## Background Tokens

### Neutral
| Token | Light | Dark |
|---|---|---|
| neutral-primary-soft | #FFF8EC | #1A1612 |
| neutral-primary | #FFFBF4 | #14110D |
| neutral-primary-medium | #FFF1DC | #221C16 |
| neutral-primary-strong | #FFE9CE | #2C241B |
| neutral-secondary-soft | #FFF1DC | #1A1612 |
| neutral-secondary | #FFE9CE | #14110D |
| neutral-secondary-medium | #FBDDB2 | #221C16 |
| neutral-secondary-strong | #F5C68A | #2C241B |
| neutral-tertiary-soft | #FFE9CE | #1A1612 |
| neutral-tertiary | #FBDDB2 | #221C16 |
| neutral-tertiary-medium | #F5C68A | #2C241B |
| neutral-quaternary | #EBB672 | #3A2F23 |
| quaternary-medium | #EBB672 | #4A3C2D |
| gray | #D9A35A | #4A3C2D |

### Brand
| Token | Light | Dark |
|---|---|---|
| brand-softer | #E8E8E8 | #2A2A2A |
| brand-soft | #BFBFBF | #404040 |
| brand | #222222 | #F5F0E6 |
| brand-medium | #4A4A4A | #2A2A2A |
| brand-strong | #000000 | #FFFFFF |

### Secondary Brand (warm cream — playful section)
| Token | Light | Dark |
|---|---|---|
| secondary-brand-softer | #FFF8EC | #2A2418 |
| secondary-brand-soft | #FFF1DC | #3A311F |
| secondary-brand | #FFE9CE | #FFE9CE |
| secondary-brand-medium | #FBDDB2 | #B89E73 |
| secondary-brand-strong | #F5C68A | #D9B88A |

### Tertiary Brand (vivid purple — playful section)
| Token | Light | Dark |
|---|---|---|
| tertiary-brand-softer | #F2EAFF | #2A1F4D |
| tertiary-brand-soft | #C9ADFF | #4A2F8A |
| tertiary-brand | #8B53FF | #8B53FF |
| tertiary-brand-medium | #6B33D9 | #A77BFF |
| tertiary-brand-strong | #4A1FA8 | #C9ADFF |

### Quaternary Brand (sunny yellow — playful section)
| Token | Light | Dark |
|---|---|---|
| quaternary-brand-softer | #FFF8C7 | #4D4400 |
| quaternary-brand-soft | #FFEC75 | #8A7700 |
| quaternary-brand | #FFD80B | #FFD80B |
| quaternary-brand-medium | #D9B500 | #FFE65A |
| quaternary-brand-strong | #A88A00 | #FFEC75 |

### Quinary Brand (warm red-orange — playful section)
| Token | Light | Dark |
|---|---|---|
| quinary-brand-softer | #FFE2DD | #4D1810 |
| quinary-brand-soft | #FFA89C | #8A2B1F |
| quinary-brand | #FD4C38 | #FD4C38 |
| quinary-brand-medium | #D43825 | #FE7768 |
| quinary-brand-strong | #A82817 | #FFA89C |

### Status
| Token | Light | Dark |
|---|---|---|
| success-soft | #E8F8E0 | #1F3A14 |
| success | #2FA84F | #4ECB6F |
| success-medium | #C5EFB0 | #2A5C1F |
| success-strong | #1F7A38 | #2FA84F |
| danger-soft | #FFE2DD | #4D1810 |
| danger | #FD4C38 | #FD4C38 |
| danger-medium | #FFA89C | #8A2B1F |
| danger-strong | #A82817 | #FE7768 |
| warning-soft | #FFF8C7 | #4D4400 |
| warning | #FFD80B | #FFD80B |
| warning-medium | #FFEC75 | #8A7700 |
| warning-strong | #A88A00 | #FFE65A |

### Button Glint (kept for compatibility — visual effect is disabled in flat style)
| Variable | Light | Dark |
|---|---|---|
| `--color-1-400` | rgba(255,255,255,0) | rgba(255,255,255,0) |
| `--color-1-700` | rgba(0,0,0,0) | rgba(0,0,0,0) |

### Utility
| Token | Light | Dark |
|---|---|---|
| dark | #222222 | #222222 |
| dark-strong | #000000 | #111111 |
| disabled | #F0E6D4 | #2C241B |

### Accent
| Token | Value (same both modes) |
|---|---|
| purple | #8B53FF |
| sky | #4FB7E8 |
| teal | #2BB39A |
| pink | #FF6FA8 |
| cyan | #2FC3D6 |
| fuchsia | #D63FBF |
| indigo | #5B45E0 |
| orange | #FD4C38 |

## Text Color Tokens

### Base
| Token | Light | Dark |
|---|---|---|
| white | #FFFBF4 | #FFFBF4 |
| black | #000000 | #000000 |
| heading | #000000 | #FFF8EC |
| body | #000000 | #E8DCC4 |
| body-subtle | #4A4A4A | #B8A982 |

### Brand
| Token | Light | Dark |
|---|---|---|
| fg-brand-subtle | #BFBFBF | #404040 |
| fg-brand | #222222 | #FFF8EC |
| fg-brand-strong | #000000 | #FFFFFF |

### Status
| Token | Light | Dark |
|---|---|---|
| fg-success | #1F7A38 | #2FA84F |
| fg-success-strong | #15522A | #4ECB6F |
| fg-danger | #A82817 | #FD4C38 |
| fg-danger-strong | #7A1A0E | #FE7768 |
| fg-warning-subtle | #A88A00 | #FFD80B |
| fg-warning | #6B5800 | #FFE65A |
| fg-disabled | #B8A982 | #6B5C42 |

### Informational / Accent
| Token | Light | Dark |
|---|---|---|
| fg-yellow | #FFD80B | #FFD80B |
| fg-info | #5B45E0 | #A77BFF |
| fg-purple | #8B53FF | #8B53FF |
| fg-purple-strong | #4A1FA8 | #C9ADFF |
| fg-cyan | #2FC3D6 | #2FC3D6 |
| fg-indigo | #5B45E0 | #5B45E0 |
| fg-pink | #FF6FA8 | #FF6FA8 |
| fg-lime | #8FCB2B | #A8D854 |

## Border Color Tokens

| Token | Light | Dark |
|---|---|---|
| border-dark | #222222 | #FFF8EC |
| border-buffer | #FFF8EC | #14110D |
| border-buffer-medium | #FFF8EC | #1A1612 |
| border-buffer-strong | #FFF8EC | #221C16 |
| border-muted | #FFE9CE | #14110D |
| border-light-subtle | #FFE9CE | #14110D |
| border-light | #FBDDB2 | #1A1612 |
| border-light-medium | #F5C68A | #221C16 |
| border-default-subtle | #222222 | #FFF8EC |
| border-default | #222222 | #FFF8EC |
| border-default-medium | #222222 | #FFF8EC |
| border-default-strong | #000000 | #FFFFFF |
| border-success-subtle | #C5EFB0 | #2A5C1F |
| border-success | #1F7A38 | #2FA84F |
| border-danger-subtle | #FFA89C | #8A2B1F |
| border-danger | #FD4C38 | #FE7768 |
| border-warning-subtle | #FFEC75 | #8A7700 |
| border-warning | #FFD80B | #FFE65A |
| border-brand-subtle | #BFBFBF | #404040 |
| border-brand-light | #4A4A4A | #B8B8B8 |
| border-brand | #222222 | #FFF8EC |
| border-dark-subtle | #222222 | #FFF8EC |
| border-purple | #8B53FF | #8B53FF |
| border-orange | #FD4C38 | #FD4C38 |

## Semantic Usage Rules

- **Primary page background:** `secondary-brand` (Canvas Almond, warm cream) — the inviting foundation that every page sits on. `neutral-primary-soft` is the secondary fallback for very neutral surfaces.
- **Section backgrounds alternate** through the 5 brand colors in order: brand → secondary-brand → tertiary-brand → quaternary-brand → quinary-brand → (loop). Adjacent sections must never share the same background color.
- **Cards on a colored section** use a softer, lighter derivative tint of that section's color (e.g. cards on a `tertiary-brand` section use `tertiary-brand-softer`). Never plain white inside a colored section.
- **Vibrant accent backgrounds** for cards, highlight blocks, and energy moments: `tertiary-brand` (Grape Punch), `quaternary-brand` (Sunshine Yellow), `quinary-brand` (Bubblegum Red). Use them generously to inject playfulness.
- **Primary buttons:** `brand` background, `white` text
- **Headings & primary text:** `heading` token (resolves to `brand-strong` / Type Black in light mode) for maximum contrast on light backgrounds
- **Body text:** `body` token, short paragraphs
- **CTA links:** `fg-brand`, underlined
- **Default borders on every component:** `border-brand` (#222222), 4px width
- **Status borders match intent:** success → `border-success`, danger → `border-danger`, warning → `border-warning`
- **Disabled:** `disabled` background + `fg-disabled` text

## Prohibited

- No raw hex/rgb values in component code — always use design tokens
- No brand text color for long-form paragraphs
- No accent text tokens (`fg-purple`, etc.) for body copy or navigation
- Never put a plain white card on top of a colored brand section — always use the section's lighter tint
- Adjacent sections must not repeat the same brand background color
- No manual light/dark value swapping — let the custom properties handle it
- **No dark, desaturated colors as primary background elements.** The system thrives on a light, warm canvas (`secondary-brand` / `neutral-primary-soft`) with vivid accents. Reserve `brand` (#222222) backgrounds for occasional emphasis sections, never as the dominant page surface.
- **Never use generic blue for primary interactive elements.** Use the brand's vibrant palette: `tertiary-brand` (Grape Punch), `success` (Leafy Green), or `quinary-brand` (Bubblegum Red).

---

## Source file: `content.md`

# Content & Grid System

> Dependencies: `layout.md`, `typography.md`

## Containers

| Type | Max width | Horizontal padding |
|---|---|---|
| Standard | 1280px | 32px |
| Internal (reading) | 720px | — (45–60 char line length, max 4 rows per paragraph) |

## Vertical Padding

| Breakpoint | Vertical padding |
|---|---|
| Mobile | 80px |
| Tablet (≥768px) | 120px |
| Desktop (≥1024px) | 160px (hero/feature sections always 160px) |

## Grid System

Mobile-first with flexible desktop configurations.

| Context | Gap |
|---|---|
| Standard content/cards | 32px |
| Compact widgets/metadata | 24px |

### Responsive Columns

| Breakpoint | Columns |
|---|---|
| Mobile (default) | 1 |
| Small/Tablet (≥640px) | 1–2 |
| Desktop (≥1024px) | 2–4 |

Cards inside grids must remain large enough to host oversized headings and breathable padding — favor fewer, larger cards over dense column counts.

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
- Lists: 32px indentation, 16px vertical gap between items
- Body copy: 18px, 1.6 line-height, max 4 rows per paragraph
- All interactive links follow brand underline/hover protocol
- Every content section must include a playful decorative graphic (per `layout.md`)

---

## Source file: `dropdown.md`

# Dropdown

> Dependencies: `colors.md`, `radius.md`, `shadows.md`, `inputs.md`

## Core Specs

### Chevron Icon
- Size: 20x20px
- Spacing: 8px left margin, -4px right margin
- Color: inherits from trigger button

### Menu Container
- Background: secondary-brand-softer
- Border: 4px, border-brand
- Radius: 16px (base)
- Shadow: shadow-md (4px brand-color offset block)
- Z-index: elevated above content

### Menu List
- Padding: 12px
- Font: 16px, body color, bold weight

### Menu Item
- Layout: inline-flex, vertically centered, full width
- Padding: 12px horizontal, 12px vertical
- Radius: 16px
- Hover: secondary-brand-soft background, heading text
- Transition: colors, 150ms

## Trigger Sizes

| Size | Font size | Horizontal padding | Vertical padding |
|---|---|---|---|
| Small | 16px | 20px | 10px |
| Base | 18px | 24px | 14px |
| Large | 20px | 32px | 18px |

## Icon-only Trigger

- Padding: 12px
- Min size: 52x52px
- Icon: 22x22px

## Variants

### Default
- Menu width: 240px, items have 16px radius

### With Divider
- Top 2px border (border-default-subtle) between child groups, skip first group

### With Header
- Header padding: 20px horizontal, 16px vertical
- Bottom border: 2px, border-default-subtle
- Name: heading color, 18px, bold weight
- Email: body-subtle color, 14px, truncated

### With Icons
- Icon before label: 20x20px, 12px right margin, body color
- On hover, icon color changes to heading

### With Checkbox / Radio
- Inputs: 20x20px, 8px radius, focus ring in tertiary-brand-soft
- Helper text: 14px, body-subtle color, 4px top margin

### With Search
- Search input at top of menu following `inputs.md` specs (4px brand border, 16px radius)
- Left icon: 16px left padding, input 48px left padding

### Scrollable
- Max height: 280px, vertical scroll overflow

## States

| State | Appearance |
|---|---|
| Focused trigger | no outline, 4px tertiary-brand-soft ring |
| Hover item | secondary-brand-soft background, heading text |
| Active/open item | secondary-brand-medium background, heading text |
| Disabled item | fg-disabled text, not-allowed cursor, no pointer events |

---

## Source file: `icon-shapes.md`

# Icon Shapes

> Dependencies: `colors.md`, `radius.md`

## Core Specs

- Box sizing: border-box
- Icon must be perfectly centered (inline-flex, centered both axes)
- Circle: fully rounded (9999px)
- Rounded square: 16px radius (MD/LG/XL), 8px radius (XS/SM)
- Border: 4px, border-brand on every icon shape (the playful flat-cartoon look requires the outline)

## Sizes

| Size | Container | Icon |
|---|---|---|
| XS | 32x32px | 16x16px |
| SM | 40x40px | 20x20px |
| MD | 56x56px | 28x28px |
| LG | 72x72px | 36x36px |
| XL | 96x96px | 48x48px |

## Color Variants

### Brand
- Shape: circle
- Background: secondary-brand
- Border: 4px, border-brand
- Icon color: heading

### Gray
- Shape: circle
- Background: neutral-secondary-soft
- Border: 4px, border-brand
- Icon color: heading

### Danger
- Shape: circle
- Background: danger-soft
- Border: 4px, border-danger
- Icon color: fg-danger-strong

### Success
- Shape: circle
- Background: success-soft
- Border: 4px, border-success
- Icon color: fg-success-strong

### Warning
- Shape: circle
- Background: warning-soft
- Border: 4px, border-warning
- Icon color: heading

### Tertiary (Vivid Purple)
- Shape: circle
- Background: tertiary-brand
- Border: 4px, border-brand
- Icon color: white

### Quaternary (Sunny Yellow)
- Shape: circle
- Background: quaternary-brand
- Border: 4px, border-brand
- Icon color: heading

### Quinary (Warm Red-Orange)
- Shape: circle
- Background: quinary-brand
- Border: 4px, border-brand
- Icon color: white

---

## Source file: `inputs.md`

# Inputs

> Dependencies: `colors.md`, `radius.md`

## Core Specs

- **Display:** block, full width
- **Radius:** 16px (base)
- **Border:** 4px solid, border-brand color
- **Background:** secondary-brand-softer (warm cream so the input still reads light on any colored section)
- **Shadow:** none — flat aesthetic
- **Font:** 18px, Cossette Texte, heading color
- **Padding:** 18px horizontal, 14px vertical
- **Placeholder:** body-subtle color
- **Transition:** all properties, 200ms

## Label

- Display: block
- Font: 16px, bold weight, heading color
- Margin bottom: 12px
- Label `htmlFor` must match the input `id`

## States

### Default
- Border: 4px, border-brand
- Background: secondary-brand-softer

### Hover
- Border: 4px, border-brand-strong (deeper black)
- Background: secondary-brand-soft

### Focus
- No outline
- Border: 4px, border-brand-strong
- Ring: 4px, tertiary-brand-soft (playful purple halo)

### Success
- Border: 4px, border-success
- Focus ring: 4px, success-medium

### Error / Danger
- Border: 4px, border-danger
- Focus ring: 4px, danger-medium

### Disabled
- Background: disabled
- Border: 4px, border-brand-subtle
- Text: fg-disabled
- Cursor: not-allowed

## Input with Icons

- Icon size: 20x20px
- Icon color: body
- Container: relative positioned wrapper
- Start icon: absolutely positioned left, 16px left padding — input gets 48px left padding
- End icon: absolutely positioned right, 16px right padding — input gets 48px right padding
- Icons vertically centered within the wrapper

## Rules

- Every input must have a unique `id`
- Every label must have a matching `htmlFor`
- Padding: 18px horizontal, 14px vertical unless overridden for icon variants
- Border is always 4px brand color (or status color for error/success)
- Background is the warm cream (`secondary-brand-softer`) so the field reads consistently on any section color
- No arbitrary hex or hardcoded colors

---

## Source file: `layout.md`

# Layout & Spacing

## Spacing Rhythm

Base unit: **6px**. All spacing values should be multiples of 6px (with two named tokens that anchor common patterns).

### Named spacing tokens

| Token | Value | Use |
|---|---|---|
| `elementGap` | 12px | Tight clusters — icon + label, badge groups, inline metadata, sidebar item rows |
| `cardPadding` | 29px | Inner padding for content blocks / cards (the slightly off-grid 29px is intentional and gives the system its hand-placed playful feel) |

### Layout values (multiples of 6)

| Context | Value |
|---|---|
| Section vertical padding | 144px |
| Section header → content | 72px |
| Heading → paragraph | 30px |
| Container horizontal padding | 36px |
| Flex/grid row gap | 24px |
| Card grid gap | 36px |
| Wide component grid gap | 60px |
| Column layout gap | 72px |

## Container

Standard section container: max-width 1280px, centered, 36px horizontal padding.

Every major section wraps content in this container.

## Content Composition Order

Inside each section, follow this order:
1. Heading (`h1`–`h3`) — oversized, max 2 rows, generous breathing room
2. Leading paragraph — max 4 rows
3. Normal paragraph(s) — max 4 rows each
4. Lists, CTA links, or component grids
5. At least one playful graphic asset (illustration, sticker, oversized punctuation, character, or doodle) anchored within the section

## Section Pattern

Each section has:
- 144px vertical padding (top and bottom)
- A background color that **alternates playfully** (see "Section Color Alternation" below)
- A centered container (max-width 1280px, 36px horizontal padding)
- A section header area with 72px bottom margin
- Section content below
- At least one decorative playful graphic positioned for compositional balance

## Section Color Alternation

Sections rotate through the five brand colors in order, looping when exhausted:

1. brand (#222222) → text uses cream (`white` token)
2. secondary-brand (#FFE9CE) → text uses heading
3. tertiary-brand (#8B53FF) → text uses cream (`white` token)
4. quaternary-brand (#FFD80B) → text uses heading
5. quinary-brand (#FD4C38) → text uses cream (`white` token)

Rules:
- Adjacent sections must never share the same background color.
- Each new section picks the next color in the rotation. The rotation may start from any color, but it must keep advancing.
- The page hero may use any of the five brand colors as its starting backdrop.
- Cards on a section use the section color's softer derivative (see `cards.md`).

## Playful Illustrations & Decorative Assets

Every section must include at least one of the following decorative elements:
- A cartoon illustration (character, mascot, doodled object)
- An oversized playful icon or sticker (sparkle, star, heart, arrow, exclamation mark)
- A hand-drawn-feeling shape (squiggle, blob, scribble, underline, circled accent)
- An oversized typographic element ("BANG", "WOW", "!", "?", "&") used as decoration, not content
- A speech-bubble shape (using the 144px `speech-bubble` radius from `radius.md`)

Rules for decorative assets:
- Use solid brand colors (or contrasting brand colors) with thick `border-brand` outlines to match the system's flat-cartoon style.
- Position to support composition (anchor a corner, frame a heading, balance white space) — never as random clutter.
- Keep all assets crisp / vector. Avoid photographs, gradients, or noisy textures.

## Organic "Sticker Bombing" Composition

Avoid heavily structured, perfectly-aligned grid layouts. Let elements feel hand-placed:

- Use slight rotations (-6deg to +6deg) on decorative stickers, badges, and accent cards.
- Vary placements — overlap a sticker on the corner of a card, let an oversized punctuation mark bleed past a section edge, anchor a doodle slightly off-center.
- Allow accent rectangles (using the 15px `accent` radius) to break the main grid line for a playful collage feel.
- Symmetrical and rigid component arrangements are discouraged. Embrace rounded corners and slightly irregular forms.
- Scale and position decorative elements freely; they don't need to align to the spacing rhythm the way content does.

## Motion & Animation

- Prefer CSS-native: `transition`, `animation`, `keyframes`. Use a JS animation library only when CSS cannot achieve the behavior.
- Lean into playful, slightly bouncy easing (e.g. `cubic-bezier(.68,-0.6,.32,1.6)`) for hover and reveal moments.
- Prioritize high-impact orchestrated moments over scattered micro-interactions. A single well-sequenced page-load animation using staggered delays delivers more perceived quality than many isolated effects.
- Reserve scroll-triggered and hover transitions for moments that reinforce hierarchy or reward attention.

## Backgrounds & Visual Depth

- The system is intentionally **flat**. Backgrounds are solid brand-color fills — no gradient meshes, no noise, no blur.
- Visual depth comes from: thick `#222222` outlines on every component, offset-block shadows on prominent surfaces, and the playful illustrations layered over the colored fields.
- Decorative elements (illustrations, stickers, oversized type) provide depth and rhythm — never purely ornamental clutter.

## Must

- All sections: consistent 144px vertical padding
- All containers: max-width 1280px, centered, 36px horizontal padding
- Section headers: 72px bottom margin
- Spacing values: multiples of the 6px base unit
- `elementGap` (12px) for tight clusters; `cardPadding` (29px) for content blocks
- Sections rotate through the five brand colors; adjacent sections never share a background
- Every section includes at least one playful decorative graphic
- Generous vertical rhythm — never crowded, always breathable
- Layouts readable and properly spaced on both desktop and mobile

## Don't

- Don't use heavily structured, perfectly-aligned grid layouts. Embrace organic "sticker bombing" arrangements.
- Don't make compositions strictly symmetrical or rigid. Embrace rounded corners and slightly irregular forms.
- Don't position decorative assets randomly — every sticker / illustration must support the composition.

---

## Source file: `lists.md`

# Lists

> Dependencies: `colors.md`

## Core Specs

- Item spacing: 24px vertical gap between list items
- Text: body color, 18px

## List Icons

- Size: 24x24px
- Prevent squishing: no shrink
- Spacing: 12px right margin between icon and text
- Active/featured icon: fg-brand color (often inside a circular icon-shape with 4px brand outline — see `icon-shapes.md`)
- Neutral icon: heading color

## Inactive / Disabled Items

Strikethrough text with body-subtle color decoration on the list item.

## Pattern

Vertical flex list with 24px gap. Each item is a flex row with centered alignment — icon (24x24px, no-shrink, 12px right margin) followed by a span of body-colored text. Lists never overflow 4 visible rows of text per item.

---

## Source file: `modals.md`

# Modals

> Dependencies: `colors.md`, `radius.md`, `shadows.md`, `buttons.md`, `inputs.md`

## Core Specs

### Overlay (Backdrop)
- Fixed, covers full screen
- Z-index: 40
- Background: brand (#222222) at 50% opacity
- No blur — keep the playful flat aesthetic

### Content Container
- Background: secondary-brand-softer (warm cream)
- Border: 4px, border-brand
- Radius: 16px (modal counts as a component, not a card — uses 16px per `radius.md`)
- Shadow: shadow-xl (8px brand-color offset block)
- Padding: 32px

## Anatomy

### Header
- Bottom border: 2px, border-default-subtle
- Top corners rounded (16px, inherited from container)
- Title: 32px, bold weight, heading color, max 2 rows
- Close button: Ghost variant from `buttons.md`, 8px padding

### Body
- Vertical padding: 32px
- Vertical spacing between elements: 24px
- Text: 18px, 1.6 line-height, body color, max 4 rows per paragraph

### Footer
- Top border: 2px, border-default-subtle
- Bottom corners rounded (16px, inherited from container)

## Variants

### Default (Information)
Standard header + body + footer with primary/secondary action buttons.

### Pop-up (Confirmation)
Centered text, prominent icon, reduced padding:
- Body: 32px padding, text centered
- Icon: centered, 24px bottom margin, 64x64px, brand outline (per `icon-shapes.md`)

### Form Modal
Body contains inputs following `inputs.md` (4px brand border, 16px radius). Vertical spacing between form elements: 24px.

## Rules

- Backdrop covers full screen with fixed positioning, brand color at 50% opacity
- Content: secondary-brand-softer background, 16px radius, 4px brand border, shadow-xl offset block
- Header/Footer separated by 2px border-default-subtle borders
- Close button must be present and functional
- Accessibility: `role="dialog"`, implement focus trap in code
- Dark mode automatic via token system
- Modal headers and body still respect heading max-2-rows and paragraph max-4-rows rules

---

## Source file: `pagination.md`

# Pagination

> Dependencies: `colors.md`, `radius.md`

## Container

Font: 16px, bold weight. Items displayed as flex with -4px overlap so the 4px brand outlines merge into one shared edge.

## Pagination Item

- Layout: flex, centered both axes
- Size: 48x48px
- Text: heading color, bold weight
- Background: secondary-brand-softer
- Border: 4px, border-brand
- Hover: secondary-brand-soft background, heading text
- Focus: no outline, 4px ring in tertiary-brand-soft
- Overlap: -4px left margin

## Previous / Next Buttons

- Horizontal padding: 20px, height: 48px
- First item: 16px radius on inline-start side
- Last item: 16px radius on inline-end side

## Active Page Item

- Text: white
- Background: brand (#222222)
- Hover: stays brand background, white text

## Rules

- Display as flex with -4px child overlap so brand outlines share edges
- Items: secondary-brand-softer background, 4px border-brand border, heading text
- Active: white text on brand background
- First item: rounded inline-start (16px), Last item: rounded inline-end (16px)
- All items need hover and focus states

---

## Source file: `radios-checkboxes-toggle.md`

# Radios, Checkboxes & Toggles

> Dependencies: `colors.md`, `radius.md`

## Checkbox

- Size: 24x24px
- Radius: 8px
- Border: 4px, border-brand
- Background: secondary-brand-softer
- Checked: brand background, white check icon
- Focus ring: 4px, tertiary-brand-soft

### Disabled
- Border: 4px, border-brand-subtle
- Text: fg-disabled

## Radio

- Size: 24x24px
- Radius: fully rounded (9999px)
- Border: 4px, border-brand
- Background: secondary-brand-softer
- Focus ring: 4px, tertiary-brand-soft
- Checked: brand background, white inner dot indicator

### Disabled
- Border: 4px, border-brand-subtle
- Text: fg-disabled

Group all radio items under the same `name` attribute.

## Toggle

### Track
- Fully rounded (9999px)
- Background: secondary-brand-softer
- Border: 4px, border-brand
- Focus-within ring: 4px, tertiary-brand-soft
- Checked track: brand background
- Disabled track: disabled background

### Thumb
- Fully rounded (9999px)
- Background: white (cream)
- Border: 4px, border-brand

### Disabled
- Track: disabled background
- Label: fg-disabled text

## Rules

- All selection inputs must have `id` matching label `htmlFor`
- All controls carry the 4px brand outline that defines the system
- Focus states use the playful tertiary-brand-soft halo
- Disabled states: no hover/focus interaction

---

## Source file: `radius.md`

# Border Radius

| Token | Value | Default usage |
|---|---|---|
| xs | 5px | Smaller buttons (extra-small button variant), tiny chip controls |
| sm | 8px | Checkboxes, tiny elements |
| accent | 15px | Rectangular accent elements, sticker-style decorative blocks, mini cards, highlight chips |
| base | 16px | Buttons, inputs, modals, alerts, badges, sections, all components except cards |
| default | 16px | Dropdown items, small controls, popovers, tooltip panels |
| card | 32px | Cards (any variant, any surface) |
| speech-bubble | 144px | Speech bubble shapes, oversized pill callouts, playful chat-style asset containers |
| full | 9999px | Pills, avatars, toggles, dot indicators |

## Component-specific overrides

| Component | Radius |
|---|---|
| Cards (main, any variant) | 32px (card) |
| Rectangular accent elements / sticker blocks / mini cards | 15px (accent) |
| Extra-small buttons | 5px (xs) |
| Speech bubbles, oversized pill callouts | 144px (speech-bubble) |

## Rules

- **All main cards use 32px radius.** No exceptions for primary content cards — interactive cards, static cards, sidebar bottom CTA cards, modal bodies that read as cards, all use 32px.
- **All other standard components (buttons, inputs, badges, alerts, modals, dropdowns, tabs, popovers, tooltips) use 16px radius.**
- **Use 15px (accent) for rectangular sticker-style decorative blocks** — small accent rectangles, micro cards, highlight chips that sit alongside a main card without competing with it.
- **Use 5px (xs) for extra-small button variants** — pill-tag buttons, tiny inline action buttons.
- **Use 144px (speech-bubble) for speech bubble shapes** — chat-style callouts, oversized pill messages, playful conversation assets.
- Never use arbitrary radius values outside this scale.
- Radius must be consistent within each component family.
- Pill / fully-rounded shape (9999px) is reserved for badges marked as pills, avatars, toggles, and dot indicators.

---

## Source file: `shadows.md`

# Shadows

The system is intentionally **flat**. Components rely on thick brand-color outlines, not blurred drop shadows. Shadows, when used, are crisp offset blocks (no blur, no spread) so surfaces still feel cartoonesque and stickered onto the page.

| Token | CSS value |
|---|---|
| shadow-2xs | `0 0 0 0 transparent` |
| shadow-xs | `0 0 0 0 transparent` |
| shadow-sm | `2px 2px 0 0 #222222` |
| shadow-md | `4px 4px 0 0 #222222` |
| shadow-lg | `6px 6px 0 0 #222222` |
| shadow-xl | `8px 8px 0 0 #222222` |
| shadow-2xl | `12px 12px 0 0 #222222` |

## Component Mapping

| Component type | Token |
|---|---|
| Subtle separators, tiny UI details | shadow-2xs (none) |
| Inputs, buttons, small controls, lightweight cards | shadow-xs (none) — flat on rest |
| Standard cards, popovers, dropdowns | shadow-md (4px offset block) |
| Prominent cards, sticky surfaces | shadow-lg (6px offset block) |
| Modals, high-priority overlays | shadow-xl (8px offset block) |
| Hero overlays, top-level emphasis (sparingly) | shadow-2xl (12px offset block) |

## Rules

- Default state for buttons, inputs, and most cards is **flat — no shadow.** The 4px brand outline carries the visual weight.
- When a shadow is needed (modals, popovers, hover-lift on prominent cards), use the offset-block style above. Never use blurred soft shadows.
- Never stack multiple shadow tokens on one element.
- Hover/focus on interactive elevated elements: nudge offset by 2px (e.g. `shadow-sm` → `shadow-md`) — do not add blur.
- Shadow color is always the brand color — implementations should reference `border-brand` so dark mode inverts automatically.

## Don't

- **Avoid traditional box-shadows** (any shadow with a non-zero blur radius or spread). The system never uses soft, blurred, atmospheric drop shadows.
- Do not rely on shadow for element definition. Element definition comes from **vibrant background colors, thick brand outlines, and irregular sticker-style shapes** — not blurred elevation.
- Do not use shadow color values other than the brand outline color.
- Do not stack offset-block shadows in opposite directions on the same element.

---

## Source file: `sidebars.md`

# Sidebars

> Dependencies: `colors.md`, `radius.md`, `typography.md`, `badges.md`, `alerts.md`

## Core Specs

- Background: secondary-brand-softer (warm cream)
- Right border: 4px, border-brand (for left-sidebar); left border for right-sidebar
- Width: 288px

## Anatomy

### Outer Container
Hidden on mobile, visible at small breakpoint. Needs a toggle/trigger for mobile.

### Inner Wrapper
- Full height, vertical scroll overflow
- Padding: 20px horizontal, 24px vertical

### Navigation List
- Vertical spacing: 12px between items
- Font weight: bold
- Font size: 18px

### Navigation Item
- Layout: flex, vertically centered
- Padding: 14px horizontal, 12px vertical
- Text: heading color
- Radius: 16px (base)
- Border: 4px transparent border by default (so layout doesn't shift on active state)
- Hover: secondary-brand-soft background
- Transition: colors, 100ms
- Icon: 24x24px, heading color, 100ms transition
- Label: 16px left margin from icon

### Active Item
- Background: brand (#222222)
- Border: 4px, border-brand
- Text: white

### Separator
- 24px top padding, 24px top margin
- Top border: 2px, border-default-subtle
- 12px vertical spacing below

### Bottom CTA / Card
- Padding: 24px
- Top margin: 32px
- Radius: 32px (this is a card — see `cards.md`)
- Border: 4px, border-brand
- Background: tertiary-brand-softer (or any other softer brand-color tint to add color to the corner)
- Can also use any alert variant from `alerts.md`

## Rules

- Responsive: hidden on mobile with a trigger mechanism
- Icons: 24x24px, heading color
- Multi-level menus: indent with 52px left padding
- Spacing follows 8px grid
- Only neutral, brand, or status tokens — no arbitrary colors

---

## Source file: `tables.md`

# Tables

> Dependencies: `colors.md`, `radius.md`, `shadows.md`

## Wrapper

- Horizontal scroll overflow
- Background: secondary-brand-softer
- Radius: 32px (the table reads as a card — uses card radius)
- Border: 4px, border-brand
- Shadow: none on rest

## Table Element

- Full width, left-aligned text (right-aligned for RTL)
- Font: 16px, body color

## Table Head

- Font: 18px, heading color, bold weight
- Background: secondary-brand
- Bottom border: 2px, border-default-subtle
- Cell padding: 32px horizontal, 20px vertical

## Table Body

- Row background: secondary-brand-softer
- Row bottom border: 2px, border-default-subtle (omit on last row to avoid doubling with wrapper border)
- Row hover: secondary-brand-soft background (optional)
- Row header: bold weight, heading color, no-wrap
- Cell padding: 32px horizontal, 24px vertical

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

- Typography: 18px, bold weight, body color
- Transitions: all properties, 200ms

## Variants

### 1. Underline (Default)

**Wrapper:** bottom border, 4px, border-brand

**Tab Item:**
- Padding: 24px horizontal, 20px vertical
- Bottom border: 4px, transparent
- Top corners: 16px radius
- Transition: colors, 150ms

| State | Appearance |
|---|---|
| Active | heading text, 4px border-brand bottom border (sits flush over the wrapper border) |
| Inactive | transparent bottom border; hover → heading text, 4px border-brand-subtle bottom border |
| Disabled | fg-disabled text, not-allowed cursor |

### 2. Pills

**Tab Item:**
- Padding: 20px horizontal, 14px vertical
- Radius: 16px (base)
- Border: 4px, border-brand
- Font weight: bold
- Transition: all, 200ms

| State | Appearance |
|---|---|
| Active | brand background, white text |
| Inactive | secondary-brand-softer background, heading text; hover → secondary-brand-soft background |
| Disabled | fg-disabled text, not-allowed cursor |

### 3. Full Width

Children overlap with -4px left margin on all except first so brand outlines share edges.

**Tab Item:**
- Full width, centered text
- Padding: 24px horizontal, 20px vertical
- Background: secondary-brand-softer
- Border: 4px, border-brand
- Transition: colors, 150ms
- Hover: secondary-brand-soft background

| State | Appearance |
|---|---|
| Active | brand background, white text |
| First item | rounded inline-start (16px) |
| Last item | rounded inline-end (16px) |

## Tabs with Icons

- Icon size: 20x20px or 24x24px
- Spacing: 10px right margin
- Layout: inline-flex, centered
- Icons inherit the text color of the tab state

---

## Source file: `tooltips-popovers.md`

# Tooltips & Popovers

> Dependencies: `colors.md`, `radius.md`, `shadows.md`

## Tooltips

### Core Specs
- Padding: 14px horizontal, 10px vertical
- Font: 16px, bold weight
- Radius: 16px
- Border: 4px, border-brand
- Shadow: shadow-sm (2px brand-color offset block)
- Transition: opacity, 200ms

### Dark (Default)
- Background: brand (#222222)
- Text: white
- Border: 4px, border-brand-strong

### Light
- Background: secondary-brand-softer
- Text: heading
- Border: 4px, border-brand

## Popovers

### Core Specs
- Background: secondary-brand-softer
- Radius: 16px (base)
- Shadow: shadow-md (4px brand-color offset block)
- Border: 4px, border-brand
- Transition: opacity, 200ms

### Header / Title
- Padding: 16px horizontal, 12px vertical
- Background: secondary-brand
- Bottom border: 2px, border-default-subtle
- Font: 18px, bold weight, heading color

### Body / Content
- Standard: 16px horizontal, 12px vertical padding; 16px, body color
- Rich: 24px padding; 16px, body color, max 4 rows per paragraph

## Arrows

- Size: 12x12px rotated 45deg
- Color must match the background of the tooltip/popover variant
- Outline: 4px brand-color stroke on the two outward-facing edges so the arrow matches the component outline

## Rules

- Tooltips: 16px radius, 4px brand border
- Popovers: 16px radius, 4px brand border
- Dark tooltips: brand background, white text
- Light tooltips/popovers: secondary-brand-softer background + brand outline
- Arrows match parent background color and continue the brand outline

---

## Source file: `typography.md`

# Typography

> Dependencies: `colors.md`

## Core Rules

- **Font:** Cossette Texte (Google Fonts), serif fallback — configured at app level, never override. Use as the single typeface across headings, body, UI labels.
- **Headings:** bold weight (700), heading text color, oversized display sizing
- **Body copy:** body text color, never use brand color for paragraphs longer than one sentence
- **Semantic HTML:** Use `h1`–`h6` in order, never skip levels
- **Headings are hard-capped at 2 rows.** If text would wrap to a 3rd row, shorten the wording, reduce size by one step, or break to a new line manually.
- **Paragraphs are hard-capped at 4 rows.** Split into multiple paragraphs or trim copy if it would overflow.
- **Generous free space around every heading and paragraph** — see "Spacing Around Text" below.

## Heading Scale

### Desktop

| Element | Size | Line-height | Letter-spacing | Margin-bottom |
|---|---|---|---|---|
| `h1` | 144px | 1 | -1.5px | 48px |
| `h2` | 120px | 1.05 | -1px | 40px |
| `h3` | 96px | 1.05 | -0.5px | 32px |
| `h4` | 72px | 1.1 | — | 24px |
| `h5` | 56px | 1.15 | — | 20px |
| `h6` | 40px | 1.2 | — | 16px |

Minimum heading size on desktop is **96px** for `h1`–`h3`. Smaller sizes are reserved for `h4`–`h6` (subheaders inside cards or compact UI areas).

### Responsive

| Element | Tablet (≥768px) | Mobile (default) |
|---|---|---|
| `h1` | 96px | 64px |
| `h2` | 80px | 56px |
| `h3` | 64px | 48px |
| `h4` | 52px | 40px |
| `h5` | 40px | 32px |
| `h6` | 32px | 24px |

Mobile-first: start with mobile sizes, scale up at tablet and desktop breakpoints.

Never reduce line-height below 1 for any heading. Never let a heading wrap beyond 2 rows.

## Paragraphs

### Leading Paragraph
- Size: 24px
- Weight: normal
- Color: body
- Line-height: 1.6
- Max width: ~60 characters
- Max rows: 4

### Normal Paragraph
- Size: 18px
- Weight: normal
- Color: body
- Line-height: 1.6
- Max width: ~60 characters
- Max rows: 4

### Small Supporting Copy
- Size: 14px
- Weight: normal
- Color: body
- Line-height: 1.5
- Max rows: 4
- Use only for helper text, legal text, captions, metadata.

## Spacing Around Text

Headings and paragraphs must always sit inside a generous amount of empty space:

| Element | Margin / padding rule |
|---|---|
| `h1` | min 64px above, min 48px below |
| `h2` | min 56px above, min 40px below |
| `h3` | min 48px above, min 32px below |
| `h4`–`h6` | min 32px above, min 24px below |
| Paragraph (any size) | min 24px above, min 24px below, min 24px horizontal padding from any container edge |

Never let a heading or paragraph touch the edge of its container. Never stack two text blocks with less than 24px between them.

## UI Labels

| Context | Size | Weight |
|---|---|---|
| Button labels | 18px | 700 (bold) |
| Input labels | 16px or 18px | 700 (bold) |
| Captions / meta / badges | 14px or 16px | 700 (bold) |

Do not apply paragraph line-height (1.6) to control labels.

## Links

- **Inline links:** Same size as surrounding text, fg-brand color, underline, hover → no underline
- **CTA links:** fg-brand color, bold weight, underline, hover → no underline

## Emphasis

- `<strong>` for high-priority emphasis in body text
- `<em>` for tone emphasis only, not visual hierarchy
- All-caps only for short labels: uppercase, 0.4px letter-spacing, 12px or 14px

## Dark Mode

Hierarchy stays identical. Only color tokens change (automatic via custom properties). Size, weight, and spacing remain constant.

## Do

- Always use the configured brand typeface (Cossette Texte) for every text element to maintain brand personality.
- Use the `heading` token (resolves to `brand-strong` / Type Black on light backgrounds) for primary text content to keep contrast crisp.
- Reserve generous empty space around every heading and paragraph (per the Spacing Around Text table).

## Don't

- Do not introduce additional font families. The configured brand typeface (Cossette Texte) is the sole typographic voice of the system. No mixing with other display, serif, or system fonts.
- Do not let a heading wrap beyond 2 rows or a paragraph beyond 4 rows.
- Do not use brand color tokens for long-form paragraphs.
