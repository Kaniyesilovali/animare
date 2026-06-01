'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { services } from '@/app/lib/services'
import type { Locale } from '@/app/[lang]/dictionaries'
import { translateSegment, lpService } from '@/app/lib/paths'

export default function LanguageSwitcher({ lang }: { lang: Locale }) {
  const pathname = usePathname()

  const activeLang: Locale = pathname.startsWith('/tr') ? 'tr' : 'en'

  function getLocalizedPath(targetLang: Locale): string {
    const pathWithoutLocale = pathname.replace(/^\/(?:tr|en)/, '')

    // Service detail: match both /hizmetler/{slug} and /services/{slug}
    const serviceMatch = pathWithoutLocale.match(/^\/(hizmetler|services)\/(.+)$/)
    if (serviceMatch) {
      const currentSlug = serviceMatch[2]
      const service = services.find(s => s.slugs[activeLang] === currentSlug)
      if (service) {
        return lpService(targetLang, service.slugs[targetLang])
      }
    }

    // Translate the first path segment (hizmetler↔services, hakkimizda↔about, etc.)
    const parts = pathWithoutLocale.split('/').filter(Boolean)
    if (parts.length > 0) {
      const translated = translateSegment(parts[0], targetLang)
      const rest = parts.slice(1).join('/')
      return `/${targetLang}/${translated}${rest ? `/${rest}` : ''}`
    }

    return `/${targetLang}${pathWithoutLocale}`
  }

  return (
    <div className="flex items-center gap-1 rounded-full border border-[var(--color-border)] p-0.5 text-sm font-medium">
      <Link
        href={getLocalizedPath('tr')}
        className={`rounded-full px-3 py-1 transition-colors ${
          activeLang === 'tr'
            ? 'bg-[var(--color-primary)] text-white'
            : 'text-[var(--color-muted)] hover:text-[var(--color-text)]'
        }`}
      >
        TR
      </Link>
      <Link
        href={getLocalizedPath('en')}
        className={`rounded-full px-3 py-1 transition-colors ${
          activeLang === 'en'
            ? 'bg-[var(--color-primary)] text-white'
            : 'text-[var(--color-muted)] hover:text-[var(--color-text)]'
        }`}
      >
        EN
      </Link>
    </div>
  )
}
