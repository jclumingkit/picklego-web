# picklego-web

This repository uses a **vertical codebase** layout: code is grouped by what it does (domain/vertical), not by technical type (`components`, `hooks`, `utils`, etc).

## Structure

```txt
src/
  app/                  # App composition, providers, bootstrapping
  design-system/        # Reusable UI primitives and theme tokens
  shared/               # Cross-vertical pure shared contracts/helpers
  verticals/
    marketing/
      home/
        index.ts        # Public API for this vertical slice
        components/
        styles/
        assets/
```

## Rules

1. Code that changes together should live together in one vertical.
2. Every vertical slice exposes a public API via `index.ts`.
3. Import other verticals only through their public API.
4. Avoid deep imports into another vertical's internals.
5. Promote reusable code to its own vertical (or `design-system`) instead of a catch-all `utils` folder.

## Path aliases

Use these aliases instead of long relative paths:

- `@app/*`
- `@verticals/*`
- `@design-system/*`
- `@shared/*`

## Boundary enforcement

ESLint prevents deep imports into vertical internals via `no-restricted-imports`.

## Scripts

- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run preview`
