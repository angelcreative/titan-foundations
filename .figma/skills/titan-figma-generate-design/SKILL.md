---
name: titan-figma-generate-design
description: >
  Build or update screens in Figma using the Titan Design System as source of truth.
  Extends figma-generate-design with Titan-specific token discovery, variable seeding,
  and quality validation. Use when creating or updating screens that must follow Titan
  conventions — components, semantic tokens, spacing scale, and theme colors.
compatibility: Requires figma-use skill to be loaded before any use_figma call.
metadata:
  mcp-servers: figma, titands
---

# Generate Titan Screens in Figma

Build production-quality screens on the Figma canvas using **Titan Design System** as the single source of truth. This skill orchestrates two MCP servers:

- **Titan MCP** (`titan_*` tools) — knows what exists: components, tokens, themes, quality rules
- **Figma MCP** (`use_figma`, `search_design_system`, `get_screenshot`) — executes on the canvas

**Always pass `skillNames: "titan-figma-generate-design"` when calling `use_figma` as part of this skill.**

## When to use

- Creating new screens in Figma that must follow Titan tokens and patterns
- Setting up Titan design tokens as Figma variables for the first time in a file
- Updating existing Figma screens to align with current Titan token values
- Validating Figma designs for Titan compliance (colors, spacing, typography)

## When NOT to use

- Generating **code** from a Figma design → use figma-implement-design instead
- Building in **Figma Make** (sandboxed code env) → use `titan_setup({ target: 'figma-make' })`
- Building in **Cursor/Claude Code** (React app) → use `titan_setup({ target: 'cursor' })`
- Creating new **reusable Figma components or variants** unrelated to Titan → use figma-use directly

## Prerequisites

- Figma MCP server connected and authenticated
- Titan MCP server connected (`titands` at `https://mcp-remote-worker.titands.workers.dev/mcp`)
- `figma-use` skill loaded before every `use_figma` call (mandatory — contains critical Plugin API rules)
- User provides a Figma file URL or file key

## Instructions

### Step 0: Load Titan context

**Before touching the canvas**, fetch design system context from Titan MCP. These calls are independent — run them in parallel:

1. `titan_getTheme({ theme: '<requested_theme>', include: 'all' })`
   → Theme palette, CDN URLs, font rules, bootstrap snippets

2. `titan_getFoundations({ file: 'semantic-tokens' })`
   → All semantic token names: `--button-primary-slot-bg`, `--card-slot-bg`, `--spacing-m`, etc.

3. `titan_getComponentRegistry()`
   → List of all Titan composition names and categories

4. `titan_getDesignQualityGuidelines()`
   → DO/DON'T rules for visual quality, anti-AI-slop guidelines

**Store all four results in working memory. Reference them in every subsequent design decision.**

### Step 1: Seed Titan variables into Figma (once per file)

Check if Titan variables already exist in the file:

```
search_design_system({ query: "titan", fileKey: "<fileKey>", includeVariables: true })
```

Also search for common Titan token names to be thorough:

```
search_design_system({ query: "spacing", fileKey: "<fileKey>", includeVariables: true })
search_design_system({ query: "primary", fileKey: "<fileKey>", includeVariables: true })
```

**If Titan variables already exist → skip to Step 2.** Use the found variables directly.

**If not found → create them.** Fetch the raw foundation values from Titan MCP:

```
titan_getFoundations({ file: 'spacing' })        → spacing scale
titan_getFoundations({ file: 'colors-solid' })    → color primitives
titan_getFoundations({ file: 'borders' })         → radius + stroke widths
titan_getFoundations({ file: 'typography' })      → type scale
titan_getFoundations({ file: 'semantic-tokens', category: 'all' }) → semantic mappings
```

Then create Figma variable collections via `use_figma`. Do this in batches (max ~30 variables per call to stay within the 20KB response limit):

**Collection 1: Titan/Spacing** (FLOAT variables)

```js
(async () => {
  try {
    const collection = figma.variables.createVariableCollection("Titan/Spacing");
    const modeId = collection.modes[0].modeId;

    const spacingScale = [
      ["5xs", 2], ["4xs", 4], ["3xs", 6], ["2xs", 8],
      ["xs", 10], ["s", 12], ["m", 16], ["l", 24],
      ["xl", 32], ["2xl", 40], ["3xl", 48], ["4xl", 64],
      ["5xl", 80], ["6xl", 96]
    ];

    const created = [];
    for (const [name, value] of spacingScale) {
      const v = figma.variables.createVariable(
        `spacing/${name}`, collection, "FLOAT"
      );
      v.setValueForMode(modeId, value);
      created.push({ name: v.name, id: v.id, key: v.key });
    }

    figma.closePlugin(JSON.stringify({ created }));
  } catch(e) { figma.closePluginWithFailure(e.toString()); }
})()
```

**Collection 2: Titan/Radius** (FLOAT variables)

