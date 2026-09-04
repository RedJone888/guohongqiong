const bachelor = {
  key: "bachelor" as const,
  logo: "/images/education/upc-logo.jpg",
  website: "https://www.upc.edu.cn/",
};
const master = {
  key: "master" as const,
  logo: "/images/education/bjfu-logo.png",
  website: "https://www.bjfu.edu.cn/",
};
const bachelorCurriculum = {
  icon: "menu_book",
};
const bachelorProject = {
  icon: "api",
};
const masterProject = {
  icon: "map_search",
};
const masterPublished = {
  icon: "article",
  url: "https://www.sciencedirect.com/science/article/abs/pii/S0959652621033424",
  cover: "/images/education/publish-cover.gif",
};
export const educationHeader = {
  ja: {
    title: "学歴・バックグラウンド",
    description:
      "情報技術・GISを学ぶ中で、学部ではWeChatミニプログラムのフロントエンドを開発し、大学院ではWebGIS・データ基盤の技術支援を経験しました。多様なデータをWeb上に集約し、利用者が検索・活用できる形で届ける面白さに惹かれたことが、フロントエンドを志す原点となりました。",
    expand: "詳細を見る",
    collapse: "閉じる",
    closeDialog: "閉じる",
    projectDetails: "プロジェクト詳細",
  },
  en: {
    title: "Academic & Technical Background",
    description:
      "With a background in information technology and GIS, I developed the frontend of a WeChat Mini Program and later supported WebGIS and data-platform operations during my master’s program. Seeing diverse data transformed into a searchable web platform showed me the value of turning complex data into useful user experiences and led me toward frontend engineering.",
    expand: "View details",
    collapse: "Close",
    closeDialog: "Close",
    projectDetails: "Project Details",
  },
};
export const education = {
  ja: [
    {
      ...bachelor,
      period: "2015.09 — 2019.06",
      level: "学士課程 (学部)",
      school: "中国石油大学（華東）",
      degree: "学士",
      major: "地理情報科学（GIS）",
      location: "中国・青島",
      curriculum: {
        ...bachelorCurriculum,
        sectionTitle: "情報技術・GIS関連科目",
        items: [
          "C言語",
          "C++",
          "C#",
          "Java",
          "データ構造",
          "データベース",
          "WebGIS",
        ],
      },
      project: {
        ...bachelorProject,
        sectionTitle: "開発プロジェクト",
        title: "WeChatミニプログラム（空き教室・座席検索）",
        summary:
          "画像解析によって生成され、定期更新される空席データを受け取り、教室ごとの利用状況として可視化するWeChatミニプログラムの全画面フロントエンドを担当しました。",
        details: [
          {
            title: "プロジェクト背景と担当範囲",
            description:
              "学生イノベーションプロジェクトの一環として、空き教室を確認するために複数の校舎を移動する負担の軽減を目指しました。私は全画面のフロントエンド開発を担当し、データ処理・API提供・教室メタデータの収集は他のメンバーが担当しました。",
          },
          {
            title: "階層型UI・データ閲覧フローの構築",
            description:
              "キャンパス内にある6つの講義棟について、総教室数、現在利用可能な教室数、利用可能教室の空席率を一覧化し、講義棟から階数、教室へと段階的に詳細を確認できる画面フローを設計・実装しました。",
          },
          {
            title: "教室種別・利用状態に応じた表示制御",
            description:
              "教室メタデータから自習利用の可否を区別し、自習可能な教室でも授業・会議・メンテナンス中は利用不可として表示しました。現在利用できる教室にのみ、定期更新される空席率を表示するフロントエンドの分岐処理を実装しました。",
          },
          {
            title: "成果発表でのデモ",
            description:
              "主要な画面と閲覧フローを完成させ、プロジェクトの最終成果発表で操作デモを実施しました。学内向けサービスとしての本番導入には至っていません。",
          },
        ],
        tags: [
          "WeChat Mini Program",
          "Mobile UI",
          "Frontend",
          "Data Visualization",
        ],
        reference: {
          url: "https://upc-study-room-finder.vercel.app/",
          label: "現在の再現Webデモを見る",
          note: "大学時代のWeChatミニプログラムをHTML・CSS・JavaScriptで再構成したもので、当時の原版ではありません。",
          githubUrl: "https://github.com/RedJone888/upc-study-room-finder",
          githubLabel: "GitHub で再現コードを見る",
        },
      },
    },
    {
      ...master,
      period: "2019.09 — 2022.06",
      level: "修士課程 (大学院)",
      publish: {
        ...masterPublished,
        sectionTitle: "研究実績・論文",
        authorRole: "第一著者",
        title:
          "Optimization of landscape spatial structure aiming at achieving carbon neutrality in desert and mining areas",
      },
      school: "北京林業大学",
      degree: "修士",
      major: "農業工程・情報技術専攻",
      location: "中国・北京",
      project: {
        ...masterProject,
        sectionTitle: "WebGIS技術支援・実務インターン",
        title: "国家生態保護紅線監管プラットフォーム「一張図」",
        summary:
          "大学院在学中、北京吉威空间信息股份有限公司（GEOWAY）のプロジェクトに技術支援として参加し、タイル地図サービスの公開、データ取込、DBテーブルおよびビューの作成を担当しました。",
        details: [
          {
            title: "役割と担当範囲",
            description:
              "フロントエンドの画面実装ではなく、WebGISとデータ基盤に関する技術支援を担当しました。プロジェクト責任者が定めた構成や手順に基づき、各種データをWebプラットフォームで利用できる状態へ整える実作業を行いました。",
          },
          {
            title: "タイル地図サービスの公開",
            description:
              "生態保護紅線に関する地図や区域ポリゴンなどの空間データを、Web上で閲覧できるタイル地図サービスとして公開する作業を担当しました。",
          },
          {
            title: "DBテーブル作成・データ取込・ビュー作成",
            description:
              "責任者から提示された設計に沿ってDBテーブルを作成し、地図、区域ポリゴン、統計データ、報告書などの関連データを取り込みました。さらに、検索や画面表示で利用するためのデータベースビューを作成しました。",
          },
          {
            title: "統合Webプラットフォームから得た理解",
            description:
              "各工程・各担当者が収集、処理した地図、区域ポリゴン、統計、報告書などの情報を一つのプラットフォームに集約し、利用者が横断的に検索・活用できる成果を体験しました。フロントエンド実装の担当ではありませんでしたが、データを利用可能なWeb体験へ変えることに強く惹かれるきっかけとなりました。",
          },
        ],
        tags: [
          "Technical Support",
          "WebGIS",
          "Tile Map Service",
          "Data Import",
          "Database Views",
        ],
        reference: {
          url: "http://www.geoway.com.cn/satellite/258.html?type=1",
          label: "GEOWAYのプロジェクト紹介を見る",
          note: "プロジェクト全体の背景を紹介する外部ページです。私の担当範囲は上記の技術支援です。",
        },
      },
    },
  ],
  en: [
    {
      ...bachelor,
      period: "Sep 2015 — Jun 2019",
      level: "Bachelor's Degree",
      school: "China University of Petroleum (East China)",
      degree: "Bachelor",
      major: "Geographic Information Science（GIS）",
      location: "Qingdao, China",
      curriculum: {
        ...bachelorCurriculum,
        sectionTitle: "Information Technology & GIS Coursework",
        items: [
          "C",
          "C++",
          "C#",
          "Java",
          "Data Structures",
          "Database Systems",
          "WebGIS",
        ],
      },
      project: {
        ...bachelorProject,
        sectionTitle: "Innovation Project",
        title: "Seat Availability WeChat Mini Program",
        summary:
          "Built every frontend screen for a WeChat Mini Program that received periodically updated seat-availability data generated through image analysis and visualized the current usability of each classroom.",
        details: [
          {
            title: "Project Context & My Role",
            description:
              "Developed as part of a student innovation project to reduce the need for students to visit multiple campus buildings when checking for an available study room. I implemented every frontend screen, while other members handled data processing, API delivery, and classroom metadata collection.",
          },
          {
            title: "Hierarchical UI & Drill-down Navigation",
            description:
              "Designed and implemented an overview of all 6 lecture buildings, including total classrooms, currently usable rooms, and seat availability, with a drill-down flow from building to floor and classroom details.",
          },
          {
            title: "Room Type & Availability Rendering",
            description:
              "Distinguished whether a room could be used for self-study from its metadata, then marked otherwise eligible rooms as unavailable while they were in class use, reserved for meetings, or under maintenance. Periodically updated seat availability was shown only for rooms currently open for study.",
          },
          {
            title: "Final Project Demonstration",
            description:
              "Completed the primary screens and navigation flow and presented an interactive demonstration during the project's final review. The application was not deployed as a production campus service.",
          },
        ],
        tags: [
          "WeChat Mini Program",
          "Mobile UI",
          "Frontend",
          "Data Visualization",
        ],
        reference: {
          url: "https://upc-study-room-finder.vercel.app/",
          label: "View the current web recreation",
          note: "A later HTML, CSS, and JavaScript recreation—not the original WeChat Mini Program.",
          githubUrl: "https://github.com/RedJone888/upc-study-room-finder",
          githubLabel: "View the recreation code on GitHub",
        },
      },
    },
    {
      ...master,
      period: "Sep 2019 — Jun 2022",
      level: "Master's Degree",
      publish: {
        ...masterPublished,
        sectionTitle: "Publications & Research",
        authorRole: "First author",
        title:
          "Optimization of landscape spatial structure aiming at achieving carbon neutrality in desert and mining areas",
      },
      school: "Beijing Forestry University",
      degree: "Master",
      major: "Agricultural Engineering & Information Technology",
      location: "Beijing, China",
      project: {
        ...masterProject,
        sectionTitle: "WebGIS Technical Support Internship",
        title:
          "National Ecological Protection Redline Monitoring Platform — One Map",
        summary:
          "During my Master's program, I joined a GEOWAY project in a technical support role, publishing tile map services, importing data, and creating database tables and views.",
        details: [
          {
            title: "Role & Scope",
            description:
              "My role focused on technical support for WebGIS and the data layer rather than frontend implementation. Following the architecture and procedures defined by the project lead, I performed the operational work required to prepare data for use in the web platform.",
          },
          {
            title: "Tile Map Service Publishing",
            description:
              "Published maps, ecological protection boundary polygons, and other spatial datasets as tile map services that could be viewed through the web platform.",
          },
          {
            title: "Database Tables, Imports & Views",
            description:
              "Created database tables from specifications provided by the project lead, imported maps, boundary polygons, statistics, reports, and related datasets, and created database views used for platform queries and presentation.",
          },
          {
            title: "Understanding an Integrated Web Platform",
            description:
              "I saw how maps, boundary polygons, statistics, reports, and other information collected and processed by different teams and stages could be consolidated into one platform for cross-functional search and use. Although I did not implement the frontend, this experience strongly attracted me to the value of turning data into a usable web experience.",
          },
        ],
        tags: [
          "Technical Support",
          "WebGIS",
          "Tile Map Service",
          "Data Import",
          "Database Views",
        ],
        reference: {
          url: "http://www.geoway.com.cn/satellite/258.html?type=1",
          label: "View the GEOWAY project overview",
          note: "An external overview of the wider project. My contribution was limited to the technical support work described above.",
        },
      },
    },
  ],
};
