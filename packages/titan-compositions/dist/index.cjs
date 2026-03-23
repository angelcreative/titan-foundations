"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  TitanAvatar: () => TitanAvatar,
  TitanBadge: () => TitanBadge,
  TitanBadgeAnchor: () => TitanBadgeAnchor,
  TitanBreadcrumb: () => TitanBreadcrumb,
  TitanButton: () => TitanButton,
  TitanButtonGroup: () => TitanButtonGroup,
  TitanButtonVariants: () => TitanButtonVariants,
  TitanCalendar: () => TitanCalendar,
  TitanCard: () => TitanCard,
  TitanCardGrid: () => TitanCardGrid,
  TitanCell: () => TitanCell,
  TitanCheckboxField: () => TitanCheckboxField,
  TitanCollapsible: () => TitanCollapsible,
  TitanColumn: () => TitanColumn,
  TitanDestructiveIconButton: () => TitanDestructiveIconButton,
  TitanDestructiveIconButtonVariants: () => TitanDestructiveIconButtonVariants,
  TitanDialog: () => TitanDialog,
  TitanDivider: () => TitanDivider,
  TitanDrawer: () => TitanDrawer,
  TitanErrorButton: () => TitanErrorButton,
  TitanErrorButtonVariants: () => TitanErrorButtonVariants,
  TitanFormControlsGroup: () => TitanFormControlsGroup,
  TitanIconButton: () => TitanIconButton,
  TitanIconButtonVariants: () => TitanIconButtonVariants,
  TitanIndividualButton: () => TitanIndividualButton,
  TitanInputField: () => TitanInputField,
  TitanLink: () => TitanLink,
  TitanLoader: () => TitanLoader,
  TitanMenuDropdown: () => TitanMenuDropdown,
  TitanNavBar: () => TitanNavBar,
  TitanNavbar: () => TitanNavbar,
  TitanNotificationsMenu: () => TitanNotificationsMenu,
  TitanPagination: () => TitanPagination,
  TitanPill: () => TitanPill,
  TitanPillGroup: () => TitanPillGroup,
  TitanPillList: () => TitanPillList,
  TitanProfileMenu: () => TitanProfileMenu,
  TitanProgressBar: () => TitanProgressBar,
  TitanRadioGroupField: () => TitanRadioGroupField,
  TitanRangeSlider: () => TitanRangeSlider,
  TitanResizableTableContainer: () => TitanResizableTableContainer,
  TitanRow: () => TitanRow,
  TitanSearchMenu: () => TitanSearchMenu,
  TitanSelect: () => TitanSelect,
  TitanSidebar: () => TitanSidebar,
  TitanSidebarHeader: () => TitanSidebarHeader,
  TitanSidebarItem: () => TitanSidebarItem,
  TitanSlider: () => TitanSlider,
  TitanSwitchField: () => TitanSwitchField,
  TitanTable: () => TitanTable,
  TitanTableBody: () => TitanTableBody,
  TitanTableCellActions: () => TitanTableCellActions,
  TitanTableCellDate: () => TitanTableCellDate,
  TitanTableCellInitials: () => TitanTableCellInitials,
  TitanTableCellStatus: () => TitanTableCellStatus,
  TitanTableExampleAsync: () => TitanTableExampleAsync,
  TitanTableExampleBasic: () => TitanTableExampleBasic,
  TitanTableExampleCellTypes: () => TitanTableExampleCellTypes,
  TitanTableExampleClickableNameCell: () => TitanTableExampleClickableNameCell,
  TitanTableExampleDragDrop: () => TitanTableExampleDragDrop,
  TitanTableExampleDynamic: () => TitanTableExampleDynamic,
  TitanTableExampleEmpty: () => TitanTableExampleEmpty,
  TitanTableExampleHeaderVariants: () => TitanTableExampleHeaderVariants,
  TitanTableExampleLinks: () => TitanTableExampleLinks,
  TitanTableExampleResizable: () => TitanTableExampleResizable,
  TitanTableExampleSelection: () => TitanTableExampleSelection,
  TitanTableExampleSortable: () => TitanTableExampleSortable,
  TitanTableHeader: () => TitanTableHeader,
  TitanTableLoadMoreItem: () => TitanTableLoadMoreItem,
  TitanTabs: () => TitanTabs,
  TitanTag: () => TitanTag,
  TitanTextArea: () => TitanTextArea,
  TitanTextInput: () => TitanTextInput,
  TitanTextareaField: () => TitanTextareaField,
  TitanToastRegion: () => TitanToastRegion,
  TitanTooltip: () => TitanTooltip,
  TitanTwoUpOneDownLayout: () => TitanTwoUpOneDownLayout,
  getToneStyle: () => getToneStyle,
  registerFallbackIcons: () => registerFallbackIcons,
  registerTitanIcons: () => registerTitanIcons,
  renderIconNode: () => renderIconNode,
  resolveIcon: () => resolveIcon
});
module.exports = __toCommonJS(index_exports);

// src/TitanBadge.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function TitanBadge({ count, max = 99 }) {
  if (count <= 0) return null;
  const isOverflow = count > max;
  const label = isOverflow ? `${max}+` : String(count);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `badge${isOverflow ? " badge-overflow" : ""}`, "aria-label": `${count} notifications`, children: label });
}
function TitanBadgeAnchor({ count, max = 99, children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "badge-anchor", children: [
    children,
    count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "badge-indicator", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TitanBadge, { count, max }) })
  ] });
}

// src/TitanBreadcrumb.tsx
var import_react_aria_components = require("react-aria-components");

// src/icons/normalizeIconName.ts
function normalizeIconName(name) {
  const trimmed = name.trim();
  if (!trimmed) return "";
  return trimmed.replace(/\s+/g, "-").replace(/([a-z])([A-Z])/g, "$1-$2").replace(/([A-Z])([A-Z][a-z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9-]/g, "");
}
var ALIASES = {
  "empty-box": "box",
  "emptybox": "box",
  "caja-vacia": "box",
  "inbox": "inbox",
  "threads": "threads",
  "change-product": "grip",
  "notifications": "bell",
  "question": "circle-help",
  "sparks": "sparkles"
};
function resolveIconAlias(normalized) {
  return ALIASES[normalized] ?? normalized;
}

// src/icons/lucideRegistry.ts
var import_lucide_react = require("lucide-react");
var LUCIDE_REGISTRY = {
  "bell": import_lucide_react.Bell,
  "notifications": import_lucide_react.Bell,
  "bell-ring": import_lucide_react.BellRing,
  "box": import_lucide_react.Box,
  "calendar": import_lucide_react.Calendar,
  "arrow-up": import_lucide_react.ArrowUp,
  "arrow-down": import_lucide_react.ArrowDown,
  "arrow-up-down": import_lucide_react.ArrowUpDown,
  "check": import_lucide_react.Check,
  "chevron-down": import_lucide_react.ChevronDown,
  "chevron-up": import_lucide_react.ChevronUp,
  "chevron-left": import_lucide_react.ChevronLeft,
  "chevron-right": import_lucide_react.ChevronRight,
  "circle-help": import_lucide_react.CircleHelp,
  "question": import_lucide_react.CircleHelp,
  "grip": import_lucide_react.Grip,
  "grip-vertical": import_lucide_react.GripVertical,
  "change-product": import_lucide_react.Grip,
  "handshake": import_lucide_react.Handshake,
  "hash": import_lucide_react.Hash,
  "info": import_lucide_react.Info,
  "layers": import_lucide_react.Layers,
  "layout-dashboard": import_lucide_react.LayoutDashboard,
  "list-filter": import_lucide_react.ListFilter,
  "loader": import_lucide_react.Loader2,
  "loader-2": import_lucide_react.Loader2,
  "message-square": import_lucide_react.MessageSquare,
  "mouse-pointer-click": import_lucide_react.MousePointerClick,
  "navigation": import_lucide_react.Navigation,
  "panel-left": import_lucide_react.PanelLeft,
  "panel-right": import_lucide_react.PanelRight,
  "search": import_lucide_react.Search,
  "settings": import_lucide_react.Settings,
  "more-vertical": import_lucide_react.MoreVertical,
  "edit": import_lucide_react.Pencil,
  "delete": import_lucide_react.Trash2,
  "sparkles": import_lucide_react.Sparkles,
  "sparks": import_lucide_react.Sparkles,
  "tag": import_lucide_react.Tag,
  "text-cursor-input": import_lucide_react.TextCursorInput,
  "toggle-left": import_lucide_react.ToggleLeft,
  "type": import_lucide_react.Type,
  "x": import_lucide_react.X,
  "minus": import_lucide_react.Minus,
  "external-link": import_lucide_react.ExternalLink,
  "redirect": import_lucide_react.ExternalLink,
  "user": import_lucide_react.User
};

// src/icons/resolveIcon.ts
var titanRegistry = {};
var fallbackRegistry = {};
function registerTitanIcons(map) {
  for (const [key, component] of Object.entries(map)) {
    const normalized = normalizeIconName(key);
    if (normalized) titanRegistry[normalized] = component;
  }
}
function registerFallbackIcons(map) {
  for (const [key, component] of Object.entries(map)) {
    const normalized = normalizeIconName(key);
    if (normalized) fallbackRegistry[normalized] = component;
  }
}
function resolveIcon(name) {
  const normalized = normalizeIconName(name);
  if (!normalized) return null;
  const canonical = resolveIconAlias(normalized);
  const fromTitan = titanRegistry[canonical] ?? titanRegistry[normalized];
  if (fromTitan) return fromTitan;
  const fromLucide = LUCIDE_REGISTRY[canonical];
  if (fromLucide) return fromLucide;
  const fromFallback = fallbackRegistry[canonical] ?? fallbackRegistry[normalized];
  if (fromFallback) return fromFallback;
  return null;
}

// src/icons/renderIconNode.tsx
var import_react = require("react");
function isComponentType(value) {
  return typeof value === "function" || typeof value === "object" && value !== null && "$$typeof" in value;
}
function renderIconNode(icon, props) {
  if (icon == null) return null;
  if (typeof icon === "string") {
    const Resolved = resolveIcon(icon);
    if (Resolved) return (0, import_react.createElement)(Resolved, props ?? {});
    return null;
  }
  if ((0, import_react.isValidElement)(icon)) return icon;
  if (isComponentType(icon)) return (0, import_react.createElement)(icon, props ?? {});
  return icon;
}

// src/TitanBreadcrumb.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function TitanBreadcrumb({
  items,
  currentLabel,
  maxVisible = 5,
  ariaLabel = "Breadcrumb"
}) {
  const totalItems = items.length + 1;
  const needsCollapse = totalItems > maxVisible && items.length > 2;
  let visibleBefore = [];
  let collapsed = [];
  let visibleAfter = [];
  if (needsCollapse) {
    visibleBefore = [items[0]];
    const keepAtEnd = maxVisible - 2;
    collapsed = items.slice(1, items.length - keepAtEnd);
    visibleAfter = items.slice(items.length - keepAtEnd);
  } else {
    visibleBefore = items;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_react_aria_components.Breadcrumbs, { className: "breadcrumb-nav", "aria-label": ariaLabel, children: [
    visibleBefore.map((item) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(BreadcrumbNode, { item }, item.id)),
    needsCollapse && collapsed.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_react_aria_components.Breadcrumb, { className: "breadcrumb-item", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_react_aria_components.MenuTrigger, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_aria_components.Button, { className: "breadcrumb-ellipsis", "aria-label": "Show more", children: "\u2026" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_aria_components.Popover, { className: "menu-popover", placement: "bottom start", offset: 8, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_aria_components.Menu, { className: "menu-list", children: collapsed.map((item) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_react_aria_components.MenuItem,
          {
            className: "menu-item",
            textValue: item.label,
            onAction: () => item.onPress?.(),
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "menu-item-start", children: [
              item.icon && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "menu-item-icon", children: item.icon }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "menu-item-label", children: item.label })
            ] })
          },
          item.id
        )) }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "breadcrumb-separator", "aria-hidden": "true", children: renderIconNode("chevron-right") })
    ] }),
    visibleAfter.map((item) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(BreadcrumbNode, { item }, item.id)),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_aria_components.Breadcrumb, { className: "breadcrumb-item", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "breadcrumb-current", "aria-current": "page", children: currentLabel }) })
  ] });
}
function BreadcrumbNode({ item }) {
  const linkClass = [
    "breadcrumb-link",
    item.selected ? "breadcrumb-link-selected" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_react_aria_components.Breadcrumb, { className: "breadcrumb-item", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_react_aria_components.Button,
      {
        className: linkClass,
        onPress: item.onPress,
        isDisabled: item.disabled,
        children: item.label
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "breadcrumb-separator", "aria-hidden": "true", children: renderIconNode("chevron-right") })
  ] });
}

