# KPI Chart Card

Universal UI anatomy for a **metric card with trend and a line chart** over time.

## When to use

- User asks for “metric with chart”, “KPI with trend chart”, “time series metric card”.
- You need title + trend (up/down %) + a small line chart (e.g. last 7 months).

## Anatomy

| Region | Content |
|--------|---------|
| **Header** | Title + optional **info icon (i)**. The icon shows a **tooltip on hover** (and on focus) with the metric definition. |
| **Trend row** | Arrow up/down + signed percentage + period (same as KPI Trend Card: **arrow up = positive = always aquamarine**; arrow down = negative = error). |
| **Chart slot** | Line chart over time. Optional: Y-axis labels (e.g. “104.5k”, “103k”), X-axis labels (e.g. “Aug”…“Feb”). |

## Titan usage

- **Surface:** Same as KPI Trend Card: `--surface-0`, `--card-slot-radius`, `--dialog-slot-pad`.
- **Typography:** Title and trend row: same as KPI Trend Card — **typography only** for title and period (`--text-title`, `--text-muted`); **never** theme color. Positive trend = `--color-aquamarine-600`/`700`; negative = `--text-error-primary`. Axis labels: `--text-muted`, `--button-slot-font-size`.
- **Chart:** Use a **real chart library** (e.g. Recharts). Line stroke: `--button-primary`. Grid: `--divider`. Axis labels: `--text-muted`, small font (e.g. 10px).
- **Components:** `TitanCardGrid` + `TitanCard`; chart: Recharts `LineChart` + `Line` + `XAxis` + `YAxis` + `CartesianGrid` + `ResponsiveContainer`, styled with Titan tokens.

## Implementation notes

- Chart is decorative or has a text alternative (e.g. “Chart: 7 data points”; hide with `aria-hidden="true"` if redundant with value).
- Provide loading state for chart (skeleton or placeholder).
- Reference: playground `id="kpi-chart-card"`.

## Related patterns

- For metric without chart → [kpi-trend-card.md](./kpi-trend-card.md).
- For categorical breakdown (bars by category) → [distribution-bar-card.md](./distribution-bar-card.md), [double-bar-chart-card.md](./double-bar-chart-card.md).
