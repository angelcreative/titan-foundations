# Tabla borderless (tokens + convenciones)

**Objetivo:** Que quien monte el repo de tokens sepa qué tokens exponer y cómo usarlos para que cualquier implementación de tabla (sin componente) se vea como esta referencia: borderless, solo separadores horizontales, hover de fila, ordenación con iconos Lucide y menú de acciones con iconos.

---

## 1. Tokens CSS necesarios

### 1.1 Lista completa (semantic layer)

Todos estos nombres deben existir en el semantic layer (p. ej. `titan.css` o theme) para que una tabla “como la referencia” pueda construirse solo con tokens.

| Token | Uso | Fallback recomendado (si no existe) |
|-------|-----|-------------------------------------|
| **Contenedor** | | |
| `--table-background` | Fondo del wrapper (opcional; esta ref usa transparent) | `transparent` |
| `--table-radius` | Border-radius del wrapper | `var(--radius-none)` o `0` |
| **Celdas** | | |
| `--table-cell-background` | Fondo de th/td | `transparent` |
| `--table-header-separator` | Color del borde inferior del header (más oscuro) | `var(--color-steel-500)` |
| `--table-row-separator` | Color del borde inferior de las filas (más claro) | `var(--color-steel-100)` |
| `--table-header-border-bottom` | Alternativa legacy para header | `var(--color-steel-300)` |
| `--table-cell-border-bottom` | Alternativa legacy para filas | `var(--color-steel-200)` |
| **Interacción** | | |
| `--table-row-hover` | Fondo de la fila en hover | p. ej. `var(--surface-hover)` |
| **Tipografía** | | |
| `--text-size-body` | Tamaño de texto de celdas | (ya en Titan) |
| `--text-body` | Color texto celdas | (ya en Titan) |
| `--text-title` | Color texto header | (ya en Titan) |
| **Sort (cabecera)** | | |
| `--text-muted` | Icono sort inactivo | (ya en Titan) |
| `--text-secondary` | Icono sort en hover | (ya en Titan) |
| `--text-primary-active` | Texto del botón sort en hover | (ya en Titan) |
| **Botón icono (⋮)** | | |
| `--icon-button-radius` | Border-radius del botón | (ya en Titan) |
| `--icon-button-bg-hover` | Fondo hover botón icono | (ya en Titan) |
| **Menú de acciones** | | |
| `--popover-background` | Fondo del menú | (ya en Titan) |
| `--popover-radius` | Border-radius del menú | (ya en Titan) |
| `--popover-shadow` | Sombra del menú | (ya en Titan) |
| `--card-border` | Borde del menú | (ya en Titan) |
| `--surface-hover` | Fondo hover ítem de menú | (ya en Titan) |
| **Ítem destructivo (Borrar)** | | |
| `--text-error-primary` | Texto e icono rojo en hover | (ya en Titan) |
| `--background-error` | Fondo hover ítem “Borrar” (opcional) | (ya en Titan) |
| **Spacing** | | |
| `--pad-xs`, `--pad-s`, `--pad-m`, `--pad-l` | Padding celdas y menú | (foundations) |
| **Focus** | | |
| `--focus-ring` | Outline focus visible | (ya en Titan) |
| **Radius** | | |
| `--radius-control` | Border-radius ítems de menú | (ya en Titan) |

### 1.2 Cómo se usan (reglas CSS)

- **Contenedor:** sin borde; `background: var(--table-background, transparent);` `border-radius: var(--table-radius);` `overflow: visible` para que los menús desplegables no se corten.

- **Todas las celdas:**  
  `background: var(--table-cell-background, transparent);`  
  Sin bordes laterales ni recuadro.

- **Solo header:**  
  `border-bottom: 1px solid var(--table-header-separator, var(--table-header-border-bottom, var(--color-steel-500)));`  
  (header más oscuro que las filas.)

- **Solo filas (td):**  
  `border-bottom: 1px solid var(--table-row-separator, var(--table-cell-border-bottom, var(--color-steel-100)));`  
  (filas más claras que el header.)

