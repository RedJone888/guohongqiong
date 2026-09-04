import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2026-07-01",
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
          content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
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
      routes: [
        "/",
        "/projects/kakeineko",
        "/projects/receipt-ai",
        "/projects/team-dashboard",
      ],
    },
  },
});
