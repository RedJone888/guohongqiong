export type SkillSource = "core" | "personal" | "supporting";

export type SkillItem = {
  name: string;
  source: SkillSource;
};

export type SkillGroup = {
  key: string;
  icon: string;
  title: string;
  items: SkillItem[];
};

export const skillHeader = {
  ja: {
    title: "技術スタック・言語",
    description:
      // "約3年間、Vueを中心に鉄道物流DXを支えるWebシステムのフロントエンド開発に携わりました。荷主向けサービスや社内業務・BIシステムで、複雑な業務フローやデータ量の多い画面の設計・実装、API連携、データ可視化、既存画面の改善を経験しています。現在の個人サイトはNuxtで構築し、個人開発のPetNidoでは、React / Next.js / TypeScriptを用いて、API・データベースまで含むフルスタック開発を実践しています。",
      "実務で使用した技術と、個人開発・本サイトで使用している技術を色分けして掲載しています。",
    coreLabel: "実務",
    personalLabel: "個人開発",
    supportingLabel: "関連",
    coreLegend: "業務で使用",
    personalLegend: "PetNido・本サイトで使用",
    supportingLegend: "関連知識・学習経験",
    languagesTitle: "語学",
  },
  en: {
    title: "Skills & Languages",
    description:
      // "Over approximately three years, I worked primarily with Vue on frontend development for web systems supporting rail-logistics digital transformation. Across shipper-facing services and internal operations and BI systems, I designed and implemented complex workflow UIs and data-heavy screens, including API integration, data visualization, and improvements to existing interfaces. I built this portfolio with Nuxt, and through PetNido I practice full-stack development with React, Next.js, TypeScript, APIs, and databases.",
      "Technologies I have used professionally and in personal projects, color-coded by source.",
    coreLabel: "WORK",
    personalLabel: "PERSONAL",
    supportingLabel: "RELATED",
    coreLegend: "Used professionally",
    personalLegend: "Used in PetNido & this site",
    supportingLegend: "Related knowledge & study",
    languagesTitle: "Languages",
  },
};

// Technology names are shared by both locales; only group titles are localized.
const frontendItems: SkillItem[] = [
  { name: "Vue 2", source: "core" },
  { name: "Vue 3（Composition API）", source: "core" },
  { name: "TypeScript", source: "core" },
  { name: "JavaScript", source: "core" },
  { name: "HTML / CSS", source: "core" },
  { name: "Vuex", source: "core" },
  { name: "Element UI", source: "core" },
  { name: "Vben Admin / Ant Design Vue", source: "core" },
  { name: "React / Next.js", source: "personal" },
  { name: "Nuxt", source: "personal" },
  { name: "Tailwind CSS", source: "personal" },
  { name: "Zustand", source: "personal" },
];

const dataItems: SkillItem[] = [
  { name: "REST API / Axios", source: "core" },
  { name: "ECharts", source: "core" },
  { name: "TinyMCE", source: "core" },
  { name: "tRPC", source: "personal" },
  { name: "Zod", source: "personal" },
  { name: "TanStack Query", source: "personal" },
  { name: "Prisma / PostgreSQL", source: "personal" },
  { name: "NextAuth", source: "personal" },
  { name: "MapLibre GL", source: "personal" },
];

const deliveryItems: SkillItem[] = [
  { name: "Git / GitLab", source: "core" },
  { name: "Webpack", source: "core" },
  { name: "Swagger", source: "core" },
  { name: "Sketch", source: "core" },
  { name: "Vitest / Playwright", source: "personal" },
  { name: "GitHub Actions", source: "personal" },
  { name: "Vercel / Cloudflare", source: "personal" },
  { name: "i18n", source: "personal" },
  { name: "Figma", source: "personal" },
  { name: "AI-assisted Requirements & Review", source: "personal" },
];

// Implementation strengths are written as readable phrases, so they are localized.
const strengthItems: Record<"ja" | "en", SkillItem[]> = {
  ja: [
    { name: "条件連動フォーム・バリデーション", source: "core" },
    { name: "大量データの一覧・検索・ページング", source: "core" },
    { name: "通信状態に応じたUI（読込中・空・エラー）", source: "core" },
    { name: "共通コンポーネント化", source: "core" },
    { name: "描画パフォーマンス改善", source: "core" },
    { name: "Schemaベースのフォーム構成", source: "core" },
    { name: "多段階フォーム・下書き保存", source: "personal" },
    { name: "レスポンシブUI", source: "personal" },
  ],
  en: [
    { name: "Dependent Forms & Validation", source: "core" },
    { name: "Data Tables / Search / Pagination", source: "core" },
    { name: "Loading / Empty / Error States", source: "core" },
    { name: "Reusable Components", source: "core" },
    { name: "Rendering Performance Improvement", source: "core" },
    { name: "Schema-driven Forms", source: "core" },
    { name: "Multi-step Forms & Draft Saving", source: "personal" },
    { name: "Responsive UI", source: "personal" },
  ],
};

const foundationItems: Record<"ja" | "en", SkillItem[]> = {
  ja: [
    { name: "Java", source: "supporting" },
    { name: "C / C++", source: "supporting" },
    { name: "Python", source: "supporting" },
    { name: "SQL", source: "supporting" },
    { name: "データ構造・アルゴリズム", source: "supporting" },
    { name: "WebGIS", source: "supporting" },
    { name: "Linux", source: "personal" },
  ],
  en: [
    { name: "Java", source: "supporting" },
    { name: "C / C++", source: "supporting" },
    { name: "Python", source: "supporting" },
    { name: "SQL", source: "supporting" },
    { name: "Data Structures & Algorithms", source: "supporting" },
    { name: "WebGIS", source: "supporting" },
    { name: "Linux", source: "personal" },
  ],
};

export const skillGroups: Record<"ja" | "en", SkillGroup[]> = {
  ja: [
    { key: "frontend", icon: "code_blocks", title: "フロントエンド開発", items: frontendItems },
    { key: "data", icon: "query_stats", title: "API・データ・フルスタック", items: dataItems },
    { key: "delivery", icon: "deployed_code", title: "品質・開発フロー", items: deliveryItems },
    { key: "strengths", icon: "dashboard_customize", title: "得意な実装", items: strengthItems.ja },
    { key: "foundations", icon: "school", title: "基礎知識・学習経験", items: foundationItems.ja },
  ],
  en: [
    { key: "frontend", icon: "code_blocks", title: "Frontend Engineering", items: frontendItems },
    { key: "data", icon: "query_stats", title: "API, Data & Full-stack", items: dataItems },
    { key: "delivery", icon: "deployed_code", title: "Quality & Delivery", items: deliveryItems },
    { key: "strengths", icon: "dashboard_customize", title: "What I Build", items: strengthItems.en },
    { key: "foundations", icon: "school", title: "Foundations & Coursework", items: foundationItems.en },
  ],
};
