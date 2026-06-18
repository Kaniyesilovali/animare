import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Gizlilik Politikası & KVKK',
  description:
    'Animare Veteriner Kliniği gizlilik politikası ve KVKK aydınlatma metni. Kişisel verilerinizin nasıl işlendiğini öğrenin.',
  robots: { index: false, follow: false },
  alternates: {
    canonical: '/tr/gizlilik',
    languages: { tr: '/tr/gizlilik', en: '/en/privacy', 'x-default': '/tr/gizlilik' },
  },
}

const sections = [
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
]

export default function TrGizlilikPage() {
  return (
    <div>
      <div className="bg-[var(--color-primary)] py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Gizlilik Politikası ve KVKK Aydınlatma Metni
          </h1>
          <p className="mt-2 text-white/70 text-sm">Son güncelleme: Mayıs 2026</p>
        </div>
      </div>

      <section className="py-14 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="bg-white rounded-2xl border border-[var(--color-border)] p-8 sm:p-10 shadow-sm space-y-8">
            {sections.map((s) => (
              <div key={s.heading}>
                <h2 className="text-base font-bold text-[var(--color-text)] mb-2">{s.heading}</h2>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed whitespace-pre-line">
                  {s.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/tr" className="text-sm text-[var(--color-primary)] hover:underline">
              ← Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
