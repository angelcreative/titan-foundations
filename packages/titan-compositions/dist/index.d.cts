import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode, CSSProperties, ComponentType } from 'react';
import { ButtonProps, TextFieldProps } from 'react-aria-components';

interface TitanBreadcrumbItem {
    id: string;
    label: string;
    onPress?: () => void;
}
interface TitanBreadcrumbProps {
    items: TitanBreadcrumbItem[];
    currentLabel: string;
    ariaLabel?: string;
}
/**
 * Reusable breadcrumb composition matching Titan structure:
 * - React Aria Breadcrumbs/Breadcrumb anatomy
 * - ChevronRight separator between items
 * - Current item marked with aria-current="page"
 */
declare function TitanBreadcrumb({ items, currentLabel, ariaLabel, }: TitanBreadcrumbProps): react_jsx_runtime.JSX.Element;

type TitanNavbarTheme = 'demand' | 'audiense' | 'neutral' | 'insights' | 'linkedin' | 'tweetbinder' | 'connect';
interface TitanNavbarProps {
    theme?: TitanNavbarTheme;
    userInitial?: string;
    logoAlt?: string;
    /** Base path or URL for logo assets. Defaults to CDN. Pass "/assets/logos" for local. */
    logoBasePath?: string;
    onChangeProduct?: () => void;
    onNotifications?: () => void;
    onSupport?: () => void;
    onHelp?: () => void;
    onSettings?: () => void;
    onFeaturedAction?: () => void;
    onUserMenu?: () => void;
}
/**
 * Reusable navbar composition matching Titan contract:
 * left: Grip + themed logo
 * right: Bell, Handshake, CircleHelp, Settings, Sparkles, avatar + chevron
 */
declare function TitanNavbar({ theme, userInitial, logoAlt, logoBasePath, onChangeProduct, onNotifications, onSupport, onHelp, onSettings, onFeaturedAction, onUserMenu, }: TitanNavbarProps): react_jsx_runtime.JSX.Element;

type TitanButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'link' | 'delete' | 'delete-secondary';
type TitanIconButtonVariant = 'secondary' | 'ghost' | 'delete';
interface TitanButtonProps extends Omit<ButtonProps, 'className' | 'children'> {
    variant?: TitanButtonVariant;
    className?: string;
    icon?: ReactNode;
    children?: ReactNode;
}
interface TitanIconButtonProps extends Omit<ButtonProps, 'className' | 'children'> {
    variant?: TitanIconButtonVariant;
    className?: string;
    children: ReactNode;
}
interface TitanToneStyle {
    '--pill-bg'?: string;
    '--pill-color'?: string;
    '--pill-icon-color'?: string;
    '--tag-bg'?: string;
    '--tag-color'?: string;
}
declare function getToneStyle(tone: string, mode: 'pill' | 'tag'): CSSProperties & TitanToneStyle;
declare function TitanButton({ variant, className, icon, children, ...props }: TitanButtonProps): react_jsx_runtime.JSX.Element;
declare function TitanIconButton({ variant, className, children, ...props }: TitanIconButtonProps): react_jsx_runtime.JSX.Element;

interface TitanPillProps {
    id: string;
    label: string;
    tone: string;
    onDismiss?: (id: string) => void;
}
declare function TitanPill({ id, label, tone, onDismiss }: TitanPillProps): react_jsx_runtime.JSX.Element;

interface TitanTagProps {
    label: string;
    tone: string;
}
declare function TitanTag({ label, tone }: TitanTagProps): react_jsx_runtime.JSX.Element;

interface TitanMenuOption {
    id: string;
    label: string;
    icon?: ReactNode;
    disabled?: boolean;
    destructive?: boolean;
    children?: TitanMenuOption[];
}
interface TitanMenuProps {
    triggerLabel?: string;
    triggerIcon?: ReactNode;
    iconOnly?: boolean;
    placement?: 'bottom start' | 'bottom end';
    items: TitanMenuOption[];
    onAction?: (id: string) => void;
}
declare function TitanMenuDropdown({ triggerLabel, triggerIcon, iconOnly, placement, items, onAction, }: TitanMenuProps): react_jsx_runtime.JSX.Element;

interface TitanSelectOption {
    id: string;
    label: string;
    icon?: ReactNode;
    disabled?: boolean;
}
interface TitanSelectProps {
    label: string;
    options: TitanSelectOption[];
    defaultSelectedKey?: string;
    isDisabled?: boolean;
}
declare function TitanSelect({ label, options, defaultSelectedKey, isDisabled, }: TitanSelectProps): react_jsx_runtime.JSX.Element;

