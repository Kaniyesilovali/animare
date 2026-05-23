import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { hasLocale, type Locale } from '../../dictionaries'
import JsonLd from '@/components/JsonLd'
import {
  getServiceBySlug,
  getAllServiceSlugs,
  services,
} from '@/app/lib/services'

export async function generateStaticParams() {
  const params: { lang: string; slug: string }[] = []
  for (const lang of ['tr', 'en'] as const) {
    for (const slug of getAllServiceSlugs(lang)) {
      params.push({ lang, slug })
    }
  }
  return params
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}): Promise<Metadata> {
  const { lang, slug } = await params
  const locale = lang as 'tr' | 'en'
  const service = getServiceBySlug(slug, locale)
  if (!service) return {}
  const t = service[locale]
  return {
    title: t.meta.title,
    description: t.meta.description,
    keywords: t.meta.keywords,
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      url: `/${lang}/services/${slug}`,
    },
    alternates: {
      canonical: `/${lang}/services/${slug}`,
      languages: {
        tr: `/tr/services/${service.slugs.tr}`,
        en: `/en/services/${service.slugs.en}`,
      },
    },
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}) {
  const { lang, slug } = await params
  if (!hasLocale(lang)) notFound()
  const locale = lang as Locale
  const service = getServiceBySlug(slug, locale as 'tr' | 'en')
  if (!service) notFound()

  const t = service[locale as 'tr' | 'en']
  const isTr = locale === 'tr'
  const isNonMedical = service.key === 'grooming' || service.key === 'nutrition'

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: isTr ? 'Ana Sayfa' : 'Home',
        item: `https://animare.vet/${lang}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: isTr ? 'Hizmetler' : 'Services',
        item: `https://animare.vet/${lang}/services`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: t.title,
        item: `https://animare.vet/${lang}/services/${slug}`,
      },
    ],
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': isNonMedical ? 'Service' : 'MedicalProcedure',
    name: t.title,
    description: t.meta.description,
    provider: {
      '@type': 'VeterinaryCare',
      '@id': 'https://animare.vet/#organization',
      name: 'Animare Veteriner Kliniği',
    },
  }

  return (
    <div>
      <JsonLd data={[breadcrumb, serviceSchema]} />

      {/* Hero */}
      <div className="bg-[var(--color-primary)] py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-white/70 text-sm mb-6">
            <Link href={`/${lang}`} className="hover:text-white transition-colors">
              {isTr ? 'Ana Sayfa' : 'Home'}
            </Link>
            <span>/</span>
            <Link href={`/${lang}/services`} className="hover:text-white transition-colors">
              {isTr ? 'Hizmetler' : 'Services'}
            </Link>
            <span>/</span>
            <span className="text-white">{t.title}</span>
          </nav>
          <div className="text-center">
            <div className="text-5xl mb-4" aria-hidden="true">{service.icon}</div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">{t.title}</h1>
            <p className="text-white/80 max-w-xl mx-auto text-lg">{t.desc}</p>
          </div>
        </div>
      </div>

      {/* Body */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-[var(--color-muted)] leading-relaxed text-lg mb-10">{t.body}</p>

          {/* Included items */}
          <div className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] p-6 mb-10">
            <h2 className="font-semibold text-[var(--color-text)] mb-4 text-lg">
              {isTr ? 'Neler dahil?' : "What's included?"}
            </h2>
            <ul className="space-y-3">
              {t.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 h-5 w-5 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center text-xs font-bold">
                    ✓
                  </span>
                  <span className="text-[var(--color-muted)]">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="rounded-2xl bg-[var(--color-primary-light)] border border-[var(--color-primary)]/20 p-8 text-center">
            <p className="font-semibold text-[var(--color-text)] mb-2 text-lg">
              {isTr
                ? 'Bu hizmet hakkında bilgi almak ister misiniz?'
                : 'Would you like more information?'}
            </p>
            <p className="text-[var(--color-muted)] text-sm mb-6">
              {isTr
                ? 'Hemen arayın veya mesaj gönderin — en kısa sürede size ulaşalım.'
                : 'Call us or send a message — we will get back to you as soon as possible.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+905338449192"
                className="rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--color-primary-dark)] transition-colors"
              >
                {isTr ? '📞 Hemen Ara' : '📞 Call Now'}
              </a>
              <Link
                href={`/${lang}/contact`}
                className="rounded-full border border-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-[var(--color-primary)] hover:bg-[var(--color-primary-light)] transition-colors"
              >
                {isTr ? 'Mesaj Gönder' : 'Send a Message'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-12 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-lg font-bold text-[var(--color-text)] mb-6 text-center">
            {isTr ? 'Diğer Hizmetlerimiz' : 'Our Other Services'}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {services
              .filter((s) => s.key !== service.key)
              .map((s) => {
                const st = s[locale as 'tr' | 'en']
                return (
                  <Link
                    key={s.key}
                    href={`/${lang}/services/${s.slugs[locale as 'tr' | 'en']}`}
                    className="flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-sm text-[var(--color-text)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    <span aria-hidden="true">{s.icon}</span>
                    <span>{st.title}</span>
                  </Link>
                )
              })}
          </div>
        </div>
      </section>
    </div>
  )
}
