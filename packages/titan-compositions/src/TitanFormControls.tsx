import type { ReactNode } from 'react'
import { Checkbox, Label, Radio, RadioGroup, Switch } from 'react-aria-components'
import { Check } from 'lucide-react'

export interface TitanCheckboxFieldProps {
  label: string
  name?: string
  isDisabled?: boolean
  isSelected?: boolean
  defaultSelected?: boolean
  onChange?: (isSelected: boolean) => void
}

export interface TitanRadioOption {
  value: string
  label: string
  disabled?: boolean
}

export interface TitanRadioGroupFieldProps {
  label: string
  name?: string
  options: TitanRadioOption[]
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
}

export interface TitanSwitchFieldProps {
  label: string
  name?: string
  isDisabled?: boolean
  isSelected?: boolean
  defaultSelected?: boolean
  onChange?: (isSelected: boolean) => void
}

export function TitanCheckboxField({
  label,
  name,
  isDisabled = false,
  isSelected,
  defaultSelected = false,
  onChange,
}: TitanCheckboxFieldProps) {
  return (
    <Checkbox
      className="checkbox-root"
      name={name}
      isDisabled={isDisabled}
      isSelected={isSelected}
      defaultSelected={defaultSelected}
      onChange={onChange}
    >
      <span className="checkbox-box" aria-hidden="true">
        <Check className="checkbox-mark" />
      </span>
      <span className="choice-text">{label}</span>
    </Checkbox>
  )
}

export function TitanRadioGroupField({
  label,
  name,
  options,
  value,
  defaultValue,
  onChange,
}: TitanRadioGroupFieldProps) {
  return (
    <RadioGroup
      className="choice-group"
      name={name}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
    >
      <Label className="choice-group-label">{label}</Label>
      <div className="choice-list">
        {options.map((option) => (
          <Radio
            key={option.value}
            className="radio-root"
            value={option.value}
            isDisabled={option.disabled}
          >
            <span className="radio-box" aria-hidden="true">
              <span className="radio-dot" />
            </span>
            <span className="choice-text">{option.label}</span>
          </Radio>
        ))}
      </div>
    </RadioGroup>
  )
}

export function TitanSwitchField({
  label,
  name,
  isDisabled = false,
  isSelected,
  defaultSelected = false,
  onChange,
}: TitanSwitchFieldProps) {
  return (
    <Switch
      className="switch-root"
      name={name}
      isDisabled={isDisabled}
      isSelected={isSelected}
      defaultSelected={defaultSelected}
      onChange={onChange}
    >
      <span className="choice-text">{label}</span>
      <span className="switch-track" aria-hidden="true">
        <span className="switch-thumb" />
      </span>
    </Switch>
  )
}

export interface TitanFormControlsGroupProps {
  children: ReactNode
}

export function TitanFormControlsGroup({ children }: TitanFormControlsGroupProps) {
  return <div className="form-controls-grid">{children}</div>
}
