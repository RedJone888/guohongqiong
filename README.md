# Career Portfolio · Hongqiong Guo

A Japanese/English career portfolio for job applications, built with Nuxt 4, Vue 3, and TypeScript. The UI uses Tailwind CSS and scoped CSS.

[Live site: guohongqiong.vercel.app](https://guohongqiong.vercel.app/)

## Features

- **Shareable pages:** Independent routes support direct visits, refreshes, and browser history.
- **Japanese and English:** Japanese is prerendered by default. A shared locale state switches content, metadata, and document language in the browser while keeping the current route.
- **Responsive navigation:** Desktop sidebar and mobile bottom navigation, with a mobile submenu for education, certificates, and skills.
- **Screenshot viewer:** Enlarged project images with pinch zoom, panning, and rotation on mobile. Keyboard support includes focus management, Escape to close, and restoring focus to the opening button.

## Project structure

```text
app/
├── assets/css/    # Shared styles and theme variables
├── components/    # Shared layout, certificate cards, and screenshot viewer
├── composables/   # Locale state and page metadata
├── data/          # Portfolio content and navigation paths
└── pages/         # Route-specific templates, logic, and styles
```

## Local development

Use Node.js 22 (the version used in CI) and npm. From the repository root:

```bash
npm ci
npm run dev
```

## Validation

Run the checks configured in [GitHub Actions](.github/workflows/ci.yml):

```bash
npm run typecheck
npm run lint
npm test -- --run
npm run build
npm run test:prerender
```

[Vitest interaction tests](tests/portfolio.test.ts) cover navigation, language switching, profile links, and screenshot-viewer focus behavior. The [prerender check](scripts/check-prerender.mjs) reads the generated HTML without executing client JavaScript and verifies each page's content and metadata.

After building, run `npm run preview` to preview the production output locally.

## Static generation (SSG) and deployment

`npm run build` executes `nuxt build`. The `nitro.prerender` configuration in [nuxt.config.ts](nuxt.config.ts) uses [the navigation paths](app/data/navigation.ts) to generate these seven pages at build time, each with its own HTML, title, description, and canonical URL:

| Page | URL |
| --- | --- |
| Profile | `/` |
| Experience | `/experience` |
| Projects | `/projects` |
| Education | `/education` |
| Certificates | `/certificates` |
| Skills | `/skills` |
| Contact | `/contact` |

Local builds write static HTML to `.output/public/index.html` and `.output/public/<route>/index.html`, alongside Nitro's server output in `.output/server`.

On Vercel, select the **Nuxt** framework preset and leave the **Build Command / Output Directory** overrides off. Nitro uses the Vercel preset to produce the deployment output.

## Contact

- **Developer**: Hongqiong Guo (郭红琼)
- **GitHub**: [@RedJone888](https://github.com/RedJone888)
- **LinkedIn**: [Hongqiong Guo](https://www.linkedin.com/in/hongqiongguo)
- **Email**: [redjoan.guo@gmail.com](mailto:redjoan.guo@gmail.com)
