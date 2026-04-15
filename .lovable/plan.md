

# Hero Refactor + Contact CTA Upgrade

Two changes in one pass.

## 1. Hero — Two-column layout with photo

**Copy photo** to `src/assets/lucas-profile.png` from the uploaded file.

**Rewrite `src/components/Hero.tsx`**:
- Two-column grid (`md:grid-cols-2`), vertically centered
- **Left**: title label, name (h1), tagline, "Get in Touch" button (Mail icon, links to #contact), trust signal badges
- **Right**: professional photo with rounded corners, `shadow-xl`, decorative glow blur behind (absolute positioned div with `bg-primary/20 blur-3xl`)
- **Mobile**: single column, photo on top (`order-first` on mobile, `order-last` on md+), text below
- No new libraries, no changes to `siteConfig` or `trustSignals`

## 2. Contact CTA — Hiring-oriented copy (English)

**Update `src/components/Contact.tsx`**:
- **Heading**: "Looking for someone who automates processes and delivers results?"
- **Subtext**: "I can help your team reduce manual work and build more efficient systems using Node.js, integrations, and AI."
- **Primary CTA**: "Let's Talk" button (mailto link), prominent style
- Social links (GitHub, LinkedIn, Email) stay as secondary row below

## Files changed
- `src/assets/lucas-profile.png` (new — copied from upload)
- `src/components/Hero.tsx` (rewrite)
- `src/components/Contact.tsx` (copy update)

