export type PortfolioProject = {
  key: string;
  title: string;
  category: string;
  projectType: string;
  role: string;
  summary: string;
  image: string;
  imageAlt: string;
  imagePosition: string;
  previewLabel: string;
  url: string;
  repositoryUrl: string;
  stack: string[];
  highlights: string[];
};

export const projectHeader = {
  ja: {
    title: "Selected Projects",
    description:
      "公開中のWebプロジェクトを、解決した課題、担当範囲、実装上の工夫、ソースコードとともに紹介します。",
    roleLabel: "担当範囲",
    highlightLabel: "実装のポイント",
    stackLabel: "TECH STACK",
    visitLabel: "サイトを見る",
    sourceLabel: "GitHubでコードを見る",
    liveLabel: "LIVE",
    repositoryLabel: "PUBLIC REPOSITORY",
  },
  en: {
    title: "Selected Projects",
    description:
      "A selection of live projects presented through the problem, my role, technical decisions, and source code.",
    roleLabel: "MY ROLE",
    highlightLabel: "Technical highlights",
    stackLabel: "TECH STACK",
    visitLabel: "Visit website",
    sourceLabel: "View code on GitHub",
    liveLabel: "LIVE",
    repositoryLabel: "PUBLIC REPOSITORY",
  },
};

export const portfolioProjects: Record<"ja" | "en", PortfolioProject[]> = {
  ja: [
    {
      key: "petnido",
      title: "PetNido",
      category: "ペットケア・マッチングプラットフォーム",
      projectType: "PERSONAL PROJECT",
      role: "企画・設計・フルスタック開発",
      summary:
        "ペットオーナーと近隣のペットシッターをつなぐコミュニティ型サービス。犬・猫だけでなく、ウサギなどのエキゾチックペットにも対応し、個々の条件に合う家庭的なケアを探せる体験を設計しました。",
      image: "/images/projects/petnido-home.png",
      imageAlt: "PetNidoのペットシッター検索サービス画面",
      imagePosition: "center top",
      previewLabel: "PRODUCT PREVIEW",
      url: "https://www.petnido.net/",
      repositoryUrl: "https://github.com/RedJone888/petnido",
      stack: ["Next.js", "TypeScript", "tRPC", "Prisma", "PostgreSQL", "NextAuth"],
      highlights: [
        "依頼を投稿する／シッターを直接探す、2つのマッチング導線を設計",
        "React Hook FormとZodによる多段階フォーム、入力検証、下書き保存",
        "tRPC・Prismaを用いた型安全なデータ連携と認証フローの実装",
      ],
    },
    {
      key: "upc-study-room-finder",
      title: "UPC Study Room Finder",
      category: "空き教室検索・モバイルWebデモ",
      projectType: "RECREATED PROJECT",
      role: "再設計・フロントエンド・データ連携",
      summary:
        "大学時代に担当したWeChatミニプログラムのコンセプトをもとに、ポートフォリオ向けに再設計・実装したモバイルWebデモ。複数の校舎を移動する前に、現在利用できる自習場所を確認できます。",
      image: "/images/projects/upc-study-room-finder.png",
      imageAlt: "UPC Study Room Finderの空き教室一覧画面",
      imagePosition: "center center",
      previewLabel: "MOBILE DEMO PREVIEW",
      url: "https://upc-study-room-finder.vercel.app/",
      repositoryUrl: "https://github.com/RedJone888/upc-study-room-finder",
      stack: ["HTML", "CSS", "JavaScript", "Supabase", "PostgreSQL", "RLS"],
      highlights: [
        "教室本来の自習可否と、授業・会議などによる現在の利用状態を分離",
        "URLにフィルター状態を保持し、再訪時にも同じ表示条件を復元",
        "Supabase RLSと分単位の更新処理による安全で説明可能なデータ表示",
      ],
    },
  ],
  en: [
    {
      key: "petnido",
      title: "PetNido",
      category: "Neighborhood pet-care marketplace",
      projectType: "PERSONAL PROJECT",
      role: "Product planning, design, and full-stack development",
      summary:
        "A community platform connecting pet owners with nearby sitters. It supports dogs, cats, rabbits, and other exotic pets, helping owners find personalized care in a home-based environment.",
      image: "/images/projects/petnido-home.png",
      imageAlt: "PetNido pet sitter marketplace interface",
      imagePosition: "center top",
      previewLabel: "PRODUCT PREVIEW",
      url: "https://www.petnido.net/",
      repositoryUrl: "https://github.com/RedJone888/petnido",
      stack: ["Next.js", "TypeScript", "tRPC", "Prisma", "PostgreSQL", "NextAuth"],
      highlights: [
        "Designed two matching paths: post a care need or browse sitters directly",
        "Built multi-step forms, validation, and draft saving with React Hook Form and Zod",
        "Implemented type-safe data access and authentication with tRPC and Prisma",
      ],
    },
    {
      key: "upc-study-room-finder",
      title: "UPC Study Room Finder",
      category: "Mobile study-room availability demo",
      projectType: "RECREATED PROJECT",
      role: "Redesign, frontend development, and data integration",
      summary:
        "A portfolio-focused mobile web demo redesigned and rebuilt from the concept of a WeChat Mini Program I worked on at university. It helps students check currently usable study spaces before moving between campuses.",
      image: "/images/projects/upc-study-room-finder.png",
      imageAlt: "UPC Study Room Finder room availability interface",
      imagePosition: "center center",
      previewLabel: "MOBILE DEMO PREVIEW",
      url: "https://upc-study-room-finder.vercel.app/",
      repositoryUrl: "https://github.com/RedJone888/upc-study-room-finder",
      stack: ["HTML", "CSS", "JavaScript", "Supabase", "PostgreSQL", "RLS"],
      highlights: [
        "Separates a room's study eligibility from its current class or meeting status",
        "Stores filter state in the URL so the same view can be restored on return",
        "Uses Supabase RLS and minute-aligned updates for safe, explainable data access",
      ],
    },
  ],
};
