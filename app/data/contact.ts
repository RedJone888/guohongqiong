import { displayUrl } from "~/util/displayUrl";
import { profile } from "~/data/site";
export const contactHeader = {
  ja: {
    title: "Get in Touch",
    location: "大阪、日本",
    description:
      "フロントエンド職、Vue / Nuxt 関連の開発、または職務経歴書に関する詳細確認がありましたら、メールまたは各プロフィールからご連絡ください。",
    relocation: "勤務地に応じて日本国内での転居を検討可能",
  },
  en: {
    title: "Get in Touch",
    location: "Osaka, Japan",
    description:
      "I am currently exploring frontend opportunities in Japan. For Vue / Nuxt-related roles or further details about my experience, please contact me by email or through the profiles below.",
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
