import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode, CSSProperties, Key, ComponentType } from 'react';
import { ButtonProps, TextFieldProps, CellProps, ColumnProps, ResizableTableContainer, RowProps, Table, TableBodyProps, TableHeaderProps, TableLoadMoreItem } from 'react-aria-components';
export { ColumnResizer } from 'react-aria-components';
import { CalendarDate } from '@internationalized/date';
export { CalendarDate } from '@internationalized/date';
import { LucideIcon } from 'lucide-react';

interface TitanBadgeProps {
    count: number;
    max?: number;
}
interface TitanBadgeAnchorProps {
    count: number;
    max?: number;
    children: ReactNode;
}
declare function TitanBadge({ count, max }: TitanBadgeProps): react_jsx_runtime.JSX.Element | null;
declare function TitanBadgeAnchor({ count, max, children }: TitanBadgeAnchorProps): react_jsx_runtime.JSX.Element;

interface TitanBreadcrumbItem {
    id: string;
    label: string;
    icon?: ReactNode;
    selected?: boolean;
    disabled?: boolean;
    onPress?: () => void;
}
interface TitanBreadcrumbProps {
    items: TitanBreadcrumbItem[];
    currentLabel: string;
    maxVisible?: number;
    ariaLabel?: string;
}
declare function TitanBreadcrumb({ items, currentLabel, maxVisible, ariaLabel, }: TitanBreadcrumbProps): react_jsx_runtime.JSX.Element;

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
    leftElement?: ReactNode;
    disabled?: boolean;
    destructive?: boolean;
    children?: TitanMenuOption[];
}
interface TitanMenuSearchOption {
    id: string;
    label: string;
    highlightRange?: [number, number];
    icon?: ReactNode;
}
interface TitanMenuProfileOption {
    id: string;
    name: string;
    username: string;
    avatarUrl?: string;
    metric?: string;
}
interface TitanMenuNotification {
    id: string;
    icon?: ReactNode;
    title: ReactNode;
    date: string;
}
interface TitanMenuProps {
    triggerLabel?: string;
    triggerIcon?: ReactNode;
    iconOnly?: boolean;
    placement?: 'bottom start' | 'bottom end';
    items: TitanMenuOption[];
    onAction?: (id: string) => void;
}
interface TitanSearchMenuProps {
    triggerLabel?: string;
    triggerIcon?: ReactNode;
    iconOnly?: boolean;
    placement?: 'bottom start' | 'bottom end';
    items: TitanMenuSearchOption[];
    query?: string;
    emptyIcon?: ReactNode;
    emptyLabel?: string;
    addNewIcon?: ReactNode;
    addNewLabel?: string;
    onAction?: (id: string) => void;
    onAddNew?: () => void;
}
interface TitanProfileMenuProps {
    triggerLabel?: string;
    triggerIcon?: ReactNode;
    iconOnly?: boolean;
    placement?: 'bottom start' | 'bottom end';
    items: TitanMenuProfileOption[];
    onAction?: (id: string) => void;
}
interface TitanNotificationsMenuProps {
    triggerIcon?: ReactNode;
    triggerLabel?: string;
    badgeCount?: number;
    badgeMax?: number;
    placement?: 'bottom end' | 'bottom start';
    notifications: TitanMenuNotification[];
    emptyIcon?: ReactNode;
    emptyTitle?: string;
    emptyMessage?: string;
    markAllLabel?: string;
    markAllIcon?: ReactNode;
    onAction?: (id: string) => void;
    onMarkAll?: () => void;
}
declare function TitanMenuDropdown({ triggerLabel, triggerIcon, iconOnly, placement, items, onAction, }: TitanMenuProps): react_jsx_runtime.JSX.Element;
declare function TitanSearchMenu({ triggerLabel, triggerIcon, iconOnly, placement, items, query, emptyIcon, emptyLabel, addNewIcon, addNewLabel, onAction, onAddNew, }: TitanSearchMenuProps): react_jsx_runtime.JSX.Element;
declare function TitanProfileMenu({ triggerLabel, triggerIcon, iconOnly, placement, items, onAction, }: TitanProfileMenuProps): react_jsx_runtime.JSX.Element;
declare function TitanNotificationsMenu({ triggerIcon, triggerLabel, badgeCount, badgeMax, placement, notifications, emptyIcon, emptyTitle, emptyMessage, markAllLabel, markAllIcon, onAction, onMarkAll, }: TitanNotificationsMenuProps): react_jsx_runtime.JSX.Element;

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
    selectedKey?: string;
    onSelectionChange?: (key: Key | null) => void;
    isDisabled?: boolean;
}
declare function TitanSelect({ label, options, defaultSelectedKey, selectedKey, onSelectionChange, isDisabled, }: TitanSelectProps): react_jsx_runtime.JSX.Element;

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
    /** When provided, used as the trigger instead of the default button. */
    trigger?: ReactNode;
    /** Used when `trigger` is not provided. */
    triggerLabel?: string;
    /** Class for the default trigger button (e.g. "btn btn-tertiary"). Ignored when `trigger` is provided. */
    triggerClassName?: string;
    /** Optional icon to show after the label on the default trigger. Ignored when `trigger` is provided. */
    triggerIcon?: ReactNode;
    title: string;
    children: ReactNode;
}
declare function TitanDrawer({ trigger, triggerLabel, triggerClassName, triggerIcon, title, children }: TitanDrawerProps): react_jsx_runtime.JSX.Element;

