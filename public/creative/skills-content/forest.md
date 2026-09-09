# Design System — Agent Instructions

This skill describes the visual design language for all UI output. Every component, layout, and page should follow the design specs in the module files below. These describe *what the design looks like* — you choose how to implement the styles.

## Style
A modern, sustainability-inspired green interface that blends deep forest-green surfaces with a fresh lime brand accent, clean minimal layouts, generous rounded cards, and flat (shadow-free) components to create a trustworthy, future-focused digital experience.

## Before Writing Any Code

1. **Read every module that applies.** For a landing page, read at minimum: `layout.md`, `typography.md`, `colors.md`, `buttons.md`, `cards.md`, `shadows.md`, `radius.md`, `borders.md`. Do NOT write any component markup until you have loaded all relevant modules.

## Critical Rules

- **Tokens are AGNOSTIC and stack-independent:** The tokens defined in the `.md` files (like `neutral-primary-soft`, `heading`, `border-default`) are abstract design system tokens, NOT literal class names tied to any framework or technology. Map them yourself to whatever styling approach your stack uses. Never assume a specific framework, library, or utility-class naming scheme.

- **Cross-reference modules.** A card containing buttons must satisfy both `cards.md` AND `buttons.md`.
- **Light/dark resolve through the token system.** Color tokens carry both light and dark values; let the token layer resolve them. Never manually swap colors. (In this system the palette is intentionally a consistent deep-green theme.)
- **Sections share equal spacing.** Every section uses the same background surface and the same vertical spacing, with identical padding on top and bottom so the gap between sections is consistent throughout the page. See `layout.md`.
- **Flat by default.** Cards, buttons, inputs, badges, and all other components have no drop shadows. Separation comes from color contrast and borders.
- **Every interactive element needs hover, focus, and disabled states** — defined in the relevant module.
- **Use semantic HTML:** proper heading hierarchy (`h1`→`h6`), action elements for actions, links for navigation, accessibility attributes where needed.

## Module Index

### Foundation (read first for any UI work)
- [colors.md](colors.md) — all background, text, and border color tokens
- [typography.md](typography.md) — heading scale, paragraphs, labels, links
- [layout.md](layout.md) — spacing rhythm, containers, animation, visual depth
- [radius.md](radius.md) — border-radius scale
- [shadows.md](shadows.md) — elevation tokens
- [borders.md](borders.md) — border widths and styles

### Components
- [buttons.md](buttons.md) — button variants, sizes, states
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

# Accordion

> Dependencies: `colors.md`, `radius.md`

## Core Specs

- **Wrapper:** full width, 1px border (border-default color), 32px radius — clips first/last item corners
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
Each item is independent — has its own 1px border and 32px radius, no shadow. 8px bottom margin between items. No shared outer border.

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

# Alerts

> Dependencies: `colors.md`, `radius.md`

## Core Specs

- **Padding:** 16px
- **Radius:** 32px (base)
- **Border:** 1px
- **Shadow:** none (flat)
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

# Avatars

> Dependencies: `colors.md`, `radius.md`

## Core Specs

- **Circular shape:** fully rounded (9999px)
- **Rounded square shape:** 16px radius
- **Default size:** 40x40px
- **Image fit:** cover

## Sizes

| Size | Dimensions | Radius |
|---|---|---|
| Extra Small | 18x18px | 8px |
| Small | 24x24px | 8px |
| Base | 32x32px | 16px |
| Large | 44x44px | 16px |
| XL | 56x56px | 16px |
| 2XL | 64x64px | 16px |

## Bordered Avatar

- 4px padding, fully rounded, 2px outline in border-default color
- Alternative: 2px border ring in border-default color (flat — no box-shadow rings)

## Stacked Avatars

- Displayed in a row (flex)
- Each avatar: 40x40px, fully rounded, 2px border in border-buffer color
- Overlap: -16px negative margin on all except first

### Stacked Counter
- Same size as avatars (40x40px), fully rounded
- Background: dark-strong, text: white, 12px font, medium weight
- Same overlap margin as other avatars

## Monogram / Initials Avatar

When no image is available, render initials instead:

