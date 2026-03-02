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
- **Titan usage** — Which Titan components and tokens to use (surfaces, typography, color).
- **Implementation notes** — Hints for the LLM (e.g. chart slot, empty/loading states).

## Index of patterns

| Pattern | File | Use when |
|--------|------|----------|
| KPI Trend Card | [kpi-trend-card.md](./kpi-trend-card.md) | Single metric + trend (up/down %) |
| KPI Chart Card | [kpi-chart-card.md](./kpi-chart-card.md) | Metric + trend + line chart over time |
| Distribution Bar Card | [distribution-bar-card.md](./distribution-bar-card.md) | Proportions list (label + % bar) |
| Profile List Card | [profile-list-card.md](./profile-list-card.md) | List of avatars + names + meta |
| Double Bar Chart Card | [double-bar-chart-card.md](./double-bar-chart-card.md) | Two bars per row (e.g. male/female) |
| Single Bar Chart Card | [single-bar-chart-card.md](./single-bar-chart-card.md) | One bar per row, optional target line |
| Insight Variant Cards | [insight-variant-cards.md](./insight-variant-cards.md) | Family: default, compact, wide (insight/content blocks) |
| Categorical List Cards | [categorical-list-cards.md](./categorical-list-cards.md) | Family: Domains, Hashtags, Mentioned users (list cards) |
| Selectable Option Cards | [selectable-option-cards.md](./selectable-option-cards.md) | Family: selectable cards (title + illustration + description); selection state by border/highlight |
| Builder Condition Cards | [builder-condition-cards.md](./builder-condition-cards.md) | Family: condition cards linked by AND/OR; title + prompt + value pill + edit/delete; add connector |
| Vertical Filter Panel | [vertical-filter-panel.md](./vertical-filter-panel.md) | Vertical long card builder: header + N collapsible filter sections + Clear All / Apply |
| Sortable Penetration List | [sortable-penetration-list.md](./sortable-penetration-list.md) | Sortable list with penetration % |
| Top Cities Table | [top-cities-table.md](./top-cities-table.md) | Ranked table (e.g. city, value, %) |
| Skills Table | [skills-table.md](./skills-table.md) | Table with search/filter |
| Audience Segment Card | [audience-segment-card.md](./audience-segment-card.md) | Segment summary: donut, keywords, affinities, etc. |
| Comparison Bar Cards | [comparison-bar-cards.md](./comparison-bar-cards.md) | Family: Device, Content type, Bio, Age (title + description + Read more + items with icon + two bars + legend) |
| Comparison Donut Card | [comparison-donut-card.md](./comparison-donut-card.md) | One % metric across segments: icon + title + description + side-by-side donuts |
| Multimedia Grid Cards | [multimedia-grid-cards.md](./multimedia-grid-cards.md) | Grid of media tiles (image + title + % badge) |
| Table (Advanced) | [table-advanced.md](./table-advanced.md) | Sortable table with React Aria |

## How to add a new pattern

1. Add a new `.md` file named after the pattern (e.g. `my-pattern.md`).
2. Use the same sections: purpose, anatomy, Titan usage, implementation notes.
3. Add a row to the table above and, if useful, link from the main docs.

## How the LLM (or MCP) should choose a skill

When the user asks for UI (in chat, via MCP, or in a prompt), the LLM must **resolve the intent to one or more skills** and **load the corresponding anatomy file(s)** before generating code.

**Step 1 — Resolve intent to a skill:** Use the index table above, or this mapping:

| User intent (examples) | Skill file to load |
|------------------------|--------------------|
| Segment card, audience segment, donut + keywords, affinities, hashtags | `audience-segment-card.md` |
| Comparison vs baseline, Bio/Age/Device bars, two bars per row, segment vs audience | `comparison-bar-cards.md` |
| Sortable table, data table, column sort, table in card | `table-advanced.md` (+ card skill if inside a card) |
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
