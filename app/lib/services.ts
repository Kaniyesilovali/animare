export type ServiceKey =
  | 'exam'
  | 'vaccine'
  | 'surgery'
  | 'dental'
  | 'radiology'
  | 'emergency'
  | 'lab'
  | 'grooming'
  | 'nutrition'

export type ServiceLang = {
  title: string
  desc: string
  meta: { title: string; description: string; keywords: string[] }
  body: string
  bullets: string[]
  faqs: { q: string; a: string }[]
}

export type ServiceData = {
  key: ServiceKey
  icon: string
  slugs: { tr: string; en: string }
  tr: ServiceLang
  en: ServiceLang
}

export const services: ServiceData[] = [
  {
    key: 'exam',
    icon: '🩺',
    slugs: { tr: 'genel-muayene', en: 'general-checkup' },
    tr: {
      title: 'Genel Muayene',
      desc: 'Kapsamlı sağlık taraması ve fiziksel muayene ile erken teşhis.',
      meta: {
        title: 'Genel Muayene Lefkoşa — Köpek & Kedi Sağlık Taraması | Animare',
        description:
          "Gönyeli / Lefkoşa'da köpek ve kedi için kapsamlı genel muayene. Erken teşhis, fiziksel muayene, aşı takibi ve beslenme önerisi. Animare Veteriner Kliniği, KKTC.",
        keywords: [
          'genel muayene veteriner Lefkoşa',
          'köpek muayenesi KKTC',
          'kedi sağlık kontrolü Gönyeli',
          'evcil hayvan check-up KKTC',
          'erken teşhis veteriner',
        ],
      },
      body: 'Genel muayene, evcil hayvanınızın genel sağlık durumunu değerlendirmek için yapılan sistematik fiziksel incelemedir. Düzenli kontrol randevuları, pek çok hastalığı erken evrede tespit ederek tedavi sürecini kolaylaştırır. Veteriner hekimimiz kalp, akciğer, eklemler, deri, göz, kulak ve diş yapısını kapsamlı biçimde inceler; gerekli durumlarda kan tahlili veya radyoloji hizmetlerimize yönlendirir.',
      bullets: [
        'Sistematik fiziksel muayene',
        'Erken hastalık tespiti',
        'Aşı ve bakım takvimi planlaması',
        'Beslenme ve yaşam tarzı önerileri',
        'Sonuçların sahiple detaylı paylaşımı',
      ],
      faqs: [
        {
          q: 'Evcil hayvanımı ne sıklıkla muayeneye getirmeliyim?',
          a: 'Sağlıklı yetişkin hayvanlar için yılda bir, yaşlı ya da kronik hastalığı olanlar için 6 ayda bir muayene önerilir. Yavru köpek ve kediler ilk yıllarında daha sık kontrole ihtiyaç duyar.',
        },
        {
          q: 'Genel muayene neleri kapsar?',
          a: 'Kalp, akciğer, eklemler, deri, göz, kulak ve dişlerin kapsamlı fiziksel muayenesini kapsar. Gerekirse kan tahlili veya radyoloji hizmetlerine yönlendirilirsiniz.',
        },
        {
          q: 'Randevu almam gerekiyor mu?',
          a: 'Evet. +90 533 844 91 92 numaralı hattı arayarak veya iletişim sayfamızdan uygun bir saatte randevu alabilirsiniz.',
        },
      ],
    },
    en: {
      title: 'General Check-up',
      desc: 'Comprehensive health screening and physical examination for early diagnosis.',
      meta: {
        title: 'General Check-up Lefkoşa — Dog & Cat Health Screening | Animare',
        description:
          'Comprehensive dog and cat check-up in Gönyeli / Lefkoşa. Early diagnosis, physical examination, vaccination scheduling, and nutrition advice. Animare Veterinary Clinic, North Cyprus.',
        keywords: [
          'general checkup vet Lefkoşa',
          'dog examination North Cyprus',
          'cat health check TRNC',
          'pet check-up North Cyprus',
          'early diagnosis vet',
        ],
      },
      body: "A general check-up is a systematic physical examination to assess your pet's overall health. Regular appointments help detect many conditions at an early stage, making treatment simpler and more effective. Our veterinarian comprehensively examines the heart, lungs, joints, skin, eyes, ears, and teeth, and refers to blood tests or radiology when needed.",
      bullets: [
        'Systematic physical examination',
        'Early disease detection',
        'Vaccination and care scheduling',
        'Nutrition and lifestyle advice',
        'Detailed results shared with owner',
      ],
      faqs: [
        {
          q: 'How often should I bring my pet for a check-up?',
          a: 'Annual check-ups for healthy adults, every 6 months for seniors or pets with ongoing conditions. Puppies and kittens need more frequent visits in their first year.',
        },
        {
          q: 'What does a general check-up include?',
          a: 'A comprehensive physical examination of the heart, lungs, joints, skin, eyes, ears, and teeth. Blood tests or radiology are arranged where needed.',
        },
        {
          q: 'Do I need an appointment?',
          a: 'Yes. Call us on +90 533 844 91 92 or use our contact page to book at a convenient time.',
        },
      ],
    },
  },
  {
    key: 'vaccine',
    icon: '💉',
    slugs: { tr: 'asilama', en: 'vaccination' },
    tr: {
      title: 'Aşılama',
      desc: 'Eksiksiz aşı programları ile dostunuzu hastalıklardan koruyun.',
      meta: {
        title: 'Köpek & Kedi Aşısı Lefkoşa — Aşı Takvimi KKTC | Animare',
        description:
          "Gönyeli / Lefkoşa'da köpek ve kedi aşı hizmetleri. Karma aşı, kuduz, parvovirus ve yıllık hatırlatma. Animare Veteriner Kliniği — KKTC'nin güvenilir aşı merkezi.",
        keywords: [
          'köpek aşısı Lefkoşa',
          'kedi aşısı KKTC',
          'aşı takvimi veteriner',
          'kuduz aşısı Gönyeli',
          'parvovirus aşısı KKTC',
          'karma aşı köpek',
        ],
      },
      body: 'Düzenli aşılama, evcil hayvanınızı ölümcül ve bulaşıcı hastalıklardan korumanın en etkili yoludur. Kliniğimizde köpek ve kediler için tüm temel ve destekleyici aşılar uygulanmakta; hayvanınızın yaşına, yaşam koşullarına ve sağlık geçmişine göre kişiselleştirilmiş bir aşı takvimi hazırlanmaktadır. Her aşı uygulaması sonrası aşı kartı güncellenir.',
      bullets: [
        'Köpek karma aşısı (DHPPi + L)',
        'Kedi karma aşısı (FVRCP + FeLV)',
        'Kuduz aşısı',
        'Parvovirus ve distemper koruması',
        'Yıllık hatırlatma takibi',
      ],
      faqs: [
        {
          q: 'Köpeğim veya kedim ne zaman aşılanmalı?',
          a: 'Yavru hayvanlar 6–8 haftalıktan itibaren aşı programına başlamalıdır. Yetişkin hayvanlarda yıllık hatırlatma aşıları bağışıklığı korur.',
        },
        {
          q: 'Hangi aşılar zorunlu?',
          a: 'Köpekler için karma aşı (DHPPi+L) ve kuduz, kediler için FVRCP ve FeLV temel aşı programını oluşturur.',
        },
        {
          q: 'Aşı sonrası yan etki olur mu?',
          a: 'Hafif ağrı veya geçici yorgunluk normaldir. Şiddetli bir reaksiyon gözlemlerseniz derhal kliniğimizi arayın.',
        },
      ],
    },
    en: {
      title: 'Vaccination',
      desc: 'Complete vaccination programmes to protect your pet from diseases.',
      meta: {
        title: 'Dog & Cat Vaccination Lefkoşa — Vaccine Schedule North Cyprus | Animare',
        description:
          'Dog and cat vaccination services in Gönyeli / Lefkoşa. Core vaccines, rabies, parvovirus, and annual boosters. Animare Veterinary Clinic — trusted vaccination centre in North Cyprus.',
        keywords: [
          'dog vaccination Lefkoşa',
          'cat vaccine North Cyprus',
          'vaccination schedule vet TRNC',
          'rabies vaccine Gönyeli',
          'parvovirus vaccine TRNC',
        ],
      },
      body: "Regular vaccination is the most effective way to protect your pet from deadly and contagious diseases. Our clinic offers all core and supplementary vaccines for dogs and cats, with a personalised schedule based on your pet's age, lifestyle, and health history. Vaccination cards are updated after every appointment.",
      bullets: [
        'Dog core vaccine (DHPPi + L)',
        'Cat core vaccine (FVRCP + FeLV)',
        'Rabies vaccine',
        'Parvovirus and distemper protection',
        'Annual booster tracking',
      ],
      faqs: [
        {
          q: 'When should I vaccinate my puppy or kitten?',
          a: 'Vaccination programmes typically begin at 6–8 weeks of age. Adult pets receive annual booster doses to maintain immunity.',
        },
        {
          q: 'Which vaccines are essential?',
          a: 'Core vaccines for dogs include DHPPi+L and rabies; for cats, FVRCP and FeLV form the core programme.',
        },
        {
          q: 'Are there side effects after vaccination?',
          a: 'Mild soreness or temporary lethargy is normal. If you notice a severe reaction, contact our clinic immediately.',
        },
      ],
    },
  },
  {
    key: 'surgery',
    icon: '🔬',
    slugs: { tr: 'cerrahi', en: 'surgery' },
    tr: {
      title: 'Cerrahi',
      desc: 'Modern cerrahi ekipmanla gerçekleştirilen güvenli operasyonlar.',
      meta: {
        title: 'Veteriner Cerrahi Lefkoşa — Kısırlaştırma & Operasyon KKTC | Animare',
        description:
          "Gönyeli / Lefkoşa'da küçük hayvan cerrahisi. Kısırlaştırma, yumuşak doku cerrahisi ve ortopedik operasyonlar. Uzman cerrah Dr. Gökay Yeşilovalı — Animare Veteriner Kliniği, KKTC.",
        keywords: [
          'veteriner cerrah Lefkoşa',
          'kısırlaştırma KKTC',
          'köpek operasyonu Gönyeli',
          'kedi kısırlaştırma Lefkoşa',
          'küçük hayvan cerrahisi KKTC',
        ],
      },
      body: 'Kliniğimizde küçük hayvan cerrahisi alanında uzmanlaşmış Dr. Gökay Yeşilovalı tarafından yürütülen cerrahi hizmetler sunulmaktadır. Operasyon öncesi anestezi protokolü ve vital bulgular dikkatle izlenir; operasyon sonrası ağrı yönetimi ve iyileşme sürecine özel bakım planı oluşturulur.',
      bullets: [
        'Kısırlaştırma (kastrasyon / ovaryohisterektomi)',
        'Yumuşak doku cerrahisi',
        'Yabancı cisim çıkarma',
        'Tümör eksizyonu',
        'Operasyon sonrası takip',
      ],
      faqs: [
        {
          q: 'Kısırlaştırma için en uygun yaş nedir?',
          a: 'Köpek ve kediler için genellikle 5–6 aylıktan itibaren kısırlaştırma yapılabilir. Kesin zamanlama ırka ve sağlık durumuna göre belirlenir.',
        },
        {
          q: 'Operasyon öncesinde ne yapmalıyım?',
          a: 'Operasyondan en az 8 saat önce yiyecek ve su verilmemesi gerekir. Tüm hazırlık talimatları ameliyat randevusu sırasında detaylı olarak aktarılır.',
        },
        {
          q: 'İyileşme süreci ne kadar sürer?',
          a: 'Rutin kısırlaştırma için genellikle 7–10 gün yeterlidir. Daha kapsamlı operasyonlarda süre uzayabilir; her hasta için takip randevusu planlanır.',
        },
      ],
    },
    en: {
      title: 'Surgery',
      desc: 'Safe surgical procedures performed with modern equipment.',
      meta: {
        title: 'Veterinary Surgery Lefkoşa — Neutering & Operations North Cyprus | Animare',
        description:
          'Small animal surgery in Gönyeli / Lefkoşa. Neutering, soft tissue surgery, and orthopaedic procedures. Specialist surgeon Dr. Gökay Yeşilovalı — Animare Veterinary Clinic, North Cyprus.',
        keywords: [
          'vet surgeon Lefkoşa',
          'neutering North Cyprus',
          'dog surgery Gönyeli',
          'cat spaying TRNC',
          'small animal surgery North Cyprus',
        ],
      },
      body: "Our surgical services are led by Dr. Gökay Yeşilovalı, a specialist in small animal surgery. Pre-operative anaesthesia protocols and vital signs are carefully monitored; a personalised post-operative pain management and recovery plan is prepared for every patient.",
      bullets: [
        'Neutering (castration / ovariohysterectomy)',
        'Soft tissue surgery',
        'Foreign body removal',
        'Tumour excision',
        'Post-operative follow-up',
      ],
      faqs: [
        {
          q: 'What is the best age for neutering?',
          a: 'Neutering is typically performed from 5–6 months of age for dogs and cats. The exact timing depends on breed and health status.',
        },
        {
          q: 'How should I prepare my pet for surgery?',
          a: 'Food and water must be withheld for at least 8 hours before the operation. Full pre-operative instructions are provided at the time of booking.',
        },
        {
          q: 'How long is the recovery period?',
          a: 'Routine neutering usually requires 7–10 days. More complex procedures may take longer; a follow-up appointment is scheduled for every patient.',
        },
      ],
    },
  },
  {
    key: 'dental',
    icon: '🦷',
    slugs: { tr: 'dis-bakimi', en: 'dental-care' },
    tr: {
      title: 'Diş Bakımı',
      desc: 'Diş taşı temizliği ve ağız sağlığı kontrolleri.',
      meta: {
        title: 'Veteriner Diş Bakımı Lefkoşa — Diş Taşı Temizliği KKTC | Animare',
        description:
          "Köpek ve kedi diş taşı temizliği, ağız sağlığı muayenesi ve diş çekimi — Gönyeli / Lefkoşa, KKTC. Animare Veteriner Kliniği'nde profesyonel dental bakım.",
        keywords: [
          'veteriner diş bakımı Lefkoşa',
          'diş taşı temizliği köpek KKTC',
          'kedi diş bakımı Gönyeli',
          'hayvan dental sağlık',
          'veteriner diş çekimi KKTC',
        ],
      },
      body: 'Ağız sağlığı, evcil hayvanınızın genel sağlığıyla doğrudan ilişkilidir. Tedavi edilmeyen diş taşı ve diş eti iltihabı kalp, böbrek ve karaciğer sorunlarına yol açabilir. Kliniğimizde ultrasonik diş taşı temizliği, ağız içi muayene ve gerektiğinde diş çekimi hizmetleri sunulmaktadır.',
      bullets: [
        'Ultrasonik diş taşı temizliği',
        'Diş eti sağlığı değerlendirmesi',
        'Diş çekimi (gerektiren durumlarda)',
        'Ev bakımı için öneriler',
      ],
      faqs: [
        {
          q: 'Evcil hayvanımın dişlerini ne sıklıkla temizletmeliyim?',
          a: 'Yılda en az bir kez profesyonel diş temizliği önerilir. Diş taşı eğilimi yüksek ırklarda bu sıklık artabilir.',
        },
        {
          q: 'Diş taşı temizliği anestezi gerektiriyor mu?',
          a: 'Evet, hayvanın stressiz ve hareketsiz kalması için kısa süreli anestezi uygulanır. Bu işlem klinik ortamında güvenle gerçekleştirilir.',
        },
        {
          q: 'Evde diş bakımı için ne yapabilirim?',
          a: 'Veteriner hekimimiz size özel diş fırçası ve macun önerecektir. Düzenli ev bakımı profesyonel temizlik sıklığını önemli ölçüde azaltır.',
        },
      ],
    },
    en: {
      title: 'Dental Care',
      desc: 'Tartar cleaning and oral health check-ups.',
      meta: {
        title: 'Veterinary Dental Care Lefkoşa — Tartar Cleaning North Cyprus | Animare',
        description:
          'Dog and cat tartar cleaning, oral health examination, and tooth extraction in Gönyeli / Lefkoşa, TRNC. Professional dental care at Animare Veterinary Clinic.',
        keywords: [
          'vet dental care Lefkoşa',
          'dog tartar cleaning North Cyprus',
          'cat dental health TRNC',
          'pet oral health',
          'vet tooth extraction North Cyprus',
        ],
      },
      body: "Oral health is directly linked to your pet's overall wellbeing. Untreated tartar and gum disease can lead to heart, kidney, and liver problems. Our clinic offers ultrasonic tartar cleaning, intra-oral examination, and tooth extraction where necessary.",
      bullets: [
        'Ultrasonic tartar cleaning',
        'Gum health assessment',
        'Tooth extraction (where required)',
        'Home care recommendations',
      ],
      faqs: [
        {
          q: 'How often should my pet have dental cleaning?',
          a: 'Professional cleaning at least once a year is recommended. Breeds prone to tartar build-up may benefit from more frequent appointments.',
        },
        {
          q: 'Does dental cleaning require anaesthesia?',
          a: 'Yes, a short-acting anaesthetic is used so the procedure is stress-free and safe. It is performed under full clinical supervision.',
        },
        {
          q: 'What can I do at home?',
          a: 'Our vet will recommend a suitable pet toothbrush and paste. Regular home brushing significantly reduces the rate of tartar accumulation.',
        },
      ],
    },
  },
  {
    key: 'radiology',
    icon: '📡',
    slugs: { tr: 'radyoloji', en: 'radiology' },
    tr: {
      title: 'Radyoloji',
      desc: 'Dijital röntgen ve ultrason ile hızlı ve doğru tanı.',
      meta: {
        title: 'Veteriner Radyoloji Lefkoşa — Röntgen & Ultrason KKTC | Animare',
        description:
          "Gönyeli / Lefkoşa'da dijital röntgen ve ultrasonografi hizmetleri. Kemik kırıkları, organ görüntüleme ve gebelik kontrolü. Animare Veteriner Kliniği, KKTC.",
        keywords: [
          'veteriner röntgen Lefkoşa',
          'hayvan ultrason KKTC',
          'dijital röntgen veteriner Gönyeli',
          'köpek ultrasonografi KKTC',
          'kedi röntgen Lefkoşa',
        ],
      },
      body: 'Dijital radyoloji hizmetlerimiz ile kemik kırıkları, organ büyüklükleri, tümörler ve gebelik durumu hızla değerlendirilebilir. Ultrasonografi özellikle karın organlarının incelenmesinde, yabancı cisim tespitinde ve hamilelik takibinde kritik öneme sahiptir. Tüm görüntüler dijital ortamda saklanır ve gerektiğinde uzman görüşüne iletilebilir.',
      bullets: [
        'Dijital röntgen (tüm vücut bölgeleri)',
        'Abdominal ultrasonografi',
        'Gebelik takibi',
        'Yabancı cisim tespiti',
        'Dijital arşivleme',
      ],
      faqs: [
        {
          q: 'Röntgen veya ultrason için randevu gerekiyor mu?',
          a: 'Öncelikle genel muayene randevusu alınması önerilir. Acil durumlarda görüntüleme derhal yapılabilir.',
        },
        {
          q: 'Radyoloji işlemi güvenli mi?',
          a: 'Dijital röntgen cihazlarımız minimum radyasyon dozu kullanır. Ultrasonografi ise tamamen radyasyon içermeyen, güvenli bir görüntüleme yöntemidir.',
        },
        {
          q: 'Ultrasonla hamilelik kontrolü yapılabilir mi?',
          a: 'Evet. Ultrasonografi ile köpek ve kedilerde gebelik tespiti ve yavru sayısı belirlenmesi güvenilir biçimde yapılabilmektedir.',
        },
      ],
    },
    en: {
      title: 'Radiology',
      desc: 'Digital X-ray and ultrasound for fast and accurate diagnosis.',
      meta: {
        title: 'Veterinary Radiology Lefkoşa — X-ray & Ultrasound North Cyprus | Animare',
        description:
          'Digital X-ray and ultrasound services in Gönyeli / Lefkoşa. Bone fractures, organ imaging, and pregnancy checks. Animare Veterinary Clinic, North Cyprus.',
        keywords: [
          'vet X-ray Lefkoşa',
          'animal ultrasound North Cyprus',
          'digital X-ray vet Gönyeli',
          'dog ultrasound TRNC',
          'cat X-ray Lefkoşa',
        ],
      },
      body: "Our digital radiology services allow rapid assessment of bone fractures, organ sizes, tumours, and pregnancy. Ultrasonography is especially valuable for examining abdominal organs, detecting foreign bodies, and monitoring pregnancy. All images are stored digitally and can be forwarded to specialists when needed.",
      bullets: [
        'Digital X-ray (all body regions)',
        'Abdominal ultrasonography',
        'Pregnancy monitoring',
        'Foreign body detection',
        'Digital archiving',
      ],
      faqs: [
        {
          q: 'Do I need an appointment for X-ray or ultrasound?',
          a: 'A general check-up appointment is recommended first. In emergencies, imaging can be arranged immediately.',
        },
        {
          q: 'Is the radiology procedure safe?',
          a: 'Our digital X-ray equipment uses minimal radiation doses. Ultrasonography is entirely radiation-free and safe for all patients.',
        },
        {
          q: 'Can you check pregnancy with ultrasound?',
          a: 'Yes. Ultrasound reliably confirms pregnancy and estimates litter size in dogs and cats.',
        },
      ],
    },
  },
  {
    key: 'emergency',
    icon: '🚨',
    slugs: { tr: 'acil-hizmet', en: 'emergency' },
    tr: {
      title: 'Acil Hizmet',
      desc: '7/24 acil veteriner hizmeti ile her an yanınızdayız.',
      meta: {
        title: 'Acil Veteriner Lefkoşa — 7/24 Veteriner KKTC | Animare',
        description:
          "Gönyeli / Lefkoşa'da 7 gün 24 saat acil veteriner hizmeti. Zehirlenme, kaza, nefes güçlüğü ve kritik vakalar için hemen arayın: +90 533 844 91 92. Animare Veteriner Kliniği.",
        keywords: [
          'acil veteriner Lefkoşa',
          '7/24 veteriner KKTC',
          'gece veteriner Gönyeli',
          'köpek acil Lefkoşa',
          'kedi acil KKTC',
          'veteriner acil hat',
        ],
      },
      body: "Evcil hayvanınız ani bir sağlık kriziyle karşı karşıya kaldığında, her dakika önem taşır. Kliniğimiz 7 gün 24 saat acil vakalar için erişilebilir durumdadır. Zehirlenme, trafik kazası, nefes güçlüğü, bilinç kaybı veya şiddetli yaralanma durumlarında hemen arayın: +90 533 844 91 92.",
      bullets: [
        '7/24 acil hat',
        'Zehirlenme & kaza',
        'Nefes güçlüğü & dolaşım krizleri',
        'Ciddi yaralanmalar',
        'Doğum komplikasyonları',
      ],
      faqs: [
        {
          q: 'Acil durumlarda haftanın her günü ulaşabilir miyim?',
          a: 'Evet, kliniğimiz 7 gün 24 saat acil vakalar için erişilebilir durumdadır. Hemen arayın: +90 533 844 91 92.',
        },
        {
          q: 'Hangi durumlar acil sayılır?',
          a: 'Zehirlenme, trafik kazası, nefes güçlüğü, bilinç kaybı, şiddetli yaralanma ve doğum komplikasyonları acil durumlara girer.',
        },
        {
          q: 'Kliniğe gelmeden önce ne yapmalıyım?',
          a: 'Hayvanı sakin bir yere alın ve bizi arayın. Telefonda durumu tarif edin; kliniğe ulaşmadan önce ilk yardım yönlendirmesi yapabiliriz.',
        },
      ],
    },
    en: {
      title: 'Emergency Service',
      desc: '24/7 emergency veterinary service — we are always here for you.',
      meta: {
        title: 'Emergency Vet Lefkoşa — 24/7 Veterinary North Cyprus | Animare',
        description:
          '24/7 emergency veterinary service in Gönyeli / Lefkoşa. Poisoning, accidents, breathing difficulties, and critical cases — call now: +90 533 844 91 92. Animare Veterinary Clinic.',
        keywords: [
          'emergency vet Lefkoşa',
          '24/7 vet North Cyprus',
          'night vet Gönyeli',
          'dog emergency TRNC',
          'cat emergency Lefkoşa',
          'vet emergency line',
        ],
      },
      body: "When your pet faces a sudden health crisis, every minute counts. Our clinic is accessible 24/7 for emergency cases. Call immediately for poisoning, traffic accidents, breathing difficulties, loss of consciousness, or severe injuries: +90 533 844 91 92.",
      bullets: [
        '24/7 emergency line',
        'Poisoning & accidents',
        'Breathing & circulatory emergencies',
        'Severe injuries',
        'Birth complications',
      ],
      faqs: [
        {
          q: 'Can I reach you 24/7 for emergencies?',
          a: 'Yes, our clinic is accessible around the clock for emergency cases. Call immediately: +90 533 844 91 92.',
        },
        {
          q: 'What counts as an emergency?',
          a: 'Poisoning, traffic accidents, breathing difficulties, loss of consciousness, severe injuries, and birth complications are all emergencies.',
        },
        {
          q: 'What should I do before bringing my pet in?',
          a: 'Keep your pet calm and call us first. Describe the situation over the phone — we can provide initial guidance before you arrive.',
        },
      ],
    },
  },
  {
    key: 'lab',
    icon: '🧪',
    slugs: { tr: 'laboratuvar', en: 'laboratory' },
    tr: {
      title: 'Laboratuvar',
      desc: 'Kan tahlili, idrar analizi ve mikrobiyolojik testlerle hızlı ve doğru teşhis.',
      meta: {
        title: 'Veteriner Laboratuvar Lefkoşa — Kan Tahlili & Test KKTC | Animare',
        description:
          "Gönyeli / Lefkoşa'da veteriner laboratuvar hizmetleri. Kan tahlili, idrar analizi, mikrobiyoloji ve parazit testleri. Uzman Dr. Hazel Tamakan Yeşilovalı — Animare Kliniği, KKTC.",
        keywords: [
          'veteriner kan tahlili Lefkoşa',
          'hayvan laboratuvar KKTC',
          'köpek kan testi Gönyeli',
          'mikrobiyoloji veteriner KKTC',
          'idrar analizi evcil hayvan',
        ],
      },
      body: "Doğru teşhis için kapsamlı laboratuvar desteği sunuyoruz. Dr. Hazel Tamakan Yeşilovalı'nın mikrobiyoloji uzmanlığıyla desteklenen laboratuvarımızda kan sayımı, biyokimya, idrar analizi, parazit taraması ve enfeksiyöz hastalık testleri uygulanmaktadır. Sonuçlar hızla değerlendirilerek tedavi planı oluşturulur.",
      bullets: [
        'Tam kan sayımı (CBC)',
        'Biyokimya paneli',
        'İdrar analizi',
        'Parazit (dışkı) taraması',
        'Enfeksiyöz hastalık hızlı testleri',
      ],
      faqs: [
        {
          q: 'Test sonuçları ne kadar sürede çıkar?',
          a: 'Kliniğimizde yapılan hızlı testlerin büyük çoğunluğu aynı gün sonuçlanır. Mikrobiyoloji kültürleri için ek süre gerekebilir.',
        },
        {
          q: 'Kan tahlili için aç gelinmesi gerekiyor mu?',
          a: 'Bazı biyokimya testleri için 8–12 saatlik açlık önerilir. Veteriner hekimimiz hangi testlerin açlık gerektirdiğini randevu sırasında bildirecektir.',
        },
        {
          q: 'Hangi hastalıklar laboratuvar testleriyle tespit edilebilir?',
          a: 'Böbrek ve karaciğer yetmezliği, anemi, enfeksiyonlar, parazitler, tiroid sorunları ve pek çok enfeksiyöz hastalık laboratuvar testleriyle teşhis edilebilir.',
        },
      ],
    },
    en: {
      title: 'Laboratory',
      desc: 'Fast and accurate diagnosis with blood tests, urinalysis, and microbiological tests.',
      meta: {
        title: 'Veterinary Laboratory Lefkoşa — Blood Tests & Analysis North Cyprus | Animare',
        description:
          "Veterinary laboratory services in Gönyeli / Lefkoşa. Blood tests, urinalysis, microbiology, and parasite screening. Expert microbiologist Dr. Hazel Tamakan Yeşilovalı — Animare Clinic.",
        keywords: [
          'vet blood test Lefkoşa',
          'animal laboratory North Cyprus',
          'dog blood test TRNC',
          'veterinary microbiology',
          'urinalysis pet North Cyprus',
        ],
      },
      body: "We offer comprehensive laboratory support for accurate diagnosis. Supported by Dr. Hazel Tamakan Yeşilovalı's microbiology expertise, our laboratory performs blood counts, biochemistry, urinalysis, parasite screening, and infectious disease tests. Results are evaluated promptly to guide the treatment plan.",
      bullets: [
        'Complete blood count (CBC)',
        'Biochemistry panel',
        'Urinalysis',
        'Parasite (faecal) screening',
        'Rapid infectious disease tests',
      ],
      faqs: [
        {
          q: 'How quickly are test results available?',
          a: 'Most rapid in-house tests are completed the same day. Microbiological cultures may require additional time.',
        },
        {
          q: 'Should my pet be fasting before a blood test?',
          a: 'Fasting for 8–12 hours is recommended for certain biochemistry panels. Our vet will inform you in advance which tests require it.',
        },
        {
          q: 'What conditions can laboratory tests detect?',
          a: 'Kidney and liver disease, anaemia, infections, parasites, thyroid disorders, and many infectious diseases can all be identified through laboratory testing.',
        },
      ],
    },
  },
  {
    key: 'grooming',
    icon: '✂️',
    slugs: { tr: 'pet-kuafor', en: 'pet-grooming' },
    tr: {
      title: 'Pet Kuaförü',
      desc: 'Tıraş, yıkama, tırnak kesimi ve bakım hizmetleriyle dostunuz her zaman şık ve temiz.',
      meta: {
        title: 'Pet Kuaförü Lefkoşa — Köpek & Kedi Tıraşı KKTC | Animare',
        description:
          "Gönyeli / Lefkoşa'da profesyonel pet kuaförü hizmetleri. Köpek ve kedi yıkama, tıraş, tırnak kesimi ve kulak temizliği. Animare Veteriner Kliniği bünyesinde hijyenik bakım.",
        keywords: [
          'pet kuaforü Lefkoşa',
          'köpek tıraşı KKTC',
          'kedi yıkama Gönyeli',
          'tırnak kesimi evcil hayvan',
          'veteriner bünyesinde grooming KKTC',
        ],
      },
      body: 'Kliniğimiz bünyesindeki pet kuaförü hizmetiyle evcil hayvanınız hem temizlenir hem de veteriner gözleminden geçer. Bu sayede bakım sırasında fark edilen cilt, kulak veya parazit sorunları anında ilgili hekime bildirilebilir.',
      bullets: [
        'Yıkama ve kurutma',
        'Irka özel tıraş ve şekillendirme',
        'Tırnak kesimi',
        'Kulak temizliği',
        'Parazit kontrolü',
      ],
      faqs: [
        {
          q: 'Pet kuaförü için randevu gerekiyor mu?',
          a: 'Evet, randevu alarak gelmenizi tavsiye ederiz. +90 533 844 91 92 numarasını arayarak uygun bir saat belirleyebilirsiniz.',
        },
        {
          q: 'Her ırka bakım hizmeti veriliyor mu?',
          a: 'Evet, farklı ırklara özgü tıraş ve şekillendirme teknikleri uygulanmaktadır. Uzun ve kısa tüylü ırklara özel işlemler mevcuttur.',
        },
        {
          q: 'Bakım sırasında bir sağlık sorunu fark edilirse ne olur?',
          a: 'Grooming ekibimiz cilt, kulak veya parazit sorununu fark ettiğinde doğrudan veteriner hekimimize bildirir; gerekirse aynı gün muayene planlanabilir.',
        },
      ],
    },
    en: {
      title: 'Pet Grooming',
      desc: 'Trimming, bathing, nail clipping, and styling to keep your pet looking and feeling great.',
      meta: {
        title: 'Pet Grooming Lefkoşa — Dog & Cat Grooming North Cyprus | Animare',
        description:
          'Professional pet grooming in Gönyeli / Lefkoşa. Dog and cat bathing, trimming, nail clipping, and ear cleaning — all within our veterinary clinic environment.',
        keywords: [
          'pet grooming Lefkoşa',
          'dog grooming North Cyprus',
          'cat bathing TRNC',
          'nail clipping pet',
          'vet grooming service North Cyprus',
        ],
      },
      body: 'Our in-clinic grooming service ensures your pet is cleaned and simultaneously observed by a veterinary professional. Skin, ear, or parasite issues noticed during grooming can be referred to our vet immediately.',
      bullets: [
        'Bathing and drying',
        'Breed-specific trimming and styling',
        'Nail clipping',
        'Ear cleaning',
        'Parasite check',
      ],
      faqs: [
        {
          q: 'Do I need an appointment for grooming?',
          a: 'Yes, we recommend booking in advance. Call us on +90 533 844 91 92 to arrange a convenient time.',
        },
        {
          q: 'Is grooming available for all breeds?',
          a: 'Yes, our team is experienced in breed-specific trimming and styling for both long- and short-coated breeds.',
        },
        {
          q: 'What happens if a health issue is spotted during grooming?',
          a: 'Our grooming team reports any skin, ear, or parasite concerns directly to our vet. An examination can often be arranged the same day.',
        },
      ],
    },
  },
  {
    key: 'nutrition',
    icon: '🥗',
    slugs: { tr: 'beslenme-danismanligi', en: 'nutrition-consulting' },
    tr: {
      title: 'Beslenme Danışmanlığı',
      desc: 'Evcil hayvanınızın yaşına, cinsine ve sağlık durumuna özel beslenme programları.',
      meta: {
        title: 'Veteriner Beslenme Danışmanlığı Lefkoşa — Köpek & Kedi Diyeti KKTC | Animare',
        description:
          "Köpek ve kedi için kişiselleştirilmiş beslenme programları — Gönyeli / Lefkoşa, KKTC. Yaş, cins ve hastalık durumuna göre mama önerileri. Animare Veteriner Kliniği.",
        keywords: [
          'veteriner beslenme danışmanlığı KKTC',
          'köpek diyeti Lefkoşa',
          'kedi mama önerisi Gönyeli',
          'evcil hayvan beslenme programı',
          'N&D Farmina KKTC',
        ],
      },
      body: "Doğru beslenme, evcil hayvanınızın uzun ve sağlıklı bir yaşam sürmesinin temel taşıdır. Kliniğimizde veteriner hekimimiz hayvanınızın yaşını, ırkını, kilo durumunu ve mevcut sağlık sorunlarını göz önüne alarak kişiselleştirilmiş bir beslenme planı hazırlar. Premium N&D Farmina ürünleri kliniğimizde mevcuttur.",
      bullets: [
        'Yaşa özel mama planlaması (yavru, yetişkin, yaşlı)',
        'Irka özel gereksinim değerlendirmesi',
        'Şişmanlık & diyet programı',
        'Böbrek, eklem ve deri destekli diyetler',
        'N&D Farmina premium mama danışmanlığı',
      ],
      faqs: [
        {
          q: 'Beslenme danışmanlığı için nasıl randevu alırım?',
          a: 'Kliniğimizi +90 533 844 91 92 numarasından arayarak veya iletişim sayfamızdan randevu alabilirsiniz. Veteriner hekimimiz hayvanınızı değerlendirerek kişiselleştirilmiş bir beslenme planı hazırlar.',
        },
        {
          q: 'N&D Farmina ürünleri klinikte satışa sunuluyor mu?',
          a: 'Evet, veteriner hekimlerimizin önerdiği N&D Farmina premium mama serisi kliniğimizde mevcuttur.',
        },
        {
          q: 'Şişman hayvanım için diyet programı hazırlanabilir mi?',
          a: 'Evet. Veteriner hekimimiz kilo yönetimi ve kontrollü diyet programları hazırlamakta, ilerleme takibi için düzenli kontrol randevuları planlamaktadır.',
        },
      ],
    },
    en: {
      title: 'Nutrition Consulting',
      desc: "Personalised nutrition plans tailored to your pet's age, breed, and health condition.",
      meta: {
        title: 'Veterinary Nutrition Consulting Lefkoşa — Dog & Cat Diet North Cyprus | Animare',
        description:
          'Personalised dog and cat nutrition plans in Gönyeli / Lefkoşa, TRNC. Food recommendations based on age, breed, and health condition. Animare Veterinary Clinic.',
        keywords: [
          'vet nutrition consulting North Cyprus',
          'dog diet Lefkoşa',
          'cat food advice TRNC',
          'pet nutrition plan',
          'N&D Farmina North Cyprus',
        ],
      },
      body: "Proper nutrition is the cornerstone of a long and healthy life for your pet. Our veterinarian prepares a personalised nutrition plan based on your pet's age, breed, weight, and existing health issues. Premium N&D Farmina products are available at our clinic.",
      bullets: [
        'Life-stage specific planning (puppy/kitten, adult, senior)',
        'Breed-specific requirement assessment',
        'Weight management & diet programme',
        'Kidney, joint, and skin support diets',
        'N&D Farmina premium food consulting',
      ],
      faqs: [
        {
          q: 'How do I get nutrition advice for my pet?',
          a: "Our vet will assess your pet's age, breed, weight, and health status and prepare a personalised nutrition plan during a consultation.",
        },
        {
          q: 'Are N&D Farmina products available at your clinic?',
          a: 'Yes, the premium N&D Farmina range recommended by our veterinarians is stocked at our clinic.',
        },
        {
          q: 'Can you create a weight management plan?',
          a: 'Yes. Our vet designs controlled diet programmes for overweight pets and schedules regular weigh-ins to monitor progress.',
        },
      ],
    },
  },
]

export function getServiceBySlug(slug: string, lang: 'tr' | 'en'): ServiceData | undefined {
  return services.find((s) => s.slugs[lang] === slug)
}

export function getAllServiceSlugs(lang: 'tr' | 'en'): string[] {
  return services.map((s) => s.slugs[lang])
}

export function getServiceByKey(key: string): ServiceData | undefined {
  return services.find((s) => s.key === key)
}
