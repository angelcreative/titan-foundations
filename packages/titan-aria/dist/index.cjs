"use client";
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
  Button: () => Button,
  Card: () => Card,
  CardActions: () => CardActions,
  CardBody: () => CardBody,
  CardHeader: () => CardHeader,
  Checkbox: () => import_react_aria_components3.Checkbox,
  CheckboxGroup: () => import_react_aria_components3.CheckboxGroup,
  Dialog: () => import_react_aria_components3.Dialog,
  DialogTrigger: () => import_react_aria_components3.DialogTrigger,
  FieldError: () => import_react_aria_components3.FieldError,
  Group: () => import_react_aria_components3.Group,
  Heading: () => import_react_aria_components3.Heading,
  Icon: () => Icon,
  Input: () => import_react_aria_components3.Input,
  Label: () => import_react_aria_components3.Label,
  ListBox: () => import_react_aria_components3.ListBox,
  ListBoxItem: () => import_react_aria_components3.ListBoxItem,
  Menu: () => import_react_aria_components3.Menu,
  MenuItem: () => import_react_aria_components3.MenuItem,
  MenuTrigger: () => import_react_aria_components3.MenuTrigger,
  Modal: () => import_react_aria_components3.Modal,
  ModalOverlay: () => import_react_aria_components3.ModalOverlay,
  Navbar: () => Navbar,
  Popover: () => import_react_aria_components3.Popover,
  Radio: () => import_react_aria_components3.Radio,
  RadioGroup: () => import_react_aria_components3.RadioGroup,
  Select: () => import_react_aria_components3.Select,
  SelectValue: () => import_react_aria_components3.SelectValue,
  Switch: () => import_react_aria_components3.Switch,
  Tab: () => import_react_aria_components3.Tab,
  TabList: () => import_react_aria_components3.TabList,
  TabPanel: () => import_react_aria_components3.TabPanel,
  Tabs: () => import_react_aria_components3.Tabs,
  TextArea: () => import_react_aria_components3.TextArea,
  TextField: () => import_react_aria_components3.TextField,
  Tooltip: () => import_react_aria_components3.Tooltip,
  TooltipTrigger: () => import_react_aria_components3.TooltipTrigger
});
module.exports = __toCommonJS(index_exports);

// src/Button.tsx
var import_react_aria_components = require("react-aria-components");
var import_jsx_runtime = require("react/jsx-runtime");
function Button({ variant, slot, ...props }) {
  const isIconOnly = slot === "icon";
  const resolvedVariant = variant ?? (isIconOnly ? "tertiary" : "primary");
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_react_aria_components.Button,
    {
      "data-variant": resolvedVariant,
      "data-slot": isIconOnly ? "icon" : void 0,
      ...props
    }
  );
}

// src/Icon.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var sizeMap = {
  s: { px: 12, stroke: 1.25 },
  m: { px: 16, stroke: 1.5 },
  l: { px: 24, stroke: 2 }
};
var classMap = {
  s: "titan-icon-s",
  m: "titan-icon-m",
  l: "titan-icon-l"
};
function Icon({ icon: LucideIcon, size = "m", className = "", ...props }) {
  const { px, stroke } = sizeMap[size];
  const sizeClass = classMap[size];
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: `titan-icon ${sizeClass} ${className}`.trim(), "aria-hidden": true, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(LucideIcon, { size: px, strokeWidth: stroke, ...props }) });
}

