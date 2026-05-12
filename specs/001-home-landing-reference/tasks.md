# Tasks: Home Landing Page Reference Alignment

**Input**: Design documents from `/specs/001-home-landing-reference/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Tests were not explicitly requested in the specification. Validation is via lint/build and manual requirement checks.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Prepare source and asset context for the landing-page rewrite.

- [x] T001 Audit current home route and reference artifacts in `src/home/index.ts`, `src/home/components/HomePage.tsx`, `reference-landing-page.html`, and `DESIGN.md`
- [x] T002 Verify required media inventory under `public/picklego-screens/` and identify intended section usage in `specs/001-home-landing-reference/contracts/landing-page-contract.md`
- [x] T003 [P] Define implementation checklist comments in `specs/001-home-landing-reference/quickstart.md` for local QA execution order

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core foundation that all user stories depend on.

**⚠️ CRITICAL**: No user story work should begin until this phase is complete.

- [x] T004 Create reusable style-role constants and utility mappings in `src/home/components/HomePage.tsx` for primary CTA, accent text, and shared color roles
- [x] T005 [P] Establish shared section/content data shape and ordering primitives in `src/home/components/HomePage.tsx` aligned to landing section contract
- [x] T006 [P] Add SEO metadata baseline and canonical metadata support at app shell level in `index.html`
- [x] T007 Configure static-preferred landing rendering strategy for production output in `vite.config.ts`
- [x] T008 Wire home public API entry so route composition remains stable during refactor in `src/home/index.ts` and `src/app/App.tsx`

**Checkpoint**: Foundation complete; user stories can proceed.

---

## Phase 3: User Story 1 - Experience Brand-Accurate Landing Page (Priority: P1) 🎯 MVP

**Goal**: Deliver a home landing page that matches approved reference structure and DESIGN direction with mobile/desktop stability.

**Independent Test**: Run app and verify section sequence, hierarchy, CTA prominence, and no critical layout breakage on mobile and desktop widths.

### Implementation for User Story 1

- [x] T009 [US1] Rebuild landing page section structure to match approved reference flow in `src/home/components/HomePage.tsx`
- [x] T010 [P] [US1] Implement DESIGN.md-aligned typography, spacing, and tonal layering in `src/home/styles/home.css`
- [x] T011 [P] [US1] Integrate PickleGo logo/hero treatment and high-contrast brand composition in `src/home/components/HomePage.tsx`
- [x] T012 [US1] Apply reusable style-role mappings to all primary CTA and accent text instances in `src/home/components/HomePage.tsx`
- [x] T013 [US1] Ensure responsive behavior and section integrity for narrow/wide viewports in `src/home/styles/home.css`
- [x] T014 [US1] Add graceful fallback behavior for missing non-critical visuals in `src/home/components/HomePage.tsx`

**Checkpoint**: User Story 1 is independently functional and demonstrable as MVP.

---

## Phase 4: User Story 2 - See Real Product Context in Marketing Content (Priority: P2)

**Goal**: Showcase approved product screens with clear context and accessibility-safe presentation.

**Independent Test**: Verify all intended product screenshots render from `public/picklego-screens` with captions/alt text and remain legible without layout distortion.

### Implementation for User Story 2

- [x] T015 [P] [US2] Map approved screenshot assets to landing showcase sections in `src/home/components/HomePage.tsx`
- [x] T016 [US2] Render product showcase blocks with contextual captions and section linkage in `src/home/components/HomePage.tsx`
- [x] T017 [P] [US2] Add meaningful descriptive alt text for all informative screen assets in `src/home/components/HomePage.tsx`
- [x] T018 [US2] Implement aspect-ratio-safe media containers and legibility tuning in `src/home/styles/home.css`
- [x] T019 [US2] Add degradation path for unavailable screenshot files without breaking CTA/content flow in `src/home/components/HomePage.tsx`

**Checkpoint**: User Story 2 is independently functional and testable.

---

## Phase 5: User Story 3 - Consistent Reusable Visual Patterns (Priority: P3)

**Goal**: Standardize repeated CTA/color/text treatment and align copy/metadata with SEO requirements.

**Independent Test**: Confirm repeated UI roles use one reusable pattern source and page output contains required metadata and keyword-theme-aligned section copy.

### Implementation for User Story 3

- [x] T020 [US3] Consolidate repeated visual patterns into reusable class-composition helpers in `src/home/components/HomePage.tsx`
- [x] T021 [P] [US3] Refine landing copy blocks to align one primary and 3-5 supporting keyword themes in `src/home/components/HomePage.tsx`
- [x] T022 [US3] Ensure complete metadata coverage (title, description, canonical, Open Graph, Twitter card) in `index.html`
- [x] T023 [US3] Validate initial HTML includes primary content scaffolding and metadata without JS dependency using production preview checks in `dist/index.html` workflow via `npm run build`
- [x] T024 [US3] Normalize semantic heading/body hierarchy and CTA labeling consistency across sections in `src/home/components/HomePage.tsx`

**Checkpoint**: User Story 3 is independently functional and completes feature scope.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final verification and documentation consistency across stories.

- [x] T025 [P] Update contributor-facing guidance for new home landing structure and SEO constraints in `AGENTS.md`
- [x] T026 [P] Align repository overview and path references with final landing implementation in `README.md`
- [x] T027 Run full validation commands and capture results (`npm run lint` and `npm run build`) in `specs/001-home-landing-reference/quickstart.md`
- [x] T028 Execute quickstart validation checklist and finalize acceptance notes in `specs/001-home-landing-reference/quickstart.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies; starts immediately.
- **Foundational (Phase 2)**: Depends on Phase 1; blocks all user stories.
- **User Stories (Phases 3-5)**: Depend on Phase 2 completion.
- **Polish (Phase 6)**: Depends on completion of desired user stories.

