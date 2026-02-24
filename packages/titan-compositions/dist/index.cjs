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
  TitanBorderlessTable: () => TitanBorderlessTable,
  TitanBreadcrumb: () => TitanBreadcrumb,
  TitanButton: () => TitanButton,
  TitanCalendar: () => TitanCalendar,
  TitanCard: () => TitanCard,
  TitanCardGrid: () => TitanCardGrid,
  TitanCheckboxField: () => TitanCheckboxField,
  TitanDialog: () => TitanDialog,
  TitanDrawer: () => TitanDrawer,
  TitanFormControlsGroup: () => TitanFormControlsGroup,
  TitanIconButton: () => TitanIconButton,
  TitanInputField: () => TitanInputField,
  TitanLoader: () => TitanLoader,
  TitanMenuDropdown: () => TitanMenuDropdown,
  TitanNavbar: () => TitanNavbar,
  TitanPagination: () => TitanPagination,
  TitanPill: () => TitanPill,
  TitanProgressBar: () => TitanProgressBar,
  TitanRadioGroupField: () => TitanRadioGroupField,
  TitanRangeSlider: () => TitanRangeSlider,
  TitanSelect: () => TitanSelect,
  TitanSidebar: () => TitanSidebar,
  TitanSidebarHeader: () => TitanSidebarHeader,
  TitanSidebarItem: () => TitanSidebarItem,
  TitanSlider: () => TitanSlider,
  TitanSwitchField: () => TitanSwitchField,
  TitanTabs: () => TitanTabs,
  TitanTag: () => TitanTag,
  TitanTextareaField: () => TitanTextareaField,
  TitanToastRegion: () => TitanToastRegion,
  TitanToggleButtonGroup: () => TitanToggleButtonGroup,
  TitanTooltip: () => TitanTooltip,
  TitanTwoUpOneDownLayout: () => TitanTwoUpOneDownLayout,
  getToneStyle: () => getToneStyle,
  registerFallbackIcons: () => registerFallbackIcons,
  renderIconNode: () => renderIconNode,
  resolveIcon: () => resolveIcon
});
module.exports = __toCommonJS(index_exports);

// src/TitanBreadcrumb.tsx
var import_react_aria_components = require("react-aria-components");
var import_lucide_react = require("lucide-react");
var import_jsx_runtime = require("react/jsx-runtime");
function TitanBreadcrumb({
  items,
  currentLabel,
  ariaLabel = "Breadcrumb"
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react_aria_components.Breadcrumbs, { className: "breadcrumb-nav", "aria-label": ariaLabel, children: [
    items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react_aria_components.Breadcrumb, { className: "breadcrumb-item", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_aria_components.Button, { className: "breadcrumb-link", onPress: item.onPress, children: item.label }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "breadcrumb-separator", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronRight, {}) })
    ] }, item.id)),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_aria_components.Breadcrumb, { className: "breadcrumb-item", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "breadcrumb-current", "aria-current": "page", children: currentLabel }) })
  ] });
}

// src/TitanNavbar.tsx
var import_react_aria_components2 = require("react-aria-components");
var import_lucide_react2 = require("lucide-react");
var import_jsx_runtime2 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("header", { className: "navbar", role: "banner", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "navbar-inner", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "navbar-left-group", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_aria_components2.Button, { className: "icon-ghost navbar-icon-button", "aria-label": "Change product", onPress: onChangeProduct, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react2.Grip, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("img", { className: "navbar-logo", src: `${logoBasePath}/${logoFile}`, alt: logoAlt })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "navbar-right-group", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_aria_components2.Button, { className: "icon-ghost navbar-icon-button", "aria-label": "Notifications", onPress: onNotifications, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react2.Bell, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_aria_components2.Button, { className: "icon-ghost navbar-icon-button", "aria-label": "Support and community", onPress: onSupport, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react2.Handshake, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_aria_components2.Button, { className: "icon-ghost navbar-icon-button", "aria-label": "Help", onPress: onHelp, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react2.CircleHelp, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_aria_components2.Button, { className: "icon-ghost navbar-icon-button", "aria-label": "Settings", onPress: onSettings, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react2.Settings, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_aria_components2.Button, { className: "icon-ghost navbar-icon-button", "aria-label": "Featured action", onPress: onFeaturedAction, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react2.Sparkles, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "navbar-user", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "navbar-avatar", "aria-hidden": "true", children: userInitial }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_aria_components2.Button, { className: "icon-ghost navbar-chevron-button", "aria-label": "User menu", onPress: onUserMenu, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react2.ChevronDown, {}) })
      ] })
    ] })
  ] }) });
}

