
# Multi-Language Support (i18n) — EN / PT-BR

Add a lightweight, dependency-free i18n system with a language switcher in the navbar.

## Approach
Custom React Context + `localStorage` (no external library). The site is small with static content — `react-i18next` would be overkill. All strings live in two TS dictionaries for type safety and zero runtime fetch cost.

## Files

**New: `src/i18n/translations.ts`**
- Exports `translations = { en, "pt-BR" }` covering ALL visible text:
  - Navbar links (About, Works, Experience, Skills, Testimonials, Contact)
  - Hero (title, tagline, CTA "Get in Touch", microcopy)
  - About paragraphs (2)
  - CaseStudies header + card section labels (Problem, Solution, Role & Contribution, Outcome, Watch Demo, Open on YouTube)
  - All 3 case studies (title, type, context, problem, solution, role, outcome) — keyed by stable IDs
  - Experience header + 2 entries (role, period, bullets) — keyed by company
  - Skills header + group labels
  - Testimonials header + subtitle + 2 testimonials (role, text)
  - Contact (heading, subtext, CTA "Let's Talk", reply note)
  - Footer (just © year + name, no translation needed)
- Stack arrays remain language-neutral (tech names)

**New: `src/i18n/I18nProvider.tsx`**
- `LanguageContext` with `{ lang, setLang, t }`
- `lang: "en" | "pt-BR"`, default = `localStorage` value, else browser `navigator.language.startsWith("pt")` ? `"pt-BR"` : `"en"`
- `t(key)` resolves dot-paths (e.g. `t("hero.cta")`)
- `useEffect` syncs `document.documentElement.lang` and persists to `localStorage`
- Exports `useTranslation()` hook

**New: `src/components/LanguageSwitcher.tsx`**
- Minimal pill: `EN | PT` separated by a divider, active item bold/foreground color, inactive muted
- `aria-label="Change language"` on each button
- Placed inside Navbar (desktop: right of nav links; mobile: above menu items in the open panel)

**Edit: `src/App.tsx`**
- Wrap `<BrowserRouter>` with `<I18nProvider>`

**Edit: `src/components/Navbar.tsx`**
- Replace hardcoded `navLinks` with `t("nav.about")` etc.
- Add `<LanguageSwitcher />`

**Edit each section component** (`Hero`, `About`, `CaseStudies`, `CaseStudyCard`, `Experience`, `Skills`, `Testimonials`, `Contact`):
- Replace text from `siteConfig`/`content.ts` with `t()` calls
- For dynamic lists (case studies, experience, testimonials, skill groups): iterate over `t("caseStudies.list")` which returns the array from current language dictionary
- Stack/tech tags, links (github/demo/video URLs), and icons come from a language-neutral data file (refactor `content.ts` → split data into `meta` (URLs, stacks, IDs) and translatable text in dictionaries, joined by ID)

**Edit: `src/constants/content.ts`**
- Keep `siteConfig` (name, email, social URLs — language-neutral)
- Keep stack arrays + URLs + IDs for case studies / experience entries
- Remove translatable strings (moved to dictionaries)

**Edit: `index.html`**
- Initial `<html lang="en">` stays; provider updates it on mount

## SEO
- `<html lang>` updated dynamically by provider
- `hreflang` tags skipped (single-URL SPA — no separate routes per language; not meaningful here)

## Out of scope
- URL-based language routing (`/en`, `/pt-BR`) — not requested, and adds complexity
- Translating tech stack names (kept as-is, industry standard)
