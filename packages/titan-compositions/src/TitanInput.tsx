import type { ReactNode } from 'react'
import {
  FieldError,
  Group,
  Input,
  Label,
  Text,
  TextArea,
  TextField,
  type TextFieldProps,
} from 'react-aria-components'

export interface TitanInputFieldProps extends Omit<TextFieldProps, 'children'> {
  label?: string
  hint?: string
  counter?: string
  leadingIcon?: ReactNode
  trailingIcon?: ReactNode
  errorMessage?: string
  placeholder?: string
  className?: string
}

export interface TitanTextareaFieldProps extends Omit<TextFieldProps, 'children'> {
  label?: string
  hint?: string
  counter?: string
  errorMessage?: string
  placeholder?: string
  className?: string
}

export function TitanInputField({
  label,
  hint,
  counter,
  leadingIcon,
  trailingIcon,
  errorMessage,
  placeholder,
  className = 'field-root',
  ...props
}: TitanInputFieldProps) {
  const iconContainerClass = [
    'input-with-icons',
    leadingIcon ? 'input-with-icons-left' : '',
    trailingIcon ? 'input-with-icons-right' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <TextField className={className} {...props}>
      {label ? <Label className="field-label">{label}</Label> : null}
      {leadingIcon || trailingIcon ? (
        <Group className={iconContainerClass}>
          {leadingIcon ? <span className="input-leading-icon">{leadingIcon}</span> : null}
          <Input className="input-field" placeholder={placeholder} />
          {trailingIcon ? <span className="input-trailing-icon">{trailingIcon}</span> : null}
        </Group>
      ) : (
        <Input className="input-field" placeholder={placeholder} />
      )}
      {hint || counter ? (
        <div className="field-help-row">
          {hint ? (
            <Text slot="description" className="field-hint">
              {hint}
            </Text>
          ) : (
            <span />
          )}
          {counter ? <span className="field-counter">{counter}</span> : null}
        </div>
      ) : null}
      {errorMessage ? <FieldError className="field-error">{errorMessage}</FieldError> : null}
    </TextField>
  )
}

export function TitanTextareaField({
  label,
  hint,
  counter,
  errorMessage,
  placeholder,
  className = 'field-root',
  ...props
}: TitanTextareaFieldProps) {
  return (
    <TextField className={className} {...props}>
      {label ? <Label className="field-label">{label}</Label> : null}
      <TextArea className="textarea-field" placeholder={placeholder} />
      {hint || counter ? (
        <div className="field-help-row">
          {hint ? (
            <Text slot="description" className="field-hint">
              {hint}
            </Text>
          ) : (
            <span />
          )}
          {counter ? <span className="field-counter">{counter}</span> : null}
        </div>
      ) : null}
      {errorMessage ? <FieldError className="field-error">{errorMessage}</FieldError> : null}
    </TextField>
  )
}
