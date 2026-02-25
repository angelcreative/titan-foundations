# Tokens del Design System Titan

> Fuente de verdad: `tokens/foundations/*.json` y `tokens/css/titan.css`  
> Los JSON definen primitivos; `titan.css` los expone como variables CSS y añade la capa semántica.

## 1. Arquitectura general

Los tokens se organizan en **tres capas**:

```
┌─────────────────────────────────────────────────────────────────┐
│  CAPA 1: PRIMITIVOS (tokens/foundations/*.json)                │
│  Valores crudos: colores hex, px, pesos de fuente               │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  CAPA 2: SEMÁNTICOS + SLOTS (tokens/css/titan.css)              │
│  Variables CSS que referencian primitivos                        │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  CAPA 3: TEMAS (tokens/themes/_*.css)                           │
│  Overrides por producto: neutral, insights, demand, etc.         │
└─────────────────────────────────────────────────────────────────┘
```

## 2. Origen de los tokens

### 2.1 Fuentes primitivas: `tokens/foundations/`

| Archivo | Contenido | Ejemplo de clave |
|---------|-----------|------------------|
| `colors-solid.json` | Colores sólidos (hex) | `color-black-100`, `color-blueberry-600` |
| `colors-opacity.json` | Colores con alpha (hex 8 dígitos) | `$color-steel-10`, `$color-white-50` |
| `spacing.json` | Escala de espaciado | `spacing-5xs` (2px) → `spacing-7xl` (160px) |
| `typography.json` | Tamaños, pesos, line-heights, composiciones | `font-size-s`, `font-leading-2xl`, `body-m-500` |
| `borders.json` | Radios y grosores | `rounded-s`, `stroke-m`, `border-dft` |
| `elevation.json` | Sombras, composiciones | `box-shadow-1`, `elevation-2` |

### 2.2 Especificaciones de componentes: `foundations/` (raíz)

Aquí van **reglas de componentes** (navbar, menu, button, etc.), no primitivos:

- `anatomy`, `tokens`, `status`, `variants`
- Referencias a tokens con `$`: `$spacing-s`, `$color-steel-700`, `$rounded-m`
- El prefijo `$` indica que el valor es un token de `tokens/foundations` o `titan.css`

### 2.3 Salida final: `tokens/css/titan.css`

