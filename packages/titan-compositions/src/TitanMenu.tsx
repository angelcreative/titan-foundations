import type { ReactNode } from 'react'
import {
  Button,
  Menu,
  MenuItem,
  MenuTrigger,
  Popover,
  Separator,
  SubmenuTrigger,
} from 'react-aria-components'
import { ChevronDown, ChevronRight, Plus, AlertCircle } from 'lucide-react'
import { TitanBadgeAnchor } from './TitanBadge'

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface TitanMenuOption {
  id: string
  label: string
  icon?: ReactNode
  leftElement?: ReactNode
  disabled?: boolean
  destructive?: boolean
  children?: TitanMenuOption[]
}

export interface TitanMenuSearchOption {
  id: string
  label: string
  highlightRange?: [number, number]
  icon?: ReactNode
}

export interface TitanMenuProfileOption {
  id: string
  name: string
  username: string
  avatarUrl?: string
  metric?: string
}

export interface TitanMenuNotification {
  id: string
  icon?: ReactNode
  title: ReactNode
  date: string
}

export interface TitanMenuProps {
  triggerLabel?: string
  triggerIcon?: ReactNode
  iconOnly?: boolean
  placement?: 'bottom start' | 'bottom end'
  items: TitanMenuOption[]
  onAction?: (id: string) => void
}

export interface TitanSearchMenuProps {
  triggerLabel?: string
  triggerIcon?: ReactNode
  iconOnly?: boolean
  placement?: 'bottom start' | 'bottom end'
  items: TitanMenuSearchOption[]
  query?: string
  emptyIcon?: ReactNode
  emptyLabel?: string
  addNewIcon?: ReactNode
  addNewLabel?: string
  onAction?: (id: string) => void
  onAddNew?: () => void
}

export interface TitanProfileMenuProps {
  triggerLabel?: string
  triggerIcon?: ReactNode
  iconOnly?: boolean
  placement?: 'bottom start' | 'bottom end'
  items: TitanMenuProfileOption[]
  onAction?: (id: string) => void
}

export interface TitanNotificationsMenuProps {
  triggerIcon?: ReactNode
  triggerLabel?: string
  badgeCount?: number
  badgeMax?: number
  placement?: 'bottom end' | 'bottom start'
  notifications: TitanMenuNotification[]
  emptyIcon?: ReactNode
  emptyTitle?: string
  emptyMessage?: string
  markAllLabel?: string
  markAllIcon?: ReactNode
  onAction?: (id: string) => void
  onMarkAll?: () => void
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function highlightMatch(text: string, query?: string): ReactNode {
  if (!query || !query.trim()) return text
  const idx = text.toLowerCase().indexOf(query.toLowerCase())
  if (idx === -1) return text
  return (
    <>
      {text.slice(0, idx)}
      <strong>{text.slice(idx, idx + query.length)}</strong>
      {text.slice(idx + query.length)}
    </>
  )
}

/* ------------------------------------------------------------------ */
/*  Standard menu node (recursive for submenus)                        */
/* ------------------------------------------------------------------ */

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
            {item.icon && <span className="menu-item-icon">{item.icon}</span>}
            {item.leftElement && (
              <span className="menu-item-left-element">{item.leftElement}</span>
            )}
            <span className="menu-item-label">{item.label}</span>
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
      className={`menu-item${item.destructive ? ' menu-item-destructive' : ''}`}
      textValue={item.label}
      isDisabled={item.disabled}
      onAction={() => onAction?.(item.id)}
    >
      <span className="menu-item-start">
        {item.icon && <span className="menu-item-icon">{item.icon}</span>}
        {item.leftElement && (
          <span className="menu-item-left-element">{item.leftElement}</span>
        )}
        <span className="menu-item-label">{item.label}</span>
      </span>
    </MenuItem>
  )
}

/* ------------------------------------------------------------------ */
/*  TitanMenuDropdown (standard)                                       */
/* ------------------------------------------------------------------ */

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
      <Popover className="menu-popover" placement={placement} offset={8}>
        <Menu className="menu-list">
          {items.map((item) => (
            <TitanMenuNode key={item.id} item={item} onAction={onAction} />
          ))}
        </Menu>
      </Popover>
    </MenuTrigger>
  )
}

/* ------------------------------------------------------------------ */
/*  TitanSearchMenu                                                    */
/* ------------------------------------------------------------------ */