// src/TitanNavbar.tsx
var import_react_aria_components2 = require("react-aria-components");
var import_jsx_runtime3 = require("react/jsx-runtime");
var THEME_TO_LOGO = {
  demand: "logo-demand.svg",
  audiense: "logo-audiense.svg",
  neutral: "logo-audiense.svg",
  insights: "logo-insights.svg",
  linkedin: "logo-linkedin.svg",
  tweetbinder: "logo-tweetbinder.svg",
  connect: "logo-connect.svg",
  brand: "logo-audiense.svg"
};
var LOGO_CDN_BASE = "https://cdn.jsdelivr.net/gh/angelcreative/titan-foundations@main/public/assets/logos";
function TitanNavBar({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("header", { className: "navbar-shell", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "navbar-shell-content", children }) });
}
function TitanNavbar({
  theme = "insights",
  userInitial = "A",
  logoAlt = "Product logo",
  logoBasePath = LOGO_CDN_BASE,
  changeProductIcon,
  notificationsIcon,
  supportIcon,
  helpIcon,
  settingsIcon,
  featuredActionIcon,
  userChevronIcon,
  onChangeProduct,
  onNotifications,
  onSupport,
  onHelp,
  onSettings,
  onFeaturedAction,
  onUserMenu
}) {
  const logoFile = THEME_TO_LOGO[theme];
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("header", { className: "navbar", role: "banner", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "navbar-inner", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "navbar-left-group", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_aria_components2.Button, { className: "icon-ghost navbar-icon-button", "aria-label": "Change product", onPress: onChangeProduct, children: changeProductIcon ?? renderIconNode("change-product") }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("img", { className: "navbar-logo", src: `${logoBasePath}/${logoFile}`, alt: logoAlt })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "navbar-right-group", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_aria_components2.Button, { className: "icon-ghost navbar-icon-button", "aria-label": "Notifications", onPress: onNotifications, children: notificationsIcon ?? renderIconNode("notifications") }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_aria_components2.Button, { className: "icon-ghost navbar-icon-button", "aria-label": "Support and community", onPress: onSupport, children: supportIcon ?? renderIconNode("handshake") }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_aria_components2.Button, { className: "icon-ghost navbar-icon-button", "aria-label": "Help", onPress: onHelp, children: helpIcon ?? renderIconNode("question") }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_aria_components2.Button, { className: "icon-ghost navbar-icon-button", "aria-label": "Settings", onPress: onSettings, children: settingsIcon ?? renderIconNode("settings") }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_aria_components2.Button, { className: "icon-ghost navbar-icon-button", "aria-label": "Featured action", onPress: onFeaturedAction, children: featuredActionIcon ?? renderIconNode("sparks") }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "navbar-user", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "navbar-avatar", "aria-hidden": "true", children: userInitial }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_aria_components2.Button, { className: "icon-ghost navbar-chevron-button", "aria-label": "User menu", onPress: onUserMenu, children: userChevronIcon ?? renderIconNode("chevron-down") })
      ] })
    ] })
  ] }) });
}

// src/TitanButton.tsx
var import_react_aria_components3 = require("react-aria-components");
var import_jsx_runtime4 = require("react/jsx-runtime");
var TitanButtonVariants = {
  Primary: "primary",
  Secondary: "secondary",
  Tertiary: "tertiary",
  Text: "text",
  Link: "link",
  Delete: "delete",
  DeleteSecondary: "delete-secondary"
};
var TitanIconButtonVariants = {
  Primary: "primary",
  Secondary: "secondary",
  Base: "base",
  BaseLarge: "base-l",
  NeutralBase: "neutral-base",
  NeutralBaseLarge: "neutral-base-l",
  Ghost: "ghost",
  Delete: "delete"
};
var BUTTON_VARIANT_CLASS = {
  primary: "btn btn-primary",
  secondary: "btn btn-secondary",
  tertiary: "btn btn-tertiary",
  link: "btn btn-link-text",
  text: "btn btn-link-text",
  delete: "btn btn-delete",
  "delete-secondary": "btn btn-delete-secondary"
};
var ICON_BUTTON_VARIANT_CLASS = {
  primary: "icon-primary",
  secondary: "icon-secondary",
  ghost: "icon-ghost",
  base: "icon-base",
  "base-l": "icon-base-l",
  "neutral-base": "icon-neutral-base",
  "neutral-base-l": "icon-neutral-base-l",
  delete: "icon-delete"
};
var PILL_TONE_MAP = {
  success: {
    bg: "var(--pill-success-background)",
    color: "var(--pill-success-text)",
    icon: "var(--pill-success-icon-color)"
  },
  error: {
    bg: "var(--pill-error-background)",
    color: "var(--pill-error-text)",
    icon: "var(--pill-error-icon-color)"
  },
  alert: {
    bg: "var(--pill-alert-background)",
    color: "var(--pill-alert-text)",
    icon: "var(--pill-alert-icon-color)"
  },
  warning: {
    bg: "var(--pill-alert-background)",
    color: "var(--pill-alert-text)",
    icon: "var(--pill-alert-icon-color)"
  },
  information: {
    bg: "var(--pill-information-background)",
    color: "var(--pill-information-text)",
    icon: "var(--pill-information-icon-color)"
  },
  info: {
    bg: "var(--pill-information-background)",
    color: "var(--pill-information-text)",
    icon: "var(--pill-information-icon-color)"
  },
  disabled: {
    bg: "var(--pill-disabled-background)",
    color: "var(--text-disabled)",
    icon: "var(--text-icon-disabled)"
  }
};
function getToneStyle(tone, mode) {
  if (mode === "pill") {
    const mapped = PILL_TONE_MAP[tone];
    if (mapped) {
      return {
        "--pill-bg": mapped.bg,
        "--pill-color": mapped.color,
        "--pill-icon-color": mapped.icon
      };
    }
    return {
      "--pill-bg": `var(--color-${tone}-100, var(--pill-background))`,
      "--pill-color": `var(--color-${tone}-700, var(--pill-text))`,
      "--pill-icon-color": `var(--color-${tone}-600, var(--pill-icon-color))`
    };
  }
  return {
    "--tag-bg": `var(--color-${tone}-200, var(--pill-background))`,
    "--tag-color": `var(--color-${tone}-600, var(--pill-text))`
  };
}
function TitanButton({
  variant = "primary",
  className = "",
  icon,
  iconEnd,
  children,
  ...props
}) {
  const baseClass = BUTTON_VARIANT_CLASS[variant];
  const withIconClass = icon || iconEnd ? "with-icon" : "";
  const mergedClassName = [baseClass, withIconClass, className].filter(Boolean).join(" ");
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_react_aria_components3.Button, { className: mergedClassName, ...props, children: [
    icon,
    children,
    iconEnd
  ] });
}
function TitanIconButton({
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const baseClass = ICON_BUTTON_VARIANT_CLASS[variant];
  const mergedClassName = [baseClass, className].filter(Boolean).join(" ");
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_aria_components3.Button, { className: mergedClassName, ...props, children });
}
var TitanErrorButtonVariants = {
  Primary: "primary",
  Secondary: "secondary",
  Text: "text"
};
var TitanDestructiveIconButtonVariants = {
  Primary: "primary",
  Secondary: "secondary",
  Base: "base",
  BaseLarge: "base-l"
};
var ERROR_BUTTON_VARIANT_CLASS = {
  primary: "btn btn-delete",
  secondary: "btn btn-delete-secondary",
  text: "btn btn-link-text btn-error-text"
};
var DESTRUCTIVE_ICON_BUTTON_VARIANT_CLASS = {
  primary: "icon-delete",
  secondary: "icon-delete-secondary",
  base: "icon-delete-base",
  "base-l": "icon-delete-base-l"
};
function TitanErrorButton({
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const baseClass = ERROR_BUTTON_VARIANT_CLASS[variant];
  const mergedClassName = [baseClass, className].filter(Boolean).join(" ");
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_aria_components3.Button, { className: mergedClassName, ...props, children });
}
function TitanDestructiveIconButton({
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const baseClass = DESTRUCTIVE_ICON_BUTTON_VARIANT_CLASS[variant];
  const mergedClassName = [baseClass, className].filter(Boolean).join(" ");
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_aria_components3.Button, { className: mergedClassName, ...props, children });
}

// src/TitanPill.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var TitanPillStates = {
  Base: "base",
  Success: "success",
  Alert: "alert",
  Disabled: "disabled",
  Error: "error",
  Info: "info"
};
function asText(value) {
  return typeof value === "string" ? value : "";
}
function TitanPill({
  id,
  label,
  children,
  state = TitanPillStates.Success,
  tone,
  removable = true,
  isDisabled = false,
  onDismiss,
  "aria-label": ariaLabel,
  className
}) {
  const content = children ?? label ?? "";
  const idForDismiss = id ?? asText(content);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    "span",
    {
      className: ["pill", `pill-${state}`, tone && !isDisabled ? `pill-tone-${tone}` : "", isDisabled ? "pill-disabled" : "", className].filter(Boolean).join(" "),
      role: "status",
      "aria-label": ariaLabel ?? (typeof content === "string" ? content : void 0),
      ...isDisabled ? { "aria-disabled": true } : {},
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "pill-label", children: content }),
        removable && onDismiss && !isDisabled ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "button",
          {
            type: "button",
            className: "pill-close",
            "aria-label": `Remove ${typeof content === "string" ? content : "item"}`,
            onClick: () => onDismiss(idForDismiss),
            children: renderIconNode("x")
          }
        ) : null
      ]
    }
  );
}

// src/TitanTag.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
function TitanTag({ label, tone }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: ["tag-chip", tone ? `tag-tone-${tone}` : ""].filter(Boolean).join(" "), children: label });
}