interface TitanDialogProps {
    triggerLabel: string;
    title: string;
    body: ReactNode;
    leftAction?: ReactNode;
    rightAction?: ReactNode;
}
declare function TitanDialog({ triggerLabel, title, body, leftAction, rightAction, }: TitanDialogProps): react_jsx_runtime.JSX.Element;

type TitanTooltipPlacement = 'top' | 'top start' | 'top end' | 'bottom' | 'bottom start' | 'bottom end' | 'left' | 'left start' | 'left end' | 'right' | 'right start' | 'right end';
interface TitanTooltipProps {
    /** Single content (body only). Use when no title/body variant is needed. */
    content?: ReactNode;
    /** Title line (bold, prominent). Use with body for the title+body variant. */
    title?: ReactNode;
    /** Body text (below title). Use with title for the title+body variant. */
    body?: ReactNode;
    children: ReactNode;
    delay?: number;
    closeDelay?: number;
    /** Preferred placement; defaults to "top". Tooltip flips to stay in viewport when shouldFlip is true. */
    placement?: TitanTooltipPlacement;
    /** Flip placement when there is not enough space; default true. */
    shouldFlip?: boolean;
}
declare function TitanTooltip({ content, title, body, children, delay, closeDelay, placement, shouldFlip, }: TitanTooltipProps): react_jsx_runtime.JSX.Element;

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
    name?: string;
    isDisabled?: boolean;
    isSelected?: boolean;
    defaultSelected?: boolean;
    onChange?: (isSelected: boolean) => void;
}
interface TitanRadioOption {
    value: string;
    label: string;
    disabled?: boolean;
}
interface TitanRadioGroupFieldProps {
    label: string;
    name?: string;
    options: TitanRadioOption[];
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
}
interface TitanSwitchFieldProps {
    label: string;
    name?: string;
    isDisabled?: boolean;
    isSelected?: boolean;
    defaultSelected?: boolean;
    onChange?: (isSelected: boolean) => void;
}
declare function TitanCheckboxField({ label, name, isDisabled, isSelected, defaultSelected, onChange, }: TitanCheckboxFieldProps): react_jsx_runtime.JSX.Element;
declare function TitanRadioGroupField({ label, name, options, value, defaultValue, onChange, }: TitanRadioGroupFieldProps): react_jsx_runtime.JSX.Element;
declare function TitanSwitchField({ label, name, isDisabled, isSelected, defaultSelected, onChange, }: TitanSwitchFieldProps): react_jsx_runtime.JSX.Element;
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
    leadingIcon?: ReactNode;
    onClear?: () => void;
    autoExpand?: boolean;
    errorMessage?: string;
    placeholder?: string;
    className?: string;
}
declare function TitanInputField({ label, hint, counter, leadingIcon, trailingIcon, errorMessage, placeholder, className, ...props }: TitanInputFieldProps): react_jsx_runtime.JSX.Element;
declare function TitanTextareaField({ label, hint, counter, leadingIcon, onClear, autoExpand, errorMessage, placeholder, className, ...props }: TitanTextareaFieldProps): react_jsx_runtime.JSX.Element;

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