// src/TitanButton.tsx
var import_react_aria_components3 = require("react-aria-components");
var import_jsx_runtime3 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_react_aria_components3.Button, { className: mergedClassName, ...props, children: [
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_aria_components3.Button, { className: mergedClassName, ...props, children });
}

// src/TitanPill.tsx
var import_react_aria_components4 = require("react-aria-components");
var import_lucide_react3 = require("lucide-react");
var import_jsx_runtime4 = require("react/jsx-runtime");
function TitanPill({ id, label, tone, onDismiss }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "pill", style: getToneStyle(tone, "pill"), children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: label }),
    onDismiss ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_aria_components4.Button, { className: "pill-close", "aria-label": `Remove ${label}`, onPress: () => onDismiss(id), children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react3.X, {}) }) : null
  ] });
}

// src/TitanTag.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function TitanTag({ label, tone }) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "tag-chip", style: getToneStyle(tone, "tag"), children: label });
}

// src/TitanMenu.tsx
var import_react_aria_components5 = require("react-aria-components");
var import_lucide_react4 = require("lucide-react");
var import_jsx_runtime6 = require("react/jsx-runtime");
function TitanMenuNode({
  item,
  onAction
}) {
  if (item.children?.length) {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_react_aria_components5.SubmenuTrigger, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_react_aria_components5.MenuItem, { className: "menu-item", textValue: item.label, children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { className: "menu-item-start", children: [
          item.icon ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "menu-item-icon", children: item.icon }) : null,
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: item.label })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "menu-item-end", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react4.ChevronRight, {}) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_aria_components5.Popover, { className: "menu-popover menu-popover-submenu", placement: "end top", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_aria_components5.Menu, { className: "menu-list", children: item.children.map((child) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(TitanMenuNode, { item: child, onAction }, child.id)) }) })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    import_react_aria_components5.MenuItem,
    {
      className: item.destructive ? "menu-item menu-item-destructive" : "menu-item",
      textValue: item.label,
      isDisabled: item.disabled,
      onAction: () => onAction?.(item.id),
      children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { className: "menu-item-start", children: [
        item.icon ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "menu-item-icon", children: item.icon }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: item.label })
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
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_react_aria_components5.MenuTrigger, { children: [
    iconOnly ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_aria_components5.Button, { className: "icon-ghost menu-trigger-icon-ghost", "aria-label": triggerLabel, children: triggerIcon }) : /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_react_aria_components5.Button, { className: "btn btn-secondary menu-trigger-button", children: [
      triggerLabel,
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "menu-trigger-chevron", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react4.ChevronDown, {}) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_aria_components5.Popover, { className: "menu-popover", placement, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_aria_components5.Menu, { className: "menu-list", children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(TitanMenuNode, { item, onAction }, item.id)) }) })
  ] });
}

