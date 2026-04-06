# Design System: Titan (Brand Theme)

## 1. Visual Theme & Atmosphere

Titan is the design system powering Audiense's SaaS product suite — a data-dense, dashboard-first platform for audience intelligence, social analytics, and marketing insights. The Brand theme projects a warm, modern, and confident identity built on a white canvas (`#ffffff`) with **Pulse Gold** (`#FFC240`) as the singular primary accent and **Ground** (`#6E5947`) as the rich neutral tone for interactive elements.

The typography uses **Poppins** — a geometric sans-serif that's approachable yet professional, operating in three weight stops: 400 (Regular) for body copy, 500 (Medium) for emphasis and interactive labels, and 600 (SemiBold) for headings and strong hierarchy. No thin weights are used — the type always carries medium confidence.

What distinguishes Titan Brand is its deliberate separation of color intent: **Pulse gold only appears on primary CTA buttons, form controls (checkbox, radio, toggle), and tab selected states.** Everything else — text, borders, menus, tables, pagination, inputs, sidebar — uses the **neutral palette** (black and steel families). This prevents "brand overload" and keeps the interface scannable even in data-heavy dashboards.

The system uses a **steel-tinted shadow family** (`#6d838b` at 10% opacity) across five elevation levels, creating a cool, professional lift. Combined with a compact border-radius scale (4px–20px) and a generous spacing scale (2px–160px), the interface feels tight, structured, and efficient — designed for analysts who scan, compare, and act on data.

**Key Characteristics:**
- White canvas (`#ffffff`) with Pulse Gold (`#FFC240`) as singular brand accent
- Ground (`#6E5947`) for secondary/tertiary buttons, tabs, sidebar active, form controls
- Poppins font family — geometric, 400/500/600 weight stops only
- Steel-tinted shadows (`#6d838b1a`) — cool, professional elevation
- Compact radius scale: 4px (xs), 8px (s), 12px (m), 16px (l), 20px (xl)
- 16-column grid layout, max-width 1920px
- Data-first dashboard aesthetic — density over decoration
- Steel palette for all text: `steel-900` titles, `steel-800` body, `steel-600` secondary
- Ocean Blue (`#5C98F8`) for links — always
- No focus ring in Brand theme (transparent)

## 2. Color Palette & Roles

### Primary Brand
- **Pulse Gold 600** (`#FFC240`): `--button-primary` — primary CTA button background
- **Pulse Gold 500** (`#FFC954`): `--button-primary-hover` — primary button hover
- **Pulse Gold 700** (`#D99B29`): `--button-primary-active` — primary button pressed
- **Ground 900** (`#2F261E`): `--text-on-primary` — label on pulse backgrounds
- **Ground 600** (`#6E5947`): Secondary/tertiary button accents, tab selected border, sidebar active accent, toggle selected

### Neutral Palette (Black family — used everywhere except brand surfaces)
- **Black 900** (`#1f1f1f`): `--text-primary` — primary text, headings
- **Black 800** (`#3a3a3a`): `--text-icon-secondary`, `--label-color` — secondary icons, labels, input text
- **Black 700** (`#555555`): `--text-primary-active`, sidebar item hover text
- **Black 400** (`#a6a6a6`): `--input-placeholder-text` — placeholder text
- **Black 300** (`#c1c1c1`): `--border-interactive`, `--input-stroke`, `--select-button-border` — interactive borders
- **Black 200** (`#dcdcdc`): `--border`, `--background-disabled`, `--label-background`, `--pill-background` — default borders, disabled bg
- **Black 100** (`#f7f7f7`): `--sidebar-slot-item-bg-hover` — hover backgrounds

### Steel Palette (text and copy system)
- **Steel 900** (`#2c3438`): `var(--copy-slot-title)` — titles, headings
- **Steel 800** (`#414f53`): `var(--copy-slot-body)`, `--menu-color` — body text
- **Steel 700** (`#57696f`): `--menu-item-icon` — icons in menus
- **Steel 600** (`#6d838b`): `var(--copy-slot-secondary)`, `var(--copy-slot-muted)`, `--avatar-background` — secondary text, captions, avatars
- **Steel 500** (`#85989e`): `--table-sort-icon-default` — subtle UI elements
- **Steel 300** (`#b6c1c5`): `--divider-strong` — strong dividers
- **Steel 200** (`#ced6d8`): `--divider` — standard dividers
- **Steel 100** (`#e7eaec`): `--navbar-border-color`, `--menu-item-hover` — navbar border, menu item hover