- Shape: fully rounded (or rounded-square to match the set)
- Background: brand-softer
- Border: 1px, border-brand-subtle
- Text: fg-brand-strong, medium-to-semibold weight, ~0.5px letter-spacing
- Initials centered both axes; size follows the standard avatar scale

## Avatar with Text

- Flex row, 10px gap between avatar and text
- Avatar: 40x40px, fully rounded, cover fit
- Name: heading color, medium weight
- Subtitle: 14px, body color

# Badges

> Dependencies: `colors.md`, `radius.md`

## Core Specs

- **Border:** 1px
- **Default radius:** 9999px (full pill — all badges are pills)
- **Pill radius:** 9999px
- **Shadow:** none (flat)

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

All badges use the 9999px pill radius across every variant.

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

# Button Groups

> Dependencies: `buttons.md`, `colors.md`, `radius.md`

## Core Specs

- **Wrapper:** inline-flex, 9999px radius, no shadow
- **Children overlap:** -1px left margin on all except first button
- **Buttons inside the group must NOT have shadows** — the whole system is flat.

## Anatomy

### Wrapper
- Display: inline-flex
- Radius: 9999px
- Shadow: none

### First Button
- 9999px radius on inline-start side only, 0 on inline-end

### Middle Button(s)
- No radius (0 on all corners)

### Last Button
- 9999px radius on inline-end side only, 0 on inline-start

### All buttons except first
- -1px left margin to overlap borders

## Rules

- Buttons inside groups follow all styles from `buttons.md` (background, border, focus rings); the group and its buttons are flat (no shadows)
- Icon-only buttons: 16x16px icon, match height of text buttons

# Buttons

> Dependencies: `colors.md`, `radius.md`, `shadows.md`

## Core Specs (every button)

- **Radius:** 9999px (full pill) — all buttons are pills
- **Border:** 1px solid
- **Shadow:** none — buttons are flat, no drop shadow and no glint/glow effect
- **Font weight:** 500 (medium)
- **Font:** Noto Sans
- **Box sizing:** border-box
- **Transition:** color transitions on hover

## Padding Rule (agnostic)

The default button padding is **32px on the left and right (horizontal)** and **16px on the top and bottom (vertical)**. These are expressed as raw spacing values, not framework utilities, so they can be implemented in any stack or technology. Other sizes scale around this default.

## Sizes

| Size | Font size | Horizontal padding | Vertical padding |
|---|---|---|---|
| Extra small | 12px | 16px | 8px |
| Small | 14px | 20px | 12px |
| Base (default) | 16px | 32px | 16px |
| Large | 16px | 40px | 20px |
| Extra large | 18px | 48px | 24px |

## Variants

### Brand
- **Background:** brand token (lime)
- **Border:** transparent
- **Text:** black (dark text for contrast on the bright lime background)
- **Hover:** brand-strong background
- **Focus ring:** 4px, brand-medium color

### Secondary
- **Background:** neutral-secondary-medium
- **Border:** border-default-medium
- **Text:** body color
- **Hover:** neutral-tertiary-medium background, heading text color
- **Focus ring:** 4px, neutral-tertiary color

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
- **Background:** warning token (orange)
- **Border:** transparent
- **Text:** black (dark text for contrast on the bright orange background)
- **Hover:** warning-strong background
- **Focus ring:** 4px, warning-medium color

### Dark
- **Background:** dark token
- **Border:** transparent
- **Text:** white
- **Hover:** dark-strong background
- **Focus ring:** 4px, neutral-tertiary color

### Ghost (NO shadow)
- **Background:** transparent
- **Border:** transparent
- **Text:** heading color
- **Hover:** neutral-secondary-medium background
- **Focus ring:** 4px, neutral-tertiary color

### Disabled (NO shadow)
- **Background:** disabled token
- **Border:** border-default-medium
- **Text:** fg-disabled color
- **Cursor:** not-allowed
- **No hover, no focus, no shadow**

## Icons in Buttons

- Icon size: 16x16px
- Spacing: 8px gap between icon and label
- Layout: inline-flex, vertically centered

# Cards

> Dependencies: `colors.md`, `radius.md`, `shadows.md`, `typography.md`

## Core Specs

- **Background:** neutral-primary-soft (the green card surface that sits over the body background)
- **Border:** 1px, border-default color
- **Radius:** 32px (base)
- **Shadow:** none (flat — no drop shadow)

