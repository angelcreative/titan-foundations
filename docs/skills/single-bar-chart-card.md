# Single Bar Chart Card

Universal UI anatomy for a **card with a single-series bar chart**: **one bar per x-axis category** (e.g. Age Split). No second series — one value per category. Optionally the same layout can be used for horizontal bars per row (label + one bar).

## When to use

- User asks for “bar chart card”, “one bar per category”, “age split”, “single series bar chart”.
- You need a vertical bar chart with one bar per category (no comparison pair).

## Anatomy

| Region | Content |
|--------|---------|
| **Header** | Title + optional info icon. |
| **Chart** | Recharts: one category per x tick, **one bar per category**. Y-axis scale (e.g. 0–80%). Grid, axis labels. |

## Titan usage

- **Surface:** `TitanCard` with `--surface-0`, `--card-slot-radius`, `--dialog-slot-pad`.
- **Bar:** Recharts `Bar`; fill `--button-primary`. Grid: `--divider`. Axis/labels: `--text-muted`, small font (e.g. 10px).
- **Components:** `TitanCard`; chart: Recharts `BarChart`, `Bar`, `XAxis`, `YAxis`, `CartesianGrid`, `ResponsiveContainer`.

## Implementation notes

- Decide scale: same max for all bars or per-row. Show value or % when useful.
- Empty/loading: skeleton bars or “No data”.
- Reference: playground `id="single-bar-chart-card"`.

## Related patterns

- Two bars per category → [double-bar-chart-card.md](./double-bar-chart-card.md).
- List of proportions (label + bar + %) → [distribution-bar-card.md](./distribution-bar-card.md).
