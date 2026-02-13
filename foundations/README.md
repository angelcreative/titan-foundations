# Foundations

Specs en JSON y convenciones para que implementaciones (o Cursor/MCP) puedan replicar patrones de UI usando solo tokens de Titan, sin componentes predefinidos.

## Contenido

- **`table-borderless.json`** — Especificación de la tabla borderless: tokens de contenedor, celdas, separadores, hover, iconos de ordenación (Lucide) y menú de acciones (Editar / Clonar / Borrar). Ver [docs/table-borderless.md](../docs/table-borderless.md) para la documentación completa (tokens + reglas CSS + convención de iconos).

- **`navbar.json`** — Navbar: a la izquierda icono 9 puntos (LayoutGrid) + logo según tema; a la derecha ítems + avatar (reutilizar tokens de avatar). Sin texto junto al logo. Ver [docs/logos-and-navbar.md](../docs/logos-and-navbar.md).

- **`copy-and-links.json`** — Convención copy: títulos/cabeceros/cuerpo siempre steel; color de tema solo para enlaces. Ver [docs/copy-and-links.md](../docs/copy-and-links.md).

- **`drawer.json`** — Drawer: panel deslizante con overlay debajo; header (título + botón cerrar X ghost) y body. Ver [docs/drawer.md](../docs/drawer.md).

- **`menu.json`** — Menu (y submenus): tokens de contenedor e ítems; estructura MenuTrigger, Menu, MenuItem (titan-aria). Submenus heredan los mismos tokens. Ver [docs/menu-and-select.md](../docs/menu-and-select.md).

- **`select.json`** — Select: trigger + popover + listbox; tokens de botón, popover e ítems; estructura Select, Button, Popover, ListBox, ListBoxItem (titan-aria). Ver [docs/menu-and-select.md](../docs/menu-and-select.md).

## Uso

Al montar el repo de tokens, se puede indicar a Cursor (o al MCP): *“Para tablas tipo reportes, usa la spec `foundations/table-borderless.json` y los tokens documentados en `docs/table-borderless.md`.”* Para navbars: *“Para una navbar del tema demand (o cualquier tema), usa la spec `foundations/navbar.json` y coloca el logo correspondiente a la izquierda.”*