## Card Heading

- Desktop: 20px, medium weight, heading color
- Mobile: 16px, medium weight, heading color
- Never skip heading levels — the page hierarchy must logically arrive at the card heading level.

## States

### Static Card (no interactivity)
- Background: neutral-primary-soft
- Border: 1px, border-default
- Radius: 32px
- Shadow: none
- No hover styles. Non-interactive cards must NOT have hover background changes.

### Interactive Card (clickable)
- Same base styles as static card
- Hover: neutral-secondary-medium background
- Transition: colors
- Cursor: pointer

## Rules

- Background: neutral-primary-soft
- Border: 1px, border-default
- Radius: 32px
- Shadow: none (flat)
- Interactive hover: neutral-secondary-medium background
- Non-interactive: no hover styles

## Framed Cards (gradient border)

A premium card variant where the border is a thin **gradient frame** instead of a flat 1px line. Use for hero, feature, and testimonial cards — not for dense grids.

- **Structure:** an outer wrapper at 32px radius with ~4px padding, filled with a linear gradient that blends brand and border tokens (e.g. border-brand-light → border-brand-subtle → border-default). The inner surface sits on top with a slightly smaller radius (~28px) so the gradient reads as a thin frame.
- **Inner surface:** a solid neutral (neutral-primary-soft) or a translucent neutral (a neutral surface token mixed toward transparent) so page patterns subtly show through.
- **Still flat:** no drop shadow — the gradient frame is the emphasis.
- **Gradient media frame:** the same technique wraps media (images/video) — gradient frame + inner radius (~28px) + 1px border-brand-light, optionally with small corner-bracket accents in brand-medium.

## Split / Bento Cards

A single card divided into a **content half** and a **visual half**, separated by a 1px border-default-subtle divider.

- **Desktop:** lay the two regions side-by-side (e.g. content `1.2fr` / visual `0.8fr`). A "visual-first" arrangement swaps the order for rhythm across alternating sections.
- **Mobile:** stack vertically; the divider moves from a left/right border to a top/bottom border.
- **Padding:** generous per region (40–56px desktop, 32–40px mobile); inner regions inherit the rounded corners (~28px inside a framed card).
- **Visual region:** centers a decorative spot illustration (see `icon-shapes.md`) on a faintly tinted translucent surface, optionally with a stat pill.

## Stat Pill & Captions

- **Stat pill:** a full-pill container (9999px) with brand-softer background and border-brand-subtle border, stacking a large value (≈28px, fg-brand) over a small uppercase label (≈11–12px, body-subtle, 0.35px letter-spacing).
- **Visual caption:** small text (12–13px), body-subtle, medium weight, centered, max ~14ch, placed under a card visual.

## Metric Tiles

Small KPI tiles, used inside a card or a row:

- Radius: 16px (default), 1px border-default-subtle, translucent neutral background.
- Content: a value (medium weight, fg-brand) stacked over a label (13px, body-subtle).
- Layout: 1 column on mobile, 3 across at ≥640px, 12–16px gap. Flat (no shadow).

# Color Tokens

## Background Tokens

### Neutral
| Token | Light | Dark |
|---|---|---|
| neutral-primary-soft | #345401 | #345401 |
| neutral-primary | #345401 | #345401 |
| neutral-primary-medium | #3F6400 | #3F6400 |
| neutral-primary-strong | #4A7300 | #4A7300 |
| neutral-secondary-soft | #1F3400 | #1F3400 |
| neutral-secondary | #162700 | #162700 |
| neutral-secondary-medium | #3F6400 | #3F6400 |
| neutral-secondary-strong | #294300 | #294300 |
| neutral-tertiary-soft | #294300 | #294300 |
| neutral-tertiary | #345401 | #345401 |
| neutral-tertiary-medium | #3F6400 | #3F6400 |
| neutral-quaternary | #4A7300 | #4A7300 |
| quaternary-medium | #5C8A0A | #5C8A0A |
| gray | #6FA00F | #6FA00F |

