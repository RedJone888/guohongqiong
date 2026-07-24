export type SkillItem = {
  name: string;
  core?: boolean;
};

export type SkillGroup = {
  key: string;
  icon: string;
  title: string;
  description: string;
  items: SkillItem[];
};

export const skillHeader = {
  ja: {
    title: "Technical Skills",
    description:
      "Vue / Nuxt / TypeScriptを軸に、複雑な業務UI、API連携、データ可視化、レスポンシブなWebプロダクトを設計・実装します。",
    coreLabel: "CORE",
    categoryLabel: "SKILL AREA",
  },
  en: {
    title: "Technical Skills",
    description:
      "A frontend-focused skill set built around Vue, Nuxt, and TypeScript, with experience in complex business UI, API integration, data visualization, and responsive web products.",
    coreLabel: "CORE",
    categoryLabel: "SKILL AREA",
  },
};

export const skillGroups: Record<"ja" | "en", SkillGroup[]> = {
  ja: [
    {
      key: "frontend",
      icon: "code_blocks",
      title: "フロントエンド開発",
      description:
        "業務システムから公開Webサービスまで、保守性とユーザー体験を意識した画面を構築します。",
      items: [
        { name: "Vue 2 / Vue 3", core: true },
        { name: "Nuxt", core: true },
        { name: "TypeScript", core: true },
        { name: "JavaScript" },
        { name: "HTML / CSS" },
        { name: "Next.js" },
      ],
    },
    {
      key: "ui",
      icon: "dashboard_customize",
      title: "UI・業務画面設計",
      description:
        "情報量の多い管理画面や複雑な入力フローを、理解しやすく操作しやすいUIへ整理します。",
      items: [
        { name: "Composition API", core: true },
        { name: "Responsive UI", core: true },
        { name: "Tailwind CSS" },
        { name: "Vben Admin" },
        { name: "連動フォーム" },
        { name: "データテーブル" },
      ],
    },
    {
      key: "data",
      icon: "query_stats",
      title: "データ・API連携",
      description:
        "APIの状態設計から業務データの可視化まで、データを判断につながる画面へ変換します。",
      items: [
        { name: "REST API", core: true },
        { name: "API状態管理", core: true },
        { name: "Charts / BI" },
        { name: "TinyMCE" },
        { name: "SQL" },
        { name: "WebGIS" },
      ],
    },
    {
      key: "delivery",
      icon: "deployed_code",
      title: "開発・デリバリー",
      description:
        "再利用できる構成、実行性能、公開後の改善までを意識してプロダクトを仕上げます。",
      items: [
        { name: "GitHub", core: true },
        { name: "Vercel" },
        { name: "Cloudflare" },
        { name: "Figma" },
        { name: "性能改善" },
        { name: "共通コンポーネント" },
      ],
    },
  ],
  en: [
    {
      key: "frontend",
      icon: "code_blocks",
      title: "Frontend Development",
      description:
        "Building maintainable, user-centered interfaces for both enterprise systems and public web products.",
      items: [
        { name: "Vue 2 / Vue 3", core: true },
        { name: "Nuxt", core: true },
        { name: "TypeScript", core: true },
        { name: "JavaScript" },
        { name: "HTML / CSS" },
        { name: "Next.js" },
      ],
    },
    {
      key: "ui",
      icon: "dashboard_customize",
      title: "UI & Business Systems",
      description:
        "Turning dense management screens and complex input workflows into clear, efficient interfaces.",
      items: [
        { name: "Composition API", core: true },
        { name: "Responsive UI", core: true },
        { name: "Tailwind CSS" },
        { name: "Vben Admin" },
        { name: "Dependent Forms" },
        { name: "Data Tables" },
      ],
    },
    {
      key: "data",
      icon: "query_stats",
      title: "Data & API Integration",
      description:
        "Connecting API states and business data to interfaces that support clear operational decisions.",
      items: [
        { name: "REST API", core: true },
        { name: "API State UX", core: true },
        { name: "Charts / BI" },
        { name: "TinyMCE" },
        { name: "SQL" },
        { name: "WebGIS" },
      ],
    },
    {
      key: "delivery",
      icon: "deployed_code",
      title: "Workflow & Delivery",
      description:
        "Finishing products with reusable structure, responsive performance, and iteration after release in mind.",
      items: [
        { name: "GitHub", core: true },
        { name: "Vercel" },
        { name: "Cloudflare" },
        { name: "Figma" },
        { name: "Performance" },
        { name: "Reusable Components" },
      ],
    },
  ],
};
