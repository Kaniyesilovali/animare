import type { Metadata } from 'next'
import { getDictionary } from '@/app/[lang]/dictionaries'
import Hero from '@/components/sections/Hero'
import ServicesGrid from '@/components/sections/ServicesGrid'
import AboutPreview from '@/components/sections/AboutPreview'
import FeaturedProducts from '@/components/sections/FeaturedProducts'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: {
    absolute: 'Veteriner Kliniği Gönyeli, Lefkoşa | Köpek & Kedi Doktoru — Animare',
  },
  description:
    'Animare Veteriner Kliniği — Gönyeli / Lefkoşa, KKTC. Köpek, kedi, tavşan ve küçük hayvan muayenesi, aşılama, cerrahi, diş bakımı, röntgen, laboratuvar. 7/24 acil veteriner. Hemen randevu alın.',
  keywords: [
    'veteriner Gönyeli', 'veteriner Lefkoşa', 'veteriner KKTC', 'veteriner Kuzey Kıbrıs',
    'hayvan hastanesi Lefkoşa', 'evcil hayvan kliniği KKTC', 'veteriner hekim Gönyeli',
    'köpek doktoru Lefkoşa', 'kedi doktoru Lefkoşa', 'köpek veteriner KKTC',
    'kedi veteriner KKTC', 'tavşan veteriner', 'küçük hayvan kliniği',
    'köpek aşısı Lefkoşa', 'kedi aşısı KKTC', 'kısırlaştırma Gönyeli',
    'hayvan diş bakımı', 'veteriner röntgen ultrason', 'pet kuaförü Lefkoşa',
    'acil veteriner Lefkoşa', '7/24 veteriner', 'veteriner randevu Gönyeli',
    'yakın veteriner Lefkoşa', 'en iyi veteriner KKTC',
    'Animare', 'Animare Veteriner',
  ],
  openGraph: {
    title: 'Veteriner Kliniği Gönyeli, Lefkoşa | Köpek & Kedi Doktoru — Animare',
    description: 'Animare Veteriner Kliniği — Gönyeli / Lefkoşa, KKTC.',
    url: '/tr',
    siteName: 'Animare Veteriner Kliniği',
    images: [{ url: '/animare_veteriner_kilinik_iletisim.jpg', width: 1200, height: 630, alt: 'Animare Veteriner Kliniği' }],
    locale: 'tr_TR',
    type: 'website',
  },
  alternates: {
    canonical: '/tr',
    languages: { tr: '/tr', en: '/en' },
  },
  robots: { index: true, follow: true },
}

const vetClinicSchema = {
  '@context': 'https://schema.org',
  '@type': ['VeterinaryCare', 'LocalBusiness'],
  '@id': 'https://animare.vet/#organization',
  name: 'Animare Veteriner Kliniği',
  alternateName: 'Animare Veterinary Clinic',
  description:
    "Gönyeli / Lefkoşa, Kuzey Kıbrıs'ta (KKTC) profesyonel veteriner hizmetleri. Genel muayene, aşılama, cerrahi, diş bakımı, radyoloji ve 7/24 acil.",
  url: 'https://animare.vet',
  logo: 'https://animare.vet/logo.jpg',
  image: 'https://animare.vet/logo.jpg',
  telephone: '+905338449192',
  email: 'info@animare.vet',
  foundingDate: '2026',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ŞHT Hüseyin Amca Cad Mar 101 Dük : 1',
    addressLocality: 'Gönyeli',
    addressRegion: 'Lefkoşa, Kuzey Kıbrıs / North Cyprus (TRNC)',
    addressCountry: 'CY',
  },
  geo: { '@type': 'GeoCoordinates', latitude: '35.2154', longitude: '33.3361' },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '19:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '15:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '00:00', closes: '00:00' },
  ],
  medicalSpecialty: ['Small Animal Surgery', 'Vaccination', 'Dental Care', 'Radiology', 'Laboratory Diagnostics', 'Emergency Veterinary Care', 'Pet Grooming', 'Nutrition Consulting'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Veteriner Hizmetleri',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'MedicalProcedure', name: 'Genel Muayene' } },
      { '@type': 'Offer', itemOffered: { '@type': 'MedicalProcedure', name: 'Aşılama' } },
      { '@type': 'Offer', itemOffered: { '@type': 'MedicalProcedure', name: 'Cerrahi' } },
      { '@type': 'Offer', itemOffered: { '@type': 'MedicalProcedure', name: 'Diş Bakımı' } },
      { '@type': 'Offer', itemOffered: { '@type': 'MedicalProcedure', name: 'Radyoloji' } },
      { '@type': 'Offer', itemOffered: { '@type': 'MedicalProcedure', name: 'Laboratuvar' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pet Kuaförü' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Beslenme Danışmanlığı' } },
      { '@type': 'Offer', itemOffered: { '@type': 'MedicalProcedure', name: 'Acil Hizmet' } },
    ],
  },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '47', bestRating: '5', worstRating: '1' },
  sameAs: ['https://animare.vet', 'https://www.instagram.com/animare.vet/', 'https://www.facebook.com/animare.vet'],
}

export default async function TrHomePage() {
  const dict = await getDictionary('tr')

  return (
    <>
      <JsonLd data={vetClinicSchema} />
      <Hero lang="tr" dict={dict} />
      <ServicesGrid lang="tr" dict={dict} />
      <FeaturedProducts lang="tr" />
      <AboutPreview lang="tr" dict={dict} />
    </>
  )
}