// src/TitanSelect.tsx
var import_react_aria_components6 = require("react-aria-components");
var import_lucide_react5 = require("lucide-react");
var import_jsx_runtime7 = require("react/jsx-runtime");
function TitanSelect({
  label,
  options,
  defaultSelectedKey,
  selectedKey,
  onSelectionChange,
  isDisabled = false
}) {
  const selectionProps = selectedKey !== void 0 ? { selectedKey, onSelectionChange } : { defaultSelectedKey };
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
    import_react_aria_components6.Select,
    {
      className: "select-root",
      ...selectionProps,
      isDisabled,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_aria_components6.Label, { className: "select-label", children: label }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_react_aria_components6.Button, { className: "select-trigger", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_aria_components6.SelectValue, {}),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "select-trigger-chevron", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react5.ChevronDown, {}) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_aria_components6.Popover, { className: "select-popover", placement: "bottom start", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_aria_components6.ListBox, { className: "select-list", children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          import_react_aria_components6.ListBoxItem,
          {
            id: option.id,
            className: "select-item",
            isDisabled: option.disabled,
            textValue: option.label,
            children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: "select-item-start", children: [
              option.icon ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "select-item-icon", children: option.icon }) : null,
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: option.label })
            ] })
          },
          option.id
        )) }) })
      ]
    }
  );
}

// src/TitanTabs.tsx
var import_react_aria_components7 = require("react-aria-components");
var import_jsx_runtime8 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
    import_react_aria_components7.Tabs,
    {
      className: rootClass,
      defaultSelectedKey,
      orientation,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_aria_components7.TabList, { className: listClass, "aria-label": ariaLabel, children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          import_react_aria_components7.Tab,
          {
            id: item.id,
            className: isVertical ? "tab-trigger tab-trigger-vertical" : "tab-trigger",
            isDisabled: item.disabled,
            children: item.label
          },
          item.id
        )) }),
        items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_aria_components7.TabPanel, { id: item.id, className: "tab-panel", children: item.content }, item.id))
      ]
    }
  );
}

// src/TitanPagination.tsx
var import_react_aria_components8 = require("react-aria-components");
var import_lucide_react6 = require("lucide-react");
var import_jsx_runtime9 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("nav", { className: "pagination-nav", "aria-label": ariaLabel, children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react_aria_components8.Button, { className: "pagination-button pagination-nav-button", isDisabled: previousDisabled, "aria-label": "Previous page", onPress: onPrevious, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react6.ChevronLeft, {}) }),
    pages.map(
      (page, index) => page === "ellipsis" ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "pagination-ellipsis", "aria-hidden": "true", children: "..." }, `ellipsis-${index}`) : /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        import_react_aria_components8.Button,
        {
          className: page === currentPage ? "pagination-button pagination-page-button pagination-page-button-selected" : "pagination-button pagination-page-button",
          "aria-current": page === currentPage ? "page" : void 0,
          onPress: () => onPageChange?.(page),
          children: page
        },
        `${ariaLabel}-${page}`
      )
    ),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react_aria_components8.Button, { className: "pagination-button pagination-nav-button", isDisabled: nextDisabled, "aria-label": "Next page", onPress: onNext, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react6.ChevronRight, {}) })
  ] });
}

// src/TitanDrawer.tsx
var import_react_aria_components9 = require("react-aria-components");
var import_lucide_react7 = require("lucide-react");
var import_jsx_runtime10 = require("react/jsx-runtime");
function TitanDrawer({ triggerLabel, title, children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_react_aria_components9.DialogTrigger, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react_aria_components9.Button, { className: "btn btn-secondary", children: triggerLabel }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react_aria_components9.ModalOverlay, { isDismissable: true, className: "drawer-overlay", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react_aria_components9.Modal, { className: "drawer-modal", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react_aria_components9.Dialog, { className: "drawer-panel", children: ({ close }) => /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("header", { className: "drawer-header", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h3", { className: "drawer-title", children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react_aria_components9.Button, { className: "icon-ghost drawer-close-button", "aria-label": "Close drawer", onPress: close, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_lucide_react7.X, {}) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "drawer-body", children })
    ] }) }) }) })
  ] });
}