### Interactive
- **Ocean 500** (`#5C98F8`): `--link-color`, `--link-icon-color` — all links
- **Ocean 700** (`#2C67C5`): `--link-visited-color` — visited links
- **Information 600** (`#3981F7`): `--input-stroke-focus-visible` — focus visible ring on inputs

### System Feedback
- **Success 600** (`#4CB076`): `--text-icon-success` — success icon
- **Warning 600** (`#EDAA3B`): `--text-icon-warning` — warning icon
- **Error 600** (`#C62F38`): `--text-error-primary`, `--error-button-primary` — error text, destructive buttons
- **Information 600** (`#3981F7`): `--text-icon-information` — info icon
- **Disabled 500** (`#8b8b8b`): `--text-disabled`, `--text-icon-disabled` — disabled text and icons

### Ground Palette (used only for interactive controls)
- **Ground 100** (`#F1EFED`): `--button-secondary`, `--tab-selected-background`, `--sidebar-slot-item-bg-active`
- **Ground 200** (`#E3DDD9`): `--button-secondary-hover`, `--button-group-selected-background`
- **Ground 300** (`#C6BBB3`): `--button-secondary-active`, `--toggle-background-hover`
- **Ground 400** (`#A9998D`): `--toggle-background`, `--button-group-border`
- **Ground 700** (`#59483A`): `--checkbox-selected-background`, `--toggle-selected-background`

### Segment Colors (data visualization — 25 hues)
Orange (`#EC672C`), Red (`#EA4338`), Tomato (`#C62F38`), Magenta (`#B92B63`), Pink (`#EA338F`), Purple (`#902CF5`), Blueberry (`#4F4DD7`), Violet (`#7F5DF6`), Ocean (`#3981F7`), Indigo (`#4C97C7`), Turquoise (`#35C0CB`), Aquamarine (`#56AAA0`), Avocado (`#33754F`), Teal (`#4CB076`), Green (`#69DE4F`), Lime (`#BDEC4A`), Yellow (`#F7CE4A`), Mango (`#EDAA3B`), Brown (`#AF604B`), Cacao (`#65201F`), Pomegranate (`#F74F25`). Each with 100–900 scale. Used only in charts, graphs, and segment badges — never as text color for body copy.

### Surface & Background
- **White 900** (`#ffffff`): `--background-body`, `--background` — page canvas, card surfaces, menu/input/tab backgrounds
- **Overlay** (`#70707066`): `--overlay-color` — modal overlay backdrop

## 3. Typography Rules

### Font Family
- **Primary**: `Poppins`, fallback: `sans-serif`
- CSS token: `var(--font-audiense)`
- Rule: Apply `font-family: var(--font-audiense), sans-serif` to root container

### Size Scale

| Token | Size | CSS Variable |
|-------|------|-------------|
| `font-size-s` | 12px | `var(--font-size-s)` |
| `font-size-m` | 14px | `var(--font-size-m)` |
| `font-size-l` | 16px | `var(--font-size-l)` |
| `font-size-xl` | 20px | `var(--font-size-xl)` |
| `font-size-2xl` | 24px | `var(--font-size-2xl)` |
| `font-size-3xl` | 32px | `var(--font-size-3xl)` |
| `font-size-4xl` | 46px | `var(--font-size-4xl)` |

### Line Height Scale

| Token | Value |
|-------|-------|
| `font-leading-s` | 16px |
| `font-leading-m` | 18px |
| `font-leading-l` | 20px |
| `font-leading-xl` | 22px |
| `font-leading-2xl` | 24px |
| `font-leading-3xl` | 28px |
| `font-leading-4xl` | 36px |
| `font-leading-5xl` | 50px |

### Hierarchy

