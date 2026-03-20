import { Button } from 'react-aria-components'
import type { ReactNode } from 'react'
import { renderIconNode } from './icons'

export type TitanNavbarTheme =
  | 'demand'
  | 'audiense'
  | 'neutral'
  | 'insights'
  | 'linkedin'
  | 'tweetbinder'
  | 'connect'

const THEME_TO_LOGO: Record<TitanNavbarTheme, string> = {
  demand: 'logo-demand.svg',
  audiense: 'logo-audiense.svg',
  neutral: 'logo-audiense.svg',
  insights: 'logo-insights.svg',
  linkedin: 'logo-linkedin.svg',
  tweetbinder: 'logo-tweetbinder.svg',
  connect: 'logo-connect.svg',
}

const LOGO_CDN_BASE =
  'https://cdn.jsdelivr.net/gh/angelcreative/titan-foundations@main/public/assets/logos'

export interface TitanNavbarProps {
  theme?: TitanNavbarTheme
  userInitial?: string
  logoAlt?: string
  /** Base path or URL for logo assets. Defaults to CDN. Pass "/assets/logos" for local. */
  logoBasePath?: string
  onChangeProduct?: () => void
  onNotifications?: () => void
  onSupport?: () => void
  onHelp?: () => void
  onSettings?: () => void
  onFeaturedAction?: () => void
  onUserMenu?: () => void
}

export interface TitanNavBarProps {
  children: ReactNode
}

/**
 * Faithful runtime mirror of the official NavBar primitive:
 * a header wrapper with centered inner content.
 */
export function TitanNavBar({ children }: TitanNavBarProps) {
  return (
    <header className="navbar-shell">
      <div className="navbar-shell-content">{children}</div>
    </header>
  )
}

/**
 * Reusable navbar composition matching Titan contract:
 * left: Grip + themed logo
 * right: Bell, Handshake, CircleHelp, Settings, Sparkles, avatar + chevron
 */
export function TitanNavbar({
  theme = 'insights',
  userInitial = 'A',
  logoAlt = 'Product logo',
  logoBasePath = LOGO_CDN_BASE,
  onChangeProduct,
  onNotifications,
  onSupport,
  onHelp,
  onSettings,
  onFeaturedAction,
  onUserMenu,
}: TitanNavbarProps) {
  const logoFile = THEME_TO_LOGO[theme]

  return (
    <header className="navbar" role="banner">
      <div className="navbar-inner">
        <div className="navbar-left-group">
          <Button className="icon-ghost navbar-icon-button" aria-label="Change product" onPress={onChangeProduct}>
            {renderIconNode('change-product')}
          </Button>
          <img className="navbar-logo" src={`${logoBasePath}/${logoFile}`} alt={logoAlt} />
        </div>

        <div className="navbar-right-group">
          <Button className="icon-ghost navbar-icon-button" aria-label="Notifications" onPress={onNotifications}>
            {renderIconNode('notifications')}
          </Button>
          <Button className="icon-ghost navbar-icon-button" aria-label="Support and community" onPress={onSupport}>
            {renderIconNode('handshake')}
          </Button>
          <Button className="icon-ghost navbar-icon-button" aria-label="Help" onPress={onHelp}>
            {renderIconNode('question')}
          </Button>
          <Button className="icon-ghost navbar-icon-button" aria-label="Settings" onPress={onSettings}>
            {renderIconNode('settings')}
          </Button>
          <Button className="icon-ghost navbar-icon-button" aria-label="Featured action" onPress={onFeaturedAction}>
            {renderIconNode('sparks')}
          </Button>
          <div className="navbar-user">
            <span className="navbar-avatar" aria-hidden="true">
              {userInitial}
            </span>
            <Button className="icon-ghost navbar-chevron-button" aria-label="User menu" onPress={onUserMenu}>
              {renderIconNode('chevron-down')}
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