```js
(async () => {
  try {
    const collection = figma.variables.createVariableCollection("Titan/Radius");
    const modeId = collection.modes[0].modeId;

    const radii = [["xs", 4], ["s", 8]];
    const created = [];
    for (const [name, value] of radii) {
      const v = figma.variables.createVariable(
        `radius/${name}`, collection, "FLOAT"
      );
      v.setValueForMode(modeId, value);
      created.push({ name: v.name, id: v.id, key: v.key });
    }

    figma.closePlugin(JSON.stringify({ created }));
  } catch(e) { figma.closePluginWithFailure(e.toString()); }
})()
```

**Collection 3: Titan/Colors** (COLOR variables, with theme modes)

For multi-theme support, create modes for each theme. Get per-theme values from:

```
titan_getTheme({ theme: 'audiense', include: 'css' })
titan_getTheme({ theme: 'insights', include: 'css' })
```

Parse the CSS to extract resolved hex values for semantic tokens like `--button-primary-slot-bg`, `--card-slot-bg`, `--color-primary-500`, etc. Create COLOR variables with per-mode values.

**Keep track of all created variable IDs and keys** — you will need them in Step 3.

### Step 2: Plan the screen

Before building anything:

1. Map the user's request to Titan components from the registry (Step 0 result).
   - For each UI element: does a `Titan*` composition exist?
   - If yes → it defines the correct sizing, spacing, states, and slots.
   - If no → build manually using only Titan semantic tokens.

2. For detailed component specs, call:
   `titan_getComponentRegistry({ component: 'TitanButton' })`
   → Returns props, slots, variants, states.

3. For layout recipes, call:
   `titan_getCompositionPattern({ category: '<category>' })`
   → Returns JSX patterns showing how components compose together.

4. List every token needed. Cross-reference against semantic tokens from Step 0.
   **NEVER use a value that isn't a Titan token.**

### Step 3: Build sections on the canvas

**Follow the figma-generate-design workflow from here** (Steps 3-6), with these Titan-specific overrides:

#### Creating the wrapper frame

Create a page wrapper first, positioned away from existing content:

```js
(async () => {
  try {
    let maxX = 0;
    for (const child of figma.currentPage.children) {
      maxX = Math.max(maxX, child.x + child.width);
    }

    const wrapper = figma.createFrame();
    wrapper.name = "Titan / <ScreenName>";
    wrapper.layoutMode = "VERTICAL";
    wrapper.primaryAxisAlignItems = "CENTER";
    wrapper.counterAxisAlignItems = "CENTER";
    wrapper.resize(1440, 100);
    wrapper.layoutSizingHorizontal = "FIXED";
    wrapper.layoutSizingVertical = "HUG";
    wrapper.x = maxX + 200;
    wrapper.y = 0;

    figma.closePlugin(JSON.stringify({ wrapperId: wrapper.id }));
  } catch(e) { figma.closePluginWithFailure(e.toString()); }
})()
```

#### Building each section

One section per `use_figma` call. At the start of each script, fetch the wrapper by ID. For every design property, **bind to Titan Figma variables** instead of hardcoding:

```js
(async () => {
  try {
    const wrapper = await figma.getNodeByIdAsync("WRAPPER_ID");

    // Import Titan variables by key (from Step 1)
    const spacingM = await figma.variables.importVariableByKeyAsync("SPACING_M_KEY");
    const bgColor = await figma.variables.importVariableByKeyAsync("CARD_BG_KEY");
    const radiusS = await figma.variables.importVariableByKeyAsync("RADIUS_S_KEY");

    const section = figma.createFrame();
    section.name = "TitanCard / Default";
    section.layoutMode = "VERTICAL";

    // Bind spacing variables (not hardcoded px)
    section.setBoundVariable("paddingTop", spacingM);
    section.setBoundVariable("paddingBottom", spacingM);
    section.setBoundVariable("paddingLeft", spacingM);
    section.setBoundVariable("paddingRight", spacingM);
    section.setBoundVariable("itemSpacing", spacingM);
    section.setBoundVariable("topLeftRadius", radiusS);
    section.setBoundVariable("topRightRadius", radiusS);
    section.setBoundVariable("bottomLeftRadius", radiusS);
    section.setBoundVariable("bottomRightRadius", radiusS);

    // Bind color variable to fill
    const bgPaint = figma.variables.setBoundVariableForPaint(
      { type: 'SOLID', color: { r: 1, g: 1, b: 1 } }, 'color', bgColor
    );
    section.fills = [bgPaint];

    wrapper.appendChild(section);
    section.layoutSizingHorizontal = "FILL";

    figma.closePlugin(JSON.stringify({ sectionId: section.id }));
  } catch(e) { figma.closePluginWithFailure(e.toString()); }
})()
```

#### Typography rules

