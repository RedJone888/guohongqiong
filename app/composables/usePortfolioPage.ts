import { portfolioPaths } from '~/data/navigation'
import { portfolioSections, profile, type PortfolioSectionKey } from '~/data/site'

export const usePortfolioPage = (section: PortfolioSectionKey) => {
  const { locale } = useLocale()
  const definition = portfolioSections.find(item => item.key === section)!
  const canonicalUrl = `https://guohongqiong.vercel.app${portfolioPaths[section]}`

  useHead(() => {
    const copy = definition[locale.value]
    const title = section === 'profile'
      ? `${profile.name} — ${profile.title}`
      : `${copy.label} — ${profile.name}`
    const description = section === 'profile' ? profile[locale.value].summary : copy.description

    return {
      title,
      link: [{ rel: 'canonical', href: canonicalUrl }],
      meta: [
        { name: 'description', content: description },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:url', content: canonicalUrl },
      ],
    }
  })
}
