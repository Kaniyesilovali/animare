import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { getDictionary, hasLocale, type Locale } from '../dictionaries'
import TeamCard from '@/components/ui/TeamCard'
import JsonLd from '@/components/JsonLd'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const isTr = lang === 'tr'
  const title = isTr
    ? 'Hakkımızda — Lefkoşa Veteriner Hekimleri | Animare'
    : 'About Us — Veterinarians in Lefkoşa, North Cyprus | Animare'
  const description = isTr
    ? '2026\'dan bu yana Gönyeli / Lefkoşa\'da güvenilir veteriner kliniği. Küçük hayvan cerrahisi uzmanı Dr. Gökay Yeşilovalı ve mikrobiyoloji uzmanı Dr. Hazel Tamakan Yeşilovalı ile tanışın.'
    : 'Trusted veterinary clinic in Gönyeli / Lefkoşa since 2026. Meet Dr. Gökay Yeşilovalı (small animal surgery) and Dr. Hazel Tamakan Yeşilovalı (microbiology) — our dedicated team.'
  return {
    title,
    description,
    keywords: isTr
      ? [
          'veteriner hekim Lefkoşa', 'Dr. Gökay Yeşilovalı', 'Dr. Hazel Tamakan Yeşilovalı',
          'küçük hayvan cerrahisi KKTC', 'veteriner mikrobiyoloji', 'Animare hikayesi',
          'güvenilir veteriner Gönyeli', 'deneyimli veteriner KKTC', 'veteriner klinik 2026',
          'hayvan doktoru Lefkoşa', 'evcil hayvan kliniği ekibi',
        ]
      : [
          'veterinarian Lefkoşa', 'Dr. Gökay Yeşilovalı', 'Dr. Hazel Tamakan Yeşilovalı',
          'small animal surgery North Cyprus', 'veterinary microbiology TRNC',
          'trusted vet Gönyeli', 'experienced vet North Cyprus', 'animal clinic since 2026',
        ],
    openGraph: { title, description, url: `/${lang}/about` },
    alternates: {
      canonical: `/${lang}/about`,
      languages: { tr: '/tr/hakkimizda', en: '/en/about' },
    },
  }
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const dict = await getDictionary(lang as Locale)
  const { about } = dict

  const members = [
    { key: 'vet1', initials: 'GY' },
    { key: 'vet2', initials: 'HY' },
  ] as const

  const values = [
    { key: 'v1', icon: '💙' },
    { key: 'v2', icon: '🎓' },
    { key: 'v3', icon: '🤝' },
  ] as const

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: lang === 'tr' ? 'Ana Sayfa' : 'Home', item: `https://animare.vet/${lang}` },
      { '@type': 'ListItem', position: 2, name: about.badge, item: `https://animare.vet/${lang}/about` },
    ],
  }

  const team = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://animare.vet/#organization',
    member: [
      {
        '@type': 'Person',
        name: about.members.vet1.name,
        jobTitle: about.members.vet1.role,
        worksFor: { '@id': 'https://animare.vet/#organization' },
      },
      {
        '@type': 'Person',
        name: about.members.vet2.name,
        jobTitle: about.members.vet2.role,
        worksFor: { '@id': 'https://animare.vet/#organization' },
      },
    ],
  }

  return (
    <div>
      <JsonLd data={[breadcrumb, team]} />
      {/* Hero */}
      <div className="bg-[var(--color-primary)] py-14">
<div className="relative mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <span className="inline-block mb-3 rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white">
            {about.badge}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            {about.title} <span className="text-[var(--color-accent)]">{about.titleAccent}</span>
          </h1>
        </div>
      </div>

      {/* Story */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Story text - left */}
            <div>
              <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">{about.storyTitle}</h2>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">{about.text}</p>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">{about.text2}</p>
              <p className="text-[var(--color-muted)] leading-relaxed">{about.storyText}</p>
            </div>
            {/* Image - right */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/animare veteriner kilinigi iletisim.jpg.jpeg"
                alt="Animare Veteriner Kliniği hikayemiz"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-8 text-center">
            {about.valuesTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {values.map(({ key, icon }) => (
              <div
                key={key}
                className="rounded-2xl border border-[var(--color-border)] bg-white p-6 text-center"
              >
                <div className="text-4xl mb-3">{icon}</div>
                <h3 className="font-semibold text-[var(--color-text)] mb-2">
                  {about.values[key].title}
                </h3>
                <p className="text-sm text-[var(--color-muted)]">{about.values[key].desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[var(--color-text)]">{about.teamTitle}</h2>
            <p className="text-[var(--color-muted)] mt-2">{about.teamSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {members.map(({ key, initials }) => (
              <TeamCard
                key={key}
                name={about.members[key].name}
                role={about.members[key].role}
                bio={about.members[key].bio}
                initials={initials}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
