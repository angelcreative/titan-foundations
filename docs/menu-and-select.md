# Menu y Select (Titan)

> Ownership policy: usar primero `@audienseco/titan-react` para `Menu` y `Select` cuando exista soporte en la versión instalada.
> Este documento y las specs de `foundations/` quedan como fallback/reference para transición, exploración o casos no cubiertos.

Menús desplegables y Select usan la estructura de **React Aria** (titan-aria) y los **tokens de Titan**. Los estilos en `titan-aria/styles` aplican esas variables.

---

## Menu

**Estructura Aria:** `MenuTrigger` → `Menu` → `MenuItem`. Los **submenus** son menús anidados (mismo `Menu`/`MenuItem`); **heredan los mismos tokens**; no hay tokens `--submenu-*`.

### Tokens (contenedor)

| Token | Uso |
|-------|-----|
| `--menu-min-width` | Ancho mínimo (temas: 230px) |
| `--menu-max-width` | Ancho máximo (temas: 330px) |
| `--menu-bg` | Fondo del menú |
| `--menu-color` | Color texto |
| `--menu-radius` | Border-radius |
| `--menu-shadow` | Sombra |

### Tokens (ítem)

| Token | Uso |
|-------|-----|
| `--menu-item-height` | 40px |
| `--menu-item-radius` | Radius ítem |
| `--menu-item-hover-bg` | Hover |
| `--menu-item-pressed-bg` | Pulsado |
| `--menu-item-selected-bg` | Seleccionado |
| `--menu-item-disabled` | Texto deshabilitado |
| `--menu-item-icon` | Color icono |

### Ítem destructivo (ej. Borrar)

`--menu-item-destructive-color`, `--menu-item-destructive-hover-bg`, `--menu-item-destructive-pressed-bg`, `--menu-item-destructive-icon`. Definidos en cada tema.

### Submenus

Sin tokens propios. Los submenus usan las mismas clases (`.react-aria-Menu`, `.react-aria-MenuItem`) y los mismos tokens; el popover anidado puede usar `--popover-*` si aplica.

**Spec:** `foundations/menu.json`.

---

## Select

**Estructura Aria:** `Select` + `SelectValue` + `Button` (trigger) + `Popover` (data-slot="listbox") + `ListBox` + `ListBoxItem`.

### Tokens (trigger)

| Token | Uso |
|-------|-----|
| `--select-button-height` | 44px |
| `--select-button-pad-x` | Padding horizontal |
| `--select-button-bg` | Fondo |
| `--select-button-color` | Texto (definido en tema) |
| `--select-button-border` | Borde (definido en tema) |
| `--select-radius` | Border-radius |

### Tokens (popover / listbox)

| Token | Uso |
|-------|-----|
| `--select-popover-bg` | Fondo del desplegable |
| `--select-popover-color` | Texto (tema) |
| `--select-popover-shadow` | Sombra |
| `--select-popover-radius` | Radius |

### Tokens (ítem de lista)

| Token | Uso |
|-------|-----|
| `--select-item-height` | 40px |
| `--select-item-pad-x` | Padding horizontal |
| `--select-item-radius` | Radius ítem |
| `--select-item-focused-bg` | Focus (tema) |
| `--select-item-pressed-bg` | Pulsado (tema) |
| `--select-item-selected-bg` | Seleccionado (tema) |

Los temas definen los colores de ítem: `--select-listbox-item-focused-background`, `--select-listbox-item-pressed-background`, `--select-listbox-item-selected-background`.

**Spec:** `foundations/select.json`.
