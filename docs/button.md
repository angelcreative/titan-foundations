# Button (source of truth: PDF)

> Source of truth: `titan-comp-doc/button.pdf`  
> Este documento traduce el contrato visual/estructural del PDF para implementacion.
> Canonical glossary: `docs/terminology.md` (mandatory naming).

## Tipos

- `$button`
- `$icon-button`
- `$destructive-button`
- `$destructive-icon-button`
- `$icon-button-neutral-base`

No todos los tipos exponen todas las variables; aplicar solo la jerarquia valida por tipo.

## Jerarquia de variantes

- **Button:** `primary`, `secondary`, `tertiary`, `text-button`
- **Destructive Button:** `primary`, `secondary`, `text-button`
- **Icon Button:** `primary`, `secondary`, `base`, `base-l`
- **Destructive Icon Button:** `primary`, `secondary`, `base`, `base-l`
- **Icon Button Neutral Base:** `base`, `base-l`

Terminologia canonica obligatoria: `primary`, `secondary`, `tertiary`, `text-button`, `base`, `base-l`, `default`, `hover`, `pressed`, `disabled`, `dark-surface`, `light-surface`.

## Uso por importancia (resumen)

- **Primary Button:** accion principal de pantalla (alta prioridad). Ej: `Create Report`.
- **Secondary Button:** accion complementaria importante (prioridad media). Ej: `Close`.
- **Tertiary Button:** accion opcional o poco frecuente (prioridad baja). Ej: `Help`.
- **Text Button:** accion de baja friccion en contextos densos/minimalistas. Ej: `Read more`.

- **Primary Icon Button:** accion rapida y destacada. Ej: `Add`.
- **Secondary Icon Button:** accion de soporte importante. Ej: `Edit`.
- **Base/Base-L Icon Button:** utilidades de baja prominencia (navbar/tablas/paginacion/dialog).

- **Destructive Primary/Secondary/Text:** acciones de borrado/error segun criticidad.
- **Destructive Icon Button:** accion destructiva icon-only; usar con moderacion y claridad.

## Anatomia

### Button base

- Border rounded: `$rounded-s`
- Label: `$text-button`
- Vertical padding: `$spacing-xs`
- Horizontal padding: `$spacing-m`

### Border policy (mandatory)

- Titan buttons never use visual borders as container styling.
- Applies to all types and variants: standard, icon, destructive, destructive icon, neutral base.
- Expected container styling: `border: none`.
- Do not use stroke/outline as button container substitute.
- Focus visibility should use focus-ring behavior, not border.

### Button with icon (left / right)

- Gap icon-label: `$spacing-4xs`
- Icon size: `$icon-s`
- **Icon left:** left padding `$spacing-s`, right padding `$spacing-m`
- **Icon right:** left padding `$spacing-m`, right padding `$spacing-s`

### Icon Button

- **Primary/Secondary:** rounded full (`$rounded-full`), icon `$icon-s`, padding horizontal/vertical `$spacing-2xs`
- **Base:** icon `$icon-s`, padding horizontal/vertical `$spacing-2xs`
- **Base-l:** icon `$icon-l`, padding horizontal/vertical `$spacing-xs`

### Annex: Buttons with icon (text + icon)

- Gap icon-label: `$spacing-4xs`.
- Lado del icono: `12px` (`$spacing-s`).
- Lado opuesto al icono: `16px` (`$spacing-m`).
- Regla valida para Standard y Destructive buttons con icon left/right.

## Estados obligatorios

### Button

- Primary: `default`, `hover`, `pressed`, `disabled`
- Secondary: `default`, `hover`, `pressed`, `disabled`
- Tertiary: `default`, `hover`, `pressed`, `disabled`
- Text-button: `default`, `hover`, `pressed`, `disabled`

### Destructive Button

- Primary: `default`, `hover`, `pressed`, `disabled`
- Secondary: `default`, `hover`, `pressed`, `disabled`
- Text-button: `default`, `hover`, `pressed`, `disabled`

### Icon Button

- Primary: `default`, `hover`, `pressed`, `disabled`
- Secondary: `default`, `hover`, `pressed`, `disabled`
- Base: `default`, `hover`, `pressed`, `disabled`
- Base-l: `default`, `hover`, `pressed`, `disabled`

### Destructive Icon Button

- Primary: `default`, `hover`, `pressed`, `disabled`
- Secondary: `default`, `hover`, `pressed`, `disabled`
- Base: `default`, `hover`, `pressed`, `disabled`
- Base-l: `default`, `hover`, `pressed`, `disabled`

### Icon Button Neutral Base

- Dark-surface: `default`, `hover`, `pressed`, `disabled`
- Light-surface: `default`, `hover`, `pressed`, `disabled`

Esta variante neutral unifica icon buttons base/base-l en componentes compartidos como Navbar, Table, Pagination y Dialog, manteniendo contraste correcto en superficies claras/oscuras.

## Reglas operativas

- Si falta un estado obligatorio en la variante solicitada: `FAIL`.
- Si faltan tokens/anatomia necesarios para implementar una variante: `BLOCKER`.
- No renombrar jerarquias (`primary`, `secondary`, `tertiary`, `text-button`, `base`, `base-l`).
- No habilitar variables fuera del tipo solicitado (ej. no usar `tertiary` en destructive).
- En acciones destructivas criticas, recomendar confirmacion adicional.
- Si cualquier variante incluye borde/stroke/outline como contenedor visual: `FAIL`.

## State Matrix (visible)

En review deben ser visibles explicitamente:

- `button`, `destructive-button`, `icon-button`, `destructive-icon-button`, `icon-button-neutral-base`:
  - `default`
  - `hover`
  - `pressed`
  - `disabled`
  - `focus-visible`

Regla adicional para icon-only interactivo:

- Comportamiento visual por defecto de **secondary icon-button**.
- Si no aplica un contrato mas estricto del componente, fallback: `background: var(--color-black-100)` y `border-radius: 9999px`.

## Review Harness Requirements

- Mostrar en una misma vista los estados visibles obligatorios por variante.
- Incluir al menos:
  - un button textual
  - un button con icono
  - un icon-only interactivo
  - un caso disabled
- Probar interaccion por teclado:
  - foco visible con `Tab`
  - activacion con `Enter` y `Space`
- Verificar que icon-only tenga `aria-label`.

## Common Implementation Traps

- Usar borde como contenedor visual en lugar de la capa de fondo del variant.
- Omitir `focus-visible` por depender solo de hover.
- Mezclar jerarquias no validas (por ejemplo, `tertiary` en destructive).
- Renderizar icon-only sin nombre accesible.
- No aplicar fallback de icon-only (secondary o black-100 + full rounded).

Spec JSON: `foundations/button.json`.
