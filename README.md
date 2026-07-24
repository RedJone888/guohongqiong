# Nuxt Career Portfolio MVP

A static personal career website MVP built with Nuxt. The content is placeholder data and is meant to be replaced with your real profile, experience, projects, education, certificates, and contact information.

## Stack

- Nuxt 4
- Vue 3
- TypeScript
- Plain CSS
- Static generation via `nuxt generate`

## Getting started

```bash
npm install
npm run dev
```

Open the local URL printed by Nuxt.

## Generate a static site

```bash
npm run generate
```

Nuxt will prerender the routes and create static output for deployment.

## Main files to edit

```text
app/data/site.ts              # Replace all placeholder career content here
app/assets/css/main.css       # Visual theme and responsive layout
app/pages/index.vue           # Home page structure
app/pages/projects/[slug].vue # Project case study template
nuxt.config.ts                # Static prerender routes and global metadata
```

## Deployment notes

For static hosting, start with:

```text
Build command: npm run generate
Output directory: .output/public
```

If you create a Cloudflare Pages project through Cloudflare's C3 Nuxt template, follow the generated project settings instead. The official Cloudflare guide may use a different build command and output directory depending on that template.

## Replacement checklist

- Replace name, title, location, email, GitHub, LinkedIn
- Replace skill groups with job-relevant skills
- Replace all project cards with actual projects
- Add real project screenshots or links if available
- Replace education and certificates
- Add a real PDF resume to `public/` and update `resumeUrl`
- Adjust metadata in `nuxt.config.ts`