// src/TitanDialog.tsx
var import_react_aria_components10 = require("react-aria-components");
var import_jsx_runtime11 = require("react/jsx-runtime");
function TitanDialog({
  triggerLabel,
  title,
  body,
  leftAction,
  rightAction
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_react_aria_components10.DialogTrigger, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react_aria_components10.Button, { className: "btn btn-secondary", children: triggerLabel }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react_aria_components10.ModalOverlay, { isDismissable: true, className: "dialog-overlay", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react_aria_components10.Modal, { className: "dialog-modal", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_react_aria_components10.Dialog, { className: "dialog-panel", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("header", { className: "dialog-header", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h3", { className: "dialog-title", children: title }) }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "dialog-body", children: body }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("footer", { className: "dialog-footer", children: [
        leftAction,
        rightAction
      ] })
    ] }) }) })
  ] });
}

// src/TitanTooltip.tsx
var import_react_aria_components11 = require("react-aria-components");
var import_jsx_runtime12 = require("react/jsx-runtime");
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
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_jsx_runtime12.Fragment, { children: [
      title != null && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "tooltip-title", children: title }),
      body != null && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "tooltip-body", children: body })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_jsx_runtime12.Fragment, { children: content });
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
  if (!hasContent) return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_jsx_runtime12.Fragment, { children });
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_react_aria_components11.TooltipTrigger, { delay, closeDelay, children: [
    children,
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
      import_react_aria_components11.Tooltip,
      {
        className: "tooltip-box",
        placement: toAriaPlacement(placement),
        shouldFlip,
        offset: 8,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react_aria_components11.OverlayArrow, { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("svg", { width: 10, height: 6, viewBox: "0 0 10 6", "aria-hidden": true, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("path", { d: "M0 0 L5 6 L10 0 Z", fill: "var(--tooltip-slot-bg)" }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(TooltipContent, { content, title, body })
        ]
      }
    )
  ] });
}

// src/TitanToast.tsx
var import_react_aria_components12 = require("react-aria-components");
var import_lucide_react8 = require("lucide-react");
var import_jsx_runtime13 = require("react/jsx-runtime");
function TitanToastRegion({ toasts, onDismiss }) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "toast-region", role: "region", "aria-label": "Notifications", "aria-live": "polite", children: toasts.map((toast) => /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("article", { className: `toast-card toast-${toast.variant}`, role: "status", children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "toast-content", children: [
      toast.icon ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "toast-icon", "aria-hidden": "true", children: toast.icon }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "toast-text", children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("strong", { children: toast.title }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { children: toast.body })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react_aria_components12.Button, { className: "icon-ghost toast-close-button", "aria-label": "Dismiss toast", onPress: () => onDismiss(toast.id), children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_lucide_react8.X, {}) })
  ] }, toast.id)) });
}

// src/TitanFormControls.tsx
var import_react_aria_components13 = require("react-aria-components");
var import_lucide_react9 = require("lucide-react");
var import_jsx_runtime14 = require("react/jsx-runtime");
function TitanCheckboxField({
  label,
  name,
  isDisabled = false,
  isSelected,
  defaultSelected = false,
  onChange
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
    import_react_aria_components13.Checkbox,
    {
      className: "checkbox-root",
      name,
      isDisabled,
      isSelected,
      defaultSelected,
      onChange,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "checkbox-box", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react9.Check, { className: "checkbox-mark" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "choice-text", children: label })
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
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
    import_react_aria_components13.RadioGroup,
    {
      className: "choice-group",
      name,
      value,
      defaultValue,
      onChange,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react_aria_components13.Label, { className: "choice-group-label", children: label }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "choice-list", children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
          import_react_aria_components13.Radio,
          {
            className: "radio-root",
            value: option.value,
            isDisabled: option.disabled,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "radio-box", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "radio-dot" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "choice-text", children: option.label })
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
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
    import_react_aria_components13.Switch,
    {
      className: "switch-root",
      name,
      isDisabled,
      isSelected,
      defaultSelected,
      onChange,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "choice-text", children: label }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "switch-track", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "switch-thumb" }) })
      ]
    }
  );
}
function TitanFormControlsGroup({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "form-controls-grid", children });
}

