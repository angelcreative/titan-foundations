import type { ReactNode } from 'react'
import { Button, Tag, type TagProps } from 'react-aria-components'
import { getToneStyle } from './TitanButton'
import { renderIconNode } from './icons'

export const TitanPillStates = {
  Base: 'base',
  Success: 'success',
  Alert: 'alert',
  Disabled: 'disabled',
  Error: 'error',
  Info: 'info',
} as const

export type TitanPillState = (typeof TitanPillStates)[keyof typeof TitanPillStates]

export interface TitanPillProps extends Omit<TagProps, 'children'> {
  id?: string
  label?: string
  children?: ReactNode
  state?: TitanPillState
  tone: string
  removable?: boolean
  onDismiss?: (id: string) => void
  'aria-label'?: string
}

function asText(value: ReactNode): string {
  return typeof value === 'string' ? value : ''
}

export function TitanPill({
  id,
  label,
  children,
  state = TitanPillStates.Success,
  tone,
  removable = true,
  onDismiss,
  ...tagProps
}: TitanPillProps) {
  const content = children ?? label ?? ''
  const idForDismiss = id ?? asText(content)
  const toneStyle = tone && !tagProps.isDisabled ? getToneStyle(tone, 'pill') : undefined
  const textValue = typeof content === 'string' ? content : tagProps.textValue

  return (
    <Tag {...tagProps} textValue={textValue}>
      {() => (
        <div className={`pill pill-${state}`} style={toneStyle}>
          <span className="pill-label">{content}</span>
          {removable && onDismiss ? (
            <Button
              className={`pill-close pill-close-${state}`}
              aria-label={`Remove ${typeof content === 'string' ? content : 'item'}`}
              slot="remove"
              onPress={() => onDismiss(idForDismiss)}
            >
              {renderIconNode('x')}
            </Button>
          ) : null}
        </div>
      )}
    </Tag>
  )
}
