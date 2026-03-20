# Borderless Table

Goal: define token and behavior conventions so any implementation can render the same borderless table style.

## Visual contract

- No outer container border.
- Horizontal separators only.
- Header separator darker than row separators.
- Row hover state enabled.
- Sorting and action menus with Lucide icon conventions.

## Token guidance

Use Titan semantic tokens for:
- header and row separators,
- table text,
- icon buttons,
- popover/menu surface,
- destructive item states.

## Interaction conventions

- Sort controls use consistent iconography.
- Row action menu uses kebab trigger.
- Destructive action item is visually distinct.

## React Aria/Titan table notes

- Use `TitanColumn id` for identity.
- Use `allowsSorting` where needed.
- Keep `TitanRow`/`TitanCell` mapping consistent.

Spec: `component-specs/table-borderless.json`.