interface TitanTabItem {
    id: string;
    label: string;
    content: ReactNode;
    disabled?: boolean;
}
interface TitanTabsProps {
    items: TitanTabItem[];
    defaultSelectedKey?: string;
    overflow?: boolean;
    orientation?: 'horizontal' | 'vertical';
    ariaLabel?: string;
}
declare function TitanTabs({ items, defaultSelectedKey, overflow, orientation, ariaLabel, }: TitanTabsProps): react_jsx_runtime.JSX.Element;

type TitanPaginationPage = number | 'ellipsis';
interface TitanPaginationProps {
    ariaLabel: string;
    pages: TitanPaginationPage[];
    currentPage: number;
    previousDisabled?: boolean;
    nextDisabled?: boolean;
    onPageChange?: (page: number) => void;
    onPrevious?: () => void;
    onNext?: () => void;
}
declare function TitanPagination({ ariaLabel, pages, currentPage, previousDisabled, nextDisabled, onPageChange, onPrevious, onNext, }: TitanPaginationProps): react_jsx_runtime.JSX.Element;

interface TitanDrawerProps {
    triggerLabel: string;
    title: string;
    children: ReactNode;
}
declare function TitanDrawer({ triggerLabel, title, children }: TitanDrawerProps): react_jsx_runtime.JSX.Element;

interface TitanDialogProps {
    triggerLabel: string;
    title: string;
    body: ReactNode;
    leftAction?: ReactNode;
    rightAction?: ReactNode;
}
declare function TitanDialog({ triggerLabel, title, body, leftAction, rightAction, }: TitanDialogProps): react_jsx_runtime.JSX.Element;

interface TitanTooltipProps {
    content: ReactNode;
    children: ReactNode;
    delay?: number;
    closeDelay?: number;
}
declare function TitanTooltip({ content, children, delay, closeDelay, }: TitanTooltipProps): react_jsx_runtime.JSX.Element;

type TitanToastVariant = 'success' | 'error' | 'info' | 'warning';
interface TitanToastItem {
    id: string | number;
    variant: TitanToastVariant;
    title: string;
    body: string;
    icon?: ReactNode;
}
interface TitanToastRegionProps {
    toasts: TitanToastItem[];
    onDismiss: (id: TitanToastItem['id']) => void;
}
declare function TitanToastRegion({ toasts, onDismiss }: TitanToastRegionProps): react_jsx_runtime.JSX.Element;

interface TitanCheckboxFieldProps {
    label: string;
    isDisabled?: boolean;
    defaultSelected?: boolean;
}
interface TitanRadioOption {
    value: string;
    label: string;
    disabled?: boolean;
}
interface TitanRadioGroupFieldProps {
    label: string;
    options: TitanRadioOption[];
    defaultValue?: string;
}
interface TitanSwitchFieldProps {
    label: string;
    isDisabled?: boolean;
    defaultSelected?: boolean;
}
declare function TitanCheckboxField({ label, isDisabled, defaultSelected, }: TitanCheckboxFieldProps): react_jsx_runtime.JSX.Element;
declare function TitanRadioGroupField({ label, options, defaultValue, }: TitanRadioGroupFieldProps): react_jsx_runtime.JSX.Element;
declare function TitanSwitchField({ label, isDisabled, defaultSelected, }: TitanSwitchFieldProps): react_jsx_runtime.JSX.Element;
interface TitanFormControlsGroupProps {
    children: ReactNode;
}
declare function TitanFormControlsGroup({ children }: TitanFormControlsGroupProps): react_jsx_runtime.JSX.Element;

interface TitanInputFieldProps extends Omit<TextFieldProps, 'children'> {
    label?: string;
    hint?: string;
    counter?: string;
    leadingIcon?: ReactNode;
    trailingIcon?: ReactNode;
    errorMessage?: string;
    placeholder?: string;
    className?: string;
}
interface TitanTextareaFieldProps extends Omit<TextFieldProps, 'children'> {
    label?: string;
    hint?: string;
    counter?: string;
    errorMessage?: string;
    placeholder?: string;
    className?: string;
}
declare function TitanInputField({ label, hint, counter, leadingIcon, trailingIcon, errorMessage, placeholder, className, ...props }: TitanInputFieldProps): react_jsx_runtime.JSX.Element;
declare function TitanTextareaField({ label, hint, counter, errorMessage, placeholder, className, ...props }: TitanTextareaFieldProps): react_jsx_runtime.JSX.Element;

type TitanCardSpan = 4 | 8 | 12 | 16;
interface TitanCardGridProps {
    children: ReactNode;
}
interface TitanCardProps {
    children: ReactNode;
    span?: TitanCardSpan;
    className?: string;
}
/**
 * 16-column Titan layout grid.
 */
declare function TitanCardGrid({ children }: TitanCardGridProps): react_jsx_runtime.JSX.Element;
/**
 * Reusable card with 4/8/12/16 span contract.
 */
declare function TitanCard({ children, span, className }: TitanCardProps): react_jsx_runtime.JSX.Element;

