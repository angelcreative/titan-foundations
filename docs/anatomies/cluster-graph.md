# Cluster Graph

Universal UI anatomy for a **force-directed clustered graph** to explore relationships between profiles, entities, or topics with high visual density.

## When to use

- User asks for "cluster graph", "network graph", "force graph", "relation map", or "connected profiles".
- You need to show many-to-many relationships where grouping and neighborhood context matter more than exact tabular values.
- You need quick exploratory navigation (hover, click, drag, zoom) with detail-on-demand.

## Anatomy

| Region | Content |
|--------|---------|
| **Header** | Title, short helper text, and optional controls (search, cluster count, label toggle, reset view). |
| **Graph canvas** | Main visualization area with explicit width/height. Nodes are grouped by cluster and connected by links. |
| **Legend** | Cluster color mapping and optional size/weight explanation. |
| **Details panel** | On node click: profile/entity card with avatar/icon, name, summary metrics, and CTA. |
| **State layers** | Empty, loading, error, and success/ready overlays that do not collapse the canvas container. |

## Titan usage

- **Shell/layout:** Use Titan structural wrappers (`main`, `section`) + `TitanCard` for framing controls/details when needed.
- **Import-first component:** Prefer `TitanClusterGraph` from `titan-compositions` for the graph slot and node details dialog before building custom wrappers.
- **Controls:** Use Titan form primitives for filters (`TitanInputField`, `TitanSelect`, `TitanSwitchField`) and actions (`TitanButton`, `TitanIconButton`).
- **Copy and color:** Non-link text uses typography tokens (`--text-title`, `--copy-slot-body`, `--copy-slot-secondary`). Theme accent is reserved for links/interactive accents.
- **Surface and spacing:** Use semantic spacing and surface tokens (`--spacing-*`, `--surface-*`, `--card-slot-radius`) in container and side panels.
- **Graph rendering:** Keep graph drawing in D3/Canvas/SVG layer; use Titan tokens for palette, text, focus rings, and interactive states.

## Performance guidance (mandatory)

- Keep **one simulation instance per graph**; do not recreate force simulation on every React render.
- Memoize derived graph data (`nodes`, `links`, scales, filtered subsets) and only recompute when source inputs change.
- Use `requestAnimationFrame` throttling for pointer-move/high-frequency updates.
- Prefer progressive density:
  - `< 1000` nodes: SVG is acceptable.
  - `1000-2000` nodes: optimize SVG aggressively (labels off by default, limited shadows/transitions).
  - `> 2000` nodes: prefer Canvas/WebGL renderer.
- Defer heavy UI:
  - Hide labels by default and reveal on zoom threshold or hover.
  - Lazy-render side details after node selection.
- Use deterministic cluster assignment when possible to reduce layout churn across refreshes.
- For dynamic filters, update visibility/opacity before rebuilding topology; rebuild simulation only when topology truly changes.

## State behavior

- **Loading:** Keep fixed-height graph container and show skeleton/overlay; avoid layout shift.
- **Empty:** Show concise guidance ("No relationships found for current filters") + clear next action.
- **Error:** Inline error banner + retry action without losing current filter context.
- **Success feedback:** After applying filters or restoring defaults, show lightweight confirmation (toast or inline status text).

## Accessibility baseline

- Provide keyboard path for key actions (search, filter, reset, open selected node details).
- Ensure node selection has an accessible equivalent list/table fallback when direct node focus is not feasible.
- Maintain visible focus styles and minimum touch target size for controls.
- Use ARIA labels for graph-level purpose and node detail actions.

## Implementation notes

- Treat the graph as a **specialized visualization slot** inside a Titan-composed page, not as ad-hoc full-page custom CSS.
- Keep layout explicit: graph container must have defined dimensions from parent layout.
- Reference: playground `id="cluster-graph"`.
- Reference implementation baseline and behavior ideas: [Cluster repository](https://github.com/angelcreative/Cluster).

## Related patterns

- For high-level KPI context above the graph: [kpi-chart-card.md](./kpi-chart-card.md), [kpi-trend-card.md](./kpi-trend-card.md).
- For drill-down detail after selection: [profile-list-card.md](./profile-list-card.md), [table-advanced.md](./table-advanced.md).
- For surrounding exploration controls: [vertical-filter-panel.md](./vertical-filter-panel.md).