| Role | Token | Size | Weight | Line Height | Notes |
|------|-------|------|--------|-------------|-------|
| Heading 2XL | `heading-2xl-600` | 46px | 600 | 50px | Hero/page headings |
| Heading XL | `heading-xl-600` | 32px | 600 | 36px | Section headings |
| Heading L | `heading-l-600` | 32px | 600 | 36px | Large section headings |
| Heading M | `heading-m-600` | 24px | 600 | 28px | Card/panel headings |
| Heading S | `heading-s-600` | 16px | 600 | 20px | Subheadings |
| Heading XS 600 | `heading-xs-600` | 14px | 600 | 18px | Bold inline headings |
| Heading XS 500 | `heading-xs-500` | 14px | 500 | 18px | Medium inline headings |
| Body L | `body-l-500` | 16px | 500 | 20px | Emphasized body |
| Body M 400 | `body-m-400` | 14px | 400 | 18px | Standard body text |
| Body M 500 | `body-m-500` | 14px | 500 | 18px | Menu items, medium body |
| Body M 600 | `body-m-600` | 14px | 600 | 18px | Strong body emphasis |
| Body S 400 | `body-s-400` | 12px | 400 | 16px | Captions, descriptions |
| Body S 600 | `body-s-600` | 12px | 600 | 16px | Bold captions |
| Body S 500 CT | `body-s-500-ct` | 12px | 500 | 16px | Capitalize transform |
| Button | `text-button` | 16px | 500 | 18px | Button labels |
| Link | `text-link` | 12px | 400 | 16px | Underline decoration |
| Input | `text-input` | 16px | 400 | 22px | Input field text |
| Text Area | `text-area` | 16px | 400 | 24px | Multiline input text |

### Copy Color Rules (MANDATORY)

| Text type | Token | Resolves to |
|-----------|-------|-------------|
| Titles / headings | `var(--copy-slot-title)` | steel-900 (`#2c3438`) |
| Body / descriptions | `var(--copy-slot-body)` | steel-800 (`#414f53`) |
| Secondary / helper | `var(--copy-slot-secondary)` | steel-600 (`#6d838b`) |
| Muted / captions | `var(--copy-slot-muted)` | steel-600 (`#6d838b`) |
| Disabled | `var(--copy-slot-disabled)` | disabled-500 (`#8b8b8b`) |
| Links (always) | `var(--link-slot-color)` | ocean-500 (`#5C98F8`) |

### Principles
- **Three weight stops only**: 400, 500, 600. No 300, no 700. Clean and confident.
- **Steel text always**: Body copy, headings, descriptions use steel palette — never brand colors.
- **Links are ocean**: All links use `ocean-500` — the only text that may use a non-steel color (besides error and primary button labels).
- **No brand text**: Never use pulse, ground, pomegranate, aquamarine, or segment colors for body copy.

## 4. Component Stylings

### Buttons

**Primary**
- Background: Pulse Gold 600 (`#FFC240`)
- Label: Ground 900 (`#2F261E`)
- Hover: Pulse Gold 500 (`#FFC954`)
- Pressed: Pulse Gold 700 (`#D99B29`)
- Disabled bg: Ground 200 (`#E3DDD9`)
- Radius: 8px (`rounded-s`)
- Padding: 10px 16px
- Border: none (no border/stroke/outline ever)
- Label typography: `text-button` (Poppins 16px/18px weight 500)

**Secondary**
- Background: Ground 100 (`#F1EFED`)
- Label: Ground 900 (`#2F261E`)
- Hover: Ground 200 (`#E3DDD9`)
- Pressed: Ground 300 (`#C6BBB3`)
- Radius: 8px

**Tertiary**
- Background: White 900 (`#ffffff`)
- Label: Ground 900 (`#2F261E`)
- Hover: Ground 100 (`#F1EFED`)
- Pressed: Ground 200 (`#E3DDD9`)
- Radius: 8px

**Text Button**
- Background: transparent
- Label: Ground 900 (`#2F261E`)
- Low emphasis, contextual

**Destructive Primary**
- Background: Error 600 (`#C62F38`)
- Label: White
- Hover: Error 700 (`#9E252C`)
- Pressed: Error 800 (`#761A21`)

**Icon Button (Primary/Secondary)**: radius `9999px` (full circle)
**Icon Button (Base/Base-L)**: square with padding `8px`/`10px`, icon `16px`/`24px`

### Navbar
- Height: 70px, full width, max-width 1920px
- Background: White 900 (`#ffffff`)
- Bottom border: 1px `steel-100` (`#e7eaec`)
- Left group: Grid icon button (Neutral Base-L) + brand lockup image (max 30px height)
- Right group: Action icon buttons (Neutral Base) + user avatar (40x40) + chevron menu trigger
- Left padding: 24px, right padding: 32px
- Gaps: 4px (lockup-button), 24px (between groups), 6px (avatar-chevron)