// src/TitanMenu.tsx
var import_react_aria_components4 = require("react-aria-components");
var import_jsx_runtime7 = require("react/jsx-runtime");
function highlightMatch(text, query) {
  if (!query || !query.trim()) return text;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
    text.slice(0, idx),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("strong", { children: text.slice(idx, idx + query.length) }),
    text.slice(idx + query.length)
  ] });
}
function TitanMenuNode({
  item,
  onAction
}) {
  if (item.children?.length) {
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_react_aria_components4.SubmenuTrigger, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_react_aria_components4.MenuItem, { className: "menu-item", textValue: item.label, children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: "menu-item-start", children: [
          item.icon && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "menu-item-icon", children: item.icon }),
          item.leftElement && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "menu-item-left-element", children: item.leftElement }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "menu-item-label", children: item.label })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "menu-item-end", "aria-hidden": "true", children: renderIconNode("chevron-right") })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_aria_components4.Popover, { className: "menu-popover menu-popover-submenu", placement: "end top", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_aria_components4.Menu, { className: "menu-list", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_aria_components4.Collection, { items: item.children, children: (child) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(TitanMenuNode, { item: child, onAction }) }) }) })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    import_react_aria_components4.MenuItem,
    {
      className: `menu-item${item.destructive ? " menu-item-destructive" : ""}`,
      textValue: item.label,
      isDisabled: item.disabled,
      onAction: () => onAction?.(item.id),
      ...item.destructive ? { "data-is-destructive": "" } : {},
      ...item.mcp ? { "data-is-mcp": "" } : {},
      ...item.user ? { "data-is-user": "" } : {},
      children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: "menu-item-start", children: [
        item.icon && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "menu-item-icon", children: item.icon }),
        item.leftElement && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "menu-item-left-element", children: item.leftElement }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "menu-item-label", children: item.label })
      ] })
    }
  );
}
function TitanMenuDropdown({
  triggerLabel = "Open menu",
  triggerIcon,
  iconOnly = false,
  placement = "bottom start",
  items,
  onAction
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_react_aria_components4.MenuTrigger, { children: [
    iconOnly ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_aria_components4.Button, { className: "icon-ghost menu-trigger-icon-ghost", "aria-label": triggerLabel, children: triggerIcon }) : /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_react_aria_components4.Button, { className: "btn btn-secondary menu-trigger-button", children: [
      triggerLabel,
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "menu-trigger-chevron", "aria-hidden": "true", children: renderIconNode("chevron-down") })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_aria_components4.Popover, { className: "menu-popover", placement, offset: 8, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_aria_components4.Menu, { className: "menu-list", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_aria_components4.Collection, { items, children: (item) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(TitanMenuNode, { item, onAction }) }) }) })
  ] });
}
function TitanSearchMenu({
  triggerLabel = "Search",
  triggerIcon,
  iconOnly = false,
  placement = "bottom start",
  items,
  query,
  emptyIcon,
  emptyLabel = "This entity is not in our Database, add it here to request it.",
  addNewIcon,
  addNewLabel = "Add New",
  onAction,
  onAddNew
}) {
  const hasResults = items.length > 0;
  const resolvedAddIcon = addNewIcon ?? renderIconNode("add");
  const resolvedEmptyIcon = emptyIcon ?? renderIconNode("alert-circle");
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_react_aria_components4.MenuTrigger, { children: [
    iconOnly ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_aria_components4.Button, { className: "icon-ghost menu-trigger-icon-ghost", "aria-label": triggerLabel, children: triggerIcon }) : /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_react_aria_components4.Button, { className: "btn btn-secondary menu-trigger-button", children: [
      triggerLabel,
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "menu-trigger-chevron", "aria-hidden": "true", children: renderIconNode("chevron-down") })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_aria_components4.Popover, { className: "menu-popover", placement, offset: 8, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_aria_components4.Menu, { className: "menu-list", children: hasResults ? /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_aria_components4.Collection, { items, children: (item) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        import_react_aria_components4.MenuItem,
        {
          className: "menu-item menu-item-search",
          textValue: item.label,
          onAction: () => onAction?.(item.id),
          children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: "menu-item-start", children: [
            item.icon && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "menu-item-icon", children: item.icon }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "menu-item-label", children: highlightMatch(item.label, query) })
          ] })
        }
      ) }),
      onAddNew && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_aria_components4.Separator, { className: "menu-divider" }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          import_react_aria_components4.MenuItem,
          {
            className: "menu-item",
            textValue: addNewLabel,
            onAction: () => onAddNew(),
            children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: "menu-item-start", children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "menu-item-icon", children: resolvedAddIcon }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "menu-item-label", children: addNewLabel })
            ] })
          }
        )
      ] })
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        import_react_aria_components4.MenuItem,
        {
          className: "menu-item menu-item-info",
          textValue: emptyLabel,
          isDisabled: true,
          children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: "menu-item-start", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "menu-item-icon", children: resolvedEmptyIcon }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: emptyLabel })
          ] })
        }
      ),
      onAddNew && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_aria_components4.Separator, { className: "menu-divider" }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          import_react_aria_components4.MenuItem,
          {
            className: "menu-item",
            textValue: addNewLabel,
            onAction: () => onAddNew(),
            children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: "menu-item-start", children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "menu-item-icon", children: resolvedAddIcon }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "menu-item-label", children: addNewLabel })
            ] })
          }
        )
      ] })
    ] }) }) })
  ] });
}
function TitanProfileMenu({
  triggerLabel = "Profiles",
  triggerIcon,
  iconOnly = false,
  placement = "bottom start",
  items,
  onAction
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_react_aria_components4.MenuTrigger, { children: [
    iconOnly ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_aria_components4.Button, { className: "icon-ghost menu-trigger-icon-ghost", "aria-label": triggerLabel, children: triggerIcon }) : /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_react_aria_components4.Button, { className: "btn btn-secondary menu-trigger-button", children: [
      triggerLabel,
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "menu-trigger-chevron", "aria-hidden": "true", children: renderIconNode("chevron-down") })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_aria_components4.Popover, { className: "menu-popover", placement, offset: 8, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_aria_components4.Menu, { className: "menu-list", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_aria_components4.Collection, { items, children: (item) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
      import_react_aria_components4.MenuItem,
      {
        className: "menu-item menu-item-profile",
        textValue: `${item.name} ${item.username}`,
        onAction: () => onAction?.(item.id),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: "menu-item-start", children: [
            item.avatarUrl ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
              "img",
              {
                className: "menu-item-profile-avatar",
                src: item.avatarUrl,
                alt: item.name
              }
            ) : /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "menu-item-profile-avatar", "aria-hidden": "true" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: "menu-item-profile-info", children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "menu-item-profile-name", children: item.name }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: "menu-item-profile-username", children: [
                "@",
                item.username
              ] })
            ] })
          ] }),
          item.metric && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "menu-item-profile-metric", children: item.metric })
        ]
      }
    ) }) }) })
  ] });
}
function TitanNotificationsMenu({
  triggerIcon,
  triggerLabel = "Notifications",
  badgeCount,
  badgeMax = 99,
  placement = "bottom end",
  notifications,
  emptyIcon,
  emptyTitle = "Great!",
  emptyMessage = "There are not unread notifications",
  markAllLabel = "Mark all as completed",
  markAllIcon,
  onAction,
  onMarkAll
}) {
  const hasNotifications = notifications.length > 0;
  const resolvedBadgeCount = badgeCount ?? notifications.length;
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_react_aria_components4.MenuTrigger, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(TitanBadgeAnchor, { count: resolvedBadgeCount, max: badgeMax, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_aria_components4.Button, { className: "icon-ghost menu-trigger-icon-ghost", "aria-label": triggerLabel, children: triggerIcon }) }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_aria_components4.Popover, { className: "menu-popover", placement, offset: 8, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_aria_components4.Menu, { className: "menu-list menu-list-notifications", children: hasNotifications ? /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_aria_components4.Collection, { items: notifications, children: (n) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        import_react_aria_components4.MenuItem,
        {
          className: "menu-item menu-item-notification",
          textValue: typeof n.title === "string" ? n.title : n.id,
          onAction: () => onAction?.(n.id),
          "data-is-notification": true,
          ...n.destructive ? { "data-is-destructive": "" } : {},
          children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: "menu-item-start", children: [
            n.icon && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "menu-item-icon", children: n.icon }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: "menu-item-notification-content", children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "menu-item-notification-title", children: n.title }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "menu-item-notification-date", children: n.date })
            ] })
          ] })
        }
      ) }),
      onMarkAll && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_aria_components4.Separator, { className: "menu-divider" }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          import_react_aria_components4.MenuItem,
          {
            className: "menu-item",
            textValue: markAllLabel,
            onAction: () => onMarkAll(),
            children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: "menu-item-start", children: [
              markAllIcon && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "menu-item-icon", children: markAllIcon }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "menu-item-label", children: markAllLabel })
            ] })
          }
        )
      ] })
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      import_react_aria_components4.MenuItem,
      {
        className: "menu-item menu-item-info menu-item-notification",
        textValue: `${emptyTitle} ${emptyMessage}`,
        isDisabled: true,
        children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: "menu-item-start", children: [
          emptyIcon && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "menu-item-icon", children: emptyIcon }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: "menu-item-notification-content", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: emptyTitle }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: emptyMessage })
          ] })
        ] })
      }
    ) }) })
  ] });
}

// src/TitanSelect.tsx
var import_react2 = require("react");
var import_react_aria_components5 = require("react-aria-components");
var import_jsx_runtime8 = require("react/jsx-runtime");
function TitanSelect({
  label,
  "aria-label": ariaLabel,
  options,
  defaultSelectedKey,
  selectedKey,
  onSelectionChange,
  placeholder,
  hintMessage,
  errorMessage,
  isDisabled = false,
  isRequired = false,
  name
}) {
  const [isOpen, setIsOpen] = (0, import_react2.useState)(false);
  const isInvalid = !!errorMessage;
  const selectionProps = selectedKey !== void 0 ? { selectedKey, onSelectionChange } : { defaultSelectedKey };
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
    import_react_aria_components5.Select,
    {
      className: "select-root",
      ...selectionProps,
      "aria-label": ariaLabel,
      placeholder,
      isDisabled,
      isRequired,
      isInvalid,
      name,
      onOpenChange: (open) => setIsOpen(open),
      children: [
        label ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_aria_components5.Label, { className: "select-label", children: label }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_react_aria_components5.Button, { className: "select-trigger", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_aria_components5.SelectValue, {}),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "select-trigger-chevron", "aria-hidden": "true", children: isOpen ? renderIconNode("chevron-up") : renderIconNode("chevron-down") })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_aria_components5.Popover, { className: "select-popover", placement: "bottom start", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_aria_components5.ListBox, { className: "select-list", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_aria_components5.Collection, { items: options, children: (option) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          import_react_aria_components5.ListBoxItem,
          {
            id: option.id,
            className: "select-item",
            isDisabled: option.disabled,
            textValue: option.label,
            children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("span", { className: "select-item-start", children: [
              option.icon ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "select-item-icon", children: option.icon }) : null,
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { children: option.label })
            ] })
          }
        ) }) }) }),
        (errorMessage || hintMessage) && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "field-help-row", children: errorMessage ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_aria_components5.FieldError, { className: "field-error", children: errorMessage }) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_aria_components5.Text, { slot: "description", className: "field-hint", children: hintMessage }) })
      ]
    }
  );
}

// src/TitanTabs.tsx
var import_react_aria_components6 = require("react-aria-components");
var import_jsx_runtime9 = require("react/jsx-runtime");
function TitanTabs({
  items,
  defaultSelectedKey,
  selectedKey,
  onSelectionChange,
  overflow = false,
  orientation = "horizontal",
  ariaLabel = "Tabs"
}) {
  const isVertical = orientation === "vertical";
  const rootClass = isVertical ? "tabs-root tabs-root-vertical" : overflow ? "tabs-root tabs-root-overflow" : "tabs-root";
  const listClass = isVertical ? "tabs-list tabs-list-vertical" : overflow ? "tabs-list tabs-list-scroll" : "tabs-list";
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
    import_react_aria_components6.Tabs,
    {
      className: rootClass,
      defaultSelectedKey,
      selectedKey,
      onSelectionChange,
      orientation,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react_aria_components6.TabList, { className: listClass, "aria-label": ariaLabel, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react_aria_components6.Collection, { items, children: (item) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          import_react_aria_components6.Tab,
          {
            id: item.id,
            className: isVertical ? "tab-trigger tab-trigger-vertical" : "tab-trigger",
            isDisabled: item.disabled,
            children: item.label
          }
        ) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react_aria_components6.Collection, { items, children: (item) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react_aria_components6.TabPanel, { id: item.id, className: "tab-panel", children: item.content }) })
      ]
    }
  );
}

// src/TitanPagination.tsx
var import_react_aria_components7 = require("react-aria-components");
var import_jsx_runtime10 = require("react/jsx-runtime");
function buildPages(currentPage, totalPages) {
  if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);
  if (currentPage <= 3) return [1, 2, 3, 4, 5, "ellipsis", totalPages];
  if (currentPage > 3 && currentPage < totalPages - 2) {
    return [1, "ellipsis", currentPage - 1, currentPage, currentPage + 1, "ellipsis", totalPages];
  }
  return [1, "ellipsis", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
}
function TitanPagination({
  ariaLabel = "Pagination",
  "aria-label": ariaLabelProp,
  pages,
  currentPage,
  totalPages,
  setPage,
  previousDisabled = false,
  nextDisabled = false,
  onPageChange,
  onPrevious,
  onNext
}) {
  const resolvedAriaLabel = ariaLabelProp ?? ariaLabel;
  if (typeof totalPages === "number" && totalPages <= 1) return null;
  const resolvedPages = pages ?? (typeof totalPages === "number" ? buildPages(currentPage, totalPages) : [Math.max(1, currentPage - 1), currentPage, currentPage + 1]);
  const handlePageChange = (page) => {
    onPageChange?.(page);
    setPage?.(page);
  };
  const previousIsDisabled = previousDisabled || currentPage <= 1;
  const nextIsDisabled = nextDisabled || (typeof totalPages === "number" ? currentPage >= totalPages : false);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("nav", { className: "pagination-nav", "aria-label": resolvedAriaLabel, children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      import_react_aria_components7.Button,
      {
        className: "pagination-button pagination-nav-button",
        isDisabled: previousIsDisabled,
        "aria-label": "Previous page",
        onPress: () => {
          onPrevious?.();
          if (!previousIsDisabled) handlePageChange(Math.max(1, currentPage - 1));
        },
        children: renderIconNode("chevron-left")
      }
    ),
    resolvedPages.map(
      (page, index) => page === "ellipsis" ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "pagination-ellipsis", "aria-hidden": "true", children: "..." }, `ellipsis-${index}`) : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        import_react_aria_components7.Button,
        {
          className: page === currentPage ? "pagination-button pagination-page-button pagination-page-button-selected" : "pagination-button pagination-page-button",
          "aria-current": page === currentPage ? "page" : void 0,
          onPress: () => handlePageChange(page),
          children: page
        },
        `${resolvedAriaLabel}-${page}`
      )
    ),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      import_react_aria_components7.Button,
      {
        className: "pagination-button pagination-nav-button",
        isDisabled: nextIsDisabled,
        "aria-label": "Next page",
        onPress: () => {
          onNext?.();
          if (!nextIsDisabled) handlePageChange(currentPage + 1);
        },
        children: renderIconNode("chevron-right")
      }
    )
  ] });
}

