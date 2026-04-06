---
name: titan-sidebar
description: Titan sidebar layout variants — flat nav, titled sections, file tree, and complex (search + tree). Use when building or reviewing app chrome sidebars in titan-compositions.
---

## When to use

- Choosing or implementing a **left app sidebar** with `titan-compositions`.
- Mapping product IA (flat links vs sections vs explorer-style tree).

## Source files

| File | What |
|------|------|
| `packages/titan-compositions/src/TitanSidebar.tsx` | All sidebar components |
| `packages/titan-compositions/src/styles/titan-compositions.css` | Styles (`.titan-sidebar*` classes) |
| `packages/titan-compositions/src/icons/lucideRegistry.ts` | Icon registry (`folder`, `folder-open`, `file-text`, etc.) |
| `packages/titan-compositions/src/TitanAppShell.tsx` | Navbar + optional sidebar + breadcrumb + main (sidebar column does **not** span under navbar) |

## App shell

For full-page chrome, compose the sidebar **inside** `TitanAppShell` as the `sidebar` prop. The sidebar stays **left-aligned** under the navbar; **breadcrumb** and **main** occupy the remaining column (`titan-app-main-column`). See `docs/components/breadcrumb.md` and `.cursor/rules/breadcrumb.mdc`.

## Components

| Component | Purpose |
|-----------|---------|
| `TitanSidebar` | Shell: `<aside>` with context, scroll body, toggle at bottom |
| `TitanSidebarItem` | Single nav row (icon + label). Used in flat/titled variants |
| `TitanSidebarHeader` | Uppercase section label (hidden when collapsed) |
| `TitanSidebarSection` | Groups a header + its items with spacing |
| `TitanSidebarSearch` | `TitanInputField` with search icon; returns `null` when collapsed |
| `TitanSidebarTree` | Container for file-tree rows; sets row-gap and row-pad tokens |
| `TitanSidebarTreeItem` | File row (defaults to `file-text` icon when none provided) |
| `TitanSidebarFolder` | Expandable folder: **whole row is clickable** (not just the chevron) |

## Four variants

### 1. Default — flat nav

```tsx
<TitanSidebar collapsed={collapsed} onToggle={onToggle} defaultActiveId="a">
  <TitanSidebarItem id="a" icon={LayoutDashboard}>Dashboard</TitanSidebarItem>
  <TitanSidebarItem id="b" icon={User}>Audience</TitanSidebarItem>
  <TitanSidebarItem id="c" icon={Settings}>Settings</TitanSidebarItem>
</TitanSidebar>
```

### 2. With section titles

```tsx
<TitanSidebar collapsed={collapsed} onToggle={onToggle} defaultActiveId="a">
  <TitanSidebarSection>
    <TitanSidebarHeader>Workspace</TitanSidebarHeader>
    <TitanSidebarItem id="a" icon={LayoutDashboard}>Dashboard</TitanSidebarItem>
    <TitanSidebarItem id="b" icon={User}>Profile</TitanSidebarItem>
  </TitanSidebarSection>
  <TitanSidebarSection>
    <TitanSidebarHeader>Account</TitanSidebarHeader>
    <TitanSidebarItem id="c" icon={Bell}>Notifications</TitanSidebarItem>
    <TitanSidebarItem id="d" icon={Settings}>Settings</TitanSidebarItem>
  </TitanSidebarSection>
</TitanSidebar>
```

### 3. File tree

```tsx
<TitanSidebar collapsed={collapsed} onToggle={onToggle} defaultActiveId="index">
  <TitanSidebarHeader>Project</TitanSidebarHeader>
  <TitanSidebarTree>
    <TitanSidebarTreeItem id="readme">README.md</TitanSidebarTreeItem>
    <TitanSidebarFolder id="src" label="src" defaultExpanded>
      <TitanSidebarTreeItem id="index">index.ts</TitanSidebarTreeItem>
      <TitanSidebarFolder id="components" label="components" defaultExpanded>
        <TitanSidebarTreeItem id="btn">Button.tsx</TitanSidebarTreeItem>
        <TitanSidebarTreeItem id="card">Card.tsx</TitanSidebarTreeItem>
      </TitanSidebarFolder>
    </TitanSidebarFolder>
  </TitanSidebarTree>
</TitanSidebar>
```

