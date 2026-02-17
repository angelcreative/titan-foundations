import type { ReactNode } from 'react'
import { Tooltip, TooltipTrigger } from 'react-aria-components'

export interface TitanTooltipProps {
  content: ReactNode
  children: ReactNode
  delay?: number
  closeDelay?: number
}

export function TitanTooltip({
  content,
  children,
  delay = 0,
  closeDelay = 0,
}: TitanTooltipProps) {
  return (
    <TooltipTrigger delay={delay} closeDelay={closeDelay}>
      {children}
      <Tooltip className="tooltip-box">{content}</Tooltip>
    </TooltipTrigger>
  )
}
