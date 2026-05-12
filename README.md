# picklego-web

This repository uses a **domain-first vertical layout**: code is grouped by what it does, not by technical type (`components`, `hooks`, `utils`, etc).

## Structure

```txt
src/
  app/                  # App composition, providers, bootstrapping
  design-system/        # Reusable UI primitives and theme tokens
  shared/               # Cross-vertical pure shared contracts/helpers
  home/                 # Landing page domain
    index.ts            # Public API for this domain
    components/
    styles/
    assets/
```

## Rules

1. Code that changes together should live together in one vertical.
2. Every vertical slice exposes a public API via `index.ts`.
3. Import other domains only through their public API.
4. Avoid deep imports into another domain's internals.
5. Promote reusable code to its own vertical (or `design-system`) instead of a catch-all `utils` folder.
6. For the landing page, keep primary content and metadata present in `index.html` for SEO-first delivery, then enhance with client-side React.

## Path aliases

Use these aliases instead of long relative paths:

- `@app/*`
- `@home`
- `@home/*`
- `@design-system/*`
- `@shared/*`

## Boundary enforcement

ESLint prevents deep imports into domain internals via `no-restricted-imports`.

## Scripts

- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run preview`

## Landing SEO Notes

- Required metadata lives in `index.html`: `title`, `description`, canonical, Open Graph, and Twitter card.
- Home route content is implemented in `src/home/components/HomePage.tsx` with reusable style-role class patterns.
