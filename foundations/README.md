# Foundations

Specs en JSON y convenciones para que implementaciones (o Cursor/MCP) puedan replicar patrones de UI usando solo tokens de Titan, sin componentes predefinidos.

## Contenido

- **`table-borderless.json`** — Especificación de la tabla borderless: tokens de contenedor, celdas, separadores, hover, iconos de ordenación (Lucide) y menú de acciones (Editar / Clonar / Borrar). Ver [docs/table-borderless.md](../docs/table-borderless.md) para la documentación completa (tokens + reglas CSS + convención de iconos).

- **`navbar.json`** — Navbar con logo a la izquierda; mapeo tema → archivo de logo (`assets/logos/logo-{tema}.svg`). Audiense y neutral usan `logo-audiense.svg`. Ver [docs/logos-and-navbar.md](../docs/logos-and-navbar.md).

## Uso

Al montar el repo de tokens, se puede indicar a Cursor (o al MCP): *“Para tablas tipo reportes, usa la spec `foundations/table-borderless.json` y los tokens documentados en `docs/table-borderless.md`.”* Para navbars: *“Para una navbar del tema demand (o cualquier tema), usa la spec `foundations/navbar.json` y coloca el logo correspondiente a la izquierda.”*
