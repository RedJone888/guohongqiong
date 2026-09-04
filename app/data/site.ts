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

  title: "Web Engineer",
  role: "Web Engineer",
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
      "中国出身、大阪在住のWebエンジニアです。修士卒業後、Vueを中心に、鉄道物流を支えるWebシステムのフロントエンド開発に約3年間携わってきました。現在はNuxtで本サイトを開発し、フロントエンドを軸にWeb・IT関連の仕事を幅広く検討しています。",

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
      "I am a web engineer from China, currently based in Osaka, Japan. After completing a master’s degree, I spent about three years on frontend development for rail-logistics web systems, working primarily with Vue. I am currently building this site with Nuxt and exploring a broad range of web and IT roles from a frontend foundation.",
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
      title: "プロフィール",
      description:
        "Vueを中心とした実務経験と、Web・IT領域で大切にしている仕事の姿勢を紹介します。",
    },
    en: {
      label: "Profile",
      eyebrow: "Profile",
      title: "Profile",
      description:
        "A concise introduction to my Vue-centered experience and the working principles I bring to web and IT roles.",
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
      title: "プロジェクト紹介",
      description:
        "個人開発プロジェクト「PetNido」の企画・設計・実装・テストを紹介します。",
    },
    en: {
      label: "Projects",
      eyebrow: "Projects",
      title: "Featured Project",
      description:
        "A solo full-stack project, PetNido, from planning and design to implementation and testing.",
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
      value: "Webエンジニア",
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
      value: "Web Engineer",
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

export const profilePageCopy = {
  ja: {
    availability: "WEB開発を軸に、IT領域の幅広い仕事を検討しています",
    headline: "複雑な業務を、使いやすいWeb体験へ",
    introduction:
      "Vueを中心に、鉄道物流を支えるWebシステムで約3年間、予約・業務管理・BI画面の設計と実装に携わってきました。フロントエンドの実務経験を土台に、現在はNuxtで本サイト、React・Next.js・PostgreSQLでPetNidoを開発し、Web開発・業務システム・データ活用など幅広いIT領域を検討しています。",
    emailLabel: "メールアドレス",
    githubLabel: "GitHub",
    contactLabel: "連絡先",
    atAGlance: "QUICK FACTS",
    facts: [
      { label: "実務経験", value: "Vue中心 約3年" },
      { label: "学歴", value: "農業工程・情報技術 修士" },
      {
        label: "語学",
        value: "中国語（母語）・日本語（JLPT N1）・英語",
      },
      {
        label: "現在地",
        value: "大阪・日本",
        secondary: "勤務地に応じて転居可能",
      },
    ],
    jobSearchLabel: "JOB SEARCH",
    jobSearchItems: [
      { label: "希望条件", value: "正社員" },
      { label: "在留資格", value: "就労ビザへの変更が必要" },
      {
        label: "入社時期",
        value: "内定後すぐ変更申請",
        secondary: "手続き期間中の勤務開始は応相談",
      },
    ],
    focusEyebrow: "WHAT I BRING",
    focusTitle: "実務と個人開発で培ったこと",
    focusItems: [
      {
        title: "連動する予約・承認フローを実装",
        description:
          "貨物情報や発着駅の入力に応じて項目が変わるフォームと、運送状の承認・差戻し画面を実装。",
        section: "experience",
      },
      {
        title: "大量データを検索・可視化",
        description:
          "運送状・顧客・輸送データの検索、ページング、階層テーブル、チャートを実装し、大量入力画面の操作性も改善。",
        section: "experience",
      },
      {
        title: "PetNidoを設計から検証まで開発",
        description:
          "自身の課題から3種類のペットケア依頼フローを設計。API・データ設計から画面検証まで継続して開発中。",
        section: "projects",
        externalHref: "https://www.petnido.net/",
        externalLabel: "Live Preview",
      },
    ],
    focusDetailCta: "詳しく見る",
    workStyleEyebrow: "HOW I WORK",
    workStyleTitle: "仕事への向き合い方",
    workStyleIntro:
      "来日後、コンビニで6か月間、日本人スタッフと一緒に勤務しました。以下は、業務を教えてくれたトレーナーから受け取った評価です。日本語でのコミュニケーションや報告・連絡・相談を含め、日本の職場に適応して働いた経験を伝えるために掲載しています。",
    colleagueLabel: "コンビニ勤務時のトレーナーからの評価",
    colleagueDescription:
      "受け取ったカードから、仕事に関する部分のみを抜粋しています。",
    quotes: [
      "「仕事内容の理解は早いです。」",
      "「わからない事があればすぐに報告、連絡、相談してくれます。」",
      "「コミュニケーションもとりやすいです。」",
    ],
    notesButton: "手書きのメッセージを見る",
    notesTitle: "トレーナーからのメッセージ（抜粋）",
    notesClose: "閉じる",
    notesHint: "仕事に関する部分のみを抜粋して掲載しています。",
    notes: [
      {
        label: "仕事への向き合い方（抜粋）",
        src: "/images/profile/colleague-note-1.jpg",
        alt: "トレーナーが書いた仕事への向き合い方に関するメッセージの抜粋",
      },
      {
        label: "報告・連絡・相談（抜粋）",
        src: "/images/profile/colleague-note-2.jpg",
        alt: "トレーナーが書いた報告・連絡・相談に関するメッセージの抜粋",
      },
      {
        label: "コミュニケーション（抜粋）",
        src: "/images/profile/colleague-note-3.jpg",
        alt: "トレーナーが書いたコミュニケーションに関するメッセージの抜粋",
      },
    ],
  },
  en: {
    availability: "OPEN TO A BROAD RANGE OF WEB & IT OPPORTUNITIES",
    headline: "Turning complex workflows into usable web experiences.",
    introduction:
      "I have about three years of experience with Vue, building booking, operations-management, and BI interfaces for rail-logistics systems. Building on that frontend foundation, I now develop this site with Nuxt and PetNido with React, Next.js, and PostgreSQL, while exploring a broad range of roles across web development, business systems, and data-oriented IT work.",
    emailLabel: "Email",
    githubLabel: "GitHub",
    contactLabel: "Contact",
    atAGlance: "QUICK FACTS",
    facts: [
      { label: "Experience", value: "About 3 years with Vue" },
      { label: "Education", value: "Master's in Agricultural Engineering & IT" },
      {
        label: "Languages",
        value: "Chinese (native) · Japanese (JLPT N1 / business) · English",
      },
      {
        label: "Based in",
        value: "Osaka, Japan",
        secondary: "Open to relocation based on work location",
      },
    ],
    jobSearchLabel: "JOB SEARCH",
    jobSearchItems: [
      { label: "Preferences", value: "Full-time permanent role" },
      { label: "Work status", value: "A change to a work visa is required" },
      {
        label: "Start timing",
        value: "Can apply immediately after an offer",
        secondary: "An earlier part-time start can be discussed during processing",
      },
    ],
    focusEyebrow: "WHAT I BRING",
    focusTitle: "What I bring from work and independent projects",
    focusItems: [
      {
        title: "Implementing dependent booking and approval flows",
        description:
          "Built forms that change with cargo and station selections, along with waybill approval and return screens.",
        section: "experience",
      },
      {
        title: "Making large datasets easier to use",
        description:
          "Implemented search, pagination, expandable tables, and charts for waybills, customers, and transport data, while improving a sluggish bulk-entry screen.",
        section: "experience",
      },
      {
        title: "Developing PetNido from design to verification",
        description:
          "Designed three pet-care request flows from a personal need and continue to develop the APIs, data model, validation, and screen-level experience.",
        section: "projects",
        externalHref: "https://www.petnido.net/",
        externalLabel: "Live Preview",
      },
    ],
    focusDetailCta: "View details",
    workStyleEyebrow: "HOW I WORK",
    workStyleTitle: "A working style built on clarity and care",
    workStyleIntro:
      "After moving to Japan, I worked alongside Japanese staff at a convenience store for six months. The feedback below came from the trainer who taught me the role. I include it to show my experience adapting to a Japanese workplace, including communicating in Japanese and reporting, sharing updates, and asking for guidance when needed.",
    colleagueLabel: "Feedback from my convenience-store trainer",
    colleagueDescription:
      "These are work-related excerpts from a card I received.",
    quotes: [
      "“She learns the work quickly.”",
      "“She reports, communicates, and consults as soon as something is unclear.”",
      "“She is easy to communicate with.”",
    ],
    notesButton: "View handwritten message",
    notesTitle: "Message from my trainer (excerpts)",
    notesClose: "Close",
    notesHint: "Only work-related excerpts are shown.",
    notes: [
      {
        label: "Working attitude (excerpt)",
        src: "/images/profile/colleague-note-1.jpg",
        alt: "An excerpt from a handwritten message by my trainer about working attitude",
      },
      {
        label: "Reporting and communication (excerpt)",
        src: "/images/profile/colleague-note-2.jpg",
        alt: "An excerpt from a handwritten message by my trainer about reporting and communication",
      },
      {
        label: "Communication (excerpt)",
        src: "/images/profile/colleague-note-3.jpg",
        alt: "An excerpt from a handwritten message by my trainer about communication",
      },
    ],
  },
} as const;

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