### Brand
| Token | Light | Dark |
|---|---|---|
| brand-softer | #2C3D00 | #2C3D00 |
| brand-soft | #5C8A0A | #5C8A0A |
| brand | #A1DA02 | #A1DA02 |
| brand-medium | #C6ED6B | #C6ED6B |
| brand-strong | #8BBC00 | #8BBC00 |

### Status
| Token | Light | Dark |
|---|---|---|
| success-soft | #0E2A1B | #0E2A1B |
| success | #16A34A | #16A34A |
| success-medium | #14532D | #14532D |
| success-strong | #15803D | #15803D |
| danger-soft | #3A0A14 | #3A0A14 |
| danger | #E11D48 | #E11D48 |
| danger-medium | #4C0519 | #4C0519 |
| danger-strong | #BE123C | #BE123C |
| warning-soft | #3A2408 | #3A2408 |
| warning | #FA9F42 | #FA9F42 |
| warning-medium | #5A3A12 | #5A3A12 |
| warning-strong | #E07F1E | #E07F1E |

### Button Glint (legacy highlight variables — not used in the current flat, shadow-free system; kept for token compatibility)
| Variable | Light | Dark |
|---|---|---|
| `--color-1-400` | rgba(255,255,255,0.25) | rgba(255,255,255,0.12) |
| `--color-1-700` | rgba(0,0,0,0.12) | rgba(0,0,0,0.25) |

### Utility
| Token | Light | Dark |
|---|---|---|
| dark | #122000 | #122000 |
| dark-strong | #0E1A00 | #0E1A00 |
| disabled | #294300 | #294300 |

### Accent
| Token | Value (same both modes) |
|---|---|
| purple | #A855F7 |
| sky | #0EA5E9 |
| teal | #0D9488 |
| pink | #DB2777 |
| cyan | #06B6D4 |
| fuchsia | #C026D3 |
| indigo | #4F46E5 |
| orange | #FA9F42 |

## Text Color Tokens

### Base
| Token | Light | Dark |
|---|---|---|
| white | #FFFFFF | #FFFFFF |
| black | #122000 | #122000 |
| heading | #F4FAE8 | #F4FAE8 |
| body | #C9D6B0 | #C9D6B0 |
| body-subtle | #A3B585 | #A3B585 |

### Brand
| Token | Light | Dark |
|---|---|---|
| fg-brand-subtle | #5C8A0A | #5C8A0A |
| fg-brand | #B6E63A | #B6E63A |
| fg-brand-strong | #C6ED6B | #C6ED6B |

### Status
| Token | Light | Dark |
|---|---|---|
| fg-success | #4ADE80 | #4ADE80 |
| fg-success-strong | #86EFAC | #86EFAC |
| fg-danger | #FB7185 | #FB7185 |
| fg-danger-strong | #FDA4AF | #FDA4AF |
| fg-warning-subtle | #FBBF7A | #FBBF7A |
| fg-warning | #FBC78A | #FBC78A |
| fg-disabled | #7E9456 | #7E9456 |

### Informational / Accent
| Token | Light | Dark |
|---|---|---|
| fg-yellow | #FACC15 | #FACC15 |
| fg-info | #93C5FD | #93C5FD |
| fg-purple | #C4A5F7 | #C4A5F7 |
| fg-purple-strong | #DDD6FE | #DDD6FE |
| fg-cyan | #67E8F9 | #67E8F9 |
| fg-indigo | #A5B4FC | #A5B4FC |
| fg-pink | #F9A8D4 | #F9A8D4 |
| fg-lime | #BEF264 | #BEF264 |

## Border Color Tokens

| Token | Light | Dark |
|---|---|---|
| border-dark | #4A7300 | #4A7300 |
| border-buffer | #1F3400 | #1F3400 |
| border-buffer-medium | #294300 | #294300 |
| border-buffer-strong | #345401 | #345401 |
| border-muted | #294300 | #294300 |
| border-light-subtle | #294300 | #294300 |
| border-light | #3F6400 | #3F6400 |
| border-light-medium | #4A7300 | #4A7300 |
| border-default-subtle | #3F6400 | #3F6400 |
| border-default | #4A7300 | #4A7300 |
| border-default-medium | #5C8A0A | #5C8A0A |
| border-default-strong | #6FA00F | #6FA00F |
| border-success-subtle | #14532D | #14532D |
| border-success | #22C55E | #22C55E |
| border-danger-subtle | #4C0519 | #4C0519 |
| border-danger | #E11D48 | #E11D48 |
| border-warning-subtle | #5A3A12 | #5A3A12 |
| border-warning | #FA9F42 | #FA9F42 |
| border-brand-subtle | #466100 | #466100 |
| border-brand-light | #8BBC00 | #8BBC00 |
| border-brand | #A1DA02 | #A1DA02 |
| border-dark-subtle | #4A7300 | #4A7300 |
| border-purple | #A855F7 | #A855F7 |
| border-orange | #FA9F42 | #FA9F42 |

