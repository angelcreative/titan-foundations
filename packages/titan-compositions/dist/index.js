// src/TitanBadge.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function TitanBadge({ count, max = 99 }) {
  if (count <= 0) return null;
  const isOverflow = count > max;
  const label = isOverflow ? `${max}+` : String(count);
  return /* @__PURE__ */ jsx("span", { className: `badge${isOverflow ? " badge-overflow" : ""}`, "aria-label": `${count} notifications`, children: label });
}
function TitanBadgeAnchor({ count, max = 99, children }) {
  return /* @__PURE__ */ jsxs("span", { className: "badge-anchor", children: [
    children,
    count > 0 && /* @__PURE__ */ jsx("span", { className: "badge-indicator", children: /* @__PURE__ */ jsx(TitanBadge, { count, max }) })
  ] });
}

// src/TitanBreadcrumb.tsx
import {
  Breadcrumb,
  Breadcrumbs,
  Button,
  Menu,
  MenuItem,
  MenuTrigger,
  Popover
} from "react-aria-components";

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
import {
  Bell,
  BellRing,
  Box,
  Calendar,
  ArrowUp,
  ArrowDown,
  ArrowUpDown,
  Check,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  ExternalLink,
  FileText,
  Folder,
  FolderOpen,
  Grip,
  GripVertical,
  Handshake,
  Hash,
  Info,
  Layers,
  LayoutDashboard,
  ListFilter,
  Loader2,
  MessageSquare,
  MousePointerClick,
  Minus,
  Navigation,
  PanelLeft,
  PanelLeftClose,
  PanelLeftOpen,
  PanelRight,
  Search,
  Settings,
  Sparkles,
  MoreVertical,
  Pencil,
  Trash2,
  Tag,
  TextCursorInput,
  ToggleLeft,
  Type,
  User,
  X
} from "lucide-react";
var LUCIDE_REGISTRY = {
  "bell": Bell,
  "notifications": Bell,
  "bell-ring": BellRing,
  "box": Box,
  "calendar": Calendar,
  "arrow-up": ArrowUp,
  "arrow-down": ArrowDown,
  "arrow-up-down": ArrowUpDown,
  "check": Check,
  "chevron-down": ChevronDown,
  "chevron-up": ChevronUp,
  "chevron-left": ChevronLeft,
  "chevron-right": ChevronRight,
  "circle-help": CircleHelp,
  "question": CircleHelp,
  "grip": Grip,
  "grip-vertical": GripVertical,
  "change-product": Grip,
  "handshake": Handshake,
  "hash": Hash,
  "info": Info,
  "layers": Layers,
  "layout-dashboard": LayoutDashboard,
  "list-filter": ListFilter,
  "loader": Loader2,
  "loader-2": Loader2,
  "message-square": MessageSquare,
  "mouse-pointer-click": MousePointerClick,
  "navigation": Navigation,
  "panel-left": PanelLeft,
  "panel-left-close": PanelLeftClose,
  "panel-left-open": PanelLeftOpen,
  "panel-right": PanelRight,
  "search": Search,
  "settings": Settings,
  "more-vertical": MoreVertical,
  "edit": Pencil,
  "delete": Trash2,
  "sparkles": Sparkles,
  "sparks": Sparkles,
  "tag": Tag,
  "text-cursor-input": TextCursorInput,
  "toggle-left": ToggleLeft,
  "type": Type,
  "x": X,
  "minus": Minus,
  "external-link": ExternalLink,
  "file-text": FileText,
  "file": FileText,
  "folder": Folder,
  "folder-open": FolderOpen,
  "redirect": ExternalLink,
  "user": User
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
import { createElement, isValidElement } from "react";
function isComponentType(value) {
  return typeof value === "function" || typeof value === "object" && value !== null && "$$typeof" in value;
}
function renderIconNode(icon, props) {
  if (icon == null) return null;
  if (typeof icon === "string") {
    const Resolved = resolveIcon(icon);
    if (Resolved) return createElement(Resolved, props ?? {});
    return null;
  }
  if (isValidElement(icon)) return icon;
  if (isComponentType(icon)) return createElement(icon, props ?? {});
  return icon;
}

// src/TitanBreadcrumb.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs2(Breadcrumbs, { className: "breadcrumb-nav", "aria-label": ariaLabel, children: [
    visibleBefore.map((item) => /* @__PURE__ */ jsx2(BreadcrumbNode, { item }, item.id)),
    needsCollapse && collapsed.length > 0 && /* @__PURE__ */ jsxs2(Breadcrumb, { className: "breadcrumb-item", children: [
      /* @__PURE__ */ jsxs2(MenuTrigger, { children: [
        /* @__PURE__ */ jsx2(Button, { className: "breadcrumb-ellipsis", "aria-label": "Show more", children: "\u2026" }),
        /* @__PURE__ */ jsx2(Popover, { className: "menu-popover", placement: "bottom start", offset: 8, children: /* @__PURE__ */ jsx2(Menu, { className: "menu-list", children: collapsed.map((item) => /* @__PURE__ */ jsx2(
          MenuItem,
          {
            className: "menu-item",
            textValue: item.label,
            onAction: () => item.onPress?.(),
            children: /* @__PURE__ */ jsxs2("span", { className: "menu-item-start", children: [
              item.icon && /* @__PURE__ */ jsx2("span", { className: "menu-item-icon", children: item.icon }),
              /* @__PURE__ */ jsx2("span", { className: "menu-item-label", children: item.label })
            ] })
          },
          item.id
        )) }) })
      ] }),
      /* @__PURE__ */ jsx2("span", { className: "breadcrumb-separator", "aria-hidden": "true", children: renderIconNode("chevron-right") })
    ] }),
    visibleAfter.map((item) => /* @__PURE__ */ jsx2(BreadcrumbNode, { item }, item.id)),
    /* @__PURE__ */ jsx2(Breadcrumb, { className: "breadcrumb-item", children: /* @__PURE__ */ jsx2("span", { className: "breadcrumb-current", "aria-current": "page", children: currentLabel }) })
  ] });
}
function BreadcrumbNode({ item }) {
  const linkClass = [
    "breadcrumb-link",
    item.selected ? "breadcrumb-link-selected" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxs2(Breadcrumb, { className: "breadcrumb-item", children: [
    /* @__PURE__ */ jsx2(
      Button,
      {
        className: linkClass,
        onPress: item.onPress,
        isDisabled: item.disabled,
        children: item.label
      }
    ),
    /* @__PURE__ */ jsx2("span", { className: "breadcrumb-separator", "aria-hidden": "true", children: renderIconNode("chevron-right") })
  ] });
}

// src/TitanNavbar.tsx
import { Button as Button2 } from "react-aria-components";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx3("header", { className: "navbar-shell", children: /* @__PURE__ */ jsx3("div", { className: "navbar-shell-content", children }) });
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
  return /* @__PURE__ */ jsx3("header", { className: "navbar", role: "banner", children: /* @__PURE__ */ jsxs3("div", { className: "navbar-inner", children: [
    /* @__PURE__ */ jsxs3("div", { className: "navbar-left-group", children: [
      /* @__PURE__ */ jsx3(Button2, { className: "icon-ghost navbar-icon-button", "aria-label": "Change product", onPress: onChangeProduct, children: changeProductIcon ?? renderIconNode("change-product") }),
      /* @__PURE__ */ jsx3("img", { className: "navbar-logo", src: `${logoBasePath}/${logoFile}`, alt: logoAlt })
    ] }),
    /* @__PURE__ */ jsxs3("div", { className: "navbar-right-group", children: [
      /* @__PURE__ */ jsx3(Button2, { className: "icon-ghost navbar-icon-button", "aria-label": "Notifications", onPress: onNotifications, children: notificationsIcon ?? renderIconNode("notifications") }),
      /* @__PURE__ */ jsx3(Button2, { className: "icon-ghost navbar-icon-button", "aria-label": "Support and community", onPress: onSupport, children: supportIcon ?? renderIconNode("handshake") }),
      /* @__PURE__ */ jsx3(Button2, { className: "icon-ghost navbar-icon-button", "aria-label": "Help", onPress: onHelp, children: helpIcon ?? renderIconNode("question") }),
      /* @__PURE__ */ jsx3(Button2, { className: "icon-ghost navbar-icon-button", "aria-label": "Settings", onPress: onSettings, children: settingsIcon ?? renderIconNode("settings") }),
      /* @__PURE__ */ jsx3(Button2, { className: "icon-ghost navbar-icon-button", "aria-label": "Featured action", onPress: onFeaturedAction, children: featuredActionIcon ?? renderIconNode("sparks") }),
      /* @__PURE__ */ jsxs3("div", { className: "navbar-user", children: [
        /* @__PURE__ */ jsx3("span", { className: "navbar-avatar", "aria-hidden": "true", children: userInitial }),
        /* @__PURE__ */ jsx3(Button2, { className: "icon-ghost navbar-chevron-button", "aria-label": "User menu", onPress: onUserMenu, children: userChevronIcon ?? renderIconNode("chevron-down") })
      ] })
    ] })
  ] }) });
}