interface TitanTableProps extends Omit<React.ComponentProps<typeof Table>, 'className'> {
    className?: string;
    wrapperClassName?: string;
    /** When true (e.g. inside TitanResizableTableContainer), do not wrap in div. */
    noWrapper?: boolean;
    /** When true, thead stays visible when scrolling (use only for async/load-more tables). Default false. */
    stickyHeader?: boolean;
}
declare function TitanTable({ className, wrapperClassName, noWrapper, stickyHeader, ...props }: TitanTableProps): react_jsx_runtime.JSX.Element;
declare function TitanTableHeader<T extends object>({ columns, children, ...props }: TableHeaderProps<T>): react_jsx_runtime.JSX.Element;
interface TitanColumnProps extends ColumnProps {
    allowsResizing?: boolean;
    /** When allowsSorting, put sort icon on the left ([sort] label) or right (label [sort]). Default 'left' for table-advanced. */
    sortIconPosition?: 'left' | 'right';
    /** Show an info icon after the label (label [info] or [sort] label [info]). */
    showInfoIcon?: boolean;
    /** Accessible label for the info icon. */
    infoIconAriaLabel?: string;
}
declare function TitanColumn(props: TitanColumnProps): react_jsx_runtime.JSX.Element;
declare function TitanTableBody<T extends object>(props: TableBodyProps<T>): react_jsx_runtime.JSX.Element;
declare function TitanRow<T extends object>({ columns, children, ...props }: RowProps<T>): react_jsx_runtime.JSX.Element;
declare function TitanCell(props: CellProps): react_jsx_runtime.JSX.Element;
declare function TitanResizableTableContainer({ className, children, ...props }: React.ComponentProps<typeof ResizableTableContainer>): react_jsx_runtime.JSX.Element;
declare function TitanTableLoadMoreItem(props: React.ComponentProps<typeof TableLoadMoreItem>): react_jsx_runtime.JSX.Element;

interface TitanTableCellDateProps {
    /** Fecha: Date, string ISO o timestamp */
    value: Date | string | number;
    /** Formato por defecto: "Nov 15, 2025" */
    format?: (d: Date) => string;
    className?: string;
}
declare function TitanTableCellDate({ value, format, className }: TitanTableCellDateProps): react_jsx_runtime.JSX.Element;
interface TitanTableCellInitialsProps {
    /** Iniciales (ej. "AW") o nombre del que derivar (ej. "Alice Smith" → "AS") */
    initials?: string;
    name?: string;
    /** Seed para color estable por fila (ej. id) */
    seed?: string | number;
    className?: string;
}
declare function TitanTableCellInitials({ initials, name, seed, className, }: TitanTableCellInitialsProps): react_jsx_runtime.JSX.Element;
interface TitanTableCellActionsItem {
    id: string;
    label: string;
    onAction: () => void;
}
interface TitanTableCellActionsProps {
    onEdit?: () => void;
    onDelete?: () => void;
    /** Items extra (ej. "Rename", "Clone") */
    extraItems?: TitanTableCellActionsItem[];
    ariaLabel?: string;
    className?: string;
}
declare function TitanTableCellActions({ onEdit, onDelete, extraItems, ariaLabel, className, }: TitanTableCellActionsProps): react_jsx_runtime.JSX.Element | null;
type TitanTableCellStatusVariant = 'processing' | 'finished' | 'demo' | 'failed';
interface TitanTableCellStatusProps {
    status: TitanTableCellStatusVariant;
    /** Si no se pasa, se usa el label por defecto del status */
    label?: string;
    className?: string;
}
declare function TitanTableCellStatus({ status, label, className }: TitanTableCellStatusProps): react_jsx_runtime.JSX.Element;

