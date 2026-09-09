# TypeUI · Charm — Design System

> **⚠️ READ FIRST — NON-NEGOTIABLE.** Do **not** design, build, or write any component, section, or page until you have **carefully read every `.md` file in this directory**. Read them all first, _then_ consciously decide what to create — only after that may you build components, sections, and pages. There are no exceptions.

This skill is the **authoritative visual specification for TypeUI "Charm"** (from [typeui.sh](https://www.typeui.sh)). Everything you build for this project — every component, layout, and page — follows the module files bundled here. They define _what Charm looks like_ down to the token; you decide how to implement it (plain CSS, utility classes, CSS-in-JS, any renderer), but you implement this design — you do not redesign it.

**The canonical specs are the `*.md` files in this directory.** Read the full module before you write UI for it. A nested skill folder may ship short summaries; those are wayfinding only and link back to these files.

---

## What Charm is

Charm is a **polished, production-grade component system**, expressed as **stack-agnostic design tokens**. Its character is light, warm, and friendly: a warm `#F7F7F5` section surface with off-white panels (`#FBFAF9`) and soft cream accent bands (`#F1F2EA`), a vivid **coral** brand that leads every action, **soft rounded corners** (8px controls, 16px panels), Inter UI text under a bold, tightly-tracked display face, and warm stone ink (`#1C1917` headings over `#79716B` muted body). The result should feel _approachable and confident_ — never cold, never sharp-edged, never murky. If a screen built from these modules reads as dark, hard-cornered, or gray-corporate, it isnt Charm yet.

### Signature traits — non-negotiable

These are what make a screen recognizably Charm. Hold every one of them, on every surface:

- **Pill controls + soft 24px panels** (`radius.md`) — **buttons, inputs, and alerts are fully-round pills** (`radius-full`, 9999px); **cards, widgets, modals, tables, and drawers take `radius-xl` (24px)**, with menus at `radius-lg` (12px). The two exceptions: the **textarea takes the 24px panel corner** and the **checkbox tick box stays 4px** (`radius-xs`). This pill-control + soft-panel geometry is the defining trait.
- **Functionally round controls** (`radius-full`, 999px) — the toggle track, avatars, radio, range, status dots stay fully round.
- **Inter + monospace labels + bold display headings** — body and UI in Inter on a 14px (`font-size-sm`) control baseline, with **monospace (Fragment Mono) uppercase** eyebrows, labels, and ticker text — **button labels use the primary UI family (Inter) too: sentence case, never uppercase, never monospace** — under a **display heading ramp in Circular (`font-family-serif` — the display-face slot; DM Sans as the free stand-in), bold (700) and tightly tracked (-0.05em)**, so UIs read friendly and confident with a strong display voice. **Page body / reading copy holds a 16px floor** (only badges and micro-elements go below it — see operating rules). See `typography.md`.
- **White page + two soft cream bands** — on marketing / storefront pages the content sits on one warm **section surface** (`#F7F7F5`) in a centered 1280px container; the **hero and the footer are the only two accent bands**, filled with the **soft cream `#F1F2EA`** (flat and untextured — no grain, no pattern) and keeping the normal **ink text** (`heading` `#1C1917`); **each band fades into the section surface at the edge it shares with the content** — the hero fades to `#F7F7F5` at its bottom, the footer fades from `#F7F7F5` at its top. Cards on the page fill `neutral-primary-soft` (`#FBFAF9`) behind `default-subtle` (`#EBEBE7`) hairlines; `brand` leads primary actions while `fg-brand` carries links; `success` / `danger` / `warning` appear only for real state, never decoration. See `colors.md`.
- **Raised, subtly-bordered surfaces** — separation comes from a raised white panel plus the subtle `default` (`#E7E6E5`) border and spacing — never a heavy drop shadow — under a brand focus ring on every interactive element. See `shadows.md`.

---

## How to use this skill

1. **Load the foundation first.** For any UI work, read `colors.md`, `typography.md`, `spacing.md`, `radius.md`, `shadows.md`, `motion.md`, and `responsive.md` before anything else — every component depends on them.
2. **Add a module per element on the page.** A modal form with inputs and buttons means `modal.md` + `input-field.md` + `buttons.md`. Don't write JSX/CSS until the relevant specs are loaded.
3. **Cross-reference.** Components inherit from each other — a search bar satisfies the search section in `input-field.md`; a table footer pulls in `pagination.md`.
4. **Trust these files over memory or external docs.** When this skill and any external or vendor documentation disagree, this skill wins.

### Suggested reading by task

| Task                     | Read at minimum                                                      |
| ------------------------ | -------------------------------------------------------------------- |
| Landing / marketing page | foundation + `buttons.md`, `cards.md`, `alerts.md`, `mockups.md`     |
| Form page                | foundation + `input-field.md` + relevant form modules + `buttons.md` |
| Dashboard                | foundation + `tables.md`, `tabs.md`, `dropdowns.md`, `badges.md`     |
| Settings                 | foundation + form modules + `toggle.md`, `checkbox.md`, `radio.md`   |
| Overlay / dialog         | `modal.md` or `drawer.md` + the content modules inside               |

---

## Operating rules

- **No em-dash / en-dash in UI copy.** Never use `—` or `–` in any string the user reads (headings, body, labels, buttons, microcopy); rewrite with a comma, period, colon, or parentheses. Hyphens only inside compound words. See `typography.md`.
- **Outline and solid buttons are the same height.** A button's height is identical whether it is **solid or outline** — the border sits _inside_ the box (`box-sizing: border-box`) and **never adds height**, so the two variants align pixel-for-pixel in a row. See `buttons.md`.
- **Button labels never hide on small screens.** A labeled button keeps its visible text at **every** breakpoint — never collapse "New run" into a bare `+` icon on mobile. When a row runs out of space, adapt the layout instead: wrap, stack, go full-width, or drop/relocate a whole lower-priority control into an overflow menu. Only controls _designed_ icon-only at all sizes (bell, hamburger, close ✕, theme toggle — always with an accessible name) are exempt. Hiding a label with `display: none` inside a breakpoint is prohibited. See `buttons.md`.
- **Button size is padding-driven — Base ≈ 42px, Small ≈ 38px.** The **Base** button (marketing hero, primary CTAs, pricing) uses **14px** vertical / **26px** horizontal padding (≈ 42px tall); the **Small** button (navbars, product cards, inline actions, dashboard chrome) uses **12px** vertical / **20px** horizontal padding (≈ 38px tall). Height comes from `padding-block` + a `line-height: 1` label — **never a fixed pixel height** — and every button stays in the primary UI family (Inter), medium weight (500), sentence case (never uppercase), with the soft 8px corner. Icons never add height: a glyph taller than the label's line box is vertically absorbed (negative block margin), so icon, text-only, outline, and solid buttons of one size all measure identical. See `buttons.md`.
- **Tokens are the vocabulary, and they are agnostic.** `neutral-primary-soft`, `heading`, `default-medium`, `spacing-4`, `radius-xxl`, `elevation-1` are Charm tokens, not framework utilities — map them into your stack's token layer.
- **Hold the signature radius.** Buttons, inputs, and alerts are always `radius-full` (9999px) pills; cards, widgets, modals, tables, and drawers take the `radius-xl` (24px) panel corner, with menus at `radius-lg` (12px); the textarea takes the 24px panel corner and the checkbox tick box stays `radius-xs` (4px). Shipping square controls or slightly-rounded 8px buttons quietly breaks the theme.
- **Raised and subtly bordered.** No resting card or component wears a heavy drop shadow (floating overlays — dropdowns, menus, popovers — are the one documented exception and carry a real medium shadow; see `dropdowns.md`). On the white column a card fills `neutral-primary-soft` (`#FBFAF9`) behind a `default-subtle` (`#EBEBE7`) hairline; on the gray app surface a widget sits on `neutral-primary` (`#FFFFFF`) with a `default` (`#E7E6E5`) border. Inputs and other controls use a _contrasting_ fill (`neutral-tertiary`, `#F5F4F1`) plus that border so they read on the light surface. Outline buttons carry a 1px border — button borders are always 1px, never thicker. Primary buttons are **brand gradient** blocks — a one-step-lighter tint (`brand-light`) into `brand`, top to bottom — under the soft layered control shadow (`elevation-1`), with a white label and the one-step-deeper hover (see `buttons.md`).
- **White page; the brand coral is an action color, not a section fill.** Content sections share the warm section surface (`#F7F7F5`); the coral `brand` is used for controls, links, gradients, and intentional feature accents — never as a full content-section background — the **hero and the footer are the two documented exceptions** (both fill the soft cream `#F1F2EA`) — and never a third striping color.
- **The footer is a single cream that fades as the inverse of the hero — never two-tone, never solid page/white.** The footer fills the **one `#F1F2EA` cream** and **fades the opposite way from the hero**: the hero is solid cream at its top fading to the `#F7F7F5` section surface at its bottom, so the footer **fades from `#F7F7F5` at its top edge down to solid cream at the bottom** (mirror of the hero's gradient — hero `band 55% → page`, footer `page → band 45%`). All of the footer's internal bands (brand / country row, link columns, legal / copyright bottom bar) share that same cream and are divided **only by `dark-subtle` (`#E6E8DD`) hairlines**. **Never** give the legal bar or any footer sub-band a second/deeper tint, **never** fill the footer with solid `#F7F7F5` or white, and **never** fade it the wrong direction. See the footer rules in `colors.md`.
- **Equal vertical breathing room between sections.** Every section carries the **same spacing above and below it** — the top padding/margin of a section equals its bottom padding/margin, and the gap between any two adjacent sections is symmetric. No section gets more air on one side than the other; rhythm comes from this consistent, balanced spacing, never from uneven gaps.
- **Section vertical padding is 112px, top and bottom — the hero and the footer are the exceptions.** Every content section carries **`112px` of padding on both the top and the bottom**, applied equally so the section rhythm stays symmetric across the whole page. Adjacent sections meet as **plain white space — no divider element sits between them** (see the no-separator rule below), so the visible gap is simply the two paddings meeting. This is the single, fixed section rhythm, with **one responsive step: below the `sm` breakpoint (768px) the rhythm drops to `64px` top and bottom** — equally, on every section — and never any other per-section value. The **exceptions are the hero** (which owns its own top/bottom spacing — sticky-nav clearance above, lead spacing below) **and the footer** (which uses the asymmetric footer padding rule below). Every other band — feature grids, pricing, FAQ, social proof, CTA — uses the 112px top and bottom.
- **Footer vertical padding is asymmetric: a 96px or 112px top, and a light bottom (≤ half the top).** The footer is the one band that deliberately breaks the symmetric-section rule. Give the footer's inner content block a **top padding of `96px` (`spacing-24`) or `112px` (`spacing-28`)** and a **deliberately light bottom** — **at most half the top** (`48px` / `spacing-12` under a `96px` top, `56px` / `spacing-14` under a `112px` top), and often less. Never make the footer's top and bottom padding equal, and never let the bottom exceed half the top; the lighter base keeps the footer grounded at the very end of the page. This applies to the footer's own padding only — the internal spacing between its bands follows the normal spacing scale.
- **If the footer's last band already carries its own bottom padding, the footer container drops its bottom padding entirely (never double it).** When the final row of the footer — the bottom bar / copyright band, or whatever sits last — already has its **own `padding-bottom`** (e.g. a bottom bar with `padding-block`), the **outer footer container must set its own `padding-bottom` to `0`** so the two don't stack into an oversized gap. Only **one** element owns the footer's bottom spacing: either the container pads the bottom **or** the last band does — never both. So a bottom bar with, say, `spacing-8` of block padding means the container's bottom padding is `0` (the top padding still follows the 96/112px rule above). If the last band has **no** bottom padding of its own, then the container supplies the light bottom padding from the rule above. Audit the real rendered footer: if you see a large empty band below the last row of content, it is almost always this doubled padding — zero one of the two.
- **Foundation values are law.** Never invent a color, size, radius, or shadow that contradicts the foundation files — if no token fits, the foundation file is where a new one gets added.
- **Every interactive element earns its states.** Hover, focus, and disabled are defined in each module; the brand focus ring is never removed without an accessible equivalent.
- **Text contrast at every state — non-negotiable.** Label and background must stay readable together in **default, hover, focus, active, and disabled** — WCAG 2.2 AA minimum. This matters on buttons with animated hovers (e.g. the primary: the hover fill is only a _deeper step of the same coral gradient_, so the white label stays legible throughout — never lighten the hover toward a pale tint where the white label would wash out). Verify mid-transition frames, not just rest and fully-hovered endpoints. See `colors.md` → _Contrast, accessibility, and states_ and `buttons.md` → _Signature interaction_.
- **Semantic HTML, always.** Proper `h1`→`h6` order, `<button>` for actions, `<a>` for navigation, real labels on form controls, and ARIA where a module calls for it.
- **No vendor leakage.** Describe and implement through tokens; never paste framework or vendor class strings from external docs into the work.
- **Form controls share one shell.** Text-like controls (`input-field`, `select`, `textarea`, …) inherit the field shell in `input-field.md` unless a module explicitly overrides it.
- **Themed form controls.** Checkboxes, radios, and toggles always render in **this theme's own style** — the theme `brand` fill when checked / selected / on, plus the theme's surface, border, radius, and focus-ring tokens — never the native/unstyled browser control and never another theme's colors. **Reset the native input** (`appearance: none`) and draw the control yourself — a native `accent-color` tint alone is **not** enough, it still renders the OS control: build the box / track, the checked `brand` fill, the check / dot / thumb mark, and the focus ring from this theme's tokens. See `checkbox.md`, `radio.md`, `toggle.md`.
- **Checkboxes are soft-rounded.** Every checkbox tick box — in forms, tables, filter dropdowns, and menus — is a **16 × 16px box with the `radius-xs` (4px) corner**. Never round the checkbox with `radius-full`; full rounding is for **radios** and genuinely round pills, not checkboxes. See `checkbox.md` and `radius.md`.
- **Real icon library.** Use a proper icon library — **FontAwesome Free or Lucide** (or an equivalent that fits your stack) — for every UI icon, sized and colored with the theme's tokens, and **use the outline / line style, never solid/filled icons**. Never hand-roll one-off inline SVGs, emoji, or icon-font glyphs for interface icons.
- **Real charts on dashboards.** When building an application, dashboard, or widget with data visualization, render it with a **real charting library** (e.g. Recharts, Chart.js, ECharts, visx, or your stack's equivalent) bound to real data and styled with the theme's color tokens — never a static image, CSS-bar mock, or placeholder graphic.
- **In-palette imagery — no stock photos, no bare-icon placeholders.** Product shots, category media, carousel slides, and every other content image render as **placeholder artwork drawn entirely from the theme's own tokens** — a soft light gradient field with a fine low-opacity texture, a framed-photo pictogram (frame, sun, layered hills with a seeded tone variation), small sparkle accents, and caption bars — composed as a real illustration. The artwork **fills its media frame edge to edge** (cover/slice cropping, centered); **never render media as a lone small icon centered on a gray tile**, and **never hotlink or bundle external photographs** (no stock-photo URLs, no third-party image hosts). The only verbatim external assets are **user-supplied brand files** (e.g. partner logos), served exactly as provided. Decorative section illustrations are likewise in-palette vectors or supplied assets.
- **Spacing comes from the fundamentals.** Take every margin, padding, and gap from the scale in `spacing.md` (never ad-hoc px). Always give **headings and paragraphs room above and below**, and **pad both sides of any border, separator, or divider** so content never crowds a rule. See `spacing.md` and `typography.md`.
- **Landing-page navbars share the hero band background.** Every navbar on a landing / marketing / storefront page (all its tiers) fills with **the same background as the hero band** (currently `#F1F2EA`) and closes with a **barely visible 1px bottom border one step deeper than that band** (currently `#E6E8DD`) — never a gray border, never a white or page-colored bar. **The dashboard / application top bar is the exception** and keeps its own app-shell treatment.
- **Navbar & footer links are text links, not buttons.** A link in the navbar or footer has **no padding and no background/fill hover** — it is **not** a ghost button. On hover it only **lightens its text color** (a subtle lighter/dimmer text tone) because it is a link, not a button. Reserve padded, background-hover treatments for real buttons and sidebar nav items. Adjacent nav links sit **24px** apart.
- **Section width: max 1280px, centered.** Every section's content sits in a **centered container with a max-width of `1280px`** (equal auto left/right margins). Sections are always horizontally centered — never left/right-aligned or off-center, and never wider than 1280px of content. A full-bleed background may still span the viewport, but the **content is capped at 1280px and centered**. Inside the container, the content keeps **48px of side padding (`padding-inline: 48px`, `spacing-12`) on both edges** — every section, the navbar, and the footer share the same inset so all content aligns to one left and one right edge.
- **Warm content surface — 1280px centered content (marketing / storefront only).** From the bottom of the hero to the top of the footer, the whole content area sits on one warm **section surface (`#F7F7F5`)** in the centered 1280px container — **no side rails, no gutter texture, no grain**; the surface stays flat and matte. Content sections are transparent over the white; nothing stripes it. **Only the hero and the footer carry the cream accent fill** (`#F1F2EA`), sitting full-bleed above and below the content. **Never on dashboard / application pages** — the app shell keeps its own full-width layout.
- **Section header → content gap: at least 64px (margin-bottom).** The **section heading block** — the section heading, plus any lead paragraph and/or buttons that belong with it — is separated from the **rest of the section's content** by a minimum of **64px**. Keep the heading, its paragraph, and its CTA buttons together as one intro block (their own internal gaps follow `typography.md` / `spacing.md`), then leave **≥ 64px** below that whole block before the body content begins. **Below the `sm` breakpoint (768px) this header → content gap steps down to 48px** — the one responsive step, applied equally on every section.
- **Section header max-width: 768px.** A section header — made up of any combination of an eyebrow, a heading, a supporting paragraph, and/or buttons (whichever the section uses) — is capped at **768px** wide (centered for centered headers, left-aligned within that measure otherwise) so the heading and lead wrap to a comfortable line length instead of stretching the full section width.
- **No decorative dashes or numbering in copy.** Never trail a word or label with a dangling dash flourish (e.g. `platform —`), and never number eyebrows, section labels, steps, or list items with zero-padded or hashed sequences (`01`, `02`, `#1`, `#2`). Eyebrows and headings are plain words: no dash "lines", no decorative counters.
- **No duplicate borders between sections.** Where two adjacent sections (or stacked cards, rows, widgets, list items) share an edge, **only one of them draws that border** — never both. If a section has a bottom border, the next section does **not** also add a top border, so the shared line stays a single hairline, never a doubled 2px line. Pick one direction (e.g. bottom-only) and apply it consistently; the last element omits the trailing edge.
- **No section separators — spacing alone divides sections.** Charm ships **no divider element between sections**: no ruled bands, no tick strips, no full-bleed hairlines between marketing / storefront sections. The symmetric section padding (see the section-padding rule above) is the only separation; two adjacent sections meet as plain white space. (Inside the dashboard, panels may still use their own hairline borders per their modules.)
- **Input focus = a deeper shade of its own fill.** On focus, an input's border and ring are the **same colour as the input's own background, darkened** (a deeper tint of the field fill) — a soft glow that reads as active without introducing a foreign colour.
- **Chart tooltip items take the series colour.** In a chart tooltip, each listed item — its swatch, label, and value — is rendered in **that series' chart colour**, so the tooltip maps 1:1 to the lines/bars it describes.
- **Button type & icon sizes.** Button label is **14px on base and small** buttons and **16px on large** buttons. The **gap between a button's icon and its label is 6px**.
- **Button tier placement.** Hero CTA buttons are **Large** by default; buttons in sections, cards, CTA cards, and the footer are **Base**; the **Small** tier is reserved for navbars, widgets, modals, drawers, and sidebars — it never appears in page content.
- **Buttons are consistent across sections — same anatomy everywhere.** A given button role looks and behaves identically wherever it appears on a page: a marketing CTA / signup / submit button carries the **same variant, height, radius, label weight, gradient fill, and control shadow** in the hero, the pricing cards, the CTA band, and the footer signup — do **not** let one section ship a small ghost button while another ships a large gradient primary for the same job. In particular, the **footer newsletter Subscribe button is the same button as the other marketing signup / CTA buttons** (a `brand` gradient primary), not a downsized odd-one-out. **In an input + button pair the two heights must match — and input tiers are defined by the button tiers: Small/Base/Large inputs equal the Small (~38px)/Base (~42px)/Large (~58px) buttons exactly, with the button sizes as the reference reality (the textarea is the one exception)**: pair a base field shell with a **base** button and a large (`--lg`) field shell with a **large** button — never a `small` button beside a base/large input (it renders visibly shorter than the field and reads as a mistake). Pick the button size to equal the field's control height, and reuse that same button treatment for the equivalent action in every section.
- **Landing-page check lists.** A list whose items lead with a **check icon** (feature ticks, plan inclusions, CTA reassurances) always renders the icon at **16px in the `brand` color**, with a **12px gap** between the icon and the text, and the item text at **font-weight-medium (500)** — every time, on every landing / marketing surface.
- **No decorative index numbers on landing pages.** It is **strictly forbidden** to prefix feature cards, steps, benefits, or any list item with a zero-padded ordinal (`01`, `02`, `03`) or any decorative counter on marketing / landing surfaces. Let the heading and copy carry the order and hierarchy — never a numbered badge, eyebrow, or "step 01" label. (Genuine data — a real count, a price, a stat value — is not a decorative index and is fine.)
- **Icon sizing.** An **18px icon is reserved for extra-large** contexts only; default UI icons stay smaller (≈14–16px). **Breadcrumb icons are ≤ 14px.** Always the outline style (see the icon-library rule). **The one exception is the bare marketing pictogram: on landing-page feature and stat blocks, an icon that sits directly on the surface with no shape behind it (no tile, chip, or icon container) renders at 36px, in the muted gray `body-subtle` (never the brand/ink), with a fixed 16px gap between the icon and the text beneath it** — the icon itself is the visual, so it takes display scale. **On a coral brand band the same bare pictogram keeps the 36px size but renders in soft white (white at ~85% opacity) instead of the gray**, since `body-subtle` is unreadable on the coral fill. The moment an icon sits inside a shaped container (an icon tile, button, input, badge, or list chip), it drops back to the standard control sizes above.
- **Table icons are 16px, never larger.** Any icon placed **inside a table** — a data table or a pricing / comparison table — is capped at **16px** (a `check` / `minus` / `x` cell mark, a sort caret, a row-action glyph, an inline status icon, etc.). Never let a table icon grow past 16px; if it sits in a tinted "chip" (e.g. a success circle behind a check), it may go **smaller** (~14px) so the icon reads comfortably inside its container, but 16px is the hard ceiling.
- **Dropdown panel border & shadow.** Every dropdown / menu panel carries a **border in its own background colour, darkened just enough to be visible** — a subtle darker edge of the panel's own fill, never a harsh contrasting line — plus a **medium drop shadow** so the menu lifts cleanly off the page.
- **Dropdown menus never scroll by default.** A dropdown / menu panel shows **all of its content at once** — no internal scrollbar, no capped `max-height`, no `overflow: auto/scroll`. Every item is visible and the panel grows to fit its items. Add a scroll area **only when the prompt explicitly asks for it** (e.g. a long searchable list); absent that instruction, never clip or scroll the menu. The panel always carries the **medium shadow** (see the dropdown panel rule above).
- **One hover background for every link surface.** Wherever a link or menu item shows a **background on hover** — top-nav links, sidebar links, dropdown / menu items, command-palette rows, tab-style links — it uses the **same single hover-background tint** (one subtle neutral fill), so the hover feedback is identical across navbars, sidebars, and dropdowns. Choose one value for this and reuse it everywhere — never give the sidebar one hover colour and the dropdown another. The **active / selected** state is a separate, stronger background (a brand tint), likewise reused consistently across all of these surfaces.
- **Selected table rows use the neutral hover background, not a brand tint.** A selected row takes the **same subtle neutral background a row shows on hover** — never a coral / brand-tinted fill. A row that is both **selected and hovered stays that exact same colour** (no deepening, no shift). Selection is signalled by the row's checkbox / control state, not by recolouring the row.
- **Textarea corners cap at 8px.** A `textarea` (multi-line field) takes the same slight **8px (`radius-md`) corner radius** as panels — never any fully-round rounding. Keep textarea corners at 4px so the field reads as a clean, soft-rounded rectangle.
- **Application widget grid gap is 16px.** On application / dashboard pages, the gap between widgets in the layout grid — both the row and column gutters between cards/widgets — is **16px**.
- **Widgets in the same grid row share the tallest widget's height — set a floor, never a fixed height.** A widget that needs a canvas (a chart, a gauge, a map) declares **`min-height`**, never `height`. A fixed height *locks* the widget, so when a taller sibling sits beside it in the same row the short one refuses to stretch and leaves a dead gap under its content, while the row's own height is set by the tall one anyway. With `min-height` the widget keeps a readable floor and still stretches to the row, and its chart area (the `flex: 1` fill) grows into the extra space. Widgets in a row are always flush top **and** bottom.
- **Widgets never carry their own outer margin — the container's `gap` owns the vertical rhythm.** The dashboard's widget column is a single flex/grid container with **one** `gap: 16px`; every widget and widget-row is a child of it. A widget must not add `margin-bottom` "to space itself", because the moment one widget does and its neighbour doesn't, the rhythm silently breaks (a standalone widget lands flush against the next with a 0px gap while gridded rows keep theirs). **One spacing source, no exceptions.**
- **A height-constrained scroll column must not squash its children.** When the dashboard's main column is a flex column with a constrained height and `overflow-y: auto`, its children inherit `flex-shrink: 1` — so the browser will **shrink every widget to fit the box instead of letting them overflow and scroll**. Tall widgets collapse (a data table crushes to a strip and, if it clips its own overflow, vanishes entirely). Pin the children: **`> * { flex-shrink: 0 }`**, so the column scrolls instead of crushing its content.
- **A scroll container must be a containing block.** Any element with `overflow: auto/scroll` also needs **`position: relative`**. Otherwise an absolutely-positioned descendant with no positioned ancestor (a visually-hidden input, an sr-only label, a decorative layer) anchors to the *initial containing block*, **escapes the scroll container entirely**, and stretches the document — producing a phantom second scrollbar and a long run of dead space below the page. The shell fits the viewport, yet `<html>` scrolls: that is always this bug.
- **Hero H1: 72px minimum, 1024px max-width.** The hero's `h1` is the largest type on the page — **at least 72px** font-size, never specced smaller (it may scale down only on narrow mobile viewports for fit). **The one exception is the storefront search hero** (display title + joined search group + deal carousel sharing the brand band): its title runs a fluid **36px → 60px** so the search group and carousel fit the band comfortably — it stays the largest type on the storefront page. Its text wraps within a **1024px** max-width so a long headline breaks onto a tight, readable column instead of running full-width. The **H1 carries a 44px `margin-bottom`**, which sets the gap down to the supporting paragraph. The supporting paragraph (hero lead) that follows the H1 is **20px** on large screens and scales **smaller on mobile** (≈16–18px), and it **also carries a 44px `margin-bottom`** — separating it from the CTAs / content below. The 44px on the H1 already provides the gap above the paragraph, so the paragraph takes **no separate top margin** (never stack a second gap on top of the H1's 44px).
- **One element owns the vertical padding — never two nested.** When a band, card, or CTA sits inside a section, **only one of them adds vertical padding**. A section and an inner band must not both pad top/bottom, or the block bloats and reads off-center. Decide which container owns the vertical rhythm and zero the padding on the other.
- **Newsletter / signup bands get a dedicated layout — not the button-actions slot.** A CTA that holds an **email field + submit button** is a signup row, not a button group: never drop it into a `cta-card__actions` (or any container built for side-by-side buttons). Build a dedicated band — a **two-column grid on desktop** (copy left, form right) with a **hero-style signup row**: a **full-width field shell + button, inline from ~640px up and stacked below that**. Give it a responsive title, a `font-size-lg` description, and a small helper line (e.g. "No spam. Unsubscribe anytime.") under the form. **Never a fixed narrow field width** (e.g. 18rem) beside a large button — the field flexes to fill the row.
- **Reset native element margins inside cards.** Elements the browser margins by default — `<blockquote>`, `<figure>`, `<p>`, `<ul>` / `<ol>` — are set to **`margin: 0`** whenever they are, or sit inside, a card. Otherwise the user-agent's default margin leaks **outside** the card border and reads as phantom padding around the box (a `<blockquote>` testimonial card is the classic trap). All spacing comes from the card's own padding. Also delete dead modifier classes that style nothing (e.g. unused `--1` / `--2` / `--3` variants).
- **Never delete a CSS rule without proving nothing uses it.** Before removing or "deduplicating" any style, **search the whole codebase for every class / selector it targets** (markup, components, templates, JS) and confirm **zero** references remain. A selector that appears only once in the stylesheet is **not** dead if any element still carries that class — deleting it drops that section to **unstyled HTML**. Deduplicate by **consolidating** repeated declarations into one rule, never by blindly deleting; when in doubt, keep it. After any CSS cleanup, **load the page and confirm every section still renders styled** — then hard-refresh (the dev server may still serve the old CSS bundle).
- **Zero a list's default left padding, not just its margin.** A `<ul>` / `<ol>` used as a layout row, nav, or menu carries the browser's default **~40px left padding** (`padding-inline-start`, reserved for bullets) — `margin: 0` and `list-style: none` do **not** remove it. Explicitly set **`padding: 0`** (or `padding-inline: 0`); if you only set `padding-block`, that left inset stays and the whole row is pushed ~40px inward, misaligning it with the logo / page container. Let the page container own horizontal alignment — the list contributes no indent of its own.
- **Sidebar links: the same contrasting background on hover and active.** Every nav link in a sidebar shows a **background fill on both hover and its active / current state, and it is the same fill** — a shade **darker than the sidebar's own background** so it reads clearly against it. The fill has **soft-rounded (`radius-md`, 8px) corners matching this theme**, never a foreign or rounded radius. Hover and active look identical in shape and colour; the active item may add a text / icon emphasis (weight or a brand tint) but the background stays that one shared lighter fill.
- **Navbar buttons: one small size, one weight; no underlines on nav / sidebar links.** In a navbar, **every button is the small size** — never mix small with base or large — and **all navbar buttons share the same size and the same text font-weight**, so the bar reads consistent. And **underlined text is never allowed, in any state** (default, hover, focus, active), for **navbar links, navbar buttons, or sidebar links / buttons** — these navigation targets signal interactivity through colour and background, never an underline.
- **Translucent backgrounds must blur what's behind them.** Any element with a **semi-transparent / translucent fill** — a sticky or floating navbar, a frosted card, an overlay, a glass panel — **must** pair that translucency with a **backdrop blur** (`backdrop-filter: blur(...)`, plus the `-webkit-backdrop-filter` prefix for Safari). Without it, page content scrolling **underneath** shows through razor-sharp and reads as a confusing jumble. The blur turns the see-through fill into frosted glass so the element stays legible over anything; keep a tint _with alpha_ under the blur so text holds its contrast, and fall back to an opaque fill where `backdrop-filter` is unsupported. (A fully opaque background needs no blur — this applies only when the fill has alpha.)
- **Badges are always width auto — never full-width.** A badge / tag / chip / status pill sizes to **its own content** (`width: auto`, an `inline-flex` / `inline-block` box that hugs its label + optional icon). It **never stretches to fill its container** — no `width: 100%`, no block/flex that spans the row, no `flex: 1`, no `align-items: stretch` pulling it edge-to-edge. Several badges in a row sit side by side (and wrap) at their natural widths, each only as wide as its text.
- **Pricing card: 24px between the price and the CTA button.** In a pricing card, leave **24px** between the **price line** (e.g. `$249/month`) and the **CTA button** tied to it — this is the default gap unless a prompt specifies otherwise. Apply it consistently across every tier so the prices and buttons line up row-to-row.
- **Avatar-only triggers carry no chevron.** In a navbar / top bar, an **avatar shown on its own** (just the photo / initials circle) is itself the trigger — do **not** put a chevron caret beside a bare avatar. A chevron is added **only when the avatar is paired with a visible label** (the person's name / role): `avatar + name → chevron` is fine, `avatar alone → no chevron`. A lone avatar plus a chevron reads as clutter; the avatar is already the affordance.
- **Joined input + button groups square the shared edges.** When an input is **attached to buttons (or addons) on its left and/or right** — a search-with-button, a stepper, a prefix/suffix group, any segmented control where an input touches a button — the **touching edges are squared to `0` radius** so the pieces read as one seamless control. An input with a button on **both sides** has **no border radius at all**; with a button on one side it keeps the theme's radius on the free side and `0` on the joined side. Only the **outer corners of the whole group** carry the theme's normal radius. Critically, the input's **focus border / ring must follow that squared corner too** — never let a rounded corner (or a rounded focus outline) peek out at the seam when the input is focused; the focus state matches the 0-radius joined edge exactly.
- **Card headings are 20px.** A card's heading / title — ecommerce & product cards, feature cards, pricing cards, testimonial and content cards, and cards in general — is **20px**. The **one exception is dashboard / application widgets**: a widget's heading follows the smaller, dense widget-title scale, not this 20px card-title size.
- **Ecommerce navbar collapses to one row on mobile.** On narrow viewports (**< 768px**) the ecommerce header is a **single bar** — logo at the inline start, a **hamburger menu button** at the inline end. The desktop secondary content **collapses off the bar**: the search field, cart / account actions, and the whole category row are **hidden** and move into a **menu panel that opens below the bar** (search + category links + a **"View all categories"** entry). On desktop the full **two-level layout** returns — search + logo + cart / account on the top row, categories on a row beneath. Use the **same hamburger + collapsible-panel pattern as the marketing navbar** so both headers behave consistently.
- **Modals carry a visible border.** On Charm's light surface a modal **must** have a clear border so the panel edge reads crisply over the dimmed backdrop — a **1px `default-medium` (`#D6D3D1`)** edge (a step stronger than the standard `default` `#E7E6E5`) around the `neutral-primary-soft` panel, on top of the dimming scrim. A borderless modal melts into the scrim; the border (with the scrim) is what defines the dialog's shape. See `modal.md`.
- **Heading line-height splits at 52px.** A heading's line-height follows its **rendered font size**: only **huge headings — rendered 52px or larger** (chiefly the marketing hero `h1`) use `line-height-display` (**1**); **every heading below 52px** — section `h2` titles, band / sub-section headings, card titles, and any heading whose largest rendered size is under 52px — uses `line-height-heading` (**1.3**). Never put tight 1:1 leading on a sub-52px heading (it crowds multi-line titles); judge a responsive `clamp()` heading by its **maximum** rendered size. See `typography.md`.
- **Card treatments live in `cards.md`.** Charm's card _visual_ rules — flat static panels, glued-grid composite panels, and bento decorative visuals — are specified in full in `cards.md`; read it before building any card. **Cards are flat and static: on the white column a soft-white `neutral-primary-soft` (`#FBFAF9`) panel with a uniform 1px `default-subtle` (`#EBEBE7`) hairline; on the gray app surface a white `neutral-primary` panel with a `default` border — no hover glow, no border light-up, no pointer-tracking effects, ever.**
- **No hover glow anywhere — cards and tables are static.** Charm ships **no** pointer-tracking edge-glow and **no** breathing-border hover treatment: a card's surface is identical at rest and on hover (see `cards.md`), and a **table** (data or pricing / comparison) is likewise static — its only hover feedback is the subtle neutral **row** hover tint from `tables.md`. Nothing on the page glows, lights up, or tracks the cursor.
- **16px floor for body & reading text.** No **body / paragraph / content text** on a page renders **below 16px** — hero leads, section descriptions, card body copy, list-item prose, and any running text sit at **≥ 16px**. The **only** exceptions are genuine **micro-elements** — badges, chips, tags, table meta / captions, helper & hint microcopy, eyebrows, and similar tiny labels — which may drop below 16px per their component specs. **Never shrink page body copy below 16px to make it fit** — if space is tight, cut words, not the size. This raises the reading-text floor above the 14px control baseline: interactive control labels and the micro-elements above may still use the compact scale, but the text a visitor actually reads does not.
- **Inline input + button pairs are width-bounded.** Wherever an input sits next to a button in one row — a newsletter signup, sign-in, search, or promo field, in **any section, on a landing page, a dashboard, or inside a card** — the **input is never wider than 400px**, and the **whole group (input + button together) is never narrower than 440px nor wider than 600px**. In practice: clamp the group to a **440–600px** band and cap the input at **≤ 400px** inside it (the button takes the remainder). This keeps the field comfortably sized and the pairing balanced — never a stretched full-width input, never a cramped one. Below the group's min width (narrow mobile), stack the button under the input rather than shrinking either past these bounds.
- **Every input shows a brand border on focus — no exceptions.** Any focusable field — a text/email/password input, textarea, select, a search bar, a number/phone/file control, or a range slider — swaps its resting `default` (`#E7E6E5`) border to the **`brand`** edge under a **soft brand ring** the moment it is active/focused, and drops the browser's default outline. A **composite shell** (a bordered wrapper around a borderless inner `<input>`, e.g. an icon search field or the dashboard search) puts the focus state on the **wrapper via `:focus-within`**, never a ring around the inner input alone; a **standalone input** lights up on its own `:focus-visible`; a **range slider** rings its thumb, not the whole track. This is the single, consistent focus signal across every page — marketing, storefront, and dashboard. See `input-field.md`.
- **Every content section sits on the warm `#F7F7F5` surface — no film grain, ever.** All content sections share the one warm section surface (`#F7F7F5`) with **no texture of any kind**: no grain, no noise, no printed pattern, no dot grids. Charm surfaces are flat and matte; warmth comes from the palette (`#FBFAF9` panels, `#F1F2EA` bands), never from texture. Surfaces are always flat and matte — no grain, no noise, no printed pattern.
- **The hero and the footer are the two cream accent bands — nothing else is.** Both the **hero** and the **footer** fill the **soft cream `#F1F2EA`** — always this exact cream — flat and untextured (no grain, no texture art — the hero's `patterns.md` line pattern is the one sanctioned exception), **fading into the `#F7F7F5` section surface at the shared edge**: the hero runs a vertical gradient from `#F1F2EA` down into `#F7F7F5` at its bottom edge (where the second section begins), and the footer mirrors it, fading from `#F7F7F5` at its top edge down into `#F1F2EA`. They keep the **normal ink text** (`heading` `#1C1917` titles over `body` copy; links in `fg-brand`). Buttons on them keep their standard variants (the gradient `brand` primary reads perfectly on cream), and **every border, rule, or divider that sits on the cream `#F1F2EA` fill is `dark-subtle` (`#E6E8DD`) — always**; never `default`, never a gray hairline. **No other section uses the cream fill.**
- **Solid ink display headings — no text gradients.** On marketing and landing pages, large display headings (the hero `h1` and section `h2` titles) render in **solid `heading` ink (`#1C1917`)** — bold (700), tightly tracked — with **no gradient fill, no clip effects, and no decorative text treatments**. The display face and its weight carry the emphasis. This applies on app surfaces too: every heading everywhere is a flat, solid `heading` ink.
- **Hero pattern — always `#E1E2D5`.** The hero band carries a **full-bleed line pattern** laid **absolutely over the whole hero region — behind the navbar, the headings, the CTAs, and the mockup** (content sits above it; the navbar goes transparent so the pattern shows through). The pattern strokes are **always `#E1E2D5`** — soft against the band, visible but never hard — and the layer **fades to transparent toward the band's bottom edge** so it dissolves before the content below. The pattern is one of the **five sanctioned variants in `patterns.md`** — the current hero uses **variant 2, the contour ribbons** (~30 parallel flowing curves weaving diagonally across the band at ~0.5 stroke opacity). Never recolor the strokes toward gray or the brand, never raise them to full-strength lines, and never use a pattern outside the hero band.
- **Mockup framing — the translucent mat.** Every product mockup, dashboard preview, or app screenshot slide is framed in **two layers**: an **outer mat** — a translucent warm field (`rgba(68, 25, 6, 0.04)` fill) with a near-invisible **1px `rgba(68, 25, 6, 0.05)` border**, **20px radius**, and **8px padding** — and the **mockup surface floating inside it** with a **12px radius** and a visible warm **1px `rgba(68, 25, 6, 0.14)` hairline** — **no shadow of any kind: shadows on mockups are forbidden**. The inner surface clips its content (`overflow: hidden`) so the mockup shares the 12px corner. Never frame a mockup with a single thick border, never drop it bare on the surface, and never add a drop shadow to it.
- **Mockup spacing.** When a mockup or visual (screenshot, app preview, product shot, device frame, illustration) is stacked with text above or below it, leave **~52px** between the mockup and the adjacent content — both above and below — so the visual reads as its own block and never crams against the copy.
- **Prohibited sections are binding.** Each module closes with hard constraints — treat them as such, not as suggestions.

---

## Module index

### Foundation — read first for any UI work

- [colors.md](colors.md) — semantic background, text, border, and status color tokens
- [typography.md](typography.md) — heading scale, body text, labels, links, weights
- [spacing.md](spacing.md) — spacing scale (`spacing-*`) for padding, margin, and gap
- [radius.md](radius.md) — border-radius scale (`radius-xs` … `radius-full`) and the soft 8px-control + 16px-panel convention
- [shadows.md](shadows.md) — elevation tokens (`elevation-none` … `elevation-5`)
- [responsive.md](responsive.md) — breakpoints, the no-horizontal-scroll law, and per-surface adaptation rules

### Actions & content

- [buttons.md](buttons.md) — button variants, sizes, states
- [button-group.md](button-group.md) — grouped buttons, toolbars, pagination groups
- [cards.md](cards.md) — card structure, media, actions
- [mockups.md](mockups.md) — self-drawn vector product mockups and the translucent mat frame
- [patterns.md](patterns.md) — the hero background patterns: the `#E1E2D5` color rule and the five sanctioned variants
- [alerts.md](alerts.md) — inline feedback messages (success, error, warning, info)
- [badges.md](badges.md) — labels, counts, status chips
- [breadcrumb.md](breadcrumb.md) — breadcrumb navigation

### Form controls

Shared shell and validation patterns live in [input-field.md](input-field.md).

- [input-field.md](input-field.md) — single-line text, email, password, URL, groups, search, validation
- [file-input.md](file-input.md) — file upload, multi-file, dropzone
- [number-input.md](number-input.md) — numeric entry, steppers, currency, PIN
- [phone-input.md](phone-input.md) — tel, country code, OTP verification
- [select.md](select.md) — native select and custom dropdown trigger
- [textarea.md](textarea.md) — multi-line text, comment box, chat input, editor chrome
- [timepicker.md](timepicker.md) — time entry, ranges, presets
- [checkbox.md](checkbox.md) — multi-select, list groups, bordered options
- [radio.md](radio.md) — single-select, list groups, advanced card pickers
- [toggle.md](toggle.md) — on/off switch
- [range.md](range.md) — horizontal slider

### Navigation & structure

- [accordion.md](accordion.md) — expandable sections
- [tabs.md](tabs.md) — tab navigation (default, underline, pills, vertical)
- [pagination.md](pagination.md) — page navigation, table pagination
- [dropdowns.md](dropdowns.md) — dropdown menus, items, dividers

### Overlays & feedback

- [modal.md](modal.md) — modal dialogs, form modals, sizes, placement
- [drawer.md](drawer.md) — slide-in panels, navigation drawer
- [tooltips.md](tooltips.md) — tooltips, placement, triggers

### Data display

- [tables.md](tables.md) — table structure, sorting, selection, pagination

---

## Canonical vs. summary files

Some installs ship two layers:

| Layer                 | Where                                                             | Use for                                                                                      |
| --------------------- | ----------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| **Canonical modules** | This directory (`colors.md`, `buttons.md`, …)                     | Full anatomy, tokens, states, accessibility, and prohibited rules — read before implementing |
| **Summary stubs**     | Optional nested skill folder (e.g. `.agents/skills/`, `.cursor/`) | Quick orientation and links into the canonical modules                                       |

Summaries are indexes, not substitutes. If a stub and a module ever disagree — on a color, a size, a variant, anything — **the module in this directory wins.**

# Accordion — TypeUI · Charm

> **TypeUI · Charm** — stacked expand/collapse panels.
> Depends on: `colors.md`, `radius.md`, `shadows.md`, `typography.md`

An accordion folds long content — FAQs, settings sections, help — into scannable rows. In Charm it comes in three builds (grouped, separated cards, flush), but the silhouette is constant: **soft-rounded** (`radius-md`, 8px) on the outer shell, **no perimeter border**, hairline `default` dividers between items (functional row separators), and a chevron that rotates 180° as a panel opens. Triggers stay quiet (`body` closed, `heading` on a soft fill when open); only the brand-emphasis variant raises the volume. Depth is flat throughout — separation comes from a lighter card surface and the row dividers, never a shadow.

---

## Anatomy

| Part | Role |
|---|---|
| **Root** | Optional outer frame that groups items (variant-dependent) |
| **Item** | One trigger + one panel pair |
| **Trigger** | Full-width control row — label, optional leading icon, trailing indicator |
| **Indicator** | Chevron or custom icon at the inline end; signals expand/collapse |
| **Panel** | Collapsible content region below its trigger |
| **Content** | Inner padding wrapper for body copy, lists, and nested accordions |

---

## Layout

### Trigger row

| Property | Value |
|---|---|
| Width | 100% of parent |
| Direction | Horizontal — label cluster at start, indicator at end |
| Alignment | Center vertically, space between start and end |
| Gap (label ↔ indicator) | 12px |
| Padding | 20px all sides |
| Min touch height | 44px total row height (padding + line box) |

### Panel content

| Property | Value |
|---|---|
| Padding | 20px all sides; 16px on narrow viewports |
| Paragraph spacing | 8px below each paragraph except the last |
| List inset | 20px from inline start; disc markers for unordered lists |

### Leading icon (optional)

| Property | Value |
|---|---|
| Size | 20 × 20px |
| Gap to label | 8px |
| Color | Inherits trigger text color |
| Position | Inline before label text, vertically centered with label |

---

## Typography

| Element | Size | Weight | Color token |
|---|---|---|---|
| Trigger label | font-size-sm | font-weight-medium | See states below |
| Panel body | font-size-sm | font-weight-normal | `body` |
| Panel links | font-size-sm | font-weight-normal | `fg-brand` |
| Panel link (hover) | font-size-sm | font-weight-normal | `fg-brand` + underline |
| List items in panel | font-size-sm | font-weight-normal | `body` |

Panel body line height is **line-height-body** (1.5 → 21px at 14px).

A trigger label stays **single line** where possible; let it wrap when the string is long — never ellipsis-truncate an FAQ trigger.

---

## Color & surface

All values reference semantic tokens from `colors.md` — never raw hex or palette steps.

### Trigger — default emphasis

| State | Text | Background |
|---|---|---|
| Closed | `body` | Transparent (shows root or page surface) |
| Open | `heading` | `neutral-secondary-medium` |
| Hover | `heading` | `neutral-secondary-medium` |
| Focus | Same as hover/open | Same as hover/open + focus ring (below) |
| Disabled | `fg-disabled` | Unchanged; no hover/open shift |

### Trigger — brand emphasis (color variant)

| State | Text | Background |
|---|---|---|
| Closed | `body` | Transparent |
| Open | `fg-brand` | `brand-softer` |
| Hover | `fg-brand` | `brand-softer` |
| Focus | Same as hover/open | Same as hover/open + focus ring |
| Disabled | `fg-disabled` | Unchanged |

### Panel

| Property | Token |
|---|---|
| Background | `neutral-primary` (or transparent in flush variant) |
| Body text | `body` |
| Top edge | 1px `default` border separating panel from trigger above |

### Focus ring

| Property | Value |
|---|---|
| Width | 2px |
| Color | `brand-subtle` or `brand-light` |
| Offset | 0–2px outside trigger box |
| Shape | Follows trigger corner radius |

---

## Border & radius

The soft-rounded (8px) corner lives on the outermost shell; interior items square off so the rounding reads only at the edges of the group.

### Variant: grouped (default)

| Element | Border | Radius |
|---|---|---|
| Root | None — lighter card surface defines the group | `radius-md` (8px) on outer corners |
| Root overflow | Clip children to root radius | — |
| Item separator | 1px `default` bottom border on each item except the last | — |
| First item trigger | No top border (root provides it) | Top corners match root (`radius-md`) |
| Last item panel | No bottom border when closed; when open, bottom corners match root | Bottom corners `radius-md` when last and expanded |
| Middle items | Top/side borders removed — only bottom divider | Square corners on trigger |

### Variant: separated cards

| Element | Border | Radius | Shadow |
|---|---|---|---|
| Each item (closed) | None — lighter card surface over the section | `radius-md` all corners | None (`elevation-none`) |
| Item gap | — | — | 16px vertical space between items |
| Trigger when open | None; bottom edge open to panel | Top corners `radius-md`; **bottom corners square** | None |
| Panel when open | None; top edge shared with trigger | Bottom corners `radius-md` | None (`elevation-none`) |

### Variant: flush

| Element | Border | Radius | Background |
|---|---|---|---|
| Root | None | None | Transparent |
| Item separator | 1px `default` bottom border only | None | Transparent triggers and panels |
| Trigger padding | 20px vertical; horizontal aligns with parent content | — | Transparent |

---

## Shadow

| Variant | Shadow token | Where |
|---|---|---|
| Grouped (default) | `elevation-none` | Root wrapper only |
| Separated cards | `elevation-none` | Each closed card; open panel block (not on open trigger) |
| Flush | None | — |

---

## Indicator (chevron)

| Property | Value |
|---|---|
| Default icon | Chevron pointing down (stroke style) |
| Size | 20 × 20px |
| Color | Inherits trigger text color |
| Closed rotation | 0° (points down) |
| Open rotation | 180° (points up) |
| Transition | 150ms ease on rotation |
| Shrink | Indicator never compresses — fixed 20px box |

### Indicator alternatives

| Style | Behavior |
|---|---|
| **No indicator** | Trigger label only; panel state shown by background/border change |
| **Static icon** | Custom 20 × 20px icon at inline end — **no rotation** on open |
| **Replace chevron** | Any 20 × 20px icon at inline end; rotation optional per design intent |

One trailing indicator per trigger — never stack a chevron and a second icon at the same edge.

---

## Motion

| Transition | Duration | Properties |
|---|---|---|
| Trigger colors | 150ms | Text color, background color |
| Chevron rotation | 150ms | Transform rotate |
| Panel reveal | 150–200ms | Height / opacity (implementation-specific; visually smooth, not abrupt) |

Respect reduced-motion: instant state change or opacity-only fade — no forced rotation.

---

## Variants summary

| Variant | Outer frame | Item separation | Trigger hover (default) | Best for |
|---|---|---|---|---|
| **Grouped** | Single borderless, rounded, flat shell | Shared dividers | `neutral-secondary-medium` + `heading` text | FAQ blocks, settings sections |
| **Separated cards** | None — independent cards | 16px gap | Same as grouped | Scannable lists, spaced FAQ |
| **Flush** | None | Bottom borders only | Background shift optional; flush uses text-only dividers | Inside cards, sidebars, dense layouts |
| **Brand emphasis** | Same shell as grouped or separated | Same | `brand-softer` + `fg-brand` text | Marketing FAQ, featured help |

Open-behavior (one panel vs many) doesn't change visual tokens — only which items carry the open styling at once.

---

## Nested accordion

When an accordion lives inside another panel:

| Property | Value |
|---|---|
| Spacing above nested root | 16px below preceding panel paragraph |
| Nested root | Full grouped variant spec — borderless, `radius-md`, flat (`elevation-none`) |
| Nested trigger background | May use `neutral-primary-soft` on individual items for depth |
| Nesting depth | Visual tokens stay identical; avoid more than **two** visible border shells deep |

A nested accordion sits inside the content padding, never flush to the parent panel's edges.

---

## Content inside panels

| Element | Spec |
|---|---|
| Paragraphs | `body` color; 8px margin below between paragraphs |
| Links | `fg-brand`; underline on hover only |
| Unordered lists | `body` color; 20px inline-start padding; disc markers |
| Nested accordion | See nested section above |

Don't drop primary buttons into a panel without their own button spec — if used, follow button spacing (16px above the first button).

---

## States reference

| State | Grouped / separated trigger | Flush trigger |
|---|---|---|
| Closed | `body` text; transparent or `neutral-secondary-soft` if flush active styling | `body` text |
| Open | `heading` text; `neutral-secondary-medium` background | `heading` text; optional `neutral-primary` background |
| Hover | `heading` text; `neutral-secondary-medium` | `heading` text |
| Focus | Open/hover colors + 2px brand focus ring | Same |
| Disabled | `fg-disabled`; no background shift; no pointer affordance | Same |

---

## Prohibited

- **No outer shell above `radius-md`** — the soft-rounded (8px) frame is the signature; interior items square off, they never round further.
- **No mixed variants in one root** — don't combine a grouped shell with separated-card item styling.
- **No indicator larger than 20px or smaller than 16px** — chevron readability breaks at the extremes.
- **No status colors** (`success`, `danger`, `warning`) on triggers unless the accordion communicates live system state — never decoration.
- **No shadow on the flush variant** — flush is flat by definition.
- **No removing the panel top border** in grouped/separated variants — the trigger↔panel edge stays visible.
- **No centered trigger labels** in LTR — label at start, indicator at end (mirror for RTL).
- **No all-caps trigger labels** — sentence or title case per the type system.
- **No raw hex or palette steps**, and no one-off border widths — dividers are 1px `default` unless a variant table says otherwise.

# Alerts — TypeUI · Charm

> **TypeUI · Charm** — inline, persistent status messaging.
> Depends on: `colors.md`, `radius.md`, `shadows.md`, `spacing.md`, `typography.md`

A Charm alert is a calm, flat (`elevation-none`) **soft-rounded** (`radius-md`, 8px) panel filled with its intent's soft color and written in that intent's foreground. It lives *in the flow* of the page and stays until dismissed or resolved — it is not a toast and never auto-times-out. Intent is meaning, not decoration: the brand-tinted info, green success, red danger, and orange warning fills each mean exactly what they say, and one alert carries exactly one intent. Depth stays on the ground — lifting an alert off the page is the job of modals and dropdowns, not this component.

---

## Anatomy

| Part | Role |
|---|---|
| **Root** | Full-width or inline container with background, radius, and optional border |
| **Leading icon** | Optional status glyph at inline start |
| **Content** | Message text — plain, titled, or with list |
| **Title / emphasis** | Short bold lead-in within the message (`font-weight-medium`) |
| **Inline link** | Optional anchor inside body copy |
| **List** | Optional bullet list below a lead sentence |
| **Dismiss control** | Optional icon button at inline end |
| **Badge** | Optional pill label in announcement variant |
| **Trailing icon** | Optional chevron in announcement variant |
| **Action** | Optional button below body in expanded variant |

---

## Layout

### Root (default block alert)

| Property | Token / value |
|---|---|
| Width | 100% of parent (block); auto width for announcement variant |
| Direction | Horizontal row when icon and/or dismiss present |
| Padding | `spacing-4` all sides |
| Margin below (stacked alerts) | `spacing-4` |
| Alignment (icon row) | Center vertically on wide viewports; start-aligned on narrow when text wraps |
| Gap (icon ↔ content) | `spacing-2` |
| Gap (content ↔ dismiss) | Auto — dismiss pushed to inline end |
| Gap (title ↔ body in expanded variant) | `spacing-2` above body block |
| Gap (body ↔ action in expanded variant) | `spacing-4` below body block |

### Leading icon

| Property | Token / value |
|---|---|
| Size | 16 × 16px |
| Color | Inherits intent foreground token |
| Shrink | Fixed box — never compresses |
| Optical offset | `spacing-0-5` top nudge when row is start-aligned; none when vertically centered |

Default glyph: an **info circle** (stroke style) for every intent unless a spec names an intent-specific icon.

### Dismiss control

| Property | Token / value |
|---|---|
| Size | **20 × 20px max** — the close (×) button is capped at 20 × 20px in alerts |
| Icon inside | 16 × 16px close (×) stroke |
| Position | Inline end; vertically centered with first line of content |
| Inner padding (some intents) | `spacing-1-5` |
| Optical inset | Negative `spacing-1-5` margin on inline/block axis to align glyph with alert edge |
| Corner radius | `radius-md` |

### List inside alert

| Property | Token / value |
|---|---|
| Gap below lead sentence | `spacing-2` |
| Gap between list items | `spacing-1` |
| Inline-start inset | `spacing-2-5` |
| Marker | Disc, outside position |
| Item text | Same as body (`font-size-sm`, intent foreground) |

---

## Typography

Alerts hold at `font-size-sm` throughout — even a titled or expanded alert never borrows the heading scale. Emphasis comes from weight, not size.

| Element | Size | Weight | Line height | Color |
|---|---|---|---|---|
| Body / message | font-size-sm | font-weight-normal | line-height-body | Intent foreground (see table below) |
| Title / emphasis span | font-size-sm | font-weight-medium | line-height-body | Same as body |
| Expanded heading (h3 slot) | font-size-sm | font-weight-medium | line-height-body | Same as body |
| Inline link | font-size-sm | font-weight-medium | line-height-body | Same as body + underline |
| Inline link (hover) | font-size-sm | font-weight-medium | line-height-body | Underline removed |
| Visually hidden intent label | font-size-sm | — | — | Screen-reader only |

All alert copy uses **`font-family`**. Do not use heading-scale sizes inside alerts — even titled alerts stay at **`font-size-sm`**.

---

## Intents

Each intent maps a background, foreground, and border token from `colors.md`. Pick the intent that matches the message — one intent per alert root, never for flavor.

| Intent | Background | Foreground | Border (bordered variants) |
|---|---|---|---|
| **Info** | `brand-softer` | `fg-brand-strong` | `brand-subtle` |
| **Success** | `success-soft` | `fg-success-strong` | `success-subtle` |
| **Danger** | `danger-soft` | `fg-danger-strong` | `danger-subtle` |
| **Warning** | `warning-soft` | `fg-warning` | `warning-subtle` |
| **Neutral** | `neutral-secondary-medium` | `heading` | `default-medium` |

---

## Border & radius

Block alerts and the inline announcement are **fully-round pills** (`radius-full`, 9999px) — like buttons and inputs.

| Variant | Border | Radius |
|---|---|---|
| **Default** | None | `radius-md` |
| **Bordered** | 1px intent border on all sides | `radius-md` |
| **Top accent** | 4px (`spacing-1`) intent border on **top edge only**; no side/bottom border | `radius-md` on bottom corners; top edge square against accent bar |
| **Announcement** | 1px intent border on all sides | `radius-md` (8px, soft-rounded) |

Default alert shells use **`elevation-none`** — depth comes from color, not shadow.

---

## Shadow

| Variant | Shadow |
|---|---|
| Default, bordered, top accent, list, dismissible | `elevation-none` |
| Announcement (inline pill) | `elevation-none` |
| Action button inside expanded alert | Follow button component — typically `elevation-none` on primary action |

Never add elevation to the alert root to "lift" it off the page — that role belongs to modals and dropdowns.

---

## Variants

### Default

Soft intent background, no border, no icon required.

```
[ optional emphasis title + body text in font-size-sm ]
```

### With icon

Default plus a 16px leading icon. Content may be a single paragraph or `<p>` wrapper, with an emphasis span before the rest of the sentence (`spacing-1` gap after the emphasis word).

### Bordered

Default or icon layout plus a **1px** intent border on the full perimeter — use it when the alert sits on a surface that matches its background and needs a defined edge.

### With list

Icon + content column: a lead sentence in `font-weight-medium`, then a disc list below at the spacing in the list table above.

Include a **visually hidden** intent name (e.g. "Danger") for screen readers when the visible copy doesn't state the intent.

### Dismissible

Icon row + message + dismiss control; the message column gains a `spacing-2` inset from the icon when a dismiss is present.

Dismiss button states:

| State | Info | Danger | Success | Warning | Neutral |
|---|---|---|---|---|---|
| Default | Transparent; `fg-brand-strong` icon | `danger-soft` fill; `fg-danger-strong` icon | Transparent; `fg-success-strong` icon | Transparent; `fg-warning` icon | Transparent; `heading` icon |
| Hover | `brand-soft` background | `danger-medium` background | `success-medium` background | `warning-medium` background | `neutral-tertiary-medium` background |
| Focus | 2px ring `brand-medium` | 2px ring `danger-medium` | 2px ring `success-medium` | 2px ring `warning-medium` | 2px ring `neutral-tertiary` |

Focus ring offset: 0–2px outside the 32px hit target. Shape follows `radius-md`.

### Top accent

A **4px top bar** in the intent border color instead of a full outline, static or dismissible. Background and typography match default — use it for page-level notices that need scan value without a full border.

### Additional content (expanded)

A filled, borderless shell (the intent's soft fill separates it). **Header row:** icon + title + dismiss (space-between). **Body block:** `spacing-2` below the header, `spacing-4` above an optional action. **Action:** a primary button per the button spec (`font-size-xs`, compact padding) using the intent's solid fill (`brand`, `danger`, `success`, `warning`, or neutral dark-soft for the neutral intent).

The title slot uses the same `font-size-sm` / `font-weight-medium` as every other alert — not the page heading scale.

### Announcement (inline)

An inline-flex, content-width row — rounded like every other alert.

| Part | Spec |
|---|---|
| Root padding | `spacing-1` all sides; `spacing-2` padding-inline-end |
| Badge | Intent medium/soft fill; `font-size-sm`; `font-weight-medium`; `radius-md` (8px); padding `spacing-0-5` vertical, `spacing-2` horizontal |
| Message gap after badge | `spacing-2` |
| Trailing chevron | 16 × 16px; `spacing-1` margin inline-start; inherits foreground |
| Border | 1px intent border |
| Background | Intent soft background (same as block alerts) |

Badge fill per intent:

| Intent | Badge background | Badge text |
|---|---|---|
| Info | `brand-soft` | `fg-brand-strong` |
| Danger | `danger-medium` | `fg-danger-strong` |
| Success | `success-medium` | `fg-success-strong` |
| Warning | `warning-medium` | `fg-warning` |
| Neutral | `neutral-quaternary` | `heading` |

The whole row may act as a link — cursor and hover follow the product's link/button rules.

---

## Motion

| Transition | Duration | Properties |
|---|---|---|
| Dismiss fade | 300ms | Opacity |
| Dismiss timing | ease-out | — |
| Hover on dismiss / links | 150ms | Background color, underline |

On dismiss, remove from the DOM or hide visually once the animation completes, then fire any callback. Respect **reduced-motion**: skip the fade — hide immediately or step opacity only.

---

## Accessibility

| Requirement | Spec |
|---|---|
| Role | `role="alert"` on root for important, time-sensitive messages; `role="status"` for passive info if appropriate |
| Live region | Critical errors may use `aria-live="assertive"`; informational alerts use `aria-live="polite"` or static role only |
| Dismiss | `aria-label="Close"` or `"Dismiss"` on dismiss control; visible text not required |
| Icon | `aria-hidden="true"` on decorative icons |
| Hidden intent | Visually hidden text naming intent when icon-only lead |
| Focus | Dismiss control must be keyboard focusable; focus ring per table above |
| Color | Never rely on color alone — icon or text must convey intent |

---

## Stacking & placement

| Rule | Value |
|---|---|
| Vertical gap between alerts | `spacing-4` |
| Max width | 100% of content column — no arbitrary max unless layout spec defines one |
| Inside forms | Full width above or below the field group it describes |
| Inside cards | Inset by card content padding — do not bleed past card inner edge |
| With page headings | `spacing-4`–`spacing-6` below heading or above form — tighter than section breaks |

Never nest an alert inside another alert.

---

## States reference

| State | Visual change |
|---|---|
| Default | Intent background + foreground |
| Hover (dismiss only) | Dismiss background per intent table |
| Focus (dismiss only) | Intent focus ring on dismiss control |
| Dismissed | Removed or hidden — no ghost placeholder |
| Disabled | Not applicable — alerts are read-only containers |

Links inside alerts follow standard link hover (underline toggle); the alert shell itself has no hover state.

---

## Prohibited

- **No toast behavior** — alerts persist; they auto-dismiss only when product logic explicitly removes them.
- **No wrong intent colors** — danger copy on a success fill breaks trust and accessibility.
- **No multiple intents in one root** — split mixed messages into separate alerts.
- **No shadow on alert roots** — `elevation-none`, except this file's action-button exception.
- **No off-scale radius** — every alert, block or announcement, is soft-rounded (`radius-md`, 8px); nothing rounds further.
- **No heading scale inside alerts** — stay at `font-size-sm`; page titles live outside the alert.
- **No nested alerts** — one root per message block.
- **No dismiss control without keyboard support** — an icon-only close stays focusable and labeled.
- **No brand foreground for long paragraphs** — body copy uses intent foreground or `body`; brand text tokens are for links and short emphasis only (per `colors.md`).
- **No raw hex, px, or rem** and **no framework/vendor class names** — foundation tokens only.

# Badges — TypeUI · Charm

> **TypeUI · Charm** — compact labels, counts, status chips, and notification dots.
> Depends on: `colors.md`, `radius.md`, `shadows.md`, `spacing.md`, `typography.md`

In Charm a badge is **always a soft-rounded chip** (`radius-md`, 8px) — the same slight corner as every other control. Badges are small, flat (`elevation-none`), and soft-filled; they annotate rather than act — counts on buttons, status on rows, filter chips, metadata. Color carries intent (brand for emphasis, success/danger/warning for real state), but never *only* color: a badge always also says or shows what it means. A badge is never a primary call to action — that is a button's job. (The only round badge elements are genuinely circular ones — the status dot, the count bubble, and an avatar chip's image.)

---

## Anatomy

| Part | Role |
|---|---|
| **Root** | Inline soft-rounded chip |
| **Label** | Short text (1–3 words or numeric count) |
| **Leading icon** | Optional 12px glyph |
| **Status dot** | Optional filled circle before label |
| **Dismiss control** | Optional × on chip variants |
| **Avatar** | Optional circular image on chip variants |

---

## Sizes

Two text sizes plus icon-only boxes — and every one takes the 8px corner.

| Size | Type | Padding | Radius |
|---|---|---|---|
| **Small (default)** | Text | `spacing-1-5` horizontal, `spacing-0-5` vertical | `radius-md` (8px — always) |
| **Large** | Text | `spacing-2` horizontal, `spacing-1` vertical | `radius-md` (8px — always) |
| **Icon-only small** | Square | — | 20 × 20px box, `radius-md` |
| **Icon-only large** | Square | — | 24 × 24px box, `radius-md` |

| Size | Font | Weight | Line height |
|---|---|---|---|
| Small | font-size-xs | font-weight-medium | line-height-component |
| Large | font-size-sm | font-weight-medium | line-height-component |

---

## Intents

Soft fill, intent foreground — calm by default, with the bordered column for surfaces that need a defined edge.

| Intent | Background | Foreground | Border (bordered) |
|---|---|---|---|
| **Brand** | `brand-softer` | `fg-brand-strong` | `brand-subtle` |
| **Alternative** | `neutral-primary-soft` | `heading` | `default` |
| **Neutral** | `neutral-secondary-medium` | `heading` | `default-medium` |
| **Danger** | `danger-soft` | `fg-danger-strong` | `danger-subtle` |
| **Success** | `success-soft` | `fg-success-strong` | `success-subtle` |
| **Warning** | `warning-soft` | `fg-warning` | `warning-subtle` |

For interactive (link/chip) badges, hover steps the fill one level — `brand-soft`, `neutral-tertiary-medium`, `danger-medium`, etc. per intent.

---

## Variants

Every variant below is a soft-rounded chip — the differences are fill, border, and contents, never the corner.

### Default

Soft fill, no border. Inline-flex, width fits content.

### Bordered

A 1px intent border on the full perimeter; same padding and type as default.

### Pill shape (always on)

Every badge in Charm is **soft-rounded** — `radius-md` (8px) on the root in all sizes and variants (default, bordered, link, icon, dismissible). There is no pill badge in this theme; only the inner status dot, the round count bubble, and the avatar image are circular.

### Large bordered (inset ring)

Large size with a 1px inset ring in the intent border color (`brand-subtle`, etc.) on the soft-rounded `radius-md` shell — reads like bordered without doubling the outer edge.

### As link

The bordered badge on an anchor; the fill shifts on hover per intent.

### With icon

A leading icon — 12px (small) or 14px (large); gap `spacing-1` (small) or `spacing-1-5` (large).

### Icon-only

A fixed square box with a centered icon and no label — so an `aria-label` describing its meaning is required.

### With dot

An 8px filled circle before the label (gap `spacing-1-5`) in the intent foreground color — for live status.

### With loader

Swap the leading icon for a 12px spinning stroke; the badge keeps its size — for an in-progress chip.

### Dismissible chip

An inline-flex row of label + 16px dismiss (20px hit target; hover `neutral-tertiary-medium`) — for active filters and selected tags.

### Chip with avatar

A 24px circular avatar at the inline start (gap `spacing-2`), with padding tuned so the avatar aligns to the chip's cap height.

### Notification count (overlay)

A mini badge pinned to a parent corner (button, icon, avatar):

| Property | Value |
|---|---|
| Min box | 18 × 18px |
| Font | font-size-xs, font-weight-medium |
| Fill | `danger-soft` or intent soft |
| Text | `fg-danger-strong` |
| Border | 1px matching soft fill |
| Radius | `radius-full` (round counter) |
| Position | Top-trailing corner of parent, slight negative inset |

### Button-attached count

A round count bubble inside a button's label area: ~18px box, `brand-soft` fill, `fg-brand-strong` text, `spacing-2` gap after the label.

---

## Shadow

Badges are flat — **`elevation-none`**. Their depth comes from color and border, never shadow.

---

## Motion

| Transition | Duration | Properties |
|---|---|---|
| Hover background | 150ms | Background color |
| Dismiss remove | 150ms | Opacity (optional) |
| Loader spin | continuous | Transform rotate |

---

## Accessibility

- Icon-only and dot-only badges need an **`aria-label`** or adjacent visible text.
- Notification counts surface the total in the parent's accessible name (e.g. "Messages, 2 unread").
- Dismissible chips give the dismiss control `aria-label="Remove {label}"`.
- Never encode meaning by color alone — a label or icon is always present.

---

## Prohibited

- **No pill badges** — every badge is soft-rounded (`radius-md`, 8px); never `radius-full` pill corners. This is the signature, not a preference. (The inner status dot, the round count bubble, and the avatar image stay circular.)
- **No raw hex, px, or rem** except fixed icon box sizes — spacing and colors use tokens.
- **No shadow on badges** — `elevation-none`.
- **No paragraph-length badge text** — truncate or use a tooltip; badges are labels.
- **No badge as a sole primary CTA** — pair it with a button or link when action is required.
- **No mixing intents** in one badge.
- **No font-size above `font-size-sm`** — badges stay compact.
- **No framework or vendor class names** in specs.

# Breadcrumb — TypeUI · Charm

> **TypeUI · Charm** — the "you are here" trail.
> Depends on: `colors.md`, `radius.md`, `spacing.md`, `typography.md`, `badges.md`, `buttons.md`, `dropdowns.md`

A breadcrumb is deliberately quiet in Charm: small `font-size-sm` links in `body`, a light chevron between steps, and the **current page rendered as plain `body-subtle` text** — never a link. It usually floats transparently above a page title; when it needs grounding it sits in a soft `neutral-secondary-medium` strip with the signature **soft-rounded** (`radius-md`, 8px) corners. Keep it shallow — a breadcrumb is wayfinding, not navigation.

---

## Anatomy

| Part | Role |
|---|---|
| **Root** | Navigation landmark wrapping ordered list |
| **List** | Horizontal ordered trail |
| **Item** | One hierarchy step |
| **Link** | Clickable ancestor |
| **Current** | Final step — text only |
| **Separator** | Chevron between items |
| **Home icon** | Optional on first link only |
| **Inline badge** | Optional on current item (see `badges.md`) |
| **Toolbar** | Optional actions row (dropdown/button) beside trail |

---

## Layout

| Property | Token / value |
|---|---|
| Direction | Horizontal inline-flex |
| Gap between items | `spacing-1` narrow; `spacing-2` wide viewports |
| Gap inside item (separator ↔ label) | `spacing-1-5` |
| Gap home icon ↔ "Home" label | `spacing-1-5` |
| Solid variant padding | `spacing-3` |
| Solid variant border | None (the `neutral-secondary-medium` fill grounds it) |
| Solid variant radius | `radius-md` |
| Solid variant background | `neutral-secondary-medium` |

### Separator

| Property | Value |
|---|---|
| Icon | Chevron right, 14 × 14px stroke |
| Color | `body` |
| RTL | Mirror chevron horizontally |

### Home icon (optional)

16 × 16px stroke house icon before the first link label.

---

## Typography

Links lift to `fg-brand` on hover; the current step stays muted and carries `aria-current="page"`. Everything holds at `font-size-sm` — a trail never borrows the heading scale.

| Element | Size | Weight | Line height | Color |
|---|---|---|---|---|
| Link | font-size-sm | font-weight-medium | line-height-component | `body` |
| Link hover | font-size-sm | font-weight-medium | line-height-component | `fg-brand` |
| Current page | font-size-sm | font-weight-medium | line-height-component | `body-subtle` |

All copy uses **`font-family`**.

---

## Variants

### Default (transparent)

No background or border — the trail alone, floating above the page title.

### Solid background

Wrapped in the padded, bordered, squared, bordered pill — use it when the trail sits over busy imagery or needs visual grouping.

### Header toolbar

A flex row: trail on the start, an optional action cluster (dropdown trigger, button) on the end. The trail may wrap on narrow viewports with a `spacing-2-5` gap between wrapped rows.

### With dropdown steps

Ancestor steps become dropdown triggers instead of links (styled per `dropdowns.md`). A slash `/` separator is allowed between major segments in place of the chevron.

### With inline badge

The current item may carry a small badge after its label (`spacing-2-5` gap) — e.g. a category tag on an issue title.

### With navigation controls

Optional prev/next icon buttons at the trail end for sequential document flows — use the icon-button spec from `buttons.md`.

---

## States

| State | Spec |
|---|---|
| Link default | `body` text |
| Link hover | `fg-brand` text |
| Current | `body-subtle`; `aria-current="page"` |
| Disabled ancestor | Not used — omit unreachable steps or show as plain text |

---

## Accessibility

- Root: `<nav aria-label="Breadcrumb">` (or a localized equivalent).
- List: ordered-list semantics.
- Current item: `aria-current="page"` on the list item or current span.
- Separators are decorative — `aria-hidden="true"`.
- Dropdown steps expose expanded state and menu labeling per `dropdowns.md`.

---

## Prohibited

- **No current page as a link** — the last item is never interactive.
- **No raw hex or ad-hoc spacing** — foundation tokens only.
- **No trail deeper than ~4 visible levels** without collapsing the middle into a dropdown.
- **No chevron-only separator without list semantics** — keep the ordered structure.
- **No heading scale in the trail** — it holds at `font-size-sm`.
- **No shadow on the breadcrumb bar** — flat, or the solid `radius-md` fill, nothing more.
- **No framework class names** in specs.

# Button Group — TypeUI · Charm

> **TypeUI · Charm** — related actions fused into one control.
> Depends on: `colors.md`, `radius.md`, `shadows.md`, `spacing.md`, `typography.md`, `buttons.md`, `dropdowns.md`, `badges.md`

A button group reads as a single object: segments butt together, separated only by a hairline `default` divider on the shared edge, and only the outer corners keep the Charm **sharp** (`radius-none`, 0px) corner. The group is flat and borderless (`elevation-none`) — no outer outline, no shadow. Use a group only for genuinely related choices — toolbars, segmented controls, paired actions — never as a row of unrelated buttons.

---

## Anatomy

| Part | Role |
|---|---|
| **Root** | Inline-flex container, `role="group"` |
| **Segment** | Individual button in the set |
| **Divider** | Shared 1px border between segments (not doubled) |
| **Dropdown segment** | Trailing trigger opening menu (`dropdowns.md`) |
| **Badge segment** | Non-interactive count or status segment |

---

## Layout

The fusion is the whole point: segments overlap by 1px so adjacent borders become one line, and rounding lives only on the group's outer corners.

| Property | Token / value |
|---|---|
| Direction | Horizontal (default) or vertical |
| Shadow | `elevation-none` on root (not per segment) |
| Segment overlap | Negative inline margin 1px so borders merge |
| Outer radius | `radius-md` (8px) on first/last segment outer corners only |
| Inner corners | Square — segments share edge |
| Segment padding | Same as **small** button (`spacing-3` × `spacing-2`) unless icon-only |
| Icon-only segment | 36 × 36px square |
| Gap icon ↔ label | `spacing-1-5` |

Charm groups follow the same rules with top/bottom outer radius on the first/last segments and the negative margin stacked on the block axis.

---

## Segment styling

Segments wear the quiet **tertiary**/**secondary** button tokens from `buttons.md` — the group is a navigation surface, not a place for loud fills.

| State | Background | Text | Border |
|---|---|---|---|
| Default | `neutral-primary-soft` | `body` | `default` |
| Hover | `neutral-secondary-medium` | `heading` | `default` |
| Focus | Same as hover + 4px `neutral-tertiary-soft` ring | — | — |
| Active / selected | `neutral-tertiary-medium` | `heading` | `default` |
| Disabled | Muted opacity; no hover | `fg-disabled` | `default` |

---

## Variants

### Default text group

Three or more labeled segments — e.g. Profile | Settings | Messages.

### Icon + info

A leading icon segment plus a trailing static text segment (e.g. "Download" | "456k"). The info segment usually wears `disabled` styling without being interactive.

### Text + icon action

A primary label segment (may be disabled) plus a trailing icon-only segment (bookmark, menu).

### Icon toolbar

All icon-only equal-width segments. Pair each with a tooltip (see `tooltips.md`) — icon toolbars are useless without names.

### Padded icon switcher

A view/mode toggle (e.g. list vs grid) built as a **bordered `radius-md` container with `spacing-1` (4px) padding** holding icon-only segments — each a 20px glyph in `body-subtle` with `spacing-1-5` padding and **`radius-xs` corners (concentric inside the 4px container — see `radius.md` → Nested radius)**. Hover and the **active segment both use the shared neutral hover fill** with `heading` glyph color (active may not invent a brand tint here). Every segment carries a tooltip and an accessible pressed state.

### With dropdown

One or more segments plus a chevron/more trigger that opens a menu attached to the trailing segment; follow `dropdowns.md`.

### With badge

A segment label carries an inline badge count, or a dedicated badge segment opens a menu.

### Pagination group

« Prev | 1 | 2 | 3 | Next » — the current-page segment uses the `neutral-tertiary-medium` fill; see `pagination.md`.

### QR / share cluster

Icon segments for copy link, download, and share, under the same fused-border rules.

### Colored intent group

Segments may take intent soft fills (`brand-softer`, `danger-soft`, etc.) inside one shared outer shell — use this sparingly; it is for status filters, not decoration.

### Outline group

Outline button tokens per segment, a shared outer border, and inner dividers in `default`.

### As links

Segments may be anchors with the same visual fusion — one focus ring per segment.

---

## Motion

150ms background/text shift on hover, per segment. The group shadow never animates.

---

## Accessibility

- Root is `role="group"` with an **`aria-label`** naming the set (e.g. "Text alignment").
- Icon-only segments each carry their own `aria-label`.
- Disabled segments use `aria-disabled="true"`.
- A dropdown trigger exposes `aria-expanded` and `aria-haspopup="menu"`.
- Only one segment is focused at a time; arrow keys may move within the group.

---

## Prohibited

- **No gap between fused segments** — the negative margin merges borders into one line.
- **No shadow on the group or its segments** — the group is flat (`elevation-none`); separation is the shared hairline divider only.
- **No radius on inner shared edges** — rounding an inner corner breaks the fusion that defines the component.
- **No mismatched segment heights** in one group.
- **No unrelated actions** in a single group — split them apart.
- **No primary brand fill on every segment** — at most one segment is emphasized.
- **No raw spacing/color values** — foundation tokens only.

# Buttons — TypeUI · Charm

> **TypeUI · Charm** — the action layer of the system.
> Depends on: `colors.md`, `radius.md`, `shadows.md`, `spacing.md`, `typography.md`, `badges.md`

In Charm, a button is a **soft-rounded block** (`radius-md`, 8px) set in the **primary UI family (Inter), never uppercase** (`font-family`, `font-weight-medium` — the label keeps its written sentence case). The primary wears a **vertical brand gradient** — a one-step-lighter tint of the brand (`brand-light`) at the top running into `brand` at the bottom — under the soft layered **control shadow** (`elevation-1`), with a `white` label. On hover the gradient deepens one step (`brand` → `brand-medium`) while the label holds. Buttons are confident but never loud: exactly one filled **brand** primary leads each section, and everything else steps back to secondary, tertiary, ghost, outline, or link. The vivid **coral brand** carries "the next step"; the status fills (success, danger, warning) appear only when the action genuinely is that. The hover treatment is documented under **Signature interaction**.

---

## Anatomy

| Part | Role |
|---|---|
| **Root** | Button or link-styled control |
| **Label** | Text content |
| **Leading / trailing icon** | Optional 16px glyph |
| **Badge** | Optional count pill inside label (see `badges.md`) |
| **Loader** | Optional spinner replacing icon or prefixing label |

---

## Sizes

**Dashboard rule — small buttons by default.** In dashboard, application, and product-UI layouts, buttons use the **Small** size — never the **Base** (or larger) default. Reserve Base and larger for marketing, landing, and editorial pages.

Five tiers, all sharing the same soft shell. `font-size-sm` base keeps buttons compact and businesslike; reach for Large/Extra large only on marketing CTAs.

**Buttons are sized by padding, not a fixed height** — the vertical padding drives the height so the shell scales cleanly. Two sizes carry the system:

| Size | Font | Padding (inline × block) | Height (approx) | Icon | Used for |
|---|---|---|---|---|---|
| Extra small | 11px | 14 × 8px | ~30px | 14px | Dense inline chips |
| **Small** | 14px | **20 × 12px** | **~38px** | 16px | **Only** navbars, widgets, modals, drawers, and sidebars |
| **Base (default)** | 14px | **26 × 14px** | **~42px** | 16px | Sections, cards, CTA cards, and footers — the landing-page default |
| **Large** | 16px | **24 × 17px** | **~50px** | 16px | **Hero CTAs — the default hero button** |

- **Large button** = **17px** vertical / **24px** horizontal padding (≈ 50px tall). The hero CTA size. Bordered variants (primary, outline) carry **16px / 23px** so the 1px border keeps the same box.
- **On mobile there is no Large button — it renders at Base.** Below the `sm` breakpoint (768px) every `Large` button steps down to the **Base** size (14px / 26px, 14px label; bordered variants 13px / 25px). Large is a *desktop hero affordance*: at phone width a ~50px pill with a 16px label swallows the viewport and its label outgrows the copy around it. Author the CTA as Large as usual — the size steps down responsively; never hand-swap the class per breakpoint.
- **Base button** = **14px** vertical / **26px** horizontal padding (≈ 42px tall). This is the roomy, confident marketing button.
- **Small button** = **12px** vertical / **20px** horizontal padding (≈ 38px tall). Reach for this in navbars, product/dashboard chrome, and inline actions.
- Height comes from `padding-block` + a `line-height: 1` label — **never a fixed pixel height** — so a short label and a long label share the same box.

**Tier placement (binding):** on a landing / marketing page the **hero CTA buttons are Large by default**; buttons in **sections, cards, CTA cards, and the footer are Base**; the **Small** tier appears **only** in navbars, widgets, modals, drawers, and sidebars — never in page content. One tier per context, applied consistently.

Shared shell, every size:

| Property | Value |
|---|---|
| Weight | font-weight-medium (500) |
| Line height | 1 (the mono label sits tight; padding sets the height) |
| Type | `font-family` (Inter, the primary UI family), sentence case (**never uppercase**), `letter-spacing-normal` |
| Radius | `radius-full` (9999px) — every button is a pill, every size and variant |
| Surface depth | **Soft layered control shadow (`elevation-1`)** — the same small shadow on every button variant, ghost included; see `shadows.md` |
| Gap label ↔ icon | `spacing-1-5` (6px) — the fixed icon-to-label gap from `SKILL.md` |
| Min touch target | 44px on mobile — pad to meet if label is short |

---

## Variants — filled

The workhorses. The **brand** primary wears the gradient treatment (see **Signature interaction**); the other intents are solid fills of their intent token with the same focus ring and the same hover shift — the fill deepens to a *one-step-deeper shade of that same intent* and the `white` label stays put.

| Variant | Background | Text | Border | Hover background | Focus ring |
|---|---|---|---|---|---|
| **Primary (brand)** | gradient: `brand-light` → `brand`, top to bottom | `white` | 1px `brand-light` — the brand button edge | gradient deepens: `brand` → `brand-medium` | `brand-medium` |
| **Secondary** | `neutral-secondary-medium` | `body` | `default-medium` | `neutral-tertiary-medium` + `heading` text | `neutral-tertiary` |
| **Tertiary** | `neutral-primary-soft` | `body` | `default` | `neutral-secondary-medium` + `heading` text | `neutral-tertiary-soft` |
| **Success** | `success` | `white` | transparent | `success-strong` | `success-medium` |
| **Danger** | `danger` | `white` | transparent | `danger-strong` | `danger-medium` |
| **Warning** | `warning` | `white` | transparent | `warning-strong` | `warning-medium` |
| **Dark** | `dark` | `white` | transparent | `dark-strong` | `neutral-tertiary` |
| **Ghost** | transparent | `heading` | transparent | `neutral-secondary-medium` | `neutral-tertiary` |

Focus ring: a visible spread using the intent ring token; offset 0. This ring is how the system stays keyboard-first, so it is never removed.

---

## Variants — outline

The quieter sibling of filled: transparent or `neutral-primary` fill, a **1px** intent border, and an intent-foreground label. On hover the button "fills in" with its intent and the label flips to `white` (or, on light warning fills, a dark label for contrast).

**Outline border width is always 1px** — every outline variant carries a 1px border in its intent color (the `Border` column below names the color, the width is 1px). Like every other edge in the system, a button border is a hairline — **1px on every button variant that carries a border, never thicker**.

| Variant | Border (1px) | Label | Hover fill |
|---|---|---|---|
| Brand | `brand` | `fg-brand` | `brand` (label → `white`) |
| Neutral | `default` | `body` | `neutral-secondary-soft` |
| Success | `success` | `success` | `success` |
| Danger | `danger` | `danger` | `danger` |
| Warning | `warning` | `warning` | `warning` |

Outline sizes mirror the filled size table exactly.

---

## Signature interaction — gradient fill + control shadow

The defining button of Charm is a **vertical brand gradient block under a soft layered shadow**. At rest the fill runs from a one-step-lighter tint of the brand at the top into `brand` at the bottom — a subtle top-lit gradient, never a flat slab — and the whole control sits on the layered **control shadow** (`elevation-1`), a stack of very-low-opacity shadows that lifts it gently off the light surface. On hover the **gradient deepens one step** (`brand` → `brand-medium`) while the `white` label holds. No bloom animation, no glow, no scale — one confident color shift. The rule is **stack-agnostic**: it names which token supplies each value, so it can be built with plain CSS, a CSS-in-JS layer, a utility framework, or any renderer.

**Token sourcing (never hard-coded):**

| Aspect | Source |
|---|---|
| Resting background | vertical gradient, top to bottom: a one-step-lighter brand tint (`brand-light`) → `brand` — `colors.md` |
| Resting label | `white` |
| Resting border | 1px solid `brand-light` — the brand edge that seats the gradient |
| Resting shadow | **`elevation-1`**, the layered control shadow — `shadows.md` |
| Hover background | the same gradient, one step deeper: `brand` → `brand-medium` |
| Hover label | stays `white` (the deeper gradient keeps it legible) |
| Focus ring | `brand-medium` — `colors.md` |
| Corner radius | `radius-full` (9999px pill) — `radius.md` |
| Padding / sizing | the **Sizes** table above (`spacing-*`) — `spacing.md` |
| Font family / weight / size | `font-family` (Inter, the primary UI family), `font-weight-medium`, size per tier — `typography.md` |
| Tracking | `letter-spacing-normal` — `typography.md` |
| Easing / duration | ~150–200ms ease on the background shift |

**The control shadow (`elevation-1`) — exact value, agnostic:**

```
0 1px 2px 0 rgb(0 0 0 / 0.05)
```

Three hairline layers at ~3–4% opacity — a small, tight lift, never a visible drop shadow. Every button variant carries the same shadow (solid, outline, secondary, dark, danger, and ghost alike), and **inputs share the same shadow** — one small shadow, every button, no exceptions.

**Status variants:** each intent button rests on its own solid fill (`success` / `danger` / `warning`) and deepens to that intent's stronger step on hover (e.g. `success` → `success-strong`), the `white` label staying put — same shift, same hue, one step deeper.

**Behavior:** at rest, a gradient `brand` block with the layered control shadow and a white label. On hover, the gradient deepens one step; the label never moves. On focus, the `brand-medium` ring shows. Honor `prefers-reduced-motion` — the color shift is a plain transition, no movement to reduce.

**Reference implementation** (illustrative only — every literal here must resolve to the tokens in the table above):

```css
/* Gradient button — map every literal to a Charm token before shipping.
   The gradient is painted at double height with three stops
   (light -> brand -> medium) and background-size 100% 200%; the resting
   window shows the top half and hover slides it to the bottom half. This
   makes the deepening ANIMATE — a plain gradient-to-gradient swap cannot be
   transitioned by the browser and would snap hard. */
button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: var(--radius-full);              /* pill */
  background-image: linear-gradient(180deg, var(--brand-light) 0%, var(--brand) 50%, var(--brand-medium) 100%);
  background-size: 100% 200%;
  background-position: 0% 0%;                       /* resting: top half = light -> brand */
  box-shadow: var(--elevation-1);                  /* the layered control shadow */
  color: var(--white);
  font-family: var(--font-family);                  /* Inter — the primary UI family */
  font-weight: 500; /* medium labels, sentence case — no text-transform */
  letter-spacing: var(--letter-spacing-normal);
  line-height: 1;
  cursor: pointer;
  user-select: none;
  transition: background-position 0.2s ease, background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

button:hover {
  background-position: 0% 100%;                     /* hover: bottom half = brand -> medium */
}

button:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px var(--brand-medium);       /* the focus ring */
}
```

Solid-fill variants (outline, ghost, status) carry no gradient, so they simply transition `background-color` between the resting fill and the one-step-deeper hover fill — that interpolates smoothly on its own.

---

## Icon buttons

A square control — width equals height per tier — for toolbars and compact actions. Use any filled, outline, or ghost row above.

| Size | Box | Icon |
|---|---|---|
| Small | 36 × 36px | 16px |
| Base | 40 × 40px | 16px |
| Large | 44 × 44px | 20px |

There is no visible label, so an **`aria-label` is mandatory** — never ship a nameless icon button.

---

## Special patterns

### With badge

Primary label + a circular count pill (`spacing-2` gap) — see the button-attached count in `badges.md`.

### Loader

A 16px spinner sits at the label start; keep or hide the label, but mark the control `disabled` or `aria-busy="true"` while it runs so it cannot be double-submitted.

### Disabled

Drop to 50% opacity or `fg-disabled` text, remove hover and the focus ring, set `pointer-events: none`, and apply the native `disabled` attribute. A disabled button must never look clickable.

### Link as button

An anchor wearing button tokens — use it for navigation that should read as a primary action, and keep the keyboard focus ring intact.

### Provider / OAuth / payment

The one place third-party brand color is allowed: isolated provider variants (social login, wallet, card network). Document the provider hex *outside* the semantic tokens and never recycle it as a system intent.

### Gradient / colored shadow (optional marketing)

Not part of core Charm. Default product UI is solid fills only. If a campaign needs a gradient, define the paired tokens in `colors.md` and `shadows.md` first — do not hand-roll them on the button.

---

## Motion

Charm buttons shift color on hover with a short, smooth transition — **never a hard snap between states**. The deepening must visibly ease in over ~150–200ms.

| Transition | Duration | Properties |
|---|---|---|
| Hover shift | ~150–200ms ease | background deepens one step (gradient `brand` → `brand-medium`, or the intent's stronger step) |
| Focus | ~150ms | `brand-medium` ring |
| Loader | continuous | Spinner rotation |

Because a browser **cannot** transition one `linear-gradient` into another, the gradient primary must animate a transitionable property instead: paint the gradient at `background-size: 100% 200%` with a three-stop `light -> brand -> medium` ramp and transition **`background-position`** from `0% 0%` (rest) to `0% 100%` (hover). Solid-fill variants transition `background-color`. Every button carries the transition on its resting rule so both enter and leave animate.

Honor `prefers-reduced-motion`: the hover shift is a plain color transition — no movement, nothing further to reduce.

---

## Accessibility

- Native `<button type="button|submit|reset">` for actions; `<a>` only when navigating.
- Icon-only controls carry a descriptive `aria-label`.
- Loading state uses `aria-busy="true"` and blocks duplicate submits.
- The 4px focus ring is always visible on keyboard focus — never remove the outline without an equivalent replacement.
- Truly inactive controls leave the tab order.

---

## Prohibited

- **No Large buttons on mobile** — below `sm` (768px) the Large size resolves to Base. A 50px pill with a 16px label is a desktop-only scale.
- **No raw hex in core variants** — semantic tokens only (documented provider buttons are the sole exception).
- **No square or slightly-rounded buttons** — every button is a full `radius-full` (9999px) pill; an 8px or 16px button corner is a different theme, not Charm.
- **No framework class names** in specs.
- **No arbitrary drop shadows** — every button carries exactly the layered `elevation-1` control shadow (the ghost variant carries none); never additional shadows, harder shadows, or glows.
- **No two primary brand buttons** side by side in one action group — Charm allows a single obvious next step.
- **No font-size above `font-size-md`** on standard buttons.
- **No ghost variant for a destructive confirm** — use danger filled or outline so the stakes read.
- **No off-token hover fill** — the hover state is the *one-step-deeper shade of the resting fill* (gradient `brand` → `brand-medium`, or the intent's stronger step) and the label stays `white`; never an off-token fill, a pale washed-out tint, or a rainbow blend. The only gradient in the system is the primary's vertical brand gradient.


---

## Height parity — outline vs. solid

**An outline button is the exact same height as a solid button of the same size.** The outline variant's border must **not** make it taller than its solid counterpart.

- Give buttons **`box-sizing: border-box`** so the border is drawn *inside* the button's height, never added on top of it — a solid and an outline button of the same size then measure **identical heights** and line up pixel-for-pixel in a row.
- If a variant's border is thicker than the default, **trim its padding by the extra border width** so the content box (and total height) stays constant across variants.
- The label baseline, icon size, and vertical padding read the same whether the button is solid, outline, or ghost.
- **Icons never drive button height.** A 14–16px glyph inside a `line-height: 1` label box (12–13px) would silently stretch an icon button 2–3px taller than a text-only one — which reads as "the outline button is smaller" whenever the solid CTA carries an icon and the outline one doesn't. Absorb the icon's overflow vertically (e.g. a negative block margin on the glyph) so the label line + padding alone set the height: icon, text-only, outline, and solid buttons of one size all measure **identical**.
- **Prohibited:** an outline (or any bordered) button that renders taller than the solid button of the same size, and **any button whose height changes because it carries an icon**. Height parity across variants and content is mandatory.

---

## Labels never hide — no responsive icon-only collapse

**A labeled button keeps its visible text label at every breakpoint.** Never strip a button's label on small screens to squeeze it into a row — a button that reads "New run" on desktop must still read "New run" on a phone, not shrink to a bare `+` glyph.

- When horizontal space runs out, the layout adapts around the button: wrap the row, stack the buttons, widen to full-width, drop a *whole* lower-priority control (or move it into an overflow menu) — the surviving buttons keep their labels.
- Genuine **icon-only controls** (bell, theme toggle, hamburger, close ✕) are exempt — they are *designed* icon-only at every size and carry an accessible name. The rule forbids *converting* a labeled button into an icon-only one responsively.
- **Prohibited:** `display: none` (or equivalent) on a button's label text inside any breakpoint; shipping a control that is labeled on one viewport and icon-only on another.

# Cards — TypeUI · Charm

> **TypeUI · Charm** — the system's primary content surface.
> Depends on: `colors.md`, `radius.md`, `shadows.md`, `spacing.md`, `typography.md`, `buttons.md`, `tabs.md`

The card is the face of Charm: a soft-white panel — `neutral-primary-soft` (`#FBFAF9`), sitting on the white content column and separated from it by a subtle **`default-subtle` (`#EBEBE7`) border** — the slight `radius-xl` (24px) corners, and generous `spacing-6` padding. It is **flat and static**: a plain white fill under a uniform hairline border, with **no effect of any kind on hover** — no glow, no border light-up, no pointer-tracking treatment, no lift. The card lets its content lead; hover feedback belongs to the interactive elements inside it, never to the card surface.

---

## Anatomy

| Part | Role |
|---|---|
| **Root** | Bordered, rounded surface |
| **Media** | Optional top or side image |
| **Header** | Title + optional meta |
| **Body** | Description, lists, form fields |
| **Footer** | Actions, links, meta row |
| **Badge / tag** | Optional status label |
| **Tabs** | Optional nav tabs in header (see `tabs.md`) |

---

## Layout

| Property | Token / value |
|---|---|
| Background | `neutral-primary-soft` (`#FBFAF9`) — a plain, flat soft-white fill (widgets on the gray app surface use `neutral-primary` `#FFFFFF`) |
| Border | `default-subtle` (`#EBEBE7`), 1px — a uniform hairline, static in every state (on the gray app surface: `default` `#E7E6E5`) |
| Radius | `radius-xl` (24px) |
| Glow | None — never, in any state |
| Padding (default) | `spacing-6` |
| Max width | Content-driven (~384px for demo cards); full width in grids |
| Gap title ↔ body | `spacing-3` |
| Gap body ↔ footer actions | `spacing-6` |
| Gap between footer buttons | `spacing-4` |
| Hover (clickable card) | **None on the card surface** — the panel stays exactly as it rests; only the interactive elements inside it (links, buttons) show their own hover states |

### Horizontal card

Media column ~40% width; body column padded `spacing-6`; stacks vertically below the tablet breakpoint.

### Image top

Media bleeds to the top edge; its top corners follow the root `radius-xl` and its bottom edge sits square against the body.

---

## Typography

Card titles stay quiet — `font-size-2xl` is the ceiling inside a standard card. Display type belongs to the page, not the card.

| Element | Size | Weight | Line height | Color |
|---|---|---|---|---|
| Card title | font-size-xl (20px — the card-heading rule in `SKILL.md`) | font-weight-semibold | line-height-heading | `heading` |
| Card subtitle / meta | font-size-sm | font-weight-normal | line-height-body | `body-subtle` |
| Body | font-size-sm | font-weight-normal | line-height-body | `body` |
| Footer link | font-size-sm | font-weight-medium | line-height-body | `fg-brand` |
| Price / stat emphasis | font-size-xl | font-weight-bold | line-height-heading | `heading` |

---

## Variants

Every variant is the same shell — soft-white, shadowless, a warm step off the white page, rounded corners — rearranged around its content.

### Default

Title + body; the whole card may be a single link.

### With button

Body plus a primary button (`buttons.md` base size) in the footer; an optional trailing icon on the button.

### With text link

The CTA is an `fg-brand` underlined link instead of a button — for lower-stakes follow-through.

### With image

Image above or beside the content; outer-edge radius rules still apply.

### With description only

Longer body copy at the same padding.

### Horizontal

Side-image layout for lists and featured entries.

### User profile

A circular avatar (64–96px) centered above the name, then role, a stats row, and action buttons; an optional dropdown menu in the corner.

### With form

Stacked inputs in the body and a submit button in the footer; field spacing `spacing-4`–`spacing-5`.

### E-commerce

Image, title, price, rating, add-to-cart — the price row uses the stat typography. Two generic rules: a product card's **price may step up to `font-size-2xl` `font-weight-bold`** when it anchors the card (the one place a card price passes the stat size), and a card's **actions row pins to the card foot** (auto top margin) so buttons align across unequal cards in one grid — full-width paired actions share a `spacing-4` gap, and the card's stacked parts sit `spacing-4` apart.

### Card media

Design rules only — the content is the user's:

- Media **fills its slot edge to edge** (cover cropping, centered) inside a **fixed-height, `radius-xl`, overflow-clipped** block — never letterboxed, never a bare icon on a tile (see the imagery rule in `SKILL.md`).
- When card or hero media is a **carousel**, slides move by horizontal translate at **300ms ease**, one active at a time; controls sit centered `spacing-4` below the frame in a **16px-gap** row — ghost icon-only prev/next (`spacing-1-5` padding, neutral hover fill, `radius-xl`, glyphs up to 28px here) around a `font-size-md` `font-weight-medium` `body-subtle` position counter.
- **Media mini-grids inside a card** divide with thin 1px cell-border hairlines (per the composite rules — never doubled at the card edge), content padded `spacing-4` away from every divider.

### Call to action

Centered copy and a single primary button; emphasis comes from a `brand` border over the raised panel, not a fill change.

### With tabs

A tab strip in the header with panel content below; the tab model is delegated to `tabs.md`.

### With list

Icon + text rows in the body; list item padding `spacing-2`–`spacing-3`.

### Pricing

Tier name, price, feature list, and CTA — the highlighted tier is marked by a `brand` border (in place of the default `#E7E6E5`) over the same raised panel.

### Testimonial

Quote body, avatar, and author name — the quote may step up to `font-size-md`.

### Crypto / stats

A large metric, a delta badge, and a sparkline area — the badge follows `badges.md`.

### Composite / glued grid

Several regions sitting **flush in one grid**, separated only by hairline rules rather than free space (a feature matrix, comparison grid, or any flush multi-cell panel), are **one composite card — not many cards glued together**.

**The grid element is the card.** It — and only it — carries the flat `neutral-primary` (`#FFFFFF`) fill, the uniform `default` (`#E7E6E5`) border, and the `radius-xl` (24px) corners with `overflow: hidden`. Never wrap it in a second "frame" element; one element owns the surface.

**Inner cells are fully transparent.** They lay content over the shared fill and never carry their own background, border, or radius — repeating the panel fill per cell reads as separate tiles and is prohibited.

**Dividers are cell borders, never a painted gutter behind transparent cells.** The classic trap is `gap: 1px` + a flat `default` (`#E7E6E5`) `background` on the grid with `background: transparent` cells: since transparent cells sit *on top of* the grid, they show that **flat `#E7E6E5` gutter colour across the whole cell** instead of the `gradient-card` fill, so every cell reads as a separate flat tile with the wrong background. Instead:

- Grid: `gap: 0`, `background: neutral-primary`, a uniform 1px `default` border, `border-radius: radius-md`, `overflow: hidden`.
- Cells: `background: transparent`; draw hairlines as **1px `default` borders on the cells** — `border-top` between rows, `border-right` between columns, resetting the trailing edges at each breakpoint so the outer frame border is never doubled.

Cells show **no hover surface** — the composite stays static like every card, on marketing and dashboard surfaces alike.

### Bento / decorative visual

A bento or feature card whose top holds a **signature decorative visual** — a pill-toggle, connected integration nodes, a radiating pulse core, and the like — above the title and body. The visual is **built in Charm's own palette from CSS + inline SVG**, never an off-theme raster image.

**Stage.** The visual lives in its own inset **stage**: a `radius-xl` (24px) block over the card's `#FFFFFF` fill, backed by a **faint brand dot-grain** (`radial-gradient` dot pattern in `default-medium` `#D6D3D1`, ~0.55 opacity, ~18px cells) that **fades to nothing via a radial `mask-image`** so the pattern never hits the stage edges. Mark the stage `aria-hidden` — it is decoration; the card's heading + body carry the meaning. The visual's layers sit below the card's content and never reflow on hover.

**Palette.** Charm brand tones only: fills run `brand` / `brand-soft` → `neutral-primary`; edges are `default` / `brand-subtle`; glow is `brand` / `brand-medium` at low opacity. No off-token hues.

**Signature construction (stack-agnostic):**

- **Nested rings** — stacked `0 0 0 Npx` `box-shadow`s on a `radius-full` element, so the rings follow the pill / circle shape. Never build rings as extra DOM elements.
- **Integrations = hub-and-orbit** (the preferred "connect your stack" layout — not a cramped row of tiles): a **square stage** holding a centred, glowing **brand hub** (filled `brand` → `brand-strong` `radius-xl` tile, white icon, a `neutral-primary-soft` ring via `box-shadow` + a soft `brand` radial bloom behind it), encircled by **one or two dashed orbit rings** (`radius-full` element, `1px dashed default-strong`, ~0.55–0.8 opacity). **App tiles sit on the orbits** at the cardinal points — each an absolutely-positioned `radius-xl` tile pulled onto the ring with `translate(-50%, -50%)`, a `neutral-primary` fill, `default` border, and a faint brand glow. One orbit slot is the **"+N More" pill**. The rings read as the connective tissue, so no separate connector lines are needed.
- **Hexagon tiles** (optional honeycomb motif) — a `clip-path` polygon (`polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%)`) with a **2px-inset `::before`** for the inner fill, and a **`filter: drop-shadow(… brand …)`** for a glow that hugs the shape (a `box-shadow` can't escape a `clip-path`).
- **Connectors** (when nodes are not on orbit rings) — dashed SVG arc `path`s stroked in `fg-brand` with `stroke-dasharray`, at ~0.3–0.5 opacity, behind the nodes.
- **Label pill** (e.g. `+N More`) — a `radius-full` chip with a subtle `brand` glow.

**Marketing only.** Decorative bento visuals are a landing-page flourish — **never on dashboard / application** cards, which stay flat and data-first.

---

## Shadow & elevation

Cards separate from the white column by their **`default` (`#E7E6E5`) hairline border** alone. There is no resting drop shadow and **no hover treatment** — a card looks identical at rest, on hover, and on press.

| State | Surface |
|---|---|
| Resting | Plain `neutral-primary-soft` (`#FBFAF9`) fill + `default-subtle` (`#EBEBE7`) border; no shadow, no glow |
| Hover (interactive) | **Identical to resting** — the card surface never changes on hover |
| Inset card (inside another card) | A tone between the parent panel and the page, with its own `default` border, so it reads recessed |

### Static by rule — no hover treatments

A Charm card has **no hover move**. Do not add border recolors, breathing glows, pointer-tracking edge lights, gradient sheens, grain, scale, lift, or shadow on hover — on any surface, marketing included. If a card is clickable, the affordance is its content (a link-styled title, a button), never a surface effect.

---

## Accessibility

- A clickable whole card is one link wrapping the card **or** a heading link plus distinct buttons — never nested interactive elements.
- Images carry meaningful `alt`, or `alt=""` when decorative.
- Tab cards follow the keyboard model in `tabs.md`.

---

## Prohibited

- **No corners other than `radius-xl`** (24px) and no raw hex — a sharp 2–4px card or an over-rounded 32px+ card is a different theme, not a Charm card.
- **No shadow and no glow — in any state.** A card carries no shadow at rest and no glow, light-up, breathing border, or pointer-tracking effect on hover. Do not add multi-layer float shadows or any hover surface treatment.
- **No borderless cards** — every card carries the hairline `default` (`#E7E6E5`) border; do not drop it and rely on a shadow.
- **No flat card flush with the page** — a card is a *distinct* panel (`neutral-primary-soft`, `#FBFAF9`) a warm step off the white page, plus the `default-subtle` (`#EBEBE7`) hairline; never the same tone as the page and never a heavy shadow. Emphasis uses a `brand` border.
- **No off-token or heavy borders** — the border is the hairline `default` (`#E7E6E5`) at 1px in **every state** (a highlighted pricing tier or status card may use an intent edge). Do not thicken it beyond ~1px, recolor it on hover, or use colors outside the token set.
- **No gradient or sheen on the card face** — the fill is the plain `neutral-primary` (`#FFFFFF`) white; never gradient fills, brand sheens, grain, or off-token tints.
- **No full-width hero typography inside default cards** — that lives in the page section, not the card.
- **No per-cell surface in a composite / glued grid** — inner cells never carry their own fill, border, radius, or grain; the grid element alone owns the surface (see **Variants → Composite / glued grid**).
- **No flat gutter behind transparent cells** — never `gap: 1px` + a flat `default` (`#E7E6E5`) `background` on the grid with transparent cells; the cells show the flat gutter colour, not the shared `neutral-primary` fill, and read as separate tiles. Use `gap: 0` and draw dividers as 1px cell borders instead.
- **No two competing primary CTAs** without hierarchy (one filled, one link).
- **No framework class names** in specs.

---

## Card treatments — signature vertical styling

> Moved here from `SKILL.md` (the authoritative card visual rules). These are vertical-specific; marketing/landing only where noted, never on dashboard / application surfaces.

- **Cards are flat and static — no hover effects, ever.** On the white content column (marketing, storefront) a card is a soft-white `neutral-primary-soft` (`#FBFAF9`) panel with a uniform 1px `default-subtle` (`#EBEBE7`) border and `radius-xl` (24px) corners; on the gray application surface a widget stays `neutral-primary` (`#FFFFFF`) with a `default` (`#E7E6E5`) border. The card surface never changes on hover: no glow, no border light-up or recolor, no pointer-tracking edge light, no gradient sheen, no grain, no scale, no lift, no shadow. Hover feedback lives only on the interactive elements inside the card (links, buttons).

- **Glued grid / composite card panels — one surface, many cells.** When several regions sit **flush in one grid** — cells separated only by **hairline rules**, not free space between independent cards (e.g. a feature matrix, comparison grid, or any flush panel) — they are **one composite card**, not many cards stacked together. **The grid element itself is the card**: it carries the raised `gradient-card` fill, the top-lit fading `default` border, the `radius-xl` (24px) corners with `overflow: hidden`, the dust grain, and (marketing only) the corner-anchored hover glow and outer bloom. Do **not** wrap it in a second "frame" element — one element owns the surface. **Inner cells must be transparent** over that shared fill — **never** each their own `gradient-card` background, border, or grain layer; repeating the panel fill per cell reads as separate tiles glued together and is prohibited.
  - **Dividers are cell borders, never a painted gutter behind transparent cells.** The classic trap: setting `gap: 1px` + a flat `default` (`#E7E6E5`) `background` on the grid, then making cells `background: transparent`. Because transparent cells sit **on top of** the grid, they don't reveal the grid's `neutral-primary` fill — they reveal that **flat `#E7E6E5` gutter colour across the whole cell**, so every cell reads as a separate flat tile with the wrong background. **Prohibited.** Instead: give the grid `gap: 0` and draw the hairlines as **1px `default` borders on the cells** (`border-top` between rows, `border-right` between columns, reset at row/column ends per breakpoint). The cells stay fully transparent and the one `neutral-primary` fill shows through every cell as a single continuous surface. (If you must use `gap`, the gutter background has to be the **same fill as the frame**, not a flat off-tone colour — but cell borders are the reliable pattern.)
  - The hairline rules use the `default` (`#E7E6E5`) colour purely as **functional dividers** — never a stronger step than the frame border. On marketing, hovering a cell lights the **shared surface** (e.g. `:has(.cell:hover)` on the grid/card), not a second mini-card inside the cell.
- **A badge / label anchored to a card's top must stay fully inside the card — never straddle the edge, because the card clips (`overflow: hidden`).** A marketing card owns its surface with `overflow: hidden` (for the dust grain and the `radius-xl` border clip). So a "Recommended" / "Most popular" pill (or any top-anchored badge) that is absolutely positioned **must sit entirely within the card's top area** — do **not** pull it half-outside the top border with a `translateY(-50%)`, because `overflow: hidden` will **crop the half that sticks out**. Position it fully inside: `position: absolute; top: <spacing>; left: 50%; transform: translateX(-50%)` (no negative Y translate), and give the card **extra top padding** so its heading clears the badge. If a design truly needs a badge straddling the border, that specific card must drop `overflow: hidden` (and therefore forgo the clipped grain) — but the default and preferred pattern is **badge fully inside a clipped card**. Also remember `.marketing-page .card > *` forces `position: relative` on direct children, so scope the absolute badge rule under `.marketing-page` (or raise specificity) or it will fall back into normal flow and stretch full-width.
- **Bento decorative visuals — built in-palette, never off-theme raster art (marketing only).** A bento / feature card may carry a **signature decorative visual** in its upper "stage" (a pill-toggle, connected integration nodes, a radiating pulse core, etc.) above its title + body. Build these **entirely from CSS + inline SVG in Charm's own light brand palette** — never drop in an off-brand raster image. The visual sits on its own stage inside the card: a `radius-xl` (24px) inset block over the card's `#FFFFFF` fill, backed by a **faint brand dot-grain** (a `radial-gradient` dot pattern in `default-medium` `#D6D3D1` at ~0.55 opacity, `~18px` cells) that **fades out via a radial `mask-image`** so it never meets the stage edges as a hard pattern. Every lit element uses Charm brand tones only — fills run `brand`/`brand-soft` → `neutral-primary`, edges are `default`/`brand-subtle`, and glow is `brand`/`brand-medium` at low opacity. Signature moves, all stack-agnostic: **nested "rings"** are drawn as stacked `0 0 0 Npx` `box-shadow`s on a `radius-full` element (they follow the pill/circle shape — never real extra DOM rings); an **integrations / "connect your stack" visual** is a **hub-and-orbit**, not a cramped row of tiles — a single glowing **brand hub** (a filled `brand`→`brand-strong` `radius-xl` tile with a white icon, a `neutral-primary-soft` ring + brand bloom) centred in a **square stage**, encircled by **1–2 dashed orbit rings** (a `radius-full` element with a `1px dashed default-strong` border at ~0.55–0.8 opacity), with **app tiles positioned on the orbits** at the cardinal points (each an absolutely-placed `radius-xl` tile `translate(-50%,-50%)` onto the ring, `neutral-primary` fill, `default` border, faint brand glow) and a **"+N More" pill** occupying one orbit slot; a soft radial `brand` bloom sits behind the hub. Prefer this orbit layout over hexagon rows for integration ecosystems. (Hexagon tiles remain available where a honeycomb motif is wanted: a `clip-path` polygon with a 2px-inset `::before` for the inner fill and a `filter: drop-shadow(... brand ...)` for a shape-hugging glow — a `box-shadow` won't show past a `clip-path`.) A **"+N More" / label pill** is a `radius-full` chip with a subtle brand glow. The stage is **decorative** — mark it `aria-hidden` and keep the real meaning in the card's heading + body. The visual's own layers sit **below the content** and **never animate the layout** on hover. This is **marketing / landing only — never on dashboard or application** cards, which stay flat and data-first.

# Checkbox — TypeUI · Charm

> **TypeUI · Charm** — multi-select boolean controls.
> Depends on: `colors.md`, `radius.md`, `shadows.md`, `spacing.md`, `typography.md`, `dropdowns.md`

A checkbox lets users pick any number of independent options. The control is a small **16 × 16px square box** that fills `brand` with a `white` check when selected (a light check, because the coral brand needs light marks for contrast). Its tick box is **soft-rounded** — `radius-xs` (4px) — and **never fully round**, so it never reads as a radio or a pill chip. The slight panel radius applies only to the cards and list groups it sits inside. When wrapped in a bordered card or list group, that container takes the panel **soft-rounded** (`radius-md`, 8px).

---

## Anatomy

| Part | Role |
|---|---|
| **Control** | `<input type="checkbox">` |
| **Label** | Primary text beside control |
| **Description** | Secondary line in bordered/advanced layouts |
| **Icon (advanced)** | Optional leading glyph in card layout |
| **Link** | Optional anchor inside label |

---

## Control box (default)

| Property | Token / value |
|---|---|
| Size | 16 × 16px |
| Background (unchecked) | `neutral-tertiary` (`#F5F4F1`, contrasting) |
| Background (checked) | `brand` with check mark `white` (light, for contrast on the coral) |
| Border | `default` (`#E7E6E5`), 1px (unchecked); `brand` when checked |
| Radius | `radius-xs` (4px) — **never fully round** |
| Focus ring | 2px `brand-soft` offset ring (4px total spread) |
| Check mark | Stroke or glyph centered; 12 × 12px effective |

Row layout: a flex row, vertically centered, with the label `spacing-2` from the control.

---

## Label typography

| Element | Size | Weight | Color |
|---|---|---|---|
| Label | `font-size-sm` | `font-weight-medium` | `heading` |
| Description | `font-size-sm` | normal | `body-subtle` |
| Link in label | `font-size-sm` | medium | `fg-brand`, underline on hover |

Apply `select-none` to the label to avoid accidental text selection on toggle.

---

## Variants

The control box never changes shape; what changes is its container.

### Checkbox example (default)

Standalone rows with `spacing-4` between stacked items.

### Disabled state

Control and label go `fg-disabled`, no pointer events, native `disabled`. A checked-disabled box keeps its checked look at reduced contrast.

### Checkbox link

The label carries an inline link; the link styling doesn't break the label association — the whole label still toggles unless the link itself is clicked (link stops propagation in the behavior layer).

### Helper text

A description stacks below the label row in `body-subtle`, `spacing-1` top margin.

### Bordered

The whole row wrapped in a card: padding `spacing-4`, **`radius-md`**, a raised `neutral-primary` (`#FFFFFF`) panel with a `default` (`#E7E6E5`) border. A checked row is marked by a `brand` border.

### Bordered with description

A `font-weight-medium` `heading` title line over a `body-subtle` description; the control aligns to the start or center per layout.

### Bordered with icon

A 20 × 20px leading icon before the text block; the control sits at the inline start or end — consistent across a list.

### Checkbox list group

A vertical stack on a raised `neutral-primary` (`#FFFFFF`) panel with a `default` (`#E7E6E5`) border around the group: soft-rounded **`radius-md`** (8px) corners, with hairline `default` dividers between rows (functional row separators); each row padded `spacing-4`.

### Horizontal list group

A flex-wrap row with `spacing-4` gaps — no shared outer border.

### Checkbox dropdown

A menu row: checkbox at the inline start, then label + optional description, at `dropdowns.md` item padding. The box size is unchanged.

### Inline layout

Several checkboxes in one horizontal flex row, `spacing-4` apart.

### Colors

Intent variants recolor the checked fill and focus ring; the unchecked box always stays neutral.

| Intent | Checked fill | Focus ring |
|---|---|---|
| Brand (default) | `brand` | `brand-soft` |
| Success | `success` | `success-soft` |
| Danger | `danger` | `danger-soft` |
| Warning | `warning` | `warning-soft` |

Unchecked shell stays `neutral-secondary-medium` with a `default-medium` border.

### Advanced layout

A full-width selectable card: padding `spacing-4`, a raised `neutral-primary` (`#FFFFFF`) panel, `default` (`#E7E6E5`) border, hover deepens the border toward `default-strong`, selected takes a `brand` border. The checkbox sits at the inline start; the content block holds a title + description.

---

## States

| State | Visual |
|---|---|
| Unchecked | Empty box, default border |
| Checked | Filled `brand` (or intent) + check |
| Indeterminate | Dash mark; same fill as checked |
| Focus | `brand-soft` ring on box |
| Hover | Optional subtle border `default-strong` — not required |
| Disabled | Muted label and box |
| Error (group) | Group message `fg-danger-strong`; optional `danger-subtle` border on affected rows |

---

## Motion

Check toggle is instant or a ≤ 100ms fill transition. No bounce.

---

## Accessibility

| Requirement | Implementation |
|---|---|
| Pairing | `<input>` + `<label for>` or a wrapping label |
| Group | `<fieldset>` + `<legend>` for related sets |
| Indeterminate | Set only programmatically; expose the state to AT |
| Error | `aria-invalid` on the group or individual control |
| Dropdown | Menu checkbox items follow the roving-tabindex pattern |

---

## Prohibited

- **No full rounding on the tick box — ever.** The checkbox control takes the **4px `radius-xs` corner only**. Never `radius-full` or pill rounding on the 16px box — a round box reads as a radio, not a checkbox. This applies everywhere: forms, tables, filter dropdowns, and list groups.
- **No checkbox without a label** (visible or `aria-label`).
- **No custom size below 16px** without expanding the hit area to 44px.
- **No intent fill on an unchecked box**.
- **No radio behavior** — checkboxes are independent unless "select all" logic is documented at the page level.

# Color Tokens — TypeUI · Charm

> The color system for **TypeUI · Charm**. Charm is **light-first**: on marketing / storefront pages the content sits on one warm **`#F7F7F5` section surface** in a centered 1280px container — flat and matte, **no rails, no texture, no grain** — while the soft **cream** accent (`#F1F2EA`) fills **only the hero and the footer** bands (both flat and untextured, each fading into the `#F7F7F5` section surface at its shared edge) and the vivid **coral** brand (`#E4544B`) leads primary actions. Text is a warm stone ink — ink headings over muted warm-gray body — and panels separate by a subtle hairline border, not a hard line. Status hues (success, danger, warning) appear *only* when something truly is success, danger, or warning; they are never decoration. Every value below is a literal hex and the single source of truth; components reference semantic tokens, never raw hex or palette steps directly.

---

## Token naming

| Pattern | Role |
|---|---|
| `body`, `heading`, `body-subtle` | Default text hierarchy |
| `fg-{intent}` | Foreground / text for brand, status, accent |
| `neutral-{level}-{accent}` | Neutral surfaces (backgrounds) |
| `brand`, `brand-soft`, `brand-strong` | Brand surfaces |
| `success`, `danger`, `warning` (+ `-soft`, `-medium`, `-strong`) | Status surfaces |
| `default`, `light`, `muted`, `buffer` | Border intent |
| `{accent}` | Standalone accent surfaces (purple, cyan, teal, etc.) |

**Level:** `primary` · `secondary` · `tertiary` · `quaternary`  
**Accent (surface):** `soft` · `medium` · `strong` · `strongest`  
**Foreground accent:** `subtle` · `strong`

---

## Semantic tokens — text

| Token | Hex |
|---|---|
| body | `#57534E` |
| body-subtle | `#79716B` |
| heading | `#1C1917` |
| fg-brand-subtle | `#F08A83` |
| fg-brand | `#C9443A` |
| fg-brand-strong | `#AE382F` |
| fg-success | `#1EBD66` |
| fg-success-strong | `#179C53` |
| fg-danger | `#E5484D` |
| fg-danger-strong | `#C73737` |
| fg-warning-subtle | `#FFA211` |
| fg-warning | `#B36A00` |
| fg-yellow | `#B37E00` |
| fg-disabled | `#A8A29E` |
| fg-purple | `#8E40CC` |
| fg-cyan | `#0891B2` |
| fg-indigo | `#473DFE` |
| fg-pink | `#E60076` |
| fg-lime | `#65A30D` |

---

## Semantic tokens — background

### Neutral

| Token | Hex |
|---|---|
| neutral-primary-soft | `#FBFAF9` |
| neutral-primary | `#FFFFFF` |
| neutral-primary-medium | `#F5F4F1` |
| neutral-primary-strong | `#E7E6E5` |
| neutral-secondary-soft | `#F5F4F1` |
| neutral-secondary | `#FFFFFF` |
| neutral-secondary-medium | `#FBFAF9` |
| neutral-secondary-strong | `#FFFFFF` |
| neutral-secondary-strongest | `#FBFAF9` |
| neutral-tertiary-soft | `#FBFAF9` |
| neutral-tertiary | `#F5F4F1` |
| neutral-tertiary-medium | `#E7E6E5` |
| neutral-quaternary | `#D6D3D1` |
| neutral-quaternary-medium | `#A8A29E` |
| gray | `#79716B` |

### Brand

| Token | Hex |
|---|---|
| brand-softer | `#FDEDEC` |
| brand-soft | `#FBD9D6` |
| brand | `#E4544B` |
| brand-medium | `#D24439` |
| brand-strong | `#B8362E` |

### Status

| Token | Hex |
|---|---|
| success-soft | `#EAFBF1` |
| success | `#1EBD66` |
| success-medium | `#BFF0D4` |
| success-strong | `#179C53` |
| danger-soft | `#FBEBEB` |
| danger | `#E5484D` |
| danger-medium | `#F5DBDB` |
| danger-strong | `#C73737` |
| warning-soft | `#FFF6DF` |
| warning | `#FFA211` |
| warning-medium | `#FFE9C1` |
| warning-strong | `#D98200` |

### Utility & accent

| Token | Hex |
|---|---|
| dark-soft | `#292524` |
| dark | `#1C1917` |
| dark-strong | `#0C0A09` |
| disabled | `#F5F4F1` |
| purple | `#8E40CC` |
| sky | `#0099FF` |
| teal | `#0D9488` |
| pink | `#E60076` |
| cyan | `#0891B2` |
| fuchsia | `#C026D3` |
| indigo | `#473DFE` |
| orange | `#FC5F35` |

---

## Semantic tokens — border

| Token | Hex |
|---|---|
| buffer | `#1C1917` |
| buffer-medium | `#1C1917` |
| buffer-strong | `#1C1917` |
| muted | `#FFFFFF` |
| light-subtle | `#FBFAF9` |
| light | `#E7E6E5` |
| light-medium | `#D6D3D1` |
| default-subtle | `#EBEBE7` |
| default | `#E7E6E5` |
| default-medium | `#D6D3D1` |
| default-strong | `#A8A29E` |
| success-subtle | `#BFF0D4` |
| danger-subtle | `#F5DBDB` |
| warning-subtle | `#FFE9C1` |
| brand-subtle | `#F5AEA9` |
| brand-light | `#EC6F66` |
| dark-subtle | `#E6E8DD` |
| dark-backdrop | `#000000` |

---

## Light theme registry

Flat token map for the default theme. (Charm's canonical surface is **light**; resolve any darker theme in your token layer against `#0C0A09` the same way this resolves against `#FFFFFF`.) Implement in your stack’s token layer — theme file, design tokens JSON, variables map, etc.

```
body                          #57534E
body-subtle                   #79716B
heading                       #1C1917
fg-brand-subtle                 #F08A83
fg-brand                        #C9443A
fg-brand-strong                 #AE382F
fg-success                      #1EBD66
fg-success-strong               #179C53
fg-danger                       #E5484D
fg-danger-strong                #C73737
fg-warning-subtle               #FFA211
fg-warning                      #B36A00
fg-yellow                       #B37E00
fg-disabled                     #A8A29E
fg-purple                       #8E40CC
fg-cyan                         #0891B2
fg-indigo                       #473DFE
fg-pink                         #E60076
fg-lime                         #65A30D
neutral-primary-soft            #FBFAF9
neutral-primary                 #FFFFFF
neutral-primary-medium          #F5F4F1
neutral-primary-strong          #E7E6E5
neutral-secondary-soft          #F5F4F1
neutral-secondary               #FFFFFF
neutral-secondary-medium        #FBFAF9
neutral-secondary-strong        #FFFFFF
neutral-secondary-strongest     #FBFAF9
neutral-tertiary-soft           #FBFAF9
neutral-tertiary                #F5F4F1
neutral-tertiary-medium         #E7E6E5
neutral-quaternary              #D6D3D1
neutral-quaternary-medium       #A8A29E
gray                            #79716B
brand-softer                    #FDEDEC
brand-soft                      #FBD9D6
brand                           #E4544B
brand-medium                    #D24439
brand-strong                    #B8362E
success-soft                    #EAFBF1
success                         #1EBD66
success-medium                  #BFF0D4
success-strong                  #179C53
danger-soft                     #FBEBEB
danger                          #E5484D
danger-medium                   #F5DBDB
danger-strong                   #C73737
warning-soft                    #FFF6DF
warning                         #FFA211
warning-medium                  #FFE9C1
warning-strong                  #D98200
dark-soft                       #292524
dark                            #1C1917
dark-strong                     #0C0A09
disabled                        #F5F4F1
purple                          #8E40CC
sky                             #0099FF
teal                            #0D9488
pink                            #E60076
cyan                            #0891B2
fuchsia                         #C026D3
indigo                          #473DFE
orange                          #FC5F35
buffer                          #1C1917
buffer-medium                   #1C1917
buffer-strong                   #1C1917
muted                           #FFFFFF
light-subtle                    #FBFAF9
light                           #E7E6E5
light-medium                    #D6D3D1
default-subtle                  #EFEDEB
default                         #E7E6E5
default-medium                  #D6D3D1
default-strong                  #A8A29E
success-subtle                  #BFF0D4
danger-subtle                   #F5DBDB
warning-subtle                  #FFE9C1
brand-subtle                    #F5AEA9
brand-light                     #EC6F66
dark-subtle                     #E6E8DD
dark-backdrop                   #000000
```

---

## Usage rules

- **Every content section sits on the warm `#F7F7F5` surface — no film grain.** On marketing / storefront pages all content sections share the one warm section surface (`#F7F7F5`) with no texture of any kind — no grain, no noise, no pattern; the surface stays flat and matte, and warmth comes from the palette alone.
- **The hero and the footer are the two cream accent bands.** The **hero** and the **footer** fill the soft cream **`#F1F2EA`** — always — flat and untextured, the hero fading to the `#F7F7F5` section surface at its bottom edge and the footer fading from `#F7F7F5` at its top edge, keeping the normal ink text (`heading` `#1C1917` over `body`), links in `fg-brand` (`#C9443A`), and standard button variants; every border or divider on the cream fill is `dark-subtle` (`#E6E8DD`) — never a gray hairline. No other section uses the cream fill.
- **The footer is ONE flat cream from top to bottom — never a two-tone footer.** However many internal bands the footer stacks (a brand / country row, the link columns, a legal / copyright bottom bar), they are **all the same single `#F1F2EA` cream** and are separated **only by `dark-subtle` (`#E6E8DD`) hairlines**. It is **strictly forbidden** to fill the legal bar, the bottom bar, or any other footer sub-band with a second, deeper, or darker cream tint (or any other color) — that produces the "two-color footer" look and must never happen. One footer, one cream.
- **The footer fade is the vertical inverse of the hero fade.** The hero band fills cream and **fades top → bottom** (solid cream at the top, dissolving into the `#F7F7F5` section surface at its bottom edge where it meets the content). The footer uses the **same cream fill and the same fade, mirrored bottom → top**: it fades **from `#F7F7F5` at its top edge** (where it meets the content above) **down to solid cream at the bottom of the page**. Concretely, if the hero is `linear-gradient(180deg, band 55%, page 100%)`, the footer is its exact mirror `linear-gradient(180deg, page 0%, band 45%)`. A footer must **never** be a solid `#F7F7F5` (or plain white) block, never carry a gray top border in place of the fade, and never fade the wrong way (cream at top → page at bottom) — it is always the hero's mirror.
- **Raised panels & cards.** On the **warm `#F7F7F5` section surface**, a card fills the soft-white `neutral-primary-soft` (`#FBFAF9`) outlined by a `default-subtle` (`#EBEBE7`) hairline — a whisper of separation from the white column. On the **gray application surface** (`#F5F4F1`), widgets and panels stay `neutral-primary` (`#FFFFFF`) with the `default` (`#E7E6E5`) border. The tone step plus the border is what separates a card from its surface.
- **Brand is a coral accent / block.** `brand` (`#E4544B`) leads primary actions, links, and highlights; it may fill a full hero or feature block (white text on coral) for maximum contrast. Brand is high-impact — use it deliberately, not as a wash across every section.
- **Inputs contrast their surface:** controls use a *contrasting* fill (`neutral-tertiary`, `#F5F4F1`), a step darker than the white card, plus a `default` border, so the field reads on the light surface. See `input-field.md`.
- **Primary actions:** `brand` background; label uses `#FFFFFF` white (the coral brand pairs with a white label for punch), while quiet actions on the light surface take an ink label.
- **Headings:** `heading` (`#1C1917`) · **Body:** `body` (`#57534E`) · **Muted:** `body-subtle` (`#79716B`).
- **Links / CTAs:** `fg-brand` (`#C9443A`) — a deep coral that stays legible on the light surface.
- **Borders:** cards and component shells carry a subtle `default` (`#E7E6E5`) border; `default-strong` is reserved for genuine dividers and the rare functional edge.
- **Disabled states:** `disabled` background + `fg-disabled` text.
- **Never use raw hex in components** — always reference semantic tokens.

## Prohibited

These rules are non-negotiable unless a product brief explicitly documents an exception and a compensating control.

### Token identity — agnostic by design

- **Semantic tokens are this design system’s vocabulary** — named roles (`body`, `brand`, `neutral-secondary-soft`), not imports from any external palette, framework, or vendor scale. Palette tables in this file are derivation reference only; they are **not** token names and **not** licensed aliases for third-party color systems.
- **Do not label or treat tokens as foreign palette steps** — never refer to `brand` as “orange 600”, `body` as “stone 300”, or `neutral-quaternary` as “neutral 800” in specs, code comments, or handoff. If a token exists, use its name.
- **Do not rename tokens to match another stack** — map *into* your implementation layer (theme file, variables map, design tool styles); do not rename tokens to fit a framework’s naming convention and call that “the design system.”
- **Hex values belong to the token registry** — each semantic token owns one resolved hex per theme. Tokens are the contract; hex is the stored value, not something authors pick at build time.

### Implementation boundaries

- **No raw hex in UI surfaces** — components, layouts, illustrations, and marketing assets must reference semantic tokens only. Hex appears in this registry and in the token layer — nowhere else.
- **No palette steps in product UI** — do not apply base-palette rows directly to buttons, text, borders, or backgrounds. Every color choice resolves through a semantic token.
- **No token chaining** — semantic tokens must not point at other tokens or palette variables (`token-a → token-b → #hex`). Each semantic token holds its own hex so the system stays portable and auditable.
- **No one-off colors for “close enough”** — if no token fits, add a token to this file with documented intent; do not hard-code a nearby hex in a single screen or component.
- **No orphan colors — every value a component paints must exist as a token here.** A color that is *derived* from the brand but never registered (a button edge, a gradient stop, a chart series, an illustration fill) is the most common way a theme rots: it looks right on day one, then survives a rebrand as a stale leftover of the old hue. Any such value must either **resolve to an existing token** (e.g. the primary button's edge is `brand-light`, not a literal one step off `brand`) or be **added to this registry as a named token**. If you cannot name it, you may not paint it.
- **Rebrand invariant — changing the brand means editing this registry and the token layer, and nothing else.** Swapping the brand hue must be a **values-only** edit: the semantic values in this file plus the token layer that mirrors them. Every other spec file, component, illustration, and chart names **tokens** (`brand`, `brand-light`, `brand-medium`, `fg-brand`, …) and therefore re-themes automatically. **Any file that must be hand-edited to complete a rebrand has a raw-hex bug — fix the literal into its token rather than updating the literal.** A spec that writes `1px #376EF8` instead of `1px brand-light` is a defect even while the color happens to look correct.
- **Spec files name tokens, not brand hex.** Outside this registry's tables, component and pattern specs (`buttons.md`, `cards.md`, `mockups.md`, `SKILL.md`, …) must refer to brand colors by **token name only**. They may not restate the brand's hex, because a restated hex is a second source of truth that silently goes stale.
- **No mixing themes on one surface** — light-registry values and any darker-registry values must not be blended on the same element because the other theme “looked better.”
- **No saturated full-section fills except the brand block** — page and section backgrounds use the light neutral surfaces; the coral brand is for controls, accents, and an intentional hero or feature block (white text on coral), not a tint washed across every content band.

### Semantic misuse

- **No brand foreground for long copy** — `fg-brand`, `fg-brand-strong`, and related brand text tokens are for links, labels, badges, and short emphasis — not paragraphs, articles, or legal text. Body copy uses `body` / `body-subtle`.
- **No accent foreground for navigation or body** — `fg-purple`, `fg-cyan`, `fg-pink`, `fg-indigo`, `fg-lime`, and similar accent text tokens are for tags, charts, and inline highlights — not nav items, menu labels, or reading text.
- **No status colors without status meaning** — `success`, `danger`, `warning`, and their `-soft` / `-strong` variants communicate state. Do not use them for decoration, category color-coding unrelated to state, or “making it pop.”
### Charts and data visualisation

- **A categorical series is coloured by ACCENT, not by shades of the brand.** When a chart encodes *different things* — plans, rooms, acquisition channels, product lines — each series takes a **distinct accent hue** (`brand`, `teal`, `purple`, `cyan`, `indigo`, `sky`, `pink`), starting with `brand` for the primary series. **Do not** paint every series in tints of the brand ramp (`brand-medium` / `brand` / `brand-light`). It looks disciplined in one widget and catastrophic across a dashboard: eight charts all rendered in one hue turn the page into a single wash of colour, the categories stop being separable at a glance, and the brand stops meaning "the primary action" because it now means everything.
- **A brand ramp is for ordered data, not categories.** Shades of one hue (`brand-light` → `brand` → `brand-medium`) are correct **only** where the values are *the same measure* — a metric over time (this year vs last year), a share of one total (mobile vs desktop), a sequential scale. Same measure → one hue in steps. Different things → different hues.
- **Status hues never encode a category.** `success`, `danger`, and `warning` are reserved for real state. A chart may use them for a **trend** (a metric rising is genuinely *good*, falling genuinely *bad*), but a plan tier, a room, or a traffic source is **not** a warning — never reach for amber just because a third colour is needed. Take the next accent instead.
- **Pick accents that hold together with the brand.** Adjacent series should not vibrate against each other or against the brand. Prefer a calm complement (a coral brand pairs with `teal`) over an electric one; if two accents fight, choose a different accent, never a hand-mixed hex (see *No orphan colors*).

- **No accent backgrounds on full shells** — page backgrounds and section bands use the light neutral surfaces only. Brand and accent fills are for controls, badges, charts, and an intentional hero or feature block only.
- **No border tokens as fills or text colors** — `default`, `light`, `brand-subtle`, and other border tokens define edges; do not repurpose them as background or typography colors without adding a proper surface or text token.

### Contrast, accessibility, and states

- **No token pairing that fails readable contrast** — when combining text and surface tokens, verify legibility (WCAG 2.2 AA minimum for text). On the light surface, body text uses `body` / `body-subtle` and links use the deep `fg-brand`, never a pale brand tint as text. If a pair fails, change the token assignment or add a dedicated pair to the registry — do not override with raw hex.
- **No disabled styling that looks active** — disabled surfaces use `disabled` + `fg-disabled`; do not reuse `body` or `brand` on disabled controls because they read as clickable.
- **No hover/focus/active colors outside the system** — interaction states must derive from the same semantic set (e.g. a lighter brand step already in the registry), not ad-hoc lightened or darkened hex.

### Governance

- **No silent drift** — changing a token’s hex is a design-system change; update this file, note the reason, and propagate to all platforms. Per-platform hex tweaks break parity.
- **No duplicate tokens for the same job** — if two names resolve to the same role, merge them. Synonym sprawl erodes the agnostic contract.
- **No exceptions without documentation** — breaking any rule above requires naming the exception, the surface it applies to, and why the existing tokens were insufficient.

# Drawer — TypeUI · Charm

> **TypeUI · Charm** — off-canvas panels for navigation, forms, and detail sheets.
> Depends on: `colors.md`, `radius.md`, `shadows.md`, `spacing.md`, `typography.md`, `buttons.md`

A drawer slides in from a viewport edge — unlike a modal, it's anchored to that edge and often keeps wayfinding context in view. It shares the modal's `neutral-primary-soft` lighter-panel surface and is **borderless and flat** (`elevation-none`) — separated from the page by that lighter surface and the backdrop scrim — but its corners follow the **edge-anchored exception** to the 4px panel rule: edges flush against the viewport stay square, and only the free inward edges take `radius-xl` (16px). A full-height side drawer keeps its flush edge square by design.

---

## Anatomy

| Part | Role |
|---|---|
| **Backdrop** | Optional scrim over page |
| **Panel** | Fixed sheet |
| **Header** | Title, logo, close control |
| **Body** | Scrollable content |
| **Footer** | Optional action row |
| **Trigger** | External control that opens drawer |

---

## Layout

| Property | Token / value |
|---|---|
| Panel background | `neutral-primary-soft` (a lighter panel over the scrim) |
| Panel border | None — the lighter panel surface and the backdrop scrim separate it from the page |
| Panel radius | **Square on edges flush to the viewport**; the inward free edge may take `radius-xl` (16px). A full-height side drawer stays square — see the edge-anchored exception in `radius.md` |
| Panel shadow | None (`elevation-none`) |
| Default width | 320px (`spacing-80` scale) or 384px for content-heavy |
| Height | Full viewport height (side drawers) or auto (bottom sheet) |
| Padding | `spacing-4` panel inset |
| Header bottom border | 1px `default`; padding bottom `spacing-4`; margin bottom `spacing-5` |
| Body | `overflow-y: auto`, `overflow-x: hidden` (never a horizontal scrollbar) |
| Footer gap | `spacing-4` between actions |
| Z-index | Above page, below toast layer — stacking context documented per product |

**Nothing inside a drawer, sidebar, or modal ever exceeds its container width.** Every control — text field, `select`, date field, number input, segmented control, button group, selectable card — **fits inside the panel and never surpasses its left or right edge**. This is not optional: a field that spills past the drawer edge (see the classic overflowing "To" number input) is a bug. Two things make it hold: (1) every flex/grid cell that holds a control gets **`min-width: 0`** so it can shrink to the panel — grid and flex items default to `min-width: auto` and will otherwise be forced to the control's intrinsic width and push past the edge; and (2) inputs themselves get **`min-width: 0`** (and `max-width: 100%`) so they shrink below their default intrinsic size. The panel body also sets **`overflow-x: hidden`** as a final guard. When a control must be narrower to fit, shrink it — never let it overflow. The same rule applies to modals and sidebars.

### Close control

**24 × 24px max** — the close (×) button is capped at 24 × 24px in drawers; icon 20px; absolute top `spacing-2-5` trailing `spacing-2-5`; hover `neutral-tertiary`; radius `radius-xl`.

### Header title

font-size-lg, font-weight-medium, `body` or `heading` color; optional 20px leading icon with a `spacing-1-5` gap.

---

## Placement

| Placement | Transform hidden | Border emphasis |
|---|---|---|
| **Start (left LTR)** | Off-canvas inline-start | Border inline-end |
| **End (right LTR)** | Off-canvas inline-end | Border inline-start |
| **Top** | Above viewport | Border bottom |
| **Bottom** | Below viewport | Border top |

RTL mirrors start/end.

---

## Variants

### Default

Header + body copy + footer buttons (secondary + primary from `buttons.md`).

### Navigation

A logo row over a vertical link list — item padding `spacing-2` × `spacing-1-5`, hover `neutral-tertiary`, 20px icon + `spacing-3` gap, nested items indented `spacing-10`. Badges are allowed on items.

### Contact / lead form

Form fields in the body, submit in the footer.

### Form elements showcase

Mixed inputs — follow `input-field.md`.

### Body scroll modes

| Mode | Behavior |
|---|---|
| **Locked** | Page scroll disabled while open |
| **Scrollable** | Page scrolls behind drawer |

### Backdrop

| Mode | Scrim |
|---|---|
| **Visible** | Semi-transparent overlay `rgba(0,0,0,0.5)` or `neutral-primary-strong` at documented opacity — tap closes |
| **Hidden** | No scrim; click-outside may still close |

### Swipeable edge (mobile)

A partial peek of the drawer handle when closed — an optional product pattern; 16px visible edge.

---

## Motion

| Transition | Duration | Properties |
|---|---|---|
| Panel slide | 300ms | Transform translate |
| Backdrop fade | 300ms | Opacity |
| Easing | ease-out | — |

Hidden: translated fully off-screen. Open: flush to the chosen edge. Respect **reduced-motion**: instant open/close or fade only.

---

## Accessibility

- Panel: `role="dialog"`, or `role="navigation"` for nav-only; `aria-modal="true"` when it behaves modally.
- Label: `aria-labelledby` pointing to the header title id.
- Trigger: `aria-controls` + expanded state.
- Trap focus while open; restore focus to the trigger on close.
- Close: a visible control plus `Escape` dismiss.
- Announce the scroll lock only if content requires it.

---

## Prohibited

- **No rounding an edge flush to the viewport** — the flush edge stays square; only free inward edges take `radius-xl` (16px).
- **No drawer width below 280px** for form content.
- **No control that surpasses the panel** — nothing inside the drawer (fields, selects, number inputs, button groups, cards) may extend past its left/right edge or trigger a horizontal scrollbar. Give holding cells and inputs `min-width: 0` so they shrink to fit; the body clips horizontal overflow.
- **No nested drawers** — close the current one first.
- **No shadow on the drawer** — it is flat (`elevation-none`); separation is the backdrop scrim plus its lighter panel surface.
- **No duplicating primary page content** inside a drawer without user intent.
- **No raw colors or shadow strings**, and no framework-specific data attributes — describe open/close behavior agnostically with semantic tokens.

# Dropdowns — TypeUI · Charm

> **TypeUI · Charm** — transient menus for actions, navigation, filters, and selectors.
> Depends on: `colors.md`, `radius.md`, `shadows.md`, `spacing.md`, `typography.md`, `buttons.md`

A dropdown is a floating menu anchored to a trigger — never a permanent navigation rail. The Charm panel is a crisp **soft-rounded** (`radius-lg`, 8px) surface on `neutral-primary` — carrying a **subtle derived border and a medium drop shadow** (`elevation-2`), reading as a *white panel floating over the section* (it sits above the page, below modals). Items sit inside at the soft control corner `radius-md` (8px) — a menu row is a hoverable control, so it takes the control radius, never the near-square `radius-xs` (see `radius.md`). Menus open on click by default, trap nothing, and return focus to the trigger on close.

---

## Anatomy

| Part | Role |
|---|---|
| **Trigger** | Button, icon button, or avatar — opens menu |
| **Menu** | Floating panel |
| **List** | Menu items |
| **Item** | Link or button row |
| **Divider** | Horizontal rule between groups |
| **Header** | Non-interactive title or label row |
| **Checkbox / radio / switch item** | Selectable row |
| **Search field** | Filter inside menu (scrollable lists) |

---

## Layout

### Menu panel

| Property | Token / value |
|---|---|
| Background | `neutral-primary` (a white panel floating over the section) |
| Border | **1px in the panel's own fill, darkened ~10–15%** — a subtle derived edge so the menu reads against the page (see the dropdown panel rule) |
| Radius | `radius-lg` |
| Shadow | **Medium** (`elevation-2`) — a real medium drop shadow; the dropdown is a floating overlay, the one documented exception to the otherwise-flat system |
| Padding | `spacing-2` around list |
| Width | **Auto** — sized to the longest item's text; clamp ~144px min to ~320px max, then wrap/scroll. Never a fixed wide block |
| Max height | **None by default — the menu grows to fit every item and never scrolls.** Apply a `~320px`-then-scroll cap **only when the prompt explicitly asks for a scrollable list** (see the Scrollable variant) |
| Z-index | Above cards; below modals |

### Menu item

Menu items take the soft control corner `radius-md` (8px) — **never** `radius-xs`. A menu row is a control the user hovers and clicks, not a decorative inset cell, so it wears the same 8px corner as every other Charm control; a 4px corner reads as a sharp, near-square strip inside the soft 12px panel (see `radius.md`).

| Property | Token / value |
|---|---|
| Padding | `spacing-2` |
| Radius | `radius-md` (8px) — the soft control corner, never `radius-xs` |
| Font | font-size-sm, font-weight-medium, line-height-component |
| Color | `body` |
| Hover | `neutral-tertiary-medium` background, `heading` text |
| Width | 100% of menu inner width |

### Divider

1px `default-medium`; vertical margin `spacing-2`.

### Header row

font-size-sm, font-weight-semibold, `body-subtle`; padding `spacing-2`; not hoverable.

### Trigger chevron

16px trailing on a default button trigger; gap `spacing-1-5`.

---

## Sizes

| Size | Menu width | Item padding |
|---|---|---|
| Small | **Auto** (fits longest item) | `spacing-1-5` |
| Default | **Auto** (fits longest item) | `spacing-2` |
| Large | **Auto** (fits longest item) | `spacing-2-5` |

Menu **width is always auto** — sized to the longest item's text within the ~144–320px clamp; only the item padding changes by size. The trigger follows the `buttons.md` base size unless it's icon-only.

---

## Overlay & stacking — always on top

A dropdown must paint **above everything else on the page** so its contents stay readable; nothing may cover an open menu.

- **Escape the parent stacking context with a portal.** A `z-index` alone is **not enough** — if the trigger sits inside a card, toolbar, or row with its own stacking context (`transform`, `opacity`, `position`, `overflow`, `filter`), the menu is clipped or later siblings paint on top of it. Render the menu in a **portal to `document.body`** (a top-level overlay root), positioned with **`position: fixed`** anchored to the trigger.
- **Top of the page layer.** The portalled menu sits at the **dropdown layer — `z-index: 200`** — above all page content (cards, banners, sticky bars, sibling rows), below modals/drawers. An open menu always fully covers whatever is behind it.
- **Re-anchor on scroll/resize.** Because it is `position: fixed`, recompute the menu's coordinates against the trigger on scroll and resize (and flip when the viewport runs out — see Placement).

### Controls inside a menu are Small

Every interactive control **inside** a dropdown menu uses the **Small** size — small inputs (the search field), small option rows (checkbox / radio items), and **small** footer buttons. **Never Base or Large inside a menu** — the menu is a compact surface.

---

## Placement

The menu anchors to the trigger with a preferred placement (bottom-start, bottom-end, top-start, top-end, or inline) and flips when the viewport runs out. Default offset from the trigger is **`spacing-2`** (configurable).

---

## Interaction

| Mode | Behavior |
|---|---|
| **Click (default)** | Toggle on trigger click; close on outside click or Escape |
| **Hover** | Open on pointer enter; 300ms show/hide delay default; 500ms optional |
| **Offset** | Distance from trigger edge — `spacing-2` base |

Multi-level: a nested submenu opens inline-end with the same panel tokens.

**Selection menus stay open on click.** In a menu of **checkbox, radio, or filter** options, clicking an option **selects / toggles it and keeps the menu open** — it does **not** dismiss on selection. These menus close only on **outside click, Escape, or an explicit Apply / Done** button. (Plain action or navigation menus — Edit, Sign out, a nav link — close on click as normal.)

**The open menu is always the topmost thing.** It paints **over the content directly beneath it** (expected — the menu must be readable); no row, banner, or sibling ever paints over the menu (see Overlay & stacking).

---

## Variants

### Default list

Text items only — Dashboard, Settings, Sign out.

### With divider

Grouped sections separated by a divider.

### With header

A section label above an item group.

### Checkbox list

A row of checkbox + label for multi-select; the checked state uses the brand accent on the control. The checkbox box stays a **16 × 16px box** (`radius-lg`, 8px) — never fully round or pill-shaped, even inside a filter panel.

### Radio list

Single-select, mutually exclusive options.

### Filter dropdown

A multi-select filter menu. Design rules: the **trigger is a small outline button** with a leading 16px glyph and the trailing chevron. Check rows take `spacing-1-5` padding, `radius-xs` corners, the neutral hover fill, and an optional `body-subtle` normal-weight count pushed to the inline end; an optional **full-width small primary confirm button** sits `spacing-2` below the rows. **Selecting inside the panel does not close it** (multi-select) — the panel closes on outside click or Escape. Panel width follows content, inside the standard menu bounds.

### Toggle row

A switch + label for a boolean setting.

### Scrollable

**Opt-in only — use this *only* when the prompt explicitly asks for a scrollable menu.** A fixed max height with scroll inside the menu. By default a dropdown has **no scroll** and shows all of its items at once.

### With search

A search input pinned to the top with the filtered list below — the input uses the compact spec from `input-field.md`.

### Icon trigger

A kebab / vertical-dots icon button opens the menu.

### Notification bell

An icon trigger with a badge; the menu lists notifications.

### User avatar

An avatar trigger; the menu holds account actions.

### Navbar dropdown

A nav-link trigger with an optional wide menu for mega patterns.

### Datepicker / complex

A composite panel — date cells follow the calendar spec when documented.

---

## Motion

| Transition | Duration | Properties |
|---|---|---|
| Open / close | 150–200ms | Opacity + slight scale (optional) |
| Hover delay | 300ms default | — |

---

## Accessibility

- Trigger: `aria-expanded`, `aria-haspopup="menu"`.
- Menu: `role="menu"`; items `role="menuitem"` (or `menuitemcheckbox` / `menuitemradio`).
- Focus the first item on open; arrow keys navigate; Escape closes.
- Return focus to the trigger on close.
- Checkbox/radio items use standard input labeling.

---

## Prohibited

- **No flat, borderless menu panel** — the dropdown is a floating overlay: it carries a **medium drop shadow** (`elevation-2`) and a **subtle derived border** (its own fill darkened ~10–15%) so it lifts off and reads against the page. (Only floating overlays get this shadow; resting cards and sections stay flat.)
- **No hover-only menus on touch-primary flows** without a click equivalent.
- **No auto-close when toggling a checkbox / radio / filter option** — selection menus stay open while options are chosen; they dismiss only on outside click, Escape, or an explicit Apply / Done.
- **No fixed or oversized menu width** — the panel width is **auto**, sized to the longest item's text (clamped ~144–320px); never a fixed wide block that leaves empty gutters beside short labels.
- **No menu wider than the viewport** — constrain and scroll.
- **No dropdown trapped in a parent stacking context** — portal the menu to `document.body` with `position: fixed`; a parent's `transform` / `overflow` / `opacity` / `position` otherwise clips it or lets later siblings paint over it. A `z-index` alone is not enough.
- **No element painting over an open menu** — the portalled menu sits at the dropdown layer (`z-index: 200`, below modals) and covers everything behind it.
- **No Base or Large controls inside a menu** — inner inputs, option rows, and buttons are always the **Small** size.
- **No round checkboxes in menus** — filter / checkbox menu rows use the soft-rounded tick box (`radius-lg`, 8px), never a pill or circle. See `checkbox.md`.
- **No destructive action without visual emphasis** — danger text or divider isolation.
- **No nested scroll fighting page scroll** — lock the menu's scroll container.
- **No more than two menu levels** in default patterns.
- **No near-square menu rows** — menu / nav items take the soft control corner `radius-md` (8px), never `radius-xs`. A sharp-cornered row inside a soft 12px panel breaks the Charm silhouette.
- **No hover fill on an avatar-only trigger** — when a dropdown trigger is an icon button that wraps nothing but an **avatar**, it takes **no hover / active / open background**. The avatar is already the affordance; painting a square `neutral-tertiary` fill behind a round avatar reads as a stray box around it. (Icon buttons wrapping a *glyph* keep their normal hover fill.)
- **No raw shadow or color values**, and no framework data-attribute names — semantic tokens only.

# File Input — TypeUI · Charm

> **TypeUI · Charm** — file upload: native picker, multi-file, and dropzones.
> Depends on: `input-field.md`, `buttons.md`, `colors.md`, `radius.md`, `shadows.md`, `spacing.md`, `typography.md`

A native file picker wears the standard Charm **field shell** from `input-field.md`. When a screen invites drag-and-drop, it graduates to a **dropzone**: a roomy soft-rounded (`radius-md`, 8px) target with a *dashed* `default-strong` border — the dashed edge is the system's signal for "drop here," and it's the one place Charm trades its solid border for a dashed one. Constraints (formats, size) always live in visible helper text, never hidden in a tooltip.

---

## Anatomy

| Part | Role |
|---|---|
| **Label** | Describes expected file type or purpose |
| **Native control** | Hidden or styled `<input type="file">` |
| **Dropzone surface** | Click/drag target replacing default file UI |
| **Icon** | Upload cloud or arrow — centered in dropzone |
| **Primary line** | "Click to upload" emphasis |
| **Secondary line** | Format and size constraints |
| **Browse button** | Optional explicit button inside dropzone |
| **Helper text** | Below native-style field |

---

## Native file field shell

| Property | Token / value |
|---|---|
| Shell | Same as `input-field.md` |
| Cursor | Pointer on control |
| `multiple` attribute | Same shell — browser shows file count |

---

## Sizes (native)

| Size | Font size | Block padding |
|---|---|---|
| Default | `font-size-sm` | `spacing-2-5` |
| Large | `font-size-lg` | `spacing-2-5` |

Width stays 100% of the parent.

---

## Variants

### File upload (default)

Label + native file input on the standard shell.

### Helper text

Helper below the control: `font-size-sm`, `body-subtle`, `spacing-1` margin-top — e.g. allowed extensions and max dimensions.

### Multiple files

The `multiple` attribute; styling is unchanged, but the helper should state that multi-select is allowed.

### Dropzone

The signature upload surface — generous, dashed, and centered.

| Property | Token / value |
|---|---|
| Min height | 256px |
| Width | 100% |
| Background | `neutral-secondary-medium` |
| Border | 1px dashed `default-strong` |
| Radius | `radius-md` |
| Layout | Column, centered icon + text |
| Hover background | `neutral-tertiary-medium` |
| Icon | 32 × 32px, `body` |
| Primary text | `font-size-sm`, `font-weight-semibold` on the "Click to upload" span; remainder normal |
| Secondary text | `font-size-xs`, `body-subtle` |
| Hidden input | Visually hidden; `<label for>` wraps the dropzone |
| Padding (content block) | `spacing-5` top, `spacing-6` bottom |

Drag-over state (product logic): border `brand`, optional `brand-softer` background — keep contrast readable.

### Dropzone with button

The dropzone is a non-label container with an inner **Browse file** primary button (`buttons.md`, `font-size-sm`, 16px leading icon) that triggers the hidden input.

---

## States

| State | Behavior |
|---|---|
| Default | Shell or dropzone tokens |
| Hover (dropzone) | `neutral-tertiary-medium` fill |
| Focus | Focus ring on the hidden input's focusable label/button — 4px `brand-medium` |
| Disabled | Muted border, `fg-disabled` text, no pointer events |
| Error | Dropzone border `danger-subtle`; message below per validation |

---

## Motion

Hover background ≤ 150ms; drag-over highlight ≤ 150ms. No bounce or scale on the dropzone.

---

## Accessibility

| Requirement | Implementation |
|---|---|
| Label | Visible label linked to the input |
| Dropzone | `<label for="id">` or a button with an explicit action |
| Keyboard | Space/Enter activates the file picker |
| Constraints | Helper states formats/size in text |
| Error | `aria-invalid` + error message id |

---

## Prohibited

- **No dropzone without a keyboard path** to open the file dialog.
- **No solid border on a dropzone** — the dashed `default-strong` edge is what distinguishes it from a text field.
- **No custom file button that hides the focus ring**.
- **No shadow on a dropzone** — it is flat (`elevation-none`); the dashed drop-target edge is its only affordance.
- **No corners other than `radius-md`** (8px) on the dropzone or native shell.

# Input Field — TypeUI · Charm

> **TypeUI · Charm** — the field shell every text control inherits.
> Depends on: `colors.md`, `radius.md`, `shadows.md`, `spacing.md`, `typography.md`, `dropdowns.md`

This is the foundation of every form in Charm. The field shell is a crisp **soft-rounded** (`radius-md`, 8px) control on a **contrasting `neutral-tertiary` fill** (`#F5F4F1`, a step darker than the white card/section it sits on), defined by a **`default` (`#E7E6E5`) border** under the **small `elevation-1` control shadow** (the same shadow buttons carry), and — on focus — a `brand` border under a `brand-medium` ring. Labels sit above in `heading`; helper and validation text sit below. Search, number, phone, file, select, and time controls all extend *this* shell, so it stays consistent unless a module explicitly overrides it. The multi-line **`textarea`** extends it too but **caps its radius at `radius-md` (8px)** — the slight panel softening over the otherwise sharp shell.

---

## Anatomy

| Part | Role |
|---|---|
| **Label** | Visible field name linked to control via `for` / `id` |
| **Control** | Native `<input>` or equivalent |
| **Placeholder** | Hint text when empty — not a substitute for a label |
| **Helper text** | Optional secondary copy below the field |
| **Validation message** | Success or error feedback below the field |
| **Addon (input group)** | Leading icon, prefix text, or suffix segment fused to the control |
| **Leading icon slot** | Decorative glyph inside the field shell |

---

## Field shell (default)

The single shape every standard single-line input wears.

| Property | Token / value |
|---|---|
| Width | 100% of parent |
| Background | `neutral-tertiary` (`#F5F4F1`) — a contrasting fill, a step darker than the card/section |
| Border | `default` (`#E7E6E5`), 1px — the resting edge that defines the field |
| Radius | `radius-full` (9999px) — inputs are pills, like buttons |
| Shadow | **`elevation-1`** — the small control shadow, shared with buttons |
| Text color | `heading` |
| Placeholder color | `body` |
| Font size | `font-size-sm` |
| Line height | `line-height-component` |
| Padding (inline) | 25px — the base button's 26px minus the 1px border, so field and button boxes match |
| Padding (block) | 13px — the base button's 14px minus the 1px border; the field's `line-height: 1` text plus this padding gives the same ≈42px box as a base button |
| Focus border | `brand` |
| Focus ring | `brand-medium` |
| Outline | None — ring replaces default browser outline |

---

## Focus — standalone vs composite shell

Focus must read on the **entire control**, never as a ring clipped around the placeholder text or inner `<input>` alone.

| Pattern | Where focus ring lives | Implementation |
|---|---|---|
| **Standalone `<input>`** | On the input element itself | `:focus-visible` → `brand` border + `brand-medium` ring on the field |
| **Composite shell** (leading icon, prefix addon, search bar) | On the **outer wrapper** | Wrapper gets `:focus-within` → `brand` border + `brand-medium` ring; inner `<input>` has **no** outline and **no** box-shadow |

Composite shells include search inputs with icons, footer email bars, toolbar queries, and table filter fields. The wrapper owns the border and radius; the inner input is borderless and transparent.

**Required composite CSS behavior:**

```css
.field-shell:focus-within {
  border-color: var(--color-brand);
  box-shadow: var(--focus-ring);
}

.field-shell input:focus,
.field-shell input:focus-visible {
  outline: none;
  box-shadow: none;
}
```

Never apply a global `:focus-visible` ring to nested inputs inside a composite shell — that produces a broken ring around the text/placeholder only.

---

## Label & helper typography

| Element | Size | Weight | Color | Spacing |
|---|---|---|---|---|
| Label | `font-size-sm` | `font-weight-medium` | `heading` | `spacing-2-5` below label → control |
| Helper text | `font-size-sm` | normal | `body-subtle` | `spacing-1` above helper |
| Validation message | `font-size-sm` | normal; lead-in `font-weight-medium` | Intent foreground | `spacing-2-5` above message |

A link inside helper or label is `fg-brand`, underlined on hover.

---

## Sizes

Four heights driven by padding, not fixed pixels — so a field always aligns to the button beside it.

**The button tiers are the reference.** An input's height always equals the button of the same tier — buttons are the reality, inputs match them (the multi-line `textarea` is the one exception; it sizes to its rows).

**One input height per surface — every input matches every other input and the buttons beside it.** Within a single form, drawer, modal, filter panel, or toolbar, **all inputs are the same tier and therefore the same height**, and that height equals the buttons on that surface. Never mix input sizes in one place (e.g. a base `select` next to a smaller date field and a smaller number field is forbidden — that is the "two sizes in one drawer" bug). If a field must be narrower to fit, tighten only its **inline (horizontal)** padding; keep the **block (vertical)** padding of its tier so the height never changes. Selects, text fields, date fields, and number inputs on the same surface all resolve to the identical box.

**Use the Base (Default) input on modals, drawers, and landing / marketing pages.** These surfaces use the **Base** input tier (≈42px), matching the Base button — never the Small tier. Reserve the **Small** input for genuinely compact chrome only (a navbar/toolbar search field, dense dashboard rows), where its buttons are also Small. Inputs and the buttons beside them always share one tier on a surface.

| Size | Block padding | Inline padding | Font size | Matches |
|---|---|---|---|---|
| Small | 11px | 19px | `font-size-sm` (14px, line-height 1) | the **Small** button, ≈38px |
| Default (base) | 13px | 25px | `font-size-sm` (14px, line-height 1) | the **Base** button, ≈42px |
| Large | 16px | 23px | `font-size-md` (16px, line-height 1) | the **Large** button, ≈50px |
| Extra large | — | — | — | Not used: inputs stop at Large so every input matches a button tier |

Height grows from padding and line height — never fixed pixel heights. The paddings above are each tier's button padding minus the input's 1px border, so an input and a button of the same tier measure identical boxes by construction.

---

## Variants

### Default form grid

Fields stack vertically with `spacing-6` between groups. Multi-column layouts use a responsive grid with a `spacing-6` gap; each cell holds one label + control group.

Supported native types in composite forms: `text`, `email`, `password`, `url`, `tel`, `number`.

### Input group — leading icon

| Property | Token / value |
|---|---|
| Wrapper | `position: relative`; full width |
| Icon box | Absolute at inline start; vertically centered |
| Icon size | 16 × 16px |
| Icon color | `body` |
| Icon inset | `spacing-3` from inline start |
| Control padding (inline start) | `spacing-9` to clear icon |
| Icon | `pointer-events: none`; decorative only |

### Input group — prefix addon

A horizontal row where the addon segment and control share one outer radius — the fusion reads as a single rounded control.

| Part | Token / value |
|---|---|
| Row shadow | None (`elevation-none`) |
| Row border | `default` (`#E7E6E5`) on the outer perimeter |
| Row radius | `radius-md` on outer corners only |
| Addon background | `neutral-quaternary` (a step darker than the field fill, so segments read apart) |
| Addon border | A `default` (`#E7E6E5`) divider on the shared edge separates addon from control |
| Addon padding | `spacing-3` inline |
| Addon text | `font-size-sm`, `body` |
| Addon icon | 16 × 16px, `body` |
| Field inner radius | Flush on shared edge; outer corner keeps `radius-md` |

Prefix examples: an `@` user icon, an `https://` URL scheme.

### Helper text

A paragraph below the control, optionally with an inline link (`fg-brand`). Link the helper id to the input with `aria-describedby`.

### Search input

Query fields use the same **field shell** with a leading magnifying glass — same crisp soft-rounded (`radius-md`, 8px), same contrasting fill with a `default` border, same flat (`elevation-none`) surface, same brand focus ring on the **wrapper** via `:focus-within`. It never invents its own look; it only adds search affordances (leading icon, optional clear/voice/submit, optional scope menu). The search action is always keyboard-reachable, and any scope dropdown is drawn by `dropdowns.md`, not styled inline.

#### Search anatomy

| Part | Role |
|---|---|
| **Label** | Visible or visually hidden (`sr-only`) depending on layout |
| **Control** | `type="search"` or `type="text"` |
| **Leading icon** | Magnifying glass — default search affordance |
| **Trailing control** | Optional clear, voice, or submit button |
| **Dropdown panel** | Optional filter or scope menu (see `dropdowns.md`) |
| **Helper / scope text** | Optional hint below bar |

#### Search layout

| Property | Token / value |
|---|---|
| Field shell | Same as field shell above |
| Leading icon | 16 × 16px, `body`, inset `spacing-3` from inline start |
| Padding (inline start with icon) | `spacing-9` |
| Trailing button hit target | 32 × 32px minimum |
| Bar width | 100% of parent; advanced layouts may cap max width in the page spec |

#### Simple search

Label + field with the leading search icon; the placeholder describes the query ("Search…", "Search products…").

#### Search bar (prominent)

For hero or toolbar placement: optional `font-size-base` and `spacing-4` block padding — but only on large breakpoints, and still on the standard shell.

#### Search with dropdown

A composite row: the text field plus an adjacent scope trigger (e.g. "All categories"). The menu uses flat, `radius-md`, and `dropdowns.md` item spacing; gap between field and trigger is `spacing-2`.

#### Location search

A leading location-pin icon in place of the magnifying glass — same shell and padding.

#### Voice search

A trailing icon button for the voice affordance (16 × 16px icon, ghost hover at `neutral-tertiary-medium`); the field's inline-end padding clears the button.

#### Advanced search

A multi-control toolbar: the primary field plus filter chips and/or secondary buttons (`buttons.md`). The field keeps the standard shell; the vertical gap between toolbar rows is `spacing-4`.

#### Search states & motion

Focus, disabled, and validation come from the field shell rules above. **Composite search bars** (icon + input) put the focus ring on the **wrapper** via `:focus-within`, not on the inner `<input>`. Trailing icon buttons use the button focus ring (4px `brand-medium`). A clear button appears once the field has a value (product logic) and carries `aria-label="Clear search"`. Focus ring ≤ 150ms. Optional fade for the clear button — ≤ 150ms, with no layout shift.

#### Search accessibility

| Requirement | Implementation |
|---|---|
| Role | `type="search"`, or `role="search"` on the containing form |
| Label | Visible label or `aria-label` on the input |
| Icon buttons | Accessible name ("Search", "Start voice search", "Clear") |
| Dropdown scope | `aria-expanded`, `aria-controls` on the trigger |
| Results | Live region or linked results list documented in the page pattern — not part of this shell |

#### Search prohibited

- **No divergent field shell** — same border, sharp (0px) radius, and elevation as the standard field shell.
- **No submit-only placeholder** — the search action is reachable by Enter or a button.
- **No icon-only search without an accessible name**.
- **No dropdown panel styled inline** — use `dropdowns.md`.
- **No focus ring on the inner input alone** — the whole search shell (icon + field) lights up together via the composite focus rule above.


### Dropdown input (combobox-style)

A text shell with a trailing chevron or menu affordance; the panel follows `dropdowns.md`. The shell is unchanged — the chevron sits in the trailing slot.

---

## Validation states

Validation recolors the whole shell so it reads at a glance — but never on color alone; a message always accompanies it.

| State | Background | Border | Text / placeholder | Focus ring |
|---|---|---|---|---|
| Default | `neutral-tertiary` (`#F5F4F1`) | `default` (`#E7E6E5`) | `heading` / `body` | `brand-medium` |
| Success | `success-soft` | None (intent fill + ring) | `fg-success-strong` | `success` |
| Error | `danger-soft` | None (intent fill + ring) | `fg-danger-strong` | `danger` |

Label color matches the intent foreground on success and error (`fg-success-strong`, `fg-danger-strong`). The message uses the same foreground; its first clause may take `font-weight-medium` for emphasis ("Well done!", "Oh, snap!").

---

## States

| State | Visual / behavior |
|---|---|
| Default | Field shell tokens above |
| Hover | Background unchanged (matches surface); border may deepen toward `default-strong` |
| Focus | Resting `default` border swaps to `brand` + 4px `brand-medium` ring |
| Filled | Same as default; value uses `heading` |
| Disabled | Text `fg-disabled`; no pointer events; native `disabled` |
| Read-only | Same visuals as disabled in examples; use `readonly` + `disabled` styling or a dedicated read-only token if the product distinguishes them |
| Invalid (native) | Prefer the explicit error variant over browser default styling |

---

## Motion

| Interaction | Duration | Notes |
|---|---|---|
| Focus ring | Instant or ≤ 150ms | Ring appears on `:focus-visible` |
| Border color on focus | ≤ 150ms | Optional subtle transition |

No scale, bounce, or shadow animation on the field shell.

---

## Accessibility

| Requirement | Implementation |
|---|---|
| Label | Every input has a visible `<label>` or an `aria-label` when the design hides the label |
| Helper / error | `aria-describedby` references the helper and/or error element ids |
| Invalid | `aria-invalid="true"` when an error state shows |
| Required | `required` attribute plus a visual indicator if form policy needs one |
| Focus | Visible `:focus-visible` ring on the **whole control** — standalone input or composite wrapper via `:focus-within`, never ring on inner input only |
| Placeholder | Not the only accessible name |
| Input group icons | `aria-hidden="true"` when decorative |
| Color | Success/error never rely on color alone — a message is required |

---

## Prohibited

- **No corners other than `radius-md`** (8px) on the shell — a fused input group keeps 8px on its **outer** corners only; shared inner edges stay square so the pieces read as one control.
- **No shadow beyond `elevation-1`** — the field carries only the small control shadow it shares with buttons; never a heavier or colored shadow.
- **No same-as-surface fill** — the field uses the contrasting `neutral-tertiary` (`#F5F4F1`) fill plus the `default` (`#E7E6E5`) border so it reads on the light surface; focus swaps the border to a `brand` edge.
- **No removing the focus ring** without an accessible replacement.
- **No focus ring on the inner input of a composite shell** — search/icon/prefix wrappers use `:focus-within` on the outer shell so the ring wraps the full field, not the placeholder text alone.
- **No placeholder-only labeling** for required fields.
- **No success/error colors on a default field** without an accompanying validation message.
- **No mixing validation intents** on one field — one message, one intent.
- **No raw hex or off-scale spacing**, and **no framework/vendor class names** — foundation tokens only.

# Mockups — TypeUI · Charm

> **TypeUI · Charm** — self-drawn product mockups for heroes and feature sections.
> Depends on: `colors.md`, `radius.md`, `typography.md`, `cards.md`, `SKILL.md` (mockup framing & spacing rules)

A Charm mockup is a **hand-drawn vector illustration of the product UI** — an SVG built from shapes and real microcopy that reads as a believable, live screen. It is **never a photograph, never a raster screenshot, never an embedded image**, and it **never carries a drop shadow**. Every hero or feature mockup follows the construction below so all mockups across the site read as one product.

---

## The frame — the translucent mat (mandatory)

Every mockup sits in the **two-layer frame** (see the framing rule in `SKILL.md`):

| Layer | Spec |
|---|---|
| **Outer mat** | Translucent warm field `rgba(68, 25, 6, 0.04)`; **1px `rgba(68, 25, 6, 0.05)` border** (near-invisible); **20px radius**; **8px padding** |
| **Inner surface** | The mockup itself; **12px radius**; **1px `rgba(68, 25, 6, 0.14)` warm hairline**; `overflow: hidden` so the artwork shares the corner; **no shadow — shadows on mockups are forbidden** |

Never frame a mockup with a single thick border, never drop it bare on the surface, and never add a drop shadow to either layer.

---

## The artwork — a realistic vector screen

Draw the screen as one SVG (a wide landscape viewBox, ~16:10) with **real, readable microcopy** — actual names, values, labels, and timestamps — not lorem bars alone. Placeholder bars are allowed only as secondary texture (e.g. inside a search field); anything the eye lands on first carries real text.

### Chrome anatomy

| Region | Spec |
|---|---|
| **Top bar** | White fill, hairline bottom border; the brand mark (rounded tile + wordmark) at the start; a pill search field with a magnifier glyph and real placeholder copy; a notification bell with a small red dot; a round avatar with initials at the end |
| **Sidebar** | White fill, hairline end border; a small uppercase workspace label; a stack of nav rows (small outline glyph + label); the **active row** on a soft brand-tint pill with brand text; one row may carry a small count badge; a user block (avatar + name + role) anchored at the bottom |
| **Page head** | A bold greeting-style title with a one-line muted subtitle, and a solid brand pill button at the end |

### Content regions

Compose the main area from **cards that follow the widget spec**: white fills, `#EBEBE7` hairlines, soft rounded corners (12–16px inside the mockup's own scale), no shadows. A believable mix is:

- **A KPI row** — value + label + a small tinted delta chip (green positive / red negative)
- **One large chart card** — a smooth two-series line/area chart with a legend, faint gridlines, axis labels (e.g. Mon–Sun), and one highlighted data point carrying a small ink tooltip chip with its value
- **One secondary visualization** — a donut with a center stat and dot legend, or a rounded-corner bar chart with one brand-colored emphasis bar
- **One list/table card** — rows of avatar chip + name + event copy + timestamp + a tinted status chip (e.g. Paid / New / Due), separated by faint rules, with a small brand "View all" link

### Palette & type

| Aspect | Value |
|---|---|
| Structure | White surfaces on the `#FBFAF9` screen ground; `#EBEBE7` hairlines; faint `#F5F4F1` gridlines and control fills |
| Text | Ink `#1C1917` for titles/values; muted `#79716B` body; faint `#A8A29E` meta — real strings at ~10–15px within the SVG scale, inheriting the UI font |
| Accents | `brand` for the active nav, primary series, buttons, and links; `brand-soft` / `brand-softer` for secondary series and tints; status tints only for real state (green paid, amber due, red alerts) |
| Numerals | Bold, tightly tracked for KPI values; tabular where they align |

---

## Prohibited

- **No photographs, raster screenshots, or embedded images** — the mockup is always drawn vector artwork.
- **No shadows on the mockup** — not on the mat, not on the inner surface, not on cards inside the artwork.
- **No lorem-only mockups** — the primary regions carry real, readable microcopy; bar-placeholders are secondary texture only.
- **No off-palette colors** — structure in the warm neutrals, accents from `colors.md`; never introduce foreign hues.
- **No bare or thick-framed mockups** — the two-layer translucent mat is the only mockup frame.
- **No clipped screens** — the framed mockup is fully visible within its section, never cropped by the viewport or section edge.

# Modal — TypeUI · Charm

> **TypeUI · Charm** — focused dialogs over a dimmed page.
> Depends on: `colors.md`, `radius.md`, `shadows.md`, `spacing.md`, `typography.md`, `buttons.md`, `input-field.md`

A modal interrupts the flow for a confirmation, a form, or critical information — used sparingly, since most tasks belong inline or in a drawer. The Charm panel is a clean `neutral-primary-soft` surface with the signature **soft-rounded** (`radius-xl`, 8px) corners — **flat** (`elevation-none`) with a **visible `default-medium` (`#D6D3D1`) border**, reading clearly as a lighter, bordered panel above a 50% scrim. Structure is consistent: a header with title + close divided by a hairline functional rule, a scrolling body, and a footer (same hairline divider) that holds one primary action beside a secondary.

---

## Anatomy

| Part | Role |
|---|---|
| **Backdrop** | Scrim over page |
| **Viewport** | Full-screen flex centering layer |
| **Panel** | Dialog surface |
| **Header** | Title + close control |
| **Body** | Scrollable content |
| **Footer** | Primary/secondary actions |
| **Trigger** | External control opening modal |

---

## Layout

| Property | Token / value |
|---|---|
| Backdrop | `rgba(0,0,0,0.5)` scrim or documented overlay token |
| Panel background | `neutral-primary-soft` (lighter panel over the scrim) |
| Panel border | **1px `default-medium` (`#D6D3D1`)** — a visible edge so the panel reads against the dimmed backdrop |
| Panel radius | `radius-xl` |
| Panel shadow | None (`elevation-none`) — the **border + scrim** provide separation |
| Panel padding | `spacing-4` mobile; `spacing-6` wide |
| Viewport padding | `spacing-4` around panel |
| Header padding bottom | `spacing-4`–`spacing-5` |
| Header border bottom | 1px `default` |
| Body vertical padding | `spacing-4`–`spacing-6` |
| Body gap between blocks | `spacing-4`–`spacing-6` |
| Footer padding top | `spacing-4`–`spacing-5` |
| Footer border top | 1px `default` |
| Footer button gap | `spacing-4` |
| Max height | Viewport minus margin; body scrolls |

### Close control

**24 × 24px max** — the close (×) button is capped at 24 × 24px in modals; icon 20px; hover `neutral-tertiary`; radius `radius-xl`; in the header's trailing corner, or absolute on compact dialogs.

### Title

font-size-lg, font-weight-medium, `heading`.

### Body text

font-size-sm, line-height-body, `body`.

---

## Sizes

| Size | Max width |
|---|---|
| Small | 448px (`spacing-112` scale ~28rem) |
| Default | 512px |
| Large | 896px |
| Extra large | 1280px |

Full width on mobile, minus the viewport padding.

---

## Placement

Default: centered both axes. Optional placements — top-left, top-center, top-right, center-*, bottom-* — anchor the panel to a viewport zone but keep the backdrop unless the dialog is headless.

---

## Variants

### Default

Header + body paragraphs + footer with a primary (`brand`) and secondary (`secondary` button) action.

### Static backdrop

An outside click does **not** close it — the user must choose an explicit action or the close control. For consent, destructive confirms, required surveys.

### Pop-up / confirm

A compact (small) panel with an optional centered 48px icon (`fg-disabled` or intent color), the question in `font-size-sm` `body`, and horizontally centered footer buttons — the destructive "yes" may take a **danger** fill. Close sits absolute top-trailing.

### Form

Header title; a body of stacked fields (`input-field.md`); footer submit primary + cancel secondary. Enter submits when valid.

### CRUD

Create/edit an entity — form layout plus a "Save" primary.

### With radio / option list

The body lists mutually exclusive choices before a confirm.

### With timeline / progress

The body embeds a timeline or progress component — scroll if long.

### Wallet / provider picker

A list of large clickable rows: padding `spacing-4`, `default-medium` border, **`radius-xl`**, hover `brand-softer` + `fg-brand`. Provider logos are isolated — their colors may be vendor-specific.

---

## Behavior

| Behavior | Spec |
|---|---|
| Open | Fade backdrop 300ms; panel scale/opacity optional |
| Close | Escape, close button, optional backdrop click |
| Focus | Trap inside panel while open; restore to trigger |
| Scroll | Body scrolls; page scroll locked behind backdrop |

Respect **reduced-motion**: instant show/hide.

---

## Accessibility

- Panel: `role="dialog"`, `aria-modal="true"`.
- Label: `aria-labelledby` → title id; `aria-describedby` → body if needed.
- Trigger: `aria-expanded`, `aria-controls`.
- Initial focus: first focusable or primary action — not forced onto the title if the form has an error.
- Destructive confirm: focus **cancel** or the neutral option by default.

---

## Prohibited

- **No panel border or shadow** — the panel is flat (`elevation-none`); it reads above the backdrop through the scrim and its lighter surface, never above `radius-xl`.
- **No nested modals** — close the parent first.
- **No modal for non-critical read-only content** — use a page or drawer.
- **No auto-open modals on page load** without a user gesture (cookie/legal once excepted).
- **No control that surpasses the modal** — every field, `select`, number input, button group, or card inside a modal fits within its width and never spills past the left/right edge or triggers a horizontal scrollbar. Give holding flex/grid cells and inputs `min-width: 0` (grid/flex items default to `min-width: auto` and would otherwise be forced to a control's intrinsic width); the modal body clips horizontal overflow. Same rule as drawers and sidebars — see `drawer.md`.
- **No more than two footer actions** in a default confirm — extra actions move into the body.
- **No heading scale above `font-size-lg`** in the title.
- **No raw hex** (except the documented backdrop alpha) and **no framework data attributes** — semantic tokens only.

# Motion — TypeUI · Charm

> The motion system for **TypeUI · Charm**. Charm moves like it looks: **calm, short, and colour-led**. Motion in Charm is almost always a *state change* — a fill deepening, a border lighting up, a chevron turning — never a performance. Nothing bounces, nothing scales, nothing slides across the screen to announce itself. Every value below is a literal duration or curve and the single source of truth; components reference these tokens, never ad-hoc `0.28s` or `cubic-bezier(...)` values.
> Depends on: `colors.md`, `shadows.md`

**Why this file exists:** every other foundation (`colors`, `spacing`, `radius`, `shadows`, `typography`) owns a token registry. Motion is the one dimension authors are most tempted to invent per-component — and an interface where one control eases in 180ms, its neighbour 250ms, and a third 300ms feels *subtly broken* even when every screenshot looks perfect. Pick from the scale below; never invent a duration.

---

## Duration tokens

| Token | Value | Use |
|---|---|---|
| `duration-instant` | `0ms` | Reduced-motion fallback; state changes that must not animate |
| `duration-fast` | `150ms` | **Colour-only state changes** — hover / focus / active fills, borders, text colour, the focus ring |
| `duration-base` | `200ms` | **The default.** Anything that *moves or reveals*: the primary button's gradient slide, a chevron rotating, a toggle thumb travelling, an accordion opening, a menu fading in |
| `duration-slow` | `300ms` | **Overlay entrances** — a modal/drawer backdrop fading, a drawer sliding in; also the hover-intent open delay on a hover-triggered menu |

**Nothing in Charm animates longer than `duration-slow`.** If a transition needs more than 300ms to read, the motion is wrong — not too fast.

---

## Easing tokens

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `ease` | **State changes that start and end in place** — hover fills, border and colour shifts, a gradient deepening. The element is not going anywhere; it is *becoming* something. |
| `ease-entrance` | `ease-out` | **Anything entering or leaving the screen** — menus, tooltips, modals, drawers, alerts. Fast at the start, settling at the end: the element arrives and comes to rest. |

Charm does **not** ship an `ease-in-out`, a spring, or a custom `cubic-bezier`. Two curves cover the system.

---

## Flat registry

```
duration-instant   0ms
duration-fast      150ms
duration-base      200ms
duration-slow      300ms

ease-standard      ease
ease-entrance      ease-out
```

---

## What animates — and what never does

| Element | Property | Token |
|---|---|---|
| Button (all variants) | background / gradient position, border-color, box-shadow | `duration-base` · `ease-standard` |
| Input, select, textarea | border-color, focus ring | `duration-fast` · `ease-standard` |
| Nav item, sidebar row, menu row | background, colour | `duration-fast` · `ease-standard` |
| Chevron / disclosure arrow | `transform: rotate` | `duration-base` · `ease-standard` |
| Toggle thumb | `transform: translateX` | `duration-base`; its track colour `duration-fast` |
| Accordion / collapsible | height or grid-template-rows | `duration-base` · `ease-standard` |
| Dropdown, tooltip, popover | opacity (+ optional slight scale) | `duration-base` · `ease-entrance` |
| Modal / drawer backdrop + panel | opacity, transform | `duration-slow` · `ease-entrance` |
| **Resting card / widget / section** | — | **Never. Cards are flat and static (`cards.md`).** |

---

## Reduced motion

**`prefers-reduced-motion: reduce` is honoured everywhere, and it is not optional.** Under reduced motion:

- **Movement is removed** — no transform, no slide, no scale, no rotate. A chevron simply *is* rotated; a drawer simply *is* open.
- **Colour changes may remain**, because a hover fill that snaps is not a motion hazard — but they resolve at `duration-instant` if the product prefers.
- **Never** substitute a "gentler" animation; remove it.

---

## Prohibited

- **No ad-hoc durations or curves.** `0.18s`, `0.25s`, `0.28s`, `250ms`, a hand-tuned `cubic-bezier` — all forbidden. If none of the four durations fits, the interaction is wrong; do not add a fifth value without adding a token here with documented intent.
- **No motion on resting surfaces.** Cards, widgets, and sections do not lift, glow, scale, tilt, or track the pointer on hover — see `cards.md`. Hover feedback belongs to the controls *inside* them.
- **No entrance animation on page or section load.** Content is present when the page paints; nothing fades up, staggers in, or reveals on scroll. Charm's motion is **reactive to the user**, never ambient.
- **No transform-based hover on buttons or links** — no `translateY(-1px)` lift, no `scale(1.02)`. The primary button's hover is a **colour deepening only** (`buttons.md`); a moving button is not Charm.
- **No layout-shifting animation.** Never animate `width`, `height`, `margin`, or `padding` on something that would reflow its siblings; animate `opacity`, `transform`, `background`, `border-color`, `box-shadow`, or a `grid-template-rows` collapse.
- **No looping / infinite animation** except a genuine loading spinner or skeleton shimmer.
- **No animation as the sole signal of a state change** — a state must also be readable when motion is off (colour, icon, text, `aria-*`).

# Number Input — TypeUI · Charm

> **TypeUI · Charm** — numeric entry: plain numbers, steppers, counters, currency, PIN, and slider pairs.
> Depends on: `input-field.md`, `range.md`, `colors.md`, `radius.md`, `shadows.md`, `spacing.md`, `typography.md`

A number input is the Charm **field shell** from `input-field.md` typed for numbers. When steppers or addons attach, they **fuse into one soft-rounded (`radius-md`, 8px) control** sharing a single `default`-bordered, flat (`elevation-none`) shell, with hairline `default-medium` dividers between segments. Per-cell patterns (PIN, card) repeat the same soft shell on each box. Whatever the composition, custom steppers never break keyboard entry — ↑/↓ always work.

---

## Anatomy

| Part | Role |
|---|---|
| **Label** | Standard field label |
| **Control** | `type="number"` or text with numeric pattern |
| **Stepper buttons** | Increment / decrement adjacent to field |
| **Prefix / suffix** | Currency symbol, unit label |
| **PIN cells** | Multiple single-digit boxes |
| **Linked range** | Horizontal slider below or beside field (`range.md`) |

---

## Core layout

| Property | Token / value |
|---|---|
| Field shell | Same as `input-field.md` |
| Steppers row | Horizontal flex; field flex-grow; buttons fixed width |
| Stepper button size | Match field block height — square or `spacing-10` min width |
| Stepper icon | 16 × 16px, `body` |
| Gap (field ↔ stepper) | `spacing-0` when fused; shared outer `radius-md` and the small `elevation-1` control shadow |
| Currency prefix | Input group addon — `neutral-tertiary`, `spacing-3` padding |

---

## Variants

### Default number input

Label + full-width number field; optional `min`, `max`, `step` leave styling unchanged.

### ZIP / postal code

A short max-width field (a layout constraint, not a token change) on the same shell.

### Control buttons

The field sandwiched between minus and plus buttons. The outer wrapper is a unified rounded shell with a `default` (`#E7E6E5`) border, flat; segments read apart by `default` dividers, and the stepper buttons sit on `neutral-quaternary`, hover `neutral-tertiary-medium`.

### Control buttons with icon

The same as control buttons, with icons replacing the "+" / "−" text.

### Counter input

A compact quantity stepper; tighter inline padding (`spacing-2`) is allowed, height aligned to the adjacent buttons.

### Currency input

A prefix addon carrying the currency symbol (`$`, `€`), fused to the field per the input-group rules in `input-field.md`.

### Credit card input

A single field or grouped segments in equal flex columns with a `spacing-2` gap; each segment uses the standard shell.

### PIN code input

A row of 4–6 single-character fields. Each cell: ~40px wide, centered, `font-size-lg`, `font-weight-medium`, **`radius-md`**, with the same border and focus ring as the field shell; `spacing-2` between cells.

### Currency converter

A dual currency-input pair (from / to), each with its own currency or crypto dropdown. Two currency-input rows side by side or stacked, `spacing-4` gap, with an optional swap icon button between them.

### Number input with slider

A field above or beside a `range.md` track; the current value may mirror into the field. Charm gap `spacing-4`.

### Min and max values

Behavioral only — optional helper text documents the limits (`font-size-sm`, `body-subtle`).

### Advanced control buttons

Stacked or grouped actions (reset, max) use `buttons.md` secondary/outline at `font-size-sm`; the field shell is unchanged.

---

## States

Disabled and validation inherit from `input-field.md`. Stepper buttons go `fg-disabled` with no hover when the value hits min/max. A custom stepper may hide the native spinner — but keyboard ↑/↓ must still work.

---

## Motion

Stepper press: optional ≤ 100ms background transition on the buttons. No field-shell animation.

---

## Accessibility

| Requirement | Implementation |
|---|---|
| Label | Required |
| Steppers | `aria-label` "Increase" / "Decrease"; not icon-only |
| PIN | One group label + an `aria-label` per cell, or a single hidden-input pattern |
| Live value | `aria-valuenow` when paired with a slider |
| Errors | `aria-invalid` + a described error message |

---

## Prohibited

- **No spinner-only interaction** when custom steppers are shown — keyboard access is required.
- **No PIN/card cells without a group label**.
- **No currency symbol inside the placeholder** when a prefix addon is used.
- **No off-shell colors on steppers** — neutral surfaces only, unless a `buttons.md` primary is used for a separate action.
- **No corners other than `radius-md`** (8px) on the field, fused group, or cells (shared inner edges stay square).

# Pagination — TypeUI · Charm

> **TypeUI · Charm** — moving through paged content and table results.
> Depends on: `colors.md`, `radius.md`, `shadows.md`, `spacing.md`, `typography.md`, `buttons.md`, `dropdowns.md`, `input-field.md`

Pagination walks users through ordered pages — archives, search results, table data. Its default form is a **fused group** built like `button-group.md`: cells share borders, the whole row takes **`radius-md` (8px)** on its outer corners only, and the current page is marked by `fg-brand` text on a `neutral-tertiary-medium` cell — never a heavy brand bar. Hide it entirely when there's a single page.

---

## Anatomy

| Part | Role |
|---|---|
| **Root** | Navigation landmark |
| **List** | Fused or spaced page controls |
| **Previous** | Link/button to prior page |
| **Next** | Link/button to following page |
| **Page number** | Numeric page trigger |
| **Ellipsis** | Gap indicator for truncated ranges |
| **Summary text** | "Showing X–Y of Z" (table variant) |
| **Auxiliary** | Dropdown page size, jump-to input |

---

## Sizes

| Size | Page cell | Prev/next height | Font |
|---|---|---|---|
| Small | 36 × 36px | 36px min height | font-size-sm |
| Large | 40 × 40px | 40px min height | font-size-sm |

Prev/next with text: horizontal padding `spacing-3` (small) or `spacing-4` (large).

---

## Default fused group

An inline-flex list with merged borders, exactly like `button-group.md`:

| Property | Token / value |
|---|---|
| Segment border | 1px `default-medium` |
| Segment background | `neutral-secondary-medium` |
| Segment hover | `neutral-tertiary-medium` + `heading` text |
| Active page | `neutral-tertiary-medium` background + `fg-brand` text |
| Outer radius | `radius-md` (8px) on first/last segment outer corners |
| Overlap | 1px negative margin between segments |
| Shadow | `elevation-none` (optional `elevation-none` on a standalone prev/next pair) |

Current page carries `aria-current="page"`.

---

## Variants

### Default numbered

Previous | 1 | 2 | 3 | … | Next — show up to ~5 contiguous numbers, with an ellipsis for gaps.

### With icon prev/next

A 16px chevron replaces the "Previous"/"Next" text, with **`sr-only`** text for screen readers and RTL-mirrored chevrons.

### Previous and next only

Two separate buttons with a `spacing-2` gap and no numbers — secondary button tokens plus `elevation-none`.

### Previous/next with icons + text

Secondary buttons with leading/trailing 16px icons per `buttons.md`.

### Table data footer

A horizontal flex: summary text at the inline start ("Showing **1–10** of **1000**"), pagination at the inline end. The summary is `font-size-sm`, `body`; emphasized numbers are `font-weight-semibold`, `heading`.

### Table pagination with icons

The table footer with a fused icon pagination control.

### With dropdown (page size)

A "Rows per page" dropdown (`dropdowns.md`) beside the pagination — options 10, 25, 50, 100.

### With input (jump to page)

A compact numeric input (`input-field.md`) plus a "Go" button (`buttons.md` small secondary).

### Input field and button

A single row: page-number field + submit.

### Select + prev/next

A select for the page index between previous/next buttons.

### Single pagination

One page indicator when only a single page exists — disable prev/next.

---

## States

| State | Visual |
|---|---|
| Default link | `body` on `neutral-secondary-medium` |
| Hover | `heading` on `neutral-tertiary-medium` |
| Active page | `fg-brand` on `neutral-tertiary-medium` |
| Disabled prev/next | `fg-disabled`; no hover; first/last page edge |

---

## Accessibility

- Root: `<nav aria-label="Pagination">` (localized).
- Current page: `aria-current="page"`.
- Disabled controls: `aria-disabled="true"` or omit the href.
- Icon-only prev/next: visible text in an `sr-only` span.
- Table summary: associate with the table via `aria-describedby` when helpful.

---

## Prohibited

- **No primary brand fill on every page cell** — only the active page may use brand **text**, never a brand background bar.
- **No pagination for a single page** — hide the component entirely.
- **No duplicate active-page indicators**.
- **No more than 7 numbered cells** without an ellipsis.
- **No opening page numbers in a new tab** — pagination is same-view navigation.
- **No raw color/spacing values**, and no framework names — foundation tokens only.

# Background Patterns — TypeUI · Charm

> **TypeUI · Charm** — decorative background patterns for the hero band.
> Depends on: `colors.md`, `SKILL.md` (hero pattern & band rules), `mockups.md`

Charm's one sanctioned decoration is a **barely visible line pattern behind the hero**. It is always a full-bleed layer laid **absolutely over the whole hero region — behind the navbar, headings, CTAs, and mockup** (content sits above it; the navbar stays transparent so the pattern shows through), and it **fades to transparent toward the band's bottom edge** so it dissolves before the first content section. Patterns never appear outside the hero band, and page surfaces everywhere else stay flat and matte.

---

## The color rule (mandatory)

**Every pattern stroke is `#E1E2D5` — always.** Soft against the `#F1F2EA` band: visible, but never hard. Never recolor pattern strokes toward gray or the brand, never raise them to full-strength ink lines, and never fill pattern shapes — patterns are stroked line work only (the small node dots in variant 3 are the one filled exception, also `#E1E2D5`).

Depth inside a pattern comes from **varied per-element stroke opacities** — a quiet base of `0.2` with sparkles of `0.4`, `0.6`, `0.8`, and occasional `1.0` — so the field shimmers instead of reading as a flat printed grid.

---

## The five variants

Exactly one variant per page. Variant 2 is the current hero pattern; the others are equal citizens when a different texture is wanted.

### 1 · Honeycomb lattice

A dense pointy-top hexagon grid: **52px-wide hexagon outlines** (~61px tall), rows stepping every **~46px** with alternate rows offset by 26px, covering the full hero. Per-cell opacities follow the shimmer distribution above.

### 2 · Contour ribbons (currently in use)

A sweeping band of **~30 parallel flowing curves** that undulate diagonally across the hero like topographic flow-lines: smooth S-curves sharing one direction of travel, spaced ~10px apart so they read as a single woven ribbon crossing the band, 1px strokes with miter joins. The whole ribbon sits at a low uniform opacity (~0.5) rather than per-line variance. This is the pattern shipped as the hero asset today.

### 3 · Hex constellation

A sparse field of **large hexagons (~84px wide, ~98px tall)** scattered as an open constellation, not a filled grid: most cells drawn as solid 1px outlines at full pattern color, a scattering of accent cells drawn **dashed (2 2 dash) at 0.6 opacity**, and **5px filled node dots** placed on a minority of the vertices. Reads as a technical molecule diagram rather than a mesh.

### 4 · Wave field

Stacked **horizontal wavy hairlines** spanning the full hero width: one smooth multi-crest wave repeated on a regular vertical rhythm (~30px between lines), round line caps, all lines the same weight and a single soft opacity. Denser toward the bottom of the band is acceptable; crests align vertically so the field reads calm, not chaotic.

### 5 · Diamond grid

The fine crossing-diagonal field (as used on the CTA card's decorative half): two sets of **45° hairlines crossing every ~24px**, forming a light diamond lattice, uniform 1px strokes at a soft opacity. The quietest of the five — use it when the hero content is dense.

---

## Placement & behavior (all variants)

| Aspect | Rule |
| --- | --- |
| Scope | The hero band only — never sections, footers, cards, or the dashboard |
| Position | Absolute, full width and full height of the hero region, `z` behind all hero content (navbar included) |
| Interaction | Non-interactive (`pointer-events: none`), decorative (`aria-hidden`) |
| Fade | Masked to fade to transparent toward the band's bottom edge — the pattern dissolves before the first section |
| Asset | Ship as a real SVG asset (or equivalent), scaled to cover — never a raster image |
| Motion | None — patterns are fully static |

---

## Prohibited

- **No stroke color other than `#E1E2D5`** — no grays, no brand tints, no white.
- **No full-strength line work** — if the pattern reads at a glance before the content does, it is too strong.
- **No filled pattern shapes** (variant 3's small node dots excepted).
- **No mixing variants** on one page, and no patterns outside the hero band.
- **No animated patterns** — static always.
- **No raster or photographic textures** — patterns are drawn vector line work only.

# Phone Input — TypeUI · Charm

> **TypeUI · Charm** — telephone entry: country code, verification codes, and auth flows.
> Depends on: `input-field.md`, `select.md`, `colors.md`, `radius.md`, `shadows.md`, `spacing.md`, `typography.md`

A phone input is the Charm **field shell** typed for `tel`. When a country selector is attached, the selector and number field **fuse into one soft-rounded (`radius-md`, 8px) control** — one shared `default`-bordered, flat (`elevation-none`) shell, square inner edge — exactly like an input group. Verification (OTP) reuses the per-cell box pattern from `number-input.md`. Country flags always carry a text alternative, and OTP digits always use visible per-cell inputs.

---

## Anatomy

| Part | Role |
|---|---|
| **Label** | Field or group label |
| **Country selector** | Dropdown or `<select>` for dial code |
| **Number control** | `type="tel"` text field |
| **Verification cells** | OTP / SMS code digit boxes |
| **Helper text** | Format hint or carrier note |

---

## Core layout

| Property | Token / value |
|---|---|
| Simple tel field | Full `input-field.md` shell |
| Country + number row | Horizontal flex; full width |
| Country segment width | Auto — fits flag + code; min ~100px |
| Gap (country ↔ number) | Fused group — no gap; shared `radius-md`, and the small `elevation-1` control shadow |
| Country select shell | Same border/background as field; trailing chevron 16px |
| Number field | Flex-grow; flushes on shared inner edge |

---

## Variants

### Default phone input

A single full-width tel input; the placeholder shows the expected format, with an optional `pattern` for a validation hint.

### Phone input with country code

A leading country `<select>` or custom dropdown (`select.md` / `dropdowns.md`) fused to the tel field. The country block shows an optional 16 × 16px flag and the dial code in `font-size-sm` `heading`.

### Floating label input

The label animates from the placeholder position to the top on focus/fill (`font-size-sm`, `body` when floating); the field shell is unchanged. Transition ≤ 200ms.

### Verification code input

A row of 4–6 single-digit fields (the PIN pattern from `number-input.md`): ~40px wide, centered, `spacing-2` gap, **`radius-md`**, 4px `brand-medium` focus ring.

### Phone number select

The country is chosen from a select above or beside the number field; when not fused, stack them with `spacing-2` between.

### Authentication form

A composite: the phone field plus a "Send code" primary button (`buttons.md`), with `spacing-4` between the field group and the button.

### Advanced phone verification

A two-step layout — phone entry, then an OTP block revealed after submit (section gap `spacing-6`). Success/error messaging follows `input-field.md` validation.

---

## States

Focus, disabled, and validation inherit from `input-field.md`. The country selector's disabled state matches the select disabled treatment (`fg-disabled`, muted border).

---

## Motion

Floating label ≤ 200ms ease on transform/size. OTP auto-advance is behavioral — no decorative animation.

---

## Accessibility

| Requirement | Implementation |
|---|---|
| Label | "Phone number" or a grouped legend |
| Country | Selector has an accessible name ("Country code") |
| Autocomplete | `autocomplete="tel"` / `tel-country-code` as appropriate |
| OTP | `inputmode="numeric"`, group label "Verification code" |
| Error | Describe the format failure in text — not color alone |

---

## Prohibited

- **No country flags without a text alternative** — include the country name in the option.
- **No fused group with mismatched heights** — align block padding across segments so the rounded shell reads as one control.
- **No OTP collapsed into one invisible field** — use visible per-cell inputs unless following a proven accessible pattern.

# Radio — TypeUI · Charm

> **TypeUI · Charm** — single-select options.
> Depends on: `colors.md`, `radius.md`, `shadows.md`, `spacing.md`, `typography.md`, `dropdowns.md`

A radio lets users choose exactly one option from a set. The control is a naturally round (`radius-full`) 16px circle that shows a `brand` inner dot when selected — one of Charm's inherently circular controls. As with checkboxes, the panel **soft-rounded** (`radius-md`, 8px) lives on the bordered cards and list groups radios sit in, never on the control itself. Every radio in a set shares one `name`, and only one is ever selected.

---

## Anatomy

| Part | Role |
|---|---|
| **Control** | `<input type="radio">` |
| **Label** | Primary text beside control |
| **Description** | Secondary line in helper, bordered, or advanced layouts |
| **Icon (advanced)** | Optional leading glyph |
| **Link** | Optional anchor inside label |
| **Group container** | Fieldset, list, or dropdown menu |

---

## Control (default)

| Property | Token / value |
|---|---|
| Size | 16 × 16px outer circle |
| Background (unchecked) | `neutral-tertiary` (`#F5F4F1`, contrasting) |
| Border | `default` (`#E7E6E5`), 1px (unchecked); `brand` when selected |
| Radius | `radius-full` |
| Inner dot (checked) | 8 × 8px circle, `brand` fill, centered |
| Focus ring | 2px `brand-soft` spread |
| Row gap (control → label) | `spacing-2` |

All radios sharing a `name` form one mutually exclusive set.

---

## Label typography

| Element | Size | Weight | Color |
|---|---|---|---|
| Label | `font-size-sm` | `font-weight-medium` | `heading` |
| Description | `font-size-sm` | normal | `body-subtle` |
| Link in label | `font-size-sm` | medium | `fg-brand` |

---

## Variants

### Radio example (default)

A vertical stack, `spacing-4` between options.

### Disabled state

Muted control and label with the `disabled` attribute; a selected-disabled radio keeps its dot at lower contrast.

### Radio link

An inline link in the label — same behavior as the checkbox link.

### Helper text

A secondary `body-subtle` line under the primary label, within the row.

### Bordered

A row card: padding `spacing-4`, **`radius-md`**, a raised `neutral-primary` (`#FFFFFF`) panel with a `default` (`#E7E6E5`) border. Selected is marked by a `brand` border.

### Radio list group

A vertical grouped list on a raised `neutral-primary` (`#FFFFFF`) panel with a `default` (`#E7E6E5`) border around the group (soft-rounded **`radius-md`** (8px) corners) and hairline `default` row dividers. The section heading above sits at `font-size-base`, `font-weight-semibold`, `heading`, `spacing-3` below.

### Horizontal list group

Options in a flex row, `spacing-4` gap, under the same fieldset legend.

### Radio in dropdown

A menu row: radio at the inline start, then label + optional helper, at `dropdowns.md` spacing — one selected per group inside the menu.

### Inline layout

A horizontal row of radios for short option sets (2–4 items).

### Advanced layout

A full-width selectable card where the circle recedes — the radio is visually hidden or minimal and the whole card shows selection through border and fill.

| State | Border | Background |
|---|---|---|
| Default | `default-medium` | `neutral-secondary-medium` |
| Hover | `default-strong` | `neutral-tertiary-medium` |
| Selected | `brand-subtle` | `brand-softer` |

Padding `spacing-4`; title `font-weight-medium`; description `body-subtle`.

### Advanced layout with icons

A 24 × 24px icon at the inline start of the card content; the radio control sits top-aligned or at the inline end.

### Color swatch

A product color picker built from radios: each option is a **28 × 28px `radius-full` circle** (`appearance: none`) filled with the actual product color, under a **1px `default-medium` border**; swatches sit in an **8px-gap** row. The **checked** state draws a ring with stacked shadows — a 2px ring in the card/surface fill, then a 2px `brand` ring outside it — so the selection reads without moving the layout. This is one of the functionally-round exceptions to the 4px radius rule. Group swatches in a `radiogroup` with an accessible name; each swatch carries an `aria-label` naming its color.

---

## States

| State | Visual |
|---|---|
| Unchecked | Empty circle |
| Checked | Inner dot `brand` |
| Focus | Ring on circle |
| Disabled | Muted |
| Error | Group message `fg-danger-strong` below the set |

---

## Motion

Selection change is instant or a ≤ 100ms dot appearance. No slide between options.

---

## Accessibility

| Requirement | Implementation |
|---|---|
| Grouping | `<fieldset>` + `<legend>` describing the set |
| Name | Shared `name` on all radios in the set |
| Label | Each radio has a `<label for>` |
| Focus | Arrow keys move within the group (native behavior) |
| Hidden radio in card | The card stays focusable; `aria-checked` on the label wrapper when the radio is visually hidden |
| Error | `aria-invalid` on the fieldset when validation fails |

---

## Prohibited

- **No square radio controls** — the control is always `radius-full`. (The rounded shell belongs to the surrounding card/list group.)
- **No multiple selected radios in one `name` group**.
- **No checkbox styling for single-select** — use the radio pattern.
- **No group without a legend or `aria-labelledby`**.
- **No 16px hit area without a label click target** — the label must toggle selection.

# Border Radius Tokens — TypeUI · Charm

> Corner-radius tokens for the **TypeUI “Charm”** design system. Charm is a soft-rounded, technical theme: **one soft 8px corner (`radius-md`) on controls and panels alike** — buttons, inputs, search, badges, cards, and modals all share it, never a generous curve (and never sharp 0px controls). Every value below is a literal size — tokens are the source of truth; components reference tokens, never ad-hoc px or rem.

Depends on: none (pairs with `colors.md` for nested-radius math on filled surfaces).

**Root assumption:** `1rem = 16px` unless the product documents a different root.

---

## Charm radius convention (read first)

This is the rule that defines the Charm look. Do not deviate without a documented exception.

| Rule | Token | Value | Applies to |
|---|---|---|---|
| **Controls = 8px** | `radius-md` | 8px | Buttons, badges, chips, tags, tabs, alerts, tooltips, and single-line field shells |
| **Soft-rounded panels = 24px** | `radius-xl` | 24px | Cards, widgets, modals, drawers (free edges), accordions, tabs panels, tables — with dropdown & menu panels and popovers at `radius-lg` (12px) |
| **Textarea (multi-line) = 24px** | `radius-xl` | 24px | The multi-line `textarea` — the panel corner, never a pill |
| **Functionally round controls** | `radius-full` | 9999px | The toggle track, avatars, radio control, range thumb & track, status dots, spinners |
| **Checkbox box** | `radius-xs` | 4px | The 16px tick box — soft-rounded, **never fully round** (round is for radios) |
| **Nested child inside a panel** | `radius-xs` | 4px | Inset cells inside a padded rounded parent (see Nested radius) — **not** menu/nav rows, which take `radius-md` |
| **Menu / nav row inside a menu panel** | `radius-md` | 8px | Dropdown menu items, nav rows, select options — the soft control corner (see the menu-row rule) |
| **Flush data** | `radius-none` | 0 | Table cells, flush list rows, dividers |

Buttons, inputs, and alerts are **fully-round pills** (`radius-full`, 9999px); cards, widgets, modals, and tables take the **24px** (`radius-xl`) panel corner, with menus at **12px** (`radius-lg`). The two exceptions: **textarea takes the 24px panel corner** (never a pill) and the **checkbox tick box stays 4px** (`radius-xs`). This pill-control + soft-panel geometry is the Charm silhouette.

**Edge-anchored exception:** panels that sit flush against a viewport edge — drawers, full-bleed bottom sheets — keep **square** corners on the flush edges. Only their free, inward-facing corners take the panel `radius-xl` (16px).

---

## Token naming

| Pattern | Role |
|---|---|
| `radius-base` | Single base unit all steps derive from |
| `radius-{step}` | Named step on the scale (`none` → `full`) |

Steps are **multipliers of `radius-base`**, not independent picks.

---

## Base unit

| Token | rem | px |
|---|---|---|
| radius-base | 0.125rem | 2px |

---

## Radius scale

| Token | Multiplier | rem | px | Typical use |
|---|---|---|---|---|
| radius-none | 0 | 0 | 0 | Square corners — flush table cells, joined shared edges, flush dividers |
| radius-xs | 2× | 0.25rem | 4px | Hairline inset frames, checkboxes, nested children inside a padded panel |
| radius-sm | 3× | 0.375rem | 6px | Small inner controls, compact chips |
| radius-md | 4× | 0.5rem | 8px | Badges, tabs, tooltips, and other small chrome (buttons/inputs/alerts are `radius-full` pills) |
| radius-lg | 6× | 0.75rem | 12px | Menus, popovers, small panels |
| radius-xl | 12× | 1.5rem | 24px | **Charm panel default** — cards, widgets, modals, tables, drawers |
| radius-xxl | 10× | 1.25rem | 20px | Large feature panels, media frames (opt-in above the 16px default) |
| radius-xxxl | 12× | 1.5rem | 24px | Oversized hero cards / large feature panels (opt-in) |
| radius-full | 9999× | — | 9999px | Functionally round controls (toggle, avatar, radio, range, status dots, spinners) |

Controls and panels take the slight 8px (`radius-md`); only naturally round controls use `radius-full`; `radius-none` is reserved for flush edges (table cells, joined seams, viewport-flush drawer edges).

---

## Flat registry

```
radius-base    0.125rem   (2px)
radius-none    0
radius-xs      0.25rem    (4px)
radius-sm      0.375rem   (6px)
radius-md      0.5rem     (8px)
radius-lg      0.75rem    (12px)
radius-xl      1.5rem     (24px)
radius-xxl     1.25rem    (20px)
radius-xxxl    1.5rem     (24px)
radius-full    9999px
```

---

## Nested radius

When a rounded parent wraps a rounded child with padding between them:

```
innerRadius = outerRadius − padding
```

Use the **px** values from the scale above. With a 12px menu panel and `spacing-2` (8px) padding, a purely *inset cell* rounds to `radius-xs` (4px) so its inner corner stays concentric.

**Menu and nav rows are the documented exception — they take `radius-md` (8px), never `radius-xs`.** A hoverable row is a *control*, not an inset cell, so it wears the same soft 8px corner as every other Charm control. Applying the raw concentric result (4px) to a menu row makes it read as a **near-square, sharp-cornered strip** inside a soft 12px panel — it fights the soft-rounded silhouette that defines Charm. Concentric math governs decorative inset frames; the **control radius governs anything the user can hover, focus, or click**. This holds for dropdown menu items, account/nav menu rows, select options, and filter rows.

---

## Usage by surface type

| Surface | Token | px |
|---|---|---|
| **Buttons, inputs, selects, alerts** — always pills | `radius-full` | 9999px |
| **Badges, chips, tabs** | `radius-md` | 8px |
| **Panels** — cards, widgets, modals, drawers (free edges), accordions, tabs panels, tables | `radius-xl` | 24px |
| **Menus & popovers** — dropdown panels, popovers | `radius-lg` | 12px |
| **Textarea (multi-line)** — the panel corner, never a pill | `radius-xl` | 24px |
| **Functionally round controls** — toggle track, avatars, status dots, radio, range, spinners | `radius-full` | 9999px |
| Checkbox tick box | `radius-xs` | 4px |
| Inset cells inside a padded rounded panel (decorative frames) | `radius-xs` | 4px |
| Menu / nav rows inside a menu panel (hoverable controls) | `radius-md` | 8px |
| Oversized hero / feature panels (opt-in) | `radius-xxxl` | 24px |
| Flush lists, table cells, dividers | `radius-none` | 0 |

---

## Prohibited

- **No raw px/rem in components** — use a `radius-*` token.
- **No pill buttons or badges** — they take `radius-md` (8px), never `radius-full`; pill-shaped buttons are a different theme, not Charm.
- **No heavily-rounded panels** — cards, modals, and menus take `radius-md` (8px); do not ship 16px/24px panel corners.
- **No `radius-full` on content panels or controls** — full rounding is for naturally round controls only (toggle, avatar, radio, range, dots, spinner), never cards, buttons, inputs, or page panels.
- **No off-scale values** (e.g. 18px, 24px) — add a token to this file if the scale is insufficient.
- **No copying the parent radius onto nested children** without subtracting padding (see nested radius) — items inside a 4px panel use `radius-xs`.
- **No mixing step names from foreign systems** — if a token exists here, use its name.
- **No round checkboxes** — the tick box is `radius-md` (8px), soft-rounded. Never `radius-full` on a checkbox control; full rounding is for radios.

# Range — TypeUI · Charm

> **TypeUI · Charm** — horizontal slider input.
> Depends on: `colors.md`, `radius.md`, `spacing.md`, `typography.md`

The range is one of Charm's naturally round controls: a fully pill (`radius-full`) `neutral-quaternary` track carrying a circular `brand` thumb, with the same **`brand-medium` focus ring** the rest of the system uses. It stays calm and monochrome — neutral track, brand thumb and fill — and horizontal only. The thumb always shows a visible focus indicator; the track never goes rainbow.

---

## Anatomy

| Part | Role |
|---|---|
| **Label** | Field name above slider |
| **Track** | Full-width horizontal bar |
| **Fill (optional)** | Portion from min to thumb — product styling |
| **Thumb** | Draggable handle |
| **Tick labels** | Optional values below track |

---

## Track (default)

| Property | Token / value |
|---|---|
| Width | 100% of parent |
| Height | 8px |
| Background | `neutral-quaternary` |
| Radius | `radius-full` |
| Appearance | Native browser chrome reset — custom track fills height |
| Cursor | Pointer on track and thumb |

---

## Thumb

| Property | Token / value |
|---|---|
| Size | ~16 × 16px circle (browser-dependent — target this) |
| Background | `brand` |
| Border | 2px `white` or `buffer` optional for contrast |
| Radius | `radius-full` |
| Focus ring | 4px `brand-medium` when input focused |

The filled portion left of the thumb (where supported): `brand` at track height, `radius-full`.

---

## Label typography

| Element | Size | Weight | Color | Spacing |
|---|---|---|---|---|
| Label | `font-size-sm` | `font-weight-medium` | `heading` | `spacing-2-5` below label |

---

## Variants

### Range slider example (default)

`min="1"` `max="100"` `value="50"` — label optional.

### Disabled state

Track `neutral-quaternary` at reduced opacity; thumb muted; `fg-disabled` label; no interaction.

### Min and max

Behavioral attributes only — the label may restate the bounds in helper text.

### Steps

The `step` attribute controls the increment and the thumb snaps per step — no extra visual ticks unless the labels variant adds them.

### Sizes

| Size | Track height | Notes |
|---|---|---|
| Small | 4px | Class equivalent `range-sm` |
| Default | 8px | — |
| Large | 12px | Class equivalent `range-lg` |

The thumb scales proportionally (~14px / 16px / 20px).

### Labels

A relative container with the track and absolutely positioned labels below:

| Property | Token / value |
|---|---|
| Label row offset | `spacing-6` below track center |
| Label text | `font-size-sm`, `body` |
| Positions | Inline start, thirds, inline end mapped to min/mid/max values |
| Transform | Center-align middle labels with translate on the inline axis |

Example milestones: "Min ($100)", "$500", "$1000", "Max ($1500)".

---

## States

| State | Visual |
|---|---|
| Default | Track quaternary, thumb brand |
| Hover | Optional thumb scale ≤ 105% — subtle |
| Focus | 4px `brand-medium` ring on input |
| Disabled | Muted track and thumb |
| Active drag | Thumb stays brand; no shadow elevation needed |

Pairing with a number field: see `number-input.md` — value sync is behavioral.

---

## Motion

The thumb tracks the pointer with no intentional lag; the focus ring is instant; an optional hover scale runs ≤ 100ms. Under `prefers-reduced-motion`, disable the hover scale only.

---

## Accessibility

| Requirement | Implementation |
|---|---|
| Label | `<label for>` or `aria-label` |
| Value | `aria-valuemin`, `aria-valuemax`, `aria-valuenow` when not native |
| Keyboard | Arrow keys adjust the value |
| Output | Optional live `output` element linked via `for` / `aria-labelledby` |
| Labels variant | Text labels supplement — never the sole value indicator |

---

## Prohibited

- **No vertical range in this spec** — horizontal only unless a layout spec adds the variant.
- **No track height below 4px** — it fails touch usability.
- **No thumb without a visible focus indicator**.
- **No rainbow track fills** — neutral track, brand thumb/fill only, unless an intent variant is documented.
- **No milestone labels without corresponding logical values**.

# Responsive Rules — TypeUI · Charm

> How every Charm surface adapts across viewports. These rules are **stack-agnostic** — they name behaviors and breakpoints, not framework utilities — and they are **binding**: a layout that horizontally scrolls at any viewport width is broken, full stop. Depends on: `SKILL.md`, `spacing.md`, `buttons.md`, `tables.md`, `dropdowns.md`.

---

## Breakpoints

One canonical set. Do not invent per-component breakpoints when one of these fits.

| Name | Width | What changes at or below it |
|---|---|---|
| `xl` | 1280px | The 1280px content container meets the viewport edges; its side padding is all that remains |
| `lg` | 1024px | App sidebar goes off-canvas; two-pane layouts (filters + grid, split heroes, two-column sections) stack; 3/4-column grids drop to 2 |
| `md` | 900px | Marketing/store navbar link rows collapse; app top bar wraps (see below); footer grids drop to 2 columns |
| `sm` | 768px | Container side padding steps down 48px → 24px; toolbars stack; feature/stat rows go single column |
| `xs` | 640px | All remaining multi-column grids go single column; joined search drops its category segment; inline input+button pairs stack |

---

## The no-horizontal-scroll law

- **The page never scrolls horizontally, at any width.** Test at 360, 768, 1024, and 1440px: the body must show no horizontal scrollbar and no content may push past the viewport edge.
- **Wide content scrolls inside its own container, never the page.** A data table scrolls within its card (`overflow-x: auto` on the wrapper, with the columns keeping their order); code blocks and wide media scroll inside their own box. Nothing else earns a horizontal scrollbar.
- **Fixed-width elements must be bounded.** Anything with an intrinsic width (dropdown panels, phone mockups, images, badges) is clamped to the viewport (`max-width`, or the dropdown's viewport-edge clamp from `dropdowns.md`) so it can never overflow.
- When a row runs out of room, the fix is **wrap, stack, or relocate — never shrink a control below its spec, never hide a button label, and never let the row overflow** (see `buttons.md`).

---

## Application shell

- **Sidebar:** fixed and visible at `lg` and up; **off-canvas below `lg`**, opened by a hamburger in the top bar (hamburger hidden at `lg`+), over a scrim, sliding from the start edge.
- **Top bar wraps — it never overflows.** The app top bar is a wrapping row: at `md` and below, the **search field drops onto its own full-width row** beneath the actions (order changes, `flex-basis: 100%`), the action cluster keeps its 16px labeled / 4px icon-cluster gaps, and every button keeps its visible label. The bar's horizontal padding steps 24px → 16px at `sm`.
- **Page head** (greeting + primary action) wraps rather than clipping.
- **Widget grids:** KPI rows go 4 → 2 (≈1100px) → 1 (`xs`); chart pair rows stack below ≈1100px. Chart canvases stay their fixed spec height and let the chart library resize horizontally.
- **Tables:** the card never widens the page — the table scrolls inside `overflow-x: auto`, toolbar stacks at `sm` (search full-width row, buttons in a paired grid), and the quick-filter strip wraps.
- **App body padding:** 24px, stepping to 16px at `sm`.

---

## Marketing / storefront

- **Container side padding:** 48px (`spacing-12`) at `sm` and up; **24px below `sm`**. The section rhythm is **112px top and bottom, stepping down to 64px at `sm` (768px) and below** — equally on every section (see `SKILL.md`); the **section header → content gap steps 64px → 48px** at the same breakpoint.
- **Navbars:** the inner content keeps the section width; link rows hide below `md` behind a menu pattern; the store's search and category rows collapse into the mobile pattern from `SKILL.md`.
- **Heroes:** split heroes stack (copy first, media second); the hero H1 may scale down on narrow viewports but never below readable display size; store's joined search keeps input + button only at `xs` (category trigger hidden, input takes the start rounding).
- **Section grids:** feature/testimonial/pricing/product grids collapse 4 → 2 → 1 and 3 → 2 → 1 down the breakpoints, preserving reading order; two-column splits (social proof, CTA, proof quads) stack with their divider removed.
- **Section head with a trailing action:** when a section title carries a small action button at the inline end (e.g. "see more"), the inline button shows **only from `md` (900px) up**; below `lg` (1024px) a **full-width copy of the same button renders after the section's grid** instead (only one of the two is ever visible), so small screens keep the action without crowding the title row.
- **Link directories collapse to an accordion on phones:** a multi-column link directory (e.g. a top-categories section) keeps its open columns down to `sm` (768px); below it, each column becomes an **accordion row** — the column heading turns into a full-width trigger (44px+ touch row, trailing rotating chevron, hairline dividers between groups) with its links hidden until expanded, **one group open at a time** — so phones see a short list of tappable headings instead of a wall of links.
- **Footers:** link grids 4 → 2 (`md`) → wrap; newsletter label/form and bottom-bar clusters stack centered; the input + button pair stacks below `xs` with both keeping full spec height.

---

## Controls & overlays

- **Touch targets:** ≥ 44×44px effective at touch sizes, ≥ 8px between adjacent targets.
- **Buttons:** labels never hide, buttons never shrink or wrap their text (`buttons.md`); rows of buttons wrap or stack as whole units.
- **Inputs + buttons in a row:** equal heights always; below the group's minimum width they stack vertically at full width.
- **Radio option rows collapse to a select on phones:** a horizontal single-select radio cluster (e.g. a toolbar's order-by row) is replaced below `xs` (640px) by a **native select carrying the exact same options** and the cluster's accessible name — one visible control at a time, never both. Checkbox clusters keep their rows (multi-select does not map to a single select).
- **Dropdowns:** panels clamp to the viewport with an 8px margin and flip when they run out of room (`dropdowns.md`); they may grow toward the available width on narrow screens but never past it.
- **Modals:** full-width minus 16px viewport padding on small screens; internal two-column bodies stack below ≈560px; body scrolls, never the page.
- **Images & media:** `max-width: 100%`, intrinsic ratios preserved; mockups scale with their column.

---

## Prohibited

- **No page-level horizontal scroll** at any viewport — ever. If it appears, a fixed-width element or non-wrapping row is the bug; fix the element, do not clip the page.
- **No hiding button labels or dropping controls** to make a row fit — restructure the row instead.
- **No per-component breakpoint inventions** when a canonical breakpoint fits.
- **No shrinking type below spec** to fit — reading text keeps its 16px floor, controls keep their sizes; the layout adapts, not the type.
- **No desktop-only testing.** Every surface ships verified at 360, 768, 1024, and 1440px.

# Select — TypeUI · Charm

> **TypeUI · Charm** — single- and multi-option pickers.
> Depends on: `input-field.md`, `dropdowns.md`, `colors.md`, `radius.md`, `shadows.md`, `spacing.md`, `typography.md`

A select wears the Charm **field shell** from `input-field.md` — crisp soft-rounded (`radius-md`, 8px), surface-matching fill with a `default` border, flat (`elevation-none`), brand focus ring — with a trailing chevron. A native `<select>` keeps that shell; a custom select pairs a shell-shaped trigger with a menu drawn entirely by `dropdowns.md`. The one deliberate departure is the **underline** variant, which drops to a single bottom border for dense, low-chrome forms.

---

## Anatomy

| Part | Role |
|---|---|
| **Label** | Standard field label |
| **Control** | `<select>` or button trigger |
| **Chevron** | Trailing affordance indicating an expandable list |
| **Options list** | Native OS menu or custom dropdown panel |
| **Helper text** | Optional format or selection hint |

---

## Native select shell

| Property | Token / value |
|---|---|
| Shell | Same as `input-field.md` |
| Padding (inline end) | Extra `spacing-8` to clear the chevron if custom-drawn |
| Chevron | 16 × 16px, `body`, inline-end inset `spacing-3` |
| Option text | `font-size-sm`, `heading` |
| `multiple` + `size` | Multi-line list box — same border/radius; min-height from row count × line height |

---

## Variants

### Select input (default)

Label + single-select dropdown; the first disabled option may serve as a placeholder ("Choose a country").

### Multiple options

The `multiple` attribute — a list box with `spacing-0` internal rows, each option padded `spacing-2` `spacing-3`. Selected options use a `brand-softer` background (prefer this over the OS default when skinning).

### Size attribute

Shows several rows without opening the menu; height grows with the option count, width stays 100%.

### Disabled state

`fg-disabled` text and muted interaction — the same disabled treatment as `input-field.md`.

### Underline select

The minimal variant: no side border, **bottom border only** (1px `default-medium`), transparent or `neutral-primary` background. Focus turns the bottom border `brand` with an optional inward 4px `brand-medium` ring. Radius is `radius-none` on this underline shell (there is no box to round) — the only case where a select shows no boxed shell at all — just a bottom rule.

### Select with dropdown (custom)

The trigger matches the field shell (`aria-haspopup="listbox"`); the menu panel uses flat, `radius-md`, item padding `spacing-2` `spacing-3`, hover `neutral-tertiary-medium`, and an optional 16px checkmark at the inline start of the selected item.

### Sizes

| Size | Block padding | Font size |
|---|---|---|
| Small | `spacing-2` | `font-size-sm` |
| Default | `spacing-2-5` | `font-size-sm` |
| Large | `spacing-3` | `font-size-base` |
| Extra large | `spacing-3-5` | `font-size-base` |

---

## States

| State | Visual |
|---|---|
| Focus | Border `brand`, 4px `brand-medium` ring |
| Open (custom) | Trigger border `brand`; chevron rotates 180° (optional ≤ 150ms) |
| Disabled | `fg-disabled`, no pointer events |
| Invalid | Error shell from the `input-field.md` validation table |

---

## Motion

Chevron rotation ≤ 150ms. Menu open/close follows `dropdowns.md` (≤ 200ms fade/slide).

---

## Accessibility

| Requirement | Implementation |
|---|---|
| Label | Required on a native select |
| Custom | `role="combobox"` or `listbox` pattern; `aria-expanded`, `aria-controls` |
| Keyboard | Arrow keys navigate options; Enter selects |
| Multi-select | Announce selection-count changes |
| Required | `aria-required` when applicable |

---

## Prohibited

- **No custom select without keyboard support**.
- **No menu panel styled ad hoc** — use `dropdowns.md` tokens (`radius-md`, flat).
- **No chevron on the underline variant** unless the spec adds a trailing icon with adjusted padding.
- **No placeholder option without disabled/empty-value** semantics.

# Elevation & Shadow Tokens — TypeUI · Charm

> The depth system for **TypeUI · Charm**. On Charm's light surface, depth is communicated by a **soft warm panel** plus a **subtle `default` (`#E7E6E5`) border** — not by heavy drop shadows. Cards fill `neutral-primary-soft` (`#FBFAF9`), a warm step off the white page, and read as gently seated; floating overlays add a backdrop scrim and may carry an optional soft **coral brand glow**. The elevation tokens below are the system’s depth vocabulary; most resolve to **`none`** in this flat theme — components reference them, never one-off shadow values. **Three documented exceptions:** **`elevation-1`** is the small layered **control shadow** every button **and input** carries (three hairline ~3–4%-opacity layers — a tight, gentle lift, never a visible drop shadow); floating overlays — dropdowns, popovers, and menus — carry a real **medium drop shadow** (`elevation-2`); and `elevation-3` carries the **signature brand glow** for an emphasized/active brand element. Resting cards and sections stay flat (see `dropdowns.md`).

Depends on: `colors.md` (separation comes from a raised surface tone and the border token, not shadow color).

---

## Token naming

| Pattern | Role |
|---|---|
| `elevation-none` | Flat — no shadow |
| `elevation-{1–5}` | Depth level by intent; most resolve to `none` **except `elevation-1` (the layered button control shadow), `elevation-2` (floating-overlay medium shadow), and `elevation-3` (the coral brand glow)** — resting separation is handled by surface color and border |

Each level is a single token — do not split or hand-roll shadow layers in component code.

---

## Shadow anatomy

| Property | Meaning |
|---|---|
| Offset X | Horizontal displacement (+ right, − left) |
| Offset Y | Charm displacement (+ down, − up) |
| Blur | Softness of the shadow edge |
| Spread | Expansion (+) or contraction (−) of the shadow shape |
| Color | RGBA — opacity controls perceived elevation (or, for the glow, the brand hue) |

Charm paints almost no shadows; this anatomy is retained so the two documented exceptions describe their layers consistently.

---

## Elevation scale

| Token | Shadow value |
|---|---|
| elevation-none | `none` |
| elevation-1 | `0 1px 2px 0 rgb(0 0 0 / 0.05)` |
| elevation-2 | `0px 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 1px 1px 0.5px rgba(0, 0, 0, 0.04), 0px 3px 3px 1.5px rgba(0, 0, 0, 0.04), 0px 6px 6px -3px rgba(0, 0, 0, 0.04), 0px 12px 12px -6px rgba(0, 0, 0, 0.04), 0px 24px 24px -12px rgba(0, 0, 0, 0.04)` |
| elevation-3 | `0px 0px 24px rgb(from brand r g b / 0.25)` |
| elevation-4 | `none` |
| elevation-5 | `none` |

---

## Flat registry

```
elevation-none   none
elevation-1      0 1px 2px 0 rgb(0 0 0 / 0.05)
elevation-2      0px 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 1px 1px 0.5px rgba(0, 0, 0, 0.04), 0px 3px 3px 1.5px rgba(0, 0, 0, 0.04), 0px 6px 6px -3px rgba(0, 0, 0, 0.04), 0px 12px 12px -6px rgba(0, 0, 0, 0.04), 0px 24px 24px -12px rgba(0, 0, 0, 0.04)
elevation-3      0px 0px 24px rgb(from brand r g b / 0.25)
elevation-4      none
elevation-5      none
```

---

## Usage by surface type

| Surface | Token | Rationale |
|---|---|---|
| Resting cards, accordions (grouped) | `elevation-none` | Separation comes from the lighter card surface, not shadow |
| Buttons (except ghost) and inputs | `elevation-1` | The small **control shadow**; lifts controls gently off the light surface |
| Separated cards, hover lift | `elevation-none` | Boundary read from surface tone and spacing |
| Dropdowns, popovers, menus | `elevation-2` | A real **medium** drop shadow — the floating-overlay exception; lifts the bordered panel off the section |
| Emphasized / active brand element | `elevation-3` | The **signature brand glow** — an opt-in halo behind a focused/active brand CTA or hero mark |
| Modals, drawers (sheet) | `elevation-none` | Separation from a backdrop scrim, not a drop shadow |
| Floating action, critical overlay | `elevation-none` | Emphasis through surface and placement |
| Flat lists, flush accordions, inline fields | `elevation-none` | No depth signal |

---

## Principles

- **Hierarchy** — closeness to the viewer is signalled by the `default` border, spacing, and scrims — never by a resting drop shadow.
- **Emphasis** — to prioritize a surface, give it a stronger border (e.g. `brand`), add a scrim behind it, or reach for the `elevation-3` brand glow on a genuinely active brand element; do not lift a resting fill with shadow.
- **Restraint** — the whole system is flat; if a screen looks like it needs a shadow to separate two surfaces, use the `default` border instead. The glow is a deliberate brand accent, not a general depth tool.

---

## Prohibited

- **No raw box-shadow strings in components** — use an `elevation-*` token.
- **No drop shadows on resting cards or components** — Charm is flat; separation is by surface color and scrims.
- **No colored shadows other than the documented `elevation-3` brand glow** — do not invent per-component colored halos; if a new one is needed, add a token to this file with documented intent.
- **No reintroducing shadow depth** to “lift” a resting element — use a lighter panel surface and a backdrop scrim.
- **No drop shadow to fake depth** — cards and shells separate with the `default` (`#E7E6E5`) border and surface color, not with elevation.
- **No foreign elevation naming** — map into these tokens in your implementation layer; do not rename and call that the design system.

# Spacing Tokens — TypeUI · Charm

> The spacing system for **TypeUI · Charm**. Charm breathes on a calm 4px rhythm: controls are comfortable, never cramped, and hierarchy comes from *deliberately uneven* spacing — tight inside a group, generous between groups. Every value below is a literal size and the single source of truth; components reference these tokens for padding, margin, gap, inset, and layout offset, never raw px or rem.

**Root assumption:** `1rem = 16px` unless the product documents a different root.

**Base unit:** one integer step = **0.25rem (4px)**. The scale is proportional — each step is derived from that unit unless listed as a fixed pixel (`spacing-px`) or zero (`spacing-0`).

---

## Token naming

| Pattern | Role |
|---|---|
| `spacing-{step}` | Value from the scale below (`0`, `1`, `2`, … `96`, plus `px` and half-steps) |
| `spacing-0` | Zero — flush, no gap |
| `spacing-px` | Single pixel — hairline separation |

**Applies to:** padding, margin, gap (flex/grid), inset, stack spacing between siblings, and any layout dimension that expresses **space** rather than content width.

**Does not replace:** component-specific width/height tokens for fixed control sizes — use spacing tokens for **distance between and around** elements.

---

## Spacing scale

| Token | rem | px |
|---|---|---|
| spacing-0 | 0 | 0 |
| spacing-px | 1px | 1px |
| spacing-0-5 | 0.125rem | 2px |
| spacing-1 | 0.25rem | 4px |
| spacing-1-5 | 0.375rem | 6px |
| spacing-2 | 0.5rem | 8px |
| spacing-2-5 | 0.625rem | 10px |
| spacing-3 | 0.75rem | 12px |
| spacing-3-5 | 0.875rem | 14px |
| spacing-4 | 1rem | 16px |
| spacing-5 | 1.25rem | 20px |
| spacing-6 | 1.5rem | 24px |
| spacing-7 | 1.75rem | 28px |
| spacing-8 | 2rem | 32px |
| spacing-9 | 2.25rem | 36px |
| spacing-10 | 2.5rem | 40px |
| spacing-11 | 2.75rem | 44px |
| spacing-12 | 3rem | 48px |
| spacing-14 | 3.5rem | 56px |
| spacing-16 | 4rem | 64px |
| spacing-20 | 5rem | 80px |
| spacing-24 | 6rem | 96px |
| spacing-28 | 7rem | 112px |
| spacing-32 | 8rem | 128px |
| spacing-36 | 9rem | 144px |
| spacing-40 | 10rem | 160px |
| spacing-44 | 11rem | 176px |
| spacing-48 | 12rem | 192px |
| spacing-52 | 13rem | 208px |
| spacing-56 | 14rem | 224px |
| spacing-60 | 15rem | 240px |
| spacing-64 | 16rem | 256px |
| spacing-72 | 18rem | 288px |
| spacing-80 | 20rem | 320px |
| spacing-96 | 24rem | 384px |

Half-step tokens use a **hyphen** (`spacing-0-5`, `spacing-1-5`) — not decimals in token names.

---

## Semantic spacing roles

Map component specs to scale tokens. Prefer the **smallest step that reads clearly** — do not jump to large steps without hierarchy reason.

| Role | Token | px | Typical use |
|---|---|---|---|
| none | spacing-0 | 0 | Collapse gutter, flush edges |
| hairline | spacing-px | 1 | Optical border adjacency |
| tight | spacing-1 | 4 | Icon inset, dense chip padding |
| compact | spacing-2 | 8 | Inline gap, badge padding, paragraph gap inside cards |
| inner | spacing-3 | 12 | Label-to-field gap, trigger icon gap, input↔button control row |
| default | spacing-4 | 16 | Standard control padding, card inner padding (mobile) |
| comfortable | spacing-5 | 20 | Accordion trigger padding, card padding (desktop) |
| group | spacing-6 | 24 | Section inner padding, separated card gap |
| section | spacing-8 | 32 | Between component groups in a page |
| layout | spacing-12 | 48 | Between major page sections |
| hero-top | spacing-24 | 96 | Sticky nav clearance below nav bar (see layout rules) |
| touch-min | spacing-11 | 44 | Minimum hit-target outer dimension reference |

These are **roles**, not separate values — each resolves to a `spacing-*` token above.

---

## Pairing rules

- **Inner group (related items):** `spacing-2` – `spacing-3` (8–12px).
- **Between groups in the same section:** `spacing-6` – `spacing-8` (24–32px).
- **Between page sections:** `spacing-12`+ (48px+).
- **Section side padding:** `48px` (`spacing-12`) of inline padding (`padding-inline: 48px`) on both sides of the 1280px container — every section, the navbar, and the footer share it.
- **Section vertical padding:** `112px` top and bottom on desktop, stepping down to **`64px` (`spacing-16`) below the 768px breakpoint** — always applied equally on every section (hero and footer excepted — see `SKILL.md`). The symmetric padding is what divides sections; a **faded separator** may sit centered in the gap between two plain text sections (see the separator rule below), but the padding is the primary divider and stays identical the whole way down the page.
- **Equal gap between every section (whole-page rule).** The vertical whitespace between any two adjacent sections must be **the same everywhere down the page** — no section may sit visibly closer to one neighbour than to the other. Because adjacent sections' vertical paddings stack, the gap you actually see is the **sum** of the upper section's bottom padding and the lower section's top padding (plus any inner margins on the last/first child). With standard symmetric sections this nets a consistent gap automatically. The moment a section is **non-standard** — it owns a background, uses asymmetric padding, or is placed next to one that does (hero, footer, a tinted band, or any section set to `padding-bottom: 0`) — you must **tune its padding so the measured gap to each neighbour equals the standard section gap**. Never let paddings double up on one side (e.g. 176px) while collapsing on the other (e.g. 64px): measure the real pixel gap above and below and make them match. When one neighbour already supplies the full gap (its own padding), the section sets its facing padding to `spacing-0` so the two do not add up. This is **not** in tension with "no equal spacing everywhere" below — that rule governs *inner vs. outer* rhythm inside a section; the gap *between* whole sections is deliberately uniform.
- **Section separators — a faded hairline between text sections.** Every section is either a **card** (a single bounded surface with its own border) or **text** (a heading with copy). Put a **faded separator in the gap between two adjacent text sections**, so text never runs straight into text with nothing between them. A **card section takes no separator on either edge — none above it and none below it** — because its own border already sets it apart; suppress the separator both on the card itself and on the section immediately after it (that one would otherwise land on the card's bottom edge). The separator is a **1px hairline** centered in the gap, a horizontal gradient that is **solid through the middle and fades to transparent at both ends** (`transparent → border → transparent`), spanning the container width. Stay agnostic about what a section contains — decide purely by card vs. text. Never a flat full-width rule; it always fades at the extremities.
- **Footer vertical padding (asymmetric):** top is `96px` (`spacing-24`) or `112px` (`spacing-28`); **bottom is light — at most half the top** (`spacing-12` under a 96px top, `spacing-14` under a 112px top), never equal to the top. **If the footer's last band already has its own `padding-bottom`, the container's `padding-bottom` is `0`** — only one of the two owns the footer's bottom spacing, never both (see `SKILL.md`).
- **Heading → body:** tighter than **section → section** — use `spacing-2`–`spacing-3` below headings, `spacing-8`+ between sections.
- **Control rows (input + button):** align heights first; horizontal gap **`spacing-3`** (12px) minimum.
- **Adjacent action buttons in a cluster:** **`spacing-2`** (8px). Two or more buttons sitting side by side as a unit — a toolbar's *Filters + Sort*, a widget header's *dropdown + Details*, a table's *Add + Settings + Hide fields*, a dialog footer's *Cancel + Save* — are separated by **8px**, not 12px. This is deliberately tighter than the 12px control row above: buttons in a cluster read as **one control group**, while an input and its button are two different things that need air between them. A segmented / joined group is different again — its members share a border and have **no gap at all** (see `button-group.md`).
- **Stacked form fields:** **`spacing-4`**–**`spacing-5`** (16–20px) vertical gap between fields.
- **Equal spacing everywhere is forbidden** — vary inner vs outer deliberately. (Scope: this is about *inner-vs-outer* rhythm within a section. The gap *between* whole sections is the exception — it stays uniform down the page; see the equal-gap-between-sections rule above.)

---

## Flat registry

```
spacing-0        0
spacing-px       1px
spacing-0-5      0.125rem   (2px)
spacing-1        0.25rem    (4px)
spacing-1-5      0.375rem   (6px)
spacing-2        0.5rem     (8px)
spacing-2-5      0.625rem   (10px)
spacing-3        0.75rem    (12px)
spacing-3-5      0.875rem   (14px)
spacing-4        1rem       (16px)
spacing-5        1.25rem    (20px)
spacing-6        1.5rem     (24px)
spacing-7        1.75rem    (28px)
spacing-8        2rem       (32px)
spacing-9        2.25rem    (36px)
spacing-10       2.5rem     (40px)
spacing-11       2.75rem    (44px)
spacing-12       3rem       (48px)
spacing-14       3.5rem     (56px)
spacing-16       4rem       (64px)
spacing-20       5rem       (80px)
spacing-24       6rem       (96px)
spacing-28       7rem       (112px)
spacing-32       8rem       (128px)
spacing-36       9rem       (144px)
spacing-40       10rem      (160px)
spacing-44       11rem      (176px)
spacing-48       12rem      (192px)
spacing-52       13rem      (208px)
spacing-56       14rem      (224px)
spacing-60       15rem      (240px)
spacing-64       16rem      (256px)
spacing-72       18rem      (288px)
spacing-80       20rem      (320px)
spacing-96       24rem      (384px)
```

---

## Usage by surface type

| Surface | Typical tokens |
|---|---|
| Button / input padding | spacing-4 (default), spacing-3 (compact) |
| Card inner padding (marketing / storefront) | spacing-5 desktop, spacing-4 mobile |
| Widget inner padding (application / dashboard) | spacing-6 (24px) desktop, spacing-4 (16px) mobile |
| Adjacent action buttons in a cluster | spacing-2 (8px) |
| Application widget grid gap | spacing-4 (16px) — see `SKILL.md` |
| Accordion trigger padding | spacing-5 |
| Gap label ↔ icon | spacing-3 |
| Gap between stacked paragraphs | spacing-2 |
| Gap between form fields | spacing-4 – spacing-5 |
| Gap between cards in a list | spacing-6 |
| Page section separation | spacing-12 – spacing-16 |
| Sticky nav → hero content offset | spacing-24 below nav (plus measured nav height) |
| Modal / dialog padding | spacing-6 – spacing-8 |
| Table cell padding | spacing-3 – spacing-4 |
| Inline badge padding | spacing-1 – spacing-2 |

---

## Prohibited

- **No raw px/rem in components** for padding, margin, or gap — use `spacing-*` tokens.
- **No off-scale values** (e.g. 15px, 18px) — pick the nearest step or add a token to this file with documented intent.
- **No equal spacing between inner groups and outer groups** — inner groups stay tight; outer groups breathe more. (This targets inner-vs-outer rhythm only; the whitespace *between* whole page sections is instead kept uniform down the page — see the equal-gap-between-sections rule.)
- **No spacing tokens as brand color** — spacing is distance only.
- **No foreign scale names** in specs or handoff — map into `spacing-*` in your implementation layer.
- **No margin hacks for vertical rhythm** when padding on the container is the correct tool — prefer padding on the owning surface for predictable backgrounds and borders.
- **No negative spacing tokens** unless a dedicated inset token is added to this file with documented exception.

# Tables — TypeUI · Charm

> **TypeUI · Charm** — structured, comparative data.
> Depends on: `colors.md`, `radius.md`, `shadows.md`, `spacing.md`, `typography.md`, `pagination.md`, `buttons.md`, `modal.md`

A table is for genuinely comparative, multi-column data — reach for lists or cards otherwise. The Charm table wraps in a crisp **soft-rounded** (`radius-xl`, 8px) card — **borderless and flat** (`elevation-none`): a `neutral-secondary-soft` header over `neutral-primary` rows divided by hairline `default` lines (the one place a thin rule survives, because dividing data rows is functional, not decorative), generous `spacing-6` cell padding, and `font-size-sm` throughout. Emphasis stays subtle — pick *one* readability cue (zebra, hover, or selection tint), never all three at once.

---

## Anatomy

| Part | Role |
|---|---|
| **Wrapper** | Optional scroll/border/shadow container |
| **Caption** | Optional title + description above table |
| **Head** | Column headers |
| **Body** | Data rows |
| **Foot** | Optional totals row |
| **Row header cell** | First column as `th` for row title |
| **Action cell** | Links, buttons, dropdowns per row |
| **Toolbar** | Search, filter, bulk actions above table |

---

## Layout

| Property | Token / value |
|---|---|
| Cell padding (head) | `spacing-6` horizontal, `spacing-3` vertical |
| Cell padding (body) | `spacing-6` horizontal, `spacing-4` vertical |
| Font (body cells) | font-size-sm, line-height-body, `body` |
| Font (head) | font-size-sm, font-weight-medium, `body` |
| Font (row header) | font-size-sm, font-weight-medium, `heading` |
| Row border | 1px `default` bottom between rows |
| Wrapper border | None (the table reads as a flat, borderless card) |
| Wrapper radius | `radius-xl` |
| Wrapper shadow | `elevation-none` when bordered card style |
| Horizontal scroll | Wrapper `overflow-x: auto` on narrow viewports |

---

## Default shell

Background `neutral-primary-soft`; head background `neutral-secondary-soft` with a `default` bottom border; body rows `neutral-primary` with row dividers.

---

## Highlight variants

Pick one — they don't stack.

### Striped rows

Odd rows `neutral-primary`, even rows `neutral-secondary-soft`; keep the row borders.

### Striped columns

Alternate column backgrounds with `neutral-secondary-soft` on even columns; the first (label) column often stays soft throughout.

### Hover row

Row hover background `neutral-secondary-medium`; cursor stays default unless the row is clickable.

**No marketing card hover glow on the table.** A table — including a pricing / comparison table dropped on a marketing page, and its scroll wrapper — **never** wears the card's pointer-tracking edge-glow / breathing-border hover treatment (see `cards.md`). The only hover feedback a table has is the **row hover tint above**; the table shell itself does not light up, glow, or track the cursor. Any table-face hover cue stays a subtle neutral row background, not a `brand` glow.

---

## Table layout options

### With caption

Caption padding `spacing-5`; title font-size-lg, font-weight-medium, `heading`; description font-size-sm, `body`, `spacing-1-5` below the title.

### With foot

A footer row at the head's padding, top border `default-medium`, `font-weight-medium`.

### Sortable head

Header label + a 16px sort icon; the active sort column's text goes `heading`; clicking toggles asc/desc (behavior-agnostic).

---

## Style variants

| Variant | Border | Shadow | Head bg |
|---|---|---|---|
| **Default card** | none | `elevation-none` | `neutral-secondary-soft` |
| **Without outer border** | none on wrapper | none | transparent or soft |
| **Shadow only** | optional none | `elevation-none` | per default |
| **Compact** | same | same | cell padding `spacing-4` × `spacing-2` |

---

## Toolbar patterns

### Search

An input above the table at the inline end; ~320px wide; debounced row filter.

### Column filter

A per-column dropdown or global filter chips — see `dropdowns.md`.

### Pagination footer

Row-count text + a pagination control — see the `pagination.md` table variant.

---

## Row selection

A checkbox column at the inline start; the head checkbox selects all visible rows; each checkbox is a **16 × 16px box** (`radius-xl`, 8px) — never fully round. Selected rows may take a `brand-softer` background; a bulk-action bar appears above the table once the selection count is greater than zero.

---

## Content patterns

### Users table

Avatar + name + email in the first column; a role badge; an action dropdown at the inline end.

### Products table

Thumbnail, name, category, price, and a stock-status badge.

### With modal detail

A row action opens a `modal.md` — the table stays under the backdrop.

### Status / intent rows

Row background tints using soft intent tokens (`danger-soft`, etc.) — sparingly, for genuine alerts in data.

---

## Links & actions in cells

| Element | Spec |
|---|---|
| Row action link | font-weight-medium, `fg-brand`, underline on hover |
| Icon action | 32px hit target, icon 16px |
| Destructive row action | `fg-danger` text or a danger outline button |

**Table icons cap at 16px.** Every icon inside a table — data tables *and* pricing / comparison tables — is **16px maximum, never larger**: cell marks (`check` / `minus` / `x`), sort carets, row-action glyphs, and inline status icons. When an icon sits inside a tinted chip (e.g. a `success-soft` circle behind a `check`), it may drop **smaller** (~14px) to breathe inside the container, but 16px is the hard ceiling.

---

## Accessibility

- Use native `<table>`, `<thead>`, `<tbody>`, `<th scope="col|row">`.
- Associate the caption via `<caption>` or `aria-labelledby` on the table.
- Sort buttons: `aria-sort="ascending|descending|none"`.
- Select-all checkbox: indeterminate state on partial selection.
- Never use table layout for non-tabular content.

---

## Prohibited

- **No zebra + hover + selection tint at once** — choose one primary readability pattern.
- **No marketing card hover glow on a table** — the pointer-tracking edge glow / breathing-border treatment from `cards.md` never applies to a table or its wrapper, even on a marketing page. Row hover tint is the only hover feedback.
- **No shadow above `elevation-none`** on the wrapper, and no corner above `radius-xl`.
- **No horizontal scroll without a visual hint** on mobile.
- **No font-size below `font-size-xs`** in cells.
- **No nested tables** unless the spec explicitly requires sub-grids.
- **No raw hex or px for spacing/colors** (fixed icon sizes excepted), and no framework utility names.

# Tabs — TypeUI · Charm

> **TypeUI · Charm** — section switching and supplementary navigation.
> Depends on: `colors.md`, `radius.md`, `spacing.md`, `typography.md`

Tabs split content into mutually exclusive panels or route-level navigation. Charm ships three flavors — a soft-filled **default**, a clean **underline**, and **pills** — and the active tab always speaks in `fg-brand`. The default and pill variants take the soft-rounded **`radius-md`** (8px) shell; underline stays minimal with a 2px brand rule. Keep tab bars short and single-level; past ~7 tabs, move to an overflow menu.

---

## Anatomy

| Part | Role |
|---|---|
| **Tab list** | Row or column of tab triggers |
| **Tab** | Selectable label (link or button) |
| **Indicator** | Background fill or underline showing active tab |
| **Panel** | Content region tied to active tab |
| **Icon** | Optional leading glyph in tab label |

---

## Typography

| Element | Size | Weight | Line height | Color |
|---|---|---|---|---|
| Tab label | font-size-sm | font-weight-medium | line-height-component | See states |
| Panel body | font-size-sm | font-weight-normal | line-height-body | `body` |
| Panel emphasis | font-size-sm | font-weight-medium | line-height-body | `heading` |

---

## Layout

| Property | Token / value |
|---|---|
| Tab padding | `spacing-4` all sides (default variant) |
| Gap between tabs | `spacing-2` |
| List bottom border | 1px `default` (underline / default variants) |
| Panel padding | `spacing-4` |
| Panel gap below list | flush — panel abuts list or shares border |
| Icon size | 16 × 16px |
| Icon gap | `spacing-2` |
| Full-width tabs | Equal flex columns; each tab `width: 100%` of column |

---

## Variants

### Default (filled active)

| State | Text | Background |
|---|---|---|
| Active | `fg-brand` | `neutral-secondary-soft` |
| Inactive | `body` | transparent |
| Hover | `heading` | `neutral-secondary-soft` |
| Disabled | `fg-disabled` | transparent; no pointer |

The active tab keeps `radius-md` (8px) top corners; the list carries a `default` bottom border.

### Underline

| State | Text | Bottom border |
|---|---|---|
| Active | `fg-brand` | 2px `brand` |
| Inactive | `body` | transparent |
| Hover | `fg-brand` | 1px `brand-subtle` |
| Disabled | `fg-disabled` | none |

Negative-margin trick: the tab list overlaps the container's bottom border by 1px so the active underline meets the list edge.

### Pills

| State | Text | Background |
|---|---|---|
| Active | `white` | `brand` |
| Inactive | `body` | transparent |
| Hover | `heading` | `neutral-secondary-soft` |
| Disabled | `fg-disabled` | transparent |

Inactive/hover and active pills both use `radius-md` (8px); the active pill takes the brand fill.

### With icons

Underline or default styling plus a 16px leading icon; the icon inherits the tab text color and shifts to `fg-brand` on group-hover.

### Charm

A tab list column at the inline start (~256px wide), items full-width of the column, panels at the inline end — same state tokens as the underline variant.

### Full width

Tabs stretch evenly across the container — for marketing or settings with few tabs.

### Interactive (panel switching)

Tab triggers are **buttons** with `role="tab"`; one **panel** shows at a time (`role="tabpanel"`), and inactive panels leave both view and tab order (`hidden`/`display:none`). The active underline variant uses a 2px `brand` bottom border; inactive tabs are transparent. The panel container is `spacing-4` padding, `radius-md`, on `neutral-secondary-soft`.

---

## States reference

| State | Default | Underline | Pills |
|---|---|---|---|
| Active | brand text + soft bg | brand text + brand border | `white` on brand |
| Hover | heading + soft bg | brand text + subtle border | heading + soft bg |
| Disabled | fg-disabled | fg-disabled | fg-disabled |

---

## Motion

150ms color/background/border on tab change. Panel swap is instant or a 150ms opacity fade — no sliding panels unless a product spec adds it.

---

## Accessibility

- Tab list: `role="tablist"`.
- Tab: `role="tab"`, `aria-selected="true|false"`, `aria-controls="{panelId}"`.
- Panel: `role="tabpanel"`, `aria-labelledby="{tabId}"`.
- Arrow keys Left/Right (or Up/Down for vertical) move between tabs.
- Disabled tabs: `aria-disabled="true"`, excluded from activation.
- URL-based tabs use real `href`s — no fake buttons.

---

## Prohibited

- **No mixing pill and underline styles** in one tab list — pick one flavor.
- **No more than ~7 tabs** in a row without an overflow menu.
- **No nested tab bars** at the same hierarchy level.
- **No tab labels in ALL CAPS** — sentence case.
- **No hiding the only panel heading** — the tab names the section; the panel may repeat it for context.
- **No raw colors or spacing**, and no framework class/data-attribute names — foundation tokens only.

# Textarea — TypeUI · Charm

> **TypeUI · Charm** — multi-line text: plain, editor chrome, comment box, and chat input.
> Depends on: `input-field.md`, `buttons.md`, `colors.md`, `radius.md`, `shadows.md`, `spacing.md`, `typography.md`

A textarea is the Charm **field shell** from `input-field.md` grown to multiple lines — same contrasting `neutral-tertiary` (`#F5F4F1`) fill with a `default` border, flat (`elevation-none`), and brand focus ring, with `rows` setting the min height — but its corner is **capped at `radius-md` (8px)**, the slight panel softening over the otherwise sharp shell. Richer patterns (WYSIWYG, comment box, chat) wrap the field in a single soft-rounded composite card: the inner textarea goes borderless and the **focus ring moves to the wrapper**, so the whole composite lights up as one control rather than ringing a box inside a box.

---

## Anatomy

| Part | Role |
|---|---|
| **Label** | Field name above or visually hidden inside composites |
| **Control** | `<textarea>` |
| **Toolbar** | Optional row of icon actions above text (WYSIWYG) |
| **Footer row** | Submit button + secondary icon actions |
| **Helper / guideline** | Text below composite |

---

## Default textarea shell

| Property | Token / value |
|---|---|
| Shell | Same border, background, radius, shadow as `input-field.md` |
| Padding | `spacing-3-5` all sides |
| Font size | `font-size-sm` |
| Text color | `heading` |
| Placeholder | `body` |
| Min height | From `rows` attribute × line height |
| Resize | Charm resize allowed unless layout forbids |
| Focus | Border `brand`, 4px `brand-medium` ring |

---

## Variants

### Textarea example (default)

Label + textarea + optional placeholder ("Write your thoughts here…").

### WYSIWYG editor

A composite card wrapping toolbar + text area + submit — one rounded shell around the whole thing.

| Part | Token / value |
|---|---|
| Outer wrapper | `default` (`#E7E6E5`) border, `radius-md`, `neutral-tertiary` (`#F5F4F1`) contrasting fill, flat (`elevation-none`) |
| Toolbar | Row between top border and text; padding `spacing-2` `spacing-3`; bottom border 1px `default-medium` |
| Toolbar buttons | 32 × 32px hit area; icon 20 × 20px; `body` color; hover `neutral-tertiary-medium`, text `heading` |
| Toolbar dividers | Charm `default-medium` between button groups on wide viewports |
| Text area | Borderless inside wrapper; padding `spacing-4` `spacing-2`; background matches wrapper; inner focus ring suppressed — the ring shows on the wrapper when any child is focused |
| Submit | Primary button below wrapper; `spacing-4` gap |

### Comment box

| Part | Token / value |
|---|---|
| Wrapper | Same bordered (`default`), flat rounded card as WYSIWYG, without the top toolbar |
| Text area | Top section; padding `spacing-4` `spacing-2`; borderless; placeholder `body` |
| Footer | Row with top border `default-medium`; padding `spacing-2` `spacing-3` |
| Submit button | Primary, small size (`buttons.md`) |
| Footer icon actions | Ghost icon buttons 32 × 32px; gap `spacing-1` |
| Guideline below | `font-size-xs`, `body-subtle`, inline-end aligned; link `fg-brand` |

### Chatroom input

A single-row composite — visually short, not a tall textarea.

| Part | Token / value |
|---|---|
| Outer row | Flex row; padding `spacing-2` `spacing-3`; background `neutral-secondary-soft`; `radius-md` |
| Leading actions | Icon buttons 32 × 32px |
| Text control | Flex-grow; single-line height with `rows="1"`; shell on a contrasting `neutral-tertiary` (`#F5F4F1`) fill with a `default` border, `radius-none`, padding `spacing-2-5` `spacing-3` |
| Send button | Icon-only; `fg-brand`; hover `brand-softer`; circular or square 32 × 32px |
| Send icon | 24 × 24px; rotated paper plane |

---

## States

Disabled and validation inherit from `input-field.md`. Toolbar buttons use the icon-button hover/focus pattern, and the composite wrapper shows focus when its textarea is focused. Read-only may mute the text; the shell is unchanged.

---

## Motion

Toolbar hover ≤ 150ms; chat send hover ≤ 150ms. No auto-resize animation required.

---

## Accessibility

| Requirement | Implementation |
|---|---|
| Label | Visible, or `sr-only` inside a composite with `aria-label` |
| Toolbar | Each icon button has an `aria-label` |
| WYSIWYG | Don't imply formatting works unless it's implemented |
| Guideline | Linked via `aria-describedby` when instructional |
| Required | `required` + validation message |

---

## Prohibited

- **No borderless textarea outside a defined composite** — always a shell or wrapper border (the simple textarea shell at `radius-md` / 4px; a composite wrapper card at `radius-md`).
- **No inner textarea focus ring fighting the wrapper ring** — one focus indicator per composite.
- **No toolbar icons without accessible names**.
- **No chat send as a `<div>`** — use `<button type="submit">`.

# Timepicker — TypeUI · Charm

> **TypeUI · Charm** — time entry: native input, icon triggers, dropdowns, ranges, and presets.
> Depends on: `input-field.md`, `select.md`, `dropdowns.md`, `toggle.md`, `modal.md`, `drawer.md`, `colors.md`, `radius.md`, `shadows.md`, `spacing.md`, `typography.md`

A timepicker starts as the Charm **field shell** from `input-field.md` with a trailing clock — same crisp soft-rounded (`radius-md`, 8px), surface-matching fill with a `default` border, flat (`elevation-none`), and brand focus ring. Everything beyond that is composition, not reinvention: panels come from `dropdowns.md`, wheels from `select.md`, presets from `buttons.md`, mode switches from `toggle.md`. Ranges always label both endpoints.

---

## Anatomy

| Part | Role |
|---|---|
| **Label** | Field or range label |
| **Control** | `type="time"`, text shell, or select pair |
| **Trailing icon** | Clock glyph opening picker |
| **Dropdown panel** | List of times or hour/minute columns |
| **Range ends** | Start time + end time fields |
| **Preset buttons** | Inline quick picks (e.g. "09:00", "12:00") |
| **Toggle** | AM/PM or 24h mode (`toggle.md`) |

---

## Core field shell

| Property | Token / value |
|---|---|
| Shell | Same as `input-field.md` |
| Trailing icon button | 16 × 16px clock, inset inline-end `spacing-3`; padding-inline-end on field `spacing-9` |
| Icon wrapper | Optional absolute positioning like the search leading icon |

---

## Variants

### Default timepicker

Label + time input on the standard shell; the browser-native picker is fine where skinning is limited.

### Timepicker with icon

A decorative or clickable clock at the inline end. If clickable, the icon button opens a custom panel (`aria-haspopup="dialog"` or `listbox`).

### Timepicker with dropdown

A field trigger plus a dropdown menu (`dropdowns.md`, flat, `radius-md`). Items: `font-size-sm`, row padding `spacing-2` `spacing-3`, hover `neutral-tertiary-medium`; the selected time uses `brand-softer` or a checkmark.

### Timepicker with select

Hour and minute `<select>`s side by side (`spacing-2` gap), each following `select.md`, with an optional AM/PM third select.

### Timepicker range selector

Two time fields with a "to" separator (`body`, `font-size-sm`) between them, `spacing-4` gap, labeled "Start" / "End" or under one legend.

### Timerange with dropdown

A single field summarizing the range that opens a panel of two inner time selects or native inputs; panel padding `spacing-4`, `radius-md`, flat.

### Timerange with toggle

A range row plus a toggle for "All day" or 24h mode (`toggle.md`); vertical gap `spacing-4`.

### Inline timepicker buttons

A row of preset pill buttons (`buttons.md` outline or secondary, small); the active preset takes a primary or `brand-softer` fill, `spacing-2` gap, with an optional time field beside the row.

### Modal / drawer with timepicker

Time controls embedded in a `modal.md` or `drawer.md` form body — field tokens unchanged; placement and section spacing come from the container.

---

## States

Focus, disabled, and validation inherit from `input-field.md`. An open dropdown turns the trigger border `brand`. An invalid range (end before start) surfaces an error message on the group.

---

## Motion

Dropdown open ≤ 200ms per `dropdowns.md`. Icon button hover ≤ 150ms.

---

## Accessibility

| Requirement | Implementation |
|---|---|
| Label | Each input labeled; a range uses `<fieldset>` + `<legend>` |
| Custom picker | Keyboard-navigable list; `aria-selected` on the active time |
| Icon trigger | `aria-label` "Open time picker" |
| 24h vs 12h | Don't rely on color — label AM/PM explicitly |
| Live region | Optional polite announcement when a preset is applied |

---

## Prohibited

- **No time range without both endpoints labeled**.
- **No dropdown panel outside `dropdowns.md` tokens** (`radius-md`, flat).
- **No icon-only time field without an accessible name**.
- **No modal timepicker that traps focus without `modal.md` rules**.

# Toggle — TypeUI · Charm

> **TypeUI · Charm** — the binary on/off switch.
> Depends on: `colors.md`, `radius.md`, `shadows.md`, `spacing.md`, `typography.md`

The toggle is one of Charm's functionally round controls: a **fully round (`radius-full`) track** carrying a circular thumb that slides from `neutral-quaternary` (off) to `brand` (on). It commits a setting immediately — no save step — and it is a true boolean, never a third radio-style state. Under the hood it's a visually hidden checkbox driving the track, so it stays keyboard-operable with a `brand-soft` focus ring.

---

## Anatomy

| Part | Role |
|---|---|
| **Native input** | Visually hidden checkbox (`sr-only`) |
| **Track** | Pill-shaped background |
| **Thumb** | Circular knob sliding inline |
| **Label** | Text beside track |
| **Dual labels** | Off/on text flanking track |
| **Icons** | Optional symbols inside track |

---

## Default toggle

| Property | Token / value |
|---|---|
| Track width | 36px |
| Track height | 20px |
| Track radius | `radius-full` |
| Track off | `neutral-tertiary` (`#F5F4F1`, contrasting) with a `default` (`#E7E6E5`) border |
| Track on | `brand` fill, `brand` border |
| Thumb size | 16 × 16px — **track height (20px) − 4px**, leaving a **2px gap above and below** the thumb; the thumb is always smaller than the track and never fills or overflows it |
| Thumb color | `default-strong` (off, visible on the light track); `white` (on) |
| Thumb radius | `radius-full` |
| Thumb inset (off) | 2px from inline start, vertically centered |
| Thumb travel (on) | Offset = **track width − thumb width − 2px** (default: 36 − 16 − 2 = **18px** from the inline-start), leaving a **2px gap** to the inline-end edge — the same gap as the off side. **Never `translateX(100%)`, never flush, never past the edge** |
| Focus ring | 4px `brand-soft` on track when input focused |
| Label gap | `spacing-3` from track |
| Label type | `font-size-sm`, `font-weight-medium`, `heading` |
| Row cursor | Pointer on label wrapper |

Thumb position transitions ≤ 200ms ease; track color ≤ 150ms.

**Thumb fit — must follow exactly.** The thumb sits **fully inside the track with a uniform 2px gap on all four sides** (top, bottom, leading, trailing) in **both** the off and on states. Its diameter is the **track height − 4px**, so it is always smaller than the track — it must **never** be as tall as the track, touch any edge, sit flush, or overflow. Off = 2px from the inline-start edge; on = 2px from the inline-end edge (offset = `track width − thumb width − 2px`).

**Thumb implementation — avoid these common breakages (they are what make the thumb look cut off or oversized):**

1. **Translate distance ≠ final offset.** The on-state *final position* is `track width − thumb width − 2px` from the start (default **18px**). But when you move the thumb from its off position (already 2px from the start) with `transform: translateX(…)`, the translate **distance** is `track width − thumb width − (2 × 2px inset)` = default **`36 − 16 − 4 = 16px`** → use **`translateX(16px)`**. **Do not** pass the 18px *final offset* as the translate value — translating an already-inset thumb by 18px pushes it flush/past the edge so it looks cut off.
2. **Never clip the thumb.** The toggle and **every ancestor** wrapping it must not use `overflow: hidden` around the thumb. In particular, **a table cell (`td`) that holds a toggle must use `overflow: visible`** — `overflow: hidden` on the cell chops the thumb.
3. **Track sizing.** Give the track **`box-sizing: content-box`** (or otherwise make its **interior** exactly the spec size — default **36 × 20px**) so the 16px thumb fits with a 2px gap on all four sides. With `border-box` + a border, the interior shrinks and the travel/gaps break.

---

## Variants

### Toggle example (default)

A single label after the track ("Toggle me").

### Checked state

Same visuals — the `checked` attribute defaults the thumb to the on position and the track to `brand`.

### Disabled state

Reduced-contrast track, `fg-disabled` label, no pointer events, frozen thumb.

### Double labels

An off label at the inline start, the track in the center, an on label at the inline end — `spacing-3` gaps. The active side may use `heading`, the inactive `body-subtle`.

### Toggle with icons

Check and X icons inside the track at 12 × 12px; the thumb covers the active icon as it slides. Icons are `body` when visible past the thumb.

### Toggle card

A bordered settings row: padding `spacing-4`, `default-medium` border, **`radius-md`**, flex space-between — copy block at the start, toggle at the inline end. Title `font-weight-medium`; description `body-subtle`. (The card is a soft-rounded shell; the switch track stays `radius-full`.)

### Toggle card with icon

A 20 × 20px leading icon in the copy block; the toggle centers on the trailing edge.

### Colors

| Intent | Track on |
|---|---|
| Brand (default) | `brand` |
| Success | `success` |
| Danger | `danger` |
| Warning | `warning` |
| Purple / secondary brand | product token if defined in `colors.md` |

The off state stays `neutral-quaternary` for every intent.

### Sizes

| Size | Track (W × H) | Thumb |
|---|---|---|
| Small | 32 × 18px | 14 × 14px |
| Default | 36 × 20px | 16 × 16px |
| Large | 44 × 24px | 20 × 20px |

Adjust the thumb inset proportionally (2px).

---

## States

| State | Track | Thumb |
|---|---|---|
| Off | `neutral-quaternary` | Inline start |
| On | Intent fill (default `brand`) | Inline end |
| Focus | 4px `brand-soft` ring | — |
| Disabled | Muted quaternary | No slide on interaction |
| Hover (enabled) | Optional slight track darkening — subtle only |

---

## Motion

Thumb slide 150–200ms standard easing. Under `prefers-reduced-motion`, snap without the slide.

---

## Accessibility

| Requirement | Implementation |
|---|---|
| Role | Native checkbox semantics — don't use `role="switch"` unless implementing switch ARIA fully |
| Label | Wrapping `<label>` or `aria-labelledby` |
| State | `checked` reflects on/off; the visible state matches |
| Focus | Focus ring on keyboard focus — the hidden input receives focus |
| Dual labels | Still one accessible name summarizing the setting |

---

## Prohibited

- **No square track** — the toggle is always `radius-full`. This is the signature, not a preference.
- **No toggle without a label** for settings that need context.
- **No thumb smaller than 14px** on the default track without a size variant.
- **No instant state without a keyboard path** — it must respond to Space on the focused input.
- **No radio-group semantics** — one toggle equals one boolean.
- **No thumb flush against the track edge** — in the **on** state the thumb stops **2px short of the inline-end edge**, keeping the same 2px gap it has on the off side; it must never touch, sit flush to, or overflow the track edge.
- **No thumb that fills or overflows the track** — the thumb is always **smaller than the track** (diameter = track height − 4px) and keeps a **uniform 2px gap on all four sides** (top, bottom, leading, trailing) in both states; it must never be as tall as the track, bulge past it, or sit edge-to-edge.

# Tooltips — TypeUI · Charm

> **TypeUI · Charm** — supplementary text on hover, focus, or click.
> Depends on: `colors.md`, `radius.md`, `shadows.md`, `spacing.md`, `typography.md`

A tooltip is a small floating label that clarifies an icon-only control or a truncated string — supplementary only, never the home for essential instructions (those belong in visible UI or `alerts.md`). The Charm bubble keeps the signature **soft-rounded** (`radius-md`, 8px) corner and is **flat and borderless** (`elevation-none`); it comes dark (ink) by default or light for dark surfaces. It holds one short line, passes pointer events through, and never traps focus.

---

## Anatomy

| Part | Role |
|---|---|
| **Trigger** | Element receiving pointer/focus (button, icon, link) |
| **Bubble** | Floating label container |
| **Arrow** | Optional pointer toward trigger |
| **Content** | Short text (one line preferred) |

---

## Layout

| Property | Token / value |
|---|---|
| Padding | `spacing-3` horizontal, `spacing-2` vertical |
| Max width | ~240px — wrap to two lines max |
| Radius | `radius-md` |
| Shadow | `elevation-none` |
| Arrow size | 8px — matches bubble fill |
| Offset from trigger | `spacing-2` |
| Z-index | Above page content; below modals |

---

## Styles

| Style | Background | Text | Border |
|---|---|---|---|
| **Dark (default)** | `dark` | `white` | none |
| **Light** | `neutral-primary-medium` | `heading` | none |

Use the **light** style on dark triggers for contrast.

---

## Typography

| Element | Size | Weight | Line height |
|---|---|---|---|
| Content | font-size-sm | font-weight-medium | line-height-component |

Use **`font-family`** and keep copy under ~80 characters.

---

## Placement

Anchor the bubble to the trigger and flip it near a viewport edge.

| Placement | Position |
|---|---|
| top | Above trigger, centered |
| bottom | Below trigger, centered |
| left | Inline-start of trigger |
| right | Inline-end of trigger |

RTL mirrors left/right.

---

## Triggering

| Mode | When to use |
|---|---|
| **Hover + focus (default)** | Desktop icon buttons, dense toolbars |
| **Click** | Touch-primary contexts or toggled help |
| **Focus only** | Optional — show on keyboard focus without hover |

Hide on blur, Escape, or a second click (in click mode). Never trap focus inside the tooltip.

---

## Variants

### Default

A dark bubble + arrow on hover/focus of the trigger.

### Light

A light bubble for use on dark surfaces.

### Animated show/hide

A 300ms opacity fade; respect reduced-motion (instant or no animation).

### Without arrow

Bubble only — when an arrow would clip or overlap awkwardly.

---

## Motion

| Transition | Duration | Properties |
|---|---|---|
| Show / hide | 300ms | Opacity |
| Timing | ease-out | — |

---

## Accessibility

- The trigger must be keyboard focusable if the tooltip is focus-triggered.
- Use **`aria-describedby`** to link the trigger to the tooltip id when the content is supplementary.
- Never put required-field instructions only in a tooltip.
- Tooltip content doesn't receive focus (it's not a dialog).
- For an icon-only trigger, an `aria-label` on the trigger may replace the tooltip — don't double up redundantly.

---

## Prohibited

- **No elevation above `elevation-none`** — tooltips are lightweight hints, not floating panels.
- **No paragraphs or links inside a tooltip** — use a popover or modal for rich content.
- **No tooltip as the sole label** for an icon-only control.
- **No hover-only critical info on touch** without a click alternative.
- **No blocking interaction** — pointer events pass through the overlay layer where possible.
- **No raw hex or shadow strings**, and no framework data-attribute names — semantic tokens only.

# Typography Tokens — TypeUI · Charm

> The type system for **TypeUI · Charm**. Charm speaks in **Inter** for body and UI (buttons included), a **monospace (Fragment Mono)** for labels, eyebrows, ticker strips, and code, and a **geometric display sans — Circular (`font-family-serif` — the display-face slot)** — for every heading, bold (700) and tightly tracked (`letter-spacing-tightest`, -0.05em) — a friendly voice with a strong, confident display layer. A 14px control/body baseline with a disciplined heading ramp, so interfaces read sharp, engineered, and confident. Sizes, weights, line heights, letter spacing, and family stacks are literal values and the single source of truth; components reference these tokens (and color tokens from `colors.md`), never ad-hoc type settings.

**Root assumption:** `1rem = 16px` unless the product documents a different root.

**Size scale logic:** Major-second ratio (**×1.125** per step from base), rounded to whole pixels on desktop. Custom text must pick a token from the scale — never invent sizes between steps.

---

## Token naming

| Pattern | Role |
|---|---|
| `font-family` | **Primary UI family** — set once per design system (brand face + fallbacks) |
| `font-family-monospace` | Code and preformatted text only |
| `font-family-serif` | The display-face slot — every heading renders in it (a geometric sans in Charm, not a serif) |
| `font-size-{step}` | T-shirt scale (`xxs` → `10xl`, plus `hero`) |
| `line-height-{role}` | Multipliers for heading, body, component, detail, **display** |
| `font-weight-{step}` | Weight scale (`thin` → `black`) |
| `letter-spacing-{step}` | Tracking scale |

Default body: **`font-size-sm`** + **`line-height-body`** + **`font-weight-normal` (400)** + **`font-family`**.

---

## Primary font family

**`font-family` is the main typography token.** All UI surfaces use `font-family` unless a spec names `font-family-monospace` or `font-family-serif`.

| Token | Value |
|---|---|
| font-family | "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif |

**Brand typefaces for this design system:** [Inter](https://rsms.me/inter/) for body and UI; **every heading (`h1`–`h6`) renders in the display face `font-family-serif` — Circular (Circular Std / CircularXX TT), with [DM Sans](https://fonts.google.com/specimen/DM+Sans) as the bundled free stand-in until the licensed face is added — at bold (700) with tight negative tracking (`letter-spacing-tightest`, -0.05em)**; and **labels, eyebrows, and ticker text use the monospace `font-family-monospace` (Fragment Mono), often uppercase; button labels use the primary `font-family` (Inter), sentence case, never uppercase**. Load the faces in your product’s font layer; the tokens are the stacks components reference.

```
font-family   "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif
```

### Fallback stack (reference only)

| Token | Stack |
|---|---|
| font-family-fallback | system-ui, -apple-system, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif |

---

## Font size scale — desktop

Base size: **`font-size-sm` = 14px**.

| Token | rem | px |
|---|---|---|
| font-size-xxs | 0.6875rem | 11px |
| font-size-xs | 0.75rem | 12px |
| font-size-sm | 0.875rem | 14px |
| font-size-md | 1rem | 16px |
| font-size-lg | 1.125rem | 18px |
| font-size-xl | 1.25rem | 20px |
| font-size-2xl | 1.375rem | 22px |
| font-size-3xl | 1.5625rem | 25px |
| font-size-4xl | 1.75rem | 28px |
| font-size-5xl | 2rem | 32px |
| font-size-6xl | 2.25rem | 36px |
| font-size-7xl | 2.5rem | 40px |
| font-size-8xl | 2.8125rem | 45px |
| font-size-9xl | 3.125rem | 50px |
| font-size-10xl | 3.75rem | 60px |
| font-size-hero | 4.5rem | 72px |

**`font-size-hero` (72px) is the absolute maximum** for any heading or display text in the system. Nothing may exceed 72px.

---

## Font size scale — mobile

Same token names; values shift up for readability on narrow viewports.

| Token | rem | px |
|---|---|---|
| font-size-xxs | 0.8125rem | 13px |
| font-size-xs | 0.9375rem | 15px |
| font-size-sm | 1.0625rem | 17px |
| font-size-md | 1.1875rem | 19px |
| font-size-lg | 1.375rem | 22px |
| font-size-xl | 1.5rem | 24px |
| font-size-2xl | 1.6875rem | 27px |
| font-size-3xl | 1.9375rem | 31px |
| font-size-4xl | 2.125rem | 34px |
| font-size-5xl | 2.4375rem | 39px |
| font-size-6xl | 2.75rem | 44px |
| font-size-7xl | 3.0625rem | 49px |
| font-size-8xl | 3.4375rem | 55px |
| font-size-9xl | 3.875rem | 62px |
| font-size-10xl | 4.375rem | 70px |

Mobile **`font-size-hero` cap:** 4.5rem (72px) — same ceiling as desktop.

---

## Line height scale

Unitless multipliers applied to the element’s font size.

| Token | Multiplier | Used for | At 14px (`font-size-sm`) |
|---|---|---|---|
| line-height-heading | 1.2 | Headings **rendered below 52px** (section titles, page titles, card titles) | 16.8px |
| line-height-display | 1 | **Huge headings only — rendered 52px and above** (marketing hero h1, display numerals) | Matches font size |
| line-height-detail | 1.3 | Captions, metadata, helper labels | 18.2px |
| line-height-component | 1.3 | Text inside controls (buttons, tabs, chips) | 18.2px |
| line-height-body | 1.5 | Body copy, paragraphs, lists | 21px |
| line-height-code | 1.5 | Monospace blocks and inline code | 21px |

**Default body pairing:** `font-size-sm` + `line-height-body` → 14px / 21px line box.

**Line-height by heading size (mandatory):** The line-height a heading takes is driven by its **rendered font size**, with **52px** as the single cut-off:

- **Huge headings — rendered 52px or larger** (the marketing hero h1, and any display heading that actually reaches ≥ 52px) use **`line-height-display` (1)**; the tight 1:1 leading is part of the Charm marketing look.
- **Everything below 52px** — section titles, sub-section / band headings, card titles, and any heading whose largest rendered size is under 52px (e.g. a `clamp()` that maxes out at 40px) — uses **`line-height-heading` (1.2)**, never `line-height-display`. A `line-height` of 1 on a sub-52px heading crowds multi-line headings; reserve it for the genuinely huge type only.

When a heading uses a responsive `clamp()`, judge by its **maximum** rendered size: if that maximum is below 52px it is a 1.2 heading, even though it shares the display gradient / weight of the larger titles.

---

## Font weight scale

| Token | Value |
|---|---|
| font-weight-thin | 100 |
| font-weight-extra-light | 200 |
| font-weight-light | 300 |
| font-weight-normal | 400 |
| font-weight-medium | 500 |
| font-weight-semibold | 600 |
| font-weight-bold | 700 |
| font-weight-extra-bold | 800 |
| font-weight-black | 900 |

---

## Letter spacing scale

| Token | Value |
|---|---|
| letter-spacing-tightest | -0.05em |
| letter-spacing-tighter | -0.04em |
| letter-spacing-tight | -0.025em |
| letter-spacing-normal | 0em |
| letter-spacing-wide | 0.05em |
| letter-spacing-wider | 0.08em |
| letter-spacing-widest | 0.1em |

Default body tracking: **`letter-spacing-normal`**.

---

## Heading & paragraph gaps (mandatory — fixed 24px)

The vertical gap **below a heading** and **below a paragraph** is **fixed at `spacing-6` (24px)** — never more, never less — so stacked content reads as one consistent beat:

1. **Heading → what follows.** A **heading** (`h1`–`h6`, `.section-heading`, `.card__title`, or equivalent title token) immediately followed by **anything** — a paragraph or lead, a button or button group, a card, a list, an image, or any block — keeps **exactly 24px** below it.
2. **Paragraph → what follows.** A **paragraph** followed by **anything** — another paragraph, a button or button group, a card, a list, an image, or any block — keeps the **same exact 24px** below it.

| Token | Value |
|---|---|
| `spacing-6` | 24px — fixed gap below a heading, and below a paragraph, to whatever follows |

- **24px is a hard, fixed value — not a minimum.** Never exceed 24px and never collapse below it for either gap; both stacking gaps are always exactly 24px.
- Applies anywhere a heading or paragraph stacks above the next block — marketing pages, cards, hero bands, pricing intros, dashboards, and CTAs.
- Eyebrows, badges, or labels *above* a heading may use a smaller gap (`spacing-3` / 12px is typical); the **fixed 24px governs heading → next element and paragraph → next element**.
- Implement with `margin-bottom: spacing-6` on the heading and on the paragraph (or `margin-top: spacing-6` on the following element) — not with a flex `gap` other than 24px between those elements.

---

## Text formatting

| Treatment | Rule |
|---|---|
| **Bold** | Emphasis within a sentence, toasts — `font-weight-bold` or `font-weight-semibold` (button labels are `font-weight-medium`, see `buttons.md`) |
| **Italic** | Placeholder / ghost text and image captions only — not general UI copy |
| **Underline** | Links only (default or hover per link spec) — never for emphasis |
| **Strong** | Semantic importance — heavier weight |
| **Emphasis** | Semantic stress — italic where appropriate |

Capitalization: **sentence case** for UX strings unless the brief documents an exception (proper nouns, acronyms).

---

## Heading size caps (mandatory)

Semantic HTML level and visual size are independent — but these **maximum visual sizes** apply by surface:

| Surface | h1 max | h2 max | Notes |
|---|---|---|---|
| **Marketing / landing / campaign** | **font-size-hero (72px)** | font-size-9xl (50px) | Display heroes only; never above 72px |
| **Dashboard / application UI** | **font-size-4xl (28px)** | font-size-3xl (25px) | Dense product chrome — one h1 per view |
| **E-commerce (non-hero)** | font-size-4xl (28px) | font-size-3xl (25px) | Storefront hero bands may use marketing caps |
| **Widget / in-card titles** | font-size-2xl (22px) | font-size-xl (20px) | KPI and chart headers stay quiet |

**Rules:**

- **72px is the hard ceiling** for the entire system — use `font-size-hero`; do not add a larger token.
- **28px is the hard ceiling for h1 in dashboard and app UI** — use `font-size-4xl` even if larger display tokens exist.
- **Line-height by size, cut-off at 52px** — only headings **rendered 52px or larger** (e.g. the marketing hero h1) use `line-height-display` (1); **every heading below 52px**, including section titles, uses `line-height-heading` (1.2). Judge a `clamp()` heading by its maximum rendered size.
- Marketing pages must not reuse app-sized h1 tokens on hero bands; app pages must not reuse `font-size-hero` on page titles.

---

## Semantic text roles

Map roles to scale tokens + color tokens from `colors.md`. All roles use **`font-family`** unless noted.

### Application & dashboard

| Role | Family | Size (max) | Weight | Line height | Color token |
|---|---|---|---|---|---|
| app-h1 | font-family-serif | font-size-4xl (28px) | font-weight-bold | line-height-heading | `heading` |
| app-h2 | font-family-serif | font-size-3xl (25px) | font-weight-semibold | line-height-heading | `heading` |
| app-h3 | font-family-serif | font-size-2xl (22px) | font-weight-semibold | line-height-heading | `heading` |
| title | font-family-serif | font-size-xl (20px) | font-weight-semibold | line-height-heading | `heading` |
| widget-title | font-family-serif | font-size-xl (20px) | font-weight-semibold | line-height-heading | `heading` |
| body | font-family | font-size-sm (14px) | font-weight-normal | line-height-body | `body` |
| body-small | font-family | font-size-xs (12px) | font-weight-normal | line-height-body | `body` |
| label | font-family | font-size-xs (12px) | font-weight-medium | line-height-component | `heading` |
| caption | font-family | font-size-xxs (11px) | font-weight-normal | line-height-detail | `body-subtle` |
| code-inline | font-family-monospace | font-size-xs (12px) | font-weight-normal | line-height-code | `body` |

### Marketing & landing

| Role | Family | Size (max) | Weight | Line height | Color token |
|---|---|---|---|---|---|
| hero-h1 | font-family-serif | font-size-hero (72px) | font-weight-bold | line-height-display | `heading` |
| display | font-family-serif | font-size-10xl (60px) | font-weight-bold | line-height-display | `heading` |
| section-heading | font-family-serif | font-size-7xl (40px) | font-weight-bold | line-height-heading | `heading` |
| lead | font-family | font-size-lg (18px) | font-weight-normal | line-height-body | `body` |
| body | font-family | font-size-sm (14px) | font-weight-normal | line-height-body | `body` |
| overline | font-family-monospace (uppercase) | font-size-xs (12px) | font-weight-medium | line-height-detail | letter-spacing-wider | `body-subtle` |

---

## Specialized font families

| Token | Stack | When |
|---|---|---|
| font-family-monospace | "Fragment Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Roboto Mono", "Ubuntu Mono", "Courier New", monospace | Code blocks, inline code, **and the signature label/eyebrow/ticker treatment (often uppercase, wider tracking) — button labels are not monospace; they use the primary `font-family` (Inter)** |
| font-family-serif | "Circular Std" (Circular), "CircularXX TT", "DM Sans", ui-sans-serif, sans-serif | **Every heading (`h1`–`h6`)** — the display voice; also editorial accents |

---

## Flat registry (desktop)

```
font-family                "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif
font-family-monospace      "Fragment Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Roboto Mono", "Courier New", monospace
font-family-serif          "Circular Std", "CircularXX TT", "DM Sans", ui-sans-serif, sans-serif   (headings)
font-size-xxs              0.6875rem   (11px)
font-size-xs               0.75rem     (12px)
font-size-sm               0.875rem    (14px)
font-size-md               1rem        (16px)
font-size-lg               1.125rem    (18px)
font-size-xl               1.25rem     (20px)
font-size-2xl              1.375rem    (22px)
font-size-3xl              1.5625rem   (25px)
font-size-4xl              1.75rem     (28px)
font-size-5xl              2rem        (32px)
font-size-6xl              2.25rem     (36px)
font-size-7xl              2.5rem      (40px)
font-size-8xl              2.8125rem   (45px)
font-size-9xl              3.125rem    (50px)
font-size-10xl              3.75rem     (60px)
font-size-hero             4.5rem      (72px)
line-height-heading        1.2
line-height-display        1
line-height-detail         1.3
line-height-component      1.3
line-height-body           1.5
line-height-code           1.5
font-weight-normal         400
font-weight-medium         500
font-weight-semibold       600
font-weight-bold           700
letter-spacing-normal      0em
```

---

## Long-form content (prose)

For article/rich-text bodies (CMS output, docs, help content) map these elements to tokens. All use `font-family` unless noted.

| Element | Size | Weight | Line height | Color | Notes |
|---|---|---|---|---|---|
| Prose paragraph | font-size-md (16px) | font-weight-normal | line-height-body | `body` | `spacing-4` between paragraphs |
| Prose h2 / h3 | font-size-3xl / 2xl | font-weight-semibold | line-height-heading | `heading` | `spacing-6` above, `spacing-3` below |
| Lead paragraph | font-size-lg (18px) | font-weight-normal | line-height-body | `body` | Intro sentence under a heading |
| Unordered / ordered list | font-size-md | font-weight-normal | line-height-body | `body` | `spacing-5` inline-start inset; disc / decimal markers; `spacing-2` between items |
| List with icon markers (landing check lists) | font-size-md | font-weight-medium (500) | line-height-body | `heading` | **16px leading check icon in the `brand` color, `spacing-3` (12px) gap between icon and text** — always these values on landing-page check lists; no disc marker |
| Description list term | font-size-md | font-weight-semibold | line-height-body | `heading` | Definition below uses `body` |
| Blockquote | font-size-lg (18px), display face `font-family-serif` (the display voice, like headings) | font-weight-medium | line-height-body | `heading` | 4px (`spacing-1`) inline-start accent border `default-medium`; `spacing-4` inline-start padding; italic optional |
| Inline link in prose | inherit | font-weight-medium | inherit | `fg-brand` | Underline on hover |
| Standalone link (nav, footer, "Learn more") | font-size-md (16px) max | font-weight-medium | inherit | per surface | **Never 18px or 20px** — links cap at 16px even when the surrounding copy is larger; trailing arrow icons match the 16px size |
| Image caption | font-size-sm (14px) | font-weight-normal | line-height-detail | `body-subtle` | Centered under figure; italic allowed |
| Horizontal rule | — | — | — | `default` | 1px full-width divider; `spacing-8` vertical margin |

Prose blocks may step up one size on large viewports (lead and headings) without exceeding the heading caps above.

### Where hover-underline belongs — and where it is forbidden

Underline-on-hover is a **content-link** signal, not a generic hover effect. It says "this word in a sentence is a link". Apply it only where the link is a *run of text* the eye must be told is clickable:

- **Underline on hover — allowed:** links inside prose and paragraphs, footer link lists and legal text, a card's title or product name, and inline "Learn more" links.
- **Never underline on hover — navigation.** **Links in a navbar or a sidebar must never gain an underline on hover** — not the top-level nav items, not the sidebar/rail items, not a nav account/login link, not the items inside a nav dropdown or menu. Navigation already signals hover through **color and/or a background/fill change** (and its active state through color + fill). An underline on a nav item reads as a stray inline link, breaks the calm of the bar, and shifts the text's optical baseline. This holds on **every** surface — the marketing navbar, the storefront navbar, the application top bar, the sidebar, and the icon rails.
- **Never underline on hover — labels inside a hit-target tile or card.** When the **whole tile, card, or cell is the clickable target** (an icon-tile category grid, a feature card, a stat tile, a product cell), the **tile itself is the hover affordance** — it shifts its fill, border, or elevation. The label inside it is *not* a separate link and **must not underline on hover**; doing so duplicates the signal and makes the label read as an inline text link floating inside the card.

---

## Usage by surface type

| Surface | Typical tokens |
|---|---|
| Marketing hero h1 | hero-h1 → font-size-hero (≤72px) + line-height-display |
| Marketing section title | section-heading → font-size-7xl + line-height-heading (below the 52px cut-off) |
| Marketing stat / proof numeral | font-size-6xl (36px), font-family-monospace, font-weight-bold, line-height-display, tabular figures |
| App / dashboard page h1 | app-h1 → font-size-4xl (≤28px) |
| Card / widget title | widget-title → font-size-xl |
| Paragraphs | body → font-size-sm |
| Form labels | label → font-size-xs |
| Buttons (labeled) | font-size-sm + font-weight-medium + line-height-component |
| Badges, chips | font-size-xs or font-size-xxs |
| Code | code-inline |

---

## Prohibited

- **No em-dash or en-dash in copy.** The em-dash (`—`) and en-dash (`–`) are banned from every string a user reads: headings, leads, body, labels, buttons, badges, nav, and microcopy. Rewrite the sentence with a comma, a period, a colon, or parentheses. A hyphen (`-`) is allowed only inside compound words (like `async-first`), never as a spaced sentence break or a trailing flourish.
- **No raw px/rem font sizes in components** — use `font-size-*` tokens from the scale.
- **No numeric size names** (`font-size-100`, `font-size-700`, etc.) — use the t-shirt scale only.
- **No sizes above font-size-hero (72px)** — 72px is the system maximum for any text.
- **No app/dashboard h1 above font-size-4xl (28px)** — even when marketing tokens exist in the scale.
- **No marketing hero sizes on app chrome** — dashboard nav, settings, and data surfaces use app role tokens only.
- **No arbitrary line-height** — use `line-height-heading`, `line-height-display`, `line-height-body`, `line-height-component`, or `line-height-detail`.
- **No `line-height-display` on sub-52px headings** — only headings rendered **52px or larger** use `line-height-display` (1); every heading below 52px (section titles included) uses `line-height-heading` (1.2). Judge `clamp()` headings by their maximum rendered size.
- **No underline for emphasis** — underline is for links only.
- **No underline on hover for navbar or sidebar links — forbidden.** Nav items, sidebar/rail items, nav login/account links, and items inside a nav menu or dropdown **never** take a `text-decoration` on hover, on any surface (marketing navbar, storefront navbar, app top bar, sidebar, rails). Navigation hover is expressed with **color and/or a background/fill change** only.
- **No underline on hover for a label inside a clickable tile or card** — if the tile/card/cell is the hit target, it owns the hover state (fill, border, or elevation shift). The label inside it is not an inline link and must not underline.
- **No italic on general UI copy** — captions and placeholders only.
- **No raw font-family stacks in components** — use `font-family` or `font-family-monospace`.
- **No paragraph width beyond ~50–120 characters** without layout constraint.
- **No fully justified body text** — left-align paragraphs.
- **No negative letter-spacing on body paragraphs** — tight tracking is for headings and overlines only.
