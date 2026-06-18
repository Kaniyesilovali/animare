import { notFound } from 'next/navigation'
import { getDictionary, hasLocale, type Locale } from './dictionaries'
import Hero from '@/components/sections/Hero'
import ServicesGrid from '@/components/sections/ServicesGrid'
import AboutPreview from '@/components/sections/AboutPreview'
import FeaturedProducts from '@/components/sections/FeaturedProducts'
import JsonLd from '@/components/JsonLd'

const vetClinicSchema = {
  '@context': 'https://schema.org',
  '@type': ['VeterinaryCare', 'LocalBusiness'],
  '@id': 'https://animare.vet/#organization',
  name: 'Animare Veteriner Kliniği',
  alternateName: 'Animare Veterinary Clinic',
  description:
    "Gönyeli / Lefkoşa, Kuzey Kıbrıs'ta (KKTC) profesyonel veteriner hizmetleri. Genel muayene, aşılama, cerrahi, diş bakımı, radyoloji ve 7/24 acil.",
  url: 'https://animare.vet',
  logo: 'https://animare.vet/animare_veteriner_logo.png',
  image: 'https://animare.vet/animare_veteriner_logo.png',
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
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '35.2154',
    longitude: '33.3361',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '15:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '00:00',
      closes: '00:00',
    },
  ],
  medicalSpecialty: [
    'Small Animal Surgery',
    'Vaccination',
    'Dental Care',
    'Radiology',
    'Laboratory Diagnostics',
    'Emergency Veterinary Care',
    'Pet Grooming',
    'Nutrition Consulting',
  ],
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
  sameAs: [
    'https://www.instagram.com/animare.vet/',
    'https://www.facebook.com/animare.vet',
  ],
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const dict = await getDictionary(lang as Locale)

  return (
    <>
      <JsonLd data={vetClinicSchema} />
      <Hero lang={lang as Locale} dict={dict} />
      <ServicesGrid lang={lang as Locale} dict={dict} />
      <FeaturedProducts lang={lang as Locale} />
      <AboutPreview lang={lang as Locale} dict={dict} />
    </>
  )
}
