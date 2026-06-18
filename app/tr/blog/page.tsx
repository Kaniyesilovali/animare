import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/app/lib/blog'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Blog — Evcil Hayvan Sağlığı Rehberleri | Animare Veteriner',
  description:
    'Köpek ve kedi sağlığı, aşı takvimleri, beslenme ve mevsimsel bakım hakkında veteriner rehberleri. Animare Veteriner Kliniği, Gönyeli / Lefkoşa, KKTC.',
  alternates: {
    canonical: '/tr/blog',
    languages: { tr: '/tr/blog', en: '/en/blog', 'x-default': '/tr/blog' },
  },
}

export default function TrBlogPage() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://animare.vet/tr' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://animare.vet/tr/blog' },
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
            Evcil Hayvan{' '}
            <span className="text-[var(--color-accent)]">Sağlık Rehberleri</span>
          </h1>
          <p className="text-white/80 max-w-xl mx-auto text-sm sm:text-base">
            Veteriner hekimlerimizden köpek ve kedi sağlığı hakkında pratik bilgiler.
          </p>
        </div>
      </div>

      {/* Post list */}
      <section className="py-16 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => {
              const p = post.tr
              const slug = post.slug.tr
              return (
                <Link
                  key={slug}
                  href={`/tr/blog/${slug}`}
                  className="group flex flex-col rounded-2xl border border-[var(--color-border)] bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="bg-[var(--color-primary-light)] px-5 pt-5 pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl">{post.icon}</span>
                      <span className="text-xs font-medium text-[var(--color-primary)] bg-white rounded-full px-2.5 py-0.5">
                        {post.category.tr}
                      </span>
                    </div>
                    <h2 className="text-base font-bold text-[var(--color-text)] leading-snug group-hover:text-[var(--color-primary)] transition-colors">
                      {p.title}
                    </h2>
                  </div>
                  <div className="flex flex-col flex-1 px-5 py-4">
                    <p className="text-sm text-[var(--color-muted)] leading-relaxed flex-1">
                      {p.summary}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <time className="text-xs text-[var(--color-muted)]" dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('tr-TR', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </time>
                      <span className="text-xs font-semibold text-[var(--color-primary)] group-hover:underline">
                        Devamını oku →
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