interface TitanTableColumn {
    key: string;
    header: string;
    render?: (row: TitanTableRow) => ReactNode;
}
interface TitanTableRow {
    id: string;
    [key: string]: ReactNode;
}
interface TitanBorderlessTableProps {
    columns: TitanTableColumn[];
    rows: TitanTableRow[];
}
/**
 * Reusable borderless table composition using Titan table classes.
 */
declare function TitanBorderlessTable({ columns, rows }: TitanBorderlessTableProps): react_jsx_runtime.JSX.Element;

interface TitanTwoUpOneDownLayoutProps {
    theme?: TitanNavbarTheme;
    userInitial?: string;
    breadcrumbItems: TitanBreadcrumbItem[];
    breadcrumbCurrentLabel: string;
    leftTop: ReactNode;
    rightTop: ReactNode;
    bottom: ReactNode;
}
/**
 * Reusable page composition:
 * - Navbar
 * - Breadcrumb
 * - Content: 2/4 + 2/4 in first row, 4/4 in second row
 */
declare function TitanTwoUpOneDownLayout({ theme, userInitial, breadcrumbItems, breadcrumbCurrentLabel, leftTop, rightTop, bottom, }: TitanTwoUpOneDownLayoutProps): react_jsx_runtime.JSX.Element;

interface TitanToggleItem {
    id: string;
    label: string;
    icon?: ReactNode;
}
interface TitanToggleButtonGroupProps {
    items: TitanToggleItem[];
    selectedKey?: string;
    defaultSelectedKey?: string;
    onSelectionChange?: (key: string) => void;
    ariaLabel?: string;
}
declare function TitanToggleButtonGroup({ items, selectedKey, defaultSelectedKey, onSelectionChange, ariaLabel, }: TitanToggleButtonGroupProps): react_jsx_runtime.JSX.Element;

interface TitanSidebarProps {
    collapsed?: boolean;
    onToggle?: () => void;
    activeId?: string;
    defaultActiveId?: string;
    onActiveChange?: (id: string) => void;
    collapsedWidth?: string;
    expandedWidth?: string;
    children: ReactNode;
}
declare function TitanSidebar({ collapsed, onToggle, activeId: controlledActiveId, defaultActiveId, onActiveChange, children, }: TitanSidebarProps): react_jsx_runtime.JSX.Element;
interface TitanSidebarHeaderProps {
    children: ReactNode;
}
declare function TitanSidebarHeader({ children }: TitanSidebarHeaderProps): react_jsx_runtime.JSX.Element;
interface TitanSidebarItemProps {
    id: string;
    icon?: ComponentType<{
        className?: string;
    }>;
    onPress?: () => void;
    children: ReactNode;
}
declare function TitanSidebarItem({ id, icon: Icon, onPress, children, }: TitanSidebarItemProps): react_jsx_runtime.JSX.Element;

export { TitanBorderlessTable, type TitanBorderlessTableProps, TitanBreadcrumb, type TitanBreadcrumbItem, type TitanBreadcrumbProps, TitanButton, type TitanButtonProps, type TitanButtonVariant, TitanCard, TitanCardGrid, type TitanCardGridProps, type TitanCardProps, type TitanCardSpan, TitanCheckboxField, type TitanCheckboxFieldProps, TitanDialog, type TitanDialogProps, TitanDrawer, type TitanDrawerProps, TitanFormControlsGroup, type TitanFormControlsGroupProps, TitanIconButton, type TitanIconButtonProps, type TitanIconButtonVariant, TitanInputField, type TitanInputFieldProps, TitanMenuDropdown, type TitanMenuOption, type TitanMenuProps, TitanNavbar, type TitanNavbarProps, type TitanNavbarTheme, TitanPagination, type TitanPaginationPage, type TitanPaginationProps, TitanPill, type TitanPillProps, TitanRadioGroupField, type TitanRadioGroupFieldProps, type TitanRadioOption, TitanSelect, type TitanSelectOption, type TitanSelectProps, TitanSidebar, TitanSidebarHeader, type TitanSidebarHeaderProps, TitanSidebarItem, type TitanSidebarItemProps, type TitanSidebarProps, TitanSwitchField, type TitanSwitchFieldProps, type TitanTabItem, type TitanTableColumn, type TitanTableRow, TitanTabs, type TitanTabsProps, TitanTag, type TitanTagProps, TitanTextareaField, type TitanTextareaFieldProps, type TitanToastItem, TitanToastRegion, type TitanToastRegionProps, type TitanToastVariant, TitanToggleButtonGroup, type TitanToggleButtonGroupProps, type TitanToggleItem, TitanTooltip, type TitanTooltipProps, TitanTwoUpOneDownLayout, type TitanTwoUpOneDownLayoutProps, getToneStyle };
