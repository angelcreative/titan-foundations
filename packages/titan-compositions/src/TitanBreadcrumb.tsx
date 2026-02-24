import type { ReactNode } from 'react'
import {
  Breadcrumb,
  Breadcrumbs,
  Button,
  Menu,
  MenuItem,
  MenuTrigger,
  Popover,
} from 'react-aria-components'
import { ChevronRight } from 'lucide-react'

export interface TitanBreadcrumbItem {
  id: string
  label: string
  icon?: ReactNode
  selected?: boolean
  disabled?: boolean
  onPress?: () => void
}

export interface TitanBreadcrumbProps {
  items: TitanBreadcrumbItem[]
  currentLabel: string
  maxVisible?: number
  ariaLabel?: string
}

export function TitanBreadcrumb({
  items,
  currentLabel,
  maxVisible = 5,
  ariaLabel = 'Breadcrumb',
}: TitanBreadcrumbProps) {
  const totalItems = items.length + 1
  const needsCollapse = totalItems > maxVisible && items.length > 2

  let visibleBefore: TitanBreadcrumbItem[] = []
  let collapsed: TitanBreadcrumbItem[] = []
  let visibleAfter: TitanBreadcrumbItem[] = []

  if (needsCollapse) {
    visibleBefore = [items[0]]
    const keepAtEnd = maxVisible - 2
    collapsed = items.slice(1, items.length - keepAtEnd)
    visibleAfter = items.slice(items.length - keepAtEnd)
  } else {
    visibleBefore = items
  }

  return (
    <Breadcrumbs className="breadcrumb-nav" aria-label={ariaLabel}>
      {visibleBefore.map((item) => (
        <BreadcrumbNode key={item.id} item={item} />
      ))}

      {needsCollapse && collapsed.length > 0 && (
        <Breadcrumb className="breadcrumb-item">
          <MenuTrigger>
            <Button className="breadcrumb-ellipsis" aria-label="Show more">
              &hellip;
            </Button>
            <Popover className="menu-popover" placement="bottom start" offset={8}>
              <Menu className="menu-list">
                {collapsed.map((item) => (
                  <MenuItem
                    key={item.id}
                    className="menu-item"
                    textValue={item.label}
                    onAction={() => item.onPress?.()}
                  >
                    <span className="menu-item-start">
                      {item.icon && <span className="menu-item-icon">{item.icon}</span>}
                      <span className="menu-item-label">{item.label}</span>
                    </span>
                  </MenuItem>
                ))}
              </Menu>
            </Popover>
          </MenuTrigger>
          <span className="breadcrumb-separator" aria-hidden="true">
            <ChevronRight />
          </span>
        </Breadcrumb>
      )}

      {visibleAfter.map((item) => (
        <BreadcrumbNode key={item.id} item={item} />
      ))}

      <Breadcrumb className="breadcrumb-item">
        <span className="breadcrumb-current" aria-current="page">
          {currentLabel}
        </span>
      </Breadcrumb>
    </Breadcrumbs>
  )
}

function BreadcrumbNode({ item }: { item: TitanBreadcrumbItem }) {
  const linkClass = [
    'breadcrumb-link',
    item.selected ? 'breadcrumb-link-selected' : '',
  ].filter(Boolean).join(' ')

  return (
    <Breadcrumb className="breadcrumb-item">
      <Button
        className={linkClass}
        onPress={item.onPress}
        isDisabled={item.disabled}
      >
        {item.label}
      </Button>
      <span className="breadcrumb-separator" aria-hidden="true">
        <ChevronRight />
      </span>
    </Breadcrumb>
  )
}
