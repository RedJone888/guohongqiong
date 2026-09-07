export const experienceHeader = {
  ja: {
    title: "職務経歴",
    description:
      "修士課程修了後、フロントエンドエンジニアとして約3年間、中国の鉄道物流DXを支えるWebシステム開発に従事しました。Vueを中心に、荷主向けサービスから社内業務システムまで、複雑な業務フローを扱うUIの設計・実装、データ可視化、既存画面の保守・パフォーマンス改善に取り組みました。",
    overviewLabel: "Role Overview",
    projectsLabel: "Featured Projects",
    projectsTitle: "担当プロジェクト",
    expand: "詳細を見る",
    collapse: "閉じる",
    projectDetail: "Project Detail",
    closeDialog: "プロジェクト詳細を閉じる",
    projectOverview: "プロジェクト概要",
    mainFeatures: "主なシステム機能",
    responsibilities: "フロントエンドでの担当・改善内容",
  },
  en: {
    title: "Professional Experience",
    description:
      "After completing my master’s degree, I worked for approximately three years as a frontend engineer on web systems supporting rail-logistics digital transformation in China. Working primarily with Vue, I implemented complex business interfaces for customer-facing and internal systems, visualized operational data, and improved the maintainability and performance of existing screens.",
    overviewLabel: "Role Overview",
    projectsLabel: "Featured Projects",
    projectsTitle: "Projects Delivered",
    expand: "View details",
    collapse: "Close",
    projectDetail: "Project Detail",
    closeDialog: "Close project detail",
    projectOverview: "Project Overview",
    mainFeatures: "Main System Features",
    responsibilities: "Frontend Responsibilities & Improvements",
  },
};
export const experiences = {
  ja: {
    role: "フロントエンドエンジニア",
    company: "北京国科鉄服科技有限公司",
    onsite: "中国鉄道科学研究院集団有限公司に常駐",
    period: "2022.08 — 2025.08",
    summary:
      "中国全国の鉄道貨物輸送を支えるWebシステムのフロントエンド開発に参画。荷主が輸送予約・追跡・決済を行うWebポータル、運送状の承認や運賃ルールを管理する社内向け基幹業務・BIシステム、上海鉄道局向けの地域マーケティング支援システムを担当しました。複雑な入力フォームや高密度なデータ画面の実装、チャートを用いた情報可視化、共通コンポーネントの整備、既存画面のレスポンス改善に取り組みました。",
    projects: [
      {
        key: "ec",
        fullTitle: "鉄道貨物 Webポータル（荷主向け）",
        abbrTitle: "荷主向け貨物輸送ポータル",
        icon: "delivery_truck_bolt",
        stack: "Vue 2",
        description:
          "全国の企業・個人荷主が、輸送予約から貨物追跡、決済、補償申請までをオンラインで完結できる鉄道物流ポータル。複雑な輸送条件を迷わず入力できる予約フローや、輸送状況を直感的に確認できる画面の開発・改善を担当。",
        detail: {
          overview:
            "対面・紙媒体を中心としていた鉄道貨物の手続きをオンライン化する、企業・個人荷主向けの全国共通Webサービスです。本社・子会社など複数組織での利用も想定され、輸送条件や利用者属性に応じて画面内容が変化する業務特性があります。",
          features: [
            {
              title: "企業認証・アカウント管理",
              description:
                "企業・個人荷主の利用登録、企業認証、基本情報の管理、および本社・子会社など関連アカウントの紐付け。",
            },
            {
              title: "運賃照会・輸送予約",
              description:
                "貨物情報、発送地域、発駅・着駅などの輸送条件を入力し、概算運賃の確認から輸送予約までを行う機能。",
            },
            {
              title: "貨物追跡・到着予定",
              description:
                "貨物の現在の輸送ステータスや到着予定を確認する機能。",
            },
            {
              title: "決済・補償申請",
              description:
                "運賃のオンライン決済、領収書の発行、遅延・破損時の補償申請を行う機能。",
            },
          ],
          responsibilities: [
            {
              title: "複雑な条件に対応する連動フォームの実装",
              description:
                "貨物情報、省・市・区県、発駅・着駅など、前の入力内容によって後続の選択肢が変化するフォームを実装しました。項目間の連動制御、選択内容のリセット、動的バリデーションを組み合わせ、複雑な輸送条件を段階的に入力できる画面を構築しました。",
            },
            {
              title: "API通信状態を考慮した画面制御",
              description:
                "運賃照会や貨物追跡などのAPI通信に対して、読込中、該当データなし、通信エラーの状態を分けて表示し、必要に応じて再試行できる画面制御を実装しました。",
            },
            {
              title: "大量入力画面の構成見直しと性能改善",
              description:
                "多数の運送状を一括登録する編集テーブルで、入力件数の増加に伴い画面操作が重くなる問題を改善しました。実際の入力パターンを整理し、発着駅や顧客情報を共通入力エリアへ、車番や車種を明細テーブルへ分離する構成を提案・実装。編集対象となるセルとDOM要素を減らし、操作時のカクつきを解消しました。",
            },
          ],
        },
      },
      {
        key: "management",
        fullTitle: "鉄道貨物 基幹業務・BIシステム",
        abbrTitle: "鉄道物流 基幹業務・BI",
        icon: "account_tree",
        stack: "Vue 2",
        description:
          "全国の鉄道貨物輸送を支える社内向け基幹業務・BIシステム。運送状の承認、顧客情報、複雑な運賃ルールなどの業務管理画面に加え、政策・市場・競合データを集約・可視化するBIダッシュボードの開発・改善を担当。",
        detail: {
          overview:
            "荷主向けWebポータルから受け付けた運送状や顧客情報を、社内担当者が審査・管理するための基幹業務システムです。全国の輸送データと市場情報を集約し、日常業務とBI分析の両方を支援します。",
          features: [
            {
              title: "運送状・輸送業務管理",
              description:
                "運送状の検索、承認・差戻し、輸送ステータスの確認、および関連明細の管理。",
            },
            {
              title: "顧客・運賃ルール管理",
              description:
                "企業顧客情報の検索・管理、および輸送条件に応じた運賃計算ルールの設定。",
            },
            {
              title: "マーケティング・BI分析",
              description:
                "輸送量、市場、政策、競合輸送などのデータを集約し、チャートやダッシュボードとして可視化。",
            },
            {
              title: "業務報告の作成・収集",
              description:
                "各地域の担当者が報告書を作成・提出し、本部側で確認・管理するための文書収集機能。",
            },
          ],
          responsibilities: [
            {
              title: "多条件検索・階層テーブルの実装",
              description:
                "運送状や顧客などの大量データを扱う画面で、複数条件による検索、ページング、並び替えを備えた管理テーブルを実装しました。行を展開した時点で関連データをAPIから取得し、別の行を開いた際には前の行を自動的に折りたたむことで、情報量と通信負荷を抑えました。",
            },
            {
              title: "業務データの可視化",
              description:
                "輸送量や市場動向などの集計データを、用途に応じたグラフや比較チャートとして表示しました。検索条件とチャート表示を連動させ、担当者が対象地域や期間ごとの傾向を確認できる画面を実装しました。",
            },
            {
              title: "TinyMCEを利用した報告書作成機能",
              description:
                "TinyMCEを組み込み、各地域の担当者が書式付きの業務報告をWeb上で作成・提出できる機能を実装しました。編集内容の登録、再編集、閲覧状態の切り替えなど、報告書の作成フローに応じた画面制御を担当しました。",
            },
          ],
        },
      },
      {
        key: "shanghai",
        fullTitle: "上海鉄道局 地域マーケティング・BIシステム",
        abbrTitle: "地域マーケティング・BI",
        icon: "finance_mode",
        stack: "Vue 3",
        description:
          "上海鉄道局の港湾貨物など、地域特有の物流ニーズに対応するマーケティング・営業支援システム。本部APIとのデータ連携、地域物流データの可視化、顧客開拓状況や営業活動を管理する画面の開発を、Vue 3 / Vben Adminを用いて担当。",
        detail: {
          overview:
            "全国共通システムのAPIと業務ルールを活用しながら、上海鉄道局固有の営業・マーケティング業務に対応する地域拡張システムです。Vue 3とVben Adminを採用し、設定ベースの管理画面として開発しました。",
          features: [
            {
              title: "地域マーケティング分析",
              description:
                "港湾貨物や地域商品の輸送量、配送先分布などを集約・可視化する分析機能。",
            },
            {
              title: "営業活動・顧客管理",
              description:
                "顧客情報、訪問履歴、交渉状況、および営業活動の進捗を管理する機能。",
            },
            {
              title: "本部データ連携",
              description:
                "本部の共通APIを利用し、全国共通の顧客・輸送マスターデータを参照する機能。",
            },
            {
              title: "地域業務向け管理画面",
              description:
                "複合条件検索、データ編集、エクスポートなど、地域業務に必要な管理機能。",
            },
          ],
          responsibilities: [
            {
              title: "Vben Adminの設定方式を用いた画面構築",
              description:
                "Vben Adminのテーブル、フォーム、モーダルなどの設定方式を調査し、業務要件を各コンポーネントの設定項目へ落とし込みました。Vue 3のComposition APIを用いて、検索画面、編集フォーム、詳細画面を実装しました。",
            },
            {
              title: "複雑な業務画面の設定・拡張",
              description:
                "標準設定だけでは対応できない階層テーブル、連動フォーム、条件付き表示について、Vben Adminの既存機能を確認したうえで、必要なイベント処理や表示ロジックを追加しました。",
            },
            {
              title: "既存業務ロジックとAPIデータの適用",
              description:
                "Vue 2で構築された本部システムの業務ルールとAPI仕様を確認し、取得データをVben Admin側のテーブル、フォーム、チャートで利用できる形式へ変換・連携しました。",
            },
          ],
        },
      },
    ],
  },
  en: {
    role: "Frontend Engineer",
    company: "Beijing Guoke Railway Service Technology Co., Ltd.",
    onsite: "Onsite at China Academy of Railway Sciences Group Co., Ltd.",
    period: "Aug 2022 — Aug 2025",
    summary:
      "Contributed to frontend development for web systems supporting nationwide rail freight operations in China. Worked across a shipper portal, an internal operations and BI platform, and a regional marketing support system for the Shanghai Railway Bureau, focusing on complex workflow UIs, data visualization, and frontend performance.",
    projects: [
      {
        key: "ec",
        fullTitle: "Rail Freight Shipper Portal",
        abbrTitle: "Shipper Freight Portal",
        icon: "delivery_truck_bolt",
        stack: "Vue 2",
        description:
          "A nationwide rail logistics portal enabling businesses and individuals to complete booking, tracking, payment, and claims online. Developed and improved intuitive interfaces for complex shipping workflows.",
        detail: {
          overview:
            "A nationwide web service that digitized rail freight procedures previously handled mainly in person and on paper. The service supports use across multiple organizations, including headquarters and subsidiaries, with screens that change according to transport conditions and account type.",
          features: [
            {
              title: "Corporate Verification & Account Management",
              description:
                "Registration for corporate and individual shippers, corporate verification, profile management, and account linking across headquarters and subsidiaries.",
            },
            {
              title: "Freight Rate Inquiry & Booking",
              description:
                "Enter cargo details, origin and destination areas, and departure and arrival stations to check estimated freight rates and book transport.",
            },
            {
              title: "Shipment Tracking & ETA",
              description:
                "Check the current transport status of a shipment and its estimated arrival time.",
            },
            {
              title: "Online Payment & Claims",
              description:
                "Pay freight charges online, issue receipts, and submit claims for delays or cargo damage.",
            },
          ],
          responsibilities: [
            {
              title: "Interdependent Forms for Complex Transport Conditions",
              description:
                "Built forms in which later options change based on earlier inputs, including cargo details, province, city, district or county, and departure and arrival stations. Combined dependent-field logic, reset handling, and dynamic validation to support step-by-step entry of complex transport conditions.",
            },
            {
              title: "UI State Handling for API Requests",
              description:
                "Implemented distinct loading, no-results, and error states for API-based features such as freight rate inquiries and shipment tracking, including retry flows when needed.",
            },
            {
              title: "Bulk-Entry Redesign & Performance Optimization",
              description:
                "Improved an editable table used to register many waybills at once, which became sluggish as the number of rows increased. Proposed and implemented separating shared fields, such as stations and customer information, from wagon-specific fields such as wagon number and type. This reduced the number of editable cells and DOM elements and eliminated visible UI lag.",
            },
          ],
        },
      },
      {
        key: "management",
        fullTitle: "Rail Freight Operations & BI System",
        abbrTitle: "Operations & BI",
        icon: "account_tree",
        stack: "Vue 2",
        description:
          "An internal platform supporting nationwide rail logistics operations. Developed waybill approval and freight rate configuration workflows, along with BI dashboards using policy, market, and competitor data.",
        detail: {
          overview:
            "A core internal system used by operations staff to review and manage waybills and customer information submitted through the shipper portal. It consolidates nationwide transport and market data to support both day-to-day operations and BI analysis.",
          features: [
            {
              title: "Waybill & Transport Operations",
              description:
                "Search, approve, or return waybills for correction, check transport status, and manage related shipment details.",
            },
            {
              title: "Customer & Freight Rate Rules",
              description:
                "Search and manage corporate customer information and configure freight calculation rules based on transport conditions.",
            },
            {
              title: "Marketing & BI Analysis",
              description:
                "Consolidate transport volume, market, policy, and competitor data and present it through charts and dashboards.",
            },
            {
              title: "Business Report Authoring & Collection",
              description:
                "Allow regional staff to create and submit business reports for review and management by headquarters.",
            },
          ],
          responsibilities: [
            {
              title: "Multi-Criteria Search & Hierarchical Tables",
              description:
                "Built management tables with multi-criteria filters, pagination, and sorting for large waybill and customer datasets. Related data was requested from the API only when a row was expanded, while opening another row automatically collapsed the previous one to limit displayed information and unnecessary network traffic.",
            },
            {
              title: "Business Data Visualization",
              description:
                "Presented aggregated transport volume and market trends through purpose-specific graphs and comparison charts. Connected search filters with chart data so that staff could review trends by region and time period.",
            },
            {
              title: "Report Authoring with TinyMCE",
              description:
                "Integrated TinyMCE to allow regional staff to create and submit formatted business reports directly in the system. Implemented the UI states required for saving, reopening, editing, and viewing reports throughout the submission workflow.",
            },
          ],
        },
      },
      {
        key: "shanghai",
        fullTitle: "Shanghai Railway Regional Marketing & BI System",
        abbrTitle: "Regional Marketing & BI",
        icon: "finance_mode",
        stack: "Vue 3",
        description:
          "A regional marketing and sales support system for Shanghai Railway Bureau’s logistics needs, including port cargo. Built HQ API integrations, regional data visualizations, and sales management interfaces with Vue 3.",
        detail: {
          overview:
            "A regional extension that applies APIs and business rules from the nationwide system to sales and marketing workflows specific to the Shanghai Railway Bureau. It was developed as a configuration-driven administration system using Vue 3 and Vben Admin.",
          features: [
            {
              title: "Regional Marketing Analytics",
              description:
                "Aggregate and visualize shipment volumes, destination distribution, and other regional data for port cargo and local commodities.",
            },
            {
              title: "Sales Activity & Customer Management",
              description:
                "Manage customer information, visit history, negotiation status, and the progress of sales activities.",
            },
            {
              title: "Headquarters Data Integration",
              description:
                "Use shared headquarters APIs to access nationwide customer and freight master data.",
            },
            {
              title: "Regional Operations Administration",
              description:
                "Provide multi-criteria search, data editing, export, and other administration features required for regional operations.",
            },
          ],
          responsibilities: [
            {
              title: "Screen Development with Vben Admin Configuration",
              description:
                "Mapped business requirements to Vben Admin’s configuration models for tables, forms, and modals. Used Vue 3 and the Composition API to implement search, editing, and detail screens.",
            },
            {
              title: "Configuration and Extension of Complex Business Screens",
              description:
                "Extended the standard configuration with event handling and display logic for hierarchical tables, interdependent forms, and conditional rendering that could not be covered by the default settings alone.",
            },
            {
              title: "Applying Existing Business Rules & API Data",
              description:
                "Reviewed the business rules and API specifications of the nationwide Vue 2 system, then transformed and integrated the returned data for use in Vben Admin tables, forms, and charts.",
            },
          ],
        },
      },
    ],
  },
} as const;
