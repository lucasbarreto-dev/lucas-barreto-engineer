
## Goal
Make the Selected Works pipeline adapt: **vertical stack on mobile (<md)**, keep the **horizontal VoltAgent-style pipeline on desktop (md+)**.

## Changes

### 1. `src/components/CaseStudies.tsx` (container)
- Change the pipeline wrapper from `flex flex-row ... overflow-x-auto` to responsive:
  - `flex flex-col md:flex-row items-center justify-center md:justify-center gap-4 md:gap-0`
  - `overflow-x-visible md:overflow-x-auto`
  - Keep scrollbar-hidden utilities for desktop scroll.
- Adjust scroll-into-view: use `block: "center"` on mobile-friendly behavior (keeping `inline: "center"` works fine since horizontal scroll is disabled on mobile — no change needed, but ensure `block: "center"` for mobile). Use `{ behavior: "smooth", block: "center", inline: "center" }`.

### 2. `src/components/CaseStudyNode.tsx` (node + ports)
- **Collapsed node classes** (responsive):
  - Mobile: `w-full max-w-xl h-12 px-4 flex-row justify-between items-center`
  - Desktop: `md:w-72 md:h-32 md:p-4 md:flex-col md:justify-between md:items-stretch`
  - Keep hover/focus styles.
- **Ports** (`Port` component) — accept a `side` and place responsively:
  - Top port (mobile) → left port (desktop): `-top-1.5 left-1/2 -translate-x-1/2 -translate-y-0 md:top-1/2 md:left-0 md:-translate-x-1/2 md:-translate-y-1/2`
  - Bottom port (mobile) → right port (desktop): `-bottom-1.5 left-1/2 -translate-x-1/2 md:top-1/2 md:bottom-auto md:left-auto md:right-0 md:translate-x-1/2 md:-translate-y-1/2`
- **Outer wrapper width** — responsive so collapsed nodes span full width on mobile:
  - `w-full max-w-xl md:w-72` when collapsed
  - `w-full max-w-2xl md:w-[90vw] md:max-w-2xl` when expanded (mobile already full width; desktop keeps large expanded card)

### 3. `src/components/CaseStudyConnector.tsx`
- Render both orientations with responsive visibility:
  - Vertical (mobile): `h-6 w-0.5 bg-border md:hidden`
  - Horizontal (desktop): `hidden md:block md:h-0.5 md:w-16 bg-border shrink-0 self-center`
- Simplest: return two spans, one for each breakpoint.

### 4. Verification
- Confirm no changes needed to `CaseStudyCard.tsx` or content data.
- Visually confirm: mobile column with vertical connectors + top/bottom ports; desktop row with horizontal connectors + left/right ports; expansion still centers correctly on both.

No content, i18n, or design token changes. Purely responsive Tailwind adjustments in the three components.
