# Copy: steel para texto; color de tema solo para enlaces

**Convención Titan:** Títulos, cabeceros de sección y cuerpo de texto son siempre **steel** (gris). El color de marca/tema se reserva para **enlaces** y elementos interactivos. Así se evita que los cabeceros (p. ej. "CLUSTER SIZE", "DISTINCTIVE AFFINITIES") se confundan con los links (mismo color + subrayado).

## Tokens por uso

| Uso | Token(s) | Valor típico |
|-----|----------|--------------|
| Título de card / cabecero principal | `--text-title`, `--copy-slot-title`, `--card-title-slot-color` | steel-900 |
| Cabecero de sección (dentro de card) | `--copy-slot-title`, `--text-title` | steel-900 |
| Cuerpo, datos, valores | `--text-body`, `--copy-slot-body`, `--card-body-slot-color` | steel-800 |
| Secundario / muted | `--text-muted`, `--copy-slot-muted`, `--card-meta-slot-color` | steel-600 |
| **Enlaces** | `--text-link`, `--text-primary-active`, `--text-secondary` | color de tema (blueberry, demand, etc.) |
| Botones, tabs activos | tokens de botón / tab del tema | color de tema |

## Qué no hacer

- No usar `--text-primary-active` ni `--text-secondary` en cabeceros de sección, títulos de card ni párrafos.
- No poner el mismo color de tema en un label de sección y en un link; el link debe ser el único elemento con ese color en el bloque (junto con subrayado o estilo de enlace).

## Resumen

**Todo lo que sea “solo texto” (títulos, cabeceros, body) = steel. Color de tema = solo enlaces e interactivos.**