export function TitanSearchMenu({
  triggerLabel = 'Search',
  triggerIcon,
  iconOnly = false,
  placement = 'bottom start',
  items,
  query,
  emptyIcon,
  emptyLabel = 'This entity is not in our Database, add it here to request it.',
  addNewIcon,
  addNewLabel = 'Add New',
  onAction,
  onAddNew,
}: TitanSearchMenuProps) {
  const hasResults = items.length > 0
  const resolvedAddIcon = addNewIcon ?? <Plus />
  const resolvedEmptyIcon = emptyIcon ?? <AlertCircle />

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
      <Popover className="menu-popover" placement={placement} offset={8}>
        <Menu className="menu-list">
          {hasResults ? (
            <>
              {items.map((item) => (
                <MenuItem
                  key={item.id}
                  className="menu-item menu-item-search"
                  textValue={item.label}
                  onAction={() => onAction?.(item.id)}
                >
                  <span className="menu-item-start">
                    {item.icon && <span className="menu-item-icon">{item.icon}</span>}
                    <span className="menu-item-label">
                      {highlightMatch(item.label, query)}
                    </span>
                  </span>
                </MenuItem>
              ))}
              {onAddNew && (
                <>
                  <Separator className="menu-divider" />
                  <MenuItem
                    className="menu-item"
                    textValue={addNewLabel}
                    onAction={() => onAddNew()}
                  >
                    <span className="menu-item-start">
                      <span className="menu-item-icon">{resolvedAddIcon}</span>
                      <span className="menu-item-label">{addNewLabel}</span>
                    </span>
                  </MenuItem>
                </>
              )}
            </>
          ) : (
            <>
              <MenuItem
                className="menu-item menu-item-info"
                textValue={emptyLabel}
                isDisabled
              >
                <span className="menu-item-start">
                  <span className="menu-item-icon">{resolvedEmptyIcon}</span>
                  <span>{emptyLabel}</span>
                </span>
              </MenuItem>
              {onAddNew && (
                <>
                  <Separator className="menu-divider" />
                  <MenuItem
                    className="menu-item"
                    textValue={addNewLabel}
                    onAction={() => onAddNew()}
                  >
                    <span className="menu-item-start">
                      <span className="menu-item-icon">{resolvedAddIcon}</span>
                      <span className="menu-item-label">{addNewLabel}</span>
                    </span>
                  </MenuItem>
                </>
              )}
            </>
          )}
        </Menu>
      </Popover>
    </MenuTrigger>
  )
}

/* ------------------------------------------------------------------ */
/*  TitanProfileMenu                                                   */
/* ------------------------------------------------------------------ */

export function TitanProfileMenu({
  triggerLabel = 'Profiles',
  triggerIcon,
  iconOnly = false,
  placement = 'bottom start',
  items,
  onAction,
}: TitanProfileMenuProps) {
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
      <Popover className="menu-popover" placement={placement} offset={8}>
        <Menu className="menu-list">
          {items.map((item) => (
            <MenuItem
              key={item.id}
              className="menu-item menu-item-profile"
              textValue={`${item.name} ${item.username}`}
              onAction={() => onAction?.(item.id)}
            >
              <span className="menu-item-start">
                {item.avatarUrl ? (
                  <img
                    className="menu-item-profile-avatar"
                    src={item.avatarUrl}
                    alt={item.name}
                  />
                ) : (
                  <span className="menu-item-profile-avatar" aria-hidden="true" />
                )}
                <span className="menu-item-profile-info">
                  <span className="menu-item-profile-name">{item.name}</span>
                  <span className="menu-item-profile-username">@{item.username}</span>
                </span>
              </span>
              {item.metric && (
                <span className="menu-item-profile-metric">{item.metric}</span>
              )}
            </MenuItem>
          ))}
        </Menu>
      </Popover>
    </MenuTrigger>
  )
}

/* ------------------------------------------------------------------ */
/*  TitanNotificationsMenu                                             */
/* ------------------------------------------------------------------ */

export function TitanNotificationsMenu({
  triggerIcon,
  triggerLabel = 'Notifications',
  badgeCount,
  badgeMax = 99,
  placement = 'bottom end',
  notifications,
  emptyIcon,
  emptyTitle = 'Great!',
  emptyMessage = 'There are not unread notifications',
  markAllLabel = 'Mark all as completed',
  markAllIcon,
  onAction,
  onMarkAll,
}: TitanNotificationsMenuProps) {
  const hasNotifications = notifications.length > 0
  const resolvedBadgeCount = badgeCount ?? notifications.length

  return (
    <MenuTrigger>
      <TitanBadgeAnchor count={resolvedBadgeCount} max={badgeMax}>
        <Button className="icon-ghost menu-trigger-icon-ghost" aria-label={triggerLabel}>
          {triggerIcon}
        </Button>
      </TitanBadgeAnchor>
      <Popover className="menu-popover" placement={placement} offset={8}>
        <Menu className="menu-list menu-list-notifications">
          {hasNotifications ? (
            <>
              {notifications.map((n) => (
                <MenuItem
                  key={n.id}
                  className="menu-item menu-item-notification"
                  textValue={typeof n.title === 'string' ? n.title : n.id}
                  onAction={() => onAction?.(n.id)}
                >
                  <span className="menu-item-start">
                    {n.icon && <span className="menu-item-icon">{n.icon}</span>}
                    <span className="menu-item-notification-content">
                      <span className="menu-item-notification-title">{n.title}</span>
                      <span className="menu-item-notification-date">{n.date}</span>
                    </span>
                  </span>
                </MenuItem>
              ))}
              {onMarkAll && (
                <>
                  <Separator className="menu-divider" />
                  <MenuItem
                    className="menu-item"
                    textValue={markAllLabel}
                    onAction={() => onMarkAll()}
                  >
                    <span className="menu-item-start">
                      {markAllIcon && (
                        <span className="menu-item-icon">{markAllIcon}</span>
                      )}
                      <span className="menu-item-label">{markAllLabel}</span>
                    </span>
                  </MenuItem>
                </>
              )}
            </>
          ) : (
            <MenuItem
              className="menu-item menu-item-info menu-item-notification"
              textValue={`${emptyTitle} ${emptyMessage}`}
              isDisabled
            >
              <span className="menu-item-start">
                {emptyIcon && (
                  <span className="menu-item-icon">{emptyIcon}</span>
                )}
                <span className="menu-item-notification-content">
                  <span>{emptyTitle}</span>
                  <span>{emptyMessage}</span>
                </span>
              </span>
            </MenuItem>
          )}
        </Menu>
      </Popover>
    </MenuTrigger>
  )
}
