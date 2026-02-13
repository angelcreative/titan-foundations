"use client";

// src/Button.tsx
import { Button as AriaButton } from "react-aria-components";
import { jsx } from "react/jsx-runtime";
function Button({ variant = "primary", ...props }) {
  return /* @__PURE__ */ jsx(AriaButton, { "data-variant": variant, ...props });
}

// src/Card.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
function Card({ children, className = "", ...props }) {
  return /* @__PURE__ */ jsx2(
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
    /* @__PURE__ */ jsx2("div", { className: "titan-Card-title", children: title }),
    subtitle != null && /* @__PURE__ */ jsx2("div", { className: "titan-Card-subtitle", children: subtitle })
  ] });
}
function CardBody({ children, className = "", ...props }) {
  return /* @__PURE__ */ jsx2("div", { className: `titan-Card-body ${className}`.trim(), ...props, children });
}
function CardActions({ children, className = "", ...props }) {
  return /* @__PURE__ */ jsx2("div", { className: `titan-Card-actions ${className}`.trim(), ...props, children });
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