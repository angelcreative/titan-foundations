# Titan UI anatomy skills (universal patterns)

This folder contains **anatomy documents** for reusable UI patterns. They are **product-agnostic**: the same patterns can be used in any product (Audiense, Insights, Demand, or any consumer).

## Purpose

- **Consumer asks for a type of UI** (e.g. “cards”, “tables”, “KPIs”) → the system can return the **list of available patterns** that match (e.g. KPI Trend Card, Multimedia Grid Cards, Comparison Bar Cards).
- **LLM builds UI** → When generating or refining interfaces, the LLM uses these anatomies to:
  - Know **what to build** when the user requests a given type (e.g. “I want metric cards” → choose KPI Trend Card or KPI Chart Card).
  - **Adhere to the same structure** even when the user does not name a pattern: build “intelligently” by following the anatomies (regions, slots, tokens) so output stays consistent across products.

## What each anatomy file contains

Each file describes **one** pattern or **one family** of patterns:

- **Families:** Same name for the family; **variants are identifiable** (e.g. “Categorical List Cards” with variants Domains, Hashtags, Mentioned users). The LLM picks the variant from user intent.
- **Name & purpose** — When to use this pattern (or which variant of the family).
- **Anatomy** — Regions, slots, and structure (what appears where: header, body, footer, badges, etc.).
- **Titan usage** — Which Titan components and tokens to use (surfaces, typography, color). **Text color rule:** Non-link text (titles, labels, body) = typography only (steel / `--text-title`, `--copy-slot-*`). Theme color **only for links**. Positive deltas (e.g. +3%) = aquamarine; negative = `--text-error-primary`. See `docs/copy-and-links.md`.
- **Implementation notes** — Hints for the LLM (e.g. chart slot, empty/loading states).
- **Related patterns** — Cross-links to other skills (e.g. when to use a table vs a list, or which card to combine).

## Index of patterns (by category)

Each anatomy file includes a **Related patterns** section at the end with cross-links to other skills; use it when composing UI from multiple patterns.

### Cards — KPI & metrics

| Pattern | File | Use when |
|--------|------|----------|
| KPI Trend Card | [kpi-trend-card.md](./kpi-trend-card.md) | Single metric + trend (up/down %) |
| KPI Chart Card | [kpi-chart-card.md](./kpi-chart-card.md) | Metric + trend + line chart over time |

### Cards — Bars & distribution

| Pattern | File | Use when |
|--------|------|----------|
| Distribution Bar Card | [distribution-bar-card.md](./distribution-bar-card.md) | Proportions list (label + % bar) |
| Double Bar Chart Card | [double-bar-chart-card.md](./double-bar-chart-card.md) | Two bars per row (e.g. male/female) |
| Single Bar Chart Card | [single-bar-chart-card.md](./single-bar-chart-card.md) | One bar per row, optional target line |
| Comparison Bar Cards | [comparison-bar-cards.md](./comparison-bar-cards.md) | Family: Device, Content type, Bio, Age (two bars + legend) |
| Comparison Donut Card | [comparison-donut-card.md](./comparison-donut-card.md) | One % metric across segments: side-by-side donuts |

### Cards — Lists & segment

| Pattern | File | Use when |
|--------|------|----------|
| Profile List Card | [profile-list-card.md](./profile-list-card.md) | List of avatars + names + meta |
| Categorical List Cards | [categorical-list-cards.md](./categorical-list-cards.md) | Family: Domains, Hashtags, Mentioned users |
| Audience Segment Card | [audience-segment-card.md](./audience-segment-card.md) | Segment summary: donut, keywords, affinities, etc. |

### Cards — Insight, option & builder

