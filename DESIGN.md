# Design System: Titan (Audiense Theme)

## 1. Visual Theme & Atmosphere

Titan powers Audiense SaaS interfaces: dense analytical dashboards, data tables, filters, and reporting flows where clarity and speed are more important than decoration.

The Audiense theme uses a white canvas (`#ffffff`) with a strict **single-primary-CTA** pattern:
- **Pomegranate** is for the main CTA only (max one per screen).
- **Steel** is for the rest of interaction (secondary buttons, icon buttons, menu/select/table states).
- **Ocean-500** is always the link color.

Typography is `Poppins` (via `--font-audiense`) with 400/500/600 as the practical working weights. Layout is structured and scan-friendly: 16-column grid, compact spacing rhythm, subtle steel-tinted elevation.

**Key Characteristics:**
- White-first surfaces (`#ffffff`) with low visual noise
- Single-primary-CTA rule using pomegranate (`#F74F25` family)
- Steel-centered interaction model for everything non-primary
- Ocean links only (`#5C98F8`)
- Poppins across all themes (no theme-specific fonts)
- Data-first hierarchy (table/card/filter centric)
- Consistent token-driven spacing, radius, and elevation

## 2. Color Palette & Roles

### Primary CTA (Pomegranate family)
- **Pomegranate 600** (`#F74F25`): `--button-primary`
- **Pomegranate 500** (`#F96B47`): `--button-primary-hover`
- **Pomegranate 700** (`#E3370B`): `--button-primary-active`
- **On primary** (`#ffffff`): `--text-on-primary`

### Core interaction (Steel family)
- **Steel 900** (`#2c3438`): active/strong text (`--text-primary-active`)
- **Steel 800** (`#414f53`): body/dense text contexts
- **Steel 700** (`#57696f`): `--text-primary`, tab border selected, selected checkbox/radio/toggle
- **Steel 600** (`#6d838b`): `--text-secondary`, icon secondary, avatar bg
- **Steel 500** (`#85989e`): interactive border emphasis (`--border-interactive`)
- **Steel 400** (`#9eacb2`): toggle neutral background
- **Steel 300** (`#b6c1c5`): input/select border, pressed states
- **Steel 200** (`#ced6d8`): global border, row separator
- **Steel 100** (`#e7eaec`): hover surfaces

### Neutral support
- **White 900** (`#ffffff`): page/card/menu/input/select backgrounds
- **Black 200** (`#dcdcdc`): disabled background token
- **Disabled 500** (`#8b8b8b`): disabled text/icons

### Links and info
- **Ocean 500** (`#5C98F8`): `--link-color`, `--link-icon-color`
- **Ocean 700** (`#2C67C5`): visited links
- **Information 600** (`#3981F7`): focus-visible input/control borders

### Feedback
- **Error 600** (`#C62F38`): error text, destructive actions
- **Success 600** (`#4CB076`)
- **Warning 600** (`#EDAA3B`)
- **Information 600** (`#3981F7`)

### Segment/data palettes
Segment families (orange, magenta, blueberry, aquamarine, etc.) are for charts/visualization only, not body copy.

## 3. Typography Rules

### Font Family
- **Primary:** `Poppins`, `sans-serif`
- **Token:** `var(--font-audiense)`
- **Rule:** apply at root/container level for full UI consistency

### Type Scale
- `font-size-s`: 12px
- `font-size-m`: 14px
- `font-size-l`: 16px
- `font-size-xl`: 20px
- `font-size-2xl`: 24px
- `font-size-3xl`: 32px
- `font-size-4xl`: 46px

### Line Heights
- 16, 18, 20, 22, 24, 28, 36, 50px (`font-leading-s..5xl`)

### Working Hierarchy
- Headings: 600 (`heading-2xl-600`, `heading-xl-600`, `heading-m-600`, etc.)
- Emphasis/controls: 500 (`body-l-500`, `body-m-500`, `text-button`)
- Body/copy: 400 (`body-m-400`, `body-s-400`, `text-input`, `text-area`)

### Copy Color Rules (MANDATORY)
- Titles/headings -> `var(--copy-slot-title)` (steel-900)
- Body/descriptions -> `var(--copy-slot-body)` (steel-800)
- Secondary/helper -> `var(--copy-slot-secondary)` (steel-600)
- Muted/captions -> `var(--copy-slot-muted)` (steel-600)
- Disabled -> `var(--copy-slot-disabled)` (disabled-500)
- Links -> `var(--link-slot-color)` (ocean-500)

Never use brand accent colors for paragraph/body/helper text.

## 4. Component Stylings

### Buttons
**Primary (single CTA only)**
- bg `--button-primary` (pomegranate-600), hover/active pomegranate 500/700
- label white (`--text-on-primary`)
- radius 8px, border none

**Secondary**
- bg steel-100, hover steel-200, active steel-300
- label steel-700/800/900 progression

**Tertiary**
- bg white, hover steel-100, active steel-200
- label steel progression

**Policy:** max one primary CTA per screen in Audiense theme.

### Icon buttons
- Non-primary icon actions use steel/neutral surfaces
- Radius full (`9999px`) in circular contexts
- Disabled icon uses disabled-500

### Tabs
- Default bg white
- Text steel-700
- Selected text steel-900
- Selected bg steel-100
- Selected border steel-700

