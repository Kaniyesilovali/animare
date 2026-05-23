import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale, type Locale } from '../dictionaries'
import ServicesGrid from '@/components/sections/ServicesGrid'
import JsonLd from '@/components/JsonLd'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const isTr = lang === 'tr'
  const title = isTr
    ? 'Veteriner Hizmetleri Lefkoşa — Aşı, Cerrahi, Acil | Animare'
    : 'Veterinary Services Lefkoşa — Vaccination, Surgery, Emergency | Animare'
  const description = isTr
    ? 'Köpek & kedi muayenesi, aşı takvimi, kısırlaştırma, diş taşı temizliği, dijital röntgen, ultrason, kan tahlili, pet kuaförü, beslenme danışmanlığı ve 7/24 acil veteriner — Gönyeli / Lefkoşa, KKTC.'
    : 'Dog & cat check-up, vaccination schedule, neutering, dental scaling, digital X-ray, ultrasound, blood tests, pet grooming, nutrition consulting and 24/7 emergency vet — Gönyeli / Lefkoşa, North Cyprus.'
  return {
    title,
    description,
    keywords: isTr
      ? [
          'veteriner muayene Lefkoşa', 'köpek aşı takvimi KKTC', 'kedi aşısı Gönyeli',
          'kısırlaştırma Lefkoşa', 'hayvan cerrahisi KKTC', 'diş taşı temizliği veteriner',
          'veteriner röntgen Lefkoşa', 'veteriner ultrason KKTC', 'kan tahlili hayvan',
          'pet kuaförü Lefkoşa', 'köpek tıraşı KKTC', 'beslenme danışmanlığı evcil hayvan',
          'acil veteriner Lefkoşa', '7/24 veteriner KKTC', 'veteriner laboratuvar Gönyeli',
        ]
      : [
          'dog vaccination North Cyprus', 'cat spaying TRNC', 'pet surgery Lefkoşa',
          'animal dental care North Cyprus', 'digital X-ray vet', 'ultrasound vet TRNC',
          'blood test pet Lefkoşa', 'pet grooming North Cyprus', 'nutrition vet TRNC',
          'emergency vet Lefkoşa', '24/7 vet North Cyprus', 'vet lab Gönyeli',
        ],
    openGraph: { title, description, url: `/${lang}/services` },
    alternates: { canonical: `/${lang}/services` },
  }
}

const servicesSchema = (isTr: boolean) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: isTr ? 'Animare Veteriner Kliniği Hizmetleri' : 'Animare Veterinary Clinic Services',
  url: isTr ? 'https://animare.vet/tr/services' : 'https://animare.vet/en/services',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: isTr ? 'Genel Muayene' : 'General Check-up' },
    { '@type': 'ListItem', position: 2, name: isTr ? 'Aşılama' : 'Vaccination' },
    { '@type': 'ListItem', position: 3, name: isTr ? 'Cerrahi' : 'Surgery' },
    { '@type': 'ListItem', position: 4, name: isTr ? 'Diş Bakımı' : 'Dental Care' },
    { '@type': 'ListItem', position: 5, name: isTr ? 'Radyoloji' : 'Radiology' },
    { '@type': 'ListItem', position: 6, name: isTr ? 'Laboratuvar' : 'Laboratory' },
    { '@type': 'ListItem', position: 7, name: isTr ? 'Pet Kuaförü' : 'Pet Grooming' },
    { '@type': 'ListItem', position: 8, name: isTr ? 'Beslenme Danışmanlığı' : 'Nutrition Consulting' },
    { '@type': 'ListItem', position: 9, name: isTr ? 'Acil Hizmet' : 'Emergency Service' },
  ],
})

const breadcrumbSchema = (lang: string, isTr: boolean) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: isTr ? 'Ana Sayfa' : 'Home', item: `https://animare.vet/${lang}` },
    { '@type': 'ListItem', position: 2, name: isTr ? 'Hizmetler' : 'Services', item: `https://animare.vet/${lang}/services` },
  ],
})

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const dict = await getDictionary(lang as Locale)
  const isTr = lang === 'tr'

  return (
    <div>
      <JsonLd data={[servicesSchema(isTr), breadcrumbSchema(lang, isTr)]} />
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
      <ServicesGrid lang={lang as Locale} dict={dict} />
    </div>
  )
}