## Semantic Usage Rules

- Page/section backgrounds: neutral-secondary-soft — applied consistently across the entire app. All sections share the same surface (no alternating between sections).
- Cards over the body background: neutral-primary-soft
- Inputs: neutral-secondary — deliberately darker/recessed than the surface it sits on, so the field always contrasts against cards and sections
- Primary buttons: brand background (lime), with dark text for contrast
- Secondary brand / accent: orange token (used for secondary emphasis, highlights, warning intent)
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
- No manual light/dark value swapping — let the token system resolve the value

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

## Bento Grid

An asymmetric grid of cards with varying spans, used for feature showcases.

- Mix spans: e.g. one wide card + two narrow, or a 2×2 where one cell spans two columns.
- Gap: 24–32px. Cards keep the 32px radius and flat (shadow-free) styling.
- Combine simple cards with split/framed cards (see `cards.md`) for visual rhythm.
- Each tile is self-contained: heading + supporting text + optional visual. Keep to ~5 tiles or fewer per bento cluster.

## Editorial Row Lists (divider-separated)

An alternative to card grids — a vertical list of rows separated by 1px border-default dividers (top border on the list, bottom border per row).

- Each row: a left meta column (number, glyph, or label) + a content column (title + text), side-by-side on desktop (e.g. 80–100px meta / `1fr`), stacked on mobile.
- Generous vertical padding per row (40–48px). No card backgrounds — depth comes from dividers and whitespace.
- Ideal for principles, process steps, or feature explanations where a card grid would feel busy.

## Logo Cloud / Partner Strip

A centered strip of partner/customer logos beneath a small uppercase label.

- Render logos as a single monochrome tint (e.g. masked to a neutral/white token) at reduced opacity (~0.7), brightening to full on hover.
- Lay out as a wrapping flex row with generous gaps (32–56px).
- Separate from surrounding content with a 1px border-default-subtle top border.

## Rules

- Always design mobile-first
- Use layout shifts (column → row) to accommodate horizontal space
- Lists: 24px indentation, 8px vertical gap between items
- Body copy: 16px, 1.625 line-height
- All interactive links follow brand underline/hover protocol

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
- Radius: 16px (default)
- Shadow: none (flat — separate from content via border and contrast)
- Z-index: elevated above content

### Menu List
- Padding: 8px
- Font: 14px, body color, medium weight

### Menu Item
- Layout: inline-flex, vertically centered, full width
- Padding: 8px horizontal, 8px vertical
- Radius: 9999px (full pill)
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
- Menu width: 176px, items have 9999px (pill) radius

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
- Inputs: 16x16px, 8px radius, focus ring in brand-soft
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

# Icon Shapes

> Dependencies: `colors.md`, `radius.md`

## Core Specs

- Box sizing: border-box
- Icon must be perfectly centered (inline-flex, centered both axes)
- Circle: fully rounded (9999px)
- Rounded square: 16px radius (MD/LG/XL), 8px radius (XS/SM)

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

## Decorative Spot Illustrations

Beyond icon containers, the system uses small inline SVG "spot" illustrations (leaves, seedlings, contour rings, route maps, layered canopy) as section and card visuals.

- **Token recipe:** fill shapes with brand-softer, outline with border-brand-subtle (1px), and add accent strokes/points in brand / brand-soft / brand-medium. Keep them flat and line-driven.
- **Monochrome within the green system:** vary only by token shade and opacity — no off-palette colors.
- **Scale modestly:** ≈80–220px, with reduced opacity (0.75–0.9) so they support rather than overpower text.
- Mark purely decorative SVGs `aria-hidden`. Flat only — no drop shadows.