| Pattern | File | Use when |
|--------|------|----------|
| Insight Variant Cards | [insight-variant-cards.md](./insight-variant-cards.md) | Family: default, compact, wide (insight/content blocks) |
| Selectable Option Cards | [selectable-option-cards.md](./selectable-option-cards.md) | Selectable cards (title + illustration + description) |
| Builder Condition Cards | [builder-condition-cards.md](./builder-condition-cards.md) | Condition cards linked by AND/OR; edit/delete; add connector |
| Multimedia Grid Cards | [multimedia-grid-cards.md](./multimedia-grid-cards.md) | Grid of media tiles (image + title + % badge) |

### Tables

| Pattern | File | Use when |
|--------|------|----------|
| Table (Advanced) | [table-advanced.md](./table-advanced.md) | Sortable table with React Aria (lucide sort icons) |
| Top Cities Table | [top-cities-table.md](./top-cities-table.md) | Ranked table (name + dual bars + pill; legend) |
| Skills Table | [skills-table.md](./skills-table.md) | Same as Top Cities + search above table |
| Sortable Penetration List | [sortable-penetration-list.md](./sortable-penetration-list.md) | Sortable list with penetration % |

### Filters & panels

| Pattern | File | Use when |
|--------|------|----------|
| Vertical Filter Panel | [vertical-filter-panel.md](./vertical-filter-panel.md) | Vertical panel: N collapsible filter sections + Clear All / Apply |

## How to add a new pattern

1. Add a new `.md` file named after the pattern (e.g. `my-pattern.md`).
2. Use the same sections: purpose, anatomy, Titan usage, implementation notes.
3. Add a row to the appropriate category table above and a **Related patterns** section at the end of the file. Link from the main docs if useful.

## How the LLM (or MCP) should choose a skill

When the user asks for UI (in chat, via MCP, or in a prompt), the LLM must **resolve the intent to one or more skills** and **load the corresponding anatomy file(s)** before generating code.

**Step 1 — Resolve intent to a skill:** Use the index table above, or this mapping:

| User intent (examples) | Skill file to load |
|------------------------|--------------------|
| Segment card, audience segment, donut + keywords, affinities, hashtags | `audience-segment-card.md` |
| Comparison vs baseline, Bio/Age/Device bars, two bars per row, segment vs audience | `comparison-bar-cards.md` |
| Sortable table, data table, column sort, table in card | `table-advanced.md` (+ card skill if inside a card) |
| Report list with sortable columns, reports table with sort (Audience size, Created, etc.) | `table-advanced.md` + report-list-page pattern (use TitanTable + TitanColumn allowsSorting) |
| Drawer, panel lateral, show full table opens panel | `../drawer.md` (and comparison-bar-cards for show full table behavior) |
| KPI metric, single value + trend | `kpi-trend-card.md` or `kpi-chart-card.md` |
| Top cities, ranked list, penetration by city | `top-cities-table.md` |
| Media grid, image tiles, content library | `multimedia-grid-cards.md` |
| (others) | See full table in Index of patterns above |

**Step 2 — Load the skill:** Read the full content of the chosen file. If using MCP, call the tool that returns the anatomy by name (e.g. get_skill("audience-segment-card")).

**Step 3 — Generate:** Follow the anatomy (regions, Titan usage, implementation notes) and import-first policy; do not invent a different structure.

**MCP contract (optional):** If the Titan worker exposes MCP tools for skills, they should provide: **List skills** (pattern names + Use when) and **Get skill** (full markdown by name). The LLM should call list skills when the request is generic, then get skill(name) before generating.

## V0 / MCP

These skills live in the repo. To expose them to V0 or other consumers, the Titan worker can serve this content via an MCP tool (e.g. return the list of pattern names, or the full text of a given anatomy file) so the system can offer “available UI options” and the LLM can adhere to these anatomies when building.

**Consumer policy:** Do **not** copy or mirror these skills into the consumer project (e.g. `.cursor/skills/`, `.claude/skills/`). The single source of truth is this repo. Consumers should use the Titan MCP (`list_skills` / `get_skill`) or read from `docs/skills/` in the repo when building UI.
