# Quickstart: Home Landing Page Reference Alignment

## Prerequisites

- Node.js and npm installed
- Project dependencies installed (`npm install`)

## Run Locally

1. Start development server:
   - `npm run dev`
2. Open the local app URL from Vite output.
3. Verify home route renders landing page structure aligned to the approved reference.

## Validate Feature Requirements

<!-- Implementation Checklist -->
<!-- 1. Run lint/build -->
<!-- 2. Validate section order and hero hierarchy -->
<!-- 3. Validate screenshot asset usage and alt text -->
<!-- 4. Validate metadata + static-first shell content -->

1. Run lint checks:
   - `npm run lint`
2. Build production bundle:
   - `npm run build`
3. Verify rendered page includes:
   - Required landing section sequence
   - Approved screenshot assets from `public/picklego-screens`
   - PickleGo logo placement
   - Reusable style patterns for repeated CTA/color/text roles
   - Complete metadata set (title, description, canonical, Open Graph, Twitter card)
   - Primary content and metadata available in initial HTML

## Manual QA Focus

- Mobile and desktop layout stability
- CTA prominence and consistency
- Screenshot readability and aspect-ratio handling
- Graceful behavior if one or more images are unavailable

## Validation Notes

- `npm run lint`: PASS
- `npm run build`: PASS
