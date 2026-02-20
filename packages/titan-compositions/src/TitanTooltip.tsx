import type { ComponentProps, ReactNode } from 'react'
import { OverlayArrow, Tooltip, TooltipTrigger } from 'react-aria-components'

export type TitanTooltipPlacement =
  | 'top'
  | 'top start'
  | 'top end'
  | 'bottom'
  | 'bottom start'
  | 'bottom end'
  | 'left'
  | 'left start'
  | 'left end'
  | 'right'
  | 'right start'
  | 'right end'

/** React Aria expects hyphenated placement (e.g. "top-start"). */
function toAriaPlacement(p: TitanTooltipPlacement): string {
  return p.replace(/\s+/, '-')
}

export interface TitanTooltipProps {
  /** Single content (body only). Use when no title/body variant is needed. */
  content?: ReactNode
  /** Title line (bold, prominent). Use with body for the title+body variant. */
  title?: ReactNode
  /** Body text (below title). Use with title for the title+body variant. */
  body?: ReactNode
  children: ReactNode
  delay?: number
  closeDelay?: number
  /** Preferred placement; defaults to "top". Tooltip flips to stay in viewport when shouldFlip is true. */
  placement?: TitanTooltipPlacement
  /** Flip placement when there is not enough space; default true. */
  shouldFlip?: boolean
}

function TooltipContent({
  content,
  title,
  body,
}: Pick<TitanTooltipProps, 'content' | 'title' | 'body'>) {
  const useTitleBody = title != null || body != null
  if (useTitleBody) {
    return (
      <>
        {title != null && <span className="tooltip-title">{title}</span>}
        {body != null && <span className="tooltip-body">{body}</span>}
      </>
    )
  }
  return <>{content}</>
}

export function TitanTooltip({
  content,
  title,
  body,
  children,
  delay = 0,
  closeDelay = 0,
  placement = 'top',
  shouldFlip = true,
}: TitanTooltipProps) {
  const hasContent = content != null || title != null || body != null
  if (!hasContent) return <>{children}</>

  return (
    <TooltipTrigger delay={delay} closeDelay={closeDelay}>
      {children}
      <Tooltip
        className="tooltip-box"
        placement={toAriaPlacement(placement) as ComponentProps<typeof Tooltip>['placement']}
        shouldFlip={shouldFlip}
        offset={8}
      >
        <OverlayArrow>
          <svg width={10} height={6} viewBox="0 0 10 6" aria-hidden>
            <path d="M0 0 L5 6 L10 0 Z" fill="var(--tooltip-slot-bg)" />
          </svg>
        </OverlayArrow>
        <TooltipContent content={content} title={title} body={body} />
      </Tooltip>
    </TooltipTrigger>
  )
}
