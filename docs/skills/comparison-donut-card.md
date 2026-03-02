# Comparison Donut Card

Universal UI anatomy for a **single card that compares one percentage metric across two (or more) segments** using side-by-side donut charts. Each donut shows a central value and a ring; the card has a clear header with icon, title, and description.

## When to use

- User asks for “compare segments”, “donut comparison”, “metric across audiences”, “credit cards / preference by segment”.
- You need to show one metric (e.g. “prefer credit cards”) compared across two or more segments (e.g. LoL Streaming 74%, Madrid Gaming 80%) with a visual donut per segment.

## Anatomy

| Region | Content |
|--------|---------|
| **Header** | **Icon** (top center, outline style; e.g. credit card). **Title** (e.g. “Credit cards”) in larger semibold. **Description** (one line of context, lighter grey). **Separator** (thin horizontal line). |
| **Content** | Two (or more) **donuts side by side**. Per donut: **center** = large percentage (e.g. “74.03%”, “80.41%”); **ring** = light track + filled segment (same metric, same color family); **label** below = segment name (e.g. “LoL Streaming 🕹️”, “Madrid Gaming Audience Analysis”). |

## Titan usage

- **Surface:** `TitanCard` with `--surface-0`, `--card-slot-radius`, `--dialog-slot-pad`.
- **Typography:** Title: `--text-title`, `--text-weight-semibold`. Description: `--text-muted`, `--font-size-s` or `--text-body`. Percentage in center: large `--text-title` or custom size. Label under donut: `--text-body` or `--text-muted`.
- **Icon:** Outline icon, `--icon-primary` or `--text-secondary`; centered above title.
- **Separator:** `--divider` or `--color-black-200`.
- **Donut:** Track (unfilled): e.g. `--color-violet-200` or light lavender. Filled segment: e.g. `--color-violet-600` (or semantic token). Same palette for all donuts in the card for consistency.
- **Components:** `TitanCard`; donuts are a **slot** (SVG, chart library, or CSS conic-gradient).

## Implementation notes

- Provide a text alternative for the comparison (e.g. “LoL Streaming 74.03%, Madrid Gaming Audience Analysis 80.41%”) or `aria-label` on the card. Decorative donuts can use `aria-hidden="true"` if the central percentages are already in the DOM.
- Layout: flex or grid for side-by-side donuts; labels can wrap (e.g. two lines for long names). Keep donuts equal width or proportional.
- Empty/loading: skeleton donuts or “No data”. Reference: use for segment vs segment percentage comparison.
