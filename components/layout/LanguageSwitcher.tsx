'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { Locale } from '@/app/[lang]/dictionaries'

export default function LanguageSwitcher({ lang }: { lang: Locale }) {
  const pathname = usePathname()

  const pathWithoutLocale = pathname.replace(/^\/(?:tr|en)/, '') || '/'

  return (
    <div className="flex items-center gap-1 rounded-full border border-[var(--color-border)] p-0.5 text-sm font-medium">
      <Link
        href={`/tr${pathWithoutLocale}`}
        className={`rounded-full px-3 py-1 transition-colors ${
          lang === 'tr'
            ? 'bg-[var(--color-primary)] text-white'
            : 'text-[var(--color-muted)] hover:text-[var(--color-text)]'
        }`}
      >
        TR
      </Link>
      <Link
        href={`/en${pathWithoutLocale}`}
        className={`rounded-full px-3 py-1 transition-colors ${
          lang === 'en'
            ? 'bg-[var(--color-primary)] text-white'
            : 'text-[var(--color-muted)] hover:text-[var(--color-text)]'
        }`}
      >
        EN
      </Link>
    </div>
  )
}
