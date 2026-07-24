export type SkillGroup = {
  title: string;
  items: string[];
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  role: string;
  stack: string[];
  highlights: string[];
  outcome: string;
  links: {
    label: string;
    href: string;
  }[];
};

export type Education = {
  school: string;
  degree: string;
  period: string;
  location: string;
  website: string;
  logo: string;
  details: string;
  relatedCourses?: string[];
  activities?: {
    title: string;
    description: string;
  }[];
  bullets: string[];
};

export type Certificate = {
  name: string;
  displayName: string;
  issuer: string;
  category: "Language" | "IT" | "Security";
  period: string;
  officialSite: string;
  logo: string;
  logoAlt: string;
  verification?: string;
};

export const profile = {
  name: "郭红琼",
  nameKanji: "郭紅瓊",
  nameRomaji: "Guo Hongqiong",
  nameKana: "グオ ホンチョン",

  title: "Frontend Engineer / Nuxt Developer",
  role: "Frontend Engineer",
  stack: "Vue / Nuxt / TypeScript",

  email: "redjoan.guo@gmail.com",
  github: "https://github.com/RedJone888",
  linkedin: "https://www.linkedin.com/in/hongqiongguo",

  resumeUrl: "/resume-placeholder.txt",

  photoUrl: "/images/profile/profile-headshot.png",

  ja: {
    statusLine: [
      "中国出身",
      "修士卒業",
      "フロントエンド開発 約3年",
      "中日英対応",
      "大阪在住",
      "求職中",
      "勤務地に応じて転居可能",
    ],
    summary:
      "中国出身、大阪在住のフロントエンドエンジニアです。修士卒業後、約3年間 Vue / Nuxt / TypeScript を中心に Web フロントエンド開発に携わってきました。現在、日本国内でフロントエンド職を探しており、勤務地に応じた転居も検討可能です。",

    contactTitle: "連絡先",
    resumeLabel: "CVをダウンロード",
    languageTitle: "語学力",
    photoCaption: "Open to Work",
    locationLabel: "Osaka, Japan",
    navLabel: "詳しく見る",
    navLinks: [
      { label: "実務経験", href: "#experience" },
      { label: "プロジェクト", href: "#projects" },
      { label: "学歴", href: "#education" },
      { label: "資格", href: "#certificates" },
      { label: "技術スタック", href: "#skills" },
    ],
  },
  en: {
    statusLine: [
      "From China",
      "Master’s Degree",
      "3 Years Frontend",
      "Chinese / Japanese / English",
      "Based in Osaka",
      "Open to work",
      "Open to relocation",
    ],
    summary:
      "Frontend engineer from China, currently based in Osaka, Japan. After completing a master’s degree, I have worked for about three years in frontend development, mainly with Vue / Nuxt / TypeScript. I am currently seeking frontend roles in Japan and open to relocating depending on the workplace location.",
    contactTitle: "Contact",
    resumeLabel: "Download resume",
    languageTitle: "Languages",
    photoCaption: "Open to Work",
    locationLabel: "Osaka, Japan",
    navLabel: "Explore",
    navLinks: [
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Education", href: "#education" },
      { label: "Certificates", href: "#certificates" },
      { label: "Skills", href: "#skills" },
    ],
  },
};
export const navLinks = [
  {
    href: "#experience",
    ja: { label: "実務経験" },
    en: { label: "Experience" },
  },
  {
    href: "#projects",
    ja: { label: "プロジェクト" },
    en: { label: "Projects" },
  },
  { href: "#education", ja: { label: "学歴" }, en: { label: "Education" } },
  {
    href: "#certificates",
    ja: { label: "資格" },
    en: { label: "Certificates" },
  },
  { href: "#skills", ja: { label: "技術スタック" }, en: { label: "Skills" } },
];
export type PortfolioSectionKey =
  | "profile"
  | "experience"
  | "projects"
  | "education"
  | "certificates"
  | "skills"
  | "contact";

