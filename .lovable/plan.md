
# Smooth Fade Transition on Language Switch

Add a subtle fade animation when toggling between EN and PT-BR so content changes feel smooth instead of abrupt.

## Approach

Wrap the entire app content in a keyed container that re-mounts on language change, triggering a quick fade-in via the existing `animate-fade-in` Tailwind utility (already defined in `tailwind.config.ts`).

## Change

**File: `src/i18n/I18nProvider.tsx`**

- Wrap `{children}` inside the provider with a `<div>` that:
  - Uses `key={lang}` to force a re-mount on language change
  - Applies `className="animate-fade-in"` for a 0.3s opacity + subtle translateY transition
  
This gives a single, global, lightweight fade across all sections without touching each component or adding state/timers. The keyed remount is cheap (no data refetch — translations are static dictionaries already in memory).

## Why this approach

- **Zero per-component changes** — one edit, applied globally
- **Uses existing animation token** (`animate-fade-in` in `tailwind.config.ts`) — no new CSS
- **No flash of empty content** — React swaps trees synchronously; only opacity animates
- **Respects existing structure** — Navbar (outside the keyed div if needed) stays stable; but since Navbar text also translates, including it in the fade is desired

## Out of scope

- Page-level route transitions
- Per-section staggered animations
- Reduced-motion media query handling (the animation is already very subtle, 300ms)
