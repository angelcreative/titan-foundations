# KPI Trend Card

Universal UI anatomy for a **dashboard metric card** with a single value and a trend (up/down percentage).

## When to use

- User asks for “metric cards”, “KPI cards”, “dashboard KPIs”, or “key metrics with trend”.
- You need to show one number per card plus a directional trend (e.g. “0.59% this month” with up/down).

## Anatomy

| Region | Content |
|--------|---------|
| **Header** | Title (e.g. “Followers”) + optional **info icon (i)**. The icon shows a **tooltip on hover** (and on focus) with the metric definition or source. |
| **Value** | Large primary number (e.g. “101.9K”). |
| **Trend row** | Icon (arrow up / arrow down) + signed percentage + period label (e.g. “0.59% this month”). **Arrow up = positive**, always **aquamarine** (not theme-dependent). Arrow down = negative = error (red). |

## Titan usage

- **Surface:** Card with `--surface-0`, `--card-slot-radius`, `--dialog-slot-pad`.
- **Typography:** Title and period label use **typography only** — `--text-title`, `--text-weight-semibold` for title; `--text-muted` for period (e.g. "vs last month"). Value: larger `--text-title`. **Never** use theme color for title or trend label; only links use theme color.
- **Trend color:** Positive (arrow up, e.g. "+3%"): **always** `--color-aquamarine-600` or `--color-aquamarine-700` — fixed, no theme. Negative (arrow down, e.g. "-2%"): `--text-error-primary`.
- **Components:** `TitanCardGrid` + `TitanCard` (e.g. `span={8}`). Info icon wrapped in `TitanTooltip`: tooltip opens **on hover** (and on focus).

## Implementation notes

- **Info icon:** Use `TitanTooltip` around the (i) button so the tooltip shows **on hover** and on focus (React Aria default). Give the button `aria-label="More info"` for screen readers.
- Use semantic HTML: `<article>`, heading or `<span>` for title, no heading level for the value (or aria-label).
- Provide empty/loading state (skeleton or “—” for value, hide trend).
- Reference: playground `id="kpi-trend-card"`.

## Related patterns

- If you need a small line chart over time on the same card → [kpi-chart-card.md](./kpi-chart-card.md).
- For multiple KPIs in a row → use this pattern inside `TitanCardGrid` (same as KPI Chart Card).
