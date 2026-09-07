# Career Portfolio · Hongqiong Guo

> A personal career portfolio web application crafted with Nuxt 4, Vue 3, and TypeScript.

[🌐 Live Site: guohongqiong.vercel.app](https://guohongqiong.vercel.app/)

---

## 🌟 Highlights & Engineering Features

- 🎨 **Neo-Brutalist / Paper Design System**: Cohesive aesthetic featuring high-contrast borders, tactile drop shadows, and subtle paper textures with retro accents.
- 📱 **Mobile-First Touch & Gestures**:
  - Custom lightbox viewer supporting pan, pinch-to-zoom, and safe-area adaptation.
  - **Landscape Orientation Toggle**: 90° rotation mode optimized for 16:7 widescreen screenshots on portrait mobile screens, utilizing `100dvh` for maximum detail without requiring device rotation.
  - Lightbox-local gesture handling for pan and pinch-to-zoom while the rest of the page remains normally zoomable.
- 🌐 **Bilingual Support (JA / EN)**: Reactive locale state management enabling seamless switching between Japanese and English without full-page reloads.
- ⚡ **Nuxt deployment modes**: `nuxt build` creates a Nitro Node server output; `nuxt generate` creates a fully static site in `.output/public` when static hosting is needed.
- 🧩 **Data-Driven Architecture**: Clean separation between presentation components and structured portfolio content (`app/data/`).

---

## 🛠️ Tech Stack

- **Framework**: [Nuxt 4](https://nuxt.com/) (Vue 3, Composition API)
- **Language**: TypeScript
- **Styling**: Tailwind CSS & Modern CSS
- **Iconography**: Google Material Symbols
- **Build Tool**: Vite & Nitro Engine
- **Deployment**: [Vercel](https://vercel.com/)

---

## 💻 Local Development and Deployment

For reviewers and interviewers who wish to run or inspect the project locally:

```bash
# Install dependencies
npm install

# Validate types, lint, and interaction tests
npm run typecheck
npm run lint
npm test -- --run

# Start local development server
npm run dev

# Build the local Nitro Node server output
npm run build

# Optional: generate a static site for a static host
npm run generate
```

`npm run build` produces the Nuxt/Nitro Node server output in `.output/server` (including `.output/server/index.mjs`). `npm run generate` produces static files in `.output/public`. A Vercel project may use its own preset and output configuration, which is not defined by this repository; its remote settings are therefore not inferred here.

---

## 📁 Architecture Overview

```text
app/
├── assets/css/        # Theme variables, typography, and base CSS
├── components/        # Reusable UI components & section panels
│   ├── panels/        # Profile, Experience, Projects, Skills, Contact panels
│   └── projects/      # Project card & interactive screenshot lightbox
├── composables/       # Application states (locale, responsive handlers)
├── data/              # Structured TypeScript portfolio content
└── pages/             # File-based routing
```

---

## 📬 Contact & Author

- **Author**: Hongqiong Guo (郭红琼)
- **GitHub**: [@RedJone888](https://github.com/RedJone888)
- **LinkedIn**: [Hongqiong Guo](https://www.linkedin.com/in/hongqiongguo)
- **Email**: [redjoan.guo@gmail.com](mailto:redjoan.guo@gmail.com)