// src/TitanInput.tsx
var import_react_aria_components14 = require("react-aria-components");
var import_jsx_runtime15 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(import_react_aria_components14.TextField, { className, ...props, children: [
    label ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_react_aria_components14.Label, { className: "field-label", children: label }) : null,
    leadingIcon || trailingIcon ? /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(import_react_aria_components14.Group, { className: iconContainerClass, children: [
      leadingIcon ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "input-leading-icon", children: leadingIcon }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_react_aria_components14.Input, { className: "input-field", placeholder }),
      trailingIcon ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "input-trailing-icon", children: trailingIcon }) : null
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_react_aria_components14.Input, { className: "input-field", placeholder }),
    hint || counter ? /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "field-help-row", children: [
      hint ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_react_aria_components14.Text, { slot: "description", className: "field-hint", children: hint }) : /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", {}),
      counter ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "field-counter", children: counter }) : null
    ] }) : null,
    errorMessage ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_react_aria_components14.FieldError, { className: "field-error", children: errorMessage }) : null
  ] });
}
function TitanTextareaField({
  label,
  hint,
  counter,
  errorMessage,
  placeholder,
  className = "field-root",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(import_react_aria_components14.TextField, { className, ...props, children: [
    label ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_react_aria_components14.Label, { className: "field-label", children: label }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_react_aria_components14.TextArea, { className: "textarea-field", placeholder }),
    hint || counter ? /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "field-help-row", children: [
      hint ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_react_aria_components14.Text, { slot: "description", className: "field-hint", children: hint }) : /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", {}),
      counter ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "field-counter", children: counter }) : null
    ] }) : null,
    errorMessage ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_react_aria_components14.FieldError, { className: "field-error", children: errorMessage }) : null
  ] });
}

// src/TitanCardGrid.tsx
var import_jsx_runtime16 = require("react/jsx-runtime");
function TitanCardGrid({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "cards-layout-grid", children });
}
function TitanCard({ children, span = 16, className = "" }) {
  const spanClass = `span-${span}`;
  const mergedClassName = ["card", "layout-card", spanClass, className].filter(Boolean).join(" ");
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("article", { className: mergedClassName, children });
}

// src/TitanBorderlessTable.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
function TitanBorderlessTable({ columns, rows }) {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "layout-table-wrap", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("table", { className: "table-borderless", children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("tr", { children: columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("th", { scope: "col", children: column.header }, column.key)) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("tbody", { children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("tr", { children: columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("td", { children: column.render ? column.render(row) : row[column.key] }, `${row.id}-${column.key}`)) }, row.id)) })
  ] }) });
}

// src/TitanTwoUpOneDownLayout.tsx
var import_jsx_runtime18 = require("react/jsx-runtime");
function TitanTwoUpOneDownLayout({
  theme = "insights",
  userInitial = "A",
  breadcrumbItems,
  breadcrumbCurrentLabel,
  leftTop,
  rightTop,
  bottom
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(import_jsx_runtime18.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(TitanNavbar, { theme, userInitial }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("main", { className: "page", children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("section", { className: "card", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(TitanBreadcrumb, { items: breadcrumbItems, currentLabel: breadcrumbCurrentLabel }) }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(TitanCardGrid, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(TitanCard, { span: 8, children: leftTop }),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(TitanCard, { span: 8, children: rightTop }),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(TitanCard, { span: 16, children: bottom })
      ] })
    ] })
  ] });
}

