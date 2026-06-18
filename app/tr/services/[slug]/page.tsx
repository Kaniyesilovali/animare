import { permanentRedirect } from 'next/navigation'
import { getAllServiceSlugs } from '@/app/lib/services'

export function generateStaticParams() {
  return getAllServiceSlugs('tr').map((slug) => ({ slug }))
}

export default async function TrServiceSlugRedirect({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  permanentRedirect(`/tr/hizmetler/${slug}`)
}
