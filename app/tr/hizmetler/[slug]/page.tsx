import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { getServiceBySlug, getAllServiceSlugs, services } from '@/app/lib/services'

export async function generateStaticParams() {
  return getAllServiceSlugs('tr').map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug, 'tr')
  if (!service) return {}
  const t = service.tr
  return {
    title: t.meta.title,
    description: t.meta.description,
    keywords: t.meta.keywords,
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      url: `/tr/hizmetler/${slug}`,
    },
    alternates: {
      canonical: `/tr/hizmetler/${slug}`,
      languages: {
        tr: `/tr/hizmetler/${service.slugs.tr}`,
        en: `/en/services/${service.slugs.en}`,
      },
    },
  }
}

export default async function TrHizmetDetayPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getServiceBySlug(slug, 'tr')
  if (!service) notFound()

  const t = service.tr
  const isNonMedical = service.key === 'grooming' || service.key === 'nutrition'

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://animare.vet/tr' },
      { '@type': 'ListItem', position: 2, name: 'Hizmetler', item: 'https://animare.vet/tr/hizmetler' },
      { '@type': 'ListItem', position: 3, name: t.title, item: `https://animare.vet/tr/hizmetler/${slug}` },
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

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  return (
    <div>
      <JsonLd data={[breadcrumb, serviceSchema, faqSchema]} />

      {/* Hero */}
      <div className="bg-[var(--color-primary)] py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <span className="inline-block mb-3 rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white">
            Hizmetler
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">{t.title}</h1>
        </div>
      </div>

      {/* Body */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl" aria-hidden="true">{service.icon}</span>
            <p className="text-[var(--color-muted)] text-sm">{t.desc}</p>
          </div>
          <p className="text-[var(--color-muted)] leading-relaxed text-lg mb-10">{t.body}</p>

          {/* Included items */}
          <div className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] p-6 mb-10">
            <h2 className="font-semibold text-[var(--color-text)] mb-4 text-lg">Neler dahil?</h2>
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

          {/* FAQ */}
          <div className="mb-10">
            <h2 className="font-semibold text-[var(--color-text)] mb-4 text-lg">Sık Sorulan Sorular</h2>
            <div className="space-y-3">
              {t.faqs.map(({ q, a }) => (
                <details
                  key={q}
                  className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] open:bg-white"
                >
                  <summary className="flex cursor-pointer items-center justify-between px-5 py-4 font-medium text-[var(--color-text)] list-none">
                    <span>{q}</span>
                    <span className="ml-4 flex-shrink-0 text-[var(--color-primary)] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="px-5 pb-4 text-sm leading-relaxed text-[var(--color-muted)]">{a}</p>
                </details>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-2xl bg-[var(--color-primary-light)] border border-[var(--color-primary)]/20 p-8 text-center">
            <p className="font-semibold text-[var(--color-text)] mb-2 text-lg">
              Bu hizmet hakkında bilgi almak ister misiniz?
            </p>
            <p className="text-[var(--color-muted)] text-sm mb-6">
              Hemen arayın veya mesaj gönderin — en kısa sürede size ulaşalım.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+905338449192"
                className="rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--color-primary-dark)] transition-colors"
              >
                📞 Hemen Ara
              </a>
              <Link
                href="/tr/iletisim"
                className="rounded-full border border-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-[var(--color-primary)] hover:bg-[var(--color-primary-light)] transition-colors"
              >
                Mesaj Gönder
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-12 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-lg font-bold text-[var(--color-text)] mb-6 text-center">
            Diğer Hizmetlerimiz
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {services
              .filter((s) => s.key !== service.key)
              .map((s) => (
                <Link
                  key={s.key}
                  href={`/tr/hizmetler/${s.slugs.tr}`}
                  className="flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-sm text-[var(--color-text)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
                >
                  <span aria-hidden="true">{s.icon}</span>
                  <span>{s.tr.title}</span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