export const portfolioSections = [
  {
    key: "profile",
    ja: {
      label: "プロフィール",
      eyebrow: "Profile",
      title: "Profile Summary",
      description:
        "中国出身、大阪在住。修士課程修了後、約3年間フロントエンド開発に携わってきました。",
    },
    en: {
      label: "Profile",
      eyebrow: "Profile",
      title: "Profile Summary",
      description:
        "Frontend engineer from China, based in Osaka, with a master’s degree and about 3 years of frontend experience.",
    },
  },
  {
    key: "experience",
    ja: {
      label: "実務経験",
      eyebrow: "Experience",
      title: "Frontend Experience",
      description:
        "Vue / Nuxt / TypeScript を中心とした Web フロントエンド開発経験。",
    },
    en: {
      label: "Experience",
      eyebrow: "Experience",
      title: "Frontend Experience",
      description:
        "Frontend development experience mainly with Vue / Nuxt / TypeScript.",
    },
  },
  {
    key: "projects",
    ja: {
      label: "プロジェクト",
      eyebrow: "Projects",
      title: "Selected Projects",
      description:
        "個人開発・学習プロジェクトを通じて、設計・実装・UI 改善を継続しています。",
    },
    en: {
      label: "Projects",
      eyebrow: "Projects",
      title: "Selected Projects",
      description:
        "Personal and learning projects covering product design, implementation, and UI improvement.",
    },
  },
  {
    key: "education",
    ja: {
      label: "学歴",
      eyebrow: "Education",
      title: "Education",
      description:
        "地理情報科学、空間データ、環境データ分析を背景に Web 開発へ進みました。",
    },
    en: {
      label: "Education",
      eyebrow: "Education",
      title: "Education",
      description:
        "Academic background in GIS, spatial data, and environmental data analysis.",
    },
  },
  {
    key: "certificates",
    ja: {
      label: "資格",
      eyebrow: "Certificates",
      title: "Certificates",
      description:
        "語学、情報セキュリティ、データベース、プログラミング関連の資格。",
    },
    en: {
      label: "Certificates",
      eyebrow: "Certificates",
      title: "Certificates",
      description:
        "Language, security, database, and programming-related certifications.",
    },
  },
  {
    key: "skills",
    ja: {
      label: "技術",
      eyebrow: "Skills",
      title: "Technical Skills",
      description:
        "Vue / Nuxt / TypeScript を中心に、Web アプリケーション開発に必要な技術を扱います。",
    },
    en: {
      label: "Skills",
      eyebrow: "Skills",
      title: "Technical Skills",
      description:
        "Frontend-focused stack centered on Vue / Nuxt / TypeScript.",
    },
  },
  {
    key: "contact",
    ja: {
      label: "連絡先",
      eyebrow: "Contact",
      title: "Contact",
      description:
        "メール、GitHub、LinkedIn から連絡できます。職務経歴書もこちらから確認できます。",
    },
    en: {
      label: "Contact",
      eyebrow: "Contact",
      title: "Contact",
      description:
        "Reach me by email, GitHub, or LinkedIn. Resume download is also available here.",
    },
  },
] as const;
export const quickFacts = {
  ja: [
    {
      label: "希望職種",
      value: "フロントエンドエンジニア",
    },
    {
      label: "現在地",
      value: "大阪府大阪市",
    },
    {
      label: "転居",
      value: "勤務地に応じて日本国内での転居を検討可能",
    },
    {
      label: "技術領域",
      value: "Vue, Nuxt, TypeScript, Web UI, API Integration",
    },
  ],
  en: [
    {
      label: "Target roles",
      value: "Frontend Engineer",
    },
    {
      label: "Current location",
      value: "Osaka, Japan",
    },
    {
      label: "Relocation",
      value: "Open to relocating within Japan depending on workplace location",
    },
    {
      label: "Focus areas",
      value: "Vue, Nuxt, TypeScript, Web UI, API Integration",
    },
  ],
};
export const profileHighlights = {
  ja: [
    {
      label: "Frontend",
      value: "Vue / Nuxt / TypeScript を中心に学習・開発",
    },
    {
      label: "Data background",
      value: "GIS・空間データ・環境データ分析の学術背景",
    },
    {
      label: "Job search",
      value: "大阪在住、勤務地に応じて転居可能",
    },
  ],
  en: [
    {
      label: "Frontend",
      value: "Focused on Vue / Nuxt / TypeScript",
    },
    {
      label: "Data background",
      value:
        "Academic background in GIS, spatial data, and environmental analysis",
    },
    {
      label: "Job search",
      value: "Based in Osaka, open to relocation within Japan",
    },
  ],
};
export const languageSkills = [
  {
    key: "chinese",
    level: 5,
    ja: {
      name: "中国語",
      credential: "Native",
    },
    en: {
      name: "Chinese",
      credential: "Native",
    },
  },
  {
    key: "japanese",
    level: 3,
    ja: {
      name: "日本語",
      credential: "JLPT N1",
    },
    en: {
      name: "Japanese",
      credential: "JLPT N1",
    },
  },
  {
    key: "english",
    level: 3,
    ja: {
      name: "英語",
      credential: "CET-6",
    },
    en: {
      name: "English",
      credential: "CET-6",
    },
  },
];
export const skills: SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      "Vue 2 / Vue 3",
      "Nuxt",
      "TypeScript",
      "HTML",
      "CSS",
      "Responsive UI",
    ],
  },
  {
    title: "Mobile",
    items: ["SwiftUI", "iOS", "URLSession", "Codable", "App Store workflow"],
  },
  {
    title: "Backend & API",
    items: [
      "REST API",
      "Node.js",
      "Hono",
      "Cloudflare Workers",
      "OpenAPI",
      "Zod",
    ],
  },
  {
    title: "Data & Tools",
    items: ["PostgreSQL", "SQLite", "D1", "GitHub", "GitHub Actions", "Figma"],
  },
];

