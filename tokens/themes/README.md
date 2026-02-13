# Titan themes

Load **one** theme after `titan.css` and set `data-theme="…"` on `<html>`.

## Load order

1. **titan.css** (foundations + semantic tokens; no theme)
2. **One theme file** (e.g. `_demand.css`, `_neutral.css`, `_insights.css`)
3. **titan-aria** styles (if using React Aria + Titan)

Example:

```html
<link rel="stylesheet" href="/tokens/css/titan.css" />
<link rel="stylesheet" href="/tokens/themes/_demand.css" />
```

```html
<html data-theme="demand">
```

## Available themes

All themes share the same token set; only the primary (brand) color changes.

| File             | `data-theme`   | Primary color |
|------------------|----------------|---------------|
| `_neutral.css`   | `neutral` (or none) | Black        |
| `_audiense.css`  | `audiense`     | Pomegranate   |
| `_demand.css`    | `demand`       | Aquamarine    |
| `_insights.css`  | `insights`     | Blueberry     |
| `_linkedin.css`  | `linkedin`     | Indigo        |
| `_tweetbinder.css` | `tweetbinder` | Ocean       |

**Note:** Load `_neutral.css` without `data-theme` for fallback, or set `data-theme="neutral"` explicitly.
