
Simple responsive fix for Hero background positioning.

## Change

**File: `src/components/Hero.tsx`**

Move `backgroundImage` to inline style (kept) but remove `backgroundPosition` and `backgroundSize` from inline style. Apply via Tailwind classes on the section:

- `bg-cover` 
- `bg-[position:80%_center] md:bg-center`

This prioritizes the right side of the image (where the subject is) on mobile, and reverts to centered composition on `md+` screens. Gradient overlay, layout, content, and spacing remain untouched.
