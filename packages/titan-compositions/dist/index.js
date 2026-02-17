// src/TitanBreadcrumb.tsx
import { Breadcrumb, Breadcrumbs, Button } from "react-aria-components";
import { ChevronRight } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
function TitanBreadcrumb({
  items,
  currentLabel,
  ariaLabel = "Breadcrumb"
}) {
  return /* @__PURE__ */ jsxs(Breadcrumbs, { className: "breadcrumb-nav", "aria-label": ariaLabel, children: [
    items.map((item) => /* @__PURE__ */ jsxs(Breadcrumb, { className: "breadcrumb-item", children: [
      /* @__PURE__ */ jsx(Button, { className: "breadcrumb-link", onPress: item.onPress, children: item.label }),
      /* @__PURE__ */ jsx("span", { className: "breadcrumb-separator", "aria-hidden": "true", children: /* @__PURE__ */ jsx(ChevronRight, {}) })
    ] }, item.id)),
    /* @__PURE__ */ jsx(Breadcrumb, { className: "breadcrumb-item", children: /* @__PURE__ */ jsx("span", { className: "breadcrumb-current", "aria-current": "page", children: currentLabel }) })
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
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx2("header", { className: "navbar", role: "banner", children: /* @__PURE__ */ jsxs2("div", { className: "navbar-inner", children: [
    /* @__PURE__ */ jsxs2("div", { className: "navbar-left-group", children: [
      /* @__PURE__ */ jsx2(Button2, { className: "icon-ghost navbar-icon-button", "aria-label": "Change product", onPress: onChangeProduct, children: /* @__PURE__ */ jsx2(Grip, {}) }),
      /* @__PURE__ */ jsx2("img", { className: "navbar-logo", src: `${logoBasePath}/${logoFile}`, alt: logoAlt })
    ] }),
    /* @__PURE__ */ jsxs2("div", { className: "navbar-right-group", children: [
      /* @__PURE__ */ jsx2(Button2, { className: "icon-ghost navbar-icon-button", "aria-label": "Notifications", onPress: onNotifications, children: /* @__PURE__ */ jsx2(Bell, {}) }),
      /* @__PURE__ */ jsx2(Button2, { className: "icon-ghost navbar-icon-button", "aria-label": "Support and community", onPress: onSupport, children: /* @__PURE__ */ jsx2(Handshake, {}) }),
      /* @__PURE__ */ jsx2(Button2, { className: "icon-ghost navbar-icon-button", "aria-label": "Help", onPress: onHelp, children: /* @__PURE__ */ jsx2(CircleHelp, {}) }),
      /* @__PURE__ */ jsx2(Button2, { className: "icon-ghost navbar-icon-button", "aria-label": "Settings", onPress: onSettings, children: /* @__PURE__ */ jsx2(Settings, {}) }),
      /* @__PURE__ */ jsx2(Button2, { className: "icon-ghost navbar-icon-button", "aria-label": "Featured action", onPress: onFeaturedAction, children: /* @__PURE__ */ jsx2(Sparkles, {}) }),
      /* @__PURE__ */ jsxs2("div", { className: "navbar-user", children: [
        /* @__PURE__ */ jsx2("span", { className: "navbar-avatar", "aria-hidden": "true", children: userInitial }),
        /* @__PURE__ */ jsx2(Button2, { className: "icon-ghost navbar-chevron-button", "aria-label": "User menu", onPress: onUserMenu, children: /* @__PURE__ */ jsx2(ChevronDown, {}) })
      ] })
    ] })
  ] }) });
}

// src/TitanButton.tsx
import { Button as Button3 } from "react-aria-components";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
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
function getToneStyle(tone, mode) {
  if (mode === "pill") {
    return {
      "--pill-bg": `var(--color-${tone}-100)`,
      "--pill-color": `var(--color-${tone}-700)`
    };
  }
  return {
    "--tag-bg": `var(--color-${tone}-200)`,
    "--tag-color": `var(--color-${tone}-600)`
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
  return /* @__PURE__ */ jsxs3(Button3, { className: mergedClassName, ...props, children: [
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
  return /* @__PURE__ */ jsx3(Button3, { className: mergedClassName, ...props, children });
}

// src/TitanPill.tsx
import { Button as Button4 } from "react-aria-components";
import { X } from "lucide-react";
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
function TitanPill({ id, label, tone, onDismiss }) {
  return /* @__PURE__ */ jsxs4("div", { className: "pill", style: getToneStyle(tone, "pill"), children: [
    /* @__PURE__ */ jsx4("span", { children: label }),
    onDismiss ? /* @__PURE__ */ jsx4(Button4, { className: "pill-close", "aria-label": `Remove ${label}`, onPress: () => onDismiss(id), children: /* @__PURE__ */ jsx4(X, {}) }) : null
  ] });
}

// src/TitanTag.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
function TitanTag({ label, tone }) {
  return /* @__PURE__ */ jsx5("span", { className: "tag-chip", style: getToneStyle(tone, "tag"), children: label });
}

// src/TitanMenu.tsx
import {
  Button as Button5,
  Menu,
  MenuItem,
  MenuTrigger,
  Popover,
  SubmenuTrigger
} from "react-aria-components";
import { ChevronDown as ChevronDown2, ChevronRight as ChevronRight2 } from "lucide-react";
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
function TitanMenuNode({
  item,
  onAction
}) {
  if (item.children?.length) {
    return /* @__PURE__ */ jsxs5(SubmenuTrigger, { children: [
      /* @__PURE__ */ jsxs5(MenuItem, { className: "menu-item", textValue: item.label, children: [
        /* @__PURE__ */ jsxs5("span", { className: "menu-item-start", children: [
          item.icon ? /* @__PURE__ */ jsx6("span", { className: "menu-item-icon", children: item.icon }) : null,
          /* @__PURE__ */ jsx6("span", { children: item.label })
        ] }),
        /* @__PURE__ */ jsx6("span", { className: "menu-item-end", "aria-hidden": "true", children: /* @__PURE__ */ jsx6(ChevronRight2, {}) })
      ] }),
      /* @__PURE__ */ jsx6(Popover, { className: "menu-popover menu-popover-submenu", placement: "end top", children: /* @__PURE__ */ jsx6(Menu, { className: "menu-list", children: item.children.map((child) => /* @__PURE__ */ jsx6(TitanMenuNode, { item: child, onAction }, child.id)) }) })
    ] });
  }
  return /* @__PURE__ */ jsx6(
    MenuItem,
    {
      className: item.destructive ? "menu-item menu-item-destructive" : "menu-item",
      textValue: item.label,
      isDisabled: item.disabled,
      onAction: () => onAction?.(item.id),
      children: /* @__PURE__ */ jsxs5("span", { className: "menu-item-start", children: [
        item.icon ? /* @__PURE__ */ jsx6("span", { className: "menu-item-icon", children: item.icon }) : null,
        /* @__PURE__ */ jsx6("span", { children: item.label })
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
  return /* @__PURE__ */ jsxs5(MenuTrigger, { children: [
    iconOnly ? /* @__PURE__ */ jsx6(Button5, { className: "icon-ghost menu-trigger-icon-ghost", "aria-label": triggerLabel, children: triggerIcon }) : /* @__PURE__ */ jsxs5(Button5, { className: "btn btn-secondary menu-trigger-button", children: [
      triggerLabel,
      /* @__PURE__ */ jsx6("span", { className: "menu-trigger-chevron", "aria-hidden": "true", children: /* @__PURE__ */ jsx6(ChevronDown2, {}) })
    ] }),
    /* @__PURE__ */ jsx6(Popover, { className: "menu-popover", placement, children: /* @__PURE__ */ jsx6(Menu, { className: "menu-list", children: items.map((item) => /* @__PURE__ */ jsx6(TitanMenuNode, { item, onAction }, item.id)) }) })
  ] });
}

// src/TitanSelect.tsx
import {
  Button as Button6,
  Label,
  ListBox,
  ListBoxItem,
  Popover as Popover2,
  Select,
  SelectValue
} from "react-aria-components";
import { ChevronDown as ChevronDown3 } from "lucide-react";
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
function TitanSelect({
  label,
  options,
  defaultSelectedKey,
  isDisabled = false
}) {
  return /* @__PURE__ */ jsxs6(Select, { className: "select-root", defaultSelectedKey, isDisabled, children: [
    /* @__PURE__ */ jsx7(Label, { className: "select-label", children: label }),
    /* @__PURE__ */ jsxs6(Button6, { className: "select-trigger", children: [
      /* @__PURE__ */ jsx7(SelectValue, {}),
      /* @__PURE__ */ jsx7("span", { className: "select-trigger-chevron", "aria-hidden": "true", children: /* @__PURE__ */ jsx7(ChevronDown3, {}) })
    ] }),
    /* @__PURE__ */ jsx7(Popover2, { className: "select-popover", placement: "bottom start", children: /* @__PURE__ */ jsx7(ListBox, { className: "select-list", children: options.map((option) => /* @__PURE__ */ jsx7(
      ListBoxItem,
      {
        id: option.id,
        className: "select-item",
        isDisabled: option.disabled,
        textValue: option.label,
        children: /* @__PURE__ */ jsxs6("span", { className: "select-item-start", children: [
          option.icon ? /* @__PURE__ */ jsx7("span", { className: "select-item-icon", children: option.icon }) : null,
          /* @__PURE__ */ jsx7("span", { children: option.label })
        ] })
      },
      option.id
    )) }) })
  ] });
}

// src/TitanTabs.tsx
import { Tab, TabList, TabPanel, Tabs } from "react-aria-components";
import { jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs7(
    Tabs,
    {
      className: rootClass,
      defaultSelectedKey,
      orientation,
      children: [
        /* @__PURE__ */ jsx8(TabList, { className: listClass, "aria-label": ariaLabel, children: items.map((item) => /* @__PURE__ */ jsx8(
          Tab,
          {
            id: item.id,
            className: isVertical ? "tab-trigger tab-trigger-vertical" : "tab-trigger",
            isDisabled: item.disabled,
            children: item.label
          },
          item.id
        )) }),
        items.map((item) => /* @__PURE__ */ jsx8(TabPanel, { id: item.id, className: "tab-panel", children: item.content }, item.id))
      ]
    }
  );
}

// src/TitanPagination.tsx
import { Button as Button7 } from "react-aria-components";
import { ChevronLeft, ChevronRight as ChevronRight3 } from "lucide-react";
import { jsx as jsx9, jsxs as jsxs8 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs8("nav", { className: "pagination-nav", "aria-label": ariaLabel, children: [
    /* @__PURE__ */ jsx9(Button7, { className: "pagination-button pagination-nav-button", isDisabled: previousDisabled, "aria-label": "Previous page", onPress: onPrevious, children: /* @__PURE__ */ jsx9(ChevronLeft, {}) }),
    pages.map(
      (page, index) => page === "ellipsis" ? /* @__PURE__ */ jsx9("span", { className: "pagination-ellipsis", "aria-hidden": "true", children: "..." }, `ellipsis-${index}`) : /* @__PURE__ */ jsx9(
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
    /* @__PURE__ */ jsx9(Button7, { className: "pagination-button pagination-nav-button", isDisabled: nextDisabled, "aria-label": "Next page", onPress: onNext, children: /* @__PURE__ */ jsx9(ChevronRight3, {}) })
  ] });
}

// src/TitanDrawer.tsx
import { Button as Button8, Dialog, DialogTrigger, Modal, ModalOverlay } from "react-aria-components";
import { X as X2 } from "lucide-react";
import { Fragment, jsx as jsx10, jsxs as jsxs9 } from "react/jsx-runtime";
function TitanDrawer({ triggerLabel, title, children }) {
  return /* @__PURE__ */ jsxs9(DialogTrigger, { children: [
    /* @__PURE__ */ jsx10(Button8, { className: "btn btn-secondary", children: triggerLabel }),
    /* @__PURE__ */ jsx10(ModalOverlay, { isDismissable: true, className: "drawer-overlay", children: /* @__PURE__ */ jsx10(Modal, { className: "drawer-modal", children: /* @__PURE__ */ jsx10(Dialog, { className: "drawer-panel", children: ({ close }) => /* @__PURE__ */ jsxs9(Fragment, { children: [
      /* @__PURE__ */ jsxs9("header", { className: "drawer-header", children: [
        /* @__PURE__ */ jsx10("h3", { className: "drawer-title", children: title }),
        /* @__PURE__ */ jsx10(Button8, { className: "icon-ghost drawer-close-button", "aria-label": "Close drawer", onPress: close, children: /* @__PURE__ */ jsx10(X2, {}) })
      ] }),
      /* @__PURE__ */ jsx10("div", { className: "drawer-body", children })
    ] }) }) }) })
  ] });
}

// src/TitanDialog.tsx
import { Button as Button9, Dialog as Dialog2, DialogTrigger as DialogTrigger2, Modal as Modal2, ModalOverlay as ModalOverlay2 } from "react-aria-components";
import { jsx as jsx11, jsxs as jsxs10 } from "react/jsx-runtime";
function TitanDialog({
  triggerLabel,
  title,
  body,
  leftAction,
  rightAction
}) {
  return /* @__PURE__ */ jsxs10(DialogTrigger2, { children: [
    /* @__PURE__ */ jsx11(Button9, { className: "btn btn-secondary", children: triggerLabel }),
    /* @__PURE__ */ jsx11(ModalOverlay2, { isDismissable: true, className: "dialog-overlay", children: /* @__PURE__ */ jsx11(Modal2, { className: "dialog-modal", children: /* @__PURE__ */ jsxs10(Dialog2, { className: "dialog-panel", children: [
      /* @__PURE__ */ jsx11("header", { className: "dialog-header", children: /* @__PURE__ */ jsx11("h3", { className: "dialog-title", children: title }) }),
      /* @__PURE__ */ jsx11("div", { className: "dialog-body", children: body }),
      /* @__PURE__ */ jsxs10("footer", { className: "dialog-footer", children: [
        leftAction,
        rightAction
      ] })
    ] }) }) })
  ] });
}

// src/TitanTooltip.tsx
import { Tooltip, TooltipTrigger } from "react-aria-components";
import { jsx as jsx12, jsxs as jsxs11 } from "react/jsx-runtime";
function TitanTooltip({
  content,
  children,
  delay = 0,
  closeDelay = 0
}) {
  return /* @__PURE__ */ jsxs11(TooltipTrigger, { delay, closeDelay, children: [
    children,
    /* @__PURE__ */ jsx12(Tooltip, { className: "tooltip-box", children: content })
  ] });
}

// src/TitanToast.tsx
import { Button as Button10 } from "react-aria-components";
import { X as X3 } from "lucide-react";
import { jsx as jsx13, jsxs as jsxs12 } from "react/jsx-runtime";
function TitanToastRegion({ toasts, onDismiss }) {
  return /* @__PURE__ */ jsx13("div", { className: "toast-region", role: "region", "aria-label": "Notifications", "aria-live": "polite", children: toasts.map((toast) => /* @__PURE__ */ jsxs12("article", { className: `toast-card toast-${toast.variant}`, role: "status", children: [
    /* @__PURE__ */ jsxs12("div", { className: "toast-content", children: [
      toast.icon ? /* @__PURE__ */ jsx13("span", { className: "toast-icon", "aria-hidden": "true", children: toast.icon }) : null,
      /* @__PURE__ */ jsxs12("div", { className: "toast-text", children: [
        /* @__PURE__ */ jsx13("strong", { children: toast.title }),
        /* @__PURE__ */ jsx13("span", { children: toast.body })
      ] })
    ] }),
    /* @__PURE__ */ jsx13(Button10, { className: "icon-ghost toast-close-button", "aria-label": "Dismiss toast", onPress: () => onDismiss(toast.id), children: /* @__PURE__ */ jsx13(X3, {}) })
  ] }, toast.id)) });
}

// src/TitanFormControls.tsx
import { Checkbox, Label as Label2, Radio, RadioGroup, Switch } from "react-aria-components";
import { Check } from "lucide-react";
import { jsx as jsx14, jsxs as jsxs13 } from "react/jsx-runtime";
function TitanCheckboxField({
  label,
  isDisabled = false,
  defaultSelected = false
}) {
  return /* @__PURE__ */ jsxs13(Checkbox, { className: "checkbox-root", isDisabled, defaultSelected, children: [
    /* @__PURE__ */ jsx14("span", { className: "checkbox-box", children: /* @__PURE__ */ jsx14(Check, { className: "checkbox-mark" }) }),
    /* @__PURE__ */ jsx14("span", { className: "choice-text", children: label })
  ] });
}
function TitanRadioGroupField({
  label,
  options,
  defaultValue
}) {
  return /* @__PURE__ */ jsxs13(RadioGroup, { className: "choice-group", defaultValue, children: [
    /* @__PURE__ */ jsx14(Label2, { className: "choice-group-label", children: label }),
    /* @__PURE__ */ jsx14("div", { className: "choice-list", children: options.map((option) => /* @__PURE__ */ jsxs13(Radio, { className: "radio-root", value: option.value, isDisabled: option.disabled, children: [
      /* @__PURE__ */ jsx14("span", { className: "radio-box", children: /* @__PURE__ */ jsx14("span", { className: "radio-dot" }) }),
      /* @__PURE__ */ jsx14("span", { className: "choice-text", children: option.label })
    ] }, option.value)) })
  ] });
}
function TitanSwitchField({
  label,
  isDisabled = false,
  defaultSelected = false
}) {
  return /* @__PURE__ */ jsxs13(Switch, { className: "switch-root", isDisabled, defaultSelected, children: [
    /* @__PURE__ */ jsx14("span", { className: "choice-text", children: label }),
    /* @__PURE__ */ jsx14("span", { className: "switch-track", children: /* @__PURE__ */ jsx14("span", { className: "switch-thumb" }) })
  ] });
}
function TitanFormControlsGroup({ children }) {
  return /* @__PURE__ */ jsx14("div", { className: "form-controls-grid", children });
}

// src/TitanInput.tsx
import {
  FieldError,
  Group,
  Input,
  Label as Label3,
  Text,
  TextArea,
  TextField
} from "react-aria-components";
import { jsx as jsx15, jsxs as jsxs14 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs14(TextField, { className, ...props, children: [
    label ? /* @__PURE__ */ jsx15(Label3, { className: "field-label", children: label }) : null,
    leadingIcon || trailingIcon ? /* @__PURE__ */ jsxs14(Group, { className: iconContainerClass, children: [
      leadingIcon ? /* @__PURE__ */ jsx15("span", { className: "input-leading-icon", children: leadingIcon }) : null,
      /* @__PURE__ */ jsx15(Input, { className: "input-field", placeholder }),
      trailingIcon ? /* @__PURE__ */ jsx15("span", { className: "input-trailing-icon", children: trailingIcon }) : null
    ] }) : /* @__PURE__ */ jsx15(Input, { className: "input-field", placeholder }),
    hint || counter ? /* @__PURE__ */ jsxs14("div", { className: "field-help-row", children: [
      hint ? /* @__PURE__ */ jsx15(Text, { slot: "description", className: "field-hint", children: hint }) : /* @__PURE__ */ jsx15("span", {}),
      counter ? /* @__PURE__ */ jsx15("span", { className: "field-counter", children: counter }) : null
    ] }) : null,
    errorMessage ? /* @__PURE__ */ jsx15(FieldError, { className: "field-error", children: errorMessage }) : null
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
  return /* @__PURE__ */ jsxs14(TextField, { className, ...props, children: [
    label ? /* @__PURE__ */ jsx15(Label3, { className: "field-label", children: label }) : null,
    /* @__PURE__ */ jsx15(TextArea, { className: "textarea-field", placeholder }),
    hint || counter ? /* @__PURE__ */ jsxs14("div", { className: "field-help-row", children: [
      hint ? /* @__PURE__ */ jsx15(Text, { slot: "description", className: "field-hint", children: hint }) : /* @__PURE__ */ jsx15("span", {}),
      counter ? /* @__PURE__ */ jsx15("span", { className: "field-counter", children: counter }) : null
    ] }) : null,
    errorMessage ? /* @__PURE__ */ jsx15(FieldError, { className: "field-error", children: errorMessage }) : null
  ] });
}

// src/TitanCardGrid.tsx
import { jsx as jsx16 } from "react/jsx-runtime";
function TitanCardGrid({ children }) {
  return /* @__PURE__ */ jsx16("div", { className: "cards-layout-grid", children });
}
function TitanCard({ children, span = 16, className = "" }) {
  const spanClass = `span-${span}`;
  const mergedClassName = ["card", "layout-card", spanClass, className].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx16("article", { className: mergedClassName, children });
}

// src/TitanBorderlessTable.tsx
import { jsx as jsx17, jsxs as jsxs15 } from "react/jsx-runtime";
function TitanBorderlessTable({ columns, rows }) {
  return /* @__PURE__ */ jsx17("div", { className: "layout-table-wrap", children: /* @__PURE__ */ jsxs15("table", { className: "table-borderless", children: [
    /* @__PURE__ */ jsx17("thead", { children: /* @__PURE__ */ jsx17("tr", { children: columns.map((column) => /* @__PURE__ */ jsx17("th", { scope: "col", children: column.header }, column.key)) }) }),
    /* @__PURE__ */ jsx17("tbody", { children: rows.map((row) => /* @__PURE__ */ jsx17("tr", { children: columns.map((column) => /* @__PURE__ */ jsx17("td", { children: column.render ? column.render(row) : row[column.key] }, `${row.id}-${column.key}`)) }, row.id)) })
  ] }) });
}

// src/TitanTwoUpOneDownLayout.tsx
import { Fragment as Fragment2, jsx as jsx18, jsxs as jsxs16 } from "react/jsx-runtime";
function TitanTwoUpOneDownLayout({
  theme = "insights",
  userInitial = "A",
  breadcrumbItems,
  breadcrumbCurrentLabel,
  leftTop,
  rightTop,
  bottom
}) {
  return /* @__PURE__ */ jsxs16(Fragment2, { children: [
    /* @__PURE__ */ jsx18(TitanNavbar, { theme, userInitial }),
    /* @__PURE__ */ jsxs16("main", { className: "page", children: [
      /* @__PURE__ */ jsx18("section", { className: "card", children: /* @__PURE__ */ jsx18(TitanBreadcrumb, { items: breadcrumbItems, currentLabel: breadcrumbCurrentLabel }) }),
      /* @__PURE__ */ jsxs16(TitanCardGrid, { children: [
        /* @__PURE__ */ jsx18(TitanCard, { span: 8, children: leftTop }),
        /* @__PURE__ */ jsx18(TitanCard, { span: 8, children: rightTop }),
        /* @__PURE__ */ jsx18(TitanCard, { span: 16, children: bottom })
      ] })
    ] })
  ] });
}
export {
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
  TitanSwitchField,
  TitanTabs,
  TitanTag,
  TitanTextareaField,
  TitanToastRegion,
  TitanTooltip,
  TitanTwoUpOneDownLayout,
  getToneStyle
};
