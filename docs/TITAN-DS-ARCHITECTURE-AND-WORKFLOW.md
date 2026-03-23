# Titan DS: arquitectura, MCP, workflow de usuario

**Audiense Titan Design System** — documento de referencia para ingeniería y diseño. Describe el **estado actual** del monorepo `titan-foundations`, del paquete `titan-compositions` y del **worker MCP** que los consume. No sustituye otros documentos; enlaza donde haya detalle ya escrito.

---

## 1. Verificación del workflow “carpeta madre + apps”

Este patrón es **correcto** y es estándar en la industria:

| Afirmación | ¿Correcto? |
|------------|------------|
| Podés crear **cualquier carpeta** en local (nombre libre: `titan-main`, `MiProyecto`, `X`, etc.). | Sí. El nombre no afecta al mecanismo. |
| En la **raíz** hacés **una instalación** de dependencias (p. ej. `pnpm install`). | Sí. |
| Las **apps** viven en subcarpetas (`apps/midemod`, `apps/pencil`, …) con su propio `package.json`. | Sí, en un **monorepo con workspaces** (pnpm, npm o yarn). |
| Eso evita reinstalar todo en cada subcarpeta como si fuera un repo independiente. | Sí, con la configuración de workspace adecuada. |
| **Cursor / Claude Code** deben abrir la **carpeta raíz** del monorepo, no solo una app suelta. | Sí, para ver `node_modules`, lockfile y todas las apps. |

**Qué no es este patrón:** no es una funcionalidad “especial” del MCP. El MCP **no crea** el `pnpm-workspace.yaml` ni la estructura de carpetas; eso lo definís vos o una plantilla de equipo.

**Relación con MCP `titan_setup`:** esa herramienta devuelve un comando de instalación (`npm install titan-compositions react-aria-components lucide-react @tabler/icons-react`) y, según el `target`, archivos de skill para `.cursor/` o `.claude/`. **No** genera el monorepo. En un workspace, ese `install` suele ejecutarse en la **raíz** o las dependencias se declaran en el `package.json` raíz / por app según vuestra convención.

Más detalle de política por entorno (persistente vs efímero): **`docs/integration/mcp-usage.md`**.

---

## 2. Repositorio `titan-foundations` (monorepo DS)

| Área | Rol |
|------|-----|
| `tokens/foundations/` | Primitivos (JSON) — fuente del build de tokens. |
| `tokens/themes/` | Temas (`_insights.css`, `_brand.css`, …). |
| `tokens/css/titan.css` | Salida consolidada de tokens (tras `npm run build:tokens` en raíz). |
| `packages/titan-compositions/` | Librería React publicable: componentes + `titan-compositions.css`. |
| `playground/web/` | App de demostración local. |
| `docs/` | Documentación técnica: `core/`, `components/`, `anatomies/`, `integration/`. |
| `component-specs/` | Contratos de componentes (JSON). |
| `docs/integration/component-registry.json` | Catálogo para herramientas MCP (componentes, temas, patterns). |
| `AGENTS.md` | Política global para agentes (orden: compositions → contracts → anatomies → BLOCKER). |
| `.claude/skills/titan-foundations/SKILL.md` | Skill para trabajo **dentro** de este repo (rutas, anatomías, specs). |

**Superficie de página / contenido principal:** `--surface-page`, `--surface-slot-page` y `--background-body` apuntan a **`--color-white-900`** (fondo de app y main content; ya no se usa gris claro `black-100` como canvas de página).

**Skill `titan-foundations` vs skill `titan-ds` (worker):** el primero es para **editar** foundations y composiciones en este repo. El segundo es para **consumir** el DS en apps externas vía MCP (registry, patterns, validate).

---

## 3. Paquete `titan-compositions`

- **Nombre npm:** `titan-compositions` (versión en `packages/titan-compositions/package.json`).
- **Exports:** `titan-compositions` (JS/TS), `titan-compositions/styles` (CSS).
- **Base:** React Aria Components + variables CSS Titan.
- **Peers:** `react`, `react-dom`, `react-aria-components`, `@internationalized/date`, `lucide-react`, `@tabler/icons-react`.

Política **import-first:** si existe el componente en `titan-compositions`, importarlo; no recrear markup/CSS equivalente. Ver `docs/integration/mcp-usage.md` y `AGENTS.md`.

---

## 4. Worker MCP (`mcp-remote-worker`)

### 4.1 Rol

Servidor **Model Context Protocol** desplegado como **Cloudflare Worker**. No empaqueta el repo completo: obtiene datos con **`fetch`** a GitHub raw y CDN (jsDelivr) del repo público `titan-foundations`, y expone **herramientas** para IDEs y agentes.

### 4.2 Fuentes remotas (típicas)

- `raw.githubusercontent.com/angelcreative/titan-foundations/main/…`
- `cdn.jsdelivr.net/gh/angelcreative/titan-foundations@main/…`

La versión del worker está definida en código (`WORKER_VERSION` en `src/index.ts`).

