import { useState, type Key, type ReactNode } from 'react'
import {
  Button,
  Collection,
  FieldError,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue,
  Text,
} from 'react-aria-components'
import { renderIconNode } from './icons'

export interface TitanSelectOption {
  id: string
  label: string
  icon?: ReactNode
  disabled?: boolean
}

export interface TitanSelectProps {
  label?: string
  'aria-label'?: string
  options: TitanSelectOption[]
  defaultSelectedKey?: string
  selectedKey?: string
  onSelectionChange?: (key: Key | null) => void
  placeholder?: string
  hintMessage?: string
  errorMessage?: string
  isDisabled?: boolean
  isRequired?: boolean
  name?: string
}

export function TitanSelect({
  label,
  'aria-label': ariaLabel,
  options,
  defaultSelectedKey,
  selectedKey,
  onSelectionChange,
  placeholder,
  hintMessage,
  errorMessage,
  isDisabled = false,
  isRequired = false,
  name,
}: TitanSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const isInvalid = !!errorMessage
  const selectionProps = selectedKey !== undefined
    ? { selectedKey, onSelectionChange }
    : { defaultSelectedKey }

  return (
    <Select
      className="select-root"
      {...selectionProps}
      aria-label={ariaLabel}
      placeholder={placeholder}
      isDisabled={isDisabled}
      isRequired={isRequired}
      isInvalid={isInvalid}
      name={name}
      onOpenChange={(open) => setIsOpen(open)}
    >
      {label ? <Label className="select-label">{label}</Label> : null}
      <Button className="select-trigger">
        <SelectValue />
        <span className="select-trigger-chevron" aria-hidden="true">
          {isOpen ? renderIconNode('chevron-up') : renderIconNode('chevron-down')}
        </span>
      </Button>
      <Popover className="select-popover" placement="bottom start">
        <ListBox className="select-list">
          <Collection items={options}>
            {(option) => (
              <ListBoxItem
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
            )}
          </Collection>
        </ListBox>
      </Popover>
      {(errorMessage || hintMessage) && (
        <div className="field-help-row">
          {errorMessage ? (
            <FieldError className="field-error">{errorMessage}</FieldError>
          ) : (
            <Text slot="description" className="field-hint">
              {hintMessage}
            </Text>
          )}
        </div>
      )}
    </Select>
  )
}