// src/TitanDrawer.tsx
var import_react_aria_components8 = require("react-aria-components");
var import_jsx_runtime11 = require("react/jsx-runtime");
function TitanDrawer({
  trigger,
  triggerLabel,
  triggerClassName,
  triggerIcon,
  title,
  children,
  isOpen,
  onOpenChange,
  onClose
}) {
  const isControlled = isOpen !== void 0 || onOpenChange !== void 0 || onClose !== void 0;
  if (isControlled && !trigger) {
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      import_react_aria_components8.ModalOverlay,
      {
        isDismissable: true,
        className: "drawer-overlay",
        isOpen,
        onOpenChange: (open) => {
          onOpenChange?.(open);
          if (!open) onClose?.();
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react_aria_components8.Modal, { className: "drawer-modal", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react_aria_components8.Dialog, { className: "drawer-panel", children: ({ close }) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("header", { className: "drawer-header", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h3", { className: "drawer-title", children: title }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react_aria_components8.Button, { className: "icon-ghost drawer-close-button", "aria-label": "Close drawer", onPress: close, children: renderIconNode("x") })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "drawer-body", children })
        ] }) }) })
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_react_aria_components8.DialogTrigger, { children: [
    trigger ?? /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_react_aria_components8.Button, { className: triggerClassName ?? "btn btn-secondary", children: [
      triggerLabel ?? "Open",
      triggerIcon != null ? /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, { children: [
        " ",
        triggerIcon
      ] }) : null
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react_aria_components8.ModalOverlay, { isDismissable: true, className: "drawer-overlay", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react_aria_components8.Modal, { className: "drawer-modal", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react_aria_components8.Dialog, { className: "drawer-panel", children: ({ close }) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("header", { className: "drawer-header", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h3", { className: "drawer-title", children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react_aria_components8.Button, { className: "icon-ghost drawer-close-button", "aria-label": "Close drawer", onPress: close, children: renderIconNode("x") })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "drawer-body", children })
    ] }) }) }) })
  ] });
}

// src/TitanDialog.tsx
var import_react_aria_components9 = require("react-aria-components");
var import_jsx_runtime12 = require("react/jsx-runtime");
function DialogContent({
  title,
  ariaLabel,
  body,
  leftAction,
  rightAction,
  close
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_jsx_runtime12.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react_aria_components9.Button, { className: "dialog-close-button", "aria-label": "Close dialog", onPress: close, children: renderIconNode("x") }),
    (title || ariaLabel) && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("header", { className: "dialog-header", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h3", { className: "dialog-title", children: title ?? ariaLabel }) }),
    body != null && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "dialog-body", children: body }),
    (leftAction || rightAction) && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("footer", { className: "dialog-footer", children: [
      leftAction,
      rightAction
    ] })
  ] });
}
function TitanDialog({
  triggerLabel,
  title,
  body,
  leftAction,
  rightAction,
  isOpen,
  onOpenChange,
  onClose,
  children,
  "aria-label": ariaLabel
}) {
  if (triggerLabel == null) {
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      import_react_aria_components9.ModalOverlay,
      {
        isDismissable: true,
        className: "dialog-overlay",
        isOpen,
        onOpenChange: (open) => {
          onOpenChange?.(open);
          if (!open) onClose?.();
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react_aria_components9.Modal, { className: "dialog-modal", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react_aria_components9.Dialog, { className: "dialog-panel", "aria-label": ariaLabel, children: ({ close }) => children ?? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          DialogContent,
          {
            title,
            ariaLabel,
            body,
            leftAction,
            rightAction,
            close
          }
        ) }) })
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_react_aria_components9.DialogTrigger, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react_aria_components9.Button, { className: "btn btn-secondary", children: triggerLabel }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react_aria_components9.ModalOverlay, { isDismissable: true, className: "dialog-overlay", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react_aria_components9.Modal, { className: "dialog-modal", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react_aria_components9.Dialog, { className: "dialog-panel", "aria-label": ariaLabel, children: ({ close }) => children ?? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      DialogContent,
      {
        title,
        ariaLabel,
        body,
        leftAction,
        rightAction,
        close
      }
    ) }) }) })
  ] });
}

// src/TitanTooltip.tsx
var import_react_aria_components10 = require("react-aria-components");
var import_jsx_runtime13 = require("react/jsx-runtime");
function toAriaPlacement(p) {
  return p.replace(/\s+/, "-");
}
function TooltipContent({
  content,
  title,
  body
}) {
  const useTitleBody = title != null || body != null;
  if (useTitleBody) {
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_jsx_runtime13.Fragment, { children: [
      title != null && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "tooltip-title", children: title }),
      body != null && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "tooltip-body", children: body })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_jsx_runtime13.Fragment, { children: content });
}
function TitanTooltip({
  content,
  title,
  body,
  children,
  delay = 200,
  closeDelay = 100,
  placement = "top",
  shouldFlip = true
}) {
  const hasContent = content != null || title != null || body != null;
  if (!hasContent) return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_jsx_runtime13.Fragment, { children });
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_react_aria_components10.TooltipTrigger, { delay, closeDelay, children: [
    children,
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
      import_react_aria_components10.Tooltip,
      {
        className: "tooltip-box",
        placement: toAriaPlacement(placement),
        shouldFlip,
        offset: 8,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react_aria_components10.OverlayArrow, { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("svg", { width: 10, height: 6, viewBox: "0 0 10 6", "aria-hidden": true, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", { d: "M0 0 L5 6 L10 0 Z", fill: "var(--tooltip-slot-bg)" }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(TooltipContent, { content, title, body })
        ]
      }
    )
  ] });
}

// src/TitanToast.tsx
var import_react_aria_components11 = require("react-aria-components");
var import_jsx_runtime14 = require("react/jsx-runtime");
function TitanToastRegion({ toasts, onDismiss }) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "toast-region", role: "region", "aria-label": "Notifications", "aria-live": "polite", children: toasts.map((toast) => /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("article", { className: `toast-card toast-${toast.variant}`, role: "status", children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "toast-content", children: [
      toast.icon ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "toast-icon", "aria-hidden": "true", children: toast.icon }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "toast-text", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("strong", { children: toast.title }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { children: toast.body })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react_aria_components11.Button, { className: "icon-ghost toast-close-button", "aria-label": "Dismiss toast", onPress: () => onDismiss(toast.id), children: renderIconNode("x") })
  ] }, toast.id)) });
}

// src/TitanFormControls.tsx
var import_react_aria_components12 = require("react-aria-components");
var import_jsx_runtime15 = require("react/jsx-runtime");
function TitanCheckboxField({
  label,
  name,
  isDisabled = false,
  isSelected,
  defaultSelected = false,
  onChange
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
    import_react_aria_components12.Checkbox,
    {
      className: "checkbox-root",
      name,
      isDisabled,
      isSelected,
      defaultSelected,
      onChange,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "checkbox-box", "aria-hidden": "true", children: renderIconNode("check", { className: "checkbox-mark" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "choice-text", children: label })
      ]
    }
  );
}
function TitanRadioGroupField({
  label,
  name,
  options,
  value,
  defaultValue,
  onChange
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
    import_react_aria_components12.RadioGroup,
    {
      className: "choice-group",
      name,
      value,
      defaultValue,
      onChange,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_react_aria_components12.Label, { className: "choice-group-label", children: label }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "choice-list", children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
          import_react_aria_components12.Radio,
          {
            className: "radio-root",
            value: option.value,
            isDisabled: option.disabled,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "radio-box", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "radio-dot" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "choice-text", children: option.label })
            ]
          },
          option.value
        )) })
      ]
    }
  );
}
function TitanSwitchField({
  label,
  name,
  isDisabled = false,
  isSelected,
  defaultSelected = false,
  onChange
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
    import_react_aria_components12.Switch,
    {
      className: "switch-root",
      name,
      isDisabled,
      isSelected,
      defaultSelected,
      onChange,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "choice-text", children: label }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "switch-track", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "switch-thumb" }) })
      ]
    }
  );
}
function TitanFormControlsGroup({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "form-controls-grid", children });
}

// src/TitanInput.tsx
var import_react3 = require("react");
var import_react_aria_components13 = require("react-aria-components");
var import_jsx_runtime16 = require("react/jsx-runtime");
function TitanInputField({
  label,
  hint,
  hintMessage,
  counter,
  leadingIcon,
  startIcon,
  trailingIcon,
  endIcon,
  onEndIconClick,
  onClear,
  maxLength,
  onChange,
  errorMessage,
  placeholder,
  className = "field-root",
  ...props
}) {
  const resolvedHint = hint ?? hintMessage;
  const resolvedLeadingIcon = leadingIcon ?? startIcon;
  const resolvedTrailingIcon = trailingIcon ?? endIcon;
  const hasTrailingAction = !!(resolvedTrailingIcon && (onEndIconClick || onClear));
  const iconContainerClass = [
    "input-with-icons",
    resolvedLeadingIcon ? "input-with-icons-left" : "",
    resolvedTrailingIcon ? "input-with-icons-right" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_react_aria_components13.TextField, { className, ...props, children: [
    label ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react_aria_components13.Label, { className: "field-label", children: label }) : null,
    resolvedLeadingIcon || resolvedTrailingIcon ? /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_react_aria_components13.Group, { className: iconContainerClass, children: [
      resolvedLeadingIcon ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "input-leading-icon", children: resolvedLeadingIcon }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
        import_react_aria_components13.Input,
        {
          className: "input-field",
          placeholder,
          maxLength,
          onChange: (event) => onChange?.(event.target.value)
        }
      ),
      resolvedTrailingIcon ? hasTrailingAction ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
        "button",
        {
          type: "button",
          className: "input-trailing-icon input-trailing-action",
          onClick: () => {
            onEndIconClick?.();
            if (!onEndIconClick) onClear?.();
          },
          "aria-label": "End icon button",
          children: resolvedTrailingIcon
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "input-trailing-icon", children: resolvedTrailingIcon }) : null
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
      import_react_aria_components13.Input,
      {
        className: "input-field",
        placeholder,
        maxLength,
        onChange: (event) => onChange?.(event.target.value)
      }
    ),
    resolvedHint || counter ? /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "field-help-row", children: [
      resolvedHint ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react_aria_components13.Text, { slot: "description", className: "field-hint", children: resolvedHint }) : /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", {}),
      counter ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "field-counter", children: counter }) : null
    ] }) : null,
    errorMessage ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react_aria_components13.FieldError, { className: "field-error", children: errorMessage }) : null
  ] });
}
function TitanTextareaField({
  label,
  hint,
  hintMessage,
  counter,
  leadingIcon,
  startIcon,
  endIcon,
  onEndIconClick,
  onClear,
  autoExpand = false,
  maxLength,
  onChange,
  errorMessage,
  placeholder,
  className = "field-root",
  ...props
}) {
  const resolvedHint = hint ?? hintMessage;
  const resolvedLeadingIcon = leadingIcon ?? startIcon;
  const resolvedEndIcon = endIcon ?? (onClear ? renderIconNode("x") : null);
  const textareaRef = (0, import_react3.useRef)(null);
  const handleInput = (0, import_react3.useCallback)(() => {
    if (!autoExpand || !textareaRef.current) return;
    const el = textareaRef.current;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  }, [autoExpand]);
  const hasIcons = !!(resolvedLeadingIcon || resolvedEndIcon);
  const containerClass = [
    "textarea-with-icons",
    resolvedLeadingIcon ? "textarea-with-icons-left" : "",
    resolvedEndIcon ? "textarea-with-icons-right" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_react_aria_components13.TextField, { className, ...props, children: [
    label ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react_aria_components13.Label, { className: "field-label", children: label }) : null,
    hasIcons ? /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_react_aria_components13.Group, { className: containerClass, children: [
      resolvedLeadingIcon ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "textarea-leading-icon", children: resolvedLeadingIcon }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
        import_react_aria_components13.TextArea,
        {
          ref: textareaRef,
          className: "textarea-field",
          placeholder,
          maxLength,
          onInput: handleInput,
          onChange: (event) => onChange?.(event.target.value)
        }
      ),
      resolvedEndIcon ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
        "button",
        {
          type: "button",
          className: "textarea-clear-icon",
          onClick: () => {
            onEndIconClick?.();
            if (!onEndIconClick) onClear?.();
          },
          "aria-label": "End icon button",
          children: resolvedEndIcon
        }
      ) : null
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
      import_react_aria_components13.TextArea,
      {
        ref: textareaRef,
        className: "textarea-field",
        placeholder,
        maxLength,
        onInput: handleInput,
        onChange: (event) => onChange?.(event.target.value)
      }
    ),
    resolvedHint || counter ? /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "field-help-row", children: [
      resolvedHint ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react_aria_components13.Text, { slot: "description", className: "field-hint", children: resolvedHint }) : /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", {}),
      counter ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "field-counter", children: counter }) : null
    ] }) : null,
    errorMessage ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react_aria_components13.FieldError, { className: "field-error", children: errorMessage }) : null
  ] });
}
function TitanTextInput(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(TitanInputField, { ...props });
}
function TitanTextArea(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(TitanTextareaField, { ...props });
}

