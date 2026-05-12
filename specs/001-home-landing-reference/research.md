# Research: Home Landing Page Reference Alignment

## Decision 1: Rendering strategy for SEO-critical landing content

- **Decision**: Use pre-rendered static HTML for primary landing content and metadata, with client-side JavaScript limited to progressive enhancement.
- **Rationale**: This ensures search crawlers and social scrapers can consume core content and metadata without executing scripts, reducing SEO and sharing risk.
- **Alternatives considered**:
  - Full client-side rendering: rejected due to weaker crawler reliability and dependence on script execution.
  - Partial pre-render only above-the-fold: rejected because it risks metadata/content inconsistency across sections.

## Decision 2: SEO copy structure

- **Decision**: Define one primary keyword theme and 3-5 supporting keyword themes mapped to major landing sections.
- **Rationale**: This balances focused ranking intent with broad topical relevance across hero, value proposition, and feature showcase sections.
- **Alternatives considered**:
  - Single keyword only: rejected for limited topical coverage.
  - Unstructured generic copy: rejected because it weakens measurable SEO intent and validation.

## Decision 3: Metadata coverage

- **Decision**: Require full metadata set: title, meta description, canonical URL, Open Graph, and Twitter card.
- **Rationale**: This provides complete baseline discoverability and social sharing consistency.
- **Alternatives considered**:
  - Title + description only: rejected due to incomplete social and canonical controls.
  - Title + description + Open Graph only: rejected due to missing canonical and Twitter-specific fields.

## Decision 4: Styling reuse strategy

- **Decision**: Define reusable Tailwind class patterns for repeated UI roles (primary CTA, accent text, shared color roles).
- **Rationale**: Standardized style primitives reduce drift and speed up future landing-page iteration while matching design intent.
- **Alternatives considered**:
  - Section-specific ad hoc classes only: rejected due to maintainability risk and inconsistent visual behavior.

## Decision 5: Asset source and fallback behavior

- **Decision**: Use approved logo and `public/picklego-screens` assets, with graceful degradation for missing visuals.
- **Rationale**: Keeps content aligned to approved marketing visuals while ensuring resilience.
- **Alternatives considered**:
  - Mixed ad hoc imagery sources: rejected due to brand inconsistency.
  - Hard fail on missing images: rejected because it can break critical page flow.