# Inputs

> Dependencies: `colors.md`, `radius.md`

## Core Specs

- **Display:** block, full width
- **Radius:** 9999px (full pill)
- **Border:** 1px, border-default-medium
- **Background:** neutral-secondary — deliberately darker/recessed than the card or section surface the input sits on, so the field always contrasts with its surroundings
- **Shadow:** none (flat)
- **Font:** 14px, heading color
- **Padding:** 20px horizontal, 12px vertical
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
- Background: neutral-secondary (recessed, contrasts with the surface)

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
- Padding: 20px horizontal, 12px vertical unless overridden for icon variants
- Inputs use a recessed background (neutral-secondary) so they contrast against cards and sections
- No arbitrary hex or hardcoded colors

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
- Equal vertical padding on top and bottom (96px) — the spacing between sections must be the same above and below
- A single shared background surface (neutral-secondary-soft) used consistently across the whole app — sections do NOT alternate background colors
- A centered container (max-width 1152px, 24px horizontal padding)
- A section header area with 48px bottom margin
- Section content below

## Motion & Animation

- Prefer CSS-native: `transition`, `animation`, `@keyframes`. Use Motion library only when CSS cannot achieve the behavior.
- Prioritize high-impact orchestrated moments over scattered micro-interactions. A single well-sequenced page-load animation using staggered `animation-delay` delivers more perceived quality than many isolated effects.
- Reserve scroll-triggered and hover transitions for moments that reinforce hierarchy or reward attention.

## Backgrounds & Visual Depth

- Default to layered, atmospheric backgrounds rather than flat solid fills.
- Apply contextual treatments — gradient meshes, noise textures, geometric patterns, layered transparencies, decorative borders, grain overlays — that align with brand aesthetic. Keep the system flat: rely on color contrast and borders for depth, not drop shadows.
- Every decorative element must serve a compositional purpose (depth, separation, or emphasis). No purely ornamental effects competing with content.

## Background Patterns & Overlays

Sections sit on the shared green surface, but each may carry a subtle, brand-tinted **pattern overlay** behind its content to add depth. Overlays are absolutely positioned, `pointer-events: none`, low opacity, and faded with a mask gradient so they never compete with text. Use one per section and vary them across the page for rhythm. Build them only from tokens (border-brand-subtle, brand, brand-soft).

| Pattern | Description | Treatment |
|---|---|---|
| Dot grid | repeating small dots (~28px spacing) in border-brand-subtle | opacity ~0.18, radial mask fading to edges |
| Contour / topo | layered wavy contour lines, like a topographic map | opacity ~0.22, vertical linear mask |
| Arcs | large sweeping curved lines + faint radial brand glows | strokes ~0.25 opacity, radial mask offset to one corner |
| Diagonal grid | 45°/135° crosshatch from border-brand-subtle (~48px cells) | opacity ~0.2, radial mask |
| Grain / noise | fractal-noise texture, page-wide | opacity 0.04–0.05, no mask |

Rules:
- Pattern overlay sits on z-index 0; the content container sits on z-index 1.
- Keep opacity low (≤0.25) and always fade with a mask so edges dissolve.
- Patterns are decorative only — content must read perfectly without them.
- Prefer one consistent grain/noise overlay across the whole page for cohesion.

## Layered Translucent Surfaces

- The page base may carry a very subtle vertical gradient between neutral-secondary-soft and neutral-secondary (deep greens) for atmosphere, staying within the green system.
- Band/panel surfaces may use translucent fills (a neutral surface token mixed toward transparent) so the page gradient and pattern overlays show through — depth without shadows.
- Contrast must hold: text on a translucent surface still has to meet contrast against the resolved color.

## Floating Pill Header / Top Nav

- A fixed top navigation rendered as a single horizontal **pill** (9999px radius): translucent neutral-secondary-soft background (mixed toward transparent), 1px border-default-subtle, holding the logo, centered nav links, and a primary pill button (CTA).
- Nav links become pill-shaped on hover (rounded, translucent neutral-secondary-medium background, body → heading text).
- The bar floats with padding from the viewport edges and stays flat (no shadow), consistent with the system.
- On mobile, collapse the centered links behind a trigger; keep the logo and CTA visible.