// src/TitanToggleButtonGroup.tsx
var import_react_aria_components15 = require("react-aria-components");
var import_jsx_runtime19 = require("react/jsx-runtime");
function TitanToggleButtonGroup({
  items,
  selectedKey,
  defaultSelectedKey,
  onSelectionChange,
  ariaLabel = "Options"
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    import_react_aria_components15.ToggleButtonGroup,
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
      children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_react_aria_components15.ToggleButton, { id: item.id, className: "toggle-button-item", children: [
        item.icon && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "toggle-button-icon", children: item.icon }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { children: item.label })
      ] }, item.id))
    }
  );
}

// src/TitanSidebar.tsx
var import_react2 = require("react");
var import_react_aria_components16 = require("react-aria-components");
var import_lucide_react11 = require("lucide-react");

// src/icons/renderIconNode.tsx
var import_react = require("react");

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
var import_lucide_react10 = require("lucide-react");
var LUCIDE_REGISTRY = {
  "bell": import_lucide_react10.Bell,
  "bell-ring": import_lucide_react10.BellRing,
  "box": import_lucide_react10.Box,
  "check": import_lucide_react10.Check,
  "chevron-down": import_lucide_react10.ChevronDown,
  "chevron-left": import_lucide_react10.ChevronLeft,
  "chevron-right": import_lucide_react10.ChevronRight,
  "circle-help": import_lucide_react10.CircleHelp,
  "grip": import_lucide_react10.Grip,
  "handshake": import_lucide_react10.Handshake,
  "hash": import_lucide_react10.Hash,
  "info": import_lucide_react10.Info,
  "layers": import_lucide_react10.Layers,
  "layout-dashboard": import_lucide_react10.LayoutDashboard,
  "list-filter": import_lucide_react10.ListFilter,
  "loader": import_lucide_react10.Loader2,
  "loader-2": import_lucide_react10.Loader2,
  "message-square": import_lucide_react10.MessageSquare,
  "mouse-pointer-click": import_lucide_react10.MousePointerClick,
  "navigation": import_lucide_react10.Navigation,
  "panel-left": import_lucide_react10.PanelLeft,
  "panel-right": import_lucide_react10.PanelRight,
  "search": import_lucide_react10.Search,
  "settings": import_lucide_react10.Settings,
  "sparkles": import_lucide_react10.Sparkles,
  "tag": import_lucide_react10.Tag,
  "text-cursor-input": import_lucide_react10.TextCursorInput,
  "toggle-left": import_lucide_react10.ToggleLeft,
  "type": import_lucide_react10.Type,
  "x": import_lucide_react10.X
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
    if (Resolved) return (0, import_react.createElement)(Resolved, props ?? {});
    return null;
  }
  if ((0, import_react.isValidElement)(icon)) return icon;
  if (isComponentType(icon)) return (0, import_react.createElement)(icon, props ?? {});
  return icon;
}

// src/TitanSidebar.tsx
var import_jsx_runtime20 = require("react/jsx-runtime");
var SidebarContext = (0, import_react2.createContext)({
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
  const [uncontrolledActiveId, setUncontrolledActiveId] = (0, import_react2.useState)(
    defaultActiveId ?? null
  );
  const isControlled = controlledActiveId !== void 0;
  const activeId = isControlled ? controlledActiveId : uncontrolledActiveId;
  const setActiveId = (0, import_react2.useCallback)(
    (id) => {
      if (!isControlled) setUncontrolledActiveId(id);
      onActiveChange?.(id);
    },
    [isControlled, onActiveChange]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(SidebarContext.Provider, { value: { collapsed, activeId, setActiveId }, children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
    "aside",
    {
      className: "titan-sidebar",
      ...collapsed ? { "data-collapsed": "" } : {},
      children: [
        onToggle && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
          import_react_aria_components16.Button,
          {
            className: "titan-sidebar-toggle",
            onPress: onToggle,
            "aria-label": collapsed ? "Expand sidebar" : "Collapse sidebar",
            children: collapsed ? /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_lucide_react11.ChevronRight, {}) : /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_lucide_react11.ChevronLeft, {})
          }
        ),
        children
      ]
    }
  ) });
}
function TitanSidebarHeader({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "titan-sidebar-header", children });
}
function TitanSidebarItem({
  id,
  icon,
  onPress,
  children
}) {
  const { collapsed, activeId, setActiveId } = (0, import_react2.useContext)(SidebarContext);
  const isActive = activeId === id;
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
    import_react_aria_components16.Button,
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
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "titan-sidebar-item-label", children })
      ]
    }
  );
}