// src/TitanCardGrid.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
function TitanCardGrid({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "cards-layout-grid", children });
}
function TitanCard({ children, span = 16, className = "" }) {
  const spanClass = `span-${span}`;
  const mergedClassName = ["card", "layout-card", spanClass, className].filter(Boolean).join(" ");
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("article", { className: mergedClassName, children });
}

// src/TitanTable.tsx
var import_react4 = require("react");
var import_react_aria_components14 = require("react-aria-components");
var import_react_aria_components15 = require("react-aria-components");
var import_jsx_runtime18 = require("react/jsx-runtime");
function SortIcon({ sortDirection }) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "column-sort-icon-wrap", "aria-hidden": true, children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("span", { className: "column-sort-icon", children: [
    sortDirection === "ascending" && renderIconNode("arrow-up"),
    sortDirection === "descending" && renderIconNode("arrow-down"),
    !sortDirection && renderIconNode("arrow-up-down")
  ] }, sortDirection ?? "none") });
}
function SortableHeaderContent({
  label,
  sortDirection,
  sortIconPosition = "right",
  showInfoIcon = false,
  infoIconAriaLabel = "More information"
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("span", { className: `column-sort-header ${sortIconPosition === "left" ? "column-sort-header--sort-left" : ""} ${showInfoIcon ? "column-sort-header--has-info" : ""}`, children: [
    sortIconPosition === "left" && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(SortIcon, { sortDirection }),
    label,
    sortIconPosition === "right" && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(SortIcon, { sortDirection }),
    showInfoIcon && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "column-header-info-wrap", "aria-hidden": true, children: renderIconNode("info", { className: "column-header-info-icon" }) })
  ] });
}
function HeaderWithInfoOnly({
  label,
  infoIconAriaLabel = "More information"
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("span", { className: "column-sort-header column-sort-header--info-only", children: [
    label,
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "column-header-info-wrap", "aria-hidden": true, children: renderIconNode("info", { className: "column-header-info-icon" }) })
  ] });
}
function applyStickyColumns(table, count) {
  const headerRow = table.querySelector("thead tr");
  if (!headerRow) return;
  const headerCells = Array.from(headerRow.querySelectorAll(":scope > th"));
  const stickyCount = Math.min(count, headerCells.length);
  const offsets = [];
  let left = 0;
  for (let i = 0; i < stickyCount; i++) {
    offsets.push(left);
    left += headerCells[i].offsetWidth;
  }
  for (const row of table.querySelectorAll("tr")) {
    const cells = Array.from(row.querySelectorAll(":scope > th, :scope > td"));
    for (let i = 0; i < cells.length; i++) {
      const cell = cells[i];
      if (i < stickyCount) {
        cell.setAttribute("data-sticky", "");
        cell.style.left = `${offsets[i]}px`;
        if (i === stickyCount - 1) {
          cell.setAttribute("data-sticky-last", "");
        } else {
          cell.removeAttribute("data-sticky-last");
        }
      } else {
        cell.removeAttribute("data-sticky");
        cell.removeAttribute("data-sticky-last");
        cell.style.removeProperty("left");
      }
    }
  }
}
function TitanTable({
  className,
  wrapperClassName,
  noWrapper,
  stickyHeader = false,
  stickyColumns = 0,
  ...props
}) {
  const tableRef = (0, import_react4.useRef)(null);
  (0, import_react4.useLayoutEffect)(() => {
    const table2 = tableRef.current;
    if (!table2 || stickyColumns <= 0) return;
    applyStickyColumns(table2, stickyColumns);
    const mutationObserver = new MutationObserver(() => {
      applyStickyColumns(table2, stickyColumns);
    });
    mutationObserver.observe(table2, { childList: true, subtree: true });
    let resizeObserver;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => applyStickyColumns(table2, stickyColumns));
      const headerCells = table2.querySelectorAll("thead tr > th");
      for (const cell of Array.from(headerCells).slice(0, stickyColumns)) {
        resizeObserver.observe(cell);
      }
    }
    return () => {
      mutationObserver.disconnect();
      resizeObserver?.disconnect();
    };
  }, [stickyColumns]);
  const table = /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    import_react_aria_components14.Table,
    {
      ref: tableRef,
      ...props,
      className: ["table-borderless", "table-sortable", "table-aria", className].filter(Boolean).join(" ")
    }
  );
  if (noWrapper) return table;
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    "div",
    {
      className: ["layout-table-wrap", "layout-table-aria", wrapperClassName].filter(Boolean).join(" "),
      ...stickyHeader ? { "data-sticky-header": "" } : {},
      ...stickyColumns > 0 ? { "data-sticky-cols": String(stickyColumns) } : {},
      children: table
    }
  );
}
function TitanTableHeader({
  columns,
  children,
  ...props
}) {
  const { selectionBehavior, selectionMode, allowsDragging } = (0, import_react_aria_components14.useTableOptions)();
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(import_react_aria_components14.TableHeader, { ...props, children: [
    allowsDragging && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_react_aria_components14.Column, { width: 36, minWidth: 36, maxWidth: 36, className: "table-col-drag", children: () => null }),
    selectionBehavior === "toggle" && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_react_aria_components14.Column, { width: 44, minWidth: 44, maxWidth: 44, className: "table-col-checkbox", children: () => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_react_aria_components14.Checkbox, { slot: "selection", "aria-label": "Select all", className: "checkbox-root table-checkbox-header", children: ({ isIndeterminate }) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "checkbox-box", "aria-hidden": true, children: isIndeterminate ? renderIconNode("minus", { className: "checkbox-mark" }) : renderIconNode("check", { className: "checkbox-mark" }) }) }) }),
    columns != null ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_react_aria_components14.Collection, { items: columns, children }) : children
  ] });
}
function TitanColumn(props) {
  const {
    allowsSorting,
    children,
    alignment = "left",
    numericSort = false,
    sortIconPosition = "left",
    showInfoIcon = false,
    infoIconAriaLabel
  } = props;
  const allowsResizing = props.allowsResizing;
  const resolvedLabel = (renderProps) => typeof children === "function" ? children(renderProps) : children;
  const headerContent = allowsSorting ? (renderProps) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    SortableHeaderContent,
    {
      label: resolvedLabel(renderProps),
      sortDirection: numericSort ? renderProps.sortDirection === "ascending" ? "descending" : renderProps.sortDirection === "descending" ? "ascending" : void 0 : renderProps.sortDirection,
      sortIconPosition,
      showInfoIcon,
      infoIconAriaLabel
    }
  ) : showInfoIcon ? (renderProps) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    HeaderWithInfoOnly,
    {
      label: resolvedLabel(renderProps),
      infoIconAriaLabel
    }
  ) : children;
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    import_react_aria_components14.Column,
    {
      ...props,
      className: [
        props.className,
        allowsSorting ? "table-col-sortable" : "",
        alignment === "center" ? "table-align-center" : "",
        alignment === "right" ? "table-align-right" : "table-align-left"
      ].filter(Boolean).join(" "),
      children: allowsResizing && typeof headerContent !== "function" ? /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(import_jsx_runtime18.Fragment, { children: [
        headerContent,
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_react_aria_components14.ColumnResizer, {})
      ] }) : allowsResizing && typeof headerContent === "function" ? ((rp) => /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(import_jsx_runtime18.Fragment, { children: [
        headerContent(rp),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_react_aria_components14.ColumnResizer, {})
      ] })) : headerContent
    }
  );
}
function TitanTableBody(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_react_aria_components14.TableBody, { ...props });
}
function TitanRow({ columns, children, ...props }) {
  const { selectionBehavior, allowsDragging } = (0, import_react_aria_components14.useTableOptions)();
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
    import_react_aria_components14.Row,
    {
      ...props,
      className: [
        props.className,
        props.onAction || props.href ? "table-row-actionable" : ""
      ].filter(Boolean).join(" "),
      children: [
        allowsDragging && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_react_aria_components14.Cell, { className: "table-cell-drag", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_react_aria_components15.Button, { slot: "drag", className: "icon-ghost", "aria-label": "Drag", children: renderIconNode("grip-vertical") }) }),
        selectionBehavior === "toggle" && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_react_aria_components14.Cell, { className: "table-cell-checkbox", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_react_aria_components14.Checkbox, { slot: "selection", "aria-label": "Select row", className: "checkbox-root", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "checkbox-box", "aria-hidden": true, children: renderIconNode("check", { className: "checkbox-mark" }) }) }) }),
        columns != null ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_react_aria_components14.Collection, { items: columns, children }) : children
      ]
    }
  );
}
function TitanCell(props) {
  const { alignment = "left" } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    import_react_aria_components14.Cell,
    {
      ...props,
      className: [
        props.className,
        "table-cell-body",
        alignment === "center" ? "table-align-center" : "",
        alignment === "right" ? "table-align-right" : "table-align-left"
      ].filter(Boolean).join(" ")
    }
  );
}
function TitanResizableTableContainer({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    import_react_aria_components14.ResizableTableContainer,
    {
      ...props,
      className: ["layout-table-wrap", "layout-table-aria", "titan-resizable-table-container", className].filter(Boolean).join(" "),
      children
    }
  );
}
function TitanTableLoadMoreItem(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_react_aria_components14.TableLoadMoreItem, { ...props });
}

// src/TitanTableCells.tsx
var import_react_aria_components16 = require("react-aria-components");
var import_jsx_runtime19 = require("react/jsx-runtime");
var TITAN_500_COLORS = [
  "var(--color-blueberry-500, #6f6dde)",
  "var(--color-violet-500, #967af8)",
  "var(--color-purple-500, #a452f7)",
  "var(--color-ocean-500, #5c98f8)",
  "var(--color-indigo-500, #6caad1)",
  "var(--color-turquoise-500, #35c0cb)",
  "var(--color-teal-500, #6ec091)",
  "var(--color-green-500, #83e46e)",
  "var(--color-orange-500, #ef8251)",
  "var(--color-red-500, #ed655c)",
  "var(--color-pink-500, #ed57a3)"
];
function getInitialsColor(seed) {
  const idx = typeof seed === "string" ? seed.split("").reduce((a, c) => a + c.charCodeAt(0), 0) : seed;
  const safe = Math.abs(idx) % TITAN_500_COLORS.length;
  return TITAN_500_COLORS[safe] || TITAN_500_COLORS[0];
}
var defaultFormat = (d) => d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
function TitanTableCellDate({ value, format = defaultFormat, className = "" }) {
  const d = value instanceof Date ? value : new Date(value);
  const str = Number.isNaN(d.getTime()) ? String(value) : format(d);
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("span", { className: `table-cell-date ${className}`.trim(), children: [
    renderIconNode("calendar", { className: "table-cell-date-icon" }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { children: str })
  ] });
}
function deriveInitials(initials, name) {
  if (initials && initials.length >= 1) return initials.slice(0, 2).toUpperCase();
  if (name && name.length >= 1) {
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    return name.slice(0, 2).toUpperCase();
  }
  return "??";
}
function TitanTableCellInitials({
  initials,
  name,
  seed = "",
  className = ""
}) {
  const text = deriveInitials(initials, name);
  const bg = getInitialsColor(seed || text);
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    "span",
    {
      className: `table-avatar-initials ${className}`.trim(),
      style: { background: bg },
      title: name || text,
      children: text
    }
  );
}
function TitanTableCellActions({
  onEdit,
  onDelete,
  extraItems = [],
  ariaLabel = "Actions",
  className = ""
}) {
  const hasEdit = typeof onEdit === "function";
  const hasDelete = typeof onDelete === "function";
  const hasAny = hasEdit || hasDelete || extraItems.length > 0;
  if (!hasAny) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: `table-cell-actions-wrap ${className}`.trim(), children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_react_aria_components16.MenuTrigger, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_react_aria_components16.Button, { className: "icon-ghost table-cell-actions-trigger", "aria-label": ariaLabel, children: renderIconNode("more-vertical") }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
      import_react_aria_components16.Popover,
      {
        className: "menu-popover table-row-menu-popover",
        placement: "bottom end",
        offset: 4,
        shouldFlip: true,
        children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
          import_react_aria_components16.Menu,
          {
            className: "menu-list",
            onAction: (key) => {
              if (key === "edit") onEdit?.();
              else if (key === "delete") onDelete?.();
              else extraItems.find((i) => i.id === key)?.onAction();
            },
            children: [
              extraItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_react_aria_components16.MenuItem, { id: item.id, className: "menu-item", textValue: item.label, children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "menu-item-start", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "menu-item-label", children: item.label }) }) }, item.id)),
              extraItems.length > 0 && (hasEdit || hasDelete) && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { role: "separator", className: "menu-separator" }),
              hasEdit && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_react_aria_components16.MenuItem, { id: "edit", className: "menu-item", textValue: "Edit", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("span", { className: "menu-item-start", children: [
                /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "menu-item-icon", "aria-hidden": true, children: renderIconNode("edit") }),
                /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "menu-item-label", children: "Edit" })
              ] }) }),
              hasDelete && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_react_aria_components16.MenuItem, { id: "delete", className: "menu-item menu-item-destructive", textValue: "Delete", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("span", { className: "menu-item-start", children: [
                /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "menu-item-icon", "aria-hidden": true, children: renderIconNode("delete") }),
                /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "menu-item-label", children: "Delete" })
              ] }) })
            ]
          }
        )
      }
    )
  ] }) });
}
var STATUS_CONFIG = {
  processing: { label: "Processing", colorVar: "var(--color-orange-500, #ef8251)" },
  finished: { label: "Finished", colorVar: "var(--color-green-500, #83e46e)" },
  demo: { label: "Demo", colorVar: "var(--color-ocean-500, #5c98f8)" },
  failed: { label: "Failed", colorVar: "var(--color-red-500, #ed655c)" }
};
function TitanTableCellStatus({ status, label, className = "" }) {
  const config = STATUS_CONFIG[status];
  const text = label ?? config.label;
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("span", { className: `table-status-dot-wrap ${className}`.trim(), children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
      "span",
      {
        className: "table-status-dot",
        style: { background: config.colorVar },
        "aria-hidden": true
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { children: text })
  ] });
}

