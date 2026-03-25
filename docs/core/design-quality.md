# Design quality & anti–AI slop

Beyond Titan’s design-system rules (tokens, components, validation), UI should avoid generic “AI” aesthetics and keep clear hierarchy and purposeful design.

## Guidelines (summary)

- **DO:** Use titan-compositions and Titan semantic tokens; clear visual hierarchy; purposeful color; empty/loading/error states that guide the user; consistent spacing; one clear aesthetic direction.
- **DON’T:** Gradient text for “impact”; generic AI palette (cyan-on-dark, purple–blue gradients); glassmorphism everywhere; identical card grids; gray text on colored backgrounds; center-everything layouts; every button primary.

**AI slop test:** If someone would say “AI made this” at first glance, strengthen hierarchy and differentiation.

## Copy color rules (MANDATORY)

All text must use steel-family semantic tokens. No exceptions.

| Text type | Token | Resolves to |
|-----------|-------|-------------|
| Titles / headings | `var(--copy-slot-title)` | steel-900 |
| Body / descriptions | `var(--copy-slot-body)` | steel-800 |
| Secondary / helper | `var(--copy-slot-secondary)` | steel-600 |
| Muted / captions | `var(--copy-slot-muted)` | steel-600 |
| Disabled | `var(--copy-slot-disabled)` | disabled-500 |
| Links (always) | `var(--link-slot-color)` | ocean-500 |

**NEVER** use brand/accent colors (pomegranate, aquamarine, blueberry, pulse, coral, orange) as text color for body copy, descriptions, helper text, empty-state messages, or captions. Red is ONLY for error/destructive states (`var(--color-error-*)`). The only text that may use brand color is the label inside a primary CTA button.

## Titan-specific (layout, theme, cards)

- **Typography:** In any layout or flow, apply `fontFamily: 'var(--font-audiense)', sans-serif` to the root container or to text blocks so all copy uses Poppins.
- **All themes:** Do not use `--color-primary-*`. Use theme tokens only: e.g. `--text-primary`, `--text-secondary`, `--button-primary`, and the theme's brand tokens (`--color-aquamarine-*` for demand, `--color-blueberry-*` for insights, etc.) as appropriate.
- **Cards:** Do not nest a card and another container with shadow/background; use a single TitanCard or a single container with card styling.

## Full reference

For detailed DO/DON’T by area (typography, color, layout, motion, interaction, responsive, UX writing), see:

- **[impeccable](https://impeccable.style)** — Design fluency for AI harnesses. Use it as an external reference for anti–AI slop and quality guidelines (frontend-design, typography, color-and-contrast, spatial-design, motion-design, interaction-design, ux-writing).
- **MCP:** When using the Titan MCP, call `titan_getDesignQualityGuidelines` to get the same guidelines in context for generation or critique.

Titan’s `titan_validateAndRewrite` enforces **design-system** rules (tokens, no hex, etc.). Design quality and anti-slop are complementary: follow both for production-ready, on-brand UI.
