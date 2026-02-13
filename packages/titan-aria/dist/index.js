"use client";

// src/Button.tsx
import { Button as AriaButton } from "react-aria-components";
import { jsx } from "react/jsx-runtime";
function Button({ variant = "primary", slot, ...props }) {
  const isIconOnly = slot === "icon";
  return /* @__PURE__ */ jsx(
    AriaButton,
    {
      "data-variant": variant,
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

// src/Card.tsx
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
function Card({ children, className = "", ...props }) {
  return /* @__PURE__ */ jsx3(
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
  return /* @__PURE__ */ jsxs("div", { className: `titan-Card-header ${className}`.trim(), ...props, children: [
    /* @__PURE__ */ jsx3("div", { className: "titan-Card-title", children: title }),
    subtitle != null && /* @__PURE__ */ jsx3("div", { className: "titan-Card-subtitle", children: subtitle })
  ] });
}
function CardBody({ children, className = "", ...props }) {
  return /* @__PURE__ */ jsx3("div", { className: `titan-Card-body ${className}`.trim(), ...props, children });
}
function CardActions({ children, className = "", ...props }) {
  return /* @__PURE__ */ jsx3("div", { className: `titan-Card-actions ${className}`.trim(), ...props, children });
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
  MenuTrigger,
  Menu,
  MenuItem,
  Popover,
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
};
//# sourceMappingURL=index.js.map