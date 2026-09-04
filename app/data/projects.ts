export type PetnidoStatus = {
  development: string;
};

export type PetnidoScreenshot = {
  label: string;
  title: string;
  description: string;
  alt: string;
  src?: string;
  hideLabel?: boolean;
};

export type PetnidoProblem = {
  title: string;
  evidence: string;
  response: string;
};

export type PetnidoCareFlow = {
  title: string;
  steps: string[];
};

export type PetnidoCaseStudy = {
  title: string;
  status: string;
  challenge: string;
  decision: string;
  implementation: string;
  evidence: string;
  flows?: PetnidoCareFlow[];
  screenshot: PetnidoScreenshot;
};

export type PetnidoQualityCase = {
  title: string;
  approach: string;
  proof: string;
};

export type PetnidoProgress = {
  demoReady: string[];
  verified: string[];
  limitations: string[];
  lastUpdated: string;
  reflection: string;
  screenshot: PetnidoScreenshot;
};

export type PetnidoDetailKey =
  | "background"
  | "product"
  | "engineering"
  | "progress";

export type PetnidoProject = {
  title: string;
  category: string;
  projectType: string;
  status: PetnidoStatus;
  role: string;
  summary: string;
  url: string;
  repositoryUrl: string;
  stack: string[];
  highlights: string[];
  overviewScreenshots: PetnidoScreenshot[];
  background: {
    paragraphs: string[];
    experienceSignals: string[];
    problems: PetnidoProblem[];
    screenshot: PetnidoScreenshot;
  };
  product: {
    cases: PetnidoCaseStudy[];
  };
  engineering: {
    cases: PetnidoQualityCase[];
    screenshot: PetnidoScreenshot;
    ai: string;
  };
  progress: PetnidoProgress;
  teasers: Record<PetnidoDetailKey, string>;
};

export const petnidoProjectHeader = {
  ja: {
    title: "代表プロジェクト",
    description:
      "実在する課題、プロダクト判断、実装、現在の成果から、一人で継続的に開発しているプロダクトを紹介します。",
    highlightLabel: "プロダクトエンジニアリングの見どころ",
    roleLabel: "担当",
    stackLabel: "CORE STACK",
    screenshotsLabel: "VISUAL EVIDENCE",
    screenshotPlaceholderLabel: "SCREENSHOT PLACEHOLDER",
    visitLabel: "開発プレビューを見る",
    sourceLabel: "GitHub でコードを見る",
    detailLabel: "詳細を見る",
    closeDialog: "閉じる",
    backgroundTitle: "課題発見と制約",
    experienceLabel: "実体験から得た根拠",
    problemsLabel: "優先した課題と設計判断",
    evidenceLabel: "根拠",
    responseLabel: "現在の対応",
    productTitle: "プロダクト・インタラクション設計",
    caseStudyLabel: "代表的なプロダクト設計 Case",
    challengeLabel: "Challenge",
    decisionLabel: "Decision",
    implementationLabel: "Implementation",
    resultLabel: "Evidence / Result",
    engineeringTitle: "実装・品質・検証",
    qualityLabel: "品質をどう担保したか",
    approachLabel: "Approach",
    proofLabel: "Evidence",
    aiTitle: "AI との協働",
    progressTitle: "体験できる範囲",
    demoReadyLabel: "IMPLEMENTED / DEMO",
    verifiedLabel: "PAGES / PARTIAL FLOWS",
    limitationsLabel: "IN DEVELOPMENT / NEXT",
    lastUpdatedLabel: "LAST UPDATED",
    reflectionLabel: "このプロジェクトで示したこと",
    previewNote:
      "公開サイトは開発途中のプレビューです。実装済み範囲と制限を本文に明記しています。",
  },
  en: {
    title: "Featured Project",
    description:
      "PetNido is presented through problem discovery, product decisions, implementation, and evidence—not as a feature list.",
    highlightLabel: "Product engineering highlights",
    roleLabel: "Role",
    stackLabel: "CORE STACK",
    screenshotsLabel: "VISUAL EVIDENCE",
    screenshotPlaceholderLabel: "SCREENSHOT PLACEHOLDER",
    visitLabel: "View development preview",
    sourceLabel: "View code on GitHub",
    detailLabel: "View details",
    closeDialog: "Close",
    backgroundTitle: "Problem & Constraints",
    experienceLabel: "Evidence from real experience",
    problemsLabel: "Priority problems and design responses",
    evidenceLabel: "Evidence",
    responseLabel: "Current response",
    productTitle: "Product & Interaction Design",
    caseStudyLabel: "Representative product design cases",
    challengeLabel: "Challenge",
    decisionLabel: "Decision",
    implementationLabel: "Implementation",
    resultLabel: "Evidence / Result",
    engineeringTitle: "Engineering & Verification",
    qualityLabel: "How quality is protected",
    approachLabel: "Approach",
    proofLabel: "Evidence",
    aiTitle: "Working with AI",
    progressTitle: "Demo Scope & Status",
    demoReadyLabel: "IMPLEMENTED / DEMO",
    verifiedLabel: "PAGES / PARTIAL FLOWS",
    limitationsLabel: "IN DEVELOPMENT / NEXT",
    lastUpdatedLabel: "LAST UPDATED",
    reflectionLabel: "What this project demonstrates",
    previewNote:
      "The public site is a development preview. Implemented scope and current limitations are stated in this case study.",
  },
};

