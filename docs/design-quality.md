# Design quality & anti–AI slop

Beyond Titan’s design-system rules (tokens, components, validation), UI should avoid generic “AI” aesthetics and keep clear hierarchy and purposeful design.

## Guidelines (summary)

- **DO:** Use titan-compositions and Titan semantic tokens; clear visual hierarchy; purposeful color; empty/loading/error states that guide the user; consistent spacing; one clear aesthetic direction.
- **DON’T:** Gradient text for “impact”; generic AI palette (cyan-on-dark, purple–blue gradients); glassmorphism everywhere; identical card grids; gray text on colored backgrounds; center-everything layouts; every button primary.

**AI slop test:** If someone would say “AI made this” at first glance, strengthen hierarchy and differentiation.

## Full reference

For detailed DO/DON’T by area (typography, color, layout, motion, interaction, responsive, UX writing), see:

- **[impeccable](https://impeccable.style)** — Design fluency for AI harnesses. This repo includes a copy under `impeccable/` with skills for Cursor, Claude Code, Gemini, Codex, and others. The **frontend-design** skill and its references (typography, color-and-contrast, spatial-design, motion-design, interaction-design, ux-writing) are the source for anti–AI slop and quality guidelines.
- **MCP:** When using the Titan MCP, call `titan_getDesignQualityGuidelines` to get the same guidelines in context for generation or critique.

Titan’s `titan_validateAndRewrite` enforces **design-system** rules (tokens, no hex, etc.). Design quality and anti-slop are complementary: follow both for production-ready, on-brand UI.