### 4. Complex (search + tree)

```tsx
<TitanSidebar collapsed={collapsed} onToggle={onToggle} defaultActiveId="index">
  <TitanSidebarSearch placeholder="Search files…" />
  <TitanSidebarHeader>Project</TitanSidebarHeader>
  <TitanSidebarTree>
    <TitanSidebarTreeItem id="readme">README.md</TitanSidebarTreeItem>
    <TitanSidebarFolder id="src" label="src" defaultExpanded>
      <TitanSidebarTreeItem id="index">index.ts</TitanSidebarTreeItem>
    </TitanSidebarFolder>
  </TitanSidebarTree>
</TitanSidebar>
```

## Behavior rules

### Active item
Single selection via sidebar context. Use `defaultActiveId` (uncontrolled) or `activeId` + `onActiveChange` (controlled) on `TitanSidebar`.

### Icons
`icon` prop on `TitanSidebarItem` / `TitanSidebarTreeItem` accepts a Lucide component or a string resolved by `renderIconNode`. `TitanSidebarTreeItem` defaults to `file-text` when no icon is provided.

### Scroll
Nav content lives inside `.titan-sidebar-body` (`overflow-y: auto`). The toggle button stays pinned at the bottom outside the scroll area.

### Collapsed rail
Items render as **circular icon buttons** (`border-radius: 50%`, `2.5rem` hit size). Labels, headers, search, folder trees, and folder children are all hidden. Only icons remain.

### Folders
- **Whole row is a single `<Button>`** — not just the chevron. Better UX (Fitts's law).
- `defaultExpanded` or controlled `expanded` / `onExpandedChange`.
- **Animated** expand/collapse: CSS `grid-template-rows` transition (0fr → 1fr) + opacity fade + chevron rotation (90deg). Respects `prefers-reduced-motion`.
- Nesting is **structural** (DOM nesting). No `depth` prop needed — children indent automatically via the guide-line container.

### Guide line alignment
The vertical guide line (`border-inline-start`) starts at the horizontal center of the parent chevron:
```
margin-start = row-pad-x + chevron-col / 2
padding-start = chevron-col / 2 + row-gap
```
This ensures file icons inside a folder align with the folder icon of the parent.

### Focus
**No focus ring** on any sidebar element. The global reset in `titan-compositions.css` sets `outline: none` on `:focus` and `[data-focus-visible]` for all sidebar classes.

### Search
`TitanSidebarSearch` returns `null` when the sidebar is collapsed. Do not render a duplicate search.

## CSS tokens (set on `.titan-sidebar`)

| Token | Default | Purpose |
|-------|---------|---------|
| `--sidebar-tree-indent` | `--spacing-m` | General indent unit |
| `--sidebar-tree-guide-color` | `--divider` | Guide line color |
| `--sidebar-tree-chevron-col` | `1.25rem` | Width of chevron column |
| `--sidebar-collapsed-icon-button-size` | `2.5rem` | Collapsed item hit target |
| `--sidebar-tree-row-pad-x` | `--spacing-2xs` | Horizontal padding per row (set on `.titan-sidebar-tree`) |
| `--sidebar-tree-row-gap` | `--spacing-2xs` | Vertical gap between rows (set on `.titan-sidebar-tree`) |

## Live reference

Playground → **Common patterns** → showcase id **`sidebar-variants`**.
Source: `playground/web/src/SidebarVariantsDemo.tsx`.

## Related

- Root policy: **`AGENTS.md`**
- Tokens & anatomies: **`.claude/skills/titan-foundations/SKILL.md`**
