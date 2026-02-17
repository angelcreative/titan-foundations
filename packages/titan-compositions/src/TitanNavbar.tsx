import { Button } from 'react-aria-components'
import {
  Bell,
  ChevronDown,
  CircleHelp,
  Grip,
  Handshake,
  Settings,
  Sparkles,
} from 'lucide-react'

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
  linkedin: 'logo-inkedin.svg',
  tweetbinder: 'logo-tweetbinder.svg',
  connect: 'logo-connect.svg',
}

export interface TitanNavbarProps {
  theme?: TitanNavbarTheme
  userInitial?: string
  logoAlt?: string
  onChangeProduct?: () => void
  onNotifications?: () => void
  onSupport?: () => void
  onHelp?: () => void
  onSettings?: () => void
  onFeaturedAction?: () => void
  onUserMenu?: () => void
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
            <Grip />
          </Button>
          <img className="navbar-logo" src={`/assets/logos/${logoFile}`} alt={logoAlt} />
        </div>

        <div className="navbar-right-group">
          <Button className="icon-ghost navbar-icon-button" aria-label="Notifications" onPress={onNotifications}>
            <Bell />
          </Button>
          <Button className="icon-ghost navbar-icon-button" aria-label="Support and community" onPress={onSupport}>
            <Handshake />
          </Button>
          <Button className="icon-ghost navbar-icon-button" aria-label="Help" onPress={onHelp}>
            <CircleHelp />
          </Button>
          <Button className="icon-ghost navbar-icon-button" aria-label="Settings" onPress={onSettings}>
            <Settings />
          </Button>
          <Button className="icon-ghost navbar-icon-button" aria-label="Featured action" onPress={onFeaturedAction}>
            <Sparkles />
          </Button>
          <div className="navbar-user">
            <span className="navbar-avatar" aria-hidden="true">
              {userInitial}
            </span>
            <Button className="icon-ghost navbar-chevron-button" aria-label="User menu" onPress={onUserMenu}>
              <ChevronDown />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
