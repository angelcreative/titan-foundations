# Menu y Select (Titan)

> Source of truth de **Menu**: `titan-comp-doc/menu.pdf`.
> Este documento traduce ese PDF a contrato operativo. Si hay conflicto entre este doc y el PDF, prevalece el PDF.
> Canonical glossary: `docs/terminology.md` (mandatory naming).

Menus desplegables y Select usan la estructura de **react-aria-components** y los **tokens de Titan**.

Terminologia canonica de Menu (obligatoria):
- estados: `default`, `hover`, `pressed`, `selected`, `disabled`
- variantes: `search-item`, `profile-item`, `notifications-item`, `destructive-item`
- submenu: `max-nesting-levels: 1`

---

## Menu

**Estructura base:** `MenuTrigger` -> `Menu` -> `MenuItem`.

Anatomia (PDF):
- Requeridos: contenedor + items.
- Opcionales: iconos y dividers.
- Trigger obligatorio: boton/icono/clic derecho que abre menu bajo demanda.

### Tokens (contenedor)

| Token | Uso |
|-------|-----|
| `$spacing-2xs` | Padding horizontal |
| `$spacing-xs` | Padding vertical |
| `$spacing-4xs` | Gap interno |
| `$box-shadow-2` | Sombra contenedor |
| `$rounded-m` | Radio contenedor |
| `--menu-min-width` | Ancho mínimo (temas: 230px) |
| `--menu-max-width` | Ancho máximo (temas: 330px) |
| `--menu-bg` | Fondo del menú |
| `--menu-color` | Color texto |

### Tokens (ítem)

| Token | Uso |
|-------|-----|
| `$spacing-s` | Padding horizontal |
| `$spacing-xs` | Padding vertical |
| `$size-m` | Tamaño de icono |
| `$spacing-m` | Gap icono-label |
| `$body-m-500` | Label default |
| `$rounded-s` | Radius item |
| `--menu-item-height` | 40px |
| `--menu-item-hover-bg` | Hover |
| `--menu-item-pressed-bg` | Pulsado |
| `--menu-item-selected-bg` | Seleccionado |
| `--menu-item-disabled` | Texto deshabilitado |
| `--menu-item-icon` | Color icono |

### Divider

- Mismo ancho que los items.
- Mismo ritmo vertical que item-item.
- Token visual: `$color-steel-200` + `$stroke-s`.

### Estados (item standard)

| estado | icono | texto | fondo |
|---|---|---|---|
| `default` | `$color-steel-700` | `$color-steel-800` | transparente |
| `hover` | `$color-steel-700` | `$color-steel-800` | `$color-steel-100` |
| `pressed` | `$color-steel-700` | `$color-steel-800` | `$color-steel-200` |
| `selected` | `$color-steel-700` | `$color-steel-800` | `$color-steel-300` |
| `disabled` | `$color-disabled-400` | `$color-disabled-400` | transparente |

### Sizing y truncado

- Width minimo: **230px**.
- Width maximo: **330px**.
- Caja de texto max: **270px** (si supera, truncado).
- Altura item: **40px**.
- Truncado en hover:
  - 1 linea: animacion horizontal ida/vuelta.
  - 2+ lineas: animacion vertical ida/vuelta.

### Altura maxima y scroll

- Maximo visible: **5 items** por defecto.
- Variante notifications: **3 items**.
- Si se supera: scroll vertical interno.
- El menu nunca debe salirse del viewport.

### Alignment / placement

- Gap trigger-menu: `$spacing-2xs`.
- Debe aplicar colision + flip (arriba/abajo e izquierda/derecha segun espacio).
- Mantener coherencia de estructura visual dentro del mismo menu (todos con icono o todos sin icono cuando aplique).

### Ítem destructivo (ej. Borrar)

`--menu-item-destructive-color`, `--menu-item-destructive-hover-bg`, `--menu-item-destructive-pressed-bg`, `--menu-item-destructive-icon`. Definidos en cada tema.

### Submenus

- Maximo: **1 nivel adicional** (no anidar mas).
- Apertura: hover con puntero, `RightArrow`/`Enter` con teclado.
- Cierre: al seleccionar opcion o perder foco.
- Mantener foco/hover del item padre mientras submenu hijo siga abierto.
- Tokens del trigger de submenu: gap `$spacing-4xs`, separacion submenu `$spacing-2xs`, icono `$size-m`.

### Variantes (anexo PDF)

- **`search-item`**: label `$body-m-400`, highlighted `$body-m-600`; no estado `disabled`.
- **`profile-item`**: avatar `40x40`, nombre `$body-m-600`, username `$body-s-400`, metrica `$body-s-500`.
- **`notifications-item`**: siempre a ancho maximo, titulo max 2 lineas, date label `$body-s-400`.
- **`destructive-item`**: mantiene estados excepto `selected`; usa escala de error en `hover`/`pressed`.

### Do / Don't

- Do: etiquetas breves orientadas a accion, divisores cuando mejoren escaneo, destructivas al final.
- Don't: mas de un nivel submenu, columnas desalineadas, usar menu para navegacion persistente o formularios complejos.

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
