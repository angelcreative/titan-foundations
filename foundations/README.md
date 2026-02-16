# Foundations

Specs en JSON y convenciones para que implementaciones (o Cursor/MCP) puedan replicar patrones de UI usando solo tokens de Titan, sin componentes predefinidos.

> Alcance de esta carpeta: **specs de componentes/layout**.  
> Para primitives (spacing, typography, borders, elevation, colors), usar `tokens/foundations/`.

## Contenido

- **`table-borderless.json`** — Especificación de la tabla borderless: tokens de contenedor, celdas, separadores, hover, iconos de ordenación (Lucide) y menú de acciones (Editar / Clonar / Borrar). Ver [docs/table-borderless.md](../docs/table-borderless.md) para la documentación completa (tokens + reglas CSS + convención de iconos).

- **`navbar.json`** — Navbar basada en PDF: izquierda Change Product + lockup Anillo+Product Name; derecha icon buttons neutrales + avatar + chevron. Ver [docs/logos-and-navbar.md](../docs/logos-and-navbar.md).

- **`copy-and-links.json`** — Convención copy: títulos/cabeceros/cuerpo siempre steel; color de tema solo para enlaces. Ver [docs/copy-and-links.md](../docs/copy-and-links.md).

- **`drawer.json`** — Drawer: panel deslizante con overlay debajo; header (título + botón cerrar X ghost) y body. Ver [docs/drawer.md](../docs/drawer.md).

- **`menu.json`** — Menu (y submenus): tokens de contenedor e ítems; estructura MenuTrigger, Menu, MenuItem (titan-aria/React Aria). Submenus heredan los mismos tokens. Esta spec es referencia operativa para mantener consistencia Aria + tokens. Ver [docs/menu-and-select.md](../docs/menu-and-select.md).

- **`select.json`** — Select: trigger + popover + listbox; tokens de botón, popover e ítems; estructura Select, Button, Popover, ListBox, ListBoxItem (titan-aria/React Aria). Esta spec es referencia operativa para mantener consistencia Aria + tokens. Ver [docs/menu-and-select.md](../docs/menu-and-select.md).

- **`grid.json`** — Grid de layout 16 columnas; contenido centrado max 1920px; "N columnas" = span N. Ver [docs/grid.md](../docs/grid.md).

- **`template.json`** — Template de página: navbar 100% width; debajo contenedor contenido centrado max 1920px (responsive 1440, 1280) con grid 16 cols; sidebar flotante; drawer overlay. Ver [docs/template.md](../docs/template.md).

- **`button.json`** — Button, Icon Button y variantes destructivas/neutral-base; jerarquias, anatomia y estados obligatorios segun PDF. Ver [docs/button.md](../docs/button.md).

- **`dialog.json`** — Contrato de Dialog (anatomia, tokens, interacciones, estados), con ilustracion opcional. Ver [docs/dialog.md](../docs/dialog.md).

- **`breadcrumb.json`** — Breadcrumb jerarquico con semantica aria, separadores y reglas de overflow/responsive. Ver [docs/breadcrumb.md](../docs/breadcrumb.md).

- **`tabs.json`** — Tabs para secciones hermanas: anatomia, estados (`default/hover/selected/disabled`), semantica aria y overflow responsive. Ver [docs/tabs.md](../docs/tabs.md).

- **`pagination.json`** — Pagination para listas/tablas multipagina: estructura, estados, variantes (`default-pagination`, `simple-pagination`) y reglas de accesibilidad. Ver [docs/pagination.md](../docs/pagination.md).

## Uso

Al montar el repo de tokens, se puede indicar a Cursor (o al MCP): *“Para tablas tipo reportes, usa la spec `foundations/table-borderless.json` y los tokens documentados en `docs/table-borderless.md`.”*

Para ownership de componentes y precedencia entre capas, usar:

- [docs/integration/decision-policy.md](../docs/integration/decision-policy.md)
- [docs/integration/component-inventory.md](../docs/integration/component-inventory.md)

Nota de ownership: el camino por defecto es React Aria + tokens/foundations (directo o con wrappers `titan-aria`); las specs en `foundations/` definen el contrato visual/estructural.

## Separacion con tokens/foundations

- `foundations/` (esta carpeta): contratos de estructura/composicion para componentes y layouts.
- `tokens/foundations/`: primitives fuente de `titan.css`.

No mezclar ambos tipos en la misma ruta para evitar resoluciones ambiguas en MCP y reglas de generacion.
