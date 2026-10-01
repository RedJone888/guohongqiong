import tailwindcss from "@tailwindcss/vite";
import { portfolioPaths } from "./app/data/navigation";

export default defineNuxtConfig({
  compatibilityDate: "2026-07-01",
  // Use Vercel's standalone tracker until its SDK supports Vue Router 5.
  $production: {
    app: {
      head: {
        script: [
          {
            key: "vercel-analytics",
            src: "/_vercel/insights/script.js",
            defer: true,
          },
        ],
      },
    },
  },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      htmlAttrs: { lang: "ja" },
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon-headshot.png?v=portfolio-avatar-3",
        },
        {
          rel: "shortcut icon",
          type: "image/png",
          href: "/favicon-headshot.png?v=portfolio-avatar-3",
        },
        {
          rel: "apple-touch-icon",
          href: "/apple-touch-icon-headshot.png?v=portfolio-avatar-3",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap",
        },
      ],
      titleTemplate: "%s · Career Portfolio",
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          name: "description",
          content: "Career portfolio website for job applications.",
        },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Career Portfolio" },
      ],
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: Object.values(portfolioPaths),
      failOnError: true,
    },
  },
});
