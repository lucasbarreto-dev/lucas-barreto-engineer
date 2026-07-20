# Lucas Barreto — Portfolio

> Personal portfolio of **Lucas Barreto**, Full-Stack Engineer focused on AI-assisted product development, automation, and education technology.

🌐 **Live site:** [lucasbarretodev.com](https://www.lucasbarretodev.com)

---

## ✨ About

This is a single-page portfolio showcasing case studies, professional experience, technical skills, and testimonials. It's designed to feel polished, fast, and responsive — with subtle animations and a bilingual experience (English / Português Brasil).

## 🧩 Features

- 🌍 **Bilingual (i18n)** — EN / PT-BR with smooth fade transitions and persistence via `localStorage`
- 📱 **Fully responsive** — mobile-first, optimized hero rendering on mobile browsers
- 🎨 **Design system** — semantic tokens (HSL) via Tailwind + shadcn/ui
- 🎬 **Case study carousel** — embedded videos and live demos
- ⚡ **Scroll-reveal animations** — lightweight, no heavy libraries
- ♿ **Accessible** — semantic HTML, proper alt text, keyboard navigation
- 🔍 **SEO-ready** — dynamic `<html lang>`, meta tags, semantic structure

## 🛠️ Tech Stack

**Frontend**
- React 18 + TypeScript
- Vite 5
- Tailwind CSS 3 + shadcn/ui
- React Router
- TanStack Query

**Tooling & Quality**
- Vitest + React Testing Library
- Playwright (E2E)
- ESLint + TypeScript strict mode

**Built with**
- [Lovable](https://lovable.dev) — AI-assisted development platform

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm (or [Bun](https://bun.sh))

### Install & run

```bash
# Clone the repo
git clone https://github.com/lucasbarreto-dev/<repo-name>.git
cd <repo-name>

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app will be available at `http://localhost:8080`.

### Available scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the local dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |
| `npm run test` | Run unit tests (Vitest) |

## 🐳 Running with Docker

The project ships with a single multi-stage `Dockerfile` (`deps` → `dev` → `builder` → `production`) and a `docker-compose.yml` that selects the target via profiles.

### Development (Vite + HMR)

```bash
docker compose --profile dev up --build
```

Open `http://localhost:8080`. Source files are bind-mounted, so edits trigger HMR (polling is enabled for cross-OS compatibility).

### Production (Nginx serving the static build)

```bash
docker compose --profile prod up --build
```

Open `http://localhost:8080` (mapped to Nginx port 80 inside the container). SPA routing, gzip, and long-term caching of hashed assets are configured in `nginx.conf`.

### Building the production image directly

```bash
docker build --target production -t portfolio:latest .
docker run --rm -p 8080:80 portfolio:latest
```



## 📁 Project Structure

```
src/
├── components/      # UI components (Hero, About, CaseStudies, etc.)
│   └── ui/          # shadcn/ui primitives
├── constants/       # Language-neutral metadata (stacks, URLs, IDs)
├── i18n/            # Translations (EN / PT-BR) + provider
├── hooks/           # Custom React hooks
├── pages/           # Route-level components
└── index.css        # Design tokens (HSL semantic colors)
```

## 🌐 Internationalization

Translations live in `src/i18n/translations.ts` as typed dictionaries. The `I18nProvider` syncs the active language with `localStorage` and `<html lang>`. To add a new language, extend the `Lang` type and provide a matching dictionary.

## 📬 Contact

- 💼 [LinkedIn](https://www.linkedin.com/in/lucasbarreto-dev/)
- 💻 [GitHub](https://github.com/lucasbarreto-dev)
- 🧑‍💻 [Upwork](https://www.upwork.com/freelancers/~01849be61777eaf50b)
- ✉️ lucasbs.code@gmail.com

---

<sub>Built with ❤️ using React, TypeScript & Lovable.</sub>
