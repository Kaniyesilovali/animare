'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useRef } from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import type { Locale } from '@/app/[lang]/dictionaries'
import { services } from '@/app/lib/services'
import { lp, lpService } from '@/app/lib/paths'

type Dict = {
  nav: { home: string; services: string; about: string; contact: string; blog: string }
}

export default function Navbar({ lang, dict }: { lang: Locale; dict: Dict }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  const links = [
    { href: `/${lang}`, label: dict.nav.home },
    { href: lp(lang, 'services'), label: dict.nav.services, hasDropdown: true },
    { href: lp(lang, 'about'), label: dict.nav.about },
    { href: lp(lang, 'blog'), label: dict.nav.blog },
    { href: lp(lang, 'contact'), label: dict.nav.contact },
  ]

  const isActive = (href: string) =>
    href === `/${lang}` ? pathname === `/${lang}` : pathname.startsWith(href)

  const handleMouseEnter = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
    setServicesOpen(true)
  }

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => setServicesOpen(false), 180)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-[var(--color-border)] shadow-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href={`/${lang}`}>
            <Image
              src="/AniMare.png"
              alt="Animare Veteriner"
              width={140}
              height={48}
              className="h-16 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) =>
              l.hasDropdown ? (
                <div
                  key={l.href}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Trigger */}
                  <Link
                    href={l.href}
                    className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                      isActive(l.href)
                        ? 'text-[var(--color-primary)]'
                        : 'text-[var(--color-muted)] hover:text-[var(--color-text)]'
                    }`}
                  >
                    {l.label}
                    <svg
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>

                  {/* invisible bridge: covers the gap between trigger and dropdown */}
                  <div className="absolute inset-x-0 top-full h-3" />

                  {/* Dropdown panel */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50 transition-all duration-200 ${
                      servicesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1 pointer-events-none'
                    }`}
                    style={{ width: '380px' }}
                  >
                    {/* Arrow */}
                    <div className="flex justify-center -mb-px">
                      <div className="w-3 h-3 bg-white border-l border-t border-[var(--color-border)] rotate-45 shadow-sm" />
                    </div>

                    <div className="rounded-2xl border border-[var(--color-border)] bg-white shadow-xl overflow-hidden">
                      {/* Services grid — 2 columns */}
                      <div className="p-2 grid grid-cols-2 gap-0.5">
                        {services.map((s) => {
                          const st = s[lang as 'tr' | 'en']
                          const slug = s.slugs[lang as 'tr' | 'en']
                          const href = lpService(lang, slug)
                          const active = pathname === href
                          return (
                            <Link
                              key={s.key}
                              href={href}
                              onClick={() => setServicesOpen(false)}
                              className={`group flex items-center gap-2.5 rounded-xl px-3 py-2 transition-colors ${
                                active
                                  ? 'bg-[var(--color-primary-light)]'
                                  : 'hover:bg-[var(--color-surface)]'
                              }`}
                            >
                              <span className="text-base flex-shrink-0">{s.icon}</span>
                              <span
                                className={`text-sm font-medium truncate ${
                                  active ? 'text-[var(--color-primary)]' : 'text-[var(--color-text)]'
                                }`}
                              >
                                {st.title}
                              </span>
                            </Link>
                          )
                        })}
                      </div>

                      {/* Footer */}
                      <div className="px-5 py-3 border-t border-[var(--color-border)] bg-[var(--color-surface)] flex items-center justify-between">
                        <span className="text-xs text-[var(--color-muted)]">
                          {lang === 'tr' ? `${services.length} hizmet` : `${services.length} services`}
                        </span>
                        <Link
                          href={lp(lang, 'services')}
                          onClick={() => setServicesOpen(false)}
                          className="text-xs font-medium text-[var(--color-primary)] hover:underline transition-colors"
                        >
                          {lang === 'tr' ? 'Tümünü gör →' : 'View all →'}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
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
              )
            )}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher lang={lang} />
            <Link
              href={lp(lang, 'contact')}
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
          <div className="md:hidden border-t border-[var(--color-border)] py-3 flex flex-col gap-0.5">
            {links.map((l) =>
              l.hasDropdown ? (
                <div key={l.href}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive(l.href)
                        ? 'bg-[var(--color-primary-light)] text-[var(--color-primary)]'
                        : 'text-[var(--color-muted)] hover:bg-[var(--color-surface)]'
                    }`}
                  >
                    <span>{l.label}</span>
                    <svg
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {servicesOpen && (
                    <div className="mt-1 mx-1 rounded-xl border border-[var(--color-border)] overflow-hidden">
                      <div className="divide-y divide-[var(--color-border)]">
                        {services.map((s) => {
                          const st = s[lang as 'tr' | 'en']
                          const slug = s.slugs[lang as 'tr' | 'en']
                          const href = lpService(lang, slug)
                          const active = pathname === href
                          return (
                            <Link
                              key={s.key}
                              href={href}
                              onClick={() => { setOpen(false); setServicesOpen(false) }}
                              className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                                active
                                  ? 'bg-[var(--color-primary-light)] text-[var(--color-primary)] font-medium'
                                  : 'bg-white text-[var(--color-text)] hover:bg-[var(--color-surface)]'
                              }`}
                            >
                              <span className="text-base w-6 text-center flex-shrink-0" aria-hidden="true">{s.icon}</span>
                              <span className="font-medium">{st.title}</span>
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive(l.href)
                      ? 'bg-[var(--color-primary-light)] text-[var(--color-primary)]'
                      : 'text-[var(--color-muted)] hover:bg-[var(--color-surface)]'
                  }`}
                >
                  {l.label}
                </Link>
              )
            )}
            <div className="pt-2 px-1">
              <LanguageSwitcher lang={lang} />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
