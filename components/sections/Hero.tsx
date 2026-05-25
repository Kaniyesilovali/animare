import Link from 'next/link'
import Image from 'next/image'
import type { Locale } from '@/app/[lang]/dictionaries'

type Dict = {
  hero: {
    badge: string
    title: string
    titleAccent: string
    subtitle: string
    cta: string
    ctaSecondary: string
  }
}

export default function Hero({ lang, dict }: { lang: Locale; dict: Dict }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-primary-light)] via-white to-[var(--color-accent-light)] py-16 sm:py-24">
      {/* decorative circles */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[var(--color-primary)] opacity-5" />
      <div className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-[var(--color-accent)] opacity-5" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Text */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[var(--color-primary-light)] border border-[var(--color-primary)]/20 px-4 py-1.5 text-sm font-medium text-[var(--color-primary)]">
              <span className="h-2 w-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
              {dict.hero.badge}
            </span>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--color-text)] leading-tight">
              {dict.hero.title}{' '}
              <span className="text-[var(--color-primary)]">{dict.hero.titleAccent}</span>
            </h1>

            <p className="text-lg text-[var(--color-muted)] leading-relaxed max-w-xl">
              {dict.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <Link
                href={`/${lang}/contact`}
                className="rounded-full bg-[var(--color-primary)] px-8 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-[var(--color-primary-dark)] transition-colors text-center"
              >
                {dict.hero.cta}
              </Link>
              <Link
                href={`/${lang}/services`}
                className="rounded-full border border-[var(--color-border)] bg-white px-8 py-3.5 text-base font-semibold text-[var(--color-text)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors text-center"
              >
                {dict.hero.ctaSecondary}
              </Link>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/veteriner-nd-ocean-dog.jpg"
                alt="Mutlu köpek ve Animare Veteriner Kliniği"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
