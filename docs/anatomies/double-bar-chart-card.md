# Double Bar Chart Card

Universal UI anatomy for a **card with a grouped bar chart**: **each x-axis category has two bars** comparing two values (e.g. Male vs Female by age band, or segment vs baseline).

## When to use

- User asks for “comparison bars”, “male/female breakdown”, “two bars per category”, “double bar chart”.
- You need a vertical bar chart where each category shows two values side by side for comparison.

## Anatomy

| Region | Content |
|--------|---------|
| **Header** | Title + optional info icon. |
| **Chart** | Recharts (or similar): one category per x tick; **two bars per category** (e.g. Male, Female). Y-axis scale (e.g. 0–40%). Grid, axis labels, legend. |
| **Legend** | Two items (e.g. Male, Female) with color dot + label. |

## Titan usage

- **Surface:** `TitanCard` with `--surface-0`, `--card-slot-radius`, `--dialog-slot-pad`.
- **Bars:** Use Recharts `BarChart` + two `Bar`; fill: `--color-orange-600`, `--color-violet-600` (or other semantic pair). Grid: `--divider`. Axis/labels: `--text-muted`, small font (e.g. 10px).
- **Components:** `TitanCard`; chart: Recharts `BarChart`, `Bar` (x2), `XAxis`, `YAxis`, `CartesianGrid`, `Legend`, `ResponsiveContainer`.

## Implementation notes

- Include a legend if the two bars are not self-explanatory. Prefer consistent order (e.g. always Male then Female).
- Empty/loading: skeleton rows or “No data”.
- Reference: playground `id="double-bar-chart-card"`.

## Related patterns

- Single series per category → [single-bar-chart-card.md](./single-bar-chart-card.md).
- Horizontal bars in a list (label + % bar) → [distribution-bar-card.md](./distribution-bar-card.md).
- Comparison cards with bars + legend in card layout → [comparison-bar-cards.md](./comparison-bar-cards.md).
