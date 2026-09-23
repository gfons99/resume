# Gadiel Fonseca Resume — Developer Quick Reference

> **Purpose**: Single-source cheat sheet for commands, configuration, architecture, and directory layout.
> **Repository**: [https://github.com/gfons99/resume](https://github.com/gfons99/resume)
> **Last Updated**: September 2026

---

## 1. Dev Commands

| Command | Description |
| :--- | :--- |
| `npm run dev` | Start Vite dev server with HMR (default: `http://localhost:5173/resume/`) |
| `npm run build` | TypeScript type-check + Vite production build → `dist/` |
| `npm run preview` | Serve production build locally for verification |
| `npm run lint` | Run ESLint across all `.ts` and `.tsx` source files |

---

## 2. Deployment

**Platform**: GitHub Pages via GitHub Actions.

| Item | Value |
| :--- | :--- |
| **Live URL** | [https://gfons99.github.io/resume/](https://gfons99.github.io/resume/) |
| **Deploy Trigger** | Push to `main` branch |
| **Workflow File** | `.github/workflows/deploy.yml` |
| **Build Output** | `dist/` |
| **Base Path** | `/resume/` (configured in `vite.config.ts`) |

---

## 3. Component Hierarchy

```
App
├── LanguageProvider                    # Context provider for EN / ES translations
│   └── MainLayout
│       ├── StarryBackground           # Animated canvas background with subtle stars
│       ├── Navbar                      # Fixed top nav with glassmorphism
│       │   ├── Nav Links               # Smooth anchor scrolls (#home, #education, etc.)
│       │   ├── LanguageDropdown        # Language switcher (EN / ES)
│       │   └── Theme Toggle            # Dark / Light mode toggle
│       ├── main
│       │   ├── Hero                    # Name, bio, photo (20260619.png), resume download & contacts
│       │   ├── EducationSection        # UNAM Computer Engineering degree, certifications, coursework
│       │   ├── SkillsSection           # 9 categorised skill domains
│       │   │   └── SkillCard × 9       # Responsive grid card with skill pill badges
│       │   ├── ProjectGallery          # Featured engineering project showcase (Planeta Gema)
│       │   │   └── ProjectCard         # Interactive tabs: Overview / Code / Result
│       │   └── ExperienceSection       # Career timeline (Zifo Technologies, Siemens, Qualfon)
│       ├── Floating Back to Top Button # Appears on scroll > 400px
│       └── Footer                      # Scroll-to-top button & copyright notice
```

---

## 4. Key Directory Map

```
resume/
├── .github/workflows/
│   └── deploy.yml                      # GitHub Actions: build → deploy to Pages
├── public/
│   ├── 20260619.png                    # Profile photograph
│   ├── ai-sparkles-icon.svg            # Dark golden-yellow sparkle favicon (#ca9f04)
│   ├── favicon.svg                     # Fallback favicon SVG
│   ├── gadiel-fonseca-master-resume.pdf # ATS-optimized downloadable resume PDF
│   └── gadiel-fonseca-master-resume.tex # Master LaTeX source document
├── src/
│   ├── main.tsx                        # React DOM root entrypoint
│   ├── App.tsx                         # Layout orchestrator, layout composition
│   ├── index.css                       # Tailwind CSS 4, theme tokens & glass utility classes
│   ├── components/
│   │   ├── Navbar.tsx                  # Top navigation bar
│   │   ├── LanguageDropdown.tsx        # Language selector dropdown
│   │   ├── Hero.tsx                    # Hero introduction, avatar, CTAs
│   │   ├── EducationSection.tsx        # University degree, certifications, coursework
│   │   ├── ExperienceSection.tsx       # Interactive career timeline
│   │   ├── ContactSection.tsx          # Standalone contact card
│   │   ├── StarryBackground.tsx        # Dynamic canvas particle background
│   │   ├── Skills/
│   │   │   ├── SkillsSection.tsx       # Skills category grid
│   │   │   └── SkillCard.tsx           # Individual category card
│   │   └── Projects/
│   │       ├── ProjectGallery.tsx      # Project showcase container
│   │       └── ProjectCard.tsx         # Interactive tabbed card
│   ├── context/
│   │   ├── LanguageContext.tsx         # Language provider and state management
│   │   └── useLanguage.ts              # Hook for translation strings
│   ├── hooks/
│   │   └── useTheme.ts                 # Theme state hook (light / dark)
│   ├── i18n/
│   │   └── translations.ts             # English & Spanish translation dictionaries
│   └── lib/
│       └── utils.ts                    # cn() helper (clsx + tailwind-merge)
├── index.html                          # HTML shell with metadata, OG tags & favicon
├── package.json                        # Dependencies & npm scripts
├── vite.config.ts                      # Vite configuration (base: '/resume/')
├── tsconfig.json                       # Root TypeScript config
├── tsconfig.app.json                   # Application TypeScript compilation config
├── tsconfig.node.json                  # Node/Vite tooling TypeScript config
├── eslint.config.js                    # ESLint flat configuration
├── quick-reference.md                  # Developer quick reference
├── architecture.md                     # Deep technical architecture
└── README.md                           # Public repository README
```

---

## 5. Design System Tokens

| Token | Value | Usage |
| :--- | :--- | :--- |
| `cyber-blue` | `#3b82f6` | Primary brand accent, glows, active links |
| `cyber-blue-400` | `#60a5fa` | Highlight text, secondary accents |
| `accent-gold` | `#ca9f04` | Sparkles favicon accent color |
| Font Sans | `Inter, system-ui, sans-serif` | Clean, readable typography |
| `.glass` | `bg-white/60 dark:bg-slate-900/60 backdrop-blur-md` | Navbar, floating bars |
| `.glass-card` | `bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm` | Interactive cards, surfaces |
| `.glow-blue` | `shadow-[0_0_15px_rgba(59,130,246,0.5)]` | Glowing buttons & focus states |
| `.text-glow` | `text-shadow: 0 0 10px rgba(59,130,246,0.7)` | Hero heading accent |
