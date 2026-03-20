# titan-aria

React Aria components styled with **Titan** design system tokens. This library provides accessible, unstyled-primitives behavior (via [React Aria Components](https://react-spectrum.adobe.com/react-aria/components.html)) and applies Titan’s look by using CSS variables from Titan (`titan.css` + a theme).

The package does **not** bundle Titan. Your app must load Titan (base CSS + one theme) first, then this library’s CSS.

## Installation

```bash
npm install titan-aria react react-dom react-aria-components lucide-react
```

**Peer dependencies:** `react`, `react-dom`, `react-aria-components`, **`lucide-react`** (required for the `Icon` component and icon buttons; always install it when using titan-aria).

## Load order (important)

Load styles in this order so Titan variables are defined before titan-aria uses them:

1. **Titan base** — `titan.css`
2. **One Titan theme** — e.g. `_insights.css`, `_audiense.css`, etc.
3. **titan-aria styles** — `titan-aria/styles`

Set the theme on the document so the theme’s variables apply:

```html
<html data-theme="insights">
```

### Example (Vite / app entry)

```ts
// main.tsx or App.tsx
import 'path/to/titan.css';        // or your Titan base
import 'path/to/themes/_insights.css';
import 'titan-aria/styles';
```

Or with link tags in `index.html`:

```html
<link rel="stylesheet" href="/titan.css" />
<link rel="stylesheet" href="/themes/_insights.css" />
```

Then in your JS bundle:

```ts
import 'titan-aria/styles';
```

## Usage

Import components from `titan-aria`. They use React Aria’s API; titan-aria adds a small `Button` wrapper with a `variant` prop and re-exports the rest from `react-aria-components`.

### Button (with variant)

The only custom wrapper is `Button`; it supports `variant`: `'primary' | 'secondary' | 'tertiary'`.

```tsx
import { Button } from 'titan-aria';

<Button variant="primary" onPress={() => {}}>Save</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="tertiary">Learn more</Button>
```

### TextField

```tsx
import { TextField, Label, Input, FieldError } from 'titan-aria';

<TextField name="email" isRequired>
  <Label>Email</Label>
  <Input />
  <FieldError />
</TextField>
```

Helper/description text can be rendered inside `TextField` (e.g. a `<span>` with `slot="description"`) or as custom content; React Aria Components does not export a standalone `Description` component.

### Icon (Lucide)

Icons use **Lucide React**. You must install `lucide-react` in the app that uses titan-aria.

```tsx
import { Icon } from 'titan-aria';
import { Plus, ChevronDown } from 'lucide-react';

<Icon icon={Plus} size="m" />
<Icon icon={ChevronDown} size="s" />
```

`size`: `'s'` (12px), `'m'` (16px), `'l'` (24px).

### Button (icon-only)

Use `slot="icon"` with an `Icon` as the only child. Variants: `primary`, `secondary`, `tertiary` (default for icon-only). Always full rounded.

```tsx
import { Button, Icon } from 'titan-aria';
import { Plus } from 'lucide-react';

<Button slot="icon" variant="primary" aria-label="Add">
  <Icon icon={Plus} size="m" />
</Button>
```

### Drawer (Modal + overlay)

Use `ModalOverlay` + `Modal` + `Dialog` with `data-slot="drawer"` on the overlay so it uses drawer tokens (overlay backdrop, panel from the right). The drawer always has a header (title + ghost close icon X) and a body. Use `data-slot="drawer-header"`, `data-slot="drawer-title"`, `data-slot="drawer-close"` (Button with Icon X, `slot="icon"`), and `data-slot="drawer-body"` for content. Tokens and spec: see [docs/components/drawer.md](../../docs/components/drawer.md) and `component-specs/drawer.json` in titan-foundations.

### Other components

All other exports (e.g. `Select`, `Dialog`, `Tabs`, `Checkbox`, `Switch`, `Menu`, `Tooltip`, `Popover`) are re-exported from `react-aria-components` and are styled by `titan-aria/styles` via Titan CSS variables. Use the [React Aria Components](https://react-spectrum.adobe.com/react-aria/components.html) docs for their APIs.

## Build

```bash
npm run build
```

Output: `dist/` (JS, types, and `titan-aria.css`). The `./styles` export points to `dist/titan-aria.css`.
