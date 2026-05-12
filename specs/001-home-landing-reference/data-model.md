# Data Model: Home Landing Page Reference Alignment

## Entity: LandingSection

- **Description**: A top-level content block rendered on the home landing page.
- **Fields**:
  - `id` (string, required, unique): stable identifier for section navigation and validation.
  - `headline` (string, required): primary section title.
  - `supportingCopy` (string, required): short explanatory content aligned to keyword themes.
  - `order` (number, required): sequence position matching approved reference flow.
  - `hasPrimaryCta` (boolean, required): indicates whether section includes primary action.
- **Validation Rules**:
  - `id` must be unique across sections.
  - `order` must form a continuous visual sequence for required sections.

## Entity: BrandAsset

- **Description**: Approved visual identity asset displayed on the landing page.
- **Fields**:
  - `name` (string, required): asset label (e.g., PickleGo logo).
  - `path` (string, required): repository/public path to asset file.
  - `placementRole` (enum, required): `hero`, `header`, `accent`.
  - `altText` (string, optional): descriptive text where informative.
- **Validation Rules**:
  - `path` must resolve to an approved source asset.
  - Informative assets must provide non-empty `altText`.

## Entity: ProductScreenAsset

- **Description**: Screenshot used to showcase product experience.
- **Fields**:
  - `id` (string, required, unique): screen asset identifier.
  - `path` (string, required): file path under `public/picklego-screens`.
  - `caption` (string, required): explanatory text for user context.
  - `altText` (string, required): accessible description.
  - `sectionId` (string, required): associated `LandingSection.id`.
- **Validation Rules**:
  - `path` must point to approved screenshot directory.
  - `sectionId` must reference an existing landing section.

## Entity: ReusableStylePattern

- **Description**: Shared visual pattern applied to recurring UI roles.
- **Fields**:
  - `name` (string, required, unique): pattern name (e.g., primary-cta, accent-text).
  - `usageRole` (enum, required): `primary-cta`, `accent-text`, `surface-color`, `meta-text`.
  - `classDefinition` (string, required): reusable class composition.
  - `appliesTo` (string[], required): target element types or section roles.
- **Validation Rules**:
  - Patterns must be reused by all matching UI roles.
  - Conflicting definitions for the same `usageRole` are not allowed.

## Entity: SeoMetadataProfile

- **Description**: Page-level metadata set for indexing and sharing.
- **Fields**:
  - `title` (string, required)
  - `description` (string, required)
  - `canonicalUrl` (string, required)
  - `openGraph` (object, required)
  - `twitterCard` (object, required)
  - `primaryKeywordTheme` (string, required)
  - `supportingKeywordThemes` (string[], required, size 3-5)
- **Validation Rules**:
  - All metadata fields must be present in initial HTML response.
  - `supportingKeywordThemes` must contain between 3 and 5 values.