### 4.3 Temas soportados (lista en código)

Incluye entre otros: `insights` (default), `neutral`, `default`, `audiense`, `demand`, `linkedin`, `tweetbinder`, `digital`, `brand`. Cada nombre mapea a un fichero `tokens/themes/_<nombre>.css` en el repo.

### 4.4 Herramientas MCP expuestas

| Herramienta | Uso breve |
|-------------|-----------|
| `titan_syncFromGithub` | Sincronizar metadatos / mapas desde el repo. |
| `titan_getTheme` | Tema, URLs de CSS, snippets bootstrap (antes de generar UI). |
| `titan_getOverview` | Resumen o visión completa del design system. |
| `titan_getComponentRegistry` | Qué componentes existen; detalle con `component='TitanX'`. |
| `titan_getCompositionPattern` | Recetas JSX por patrón o categoría. |
| `titan_validateAndRewrite` | Validar código Titan; rewrites seguros (p. ej. spacing). |
| `titan_getFoundations` | Foundations JSON o categorías de tokens semánticos. |
| `titan_getDesignQualityGuidelines` | Guías DO/DON'T (calidad visual, anti–“AI slop”). |
| `titan_setup` | Comando `npm install` + skill files (según `target`). |

Existen alias con nombres tipo `titan.getTheme` → `titan_getTheme` (ver `normalizeToolName` en `src/index.ts`).

### 4.5 `titan_setup` — parámetro `target`

| `target` | Comportamiento |
|----------|----------------|
| `cursor` | Escribir skills en `.cursor/skills/titan-ds/`. |
| `claude-code` | Escribir skills en `.claude/skills/titan-ds/`. |
| `both` | Ambos. |
| `make` | Figma Make / entornos sin skills locales: **no** escribir `.cursor`/`.claude`; solo referencia al install + MCP. |

### 4.6 Skills embebidos en el worker

El fichero `src/index.ts` incluye un objeto `SKILL_FILES` con el mismo contenido que los `.md` bajo `.cursor/skills/titan-ds/` (p. ej. `SKILL.md`, `THEME_GUIDE.md`, `VALIDATION_RULES.md`). **Riesgo operativo:** si se editan solo los ficheros en disco y no el worker, el MCP puede servir texto desactualizado hasta el próximo deploy. Convención de equipo: al cambiar skills, actualizar **ambos** o automatizar la generación.

### 4.7 Limitaciones

- Dependencia de **red** (GitHub, jsDelivr) y posibles **límites de rate** o caché.
- El **registry** embebido puede ir por detrás del último `npm publish` de `titan-compositions`; el skill ya indica verificar `node_modules` cuando haya duda.
- **Límites de Workers** (CPU, tiempo, subrequests): ver documentación Cloudflare si aplica operación en producción.

### 4.8 Despliegue

Desde el repo del worker: `npx wrangler deploy` (y `wrangler dev` para local). Política Cloudflare: ver `AGENTS.md` del repo `mcp-remote-worker`.

---

## 5. Tema Brand (resumen)

En `tokens/themes/_brand.css`: primario **Pulse** (oro), reglas especiales de **Ground** solo donde el tema lo define (botones secundarios/terciarios, ciertos controles, etc.); muchos superficies/componentes usan paleta **neutral** (black/steel). Detalle narrativo: **`.cursor/skills/titan-ds/THEME_GUIDE.md`** (worker) o comentarios en `_brand.css`.

---

## 6. Cómo decirle a cada herramienta que use Titan

La palabra suelta **“Titan”** es ambigua (otras tecnologías con el mismo nombre). Usad siempre el nombre completo y el stack.

### 6.1 Frase base (copiar/pegar)

```text
Audiense Titan Design System: UI con React, paquete titan-compositions, estilos con variables CSS del repo titan-foundations (titan.css + tema). Colores: tokens semánticos (var(--text-primary), …), no hex sueltos. Comportamiento: react-aria-components.
```

### 6.2 Cursor / Claude Code (workspace con repo)

- Abrí la **raíz** del proyecto (idealmente la raíz del monorepo).
- Activá la política con: **“Titan DS”**, **“Titan foundations”**, o cumpliendo `AGENTS.md` del repo.
- Con MCP: usad herramientas `titan_getComponentRegistry`, `titan_getCompositionPattern`, `titan_validateAndRewrite`, etc.
- **MCP vs disco:** usad MCP para descubrimiento y validación; el código fuente y `node_modules` están en el workspace. No repetir `npm install` en cada chat si la carpeta ya está instalada.

### 6.3 Figma Make / v0 (sin acceso a vuestro repo)

- No leen `AGENTS.md` solos: pegad el **brief de la sección 6.1** y, si aplica, **“configurar MCP Titan”** para herramientas.
- Para `titan_setup` usad `target: "make"` si el entorno no debe recibir skills en `.cursor`/`.claude`.

### 6.4 Invocación mínima por entorno

