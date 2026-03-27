import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode, CSSProperties, Key, ComponentType } from 'react';
import { ButtonProps, Key as Key$1, TextFieldProps, CellProps, ColumnProps, ResizableTableContainer, RowProps, Table, TableBodyProps, TableHeaderProps, TableLoadMoreItem, LinkProps, ToggleButtonGroupProps, ToggleButtonProps } from 'react-aria-components';
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

type TitanNavbarTheme = 'demand' | 'audiense' | 'neutral' | 'insights' | 'linkedin' | 'tweetbinder' | 'connect' | 'brand';
interface TitanNavbarProps {
    theme?: TitanNavbarTheme;
    userInitial?: string;
    logoAlt?: string;
    /** Base path or URL for logo assets. Defaults to CDN. Pass "/assets/logos" for local. */
    logoBasePath?: string;
    /** Override icons with Titan-native icon components for pixel-perfect fidelity.
     *  Call `registerTitanIcons()` at app init to ensure all resolved icons are Titan-native. */
    changeProductIcon?: ReactNode;
    notificationsIcon?: ReactNode;
    supportIcon?: ReactNode;
    helpIcon?: ReactNode;
    settingsIcon?: ReactNode;
    featuredActionIcon?: ReactNode;
    userChevronIcon?: ReactNode;
    onChangeProduct?: () => void;
    onNotifications?: () => void;
    onSupport?: () => void;
    onHelp?: () => void;
    onSettings?: () => void;
    onFeaturedAction?: () => void;
    onUserMenu?: () => void;
}
interface TitanNavBarProps {
    children: ReactNode;
}
/**
 * Faithful runtime mirror of the official NavBar primitive:
 * a header wrapper with centered inner content.
 */
declare function TitanNavBar({ children }: TitanNavBarProps): react_jsx_runtime.JSX.Element;
/**
 * Reusable navbar composition matching Titan contract:
 * left: Grip + themed logo
 * right: Bell, Handshake, CircleHelp, Settings, Sparkles, avatar + chevron
 */
declare function TitanNavbar({ theme, userInitial, logoAlt, logoBasePath, changeProductIcon, notificationsIcon, supportIcon, helpIcon, settingsIcon, featuredActionIcon, userChevronIcon, onChangeProduct, onNotifications, onSupport, onHelp, onSettings, onFeaturedAction, onUserMenu, }: TitanNavbarProps): react_jsx_runtime.JSX.Element;

type TitanButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'link' | 'text' | 'delete' | 'delete-secondary';
type TitanIconButtonVariant = 'primary' | 'secondary' | 'ghost' | 'base' | 'base-l' | 'neutral-base' | 'neutral-base-l' | 'delete';
declare const TitanButtonVariants: {
    readonly Primary: "primary";
    readonly Secondary: "secondary";
    readonly Tertiary: "tertiary";
    readonly Text: "text";
    readonly Link: "link";
    readonly Delete: "delete";
    readonly DeleteSecondary: "delete-secondary";
};
declare const TitanIconButtonVariants: {
    readonly Primary: "primary";
    readonly Secondary: "secondary";
    readonly Base: "base";
    readonly BaseLarge: "base-l";
    readonly NeutralBase: "neutral-base";
    readonly NeutralBaseLarge: "neutral-base-l";
    readonly Ghost: "ghost";
    readonly Delete: "delete";
};
interface TitanButtonProps extends Omit<ButtonProps, 'className' | 'children'> {
    variant?: TitanButtonVariant;
    className?: string;
    icon?: ReactNode;
    iconEnd?: ReactNode;
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
declare function TitanButton({ variant, className, icon, iconEnd, children, ...props }: TitanButtonProps): react_jsx_runtime.JSX.Element;
declare function TitanIconButton({ variant, className, children, ...props }: TitanIconButtonProps): react_jsx_runtime.JSX.Element;
type TitanErrorButtonVariant = 'primary' | 'secondary' | 'text';
type TitanDestructiveIconButtonVariant = 'primary' | 'secondary' | 'base' | 'base-l';
declare const TitanErrorButtonVariants: {
    readonly Primary: "primary";
    readonly Secondary: "secondary";
    readonly Text: "text";
};
declare const TitanDestructiveIconButtonVariants: {
    readonly Primary: "primary";
    readonly Secondary: "secondary";
    readonly Base: "base";
    readonly BaseLarge: "base-l";
};
interface TitanErrorButtonProps extends Omit<ButtonProps, 'className' | 'children'> {
    variant?: TitanErrorButtonVariant;
    className?: string;
    children?: ReactNode;
}
interface TitanDestructiveIconButtonProps extends Omit<ButtonProps, 'className' | 'children'> {
    variant?: TitanDestructiveIconButtonVariant;
    className?: string;
    children: ReactNode;
}
declare function TitanErrorButton({ variant, className, children, ...props }: TitanErrorButtonProps): react_jsx_runtime.JSX.Element;
declare function TitanDestructiveIconButton({ variant, className, children, ...props }: TitanDestructiveIconButtonProps): react_jsx_runtime.JSX.Element;

declare const TitanPillStates: {
    readonly Base: "base";
    readonly Success: "success";
    readonly Alert: "alert";
    readonly Disabled: "disabled";
    readonly Error: "error";
    readonly Info: "info";
};
type TitanPillState = (typeof TitanPillStates)[keyof typeof TitanPillStates];
interface TitanPillProps {
    id?: string;
    label?: string;
    children?: ReactNode;
    state?: TitanPillState;
    tone: string;
    removable?: boolean;
    isDisabled?: boolean;
    onDismiss?: (id: string) => void;
    'aria-label'?: string;
    className?: string;
}
declare function TitanPill({ id, label, children, state, tone, removable, isDisabled, onDismiss, 'aria-label': ariaLabel, className, }: TitanPillProps): react_jsx_runtime.JSX.Element;

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
    mcp?: boolean;
    user?: boolean;
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
    destructive?: boolean;
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
    label?: string;
    'aria-label'?: string;
    options: TitanSelectOption[];
    defaultSelectedKey?: string;
    selectedKey?: string;
    onSelectionChange?: (key: Key | null) => void;
    placeholder?: string;
    hintMessage?: string;
    errorMessage?: string;
    isDisabled?: boolean;
    isRequired?: boolean;
    name?: string;
}
declare function TitanSelect({ label, 'aria-label': ariaLabel, options, defaultSelectedKey, selectedKey, onSelectionChange, placeholder, hintMessage, errorMessage, isDisabled, isRequired, name, }: TitanSelectProps): react_jsx_runtime.JSX.Element;

interface TitanTabItem {
    id: string;
    label: string;
    content: ReactNode;
    disabled?: boolean;
}
interface TitanTabsProps {
    items: TitanTabItem[];
    defaultSelectedKey?: string;
    selectedKey?: Key$1;
    onSelectionChange?: (key: Key$1) => void;
    overflow?: boolean;
    orientation?: 'horizontal' | 'vertical';
    ariaLabel?: string;
}
declare function TitanTabs({ items, defaultSelectedKey, selectedKey, onSelectionChange, overflow, orientation, ariaLabel, }: TitanTabsProps): react_jsx_runtime.JSX.Element;

type TitanPaginationPage = number | 'ellipsis';
interface TitanPaginationProps {
    ariaLabel?: string;
    'aria-label'?: string;
    pages?: TitanPaginationPage[];
    currentPage: number;
    totalPages?: number;
    setPage?: (page: number) => void;
    previousDisabled?: boolean;
    nextDisabled?: boolean;
    onPageChange?: (page: number) => void;
    onPrevious?: () => void;
    onNext?: () => void;
}
declare function TitanPagination({ ariaLabel, 'aria-label': ariaLabelProp, pages, currentPage, totalPages, setPage, previousDisabled, nextDisabled, onPageChange, onPrevious, onNext, }: TitanPaginationProps): react_jsx_runtime.JSX.Element | null;

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
    isOpen?: boolean;
    onOpenChange?: (isOpen: boolean) => void;
    onClose?: () => void;
}
declare function TitanDrawer({ trigger, triggerLabel, triggerClassName, triggerIcon, title, children, isOpen, onOpenChange, onClose, }: TitanDrawerProps): react_jsx_runtime.JSX.Element;

