import type { MetadataRoute } from 'next'
import { getAllServiceSlugs } from '@/app/lib/services'
import { getAllBlogSlugs, blogPosts } from '@/app/lib/blog'

export const dynamic = 'force-static'

const BASE = 'https://animare.vet'

// Language-specific path segments
const PATHS = {
  tr: { services: 'hizmetler', about: 'hakkimizda', contact: 'iletisim', blog: 'blog' },
  en: { services: 'services', about: 'about', contact: 'contact', blog: 'blog' },
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
  {
    tr: `/${PATHS.tr.blog}`,
    en: `/${PATHS.en.blog}`,
    priority: 0.7,
    changeFrequency: 'weekly' as const,
  },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  const SITE_LAUNCH = new Date('2026-05-01')

  // Static pages
  for (const page of staticPages) {
    const trUrl = `${BASE}/tr${page.tr}`
    const enUrl = `${BASE}/en${page.en}`
    entries.push({
      url: trUrl,
      lastModified: SITE_LAUNCH,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: { languages: { tr: trUrl, en: enUrl, 'x-default': trUrl } },
    })
    entries.push({
      url: enUrl,
      lastModified: SITE_LAUNCH,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: { languages: { tr: trUrl, en: enUrl, 'x-default': trUrl } },
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
      lastModified: SITE_LAUNCH,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: { languages: { tr: trUrl, en: enUrl, 'x-default': trUrl } },
    })
    entries.push({
      url: enUrl,
      lastModified: SITE_LAUNCH,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: { languages: { tr: trUrl, en: enUrl, 'x-default': trUrl } },
    })
  }

  // Individual blog posts
  const trBlogSlugs = getAllBlogSlugs('tr')
  const enBlogSlugs = getAllBlogSlugs('en')

  for (let i = 0; i < trBlogSlugs.length; i++) {
    const trUrl = `${BASE}/tr/${PATHS.tr.blog}/${trBlogSlugs[i]}`
    const enUrl = `${BASE}/en/${PATHS.en.blog}/${enBlogSlugs[i]}`
    const post = blogPosts[i]
    entries.push({
      url: trUrl,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly',
      priority: 0.6,
      alternates: { languages: { tr: trUrl, en: enUrl, 'x-default': trUrl } },
    })
    entries.push({
      url: enUrl,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly',
      priority: 0.6,
      alternates: { languages: { tr: trUrl, en: enUrl, 'x-default': trUrl } },
    })
  }

  return entries
}
