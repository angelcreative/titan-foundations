# titan-compositions

Reusable Titan page compositions for cross-project usage.

This package is the place to publish stable, importable building blocks so `/titan` can reuse components instead of regenerating them.

## Current status

Incremental exports:

- `TitanBreadcrumb` (implemented)
- `TitanNavbar` (implemented)
- `TitanCardGrid` / `TitanCard` (implemented)
- `TitanBorderlessTable` (implemented)
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
- `lucide-react`

And import composition styles:

```ts
import 'titan-compositions/styles'
```

And load Titan styles in order:

1. `tokens/css/titan.css`
2. active theme (`tokens/themes/_*.css`)
3. `titan-compositions/styles`

## Quick usage

```tsx
import {
  TitanTwoUpOneDownLayout,
  TitanBorderlessTable,
  type TitanTableColumn,
  type TitanTableRow,
} from 'titan-compositions'
import 'titan-compositions/styles'

const columns: TitanTableColumn[] = [
  { key: 'creator', header: 'Creator' },
  { key: 'network', header: 'Network' },
  { key: 'engagement', header: 'Engagement' },
]

const rows: TitanTableRow[] = [
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
      bottom={<TitanBorderlessTable columns={columns} rows={rows} />}
    />
  )
}
```
