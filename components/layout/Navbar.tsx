'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import type { Locale } from '@/app/[lang]/dictionaries'

type Dict = {
  nav: { home: string; services: string; about: string; contact: string }
}

export default function Navbar({ lang, dict }: { lang: Locale; dict: Dict }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const links = [
    { href: `/${lang}`, label: dict.nav.home },
    { href: `/${lang}/services`, label: dict.nav.services },
    { href: `/${lang}/about`, label: dict.nav.about },
    { href: `/${lang}/contact`, label: dict.nav.contact },
  ]

  const isActive = (href: string) =>
    href === `/${lang}` ? pathname === `/${lang}` : pathname.startsWith(href)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-[var(--color-border)] shadow-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href={`/${lang}`}>
            <Image
              src="/animare_veteriner_logo.png"
              alt="Animare Veteriner"
              width={140}
              height={48}
              className="h-16 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(l.href)
                    ? 'text-[var(--color-primary)]'
                    : 'text-[var(--color-muted)] hover:text-[var(--color-text)]'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher lang={lang} />
            <Link
              href={`/${lang}/contact`}
              className="rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
            >
              {dict.nav.contact}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-[var(--color-muted)] hover:bg-[var(--color-surface)]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className="block w-5 h-0.5 bg-current mb-1" />
            <span className="block w-5 h-0.5 bg-current mb-1" />
            <span className="block w-5 h-0.5 bg-current" />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-[var(--color-border)] py-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`px-2 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive(l.href)
                    ? 'bg-[var(--color-primary-light)] text-[var(--color-primary)]'
                    : 'text-[var(--color-muted)]'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-2">
              <LanguageSwitcher lang={lang} />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
