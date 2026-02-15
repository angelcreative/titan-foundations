# Navbar (source of truth: PDF)

> Source of truth: `titan-comp-doc/navbar.pdf`  
> Este documento traduce el contrato del PDF a reglas operativas para implementacion.
> Canonical glossary: `docs/terminology.md` (mandatory naming).

Terminologia canonica obligatoria:
- grupos: `left-group`, `right-group`
- izquierda: `change-product-button`, `brand-lockup`
- derecha: `action-icon-buttons`, `user-avatar`, `user-menu-chevron-button`
- estado de chevron: `chevron-down` (cerrado), `chevron-up` (abierto)

## Estructura base

La navbar se ubica arriba, ocupa **100%** de ancho y usa:

- **Background:** `color-white-900`
- **Stroke:** `color-steel-100`
- **Alto de referencia:** `70px` (derivado del lockup "Anillo + Product Name")

### Grupo izquierdo (orden fijo)

1. **Change Product | Icon Button**  
   - Componente: Neutral Icon Button Base - L (`$icon-button-neutral-base-l`)
   - Funcion: abrir flujo/pagina de cambio de producto.
2. **Anillo + Product Name (lockup)**  
   - Asset de marca con anillo + nombre del producto.
   - Medida de referencia: `165px x 70px`.
   - Puede funcionar como enlace a Home.

Los lockups de producto viven en `assets/logos/` y se sirven por `/assets/logos/`.
Ruta esperada: `<img src="/assets/logos/{archivo}" />` (sin texto adicional junto al lockup).

## Mapeo tema -> lockup

| Tema (`data-theme`) | Archivo |
| --- | --- |
| `demand` | `logo-demand.svg` |
| `audiense` | `logo-audiense.svg` |
| `neutral` | `logo-audiense.svg` |
| `insights` | `logo-insights.svg` |
| `linkedin` | `logo-inkedin.svg` |
| `tweetbinder` | `logo-tweetbinder.svg` |
| `connect` | `logo-connect.svg` |

## Grupo derecho

Composicion (en este orden estructural):

1. **Icon Buttons | Base Neutral** (set de acciones segun producto, p.ej. ajustes/notificaciones).
2. **User Avatar** (`40x40`).
3. **Boton de chevron del menu de usuario**:
   - cerrado: `ChevronDown`
   - abierto: `ChevronUp`

No se fija un set universal de 5 iconos concretos en el PDF; se fija el patron de icon buttons neutrales + avatar + chevron de menu.

## Espaciado y tokens clave

- Left padding: `$spacing-l`
- Right padding: `$spacing-xl`
- Gap 1: `$spacing-4xs`
- Gap 2: `$spacing-l`
- Gap 3: `$spacing-3xs`
- Bottom stroke: `$stroke-s`
- Stroke color: `$color-steel-100`

## Responsive

- Baseline de diseño: `1440px`.
- En viewports mayores o menores, se ajusta el espacio **entre** grupo izquierdo y derecho.
- No incrementar espaciado interno dentro de cada grupo.
- Por encima de `1920px`, la barra se expande en bordes manteniendo la posicion de los elementos internos.

## Reglas de bloqueo

- Si falta el lockup/ruta de logo para el tema solicitado: **BLOCKER** (no placeholder, no sustitucion textual).
- Si hay conflicto entre PDF y docs/rules previas: prevalece PDF.

Spec JSON: `foundations/navbar.json`.
