

# Lucas Barreto — Engineering Portfolio (Full Build)

This is a from-scratch build — the project currently has only the placeholder page. The plan incorporates all prior feedback plus the new refinements around engineering impact, business value, and credibility.

## Architecture

```text
src/
├── constants/
│   └── content.ts          # All copy centralized (i18n-ready)
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── CaseStudies.tsx
│   ├── CaseStudyCard.tsx   # Structured card with Role, Context, Problem, Solution, Outcome
│   ├── Experience.tsx
│   ├── Skills.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── hooks/
│   └── useScrollReveal.ts
└── pages/
    └── Index.tsx
```

## Design

- **Backgrounds**: `#070b14` primary, `#0c1220` alternating sections
- **Accent**: `#3b82f6` — sparingly on borders, badges, links
- **Text**: `#f1f5f9` headings, `#94a3b8` body
- **Cards**: `bg-white/[0.03]`, `border-white/[0.06]`, no glow
- **Animations**: Subtle fade+slide on scroll via Intersection Observer, 300ms

## Content Strategy

### Hero
Name, title "Full Stack Software Engineer", tagline about scalable apps + internal tools + automation. Trust chips: Open to Remote · Based in Brazil · English Proficient. CTAs: View Resume, Get in Touch.

### About
Two concise paragraphs positioning Lucas as a systems-thinking engineer who builds backend services, internal tools, automation workflows, and product-oriented web applications.

### Case Studies (4 entries)
Each card includes **all** of these fields:

| Field | Purpose |
|-------|---------|
| Title + Type label | e.g. "Internal Tool", "Automation" |
| Context | 1-line situational framing |
| Problem | Specific pain point |
| Solution | What was built, with engineering signals (modular architecture, service integration, etc.) |
| **Role & Contribution** | Lucas's specific ownership — e.g. "Designed and implemented the full backend architecture" |
| Stack | Badge chips |
| **Outcome** | Tangible results — e.g. "Eliminated 15+ manual data entry steps per day", "Reduced report generation from 2 hours to under 5 minutes" |
| Links | GitHub / Demo (optional) |

**Placeholder case studies:**
1. **Internal Operations Dashboard** — React/Node admin panel. Role: Full system design & implementation. Outcome: Replaced 3 disconnected spreadsheets, eliminated daily manual data consolidation.
2. **Meeting Recording Pipeline** — n8n/Make automation. Role: Designed and built the complete workflow. Outcome: Automated transcription and distribution for 20+ weekly meetings, removing a recurring manual process.
3. **CRM Data Sync Integration** — API integration. Role: Built backend integration layer and error handling. Outcome: Ensured real-time data consistency across 2 platforms, eliminated weekly manual sync tasks.
4. **Product Workflow Automation** — Google Apps Script + webhooks. Role: Developed automation scripts and webhook handlers. Outcome: Reduced operational task time by automating repetitive approval and notification steps.

### Experience (impact-oriented bullets)
**DTWO TECNOLOGIA — Mid-Level Full Stack Developer**
- Designed and maintained mobile-first web applications using React and TypeScript
- Architected backend services and database models using PostgreSQL (Supabase)
- Developed automation workflows integrating internal systems and third-party services
- Refactored legacy modules to improve maintainability and reduce technical debt

**STRIDES — Software Engineer Jr.**
- Built and shipped product features across frontend and backend layers
- Implemented API integrations connecting internal tools to external platforms
- Contributed to system architecture decisions impacting scalability and data flow
- Collaborated with product and operations teams to translate requirements into technical solutions

### Skills
6 groups in a grid: Frontend, Backend, Databases, Automation & Integrations, Testing, DevOps & Tools. Simple badge lists.

### Contact
Professional closing line + email, GitHub, LinkedIn links.

### Footer
Minimal: name, © 2025, social icons.

## Implementation
- All text content in `content.ts` for easy future i18n
- `useScrollReveal` hook using Intersection Observer
- Sticky navbar with transparent→solid transition
- Mobile-responsive hamburger menu
- Smooth scroll navigation
- Update `index.html` title/meta for SEO
- Update `src/index.css` with dark theme tokens

