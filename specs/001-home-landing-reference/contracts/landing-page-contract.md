# Contract: Home Landing Page Delivery

## 1. Route Contract

- **Route**: `/` (home route)
- **Requirement**: Must render the approved landing section sequence and core messaging in initial HTML.

## 2. Content Contract

- Required section set and order must match approved reference layout.
- Each major section must include copy aligned to one primary keyword theme and supporting keyword themes.
- Repeated role-based UI elements (primary CTA, accent text, shared color role) must use reusable style patterns.

## 3. Asset Contract

- Product screenshots must be sourced from `public/picklego-screens`.
- Brand identity must include the approved PickleGo logo.
- Missing optional visuals must not break content flow or primary CTA availability.

## 4. Metadata Contract

The landing page must include all of the following in initial page output:

- `title`
- `meta[name="description"]`
- `link[rel="canonical"]`
- Open Graph metadata set
- Twitter card metadata set

## 5. Accessibility Contract

- Informative images must include meaningful alt text.
- Visual hierarchy must preserve readable heading and body structure on mobile and desktop.

## 6. Verification Contract

A delivery is acceptable when all of the following pass:

- Required sections present in correct order.
- Required metadata fields present and valid.
- Approved assets displayed or gracefully degraded.
- No critical layout breakage across target viewport ranges.
