# Canonical Terminology (Titan Foundations)

This glossary is the single naming contract for specs, docs, rules, and `/titan` command behavior.

If any source uses aliases or alternative labels, this glossary wins.

## Global naming rules

- Use `kebab-case` for canonical keys and labels.
- Keep state names stable and explicit.
- Do not mix aliases (`textButton`, `baseL`, `text button`, etc.).
- If a component defines canonical terms in `foundations/*.json`, those names are mandatory.

## Shared canonical states

- `default`
- `hover`
- `pressed`
- `disabled`

Additional state names are component-specific (for example `selected`, `focus-visible`, `loading`).

## Button

- Variants: `primary`, `secondary`, `tertiary`, `text-button`, `base`, `base-l`
- Surface variants (neutral icon button): `dark-surface`, `light-surface`
- States: `default`, `hover`, `pressed`, `disabled`
- Visual policy: no border/stroke/outline in any button variant; `border: none`

## Navbar

- Groups: `left-group`, `right-group`
- Left group items: `change-product-button`, `brand-lockup`
- Right group items: `action-icon-buttons`, `user-avatar`, `user-menu-chevron-button`
- Chevron states: `chevron-down`, `chevron-up`

## Menu

- States: `default`, `hover`, `pressed`, `selected`, `disabled`
- Variants: `search-item`, `profile-item`, `notifications-item`, `destructive-item`
- Submenu key: `max-nesting-levels`

## Dialog

- Required parts: `overlay`, `container`, `title`, `body`
- Optional parts: `illustration`, `close-button`, `footer-actions`, `divider-header`, `divider-footer`
- States: `default`, `hover`, `pressed`, `disabled`, `loading`
- Feedback: `success`, `error`, `empty`

## Breadcrumb

- Parts: `breadcrumb-nav`, `ordered-list`, `item`, `separator`, `current-item`, `overflow-ellipsis-item`
- States: `default`, `hover`, `pressed`, `focus-visible`, `disabled`

## Tabs

- Parts: `tabs-container`, `tab-list`, `tab-trigger`, `tab-panel`
- States: `default`, `hover`, `selected`, `disabled`

## Pagination

- Parts: `pagination-container`, `pagination-nav`, `page-button`, `previous-button`, `next-button`, `ellipsis-item`
- States: `default`, `hover`, `selected`, `disabled`
- Densities: `default-density`, `compact-density`
- Variants: `default-pagination`, `simple-pagination`
- Visual policy: no border/stroke/outline in pagination controls; `border: none`