- **No hay build automático**: el archivo `titan.css` se mantiene manualmente sincronizado con los JSON.
- Los comentarios indican el origen: `/* Spacing (foundations/spacing.json) */`.
- Ver sección [Build manual](#9-nota-sobre-el-build-manual) para más detalle.

---

## 3. Convención de nomenclatura

### 3.1 Primitivos (JSON)

| Patrón | Significado | Ejemplo |
|--------|-------------|---------|
| `{categoría}-{nombre}-{escala}` | Escala numérica | `color-black-100`, `color-steel-600` |
| `{categoría}-{tamaño}` | Tamaño semántico | `spacing-xs`, `spacing-2xl`, `font-size-m` |
| `{categoría}-{tipo}` | Tipo específico | `rounded-s`, `stroke-m`, `font-weight-500` |
| `{composición}-{rol}` | Composición | `border-dft`, `elevation-1`, `text-button` |

### 3.2 Escalas de color

**Solid (100–900):**

- Más claro → más oscuro: `100` (muy claro) → `900` (muy oscuro).
- Ejemplo: `color-black-100` (#f7f7f7) → `color-black-900` (#1f1f1f).

**Opacity (10–90):**

- Más transparente → más opaco: `10` (10%) → `90` (90%).
- Ejemplo: `color-steel-10` (rgba(109,131,139,0.1)).

**Familias:** black, white, steel, blue, ocean, indigo, blueberry, violet, purple, pink, magenta, red, tomato, pomegranate, orange, mango, yellow, lime, green, teal, aquamarine, turquoise, avocado, brown, cacao, error, disabled, information, success, warning.

### 3.3 Spacing

| Token | Valor | Uso típico |
|-------|-------|------------|
| `spacing-5xs` | 2px | Gaps mínimos |
| `spacing-4xs` | 4px | Icono–texto |
| `spacing-2xs` | 8px | Padding interno |
| `spacing-s` | 12px | |
| `spacing-m` | 16px | Base |
| `spacing-l` | 24px | |
| `spacing-xl` | 32px | |
| `spacing-2xl` | 40px | |
| `spacing-3xl` | 48px | |
| `spacing-4xl` | 64px | |
| `spacing-5xl` | 80px | |
| `spacing-7xl` | 160px | |

### 3.4 Typography

| Tipo | Patrón | Ejemplo |
|------|--------|---------|
| Tamaño | `font-size-{s\|m\|l\|xl\|2xl\|3xl\|4xl}` | `font-size-s` (12px) |
| Line-height | `font-leading-{s\|m\|l\|xl\|2xl\|3xl\|4xl\|5xl}` | `font-leading-2xl` (24px) |
| Peso | `font-weight-{400\|500\|600}` | `font-weight-500` |
| Composición | `{rol}-{tamaño}-{peso}` | `body-m-500`, `heading-xl-600` |

### 3.5 Slots (componentes)

| Patrón | Significado | Ejemplo |
|--------|-------------|---------|
| `{componente}-slot-{propiedad}` | Propiedad de un componente | `card-slot-bg`, `card-slot-radius` |
| `{categoría}-slot-{rol}` | Rol semántico | `copy-slot-title`, `icon-slot-secondary` |
| `surface-slot-{rol}` | Superficie | `surface-slot-hover`, `surface-slot-card` |

---

## 4. Referencias entre tokens

### 4.1 En JSON

**Referencia simple: `{token-name}`**

```json
"text-button": {
  "value": {
    "fontFamily": "{font-audiense}",
    "fontSize": "{font-size-l}",
    "lineHeight": "{font-leading-m}"
  }
}
```

**Referencia con prefijo `$`: `{$token-name}`**

```json
"box-shadow-1": {
  "value": {
    "color": "{$color-steel-10}"
  }
}
```

**En `colors-opacity.json`:** las claves usan `$` para distinguirse de solid:

```json
"$color-white-10": { "value": "#ffffff1a" }
```

### 4.2 En CSS

**Variables CSS:** `--token-name`

```css
--color-black-100: #f7f7f7;
--spacing-s: 12px;
--card-slot-bg: var(--surface-slot-card);
```

**Referencias encadenadas:**

```css
--card-slot-bg: var(--surface-slot-card);
--surface-slot-card: var(--color-white-900);
```

---

## 5. Cómo crear tokens (paso a paso para consumidores)

Esta sección explica cómo un **consumidor** del Design System puede crear o extender tokens en su proyecto.

### 5.1 Cuándo crear tokens propios

- Necesitas un valor que **no existe** en Titan (ej. un color de marca específico).
- Quieres un **alias semántico** para tu app (ej. `--app-header-bg`).
- Necesitas **extender** un componente con tokens propios.

### 5.2 Paso 1: Decidir el tipo de token

| Tipo | Dónde definirlo | Ejemplo |
|------|-----------------|---------|
| **Primitivo nuevo** | Solo si contribuyes al repo Titan | Nuevo color en `colors-solid.json` |
| **Semántico / alias** | En tu CSS de app | `--app-sidebar-bg: var(--color-steel-100)` |
| **Override de tema** | En tu archivo de tema | `--button-primary: var(--color-marca-600)` |

**Regla:** Si solo consumes Titan, **no edites** `tokens/foundations/*.json` ni `tokens/css/titan.css`. Define tus tokens en tu propio CSS.

### 5.3 Paso 2: Crear un token semántico (consumidor)

**Objetivo:** Tener un alias que referencie un token de Titan.

1. Carga Titan antes que tu CSS:

```html
<link rel="stylesheet" href="/path/to/tokens/css/titan.css" />
<link rel="stylesheet" href="/path/to/tokens/themes/_neutral.css" />
<link rel="stylesheet" href="/path/to/mi-app.css" />
```

2. En `mi-app.css`, define tu token:

```css
:root {
  --mi-sidebar-bg: var(--color-steel-100);
  --mi-card-accent: var(--color-blueberry-500);
}
```

3. Usa el token en tus componentes:

```css
.mi-sidebar {
  background: var(--mi-sidebar-bg);
}
```

### 5.4 Paso 3: Crear un token que cambie por tema

**Objetivo:** Que tu token use el color primario del tema activo.

1. En tu CSS, referencia tokens que ya cambian por tema:

```css
:root {
  --mi-cta-bg: var(--button-primary);
  --mi-cta-text: var(--text-on-primary);
}
```

2. O define overrides por tema en tu app:

```css
html[data-theme="insights"] {
  --mi-brand-accent: var(--color-blueberry-600);
}

html[data-theme="demand"] {
  --mi-brand-accent: var(--color-aquamarine-600);
}
```

### 5.5 Paso 4: Extender un slot de componente

**Objetivo:** Cambiar el aspecto de un componente Titan sin tocar su código.

1. Los slots de Titan son variables CSS. Puedes sobrescribirlas:

```css
/* En tu app, después de cargar Titan */
:root {
  --card-slot-radius: var(--rounded-m); /* override: cards más redondeadas */
  --card-slot-pad: var(--spacing-xl);   /* override: más padding */
}
```

2. O en un scope específico:

```css
.mi-dashboard .card {
  --card-slot-bg: var(--color-blueberry-100);
}
```

### 5.6 Paso 5: Crear un primitivo (contribuidor al repo Titan)

**Solo si contribuyes al repositorio Titan:**

1. **Color sólido:** Editar `tokens/foundations/colors-solid.json`:

```json
"color-nuevafamilia-100": {
  "value": "#f0f0f0",
  "type": "color",
  "description": "Descripción opcional"
}
```

2. **Sincronizar manualmente** en `tokens/css/titan.css`:

```css
--color-nuevafamilia-100: #f0f0f0;
--color-nuevafamilia-200: #e0e0e0;
/* ... hasta 900 */
```

3. **Spacing:** Editar `tokens/foundations/spacing.json` y añadir la línea correspondiente en `titan.css`.

4. **Typography:** Editar `tokens/foundations/typography.json` y sincronizar en `titan.css`.

> **Importante:** No existe un script que genere `titan.css` desde los JSON. Cada cambio en los JSON debe reflejarse manualmente en `titan.css`. Ver [Nota sobre el build manual](#9-nota-sobre-el-build-manual).

### 5.7 Resumen para consumidores

| Acción | Dónde | Cómo |
|--------|-------|------|
| Usar tokens existentes | En tu CSS/componentes | `var(--card-slot-bg)` |
| Crear alias semántico | Tu CSS | `:root { --mi-token: var(--color-steel-100); }` |
| Override por tema | Tu CSS | `html[data-theme="X"] { --mi-token: ... }` |
| Override de slot | Tu CSS | `:root { --card-slot-radius: var(--rounded-l); }` |
| Añadir primitivo | Solo contribuidores | JSON + `titan.css` (manual) |

---

## 6. Cómo funcionan los temas

### 6.1 Orden de carga

1. `tokens/css/titan.css` (primitivos + semánticos base).
2. Un tema: `tokens/themes/_insights.css`, `_neutral.css`, etc.
3. Estilos de componentes: `titan-compositions/styles`, `titan-aria/styles`.

### 6.2 Activación

```html
<html data-theme="insights">
```

### 6.3 Temas disponibles

| Tema | Color primario |
|------|----------------|
| `neutral` | black |
| `insights` | blueberry |
| `audiense` | pomegranate |
| `demand` | aquamarine |
| `linkedin` | indigo |
| `tweetbinder` | ocean |

---

## 7. Tokens por uso (referencia rápida)

| Uso | Token(s) |
|-----|----------|
| Título / cabecero | `--copy-slot-title`, `--card-title-slot-color` |
| Cuerpo de texto | `--copy-slot-body`, `--card-body-slot-color` |
| Secundario / muted | `--copy-slot-muted`, `--card-meta-slot-color` |
| Enlaces | `--text-link`, `--text-primary-active`, `--text-secondary` |
| Fondo de card | `--card-slot-bg`, `--surface-slot-card` |
| Borde por defecto | `--border-slot-default`, `--card-slot-border` |
| Espaciado | `--spacing-s`, `--spacing-m`, `--spacing-l` |
| Radio de card | `--card-slot-radius`, `--rounded-s` |
| Sombra | `--elevation-slot-1`, `--box-shadow-1` |

---

## 8. Flujo completo

```
┌──────────────────────────────────────────────────────────────────┐
│  tokens/foundations/*.json                                        │
│  (colors-solid, colors-opacity, spacing, typography, borders,     │
│   elevation)                                                       │
└──────────────────────────────────────────────────────────────────┘
                              │
                              │  sincronización manual
                              ▼
┌──────────────────────────────────────────────────────────────────┐
│  tokens/css/titan.css                                             │
│  - Primitivos en :root                                            │
│  - Slots semánticos (copy-slot-*, icon-slot-*, surface-slot-*)    │
│  - Slots de componentes (navbar-slot-*, card-slot-*, etc.)        │
└──────────────────────────────────────────────────────────────────┘
                              │
                              │  cargar
                              ▼
┌──────────────────────────────────────────────────────────────────┐
│  tokens/themes/_*.css                                             │
│  - Override de variables por data-theme                           │
└──────────────────────────────────────────────────────────────────┘
                              │
                              │  consumir
                              ▼
┌──────────────────────────────────────────────────────────────────┐
│  Tu aplicación                                                     │
│  - var(--card-slot-bg), var(--mi-token), etc.                     │
└──────────────────────────────────────────────────────────────────┘
```

---

## 9. Nota sobre el build manual

**"No hay build automático"** significa lo siguiente:

- Los archivos `tokens/foundations/*.json` son la **fuente de verdad** para los valores primitivos.
- El archivo `tokens/css/titan.css` **no se genera** automáticamente a partir de esos JSON.
- No existe un script (Style Dictionary, Token Transformer, etc.) que lea los JSON y produzca `titan.css`.
- Cualquier cambio en un JSON debe **reflejarse manualmente** en `titan.css` para que tenga efecto en la aplicación.

**Implicaciones:**

1. **Consumidores:** No os afecta. Usáis `titan.css` tal cual; no necesitáis los JSON.
2. **Contribuidores:** Al añadir o modificar tokens en los JSON, debéis actualizar también `titan.css` en el mismo commit.
3. **Futuro:** Se podría introducir un build (ej. Style Dictionary) para automatizar esto; hoy no está implementado.

---

## 10. Checklist para nuevos tokens

- [ ] ¿Es un primitivo? → Añadir en el JSON correspondiente en `tokens/foundations/`.
- [ ] ¿Contribuyes al repo? → Sincronizar en `tokens/css/titan.css`.
- [ ] ¿Eres consumidor? → Definir en tu propio CSS como alias o override.
- [ ] ¿Debe cambiar por tema? → Usar tokens que ya cambian o definir overrides por `data-theme`.
- [ ] ¿Es un slot de componente? → Usar o extender `{componente}-slot-{propiedad}`.
