import { useMemo, useState } from 'react';
import { MenuTrigger, Menu, MenuItem, Popover } from 'react-aria-components';
import { Bell, ChevronDown, ChevronUp, Grip, Settings, Sparkles, UserCircle2 } from 'lucide-react';
import { Button } from './Button';
import { Icon } from './Icon';

export type NavbarTheme = 'demand' | 'audiense' | 'neutral' | 'insights' | 'linkedin' | 'tweetbinder' | 'connect';
export type NavbarStatus = 'default' | 'loading' | 'empty' | 'error' | 'success';

const THEME_TO_LOGO: Record<NavbarTheme, string> = {
  demand: 'logo-demand.svg',
  audiense: 'logo-audiense.svg',
  neutral: 'logo-audiense.svg',
  insights: 'logo-insights.svg',
  linkedin: 'logo-inkedin.svg',
  tweetbinder: 'logo-tweetbinder.svg',
  connect: 'logo-connect.svg',
};

const STATUS_TEXT: Record<NavbarStatus, string> = {
  default: 'Navbar ready.',
  loading: 'Loading navigation actions.',
  empty: 'No new notifications.',
  error: 'Navigation failed to load.',
  success: 'Navigation loaded successfully.',
};

export interface NavbarProps {
  theme?: NavbarTheme;
  userName?: string;
  status?: NavbarStatus;
  onChangeProduct?: () => void;
  onNotifications?: () => void;
  onSettings?: () => void;
  onSparkles?: () => void;
  onProfile?: () => void;
  onSignOut?: () => void;
}

export function Navbar({
  theme = 'insights',
  userName = 'User',
  status = 'default',
  onChangeProduct,
  onNotifications,
  onSettings,
  onSparkles,
  onProfile,
  onSignOut,
}: NavbarProps) {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const logoSrc = useMemo(() => `/assets/logos/${THEME_TO_LOGO[theme]}`, [theme]);

  return (
    <header className="titan-Navbar" aria-label="Main navigation">
      <div className="titan-Navbar-inner">
        <div className="titan-Navbar-left-group" aria-label="left-group">
          <Button
            slot="icon"
            variant="secondary"
            onPress={onChangeProduct}
            aria-label="Change product"
            data-testid="change-product-button"
          >
            <Icon icon={Grip} size="m" strokeWidth={1.5} />
          </Button>
          <a className="titan-Navbar-brand-lockup" href="/" aria-label="Go to homepage" data-testid="brand-lockup">
            <img src={logoSrc} alt="" aria-hidden />
          </a>
        </div>

        <div className="titan-Navbar-right-group" aria-label="right-group">
          <Button
            slot="icon"
            variant="secondary"
            onPress={onNotifications}
            aria-label="Notifications"
            data-testid="action-icon-buttons"
          >
            <Icon icon={Bell} size="m" strokeWidth={1.5} />
          </Button>
          <Button slot="icon" variant="secondary" onPress={onSettings} aria-label="Settings">
            <Icon icon={Settings} size="m" strokeWidth={1.5} />
          </Button>
          <Button slot="icon" variant="secondary" onPress={onSparkles} aria-label="AI actions">
            <Icon icon={Sparkles} size="m" strokeWidth={1.5} />
          </Button>
          <Button slot="icon" variant="secondary" onPress={onProfile} aria-label="Open profile" data-testid="user-avatar">
            <span className="titan-Navbar-avatar" aria-hidden>
              <Icon icon={UserCircle2} size="m" strokeWidth={1.5} />
            </span>
            <span className="titan-Navbar-srOnly">{userName}</span>
          </Button>

          <MenuTrigger onOpenChange={setIsUserMenuOpen}>
            <Button
              slot="icon"
              variant="secondary"
              aria-label={isUserMenuOpen ? 'Close user menu' : 'Open user menu'}
              data-testid="user-menu-chevron-button"
            >
              <Icon icon={isUserMenuOpen ? ChevronUp : ChevronDown} size="m" strokeWidth={1.5} />
            </Button>
            <Popover>
              <Menu aria-label="User menu">
                <MenuItem id="profile" onAction={onProfile}>
                  Profile
                </MenuItem>
                <MenuItem id="sign-out" onAction={onSignOut}>
                  Sign out
                </MenuItem>
              </Menu>
            </Popover>
          </MenuTrigger>
        </div>
      </div>
      <p className="titan-Navbar-srOnly" role="status" aria-live="polite">
        {STATUS_TEXT[status]}
      </p>
    </header>
  );
}