export const petnidoProjects: Record<"ja" | "en", PetnidoProject> = {
  ja: {
    title: "PetNido",
    category: "CtoC ペットケア・マッチングプラットフォーム",
    projectType: "個人開発",
    status: {
      development: "IN DEVELOPMENT",
    },
    role: "プロダクト分析・UX 設計・フルスタック開発・テスト・デプロイ",
    summary:
      "うさぎの飼い主として、SNS でペットケアを依頼・提供した実体験から生まれた CtoC プラットフォームです。現在はログインと初回案内、3種類のケア依頼公開、公開依頼マーケット、マイページの一部の依頼管理までを接続しています。サービス公開・サービスマーケットと、その後のマッチングは開発中です。",
    url: "https://www.petnido.net/",
    repositoryUrl: "https://github.com/RedJone888/petnido",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "tRPC",
      "Prisma",
      "PostgreSQL",
    ],
    highlights: [
      "訪問ケア・家庭預かり・カスタムケアに応じて、異なるステップ、項目、検証ルールを動的に構成",
      "下書き、ペットプロフィール、よく使う場所、過去の依頼、公開スナップショットで再入力を削減",
      "公開依頼を条件・日付・ペット種・検索半径で絞り込み、一覧と地図の両方から近隣のケアを探せるように設計",
    ],
    overviewScreenshots: [
      {
        label: "SCREEN 01 / DYNAMIC FLOWS",
        title: "モード選択で変化する公開フロー",
        description: "",
        alt: "PetNido の3種類の動的な依頼公開フロー",
        src: "/images/projects/petnido-flow-overview.png",
        hideLabel: true,
      },
      {
        label: "SCREEN 02 / PUBLIC NEEDS",
        title: "公開依頼の検索と詳細",
        description: "",
        alt: "PetNido の公開依頼マーケットと依頼詳細",
        src: "/images/projects/petnido-public-needs-overview.png",
        hideLabel: true,
      },
    ],
    background: {
      paragraphs: [
        "うさぎの飼い主として、外出時には時間・距離・予算だけでなく、性格や健康状態に合うケア方法を選ぶ必要がありました。犬猫中心のペットホテルが合わない場合もあり、SNS で訪問ケアや家庭預かりを探した経験があります。",
        "その経験から、ペットケアは単に『動物が好きな人』を探すことではなく、ペットの種類、食事、生活習慣、健康上の注意、タスク、日程、場所、料金を双方で確認する必要があると分かりました。しかし、一般的な SNS にはそのための安定した情報構造がありません。",
      ],
      experienceSignals: [
        "旅行条件に合わせて、訪問ケアと家庭預かりの依頼を実際に投稿",
        "犬の散歩、うさぎ・モルモット・チンチラなど草食動物のケアを提供",
        "1週間の毎日散歩、1か月の毎日うさぎケア、単発のケージ清掃などを受注",
      ],
      problems: [
        {
          title: "情報が分散し、説明を繰り返す",
          evidence:
            "SNS の投稿には日時・場所・ペット種だけを書き、詳しいプロフィールやタスクを個別のメッセージで何度も説明することがありました。",
          response:
            "構造化した依頼フォーム、ペットプロフィール、よく使う場所、過去の依頼の再利用を実装しました。現在、連続したフローとして体験できます。",
        },
        {
          title: "ケアの適性を見極める情報が足りない",
          evidence:
            "SNS の返信には好意や過去の飼育経験だけを根拠にしたものもあり、対象ペットの食事・行動・健康リスクへの理解を大量の会話から判断する必要がありました。",
          response:
            "関連経験やサービス条件を事前に整理できるサービス側の体験として設計しています。ただし、サービス公開・マーケット・相談フローは開発中で、現在の完成成果には含めません。",
        },
        {
          title: "公開時に分かりやすい地点を選べるようにする",
          evidence:
            "依頼を公開するときは、シッターがケアの場所を判断できるように、サービスが始まる地点を選ぶ必要があります。",
          response:
            "地点ステップで大まかな地点を選ぶよう案内し、選択した地点を公開依頼の一覧・地図・詳細にそのまま表示します。現在、連続したフローとして体験できます。",
        },
      ],
      screenshot: {
        label: "SCREEN 03 / PROBLEM EVIDENCE",
        title: "ケア場面から構造化された依頼へ",
        description: "",
        alt: "PetNido の3種類のケア場面と構造化された依頼例",
        src: "/images/projects/petnido-problem-evidence-overview.png",
        hideLabel: true,
      },
    },
    product: {
      cases: [
        {
          title: "3種類のケアモードを動的に編成する公開フロー",
          status: "DEMO READY",
          challenge:
            "訪問・家庭預かり・カスタムでは、必要なステップ数も内容も異なります。別々に実装すると重複が増え、すべてを同じ段数に揃えると各場面で本当に必要な確認事項が伝わりません。",
          decision:
            "モード選択と確認画面を含む共通の公開フレームに、モード別のステップ定義・入力項目・検証 Schema を組み合わせる構造を選びました。",
          implementation:
            "React Hook Form と Zod でフォームと検証を管理し、選択したケアモードから対応するフローを生成します。確認画面から指定のステップへ戻って修正できます。",
          evidence:
            "3種類のモード選択、段階的な入力、下書き、確認、公開までを現在の正式ページで連続して操作できます。",
          flows: [
            {
              title: "訪問ケア",
              steps: ["ペット", "日付と訪問スケジュール", "ケアタスク", "おおよその場所", "予算"],
            },
            {
              title: "家庭預かり",
              steps: ["ペット", "預かり日程", "ケアタスク", "持ち物・用品", "家庭環境との適合", "おおよその場所（許容距離・送迎を含む）", "予算"],
            },
            {
              title: "カスタムケア",
              steps: ["ペット", "日付", "ケアタスク", "要望・注意事項", "おおよその場所", "予算"],
            },
          ],
          screenshot: {
            label: "SCREEN 04 / FORM ARCHITECTURE",
            title: "共通フレームとモード固有のステップ",
            description: "",
            alt: "3種類のケアモードに応じて変化するステップフォーム",
            src: "/images/projects/petnido-form-architecture-overview.png",
            hideLabel: true,
          },
        },
        {
          title: "下書き復元とプロフィールの再利用",
          status: "DEMO READY",
          challenge:
            "ペット、よく使う場所、通貨などは何度も登場し、長いフォームは途中離脱によって失われる可能性があります。",
          decision:
            "安定した情報はプロフィールとして再利用し、未ログイン時はブラウザに下書きを保存、ログイン後はサーバーにも同期します。過去の依頼は新しい依頼の初期値にできます。",
          implementation:
            "フォームは該当ステップで保存済みのペット・場所・通貨を読み込み、編集も許可します。マイページでは依頼下書きの再開・削除・並べ替えと、既存依頼からの新規作成を提供します。",
          evidence:
            "README に記載した草稿復元、保存プロフィールの読み込み、既存依頼の再利用、依頼状態の管理を現在のページで確認できます。",
          screenshot: {
            label: "SCREEN 05 / RESUME & REUSE",
            title: "プロフィール・下書き・過去の依頼から続ける",
            description: "",
            alt: "保存プロフィール、依頼下書き、過去の依頼を再利用する画面",
            src: "/images/projects/petnido-resume-reuse-overview.png",
            hideLabel: true,
          },
        },
        {
          title: "依頼地点の入力と表示",
          status: "DEMO READY",
          challenge:
            "公開依頼には、ケアが始まる場所を分かりやすく示す必要があります。入力時に選びやすく、公開後にも同じ選択を確認できることが重要です。",
          decision:
            "地点ステップで大まかな地点を選ぶよう案内し、ユーザーが選んだ地点をそのまま依頼の表示に使います。",
          implementation:
            "地点検索または保存済み地点から選択し、選択した地点を公開依頼の一覧・地図・詳細で表示します。",
          evidence:
            "地点の入力、公開依頼リストと地図への反映、依頼詳細での表示を現在のページで確認できます。",
          screenshot: {
            label: "SCREEN 06 / LOCATION INPUT",
            title: "地点を選び、公開画面と詳細で確認",
            description: "",
            alt: "PetNido の依頼地点入力と選択地点の表示",
            src: "/images/projects/petnido-location-flow-overview.png",
            hideLabel: true,
          },
        },
      ],
    },
    engineering: {
      cases: [
        {
          title: "型安全なクライアント／サーバー境界",
          approach:
            "TypeScript・tRPC・Zod・Prisma でフォーム入力、API、データベースモデルを接続し、項目やルールのずれを開発段階で検出しやすくしています。",
          proof:
            "同じ依頼項目が検証 Schema、tRPC procedure、Prisma model の間で明確に対応しています。",
        },
        {
          title: "デフォルトプロフィールと公開スナップショットの分離",
          approach:
            "ペット・場所・通貨プロフィールは次回の入力を補助し、公開時にはそれぞれのスナップショットを保存します。",
          proof:
            "プロフィールの更新が過去の公開依頼を書き換えないよう、再利用データと履歴データに異なる責務を持たせています。",
        },
        {
          title: "ログイン、アカウント連携、初回案内",
          approach:
            "メールとパスワード、Google、LINE の入口を用意し、新規、再訪、既存アカウント連携の状態に応じてフローを分岐します。",
          proof:
            "ログイン方法の選択、メール認証、アカウント連携、初回プロフィール設定、次の行動選択までを連続した体験として実装しています。",
        },
        {
          title: "リスクに応じた品質チェック",
          approach:
            "単体・統合・Playwright E2E に加え、i18n key、地点入力、Prisma、TypeScript、プロダクションビルドのチェックを構成しています。",
          proof:
            "フォームロジック、API とデータ書き込み、主要フロー、多言語整合、地点の入力と表示を目的別に確認できる構成です。",
        },
      ],
      screenshot: {
        src: "/images/projects/petnido-screen07-verification-v2.png",
        label: "SCREEN 07 / VERIFICATION",
        title: "型境界、アカウントフロー、品質チェック",
        description: "",
        alt: "PetNido の型境界、ログインフロー、品質チェックの証拠",
        hideLabel: true,
      },
      ai: "AI は要件分解、実装案の比較、境界条件、テスト候補の検討に使います。プロダクト判断、コードレビュー、最終検証は自分で行います。",
    },
    progress: {
      demoReady: [
        "ログインと初回利用案内",
        "訪問ケア・家庭預かり・カスタムケアの依頼作成、下書き保存、公開前確認、公開まで",
        "公開依頼リスト、フィルター、地図、依頼詳細",
      ],
      verified: [
        "マイページには依頼・サービス・下書き・お気に入り・プロフィール・設定の入口がありますが、一部の操作は開発中",
        "現在操作できる範囲：個人・ペットプロフィール、依頼状態管理、依頼下書き、依頼お気に入り、ログイン方法の設定",
      ],
      limitations: [
        "サービス公開・サービスマーケット、サービス管理・お気に入りは開発中",
        "相談・応募・予約・チャット、マッチング、サイト内・メール通知は開発中",
        "SNS シェアは次の段階で予定",
      ],
      lastUpdated: "Case study updated: 2026.09",
      reflection:
        "実体験から課題を整理し、プロダクト範囲、インタラクション、データモデル、検証可能な実装へ変換しました。依頼側の体験を優先し、ログインから依頼作成、下書き保存、公開依頼の検索、公開後の確認までを一つの流れとして実装しています。サービス公開とマッチングは今後の開発範囲として切り分けています。",
      screenshot: {
        src: "/images/projects/petnido-screen08-demo-scope-v1.png",
        label: "SCREEN 08 / DEMO SCOPE",
        title: "現在体験できる範囲",
        description: "",
        alt: "PetNido で現在体験できる依頼側の主要フロー",
        hideLabel: true,
      },
    },
    teasers: {
      background:
        "実体験から SNS の課題と、現在の依頼側スコープを整理しました。",
      product:
        "動的フォーム、下書きと再利用、公開依頼マーケットを3つの Case で説明します。",
      engineering:
        "型安全、データ整合、アカウント連携、品質チェックを証拠とセットで示します。",
      progress:
        "体験可能、部分完成、開発中の範囲を分けて明記します。",
    },
  },
  en: {
    title: "PetNido",
    category: "C2C pet-care matching platform",
    projectType: "Personal project",
    status: {
      development: "IN DEVELOPMENT",
    },
    role: "Product analysis, UX design, full-stack development, testing, and deployment",
    summary:
      "PetNido grew from my experience requesting and providing pet care through social media as a rabbit owner. The current version connects sign-in and onboarding, three care-request publishing flows, the public request marketplace, and part of request management in the dashboard. Service publishing, the service marketplace, and later matching workflows remain in development.",
    url: "https://www.petnido.net/",
    repositoryUrl: "https://github.com/RedJone888/petnido",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "tRPC",
      "Prisma",
      "PostgreSQL",
    ],
    highlights: [
      "Different steps, fields, and validation rules are composed dynamically for home visits, pet boarding, and custom care",
      "Drafts, pet profiles, saved locations, past requests, and publication snapshots reduce repeated entry and preserve history",
      "Public requests can be filtered by care type, pet, date, and search radius, then explored through both the list and map.",
    ],
    overviewScreenshots: [
      {
        label: "SCREEN 01 / DYNAMIC FLOWS",
        title: "Publishing flows that change by care mode",
        description: "",
        alt: "PetNido's three dynamic need-publishing flows",
        src: "/images/projects/petnido-flow-overview.png",
        hideLabel: true,
      },
      {
        label: "SCREEN 02 / PUBLIC NEEDS",
        title: "Public request discovery and details",
        description: "",
        alt: "PetNido public request marketplace and request details",
        src: "/images/projects/petnido-public-needs-overview.png",
        hideLabel: true,
      },
    ],
    background: {
      paragraphs: [
        "As a rabbit owner, I have had to choose care based not only on time, distance, and budget, but also on temperament and health. Dog- and cat-focused hotels are not always suitable, so I have looked for home visits and boarding through social media.",
        "That experience showed me that pet care is not simply about finding someone who likes animals. Both sides need to confirm species, diet, routines, health notes, tasks, dates, location, and price, but general social platforms do not provide a stable structure for that information.",
      ],
      experienceSignals: [
        "Posted real home-visit and boarding needs for different travel situations",
        "Offered dog walking and care for rabbits, guinea pigs, chinchillas, and other herbivores",
        "Completed a week of daily dog walks, a month of daily rabbit visits, and one-off cage cleaning",
      ],
      problems: [
        {
          title: "Scattered information and repeated explanations",
          evidence:
            "Social posts often contain only dates, location, and pet type, while profiles and task details must be explained repeatedly in private messages.",
          response:
            "Structured request forms, pet profiles, saved locations, and reuse from past requests are implemented as a connected, demo-ready flow.",
        },
        {
          title: "Too little information to judge care fit",
          evidence:
            "Some social replies rely on affection for animals or distant ownership experience, leaving owners to uncover species-specific diet, behavior, and health knowledge through many separate conversations.",
          response:
            "I am designing the service-side experience so caregivers can organize relevant experience and service conditions in advance. Service publishing, the marketplace, and consultation flow are still in development and are not presented as completed work.",
        },
        {
          title: "A clear location input for each request",
          evidence:
            "When publishing a request, sitters need a clear starting area so they can understand where the care takes place.",
          response:
            "The location step prompts the owner to choose an approximate place, and the selected place is shown as-is in the public list, map, and detail. This is available as a connected demo flow.",
        },
      ],
      screenshot: {
        label: "SCREEN 03 / PROBLEM EVIDENCE",
        title: "From care scenarios to structured requests",
        description: "",
        alt: "PetNido's three care scenarios and a structured request example",
        src: "/images/projects/petnido-problem-evidence-overview.png",
        hideLabel: true,
      },
    },
    product: {
      cases: [
        {
          title: "Dynamic publishing flows for three care modes",
          status: "DEMO READY",
          challenge:
            "Home visits, boarding, and custom care require different numbers of steps as well as different content. Separate implementations create duplication, while forcing the same step count onto all modes hides the checks that matter in each situation.",
          decision:
            "I combined a shared publishing frame—including mode selection and review—with mode-specific step definitions, fields, and validation schemas.",
          implementation:
            "React Hook Form and Zod manage form state and validation, while the selected care mode generates the corresponding flow. Users can return from review to a specific step and edit it.",
          evidence:
            "Mode selection, guided entry, drafts, review, and publishing for all three modes can be used through the current official pages.",
          flows: [
            {
              title: "Home visits",
              steps: ["Pets", "Dates & visit schedule", "Care tasks", "Approximate location", "Budget"],
            },
            {
              title: "Pet boarding",
              steps: ["Pets", "Boarding dates", "Care tasks", "Supplies", "Home compatibility", "Approximate location (distance & handoff)", "Budget"],
            },
            {
              title: "Custom care",
              steps: ["Pets", "Dates", "Care tasks", "Requirements & notes", "Approximate location", "Budget"],
            },
          ],
          screenshot: {
            label: "SCREEN 04 / FORM ARCHITECTURE",
            title: "Shared frame and mode-specific steps",
            description: "",
            alt: "Step forms that change across PetNido's three care modes",
            src: "/images/projects/petnido-form-architecture-overview.png",
            hideLabel: true,
          },
        },
        {
          title: "Draft recovery and reusable profiles",
          status: "DEMO READY",
          challenge:
            "Pets, saved locations, and currency recur across requests, while a long form can be lost when someone leaves midway.",
          decision:
            "Stable information is reusable as profiles. Signed-out drafts stay in the browser and sync to the server after sign-in, while a past request can seed a new one.",
          implementation:
            "Relevant steps load saved pets, locations, and currency while allowing edits. The dashboard supports resuming, deleting, and sorting request drafts and creating a new request from an existing one.",
          evidence:
            "Draft recovery, profile defaults, past-request reuse, and request status management listed in the README are available in the current product pages.",
          screenshot: {
            label: "SCREEN 05 / RESUME & REUSE",
            title: "Continue from profiles, drafts, or past requests",
            description: "",
            alt: "Reusing saved profiles, request drafts, and past requests",
            src: "/images/projects/petnido-resume-reuse-overview.png",
            hideLabel: true,
          },
        },
        {
          title: "Location input and display for a request",
          status: "DEMO READY",
          challenge:
            "A public request needs a clear place where care starts. The input should be easy to choose, and the same selection should remain understandable after publishing.",
          decision:
            "The location step prompts the owner to choose an approximate place, then uses that selection as-is in the request display.",
          implementation:
            "Owners can search for a place or choose a saved location; the selected place is shown in the public request list, map, and detail.",
          evidence:
            "The current pages show location input, the selected place carried into the public list and map, and the same place in request details.",
          screenshot: {
            label: "SCREEN 06 / LOCATION INPUT",
            title: "Choose a place, then verify it in the public map and detail",
            description: "",
            alt: "PetNido location input and selected-place display",
            src: "/images/projects/petnido-location-flow-overview.png",
            hideLabel: true,
          },
        },
      ],
    },
    engineering: {
      cases: [
        {
          title: "Type-safe client/server boundaries",
          approach:
            "TypeScript, tRPC, Zod, and Prisma connect form input, APIs, and database models so field or rule mismatches surface during development.",
          proof:
            "The same request fields have an explicit relationship across validation schemas, tRPC procedures, and Prisma models.",
        },
        {
          title: "Profile defaults separated from publication snapshots",
          approach:
            "Pet, location, and currency profiles provide defaults for later requests, while publication-time snapshots preserve the released record.",
          proof:
            "Reusable profile data and historical request data have separate responsibilities, so profile updates do not rewrite past publications.",
        },
        {
          title: "Sign-in, account linking, and onboarding",
          approach:
            "Email and password, Google, and LINE entry points branch according to new-user, returning-user, and existing-account-linking states.",
          proof:
            "Method selection, email verification, account linking, initial profile setup, and next-intent selection form a connected flow.",
        },
        {
          title: "Risk-based quality checks",
          approach:
            "The repository configures unit, integration, and Playwright E2E tests plus i18n-key, location-input, Prisma, TypeScript, and production-build checks.",
          proof:
            "The checks separately target form logic, API and database writes, core user paths, language consistency, and location input/display.",
        },
      ],
      screenshot: {
        src: "/images/projects/petnido-screen07-verification-v2.png",
        label: "SCREEN 07 / VERIFICATION",
        title: "Type boundaries, account flow, and quality checks",
        description: "",
        alt: "Evidence of PetNido type boundaries, account flow, and quality checks",
        hideLabel: true,
      },
      ai: "I use AI to help break down requirements, compare implementation options, identify edge cases, and suggest tests. I remain responsible for product decisions, code review, and final verification.",
    },
    progress: {
      demoReady: [
        "Sign-in and first-time onboarding",
        "Home-visit, boarding, and custom request creation with draft saving, pre-publication review, and publication",
        "Public request lists, filters, map, and details",
      ],
      verified: [
        "The dashboard includes request, service, draft, favorite, profile, and settings entries, but some operations remain in development",
        "Currently operable: personal and pet profiles, request status management, request drafts, request favorites, and sign-in-method settings",
      ],
      limitations: [
        "Service publishing, the service marketplace, service management, and service favorites are in development",
        "Consultation, applications, bookings, chat, matching, in-app notifications, and email are in development",
        "Social sharing is planned for the next stage",
      ],
      lastUpdated: "Case study updated: 2026.09",
      reflection:
        "I turned first-hand experience into product scope, interaction flows, a data model, and a verifiable implementation. I prioritized the requester journey, connecting sign-in, request creation, draft saving, public-request discovery, and post-publication review into one flow. Service publishing and matching are separated as future development scope.",
      screenshot: {
        src: "/images/projects/petnido-screen08-demo-scope-v1.png",
        label: "SCREEN 08 / DEMO SCOPE",
        title: "What can be tried today",
        description: "",
        alt: "PetNido's currently available request-side journey",
        hideLabel: true,
      },
    },
    teasers: {
      background:
        "First-hand experience became a clear problem statement and the current request-side scope.",
      product:
        "Three cases cover dynamic forms, drafts and reuse, and the public request marketplace.",
      engineering:
        "Type safety, data consistency, account linking, and quality checks are paired with evidence.",
      progress:
        "Demo-ready, partial, and in-development scope are stated separately.",
    },
  },
};
