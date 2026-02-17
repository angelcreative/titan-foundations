import type { ReactNode } from 'react'
import { Checkbox, Label, Radio, RadioGroup, Switch } from 'react-aria-components'
import { Check } from 'lucide-react'

export interface TitanCheckboxFieldProps {
  label: string
  isDisabled?: boolean
  defaultSelected?: boolean
}

export interface TitanRadioOption {
  value: string
  label: string
  disabled?: boolean
}

export interface TitanRadioGroupFieldProps {
  label: string
  options: TitanRadioOption[]
  defaultValue?: string
}

export interface TitanSwitchFieldProps {
  label: string
  isDisabled?: boolean
  defaultSelected?: boolean
}

export function TitanCheckboxField({
  label,
  isDisabled = false,
  defaultSelected = false,
}: TitanCheckboxFieldProps) {
  return (
    <Checkbox className="checkbox-root" isDisabled={isDisabled} defaultSelected={defaultSelected}>
      <span className="checkbox-box">
        <Check className="checkbox-mark" />
      </span>
      <span className="choice-text">{label}</span>
    </Checkbox>
  )
}

export function TitanRadioGroupField({
  label,
  options,
  defaultValue,
}: TitanRadioGroupFieldProps) {
  return (
    <RadioGroup className="choice-group" defaultValue={defaultValue}>
      <Label className="choice-group-label">{label}</Label>
      <div className="choice-list">
        {options.map((option) => (
          <Radio key={option.value} className="radio-root" value={option.value} isDisabled={option.disabled}>
            <span className="radio-box">
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
  isDisabled = false,
  defaultSelected = false,
}: TitanSwitchFieldProps) {
  return (
    <Switch className="switch-root" isDisabled={isDisabled} defaultSelected={defaultSelected}>
      <span className="choice-text">{label}</span>
      <span className="switch-track">
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