// src/TitanButton.tsx
import { Button as Button3 } from "react-aria-components";
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs4(Button3, { className: mergedClassName, ...props, children: [
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
  return /* @__PURE__ */ jsx4(Button3, { className: mergedClassName, ...props, children });
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
  return /* @__PURE__ */ jsx4(Button3, { className: mergedClassName, ...props, children });
}
function TitanDestructiveIconButton({
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const baseClass = DESTRUCTIVE_ICON_BUTTON_VARIANT_CLASS[variant];
  const mergedClassName = [baseClass, className].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx4(Button3, { className: mergedClassName, ...props, children });
}

// src/TitanPill.tsx
import { jsx as jsx5, jsxs as jsxs5 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs5(
    "span",
    {
      className: ["pill", `pill-${state}`, tone && !isDisabled ? `pill-tone-${tone}` : "", isDisabled ? "pill-disabled" : "", className].filter(Boolean).join(" "),
      role: "status",
      "aria-label": ariaLabel ?? (typeof content === "string" ? content : void 0),
      ...isDisabled ? { "aria-disabled": true } : {},
      children: [
        /* @__PURE__ */ jsx5("span", { className: "pill-label", children: content }),
        removable && onDismiss && !isDisabled ? /* @__PURE__ */ jsx5(
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
import { jsx as jsx6 } from "react/jsx-runtime";
function TitanTag({ label, tone }) {
  return /* @__PURE__ */ jsx6("span", { className: ["tag-chip", tone ? `tag-tone-${tone}` : ""].filter(Boolean).join(" "), children: label });
}

// src/TitanMenu.tsx
import {
  Button as Button4,
  Collection,
  Menu as Menu2,
  MenuItem as MenuItem2,
  MenuTrigger as MenuTrigger2,
  Popover as Popover2,
  Separator,
  SubmenuTrigger
} from "react-aria-components";
import { Fragment, jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
function highlightMatch(text, query) {
  if (!query || !query.trim()) return text;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  return /* @__PURE__ */ jsxs6(Fragment, { children: [
    text.slice(0, idx),
    /* @__PURE__ */ jsx7("strong", { children: text.slice(idx, idx + query.length) }),
    text.slice(idx + query.length)
  ] });
}
function TitanMenuNode({
  item,
  onAction
}) {
  if (item.children?.length) {
    return /* @__PURE__ */ jsxs6(SubmenuTrigger, { children: [
      /* @__PURE__ */ jsxs6(MenuItem2, { className: "menu-item", textValue: item.label, children: [
        /* @__PURE__ */ jsxs6("span", { className: "menu-item-start", children: [
          item.icon && /* @__PURE__ */ jsx7("span", { className: "menu-item-icon", children: item.icon }),
          item.leftElement && /* @__PURE__ */ jsx7("span", { className: "menu-item-left-element", children: item.leftElement }),
          /* @__PURE__ */ jsx7("span", { className: "menu-item-label", children: item.label })
        ] }),
        /* @__PURE__ */ jsx7("span", { className: "menu-item-end", "aria-hidden": "true", children: renderIconNode("chevron-right") })
      ] }),
      /* @__PURE__ */ jsx7(Popover2, { className: "menu-popover menu-popover-submenu", placement: "end top", children: /* @__PURE__ */ jsx7(Menu2, { className: "menu-list", children: /* @__PURE__ */ jsx7(Collection, { items: item.children, children: (child) => /* @__PURE__ */ jsx7(TitanMenuNode, { item: child, onAction }) }) }) })
    ] });
  }
  return /* @__PURE__ */ jsx7(
    MenuItem2,
    {
      className: `menu-item${item.destructive ? " menu-item-destructive" : ""}`,
      textValue: item.label,
      isDisabled: item.disabled,
      onAction: () => onAction?.(item.id),
      ...item.destructive ? { "data-is-destructive": "" } : {},
      ...item.mcp ? { "data-is-mcp": "" } : {},
      ...item.user ? { "data-is-user": "" } : {},
      children: /* @__PURE__ */ jsxs6("span", { className: "menu-item-start", children: [
        item.icon && /* @__PURE__ */ jsx7("span", { className: "menu-item-icon", children: item.icon }),
        item.leftElement && /* @__PURE__ */ jsx7("span", { className: "menu-item-left-element", children: item.leftElement }),
        /* @__PURE__ */ jsx7("span", { className: "menu-item-label", children: item.label })
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
  return /* @__PURE__ */ jsxs6(MenuTrigger2, { children: [
    iconOnly ? /* @__PURE__ */ jsx7(Button4, { className: "icon-ghost menu-trigger-icon-ghost", "aria-label": triggerLabel, children: triggerIcon }) : /* @__PURE__ */ jsxs6(Button4, { className: "btn btn-secondary menu-trigger-button", children: [
      triggerLabel,
      /* @__PURE__ */ jsx7("span", { className: "menu-trigger-chevron", "aria-hidden": "true", children: renderIconNode("chevron-down") })
    ] }),
    /* @__PURE__ */ jsx7(Popover2, { className: "menu-popover", placement, offset: 8, children: /* @__PURE__ */ jsx7(Menu2, { className: "menu-list", children: /* @__PURE__ */ jsx7(Collection, { items, children: (item) => /* @__PURE__ */ jsx7(TitanMenuNode, { item, onAction }) }) }) })
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
  return /* @__PURE__ */ jsxs6(MenuTrigger2, { children: [
    iconOnly ? /* @__PURE__ */ jsx7(Button4, { className: "icon-ghost menu-trigger-icon-ghost", "aria-label": triggerLabel, children: triggerIcon }) : /* @__PURE__ */ jsxs6(Button4, { className: "btn btn-secondary menu-trigger-button", children: [
      triggerLabel,
      /* @__PURE__ */ jsx7("span", { className: "menu-trigger-chevron", "aria-hidden": "true", children: renderIconNode("chevron-down") })
    ] }),
    /* @__PURE__ */ jsx7(Popover2, { className: "menu-popover", placement, offset: 8, children: /* @__PURE__ */ jsx7(Menu2, { className: "menu-list", children: hasResults ? /* @__PURE__ */ jsxs6(Fragment, { children: [
      /* @__PURE__ */ jsx7(Collection, { items, children: (item) => /* @__PURE__ */ jsx7(
        MenuItem2,
        {
          className: "menu-item menu-item-search",
          textValue: item.label,
          onAction: () => onAction?.(item.id),
          children: /* @__PURE__ */ jsxs6("span", { className: "menu-item-start", children: [
            item.icon && /* @__PURE__ */ jsx7("span", { className: "menu-item-icon", children: item.icon }),
            /* @__PURE__ */ jsx7("span", { className: "menu-item-label", children: highlightMatch(item.label, query) })
          ] })
        }
      ) }),
      onAddNew && /* @__PURE__ */ jsxs6(Fragment, { children: [
        /* @__PURE__ */ jsx7(Separator, { className: "menu-divider" }),
        /* @__PURE__ */ jsx7(
          MenuItem2,
          {
            className: "menu-item",
            textValue: addNewLabel,
            onAction: () => onAddNew(),
            children: /* @__PURE__ */ jsxs6("span", { className: "menu-item-start", children: [
              /* @__PURE__ */ jsx7("span", { className: "menu-item-icon", children: resolvedAddIcon }),
              /* @__PURE__ */ jsx7("span", { className: "menu-item-label", children: addNewLabel })
            ] })
          }
        )
      ] })
    ] }) : /* @__PURE__ */ jsxs6(Fragment, { children: [
      /* @__PURE__ */ jsx7(
        MenuItem2,
        {
          className: "menu-item menu-item-info",
          textValue: emptyLabel,
          isDisabled: true,
          children: /* @__PURE__ */ jsxs6("span", { className: "menu-item-start", children: [
            /* @__PURE__ */ jsx7("span", { className: "menu-item-icon", children: resolvedEmptyIcon }),
            /* @__PURE__ */ jsx7("span", { children: emptyLabel })
          ] })
        }
      ),
      onAddNew && /* @__PURE__ */ jsxs6(Fragment, { children: [
        /* @__PURE__ */ jsx7(Separator, { className: "menu-divider" }),
        /* @__PURE__ */ jsx7(
          MenuItem2,
          {
            className: "menu-item",
            textValue: addNewLabel,
            onAction: () => onAddNew(),
            children: /* @__PURE__ */ jsxs6("span", { className: "menu-item-start", children: [
              /* @__PURE__ */ jsx7("span", { className: "menu-item-icon", children: resolvedAddIcon }),
              /* @__PURE__ */ jsx7("span", { className: "menu-item-label", children: addNewLabel })
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
  return /* @__PURE__ */ jsxs6(MenuTrigger2, { children: [
    iconOnly ? /* @__PURE__ */ jsx7(Button4, { className: "icon-ghost menu-trigger-icon-ghost", "aria-label": triggerLabel, children: triggerIcon }) : /* @__PURE__ */ jsxs6(Button4, { className: "btn btn-secondary menu-trigger-button", children: [
      triggerLabel,
      /* @__PURE__ */ jsx7("span", { className: "menu-trigger-chevron", "aria-hidden": "true", children: renderIconNode("chevron-down") })
    ] }),
    /* @__PURE__ */ jsx7(Popover2, { className: "menu-popover", placement, offset: 8, children: /* @__PURE__ */ jsx7(Menu2, { className: "menu-list", children: /* @__PURE__ */ jsx7(Collection, { items, children: (item) => /* @__PURE__ */ jsxs6(
      MenuItem2,
      {
        className: "menu-item menu-item-profile",
        textValue: `${item.name} ${item.username}`,
        onAction: () => onAction?.(item.id),
        children: [
          /* @__PURE__ */ jsxs6("span", { className: "menu-item-start", children: [
            item.avatarUrl ? /* @__PURE__ */ jsx7(
              "img",
              {
                className: "menu-item-profile-avatar",
                src: item.avatarUrl,
                alt: item.name
              }
            ) : /* @__PURE__ */ jsx7("span", { className: "menu-item-profile-avatar", "aria-hidden": "true" }),
            /* @__PURE__ */ jsxs6("span", { className: "menu-item-profile-info", children: [
              /* @__PURE__ */ jsx7("span", { className: "menu-item-profile-name", children: item.name }),
              /* @__PURE__ */ jsxs6("span", { className: "menu-item-profile-username", children: [
                "@",
                item.username
              ] })
            ] })
          ] }),
          item.metric && /* @__PURE__ */ jsx7("span", { className: "menu-item-profile-metric", children: item.metric })
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
  return /* @__PURE__ */ jsxs6(MenuTrigger2, { children: [
    /* @__PURE__ */ jsx7(TitanBadgeAnchor, { count: resolvedBadgeCount, max: badgeMax, children: /* @__PURE__ */ jsx7(Button4, { className: "icon-ghost menu-trigger-icon-ghost", "aria-label": triggerLabel, children: triggerIcon }) }),
    /* @__PURE__ */ jsx7(Popover2, { className: "menu-popover", placement, offset: 8, children: /* @__PURE__ */ jsx7(Menu2, { className: "menu-list menu-list-notifications", children: hasNotifications ? /* @__PURE__ */ jsxs6(Fragment, { children: [
      /* @__PURE__ */ jsx7(Collection, { items: notifications, children: (n) => /* @__PURE__ */ jsx7(
        MenuItem2,
        {
          className: "menu-item menu-item-notification",
          textValue: typeof n.title === "string" ? n.title : n.id,
          onAction: () => onAction?.(n.id),
          "data-is-notification": true,
          ...n.destructive ? { "data-is-destructive": "" } : {},
          children: /* @__PURE__ */ jsxs6("span", { className: "menu-item-start", children: [
            n.icon && /* @__PURE__ */ jsx7("span", { className: "menu-item-icon", children: n.icon }),
            /* @__PURE__ */ jsxs6("span", { className: "menu-item-notification-content", children: [
              /* @__PURE__ */ jsx7("span", { className: "menu-item-notification-title", children: n.title }),
              /* @__PURE__ */ jsx7("span", { className: "menu-item-notification-date", children: n.date })
            ] })
          ] })
        }
      ) }),
      onMarkAll && /* @__PURE__ */ jsxs6(Fragment, { children: [
        /* @__PURE__ */ jsx7(Separator, { className: "menu-divider" }),
        /* @__PURE__ */ jsx7(
          MenuItem2,
          {
            className: "menu-item",
            textValue: markAllLabel,
            onAction: () => onMarkAll(),
            children: /* @__PURE__ */ jsxs6("span", { className: "menu-item-start", children: [
              markAllIcon && /* @__PURE__ */ jsx7("span", { className: "menu-item-icon", children: markAllIcon }),
              /* @__PURE__ */ jsx7("span", { className: "menu-item-label", children: markAllLabel })
            ] })
          }
        )
      ] })
    ] }) : /* @__PURE__ */ jsx7(
      MenuItem2,
      {
        className: "menu-item menu-item-info menu-item-notification",
        textValue: `${emptyTitle} ${emptyMessage}`,
        isDisabled: true,
        children: /* @__PURE__ */ jsxs6("span", { className: "menu-item-start", children: [
          emptyIcon && /* @__PURE__ */ jsx7("span", { className: "menu-item-icon", children: emptyIcon }),
          /* @__PURE__ */ jsxs6("span", { className: "menu-item-notification-content", children: [
            /* @__PURE__ */ jsx7("span", { children: emptyTitle }),
            /* @__PURE__ */ jsx7("span", { children: emptyMessage })
          ] })
        ] })
      }
    ) }) })
  ] });
}

// src/TitanSelect.tsx
import { useState } from "react";
import {
  Button as Button5,
  Collection as Collection2,
  FieldError,
  Label,
  ListBox,
  ListBoxItem,
  Popover as Popover3,
  Select,
  SelectValue,
  Text
} from "react-aria-components";
import { jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
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
  const [isOpen, setIsOpen] = useState(false);
  const isInvalid = !!errorMessage;
  const selectionProps = selectedKey !== void 0 ? { selectedKey, onSelectionChange } : { defaultSelectedKey };
  return /* @__PURE__ */ jsxs7(
    Select,
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
        label ? /* @__PURE__ */ jsx8(Label, { className: "select-label", children: label }) : null,
        /* @__PURE__ */ jsxs7(Button5, { className: "select-trigger", children: [
          /* @__PURE__ */ jsx8(SelectValue, {}),
          /* @__PURE__ */ jsx8("span", { className: "select-trigger-chevron", "aria-hidden": "true", children: isOpen ? renderIconNode("chevron-up") : renderIconNode("chevron-down") })
        ] }),
        /* @__PURE__ */ jsx8(Popover3, { className: "select-popover", placement: "bottom start", children: /* @__PURE__ */ jsx8(ListBox, { className: "select-list", children: /* @__PURE__ */ jsx8(Collection2, { items: options, children: (option) => /* @__PURE__ */ jsx8(
          ListBoxItem,
          {
            id: option.id,
            className: "select-item",
            isDisabled: option.disabled,
            textValue: option.label,
            children: /* @__PURE__ */ jsxs7("span", { className: "select-item-start", children: [
              option.icon ? /* @__PURE__ */ jsx8("span", { className: "select-item-icon", children: option.icon }) : null,
              /* @__PURE__ */ jsx8("span", { children: option.label })
            ] })
          }
        ) }) }) }),
        (errorMessage || hintMessage) && /* @__PURE__ */ jsx8("div", { className: "field-help-row", children: errorMessage ? /* @__PURE__ */ jsx8(FieldError, { className: "field-error", children: errorMessage }) : /* @__PURE__ */ jsx8(Text, { slot: "description", className: "field-hint", children: hintMessage }) })
      ]
    }
  );
}

// src/TitanTabs.tsx
import { Collection as Collection3, Tab, TabList, TabPanel, Tabs } from "react-aria-components";
import { jsx as jsx9, jsxs as jsxs8 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs8(
    Tabs,
    {
      className: rootClass,
      defaultSelectedKey,
      selectedKey,
      onSelectionChange,
      orientation,
      children: [
        /* @__PURE__ */ jsx9(TabList, { className: listClass, "aria-label": ariaLabel, children: /* @__PURE__ */ jsx9(Collection3, { items, children: (item) => /* @__PURE__ */ jsx9(
          Tab,
          {
            id: item.id,
            className: isVertical ? "tab-trigger tab-trigger-vertical" : "tab-trigger",
            isDisabled: item.disabled,
            children: item.label
          }
        ) }) }),
        /* @__PURE__ */ jsx9(Collection3, { items, children: (item) => /* @__PURE__ */ jsx9(TabPanel, { id: item.id, className: "tab-panel", children: item.content }) })
      ]
    }
  );
}

// src/TitanPagination.tsx
import { Button as Button6 } from "react-aria-components";
import { jsx as jsx10, jsxs as jsxs9 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs9("nav", { className: "pagination-nav", "aria-label": resolvedAriaLabel, children: [
    /* @__PURE__ */ jsx10(
      Button6,
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
      (page, index) => page === "ellipsis" ? /* @__PURE__ */ jsx10("span", { className: "pagination-ellipsis", "aria-hidden": "true", children: "..." }, `ellipsis-${index}`) : /* @__PURE__ */ jsx10(
        Button6,
        {
          className: page === currentPage ? "pagination-button pagination-page-button pagination-page-button-selected" : "pagination-button pagination-page-button",
          "aria-current": page === currentPage ? "page" : void 0,
          onPress: () => handlePageChange(page),
          children: page
        },
        `${resolvedAriaLabel}-${page}`
      )
    ),
    /* @__PURE__ */ jsx10(
      Button6,
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
import { Button as Button7, Dialog, DialogTrigger, Modal, ModalOverlay } from "react-aria-components";
import { Fragment as Fragment2, jsx as jsx11, jsxs as jsxs10 } from "react/jsx-runtime";
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
    return /* @__PURE__ */ jsx11(
      ModalOverlay,
      {
        isDismissable: true,
        className: "drawer-overlay",
        isOpen,
        onOpenChange: (open) => {
          onOpenChange?.(open);
          if (!open) onClose?.();
        },
        children: /* @__PURE__ */ jsx11(Modal, { className: "drawer-modal", children: /* @__PURE__ */ jsx11(Dialog, { className: "drawer-panel", children: ({ close }) => /* @__PURE__ */ jsxs10(Fragment2, { children: [
          /* @__PURE__ */ jsxs10("header", { className: "drawer-header", children: [
            /* @__PURE__ */ jsx11("h3", { className: "drawer-title", children: title }),
            /* @__PURE__ */ jsx11(Button7, { className: "icon-ghost drawer-close-button", "aria-label": "Close drawer", onPress: close, children: renderIconNode("x") })
          ] }),
          /* @__PURE__ */ jsx11("div", { className: "drawer-body", children })
        ] }) }) })
      }
    );
  }
  return /* @__PURE__ */ jsxs10(DialogTrigger, { children: [
    trigger ?? /* @__PURE__ */ jsxs10(Button7, { className: triggerClassName ?? "btn btn-secondary", children: [
      triggerLabel ?? "Open",
      triggerIcon != null ? /* @__PURE__ */ jsxs10(Fragment2, { children: [
        " ",
        triggerIcon
      ] }) : null
    ] }),
    /* @__PURE__ */ jsx11(ModalOverlay, { isDismissable: true, className: "drawer-overlay", children: /* @__PURE__ */ jsx11(Modal, { className: "drawer-modal", children: /* @__PURE__ */ jsx11(Dialog, { className: "drawer-panel", children: ({ close }) => /* @__PURE__ */ jsxs10(Fragment2, { children: [
      /* @__PURE__ */ jsxs10("header", { className: "drawer-header", children: [
        /* @__PURE__ */ jsx11("h3", { className: "drawer-title", children: title }),
        /* @__PURE__ */ jsx11(Button7, { className: "icon-ghost drawer-close-button", "aria-label": "Close drawer", onPress: close, children: renderIconNode("x") })
      ] }),
      /* @__PURE__ */ jsx11("div", { className: "drawer-body", children })
    ] }) }) }) })
  ] });
}

// src/TitanDialog.tsx
import { Button as Button8, Dialog as Dialog2, DialogTrigger as DialogTrigger2, Modal as Modal2, ModalOverlay as ModalOverlay2 } from "react-aria-components";
import { Fragment as Fragment3, jsx as jsx12, jsxs as jsxs11 } from "react/jsx-runtime";
function DialogContent({
  title,
  body,
  leftAction,
  rightAction,
  close,
  closeButton,
  closeText
}) {
  const showTitleHeader = title != null && title !== "";
  return /* @__PURE__ */ jsxs11(Fragment3, { children: [
    closeButton === "icon" && /* @__PURE__ */ jsx12(Button8, { className: "dialog-close-button", "aria-label": "Close dialog", onPress: close, children: renderIconNode("x") }),
    closeButton === "text" && /* @__PURE__ */ jsx12("div", { className: "dialog-close-text-wrap", children: /* @__PURE__ */ jsx12(TitanButton, { variant: "secondary", onPress: close, children: closeText }) }),
    showTitleHeader && /* @__PURE__ */ jsx12("header", { className: "dialog-header", children: /* @__PURE__ */ jsx12("h3", { className: "dialog-title", children: title }) }),
    body != null && /* @__PURE__ */ jsx12("div", { className: "dialog-body", children: body }),
    (leftAction || rightAction) && /* @__PURE__ */ jsxs11("footer", { className: "dialog-footer", children: [
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
  closeButton = "icon",
  closeText = "Close",
  isOpen,
  onOpenChange,
  onClose,
  children,
  "aria-label": ariaLabel
}) {
  if (triggerLabel == null) {
    return /* @__PURE__ */ jsx12(
      ModalOverlay2,
      {
        isDismissable: true,
        className: "dialog-overlay",
        isOpen,
        onOpenChange: (open) => {
          onOpenChange?.(open);
          if (!open) onClose?.();
        },
        children: /* @__PURE__ */ jsx12(Modal2, { className: "dialog-modal", children: /* @__PURE__ */ jsx12(Dialog2, { className: "dialog-panel", "aria-label": ariaLabel, children: ({ close }) => children ?? /* @__PURE__ */ jsx12(
          DialogContent,
          {
            title,
            body,
            leftAction,
            rightAction,
            close,
            closeButton,
            closeText
          }
        ) }) })
      }
    );
  }
  return /* @__PURE__ */ jsxs11(DialogTrigger2, { children: [
    /* @__PURE__ */ jsx12(Button8, { className: "btn btn-secondary", children: triggerLabel }),
    /* @__PURE__ */ jsx12(ModalOverlay2, { isDismissable: true, className: "dialog-overlay", children: /* @__PURE__ */ jsx12(Modal2, { className: "dialog-modal", children: /* @__PURE__ */ jsx12(Dialog2, { className: "dialog-panel", "aria-label": ariaLabel, children: ({ close }) => children ?? /* @__PURE__ */ jsx12(
      DialogContent,
      {
        title,
        body,
        leftAction,
        rightAction,
        close,
        closeButton,
        closeText
      }
    ) }) }) })
  ] });
}

// src/TitanTooltip.tsx
import { OverlayArrow, Tooltip, TooltipTrigger } from "react-aria-components";
import { Fragment as Fragment4, jsx as jsx13, jsxs as jsxs12 } from "react/jsx-runtime";
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
    return /* @__PURE__ */ jsxs12(Fragment4, { children: [
      title != null && /* @__PURE__ */ jsx13("span", { className: "tooltip-title", children: title }),
      body != null && /* @__PURE__ */ jsx13("span", { className: "tooltip-body", children: body })
    ] });
  }
  return /* @__PURE__ */ jsx13(Fragment4, { children: content });
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
  if (!hasContent) return /* @__PURE__ */ jsx13(Fragment4, { children });
  return /* @__PURE__ */ jsxs12(TooltipTrigger, { delay, closeDelay, children: [
    children,
    /* @__PURE__ */ jsxs12(
      Tooltip,
      {
        className: "tooltip-box",
        placement: toAriaPlacement(placement),
        shouldFlip,
        offset: 8,
        children: [
          /* @__PURE__ */ jsx13(OverlayArrow, { children: /* @__PURE__ */ jsx13("svg", { width: 10, height: 6, viewBox: "0 0 10 6", "aria-hidden": true, children: /* @__PURE__ */ jsx13("path", { d: "M0 0 L5 6 L10 0 Z", fill: "var(--tooltip-slot-bg)" }) }) }),
          /* @__PURE__ */ jsx13(TooltipContent, { content, title, body })
        ]
      }
    )
  ] });
}

// src/TitanToast.tsx
import { Button as Button9 } from "react-aria-components";
import { jsx as jsx14, jsxs as jsxs13 } from "react/jsx-runtime";
function TitanToastRegion({ toasts, onDismiss }) {
  return /* @__PURE__ */ jsx14("div", { className: "toast-region", role: "region", "aria-label": "Notifications", "aria-live": "polite", children: toasts.map((toast) => /* @__PURE__ */ jsxs13("article", { className: `toast-card toast-${toast.variant}`, role: "status", children: [
    /* @__PURE__ */ jsxs13("div", { className: "toast-content", children: [
      toast.icon ? /* @__PURE__ */ jsx14("span", { className: "toast-icon", "aria-hidden": "true", children: toast.icon }) : null,
      /* @__PURE__ */ jsxs13("div", { className: "toast-text", children: [
        /* @__PURE__ */ jsx14("strong", { children: toast.title }),
        /* @__PURE__ */ jsx14("span", { children: toast.body })
      ] })
    ] }),
    /* @__PURE__ */ jsx14(Button9, { className: "icon-ghost toast-close-button", "aria-label": "Dismiss toast", onPress: () => onDismiss(toast.id), children: renderIconNode("x") })
  ] }, toast.id)) });
}

// src/TitanFormControls.tsx
import { Checkbox, Label as Label2, Radio, RadioGroup, Switch } from "react-aria-components";
import { jsx as jsx15, jsxs as jsxs14 } from "react/jsx-runtime";
function TitanCheckboxField({
  label,
  name,
  isDisabled = false,
  isSelected,
  defaultSelected = false,
  onChange
}) {
  return /* @__PURE__ */ jsxs14(
    Checkbox,
    {
      className: "checkbox-root",
      name,
      isDisabled,
      isSelected,
      defaultSelected,
      onChange,
      children: [
        /* @__PURE__ */ jsx15("span", { className: "checkbox-box", "aria-hidden": "true", children: renderIconNode("check", { className: "checkbox-mark" }) }),
        /* @__PURE__ */ jsx15("span", { className: "choice-text", children: label })
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
  return /* @__PURE__ */ jsxs14(
    RadioGroup,
    {
      className: "choice-group",
      name,
      value,
      defaultValue,
      onChange,
      children: [
        /* @__PURE__ */ jsx15(Label2, { className: "choice-group-label", children: label }),
        /* @__PURE__ */ jsx15("div", { className: "choice-list", children: options.map((option) => /* @__PURE__ */ jsxs14(
          Radio,
          {
            className: "radio-root",
            value: option.value,
            isDisabled: option.disabled,
            children: [
              /* @__PURE__ */ jsx15("span", { className: "radio-box", "aria-hidden": "true", children: /* @__PURE__ */ jsx15("span", { className: "radio-dot" }) }),
              /* @__PURE__ */ jsx15("span", { className: "choice-text", children: option.label })
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
  return /* @__PURE__ */ jsxs14(
    Switch,
    {
      className: "switch-root",
      name,
      isDisabled,
      isSelected,
      defaultSelected,
      onChange,
      children: [
        /* @__PURE__ */ jsx15("span", { className: "choice-text", children: label }),
        /* @__PURE__ */ jsx15("span", { className: "switch-track", "aria-hidden": "true", children: /* @__PURE__ */ jsx15("span", { className: "switch-thumb" }) })
      ]
    }
  );
}
function TitanFormControlsGroup({ children }) {
  return /* @__PURE__ */ jsx15("div", { className: "form-controls-grid", children });
}

// src/TitanInput.tsx
import { useCallback, useRef } from "react";
import {
  FieldError as FieldError2,
  Group,
  Input,
  Label as Label3,
  Text as Text2,
  TextArea,
  TextField
} from "react-aria-components";
import { jsx as jsx16, jsxs as jsxs15 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs15(TextField, { className, ...props, children: [
    label ? /* @__PURE__ */ jsx16(Label3, { className: "field-label", children: label }) : null,
    resolvedLeadingIcon || resolvedTrailingIcon ? /* @__PURE__ */ jsxs15(Group, { className: iconContainerClass, children: [
      resolvedLeadingIcon ? /* @__PURE__ */ jsx16("span", { className: "input-leading-icon", children: resolvedLeadingIcon }) : null,
      /* @__PURE__ */ jsx16(
        Input,
        {
          className: "input-field",
          placeholder,
          maxLength,
          onChange: (event) => onChange?.(event.target.value)
        }
      ),
      resolvedTrailingIcon ? hasTrailingAction ? /* @__PURE__ */ jsx16(
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
      ) : /* @__PURE__ */ jsx16("span", { className: "input-trailing-icon", children: resolvedTrailingIcon }) : null
    ] }) : /* @__PURE__ */ jsx16(
      Input,
      {
        className: "input-field",
        placeholder,
        maxLength,
        onChange: (event) => onChange?.(event.target.value)
      }
    ),
    resolvedHint || counter ? /* @__PURE__ */ jsxs15("div", { className: "field-help-row", children: [
      resolvedHint ? /* @__PURE__ */ jsx16(Text2, { slot: "description", className: "field-hint", children: resolvedHint }) : /* @__PURE__ */ jsx16("span", {}),
      counter ? /* @__PURE__ */ jsx16("span", { className: "field-counter", children: counter }) : null
    ] }) : null,
    errorMessage ? /* @__PURE__ */ jsx16(FieldError2, { className: "field-error", children: errorMessage }) : null
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
  const textareaRef = useRef(null);
  const handleInput = useCallback(() => {
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
  return /* @__PURE__ */ jsxs15(TextField, { className, ...props, children: [
    label ? /* @__PURE__ */ jsx16(Label3, { className: "field-label", children: label }) : null,
    hasIcons ? /* @__PURE__ */ jsxs15(Group, { className: containerClass, children: [
      resolvedLeadingIcon ? /* @__PURE__ */ jsx16("span", { className: "textarea-leading-icon", children: resolvedLeadingIcon }) : null,
      /* @__PURE__ */ jsx16(
        TextArea,
        {
          ref: textareaRef,
          className: "textarea-field",
          placeholder,
          maxLength,
          onInput: handleInput,
          onChange: (event) => onChange?.(event.target.value)
        }
      ),
      resolvedEndIcon ? /* @__PURE__ */ jsx16(
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
    ] }) : /* @__PURE__ */ jsx16(
      TextArea,
      {
        ref: textareaRef,
        className: "textarea-field",
        placeholder,
        maxLength,
        onInput: handleInput,
        onChange: (event) => onChange?.(event.target.value)
      }
    ),
    resolvedHint || counter ? /* @__PURE__ */ jsxs15("div", { className: "field-help-row", children: [
      resolvedHint ? /* @__PURE__ */ jsx16(Text2, { slot: "description", className: "field-hint", children: resolvedHint }) : /* @__PURE__ */ jsx16("span", {}),
      counter ? /* @__PURE__ */ jsx16("span", { className: "field-counter", children: counter }) : null
    ] }) : null,
    errorMessage ? /* @__PURE__ */ jsx16(FieldError2, { className: "field-error", children: errorMessage }) : null
  ] });
}
function TitanTextInput(props) {
  return /* @__PURE__ */ jsx16(TitanInputField, { ...props });
}
function TitanTextArea(props) {
  return /* @__PURE__ */ jsx16(TitanTextareaField, { ...props });
}

// src/TitanCardGrid.tsx
import { jsx as jsx17 } from "react/jsx-runtime";
function TitanCardGrid({ children }) {
  return /* @__PURE__ */ jsx17("div", { className: "cards-layout-grid", children });
}
function TitanCard({ children, span = 16, className = "" }) {
  const spanClass = `span-${span}`;
  const mergedClassName = ["card", "layout-card", spanClass, className].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx17("article", { className: mergedClassName, children });
}

// src/TitanTable.tsx
import { useLayoutEffect, useRef as useRef2 } from "react";
import {
  Table as RACTable,
  TableHeader as RACTableHeader,
  TableBody as RACTableBody,
  Column as RACColumn,
  Row as RACRow,
  Cell as RACCell,
  Checkbox as Checkbox2,
  Collection as Collection4,
  useTableOptions,
  ResizableTableContainer,
  ColumnResizer,
  TableLoadMoreItem as RACTableLoadMoreItem
} from "react-aria-components";
import { Button as Button10 } from "react-aria-components";
import { Fragment as Fragment5, jsx as jsx18, jsxs as jsxs16 } from "react/jsx-runtime";
function SortIcon({ sortDirection }) {
  return /* @__PURE__ */ jsx18("span", { className: "column-sort-icon-wrap", "aria-hidden": true, children: /* @__PURE__ */ jsxs16("span", { className: "column-sort-icon", children: [
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
  return /* @__PURE__ */ jsxs16("span", { className: `column-sort-header ${sortIconPosition === "left" ? "column-sort-header--sort-left" : ""} ${showInfoIcon ? "column-sort-header--has-info" : ""}`, children: [
    sortIconPosition === "left" && /* @__PURE__ */ jsx18(SortIcon, { sortDirection }),
    label,
    sortIconPosition === "right" && /* @__PURE__ */ jsx18(SortIcon, { sortDirection }),
    showInfoIcon && /* @__PURE__ */ jsx18("span", { className: "column-header-info-wrap", "aria-hidden": true, children: renderIconNode("info", { className: "column-header-info-icon" }) })
  ] });
}
function HeaderWithInfoOnly({
  label,
  infoIconAriaLabel = "More information"
}) {
  return /* @__PURE__ */ jsxs16("span", { className: "column-sort-header column-sort-header--info-only", children: [
    label,
    /* @__PURE__ */ jsx18("span", { className: "column-header-info-wrap", "aria-hidden": true, children: renderIconNode("info", { className: "column-header-info-icon" }) })
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
  const tableRef = useRef2(null);
  useLayoutEffect(() => {
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
  const table = /* @__PURE__ */ jsx18(
    RACTable,
    {
      ref: tableRef,
      ...props,
      className: ["table-borderless", "table-sortable", "table-aria", className].filter(Boolean).join(" ")
    }
  );
  if (noWrapper) return table;
  return /* @__PURE__ */ jsx18(
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
  const { selectionBehavior, selectionMode, allowsDragging } = useTableOptions();
  return /* @__PURE__ */ jsxs16(RACTableHeader, { ...props, children: [
    allowsDragging && /* @__PURE__ */ jsx18(RACColumn, { width: 36, minWidth: 36, maxWidth: 36, className: "table-col-drag", children: () => null }),
    selectionBehavior === "toggle" && /* @__PURE__ */ jsx18(RACColumn, { width: 44, minWidth: 44, maxWidth: 44, className: "table-col-checkbox", children: () => /* @__PURE__ */ jsx18(Checkbox2, { slot: "selection", "aria-label": "Select all", className: "checkbox-root table-checkbox-header", children: ({ isIndeterminate }) => /* @__PURE__ */ jsx18("span", { className: "checkbox-box", "aria-hidden": true, children: isIndeterminate ? renderIconNode("minus", { className: "checkbox-mark" }) : renderIconNode("check", { className: "checkbox-mark" }) }) }) }),
    columns != null ? /* @__PURE__ */ jsx18(Collection4, { items: columns, children }) : children
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
  const headerContent = allowsSorting ? (renderProps) => /* @__PURE__ */ jsx18(
    SortableHeaderContent,
    {
      label: resolvedLabel(renderProps),
      sortDirection: numericSort ? renderProps.sortDirection === "ascending" ? "descending" : renderProps.sortDirection === "descending" ? "ascending" : void 0 : renderProps.sortDirection,
      sortIconPosition,
      showInfoIcon,
      infoIconAriaLabel
    }
  ) : showInfoIcon ? (renderProps) => /* @__PURE__ */ jsx18(
    HeaderWithInfoOnly,
    {
      label: resolvedLabel(renderProps),
      infoIconAriaLabel
    }
  ) : children;
  return /* @__PURE__ */ jsx18(
    RACColumn,
    {
      ...props,
      className: [
        props.className,
        allowsSorting ? "table-col-sortable" : "",
        alignment === "center" ? "table-align-center" : "",
        alignment === "right" ? "table-align-right" : "table-align-left"
      ].filter(Boolean).join(" "),
      children: allowsResizing && typeof headerContent !== "function" ? /* @__PURE__ */ jsxs16(Fragment5, { children: [
        headerContent,
        /* @__PURE__ */ jsx18(ColumnResizer, {})
      ] }) : allowsResizing && typeof headerContent === "function" ? ((rp) => /* @__PURE__ */ jsxs16(Fragment5, { children: [
        headerContent(rp),
        /* @__PURE__ */ jsx18(ColumnResizer, {})
      ] })) : headerContent
    }
  );
}
function TitanTableBody(props) {
  return /* @__PURE__ */ jsx18(RACTableBody, { ...props });
}
function TitanRow({ columns, children, ...props }) {
  const { selectionBehavior, allowsDragging } = useTableOptions();
  return /* @__PURE__ */ jsxs16(
    RACRow,
    {
      ...props,
      className: [
        props.className,
        props.onAction || props.href ? "table-row-actionable" : ""
      ].filter(Boolean).join(" "),
      children: [
        allowsDragging && /* @__PURE__ */ jsx18(RACCell, { className: "table-cell-drag", children: /* @__PURE__ */ jsx18(Button10, { slot: "drag", className: "icon-ghost", "aria-label": "Drag", children: renderIconNode("grip-vertical") }) }),
        selectionBehavior === "toggle" && /* @__PURE__ */ jsx18(RACCell, { className: "table-cell-checkbox", children: /* @__PURE__ */ jsx18(Checkbox2, { slot: "selection", "aria-label": "Select row", className: "checkbox-root", children: /* @__PURE__ */ jsx18("span", { className: "checkbox-box", "aria-hidden": true, children: renderIconNode("check", { className: "checkbox-mark" }) }) }) }),
        columns != null ? /* @__PURE__ */ jsx18(Collection4, { items: columns, children }) : children
      ]
    }
  );
}
function TitanCell(props) {
  const { alignment = "left" } = props;
  return /* @__PURE__ */ jsx18(
    RACCell,
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
  return /* @__PURE__ */ jsx18(
    ResizableTableContainer,
    {
      ...props,
      className: ["layout-table-wrap", "layout-table-aria", "titan-resizable-table-container", className].filter(Boolean).join(" "),
      children
    }
  );
}
function TitanTableLoadMoreItem(props) {
  return /* @__PURE__ */ jsx18(RACTableLoadMoreItem, { ...props });
}

// src/TitanTableCells.tsx
import { Button as Button11, Menu as Menu3, MenuItem as MenuItem3, MenuTrigger as MenuTrigger3, Popover as Popover4 } from "react-aria-components";
import { jsx as jsx19, jsxs as jsxs17 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs17("span", { className: `table-cell-date ${className}`.trim(), children: [
    renderIconNode("calendar", { className: "table-cell-date-icon" }),
    /* @__PURE__ */ jsx19("span", { children: str })
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
  return /* @__PURE__ */ jsx19(
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
  return /* @__PURE__ */ jsx19("div", { className: `table-cell-actions-wrap ${className}`.trim(), children: /* @__PURE__ */ jsxs17(MenuTrigger3, { children: [
    /* @__PURE__ */ jsx19(Button11, { className: "icon-ghost table-cell-actions-trigger", "aria-label": ariaLabel, children: renderIconNode("more-vertical") }),
    /* @__PURE__ */ jsx19(
      Popover4,
      {
        className: "menu-popover table-row-menu-popover",
        placement: "bottom end",
        offset: 4,
        shouldFlip: true,
        children: /* @__PURE__ */ jsxs17(
          Menu3,
          {
            className: "menu-list",
            onAction: (key) => {
              if (key === "edit") onEdit?.();
              else if (key === "delete") onDelete?.();
              else extraItems.find((i) => i.id === key)?.onAction();
            },
            children: [
              extraItems.map((item) => /* @__PURE__ */ jsx19(MenuItem3, { id: item.id, className: "menu-item", textValue: item.label, children: /* @__PURE__ */ jsx19("span", { className: "menu-item-start", children: /* @__PURE__ */ jsx19("span", { className: "menu-item-label", children: item.label }) }) }, item.id)),
              extraItems.length > 0 && (hasEdit || hasDelete) && /* @__PURE__ */ jsx19("div", { role: "separator", className: "menu-separator" }),
              hasEdit && /* @__PURE__ */ jsx19(MenuItem3, { id: "edit", className: "menu-item", textValue: "Edit", children: /* @__PURE__ */ jsxs17("span", { className: "menu-item-start", children: [
                /* @__PURE__ */ jsx19("span", { className: "menu-item-icon", "aria-hidden": true, children: renderIconNode("edit") }),
                /* @__PURE__ */ jsx19("span", { className: "menu-item-label", children: "Edit" })
              ] }) }),
              hasDelete && /* @__PURE__ */ jsx19(MenuItem3, { id: "delete", className: "menu-item menu-item-destructive", textValue: "Delete", children: /* @__PURE__ */ jsxs17("span", { className: "menu-item-start", children: [
                /* @__PURE__ */ jsx19("span", { className: "menu-item-icon", "aria-hidden": true, children: renderIconNode("delete") }),
                /* @__PURE__ */ jsx19("span", { className: "menu-item-label", children: "Delete" })
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
  return /* @__PURE__ */ jsxs17("span", { className: `table-status-dot-wrap ${className}`.trim(), children: [
    /* @__PURE__ */ jsx19(
      "span",
      {
        className: "table-status-dot",
        style: { background: config.colorVar },
        "aria-hidden": true
      }
    ),
    /* @__PURE__ */ jsx19("span", { children: text })
  ] });
}

// src/TitanTableExamples.tsx
import { useState as useState2, useMemo } from "react";
import { useListData, useDragAndDrop, useAsyncList } from "react-aria-components";

// src/TitanLoader.tsx
import { jsx as jsx20, jsxs as jsxs18 } from "react/jsx-runtime";
var LOADER_CDN_BASE = "https://cdn.jsdelivr.net/gh/angelcreative/titan-foundations@main/public/assets/logos";
function TitanLoader({
  size = 120,
  label = "Loading\u2026",
  className = "",
  style,
  loaderBasePath = LOADER_CDN_BASE
}) {
  return /* @__PURE__ */ jsxs18(
    "div",
    {
      className: `titan-loader ${className}`.trim(),
      role: "status",
      "aria-label": label,
      style,
      children: [
        /* @__PURE__ */ jsx20(
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
        /* @__PURE__ */ jsx20("span", { className: "titan-loader-sr-only", children: label })
      ]
    }
  );
}

// src/TitanAvatar.tsx
import { jsx as jsx21 } from "react/jsx-runtime";
function TitanAvatar({
  account,
  icon,
  "aria-label": ariaLabel
}) {
  if (!account) {
    return /* @__PURE__ */ jsx21("div", { role: "img", className: "titan-avatar", "aria-label": ariaLabel, children: icon ?? renderIconNode("user") });
  }
  const firstLetter = account.charAt(0).toUpperCase();
  return /* @__PURE__ */ jsx21("div", { role: "img", className: "titan-avatar body-m-400", "aria-label": ariaLabel, children: firstLetter });
}

// src/TitanTableExamples.tsx
import { jsx as jsx22, jsxs as jsxs19 } from "react/jsx-runtime";
function TitanTableExampleBasic() {
  return /* @__PURE__ */ jsxs19(TitanTable, { "aria-label": "Files", children: [
    /* @__PURE__ */ jsxs19(TitanTableHeader, { children: [
      /* @__PURE__ */ jsx22(TitanColumn, { isRowHeader: true, children: "Name" }),
      /* @__PURE__ */ jsx22(TitanColumn, { children: "Type" }),
      /* @__PURE__ */ jsx22(TitanColumn, { children: "Date Modified" })
    ] }),
    /* @__PURE__ */ jsxs19(TitanTableBody, { children: [
      /* @__PURE__ */ jsxs19(TitanRow, { id: "row-1", children: [
        /* @__PURE__ */ jsx22(TitanCell, { children: "Games" }),
        /* @__PURE__ */ jsx22(TitanCell, { children: "File folder" }),
        /* @__PURE__ */ jsx22(TitanCell, { children: "6/7/2020" })
      ] }),
      /* @__PURE__ */ jsxs19(TitanRow, { id: "row-2", children: [
        /* @__PURE__ */ jsx22(TitanCell, { children: "Program Files" }),
        /* @__PURE__ */ jsx22(TitanCell, { children: "File folder" }),
        /* @__PURE__ */ jsx22(TitanCell, { children: "4/7/2021" })
      ] }),
      /* @__PURE__ */ jsxs19(TitanRow, { id: "row-3", children: [
        /* @__PURE__ */ jsx22(TitanCell, { children: "bootmgr" }),
        /* @__PURE__ */ jsx22(TitanCell, { children: "System file" }),
        /* @__PURE__ */ jsx22(TitanCell, { children: "11/20/2010" })
      ] }),
      /* @__PURE__ */ jsxs19(TitanRow, { id: "row-4", children: [
        /* @__PURE__ */ jsx22(TitanCell, { children: "log.txt" }),
        /* @__PURE__ */ jsx22(TitanCell, { children: "Text Document" }),
        /* @__PURE__ */ jsx22(TitanCell, { children: "1/18/2016" })
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
  const [showColumns, setShowColumns] = useState2(["name", "type", "date"]);
  const [rows, setRows] = useState2(initialDynamicRows);
  const visibleColumns = dynamicColumns.filter((c) => showColumns.includes(c.id));
  const addRow = () => {
    const date = (/* @__PURE__ */ new Date()).toLocaleDateString();
    setRows((prev) => [...prev, { id: prev.length + 1, name: "file.txt", type: "Text Document", date }]);
  };
  return /* @__PURE__ */ jsxs19("div", { style: { display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start", width: "100%" }, children: [
    /* @__PURE__ */ jsxs19("div", { style: { display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }, children: [
      /* @__PURE__ */ jsx22("span", { style: { fontSize: 14, fontWeight: 600 }, children: "Show columns:" }),
      dynamicColumns.map((c) => /* @__PURE__ */ jsx22(
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
      /* @__PURE__ */ jsx22(TitanButton, { onPress: addRow, children: "Add row" })
    ] }),
    /* @__PURE__ */ jsxs19(TitanTable, { "aria-label": "Files", style: { width: "100%" }, children: [
      /* @__PURE__ */ jsx22(TitanTableHeader, { columns: visibleColumns, children: (column) => /* @__PURE__ */ jsx22(TitanColumn, { isRowHeader: column.isRowHeader, children: column.name }, column.id) }),
      /* @__PURE__ */ jsx22(TitanTableBody, { items: rows, dependencies: [visibleColumns], children: (item) => /* @__PURE__ */ jsx22(TitanRow, { id: String(item.id), columns: visibleColumns, children: (column) => /* @__PURE__ */ jsx22(TitanCell, { children: item[column.id] }) }, item.id) })
    ] })
  ] });
}
function TitanTableExampleAsync() {
  const list = useAsyncList({
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
  return /* @__PURE__ */ jsx22("div", { style: { minHeight: 200, maxHeight: 360, overflow: "auto", width: "100%" }, children: /* @__PURE__ */ jsxs19(TitanTable, { "aria-label": "Star Wars characters", stickyHeader: true, style: { width: "100%" }, children: [
    /* @__PURE__ */ jsxs19(TitanTableHeader, { children: [
      /* @__PURE__ */ jsx22(TitanColumn, { id: "name", isRowHeader: true, children: "Name" }),
      /* @__PURE__ */ jsx22(TitanColumn, { id: "height", children: "Height" }),
      /* @__PURE__ */ jsx22(TitanColumn, { id: "mass", children: "Mass" }),
      /* @__PURE__ */ jsx22(TitanColumn, { id: "birth", children: "Birth Year" })
    ] }),
    /* @__PURE__ */ jsxs19(
      TitanTableBody,
      {
        items: list.items,
        renderEmptyState: () => list.isLoading ? /* @__PURE__ */ jsx22("div", { style: { display: "flex", justifyContent: "center", padding: 24 }, children: /* @__PURE__ */ jsx22(TitanLoader, { "aria-label": "Loading..." }) }) : list.error ? /* @__PURE__ */ jsx22("div", { style: { padding: 24, textAlign: "center", color: "var(--color-red-600)" }, children: list.error.message }) : /* @__PURE__ */ jsx22("div", { style: { padding: 24, textAlign: "center", fontStyle: "italic" }, children: "No data." }),
        children: [
          ((item) => /* @__PURE__ */ jsxs19(TitanRow, { id: item.id, children: [
            /* @__PURE__ */ jsx22(TitanCell, { children: item.name }),
            /* @__PURE__ */ jsx22(TitanCell, { children: item.height }),
            /* @__PURE__ */ jsx22(TitanCell, { children: item.mass }),
            /* @__PURE__ */ jsx22(TitanCell, { children: item.birth })
          ] })),
          /* @__PURE__ */ jsx22(TitanTableLoadMoreItem, { onLoadMore: list.loadMore, isLoading: isLoadingMore })
        ]
      }
    )
  ] }) });
}
function TitanTableExampleLinks() {
  return /* @__PURE__ */ jsxs19(TitanTable, { "aria-label": "Links", children: [
    /* @__PURE__ */ jsxs19(TitanTableHeader, { children: [
      /* @__PURE__ */ jsx22(TitanColumn, { isRowHeader: true, children: "Name" }),
      /* @__PURE__ */ jsx22(TitanColumn, { children: "URL" }),
      /* @__PURE__ */ jsx22(TitanColumn, { children: "Date added" })
    ] }),
    /* @__PURE__ */ jsxs19(TitanTableBody, { children: [
      /* @__PURE__ */ jsxs19(TitanRow, { id: "row-1", href: "https://adobe.com/", target: "_blank", children: [
        /* @__PURE__ */ jsx22(TitanCell, { children: "Adobe" }),
        /* @__PURE__ */ jsx22(TitanCell, { children: "https://adobe.com/" }),
        /* @__PURE__ */ jsx22(TitanCell, { children: "January 28, 2023" })
      ] }),
      /* @__PURE__ */ jsxs19(TitanRow, { id: "row-2", href: "https://google.com/", target: "_blank", children: [
        /* @__PURE__ */ jsx22(TitanCell, { children: "Google" }),
        /* @__PURE__ */ jsx22(TitanCell, { children: "https://google.com/" }),
        /* @__PURE__ */ jsx22(TitanCell, { children: "April 5, 2023" })
      ] }),
      /* @__PURE__ */ jsxs19(TitanRow, { id: "row-3", href: "https://nytimes.com/", target: "_blank", children: [
        /* @__PURE__ */ jsx22(TitanCell, { children: "New York Times" }),
        /* @__PURE__ */ jsx22(TitanCell, { children: "https://nytimes.com/" }),
        /* @__PURE__ */ jsx22(TitanCell, { children: "July 12, 2023" })
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
  return /* @__PURE__ */ jsxs19(TitanTable, { "aria-label": "Files with clickable names", children: [
    /* @__PURE__ */ jsxs19(TitanTableHeader, { children: [
      /* @__PURE__ */ jsx22(TitanColumn, { isRowHeader: true, children: "Name" }),
      /* @__PURE__ */ jsx22(TitanColumn, { children: "Type" }),
      /* @__PURE__ */ jsx22(TitanColumn, { children: "Date Modified" })
    ] }),
    /* @__PURE__ */ jsx22(TitanTableBody, { items: clickableNameRows, children: (item) => /* @__PURE__ */ jsxs19(TitanRow, { id: item.id, children: [
      /* @__PURE__ */ jsx22(TitanCell, { children: /* @__PURE__ */ jsx22(
        "button",
        {
          type: "button",
          className: "table-cell-link",
          onClick: () => alert(`Open: ${item.name}`),
          children: item.name
        }
      ) }),
      /* @__PURE__ */ jsx22(TitanCell, { children: item.type }),
      /* @__PURE__ */ jsx22(TitanCell, { children: item.date })
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
  return /* @__PURE__ */ jsxs19(TitanTable, { "aria-label": "Rows with date, initials, status, actions", children: [
    /* @__PURE__ */ jsxs19(TitanTableHeader, { children: [
      /* @__PURE__ */ jsx22(TitanColumn, { isRowHeader: true, children: "Name" }),
      /* @__PURE__ */ jsx22(TitanColumn, { children: "Date" }),
      /* @__PURE__ */ jsx22(TitanColumn, { children: "Status" }),
      /* @__PURE__ */ jsx22(TitanColumn, { className: "table-col-actions", children: "Actions" })
    ] }),
    /* @__PURE__ */ jsx22(TitanTableBody, { items: cellTypesRows, children: (item) => /* @__PURE__ */ jsxs19(TitanRow, { id: item.id, children: [
      /* @__PURE__ */ jsx22(TitanCell, { children: /* @__PURE__ */ jsxs19("span", { className: "table-cell-avatar-group", children: [
        /* @__PURE__ */ jsx22(TitanAvatar, { account: item.name, "aria-label": `${item.name}'s avatar` }),
        /* @__PURE__ */ jsx22("span", { children: item.name })
      ] }) }),
      /* @__PURE__ */ jsx22(TitanCell, { children: /* @__PURE__ */ jsx22(TitanTableCellDate, { value: item.date }) }),
      /* @__PURE__ */ jsx22(TitanCell, { children: /* @__PURE__ */ jsx22(TitanTableCellStatus, { status: item.status }) }),
      /* @__PURE__ */ jsx22(TitanCell, { className: "table-cell-actions", children: /* @__PURE__ */ jsx22(
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
  return /* @__PURE__ */ jsxs19(TitanTable, { "aria-label": "Search results", children: [
    /* @__PURE__ */ jsxs19(TitanTableHeader, { children: [
      /* @__PURE__ */ jsx22(TitanColumn, { isRowHeader: true, children: "Name" }),
      /* @__PURE__ */ jsx22(TitanColumn, { children: "Type" }),
      /* @__PURE__ */ jsx22(TitanColumn, { children: "Date Modified" })
    ] }),
    /* @__PURE__ */ jsx22(TitanTableBody, { items: [], renderEmptyState: () => "No results found.", children: () => null })
  ] });
}
var selectionRows = [
  { id: "charizard", name: "Charizard", type: "Fire, Flying", level: 67 },
  { id: "blastoise", name: "Blastoise", type: "Water", level: 56 },
  { id: "venusaur", name: "Venusaur", type: "Grass, Poison", level: 83 },
  { id: "pikachu", name: "Pikachu", type: "Electric", level: 100 }
];
function TitanTableExampleSelection() {
  const [selected, setSelected] = useState2(/* @__PURE__ */ new Set());
  return /* @__PURE__ */ jsxs19("div", { style: { display: "flex", flexDirection: "column", gap: 8, width: "100%" }, children: [
    /* @__PURE__ */ jsxs19(
      TitanTable,
      {
        "aria-label": "Favorite pokemon",
        selectionMode: "multiple",
        selectedKeys: selected,
        onSelectionChange: setSelected,
        onRowAction: (key) => alert(`Clicked ${key}`),
        children: [
          /* @__PURE__ */ jsxs19(TitanTableHeader, { children: [
            /* @__PURE__ */ jsx22(TitanColumn, { isRowHeader: true, children: "Name" }),
            /* @__PURE__ */ jsx22(TitanColumn, { children: "Type" }),
            /* @__PURE__ */ jsx22(TitanColumn, { children: "Level" })
          ] }),
          /* @__PURE__ */ jsx22(TitanTableBody, { items: selectionRows, children: (item) => /* @__PURE__ */ jsxs19(TitanRow, { id: item.id, children: [
            /* @__PURE__ */ jsx22(TitanCell, { children: item.name }),
            /* @__PURE__ */ jsx22(TitanCell, { children: item.type }),
            /* @__PURE__ */ jsx22(TitanCell, { children: item.level })
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxs19("p", { style: { fontSize: 14, margin: 0 }, children: [
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
  const [sortDescriptor, setSortDescriptor] = useState2({
    column: "name",
    direction: "ascending"
  });
  const sortedRows = useMemo(() => {
    if (!sortDescriptor.column) return sortableRows;
    return [...sortableRows].sort((a, b) => {
      const key = sortDescriptor.column;
      const aVal = a[key];
      const bVal = b[key];
      const cmp = aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor]);
  return /* @__PURE__ */ jsxs19(
    TitanTable,
    {
      "aria-label": "Favorite pokemon",
      sortDescriptor,
      onSortChange: setSortDescriptor,
      children: [
        /* @__PURE__ */ jsxs19(TitanTableHeader, { children: [
          /* @__PURE__ */ jsx22(TitanColumn, { id: "name", isRowHeader: true, allowsSorting: true, children: "Name" }),
          /* @__PURE__ */ jsx22(TitanColumn, { id: "type", allowsSorting: true, children: "Type" }),
          /* @__PURE__ */ jsx22(TitanColumn, { id: "level", allowsSorting: true, children: "Level" })
        ] }),
        /* @__PURE__ */ jsx22(TitanTableBody, { items: sortedRows, children: (item) => /* @__PURE__ */ jsxs19(TitanRow, { id: String(item.id), children: [
          /* @__PURE__ */ jsx22(TitanCell, { children: item.name }),
          /* @__PURE__ */ jsx22(TitanCell, { children: item.type }),
          /* @__PURE__ */ jsx22(TitanCell, { children: item.level })
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
  const [sortDescriptor, setSortDescriptor] = useState2({ column: "name", direction: "ascending" });
  const sortedRows = useMemo(() => {
    if (!sortDescriptor.column) return headerVariantRows;
    return [...headerVariantRows].sort((a, b) => {
      const key = sortDescriptor.column;
      const aVal = a[key];
      const bVal = b[key];
      const cmp = String(aVal).localeCompare(String(bVal), void 0, { numeric: true });
      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor]);
  return /* @__PURE__ */ jsxs19(
    TitanTable,
    {
      "aria-label": "Table with header variants",
      sortDescriptor,
      onSortChange: setSortDescriptor,
      children: [
        /* @__PURE__ */ jsxs19(TitanTableHeader, { children: [
          /* @__PURE__ */ jsx22(TitanColumn, { id: "name", isRowHeader: true, allowsSorting: true, sortIconPosition: "left", children: "Name" }),
          /* @__PURE__ */ jsx22(TitanColumn, { id: "metric", showInfoIcon: true, infoIconAriaLabel: "Metric definition", children: "Metric" }),
          /* @__PURE__ */ jsx22(TitanColumn, { id: "note", allowsSorting: true, sortIconPosition: "left", showInfoIcon: true, infoIconAriaLabel: "Note tooltip", children: "Note" }),
          /* @__PURE__ */ jsx22(TitanColumn, { id: "plain", children: "Plain" })
        ] }),
        /* @__PURE__ */ jsx22(TitanTableBody, { items: sortedRows, children: (item) => /* @__PURE__ */ jsxs19(TitanRow, { id: String(item.id), children: [
          /* @__PURE__ */ jsx22(TitanCell, { children: item.name }),
          /* @__PURE__ */ jsx22(TitanCell, { children: item.metric }),
          /* @__PURE__ */ jsx22(TitanCell, { children: item.note }),
          /* @__PURE__ */ jsx22(TitanCell, { children: item.plain })
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
  return /* @__PURE__ */ jsx22(TitanResizableTableContainer, { style: { maxHeight: 320 }, children: /* @__PURE__ */ jsxs19(TitanTable, { noWrapper: true, "aria-label": "Table with resizable columns", style: { width: "100%" }, children: [
    /* @__PURE__ */ jsxs19(TitanTableHeader, { children: [
      /* @__PURE__ */ jsx22(TitanColumn, { id: "file", isRowHeader: true, allowsResizing: true, defaultWidth: 200, minWidth: 120, maxWidth: 500, children: "File Name" }),
      /* @__PURE__ */ jsx22(TitanColumn, { id: "size", allowsResizing: true, defaultWidth: 80, children: "Size" }),
      /* @__PURE__ */ jsx22(TitanColumn, { id: "date", allowsResizing: true, defaultWidth: 140, minWidth: 100, children: "Date Modified" })
    ] }),
    /* @__PURE__ */ jsx22(TitanTableBody, { items: resizableRows, children: (item) => /* @__PURE__ */ jsxs19(TitanRow, { id: String(item.id), children: [
      /* @__PURE__ */ jsx22(TitanCell, { children: item.name }),
      /* @__PURE__ */ jsx22(TitanCell, { children: item.size }),
      /* @__PURE__ */ jsx22(TitanCell, { children: item.date })
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
  const list = useListData({
    initialItems: dragDropInitial,
    getKey: (item) => String(item.id)
  });
  const { dragAndDropHooks } = useDragAndDrop({
    getItems: (keys, items) => items.map((item) => ({ "text/plain": item.name })),
    onReorder: (e) => {
      if (e.target.dropPosition === "before") {
        list.moveBefore(e.target.key, e.keys);
      } else if (e.target.dropPosition === "after") {
        list.moveAfter(e.target.key, e.keys);
      }
    }
  });
  return /* @__PURE__ */ jsxs19(TitanTable, { "aria-label": "Files", selectionMode: "multiple", dragAndDropHooks, children: [
    /* @__PURE__ */ jsxs19(TitanTableHeader, { children: [
      /* @__PURE__ */ jsx22(TitanColumn, { isRowHeader: true, children: "Name" }),
      /* @__PURE__ */ jsx22(TitanColumn, { children: "Type" }),
      /* @__PURE__ */ jsx22(TitanColumn, { children: "Date Modified" })
    ] }),
    /* @__PURE__ */ jsx22(TitanTableBody, { items: list.items, children: (item) => /* @__PURE__ */ jsxs19(TitanRow, { id: String(item.id), children: [
      /* @__PURE__ */ jsx22(TitanCell, { children: item.name }),
      /* @__PURE__ */ jsx22(TitanCell, { children: item.type }),
      /* @__PURE__ */ jsx22(TitanCell, { children: item.date })
    ] }) })
  ] });
}

// src/TitanTwoUpOneDownLayout.tsx
import { Fragment as Fragment6, jsx as jsx23, jsxs as jsxs20 } from "react/jsx-runtime";
function TitanTwoUpOneDownLayout({
  theme = "insights",
  userInitial = "A",
  breadcrumbItems,
  breadcrumbCurrentLabel,
  leftTop,
  rightTop,
  bottom
}) {
  return /* @__PURE__ */ jsxs20(Fragment6, { children: [
    /* @__PURE__ */ jsx23(TitanNavbar, { theme, userInitial }),
    /* @__PURE__ */ jsxs20("main", { className: "page page--flush-breadcrumb", children: [
      /* @__PURE__ */ jsx23("section", { className: "page-breadcrumb-host", children: /* @__PURE__ */ jsx23(TitanBreadcrumb, { items: breadcrumbItems, currentLabel: breadcrumbCurrentLabel }) }),
      /* @__PURE__ */ jsxs20(TitanCardGrid, { children: [
        /* @__PURE__ */ jsx23(TitanCard, { span: 8, children: leftTop }),
        /* @__PURE__ */ jsx23(TitanCard, { span: 8, children: rightTop }),
        /* @__PURE__ */ jsx23(TitanCard, { span: 16, children: bottom })
      ] })
    ] })
  ] });
}

// src/TitanSidebar.tsx
import {
  createContext,
  useContext,
  useState as useState3,
  useCallback as useCallback2
} from "react";
import { Button as Button12 } from "react-aria-components";
import { jsx as jsx24, jsxs as jsxs21 } from "react/jsx-runtime";
var SidebarContext = createContext({
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
  const [uncontrolledActiveId, setUncontrolledActiveId] = useState3(
    defaultActiveId ?? null
  );
  const isControlled = controlledActiveId !== void 0;
  const activeId = isControlled ? controlledActiveId : uncontrolledActiveId;
  const setActiveId = useCallback2(
    (id) => {
      if (!isControlled) setUncontrolledActiveId(id);
      onActiveChange?.(id);
    },
    [isControlled, onActiveChange]
  );
  return /* @__PURE__ */ jsx24(SidebarContext.Provider, { value: { collapsed, activeId, setActiveId }, children: /* @__PURE__ */ jsxs21(
    "aside",
    {
      className: "titan-sidebar",
      ...collapsed ? { "data-collapsed": "" } : {},
      children: [
        /* @__PURE__ */ jsx24("div", { className: "titan-sidebar-body", children }),
        onToggle && /* @__PURE__ */ jsx24(
          Button12,
          {
            className: "titan-sidebar-toggle",
            onPress: onToggle,
            "aria-label": collapsed ? "Expand sidebar" : "Collapse sidebar",
            children: collapsed ? renderIconNode("panel-left-open") : renderIconNode("panel-left-close")
          }
        )
      ]
    }
  ) });
}
function TitanSidebarHeader({ children }) {
  return /* @__PURE__ */ jsx24("div", { className: "titan-sidebar-header", children });
}
function TitanSidebarItem({
  id,
  icon,
  nested = false,
  onPress,
  children
}) {
  const { collapsed, activeId, setActiveId } = useContext(SidebarContext);
  const isActive = activeId === id;
  return /* @__PURE__ */ jsxs21(
    Button12,
    {
      className: "titan-sidebar-item",
      "data-nested": nested ? "true" : void 0,
      "data-active": isActive ? "true" : void 0,
      "aria-current": isActive ? "page" : void 0,
      "aria-label": collapsed && typeof children === "string" ? children : void 0,
      onPress: () => {
        setActiveId(id);
        onPress?.();
      },
      children: [
        icon ? renderIconNode(icon) : null,
        /* @__PURE__ */ jsx24("span", { className: "titan-sidebar-item-label", children })
      ]
    }
  );
}
function TitanSidebarSection({ children }) {
  return /* @__PURE__ */ jsx24("div", { className: "titan-sidebar-section", children });
}
function TitanSidebarSearch({
  placeholder = "Search\u2026",
  value,
  onChange,
  "aria-label": ariaLabel = "Search"
}) {
  const { collapsed } = useContext(SidebarContext);
  if (collapsed) return null;
  return /* @__PURE__ */ jsx24("div", { className: "titan-sidebar-search", children: /* @__PURE__ */ jsx24(
    TitanInputField,
    {
      "aria-label": ariaLabel,
      placeholder,
      ...value !== void 0 ? { value } : {},
      leadingIcon: renderIconNode("search"),
      onChange,
      className: "titan-sidebar-search-field field-root"
    }
  ) });
}
function TitanSidebarTree({ children }) {
  return /* @__PURE__ */ jsx24("div", { className: "titan-sidebar-tree", children });
}
function TitanSidebarTreeItem({
  id,
  icon,
  onPress,
  children
}) {
  const { collapsed, activeId, setActiveId } = useContext(SidebarContext);
  const isActive = activeId === id;
  return /* @__PURE__ */ jsxs21(
    Button12,
    {
      className: "titan-sidebar-item titan-sidebar-tree-item",
      "data-active": isActive ? "true" : void 0,
      "aria-current": isActive ? "page" : void 0,
      "aria-label": collapsed && typeof children === "string" ? children : void 0,
      onPress: () => {
        setActiveId(id);
        onPress?.();
      },
      children: [
        icon ? renderIconNode(icon) : renderIconNode("file-text"),
        /* @__PURE__ */ jsx24("span", { className: "titan-sidebar-item-label", children })
      ]
    }
  );
}
function TitanSidebarFolder({
  id,
  label,
  defaultExpanded = false,
  expanded: controlledExpanded,
  onExpandedChange,
  children
}) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState3(defaultExpanded);
  const isControlled = controlledExpanded !== void 0;
  const open = isControlled ? controlledExpanded : uncontrolledOpen;
  const setOpen = (next) => {
    if (!isControlled) setUncontrolledOpen(next);
    onExpandedChange?.(next);
  };
  return /* @__PURE__ */ jsxs21(
    "div",
    {
      className: "titan-sidebar-folder",
      "data-folder-id": id,
      ...open ? { "data-open": "true" } : {},
      children: [
        /* @__PURE__ */ jsxs21(
          Button12,
          {
            className: "titan-sidebar-folder-row",
            "aria-expanded": open,
            "aria-controls": `${id}-folder-children`,
            onPress: () => setOpen(!open),
            children: [
              /* @__PURE__ */ jsx24("span", { className: "titan-sidebar-folder-toggle", "aria-hidden": true, children: /* @__PURE__ */ jsx24("span", { className: "titan-sidebar-folder-chevron", "aria-hidden": true, children: renderIconNode("chevron-right") }) }),
              /* @__PURE__ */ jsx24("span", { className: "titan-sidebar-folder-icon", "aria-hidden": true, children: renderIconNode(open ? "folder-open" : "folder") }),
              /* @__PURE__ */ jsx24("span", { className: "titan-sidebar-folder-label", children: label })
            ]
          }
        ),
        children ? /* @__PURE__ */ jsx24(
          "div",
          {
            id: `${id}-folder-children`,
            className: "titan-sidebar-folder-content",
            role: "group",
            "aria-hidden": !open,
            "aria-label": typeof label === "string" ? label : "Folder contents",
            ...open ? { "data-open": "true" } : {},
            children: /* @__PURE__ */ jsx24("div", { className: "titan-sidebar-folder-children", children })
          }
        ) : null
      ]
    }
  );
}

// src/TitanSlider.tsx
import {
  Label as Label4,
  Slider,
  SliderOutput,
  SliderThumb,
  SliderTrack
} from "react-aria-components";
import { Fragment as Fragment7, jsx as jsx25, jsxs as jsxs22 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs22(
    Slider,
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
        (label || showOutput) && /* @__PURE__ */ jsxs22("div", { className: "slider-header", children: [
          label && /* @__PURE__ */ jsx25(Label4, { className: "slider-label", children: label }),
          showOutput && /* @__PURE__ */ jsx25(SliderOutput, { className: "slider-output" })
        ] }),
        /* @__PURE__ */ jsx25(SliderTrack, { className: "slider-track", children: ({ state }) => /* @__PURE__ */ jsxs22(Fragment7, { children: [
          /* @__PURE__ */ jsx25(
            "div",
            {
              className: "slider-track-fill",
              style: { width: `${state.getThumbPercent(0) * 100}%` }
            }
          ),
          /* @__PURE__ */ jsx25(SliderThumb, { className: "slider-thumb", index: 0 })
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
  return /* @__PURE__ */ jsxs22(
    Slider,
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
        (label || showOutput) && /* @__PURE__ */ jsxs22("div", { className: "slider-header", children: [
          label && /* @__PURE__ */ jsx25(Label4, { className: "slider-label", children: label }),
          showOutput && /* @__PURE__ */ jsx25(SliderOutput, { className: "slider-output" })
        ] }),
        /* @__PURE__ */ jsx25(SliderTrack, { className: "slider-track", children: ({ state }) => {
          const left = state.getThumbPercent(0) * 100;
          const right = state.getThumbPercent(1) * 100;
          return /* @__PURE__ */ jsxs22(Fragment7, { children: [
            /* @__PURE__ */ jsx25(
              "div",
              {
                className: "slider-track-fill",
                style: { left: `${left}%`, width: `${right - left}%` }
              }
            ),
            /* @__PURE__ */ jsx25(SliderThumb, { className: "slider-thumb", index: 0 }),
            /* @__PURE__ */ jsx25(SliderThumb, { className: "slider-thumb", index: 1 })
          ] });
        } })
      ]
    }
  );
}

// src/TitanProgressBar.tsx
import { Label as Label5, ProgressBar } from "react-aria-components";
import { Fragment as Fragment8, jsx as jsx26, jsxs as jsxs23 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx26(
    ProgressBar,
    {
      className: `progress-root ${className}`.trim(),
      value,
      minValue,
      maxValue,
      formatOptions,
      children: ({ valueText }) => /* @__PURE__ */ jsxs23(Fragment8, { children: [
        (label || showValue) && /* @__PURE__ */ jsxs23("div", { className: "progress-header", children: [
          label && /* @__PURE__ */ jsx26(Label5, { className: "progress-label", children: label }),
          showValue && /* @__PURE__ */ jsx26("span", { className: "progress-value", children: valueText })
        ] }),
        /* @__PURE__ */ jsx26("div", { className: "progress-track", children: /* @__PURE__ */ jsx26("div", { className: "progress-fill", style: { width: `${percent}%` } }) })
      ] })
    }
  );
}

// src/TitanCalendar.tsx
import { useCallback as useCallback3, useEffect, useMemo as useMemo2, useRef as useRef3, useState as useState4 } from "react";
import {
  Button as Button13,
  Calendar as Calendar2,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell
} from "react-aria-components";
import {
  today,
  getLocalTimeZone
} from "@internationalized/date";
import { jsx as jsx27, jsxs as jsxs24 } from "react/jsx-runtime";
function CalendarDropdown({
  options,
  value,
  onChange,
  className = ""
}) {
  const [open, setOpen] = useState4(false);
  const [flipUp, setFlipUp] = useState4(false);
  const ref = useRef3(null);
  const listRef = useRef3(null);
  const selected = options.find((o) => o.value === value);
  const close = useCallback3(() => setOpen(false), []);
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) close();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open, close]);
  useEffect(() => {
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
  return /* @__PURE__ */ jsxs24("div", { className: `cal-dropdown ${className}`.trim(), ref, children: [
    /* @__PURE__ */ jsxs24(
      "button",
      {
        type: "button",
        className: "cal-dropdown-trigger",
        onClick: () => setOpen(!open),
        "aria-haspopup": "listbox",
        "aria-expanded": open,
        children: [
          /* @__PURE__ */ jsx27("span", { children: selected?.label ?? "" }),
          renderIconNode("chevron-down")
        ]
      }
    ),
    open && /* @__PURE__ */ jsx27(
      "ul",
      {
        className: `cal-dropdown-menu${flipUp ? " cal-dropdown-menu-flip" : ""}`,
        role: "listbox",
        ref: listRef,
        children: options.map((o) => /* @__PURE__ */ jsx27(
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
  const tz = getLocalTimeZone();
  const initial = value ?? defaultValue ?? today(tz);
  const [focusedDate, setFocusedDate] = useState4(initial);
  const [hour, setHour] = useState4(defaultHour);
  const [minute, setMinute] = useState4(defaultMinute);
  const months = useMemo2(() => {
    const fmt = new Intl.DateTimeFormat(void 0, { month: "long" });
    return Array.from({ length: 12 }, (_, i) => ({
      value: i + 1,
      label: fmt.format(new Date(2024, i, 1))
    }));
  }, []);
  const years = useMemo2(() => {
    const y = today(tz).year;
    return Array.from({ length: 201 }, (_, i) => y - 100 + i);
  }, [tz]);
  const yearOptions = useMemo2(
    () => years.map((y) => ({ value: y, label: String(y) })),
    [years]
  );
  return /* @__PURE__ */ jsxs24("div", { className: `calendar-wrapper ${className}`.trim(), children: [
    /* @__PURE__ */ jsxs24(
      Calendar2,
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
          /* @__PURE__ */ jsxs24("header", { className: "calendar-header", children: [
            /* @__PURE__ */ jsx27(Button13, { slot: "previous", className: "calendar-nav-btn", children: renderIconNode("chevron-left") }),
            /* @__PURE__ */ jsxs24("div", { className: "calendar-selects", children: [
              /* @__PURE__ */ jsx27(
                CalendarDropdown,
                {
                  options: months,
                  value: focusedDate.month,
                  onChange: (m) => setFocusedDate(focusedDate.set({ month: m }))
                }
              ),
              /* @__PURE__ */ jsx27(
                CalendarDropdown,
                {
                  className: "cal-dropdown-year",
                  options: yearOptions,
                  value: focusedDate.year,
                  onChange: (y) => setFocusedDate(focusedDate.set({ year: y }))
                }
              )
            ] }),
            /* @__PURE__ */ jsx27(Button13, { slot: "next", className: "calendar-nav-btn", children: renderIconNode("chevron-right") })
          ] }),
          /* @__PURE__ */ jsxs24(CalendarGrid, { className: "calendar-grid", children: [
            /* @__PURE__ */ jsx27(CalendarGridHeader, { children: (day) => /* @__PURE__ */ jsx27(CalendarHeaderCell, { className: "calendar-header-cell" }) }),
            /* @__PURE__ */ jsx27(CalendarGridBody, { children: (date) => /* @__PURE__ */ jsx27(CalendarCell, { date, className: "calendar-cell" }) })
          ] })
        ]
      }
    ),
    showTime && /* @__PURE__ */ jsxs24("div", { className: "calendar-time", children: [
      /* @__PURE__ */ jsxs24("div", { className: "calendar-time-field", children: [
        /* @__PURE__ */ jsx27("label", { className: "calendar-time-label", children: "Hour" }),
        /* @__PURE__ */ jsx27(
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
      /* @__PURE__ */ jsx27("span", { className: "calendar-time-separator", children: ":" }),
      /* @__PURE__ */ jsxs24("div", { className: "calendar-time-field", children: [
        /* @__PURE__ */ jsx27("label", { className: "calendar-time-label", children: "Minute" }),
        /* @__PURE__ */ jsx27(
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
import { Link } from "react-aria-components";
import { jsxs as jsxs25 } from "react/jsx-runtime";
function TitanLink({
  children,
  size = "m",
  withIcon = false,
  className = "",
  ...props
}) {
  const mergedClassName = [`titan-link`, `text-link-${size}`, className].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxs25(Link, { className: mergedClassName, ...props, children: [
    children,
    withIcon && renderIconNode("redirect")
  ] });
}

// src/TitanPillGroup.tsx
import { TagGroup, TagList } from "react-aria-components";
import { jsx as jsx28, jsxs as jsxs26 } from "react/jsx-runtime";
function TitanPillGroup({
  children,
  label,
  onRemove,
  "aria-label": ariaLabel,
  className = ""
}) {
  return /* @__PURE__ */ jsxs26(
    TagGroup,
    {
      className: ["titan-pill-group", className].filter(Boolean).join(" "),
      "aria-label": ariaLabel ?? label,
      onRemove: onRemove ? (keys) => onRemove(keys) : void 0,
      children: [
        label && /* @__PURE__ */ jsx28("span", { className: "titan-pill-group-label", children: label }),
        children
      ]
    }
  );
}
function TitanPillList({
  children,
  className = ""
}) {
  return /* @__PURE__ */ jsx28(TagList, { className: ["titan-pill-list", className].filter(Boolean).join(" "), children });
}

// src/TitanButtonGroup.tsx
import {
  ToggleButton,
  ToggleButtonGroup
} from "react-aria-components";
import { jsx as jsx29 } from "react/jsx-runtime";
function TitanButtonGroup({
  children,
  orientation = "horizontal",
  className = "",
  ...props
}) {
  const mergedClassName = ["titan-button-group", `body-m-400`, className].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx29(
    ToggleButtonGroup,
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
  return /* @__PURE__ */ jsx29(ToggleButton, { className: mergedClassName, ...props, children });
}

// src/TitanDivider.tsx
import { jsx as jsx30 } from "react/jsx-runtime";
function TitanDivider({ className = "" }) {
  return /* @__PURE__ */ jsx30("hr", { className: ["titan-divider", className].filter(Boolean).join(" ") });
}

// src/TitanCollapsible.tsx
import { useState as useState5 } from "react";
import { jsx as jsx31, jsxs as jsxs27 } from "react/jsx-runtime";
function TitanCollapsible({
  children,
  title,
  isCollapsed: controlledCollapsed,
  onChange,
  "aria-label": ariaLabel
}) {
  const [internalCollapsed, setInternalCollapsed] = useState5(controlledCollapsed ?? false);
  const isControlled = controlledCollapsed !== void 0;
  const collapsed = isControlled ? controlledCollapsed : internalCollapsed;
  function handleToggle() {
    const next = !collapsed;
    if (!isControlled) setInternalCollapsed(next);
    onChange?.(next);
  }
  return /* @__PURE__ */ jsxs27("div", { className: "titan-collapsible", children: [
    /* @__PURE__ */ jsxs27(
      "button",
      {
        type: "button",
        className: "titan-collapsible-header",
        "aria-label": ariaLabel,
        "aria-expanded": !collapsed,
        onClick: handleToggle,
        children: [
          title != null && /* @__PURE__ */ jsx31("span", { className: "titan-collapsible-title", children: title }),
          /* @__PURE__ */ jsx31("span", { className: "titan-collapsible-chevron", "aria-hidden": "true", children: collapsed ? renderIconNode("chevron-down") : renderIconNode("chevron-up") })
        ]
      }
    ),
    !collapsed && /* @__PURE__ */ jsx31("div", { className: "titan-collapsible-content", children })
  ] });
}

// src/TitanClusterGraph.tsx
import { useEffect as useEffect3, useMemo as useMemo3, useRef as useRef5, useState as useState6 } from "react";

// src/cluster/constants.ts
var TITAN_CLUSTER_COLORS = [
  "#8e8de5",
  "#7faffa",
  "#92c9c2",
  "#f29e77",
  "#8cbddb",
  "#f3c880",
  "#f17bb7",
  "#d2779b",
  "#b878f8",
  "#ad97f9",
  "#7ed7de",
  "#90d0ab",
  "#9dea8d",
  "#d5f389",
  "#fae08a",
  "#f1867f",
  "#da797f",
  "#FB876A",
  "#cb998b",
  "#9c706f"
];
var TITAN_CLUSTER_GROUP_LABELS = [
  "Fashion Influence \u{1F457}",
  "University Fitness \u{1F30D}",
  "Fitness Entertainment \u{1F3CB}\uFE0F",
  "Mom Life \u{1F3B6}",
  "Wellness Coaching \u{1F4AA}",
  "Lifestyle Branding \u2728",
  "Canadian Family \u{1F1E8}\u{1F1E6}",
  "Sports Marketing \u{1F947}",
  "Tech Trends \u{1F4F1}",
  "Eco Living \u{1F33F}",
  "Urban Photography \u{1F4F8}",
  "Gourmet Food \u{1F354}",
  "Travel Diaries \u2708\uFE0F",
  "Crypto News \u{1FA99}",
  "Indie Gaming \u{1F3AE}",
  "Pet Lovers \u{1F436}",
  "DIY Crafts \u{1F9F6}",
  "Mental Health \u{1F9E0}",
  "Auto Enthusiasts \u{1F3CE}\uFE0F",
  "Book Club \u{1F4DA}"
];
var TITAN_CLUSTER_DEFAULT_GROUP_COUNT = 8;
var TITAN_CLUSTER_DEFAULT_NODE_COUNT = 450;
function getTitanClusterSegmentLabel(groupIndex, groupCount, segmentLabels) {
  const labels = segmentLabels && segmentLabels.length >= groupCount ? segmentLabels : TITAN_CLUSTER_GROUP_LABELS;
  return labels[groupIndex] ?? `Segment ${groupIndex + 1}`;
}

// src/cluster/TitanClusterGraphCanvas.tsx
import { useEffect as useEffect2, useLayoutEffect as useLayoutEffect2, useRef as useRef4 } from "react";
import * as d3 from "d3";
import { jsx as jsx32 } from "react/jsx-runtime";
function TitanClusterGraphCanvas({
  width,
  height,
  data,
  onNodeClick,
  showLabels,
  groupCount,
  segmentLabels
}) {
  const svgRef = useRef4(null);
  const onNodeClickRef = useRef4(onNodeClick);
  const showLabelsRef = useRef4(showLabels);
  useEffect2(() => {
    onNodeClickRef.current = onNodeClick;
  }, [onNodeClick]);
  useLayoutEffect2(() => {
    showLabelsRef.current = showLabels;
  }, [showLabels]);
  useEffect2(() => {
    if (!svgRef.current) return;
    const svg = d3.select(svgRef.current);
    const container = svg.select(".labels-container");
    if (container.empty()) return;
    container.transition().duration(200).style("opacity", showLabels ? 1 : 0).style("pointer-events", showLabels ? "all" : "none");
  }, [showLabels]);
  useEffect2(() => {
    if (!svgRef.current) return;
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();
    const layoutRadius = 100;
    const centerPoint = { x: width / 2, y: height / 2 };
    const groupFoci = Array.from(
      { length: groupCount },
      (_, i) => {
        const angle = i * 2 * Math.PI / groupCount - Math.PI / 2;
        return {
          x: centerPoint.x + layoutRadius * Math.cos(angle),
          y: centerPoint.y + layoutRadius * Math.sin(angle),
          label: getTitanClusterSegmentLabel(i, groupCount, segmentLabels),
          color: TITAN_CLUSTER_COLORS[i] ?? "#999"
        };
      }
    );
    const simulation = d3.forceSimulation(data.nodes).alphaDecay(0.08).velocityDecay(0.35).alphaMin(1e-3).force(
      "link",
      d3.forceLink(data.links).id((d) => d.id).strength((d) => d.value === 1 ? 0.05 : 1e-3)
    ).force("charge", d3.forceManyBody().strength(-2)).force(
      "collide",
      d3.forceCollide((d) => d.radius + 1).strength(0.8)
    ).force("center", d3.forceCenter(width / 2, height / 2).strength(0.2)).force("radial", d3.forceRadial(0, width / 2, height / 2).strength(0.55)).force(
      "x",
      d3.forceX((d) => (groupFoci[d.group] || groupFoci[0]).x).strength(0.28)
    ).force(
      "y",
      d3.forceY((d) => (groupFoci[d.group] || groupFoci[0]).y).strength(0.28)
    );
    const link = svg.append("g").selectAll("line").data(data.links).join("line").attr("stroke", (d) => {
      const sourceNode = typeof d.source === "object" ? d.source : data.nodes.find((n) => n.id === d.source);
      if (!sourceNode) return "#ccc";
      return TITAN_CLUSTER_COLORS[sourceNode.group] || TITAN_CLUSTER_COLORS[0];
    }).attr("stroke-opacity", 0.15).attr("stroke-width", 0.5);
    const node = svg.append("g").selectAll("circle").data(data.nodes).join("circle").attr("r", (d) => d.radius).attr("fill", (d) => TITAN_CLUSTER_COLORS[d.group] || TITAN_CLUSTER_COLORS[0]).attr("stroke", "#fff").attr("stroke-width", 0.5).style("cursor", "pointer").on("click", (event, d) => {
      event.stopPropagation();
      simulation.stop();
      onNodeClickRef.current(d);
    }).call(
      d3.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended)
    );
    node.on("mouseover", function() {
      d3.select(this).transition().duration(200).attr("stroke-width", 2).attr("stroke", "#333");
    }).on("mouseout", function() {
      d3.select(this).transition().duration(200).attr("stroke-width", 0.5).attr("stroke", "#fff");
    });
    const labelGroup = svg.append("g").attr("class", "labels-container").style("opacity", 0).style("pointer-events", "none").selectAll("g").data(groupFoci).join("g").style("cursor", "pointer");
    labelGroup.append("rect").attr("rx", 14).attr("ry", 14).attr("fill", "var(--surface-0, #fff)").attr("stroke", (d) => d.color).attr("stroke-width", 2);
    labelGroup.append("text").attr("text-anchor", "middle").attr("dy", "0.35em").style("font-family", "var(--font-audiense), sans-serif").style("font-size", "12px").style("font-weight", "600").attr("fill", "var(--copy-slot-title)").style("pointer-events", "none").text((d) => d.label);
    labelGroup.each(function() {
      const g = d3.select(this);
      const text = g.select("text").node();
      if (!text) return;
      const bbox = text.getBBox();
      const paddingX = 28;
      const paddingY = 16;
      g.select("rect").attr("x", -bbox.width / 2 - paddingX / 2).attr("y", -bbox.height / 2 - paddingY / 2).attr("width", bbox.width + paddingX).attr("height", bbox.height + paddingY);
    });
    const MIN_LABEL_GAP = 92;
    const ATTRACTION = 0.22;
    const REPULSION_STRENGTH = 2.8;
    const MAX_DIST_FROM_ANCHOR = 90;
    const ANCHOR_NUDGE = 1.15;
    let labelPositions = [];
    const clampToAnchor = (pos, anchor, maxDist) => {
      const dx = pos.x - anchor.x;
      const dy = pos.y - anchor.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist <= maxDist || dist < 1e-6) return pos;
      const scale = maxDist / dist;
      return { x: anchor.x + dx * scale, y: anchor.y + dy * scale };
    };
    const doLabelTick = () => {
      const centroids = {};
      data.nodes.forEach((n) => {
        if (n.x === void 0 || n.y === void 0) return;
        if (!centroids[n.group]) centroids[n.group] = { x: 0, y: 0, count: 0 };
        centroids[n.group].x += n.x;
        centroids[n.group].y += n.y;
        centroids[n.group].count += 1;
      });
      const anchors = [];
      for (let i = 0; i < groupCount; i++) {
        const c = centroids[i];
        if (c && c.count > 0) {
          const cx = c.x / c.count;
          const cy = c.y / c.count;
          const dx = cx - centerPoint.x;
          const dy = cy - centerPoint.y;
          anchors[i] = {
            x: centerPoint.x + dx * ANCHOR_NUDGE,
            y: centerPoint.y + dy * ANCHOR_NUDGE
          };
        } else {
          anchors[i] = {
            x: (groupFoci[i] || groupFoci[0]).x,
            y: (groupFoci[i] || groupFoci[0]).y
          };
        }
      }
      if (labelPositions.length !== groupCount) {
        labelPositions = anchors.map((a) => ({ ...a }));
      }
      let maxMove = 0;
      for (let i = 0; i < groupCount; i++) {
        const anchor = anchors[i];
        let px = labelPositions[i].x;
        let py = labelPositions[i].y;
        const prevX = px;
        const prevY = py;
        px += (anchor.x - px) * ATTRACTION;
        py += (anchor.y - py) * ATTRACTION;
        for (let j = 0; j < groupCount; j++) {
          if (j === i) continue;
          const qx = labelPositions[j].x;
          const qy = labelPositions[j].y;
          const dx = px - qx;
          const dy = py - qy;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1e-6;
          if (dist < MIN_LABEL_GAP) {
            const overlap = MIN_LABEL_GAP - dist;
            const nx = dx / dist;
            const ny = dy / dist;
            px += nx * overlap * REPULSION_STRENGTH;
            py += ny * overlap * REPULSION_STRENGTH;
          }
        }
        const clamped = clampToAnchor({ x: px, y: py }, anchor, MAX_DIST_FROM_ANCHOR);
        labelPositions[i] = clamped;
        maxMove = Math.max(maxMove, Math.abs(clamped.x - prevX), Math.abs(clamped.y - prevY));
      }
      return maxMove;
    };
    const applyLabelTransforms = () => {
      labelGroup.attr(
        "transform",
        (_d, i) => `translate(${labelPositions[i]?.x ?? centerPoint.x}, ${labelPositions[i]?.y ?? centerPoint.y})`
      );
    };
    simulation.on("tick", () => {
      link.attr("x1", (d) => d.source.x).attr("y1", (d) => d.source.y).attr("x2", (d) => d.target.x).attr("y2", (d) => d.target.y);
      node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
      doLabelTick();
      applyLabelTransforms();
    });
    const labelsContainer = svg.select(".labels-container");
    simulation.on("end", () => {
      let frameCount = 0;
      let stableCount = 0;
      const STABLE_THRESHOLD = 0.4;
      const MAX_FRAMES = 80;
      const runSettling = () => {
        const maxMove = doLabelTick();
        applyLabelTransforms();
        frameCount++;
        stableCount = maxMove < STABLE_THRESHOLD ? stableCount + 1 : 0;
        if (stableCount >= 3 || frameCount >= MAX_FRAMES) {
          labelsContainer.transition().duration(200).style("opacity", showLabelsRef.current ? 1 : 0).style("pointer-events", showLabelsRef.current ? "all" : "none");
          simulation.stop();
          return;
        }
        requestAnimationFrame(runSettling);
      };
      requestAnimationFrame(runSettling);
    });
    function dragstarted(_event, d) {
      d.fx = d.x;
      d.fy = d.y;
    }
    function dragged(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = event.x;
      d.fy = event.y;
    }
    function dragended(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
      simulation.stop();
    }
    return () => {
      simulation.stop();
    };
  }, [width, height, data, groupCount, segmentLabels]);
  return /* @__PURE__ */ jsx32(
    "svg",
    {
      ref: svgRef,
      width,
      height,
      style: { display: "block", width: "100%", height: "100%" }
    }
  );
}

// src/TitanClusterGraph.tsx
import { jsx as jsx33, jsxs as jsxs28 } from "react/jsx-runtime";
function TitanClusterGraph({
  data,
  height = 420,
  minWidth = 320,
  showLabels = true,
  segmentLabels,
  groupCount,
  selectedNode: controlledSelectedNode,
  defaultSelectedNode = null,
  onSelectedNodeChange,
  withDetailsDialog = true,
  emptyState = "No graph data available.",
  className,
  style
}) {
  const wrapRef = useRef5(null);
  const [width, setWidth] = useState6(minWidth);
  const [uncontrolledSelectedNode, setUncontrolledSelectedNode] = useState6(defaultSelectedNode);
  const isControlled = controlledSelectedNode !== void 0;
  const selectedNode = isControlled ? controlledSelectedNode : uncontrolledSelectedNode;
  const computedGroupCount = useMemo3(() => {
    if (groupCount !== void 0) return groupCount;
    if (data.nodes.length === 0) return TITAN_CLUSTER_DEFAULT_GROUP_COUNT;
    return Math.max(...data.nodes.map((node) => node.group)) + 1;
  }, [groupCount, data.nodes]);
  useEffect3(() => {
    const el = wrapRef.current;
    if (!el) return;
    const measure = () => {
      const nextWidth = Math.max(minWidth, el.clientWidth);
      setWidth(nextWidth);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [minWidth]);
  const setSelectedNode = (node) => {
    if (!isControlled) setUncontrolledSelectedNode(node);
    onSelectedNodeChange?.(node);
  };
  if (data.nodes.length === 0) {
    return /* @__PURE__ */ jsx33("div", { className, style, children: /* @__PURE__ */ jsx33("p", { className: "text-secondary", style: { margin: 0 }, children: emptyState }) });
  }
  return /* @__PURE__ */ jsxs28(
    "div",
    {
      ref: wrapRef,
      className,
      style: {
        width: "100%",
        minHeight: Math.max(280, height),
        border: "1px solid var(--divider)",
        borderRadius: "var(--rounded-m)",
        background: "var(--surface-0)",
        overflow: "hidden",
        ...style
      },
      children: [
        /* @__PURE__ */ jsx33("div", { style: { width: "100%", height }, children: /* @__PURE__ */ jsx33(
          TitanClusterGraphCanvas,
          {
            width,
            height,
            data,
            onNodeClick: (node) => setSelectedNode(node),
            showLabels,
            groupCount: computedGroupCount,
            segmentLabels
          }
        ) }),
        withDetailsDialog && /* @__PURE__ */ jsx33(
          TitanDialog,
          {
            isOpen: selectedNode != null,
            onOpenChange: (open) => {
              if (!open) setSelectedNode(null);
            },
            "aria-label": selectedNode ? `Profile: ${selectedNode.name}` : "Profile",
            closeButton: "none",
            body: selectedNode ? /* @__PURE__ */ jsxs28(
              "div",
              {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  gap: "var(--spacing-s)"
                },
                children: [
                  /* @__PURE__ */ jsx33(
                    "div",
                    {
                      style: {
                        alignSelf: "stretch",
                        display: "flex",
                        justifyContent: "flex-end",
                        marginBottom: "calc(-1 * var(--spacing-3xs))"
                      },
                      children: /* @__PURE__ */ jsx33(TitanButton, { variant: "secondary", onPress: () => setSelectedNode(null), children: "Close" })
                    }
                  ),
                  /* @__PURE__ */ jsx33(
                    "div",
                    {
                      style: {
                        width: 96,
                        height: 96,
                        borderRadius: "50%",
                        padding: 4,
                        background: TITAN_CLUSTER_COLORS[selectedNode.group] ?? TITAN_CLUSTER_COLORS[0]
                      },
                      children: /* @__PURE__ */ jsx33(
                        "img",
                        {
                          src: selectedNode.avatarUrl,
                          alt: "",
                          style: {
                            width: "100%",
                            height: "100%",
                            borderRadius: "50%",
                            objectFit: "cover",
                            border: "4px solid var(--surface-0)"
                          }
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx33(
                    "h2",
                    {
                      id: "cluster-node-name",
                      style: {
                        margin: 0,
                        fontSize: "var(--font-size-xl)",
                        color: "var(--copy-slot-title)"
                      },
                      children: selectedNode.name
                    }
                  ),
                  /* @__PURE__ */ jsx33(
                    "span",
                    {
                      style: {
                        display: "inline-block",
                        padding: "8px 14px",
                        borderRadius: 14,
                        fontSize: "12px",
                        fontWeight: 600,
                        fontFamily: "var(--font-audiense), sans-serif",
                        lineHeight: 1.2,
                        color: "var(--copy-slot-title)",
                        background: "var(--surface-0)",
                        border: `2px solid ${TITAN_CLUSTER_COLORS[selectedNode.group] ?? TITAN_CLUSTER_COLORS[0]}`,
                        boxSizing: "border-box"
                      },
                      children: getTitanClusterSegmentLabel(
                        selectedNode.group,
                        computedGroupCount,
                        segmentLabels
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx33(
                    "p",
                    {
                      style: {
                        margin: 0,
                        textAlign: "left",
                        color: "var(--copy-slot-body)",
                        lineHeight: 1.5,
                        maxHeight: 120,
                        overflow: "auto"
                      },
                      children: selectedNode.bio || "No description"
                    }
                  )
                ]
              }
            ) : null
          }
        )
      ]
    }
  );
}

// src/cluster/buildTitanClusterMockData.ts
var NAMES_FIRST = [
  "Alex",
  "Jordan",
  "Taylor",
  "Casey",
  "Morgan",
  "Riley",
  "Avery",
  "Quinn",
  "Skyler",
  "Charlie"
];
var NAMES_LAST = [
  "Smith",
  "Johnson",
  "Williams",
  "Brown",
  "Jones",
  "Garcia",
  "Miller",
  "Davis",
  "Rodriguez",
  "Martinez"
];
var BIOS_TEMPLATES = [
  "Passionate about {topic} and building communities.",
  "Digital creator focused on {topic}.",
  "Sharing my journey in {topic}.",
  "Professional expert in {topic}.",
  "{topic} enthusiast and storyteller."
];
function buildTitanClusterMockData(groupCount, width, height, nodeCount = TITAN_CLUSTER_DEFAULT_NODE_COUNT) {
  const nodes = [];
  const links = [];
  const centerX = width / 2;
  const centerY = height / 2;
  for (let i = 0; i < nodeCount; i++) {
    const group = Math.floor(Math.random() * groupCount);
    const groupName = getTitanClusterSegmentLabel(group, groupCount);
    const first = NAMES_FIRST[Math.floor(Math.random() * NAMES_FIRST.length)];
    const last = NAMES_LAST[Math.floor(Math.random() * NAMES_LAST.length)];
    const angle = Math.random() * 2 * Math.PI;
    const r = Math.sqrt(Math.random()) * 140;
    nodes.push({
      id: `node-${i}`,
      group,
      radius: Math.random() > 0.92 ? 12 + Math.random() * 10 : 5 + Math.random() * 5,
      x: centerX + r * Math.cos(angle),
      y: centerY + r * Math.sin(angle),
      name: `${first} ${last}`,
      bio: BIOS_TEMPLATES[Math.floor(Math.random() * BIOS_TEMPLATES.length)].replace(
        "{topic}",
        groupName
      ),
      avatarUrl: `https://i.pravatar.cc/150?u=${i}`
    });
  }
  nodes.forEach((source) => {
    const sameGroup = nodes.filter((n) => n.group === source.group && n.id !== source.id);
    const internalConnections = Math.floor(Math.random() * 2) + 1;
    for (let j = 0; j < internalConnections; j++) {
      if (sameGroup.length === 0) break;
      const target = sameGroup[Math.floor(Math.random() * sameGroup.length)];
      links.push({ source: source.id, target: target.id, value: 1 });
    }
  });
  nodes.forEach((source) => {
    if (Math.random() > 0.9) {
      const differentGroupNodes = nodes.filter((n) => n.group !== source.group);
      if (differentGroupNodes.length > 0) {
        const target = differentGroupNodes[Math.floor(Math.random() * differentGroupNodes.length)];
        links.push({ source: source.id, target: target.id, value: 0.5 });
      }
    }
  });
  return { nodes, links };
}
export {
  TITAN_CLUSTER_COLORS,
  TITAN_CLUSTER_DEFAULT_GROUP_COUNT,
  TITAN_CLUSTER_DEFAULT_NODE_COUNT,
  TITAN_CLUSTER_GROUP_LABELS,
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
  TitanClusterGraph,
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
  TitanSidebarFolder,
  TitanSidebarHeader,
  TitanSidebarItem,
  TitanSidebarSearch,
  TitanSidebarSection,
  TitanSidebarTree,
  TitanSidebarTreeItem,
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
  buildTitanClusterMockData,
  getTitanClusterSegmentLabel,
  getToneStyle,
  registerFallbackIcons,
  registerTitanIcons,
  renderIconNode,
  resolveIcon
};
