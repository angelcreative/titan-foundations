# Distribution Bar Card

Universal UI anatomy for a **card showing a list of proportions** (label + percentage + horizontal bar).

## When to use

- User asks for “distribution”, “breakdown by category”, “proportion bars”, “share of X”.
- You need a card with a title and several rows: label + % + progress bar (e.g. Language: Spanish 95.2%, English 4.1%).

## Anatomy

| Region | Content |
|--------|---------|
| **Header** | Title + optional **info icon (i)**. The icon shows a **tooltip on hover** (and on focus). |
| **List** | One row per item: label (left), percentage (right), horizontal bar (track + fill). |
| **Footer** | Optional “View more” link with icon. |

## Titan usage

- **Surface:** `TitanCard` with `--surface-0`, `--card-slot-radius`, `--dialog-slot-pad`.
- **Progress bar:** `TitanProgressBar`; tokens: `--progress-slot-track-bg`, `--progress-slot-fill-bg`, `--progress-slot-label-color`, `--progress-slot-value-color`, `--progress-slot-track-height`.
- **Link:** `TitanButton` variant link or `<a>` with `--text-link`, `--text-link-hover`.
- **Components:** `TitanCard`, `TitanTooltip` (wrap info icon; tooltip on hover/focus), `TitanProgressBar`, `TitanButton` (link).

## Implementation notes

- **Load animation:** On first paint, bars can animate from 0 to their value (start with value 0, then set real values after mount; use `transition: width` on the progress fill, e.g. 0.5s ease-out).
- Order rows by value (descending) unless user needs custom order. Cap visible rows and use “View more” for the rest.
- Empty state: “No data” or hide card. Loading: skeleton bars.
- Reference: playground `id="distribution-bar-card"`.

## Related patterns

- Two series per row (e.g. segment vs baseline) → [double-bar-chart-card.md](./double-bar-chart-card.md); single bar per row → [single-bar-chart-card.md](./single-bar-chart-card.md).
- When used inside comparison cards with legend → [comparison-bar-cards.md](./comparison-bar-cards.md).
