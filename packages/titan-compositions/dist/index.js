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
import { ChevronRight } from "lucide-react";
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
      /* @__PURE__ */ jsx2("span", { className: "breadcrumb-separator", "aria-hidden": "true", children: /* @__PURE__ */ jsx2(ChevronRight, {}) })
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
    /* @__PURE__ */ jsx2("span", { className: "breadcrumb-separator", "aria-hidden": "true", children: /* @__PURE__ */ jsx2(ChevronRight, {}) })
  ] });
}

// src/TitanNavbar.tsx
import { Button as Button2 } from "react-aria-components";
import {
  Bell,
  ChevronDown,
  CircleHelp,
  Grip,
  Handshake,
  Settings,
  Sparkles
} from "lucide-react";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var THEME_TO_LOGO = {
  demand: "logo-demand.svg",
  audiense: "logo-audiense.svg",
  neutral: "logo-audiense.svg",
  insights: "logo-insights.svg",
  linkedin: "logo-inkedin.svg",
  tweetbinder: "logo-tweetbinder.svg",
  connect: "logo-connect.svg"
};
var LOGO_CDN_BASE = "https://cdn.jsdelivr.net/gh/angelcreative/titan-foundations@main/public/assets/logos";
function TitanNavbar({
  theme = "insights",
  userInitial = "A",
  logoAlt = "Product logo",
  logoBasePath = LOGO_CDN_BASE,
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
      /* @__PURE__ */ jsx3(Button2, { className: "icon-ghost navbar-icon-button", "aria-label": "Change product", onPress: onChangeProduct, children: /* @__PURE__ */ jsx3(Grip, {}) }),
      /* @__PURE__ */ jsx3("img", { className: "navbar-logo", src: `${logoBasePath}/${logoFile}`, alt: logoAlt })
    ] }),
    /* @__PURE__ */ jsxs3("div", { className: "navbar-right-group", children: [
      /* @__PURE__ */ jsx3(Button2, { className: "icon-ghost navbar-icon-button", "aria-label": "Notifications", onPress: onNotifications, children: /* @__PURE__ */ jsx3(Bell, {}) }),
      /* @__PURE__ */ jsx3(Button2, { className: "icon-ghost navbar-icon-button", "aria-label": "Support and community", onPress: onSupport, children: /* @__PURE__ */ jsx3(Handshake, {}) }),
      /* @__PURE__ */ jsx3(Button2, { className: "icon-ghost navbar-icon-button", "aria-label": "Help", onPress: onHelp, children: /* @__PURE__ */ jsx3(CircleHelp, {}) }),
      /* @__PURE__ */ jsx3(Button2, { className: "icon-ghost navbar-icon-button", "aria-label": "Settings", onPress: onSettings, children: /* @__PURE__ */ jsx3(Settings, {}) }),
      /* @__PURE__ */ jsx3(Button2, { className: "icon-ghost navbar-icon-button", "aria-label": "Featured action", onPress: onFeaturedAction, children: /* @__PURE__ */ jsx3(Sparkles, {}) }),
      /* @__PURE__ */ jsxs3("div", { className: "navbar-user", children: [
        /* @__PURE__ */ jsx3("span", { className: "navbar-avatar", "aria-hidden": "true", children: userInitial }),
        /* @__PURE__ */ jsx3(Button2, { className: "icon-ghost navbar-chevron-button", "aria-label": "User menu", onPress: onUserMenu, children: /* @__PURE__ */ jsx3(ChevronDown, {}) })
      ] })
    ] })
  ] }) });
}

// src/TitanButton.tsx
import { Button as Button3 } from "react-aria-components";
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
var BUTTON_VARIANT_CLASS = {
  primary: "btn btn-primary",
  secondary: "btn btn-secondary",
  tertiary: "btn btn-tertiary",
  link: "btn btn-link-text",
  delete: "btn btn-delete",
  "delete-secondary": "btn btn-delete-secondary"
};
var ICON_BUTTON_VARIANT_CLASS = {
  secondary: "icon-secondary",
  ghost: "icon-ghost",
  delete: "icon-delete"
};
var PILL_TONE_MAP = {
  success: {
    bg: "var(--pill-slot-success-bg)",
    color: "var(--pill-slot-success-color)",
    icon: "var(--pill-slot-success-icon-color)"
  },
  error: {
    bg: "var(--pill-slot-error-bg)",
    color: "var(--pill-slot-error-color)",
    icon: "var(--pill-slot-error-icon-color)"
  },
  alert: {
    bg: "var(--pill-slot-alert-bg)",
    color: "var(--pill-slot-alert-color)",
    icon: "var(--pill-slot-alert-icon-color)"
  },
  warning: {
    bg: "var(--pill-slot-alert-bg)",
    color: "var(--pill-slot-alert-color)",
    icon: "var(--pill-slot-alert-icon-color)"
  },
  information: {
    bg: "var(--pill-slot-information-bg)",
    color: "var(--pill-slot-information-color)",
    icon: "var(--pill-slot-information-icon-color)"
  },
  info: {
    bg: "var(--pill-slot-information-bg)",
    color: "var(--pill-slot-information-color)",
    icon: "var(--pill-slot-information-icon-color)"
  },
  disabled: {
    bg: "var(--pill-slot-disabled-bg)",
    color: "var(--pill-slot-disabled-color)",
    icon: "var(--pill-slot-disabled-color)"
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
      "--pill-bg": `var(--color-${tone}-100, var(--pill-slot-bg))`,
      "--pill-color": `var(--color-${tone}-700, var(--pill-slot-color))`,
      "--pill-icon-color": `var(--color-${tone}-600, var(--pill-slot-icon-color))`
    };
  }
  return {
    "--tag-bg": `var(--color-${tone}-200, var(--pill-slot-bg))`,
    "--tag-color": `var(--color-${tone}-600, var(--pill-slot-color))`
  };
}
function TitanButton({
  variant = "primary",
  className = "",
  icon,
  children,
  ...props
}) {
  const baseClass = BUTTON_VARIANT_CLASS[variant];
  const withIconClass = icon ? "with-icon" : "";
  const mergedClassName = [baseClass, withIconClass, className].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxs4(Button3, { className: mergedClassName, ...props, children: [
    icon,
    children
  ] });
}
function TitanIconButton({
  variant = "ghost",
  className = "",
  children,
  ...props
}) {
  const baseClass = ICON_BUTTON_VARIANT_CLASS[variant];
  const mergedClassName = [baseClass, className].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx4(Button3, { className: mergedClassName, ...props, children });
}

