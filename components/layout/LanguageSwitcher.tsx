'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { services } from '@/app/lib/services'
import type { Locale } from '@/app/[lang]/dictionaries'

export default function LanguageSwitcher({ lang }: { lang: Locale }) {
  const pathname = usePathname()

  const activeLang: Locale = pathname.startsWith('/tr') ? 'tr' : 'en'

  function getLocalizedPath(targetLang: Locale): string {
    const pathWithoutLocale = pathname.replace(/^\/(?:tr|en)/, '')

    // Service detail pages have locale-specific slugs — translate them
    const serviceMatch = pathWithoutLocale.match(/^\/services\/(.+)$/)
    if (serviceMatch) {
      const currentSlug = serviceMatch[1]
      const service = services.find(s => s.slugs[activeLang] === currentSlug)
      if (service) {
        return `/${targetLang}/services/${service.slugs[targetLang]}`
      }
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
