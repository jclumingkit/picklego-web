# Design System Strategy: PickleGo

## 1. Overview & Creative North Star

**Creative North Star: "Hyper-Definition Athletics"**
This design system moves beyond the "utility app" aesthetic to create a high-performance digital environment. We treat the interface like a premium pickleball court: high-contrast, perfectly demarcated, and vibrating with kinetic energy. We break the "template" look by using a **"Zone-Based Layout"**—where large, asymmetrical blocks of `secondary` (Deep Navy) collide with the electric `primary` (Neon Lime).

Instead of a standard centered grid, we utilize "The Power Serve" layout: bold, left-aligned headlines that overlap into container edges, creating a sense of forward motion and professional urgency.

---

## 2. Colors: High-Voltage Contrast

The color palette is engineered for "glanceability" during active play.

- **Primary (`#516200` / `#D4FF00`):** The "Ball in Motion." Use `primary_fixed` (#d1fc00) for all high-value actions. It must never be used for static text; it is a signal for movement.
- **Secondary (`#4c5d70`):** The "Court Structure." This provides the gravity needed to anchor the neon accents.
- **The "No-Line" Rule:** 1px solid borders are strictly prohibited for sectioning. We define boundaries through tonal shifts. For example, a `surface_container_lowest` card should sit on a `surface_container_low` background. The contrast in luminescence creates the edge, not a stroke.
- **Surface Hierarchy & Nesting:** Treat the UI as stacked acrylic layers.
  - _Base:_ `surface` (#f3f7ff)
  - _Sectioning:_ `surface_container` (#d9eaff)
  - _Floating Elements:_ `surface_container_lowest` (#ffffff) for maximum "pop."
- **The "Glass & Gradient" Rule:** To avoid a flat, "cheap" feel, use a subtle 15-degree linear gradient on primary CTAs: transitioning from `primary` to `primary_fixed_dim`. For overlays, use `surface_variant` at 80% opacity with a `backdrop-blur(12px)` to maintain the tech-forward, premium feel.

---

## 3. Typography: The Editorial Impact

We use **Inter** not as a functional font, but as a branding powerhouse.

- **Display & Headline:** Use `display-lg` (3.5rem) and `headline-lg` (2rem) with `font-weight: 800`. Tighten letter-spacing to `-0.04em` to create a "compact-power" editorial look.
- **Title & Body:** Use `title-md` for match details. Body text should stick to `body-md` (0.875rem) to maintain a wide "field of play" (whitespace) around text blocks.
- **Visual Hierarchy:** High-energy information (e.g., "MATCH STARTING") uses `label-md` in all-caps with `letter-spacing: 0.1em` to mimic athletic jersey typography.

---

## 4. Elevation & Depth: Tonal Layering

We reject "standard" shadows in favor of environmental light.

- **The Layering Principle:** Depth is achieved by "stepping" through the `surface_container` scale. An "Upcoming Match" card should be `surface_container_lowest` (#ffffff) placed inside a `surface_container_high` (#cfe5ff) module.
- **Ambient Shadows:** When an element must float (e.g., a "Quick Join" FAB), use a shadow tinted with `on_surface` (#1f3041) at 6% opacity, with a 32px blur and 16px Y-offset. This mimics natural sunlight on a court.
- **The "Ghost Border" Fallback:** If a divider is mandatory for accessibility, use `outline_variant` at 15% opacity. It should be felt, not seen.
- **Glassmorphism:** Navigation bars should use a semi-transparent `secondary` with a heavy blur, allowing the vibrant `primary` match markers to "glow" through the glass as the user scrolls.

---

## 5. Components: Precision Gear

All components utilize the **`md` (0.75rem / 12px)** roundedness scale to balance friendliness with athletic precision.

- **Buttons:**
  - _Primary:_ `primary_fixed` background with `on_primary_fixed` text. No border.
  - _Secondary:_ `secondary_container` background.
  - _Tertiary:_ Transparent background with `secondary` text, underlined only on hover.
- **Match Cards:** No dividers. Use `Spacing 6` (1.5rem) to separate the "Player Profiles" from the "Match Time." Use a `surface_container_highest` background for the "Score" badge to make it the focal point.
- **Inputs:** Use `surface_container_lowest` with a "Ghost Border." On focus, the border transitions to a 2px `primary` glow.
- **Chips (Skill Levels):** Use `secondary_fixed` for unselected and `primary_fixed` for active. These should feel like "tactile buttons" on a stopwatch.
- **The "Match Pulse" (Custom Component):** A specialized progress bar for match filling (e.g., 3/4 players) using a `secondary_container` track and a `primary_fixed` indicator with a subtle outer glow.

---

## 6. Do’s and Don’ts

### Do:

- **Do** use asymmetrical margins (e.g., `Spacing 10` on the left, `Spacing 6` on the right) for header sections to create a sense of movement.
- **Do** use `primary_fixed` (#d1fc00) sparingly. It is "The Ball"—the user’s eye will follow it everywhere.
- **Do** utilize `surface_dim` for "Past Matches" to visually signal a reduction in energy.

### Don’t:

- **Don’t** use black (#000000) for text. Always use `on_surface` (#1f3041) to keep the Navy/Lime palette sophisticated.
- **Don’t** use 1px dividers to separate list items. Use `Spacing 4` (1rem) of vertical space or a background shift.
- **Don’t** use standard "Success Green." In this system, `primary` (Neon Lime) _is_ the color of success and action.