declare function TitanTableExampleBasic(): react_jsx_runtime.JSX.Element;
declare function TitanTableExampleDynamic(): react_jsx_runtime.JSX.Element;
declare function TitanTableExampleAsync(): react_jsx_runtime.JSX.Element;
declare function TitanTableExampleLinks(): react_jsx_runtime.JSX.Element;
declare function TitanTableExampleClickableNameCell(): react_jsx_runtime.JSX.Element;
declare function TitanTableExampleCellTypes(): react_jsx_runtime.JSX.Element;
declare function TitanTableExampleEmpty(): react_jsx_runtime.JSX.Element;
declare function TitanTableExampleSelection(): react_jsx_runtime.JSX.Element;
declare function TitanTableExampleSortable(): react_jsx_runtime.JSX.Element;
declare function TitanTableExampleHeaderVariants(): react_jsx_runtime.JSX.Element;
declare function TitanTableExampleResizable(): react_jsx_runtime.JSX.Element;
declare function TitanTableExampleDragDrop(): react_jsx_runtime.JSX.Element;

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
    iconPosition?: 'left' | 'right';
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
    /** Icon: component (e.g. from lucide-react) or string name (resolved Lucide first, then fallback if registered). */
    icon?: ComponentType<{
        className?: string;
    }> | string;
    onPress?: () => void;
    children: ReactNode;
}
declare function TitanSidebarItem({ id, icon, onPress, children, }: TitanSidebarItemProps): react_jsx_runtime.JSX.Element;

interface TitanLoaderProps {
    /** Width and height in px. Defaults to 120. */
    size?: number;
    /** Alt text for the loader image. */
    label?: string;
    /** Extra CSS class. */
    className?: string;
    /** Inline style overrides. */
    style?: CSSProperties;
    /** Base path or URL for loader assets. Defaults to CDN. Pass "/assets/logos" for local. */
    loaderBasePath?: string;
}
declare function TitanLoader({ size, label, className, style, loaderBasePath, }: TitanLoaderProps): react_jsx_runtime.JSX.Element;

interface TitanSliderProps {
    label?: string;
    defaultValue?: number;
    minValue?: number;
    maxValue?: number;
    step?: number;
    isDisabled?: boolean;
    showOutput?: boolean;
    onChange?: (value: number) => void;
    formatOptions?: Intl.NumberFormatOptions;
    className?: string;
}
declare function TitanSlider({ label, defaultValue, minValue, maxValue, step, isDisabled, showOutput, onChange, formatOptions, className, }: TitanSliderProps): react_jsx_runtime.JSX.Element;
interface TitanRangeSliderProps {
    label?: string;
    defaultValue?: [number, number];
    minValue?: number;
    maxValue?: number;
    step?: number;
    isDisabled?: boolean;
    showOutput?: boolean;
    onChange?: (value: number[]) => void;
    formatOptions?: Intl.NumberFormatOptions;
    className?: string;
}
declare function TitanRangeSlider({ label, defaultValue, minValue, maxValue, step, isDisabled, showOutput, onChange, formatOptions, className, }: TitanRangeSliderProps): react_jsx_runtime.JSX.Element;

interface TitanProgressBarProps {
    label?: string;
    value?: number;
    minValue?: number;
    maxValue?: number;
    showValue?: boolean;
    formatOptions?: Intl.NumberFormatOptions;
    className?: string;
}
declare function TitanProgressBar({ label, value, minValue, maxValue, showValue, formatOptions, className, }: TitanProgressBarProps): react_jsx_runtime.JSX.Element;

interface TitanCalendarProps {
    defaultValue?: CalendarDate;
    value?: CalendarDate;
    onChange?: (date: CalendarDate) => void;
    showTime?: boolean;
    defaultHour?: number;
    defaultMinute?: number;
    onTimeChange?: (hour: number, minute: number) => void;
    minValue?: CalendarDate;
    maxValue?: CalendarDate;
    isDisabled?: boolean;
    className?: string;
}
declare function TitanCalendar({ defaultValue, value, onChange, showTime, defaultHour, defaultMinute, onTimeChange, minValue, maxValue, isDisabled, className, }: TitanCalendarProps): react_jsx_runtime.JSX.Element;

type IconComponent = LucideIcon;

/**
 * Register fallback icons (e.g. from @tabler/icons-react) for names not in Lucide.
 * Call once at app init if you want Tabler fallback:
 *   import { registerFallbackIcons } from 'titan-compositions'
 *   import { IconBrandThreads } from '@tabler/icons-react'
 *   registerFallbackIcons({ threads: IconBrandThreads })
 */
