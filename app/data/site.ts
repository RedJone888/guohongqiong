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
  name: "郭紅瓊",
  nameKanji: "郭紅瓊",
  nameRomaji: "Guo Hongqiong",
  nameKana: "グオ ホンチョン",

  title: "Web Engineer",
  role: "Web Engineer",

  email: "redjoan.guo@gmail.com",
  github: "https://github.com/RedJone888",
  linkedin: "https://www.linkedin.com/in/hongqiongguo",

  photoUrl: "/images/profile/profile-headshot.png",

  ja: {
    summary:
      "大阪在住のWebエンジニアです。Vueを中心に、鉄道物流Webシステムのフロントエンド開発に約3年間携わってきました。本サイトはNuxtで構築し、個人開発のPetNidoではReact / Next.jsを使用しています。",

    contactCtaLabel: "連絡先",
  },
  en: {
    summary:
      "I am a web engineer based in Osaka, Japan, with about three years of Vue-centered frontend development for rail-logistics web systems. I built this site with Nuxt and develop my independent project PetNido with React / Next.js.",
    contactCtaLabel: "Contact",
  },
};
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
        "Vueを中心とした鉄道物流Webシステムのフロントエンド開発経験（約3年）",
    },
    en: {
      label: "Experience",
      eyebrow: "Experience",
      title: "Frontend Experience",
      description:
        "About three years of Vue-centered frontend development for rail-logistics web systems.",
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
        "メール、GitHub、LinkedIn からお気軽にご連絡ください。詳細な職務経歴書のご希望もこちらから承ります。",
    },
    en: {
      label: "Contact",
      eyebrow: "Contact",
      title: "Contact",
      description:
        "Reach me by email, GitHub, or LinkedIn. Detailed resume is available upon request.",
    },
  },
] as const;

export const profilePageCopy = {
  ja: {
    availability:
      "Webエンジニア（フロントエンド中心・サーバーサイドにも挑戦）として働く機会を探しています",
    headline: "複雑な業務を、使いやすいWeb体験へ",
    introduction:
      "Vueを中心とした約3年のフロントエンド実務経験があり、鉄道物流を支えるWebシステムで業務画面やBI画面の設計・実装に携わってきました。TypeScriptはその実務で使用し、現在はNuxtで本サイトを作っています。React・Next.jsは個人開発のPetNidoで使い、生成AIも補助に活用しながら、出力したコードと画面の挙動を自分で確認・検証しています。",
    emailLabel: "メールアドレス",
    githubLabel: "GitHub",
    contactLabel: "連絡先",
    atAGlance: "QUICK FACTS",
    facts: [
      {
        key: "experience",
        icon: "work_history",
        label: "実務経験",
        value: "Vue中心 約3年",
      },
      {
        key: "independent",
        icon: "code",
        label: "個人開発",
        value: "React / Next.js · PetNido",
      },
      {
        key: "education",
        icon: "school",
        label: "学歴",
        value: "農業工程・情報技術 修士",
      },
      {
        key: "languages",
        icon: "translate",
        label: "語学",
        value: "中国語（母語）・日本語（JLPT N1）・英語",
      },
      {
        key: "location",
        icon: "location_on",
        label: "現在地",
        value: "大阪・日本",
        secondary: "勤務地は求人に応じて柔軟に対応でき、入社に伴う転居も可能。",
      },
    ],
    jobSearchLabel: "JOB SEARCH",
    jobSearchItems: [
      { key: "preferences", icon: "badge", label: "希望条件", value: "正社員" },
      {
        key: "status",
        icon: "work",
        label: "在留資格",
        value: "家族滞在（資格外活動許可あり）",
        secondary:
          "「技術・人文知識・国際業務」へ変更予定。要件を満たす見込みで、手続きは自分で進めます。",
      },
      {
        key: "start",
        icon: "event_available",
        label: "入社時期",
        value: "内定後すぐ在留資格変更を申請、許可後に入社",
        secondary: "許可までは週28時間以内のアルバイト勤務も可能です。",
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
    availability:
      "LOOKING FOR WEB ENGINEERING ROLES — FRONTEND-FOCUSED, EXPANDING INTO SERVER-SIDE",
    headline: "Turning complex workflows into usable web experiences.",
    introduction:
      "I have about three years of professional frontend experience centered on Vue, building operations and BI interfaces for rail-logistics systems. I used TypeScript in that work and am now building this site with Nuxt. I use React and Next.js for my independent PetNido project, and use generative AI as a development aid while verifying the resulting code and behavior myself.",
    emailLabel: "Email",
    githubLabel: "GitHub",
    contactLabel: "Contact",
    atAGlance: "QUICK FACTS",
    facts: [
      {
        key: "experience",
        icon: "work_history",
        label: "Experience",
        value: "About 3 years with Vue",
      },
      {
        key: "independent",
        icon: "code",
        label: "Independent work",
        value: "React / Next.js · PetNido",
      },
      {
        key: "education",
        icon: "school",
        label: "Education",
        value: "Master's in Agricultural Engineering & IT",
      },
      {
        key: "languages",
        icon: "translate",
        label: "Languages",
        value: "Chinese (native) · Japanese (JLPT N1 / business) · English",
      },
      {
        key: "location",
        icon: "location_on",
        label: "Based in",
        value: "Osaka, Japan",
        secondary:
          "Flexible on work location; can relocate depending on where the role is based.",
      },
    ],
    jobSearchLabel: "JOB SEARCH",
    jobSearchItems: [
      {
        key: "preferences",
        icon: "badge",
        label: "Preferences",
        value: "Full-time permanent role",
      },
      {
        key: "status",
        icon: "work",
        label: "Residence status",
        value: "Dependent (outside-work permission granted)",
        secondary:
          "Changing to Engineer/Specialist status; I expect to qualify and will handle the application myself.",
      },
      {
        key: "start",
        icon: "event_available",
        label: "Start timing",
        value: "Visa change filed upon offer; join once approved",
        secondary:
          "Part-time work (up to 28 hrs/week) is possible while awaiting approval.",
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
      note: "ビジネスレベル",
    },
    en: {
      name: "Japanese",
      credential: "JLPT N1",
      note: "Business level",
    },
  },
  {
    key: "english",
    level: 3,
    ja: {
      name: "英語",
      credential: "CET-6",
      note: "技術文書の読解",
    },
    en: {
      name: "English",
      credential: "CET-6",
      note: "Reading technical documentation",
    },
  },
];
