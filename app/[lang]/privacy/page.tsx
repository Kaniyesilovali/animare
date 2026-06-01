import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { hasLocale, type Locale } from '../dictionaries'
import Link from 'next/link'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const isTr = lang === 'tr'
  return {
    title: isTr ? 'Gizlilik Politikası & KVKK' : 'Privacy Policy & GDPR',
    description: isTr
      ? 'Animare Veteriner Kliniği gizlilik politikası ve KVKK aydınlatma metni. Kişisel verilerinizin nasıl işlendiğini öğrenin.'
      : 'Animare Veterinary Clinic privacy policy and GDPR information. Learn how your personal data is processed.',
    robots: { index: false, follow: false },
    alternates: {
      canonical: `/${lang}/privacy`,
      languages: { tr: '/tr/gizlilik', en: '/en/privacy' },
    },
  }
}

const content = {
  tr: {
    title: 'Gizlilik Politikası ve KVKK Aydınlatma Metni',
    updated: 'Son güncelleme: Mayıs 2026',
    back: 'Ana Sayfaya Dön',
    sections: [
      {
        heading: '1. Veri Sorumlusu',
        body: 'Kişisel verileriniz; Animare Veteriner Kliniği (ŞHT Hüseyin Amca Cad Mar 101 Dük : 1, Gönyeli / Lefkoşa) tarafından, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve Avrupa Birliği Genel Veri Koruma Tüzüğü (GDPR) kapsamında "veri sorumlusu" sıfatıyla işlenmektedir.',
      },
      {
        heading: '2. İşlenen Kişisel Veriler',
        body: 'İletişim formumuz aracılığıyla; adınız-soyadınız, telefon numaranız, e-posta adresiniz, seçtiğiniz hizmet ve iletmek istediğiniz mesaj bilgileri toplanmaktadır. Bu veriler yalnızca tarafınızca açıkça sağlandığında işlenmektedir.',
      },
      {
        heading: '3. İşleme Amaçları ve Hukuki Dayanaklar',
        body: 'Kişisel verileriniz; randevu talebinizin karşılanması, size geri dönüş sağlanması ve klinik hizmetlerimiz hakkında bilgilendirme yapılması amacıyla işlenmektedir. Hukuki dayanak: KVKK Madde 5/1 uyarınca ilgili kişinin açık rızası; GDPR Madde 6(1)(a) uyarınca açık rıza.',
      },
      {
        heading: '4. Veri Saklama Süresi',
        body: 'Kişisel verileriniz, iletişim talebinizin karşılanmasından itibaren en fazla 2 (iki) yıl süreyle saklanmaktadır. Yasal yükümlülüklerimiz gerektirdiği hallerde bu süre uzatılabilir.',
      },
      {
        heading: '5. Veri Güvenliği',
        body: 'Kişisel verilerinizin güvenliğini sağlamak amacıyla teknik ve idari tedbirler uygulanmaktadır. Verilerinize yetkisiz erişim, ifşa, değiştirme veya imha edilmesine karşı koruma sağlanmaktadır.',
      },
      {
        heading: '6. Üçüncü Taraflarla Paylaşım',
        body: 'Kişisel verileriniz; açık rızanız olmaksızın üçüncü taraflarla paylaşılmaz, satılmaz veya devredilmez. Yasal zorunluluklar kapsamında yetkili kamu kurumlarıyla paylaşım yapılabilir.',
      },
      {
        heading: '7. Haklarınız (KVKK Madde 11 ve GDPR Madde 15–21)',
        body: 'Kişisel verileriniz üzerinde aşağıdaki haklara sahipsiniz:\n• Kişisel verilerinize erişim talep etme\n• Yanlış veya eksik verilerin düzeltilmesini isteme\n• Verilerinizin silinmesini ("unutulma hakkı") talep etme\n• İşlemenin kısıtlanmasını talep etme\n• Verilerinizi taşınabilir biçimde alma\n• Verilerinizin işlenmesine itiraz etme\n• Onayınızı geri çekme (onay geri çekimi, geriye dönük işlemleri etkilemez)\n\nBu haklarınızı kullanmak için info@animare.vet adresine yazabilir veya +90 533 844 91 92 numaralı telefonu arayabilirsiniz.',
      },
      {
        heading: '8. Çerezler (Cookies)',
        body: 'Web sitemiz yalnızca sitenin temel işlevselliğini sağlamak için zorunlu çerezler kullanmaktadır. Analitik, reklam veya üçüncü taraf izleme çerezleri kullanılmamaktadır.',
      },
      {
        heading: '9. Değişiklikler',
        body: 'Bu politika zaman zaman güncellenebilir. Önemli değişiklikler bu sayfa üzerinden duyurulacaktır. Politikayı düzenli olarak incelemenizi tavsiye ederiz.',
      },
      {
        heading: '10. İletişim',
        body: 'Kişisel verilerinizle ilgili sorularınız için:\nE-posta: info@animare.vet\nTelefon: +90 533 844 91 92\nAdres: ŞHT Hüseyin Amca Cad Mar 101 Dük : 1, Gönyeli / Lefkoşa',
      },
    ],
  },
  en: {
    title: 'Privacy Policy & GDPR Information',
    updated: 'Last updated: May 2026',
    back: 'Back to Home',
    sections: [
      {
        heading: '1. Data Controller',
        body: 'Your personal data is processed by Animare Veterinary Clinic (ŞHT Hüseyin Amca Cad Mar 101 Dük : 1, Gönyeli / Lefkoşa) as the "data controller" within the scope of the EU General Data Protection Regulation (GDPR) and applicable Turkish data protection law (Law No. 6698).',
      },
      {
        heading: '2. Personal Data Collected',
        body: 'Through our contact form, we collect your full name, phone number, email address, selected service, and the message you wish to send. These data are processed only when explicitly provided by you.',
      },
      {
        heading: '3. Purposes and Legal Bases for Processing',
        body: 'Your personal data is processed to respond to your appointment request, provide follow-up communication, and inform you about our veterinary services. Legal basis: your explicit consent under GDPR Article 6(1)(a).',
      },
      {
        heading: '4. Data Retention',
        body: 'Your personal data is retained for a maximum of 2 (two) years after your inquiry has been addressed. This period may be extended where required by applicable legal obligations.',
      },
      {
        heading: '5. Data Security',
        body: 'We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, disclosure, alteration, or destruction.',
      },
      {
        heading: '6. Third-Party Sharing',
        body: 'Your personal data will not be shared, sold, or transferred to third parties without your explicit consent. Disclosure may occur where required by applicable law or competent authorities.',
      },
      {
        heading: '7. Your Rights (GDPR Articles 15–21)',
        body: 'You have the following rights regarding your personal data:\n• Right of access to your personal data\n• Right to rectification of inaccurate or incomplete data\n• Right to erasure ("right to be forgotten")\n• Right to restriction of processing\n• Right to data portability\n• Right to object to processing\n• Right to withdraw consent at any time (withdrawal does not affect prior processing)\n\nTo exercise these rights, please contact us at info@animare.vet or call +90 533 844 91 92.',
      },
      {
        heading: '8. Cookies',
        body: 'This website uses only strictly necessary cookies required for basic site functionality. No analytics, advertising, or third-party tracking cookies are used.',
      },
      {
        heading: '9. Changes to This Policy',
        body: 'This policy may be updated from time to time. Significant changes will be announced on this page. We recommend reviewing this policy periodically.',
      },
      {
        heading: '10. Contact',
        body: 'For any questions regarding your personal data:\nEmail: info@animare.vet\nPhone: +90 533 844 91 92\nAddress: ŞHT Hüseyin Amca Cad Mar 101 Dük : 1, Gönyeli / Lefkoşa',
      },
    ],
  },
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const c = content[lang as Locale]

  return (
    <div>
      <div className="bg-[var(--color-primary)] py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">{c.title}</h1>
          <p className="mt-2 text-white/70 text-sm">{c.updated}</p>
        </div>
      </div>

      <section className="py-14 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="bg-white rounded-2xl border border-[var(--color-border)] p-8 sm:p-10 shadow-sm space-y-8">
            {c.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="text-base font-bold text-[var(--color-text)] mb-2">{s.heading}</h2>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed whitespace-pre-line">
                  {s.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href={`/${lang}`}
              className="text-sm text-[var(--color-primary)] hover:underline"
            >
              ← {c.back}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
