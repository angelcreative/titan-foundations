# Multimedia Grid Cards

Universal UI anatomy for a **grid of media tiles**: each tile has an image area (or placeholder), title below, and a circular badge (e.g. percentage) in the top-right corner.

## When to use

- User asks for “media grid”, “content tiles”, “video/show cards”, “grid of cards with image and %”.
- You need a 4-column (or configurable) grid of tiles for content library, recommendations, or watch progress.

## Anatomy

| Region | Content |
|--------|---------|
| **Tile image** | Full-width area; aspect ratio e.g. 16:10. Image or gradient/placeholder. |
| **Badge** | Circular badge top-right over the image: e.g. percentage (8.9%, 5.1%). Semi-transparent background, white text. |
| **Title** | Below the image: title of the content (e.g. “La Resistencia por M+”, “Pokémon”). |

## Titan usage

- **Grid:** `TitanCardGrid` with `TitanCard` span 4 (4 columns in 16-col grid). Or CSS Grid: `repeat(4, 1fr)`, gap `--layout-grid-gap`.
- **Tile:** Card padding 0; image area with `aspect-ratio: 16/10`; background `--color-black-800` or image.
- **Badge:** Position absolute top-right; min size ~36px; `--color-violet-600` with opacity (e.g. 0.85), `--text-on-color`; border-radius 50%.
- **Title:** `--text-on-color` on dark background, or `--text-body` on light; padding `--spacing-s` `--spacing-m`.
- **Components:** `TitanCardGrid`, `TitanCard`.

## Implementation notes

- Image: use `<img>` with alt text or `aria-hidden` placeholder. Badge: ensure contrast (WCAG AA).
- Empty state: “No content”. Loading: skeleton tiles. Reference: playground `id="multimedia-grid-cards"`.

## Related patterns

- Grid layout (16 columns, span) → [../grid.md](../grid.md).
- Metric badges per tile may use KPI-style tokens → [kpi-trend-card.md](./kpi-trend-card.md).