// src/TitanTableExamples.tsx
var import_react5 = require("react");
var import_react_aria_components17 = require("react-aria-components");

// src/TitanLoader.tsx
var import_jsx_runtime20 = require("react/jsx-runtime");
var LOADER_CDN_BASE = "https://cdn.jsdelivr.net/gh/angelcreative/titan-foundations@main/public/assets/logos";
function TitanLoader({
  size = 120,
  label = "Loading\u2026",
  className = "",
  style,
  loaderBasePath = LOADER_CDN_BASE
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
    "div",
    {
      className: `titan-loader ${className}`.trim(),
      role: "status",
      "aria-label": label,
      style,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
          "img",
          {
            className: "titan-loader-img",
            src: `${loaderBasePath}/loader-l.gif`,
            alt: "",
            "aria-hidden": "true",
            width: size,
            height: size,
            style: { width: size, height: size }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "titan-loader-sr-only", children: label })
      ]
    }
  );
}

// src/TitanAvatar.tsx
var import_jsx_runtime21 = require("react/jsx-runtime");
function TitanAvatar({
  account,
  icon,
  "aria-label": ariaLabel
}) {
  if (!account) {
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { role: "img", className: "titan-avatar", "aria-label": ariaLabel, children: icon ?? renderIconNode("user") });
  }
  const firstLetter = account.charAt(0).toUpperCase();
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { role: "img", className: "titan-avatar body-m-400", "aria-label": ariaLabel, children: firstLetter });
}

