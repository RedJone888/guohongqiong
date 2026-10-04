import type { Certificate } from "~/data/site";
export const certificateHeader = {
  ja: {
    title: "資格・認定",
    description:
      "語学、情報セキュリティ、データベース、プログラミング分野で取得した資格を掲載しています。言語運用力、情報処理の基礎、セキュリティ知識を示すものです。",
    proofNote:
      "合格証明書は、選考過程において必要に応じて提示可能です。個人情報保護のため、本サイトでは公開していません。",
  },
  en: {
    title: "Certifications",
    description:
      "Certifications in languages, information security, databases, and programming, reflecting the communication skills, technical foundations, and security awareness that support my frontend work.",
    proofNote:
      "Supporting certificates can be provided upon request during the recruitment process. They are not published on this site to protect personal information.",
  },
};
export const certificates: Certificate[] = [
  {
    name: "日本語能力試験 （JLPT） N1",
    displayName: "Japanese Language Proficiency Test N1",
    issuer: "The Japan Foundation / Japan Educational Exchanges and Services",
    category: "Language",
    period: "2025.01",
    officialSite: "https://www.jlpt.jp/",
    logo: "/images/certificates/jlpt.gif",
    logoAlt: "JLPT logo",
  },
  {
    name: "全国大学英语考试（CET）6级",
    displayName: "College English Test Band 6",
    issuer: "National Education Examinations Authority, China",
    category: "Language",
    period: "2019.06",
    officialSite: "https://cet.neea.edu.cn/",
    logo: "/images/certificates/cet.jpg",
    logoAlt: "CET logo",
  },
  {
    name: "全国大学英语考试（CET）4级",
    displayName: "College English Test Band 4",
    issuer: "National Education Examinations Authority, China",
    category: "Language",
    period: "2018.06",
    officialSite: "https://cet.neea.edu.cn/",
    logo: "/images/certificates/cet.jpg",
    logoAlt: "CET logo",
  },
  {
    name: "情報セキュリティマネジメント試験（SG）",
    displayName: "Information Security Management Examination",
    issuer: "Innovation Platform Agency, Japan",
    category: "Security",
    period: "2026.07",
    officialSite: "https://www.ipa.go.jp/shiken/kubun/sg/index.html",
    logo: "/images/certificates/ipa1.svg",
    logoAlt: "Information Security Management Examination logo",
  },
  {
    name: "全国计算机等级考试（NCRE）2级 MySQL",
    displayName: "National Computer Rank Examination Level 2 - MySQL",
    issuer: "National Education Examinations Authority, China",
    category: "IT",
    period: "2018.03",
    officialSite: "https://ncre.neea.edu.cn/",
    logo: "/images/certificates/ncre.jpg",
    logoAlt: "NCRE logo",
  },
  {
    name: "全国计算机等级考试（NCRE）2级 C语言",
    displayName: "National Computer Rank Examination Level 2 - C Language",
    issuer: "National Education Examinations Authority, China",
    category: "IT",
    period: "2017.03",
    officialSite: "https://ncre.neea.edu.cn/",
    logo: "/images/certificates/ncre.jpg",
    logoAlt: "NCRE logo",
  },
];
