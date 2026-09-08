import type { PortfolioSectionKey } from './site'

export const portfolioPaths = {
  profile: '/',
  experience: '/experience',
  projects: '/projects',
  education: '/education',
  certificates: '/certificates',
  skills: '/skills',
  contact: '/contact',
} as const satisfies Record<PortfolioSectionKey, string>

export function portfolioSectionForPath(path: string): PortfolioSectionKey {
  const normalizedPath = path.replace(/\/+$/, '') || '/'
  return (Object.keys(portfolioPaths) as PortfolioSectionKey[])
    .find(section => portfolioPaths[section] === normalizedPath) ?? 'profile'
}
