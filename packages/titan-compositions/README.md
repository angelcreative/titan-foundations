# titan-compositions

Reusable Titan page compositions for cross-project usage.

This package is the place to publish stable, importable building blocks so `/titan` can reuse components instead of regenerating them.

## Current status

Incremental exports:

- `TitanBreadcrumb` (implemented)
- `TitanNavbar` (implemented)
- `TitanCardGrid` / `TitanCard` (implemented)
- `TitanTable` + TitanTableHeader, TitanColumn, TitanTableBody, TitanRow, TitanCell (React Aria Table; implemented)
- `TitanTwoUpOneDownLayout` (implemented)
- `TitanButton` / `TitanIconButton` (implemented)
- `TitanPill` (implemented)
- `TitanTag` (implemented)
- `TitanMenuDropdown` (implemented)
- `TitanSelect` (implemented)
- `TitanTabs` (implemented)
- `TitanPagination` (implemented)
- `TitanDrawer` (implemented)
- `TitanDialog` (implemented)
- `TitanTooltip` (implemented)
- `TitanToastRegion` (implemented)
- `TitanCheckboxField` / `TitanRadioGroupField` / `TitanSwitchField` (implemented)
- `TitanInputField` / `TitanTextareaField` (implemented)

## Dependency contract

Consumer apps should install:

- `react`
- `react-dom`
- `react-aria-components`
- `lucide-react` (primary icon set; use **first**)
- `@tabler/icons-react` (optional fallback when an icon is not in Lucide)

And import composition styles:

```ts
import 'titan-compositions/styles'
```

And load Titan styles in order:

1. `tokens/css/titan.css`
2. active theme (`tokens/themes/_*.css`)
3. `titan-compositions/styles`

## Next.js App Router

`titan-compositions` depends on `react-aria-components` (and React context). Those APIs exist only in the **client** React runtime. In Next.js App Router, pages and layouts are **Server Components** by default, so importing from `titan-compositions` in a Server Component can cause:

```
TypeError: createContext is not a function
```

**Rule:** Any module that imports from `titan-compositions` in a Next.js App Router app must be a **Client Component**: add `"use client"` at the top of that file, or only import Titan from components that already have `"use client"`. See **`docs/integration/nextjs-app-router.md`** for patterns (page-level `"use client"` vs client shell).

In Vite, CRA, Remix, etc., there is no Server/Client split; this rule does not apply and adding `"use client"` is harmless (directives are ignored).

## Quick usage

```tsx
import {
  TitanTwoUpOneDownLayout,
  TitanTable,
  TitanTableHeader,
  TitanColumn,
  TitanTableBody,
  TitanRow,
  TitanCell,
} from 'titan-compositions'
import 'titan-compositions/styles'

const columns = [
  { key: 'creator', header: 'Creator' },
  { key: 'network', header: 'Network' },
  { key: 'engagement', header: 'Engagement' },
]

const rows = [
  { id: 'r1', creator: 'Luna Media', network: 'Instagram', engagement: '6.7%' },
  { id: 'r2', creator: 'North Spark', network: 'TikTok', engagement: '4.1%' },
  { id: 'r3', creator: 'Daily Scope', network: 'YouTube', engagement: '8.2%' },
  { id: 'r4', creator: 'Urban Pulse', network: 'X', engagement: '3.5%' },
]

export function Page() {
  return (
    <TitanTwoUpOneDownLayout
      theme="insights"
      breadcrumbItems={[
        { id: 'home', label: 'Home' },
        { id: 'creator-discovery', label: 'Creator discovery' },
      ]}
      breadcrumbCurrentLabel="Campaigns"
      leftTop={<section>Left 2/4 card content</section>}
      rightTop={<section>Right 2/4 card content</section>}
      bottom={
        <TitanTable aria-label="Campaigns">
          <TitanTableHeader columns={columns}>
            {(col) => <TitanColumn id={col.key}>{col.header}</TitanColumn>}
          </TitanTableHeader>
          <TitanTableBody items={rows}>
            {(row) => <TitanRow id={row.id} columns={columns}>{(col) => <TitanCell>{row[col.key]}</TitanCell>}</TitanRow>}
          </TitanTableBody>
        </TitanTable>
      }
    />
  )
}
```