### Menu
- Background: White 900, shadow: `elevation-2` (0 5px 16px `#6d838b1a`)
- Radius: 12px (`rounded-m`)
- Min width: 230px, max width: 330px
- Item height: 40px, radius: 8px, padding: 10px 12px
- Item hover: Steel 100 (`#e7eaec`), pressed: Steel 200 (`#ced6d8`), selected: Steel 300 (`#b6c1c5`)
- Item label: `body-m-500` (Poppins 14px/18px 500)
- Destructive item: Error 600 text, Error 100 hover bg
- Divider: Steel 200, 1px
- Max 1 level submenu nesting

### Tabs
- Background: White 900
- Tab text: Ground 600 (`#6E5947`)
- Tab selected text: Ground 900 (`#2F261E`)
- Tab selected border: Ground 600 (`#6E5947`)
- Tab selected bg: Ground 100 (`#F1EFED`)
- Hover bg: same as selected bg
- Disabled text: Disabled 500 (`#8b8b8b`)

### Dialog
- Overlay: `#70707066` backdrop
- Container: White bg, rounded, elevation shadow, padding from tokens
- Title + body required, optional illustration/close button/footer actions
- Focus trapped while open, returns to trigger on close

### Table (Borderless)
- Header border bottom: Black 700 (`#555555`) — strong separator
- Cell border bottom: Black 200 (`#dcdcdc`) — light separator
- Actionable row hover: Black 200 (`#dcdcdc`)
- Sort icon default: Steel 500 (`#85989e`), hover: text-secondary, active: text-primary-active
- Row action menu follows standard Menu component

### Select
- Trigger border: Black 300 (`#c1c1c1`)
- Trigger text: Black 700 (`#555555`)
- Chevron: Black 900 (`#1f1f1f`)
- Popover follows Menu styling
- Listbox item focused: Black 100, pressed: Black 200, selected: Black 200

### Pagination
- Color: Black 900 (`#1f1f1f`)
- Page button hover bg: `#7070701a` (Black 10%)
- Page button selected bg: `#70707066` (Black 40%)
- Height: 36px, no border/stroke/outline
- Previous disabled on first page, next disabled on last

### Breadcrumb
- Interactive items: linked, with hover/pressed/focus-visible states
- Current item: read-only, `aria-current="page"`
- Separator between items
- Gap: 8px (`spacing-2xs`), margin bottom: 16px (`spacing-m`)

### Inputs
- Background: White 900
- Stroke: Black 300 (`#c1c1c1`), hover: Black 900, focus: Black 800
- Focus visible: Information 600 (`#3981F7`)
- Error stroke: Error 700 (`#9E252C`)
- Placeholder: Black 400 (`#a6a6a6`)
- Field text: Black 800 (`#3a3a3a`)
- Disabled: Disabled 500 text, Disabled 500 stroke

### Checkbox / Radio
- Border: Ground 600 (`#6E5947`)
- Selected bg: Ground 700 (`#59483A`)
- Checkmark: White 900
- Size: 20px
- Error border: Error 600

### Toggle / Switch
- Background: Ground 400, hover: Ground 300
- Selected: Ground 700, hover: Ground 600
- Ball: White 900
- Disabled: Disabled 200

### Sidebar
- Border: Black 200
- Item text: Black 700, hover text: Black 900
- Item hover bg: Black 100
- Active item text: Ground 900, active bg: Ground 100
- Active accent border: Ground 600
- Section header: Black 500

### Avatar
- Background: Steel 600 (`#6d838b`)
- Text: White 900
- Size: 40x40

### Tooltip
- Background: Black 800 (`#3a3a3a`)

### Labels / Pills
- Label text: Black 800, label bg: Black 200
- Pill bg: Black 200

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| `spacing-5xs` | 2px |
| `spacing-4xs` | 4px |
| `spacing-3xs` | 6px |
| `spacing-2xs` | 8px |
| `spacing-xs` | 10px |
| `spacing-s` | 12px |
| `spacing-m` | 16px |
| `spacing-l` | 24px |
| `spacing-xl` | 32px |
| `spacing-2xl` | 40px |
| `spacing-3xl` | 48px |
| `spacing-4xl` | 64px |
| `spacing-5xl` | 80px |
| `spacing-6xl` | 96px |
| `spacing-7xl` | 160px |

