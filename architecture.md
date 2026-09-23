# Gadiel Fonseca Resume — Architecture Reference

> **Purpose**: Technical overview of system design, patterns, component tree, and technology stack.
> **Repository**: [https://github.com/gfons99/resume](https://github.com/gfons99/resume)
> **Last Updated**: September 2026
>
> For commands, directory map, and design tokens see `quick-reference.md`.

---

## 1. System Architecture

```
┌──────────────────────────────────────────────────────────────────────────┐
│                        Static Single-Page Application                    │
│                                                                          │
│  ┌──────────────────┐    ┌──────────────────┐    ┌────────────────────┐  │
│  │   Source Code     │    │   Build Pipeline  │    │   Static Hosting   │  │
│  │  (React 19 + TS)  │───▶│   (Vite 8)       │───▶│  (GitHub Pages)    │  │
│  │                   │    │                  │    │                    │  │
│  │  Components       │    │  TypeScript      │    │  index.html        │  │
│  │  Tailwind CSS 4   │    │  Tree-shaking    │    │  assets/*.js/css   │  │
│  │  Framer Motion    │    │  CSS purge       │    │  CDN-cached        │  │
│  └──────────────────┘    └──────────────────┘    └────────────────────┘  │
│                                                                          │
│  ┌──────────────────────────────────────────────────────────────────┐    │
│  │                         Zero-Backend Setup                       │    │
│  │  • All content localized in client-side translation dictionaries │    │
│  │  • PDF resume & LaTeX source served as static assets from /public│    │
│  │  • Mailto & external social links for zero-maintenance contact   │    │
│  │  • Automated CI/CD via GitHub Actions to GitHub Pages            │    │
│  └──────────────────────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Technology Stack

### 2.1 Core Framework

| Technology | Version | Purpose |
| :--- | :--- | :--- |
| **React** | 19.2.x | Component-based UI with StrictMode, modern hooks, and optimized rendering |
| **TypeScript** | 5.9.x | Strict static typing for components, translation keys, and state |
| **Vite** | 8.0.x | Ultra-fast ESM dev server with HMR, Rollup production bundler |

### 2.2 Styling & Utilities

| Technology | Version | Purpose |
| :--- | :--- | :--- |
| **Tailwind CSS** | 4.2.x | Modern CSS-first utility styling using `@import "tailwindcss";` |
| **@tailwindcss/vite** | 4.2.x | Official Vite integration plugin |
| **clsx** | 2.1.x | Conditional class name construction |
| **tailwind-merge** | 3.5.x | Conflict-free Tailwind class resolution |

The `cn()` helper (`src/lib/utils.ts`) combines `clsx` and `tailwind-merge` for robust dynamic class application:

```typescript
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### 2.3 Motion & Aesthetics

| Technology | Version | Purpose |
| :--- | :--- | :--- |
| **Framer Motion** | 12.38.x | Staggered fade-ins, viewport scroll triggers, tab transitions |
| **lucide-react** | 0.577.x | Feather-weight SVG icons tree-shaken per component |

### 2.4 State & Internationalization

- **Theme Management (`useTheme`)**: Detects system dark/light preference and persists selection to `localStorage`.
- **Internationalization (`LanguageContext`)**: React Context managing current locale (`en` | `es`) with type-safe lookup key paths for all texts and metrics.

---

## 3. Component Architecture

### 3.1 Data & Control Flow

```
┌──────────────────────────────────────────────────────────────────────────┐
│                            App (Root Component)                          │
│                                                                          │
│                       ┌─────────────────────────┐                        │
│                       │    LanguageProvider     │                        │
│                       │  (Locale: 'en' | 'es')  │                        │
│                       └────────────┬────────────┘                        │
│                                    │                                     │
│                                    ▼                                     │
│                               MainLayout                                 │
│                                    │                                     │
│  ┌─────────────────┬───────────────┼───────────────┬──────────────────┐  │
│  │                 │               │               │                  │  │
│  ▼                 ▼               ▼               ▼                  ▼  │
│ StarryBackground  Navbar          <main>       ScrollToTopBtn      Footer│
│ (Dynamic Canvas)  (Theme+Lang)     │           (Float > 400px)           │
│                                    │                                     │
│            ┌───────────────────────┼───────────────────────┐             │
│            │                       │                       │             │
│            ▼                       ▼                       ▼             │
│          Hero              EducationSection          SkillsSection       │
│     (Bio, Photo, CTAs)     (UNAM, Certs, Courses)   (9 Domain Cards)     │
│                                    │                                     │
│            ┌───────────────────────┴───────────────────────┐             │
│            │                                               │             │
│            ▼                                               ▼             │
│      ProjectGallery                                ExperienceSection     │
│  (Overview/Code/Result)                         (Zifo / Siemens / Qualfon)
└──────────────────────────────────────────────────────────────────────────┘
```

### 3.2 Design Patterns

1. **Translation Dictionary Pattern**:
   Content keys (`hero.bio`, `exp.zifo.b1`, etc.) decouple UI structure from textual content, enabling zero-friction switching between English and Spanish.

2. **Tabbed Project Inspection**:
   `ProjectCard` renders an engineering-centric multi-view widget:
   - **Overview**: Problem statement, architecture, impact.
   - **Code**: Core backend snippet illustrating real production code.
   - **Result**: Quantifiable metrics, merchant impact, and live external links.

3. **Responsive Glassmorphism**:
   Tailwind utility classes `.glass` and `.glass-card` leverage backdrop filters with adaptive opacity for dark and light modes.

---

## 4. Build & Deployment Pipeline

### 4.1 Development
```bash
npm run dev
# Vite runs at http://localhost:5173/resume/ with instant hot module replacement
```

### 4.2 Production Compilation
```bash
npm run build
# Runs `tsc -b` (strict TypeScript validation) followed by `vite build`
# Outputs static HTML, CSS, JS, and public assets to dist/
```

### 4.3 GitHub Pages CI/CD
Defined in `.github/workflows/deploy.yml`:
- Trigger: Push to `main` branch.
- Runner: `ubuntu-latest` with Node.js 22.
- Steps: `npm ci` → `npm run build` → `actions/upload-pages-artifact` → `actions/deploy-pages`.