- **Hover de fila:**  
  `tbody tr:hover td { background: var(--table-row-hover); }`

Así se consigue: tabla sin bordes de caja, solo líneas horizontales, con contraste header vs filas.

---

## 2. Iconos Lucide (convención fija)

Sin componente: se documenta qué iconos y cuándo usarlos para que cualquier UI genere la misma tabla.

### 2.1 Ordenación (cabecera)

- Columna ordenable, sin orden aplicado: **ArrowUpDown** (doble flecha).
- Orden ascendente activo: **MoveUp**.
- Orden descendente activo: **MoveDown**.

Paquete: `lucide-react`. Props recomendados: `size={16}`, `strokeWidth={2}`.

### 2.2 Botón “más opciones” (⋮)

Puede ser SVG inline (tres puntos) o Lucide: p. ej. **MoreVertical** — no es obligatorio tokenizarlo si no hay design system de iconos.

### 2.3 Menú de acciones (por ítem)

- Editar: **Pencil**.
- Clonar: **Copy**.
- Borrar: **Trash2**.

Mismo tamaño que sort: 16px, `strokeWidth={2}`. Los ítems son fila con icono + texto (`display: flex`, `align-items: center`, `gap: var(--pad-s)`).

### 2.4 Ítem destructivo (Borrar)

- Hover: `color: var(--text-error-primary);` icono mismo color (p. ej. `currentColor` en el SVG o mismo token).
- Opcional: `background: var(--background-error)` en hover.

No hace falta token nuevo; solo usar los de error de Titan.

---

## 3. Foundations en JSON

La especificación de “tabla tipo referencia” está en **`foundations/table-borderless.json`**. Un Cursor/consumidor puede usar esa spec para saber qué tokens y convenciones aplicar sin implementar un componente.

Instrucción para Cursor: *“Al pedir una tabla, usa la spec de table.borderless y estos tokens.”*

---

## 4. Resumen para Cursor / repo de tokens

- **No entregar un componente:** entregar tokens (semantic layer) y esta spec (opcionalmente en JSON).

- **Tokens mínimos para tabla borderless:**  
  `--table-cell-background`, `--table-header-separator`, `--table-row-separator`; opcionalmente mantener `--table-header-border-bottom` y `--table-cell-border-bottom` como fallback.

- **Contraste:** header = separador más oscuro (p. ej. steel-500), filas = más claro (p. ej. steel-100).

- **Iconos:** Lucide: ordenación = ArrowUpDown / MoveUp / MoveDown; menú = Pencil, Copy, Trash2; ítem destructivo = tokens de error de Titan (text + icon + opcional background).

- **Menú:** no cortarlo; contenedor de la tabla con `overflow: visible`.

Con esto, cuando otro usuario pida “una tabla como la de reportes”, el Cursor que tenga este doc (y el JSON en `foundations/`) puede replicar la misma apariencia y comportamiento usando solo tokens y convenciones, sin un componente predefinido.

## State Matrix (visible)

- **Sort header:** `inactive`, `hover`, `asc`, `desc`, `focus-visible`.
- **Row:** `default`, `hover`, `selected` (cuando aplique al flujo).
- **Actions menu item:** `default`, `hover`, `pressed`, `focus-visible`.
- **Destructive action item:** `hover` con tokens de error visibles.

## Review Harness Requirements

- Incluir al menos una columna sortable que alterne: `inactive -> asc -> desc -> inactive`.
- Incluir menu de acciones por fila con `Pencil`, `Copy`, `Trash2`.
- Mostrar hover de fila y verificar separadores horizontales (sin borde de caja/celda).
- Probar teclado en sort y en menu de acciones.
- Verificar estado destructivo con `--text-error-primary` (y opcional `--background-error`).

## Common Implementation Traps

- Sort que solo alterna `asc/desc` sin volver a `inactive`.
- Aplicar borde de contenedor/celdas, rompiendo contrato borderless.
- Usar iconos de sort/acciones no contractuales o con estados no distinguibles.
- No exponer foco visible en controles de sort y acciones.
- Cortar popovers por `overflow: hidden` del contenedor.