### Grid System
- **Columns**: 16
- **Max width**: 1920px
- **Container**: `display: grid; grid-template-columns: repeat(16, 1fr); gap: var(--layout-grid-gap); max-width: 1920px; margin: 0 auto;`
- **Span rule**: A block occupying "4 columns" = `grid-column: span 4`. Spans per row must not exceed 16.
- **Responsive**: 1920px > 1440px > 1280px breakpoints

### Whitespace Philosophy
- **Dashboard density**: Titan favors compact, information-dense layouts. Spacing is functional, not decorative — every pixel serves scanning and comparison.
- **Card rhythm**: Cards use consistent internal padding (`spacing-m` to `spacing-l`) and external gap (`spacing-m`).
- **Section separation**: Major sections use `spacing-xl` to `spacing-3xl` vertical gaps.
- **Navbar fixed height**: 70px is sacred — no variation.

### Border Radius Scale

| Token | Value | Use |
|-------|-------|-----|
| `rounded-xs` | 4px | Small elements, tags |
| `rounded-s` | 8px | Buttons, menu items, inputs, select |
| `rounded-m` | 12px | Menu container, cards |
| `rounded-l` | 16px | Large containers |
| `rounded-xl` | 20px | Hero/large card containers |
| `9999px` | Full circle | Icon button primary/secondary, toggle ball |

### Border Width Scale

| Token | Value | Use |
|-------|-------|-----|
| `stroke-s` | 1px | Default borders, dividers, navbar bottom |
| `stroke-m` | 2px | Emphasis borders |
| `stroke-l` | 3px | Strong emphasis |
| `stroke-xl` | 4px | Active/selected indicators |

## 6. Depth & Elevation

All shadows use steel-600 at 10% opacity (`#6d838b1a`) for a cool, professional tint.

| Level | Treatment | Use |
|-------|-----------|-----|
| Elevation 0 | `0 0 8px 0 #6d838b1a` | Subtle surface lift, cards at rest |
| Elevation 1 | `0 4px 12px 0 #6d838b1a` | Cards on hover, raised surfaces |
| Elevation 2 | `0 5px 16px 0 #6d838b1a` | Menus, popovers, select dropdowns |
| Elevation 3 | `0 6px 20px 0 #6d838b1a` | Dialogs, modals |
| Elevation 4 | `0 7px 24px 0 #6d838b1a` | Maximum elevation — floating panels |

Each level also has `-left` and `-right` variants for directional shadows (sidebars, drawers).

**Shadow Philosophy**: Titan uses a single-layer, steel-tinted shadow system. Unlike warm multi-layer approaches, Titan's shadows are mono-layer with increasing blur and Y-offset, using a desaturated blue-gray tint (`steel-600` base). This creates a cool, clinical precision appropriate for data dashboards — the shadow says "professional tool", not "lifestyle app".

## 7. Do's and Don'ts

### Do
- Use steel-family tokens for ALL text (`--copy-slot-title`, `--copy-slot-body`, `--copy-slot-secondary`)
- Use Pulse Gold only for primary CTA buttons and form control accents (checkbox, radio, toggle)
- Use Ground palette for secondary/tertiary buttons, tabs selected, sidebar active state
- Use Ocean 500 for links — always, no exceptions
- Use Poppins at weights 400/500/600 only
- Use the token naming system (`var(--button-primary)`, `var(--text-primary)`) — never raw hex in production
- Use `border: none` on all button variants and pagination controls
- Use elevation tokens for all shadows — never ad-hoc `box-shadow`
- Cover all states: default, hover, pressed, disabled, focus-visible (where applicable)
- Include empty, loading, and error states in every view
- Use `titan-compositions` components first, then `component-specs + tokens`, then ask before custom HTML/CSS

### Don't
- Don't use brand/accent colors (pulse, ground, pomegranate, aquamarine, blueberry, orange) as text color for body copy, descriptions, or captions
- Don't use Red/Error tokens for anything except error and destructive states
- Don't use gradient text, glassmorphism, cyan-on-dark, or purple-blue gradient aesthetics ("AI slop")
- Don't use font weights 300 or 700 — stick to 400/500/600
- Don't add borders/strokes/outlines to button or pagination containers
- Don't nest shadow containers (no card-inside-card with both having elevation)
- Don't center-everything layouts — Titan is left-aligned, data-dense, scannable
- Don't make every button primary — use the hierarchy (primary > secondary > tertiary > text-button)
- Don't use `--color-primary-*` tokens — use semantic theme tokens instead
- Don't invent custom CSS classes when a Titan composition or token exists
- Don't use gray text on colored backgrounds