## Must

- All sections: consistent 96px vertical padding, equal on top and bottom so the gap between sections is identical above and below
- All sections share the same background surface (neutral-secondary-soft) — no alternating section backgrounds
- All containers: max-width 1152px, centered, 24px horizontal padding
- Section headers: 48px or 64px bottom margin
- Consistent vertical rhythm, no crowded sections
- Layouts readable and properly spaced on both desktop and mobile

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
- Radius: 32px (base)
- Shadow: none (flat — separated from content by the dimmed/blurred backdrop)
- Padding: 20px

## Anatomy

### Header
- Bottom border: border-default
- Top corners rounded (32px)
- Title: 20px, semibold weight, heading color
- Close button: Ghost variant from `buttons.md`, 6px padding

### Body
- Vertical padding: 24px
- Vertical spacing between elements: 24px
- Text: 16px, 1.625 line-height, body color

### Footer
- Top border: border-default
- Bottom corners rounded (32px)

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
- Content: neutral-primary background, 32px radius, no shadow
- Header/Footer separated by border-default borders
- Close button must be present and functional
- Accessibility: `role="dialog"`, implement focus trap in code
- Dark mode automatic via token system

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
- First item: 9999px radius on inline-start side
- Last item: 9999px radius on inline-end side

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

# Radios, Checkboxes & Toggles

> Dependencies: `colors.md`, `radius.md`

## Checkbox

- Size: 16x16px
- Radius: 8px
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

# Border Radius

| Token | Value | Default usage |
|---|---|---|
| base | 32px | Cards, modals, tables, accordions, popovers, large containers/surfaces |
| default | 16px | Dropdown menus, dropdown items, tooltips, medium floating surfaces |
| sm | 8px | Checkboxes, tiny elements |
| full | 9999px | Buttons, inputs, badges, pills, avatars, toggles, chips, nav items, dot indicators |

## Rules

- Cards and large surfaces use the 32px base radius
- Interactive controls (buttons, inputs, badges, chips, nav items) are full pills (9999px)
- Never use arbitrary radius values outside this scale
- Radius must be consistent within each component family

# Shadows

| Token | CSS value |
|---|---|
| shadow-2xs | `0 1px rgb(0 0 0 / 0.05)` |
| shadow-xs | `0 1px 2px 0 rgb(0 0 0 / 0.05)` |
| shadow-sm | `0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)` |
| shadow-md | `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)` |
| shadow-lg | `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)` |
| shadow-xl | `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)` |
| shadow-2xl | `0 25px 50px -12px rgb(0 0 0 / 0.25)` |

## Component Mapping

This is a **flat design system** — cards, buttons, inputs, badges, and all other components use **no shadow**. Elevation and separation are expressed through color contrast (surface vs. card vs. recessed input) and borders, not drop shadows.

| Component type | Token |
|---|---|
| Cards (over body or sections) | none |
| Buttons, inputs, badges, small controls | none |
| Popovers, dropdowns | none |
| Modals, high-priority overlays | none (separation via dimmed backdrop) |

## Rules

- Components do NOT use drop shadows — keep surfaces flat
- Separate surfaces using color contrast and 1px borders instead of elevation
- Use a dimmed/blurred backdrop (not a shadow) to separate modals/overlays from content
- No custom box-shadow values
- The scale tokens above remain defined for reference only; default component usage is `none`

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
- Radius: 9999px (full pill)
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
- Radius: 32px (base)
- Background: brand-softer
- Can also use any alert variant from `alerts.md`

## Rules

- Responsive: hidden on mobile with a trigger mechanism
- Icons: 20x20px, body color (hover: heading color)
- Multi-level menus: indent with 44px left padding
- Spacing follows 8px grid
- Only neutral, brand, or status tokens — no arbitrary colors

# Tables

> Dependencies: `colors.md`, `radius.md`, `shadows.md`

## Wrapper

- Horizontal scroll overflow
- Background: neutral-primary-soft
- Radius: 32px (base)
- Border: 1px, border-default
- Shadow: none (flat)

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
- Top corners: 16px radius
- Transition: colors, 150ms

