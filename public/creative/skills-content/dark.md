# Design System — Agent Instructions

This skill describes the visual design language for all UI output. Every component, layout, and page should follow the design specs in the module files below. These describe *what the design looks like* — you choose how to implement the styles.

## Style
A dark, premium interface: a deep dark surface paired with elevated dark cards, a muted plum brand, serif display headings, and clean rounded layouts for a calm, focused browsing experience.

## Before Writing Any Code

1. **Read every module that applies.** For a landing page, read at minimum: `layout.md`, `typography.md`, `colors.md`, `buttons.md`, `cards.md`, `shadows.md`, `radius.md`, `borders.md`. Do NOT write any component markup until you have loaded all relevant modules.

## Critical Rules

- **Stay stack-agnostic.** This design system is technology-agnostic. Do not assume or hardcode any specific stack, framework, or styling library. The rules, colors, and styles must be implementable with any technology.

- **Tokens are AGNOSTIC design tokens, NOT utility classes:** The tokens defined in the `.md` files (like `neutral-primary-soft`, `heading`, `border-default`) are abstract design system tokens, NOT literal class names. Do not assume any predefined class exists — map each token to your project's styling layer yourself.

- **Surface & spacing:** Every section across the whole app/page shares one surface background — `#13111C`. Cards and components placed on that surface use the dark `neutral-primary-soft` (#181621) background with a `border-default` (#33313B) border, and a 16px border-radius.

- **Section spacing:** Sections must have the SAME spacing top and bottom between them — `96px` on large screens and `24px` on mobile. Keep this vertical rhythm consistent across every section.

- **Cross-reference modules.** A card containing buttons must satisfy both `cards.md` AND `buttons.md`.
- **Dark mode is automatic.** The CSS custom properties resolve via `@media (prefers-color-scheme: dark)`. Never manually swap colors.
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
- [icons.md](icons.md) — icon color tokens (secondary, tertiary, quaternary)

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

- **Wrapper:** full width, 1px border (border-default color), 16px radius — clips first/last item corners
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
Each item is independent — has its own 1px border, 16px radius, and shadow-xs. 8px bottom margin between items. No shared outer border.

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
- **Radius:** 16px (base)
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
| Extra Small | 18x18px | 4px |
| Small | 24x24px | 4px |
| Base | 32x32px | 16px |
| Large | 44x44px | 16px |
| XL | 56x56px | 16px |
| 2XL | 64x64px | 16px |

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

- **Wrapper:** inline-flex, 16px radius, shadow-xs
- **Children overlap:** -1px left margin on all except first button
- **Buttons inside the group must NOT have individual shadows.** Only the wrapper has a shadow.

## Anatomy

### Wrapper
- Display: inline-flex
- Radius: 16px
- Shadow: shadow-xs

### First Button
- 16px radius on inline-start side only, 0 on inline-end

### Middle Button(s)
- No radius (0 on all corners)

### Last Button
- 16px radius on inline-end side only, 0 on inline-start

### All buttons except first
- -1px left margin to overlap borders

## Rules

- Buttons inside groups follow all styles from `buttons.md` (background, border, focus rings) except individual shadows
- Icon-only buttons: 16x16px icon, match height of text buttons

# Buttons

> Dependencies: `colors.md`, `radius.md`, `shadows.md`

## Core Specs (every button except ghost and disabled)

- **Radius:** 16px (base) or 9999px for pills
- **Border:** 1px solid
- **Shadow:** shadow-xs
- **Glint effect:** Every button except ghost and disabled gets a combined box-shadow that layers the base shadow with an inset top-edge highlight and a subtle outer color glow:
  - `var(--shadow-xs), inset var(--color-1-400) 0 6px 0px -5px, var(--color-1-700) 0 4px 10px -5px`
- **Font weight:** 600 (semibold)
- **Font:** Inter
- **Box sizing:** border-box
- **Transition:** color transitions on hover

## Agnostic Base Button Style (stack-independent)

This is the canonical primary (brand) button recipe. It is written as plain CSS using
design-system tokens so it can be implemented with ANY stack or technology (plain CSS,
CSS-in-JS, utility frameworks, web components, etc.) — map the `var(--token)` references
to however your project exposes tokens. The colors below resolve to the dark-pro palette:
`--brand` = #42344B, `--white` = #FFFFFF, `--color-1-400` = the inset white highlight,
`--color-1-700` = the soft outer shadow, and the border follows the brand color.

```css
border: 1px solid var(--brand);
background-color: var(--brand);
color: var(--white);
text-align: center;
white-space: nowrap;
background-image: linear-gradient(var(--color-1-400), transparent);
border-radius: 16px;
justify-content: center;
align-items: center;
padding: .625rem 1rem;
font-weight: 600;
transition: background-color .2s;
display: flex;
box-shadow: inset 0 1px var(--color-1-400), 0 1px 2px var(--color-1-700);
```

- **Box-shadow / border colors:** derive from the dark-pro tokens — the inset top highlight uses `--color-1-400` (`rgba(255,255,255,0.12)`), the outer drop uses `--color-1-700` (`rgba(0,0,0,0.25)`), and the border uses the brand color (`#42344B`). For non-brand variants, swap `--brand` for that variant's background token and keep the same highlight/shadow tokens.
- This rule is intentionally framework-agnostic — never hardcode it to a specific stack.

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
- **Border:** transparent
- **Text:** white
- **Hover:** brand-strong background
- **Focus ring:** 4px, brand-medium color
- **Glint:** yes

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
- **Text:** white
- **Hover:** dark-strong background
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

# Cards

> Dependencies: `colors.md`, `radius.md`, `shadows.md`, `typography.md`

## Core Specs

- **Background:** top-to-bottom gradient starting at neutral-primary-soft (#181621) and finishing with a barely visible blend of secondary/tertiary tokens — see **Card Gradient** below
- **Border:** 1px, border-default color (#33313B)
- **Radius:** 16px (base)
- **Shadow:** shadow-xs

Cards sit on the section surface (#13111C). The gradient adds subtle depth without overpowering the card content.

## Card Gradient

Every card uses a vertical gradient (180deg, top → bottom):

| Stop | Token / treatment |
|---|---|
| 0% | neutral-primary-soft (#181621) — solid card base |
| 55% | neutral-primary-soft (#181621) — holds flat through the upper card |
| 82% | color-mix: neutral-secondary-medium at 14% into neutral-primary-soft |
| 100% | color-mix: neutral-tertiary-medium at 22% into neutral-primary-soft |

The bottom blend must stay **barely visible** — a hint of secondary/tertiary warmth, not a strong color shift.

### Agnostic recipe (stack-independent)

Map token references to your project's styling layer:

```css
background: linear-gradient(
  180deg,
  var(--neutral-primary-soft) 0%,
  var(--neutral-primary-soft) 55%,
  color-mix(in srgb, var(--neutral-secondary-medium) 14%, var(--neutral-primary-soft)) 82%,
  color-mix(in srgb, var(--neutral-tertiary-medium) 22%, var(--neutral-primary-soft)) 100%
);
```

## Card Heading

- Desktop: 20px, medium weight, heading color
- Mobile: 16px, medium weight, heading color
- Never skip heading levels — the page hierarchy must logically arrive at the card heading level.

## States

### Static Card (no interactivity)
- Background: card gradient (see above)
- Border: 1px, border-default
- Radius: 16px
- Shadow: shadow-xs
- No hover styles. Non-interactive cards must NOT have hover background changes.

### Interactive Card (clickable)
- Same base gradient as static card
- Hover: elevated gradient — secondary-medium becomes more visible top-to-bottom, tertiary-medium blend slightly stronger at the bottom:

```css
background: linear-gradient(
  180deg,
  color-mix(in srgb, var(--neutral-secondary-medium) 28%, var(--neutral-primary-soft)) 0%,
  var(--neutral-secondary-medium) 48%,
  color-mix(in srgb, var(--neutral-tertiary-medium) 32%, var(--neutral-secondary-medium)) 100%
);
```

- Transition: background, 250ms ease
- Cursor: pointer

## Rules

- Background: card gradient — never a flat fill on cards
- Border: 1px, border-default
- Radius: 16px
- Shadow: shadow-xs
- Interactive hover: elevated card gradient (not a flat secondary-medium fill)
- Non-interactive: no hover styles
- Gradient direction: always top → bottom (180deg)
- Do not increase bottom-stop mix percentages beyond the spec — the effect must remain subtle

# Color Tokens

## Background Tokens

### Neutral
| Token | Light | Dark |
|---|---|---|
| neutral-primary-soft | #181621 | #181621 |
| neutral-primary | #13111A | #13111A |
| neutral-primary-medium | #221F2B | #221F2B |
| neutral-primary-strong | #2D2A38 | #2D2A38 |
| neutral-secondary-soft | #1E1B27 | #1E1B27 |
| neutral-secondary | #181621 | #181621 |
| neutral-secondary-medium | #26222F | #26222F |
| neutral-secondary-strong | #2D2A38 | #2D2A38 |
| neutral-tertiary-soft | #2D2A38 | #2D2A38 |
| neutral-tertiary | #33313B | #33313B |
| neutral-tertiary-medium | #3A3744 | #3A3744 |
| neutral-quaternary | #33313B | #33313B |
| quaternary-medium | #45414F | #45414F |
| gray | #5A5666 | #5A5666 |

### Brand
| Token | Light | Dark |
|---|---|---|
| brand-softer | #221B27 | #221B27 |
| brand-soft | #2E2536 | #2E2536 |
| brand | #42344B | #42344B |
| brand-medium | #5A4869 | #5A4869 |
| brand-strong | #54435F | #54435F |

### Status
| Token | Light | Dark |
|---|---|---|
| success-soft | #182A20 | #182A20 |
| success | #6E9C7E | #6E9C7E |
| success-medium | #21392B | #21392B |
| success-strong | #8AB89A | #8AB89A |
| danger-soft | #2E1518 | #2E1518 |
| danger | #C9596A | #C9596A |
| danger-medium | #46161E | #46161E |
| danger-strong | #E08A92 | #E08A92 |
| warning-soft | #2E2110 | #2E2110 |
| warning | #D49A5A | #D49A5A |
| warning-medium | #46341A | #46341A |
| warning-strong | #E5B57A | #E5B57A |

### Button Glint (CSS custom properties, used for the glint box-shadow effect)
| Variable | Light | Dark |
|---|---|---|
| `--color-1-400` | rgba(255,255,255,0.12) | rgba(255,255,255,0.12) |
| `--color-1-700` | rgba(0,0,0,0.25) | rgba(0,0,0,0.25) |

### Utility
| Token | Light | Dark |
|---|---|---|
| dark | #13111A | #13111A |
| dark-strong | #221B27 | #221B27 |
| disabled | #1E1B27 | #1E1B27 |

### Accent
| Token | Value (same both modes) |
|---|---|
| purple | #6E5A7C |
| sky | #5C7A99 |
| teal | #839788 |
| pink | #B07A92 |
| cyan | #5E8C8C |
| fuchsia | #8C6A8E |
| indigo | #324659 |
| orange | #D49A5A |

## Text Color Tokens

### Base
| Token | Light | Dark |
|---|---|---|
| white | #FFFFFF | #FFFFFF |
| black | #13111A | #13111A |
| heading | #FFFFFF | #FFFFFF |
| body | #D4D0DC | #D4D0DC |
| body-subtle | #A8A3B0 | #A8A3B0 |

### Brand
| Token | Light | Dark |
|---|---|---|
| fg-brand-subtle | #8E7A9B | #8E7A9B |
| fg-brand | #B9A6C6 | #B9A6C6 |
| fg-brand-strong | #D6C8E0 | #D6C8E0 |

### Status
| Token | Light | Dark |
|---|---|---|
| fg-success | #8AB89A | #8AB89A |
| fg-success-strong | #A6CBB2 | #A6CBB2 |
| fg-danger | #E08A92 | #E08A92 |
| fg-danger-strong | #ECAAB0 | #ECAAB0 |
| fg-warning-subtle | #D49A5A | #D49A5A |
| fg-warning | #E5B57A | #E5B57A |
| fg-disabled | #6B6577 | #6B6577 |

### Informational / Accent
| Token | Light | Dark |
|---|---|---|
| fg-yellow | #E5C97A | #E5C97A |
| fg-info | #7F94AD | #7F94AD |
| fg-purple | #A78FB5 | #A78FB5 |
| fg-purple-strong | #C9B8D4 | #C9B8D4 |
| fg-cyan | #7FA8A8 | #7FA8A8 |
| fg-indigo | #7F94AD | #7F94AD |
| fg-pink | #C99AB0 | #C99AB0 |
| fg-lime | #9FB87F | #9FB87F |

## Border Color Tokens

| Token | Light | Dark |
|---|---|---|
| border-dark | #45414F | #45414F |
| border-buffer | #181621 | #181621 |
| border-buffer-medium | #221F2B | #221F2B |
| border-buffer-strong | #2D2A38 | #2D2A38 |
| border-muted | #221F2B | #221F2B |
| border-light-subtle | #26222F | #26222F |
| border-light | #2D2A38 | #2D2A38 |
| border-light-medium | #33313B | #33313B |
| border-default-subtle | #2D2A38 | #2D2A38 |
| border-default | #33313B | #33313B |
| border-default-medium | #3A3744 | #3A3744 |
| border-default-strong | #45414F | #45414F |
| border-success-subtle | #21392B | #21392B |
| border-success | #6E9C7E | #6E9C7E |
| border-danger-subtle | #46161E | #46161E |
| border-danger | #C9596A | #C9596A |
| border-warning-subtle | #46341A | #46341A |
| border-warning | #D49A5A | #D49A5A |
| border-brand-subtle | #3A2E44 | #3A2E44 |
| border-brand-light | #5A4869 | #5A4869 |
| border-brand | #6E5A7C | #6E5A7C |
| border-dark-subtle | #2D2A38 | #2D2A38 |
| border-purple | #6E5A7C | #6E5A7C |
| border-orange | #D49A5A | #D49A5A |

## Icon Color Tokens

Semantic icon colors used for coloring icons. See `icons.md` for usage rules.

| Token | Value (same both modes) | Role |
|---|---|---|
| icon-secondary | #609F89 | Secondary icon color |
| icon-tertiary | #C67839 | Tertiary icon color |
| icon-quaternary | #1D568E | Quaternary icon color |

## Semantic Usage Rules

- Surface: the whole app/page and every section share one surface background — `#13111C`. Sections do NOT alternate; the surface color is consistent top to bottom.
- Cards and components sitting on the surface: neutral-primary-soft (#181621) background with a border-default (#33313B) border.
- Primary buttons: brand background (#42344B plum)
- Headings: white (`#FFFFFF`) — on the surface and on cards
- Body text: darker white (`#D4D0DC`) for paragraphs and UI copy; `body-subtle` (`#A8A3B0`) for captions and metadata
- CTA links: fg-brand text color
- Default borders: border-default (#33313B)
- Status borders match intent: success → border-success, danger → border-danger, warning → border-warning
- Disabled: disabled background + fg-disabled text

## Prohibited

- No raw hex/rgb values in component code — always use design tokens
- No brand text color for long-form paragraphs
- No accent text tokens (fg-purple, etc.) for body copy or navigation
- No brand/accent backgrounds for large layout surfaces (pages, sections) — the surface stays `#13111C`, unless it's a hero/campaign area
- No manual light/dark value swapping — let the CSS custom properties handle it

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
| Mobile | 24px (equal top and bottom) |
| Tablet (≥768px) | 64px |
| Desktop (≥1024px) | 96px (equal top and bottom) |

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
- Radius: 16px (base)
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
| Small | 14px | 12px | 8px |
| Base | 14px | 16px | 10px |
| Large | 16px | 20px | 12px |

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
- Name: heading color, 14px, semibold weight
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

## Container (same for every variant)

All icon shapes share one container style — variants differ **only in icon color**, never background or border:

- **Background:** brand-softer
- **Border:** 1px, border-brand-subtle
- **Shape:** circle

## Color Variants (icon color only)

Cycle primary → secondary → tertiary across icon groups. The shape stays identical; only the SVG/icon stroke color changes. See `icons.md` for token definitions.

### Primary
- Icon color: fg-brand-strong

### Secondary
- Icon color: icon-secondary

### Tertiary
- Icon color: icon-tertiary

### Quaternary
- Icon color: icon-quaternary

## Status Variants

Status variants also keep the same container. Only icon color changes.

### Danger
- Icon color: fg-danger-strong

### Success
- Icon color: fg-success-strong

### Warning
- Icon color: fg-warning

### Gray
- Icon color: body

# Icons

> Dependencies: `colors.md`

Rules for coloring standalone icons (SVG/icon-font glyphs). For icon *containers* and shape/sizing, see `icon-shapes.md`.

## Icon Color Tokens

Three semantic icon colors, defined in `colors.md`:

| Role | Token | Value |
|---|---|---|
| Secondary | icon-secondary | #609F89 |
| Tertiary | icon-tertiary | #C67839 |
| Quaternary | icon-quaternary | #1D568E |

These values are the same in light and dark mode.

## Usage

- Use `icon-secondary` (#609F89), `icon-tertiary` (#C67839), and `icon-quaternary` (#1D568E) for decorative, categorical, or accent icon coloring.
- Default/neutral icons (in body text, lists, inputs, nav) keep using `body` color; brand/status icons keep using their existing tokens (`fg-brand`, `fg-success`, `fg-danger`, `fg-warning`) — these three are the secondary/tertiary/quaternary accent set on top of that.
- Apply the color to the icon's stroke or fill (e.g. `currentColor` driven by the token), never as a background.
- Keep color usage consistent: the same icon role/category should always map to the same token across the product.

## Rules

- Never hardcode raw hex for icons — always reference the `icon-secondary` / `icon-tertiary` / `icon-quaternary` tokens.
- These tokens are stack-agnostic; map them to your styling layer however your project exposes design tokens.
- Ensure sufficient contrast against the surface the icon sits on (the dark cards or the section surface).

# Inputs

> Dependencies: `colors.md`, `radius.md`

## Core Specs

- **Display:** block, full width
- **Radius:** 16px (base)
- **Border:** 1px, border-default-medium
- **Background:** neutral-secondary-medium (#26222F) — chosen to contrast against the surface it sits on (a step lighter than the dark card #181621, and clearly distinct from the section surface #13111C)
- **Shadow:** shadow-xs
- **Font:** 14px, heading color
- **Padding:** 12px horizontal, 10px vertical
- **Placeholder:** body color
- **Transition:** all properties, 200ms

The input fill must always read as a distinct, contrasting surface from whatever it is placed on — never blend the input into the card or section background.

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

# Layout & Spacing

## Spacing Rhythm

Base unit: **8px**. All spacing values should be multiples of 8px.

| Context | Value |
|---|---|
| Section vertical padding (large screens) | 96px (top and bottom, equal) |
| Section vertical padding (mobile) | 24px (top and bottom, equal) |
| Section header → content | 48px or 64px |
| Heading → paragraph | 16px |
| Container horizontal padding | 24px |
| Flex/grid row gap | 16px |
| Card grid gap | 24px |
| Wide component grid gap | 32px |
| Column layout gap | 48px |

Sections must have the SAME spacing top and bottom between them: 96px on large screens and 24px on mobile.

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
- Equal top and bottom vertical padding: 96px on large screens, 24px on mobile
- The shared surface background color — `#13111C` — consistent across every section (no alternating backgrounds)
- A centered container (max-width 1152px, 24px horizontal padding)
- A section header area with 48px bottom margin
- Section content below (cards/components on the surface use the dark neutral-primary-soft #181621 background with border-default #33313B borders)

## Motion & Animation

- Prefer CSS-native: `transition`, `animation`, `@keyframes`. Use Motion library only when CSS cannot achieve the behavior.
- Prioritize high-impact orchestrated moments over scattered micro-interactions. A single well-sequenced page-load animation using staggered `animation-delay` delivers more perceived quality than many isolated effects.
- Reserve scroll-triggered and hover transitions for moments that reinforce hierarchy or reward attention.

## Backgrounds & Visual Depth

- Default to layered, atmospheric backgrounds rather than flat solid fills.
- Apply contextual treatments — gradient meshes, noise textures, geometric patterns, layered transparencies, dramatic shadows, decorative borders, grain overlays — that align with brand aesthetic.
- Every decorative element must serve a compositional purpose (depth, separation, or emphasis). No purely ornamental effects competing with content.

## Must

- All sections: equal top and bottom spacing — 96px on large screens, 24px on mobile
- All sections share the same surface background (#13111C)
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
- Radius: 16px (base)
- Shadow: shadow-xl
- Padding: 20px

## Anatomy

### Header
- Bottom border: border-default
- Top corners rounded (16px)
- Title: 20px, semibold weight, heading color
- Close button: Ghost variant from `buttons.md`, 6px padding

### Body
- Vertical padding: 24px
- Vertical spacing between elements: 24px
- Text: 16px, 1.625 line-height, body color

### Footer
- Top border: border-default
- Bottom corners rounded (16px)

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
- Content: neutral-primary background, 16px radius, shadow-xl
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
- First item: 16px radius on inline-start side
- Last item: 16px radius on inline-end side

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

# Border Radius

| Token | Value | Default usage |
|---|---|---|
| base | 16px | Buttons, cards, inputs, modals, sections, all primary components |
| default | 8px | Badges, tooltips, dropdown items, small controls |
| sm | 4px | Checkboxes, tiny elements |
| full | 9999px | Pills, avatars, toggles, dot indicators |

## Rules

- 16px is the default radius across the product — all cards and components use it
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
- Radius: 16px (base)
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
- Radius: 16px (base)
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
- Radius: 16px (base)
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
- Radius: 16px (base)
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
| First item | rounded start (16px) |
| Last item | rounded end (16px) |

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
- Radius: 16px (base)
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
- Popovers: 16px radius
- Dark tooltips: dark background, white text
- Light tooltips/popovers: semantic neutral background + border tokens
- Arrows match parent background color

# Typography

> Dependencies: `colors.md`

## Core Rules

- **Display font (big headings):** IBM Plex Serif, serif — used ONLY for `h1`, `h2`, `h3`, `h4`. Configured at app level, never override.
- **Text font (everything else):** Inter, sans-serif — used for `h5`, `h6`, paragraphs, buttons, labels, links, and all UI copy. Configured at app level, never override.
- **Headings:** `h1`–`h4` use IBM Plex Serif at semibold weight (600); `h5`–`h6` use Inter at semibold weight (600); all use white (`#FFFFFF`)
- **Body copy:** Inter, darker white (`#D4D0DC`), never use brand color for paragraphs longer than one sentence
- **Semantic HTML:** Use `h1`–`h6` in order, never skip levels

## Heading Scale

### Desktop

| Element | Font | Size | Line-height | Letter-spacing | Margin-bottom |
|---|---|---|---|---|---|
| `h1` | IBM Plex Serif | 60px | 1 | -0.8px | 24px |
| `h2` | IBM Plex Serif | 44px | 1.15 | — | — |
| `h3` | IBM Plex Serif | 36px | 1.2 | — | — |
| `h4` | IBM Plex Serif | 30px | 1.25 | — | — |
| `h5` | Inter | 24px | 1.5 | — | — |
| `h6` | Inter | 20px | 1.25 | — | — |

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
- Color: darker white (`#D4D0DC`)
- Line-height: 1.7
- Max width: ~70 characters

### Normal Paragraph
- Size: 16px
- Weight: normal
- Color: darker white (`#D4D0DC`)
- Line-height: 1.7
- Max width: ~65 characters

### Small Supporting Copy
- Size: 14px
- Weight: normal
- Color: body-subtle (`#A8A3B0`)
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

## Dark Mode

Hierarchy stays identical. Only color tokens change (automatic via CSS custom properties). Size, weight, and spacing remain constant.