| Entorno | Qué decir |
|---------|-----------|
| Cursor / Claude | “Titan DS” + workspace en raíz del monorepo |
| Con MCP | “Usa las herramientas Titan MCP (registry, patterns, validate)” |
| v0 / Make | Brief 6.1 + enlace a CSS/bootstrap si lo tenéis |

---

## 7. Workflow para usuario final (una carpeta, varias apps)

1. **Creá una carpeta** en tu equipo (cualquier nombre).
2. **Configurá un monorepo** en esa raíz (p. ej. **pnpm**: `pnpm-workspace.yaml` que incluya `apps/*` u otra convención).
3. **Instalación única en la raíz:** desde esa carpeta, `pnpm install` (o el gestor que uséis). Ahí queda el `node_modules` principal y el lockfile.
4. **Añadí dependencias Titan** en el `package.json` raíz o en cada app, según vuestra política; el comando típico que sugiere MCP incluye `titan-compositions`, `react-aria-components`, `lucide-react`, `@tabler/icons-react`.
5. **Cada app** bajo `apps/<nombre>` tiene su `package.json` y scripts (`dev`, `build`).
6. **Abrí Cursor/Claude en la carpeta raíz**, no solo dentro de una app, para que el asistente vea todo el workspace.
7. **MCP Titan** usalo para consultar componentes, patrones, temas y validar — no sustituye el monorepo; lo complementa.

Ejemplo mínimo de workspace (pnpm):

```yaml
# pnpm-workspace.yaml (en la raíz de tu carpeta X)
packages:
  - 'apps/*'
```

Cada carpeta bajo `apps/` debe tener su propio `package.json`.

---

## 8. Orden de carga CSS (aplicaciones)

1. Fuentes (p. ej. Poppins).
2. `titan.css` (tokens base).
3. Tema (`_insights.css`, `_brand.css`, …).
4. Estilos de `titan-compositions` (`titan-compositions/styles`).
5. `document.documentElement.dataset.theme = '<tema>'` en el HTML/JS raíz.

Detalle: **`.cursor/skills/titan-ds/THEME_GUIDE.md`** (worker) o documentación de integración.

### 8.1 Chrome de página: navbar y breadcrumb

**Regla de espaciado (opt-in por clases, no automático):**

| Pantalla | `main` | Espacio bajo el navbar |
|----------|--------|-------------------------|
| **Navbar + breadcrumb** (misma “franja” de app) | `className="page page--flush-breadcrumb"` y el breadcrumb en `section.page-breadcrumb-host` (no envolver en `.card`). | Sin el hueco extra: el breadcrumb queda pegado al navbar como chrome continuo. |
| **Solo navbar** (sin breadcrumb) | `className="page"` (sin `page--flush-breadcrumb`). | Mantiene el `padding-top` habitual del área de página; es el patrón esperado. |

- **`page--flush-breadcrumb`** solo debe usarse cuando hay **navbar y breadcrumb juntos**. No es un detector automático: si lo aplicas en una vista solo con navbar, perderías el aire superior sin motivo.
- **Breadcrumb aislado** (sin navbar) no es un caso de producto contemplado aquí; el patrón *flush* está pensado para **navbar + breadcrumb**.
- Referencia de implementación: `TitanTwoUpOneDownLayout` en `packages/titan-compositions/`, clases en `titan-compositions.css` (`.page--flush-breadcrumb`, `.page-breadcrumb-host`).

---

## 9. Reglas de iconos en tablas (implementación)

En el repo `titan-foundations`, reglas Cursor: **`.cursor/rules/table-icons.mdc`** (tamaños tbody vs thead, `icon-base` para acciones). Resumen en **VALIDATION_RULES** del skill `titan-ds` (worker).

---

## 10. Documentos relacionados (no duplicados)

| Documento | Contenido |
|-----------|-----------|
| `AGENTS.md` | Política global y orden de ejecución. |
| `docs/README.md` | Índice de `docs/`. |
| `docs/integration/mcp-usage.md` | Contrato MCP, prompts listos, Next.js `"use client"`, entornos. |
| `docs/integration/decision-policy.md` | Decisiones de ownership. |
| `.claude/skills/titan-foundations/SKILL.md` | Navegación dentro del monorepo DS. |
| `mcp-remote-worker/.cursor/skills/titan-ds/` | Skills consumidor + THEME_GUIDE, BOOTSTRAP, etc. |

---

## 11. Diagrama lógico (texto)

```
GitHub: titan-foundations (tokens, themes, titan-compositions fuente, docs, registry JSON)
        │
        ├──► npm: paquete titan-compositions + CSS
        │
        └──► CDN / raw GitHub ──fetch──► Cloudflare Worker (MCP)
                                           │
                                           └──► Herramientas (registry, theme, validate, …)
                                                │
App local (monorepo opcional) ◄────────────────┘
  └── apps/* importan titan-compositions; IDE abre raíz; MCP asiste sin ser el filesystem
```

---

*Última actualización: documento generado para alinear ingeniería y diseño; revisar `WORKER_VERSION` y versiones de paquetes en los `package.json` cuando preparéis releases.*
