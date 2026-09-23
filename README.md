# Gadiel M. Fonseca R. — Professional Online Resume

[![React](https://img.shields.io/badge/React-19.2-blue?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.2-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub_Pages-222222?logo=github-pages&logoColor=white)](https://gfons99.github.io/resume/)

> **Live Website**: [https://gfons99.github.io/resume/](https://gfons99.github.io/resume/)  
> **Source Repository**: [https://github.com/gfons99/resume](https://github.com/gfons99/resume)

An interactive, modern, and bilingual (English / Spanish) web resume built with **React 19**, **TypeScript**, **Tailwind CSS 4**, and **Framer Motion**. Designed for technical recruiters, engineering leaders, and collaborators to explore career history, technical proficiencies, enterprise project architectures, and downloadable resume artifacts.

---

## ✨ Features

- **🌐 Full Bilingual Support (EN / ES)**: Instant in-place translation toggle across all roles, metrics, skill categories, and project descriptions.
- **🌓 Dark & Light Mode**: Seamless theme switching with persistent local storage and automatic system color scheme detection.
- **✨ Animated Aesthetics**: Dynamic starfield particle canvas, subtle glowing gradients, and smooth scroll-triggered animations powered by Framer Motion.
- **🚀 Interactive Engineering Showcase**: Deep-dive project cards featuring tabbed navigation between architectural overview, real production backend code snippets, and quantifiable business outcomes.
- **📄 Downloadable Resume Artifacts**:
  - One-click ATS-optimized master resume PDF ([`public/gadiel-fonseca-master-resume.pdf`](public/gadiel-fonseca-master-resume.pdf)).
  - Source LaTeX document ([`public/gadiel-fonseca-master-resume.tex`](public/gadiel-fonseca-master-resume.tex)) for transparent, auditable versioning.
- **📱 Fully Responsive**: Optimized layouts tailored for mobile, tablet, and desktop screens with an accessible slide-out mobile navigation drawer.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/), [TypeScript 5.9](https://www.typescriptlang.org/) |
| **Build & Tooling** | [Vite 8](https://vite.dev/), [ESLint 9](https://eslint.org/) |
| **Styling & Design** | [Tailwind CSS 4](https://tailwindcss.com/), `@tailwindcss/vite`, Glassmorphism |
| **Motion & Icons** | [Framer Motion 12](https://www.framer.com/motion/), [Lucide React](https://lucide.dev/) |
| **Hosting & CI/CD** | [GitHub Pages](https://pages.github.com/), [GitHub Actions](.github/workflows/deploy.yml) |

---

## 📂 Project Structure

```
resume/
├── .github/workflows/
│   └── deploy.yml                      # GitHub Actions: build & deploy to GitHub Pages
├── public/
│   ├── 20260619.png                    # Profile photograph
│   ├── ai-sparkles-icon.svg            # Dark golden-yellow favicon (#ca9f04)
│   ├── favicon.svg                     # Fallback SVG favicon
│   ├── gadiel-fonseca-master-resume.pdf # ATS-optimized resume PDF
│   ├── gadiel-fonseca-master-resume.tex # Resume LaTeX source code
│   ├── mexico-flag-icon.svg            # Mexico flag vector badge
│   └── united-states-flag-icon.svg     # United States flag vector badge
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                  # Responsive header navigation
│   │   ├── LanguageDropdown.tsx        # Language selector (EN / ES)
│   │   ├── Hero.tsx                    # Header hero, photo, summary & actions
│   │   ├── EducationSection.tsx        # Degree, coursework & certifications
│   │   ├── Skills/                     # 9 categorized engineering skill areas
│   │   ├── Projects/                   # Tabbed architectural project showcase
│   │   ├── ExperienceSection.tsx       # Timeline of professional experience
│   │   ├── ContactSection.tsx          # Contact information
│   │   └── StarryBackground.tsx        # Dynamic starfield canvas
│   ├── context/
│   │   ├── LanguageContext.tsx         # Locale state provider
│   │   └── useLanguage.ts              # Translation hook
│   ├── hooks/
│   │   └── useTheme.ts                 # Light / Dark theme toggle hook
│   ├── i18n/
│   │   └── translations.ts             # English & Spanish translation dictionaries
│   ├── lib/
│   │   └── utils.ts                    # Class name merging utility (clsx + twMerge)
│   ├── App.tsx                         # Main application layout
│   ├── index.css                       # Tailwind v4 import & custom styles
│   └── main.tsx                        # React application entry point
├── index.html                          # HTML template & Open Graph metadata
├── vite.config.ts                      # Vite configuration (base: '/resume/')
├── package.json                        # Dependencies and scripts
├── quick-reference.md                  # Cheat sheet for developers
└── architecture.md                     # Deep technical architecture documentation
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v20+ (Node.js 22 recommended)
- **npm**: v10+

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/gfons99/resume.git
cd resume
npm install
```

### Development Server

Start Vite with hot module replacement:

```bash
npm run dev
```

The application will be accessible at `http://localhost:5173/resume/`.

### Linting & Type Checking

Validate code style and TypeScript types:

```bash
npm run lint
npm run build
```

### Production Preview

Serve the built application locally:

```bash
npm run preview
```

---

## 🚢 Deployment

The project is configured for continuous deployment to **GitHub Pages** using GitHub Actions ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)).

Every push to the `main` branch automatically:
1. Checks out the repository.
2. Sets up Node.js 22 with dependency caching.
3. Installs dependencies using `npm ci`.
4. Runs `npm run build` (TypeScript check + Vite production bundle).
5. Deploys the static assets in `dist/` to GitHub Pages.

---

## 📬 Contact & Links

- **Engineer**: Gadiel Moisés Fonseca Ramírez
- **Email**: [gadielfonsecamx@gmail.com](mailto:gadielfonsecamx@gmail.com)
- **LinkedIn**: [linkedin.com/in/gadiel-fonseca](https://www.linkedin.com/in/gadiel-fonseca/)
- **GitHub**: [github.com/gfons99](https://github.com/gfons99)
- **Portfolio**: [https://gfons99.github.io/resume/](https://gfons99.github.io/resume/)

---

## 📄 License

This repository and its source code are licensed under the [MIT License](LICENSE).
