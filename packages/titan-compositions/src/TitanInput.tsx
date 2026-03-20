import { type ReactNode, useCallback, useRef } from 'react'
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
import { renderIconNode } from './icons'

export interface TitanInputFieldProps extends Omit<TextFieldProps, 'children'> {
  label?: string
  hint?: string
  hintMessage?: string
  counter?: string
  leadingIcon?: ReactNode
  startIcon?: ReactNode
  trailingIcon?: ReactNode
  endIcon?: ReactNode
  onEndIconClick?: () => void
  onClear?: () => void
  maxLength?: number
  onChange?: (value: string) => void
  errorMessage?: string
  placeholder?: string
  className?: string
}

export interface TitanTextareaFieldProps extends Omit<TextFieldProps, 'children'> {
  label?: string
  hint?: string
  hintMessage?: string
  counter?: string
  leadingIcon?: ReactNode
  startIcon?: ReactNode
  endIcon?: ReactNode
  onEndIconClick?: () => void
  onClear?: () => void
  autoExpand?: boolean
  maxLength?: number
  onChange?: (value: string) => void
  errorMessage?: string
  placeholder?: string
  className?: string
}

export type TitanTextInputProps = TitanInputFieldProps
export type TitanTextAreaProps = TitanTextareaFieldProps

export function TitanInputField({
  label,
  hint,
  hintMessage,
  counter,
  leadingIcon,
  startIcon,
  trailingIcon,
  endIcon,
  onEndIconClick,
  onClear,
  maxLength,
  onChange,
  errorMessage,
  placeholder,
  className = 'field-root',
  ...props
}: TitanInputFieldProps) {
  const resolvedHint = hint ?? hintMessage
  const resolvedLeadingIcon = leadingIcon ?? startIcon
  const resolvedTrailingIcon = trailingIcon ?? endIcon
  const hasTrailingAction = !!(resolvedTrailingIcon && (onEndIconClick || onClear))

  const iconContainerClass = [
    'input-with-icons',
    resolvedLeadingIcon ? 'input-with-icons-left' : '',
    resolvedTrailingIcon ? 'input-with-icons-right' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <TextField className={className} {...props}>
      {label ? <Label className="field-label">{label}</Label> : null}
      {resolvedLeadingIcon || resolvedTrailingIcon ? (
        <Group className={iconContainerClass}>
          {resolvedLeadingIcon ? <span className="input-leading-icon">{resolvedLeadingIcon}</span> : null}
          <Input
            className="input-field"
            placeholder={placeholder}
            maxLength={maxLength}
            onChange={(event) => onChange?.(event.target.value)}
          />
          {resolvedTrailingIcon ? (
            hasTrailingAction ? (
              <button
                type="button"
                className="input-trailing-icon input-trailing-action"
                onClick={() => {
                  onEndIconClick?.()
                  if (!onEndIconClick) onClear?.()
                }}
                aria-label="End icon button"
              >
                {resolvedTrailingIcon}
              </button>
            ) : (
              <span className="input-trailing-icon">{resolvedTrailingIcon}</span>
            )
          ) : null}
        </Group>
      ) : (
        <Input
          className="input-field"
          placeholder={placeholder}
          maxLength={maxLength}
          onChange={(event) => onChange?.(event.target.value)}
        />
      )}
      {resolvedHint || counter ? (
        <div className="field-help-row">
          {resolvedHint ? (
            <Text slot="description" className="field-hint">
              {resolvedHint}
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
  hintMessage,
  counter,
  leadingIcon,
  startIcon,
  endIcon,
  onEndIconClick,
  onClear,
  autoExpand = false,
  maxLength,
  onChange,
  errorMessage,
  placeholder,
  className = 'field-root',
  ...props
}: TitanTextareaFieldProps) {
  const resolvedHint = hint ?? hintMessage
  const resolvedLeadingIcon = leadingIcon ?? startIcon
  const resolvedEndIcon = endIcon ?? (onClear ? renderIconNode('x') : null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleInput = useCallback(() => {
    if (!autoExpand || !textareaRef.current) return
    const el = textareaRef.current
    el.style.height = 'auto'
    el.style.height = `${el.scrollHeight}px`
  }, [autoExpand])

  const hasIcons = !!(resolvedLeadingIcon || resolvedEndIcon)

  const containerClass = [
    'textarea-with-icons',
    resolvedLeadingIcon ? 'textarea-with-icons-left' : '',
    resolvedEndIcon ? 'textarea-with-icons-right' : '',
  ].filter(Boolean).join(' ')

  return (
    <TextField className={className} {...props}>
      {label ? <Label className="field-label">{label}</Label> : null}
      {hasIcons ? (
        <Group className={containerClass}>
          {resolvedLeadingIcon ? <span className="textarea-leading-icon">{resolvedLeadingIcon}</span> : null}
          <TextArea
            ref={textareaRef}
            className="textarea-field"
            placeholder={placeholder}
            maxLength={maxLength}
            onInput={handleInput}
            onChange={(event) => onChange?.(event.target.value)}
          />
          {resolvedEndIcon ? (
            <button
              type="button"
              className="textarea-clear-icon"
              onClick={() => {
                onEndIconClick?.()
                if (!onEndIconClick) onClear?.()
              }}
              aria-label="End icon button"
            >
              {resolvedEndIcon}
            </button>
          ) : null}
        </Group>
      ) : (
        <TextArea
          ref={textareaRef}
          className="textarea-field"
          placeholder={placeholder}
          maxLength={maxLength}
          onInput={handleInput}
          onChange={(event) => onChange?.(event.target.value)}
        />
      )}
      {resolvedHint || counter ? (
        <div className="field-help-row">
          {resolvedHint ? (
            <Text slot="description" className="field-hint">
              {resolvedHint}
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

/** Backward-compatible alias for consumers expecting TextInput naming. */
export function TitanTextInput(props: TitanTextInputProps) {
  return <TitanInputField {...props} />
}

/** Backward-compatible alias for consumers expecting TextArea naming. */
export function TitanTextArea(props: TitanTextAreaProps) {
  return <TitanTextareaField {...props} />
}
