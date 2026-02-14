# Foundations

Specs en JSON y convenciones para que implementaciones (o Cursor/MCP) puedan replicar patrones de UI usando solo tokens de Titan, sin componentes predefinidos.

## Contenido

- **`table-borderless.json`** — Especificación de la tabla borderless: tokens de contenedor, celdas, separadores, hover, iconos de ordenación (Lucide) y menú de acciones (Editar / Clonar / Borrar). Ver [docs/table-borderless.md](../docs/table-borderless.md) para la documentación completa (tokens + reglas CSS + convención de iconos).

- **`navbar.json`** — Navbar: a la izquierda icono 9 puntos (LayoutGrid) + logo según tema; a la derecha ítems + avatar (reutilizar tokens de avatar). Sin texto junto al logo. Ver [docs/logos-and-navbar.md](../docs/logos-and-navbar.md).

- **`copy-and-links.json`** — Convención copy: títulos/cabeceros/cuerpo siempre steel; color de tema solo para enlaces. Ver [docs/copy-and-links.md](../docs/copy-and-links.md).

- **`drawer.json`** — Drawer: panel deslizante con overlay debajo; header (título + botón cerrar X ghost) y body. Ver [docs/drawer.md](../docs/drawer.md).

- **`menu.json`** — Menu (y submenus): tokens de contenedor e ítems; estructura MenuTrigger, Menu, MenuItem (titan-aria). Submenus heredan los mismos tokens. Si `Menu` es oficial en Titan React para la versión del producto, esta spec se usa como fallback/reference. Ver [docs/menu-and-select.md](../docs/menu-and-select.md).

- **`select.json`** — Select: trigger + popover + listbox; tokens de botón, popover e ítems; estructura Select, Button, Popover, ListBox, ListBoxItem (titan-aria). Si `Select` es oficial en Titan React para la versión del producto, esta spec se usa como fallback/reference. Ver [docs/menu-and-select.md](../docs/menu-and-select.md).

- **`grid.json`** — Grid de layout 16 columnas; contenido centrado max 1920px; "N columnas" = span N. Ver [docs/grid.md](../docs/grid.md).

- **`template.json`** — Template de página: navbar 100% width; debajo contenedor contenido centrado max 1920px (responsive 1440, 1280) con grid 16 cols; sidebar flotante; drawer overlay. Ver [docs/template.md](../docs/template.md).

## Uso

Al montar el repo de tokens, se puede indicar a Cursor (o al MCP): *“Para tablas tipo reportes, usa la spec `foundations/table-borderless.json` y los tokens documentados en `docs/table-borderless.md`.”*

Para ownership de componentes y precedencia entre capas, usar:

- [docs/integration/decision-policy.md](../docs/integration/decision-policy.md)
- [docs/integration/component-inventory.md](../docs/integration/component-inventory.md)

Nota de ownership: cuando un componente sea oficial en Titan React, su implementación debe venir de Titan React; la spec local en `foundations/` queda como fallback/reference hasta su retirada.