### User Story Dependencies

- **US1 (P1)**: Starts after Foundational; no dependency on other stories.
- **US2 (P2)**: Starts after Foundational; can run in parallel with US1 but integrates best after US1 layout scaffold exists.
- **US3 (P3)**: Starts after Foundational; depends on presence of implemented repeated elements from US1/US2 for full normalization.

### Within Each User Story

- Structure/content scaffolding before visual fine-tuning.
- Reusable mappings before normalization checks.
- Metadata and SEO validation after section/copy updates.

## Parallel Opportunities

- Phase 1: `T003` can run parallel to `T001-T002`.
- Phase 2: `T005`, `T006` can run in parallel after `T004` begins.
- US1: `T010` and `T011` can run in parallel after `T009` skeleton exists.
- US2: `T015` and `T017` can run in parallel; `T018` can proceed once section markup lands.
- US3: `T021` and `T022` can run in parallel; `T024` follows merged content.
- Polish: `T025` and `T026` run in parallel before final validation.

## Parallel Example: User Story 2

```bash
# Parallelizable US2 tasks after initial showcase scaffold:
Task: "Map approved screenshot assets to landing showcase sections in src/home/components/HomePage.tsx"
Task: "Add meaningful descriptive alt text for all informative screen assets in src/home/components/HomePage.tsx"
```

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1 and Phase 2.
2. Complete Phase 3 (US1).
3. Validate MVP using independent test criteria and lint/build checks.
4. Demo/deploy MVP if acceptable.

### Incremental Delivery

1. Foundation complete.
2. Deliver US1 (brand-accurate landing layout).
3. Deliver US2 (product screenshot showcase).
4. Deliver US3 (reusable patterns + SEO metadata/copy requirements).
5. Finish with polish and final validation.

### Parallel Team Strategy

1. One developer handles foundational metadata/render configuration.
2. One developer handles US1 structure + responsive styling.
3. One developer handles US2 screenshot mapping/accessibility.
4. One developer finalizes US3 SEO/pattern normalization and merges with prior stories.
