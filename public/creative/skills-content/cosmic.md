# Design System — Agent Instructions

This skill describes the visual design language for all UI output. Every component, layout, and page should follow the design specs in the module files below. These describe *what the design looks like* — you choose how to implement the styles.

## Style
A cosmic, sci-fi inspired dark interface featuring deep navy-to-black backgrounds (#040B17), chamfered/cut-corner buttons with visible wrapper-based borders and glow, glassy translucent cards with glowing edges, the Audiowide typeface throughout, uppercase headings with wide letter-spacing, gradient text with luminous drop-shadow glow on key headings, geometric grid-line background textures, radial glow orbs for visual depth, and gradient-line section separators — engineered for a futuristic, high-tech aesthetic.

## Before Writing Any Code

1. **Read every module that applies.** For a landing page, read at minimum: `layout.md`, `typography.md`, `colors.md`, `buttons.md`, `cards.md`, `shadows.md`, `radius.md`, `borders.md`. Do NOT write JSX until you have loaded all relevant modules.

## Critical Rules

- **Tokens are AGNOSTIC, NOT Tailwind classes:** The tokens defined in the `.md` files (like `neutral-primary-soft`, `heading`, `border-default`) are agnostic design system tokens, NOT literal Tailwind classes. Do not blindly use classes like `bg-neutral-primary-soft` unless you have explicitly mapped them in the CSS/Tailwind configuration. You must implement the mapping yourself.

- **Cross-reference modules.** A card containing buttons must satisfy both `cards.md` AND `buttons.md`.
- **Dark mode is automatic.** The CSS custom properties resolve differently in light/dark via `@media (prefers-color-scheme: dark)`. Never manually swap colors.
- **Every interactive element needs hover, focus, and disabled states** — defined in the relevant module.
- **Use semantic HTML:** proper heading hierarchy (`h1`→`h6`), `<button>` for actions, `<a>` for navigation, ARIA attributes where needed.
- **All sections use the same background** — neutral-primary-soft (#040B17). Never alternate section background colors.
- **Buttons use cut corners** (clip-path chamfers), not border-radius. Borders on clipped buttons MUST use a wrapper element technique — the wrapper has the same clip-path, is colored with the border color, and uses 1px padding so the inner button sits inside creating a visible border that follows the chamfered shape. See `buttons.md`.
- **Gradient text with glow** — h1 and emphasis headings use `linear-gradient(135deg, fg-brand, fg-brand-strong)` with `background-clip: text`, PLUS a parent wrapper with `filter: drop-shadow()` to create a luminous glow around the gradient text. See `typography.md`.
- **Grid-line backgrounds** — hero and key sections use a geometric grid overlay (1px lines at ~15% opacity in border-default color, spaced 64px). See `layout.md`.
- **Glow orbs** — large radial-gradient circles in brand colors at low opacity, placed behind hero/CTA content for ambient depth. See `layout.md`.
- **Section separators** — thin horizontal gradient lines (transparent → border-default-strong → transparent) mark transitions between sections. See `layout.md`.
- **Font:** Audiowide (Google Fonts) for all text — headings and body. No secondary font.
- **Navigation bar** — sticky, glassy (backdrop-filter: blur), with logo, nav links, and a cut-corner CTA button. See `layout.md`.

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

- **Wrapper:** full width, 1px border (border-default color), 4px radius — clips first/last item corners
- **Item separator:** 1px bottom border (border-default) on every item except last

## Trigger (Button)

- **Layout:** flex, space-between, full width
- **Padding:** 20px horizontal, 16px vertical
- **Font:** 14px, medium weight
- **Text color:** heading
- **Background:** neutral-secondary-soft
- **Hover:** neutral-tertiary-soft background
- **Focus:** outline none, 2px ring in brand color
- **Transition:** all, 300ms ease
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
- Transition: transform, 300ms ease

## Variants

### Default (Collapse)
One panel open at a time. Items stacked inside a single shared bordered/rounded wrapper.

### Separated Cards
Each item is independent — has its own 1px border, 4px radius, and shadow-xs + glow-subtle. 8px bottom margin between items. No shared outer border.

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
- **Radius:** 4px (base)
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
- **Rounded square shape:** 4px radius
- **Default size:** 40x40px
- **Image fit:** cover

## Sizes

| Size | Dimensions | Radius |
|---|---|---|
| Extra Small | 18x18px | 2px |
| Small | 24x24px | 2px |
| Base | 32x32px | 4px |
| Large | 44x44px | 4px |
| XL | 56x56px | 4px |
| 2XL | 64x64px | 4px |

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
- **Default radius:** 2px
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

Use 9999px radius instead of 2px on any variant.

## Section Marker Badge

A pill badge used as a section/hero marker — sits above the main heading to provide context (e.g. "v4.0 IS NOW LIVE", "All-in-one Finance"):

- **Layout:** inline-flex, centered, gap 8px
- **Radius:** 9999px (pill)
- **Background:** brand-softer (#081620)
- **Border:** 1px solid border-default-strong (#123650)
- **Text:** fg-brand-strong (#2670AD), 12px, uppercase, letter-spacing 1px, font-weight 500
- **Padding:** 4px horizontal 16px
- **Dot indicator (optional):** a small 6px circle with background fg-brand-strong (#2670AD) inline before the text
- **Margin bottom:** 32px (gap before the heading below)
- Use on hero sections and major CTA sections. Do not overuse.

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
- Border colors should be very subtle against the dark background — prefer border-default (#0A1C2E) or border-default-medium (#0D2740) for most elements
- Dashed borders only for special cases like file dropzones
- Components in the same family must use matching border widths
- Never mix 1px and 2px borders within a single component
- Borders on dark backgrounds create separation through slight luminosity differences, not strong contrast

## Glow Border Effect

For interactive or emphasized elements, borders can have a subtle glow:
- Apply a `box-shadow: 0 0 8px rgba(10,28,46,0.4)` alongside the border for a sci-fi glow effect
- On hover, increase the glow: `box-shadow: 0 0 12px rgba(10,28,46,0.6)`
- Transition: box-shadow 300ms ease

## Usage

| Context | Width |
|---|---|
| Inputs / selects / textareas | 1px default; 2px on focus or error |
| Buttons | 1px for variants that require outlining (rendered via wrapper/pseudo-element around clip-path) |
| Cards / containers | 1px subtle; avoid stacked heavy borders |

---

## Source file: `button-group.md`

# Button Groups

> Dependencies: `buttons.md`, `colors.md`, `radius.md`

## Core Specs

- **Wrapper:** inline-flex, 4px radius, shadow-xs + glow-subtle
- **Children overlap:** -1px left margin on all except first button
- **Buttons inside the group must NOT have individual shadows.** Only the wrapper has a shadow.
- **Cut corners:** The wrapper uses the clip-path chamfer from `buttons.md`. Individual buttons within the group do NOT have their own clip-path — only the wrapper is clipped.

## Anatomy

### Wrapper
- Display: inline-flex
- Radius: 4px (or clip-path chamfer for the group outline)
- Shadow: shadow-xs + glow-subtle

### First Button
- 4px radius on inline-start side only, 0 on inline-end

### Middle Button(s)
- No radius (0 on all corners)

### Last Button
- 4px radius on inline-end side only, 0 on inline-start

### All buttons except first
- -1px left margin to overlap borders

## Rules

- Buttons inside groups follow all styles from `buttons.md` (background, border, focus rings) except individual shadows and individual clip-paths
- Icon-only buttons: 16x16px icon, match height of text buttons

---

## Source file: `buttons.md`

# Buttons

> Dependencies: `colors.md`, `radius.md`, `shadows.md`

## Core Specs (every button except ghost and disabled)

- **Shape:** Cut corners via `clip-path: polygon(10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px)` — creates chamfered/angled corners instead of rounded
- **Border:** 1px solid — rendered via a **wrapper element** (REQUIRED technique, see "Wrapper Border Technique" below). Standard CSS borders are clipped away by `clip-path`, so borders MUST be implemented using the wrapper approach.
- **Shadow:** Applied to the WRAPPER element (not the inner button, since clip-path clips box-shadows too). shadow-xs combined with a subtle brand glow: `0 0 15px rgba(10,28,46,0.4), 0 0 30px rgba(6,18,29,0.15)`
- **Glint effect:** Every button except ghost and disabled gets a combined box-shadow on the wrapper that layers the base shadow with an inset top-edge highlight and a subtle outer glow:
  - `var(--shadow-xs), inset var(--color-1-400) 0 6px 0px -5px, var(--color-1-700) 0 4px 10px -5px, 0 0 20px rgba(10,28,46,0.4)`
- **Font weight:** 500 (medium)
- **Font:** Audiowide
- **Text transform:** uppercase
- **Letter-spacing:** 1px
- **Box sizing:** border-box
- **Transition:** all 300ms ease — covers background, border-color, box-shadow, transform, and color on hover
- **Hover transform:** translateY(-1px) for subtle lift effect
- **Hover glow:** increase box-shadow glow intensity on hover (e.g. `0 0 20px rgba(6,18,29,0.5), 0 0 40px rgba(6,18,29,0.25)`)

## Cut Corner Implementation

All buttons use a clip-path polygon to create chamfered corners. The cut size scales with button size:

| Size | Corner cut |
|---|---|
| Extra small | 6px |
| Small | 8px |
| Base (default) | 10px |
| Large | 12px |
| Extra large | 14px |

### Wrapper Border Technique (REQUIRED)

`clip-path` clips everything — borders, box-shadows, and outlines are all invisible on a clipped element. The ONLY reliable way to render visible borders on chamfered buttons is the **wrapper technique**:

1. Create an outer wrapper element (`<div>`) with the **same** `clip-path` polygon as the button
2. Set the wrapper's `background` to the **border color** (e.g. border-default-strong #123650 for brand, border-default-medium #0D2740 for secondary)
3. Set the wrapper's `padding: 1px` (this is the border width — the 1px gap between wrapper and inner becomes the visible border)
4. Place the actual button/link inside the wrapper with the **same** `clip-path` and its own background color
5. Apply all box-shadows and the glint effect to the **wrapper**, not the inner button (since clip-path on the inner would clip them)

On hover:
- The wrapper's `background` (border color) brightens (e.g. brand → border-brand #1A5080, secondary → border-default-strong #123650)
- The wrapper's box-shadow glow intensifies
- The wrapper gets `transform: translateY(-1px)` for lift
- The inner button's background shifts to its hover color

This produces a clearly visible glowing chamfered border that is the signature look of this design system. Do NOT skip this — buttons without the wrapper look flat and broken.

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
- **Background (inner):** brand token (#06121D)
- **Wrapper border color:** border-default-strong (#123650)
- **Wrapper border color on hover:** border-brand (#1A5080)
- **Text:** heading color (#E2E8F0)
- **Hover (inner):** brand-soft (#0A1E30) background, increased glow shadow on wrapper, wrapper translateY(-1px)
- **Focus ring:** 4px, brand-medium color
- **Glint:** yes (on wrapper)

### Secondary
- **Background (inner):** neutral-secondary-medium (#071420)
- **Wrapper border color:** border-default-medium (#0D2740)
- **Wrapper border color on hover:** border-default-strong (#123650)
- **Text:** body color
- **Hover (inner):** neutral-tertiary-medium (#0C2236) background, heading text color, wrapper translateY(-1px), subtle glow increase on wrapper
- **Focus ring:** 4px, neutral-tertiary color
- **Glint:** yes (on wrapper)

### Tertiary
- **Background:** neutral-primary-soft
- **Border:** border-default
- **Text:** body color
- **Hover:** neutral-secondary-medium background, heading text color, translateY(-1px)
- **Focus ring:** 4px, neutral-tertiary-soft color
- **Glint:** yes

### Success
- **Background:** success token
- **Border:** transparent
- **Text:** white
- **Hover:** success-strong background, translateY(-1px), glow increase
- **Focus ring:** 4px, success-medium color
- **Glint:** yes

### Danger
- **Background:** danger token
- **Border:** transparent
- **Text:** white
- **Hover:** danger-strong background, translateY(-1px), glow increase
- **Focus ring:** 4px, danger-medium color
- **Glint:** yes

### Warning
- **Background:** warning token
- **Border:** transparent
- **Text:** white
- **Hover:** warning-strong background, translateY(-1px), glow increase
- **Focus ring:** 4px, warning-medium color
- **Glint:** yes

### Dark
- **Background:** dark token
- **Border:** transparent
- **Text:** white
- **Hover:** dark-strong background, translateY(-1px), glow increase
- **Focus ring:** 4px, neutral-tertiary color
- **Glint:** yes

### Ghost (NO shadow, NO glint, NO cut corners)
- **Background:** transparent
- **Border:** transparent
- **Text:** heading color
- **Hover:** neutral-secondary-medium background, translateY(-1px)
- **Focus ring:** 4px, neutral-tertiary color
- **No shadow, no glint effect**
- **Uses standard border-radius (base) instead of clip-path**

### Disabled (NO shadow, NO glint)
- **Background:** disabled token
- **Border:** border-default-medium
- **Text:** fg-disabled color
- **Cursor:** not-allowed
- **No hover, no focus, no shadow, no glint**

## Hover Transition Details

All interactive buttons (not disabled) have these hover behaviors:
- **Background:** shifts to the hover variant color (300ms ease)
- **Box-shadow:** glow intensifies (300ms ease)
- **Transform:** translateY(-1px) for a lift effect (300ms ease)
- **Border-color:** may brighten subtly (300ms ease)
- On mouse leave, all properties transition back smoothly

## Icons in Buttons

- Icon size: 16x16px
- Spacing: 8px gap between icon and label
- Layout: inline-flex, vertically centered

---

## Source file: `cards.md`

# Cards

> Dependencies: `colors.md`, `radius.md`, `shadows.md`, `typography.md`

## Core Specs

- **Background:** neutral-primary-medium (#071420) at 60-80% opacity for a glassy/translucent effect — e.g. `rgba(7,20,32,0.7)`
- **Backdrop filter:** `backdrop-filter: blur(12px)` and `-webkit-backdrop-filter: blur(12px)` for frosted glass appearance
- **Shape:** Cut corners via `clip-path: polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 12px)` — chamfered/angled corners matching the button aesthetic
- **Border:** 1px solid — rendered via a **wrapper element** (same technique as buttons). Standard CSS borders are clipped away by `clip-path`, so borders MUST be implemented using the wrapper approach.
- **Shadow:** Applied to the WRAPPER element (not the inner card, since clip-path clips box-shadows too). shadow-xs + glow-subtle: `0 1px 2px 0 rgb(0 0 0 / 0.2), 0 0 10px rgba(6,18,29,0.2)`
- **Transition:** `all 300ms ease` on every card

## Card Heading

- Desktop: 20px, medium weight, heading color
- Mobile: 16px, medium weight, heading color
- Never skip heading levels — the page hierarchy must logically arrive at the card heading level.

## States

### Static Card (no interactivity)
- Background: `rgba(7,20,32,0.7)` (neutral-primary-medium at ~70% opacity)
- Backdrop filter: blur(12px)
- Shape: cut corners (same clip-path as Core Specs)
- Border: 1px solid border-default (#0A1C2E) via wrapper technique
- Shadow: `0 1px 2px 0 rgb(0 0 0 / 0.2), 0 0 10px rgba(6,18,29,0.2)` on wrapper
- No hover styles. Non-interactive cards must NOT have hover background changes.

### Interactive Card (clickable / hoverable)
- Same base styles as static card
- **Hover border:** brightens to border-default-medium (#0D2740)
- **Hover background:** opacity increases to ~90%: `rgba(7,20,32,0.9)`
- **Hover shadow:** steps up with stronger glow: `0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.25), 0 0 15px rgba(10,28,46,0.4), 0 0 30px rgba(6,18,29,0.15)`
- Transition: all 300ms ease
- Cursor: pointer

### Highlighted Card (emphasis variant)
Use when one card should stand out in a set (e.g. featured pricing tier):
- **Background:** `rgba(10,30,48,0.8)` — slightly brighter than standard
- **Border:** 1px solid border-default-strong (#123650) — brighter than default
- **Shadow:** shadow-md + glow-brand: `0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.25), 0 0 20px rgba(10,28,46,0.5), 0 0 40px rgba(6,18,29,0.2)`
- **Hover border:** border-brand (#1A5080)
- **Hover shadow:** glow intensifies: `0 0 25px rgba(26,80,128,0.4), 0 0 50px rgba(10,28,46,0.25)`
- **Top accent line (optional):** a 2px-high gradient line across the card top: `linear-gradient(90deg, fg-brand, fg-brand-strong, fg-brand)` positioned `top: -1px, left: -1px, right: -1px`

## Cut Corner Implementation

All cards use a clip-path polygon to create chamfered corners (12px cut), matching the button aesthetic:

```
clip-path: polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 12px)
```

### Wrapper Border Technique (REQUIRED)

`clip-path` clips everything — borders, box-shadows, and outlines are all invisible on a clipped element. The ONLY reliable way to render visible borders and shadows on chamfered cards is the **wrapper technique** (same as buttons):

1. Create an outer wrapper element (`<div>`) with the **same** `clip-path` polygon as the card
2. Set the wrapper's `background` to the **border color** (e.g. border-default #0A1C2E)
3. Set the wrapper's `padding: 1px` (this is the border width — the 1px gap between wrapper and inner becomes the visible border)
4. Place the actual card content inside the wrapper with the **same** `clip-path` and its own background color
5. Apply all box-shadows to the **wrapper**, not the inner card (since clip-path on the inner would clip them)

On hover (interactive cards):
- The wrapper's `background` (border color) brightens
- The wrapper's box-shadow glow intensifies
- The inner card's background shifts to its hover color

This produces chamfered borders consistent with the button design. Do NOT skip this — cards without the wrapper look flat and broken.

## Rules

- Background: neutral-primary-medium at reduced opacity for glass effect
- Backdrop filter: blur(12px) + -webkit-backdrop-filter: blur(12px)
- Shape: cut corners via clip-path (12px chamfer) — NO border-radius
- Border: 1px via wrapper technique (clip-path clips standard borders)
- Shadow: shadow-xs + glow-subtle, applied to wrapper element
- Interactive hover: increased opacity, brighter border, stronger glow (300ms ease)
- Non-interactive: no hover styles
- Highlighted cards use brighter borders and stronger glows to stand out

---

## Source file: `colors.md`

# Color Tokens


## Background Tokens

### Neutral
| Token | Light | Dark |
|---|---|---|
| neutral-primary-soft | #040B17 | #040B17 |
| neutral-primary | #040B17 | #040B17 |
| neutral-primary-medium | #071420 | #071420 |
| neutral-primary-strong | #0C2236 | #0C2236 |
| neutral-secondary-soft | #040B17 | #040B17 |
| neutral-secondary | #040B17 | #040B17 |
| neutral-secondary-medium | #071420 | #071420 |
| neutral-secondary-strong | #0C2236 | #0C2236 |
| neutral-tertiary-soft | #071420 | #071420 |
| neutral-tertiary | #0A1C2E | #0A1C2E |
| neutral-tertiary-medium | #0C2236 | #0C2236 |
| neutral-quaternary | #0F2A42 | #0F2A42 |
| quaternary-medium | #123650 | #123650 |
| gray | #1A4A6A | #1A4A6A |

### Brand
| Token | Light | Dark |
|---|---|---|
| brand-softer | #081620 | #081620 |
| brand-soft | #0A1E30 | #0A1E30 |
| brand | #06121D | #06121D |
| brand-medium | #0A1E30 | #0A1E30 |
| brand-strong | #040E17 | #040E17 |

### Status
| Token | Light | Dark |
|---|---|---|
| success-soft | #021A14 | #021A14 |
| success | #007A55 | #009966 |
| success-medium | #003D2A | #003D2A |
| success-strong | #006045 | #007A55 |
| danger-soft | #2A0010 | #2A0010 |
| danger | #C70036 | #C70036 |
| danger-medium | #550020 | #550020 |
| danger-strong | #A50036 | #A50036 |
| warning-soft | #2A1508 | #2A1508 |
| warning | #F97316 | #F97316 |
| warning-medium | #3A1808 | #3A1808 |
| warning-strong | #C2410C | #C2410C |

### Button Glint (CSS custom properties, used for the glint box-shadow effect)
| Variable | Light | Dark |
|---|---|---|
| `--color-1-400` | rgba(255,255,255,0.06) | rgba(255,255,255,0.06) |
| `--color-1-700` | rgba(6,18,29,0.4) | rgba(6,18,29,0.4) |

### Utility
| Token | Light | Dark |
|---|---|---|
| dark | #040B17 | #040B17 |
| dark-strong | #020710 | #071420 |
| disabled | #071420 | #071420 |

### Accent
| Token | Value (same both modes) |
|---|---|
| purple | #6366F1 |
| sky | #0EA5E9 |
| teal | #0D9488 |
| pink | #DB2777 |
| cyan | #06B6D4 |
| fuchsia | #C026D3 |
| indigo | #4F46E5 |
| orange | #FB923C |

## Text Color Tokens

### Base
| Token | Light | Dark |
|---|---|---|
| white | #FFFFFF | #FFFFFF |
| black | #040B17 | #040B17 |
| heading | #E2E8F0 | #E2E8F0 |
| body | #7A8BA0 | #7A8BA0 |
| body-subtle | #5A6B80 | #5A6B80 |

### Brand
| Token | Light | Dark |
|---|---|---|
| fg-brand-subtle | #0D2A44 | #0D2A44 |
| fg-brand | #1A5080 | #1A5080 |
| fg-brand-strong | #2670AD | #2670AD |

### Status
| Token | Light | Dark |
|---|---|---|
| fg-success | #009966 | #009966 |
| fg-success-strong | #10B981 | #10B981 |
| fg-danger | #F43F5E | #F43F5E |
| fg-danger-strong | #F87171 | #F87171 |
| fg-warning-subtle | #F97316 | #F97316 |
| fg-warning | #FBBF24 | #FBBF24 |
| fg-disabled | #3A4A5A | #3A4A5A |

### Informational / Accent
| Token | Light | Dark |
|---|---|---|
| fg-yellow | #FACC15 | #FACC15 |
| fg-info | #93C5FD | #93C5FD |
| fg-purple | #A855F7 | #A855F7 |
| fg-purple-strong | #DDD6FE | #DDD6FE |
| fg-cyan | #06B6D4 | #06B6D4 |
| fg-indigo | #818CF8 | #818CF8 |
| fg-pink | #F472B6 | #F472B6 |
| fg-lime | #84CC16 | #84CC16 |

## Border Color Tokens

| Token | Light | Dark |
|---|---|---|
| border-dark | #0A1C2E | #0A1C2E |
| border-buffer | #040B17 | #040B17 |
| border-buffer-medium | #071420 | #071420 |
| border-buffer-strong | #0A1C2E | #0A1C2E |
| border-muted | #050D18 | #050D18 |
| border-light-subtle | #061019 | #061019 |
| border-light | #071420 | #071420 |
| border-light-medium | #0A1C2E | #0A1C2E |
| border-default-subtle | #061019 | #061019 |
| border-default | #0A1C2E | #0A1C2E |
| border-default-medium | #0D2740 | #0D2740 |
| border-default-strong | #123650 | #123650 |
| border-success-subtle | #003D2A | #003D2A |
| border-success | #006045 | #006045 |
| border-danger-subtle | #550020 | #550020 |
| border-danger | #C70036 | #C70036 |
| border-warning-subtle | #3A1808 | #3A1808 |
| border-warning | #F97316 | #F97316 |
| border-brand-subtle | #0A1E30 | #0A1E30 |
| border-brand-light | #06121D | #06121D |
| border-brand | #1A5080 | #1A5080 |
| border-dark-subtle | #0A1C2E | #0A1C2E |
| border-purple | #6366F1 | #6366F1 |
| border-orange | #FB923C | #FB923C |

## Semantic Usage Rules

- Page/section backgrounds: neutral-primary-soft (#040B17) — same color for ALL sections, never alternate
- Section depth: use subtle linear gradients from neutral-primary (#040B17) to neutral-primary-medium (#071420) for visual layering
- Primary buttons: brand background with cut-corner clip-path and subtle border glow
- Headings: heading text color (#E2E8F0); h1 elements use a linear gradient from fg-brand (#1A5080) to fg-brand-strong (#2670AD) via background-clip text
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
- No alternating section background colors — all sections use the same neutral-primary-soft (#040B17) base

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
- Background: neutral-primary-medium at 80% opacity for glassy effect
- Backdrop filter: blur(12px)
- Border: 1px, border-default
- Radius: 4px (base)
- Shadow: shadow-lg + glow-subtle
- Z-index: elevated above content

### Menu List
- Padding: 8px
- Font: 14px, body color, medium weight

### Menu Item
- Layout: inline-flex, vertically centered, full width
- Padding: 8px horizontal, 8px vertical
- Radius: 2px (default)
- Hover: neutral-tertiary-medium background, heading text
- Transition: all, 300ms ease

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
- Menu width: 176px, items have 2px radius

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
- Rounded square: 4px radius (MD/LG/XL), 2px radius (XS/SM)

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
- **Radius:** 4px (base)
- **Border:** 1px, border-default-medium
- **Background:** neutral-secondary-medium
- **Shadow:** shadow-xs
- **Font:** 14px, heading color
- **Padding:** 12px horizontal, 10px vertical
- **Placeholder:** body color
- **Transition:** all properties, 300ms ease

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
- Background: neutral-primary-soft (#040B17) — ALL sections use the same base color, never alternate
- A subtle linear gradient overlay from neutral-primary (#040B17) to neutral-primary-medium (#071420) for depth
- A centered container (max-width 1152px, 24px horizontal padding)
- A section header area with 48px bottom margin
- Section content below

## Motion & Animation

- Prefer CSS-native: `transition`, `animation`, `@keyframes`. Use Motion library only when CSS cannot achieve the behavior.
- Prioritize high-impact orchestrated moments over scattered micro-interactions. A single well-sequenced page-load animation using staggered `animation-delay` delivers more perceived quality than many isolated effects.
- Reserve scroll-triggered and hover transitions for moments that reinforce hierarchy or reward attention.
- Default transition timing: 300ms ease for interactive elements (buttons, cards, links)
- Hover effects should feel responsive but smooth — never instant, never sluggish
- Consider subtle glow pulsing animations on key interactive elements at rest

## Backgrounds & Visual Depth

- All sections use the same base background: neutral-primary-soft (#040B17)
- Depth is created through subtle gradients (linear-gradient from #040B17 to #071420), not through alternating solid colors
- Apply contextual treatments — gradient meshes, noise textures, geometric grid patterns, layered transparencies, dramatic glow shadows, fine-line decorative borders, grain overlays — that align with the cosmic sci-fi aesthetic
- Glassy/translucent card surfaces (backdrop-filter: blur + low-opacity backgrounds) create depth without introducing new background colors
- Every decorative element must serve a compositional purpose (depth, separation, or emphasis). No purely ornamental effects competing with content.

## Grid-Line Background Pattern

Apply a geometric grid overlay to hero sections and other key areas for the sci-fi "digital" feel:

- **Implementation:** a full-size absolutely-positioned `<div>` covering the section with `pointer-events: none`
- **Horizontal lines:** `linear-gradient(rgba(10,28,46,0.15) 1px, transparent 1px)`
- **Vertical lines:** `linear-gradient(90deg, rgba(10,28,46,0.15) 1px, transparent 1px)`
- **Grid size:** `background-size: 64px 64px`
- **Opacity:** the lines use border-default (#0A1C2E) at 15% opacity — visible enough to add texture, subtle enough not to compete with content
- Use on: hero sections, CTA sections. Not needed on every section.

## Radial Glow Orbs

Large soft radial gradients placed behind content to create ambient depth:

- **Size:** 600–800px diameter circle
- **Color:** `radial-gradient(circle, rgba(26,80,128,0.15-0.18) 0%, transparent 70%)` — using fg-brand color at very low opacity
- **Position:** centered behind hero headings, CTA sections, or other focal points
- **Animation:** optional slow pulse: opacity oscillates between 0.3 and 0.7 over ~5s (`animation: subtleGlow 5s ease-in-out infinite`)
- **Z-index:** behind content, `pointer-events: none`

## Horizontal Glow Line

A thin luminous line that runs horizontally across a section for dramatic effect:

- **Height:** 1px
- **Background:** `linear-gradient(90deg, transparent, rgba(26,80,128,0.3) 30%, rgba(38,112,173,0.5) 50%, rgba(26,80,128,0.3) 70%, transparent)`
- **Position:** absolute, spanning full width at ~55% vertical position in the hero
- Use sparingly — one per hero or CTA section at most.

## Section Separator Lines

Thin gradient lines at section boundaries to visually separate without alternating backgrounds:

- **Height:** 1px
- **Background:** `linear-gradient(90deg, transparent, #0A1C2E 30%, #123650 50%, #0A1C2E 70%, transparent)`
- **Position:** absolute, top: 0 of a section (marks the start of a new section)
- Apply to feature sections, pricing sections — wherever a clean transition is needed.

## Star Field

Twinkling point-lights scattered across hero/CTA sections for a living cosmic night-sky:

- **Implementation:** absolutely-positioned child `<div>`s inside a container with `position: absolute; inset: 0; pointer-events: none`
- **Each star:** a small circle (1–2px width/height), `border-radius: 50%`
- **Color:** `rgba(38,112,173,0.8)` with a matching `box-shadow: 0 0 Npx rgba(38,112,173,0.4)` where N = star size × 3
- **Count:** 15–20 stars per section, randomly scattered with varied positions
- **Animation:** `twinkle` keyframe — opacity fades 0 → 1 → 0, duration 2.5–4.5s, each star gets a unique `animation-delay` for organic stagger
- **Z-index:** behind content, `pointer-events: none`
- Use on: hero, CTA sections. Not needed on every section.

## Hex Grid Overlay

An SVG hexagonal grid pattern layered on the hero for cyberpunk texture:

- **Implementation:** absolutely-positioned `<svg>` with `width: 100%; height: 100%` filling the section
- **Pattern:** SVG `<pattern>` element with two hexagon `<path>` shapes tiled at 56×100 units, scaled 1.5×
- **Stroke:** `rgba(26,80,128,0.5)` at `stroke-width: 0.5`
- **Container opacity:** 0.04 — extremely subtle, adds texture without competing with content
- **Z-index:** behind content, `pointer-events: none`
- Use on: hero section only. Not needed elsewhere.

## Scanline Overlay

CRT-style horizontal scanlines that scroll slowly for retro-futuristic atmosphere:

- **Implementation:** absolutely-positioned `<div>` covering the section with `overflow: hidden`
- **Lines:** `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)`
- **Container opacity:** 0.03 — barely perceptible, adds subliminal texture
- **Animation:** `scanline` keyframe — `translateY(-100%)` to `translateY(100vh)`, duration ~8s, linear, infinite
- **Z-index:** above background layers but behind content, `pointer-events: none`
- Use on: hero section only.

## Data Streams

Vertical flowing light beams that descend through the hero like digital data transmission:

- **Implementation:** absolutely-positioned `<div>`s inside an overflow-hidden container
- **Each stream:** 1px wide, ~60% of section height
- **Background:** `linear-gradient(180deg, transparent, fg-brand-strong, transparent)`
- **Count:** 5–6 streams at varied horizontal positions
- **Opacity:** 0.04–0.08 per stream — very subtle
- **Animation:** `dataStream` keyframe — translateY from -100% to 100%, duration 5–9s, linear, each stream with unique delay
- **Z-index:** behind content, `pointer-events: none`
- Use on: hero section only.

## Pulse Ring

An expanding/fading ring that pulses outward from the hero center for dramatic depth:

- **Implementation:** absolutely-positioned `<div>` centered in the section
- **Size:** ~600px diameter circle, `border-radius: 50%`
- **Border:** `1px solid rgba(26,80,128,0.15)`
- **Background:** none (border-only ring)
- **Animation:** `pulseRing` keyframe — scales from 0.8 to 1.2 while opacity fades from 0.4 to 0, duration ~4s, ease-out, infinite
- **Z-index:** behind content, `pointer-events: none`
- Use on: hero section center. One per page at most.

## Multi-Orb Composition

Extend the single "Radial Glow Orbs" pattern into a layered multi-orb system for richer depth:

- **Primary orb:** 800px, brand color `rgba(26,80,128,0.2)`, centered top of hero, `orbFloat` animation (8s, translates and scales gently)
- **Secondary orb:** 500px, cyan tint `rgba(6,182,212,0.08)`, offset left at ~30%, `orbFloat2` animation (12s, different movement path)
- **Tertiary orb:** 400px, brand `rgba(38,112,173,0.1)`, offset right, `orbFloat2` animation (10s, 2s delay)
- Each orb uses a unique animation with slightly different translate offsets and scale values to avoid synchronized movement
- All: `pointer-events: none`, behind content

## Corner Accents

Cyberpunk-style decorative corner brackets that frame a section:

- **Implementation:** four small SVGs positioned at each corner of a relatively-positioned container (inset 24–48px from section edges)
- **Each corner:** an L-shaped 2px line + a small filled triangle at 15% opacity
- **Size:** 50–80px per corner piece
- **Color:** border-default-medium (#0D2740) or border-default-strong (#123650)
- **Z-index:** decorative layer, `pointer-events: none`
- Use on: hero section, CTA section. Creates a "targeting reticle" framing effect.

## Animated Glow Lines

Enhanced version of the Horizontal Glow Line with animation:

- **Background:** same gradient as Horizontal Glow Line but with `background-size: 200% 1px`
- **Animation:** `glowLine` keyframe — background-position slides from -100% to 100% while opacity pulses 0.3 → 0.8 → 0.3, duration ~6s, ease-in-out, infinite
- A secondary glow line at ~30% vertical position can use a cyan tint `rgba(6,182,212,0.15)` at 50% opacity for color variety
- Use on: hero section. At most 2 animated lines per section.

## Navigation Bar

Sticky top navigation with a glassy/frosted appearance:

- **Position:** `sticky`, `top: 0`, `z-index: 50`
- **Background:** `rgba(4,11,23,0.9)` (neutral-primary-soft at 90% opacity)
- **Backdrop filter:** `blur(16px)` + `-webkit-backdrop-filter: blur(16px)`
- **Border bottom:** 1px solid border-default (#0A1C2E)
- **Height:** 64px
- **Container:** max-width 1152px centered, 24px horizontal padding
- **Layout:** flex, space-between, vertically centered
- **Left:** logo (brand gradient text or icon + text)
- **Right:** nav links (12-14px, uppercase, letter-spacing 1px, body color, hover → heading color) + CTA button (cut-corner brand button, small size)
- **Mobile:** hamburger menu that reveals nav links in a dropdown panel with the same glassy background

## Must

- All sections: consistent 96px vertical padding
- All sections: same neutral-primary-soft (#040B17) background — no alternating
- All containers: max-width 1152px, centered, 24px horizontal padding
- Section headers: 48px or 64px bottom margin
- Consistent vertical rhythm, no crowded sections
- Layouts readable and properly spaced on both desktop and mobile
- Hero sections: layer grid-line background + hex grid + star field + data streams + scanlines + multi-orb composition + pulse ring + corner accents + animated glow lines for maximum cosmic depth
- CTA sections: use star field + glow orbs + corner accents + glow lines for depth
- Section boundaries: use gradient separator lines where visual breaks are needed
- All decorative overlays: `pointer-events: none`, behind content z-index, opacity kept low enough not to compete with text

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
- Background: black at 60% opacity
- Backdrop blur: 8px

### Content Container
- Background: neutral-primary-medium at 90% opacity for subtle glass effect
- Backdrop filter: blur(12px)
- Radius: 4px (base)
- Shadow: shadow-xl
- Padding: 20px

## Anatomy

### Header
- Bottom border: border-default
- Top corners rounded (4px)
- Title: 20px, semibold weight, heading color
- Close button: Ghost variant from `buttons.md`, 6px padding

### Body
- Vertical padding: 24px
- Vertical spacing between elements: 24px
- Text: 16px, 1.625 line-height, body color

### Footer
- Top border: border-default
- Bottom corners rounded (4px)

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
- Content: neutral-primary-medium background (glass effect), 4px radius, shadow-xl
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
- Transition: all, 300ms ease

## Previous / Next Buttons

- Horizontal padding: 12px, height: 36px
- First item: 4px radius on inline-start side
- Last item: 4px radius on inline-end side

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
- Radius: 0px (sharp corners for cosmic aesthetic)
- Border: 1px, border-default-medium
- Background: neutral-secondary-medium
- Focus ring: 2px, brand-soft
- Transition: all, 300ms ease

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
- Transition: all, 300ms ease

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
- Transition: all, 300ms ease

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
| base | 4px | Cards, inputs, modals, sections — minimal rounding for a sharp sci-fi aesthetic |
| default | 2px | Badges, tooltips, dropdown items, small controls |
| sm | 0px | Checkboxes, tiny elements — fully sharp corners |
| full | 9999px | Pills, avatars, toggles, dot indicators |

## Cut Corner (Chamfer) System

Buttons and select interactive elements use clip-path chamfered corners instead of border-radius. This creates the signature angled/cut look of the cosmic design.

| Context | Corner cut size |
|---|---|
| Buttons (base) | 10px |
| Buttons (small) | 8px |
| Buttons (large) | 12px |
| Cards (optional) | 8px chamfer or 4px radius |
| Hero elements | 14px chamfer |

## Rules

- 4px is the default border-radius across the product for a sharp, technical look
- Buttons use clip-path chamfers instead of border-radius (see `buttons.md`)
- Never use arbitrary radius values outside this scale
- Radius must be consistent within each component family
- Prefer sharp, minimal rounding — the cosmic aesthetic is angular, not soft

---

## Source file: `shadows.md`

# Shadows

| Token | CSS value |
|---|---|
| shadow-2xs | `0 1px rgb(0 0 0 / 0.15)` |
| shadow-xs | `0 1px 2px 0 rgb(0 0 0 / 0.2)` |
| shadow-sm | `0 1px 3px 0 rgb(0 0 0 / 0.25), 0 1px 2px -1px rgb(0 0 0 / 0.2)` |
| shadow-md | `0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.25)` |
| shadow-lg | `0 10px 15px -3px rgb(0 0 0 / 0.3), 0 4px 6px -4px rgb(0 0 0 / 0.25)` |
| shadow-xl | `0 20px 25px -5px rgb(0 0 0 / 0.35), 0 8px 10px -6px rgb(0 0 0 / 0.3)` |
| shadow-2xl | `0 25px 50px -12px rgb(0 0 0 / 0.5)` |

## Glow Shadows

For interactive and elevated elements, use glow effects that complement the cosmic dark theme:

| Token | CSS value |
|---|---|
| glow-brand | `0 0 15px rgba(6,18,29,0.3), 0 0 30px rgba(6,18,29,0.15)` |
| glow-brand-hover | `0 0 20px rgba(6,18,29,0.5), 0 0 40px rgba(6,18,29,0.25)` |
| glow-subtle | `0 0 10px rgba(6,18,29,0.2)` |
| glow-border | `0 0 8px rgba(10,28,46,0.4)` |

## Component Mapping

| Component type | Token |
|---|---|
| Subtle separators, tiny UI details | shadow-2xs or shadow-xs |
| Inputs, buttons, small controls, lightweight cards | shadow-xs or shadow-sm + glow-subtle |
| Standard cards, popovers, dropdowns | shadow-md + glow-subtle |
| Prominent cards, sticky surfaces | shadow-lg + glow-brand |
| Modals, high-priority overlays | shadow-xl |
| Hero overlays, top-level emphasis (sparingly) | shadow-2xl + glow-brand |

## Text Glow (filter: drop-shadow)

For gradient-text headings (which use `background-clip: text` + `color: transparent`), traditional `text-shadow` does not work. Use `filter: drop-shadow()` on a **parent wrapper** element:

| Token | CSS value (applied via `filter` on wrapper) |
|---|---|
| text-glow-brand | `drop-shadow(0 0 30px rgba(38,112,173,0.6)) drop-shadow(0 0 60px rgba(26,80,128,0.3))` |
| text-glow-brand-strong | `drop-shadow(0 0 40px rgba(38,112,173,0.7)) drop-shadow(0 0 80px rgba(26,80,128,0.4))` |

Use text-glow-brand on section headings; use text-glow-brand-strong on hero/CTA headings for extra emphasis.

## Rules

- Use only these tokens — no custom box-shadow values except glow combinations
- Keep elevation steps intentional; avoid jumping multiple levels
- Components in the same family share the same baseline elevation
- Hover/focus on interactive elevated elements: step up by one level and increase glow intensity
- Never stack multiple shadow tokens on one element (glow tokens can be combined with one shadow token)
- Never use shadow-xl/shadow-2xl for dense list items or body containers
- On dark backgrounds, shadows are subtle — glow effects provide more visual impact than traditional drop shadows
- Gradient-text glow MUST use `filter: drop-shadow()` on a wrapper, NOT `text-shadow` (which doesn't work with transparent text color)

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
- Radius: 4px (base)
- Hover: neutral-secondary-medium background
- Transition: all, 300ms ease
- Icon: 20x20px, body color, hover → heading color, 300ms transition
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
- Radius: 4px (base)
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
- Radius: 4px (base)
- Border: 1px, border-default
- Shadow: shadow-xs + glow-subtle

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
- Transitions: all properties, 300ms ease

## Variants

### 1. Underline (Default)

**Wrapper:** bottom border, border-default

**Tab Item:**
- Padding: 16px horizontal, 16px vertical
- Bottom border: 2px, transparent
- Top corners: 4px radius
- Transition: all, 300ms ease

| State | Appearance |
|---|---|
| Active | fg-brand text, border-brand bottom border |
| Inactive | transparent bottom border; hover → heading text, border-default-strong bottom border |
| Disabled | fg-disabled text, not-allowed cursor |

### 2. Pills

**Tab Item:**
- Padding: 16px horizontal, 10px vertical
- Radius: 4px (base)
- Font weight: medium
- Transition: all, 300ms ease

| State | Appearance |
|---|---|
| Active | brand background, heading text, shadow-sm + glow-subtle |
| Inactive | body text; hover → neutral-secondary-soft background, heading text |
| Disabled | fg-disabled text, not-allowed cursor |

### 3. Full Width

Children overlap with -1px left margin on all except first.

**Tab Item:**
- Full width, centered text
- Padding: 16px horizontal, 16px vertical
- Background: neutral-primary-soft
- Border: 1px, border-default
- Transition: all, 300ms ease
- Hover: neutral-secondary-medium background, heading text

| State | Appearance |
|---|---|
| Active | neutral-secondary-soft background, fg-brand text |
| First item | rounded start (4px) |
| Last item | rounded end (4px) |

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
- Radius: 2px (default)
- Shadow: shadow-xs + glow-subtle
- Transition: opacity, 300ms ease

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
- Background: neutral-primary-medium at 80% opacity for glass effect
- Backdrop filter: blur(12px)
- Radius: 4px (base)
- Shadow: shadow-md + glow-subtle
- Border: 1px, border-default
- Transition: opacity, 300ms ease

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

- Tooltips: 2px radius
- Popovers: 4px radius
- Dark tooltips: dark background, white text
- Light tooltips/popovers: semantic neutral background + border tokens
- Arrows match parent background color

---

## Source file: `typography.md`

# Typography

> Dependencies: `colors.md`

## Core Rules

- **Font:** Audiowide, sans-serif — configured at app level via Google Fonts import, never override. Used for ALL text (headings and body)
- **Headings:** semibold weight (600), heading text color, uppercase, wide letter-spacing for sci-fi aesthetic
- **H1 special treatment:** h1 elements use a linear gradient text effect — `background: linear-gradient(135deg, fg-brand, fg-brand-strong)` with `background-clip: text` and `color: transparent`
- **Body copy:** body text color, never use brand color for paragraphs longer than one sentence
- **Semantic HTML:** Use `h1`–`h6` in order, never skip levels

## Heading Scale

### Desktop

| Element | Size | Line-height | Letter-spacing | Margin-bottom |
|---|---|---|---|---|
| `h1` | 60px | 1 | 2px | 24px |
| `h2` | 44px | 1.15 | 1.5px | — |
| `h3` | 36px | 1.2 | 1px | — |
| `h4` | 30px | 1.25 | 0.8px | — |
| `h5` | 24px | 1.5 | 0.5px | — |
| `h6` | 20px | 1.25 | 0.5px | — |

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

## H1 Gradient Text Rule

All h1 elements must use a gradient text effect:
- `background: linear-gradient(135deg, fg-brand, fg-brand-strong)`
- `background-clip: text` / `-webkit-background-clip: text`
- `color: transparent`
- This creates a brand-tinted gradient on the main page heading
- Only applies to h1 — all other headings use the standard heading text color

## Gradient Text Glow (Required)

Gradient text alone is too subtle against the dark #040B17 background. Every gradient-text heading MUST be wrapped in a parent element that applies a luminous drop-shadow glow:

- **Wrapper:** a `<div>` or `<span>` around the gradient-text element
- **Filter:** `filter: drop-shadow(0 0 30px rgba(38,112,173,0.6)) drop-shadow(0 0 60px rgba(26,80,128,0.3))`
- This makes the gradient text visibly glow and pop against the dark background
- The glow color uses fg-brand-strong (#2670AD → rgba(38,112,173,...)) and fg-brand (#1A5080 → rgba(26,80,128,...))
- Applies to h1 gradient headings and any h2/h3 that are styled with the gradient-text treatment for emphasis

Note: `text-shadow` does not work on `background-clip: text` elements because the text color is transparent. You MUST use `filter: drop-shadow()` on a wrapper element instead.

## Emphasis Gradient Headings

Section headings (h2) can optionally use the same gradient-text + glow treatment when they are the primary heading of a major section (hero, CTA, features). Apply the same rules as h1: `background: linear-gradient(...)`, `background-clip: text`, `color: transparent`, wrapped in a glow container.

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
- All-caps only for short labels: uppercase, 2px letter-spacing, 12px or 14px

## Dark Mode

Hierarchy stays identical. Only color tokens change (automatic via CSS custom properties). Size, weight, and spacing remain constant.
