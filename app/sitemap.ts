import type { MetadataRoute } from 'next'
import { getAllServiceSlugs } from '@/app/lib/services'

export const dynamic = 'force-static'

const BASE = 'https://animare.vet'
const LOCALES = ['tr', 'en'] as const

const staticPages = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  // Static pages
  for (const locale of LOCALES) {
    for (const { path, priority, changeFrequency } of staticPages) {
      entries.push({
        url: `${BASE}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency,
        priority,
        alternates: {
          languages: Object.fromEntries(
            LOCALES.map((l) => [l, `${BASE}/${l}${path}`])
          ),
        },
      })
    }
  }

  // Individual service pages
  const trSlugs = getAllServiceSlugs('tr')
  const enSlugs = getAllServiceSlugs('en')

  for (let i = 0; i < trSlugs.length; i++) {
    entries.push({
      url: `${BASE}/tr/services/${trSlugs[i]}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          tr: `${BASE}/tr/services/${trSlugs[i]}`,
          en: `${BASE}/en/services/${enSlugs[i]}`,
        },
      },
    })
    entries.push({
      url: `${BASE}/en/services/${enSlugs[i]}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          tr: `${BASE}/tr/services/${trSlugs[i]}`,
          en: `${BASE}/en/services/${enSlugs[i]}`,
        },
      },
    })
  }

  return entries
}
