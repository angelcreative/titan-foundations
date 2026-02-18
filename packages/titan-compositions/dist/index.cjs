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
  TitanCard: () => TitanCard,
  TitanCardGrid: () => TitanCardGrid,
  TitanCheckboxField: () => TitanCheckboxField,
  TitanDialog: () => TitanDialog,
  TitanDrawer: () => TitanDrawer,
  TitanFormControlsGroup: () => TitanFormControlsGroup,
  TitanIconButton: () => TitanIconButton,
  TitanInputField: () => TitanInputField,
  TitanMenuDropdown: () => TitanMenuDropdown,
  TitanNavbar: () => TitanNavbar,
  TitanPagination: () => TitanPagination,
  TitanPill: () => TitanPill,
  TitanRadioGroupField: () => TitanRadioGroupField,
  TitanSelect: () => TitanSelect,
  TitanSidebar: () => TitanSidebar,
  TitanSidebarHeader: () => TitanSidebarHeader,
  TitanSidebarItem: () => TitanSidebarItem,
  TitanSwitchField: () => TitanSwitchField,
  TitanTabs: () => TitanTabs,
  TitanTag: () => TitanTag,
  TitanTextareaField: () => TitanTextareaField,
  TitanToastRegion: () => TitanToastRegion,
  TitanToggleButtonGroup: () => TitanToggleButtonGroup,
  TitanTooltip: () => TitanTooltip,
  TitanTwoUpOneDownLayout: () => TitanTwoUpOneDownLayout,
  getToneStyle: () => getToneStyle
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
function TitanTooltip({
  content,
  children,
  delay = 0,
  closeDelay = 0
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_react_aria_components11.TooltipTrigger, { delay, closeDelay, children: [
    children,
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react_aria_components11.Tooltip, { className: "tooltip-box", children: content })
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
  isDisabled = false,
  defaultSelected = false
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_react_aria_components13.Checkbox, { className: "checkbox-root", isDisabled, defaultSelected, children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "checkbox-box", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react9.Check, { className: "checkbox-mark" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "choice-text", children: label })
  ] });
}
function TitanRadioGroupField({
  label,
  options,
  defaultValue
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_react_aria_components13.RadioGroup, { className: "choice-group", defaultValue, children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react_aria_components13.Label, { className: "choice-group-label", children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "choice-list", children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_react_aria_components13.Radio, { className: "radio-root", value: option.value, isDisabled: option.disabled, children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "radio-box", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "radio-dot" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "choice-text", children: option.label })
    ] }, option.value)) })
  ] });
}
function TitanSwitchField({
  label,
  isDisabled = false,
  defaultSelected = false
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_react_aria_components13.Switch, { className: "switch-root", isDisabled, defaultSelected, children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "choice-text", children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "switch-track", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "switch-thumb" }) })
  ] });
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
var import_react = require("react");
var import_react_aria_components16 = require("react-aria-components");
var import_lucide_react10 = require("lucide-react");
var import_jsx_runtime20 = require("react/jsx-runtime");
var SidebarContext = (0, import_react.createContext)({
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
  const [uncontrolledActiveId, setUncontrolledActiveId] = (0, import_react.useState)(
    defaultActiveId ?? null
  );
  const isControlled = controlledActiveId !== void 0;
  const activeId = isControlled ? controlledActiveId : uncontrolledActiveId;
  const setActiveId = (0, import_react.useCallback)(
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
            children: collapsed ? /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_lucide_react10.ChevronRight, {}) : /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_lucide_react10.ChevronLeft, {})
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
  icon: Icon,
  onPress,
  children
}) {
  const { collapsed, activeId, setActiveId } = (0, import_react.useContext)(SidebarContext);
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
        Icon && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Icon, {}),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "titan-sidebar-item-label", children })
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  TitanBorderlessTable,
  TitanBreadcrumb,
  TitanButton,
  TitanCard,
  TitanCardGrid,
  TitanCheckboxField,
  TitanDialog,
  TitanDrawer,
  TitanFormControlsGroup,
  TitanIconButton,
  TitanInputField,
  TitanMenuDropdown,
  TitanNavbar,
  TitanPagination,
  TitanPill,
  TitanRadioGroupField,
  TitanSelect,
  TitanSidebar,
  TitanSidebarHeader,
  TitanSidebarItem,
  TitanSwitchField,
  TitanTabs,
  TitanTag,
  TitanTextareaField,
  TitanToastRegion,
  TitanToggleButtonGroup,
  TitanTooltip,
  TitanTwoUpOneDownLayout,
  getToneStyle
});