export const experiences: Experience[] = [
  {
    company: "Sample Tech Studio",
    role: "Frontend Engineer",
    period: "2023 — Present",
    location: "Osaka / Remote",
    bullets: [
      "Developed customer-facing web applications with Vue and TypeScript.",
      "Improved component structure, form validation, and API error handling.",
      "Collaborated with designers and backend engineers to ship small product iterations.",
    ],
  },
  {
    company: "Personal Product Lab",
    role: "Independent Developer",
    period: "2025 — Present",
    location: "Japan",
    bullets: [
      "Designed and implemented MVPs from product requirements to deployment.",
      "Built prototypes for household finance, receipt capture, and shared ledger workflows.",
      "Used AI-assisted development carefully for code review, documentation, and UI exploration.",
    ],
  },
  {
    company: "Example Web Agency",
    role: "Web Developer",
    period: "2020 — 2023",
    location: "Remote",
    bullets: [
      "Maintained Vue 2 projects and implemented reusable UI modules.",
      "Worked on landing pages, dashboards, and CMS-driven websites.",
      "Handled basic SEO, performance tuning, and responsive design fixes.",
    ],
  },
];

export const education: Education[] = [
  {
    school: "中国石油大学（華東）",
    degree: "地理情報科学 学士",
    period: "2015.09 — 2019.06",
    location: "中国・青島",
    website: "https://www.upc.edu.cn/",
    logo: "/images/education/upc-logo.jpg",
    details:
      "地理情報科学を専攻し、空間情報、データ処理、プログラミング、データベースの基礎を体系的に学びました。WebGIS の講義を通じて、地理空間データを Web 上で可視化し、ユーザーに分かりやすく届ける技術に強い関心を持つようになり、フロントエンドエンジニアとしてのキャリア形成を志すきっかけになりました。",
    relatedCourses: [
      "C 言語",
      "C++",
      "C#",
      "Java",
      "データ構造",
      "空間データベース",
      "GIS",
      "WebGIS",
    ],
    activities: [
      {
        title: "大学生创新创业项目",
        description:
          "学生プロジェクトとして WeChat ミニプログラムの開発に参加し、モバイル向け UI、画面遷移、データ表示など、実際のユーザーに触れるアプリケーション開発を経験しました。",
      },
    ],
    bullets: [
      "プログラミング、データ構造、空間データベースなどを通じて計算科学の基礎を習得",
      "WebGIS を通じて、地理空間データを Web 上で扱う技術に関心を持つ",
      "学生プロジェクトで WeChat ミニプログラム開発に参加し、フロントエンド開発への関心を深める",
    ],
  },
  {
    school: "北京林業大学",
    degree: "農業工程・情報技術 修士",
    period: "2019.09 — 2022.06",
    location: "中国・北京",
    website: "https://www.bjfu.edu.cn/",
    logo: "/images/education/bjfu-logo.png",
    details:
      "大学院では、生態ネットワーク最適化、リモートセンシングデータ分析、空間データの活用を中心に研究しました。研究活動に加えて「生態環境一張図」関連の実習に参加し、環境データを構造化して地図サービスや Web システム上で表現する実務に触れたことで、フロントエンド開発を本格的に自学し、卒業後に Web 開発のキャリアへ進みました。",
    relatedCourses: [
      "リモートセンシング",
      "空間データ分析",
      "生態ネットワーク最適化",
      "データベース",
      "GIS",
      "地図サービス",
    ],
    activities: [
      {
        title: "修士論文",
        description:
          "生態ネットワーク最適化と空間データ分析に関する研究を行い、リモートセンシングデータや地理空間データを用いた分析・評価に取り組みました。",
      },
      {
        title: "生態環境一張図 関連実習",
        description:
          "データベースビュー作成、データテーブル構造作成、タイル地図サービス公開などの技術支援を担当。環境関連データを Web 上で視覚的に伝える実務に関わりました。",
      },
    ],
    bullets: [
      "生態ネットワーク最適化、リモートセンシングデータ分析、空間データ活用を中心に研究",
      "「生態環境一張図」関連の実習で、データベースビュー作成、テーブル構造作成、タイル地図サービス公開を経験",
      "環境関連データの Web 可視化に強い関心を持ち、卒業後のフロントエンド開発キャリアにつなげる",
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "kakeineko",
    title: "KakeiNeko",
    subtitle: "Family bookkeeping app concept for the Japanese market",
    summary:
      "A household bookkeeping product focused on shared ledgers, simple expense input, category management, and calm mobile UI.",
    role: "Product planning, UI direction, iOS architecture, API and database design",
    stack: [
      "SwiftUI",
      "Nuxt",
      "TypeScript",
      "Cloudflare Workers",
      "D1",
      "Figma",
    ],
    highlights: [
      "Designed ledger, member, category, tag, and invitation models for family collaboration.",
      "Defined a lightweight API-first architecture for mobile clients.",
      "Created a calm visual direction suitable for Japanese household finance use cases.",
    ],
    outcome:
      "MVP design and technical architecture completed. Implementation is ongoing with iterative UI tests.",
    links: [
      { label: "Case Study", href: "/projects/kakeineko" },
      { label: "GitHub", href: "https://github.com/example/kakeineko" },
    ],
  },
  {
    slug: "receipt-ai",
    title: "Receipt AI Parser",
    subtitle: "Prototype for extracting expense data from receipts",
    summary:
      "A prototype that turns receipt images into structured expense records for personal finance workflows.",
    role: "Frontend prototype, validation flow, UX design",
    stack: ["Vue 3", "Nuxt", "TypeScript", "REST API"],
    highlights: [
      "Built a correction-first UX so users can quickly verify extracted fields.",
      "Separated raw OCR data, normalized records, and user-confirmed records.",
      "Designed empty, loading, error, and success states for the capture flow.",
    ],
    outcome:
      "Clickable prototype and static demo prepared for portfolio review.",
    links: [{ label: "Case Study", href: "/projects/receipt-ai" }],
  },
  {
    slug: "team-dashboard",
    title: "Team Operations Dashboard",
    subtitle: "Internal dashboard for small-team task visibility",
    summary:
      "A dashboard MVP for tracking tasks, ownership, deadlines, and lightweight operational metrics.",
    role: "Frontend implementation and component design",
    stack: ["Vue 2", "Nuxt", "JavaScript", "Chart.js"],
    highlights: [
      "Refactored repeated UI patterns into reusable card and table components.",
      "Improved mobile layout for managers checking status from phones.",
      "Added clear empty and error states to reduce ambiguous UI behavior.",
    ],
    outcome:
      "Used as an internal demo for workflow review and stakeholder discussion.",
    links: [{ label: "Case Study", href: "/projects/team-dashboard" }],
  },
];

export const interests = [
  "Product design for daily-life tools",
  "Japanese local services and consumer apps",
  "Personal finance and long-term investing",
  "AI-assisted software development",
  "Clean UI systems and maintainable components",
];
