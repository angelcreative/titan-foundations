import type { ReactNode } from 'react'
import { Collection, ToggleButton, ToggleButtonGroup } from 'react-aria-components'

export interface TitanToggleItem {
  id: string
  label: string
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
}

export interface TitanToggleButtonGroupProps {
  items: TitanToggleItem[]
  selectedKey?: string
  defaultSelectedKey?: string
  onSelectionChange?: (key: string) => void
  ariaLabel?: string
}

export function TitanToggleButtonGroup({
  items,
  selectedKey,
  defaultSelectedKey,
  onSelectionChange,
  ariaLabel = 'Options',
}: TitanToggleButtonGroupProps) {
  return (
    <ToggleButtonGroup
      className="toggle-button-group"
      selectionMode="single"
      selectedKeys={selectedKey ? new Set([selectedKey]) : undefined}
      defaultSelectedKeys={defaultSelectedKey ? new Set([defaultSelectedKey]) : undefined}
      onSelectionChange={(keys) => {
        const selected = [...keys][0]
        if (selected && onSelectionChange) onSelectionChange(String(selected))
      }}
      aria-label={ariaLabel}
    >
      <Collection items={items}>
        {(item) => (
          <ToggleButton id={item.id} className="toggle-button-item">
            {item.icon && item.iconPosition !== 'right' && (
              <span className="toggle-button-icon">{item.icon}</span>
            )}
            <span>{item.label}</span>
            {item.icon && item.iconPosition === 'right' && (
              <span className="toggle-button-icon">{item.icon}</span>
            )}
          </ToggleButton>
        )}
      </Collection>
    </ToggleButtonGroup>
  )
}
