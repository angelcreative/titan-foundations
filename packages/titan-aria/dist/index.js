"use client";

// src/Button.tsx
import { Button as AriaButton } from "react-aria-components";
import { jsx } from "react/jsx-runtime";
function Button({ variant, slot, ...props }) {
  const isIconOnly = slot === "icon";
  const resolvedVariant = variant ?? (isIconOnly ? "tertiary" : "primary");
  return /* @__PURE__ */ jsx(
    AriaButton,
    {
      "data-variant": resolvedVariant,
      "data-slot": isIconOnly ? "icon" : void 0,
      ...props
    }
  );
}

// src/Icon.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx2("span", { className: `titan-icon ${sizeClass} ${className}`.trim(), "aria-hidden": true, children: /* @__PURE__ */ jsx2(LucideIcon, { size: px, strokeWidth: stroke, ...props }) });
}

// src/Navbar.tsx
import { useMemo, useState } from "react";
import { MenuTrigger, Menu, MenuItem, Popover } from "react-aria-components";
import { Bell, ChevronDown, ChevronUp, Grip, Settings, Sparkles, UserCircle2 } from "lucide-react";
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
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
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const logoSrc = useMemo(() => `/assets/logos/${THEME_TO_LOGO[theme]}`, [theme]);
  return /* @__PURE__ */ jsxs("header", { className: "titan-Navbar", "aria-label": "Main navigation", children: [
    /* @__PURE__ */ jsxs("div", { className: "titan-Navbar-inner", children: [
      /* @__PURE__ */ jsxs("div", { className: "titan-Navbar-left-group", "aria-label": "left-group", children: [
        /* @__PURE__ */ jsx3(
          Button,
          {
            slot: "icon",
            variant: "secondary",
            onPress: onChangeProduct,
            "aria-label": "Change product",
            "data-testid": "change-product-button",
            children: /* @__PURE__ */ jsx3(Icon, { icon: Grip, size: "m", strokeWidth: 1.5 })
          }
        ),
        /* @__PURE__ */ jsx3("a", { className: "titan-Navbar-brand-lockup", href: "/", "aria-label": "Go to homepage", "data-testid": "brand-lockup", children: /* @__PURE__ */ jsx3("img", { src: logoSrc, alt: "", "aria-hidden": true }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "titan-Navbar-right-group", "aria-label": "right-group", children: [
        /* @__PURE__ */ jsx3(
          Button,
          {
            slot: "icon",
            variant: "secondary",
            onPress: onNotifications,
            "aria-label": "Notifications",
            "data-testid": "action-icon-buttons",
            children: /* @__PURE__ */ jsx3(Icon, { icon: Bell, size: "m", strokeWidth: 1.5 })
          }
        ),
        /* @__PURE__ */ jsx3(Button, { slot: "icon", variant: "secondary", onPress: onSettings, "aria-label": "Settings", children: /* @__PURE__ */ jsx3(Icon, { icon: Settings, size: "m", strokeWidth: 1.5 }) }),
        /* @__PURE__ */ jsx3(Button, { slot: "icon", variant: "secondary", onPress: onSparkles, "aria-label": "AI actions", children: /* @__PURE__ */ jsx3(Icon, { icon: Sparkles, size: "m", strokeWidth: 1.5 }) }),
        /* @__PURE__ */ jsxs(Button, { slot: "icon", variant: "secondary", onPress: onProfile, "aria-label": "Open profile", "data-testid": "user-avatar", children: [
          /* @__PURE__ */ jsx3("span", { className: "titan-Navbar-avatar", "aria-hidden": true, children: /* @__PURE__ */ jsx3(Icon, { icon: UserCircle2, size: "m", strokeWidth: 1.5 }) }),
          /* @__PURE__ */ jsx3("span", { className: "titan-Navbar-srOnly", children: userName })
        ] }),
        /* @__PURE__ */ jsxs(MenuTrigger, { onOpenChange: setIsUserMenuOpen, children: [
          /* @__PURE__ */ jsx3(
            Button,
            {
              slot: "icon",
              variant: "secondary",
              "aria-label": isUserMenuOpen ? "Close user menu" : "Open user menu",
              "data-testid": "user-menu-chevron-button",
              children: /* @__PURE__ */ jsx3(Icon, { icon: isUserMenuOpen ? ChevronUp : ChevronDown, size: "m", strokeWidth: 1.5 })
            }
          ),
          /* @__PURE__ */ jsx3(Popover, { children: /* @__PURE__ */ jsxs(Menu, { "aria-label": "User menu", children: [
            /* @__PURE__ */ jsx3(MenuItem, { id: "profile", onAction: onProfile, children: "Profile" }),
            /* @__PURE__ */ jsx3(MenuItem, { id: "sign-out", onAction: onSignOut, children: "Sign out" })
          ] }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx3("p", { className: "titan-Navbar-srOnly", role: "status", "aria-live": "polite", children: STATUS_TEXT[status] })
  ] });
}

// src/Card.tsx
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
function Card({ children, className = "", ...props }) {
  return /* @__PURE__ */ jsx4(
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
  return /* @__PURE__ */ jsxs2("div", { className: `titan-Card-header ${className}`.trim(), ...props, children: [
    /* @__PURE__ */ jsx4("div", { className: "titan-Card-title", children: title }),
    subtitle != null && /* @__PURE__ */ jsx4("div", { className: "titan-Card-subtitle", children: subtitle })
  ] });
}
function CardBody({ children, className = "", ...props }) {
  return /* @__PURE__ */ jsx4("div", { className: `titan-Card-body ${className}`.trim(), ...props, children });
}
function CardActions({ children, className = "", ...props }) {
  return /* @__PURE__ */ jsx4("div", { className: `titan-Card-actions ${className}`.trim(), ...props, children });
}
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Actions = CardActions;

// src/index.ts
import {
  TextField,
  Label,
  Input,
  TextArea,
  FieldError,
  Group,
  Checkbox,
  CheckboxGroup,
  RadioGroup,
  Radio,
  Switch,
  Select,
  SelectValue,
  ListBox,
  ListBoxItem,
  DialogTrigger,
  Modal,
  ModalOverlay,
  Dialog,
  Heading,
  Tabs,
  TabList,
  TabPanel,
  Tab,
  MenuTrigger as MenuTrigger2,
  Menu as Menu2,
  MenuItem as MenuItem2,
  Popover as Popover2,
  TooltipTrigger,
  Tooltip
} from "react-aria-components";
export {
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
  Menu2 as Menu,
  MenuItem2 as MenuItem,
  MenuTrigger2 as MenuTrigger,
  Modal,
  ModalOverlay,
  Navbar,
  Popover2 as Popover,
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
};
//# sourceMappingURL=index.js.map