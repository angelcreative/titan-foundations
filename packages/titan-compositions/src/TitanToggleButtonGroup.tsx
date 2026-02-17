import type { ReactNode } from 'react'
import { ToggleButton, ToggleButtonGroup } from 'react-aria-components'

export interface TitanToggleItem {
  id: string
  label: string
  icon?: ReactNode
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
      {items.map((item) => (
        <ToggleButton key={item.id} id={item.id} className="toggle-button-item">
          {item.icon && <span className="toggle-button-icon">{item.icon}</span>}
          <span>{item.label}</span>
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  )
}
