export type SkillSource = "core" | "petnido" | "portfolio" | "supporting";

export type SkillItem = {
  name: string;
  source: SkillSource;
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
    title: "技術スタック・言語",
    description:
      "約3年間、Vueを中心に鉄道物流DXを支えるWebシステムのフロントエンド開発に携わりました。荷主向けサービスや社内業務・BIシステムで、複雑な業務フローやデータ量の多い画面の設計・実装、API連携、データ可視化、既存画面の改善を経験しています。現在の個人サイトはNuxtで構築し、個人開発のPetNidoでは、React / Next.js / TypeScriptを用いて、API・データベースまで含むフルスタック開発を実践しています。",
    coreLabel: "CORE",
    projectLabel: "PETNIDO",
    portfolioLabel: "PORTFOLIO",
    supportingLabel: "RELATED",
    coreLegend: "実務で使用",
    projectLegend: "個人開発で実践",
    portfolioLegend: "現在の個人サイトで使用",
    supportingLegend: "関連知識・経験",
    categoryLabel: "SKILL AREA",
    languagesTitle: "言語・コミュニケーション",
    languageEvidenceLabel: "EVIDENCE",
  },
  en: {
    title: "Skills & Languages",
    description:
      "Over approximately three years, I worked primarily with Vue on frontend development for web systems supporting rail-logistics digital transformation. Across shipper-facing services and internal operations and BI systems, I designed and implemented complex workflow UIs and data-heavy screens, including API integration, data visualization, and improvements to existing interfaces. I built this portfolio with Nuxt, and through PetNido I practice full-stack development with React, Next.js, TypeScript, APIs, and databases.",
    coreLabel: "CORE",
    projectLabel: "PETNIDO",
    portfolioLabel: "PORTFOLIO",
    supportingLabel: "RELATED",
    coreLegend: "Used professionally",
    projectLegend: "Practiced in personal development",
    portfolioLegend: "Used in current portfolio",
    supportingLegend: "Related knowledge & experience",
    categoryLabel: "SKILL AREA",
    languagesTitle: "Languages & Collaboration",
    languageEvidenceLabel: "EVIDENCE",
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
        { name: "Vue 2 / Vue 3", source: "core" },
        { name: "Nuxt", source: "portfolio" },
        { name: "TypeScript", source: "core" },
        { name: "JavaScript", source: "core" },
        { name: "HTML / CSS", source: "core" },
        { name: "Composition API", source: "core" },
        { name: "React / Next.js", source: "petnido" },
      ],
    },
    {
      key: "ui",
      icon: "dashboard_customize",
      title: "UI・プロダクトフロー設計",
      description:
        "情報量の多い管理画面や複雑な入力フローを、理解しやすく操作しやすいUIへ整理します。",
      items: [
        { name: "Responsive UI", source: "core" },
        { name: "Complex Business UI", source: "core" },
        { name: "Dependent Forms & Validation", source: "core" },
        { name: "Data Tables / Search / Pagination", source: "core" },
        { name: "Loading / Empty / Error States", source: "core" },
        { name: "Reusable Components", source: "core" },
        { name: "Multi-step Workflow Design", source: "petnido" },
        { name: "Schema-driven Forms", source: "petnido" },
      ],
    },
    {
      key: "data",
      icon: "query_stats",
      title: "API・データ・フルスタック",
      description:
        "APIの状態設計から業務データの可視化まで、データを判断や操作につながる画面へ変換します。",
      items: [
        { name: "REST API Integration", source: "core" },
        { name: "API State UX", source: "core" },
        { name: "Charts / BI", source: "core" },
        { name: "SQL", source: "supporting" },
        { name: "WebGIS", source: "supporting" },
        { name: "tRPC（型安全なAPI）", source: "petnido" },
        { name: "TanStack Query（サーバー状態・キャッシュ）", source: "petnido" },
        { name: "Prisma / PostgreSQL", source: "petnido" },
        { name: "認証・所有権チェック", source: "petnido" },
      ],
    },
    {
      key: "delivery",
      icon: "deployed_code",
      title: "品質・開発フロー",
      description:
        "要件整理、実装、検証、公開後の改善まで、プロダクトを継続的に仕上げるための進め方です。",
      items: [
        { name: "Git / GitHub", source: "core" },
        { name: "Performance Improvement", source: "core" },
        { name: "Vercel / Cloudflare", source: "petnido" },
        { name: "Vitest / Playwright", source: "petnido" },
        { name: "i18n", source: "petnido" },
        { name: "Figma Collaboration", source: "supporting" },
        { name: "AI-assisted Requirements & Review", source: "petnido" },
      ],
    },
  ],
  en: [
    {
      key: "frontend",
      icon: "code_blocks",
      title: "Frontend Engineering",
      description:
        "Building maintainable, user-centered interfaces for both enterprise systems and public web products.",
      items: [
        { name: "Vue 2 / Vue 3", source: "core" },
        { name: "Nuxt", source: "portfolio" },
        { name: "TypeScript", source: "core" },
        { name: "JavaScript", source: "core" },
        { name: "HTML / CSS", source: "core" },
        { name: "Composition API", source: "core" },
        { name: "React / Next.js", source: "petnido" },
      ],
    },
    {
      key: "ui",
      icon: "dashboard_customize",
      title: "Product UI & Workflows",
      description:
        "Turning dense management screens and complex input workflows into clear, efficient interfaces.",
      items: [
        { name: "Responsive UI", source: "core" },
        { name: "Complex Business UI", source: "core" },
        { name: "Dependent Forms & Validation", source: "core" },
        { name: "Data Tables / Search / Pagination", source: "core" },
        { name: "Loading / Empty / Error States", source: "core" },
        { name: "Reusable Components", source: "core" },
        { name: "Multi-step Workflow Design", source: "petnido" },
        { name: "Schema-driven Forms", source: "petnido" },
      ],
    },
    {
      key: "data",
      icon: "query_stats",
      title: "API, Data & Full-stack",
      description:
        "Connecting API states, business data, and database-backed features to interfaces that support clear decisions and actions.",
      items: [
        { name: "REST API Integration", source: "core" },
        { name: "API State UX", source: "core" },
        { name: "Charts / BI", source: "core" },
        { name: "SQL", source: "supporting" },
        { name: "WebGIS", source: "supporting" },
        { name: "tRPC — Type-safe API", source: "petnido" },
        { name: "TanStack Query — Server State & Cache", source: "petnido" },
        { name: "Prisma / PostgreSQL", source: "petnido" },
        { name: "Authentication & Ownership Checks", source: "petnido" },
      ],
    },
    {
      key: "delivery",
      icon: "deployed_code",
      title: "Quality & Delivery",
      description:
        "Taking products from requirements and implementation through verification, deployment, and iteration.",
      items: [
        { name: "Git / GitHub", source: "core" },
        { name: "Performance Improvement", source: "core" },
        { name: "Vercel / Cloudflare", source: "petnido" },
        { name: "Vitest / Playwright", source: "petnido" },
        { name: "i18n", source: "petnido" },
        { name: "Figma Collaboration", source: "supporting" },
        { name: "AI-assisted Requirements & Review", source: "petnido" },
      ],
    },
  ],
};
