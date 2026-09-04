import { displayUrl } from "~/util/displayUrl";
import { profile } from "~/data/site";
export const contactHeader = {
  ja: {
    title: "お問い合わせ",
    location: "大阪、日本",
    description:
      "現在、日本国内でIT分野のポジションを探しています。これまでのWeb開発経験や技術領域についてのご質問・ご相談は、メールまたは各プロフィールからお気軽にご連絡ください。",
    relocation: "勤務地に応じて日本国内での転居を検討可能",
  },
  en: {
    title: "Get in Touch",
    location: "Osaka, Japan",
    description:
      "I am currently exploring IT opportunities in Japan. If you would like to discuss a role, my web development experience, or related technical areas, please feel free to reach out by email or through the profiles below.",
    relocation: "Open to relocation within Japan",
  },
};
export const contactItems = [
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    text: profile.email,
    icon: "/images/contact/gmail.png",
    external: false,
    hoverClass: "",
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    text: displayUrl(profile.linkedin),
    icon: "/images/contact/linkedin.jpeg",
    external: true,
    hoverClass: "group-hover:bg-[#0A66C2]",
  },
  {
    label: "GitHub",
    href: profile.github,
    text: displayUrl(profile.github),
    icon: "/images/contact/github.png",
    external: true,
    hoverClass: "",
  },
];