| State | Appearance |
|---|---|
| Active | fg-brand text, border-brand bottom border |
| Inactive | transparent bottom border; hover → heading text, border-default-strong bottom border |
| Disabled | fg-disabled text, not-allowed cursor |

### 2. Pills

**Tab Item:**
- Padding: 16px horizontal, 10px vertical
- Radius: 9999px (full pill)
- Font weight: medium
- Transition: all, 200ms

| State | Appearance |
|---|---|
| Active | brand background, black text, no shadow |
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
| First item | rounded start (9999px) |
| Last item | rounded end (9999px) |

## Tabs with Icons

- Icon size: 16x16px or 20x20px
- Spacing: 8px right margin
- Layout: inline-flex, centered
- Icons inherit the text color of the tab state

# Tooltips & Popovers

> Dependencies: `colors.md`, `radius.md`, `shadows.md`

## Tooltips

### Core Specs
- Padding: 12px horizontal, 8px vertical
- Font: 14px, medium weight
- Radius: 16px (default)
- Shadow: none (flat)
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
- Radius: 32px (base)
- Shadow: none (flat)
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

- Tooltips: 16px radius
- Popovers: 32px radius
- Dark tooltips: dark background, white text
- Light tooltips/popovers: semantic neutral background + border tokens
- Arrows match parent background color

# Typography

> Dependencies: `colors.md`

## Core Rules

- **Font:** Noto Sans, sans-serif — configured at app level, never override
- **Headings:** semibold weight (600), heading text color
- **Body copy:** body text color, never use brand color for paragraphs longer than one sentence
- **Semantic HTML:** Use `h1`–`h6` in order, never skip levels

## Heading Scale

### Desktop

| Element | Size | Line-height | Letter-spacing | Margin-bottom |
|---|---|---|---|---|
| `h1` | 60px | 1 | -0.8px | 24px |
| `h2` | 44px | 1.15 | — | — |
| `h3` | 36px | 1.2 | — | — |
| `h4` | 30px | 1.25 | — | — |
| `h5` | 24px | 1.5 | — | — |
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
- Line-height: 1.7
- Max width: ~70 characters

### Normal Paragraph
- Size: 16px
- Weight: normal
- Color: body
- Line-height: 1.7
- Max width: ~65 characters

### Small Supporting Copy
- Size: 14px
- Weight: normal
- Color: body
- Line-height: 1.6
- Use only for helper text, legal text, captions, metadata.

## UI Labels

| Context | Size | Weight |
|---|---|---|
| Button labels | 16px | 500 (medium) |
| Input labels | 14px or 16px | 500 (medium) |
| Captions / meta / badges | 12px or 14px | 500 (medium) |

Do not apply paragraph line-height (1.7) to control labels.

## Links

- **Inline links:** Same size as surrounding text, fg-brand color, underline, hover → no underline
- **CTA links:** fg-brand color, medium weight, underline, hover → no underline

## Emphasis

- `<strong>` for high-priority emphasis in body text
- `<em>` for tone emphasis only, not visual hierarchy
- All-caps only for short labels: uppercase, 0.4px letter-spacing, 12px or 14px

## Eyebrow / Kicker Labels

A small label that sits above a heading to categorize a section or card.

- Size: 12px, medium weight (500), uppercase, ~0.4px letter-spacing.
- Color: body-subtle for neutral eyebrows; fg-brand for brand-accented kickers (e.g. card kickers, layer labels).
- Margin-bottom: 16–24px before the heading it introduces.

## Display & Stat Numerals

Oversized numerals for hero stats and headline metrics — larger than `h1`.

- Display stat: fluid size scaling roughly 64px → 120px with the viewport, weight 600, tight line-height (~0.95), negative letter-spacing (~-2px), in fg-brand.
- Compact stat (inside pills/tiles): ~28px, weight 600, fg-brand, with a tiny uppercase label beneath (11–12px, body-subtle).
- Reserve display numerals for genuine emphasis (one or two per page); never use them for body data or tables.

## Accent Headline Words

- Within a heading, a single word or short phrase may switch to fg-brand (or a muted variant) to draw the eye. Limit to one accent per heading; the rest stays in heading color.

## Dark Mode

Hierarchy stays identical. Only color tokens change (resolved automatically by the token system). Size, weight, and spacing remain constant.