// src/TitanTableExamples.tsx
var import_jsx_runtime22 = require("react/jsx-runtime");
function TitanTableExampleBasic() {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(TitanTable, { "aria-label": "Files", children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(TitanTableHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanColumn, { isRowHeader: true, children: "Name" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanColumn, { children: "Type" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanColumn, { children: "Date Modified" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(TitanTableBody, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(TitanRow, { id: "row-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanCell, { children: "Games" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanCell, { children: "File folder" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanCell, { children: "6/7/2020" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(TitanRow, { id: "row-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanCell, { children: "Program Files" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanCell, { children: "File folder" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanCell, { children: "4/7/2021" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(TitanRow, { id: "row-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanCell, { children: "bootmgr" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanCell, { children: "System file" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanCell, { children: "11/20/2010" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(TitanRow, { id: "row-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanCell, { children: "log.txt" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanCell, { children: "Text Document" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanCell, { children: "1/18/2016" })
      ] })
    ] })
  ] });
}
var dynamicColumns = [
  { id: "name", name: "Name", isRowHeader: true },
  { id: "type", name: "Type" },
  { id: "date", name: "Date Modified" }
];
var initialDynamicRows = [
  { id: 1, name: "Games", type: "File folder", date: "6/7/2020" },
  { id: 2, name: "Program Files", type: "File folder", date: "4/7/2021" },
  { id: 3, name: "bootmgr", type: "System file", date: "11/20/2010" },
  { id: 4, name: "log.txt", type: "Text Document", date: "1/18/2016" }
];
function TitanTableExampleDynamic() {
  const [showColumns, setShowColumns] = (0, import_react5.useState)(["name", "type", "date"]);
  const [rows, setRows] = (0, import_react5.useState)(initialDynamicRows);
  const visibleColumns = dynamicColumns.filter((c) => showColumns.includes(c.id));
  const addRow = () => {
    const date = (/* @__PURE__ */ new Date()).toLocaleDateString();
    setRows((prev) => [...prev, { id: prev.length + 1, name: "file.txt", type: "Text Document", date }]);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start", width: "100%" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { style: { display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { style: { fontSize: 14, fontWeight: 600 }, children: "Show columns:" }),
      dynamicColumns.map((c) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
        TitanCheckboxField,
        {
          label: c.name,
          isSelected: showColumns.includes(c.id),
          onChange: (checked) => setShowColumns(
            (prev) => checked ? [...prev, c.id] : prev.filter((x) => x !== c.id)
          )
        },
        c.id
      )),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanButton, { onPress: addRow, children: "Add row" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(TitanTable, { "aria-label": "Files", style: { width: "100%" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanTableHeader, { columns: visibleColumns, children: (column) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanColumn, { isRowHeader: column.isRowHeader, children: column.name }, column.id) }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanTableBody, { items: rows, dependencies: [visibleColumns], children: (item) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanRow, { id: String(item.id), columns: visibleColumns, children: (column) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanCell, { children: item[column.id] }) }, item.id) })
    ] })
  ] });
}
function TitanTableExampleAsync() {
  const list = (0, import_react_aria_components17.useAsyncList)({
    async load({ signal, cursor }) {
      const url = cursor ?? "https://swapi.dev/api/people/";
      const res = await fetch(url, { signal });
      const json = await res.json();
      const items = (json.results ?? []).map((p) => ({
        id: p.url ?? String(Math.random()),
        name: p.name ?? "",
        height: p.height ?? "",
        mass: p.mass ?? "",
        birth: p.birth_year ?? ""
      }));
      return { items, cursor: json.next ?? void 0 };
    },
    getKey: (item) => item.id
  });
  const isLoadingMore = list.loadingState === "loadingMore";
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { style: { minHeight: 200, maxHeight: 360, overflow: "auto", width: "100%" }, children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(TitanTable, { "aria-label": "Star Wars characters", stickyHeader: true, style: { width: "100%" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(TitanTableHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanColumn, { id: "name", isRowHeader: true, children: "Name" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanColumn, { id: "height", children: "Height" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanColumn, { id: "mass", children: "Mass" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanColumn, { id: "birth", children: "Birth Year" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
      TitanTableBody,
      {
        items: list.items,
        renderEmptyState: () => list.isLoading ? /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { style: { display: "flex", justifyContent: "center", padding: 24 }, children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanLoader, { "aria-label": "Loading..." }) }) : list.error ? /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { style: { padding: 24, textAlign: "center", color: "var(--color-red-600)" }, children: list.error.message }) : /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { style: { padding: 24, textAlign: "center", fontStyle: "italic" }, children: "No data." }),
        children: [
          ((item) => /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(TitanRow, { id: item.id, children: [
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanCell, { children: item.name }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanCell, { children: item.height }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanCell, { children: item.mass }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanCell, { children: item.birth })
          ] })),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanTableLoadMoreItem, { onLoadMore: list.loadMore, isLoading: isLoadingMore })
        ]
      }
    )
  ] }) });
}
function TitanTableExampleLinks() {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(TitanTable, { "aria-label": "Links", children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(TitanTableHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanColumn, { isRowHeader: true, children: "Name" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanColumn, { children: "URL" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanColumn, { children: "Date added" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(TitanTableBody, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(TitanRow, { id: "row-1", href: "https://adobe.com/", target: "_blank", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanCell, { children: "Adobe" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanCell, { children: "https://adobe.com/" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanCell, { children: "January 28, 2023" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(TitanRow, { id: "row-2", href: "https://google.com/", target: "_blank", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanCell, { children: "Google" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanCell, { children: "https://google.com/" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanCell, { children: "April 5, 2023" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(TitanRow, { id: "row-3", href: "https://nytimes.com/", target: "_blank", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanCell, { children: "New York Times" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanCell, { children: "https://nytimes.com/" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanCell, { children: "July 12, 2023" })
      ] })
    ] })
  ] });
}
var clickableNameRows = [
  { id: "1", name: "Games", type: "File folder", date: "6/7/2020" },
  { id: "2", name: "Program Files", type: "File folder", date: "4/7/2021" },
  { id: "3", name: "bootmgr", type: "System file", date: "11/20/2010" }
];
function TitanTableExampleClickableNameCell() {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(TitanTable, { "aria-label": "Files with clickable names", children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(TitanTableHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanColumn, { isRowHeader: true, children: "Name" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanColumn, { children: "Type" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanColumn, { children: "Date Modified" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanTableBody, { items: clickableNameRows, children: (item) => /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(TitanRow, { id: item.id, children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanCell, { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
        "button",
        {
          type: "button",
          className: "table-cell-link",
          onClick: () => alert(`Open: ${item.name}`),
          children: item.name
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanCell, { children: item.type }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanCell, { children: item.date })
    ] }) })
  ] });
}
var cellTypesRows = [
  { id: "1", name: "Alice Wong", date: "2025-11-15", status: "finished" },
  { id: "2", name: "Diego Zapata", date: "2025-10-01", status: "processing" },
  { id: "3", name: "Diego Zapata", date: "2025-09-20", status: "demo" },
  { id: "4", name: "Jane Doe", date: "2025-08-12", status: "failed" }
];
function TitanTableExampleCellTypes() {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(TitanTable, { "aria-label": "Rows with date, initials, status, actions", children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(TitanTableHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanColumn, { isRowHeader: true, children: "Name" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanColumn, { children: "Date" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanColumn, { children: "Status" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanColumn, { className: "table-col-actions", children: "Actions" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanTableBody, { items: cellTypesRows, children: (item) => /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(TitanRow, { id: item.id, children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanCell, { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("span", { className: "table-cell-avatar-group", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanAvatar, { account: item.name, "aria-label": `${item.name}'s avatar` }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { children: item.name })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanCell, { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanTableCellDate, { value: item.date }) }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanCell, { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanTableCellStatus, { status: item.status }) }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanCell, { className: "table-cell-actions", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
        TitanTableCellActions,
        {
          onEdit: () => alert(`Edit ${item.name}`),
          onDelete: () => alert(`Delete ${item.name}`)
        }
      ) })
    ] }) })
  ] });
}
function TitanTableExampleEmpty() {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(TitanTable, { "aria-label": "Search results", children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(TitanTableHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanColumn, { isRowHeader: true, children: "Name" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanColumn, { children: "Type" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanColumn, { children: "Date Modified" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanTableBody, { items: [], renderEmptyState: () => "No results found.", children: () => null })
  ] });
}
var selectionRows = [
  { id: "charizard", name: "Charizard", type: "Fire, Flying", level: 67 },
  { id: "blastoise", name: "Blastoise", type: "Water", level: 56 },
  { id: "venusaur", name: "Venusaur", type: "Grass, Poison", level: 83 },
  { id: "pikachu", name: "Pikachu", type: "Electric", level: 100 }
];
function TitanTableExampleSelection() {
  const [selected, setSelected] = (0, import_react5.useState)(/* @__PURE__ */ new Set());
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: 8, width: "100%" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
      TitanTable,
      {
        "aria-label": "Favorite pokemon",
        selectionMode: "multiple",
        selectedKeys: selected,
        onSelectionChange: setSelected,
        onRowAction: (key) => alert(`Clicked ${key}`),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(TitanTableHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanColumn, { isRowHeader: true, children: "Name" }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanColumn, { children: "Type" }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanColumn, { children: "Level" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanTableBody, { items: selectionRows, children: (item) => /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(TitanRow, { id: item.id, children: [
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanCell, { children: item.name }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanCell, { children: item.type }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanCell, { children: item.level })
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("p", { style: { fontSize: 14, margin: 0 }, children: [
      "Current selection: ",
      selected === "all" ? "all" : [...selected].join(", ")
    ] })
  ] });
}
var sortableRows = [
  { id: 1, name: "Charizard", type: "Fire, Flying", level: 67 },
  { id: 2, name: "Blastoise", type: "Water", level: 56 },
  { id: 3, name: "Venusaur", type: "Grass, Poison", level: 83 },
  { id: 4, name: "Pikachu", type: "Electric", level: 100 }
];
function TitanTableExampleSortable() {
  const [sortDescriptor, setSortDescriptor] = (0, import_react5.useState)({
    column: "name",
    direction: "ascending"
  });
  const sortedRows = (0, import_react5.useMemo)(() => {
    if (!sortDescriptor.column) return sortableRows;
    return [...sortableRows].sort((a, b) => {
      const key = sortDescriptor.column;
      const aVal = a[key];
      const bVal = b[key];
      const cmp = aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor]);
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
    TitanTable,
    {
      "aria-label": "Favorite pokemon",
      sortDescriptor,
      onSortChange: setSortDescriptor,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(TitanTableHeader, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanColumn, { id: "name", isRowHeader: true, allowsSorting: true, children: "Name" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanColumn, { id: "type", allowsSorting: true, children: "Type" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanColumn, { id: "level", allowsSorting: true, children: "Level" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanTableBody, { items: sortedRows, children: (item) => /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(TitanRow, { id: String(item.id), children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanCell, { children: item.name }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanCell, { children: item.type }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanCell, { children: item.level })
        ] }) })
      ]
    }
  );
}
var headerVariantRows = [
  { id: 1, name: "Alpha", metric: 100, note: "First", plain: "A" },
  { id: 2, name: "Beta", metric: 200, note: "Second", plain: "B" },
  { id: 3, name: "Gamma", metric: 150, note: "Third", plain: "C" }
];
function TitanTableExampleHeaderVariants() {
  const [sortDescriptor, setSortDescriptor] = (0, import_react5.useState)({ column: "name", direction: "ascending" });
  const sortedRows = (0, import_react5.useMemo)(() => {
    if (!sortDescriptor.column) return headerVariantRows;
    return [...headerVariantRows].sort((a, b) => {
      const key = sortDescriptor.column;
      const aVal = a[key];
      const bVal = b[key];
      const cmp = String(aVal).localeCompare(String(bVal), void 0, { numeric: true });
      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor]);
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
    TitanTable,
    {
      "aria-label": "Table with header variants",
      sortDescriptor,
      onSortChange: setSortDescriptor,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(TitanTableHeader, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanColumn, { id: "name", isRowHeader: true, allowsSorting: true, sortIconPosition: "left", children: "Name" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanColumn, { id: "metric", showInfoIcon: true, infoIconAriaLabel: "Metric definition", children: "Metric" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanColumn, { id: "note", allowsSorting: true, sortIconPosition: "left", showInfoIcon: true, infoIconAriaLabel: "Note tooltip", children: "Note" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanColumn, { id: "plain", children: "Plain" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanTableBody, { items: sortedRows, children: (item) => /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(TitanRow, { id: String(item.id), children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanCell, { children: item.name }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanCell, { children: item.metric }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanCell, { children: item.note }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanCell, { children: item.plain })
        ] }) })
      ]
    }
  );
}
var resizableRows = [
  { id: 1, name: "2022 Roadmap Proposal Revision 012822 Copy (2)", date: "November 27, 2022 at 4:56PM", size: "214 KB" },
  { id: 2, name: "Budget", date: "January 27, 2021 at 1:56AM", size: "14 MB" },
  { id: 3, name: "Welcome Email Template", date: "July 24, 2022 at 2:48 PM", size: "20 KB" },
  { id: 4, name: "Job Posting_8301", date: "May 30, 2025", size: "139 KB" }
];
function TitanTableExampleResizable() {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanResizableTableContainer, { style: { maxHeight: 320 }, children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(TitanTable, { noWrapper: true, "aria-label": "Table with resizable columns", style: { width: "100%" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(TitanTableHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanColumn, { id: "file", isRowHeader: true, allowsResizing: true, defaultWidth: 200, minWidth: 120, maxWidth: 500, children: "File Name" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanColumn, { id: "size", allowsResizing: true, defaultWidth: 80, children: "Size" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanColumn, { id: "date", allowsResizing: true, defaultWidth: 140, minWidth: 100, children: "Date Modified" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanTableBody, { items: resizableRows, children: (item) => /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(TitanRow, { id: String(item.id), children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanCell, { children: item.name }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanCell, { children: item.size }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanCell, { children: item.date })
    ] }) })
  ] }) });
}
var dragDropInitial = [
  { id: 1, name: "Games", date: "6/7/2020", type: "File folder" },
  { id: 2, name: "Program Files", date: "4/7/2021", type: "File folder" },
  { id: 3, name: "bootmgr", date: "11/20/2010", type: "System file" },
  { id: 4, name: "log.txt", date: "1/18/2016", type: "Text Document" }
];
function TitanTableExampleDragDrop() {
  const list = (0, import_react_aria_components17.useListData)({
    initialItems: dragDropInitial,
    getKey: (item) => String(item.id)
  });
  const { dragAndDropHooks } = (0, import_react_aria_components17.useDragAndDrop)({
    getItems: (keys, items) => items.map((item) => ({ "text/plain": item.name })),
    onReorder: (e) => {
      if (e.target.dropPosition === "before") {
        list.moveBefore(e.target.key, e.keys);
      } else if (e.target.dropPosition === "after") {
        list.moveAfter(e.target.key, e.keys);
      }
    }
  });
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(TitanTable, { "aria-label": "Files", selectionMode: "multiple", dragAndDropHooks, children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(TitanTableHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanColumn, { isRowHeader: true, children: "Name" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanColumn, { children: "Type" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanColumn, { children: "Date Modified" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanTableBody, { items: list.items, children: (item) => /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(TitanRow, { id: String(item.id), children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanCell, { children: item.name }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanCell, { children: item.type }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TitanCell, { children: item.date })
    ] }) })
  ] });
}

// src/TitanTwoUpOneDownLayout.tsx
var import_jsx_runtime23 = require("react/jsx-runtime");
function TitanTwoUpOneDownLayout({
  theme = "insights",
  userInitial = "A",
  breadcrumbItems,
  breadcrumbCurrentLabel,
  leftTop,
  rightTop,
  bottom
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(import_jsx_runtime23.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(TitanNavbar, { theme, userInitial }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("main", { className: "page page--flush-breadcrumb", children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("section", { className: "page-breadcrumb-host", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(TitanBreadcrumb, { items: breadcrumbItems, currentLabel: breadcrumbCurrentLabel }) }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(TitanCardGrid, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(TitanCard, { span: 8, children: leftTop }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(TitanCard, { span: 8, children: rightTop }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(TitanCard, { span: 16, children: bottom })
      ] })
    ] })
  ] });
}

// src/TitanSidebar.tsx
var import_react6 = require("react");
var import_react_aria_components18 = require("react-aria-components");
var import_jsx_runtime24 = require("react/jsx-runtime");
var SidebarContext = (0, import_react6.createContext)({
  collapsed: false,
  activeId: null,
  setActiveId: () => {
  }
});
function TitanSidebar({
  collapsed = false,
  onToggle,
  activeId: controlledActiveId,
  defaultActiveId,
  onActiveChange,
  children
}) {
  const [uncontrolledActiveId, setUncontrolledActiveId] = (0, import_react6.useState)(
    defaultActiveId ?? null
  );
  const isControlled = controlledActiveId !== void 0;
  const activeId = isControlled ? controlledActiveId : uncontrolledActiveId;
  const setActiveId = (0, import_react6.useCallback)(
    (id) => {
      if (!isControlled) setUncontrolledActiveId(id);
      onActiveChange?.(id);
    },
    [isControlled, onActiveChange]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(SidebarContext.Provider, { value: { collapsed, activeId, setActiveId }, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
    "aside",
    {
      className: "titan-sidebar",
      ...collapsed ? { "data-collapsed": "" } : {},
      children: [
        onToggle && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
          import_react_aria_components18.Button,
          {
            className: "titan-sidebar-toggle",
            onPress: onToggle,
            "aria-label": collapsed ? "Expand sidebar" : "Collapse sidebar",
            children: collapsed ? renderIconNode("chevron-right") : renderIconNode("chevron-left")
          }
        ),
        children
      ]
    }
  ) });
}
function TitanSidebarHeader({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "titan-sidebar-header", children });
}
function TitanSidebarItem({
  id,
  icon,
  onPress,
  children
}) {
  const { collapsed, activeId, setActiveId } = (0, import_react6.useContext)(SidebarContext);
  const isActive = activeId === id;
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
    import_react_aria_components18.Button,
    {
      className: "titan-sidebar-item",
      "data-active": isActive ? "true" : void 0,
      "aria-current": isActive ? "page" : void 0,
      "aria-label": collapsed && typeof children === "string" ? children : void 0,
      onPress: () => {
        setActiveId(id);
        onPress?.();
      },
      children: [
        icon ? renderIconNode(icon) : null,
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: "titan-sidebar-item-label", children })
      ]
    }
  );
}

// src/TitanSlider.tsx
var import_react_aria_components19 = require("react-aria-components");
var import_jsx_runtime25 = require("react/jsx-runtime");
function TitanSlider({
  label,
  defaultValue = 50,
  minValue = 0,
  maxValue = 100,
  step = 1,
  isDisabled = false,
  showOutput = true,
  onChange,
  formatOptions,
  className = ""
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
    import_react_aria_components19.Slider,
    {
      className: `slider-root ${className}`.trim(),
      defaultValue,
      minValue,
      maxValue,
      step,
      isDisabled,
      onChange,
      formatOptions,
      children: [
        (label || showOutput) && /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "slider-header", children: [
          label && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_react_aria_components19.Label, { className: "slider-label", children: label }),
          showOutput && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_react_aria_components19.SliderOutput, { className: "slider-output" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_react_aria_components19.SliderTrack, { className: "slider-track", children: ({ state }) => /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(import_jsx_runtime25.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
            "div",
            {
              className: "slider-track-fill",
              style: { width: `${state.getThumbPercent(0) * 100}%` }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_react_aria_components19.SliderThumb, { className: "slider-thumb", index: 0 })
        ] }) })
      ]
    }
  );
}
function TitanRangeSlider({
  label,
  defaultValue = [20, 80],
  minValue = 0,
  maxValue = 100,
  step = 1,
  isDisabled = false,
  showOutput = true,
  onChange,
  formatOptions,
  className = ""
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
    import_react_aria_components19.Slider,
    {
      className: `slider-root slider-root-range ${className}`.trim(),
      defaultValue,
      minValue,
      maxValue,
      step,
      isDisabled,
      onChange,
      formatOptions,
      children: [
        (label || showOutput) && /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "slider-header", children: [
          label && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_react_aria_components19.Label, { className: "slider-label", children: label }),
          showOutput && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_react_aria_components19.SliderOutput, { className: "slider-output" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_react_aria_components19.SliderTrack, { className: "slider-track", children: ({ state }) => {
          const left = state.getThumbPercent(0) * 100;
          const right = state.getThumbPercent(1) * 100;
          return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(import_jsx_runtime25.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
              "div",
              {
                className: "slider-track-fill",
                style: { left: `${left}%`, width: `${right - left}%` }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_react_aria_components19.SliderThumb, { className: "slider-thumb", index: 0 }),
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_react_aria_components19.SliderThumb, { className: "slider-thumb", index: 1 })
          ] });
        } })
      ]
    }
  );
}

// src/TitanProgressBar.tsx
var import_react_aria_components20 = require("react-aria-components");
var import_jsx_runtime26 = require("react/jsx-runtime");
function TitanProgressBar({
  label,
  value = 0,
  minValue = 0,
  maxValue = 100,
  showValue = true,
  formatOptions,
  className = ""
}) {
  const percent = (value - minValue) / (maxValue - minValue) * 100;
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
    import_react_aria_components20.ProgressBar,
    {
      className: `progress-root ${className}`.trim(),
      value,
      minValue,
      maxValue,
      formatOptions,
      children: ({ valueText }) => /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(import_jsx_runtime26.Fragment, { children: [
        (label || showValue) && /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "progress-header", children: [
          label && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_react_aria_components20.Label, { className: "progress-label", children: label }),
          showValue && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "progress-value", children: valueText })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "progress-track", children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "progress-fill", style: { width: `${percent}%` } }) })
      ] })
    }
  );
}

// src/TitanCalendar.tsx
var import_react7 = require("react");
var import_react_aria_components21 = require("react-aria-components");
var import_date = require("@internationalized/date");
var import_jsx_runtime27 = require("react/jsx-runtime");
function CalendarDropdown({
  options,
  value,
  onChange,
  className = ""
}) {
  const [open, setOpen] = (0, import_react7.useState)(false);
  const [flipUp, setFlipUp] = (0, import_react7.useState)(false);
  const ref = (0, import_react7.useRef)(null);
  const listRef = (0, import_react7.useRef)(null);
  const selected = options.find((o) => o.value === value);
  const close = (0, import_react7.useCallback)(() => setOpen(false), []);
  (0, import_react7.useEffect)(() => {
    if (!open) return;
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) close();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open, close]);
  (0, import_react7.useEffect)(() => {
    if (!open || !ref.current || !listRef.current) return;
    const triggerRect = ref.current.getBoundingClientRect();
    const menuHeight = listRef.current.scrollHeight;
    const MENU_MAX = 240;
    const effectiveHeight = Math.min(menuHeight, MENU_MAX);
    const GAP = 4;
    const spaceBelow = window.innerHeight - triggerRect.bottom - GAP;
    const spaceAbove = triggerRect.top - GAP;
    setFlipUp(spaceBelow < effectiveHeight && spaceAbove > spaceBelow);
    const active = listRef.current.querySelector('[data-active="true"]');
    if (active) active.scrollIntoView({ block: "nearest" });
  }, [open]);
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: `cal-dropdown ${className}`.trim(), ref, children: [
    /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
      "button",
      {
        type: "button",
        className: "cal-dropdown-trigger",
        onClick: () => setOpen(!open),
        "aria-haspopup": "listbox",
        "aria-expanded": open,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: selected?.label ?? "" }),
          renderIconNode("chevron-down")
        ]
      }
    ),
    open && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
      "ul",
      {
        className: `cal-dropdown-menu${flipUp ? " cal-dropdown-menu-flip" : ""}`,
        role: "listbox",
        ref: listRef,
        children: options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
          "li",
          {
            role: "option",
            "aria-selected": o.value === value,
            "data-active": o.value === value ? "true" : void 0,
            className: `cal-dropdown-item${o.value === value ? " cal-dropdown-item-active" : ""}`,
            onClick: () => {
              onChange(o.value);
              close();
            },
            children: o.label
          },
          o.value
        ))
      }
    )
  ] });
}
function TitanCalendar({
  defaultValue,
  value,
  onChange,
  showTime = false,
  defaultHour = 1,
  defaultMinute = 0,
  onTimeChange,
  minValue,
  maxValue,
  isDisabled = false,
  className = ""
}) {
  const tz = (0, import_date.getLocalTimeZone)();
  const initial = value ?? defaultValue ?? (0, import_date.today)(tz);
  const [focusedDate, setFocusedDate] = (0, import_react7.useState)(initial);
  const [hour, setHour] = (0, import_react7.useState)(defaultHour);
  const [minute, setMinute] = (0, import_react7.useState)(defaultMinute);
  const months = (0, import_react7.useMemo)(() => {
    const fmt = new Intl.DateTimeFormat(void 0, { month: "long" });
    return Array.from({ length: 12 }, (_, i) => ({
      value: i + 1,
      label: fmt.format(new Date(2024, i, 1))
    }));
  }, []);
  const years = (0, import_react7.useMemo)(() => {
    const y = (0, import_date.today)(tz).year;
    return Array.from({ length: 201 }, (_, i) => y - 100 + i);
  }, [tz]);
  const yearOptions = (0, import_react7.useMemo)(
    () => years.map((y) => ({ value: y, label: String(y) })),
    [years]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: `calendar-wrapper ${className}`.trim(), children: [
    /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
      import_react_aria_components21.Calendar,
      {
        "aria-label": "Calendar",
        focusedValue: focusedDate,
        onFocusChange: setFocusedDate,
        defaultValue,
        value,
        onChange,
        minValue,
        maxValue,
        isDisabled,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("header", { className: "calendar-header", children: [
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react_aria_components21.Button, { slot: "previous", className: "calendar-nav-btn", children: renderIconNode("chevron-left") }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "calendar-selects", children: [
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                CalendarDropdown,
                {
                  options: months,
                  value: focusedDate.month,
                  onChange: (m) => setFocusedDate(focusedDate.set({ month: m }))
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                CalendarDropdown,
                {
                  className: "cal-dropdown-year",
                  options: yearOptions,
                  value: focusedDate.year,
                  onChange: (y) => setFocusedDate(focusedDate.set({ year: y }))
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react_aria_components21.Button, { slot: "next", className: "calendar-nav-btn", children: renderIconNode("chevron-right") })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(import_react_aria_components21.CalendarGrid, { className: "calendar-grid", children: [
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react_aria_components21.CalendarGridHeader, { children: (day) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react_aria_components21.CalendarHeaderCell, { className: "calendar-header-cell" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react_aria_components21.CalendarGridBody, { children: (date) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react_aria_components21.CalendarCell, { date, className: "calendar-cell" }) })
          ] })
        ]
      }
    ),
    showTime && /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "calendar-time", children: [
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "calendar-time-field", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("label", { className: "calendar-time-label", children: "Hour" }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            className: "calendar-time-input",
            value: String(hour).padStart(2, "0"),
            onChange: (e) => {
              const raw = e.target.value.replace(/\D/g, "");
              if (raw === "") {
                setHour(0);
                onTimeChange?.(0, minute);
                return;
              }
              const n = Math.min(23, parseInt(raw, 10));
              if (!isNaN(n)) {
                setHour(n);
                onTimeChange?.(n, minute);
              }
            }
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "calendar-time-separator", children: ":" }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "calendar-time-field", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("label", { className: "calendar-time-label", children: "Minute" }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            className: "calendar-time-input",
            value: String(minute).padStart(2, "0"),
            onChange: (e) => {
              const raw = e.target.value.replace(/\D/g, "");
              if (raw === "") {
                setMinute(0);
                onTimeChange?.(hour, 0);
                return;
              }
              const n = Math.min(59, parseInt(raw, 10));
              if (!isNaN(n)) {
                setMinute(n);
                onTimeChange?.(hour, n);
              }
            }
          }
        )
      ] })
    ] })
  ] });
}

