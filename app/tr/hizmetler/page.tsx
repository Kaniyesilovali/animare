import type { Metadata } from 'next'
import { getDictionary } from '@/app/[lang]/dictionaries'
import ServicesGrid from '@/components/sections/ServicesGrid'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Veteriner Hizmetleri Lefkoşa — Aşı, Cerrahi, Acil | Animare',
  description:
    'Köpek & kedi muayenesi, aşı takvimi, kısırlaştırma, diş taşı temizliği, dijital röntgen, ultrason, kan tahlili, pet kuaförü, beslenme danışmanlığı ve 7/24 acil veteriner — Gönyeli / Lefkoşa, KKTC.',
  keywords: [
    'veteriner muayene Lefkoşa', 'köpek aşı takvimi KKTC', 'kedi aşısı Gönyeli',
    'kısırlaştırma Lefkoşa', 'hayvan cerrahisi KKTC', 'diş taşı temizliği veteriner',
    'veteriner röntgen Lefkoşa', 'veteriner ultrason KKTC', 'kan tahlili hayvan',
    'pet kuaförü Lefkoşa', 'köpek tıraşı KKTC', 'beslenme danışmanlığı evcil hayvan',
    'acil veteriner Lefkoşa', '7/24 veteriner KKTC', 'veteriner laboratuvar Gönyeli',
  ],
  openGraph: {
    title: 'Veteriner Hizmetleri Lefkoşa — Aşı, Cerrahi, Acil | Animare',
    description: 'Animare Veteriner Kliniği tüm hizmetleri — Gönyeli / Lefkoşa, KKTC.',
    url: '/tr/hizmetler',
  },
  alternates: {
    canonical: '/tr/hizmetler',
    languages: { tr: '/tr/hizmetler', en: '/en/services' },
  },
}

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Animare Veteriner Kliniği Hizmetleri',
  url: 'https://animare.vet/tr/hizmetler',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Genel Muayene' },
    { '@type': 'ListItem', position: 2, name: 'Aşılama' },
    { '@type': 'ListItem', position: 3, name: 'Cerrahi' },
    { '@type': 'ListItem', position: 4, name: 'Diş Bakımı' },
    { '@type': 'ListItem', position: 5, name: 'Radyoloji' },
    { '@type': 'ListItem', position: 6, name: 'Laboratuvar' },
    { '@type': 'ListItem', position: 7, name: 'Pet Kuaförü' },
    { '@type': 'ListItem', position: 8, name: 'Beslenme Danışmanlığı' },
    { '@type': 'ListItem', position: 9, name: 'Acil Hizmet' },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://animare.vet/tr' },
    { '@type': 'ListItem', position: 2, name: 'Hizmetler', item: 'https://animare.vet/tr/hizmetler' },
  ],
}

export default async function TrHizmetlerPage() {
  const dict = await getDictionary('tr')

  return (
    <div>
      <JsonLd data={[servicesSchema, breadcrumbSchema]} />
      <div className="bg-[var(--color-primary)] py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <span className="inline-block mb-3 rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white">
            {dict.services.badge}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            {dict.services.title} <span className="text-[var(--color-accent)]">{dict.services.titleAccent}</span>
          </h1>
        </div>
      </div>
      <ServicesGrid lang="tr" dict={dict} />
    </div>
  )
}
