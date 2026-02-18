import type { CSSProperties } from 'react'

const LOADER_CDN_BASE =
  'https://cdn.jsdelivr.net/gh/angelcreative/titan-foundations@main/public/assets/logos'

export interface TitanLoaderProps {
  /** Width and height in px. Defaults to 120. */
  size?: number
  /** Alt text for the loader image. */
  label?: string
  /** Extra CSS class. */
  className?: string
  /** Inline style overrides. */
  style?: CSSProperties
  /** Base path or URL for loader assets. Defaults to CDN. Pass "/assets/logos" for local. */
  loaderBasePath?: string
}

export function TitanLoader({
  size = 120,
  label = 'Loading…',
  className = '',
  style,
  loaderBasePath = LOADER_CDN_BASE,
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
        src={`${loaderBasePath}/loader-l.gif`}
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
