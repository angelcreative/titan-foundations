import type { Key, ReactNode } from 'react'
import {
  Button,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue,
} from 'react-aria-components'
import { ChevronDown } from 'lucide-react'

export interface TitanSelectOption {
  id: string
  label: string
  icon?: ReactNode
  disabled?: boolean
}

export interface TitanSelectProps {
  label: string
  options: TitanSelectOption[]
  defaultSelectedKey?: string
  selectedKey?: string
  onSelectionChange?: (key: Key | null) => void
  isDisabled?: boolean
}

export function TitanSelect({
  label,
  options,
  defaultSelectedKey,
  selectedKey,
  onSelectionChange,
  isDisabled = false,
}: TitanSelectProps) {
  const selectionProps = selectedKey !== undefined
    ? { selectedKey, onSelectionChange }
    : { defaultSelectedKey }

  return (
    <Select
      className="select-root"
      {...selectionProps}
      isDisabled={isDisabled}
    >
      <Label className="select-label">{label}</Label>
      <Button className="select-trigger">
        <SelectValue />
        <span className="select-trigger-chevron" aria-hidden="true">
          <ChevronDown />
        </span>
      </Button>
      <Popover className="select-popover" placement="bottom start">
        <ListBox className="select-list">
          {options.map((option) => (
            <ListBoxItem
              key={option.id}
              id={option.id}
              className="select-item"
              isDisabled={option.disabled}
              textValue={option.label}
            >
              <span className="select-item-start">
                {option.icon ? <span className="select-item-icon">{option.icon}</span> : null}
                <span>{option.label}</span>
              </span>
            </ListBoxItem>
          ))}
        </ListBox>
      </Popover>
    </Select>
  )
}
