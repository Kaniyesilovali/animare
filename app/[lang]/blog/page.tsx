import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { hasLocale, type Locale } from '../dictionaries'
import { blogPosts } from '@/app/lib/blog'
import { lp } from '@/app/lib/paths'
import JsonLd from '@/components/JsonLd'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const isTr = lang === 'tr'
  const title = isTr
    ? 'Blog — Evcil Hayvan Sağlığı Rehberleri | Animare Veteriner'
    : 'Blog — Pet Health Guides | Animare Veterinary'
  const description = isTr
    ? 'Köpek ve kedi sağlığı, aşı takvimleri, beslenme ve mevsimsel bakım hakkında veteriner rehberleri. Animare Veteriner Kliniği, Gönyeli / Lefkoşa, KKTC.'
    : 'Veterinary guides on dog and cat health, vaccination schedules, nutrition, and seasonal care. Animare Veterinary Clinic, Gönyeli / Lefkoşa, North Cyprus.'
  return {
    title,
    description,
    openGraph: { title, description, url: `/${lang}/blog` },
    alternates: {
      canonical: `/${lang}/blog`,
      languages: { tr: '/tr/blog', en: '/en/blog' },
    },
  }
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const locale = lang as Locale
  const isTr = locale === 'tr'

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: isTr ? 'Ana Sayfa' : 'Home', item: `https://animare.vet/${lang}` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `https://animare.vet/${lang}/blog` },
    ],
  }

  return (
    <div>
      <JsonLd data={[breadcrumb]} />

      {/* Hero */}
      <div className="bg-[var(--color-primary)] py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <span className="inline-block mb-3 rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white">
            Blog
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            {isTr ? 'Evcil Hayvan ' : 'Pet Health '}
            <span className="text-[var(--color-accent)]">
              {isTr ? 'Sağlık Rehberleri' : 'Guides'}
            </span>
          </h1>
          <p className="text-white/80 max-w-xl mx-auto text-sm sm:text-base">
            {isTr
              ? 'Veteriner hekimlerimizden köpek ve kedi sağlığı hakkında pratik bilgiler.'
              : 'Practical pet health advice from our veterinary team.'}
          </p>
        </div>
      </div>

      {/* Post list */}
      <section className="py-16 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => {
              const p = post[locale]
              const slug = post.slug[locale]
              return (
                <Link
                  key={slug}
                  href={`${lp(locale, 'blog')}/${slug}`}
                  className="group flex flex-col rounded-2xl border border-[var(--color-border)] bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Card header */}
                  <div className="bg-[var(--color-primary-light)] px-5 pt-5 pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl">{post.icon}</span>
                      <span className="text-xs font-medium text-[var(--color-primary)] bg-white rounded-full px-2.5 py-0.5">
                        {post.category[locale]}
                      </span>
                    </div>
                    <h2 className="text-base font-bold text-[var(--color-text)] leading-snug group-hover:text-[var(--color-primary)] transition-colors">
                      {p.title}
                    </h2>
                  </div>

                  {/* Card body */}
                  <div className="flex flex-col flex-1 px-5 py-4">
                    <p className="text-sm text-[var(--color-muted)] leading-relaxed flex-1">
                      {p.summary}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <time className="text-xs text-[var(--color-muted)]" dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString(isTr ? 'tr-TR' : 'en-GB', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </time>
                      <span className="text-xs font-semibold text-[var(--color-primary)] group-hover:underline">
                        {isTr ? 'Devamını oku →' : 'Read more →'}
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