// src/TitanLink.tsx
var import_react_aria_components22 = require("react-aria-components");
var import_jsx_runtime28 = require("react/jsx-runtime");
function TitanLink({
  children,
  size = "m",
  withIcon = false,
  className = "",
  ...props
}) {
  const mergedClassName = [`titan-link`, `text-link-${size}`, className].filter(Boolean).join(" ");
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(import_react_aria_components22.Link, { className: mergedClassName, ...props, children: [
    children,
    withIcon && renderIconNode("redirect")
  ] });
}

// src/TitanPillGroup.tsx
var import_react_aria_components23 = require("react-aria-components");
var import_jsx_runtime29 = require("react/jsx-runtime");
function TitanPillGroup({
  children,
  label,
  onRemove,
  "aria-label": ariaLabel,
  className = ""
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(
    import_react_aria_components23.TagGroup,
    {
      className: ["titan-pill-group", className].filter(Boolean).join(" "),
      "aria-label": ariaLabel ?? label,
      onRemove: onRemove ? (keys) => onRemove(keys) : void 0,
      children: [
        label && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "titan-pill-group-label", children: label }),
        children
      ]
    }
  );
}
function TitanPillList({
  children,
  className = ""
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_react_aria_components23.TagList, { className: ["titan-pill-list", className].filter(Boolean).join(" "), children });
}

// src/TitanButtonGroup.tsx
var import_react_aria_components24 = require("react-aria-components");
var import_jsx_runtime30 = require("react/jsx-runtime");
function TitanButtonGroup({
  children,
  orientation = "horizontal",
  className = "",
  ...props
}) {
  const mergedClassName = ["titan-button-group", `body-m-400`, className].filter(Boolean).join(" ");
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
    import_react_aria_components24.ToggleButtonGroup,
    {
      selectionMode: "single",
      className: mergedClassName,
      "data-orientation": orientation === "vertical" ? "vertical" : void 0,
      ...props,
      children
    }
  );
}
function TitanIndividualButton({
  children,
  className = "",
  ...props
}) {
  const mergedClassName = ["titan-individual-button", "heading-xs-500", className].filter(Boolean).join(" ");
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_react_aria_components24.ToggleButton, { className: mergedClassName, ...props, children });
}

// src/TitanDivider.tsx
var import_jsx_runtime31 = require("react/jsx-runtime");
function TitanDivider({ className = "" }) {
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("hr", { className: ["titan-divider", className].filter(Boolean).join(" ") });
}

// src/TitanCollapsible.tsx
var import_react8 = require("react");
var import_jsx_runtime32 = require("react/jsx-runtime");
function TitanCollapsible({
  children,
  title,
  isCollapsed: controlledCollapsed,
  onChange,
  "aria-label": ariaLabel
}) {
  const [internalCollapsed, setInternalCollapsed] = (0, import_react8.useState)(controlledCollapsed ?? false);
  const isControlled = controlledCollapsed !== void 0;
  const collapsed = isControlled ? controlledCollapsed : internalCollapsed;
  function handleToggle() {
    const next = !collapsed;
    if (!isControlled) setInternalCollapsed(next);
    onChange?.(next);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "titan-collapsible", children: [
    /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)(
      "button",
      {
        type: "button",
        className: "titan-collapsible-header",
        "aria-label": ariaLabel,
        "aria-expanded": !collapsed,
        onClick: handleToggle,
        children: [
          title != null && /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("span", { className: "titan-collapsible-title", children: title }),
          /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("span", { className: "titan-collapsible-chevron", "aria-hidden": "true", children: collapsed ? renderIconNode("chevron-down") : renderIconNode("chevron-up") })
        ]
      }
    ),
    !collapsed && /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "titan-collapsible-content", children })
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  TitanAvatar,
  TitanBadge,
  TitanBadgeAnchor,
  TitanBreadcrumb,
  TitanButton,
  TitanButtonGroup,
  TitanButtonVariants,
  TitanCalendar,
  TitanCard,
  TitanCardGrid,
  TitanCell,
  TitanCheckboxField,
  TitanCollapsible,
  TitanColumn,
  TitanDestructiveIconButton,
  TitanDestructiveIconButtonVariants,
  TitanDialog,
  TitanDivider,
  TitanDrawer,
  TitanErrorButton,
  TitanErrorButtonVariants,
  TitanFormControlsGroup,
  TitanIconButton,
  TitanIconButtonVariants,
  TitanIndividualButton,
  TitanInputField,
  TitanLink,
  TitanLoader,
  TitanMenuDropdown,
  TitanNavBar,
  TitanNavbar,
  TitanNotificationsMenu,
  TitanPagination,
  TitanPill,
  TitanPillGroup,
  TitanPillList,
  TitanProfileMenu,
  TitanProgressBar,
  TitanRadioGroupField,
  TitanRangeSlider,
  TitanResizableTableContainer,
  TitanRow,
  TitanSearchMenu,
  TitanSelect,
  TitanSidebar,
  TitanSidebarHeader,
  TitanSidebarItem,
  TitanSlider,
  TitanSwitchField,
  TitanTable,
  TitanTableBody,
  TitanTableCellActions,
  TitanTableCellDate,
  TitanTableCellInitials,
  TitanTableCellStatus,
  TitanTableExampleAsync,
  TitanTableExampleBasic,
  TitanTableExampleCellTypes,
  TitanTableExampleClickableNameCell,
  TitanTableExampleDragDrop,
  TitanTableExampleDynamic,
  TitanTableExampleEmpty,
  TitanTableExampleHeaderVariants,
  TitanTableExampleLinks,
  TitanTableExampleResizable,
  TitanTableExampleSelection,
  TitanTableExampleSortable,
  TitanTableHeader,
  TitanTableLoadMoreItem,
  TitanTabs,
  TitanTag,
  TitanTextArea,
  TitanTextInput,
  TitanTextareaField,
  TitanToastRegion,
  TitanTooltip,
  TitanTwoUpOneDownLayout,
  getToneStyle,
  registerFallbackIcons,
  registerTitanIcons,
  renderIconNode,
  resolveIcon
});