// src/TitanLoader.tsx
var import_jsx_runtime21 = require("react/jsx-runtime");
var LOADER_CDN_BASE = "https://cdn.jsdelivr.net/gh/angelcreative/titan-foundations@main/public/assets/logos";
function TitanLoader({
  size = 120,
  label = "Loading\u2026",
  className = "",
  style,
  loaderBasePath = LOADER_CDN_BASE
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
    "div",
    {
      className: `titan-loader ${className}`.trim(),
      role: "status",
      "aria-label": label,
      style,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "titan-loader-sr-only", children: label })
      ]
    }
  );
}

// src/TitanSlider.tsx
var import_react_aria_components17 = require("react-aria-components");
var import_jsx_runtime22 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
    import_react_aria_components17.Slider,
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
        (label || showOutput) && /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "slider-header", children: [
          label && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react_aria_components17.Label, { className: "slider-label", children: label }),
          showOutput && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react_aria_components17.SliderOutput, { className: "slider-output" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react_aria_components17.SliderTrack, { className: "slider-track", children: ({ state }) => /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(import_jsx_runtime22.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
            "div",
            {
              className: "slider-track-fill",
              style: { width: `${state.getThumbPercent(0) * 100}%` }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react_aria_components17.SliderThumb, { className: "slider-thumb", index: 0 })
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
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
    import_react_aria_components17.Slider,
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
        (label || showOutput) && /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "slider-header", children: [
          label && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react_aria_components17.Label, { className: "slider-label", children: label }),
          showOutput && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react_aria_components17.SliderOutput, { className: "slider-output" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react_aria_components17.SliderTrack, { className: "slider-track", children: ({ state }) => {
          const left = state.getThumbPercent(0) * 100;
          const right = state.getThumbPercent(1) * 100;
          return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(import_jsx_runtime22.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
              "div",
              {
                className: "slider-track-fill",
                style: { left: `${left}%`, width: `${right - left}%` }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react_aria_components17.SliderThumb, { className: "slider-thumb", index: 0 }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react_aria_components17.SliderThumb, { className: "slider-thumb", index: 1 })
          ] });
        } })
      ]
    }
  );
}

// src/TitanProgressBar.tsx
var import_react_aria_components18 = require("react-aria-components");
var import_jsx_runtime23 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
    import_react_aria_components18.ProgressBar,
    {
      className: `progress-root ${className}`.trim(),
      value,
      minValue,
      maxValue,
      formatOptions,
      children: ({ valueText }) => /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(import_jsx_runtime23.Fragment, { children: [
        (label || showValue) && /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "progress-header", children: [
          label && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_react_aria_components18.Label, { className: "progress-label", children: label }),
          showValue && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { className: "progress-value", children: valueText })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "progress-track", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "progress-fill", style: { width: `${percent}%` } }) })
      ] })
    }
  );
}

