import type { Metadata } from 'next'
import { getDictionary } from '@/app/[lang]/dictionaries'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Veteriner Randevu Gönyeli & Lefkoşa | İletişim — Animare',
  description:
    'Animare Veteriner Kliniği iletişim bilgileri. Gönyeli / Lefkoşa, KKTC. ☎ +90 533 844 91 92 • Pzt–Cum 09:00–19:00, Cmt 09:00–15:00, Pazar acil.',
  keywords: [
    'veteriner randevu Lefkoşa', 'veteriner randevu Gönyeli', 'veteriner randevu KKTC',
    'online veteriner randevu', 'veteriner telefon Lefkoşa', 'köpek randevu veteriner',
    'kedi randevu veteriner', 'acil veteriner Lefkoşa telefon', 'Animare iletişim',
    'veteriner adres Gönyeli', 'Animare Veteriner telefon',
  ],
  openGraph: {
    title: 'Veteriner Randevu Gönyeli & Lefkoşa | İletişim — Animare',
    description: 'Animare Veteriner Kliniği iletişim bilgileri.',
    url: '/tr/iletisim',
  },
  alternates: {
    canonical: '/tr/iletisim',
    languages: { tr: '/tr/iletisim', en: '/en/contact' },
  },
}

export default async function TrIletisimPage() {
  const dict = await getDictionary('tr')
  const { contact } = dict

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://animare.vet/tr' },
      { '@type': 'ListItem', position: 2, name: contact.title, item: 'https://animare.vet/tr/iletisim' },
    ],
  }

  return (
    <div>
      <JsonLd data={breadcrumb} />
      {/* Hero */}
      <div className="bg-[var(--color-primary)] py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <span className="inline-block mb-3 rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white">
            {contact.badge}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            {contact.title} <span className="text-[var(--color-accent)]">{contact.titleAccent}</span>
          </h1>
        </div>
      </div>

      <section className="py-16 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6 shadow-sm">
              <h2 className="font-bold text-[var(--color-text)] mb-5">{contact.infoTitle}</h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-xl">📍</span>
                  <div>
                    <p className="text-xs font-medium text-[var(--color-muted)] uppercase tracking-wide mb-0.5">
                      {contact.address}
                    </p>
                    <p className="text-sm text-[var(--color-text)]">{contact.addressValue}</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-xl">📞</span>
                  <div>
                    <p className="text-xs font-medium text-[var(--color-muted)] uppercase tracking-wide mb-0.5">
                      {contact.phoneLabel}
                    </p>
                    <p className="text-sm text-[var(--color-text)]">{contact.phoneValue}</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-xl">✉️</span>
                  <div>
                    <p className="text-xs font-medium text-[var(--color-muted)] uppercase tracking-wide mb-0.5">
                      {contact.emailLabel}
                    </p>
                    <p className="text-sm text-[var(--color-text)]">{contact.emailValue}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6 shadow-sm">
              <h3 className="font-bold text-[var(--color-text)] mb-4">{contact.hours}</h3>
              <ul className="space-y-2 text-sm text-[var(--color-muted)]">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  {contact.hoursWeekday}
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-yellow-400" />
                  {contact.hoursSat}
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-red-500" />
                  {contact.hoursSun}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-16 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-sm" style={{ height: '380px' }}>
            <iframe
              src="https://maps.google.com/maps?q=35.214722,33.293000&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Animare Veteriner Kliniği Konumu"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
