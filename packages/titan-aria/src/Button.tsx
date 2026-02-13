import type { ButtonProps as AriaButtonProps } from 'react-aria-components';
import { Button as AriaButton } from 'react-aria-components';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

export interface ButtonProps extends Omit<AriaButtonProps, 'data-variant' | 'data-slot'> {
  variant?: ButtonVariant;
  /** When true, renders as icon-only button (always full rounded). Use with Icon as single child. */
  slot?: 'default' | 'icon';
}

export function Button({ variant, slot, ...props }: ButtonProps) {
  const isIconOnly = slot === 'icon';
  const resolvedVariant = variant ?? (isIconOnly ? 'tertiary' : 'primary');
  return (
    <AriaButton
      data-variant={resolvedVariant}
      data-slot={isIconOnly ? 'icon' : undefined}
      {...props}
    />
  );
}
