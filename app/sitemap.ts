import type { MetadataRoute } from 'next'
import { getAllServiceSlugs } from '@/app/lib/services'

export const dynamic = 'force-static'

const BASE = 'https://animare.vet'

// Language-specific path segments
const PATHS = {
  tr: { services: 'hizmetler', about: 'hakkimizda', contact: 'iletisim' },
  en: { services: 'services', about: 'about', contact: 'contact' },
}

const staticPages = [
  {
    tr: '',
    en: '',
    priority: 1.0,
    changeFrequency: 'weekly' as const,
  },
  {
    tr: `/${PATHS.tr.services}`,
    en: `/${PATHS.en.services}`,
    priority: 0.9,
    changeFrequency: 'monthly' as const,
  },
  {
    tr: `/${PATHS.tr.about}`,
    en: `/${PATHS.en.about}`,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  },
  {
    tr: `/${PATHS.tr.contact}`,
    en: `/${PATHS.en.contact}`,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  // Static pages
  for (const page of staticPages) {
    const trUrl = `${BASE}/tr${page.tr}`
    const enUrl = `${BASE}/en${page.en}`
    entries.push({
      url: trUrl,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: { languages: { tr: trUrl, en: enUrl } },
    })
    entries.push({
      url: enUrl,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: { languages: { tr: trUrl, en: enUrl } },
    })
  }

  // Individual service pages
  const trSlugs = getAllServiceSlugs('tr')
  const enSlugs = getAllServiceSlugs('en')

  for (let i = 0; i < trSlugs.length; i++) {
    const trUrl = `${BASE}/tr/${PATHS.tr.services}/${trSlugs[i]}`
    const enUrl = `${BASE}/en/${PATHS.en.services}/${enSlugs[i]}`
    entries.push({
      url: trUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: { languages: { tr: trUrl, en: enUrl } },
    })
    entries.push({
      url: enUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: { languages: { tr: trUrl, en: enUrl } },
    })
  }

  return entries
}
