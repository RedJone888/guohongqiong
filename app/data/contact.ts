import { displayUrl } from "~/util/displayUrl";
import { profile } from "~/data/site";
export const contactHeader = {
  ja: {
    title: "採用に関するご連絡",
    location: "大阪、日本",
    description:
      "Vue・TypeScriptの実務経験を活かしつつ、サーバーサイドにも担当領域を広げられるWebエンジニアの仕事を探しています。React・Next.jsの個人開発や、生成AIを活用した開発にも取り組んでいます。採用や開発経験については、メールまたはLinkedInからお気軽にご連絡ください。",
    relocation: "現在は大阪在住です。勤務地は求人に応じて柔軟に対応でき、入社に伴う転居も可能です。",
  },
  en: {
    title: "Get in touch about a role",
    location: "Osaka, Japan",
    description:
      "I am looking for web engineering roles where I can apply my professional Vue and TypeScript experience and expand into server-side development. I also build personal projects with React and Next.js and use generative AI to support development. Please contact me by email or LinkedIn to discuss a role or my development experience.",
    relocation: "Currently based in Osaka. I am flexible on work location and can relocate depending on where the role is based.",
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
