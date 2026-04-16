
# Experience Section — Carousel Refactor

Reuse the exact same Carousel pattern from `CaseStudies.tsx` (Embla via shadcn/ui).

## Changes

**File: `src/components/Experience.tsx`**

- Import `Carousel`, `CarouselContent`, `CarouselItem`, `CarouselPrevious`, `CarouselNext`, `CarouselApi`, `cn`, `useState`, `useEffect`, `useCallback`
- Replace the vertical `grid gap-6` with `<Carousel>` + `<CarouselContent>`
- Each experience card becomes a `<CarouselItem>` with `basis-full md:basis-[85%] lg:basis-[48%]` (peek effect)
- Add hover effect on cards: `transition-transform hover:scale-[1.02] hover:shadow-lg`
- Arrow buttons hidden on mobile, visible on md+ (same styling as CaseStudies)
- Pagination dots below with active state tracking via `CarouselApi`
- Expand container from `max-w-5xl` to `max-w-6xl` to match CaseStudies
- All card content (company, role, period, bullets, stack) stays identical