// src/TitanPill.tsx
import { Button as Button4 } from "react-aria-components";
import { X } from "lucide-react";
import { jsx as jsx5, jsxs as jsxs5 } from "react/jsx-runtime";
function TitanPill({ id, label, tone, onDismiss }) {
  return /* @__PURE__ */ jsxs5("div", { className: "pill", style: getToneStyle(tone, "pill"), children: [
    /* @__PURE__ */ jsx5("span", { children: label }),
    onDismiss ? /* @__PURE__ */ jsx5(Button4, { className: "pill-close", "aria-label": `Remove ${label}`, onPress: () => onDismiss(id), children: /* @__PURE__ */ jsx5(X, {}) }) : null
  ] });
}

// src/TitanTag.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
function TitanTag({ label, tone }) {
  return /* @__PURE__ */ jsx6("span", { className: "tag-chip", style: getToneStyle(tone, "tag"), children: label });
}

// src/TitanMenu.tsx
import {
  Button as Button5,
  Menu as Menu2,
  MenuItem as MenuItem2,
  MenuTrigger as MenuTrigger2,
  Popover as Popover2,
  Separator,
  SubmenuTrigger
} from "react-aria-components";
import { ChevronDown as ChevronDown2, ChevronRight as ChevronRight2, Plus, AlertCircle } from "lucide-react";
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
        /* @__PURE__ */ jsx7("span", { className: "menu-item-end", "aria-hidden": "true", children: /* @__PURE__ */ jsx7(ChevronRight2, {}) })
      ] }),
      /* @__PURE__ */ jsx7(Popover2, { className: "menu-popover menu-popover-submenu", placement: "end top", children: /* @__PURE__ */ jsx7(Menu2, { className: "menu-list", children: item.children.map((child) => /* @__PURE__ */ jsx7(TitanMenuNode, { item: child, onAction }, child.id)) }) })
    ] });
  }
  return /* @__PURE__ */ jsx7(
    MenuItem2,
    {
      className: `menu-item${item.destructive ? " menu-item-destructive" : ""}`,
      textValue: item.label,
      isDisabled: item.disabled,
      onAction: () => onAction?.(item.id),
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
    iconOnly ? /* @__PURE__ */ jsx7(Button5, { className: "icon-ghost menu-trigger-icon-ghost", "aria-label": triggerLabel, children: triggerIcon }) : /* @__PURE__ */ jsxs6(Button5, { className: "btn btn-secondary menu-trigger-button", children: [
      triggerLabel,
      /* @__PURE__ */ jsx7("span", { className: "menu-trigger-chevron", "aria-hidden": "true", children: /* @__PURE__ */ jsx7(ChevronDown2, {}) })
    ] }),
    /* @__PURE__ */ jsx7(Popover2, { className: "menu-popover", placement, offset: 8, children: /* @__PURE__ */ jsx7(Menu2, { className: "menu-list", children: items.map((item) => /* @__PURE__ */ jsx7(TitanMenuNode, { item, onAction }, item.id)) }) })
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
  const resolvedAddIcon = addNewIcon ?? /* @__PURE__ */ jsx7(Plus, {});
  const resolvedEmptyIcon = emptyIcon ?? /* @__PURE__ */ jsx7(AlertCircle, {});
  return /* @__PURE__ */ jsxs6(MenuTrigger2, { children: [
    iconOnly ? /* @__PURE__ */ jsx7(Button5, { className: "icon-ghost menu-trigger-icon-ghost", "aria-label": triggerLabel, children: triggerIcon }) : /* @__PURE__ */ jsxs6(Button5, { className: "btn btn-secondary menu-trigger-button", children: [
      triggerLabel,
      /* @__PURE__ */ jsx7("span", { className: "menu-trigger-chevron", "aria-hidden": "true", children: /* @__PURE__ */ jsx7(ChevronDown2, {}) })
    ] }),
    /* @__PURE__ */ jsx7(Popover2, { className: "menu-popover", placement, offset: 8, children: /* @__PURE__ */ jsx7(Menu2, { className: "menu-list", children: hasResults ? /* @__PURE__ */ jsxs6(Fragment, { children: [
      items.map((item) => /* @__PURE__ */ jsx7(
        MenuItem2,
        {
          className: "menu-item menu-item-search",
          textValue: item.label,
          onAction: () => onAction?.(item.id),
          children: /* @__PURE__ */ jsxs6("span", { className: "menu-item-start", children: [
            item.icon && /* @__PURE__ */ jsx7("span", { className: "menu-item-icon", children: item.icon }),
            /* @__PURE__ */ jsx7("span", { className: "menu-item-label", children: highlightMatch(item.label, query) })
          ] })
        },
        item.id
      )),
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
    iconOnly ? /* @__PURE__ */ jsx7(Button5, { className: "icon-ghost menu-trigger-icon-ghost", "aria-label": triggerLabel, children: triggerIcon }) : /* @__PURE__ */ jsxs6(Button5, { className: "btn btn-secondary menu-trigger-button", children: [
      triggerLabel,
      /* @__PURE__ */ jsx7("span", { className: "menu-trigger-chevron", "aria-hidden": "true", children: /* @__PURE__ */ jsx7(ChevronDown2, {}) })
    ] }),
    /* @__PURE__ */ jsx7(Popover2, { className: "menu-popover", placement, offset: 8, children: /* @__PURE__ */ jsx7(Menu2, { className: "menu-list", children: items.map((item) => /* @__PURE__ */ jsxs6(
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
      },
      item.id
    )) }) })
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
    /* @__PURE__ */ jsx7(TitanBadgeAnchor, { count: resolvedBadgeCount, max: badgeMax, children: /* @__PURE__ */ jsx7(Button5, { className: "icon-ghost menu-trigger-icon-ghost", "aria-label": triggerLabel, children: triggerIcon }) }),
    /* @__PURE__ */ jsx7(Popover2, { className: "menu-popover", placement, offset: 8, children: /* @__PURE__ */ jsx7(Menu2, { className: "menu-list menu-list-notifications", children: hasNotifications ? /* @__PURE__ */ jsxs6(Fragment, { children: [
      notifications.map((n) => /* @__PURE__ */ jsx7(
        MenuItem2,
        {
          className: "menu-item menu-item-notification",
          textValue: typeof n.title === "string" ? n.title : n.id,
          onAction: () => onAction?.(n.id),
          children: /* @__PURE__ */ jsxs6("span", { className: "menu-item-start", children: [
            n.icon && /* @__PURE__ */ jsx7("span", { className: "menu-item-icon", children: n.icon }),
            /* @__PURE__ */ jsxs6("span", { className: "menu-item-notification-content", children: [
              /* @__PURE__ */ jsx7("span", { className: "menu-item-notification-title", children: n.title }),
              /* @__PURE__ */ jsx7("span", { className: "menu-item-notification-date", children: n.date })
            ] })
          ] })
        },
        n.id
      )),
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
import {
  Button as Button6,
  Label,
  ListBox,
  ListBoxItem,
  Popover as Popover3,
  Select,
  SelectValue
} from "react-aria-components";
import { ChevronDown as ChevronDown3 } from "lucide-react";
import { jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
function TitanSelect({
  label,
  options,
  defaultSelectedKey,
  selectedKey,
  onSelectionChange,
  isDisabled = false
}) {
  const selectionProps = selectedKey !== void 0 ? { selectedKey, onSelectionChange } : { defaultSelectedKey };
  return /* @__PURE__ */ jsxs7(
    Select,
    {
      className: "select-root",
      ...selectionProps,
      isDisabled,
      children: [
        /* @__PURE__ */ jsx8(Label, { className: "select-label", children: label }),
        /* @__PURE__ */ jsxs7(Button6, { className: "select-trigger", children: [
          /* @__PURE__ */ jsx8(SelectValue, {}),
          /* @__PURE__ */ jsx8("span", { className: "select-trigger-chevron", "aria-hidden": "true", children: /* @__PURE__ */ jsx8(ChevronDown3, {}) })
        ] }),
        /* @__PURE__ */ jsx8(Popover3, { className: "select-popover", placement: "bottom start", children: /* @__PURE__ */ jsx8(ListBox, { className: "select-list", children: options.map((option) => /* @__PURE__ */ jsx8(
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
          },
          option.id
        )) }) })
      ]
    }
  );
}

// src/TitanTabs.tsx
import { Tab, TabList, TabPanel, Tabs } from "react-aria-components";
import { jsx as jsx9, jsxs as jsxs8 } from "react/jsx-runtime";
function TitanTabs({
  items,
  defaultSelectedKey,
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
      orientation,
      children: [
        /* @__PURE__ */ jsx9(TabList, { className: listClass, "aria-label": ariaLabel, children: items.map((item) => /* @__PURE__ */ jsx9(
          Tab,
          {
            id: item.id,
            className: isVertical ? "tab-trigger tab-trigger-vertical" : "tab-trigger",
            isDisabled: item.disabled,
            children: item.label
          },
          item.id
        )) }),
        items.map((item) => /* @__PURE__ */ jsx9(TabPanel, { id: item.id, className: "tab-panel", children: item.content }, item.id))
      ]
    }
  );
}

// src/TitanPagination.tsx
import { Button as Button7 } from "react-aria-components";
import { ChevronLeft, ChevronRight as ChevronRight3 } from "lucide-react";
import { jsx as jsx10, jsxs as jsxs9 } from "react/jsx-runtime";
function TitanPagination({
  ariaLabel,
  pages,
  currentPage,
  previousDisabled = false,
  nextDisabled = false,
  onPageChange,
  onPrevious,
  onNext
}) {
  return /* @__PURE__ */ jsxs9("nav", { className: "pagination-nav", "aria-label": ariaLabel, children: [
    /* @__PURE__ */ jsx10(Button7, { className: "pagination-button pagination-nav-button", isDisabled: previousDisabled, "aria-label": "Previous page", onPress: onPrevious, children: /* @__PURE__ */ jsx10(ChevronLeft, {}) }),
    pages.map(
      (page, index) => page === "ellipsis" ? /* @__PURE__ */ jsx10("span", { className: "pagination-ellipsis", "aria-hidden": "true", children: "..." }, `ellipsis-${index}`) : /* @__PURE__ */ jsx10(
        Button7,
        {
          className: page === currentPage ? "pagination-button pagination-page-button pagination-page-button-selected" : "pagination-button pagination-page-button",
          "aria-current": page === currentPage ? "page" : void 0,
          onPress: () => onPageChange?.(page),
          children: page
        },
        `${ariaLabel}-${page}`
      )
    ),
    /* @__PURE__ */ jsx10(Button7, { className: "pagination-button pagination-nav-button", isDisabled: nextDisabled, "aria-label": "Next page", onPress: onNext, children: /* @__PURE__ */ jsx10(ChevronRight3, {}) })
  ] });
}

// src/TitanDrawer.tsx
import { Button as Button8, Dialog, DialogTrigger, Modal, ModalOverlay } from "react-aria-components";
import { X as X2 } from "lucide-react";
import { Fragment as Fragment2, jsx as jsx11, jsxs as jsxs10 } from "react/jsx-runtime";
function TitanDrawer({ triggerLabel, title, children }) {
  return /* @__PURE__ */ jsxs10(DialogTrigger, { children: [
    /* @__PURE__ */ jsx11(Button8, { className: "btn btn-secondary", children: triggerLabel }),
    /* @__PURE__ */ jsx11(ModalOverlay, { isDismissable: true, className: "drawer-overlay", children: /* @__PURE__ */ jsx11(Modal, { className: "drawer-modal", children: /* @__PURE__ */ jsx11(Dialog, { className: "drawer-panel", children: ({ close }) => /* @__PURE__ */ jsxs10(Fragment2, { children: [
      /* @__PURE__ */ jsxs10("header", { className: "drawer-header", children: [
        /* @__PURE__ */ jsx11("h3", { className: "drawer-title", children: title }),
        /* @__PURE__ */ jsx11(Button8, { className: "icon-ghost drawer-close-button", "aria-label": "Close drawer", onPress: close, children: /* @__PURE__ */ jsx11(X2, {}) })
      ] }),
      /* @__PURE__ */ jsx11("div", { className: "drawer-body", children })
    ] }) }) }) })
  ] });
}

// src/TitanDialog.tsx
import { Button as Button9, Dialog as Dialog2, DialogTrigger as DialogTrigger2, Modal as Modal2, ModalOverlay as ModalOverlay2 } from "react-aria-components";
import { jsx as jsx12, jsxs as jsxs11 } from "react/jsx-runtime";
function TitanDialog({
  triggerLabel,
  title,
  body,
  leftAction,
  rightAction
}) {
  return /* @__PURE__ */ jsxs11(DialogTrigger2, { children: [
    /* @__PURE__ */ jsx12(Button9, { className: "btn btn-secondary", children: triggerLabel }),
    /* @__PURE__ */ jsx12(ModalOverlay2, { isDismissable: true, className: "dialog-overlay", children: /* @__PURE__ */ jsx12(Modal2, { className: "dialog-modal", children: /* @__PURE__ */ jsxs11(Dialog2, { className: "dialog-panel", children: [
      /* @__PURE__ */ jsx12("header", { className: "dialog-header", children: /* @__PURE__ */ jsx12("h3", { className: "dialog-title", children: title }) }),
      /* @__PURE__ */ jsx12("div", { className: "dialog-body", children: body }),
      /* @__PURE__ */ jsxs11("footer", { className: "dialog-footer", children: [
        leftAction,
        rightAction
      ] })
    ] }) }) })
  ] });
}

// src/TitanTooltip.tsx
import { OverlayArrow, Tooltip, TooltipTrigger } from "react-aria-components";
import { Fragment as Fragment3, jsx as jsx13, jsxs as jsxs12 } from "react/jsx-runtime";
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
    return /* @__PURE__ */ jsxs12(Fragment3, { children: [
      title != null && /* @__PURE__ */ jsx13("span", { className: "tooltip-title", children: title }),
      body != null && /* @__PURE__ */ jsx13("span", { className: "tooltip-body", children: body })
    ] });
  }
  return /* @__PURE__ */ jsx13(Fragment3, { children: content });
}
function TitanTooltip({
  content,
  title,
  body,
  children,
  delay = 0,
  closeDelay = 0,
  placement = "top",
  shouldFlip = true
}) {
  const hasContent = content != null || title != null || body != null;
  if (!hasContent) return /* @__PURE__ */ jsx13(Fragment3, { children });
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
import { Button as Button10 } from "react-aria-components";
import { X as X3 } from "lucide-react";
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
    /* @__PURE__ */ jsx14(Button10, { className: "icon-ghost toast-close-button", "aria-label": "Dismiss toast", onPress: () => onDismiss(toast.id), children: /* @__PURE__ */ jsx14(X3, {}) })
  ] }, toast.id)) });
}

// src/TitanFormControls.tsx
import { Checkbox, Label as Label2, Radio, RadioGroup, Switch } from "react-aria-components";
import { Check } from "lucide-react";
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
        /* @__PURE__ */ jsx15("span", { className: "checkbox-box", "aria-hidden": "true", children: /* @__PURE__ */ jsx15(Check, { className: "checkbox-mark" }) }),
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
  FieldError,
  Group,
  Input,
  Label as Label3,
  Text,
  TextArea,
  TextField
} from "react-aria-components";
import { X as X4 } from "lucide-react";
import { jsx as jsx16, jsxs as jsxs15 } from "react/jsx-runtime";
function TitanInputField({
  label,
  hint,
  counter,
  leadingIcon,
  trailingIcon,
  errorMessage,
  placeholder,
  className = "field-root",
  ...props
}) {
  const iconContainerClass = [
    "input-with-icons",
    leadingIcon ? "input-with-icons-left" : "",
    trailingIcon ? "input-with-icons-right" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxs15(TextField, { className, ...props, children: [
    label ? /* @__PURE__ */ jsx16(Label3, { className: "field-label", children: label }) : null,
    leadingIcon || trailingIcon ? /* @__PURE__ */ jsxs15(Group, { className: iconContainerClass, children: [
      leadingIcon ? /* @__PURE__ */ jsx16("span", { className: "input-leading-icon", children: leadingIcon }) : null,
      /* @__PURE__ */ jsx16(Input, { className: "input-field", placeholder }),
      trailingIcon ? /* @__PURE__ */ jsx16("span", { className: "input-trailing-icon", children: trailingIcon }) : null
    ] }) : /* @__PURE__ */ jsx16(Input, { className: "input-field", placeholder }),
    hint || counter ? /* @__PURE__ */ jsxs15("div", { className: "field-help-row", children: [
      hint ? /* @__PURE__ */ jsx16(Text, { slot: "description", className: "field-hint", children: hint }) : /* @__PURE__ */ jsx16("span", {}),
      counter ? /* @__PURE__ */ jsx16("span", { className: "field-counter", children: counter }) : null
    ] }) : null,
    errorMessage ? /* @__PURE__ */ jsx16(FieldError, { className: "field-error", children: errorMessage }) : null
  ] });
}
function TitanTextareaField({
  label,
  hint,
  counter,
  leadingIcon,
  onClear,
  autoExpand = false,
  errorMessage,
  placeholder,
  className = "field-root",
  ...props
}) {
  const textareaRef = useRef(null);
  const handleInput = useCallback(() => {
    if (!autoExpand || !textareaRef.current) return;
    const el = textareaRef.current;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  }, [autoExpand]);
  const hasIcons = !!(leadingIcon || onClear);
  const containerClass = [
    "textarea-with-icons",
    leadingIcon ? "textarea-with-icons-left" : "",
    onClear ? "textarea-with-icons-right" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxs15(TextField, { className, ...props, children: [
    label ? /* @__PURE__ */ jsx16(Label3, { className: "field-label", children: label }) : null,
    hasIcons ? /* @__PURE__ */ jsxs15(Group, { className: containerClass, children: [
      leadingIcon ? /* @__PURE__ */ jsx16("span", { className: "textarea-leading-icon", children: leadingIcon }) : null,
      /* @__PURE__ */ jsx16(
        TextArea,
        {
          ref: textareaRef,
          className: "textarea-field",
          placeholder,
          onInput: handleInput
        }
      ),
      onClear ? /* @__PURE__ */ jsx16("button", { type: "button", className: "textarea-clear-icon", onClick: onClear, "aria-label": "Clear", children: /* @__PURE__ */ jsx16(X4, {}) }) : null
    ] }) : /* @__PURE__ */ jsx16(
      TextArea,
      {
        ref: textareaRef,
        className: "textarea-field",
        placeholder,
        onInput: handleInput
      }
    ),
    hint || counter ? /* @__PURE__ */ jsxs15("div", { className: "field-help-row", children: [
      hint ? /* @__PURE__ */ jsx16(Text, { slot: "description", className: "field-hint", children: hint }) : /* @__PURE__ */ jsx16("span", {}),
      counter ? /* @__PURE__ */ jsx16("span", { className: "field-counter", children: counter }) : null
    ] }) : null,
    errorMessage ? /* @__PURE__ */ jsx16(FieldError, { className: "field-error", children: errorMessage }) : null
  ] });
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

// src/TitanBorderlessTable.tsx
import { jsx as jsx18, jsxs as jsxs16 } from "react/jsx-runtime";
function TitanBorderlessTable({ columns, rows }) {
  return /* @__PURE__ */ jsx18("div", { className: "layout-table-wrap", children: /* @__PURE__ */ jsxs16("table", { className: "table-borderless", children: [
    /* @__PURE__ */ jsx18("thead", { children: /* @__PURE__ */ jsx18("tr", { children: columns.map((column) => /* @__PURE__ */ jsx18("th", { scope: "col", children: column.header }, column.key)) }) }),
    /* @__PURE__ */ jsx18("tbody", { children: rows.map((row) => /* @__PURE__ */ jsx18("tr", { children: columns.map((column) => /* @__PURE__ */ jsx18("td", { children: column.render ? column.render(row) : row[column.key] }, `${row.id}-${column.key}`)) }, row.id)) })
  ] }) });
}

// src/TitanTable.tsx
import {
  Table as RACTable,
  TableHeader,
  TableBody,
  Column,
  Row,
  Cell,
  Checkbox as Checkbox2
} from "react-aria-components";
import { jsx as jsx19 } from "react/jsx-runtime";
function TitanTable(props) {
  const { className = "", children, stickyColumns, stickyHeader, ...rest } = props;
  const stickyCols = stickyColumns != null ? Number(stickyColumns) : 0;
  return /* @__PURE__ */ jsx19(
    "div",
    {
      className: "layout-table-wrap layout-table-aria",
      "data-sticky-cols": stickyCols > 0 ? stickyCols : void 0,
      "data-sticky-header": stickyHeader ? "" : void 0,
      children: /* @__PURE__ */ jsx19(
        RACTable,
        {
          className: `table-borderless table-aria ${className}`.trim(),
          ...rest,
          children
        }
      )
    }
  );
}

// src/TitanTwoUpOneDownLayout.tsx
import { Fragment as Fragment4, jsx as jsx20, jsxs as jsxs17 } from "react/jsx-runtime";
function TitanTwoUpOneDownLayout({
  theme = "insights",
  userInitial = "A",
  breadcrumbItems,
  breadcrumbCurrentLabel,
  leftTop,
  rightTop,
  bottom
}) {
  return /* @__PURE__ */ jsxs17(Fragment4, { children: [
    /* @__PURE__ */ jsx20(TitanNavbar, { theme, userInitial }),
    /* @__PURE__ */ jsxs17("main", { className: "page", children: [
      /* @__PURE__ */ jsx20("section", { className: "card", children: /* @__PURE__ */ jsx20(TitanBreadcrumb, { items: breadcrumbItems, currentLabel: breadcrumbCurrentLabel }) }),
      /* @__PURE__ */ jsxs17(TitanCardGrid, { children: [
        /* @__PURE__ */ jsx20(TitanCard, { span: 8, children: leftTop }),
        /* @__PURE__ */ jsx20(TitanCard, { span: 8, children: rightTop }),
        /* @__PURE__ */ jsx20(TitanCard, { span: 16, children: bottom })
      ] })
    ] })
  ] });
}

// src/TitanToggleButtonGroup.tsx
import { ToggleButton, ToggleButtonGroup } from "react-aria-components";
import { jsx as jsx21, jsxs as jsxs18 } from "react/jsx-runtime";
function TitanToggleButtonGroup({
  items,
  selectedKey,
  defaultSelectedKey,
  onSelectionChange,
  ariaLabel = "Options"
}) {
  return /* @__PURE__ */ jsx21(
    ToggleButtonGroup,
    {
      className: "toggle-button-group",
      selectionMode: "single",
      selectedKeys: selectedKey ? /* @__PURE__ */ new Set([selectedKey]) : void 0,
      defaultSelectedKeys: defaultSelectedKey ? /* @__PURE__ */ new Set([defaultSelectedKey]) : void 0,
      onSelectionChange: (keys) => {
        const selected = [...keys][0];
        if (selected && onSelectionChange) onSelectionChange(String(selected));
      },
      "aria-label": ariaLabel,
      children: items.map((item) => /* @__PURE__ */ jsxs18(ToggleButton, { id: item.id, className: "toggle-button-item", children: [
        item.icon && item.iconPosition !== "right" && /* @__PURE__ */ jsx21("span", { className: "toggle-button-icon", children: item.icon }),
        /* @__PURE__ */ jsx21("span", { children: item.label }),
        item.icon && item.iconPosition === "right" && /* @__PURE__ */ jsx21("span", { className: "toggle-button-icon", children: item.icon })
      ] }, item.id))
    }
  );
}

// src/TitanSidebar.tsx
import {
  createContext,
  useContext,
  useState,
  useCallback as useCallback2
} from "react";
import { Button as Button11 } from "react-aria-components";
import { ChevronLeft as ChevronLeft3, ChevronRight as ChevronRight5 } from "lucide-react";

// src/icons/renderIconNode.tsx
import { createElement, isValidElement } from "react";

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
  "threads": "threads"
};
function resolveIconAlias(normalized) {
  return ALIASES[normalized] ?? normalized;
}

// src/icons/lucideRegistry.ts
import {
  Bell as Bell2,
  BellRing,
  Box,
  Check as Check2,
  ChevronDown as ChevronDown4,
  ChevronLeft as ChevronLeft2,
  ChevronRight as ChevronRight4,
  CircleHelp as CircleHelp2,
  Grip as Grip2,
  Handshake as Handshake2,
  Hash,
  Info,
  Layers,
  LayoutDashboard,
  ListFilter,
  Loader2,
  MessageSquare,
  MousePointerClick,
  Navigation,
  PanelLeft,
  PanelRight,
  Search,
  Settings as Settings2,
  Sparkles as Sparkles2,
  Tag,
  TextCursorInput,
  ToggleLeft,
  Type,
  X as X5
} from "lucide-react";
var LUCIDE_REGISTRY = {
  "bell": Bell2,
  "bell-ring": BellRing,
  "box": Box,
  "check": Check2,
  "chevron-down": ChevronDown4,
  "chevron-left": ChevronLeft2,
  "chevron-right": ChevronRight4,
  "circle-help": CircleHelp2,
  "grip": Grip2,
  "handshake": Handshake2,
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
  "panel-right": PanelRight,
  "search": Search,
  "settings": Settings2,
  "sparkles": Sparkles2,
  "tag": Tag,
  "text-cursor-input": TextCursorInput,
  "toggle-left": ToggleLeft,
  "type": Type,
  "x": X5
};

// src/icons/resolveIcon.ts
var fallbackRegistry = {};
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
  const fromLucide = LUCIDE_REGISTRY[canonical];
  if (fromLucide) return fromLucide;
  const fromFallback = fallbackRegistry[canonical] ?? fallbackRegistry[normalized];
  if (fromFallback) return fromFallback;
  return null;
}

// src/icons/renderIconNode.tsx
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

// src/TitanSidebar.tsx
import { jsx as jsx22, jsxs as jsxs19 } from "react/jsx-runtime";
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
  const [uncontrolledActiveId, setUncontrolledActiveId] = useState(
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
  return /* @__PURE__ */ jsx22(SidebarContext.Provider, { value: { collapsed, activeId, setActiveId }, children: /* @__PURE__ */ jsxs19(
    "aside",
    {
      className: "titan-sidebar",
      ...collapsed ? { "data-collapsed": "" } : {},
      children: [
        onToggle && /* @__PURE__ */ jsx22(
          Button11,
          {
            className: "titan-sidebar-toggle",
            onPress: onToggle,
            "aria-label": collapsed ? "Expand sidebar" : "Collapse sidebar",
            children: collapsed ? /* @__PURE__ */ jsx22(ChevronRight5, {}) : /* @__PURE__ */ jsx22(ChevronLeft3, {})
          }
        ),
        children
      ]
    }
  ) });
}
function TitanSidebarHeader({ children }) {
  return /* @__PURE__ */ jsx22("div", { className: "titan-sidebar-header", children });
}
function TitanSidebarItem({
  id,
  icon,
  onPress,
  children
}) {
  const { collapsed, activeId, setActiveId } = useContext(SidebarContext);
  const isActive = activeId === id;
  return /* @__PURE__ */ jsxs19(
    Button11,
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
        /* @__PURE__ */ jsx22("span", { className: "titan-sidebar-item-label", children })
      ]
    }
  );
}

// src/TitanLoader.tsx
import { jsx as jsx23, jsxs as jsxs20 } from "react/jsx-runtime";
var LOADER_CDN_BASE = "https://cdn.jsdelivr.net/gh/angelcreative/titan-foundations@main/public/assets/logos";
function TitanLoader({
  size = 120,
  label = "Loading\u2026",
  className = "",
  style,
  loaderBasePath = LOADER_CDN_BASE
}) {
  return /* @__PURE__ */ jsxs20(
    "div",
    {
      className: `titan-loader ${className}`.trim(),
      role: "status",
      "aria-label": label,
      style,
      children: [
        /* @__PURE__ */ jsx23(
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
        /* @__PURE__ */ jsx23("span", { className: "titan-loader-sr-only", children: label })
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
import { Fragment as Fragment5, jsx as jsx24, jsxs as jsxs21 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs21(
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
        (label || showOutput) && /* @__PURE__ */ jsxs21("div", { className: "slider-header", children: [
          label && /* @__PURE__ */ jsx24(Label4, { className: "slider-label", children: label }),
          showOutput && /* @__PURE__ */ jsx24(SliderOutput, { className: "slider-output" })
        ] }),
        /* @__PURE__ */ jsx24(SliderTrack, { className: "slider-track", children: ({ state }) => /* @__PURE__ */ jsxs21(Fragment5, { children: [
          /* @__PURE__ */ jsx24(
            "div",
            {
              className: "slider-track-fill",
              style: { width: `${state.getThumbPercent(0) * 100}%` }
            }
          ),
          /* @__PURE__ */ jsx24(SliderThumb, { className: "slider-thumb", index: 0 })
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
  return /* @__PURE__ */ jsxs21(
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
        (label || showOutput) && /* @__PURE__ */ jsxs21("div", { className: "slider-header", children: [
          label && /* @__PURE__ */ jsx24(Label4, { className: "slider-label", children: label }),
          showOutput && /* @__PURE__ */ jsx24(SliderOutput, { className: "slider-output" })
        ] }),
        /* @__PURE__ */ jsx24(SliderTrack, { className: "slider-track", children: ({ state }) => {
          const left = state.getThumbPercent(0) * 100;
          const right = state.getThumbPercent(1) * 100;
          return /* @__PURE__ */ jsxs21(Fragment5, { children: [
            /* @__PURE__ */ jsx24(
              "div",
              {
                className: "slider-track-fill",
                style: { left: `${left}%`, width: `${right - left}%` }
              }
            ),
            /* @__PURE__ */ jsx24(SliderThumb, { className: "slider-thumb", index: 0 }),
            /* @__PURE__ */ jsx24(SliderThumb, { className: "slider-thumb", index: 1 })
          ] });
        } })
      ]
    }
  );
}

// src/TitanProgressBar.tsx
import { Label as Label5, ProgressBar } from "react-aria-components";
import { Fragment as Fragment6, jsx as jsx25, jsxs as jsxs22 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx25(
    ProgressBar,
    {
      className: `progress-root ${className}`.trim(),
      value,
      minValue,
      maxValue,
      formatOptions,
      children: ({ valueText }) => /* @__PURE__ */ jsxs22(Fragment6, { children: [
        (label || showValue) && /* @__PURE__ */ jsxs22("div", { className: "progress-header", children: [
          label && /* @__PURE__ */ jsx25(Label5, { className: "progress-label", children: label }),
          showValue && /* @__PURE__ */ jsx25("span", { className: "progress-value", children: valueText })
        ] }),
        /* @__PURE__ */ jsx25("div", { className: "progress-track", children: /* @__PURE__ */ jsx25("div", { className: "progress-fill", style: { width: `${percent}%` } }) })
      ] })
    }
  );
}

// src/TitanCalendar.tsx
import { useCallback as useCallback3, useEffect, useMemo, useRef as useRef2, useState as useState2 } from "react";
import {
  Button as Button12,
  Calendar,
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
import { jsx as jsx26, jsxs as jsxs23 } from "react/jsx-runtime";
var ChevronLeft4 = () => /* @__PURE__ */ jsx26("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ jsx26("path", { d: "M10 12L6 8l4-4", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) });
var ChevronRight6 = () => /* @__PURE__ */ jsx26("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ jsx26("path", { d: "M6 4l4 4-4 4", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) });
var ChevronDown5 = () => /* @__PURE__ */ jsx26("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ jsx26("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) });
function CalendarDropdown({
  options,
  value,
  onChange,
  className = ""
}) {
  const [open, setOpen] = useState2(false);
  const [flipUp, setFlipUp] = useState2(false);
  const ref = useRef2(null);
  const listRef = useRef2(null);
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
  return /* @__PURE__ */ jsxs23("div", { className: `cal-dropdown ${className}`.trim(), ref, children: [
    /* @__PURE__ */ jsxs23(
      "button",
      {
        type: "button",
        className: "cal-dropdown-trigger",
        onClick: () => setOpen(!open),
        "aria-haspopup": "listbox",
        "aria-expanded": open,
        children: [
          /* @__PURE__ */ jsx26("span", { children: selected?.label ?? "" }),
          /* @__PURE__ */ jsx26(ChevronDown5, {})
        ]
      }
    ),
    open && /* @__PURE__ */ jsx26(
      "ul",
      {
        className: `cal-dropdown-menu${flipUp ? " cal-dropdown-menu-flip" : ""}`,
        role: "listbox",
        ref: listRef,
        children: options.map((o) => /* @__PURE__ */ jsx26(
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
  const [focusedDate, setFocusedDate] = useState2(initial);
  const [hour, setHour] = useState2(defaultHour);
  const [minute, setMinute] = useState2(defaultMinute);
  const months = useMemo(() => {
    const fmt = new Intl.DateTimeFormat(void 0, { month: "long" });
    return Array.from({ length: 12 }, (_, i) => ({
      value: i + 1,
      label: fmt.format(new Date(2024, i, 1))
    }));
  }, []);
  const years = useMemo(() => {
    const y = today(tz).year;
    return Array.from({ length: 201 }, (_, i) => y - 100 + i);
  }, [tz]);
  const yearOptions = useMemo(
    () => years.map((y) => ({ value: y, label: String(y) })),
    [years]
  );
  return /* @__PURE__ */ jsxs23("div", { className: `calendar-wrapper ${className}`.trim(), children: [
    /* @__PURE__ */ jsxs23(
      Calendar,
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
          /* @__PURE__ */ jsxs23("header", { className: "calendar-header", children: [
            /* @__PURE__ */ jsx26(Button12, { slot: "previous", className: "calendar-nav-btn", children: /* @__PURE__ */ jsx26(ChevronLeft4, {}) }),
            /* @__PURE__ */ jsxs23("div", { className: "calendar-selects", children: [
              /* @__PURE__ */ jsx26(
                CalendarDropdown,
                {
                  options: months,
                  value: focusedDate.month,
                  onChange: (m) => setFocusedDate(focusedDate.set({ month: m }))
                }
              ),
              /* @__PURE__ */ jsx26(
                CalendarDropdown,
                {
                  className: "cal-dropdown-year",
                  options: yearOptions,
                  value: focusedDate.year,
                  onChange: (y) => setFocusedDate(focusedDate.set({ year: y }))
                }
              )
            ] }),
            /* @__PURE__ */ jsx26(Button12, { slot: "next", className: "calendar-nav-btn", children: /* @__PURE__ */ jsx26(ChevronRight6, {}) })
          ] }),
          /* @__PURE__ */ jsxs23(CalendarGrid, { className: "calendar-grid", children: [
            /* @__PURE__ */ jsx26(CalendarGridHeader, { children: (day) => /* @__PURE__ */ jsx26(CalendarHeaderCell, { className: "calendar-header-cell" }) }),
            /* @__PURE__ */ jsx26(CalendarGridBody, { children: (date) => /* @__PURE__ */ jsx26(CalendarCell, { date, className: "calendar-cell" }) })
          ] })
        ]
      }
    ),
    showTime && /* @__PURE__ */ jsxs23("div", { className: "calendar-time", children: [
      /* @__PURE__ */ jsxs23("div", { className: "calendar-time-field", children: [
        /* @__PURE__ */ jsx26("label", { className: "calendar-time-label", children: "Hour" }),
        /* @__PURE__ */ jsx26(
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
      /* @__PURE__ */ jsx26("span", { className: "calendar-time-separator", children: ":" }),
      /* @__PURE__ */ jsxs23("div", { className: "calendar-time-field", children: [
        /* @__PURE__ */ jsx26("label", { className: "calendar-time-label", children: "Minute" }),
        /* @__PURE__ */ jsx26(
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
export {
  Cell,
  Checkbox2 as Checkbox,
  Column,
  Row,
  TableBody,
  TableHeader,
  TitanBadge,
  TitanBadgeAnchor,
  TitanBorderlessTable,
  TitanBreadcrumb,
  TitanButton,
  TitanCalendar,
  TitanCard,
  TitanCardGrid,
  TitanCheckboxField,
  TitanDialog,
  TitanDrawer,
  TitanFormControlsGroup,
  TitanIconButton,
  TitanInputField,
  TitanLoader,
  TitanMenuDropdown,
  TitanNavbar,
  TitanNotificationsMenu,
  TitanPagination,
  TitanPill,
  TitanProfileMenu,
  TitanProgressBar,
  TitanRadioGroupField,
  TitanRangeSlider,
  TitanSearchMenu,
  TitanSelect,
  TitanSidebar,
  TitanSidebarHeader,
  TitanSidebarItem,
  TitanSlider,
  TitanSwitchField,
  TitanTable,
  TitanTabs,
  TitanTag,
  TitanTextareaField,
  TitanToastRegion,
  TitanToggleButtonGroup,
  TitanTooltip,
  TitanTwoUpOneDownLayout,
  getToneStyle,
  registerFallbackIcons,
  renderIconNode,
  resolveIcon
};
