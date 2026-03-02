# Audience Segment Card

Universal UI anatomy for a **segment summary card**: donut chart, keywords, affinities, hashtags, and segment characteristics. May include a menu or actions.

## When to use

- User asks for “audience segment”, “segment card”, “donut + keywords”, “audience breakdown”.
- You need a card that summarizes one segment with: visual (donut/pie), lists (keywords, affinities, hashtags), and metadata (e.g. size, traits).

## Anatomy

| Region | Content |
|--------|---------|
| **Header** | Segment name (**bold**, no icons) + optional menu (actions: Edit, Create report, See members, Merge, Export, Integrate, Delete). Header is **full-bleed** (edge-to-edge, no horizontal padding); background = **shade 100** of a system color; **each card uses a different color** (e.g. violet-100, ocean-100, pomegranate-100). |
| **Visual** | Donut (Recharts `PieChart` + `Pie` with `innerRadius`/`outerRadius`): segment %; colors = **same hue as header** (e.g. segment fill = 600, rest = 200). Center label with percentage. |
| **Lists** | **Distinctive bio keywords:** chips with term + % (e.g. `segment-chip`, `segment-chip-pct`). **Affinities:** avatar (initial) + link; single line, ellipsis + title tooltip if truncated. **Top hashtags:** same chip style as bio keywords (`segment-chip`), not a different tag component. |
| **Meta** | Top characteristics: small table (label, value, %). |
| **Footer** | “View more details” **tertiary button**; must sit **at bottom of card** (`margin-top: auto` in flex layout). |

## Titan usage

- **Surface:** `TitanCard` with `--surface-0`, `--card-slot-radius`, `--dialog-slot-pad`. Card content in a wrapper that receives CSS vars for header/donut colors (e.g. `--segment-header-bg`, `--segment-donut-fill`, `--segment-donut-rest`).
- **Header:** No side padding on card for header row; `padding: var(--spacing-s) var(--dialog-slot-pad)` vertical only; background `var(--segment-header-bg)` (set per card: e.g. `--color-violet-100`, `--color-ocean-100`, `--color-pomegranate-100`).
- **Donut:** Recharts `PieChart`, `Pie`, `Cell`; two segments (segment %, rest); colors from CSS vars or hex per card. Thin ring (e.g. `innerRadius="78%"`, `outerRadius="100%"`).
- **Keywords / hashtags:** Same chip style: `--pill-background`, `--card-slot-radius`, `--font-size-s`; neutral (steel/black) for hashtags. No icons in title.
- **Menu:** `TitanMenuDropdown` iconOnly; keep labels short (e.g. “Create report” not “Create a report with these cluster members”).
- **Components:** `TitanCard`, `TitanMenuDropdown`, `TitanButton` (tertiary for footer), Recharts for donut.

## Implementation notes

- Use **three equal-width cards** (e.g. `span={4}` in a 16-col grid) with **same layout, different data** and different header/donut colors.
- Donut must have a text alternative or aria-label. Empty state per section; loading: skeleton.
- Reference: playground `id="audience-segment-card"`.