// src/Navbar.tsx
var import_react = require("react");
var import_react_aria_components2 = require("react-aria-components");
var import_lucide_react = require("lucide-react");
var import_jsx_runtime3 = require("react/jsx-runtime");
var THEME_TO_LOGO = {
  demand: "logo-demand.svg",
  audiense: "logo-audiense.svg",
  neutral: "logo-audiense.svg",
  insights: "logo-insights.svg",
  linkedin: "logo-inkedin.svg",
  tweetbinder: "logo-tweetbinder.svg",
  connect: "logo-connect.svg"
};
var STATUS_TEXT = {
  default: "Navbar ready.",
  loading: "Loading navigation actions.",
  empty: "No new notifications.",
  error: "Navigation failed to load.",
  success: "Navigation loaded successfully."
};
function Navbar({
  theme = "insights",
  userName = "User",
  status = "default",
  onChangeProduct,
  onNotifications,
  onSettings,
  onSparkles,
  onProfile,
  onSignOut
}) {
  const [isUserMenuOpen, setIsUserMenuOpen] = (0, import_react.useState)(false);
  const logoSrc = (0, import_react.useMemo)(() => `/assets/logos/${THEME_TO_LOGO[theme]}`, [theme]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("header", { className: "titan-Navbar", "aria-label": "Main navigation", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "titan-Navbar-inner", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "titan-Navbar-left-group", "aria-label": "left-group", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          Button,
          {
            slot: "icon",
            variant: "secondary",
            onPress: onChangeProduct,
            "aria-label": "Change product",
            "data-testid": "change-product-button",
            children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Icon, { icon: import_lucide_react.Grip, size: "m", strokeWidth: 1.5 })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { className: "titan-Navbar-brand-lockup", href: "/", "aria-label": "Go to homepage", "data-testid": "brand-lockup", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("img", { src: logoSrc, alt: "", "aria-hidden": true }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "titan-Navbar-right-group", "aria-label": "right-group", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          Button,
          {
            slot: "icon",
            variant: "secondary",
            onPress: onNotifications,
            "aria-label": "Notifications",
            "data-testid": "action-icon-buttons",
            children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Icon, { icon: import_lucide_react.Bell, size: "m", strokeWidth: 1.5 })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Button, { slot: "icon", variant: "secondary", onPress: onSettings, "aria-label": "Settings", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Icon, { icon: import_lucide_react.Settings, size: "m", strokeWidth: 1.5 }) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Button, { slot: "icon", variant: "secondary", onPress: onSparkles, "aria-label": "AI actions", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Icon, { icon: import_lucide_react.Sparkles, size: "m", strokeWidth: 1.5 }) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(Button, { slot: "icon", variant: "secondary", onPress: onProfile, "aria-label": "Open profile", "data-testid": "user-avatar", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "titan-Navbar-avatar", "aria-hidden": true, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Icon, { icon: import_lucide_react.UserCircle2, size: "m", strokeWidth: 1.5 }) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "titan-Navbar-srOnly", children: userName })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_react_aria_components2.MenuTrigger, { onOpenChange: setIsUserMenuOpen, children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            Button,
            {
              slot: "icon",
              variant: "secondary",
              "aria-label": isUserMenuOpen ? "Close user menu" : "Open user menu",
              "data-testid": "user-menu-chevron-button",
              children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Icon, { icon: isUserMenuOpen ? import_lucide_react.ChevronUp : import_lucide_react.ChevronDown, size: "m", strokeWidth: 1.5 })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_aria_components2.Popover, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_react_aria_components2.Menu, { "aria-label": "User menu", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_aria_components2.MenuItem, { id: "profile", onAction: onProfile, children: "Profile" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_aria_components2.MenuItem, { id: "sign-out", onAction: onSignOut, children: "Sign out" })
          ] }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "titan-Navbar-srOnly", role: "status", "aria-live": "polite", children: STATUS_TEXT[status] })
  ] });
}

// src/Card.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function Card({ children, className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "div",
    {
      className: `titan-Card ${className}`.trim(),
      "data-slot": "card",
      ...props,
      children
    }
  );
}
function CardHeader({ title, subtitle, className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: `titan-Card-header ${className}`.trim(), ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "titan-Card-title", children: title }),
    subtitle != null && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "titan-Card-subtitle", children: subtitle })
  ] });
}
function CardBody({ children, className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: `titan-Card-body ${className}`.trim(), ...props, children });
}
function CardActions({ children, className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: `titan-Card-actions ${className}`.trim(), ...props, children });
}
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Actions = CardActions;

// src/index.ts
var import_react_aria_components3 = require("react-aria-components");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Card,
  CardActions,
  CardBody,
  CardHeader,
  Checkbox,
  CheckboxGroup,
  Dialog,
  DialogTrigger,
  FieldError,
  Group,
  Heading,
  Icon,
  Input,
  Label,
  ListBox,
  ListBoxItem,
  Menu,
  MenuItem,
  MenuTrigger,
  Modal,
  ModalOverlay,
  Navbar,
  Popover,
  Radio,
  RadioGroup,
  Select,
  SelectValue,
  Switch,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  TextArea,
  TextField,
  Tooltip,
  TooltipTrigger
});
//# sourceMappingURL=index.cjs.map