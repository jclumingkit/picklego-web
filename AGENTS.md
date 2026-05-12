# Repository Guidelines

## Project Structure & Module Organization
This project uses a domain-first vertical architecture. Keep code grouped by behavior, not by technical type.

- `src/app/`: app shell, composition, and bootstrapping.
- `src/<domain>/`: domain slices (for example `src/home` for the landing page), each with a public `index.ts`.
- `src/design-system/`: shared UI tokens and global styles.
- `public/`: static assets served directly.
- `dist/`: build output (generated).

Import domain code only through its public API (for example `@home`), not deep internal paths.
For the landing page, keep SEO metadata and static-first shell content in `index.html`, and use `src/home` for client-side enhancements.

## Build, Test, and Development Commands
- `npm run dev`: start Vite dev server.
- `npm run build`: run TypeScript project build (`tsc -b`) and produce production bundle.
- `npm run lint`: run ESLint for `ts/tsx` files and boundary rules.
- `npm run preview`: preview the production build locally.

Use `npm install` to install dependencies.

## Coding Style & Naming Conventions
- Language: TypeScript + React (`.ts`, `.tsx`), ESM modules.
- Indentation: 2 spaces; keep files formatted consistently with surrounding code.
- Components: `PascalCase` file and symbol names (for example `HomePage.tsx`).
- Variables/functions: `camelCase`; constants: `UPPER_SNAKE_CASE` when truly constant.
- Domain slices must expose `index.ts` as the public entry point.
- Respect ESLint rule `no-restricted-imports` for domain boundaries.

## Testing Guidelines
There is no test runner configured yet. Until tests are added:
- Treat `npm run lint` and `npm run build` as required quality gates before opening a PR.
- If you add tests, colocate them near source files using `*.test.ts` or `*.test.tsx`.
- Prefer Vitest + React Testing Library for future unit/component coverage.

## Commit & Pull Request Guidelines
Use Conventional Commit style, consistent with repo history (example: `chore: init setup`).

- Commit format: `type(scope): summary` (for example `feat(home): add hero CTA`).
- Keep commits focused and atomic.
- PRs should include: clear summary, linked issue/task, screenshots for UI changes, and validation steps run (`lint`, `build`, tests if present).
- Call out any boundary exceptions or architecture-impacting decisions in the PR description.

## Active Technologies
- TypeScript 6 + React 19 + Vite 8, React, React DOM, Tailwind CSS 4 (001-home-landing-reference)

## Recent Changes
- 001-home-landing-reference: Added TypeScript 6 + React 19 + Vite 8, React, React DOM, Tailwind CSS 4