type TitanDialogCloseButton = 'icon' | 'text' | 'none';
interface TitanDialogProps {
    triggerLabel?: string;
    title?: string;
    body?: ReactNode;
    leftAction?: ReactNode;
    rightAction?: ReactNode;
    /** Default `icon`. Use `text` for a labeled Close control (no X). */
    closeButton?: TitanDialogCloseButton;
    /** Label when `closeButton` is `text`. Default `Close`. */
    closeText?: string;
    isOpen?: boolean;
    onOpenChange?: (isOpen: boolean) => void;
    onClose?: () => void;
    'aria-label'?: string;
    children?: ReactNode;
}
declare function TitanDialog({ triggerLabel, title, body, leftAction, rightAction, closeButton, closeText, isOpen, onOpenChange, onClose, children, 'aria-label': ariaLabel, }: TitanDialogProps): react_jsx_runtime.JSX.Element;

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
    hintMessage?: string;
    counter?: string;
    leadingIcon?: ReactNode;
    startIcon?: ReactNode;
    trailingIcon?: ReactNode;
    endIcon?: ReactNode;
    onEndIconClick?: () => void;
    onClear?: () => void;
    maxLength?: number;
    onChange?: (value: string) => void;
    errorMessage?: string;
    placeholder?: string;
    className?: string;
}
interface TitanTextareaFieldProps extends Omit<TextFieldProps, 'children'> {
    label?: string;
    hint?: string;
    hintMessage?: string;
    counter?: string;
    leadingIcon?: ReactNode;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    onEndIconClick?: () => void;
    onClear?: () => void;
    autoExpand?: boolean;
    maxLength?: number;
    onChange?: (value: string) => void;
    errorMessage?: string;
    placeholder?: string;
    className?: string;
}
type TitanTextInputProps = TitanInputFieldProps;
type TitanTextAreaProps = TitanTextareaFieldProps;
declare function TitanInputField({ label, hint, hintMessage, counter, leadingIcon, startIcon, trailingIcon, endIcon, onEndIconClick, onClear, maxLength, onChange, errorMessage, placeholder, className, ...props }: TitanInputFieldProps): react_jsx_runtime.JSX.Element;
declare function TitanTextareaField({ label, hint, hintMessage, counter, leadingIcon, startIcon, endIcon, onEndIconClick, onClear, autoExpand, maxLength, onChange, errorMessage, placeholder, className, ...props }: TitanTextareaFieldProps): react_jsx_runtime.JSX.Element;
/** Backward-compatible alias for consumers expecting TextInput naming. */
declare function TitanTextInput(props: TitanTextInputProps): react_jsx_runtime.JSX.Element;
/** Backward-compatible alias for consumers expecting TextArea naming. */
declare function TitanTextArea(props: TitanTextAreaProps): react_jsx_runtime.JSX.Element;

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
    /** Number of left columns that remain sticky. */
    stickyColumns?: number;
}
declare function TitanTable({ className, wrapperClassName, noWrapper, stickyHeader, stickyColumns, ...props }: TitanTableProps): react_jsx_runtime.JSX.Element;
declare function TitanTableHeader<T extends object>({ columns, children, ...props }: TableHeaderProps<T>): react_jsx_runtime.JSX.Element;
interface TitanColumnProps extends ColumnProps {
    alignment?: 'left' | 'center' | 'right';
    numericSort?: boolean;
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
interface TitanCellProps extends CellProps {
    alignment?: 'left' | 'center' | 'right';
}
declare function TitanCell(props: TitanCellProps): react_jsx_runtime.JSX.Element;
declare function TitanResizableTableContainer({ className, children, ...props }: React.ComponentProps<typeof ResizableTableContainer>): react_jsx_runtime.JSX.Element;
declare function TitanTableLoadMoreItem(props: React.ComponentProps<typeof TableLoadMoreItem>): react_jsx_runtime.JSX.Element;

interface TitanTableCellDateProps {
    /** Date: Date, ISO string, or timestamp */
    value: Date | string | number;
    /** Default format: "Nov 15, 2025" */
    format?: (d: Date) => string;
    className?: string;
}
declare function TitanTableCellDate({ value, format, className }: TitanTableCellDateProps): react_jsx_runtime.JSX.Element;
interface TitanTableCellInitialsProps {
    /** Initials (e.g. "AW") or a name to derive from (e.g. "Alice Smith" -> "AS") */
    initials?: string;
    name?: string;
    /** Seed for stable per-row color (e.g. id) */
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
    /** Extra items (e.g. "Rename", "Clone") */
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
 * - Breadcrumb (flush under navbar via `page--flush-breadcrumb` + `page-breadcrumb-host`)
 * - Content: 2/4 + 2/4 in first row, 4/4 in second row
 *
 * For pages with **navbar only** (no breadcrumb), use `<main className="page">` without
 * `page--flush-breadcrumb` so normal top padding remains. Do not use the flush classes
 * unless navbar and breadcrumb appear together.
 */
declare function TitanTwoUpOneDownLayout({ theme, userInitial, breadcrumbItems, breadcrumbCurrentLabel, leftTop, rightTop, bottom, }: TitanTwoUpOneDownLayoutProps): react_jsx_runtime.JSX.Element;

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
/** Optional section label (e.g. “Navigation”). Omit for a nav with no heading. */
declare function TitanSidebarHeader({ children }: TitanSidebarHeaderProps): react_jsx_runtime.JSX.Element;
interface TitanSidebarItemProps {
    id: string;
    /** Icon: component or string name (resolved via Titan-first icon pipeline). */
    icon?: ComponentType<{
        className?: string;
    }> | string;
    /** Optional: submenu / hierarchy (e.g. future indent). Styling matches other items. */
    nested?: boolean;
    onPress?: () => void;
    children: ReactNode;
}
declare function TitanSidebarItem({ id, icon, nested, onPress, children, }: TitanSidebarItemProps): react_jsx_runtime.JSX.Element;
interface TitanSidebarSectionProps {
    children: ReactNode;
}
/** Wraps a titled block or a cluster of items; use with `TitanSidebarHeader` + items. */
declare function TitanSidebarSection({ children }: TitanSidebarSectionProps): react_jsx_runtime.JSX.Element;
interface TitanSidebarSearchProps {
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    'aria-label'?: string;
}
declare function TitanSidebarSearch({ placeholder, value, onChange, 'aria-label': ariaLabel, }: TitanSidebarSearchProps): react_jsx_runtime.JSX.Element | null;
interface TitanSidebarTreeProps {
    children: ReactNode;
}
declare function TitanSidebarTree({ children }: TitanSidebarTreeProps): react_jsx_runtime.JSX.Element;
interface TitanSidebarTreeItemProps {
    id: string;
    icon?: ComponentType<{
        className?: string;
    }> | string;
    /** Nesting level (0 = align with top-level items). */
    depth?: number;
    onPress?: () => void;
    children: ReactNode;
}
declare function TitanSidebarTreeItem({ id, icon, onPress, children, }: TitanSidebarTreeItemProps): react_jsx_runtime.JSX.Element;
interface TitanSidebarFolderProps {
    id: string;
    label: ReactNode;
    defaultExpanded?: boolean;
    expanded?: boolean;
    onExpandedChange?: (open: boolean) => void;
    /** Nesting level for row indent (0 = root). */
    depth?: number;
    children?: ReactNode;
}
declare function TitanSidebarFolder({ id, label, defaultExpanded, expanded: controlledExpanded, onExpandedChange, children, }: TitanSidebarFolderProps): react_jsx_runtime.JSX.Element;

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

type TitanLinkSize = 's' | 'm';
interface TitanLinkProps extends Omit<LinkProps, 'className' | 'children'> {
    children: ReactNode;
    size?: TitanLinkSize;
    withIcon?: boolean;
    className?: string;
}
declare function TitanLink({ children, size, withIcon, className, ...props }: TitanLinkProps): react_jsx_runtime.JSX.Element;

interface TitanAvatarProps {
    account?: string;
    icon?: ReactNode;
    'aria-label'?: string;
}
declare function TitanAvatar({ account, icon, 'aria-label': ariaLabel, }: TitanAvatarProps): react_jsx_runtime.JSX.Element;

interface TitanPillGroupProps {
    children: ReactNode;
    label?: string;
    onRemove?: (keys: Set<string>) => void;
    'aria-label'?: string;
    className?: string;
}
interface TitanPillListProps {
    children: ReactNode;
    className?: string;
}
declare function TitanPillGroup({ children, label, onRemove, 'aria-label': ariaLabel, className, }: TitanPillGroupProps): react_jsx_runtime.JSX.Element;
declare function TitanPillList({ children, className, }: TitanPillListProps): react_jsx_runtime.JSX.Element;

type TitanButtonGroupOrientation = 'horizontal' | 'vertical';
interface TitanButtonGroupProps extends Omit<ToggleButtonGroupProps, 'className' | 'children'> {
    children: ReactNode;
    orientation?: TitanButtonGroupOrientation;
    className?: string;
}
interface TitanIndividualButtonProps extends Omit<ToggleButtonProps, 'className' | 'children'> {
    children: ReactNode;
    className?: string;
}
declare function TitanButtonGroup({ children, orientation, className, ...props }: TitanButtonGroupProps): react_jsx_runtime.JSX.Element;
declare function TitanIndividualButton({ children, className, ...props }: TitanIndividualButtonProps): react_jsx_runtime.JSX.Element;

interface TitanDividerProps {
    className?: string;
}
declare function TitanDivider({ className }: TitanDividerProps): react_jsx_runtime.JSX.Element;

interface TitanCollapsibleProps {
    children: ReactNode;
    title?: ReactNode;
    isCollapsed?: boolean;
    onChange?: (isCollapsed: boolean) => void;
    'aria-label'?: string;
}
declare function TitanCollapsible({ children, title, isCollapsed: controlledCollapsed, onChange, 'aria-label': ariaLabel, }: TitanCollapsibleProps): react_jsx_runtime.JSX.Element;

interface TitanClusterNode {
    id: string;
    group: number;
    radius: number;
    x?: number;
    y?: number;
    vx?: number;
    vy?: number;
    fx?: number | null;
    fy?: number | null;
    index?: number;
    name: string;
    bio: string;
    avatarUrl: string;
    affinity?: number;
    uniqueness?: number;
    times_more_likely?: number;
}
interface TitanClusterLink {
    value: number;
    source: string | TitanClusterNode;
    target: string | TitanClusterNode;
}
interface TitanClusterGroupCenter {
    x: number;
    y: number;
    label: string;
    color: string;
}
interface TitanClusterData {
    nodes: TitanClusterNode[];
    links: TitanClusterLink[];
}

interface TitanClusterGraphProps {
    data: TitanClusterData;
    height?: number;
    minWidth?: number;
    showLabels?: boolean;
    segmentLabels?: string[];
    groupCount?: number;
    selectedNode?: TitanClusterNode | null;
    defaultSelectedNode?: TitanClusterNode | null;
    onSelectedNodeChange?: (node: TitanClusterNode | null) => void;
    withDetailsDialog?: boolean;
    emptyState?: string;
    className?: string;
    style?: CSSProperties;
}
declare function TitanClusterGraph({ data, height, minWidth, showLabels, segmentLabels, groupCount, selectedNode: controlledSelectedNode, defaultSelectedNode, onSelectedNodeChange, withDetailsDialog, emptyState, className, style, }: TitanClusterGraphProps): react_jsx_runtime.JSX.Element;

declare const TITAN_CLUSTER_COLORS: string[];
declare const TITAN_CLUSTER_GROUP_LABELS: string[];
declare const TITAN_CLUSTER_DEFAULT_GROUP_COUNT = 8;
declare const TITAN_CLUSTER_DEFAULT_NODE_COUNT = 450;
declare function getTitanClusterSegmentLabel(groupIndex: number, groupCount: number, segmentLabels?: string[]): string;

declare function buildTitanClusterMockData(groupCount: number, width: number, height: number, nodeCount?: number): TitanClusterData;

type IconComponent = LucideIcon;

/**
 * Register official Titan icons from your icon source exports.
 * These are always preferred over Lucide/Tabler.
 */
declare function registerTitanIcons(map: Record<string, ComponentType<{
    className?: string;
}>>): void;
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
 * Resolve icon by name: Titan official first, then Lucide, then fallback (e.g. Tabler).
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

export { type IconComponent, type RenderIconProps, TITAN_CLUSTER_COLORS, TITAN_CLUSTER_DEFAULT_GROUP_COUNT, TITAN_CLUSTER_DEFAULT_NODE_COUNT, TITAN_CLUSTER_GROUP_LABELS, TitanAvatar, type TitanAvatarProps, TitanBadge, TitanBadgeAnchor, type TitanBadgeAnchorProps, type TitanBadgeProps, TitanBreadcrumb, type TitanBreadcrumbItem, type TitanBreadcrumbProps, TitanButton, TitanButtonGroup, type TitanButtonGroupOrientation, type TitanButtonGroupProps, type TitanButtonProps, type TitanButtonVariant, TitanButtonVariants, TitanCalendar, type TitanCalendarProps, TitanCard, TitanCardGrid, type TitanCardGridProps, type TitanCardProps, type TitanCardSpan, TitanCell, type TitanCellProps, TitanCheckboxField, type TitanCheckboxFieldProps, type TitanClusterData, TitanClusterGraph, type TitanClusterGraphProps, type TitanClusterGroupCenter, type TitanClusterLink, type TitanClusterNode, TitanCollapsible, type TitanCollapsibleProps, TitanColumn, type TitanColumnProps, TitanDestructiveIconButton, type TitanDestructiveIconButtonProps, type TitanDestructiveIconButtonVariant, TitanDestructiveIconButtonVariants, TitanDialog, type TitanDialogCloseButton, type TitanDialogProps, TitanDivider, type TitanDividerProps, TitanDrawer, type TitanDrawerProps, TitanErrorButton, type TitanErrorButtonProps, type TitanErrorButtonVariant, TitanErrorButtonVariants, TitanFormControlsGroup, type TitanFormControlsGroupProps, TitanIconButton, type TitanIconButtonProps, type TitanIconButtonVariant, TitanIconButtonVariants, TitanIndividualButton, type TitanIndividualButtonProps, TitanInputField, type TitanInputFieldProps, TitanLink, type TitanLinkProps, type TitanLinkSize, TitanLoader, type TitanLoaderProps, TitanMenuDropdown, type TitanMenuNotification, type TitanMenuOption, type TitanMenuProfileOption, type TitanMenuProps, type TitanMenuSearchOption, TitanNavBar, type TitanNavBarProps, TitanNavbar, type TitanNavbarProps, type TitanNavbarTheme, TitanNotificationsMenu, type TitanNotificationsMenuProps, TitanPagination, type TitanPaginationPage, type TitanPaginationProps, TitanPill, TitanPillGroup, type TitanPillGroupProps, TitanPillList, type TitanPillListProps, type TitanPillProps, TitanProfileMenu, type TitanProfileMenuProps, TitanProgressBar, type TitanProgressBarProps, TitanRadioGroupField, type TitanRadioGroupFieldProps, type TitanRadioOption, TitanRangeSlider, type TitanRangeSliderProps, TitanResizableTableContainer, TitanRow, TitanSearchMenu, type TitanSearchMenuProps, TitanSelect, type TitanSelectOption, type TitanSelectProps, TitanSidebar, TitanSidebarFolder, type TitanSidebarFolderProps, TitanSidebarHeader, type TitanSidebarHeaderProps, TitanSidebarItem, type TitanSidebarItemProps, type TitanSidebarProps, TitanSidebarSearch, type TitanSidebarSearchProps, TitanSidebarSection, type TitanSidebarSectionProps, TitanSidebarTree, TitanSidebarTreeItem, type TitanSidebarTreeItemProps, type TitanSidebarTreeProps, TitanSlider, type TitanSliderProps, TitanSwitchField, type TitanSwitchFieldProps, type TitanTabItem, TitanTable, TitanTableBody, TitanTableCellActions, type TitanTableCellActionsItem, type TitanTableCellActionsProps, TitanTableCellDate, type TitanTableCellDateProps, TitanTableCellInitials, type TitanTableCellInitialsProps, TitanTableCellStatus, type TitanTableCellStatusProps, type TitanTableCellStatusVariant, TitanTableExampleAsync, TitanTableExampleBasic, TitanTableExampleCellTypes, TitanTableExampleClickableNameCell, TitanTableExampleDragDrop, TitanTableExampleDynamic, TitanTableExampleEmpty, TitanTableExampleHeaderVariants, TitanTableExampleLinks, TitanTableExampleResizable, TitanTableExampleSelection, TitanTableExampleSortable, TitanTableHeader, TitanTableLoadMoreItem, type TitanTableProps, TitanTabs, type TitanTabsProps, TitanTag, type TitanTagProps, TitanTextArea, type TitanTextAreaProps, TitanTextInput, type TitanTextInputProps, TitanTextareaField, type TitanTextareaFieldProps, type TitanToastItem, TitanToastRegion, type TitanToastRegionProps, type TitanToastVariant, TitanTooltip, type TitanTooltipPlacement, type TitanTooltipProps, TitanTwoUpOneDownLayout, type TitanTwoUpOneDownLayoutProps, buildTitanClusterMockData, getTitanClusterSegmentLabel, getToneStyle, registerFallbackIcons, registerTitanIcons, renderIconNode, resolveIcon };
