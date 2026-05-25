import Link from 'next/link'
import Image from 'next/image'
import type { Locale } from '@/app/[lang]/dictionaries'

type Dict = {
  about: {
    badge: string
    title: string
    titleAccent: string
    text: string
    text2: string
    stat1: string
    stat2: string
    stat3: string
    learnMore: string
  }
}

export default function AboutPreview({ lang, dict }: { lang: Locale; dict: Dict }) {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <span className="inline-block mb-3 rounded-full bg-[var(--color-primary-light)] px-3 py-1 text-sm font-medium text-[var(--color-primary)]">
              {dict.about.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)] mb-6 leading-snug">
              {dict.about.title}{' '}
              <span className="text-[var(--color-primary)]">{dict.about.titleAccent}</span>
            </h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">{dict.about.text}</p>
            <p className="text-[var(--color-muted)] leading-relaxed mb-8">{dict.about.text2}</p>
            <Link
              href={`/${lang}/about`}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              {dict.about.learnMore} →
            </Link>
          </div>

          {/* Image + Stats */}
          <div className="flex flex-col gap-6">
            {/* Clinic image */}
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/gonyeli_veteriner_animare.jpg"
                alt="Animare Veteriner Kliniği"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