## 8. Responsive Behavior

### Grid Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Large Desktop | >1440px | Full 16-column grid, max-width 1920px |
| Desktop | 1280–1440px | 16-column grid, standard dashboard |
| Tablet | 768–1280px | Columns collapse, sidebar may overlay |
| Mobile | <768px | Single column, stacked layout |

### Navbar Behavior
- Full width at all breakpoints, 70px height always
- Above 1920px: navbar expands edges, content stays centered
- Groups (left/right) maintain structure at all widths

### Table Behavior
- Horizontal scroll for wide tables in narrow viewports
- Column priority: keep identity + primary metric columns visible

### Sidebar Behavior
- Visible at desktop breakpoints
- Collapses to overlay/drawer on tablet and below

### Touch Targets
- Minimum 40px for interactive elements (buttons, menu items)
- Checkbox/Radio: 20px control + adequate click area
- Pagination page buttons: 36px height minimum

## 9. Agent Prompt Guide

### Quick Color Reference
- Background: White 900 (`#ffffff`)
- Text primary: Black 900 (`#1f1f1f`) — via `var(--text-primary)`
- Text secondary: Black 900 (`#1f1f1f`) — via `var(--text-secondary)`
- Copy title: Steel 900 (`#2c3438`) — via `var(--copy-slot-title)`
- Copy body: Steel 800 (`#414f53`) — via `var(--copy-slot-body)`
- Copy secondary: Steel 600 (`#6d838b`) — via `var(--copy-slot-secondary)`
- Link: Ocean 500 (`#5C98F8`) — via `var(--link-color)`
- Brand accent: Pulse Gold 600 (`#FFC240`) — via `var(--button-primary)`
- Button label: Ground 900 (`#2F261E`) — via `var(--text-on-primary)`
- Secondary button bg: Ground 100 (`#F1EFED`)
- Border: Black 200 (`#dcdcdc`) — via `var(--border)`
- Divider: Steel 200 (`#ced6d8`) — via `var(--divider)`
- Error: Error 600 (`#C62F38`)
- Success: Success 600 (`#4CB076`)
- Warning: Warning 600 (`#EDAA3B`)
- Disabled: Disabled 500 (`#8b8b8b`)

### Example Component Prompts
- "Create a primary button: Pulse Gold 600 bg (#FFC240), Ground 900 label (#2F261E), 8px radius, Poppins 16px weight 500, 10px 16px padding, no border. Hover: Pulse 500. Pressed: Pulse 700."
- "Design a navbar: 70px height, white bg, 1px steel-100 bottom border. Left: grip icon button (neutral base-L) + brand lockup (max 30px height). Right: action icon buttons + 40x40 avatar + chevron-down button. Left pad 24px, right pad 32px."
- "Build a menu dropdown: white bg, 12px radius, elevation-2 shadow. Items: 40px height, 8px radius, Poppins 14px weight 500. Hover: steel-100 bg. Destructive item: error-600 text, error-100 hover bg. Min width 230px, max 330px."
- "Create a data table: no outer border. Header row: bold separator (black-700 bottom). Data rows: light separator (black-200 bottom). Row hover: black-200 bg. Sort icons: steel-500 default, secondary text hover."
- "Design a card: white bg, 12px radius, elevation-0 shadow. Header: Poppins 14px 600 steel-900. Body: Poppins 14px 400 steel-800. Padding: 16px. Links always ocean-500."

### Iteration Guide
1. Start with white canvas — Pulse Gold and Ground only appear on interactive elements
2. Text is always steel palette: 900 for titles, 800 for body, 600 for secondary
3. Links are always Ocean 500 — the only non-steel text color (besides error and CTA labels)
4. Primary button: Pulse Gold bg + Ground 900 label
5. Secondary/tertiary buttons: Ground palette bg + Ground 900 label
6. Borders and dividers: Black 200 (default) and Steel 200 (dividers)
7. Shadows: steel-tinted, single-layer, increasing by level (0–4)
8. Radius: 8px for most components, 12px for containers/menus
9. Always use Titan tokens (`var(--token)`) — never raw hex values in production
10. Font: Poppins, weights 400/500/600 only — no thin, no bold beyond semibold
