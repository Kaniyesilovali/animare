import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { hasLocale, type Locale } from '../../dictionaries'
import { getBlogPost, getAllBlogSlugs, blogPosts } from '@/app/lib/blog'
import { lp } from '@/app/lib/paths'
import JsonLd from '@/components/JsonLd'

export async function generateStaticParams() {
  return getAllBlogSlugs('en').map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}): Promise<Metadata> {
  const { lang, slug } = await params
  const locale = lang as 'tr' | 'en'
  const post = getBlogPost(slug, locale)
  if (!post) return {}
  const p = post[locale]
  const pairSlug = post.slug[locale === 'tr' ? 'en' : 'tr']
  return {
    title: p.meta.title,
    description: p.meta.description,
    keywords: p.meta.keywords,
    openGraph: {
      title: p.meta.title,
      description: p.meta.description,
      url: `/${lang}/blog/${slug}`,
    },
    alternates: {
      canonical: `/${lang}/blog/${slug}`,
      languages: {
        tr: `/tr/blog/${locale === 'tr' ? slug : pairSlug}`,
        en: `/en/blog/${locale === 'en' ? slug : pairSlug}`,
      },
    },
  }
}

function renderMarkdown(md: string) {
  const lines = md.split('\n')
  const elements: React.ReactNode[] = []
  let key = 0

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={key++} className="text-xl font-bold text-[var(--color-text)] mt-8 mb-3">
          {line.slice(3)}
        </h2>
      )
    } else if (line.startsWith('- ')) {
      const items: string[] = []
      while (i < lines.length && lines[i].startsWith('- ')) {
        items.push(lines[i].slice(2))
        i++
      }
      i--
      elements.push(
        <ul key={key++} className="list-disc list-inside space-y-1 text-[var(--color-muted)] text-sm mb-4">
          {items.map((item, j) => <li key={j}>{item}</li>)}
        </ul>
      )
    } else if (line.trim() === '') {
      // skip blank lines
    } else {
      // Inline bold and link handling
      const parts = line.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g)
      const nodes = parts.map((part, j) => {
        const bold = part.match(/^\*\*(.+)\*\*$/)
        if (bold) return <strong key={j}>{bold[1]}</strong>
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
        if (link) return <Link key={j} href={link[2]} className="text-[var(--color-primary)] underline hover:no-underline">{link[1]}</Link>
        return part
      })
      elements.push(
        <p key={key++} className="text-[var(--color-muted)] leading-relaxed mb-4 text-sm sm:text-base">
          {nodes}
        </p>
      )
    }
  }
  return elements
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}) {
  const { lang, slug } = await params
  if (!hasLocale(lang)) notFound()
  const locale = lang as Locale
  const isTr = locale === 'tr'

  const post = getBlogPost(slug, locale)
  if (!post) notFound()

  const p = post[locale]
  const pairSlug = post.slug[isTr ? 'en' : 'tr']

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: p.meta.title,
    description: p.meta.description,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: 'Animare Veteriner Kliniği',
      url: 'https://animare.vet',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Animare Veteriner Kliniği',
      url: 'https://animare.vet',
      logo: { '@type': 'ImageObject', url: 'https://animare.vet/AniMare.png' },
    },
    url: `https://animare.vet/${lang}/blog/${slug}`,
    inLanguage: isTr ? 'tr' : 'en',
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: isTr ? 'Ana Sayfa' : 'Home', item: `https://animare.vet/${lang}` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `https://animare.vet/${lang}/blog` },
      { '@type': 'ListItem', position: 3, name: p.title, item: `https://animare.vet/${lang}/blog/${slug}` },
    ],
  }

  const otherPosts = blogPosts.filter((bp) => bp.slug[locale] !== slug).slice(0, 2)

  return (
    <div>
      <JsonLd data={[articleSchema, breadcrumb]} />

      {/* Hero */}
      <div className="bg-[var(--color-primary)] py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Link
            href={lp(locale, 'blog')}
            className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm mb-4 transition-colors"
          >
            ← {isTr ? 'Tüm yazılar' : 'All posts'}
          </Link>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">{post.icon}</span>
            <span className="text-xs font-medium text-white/80 bg-white/20 rounded-full px-2.5 py-0.5">
              {post.category[locale]}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white leading-snug mb-3">
            {p.title}
          </h1>
          <div className="flex items-center gap-3">
            <time className="text-white/60 text-xs" dateTime={post.date}>
              {new Date(post.date).toLocaleDateString(isTr ? 'tr-TR' : 'en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </time>
            <span className="text-white/30">·</span>
            <span className="text-white/60 text-xs">Animare Veteriner</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="prose-sm sm:prose max-w-none">
            {renderMarkdown(p.body)}
          </div>

          {/* Lang switcher hint */}
          <div className="mt-10 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-4 flex items-center justify-between gap-4 flex-wrap">
            <span className="text-sm text-[var(--color-muted)]">
              {isTr ? 'Bu yazıyı İngilizce okuyun:' : 'Read this post in Turkish:'}
            </span>
            <Link
              href={`/${isTr ? 'en' : 'tr'}/blog/${pairSlug}`}
              className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
            >
              {isTr ? `Read in English →` : `Türkçe oku →`}
            </Link>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {otherPosts.length > 0 && (
        <section className="py-12 bg-[var(--color-surface)]">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="text-lg font-bold text-[var(--color-text)] mb-5">
              {isTr ? 'Diğer Yazılar' : 'More Articles'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {otherPosts.map((op) => {
                const op_ = op[locale]
                const opSlug = op.slug[locale]
                return (
                  <Link
                    key={opSlug}
                    href={`${lp(locale, 'blog')}/${opSlug}`}
                    className="group rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3 flex items-start gap-3 hover:shadow-sm transition-shadow"
                  >
                    <span className="text-xl mt-0.5">{op.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors leading-snug">
                        {op_.title}
                      </p>
                      <p className="text-xs text-[var(--color-muted)] mt-1 line-clamp-2">
                        {op_.summary}
                      </p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