// src/TitanCalendar.tsx
var import_react3 = require("react");
var import_react_aria_components19 = require("react-aria-components");
var import_date = require("@internationalized/date");
var import_jsx_runtime24 = require("react/jsx-runtime");
var ChevronLeft4 = () => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("path", { d: "M10 12L6 8l4-4", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) });
var ChevronRight6 = () => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("path", { d: "M6 4l4 4-4 4", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) });
var ChevronDown5 = () => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) });
function CalendarDropdown({
  options,
  value,
  onChange,
  className = ""
}) {
  const [open, setOpen] = (0, import_react3.useState)(false);
  const [flipUp, setFlipUp] = (0, import_react3.useState)(false);
  const ref = (0, import_react3.useRef)(null);
  const listRef = (0, import_react3.useRef)(null);
  const selected = options.find((o) => o.value === value);
  const close = (0, import_react3.useCallback)(() => setOpen(false), []);
  (0, import_react3.useEffect)(() => {
    if (!open) return;
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) close();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open, close]);
  (0, import_react3.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: `cal-dropdown ${className}`.trim(), ref, children: [
    /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
      "button",
      {
        type: "button",
        className: "cal-dropdown-trigger",
        onClick: () => setOpen(!open),
        "aria-haspopup": "listbox",
        "aria-expanded": open,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { children: selected?.label ?? "" }),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(ChevronDown5, {})
        ]
      }
    ),
    open && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
      "ul",
      {
        className: `cal-dropdown-menu${flipUp ? " cal-dropdown-menu-flip" : ""}`,
        role: "listbox",
        ref: listRef,
        children: options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
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
  const [focusedDate, setFocusedDate] = (0, import_react3.useState)(initial);
  const [hour, setHour] = (0, import_react3.useState)(defaultHour);
  const [minute, setMinute] = (0, import_react3.useState)(defaultMinute);
  const months = (0, import_react3.useMemo)(() => {
    const fmt = new Intl.DateTimeFormat(void 0, { month: "long" });
    return Array.from({ length: 12 }, (_, i) => ({
      value: i + 1,
      label: fmt.format(new Date(2024, i, 1))
    }));
  }, []);
  const years = (0, import_react3.useMemo)(() => {
    const y = (0, import_date.today)(tz).year;
    return Array.from({ length: 201 }, (_, i) => y - 100 + i);
  }, [tz]);
  const yearOptions = (0, import_react3.useMemo)(
    () => years.map((y) => ({ value: y, label: String(y) })),
    [years]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: `calendar-wrapper ${className}`.trim(), children: [
    /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
      import_react_aria_components19.Calendar,
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
          /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("header", { className: "calendar-header", children: [
            /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react_aria_components19.Button, { slot: "previous", className: "calendar-nav-btn", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(ChevronLeft4, {}) }),
            /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "calendar-selects", children: [
              /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                CalendarDropdown,
                {
                  options: months,
                  value: focusedDate.month,
                  onChange: (m) => setFocusedDate(focusedDate.set({ month: m }))
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                CalendarDropdown,
                {
                  className: "cal-dropdown-year",
                  options: yearOptions,
                  value: focusedDate.year,
                  onChange: (y) => setFocusedDate(focusedDate.set({ year: y }))
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react_aria_components19.Button, { slot: "next", className: "calendar-nav-btn", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(ChevronRight6, {}) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(import_react_aria_components19.CalendarGrid, { className: "calendar-grid", children: [
            /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react_aria_components19.CalendarGridHeader, { children: (day) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react_aria_components19.CalendarHeaderCell, { className: "calendar-header-cell" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react_aria_components19.CalendarGridBody, { children: (date) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react_aria_components19.CalendarCell, { date, className: "calendar-cell" }) })
          ] })
        ]
      }
    ),
    showTime && /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "calendar-time", children: [
      /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "calendar-time-field", children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("label", { className: "calendar-time-label", children: "Hour" }),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: "calendar-time-separator", children: ":" }),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "calendar-time-field", children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("label", { className: "calendar-time-label", children: "Minute" }),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
  TitanPagination,
  TitanPill,
  TitanProgressBar,
  TitanRadioGroupField,
  TitanRangeSlider,
  TitanSelect,
  TitanSidebar,
  TitanSidebarHeader,
  TitanSidebarItem,
  TitanSlider,
  TitanSwitchField,
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
});
