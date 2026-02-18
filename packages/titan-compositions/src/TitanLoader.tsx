import type { CSSProperties } from 'react'

export interface TitanLoaderProps {
  /** Width and height in px. Defaults to 120. */
  size?: number
  /** Alt text for the loader image. */
  label?: string
  /** Extra CSS class. */
  className?: string
  /** Inline style overrides. */
  style?: CSSProperties
}

export function TitanLoader({
  size = 120,
  label = 'Loading…',
  className = '',
  style,
}: TitanLoaderProps) {
  return (
    <div
      className={`titan-loader ${className}`.trim()}
      role="status"
      aria-label={label}
      style={style}
    >
      <img
        className="titan-loader-img"
        src="/assets/logos/loader-l.gif"
        alt=""
        aria-hidden="true"
        width={size}
        height={size}
        style={{ width: size, height: size }}
      />
      <span className="titan-loader-sr-only">{label}</span>
    </div>
  )
}
