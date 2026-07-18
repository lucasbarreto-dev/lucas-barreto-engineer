
# Refactor: Selected Works → Automation Canvas

Replace the Embla carousel in `#work` with an interactive, n8n/VoltAgent-style canvas where each case study starts as a compact "node" and expands in place when clicked.

## Scope

Only the Works section is touched. Case study content, translations, and metadata (`caseStudiesMeta`, `translations.ts`) are reused as-is. `CaseStudyCard.tsx` keeps rendering the expanded content; the canvas layer wraps it.

## Files

1. **`src/components/CaseStudies.tsx`** — full rewrite. Removes Embla carousel/pagination/api state. Introduces:
   - `expandedId: string | null` state; clicking a node sets it (and collapses any other). Clicking the collapse control on the expanded card sets it back to `null`.
   - Section container gets the dot-grid background: `bg-[radial-gradient(hsl(var(--border))_1px,transparent_1px)] [background-size:16px_16px]` layered over `--background`, with a soft radial mask/fade at the edges so the grid doesn't hit section boundaries harshly.
   - Vertical stack (`flex flex-col items-center gap-0`) of node wrappers. Each wrapper has relative positioning to host ports and connector segments.

2. **`src/components/CaseStudyNode.tsx`** — new component. Two visual states driven by `isExpanded`:
   - **Collapsed:** `w-full max-w-xl h-12 px-4 rounded-lg border border-border bg-card flex items-center justify-between cursor-pointer transition-all duration-300 hover:border-primary/40`. Left: `GitBranch` (16px, `text-muted-foreground`) + title (`text-sm font-medium text-foreground`). Right: status pill `text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full px-2 py-0.5` reading `COMPLETED` (or `ACTIVE` for the in-progress one — flag added via optional `status` field on `CaseStudyMeta`, defaulting to `COMPLETED`).
   - **Expanded:** `w-full max-w-3xl` wrapper that renders the existing `<CaseStudyCard meta text />` untouched, plus an absolute top-right collapse button (`ChevronUp`, ghost styling) that clears `expandedId`.
   - Height/width transitions use `transition-all duration-300 ease-in-out`. To avoid animating between two totally different DOM shapes, the wrapper animates `max-width` + `opacity`, and the inner content is conditionally rendered with a short fade-in (`animate-fade-in`).
   - Ports: two absolutely positioned dots (`h-2.5 w-2.5 rounded-full border border-border bg-background`), one at `-top-1.5 left-1/2 -translate-x-1/2`, one at `-bottom-1.5 left-1/2 -translate-x-1/2`. Rendered on both collapsed and expanded states so cables always attach.

3. **`src/components/CaseStudyConnector.tsx`** — new. Simple vertical cable rendered between siblings. Implementation: a 2px-wide, `h-8` div with `bg-border` centered horizontally (`mx-auto`), wrapped in `hidden md:block` so mobile falls back to a plain 24px vertical gap divider (`h-6 w-px bg-border mx-auto md:hidden` — or just spacing). The connector sits between nodes in the flex column; because both ports are on the vertical centerline, the line visually links them. As nodes expand/collapse, the column reflows and the connector length stays constant while the node heights animate — the visual flow stays connected.
   - Optional upgrade: swap the div for an inline `<svg>` `<path>` with a subtle stroke for a more "cable" feel; kept as a div initially for simplicity and reliability.

4. **`src/constants/content.ts`** — add optional `status?: "COMPLETED" | "ACTIVE"` to `CaseStudyMeta`. Tag `habilita` as `ACTIVE`; the rest default to `COMPLETED`.

5. **`src/i18n/translations.ts`** — no changes required (status labels stay in English per spec: "COMPLETED" / "ACTIVE").

## Interaction details

- Only one node expanded at a time (`expandedId` string state).
- Clicking the collapsed bar expands it; clicking the `ChevronUp` on the expanded card collapses it. Clicking another collapsed bar switches expansion.
- Keyboard: node bar is a `<button type="button">` with `aria-expanded` and `aria-controls`. Focus ring uses `focus-visible:ring-2 focus-visible:ring-primary/50`.
- Scroll: when a node expands, smooth-scroll it into view with `element.scrollIntoView({ behavior: "smooth", block: "nearest" })` after state commit (via `useEffect` on `expandedId`).

## Responsiveness

- Mobile (`<md`): connectors hidden, replaced by natural `gap-4` spacing; expanded card uses `w-full` with the section's `px-4` gutter (no `max-w-3xl` clamp below `md`).
- Desktop: connectors visible, expanded card `max-w-3xl`, collapsed nodes `max-w-xl`, all centered.

## Visual polish

- Node hover: `hover:border-primary/40 hover:bg-card/80`.
- Expanded card retains existing `CaseStudyCard` styling; the collapse button is `absolute top-3 right-3 text-muted-foreground hover:text-foreground` — sits above card padding without overlapping the title (title has right padding room already).
- Section heading and subtitle stay above the canvas, unchanged.

## Out of scope

- No changes to `Experience` carousel, `CaseStudyCard` internals, translations, or metadata beyond the `status` flag.
- No drag/pan/zoom of the canvas — it's a static grid backdrop, not a real node editor.

## Verification

After implementation: load `/`, confirm nodes render as compact bars with dot-grid background and vertical cables, click each to expand/collapse, confirm only one expands at a time, confirm mobile viewport hides cables and expands to full width.
