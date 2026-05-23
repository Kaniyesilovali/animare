import Image from 'next/image'
import type { Locale } from '@/app/[lang]/dictionaries'

const translations = {
  tr: {
    badge: 'Klinik Mağazamız',
    title: 'Evcil dostlarınız için',
    titleAccent: 'en iyi beslenme',
    subtitle: 'Kliniğimizde veteriner hekimlerimizin önerdiği premium N&D Farmina ürünlerini bulabilirsiniz.',
    cat: 'Kediler için N&D Premium',
    dog: 'Köpekler için N&D Ocean',
    note: 'Ürünler hakkında bilgi almak için',
    cta: 'kliniğimizi arayın',
  },
  en: {
    badge: 'Clinic Store',
    title: 'The best nutrition',
    titleAccent: 'for your companions',
    subtitle: 'Find premium N&D Farmina products recommended by our veterinarians at our clinic.',
    cat: 'N&D Premium for Cats',
    dog: 'N&D Ocean for Dogs',
    note: 'For more information about our products,',
    cta: 'call our clinic',
  },
}

export default function FeaturedProducts({ lang }: { lang: Locale }) {
  const t = translations[lang] ?? translations.tr

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-[var(--color-primary-light)] via-white to-[var(--color-accent-light)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block mb-3 rounded-full bg-white border border-[var(--color-primary)]/20 px-3 py-1 text-sm font-medium text-[var(--color-primary)]">
            {t.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)] leading-snug">
            {t.title}{' '}
            <span className="text-[var(--color-primary)]">{t.titleAccent}</span>
          </h2>
          <p className="mt-4 text-[var(--color-muted)] max-w-xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Cat card */}
          <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="aspect-[16/9] relative">
              <Image
                src="/animare veteriner.jpg"
                alt={t.cat}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="inline-block mb-2 rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white border border-white/30">
                N&D Farmina
              </span>
              <p className="text-white font-semibold text-lg">{t.cat}</p>
            </div>
          </div>

          {/* Dog card */}
          <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="aspect-[16/9] relative">
              <Image
                src="/veteriner nd-ocean-dog.jpg"
                alt={t.dog}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="inline-block mb-2 rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white border border-white/30">
                N&D Farmina
              </span>
              <p className="text-white font-semibold text-lg">{t.dog}</p>
            </div>
          </div>

        </div>

        {/* Bottom note */}
        <p className="mt-8 text-center text-sm text-[var(--color-muted)]">
          {t.note}{' '}
          <a href="tel:+905338449192" className="text-[var(--color-primary)] font-medium hover:underline">
            {t.cta}
          </a>
          .
        </p>

      </div>
    </section>
  )
}
