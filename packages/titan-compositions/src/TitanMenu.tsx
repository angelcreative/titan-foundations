import type { ReactNode } from 'react'
import {
  Button,
  Menu,
  MenuItem,
  MenuTrigger,
  Popover,
  SubmenuTrigger,
} from 'react-aria-components'
import { ChevronDown, ChevronRight } from 'lucide-react'

export interface TitanMenuOption {
  id: string
  label: string
  icon?: ReactNode
  disabled?: boolean
  destructive?: boolean
  children?: TitanMenuOption[]
}

export interface TitanMenuProps {
  triggerLabel?: string
  triggerIcon?: ReactNode
  iconOnly?: boolean
  placement?: 'bottom start' | 'bottom end'
  items: TitanMenuOption[]
  onAction?: (id: string) => void
}

function TitanMenuNode({
  item,
  onAction,
}: {
  item: TitanMenuOption
  onAction?: (id: string) => void
}) {
  if (item.children?.length) {
    return (
      <SubmenuTrigger>
        <MenuItem className="menu-item" textValue={item.label}>
          <span className="menu-item-start">
            {item.icon ? <span className="menu-item-icon">{item.icon}</span> : null}
            <span>{item.label}</span>
          </span>
          <span className="menu-item-end" aria-hidden="true">
            <ChevronRight />
          </span>
        </MenuItem>
        <Popover className="menu-popover menu-popover-submenu" placement="end top">
          <Menu className="menu-list">
            {item.children.map((child) => (
              <TitanMenuNode key={child.id} item={child} onAction={onAction} />
            ))}
          </Menu>
        </Popover>
      </SubmenuTrigger>
    )
  }

  return (
    <MenuItem
      className={item.destructive ? 'menu-item menu-item-destructive' : 'menu-item'}
      textValue={item.label}
      isDisabled={item.disabled}
      onAction={() => onAction?.(item.id)}
    >
      <span className="menu-item-start">
        {item.icon ? <span className="menu-item-icon">{item.icon}</span> : null}
        <span>{item.label}</span>
      </span>
    </MenuItem>
  )
}

export function TitanMenuDropdown({
  triggerLabel = 'Open menu',
  triggerIcon,
  iconOnly = false,
  placement = 'bottom start',
  items,
  onAction,
}: TitanMenuProps) {
  return (
    <MenuTrigger>
      {iconOnly ? (
        <Button className="icon-ghost menu-trigger-icon-ghost" aria-label={triggerLabel}>
          {triggerIcon}
        </Button>
      ) : (
        <Button className="btn btn-secondary menu-trigger-button">
          {triggerLabel}
          <span className="menu-trigger-chevron" aria-hidden="true">
            <ChevronDown />
          </span>
        </Button>
      )}
      <Popover className="menu-popover" placement={placement}>
        <Menu className="menu-list">
          {items.map((item) => (
            <TitanMenuNode key={item.id} item={item} onAction={onAction} />
          ))}
        </Menu>
      </Popover>
    </MenuTrigger>
  )
}
