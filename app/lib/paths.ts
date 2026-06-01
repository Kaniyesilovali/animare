import type { Locale } from '@/app/[lang]/dictionaries'

const SEGMENTS = {
  services: { tr: 'hizmetler', en: 'services' },
  about:    { tr: 'hakkimizda', en: 'about' },
  contact:  { tr: 'iletisim', en: 'contact' },
  privacy:  { tr: 'gizlilik', en: 'privacy' },
} as const

type Page = keyof typeof SEGMENTS

export function lp(lang: Locale, page: Page): string {
  return `/${lang}/${SEGMENTS[page][lang]}`
}

export function lpService(lang: Locale, slug: string): string {
  return `/${lang}/${SEGMENTS.services[lang]}/${slug}`
}

// Maps a path segment from any locale to the target locale's equivalent.
export function translateSegment(segment: string, toLang: Locale): string {
  for (const map of Object.values(SEGMENTS)) {
    if (segment === map.tr || segment === map.en) {
      return map[toLang]
    }
  }
  return segment
}