declare function registerFallbackIcons(map: Record<string, ComponentType<{
    className?: string;
}>>): void;
/**
 * Resolve icon by name: Lucide first, then fallback (e.g. Tabler).
 * Returns the component or null if not found.
 * Names are normalized to kebab-case; aliases (e.g. "empty-box" -> "box") are applied.
 */
declare function resolveIcon(name: string): IconComponent | ComponentType<{
    className?: string;
}> | null;

interface RenderIconProps {
    className?: string;
}
/**
 * Render icon from either a string name (resolved via Lucide then fallback)
 * or a component / ReactNode. Used internally by components that accept icon prop.
 * Does not change behavior when icon is already a component or node.
 */
declare function renderIconNode(icon: ReactNode | ComponentType<RenderIconProps> | string | undefined, props?: RenderIconProps): ReactNode;

export { type IconComponent, type RenderIconProps, TitanBadge, TitanBadgeAnchor, type TitanBadgeAnchorProps, type TitanBadgeProps, TitanBreadcrumb, type TitanBreadcrumbItem, type TitanBreadcrumbProps, TitanButton, type TitanButtonProps, type TitanButtonVariant, TitanCalendar, type TitanCalendarProps, TitanCard, TitanCardGrid, type TitanCardGridProps, type TitanCardProps, type TitanCardSpan, TitanCell, TitanCheckboxField, type TitanCheckboxFieldProps, TitanColumn, type TitanColumnProps, TitanDialog, type TitanDialogProps, TitanDrawer, type TitanDrawerProps, TitanFormControlsGroup, type TitanFormControlsGroupProps, TitanIconButton, type TitanIconButtonProps, type TitanIconButtonVariant, TitanInputField, type TitanInputFieldProps, TitanLoader, type TitanLoaderProps, TitanMenuDropdown, type TitanMenuNotification, type TitanMenuOption, type TitanMenuProfileOption, type TitanMenuProps, type TitanMenuSearchOption, TitanNavbar, type TitanNavbarProps, type TitanNavbarTheme, TitanNotificationsMenu, type TitanNotificationsMenuProps, TitanPagination, type TitanPaginationPage, type TitanPaginationProps, TitanPill, type TitanPillProps, TitanProfileMenu, type TitanProfileMenuProps, TitanProgressBar, type TitanProgressBarProps, TitanRadioGroupField, type TitanRadioGroupFieldProps, type TitanRadioOption, TitanRangeSlider, type TitanRangeSliderProps, TitanResizableTableContainer, TitanRow, TitanSearchMenu, type TitanSearchMenuProps, TitanSelect, type TitanSelectOption, type TitanSelectProps, TitanSidebar, TitanSidebarHeader, type TitanSidebarHeaderProps, TitanSidebarItem, type TitanSidebarItemProps, type TitanSidebarProps, TitanSlider, type TitanSliderProps, TitanSwitchField, type TitanSwitchFieldProps, type TitanTabItem, TitanTable, TitanTableBody, TitanTableCellActions, type TitanTableCellActionsItem, type TitanTableCellActionsProps, TitanTableCellDate, type TitanTableCellDateProps, TitanTableCellInitials, type TitanTableCellInitialsProps, TitanTableCellStatus, type TitanTableCellStatusProps, type TitanTableCellStatusVariant, TitanTableExampleAsync, TitanTableExampleBasic, TitanTableExampleCellTypes, TitanTableExampleClickableNameCell, TitanTableExampleDragDrop, TitanTableExampleDynamic, TitanTableExampleEmpty, TitanTableExampleHeaderVariants, TitanTableExampleLinks, TitanTableExampleResizable, TitanTableExampleSelection, TitanTableExampleSortable, TitanTableHeader, TitanTableLoadMoreItem, type TitanTableProps, TitanTabs, type TitanTabsProps, TitanTag, type TitanTagProps, TitanTextareaField, type TitanTextareaFieldProps, type TitanToastItem, TitanToastRegion, type TitanToastRegionProps, type TitanToastVariant, TitanToggleButtonGroup, type TitanToggleButtonGroupProps, type TitanToggleItem, TitanTooltip, type TitanTooltipPlacement, type TitanTooltipProps, TitanTwoUpOneDownLayout, type TitanTwoUpOneDownLayoutProps, getToneStyle, registerFallbackIcons, renderIconNode, resolveIcon };
