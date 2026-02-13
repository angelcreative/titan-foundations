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
  Checkbox: () => import_react_aria_components2.Checkbox,
  CheckboxGroup: () => import_react_aria_components2.CheckboxGroup,
  Dialog: () => import_react_aria_components2.Dialog,
  DialogTrigger: () => import_react_aria_components2.DialogTrigger,
  FieldError: () => import_react_aria_components2.FieldError,
  Group: () => import_react_aria_components2.Group,
  Heading: () => import_react_aria_components2.Heading,
  Icon: () => Icon,
  Input: () => import_react_aria_components2.Input,
  Label: () => import_react_aria_components2.Label,
  ListBox: () => import_react_aria_components2.ListBox,
  ListBoxItem: () => import_react_aria_components2.ListBoxItem,
  Menu: () => import_react_aria_components2.Menu,
  MenuItem: () => import_react_aria_components2.MenuItem,
  MenuTrigger: () => import_react_aria_components2.MenuTrigger,
  Modal: () => import_react_aria_components2.Modal,
  ModalOverlay: () => import_react_aria_components2.ModalOverlay,
  Popover: () => import_react_aria_components2.Popover,
  Radio: () => import_react_aria_components2.Radio,
  RadioGroup: () => import_react_aria_components2.RadioGroup,
  Select: () => import_react_aria_components2.Select,
  SelectValue: () => import_react_aria_components2.SelectValue,
  Switch: () => import_react_aria_components2.Switch,
  Tab: () => import_react_aria_components2.Tab,
  TabList: () => import_react_aria_components2.TabList,
  TabPanel: () => import_react_aria_components2.TabPanel,
  Tabs: () => import_react_aria_components2.Tabs,
  TextArea: () => import_react_aria_components2.TextArea,
  TextField: () => import_react_aria_components2.TextField,
  Tooltip: () => import_react_aria_components2.Tooltip,
  TooltipTrigger: () => import_react_aria_components2.TooltipTrigger
});
module.exports = __toCommonJS(index_exports);

// src/Button.tsx
var import_react_aria_components = require("react-aria-components");
var import_jsx_runtime = require("react/jsx-runtime");
function Button({ variant = "primary", slot, ...props }) {
  const isIconOnly = slot === "icon";
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_react_aria_components.Button,
    {
      "data-variant": variant,
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

// src/Card.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function Card({ children, className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: `titan-Card-header ${className}`.trim(), ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "titan-Card-title", children: title }),
    subtitle != null && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "titan-Card-subtitle", children: subtitle })
  ] });
}
function CardBody({ children, className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: `titan-Card-body ${className}`.trim(), ...props, children });
}
function CardActions({ children, className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: `titan-Card-actions ${className}`.trim(), ...props, children });
}
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Actions = CardActions;

// src/index.ts
var import_react_aria_components2 = require("react-aria-components");
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