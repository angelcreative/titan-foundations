import * as react_jsx_runtime from 'react/jsx-runtime';
import { ButtonProps as ButtonProps$1 } from 'react-aria-components';
export { Checkbox, CheckboxGroup, Dialog, DialogTrigger, FieldError, Group, Heading, Input, Label, ListBox, ListBoxItem, Menu, MenuItem, MenuTrigger, Modal, ModalOverlay, Popover, Radio, RadioGroup, Select, SelectValue, Switch, Tab, TabList, TabPanel, Tabs, TextArea, TextField, Tooltip, TooltipTrigger } from 'react-aria-components';
import { HTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
interface ButtonProps extends Omit<ButtonProps$1, 'data-variant'> {
    variant?: ButtonVariant;
}
declare function Button({ variant, ...props }: ButtonProps): react_jsx_runtime.JSX.Element;

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    /** Main content of the card */
    children?: React.ReactNode;
}
interface CardHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    title: React.ReactNode;
    subtitle?: React.ReactNode;
}
interface CardActionsProps extends HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}
declare function Card({ children, className, ...props }: CardProps): react_jsx_runtime.JSX.Element;
declare namespace Card {
    var Header: typeof CardHeader;
    var Body: typeof CardBody;
    var Actions: typeof CardActions;
}
declare function CardHeader({ title, subtitle, className, ...props }: CardHeaderProps): react_jsx_runtime.JSX.Element;
declare function CardBody({ children, className, ...props }: HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
declare function CardActions({ children, className, ...props }: CardActionsProps): react_jsx_runtime.JSX.Element;

export { Button, type ButtonProps, type ButtonVariant, Card, CardActions, type CardActionsProps, CardBody, CardHeader, type CardHeaderProps, type CardProps };