- Font family: **Poppins** only (maps to Titan's `--font-audiense`)
- Weights: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- Load fonts before setting text:

```js
await figma.loadFontAsync({ family: "Poppins", style: "Regular" });
await figma.loadFontAsync({ family: "Poppins", style: "Medium" });
await figma.loadFontAsync({ family: "Poppins", style: "SemiBold" });
await figma.loadFontAsync({ family: "Poppins", style: "Bold" });
```

#### Layer naming convention

Name layers using Titan component names with variant suffixes:
- `TitanButton / Primary`
- `TitanButton / Secondary / Disabled`
- `TitanCard / Default`
- `TitanInput / Error`
- `TitanNavbar`
- `TitanTabs / Active: Settings`

### Step 4: Validate with screenshots

After each major section:

1. `get_screenshot({ nodeId: "<sectionId>", fileKey: "<fileKey>" })`
2. Cross-check against titan_getDesignQualityGuidelines results:
   - No hardcoded hex colors (everything must be bound to a Titan variable)
   - Spacing values match the Titan scale (2, 4, 6, 8, 10, 12, 16, 24, 32, 40, 48, 64, 80, 96)
   - Only Poppins font at weights 400/500/600/700
   - Clear visual hierarchy (primary action stands out, secondary is subdued)
   - No "AI slop" (generic, flat, lifeless layouts)
   - States coverage: default, hover, disabled, error where applicable
3. Fix issues and repeat (max 3 iterations per section).

### Step 5: Final validation

Screenshot the full wrapper frame. Verify:
- All sections composed correctly
- Consistent spacing between sections
- Visual rhythm and hierarchy across the full screen
- No orphaned or overlapping elements

## Titan → Figma component reference

| Titan composition | Figma structure |
|---|---|
| TitanButton | Frame + Auto Layout horizontal, text child, fills from `--button-{variant}-slot-bg`, radius from `--button-slot-radius` |
| TitanCard | Frame + Auto Layout vertical, padding from `--card-slot-pad`, bg from `--card-slot-bg`, border from `--card-slot-border` |
| TitanInput | Frame with border + placeholder text + label text above |
| TitanSelect | Frame with border + value text + chevron icon + dropdown indicator |
| TitanTable | Section with header row (bold, bg tint) + data rows, proper cell alignment |
| TitanDialog | Overlay frame centered on canvas, header / body / footer auto-layout sections |
| TitanNavbar | Horizontal frame, full width, logo area + nav items + action buttons |
| TitanTabs | Horizontal frame with tab items + active underline indicator |
| TitanBreadcrumb | Horizontal frame with text items separated by chevrons |
| TitanToggleButtonGroup | Horizontal frame with grouped button items, active state fill |
| TitanPill | Small horizontal frame, rounded, with label text and optional icon |
| TitanMenu | Vertical frame with menu items, dividers, hover state fills |

For exact props and slots: `titan_getComponentRegistry({ component: 'TitanX' })`

## Titan spacing scale (quick reference)

| Token | Value |
|---|---|
| `spacing/5xs` | 2px |
| `spacing/4xs` | 4px |
| `spacing/3xs` | 6px |
| `spacing/2xs` | 8px |
| `spacing/xs` | 10px |
| `spacing/s` | 12px |
| `spacing/m` | 16px |
| `spacing/l` | 24px |
| `spacing/xl` | 32px |
| `spacing/2xl` | 40px |
| `spacing/3xl` | 48px |
| `spacing/4xl` | 64px |
| `spacing/5xl` | 80px |
| `spacing/6xl` | 96px |

## Error recovery

Follow the figma-use error recovery process:

1. **STOP** on error — do not retry immediately.
2. Read the error message carefully.
3. Call `get_metadata` or `get_screenshot` to inspect current file state.
4. Fix the script based on the error.
5. Retry — failed scripts are atomic (nothing is created if a script errors).

Because this skill works incrementally (one section per call), errors are scoped to a single section. Previous sections remain intact.

## Forbidden behavior

- NEVER skip loading `figma-use` skill before `use_figma` calls
- NEVER use hardcoded hex colors or px values when Titan variables exist in the file
- NEVER invent spacing values outside the Titan scale
- NEVER use fonts other than Poppins (weights 400, 500, 600, 700)
- NEVER create a component from scratch without first checking `titan_getComponentRegistry`
- NEVER skip the screenshot validation loop
- NEVER place elements on bare canvas — always inside a Section or Frame

## Examples

**Input:** "Create a settings page with Titan audiense theme"

**What happens:**
1. Agent loads Titan context (theme, tokens, registry, guidelines) — 4 parallel calls
2. Checks if Titan variables exist in the Figma file — `search_design_system`
3. If missing, seeds spacing + color + radius variables — 3 `use_figma` calls
4. Creates wrapper frame "Titan / Settings" at 1440px wide
5. Builds TitanNavbar section (horizontal frame, full width, Poppins SemiBold)
6. Builds TitanTabs section (Settings, Account, Billing tabs)
7. Builds content area with TitanCard sections containing TitanInput fields
8. Builds TitanButton row (Save / Cancel)
9. Screenshots each section, validates against guidelines, fixes issues
10. Final full-screen screenshot to confirm

**Output:** A fully structured, variable-bound Figma screen using Titan conventions that the team can edit, inspect in Dev Mode, and iterate on.