### Inputs / Select
- Input border steel-300, hover steel-500, focus steel-800
- Focus-visible info-600
- Select listbox focused steel-100, pressed/selected steel-200

### Menu
- White background, steel text/icons
- Hover steel-100, pressed steel-200, selected steel-300
- Destructive item uses error palette
- 230-330px width, 40px row height

### Table (borderless)
- Header separator steel-300
- Row separator steel-200
- Row hover steel-100
- Sort icon default steel-500

### Navbar
- Height 70px, white background, steel-100 bottom border
- Full viewport width; **inner row** centered at **max 1440px** (`--layout-chrome-inner-max-width`), not full 1920px content bleed
- Left: change-product button + brand lockup
- Right: action icons + avatar + menu trigger

### App shell & breadcrumb
- **TitanAppShell:** navbar (full width) → row `[ sidebar? | main column ]`. Sidebar **below** navbar, flush left; **breadcrumb strip + main** share the right column (width = viewport − sidebar). Inner column content: **max 1280px** by default, **max 1440px** from a **1440px** viewport up — `.titan-app-content-inner`.
- **Breadcrumb:** `TitanBreadcrumb` is **presentational** — it does not mutate the path. The **app** (router/state) owns the trail; pass `items` (ancestors with `onPress`) + `currentLabel`. On navigation (link or **…** menu), update state so the path **truncates** to the chosen level (e.g. `Home › Apps › Games › Sports` → pick **Apps** → `Home › Apps`; with `…` hiding **Games**, open menu and pick **Games** → `Home › Apps › Games`).
- **Breadcrumb degraded hierarchy:** when a segment cannot be resolved, prefer `Hide > Rebuild > Fallback > Soft state`. Use neutral labels (`Unknown`, `Unavailable`, `Deleted`) and disable that segment (`resolutionState`), never critical form-error red.
- **Sidebar:** stacked nav rows use `--sidebar-slot-nav-stack-gap` (**8px** / `--spacing-2xs`).

### Checkbox / Radio / Toggle
- Steel family for base and selected states
- Focus-visible uses information-600
- Error uses error family

### Pagination
- Text steel-900
- Hover background steel-10 opacity
- Active/selected background steel-40 opacity
- No border/stroke container styling

## 5. Layout Principles

### Spacing Scale
`2, 4, 6, 8, 10, 12, 16, 24, 32, 40, 48, 64, 80, 96, 160px`
(tokens `spacing-5xs` to `spacing-7xl`)

### Grid
- 16 columns
- Main content max width follows **1280 / 1440** rules (`--layout-content-max-width-sm` / `-md`) for centered chrome; outer grid may still reference **1920px** for rare full-bleed layouts
- tokenized gap and horizontal padding

### Whitespace philosophy
- Compact but readable
- Tight card/table rhythms
- Strong consistency over expressive variation

### Radius Scale
- 4, 8, 12, 16, 20px + full round

### Border Scale
- 1, 2, 3, 4px strokes

## 6. Depth & Elevation

Steel-tinted shadow system (based on `#6d838b` at low opacity):
- Elevation 0: `0 0 8px`
- Elevation 1: `0 4px 12px`
- Elevation 2: `0 5px 16px`
- Elevation 3: `0 6px 20px`
- Elevation 4: `0 7px 24px`

Use directional `-left` / `-right` variants for side surfaces where needed.

## 7. Do's and Don'ts

### Do
- Use `titan-compositions` first
- Keep one primary CTA at most per screen (Audiense)
- Use steel tokens for non-primary interactions
- Use ocean-500 for links only
- Use token vars (no hex/rgb in component styles)
- Include empty/loading/error/success states

### Don't
- Don't place multiple pomegranate primary CTAs on one screen
- Don't color body text with brand/accent palettes
- Don't use `--color-*` primitives directly in UI code
- Don't add border/stroke containers to button/pagination variants
- Don't default to generic "AI-style" gradients/glassmorphism

## 8. Responsive Behavior

### Breakpoint intent
- Large desktop: full 16-col density
- Desktop: standard dashboard layouts
- Tablet: content reflow; sidebar likely overlay
- Mobile: stacked single-column priorities

### Behavior rules
- Navbar remains 70px and structurally stable
- Tables scroll horizontally when needed
- Sidebar transitions to drawer/overlay below desktop
- Keep targets comfortably tappable (40px interaction rhythm)

## 9. Agent Prompt Guide

### Quick Audiense token reference
- Primary CTA: `--button-primary` (pomegranate)
- Non-primary controls: steel family
- Primary text: `--text-primary` / `--text-primary-active`
- Copy: `--copy-slot-title/body/secondary/muted`
- Links: `--link-color` (ocean-500)
- Border: `--border`, `--border-interactive`
- Table separators: `--table-header-border-bottom`, `--table-cell-border-bottom`

### Example prompts
- "Build this screen in Titan Audiense theme using single-primary-CTA policy (one pomegranate primary max)."
- "Use steel interactions for secondary actions, filters, menus, and icon buttons; links must stay ocean-500."
- "Generate table + filter layout with loading/empty/error states and token-only styling."

### Iteration checklist
1. Confirm one primary CTA only
2. Verify all body copy is steel token-based
3. Verify links are ocean-500
4. Verify controls are steel, not brand accent
5. Validate spacing/radius/elevation against Titan tokens
6. Run design quality pass for hierarchy and state clarity
