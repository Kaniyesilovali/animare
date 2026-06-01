import type { Metadata } from 'next'
import { getAllServiceSlugs } from '@/app/lib/services'

export function generateStaticParams() {
  return getAllServiceSlugs('tr').map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  return {
    robots: { index: false, follow: false },
    alternates: { canonical: `/tr/hizmetler/${slug}` },
  }
}

export default async function TrServiceSlugRedirect({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const target = `/tr/hizmetler/${slug}`
  return (
    <div>
      <script
        dangerouslySetInnerHTML={{ __html: `window.location.replace('${target}')` }}
      />
    </div>
  )
}
