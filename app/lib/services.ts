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
  body: string[]
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
      body: [
        'Genel muayene, evcil hayvanınızın genel sağlık durumunu değerlendirmek için yapılan sistematik fiziksel incelemedir. Yılda bir kez gerçekleştirilen rutin kontrolde veteriner hekimimiz kalp ve akciğer dinlemesi, karın palpasyonu, eklem muayenesi, deri ve tüy değerlendirmesi, göz, kulak ve ağız kontrolü ile nörolojik gözlemi kapsamlı biçimde uygular.',
        'Düzenli muayeneler sayesinde diyabet, böbrek yetmezliği, kalp hastalığı ve kanser gibi ciddi durumların erken evrede tespit edilmesi mümkün olur. Erken teşhis; tedavi sürecini kısaltır, maliyeti düşürür ve evcil hayvanınızın yaşam kalitesini doğrudan artırır. Belirtiler henüz ortaya çıkmadan önce saptanan bir hastalık, çoğu zaman tam anlamıyla tedavi edilebilir.',
        'Animare Veteriner Kliniği olarak Gönyeli / Lefkoşa\'da sunduğumuz genel muayene hizmetinde her hastaya özel sağlık kaydı tutulur. Aşı takvimi, antiparaziter tedavi planı ve beslenme önerileri de muayene sırasında güncellenir. Hayvanınızın kronik bir rahatsızlığı varsa, izleme sıklığı birlikte belirlenir.',
        'KKTC\'de evcil hayvan sahiplerinin kolayca ulaşabileceği konumumuzla kliniğimiz, Kuzey Kıbrıs\'ta güvenilir veteriner hizmeti arayanlar için tercih edilen adreslerden biridir. Randevu almak için +90 533 844 91 92 numaralı hattı arayabilir ya da iletişim sayfamızı kullanabilirsiniz.',
      ],
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
        {
          q: 'İlk muayenede neler beklemelisiniz?',
          a: 'İlk muayenede veteriner hekimimiz hayvanınızın doğum ve aşı geçmişini, diyetini ve genel davranışını sorar; ardından kapsamlı fiziksel muayeneyi gerçekleştirir. Gerekirse aynı seansta temel kan tahlili veya dışkı taraması istenebilir.',
        },
        {
          q: 'Muayene öncesi hazırlık gerekiyor mu?',
          a: 'Hayvanınızı aç bırakmanız gerekmez (kan tahlili planlanmışsa istisna). Varsa önceki aşı kartı veya tıbbi kayıtları yanınızda getirmeniz süreci hızlandırır.',
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
      body: [
        "A general check-up is a systematic physical examination designed to assess your pet's overall health status. During an annual wellness visit, our veterinarian carries out heart and lung auscultation, abdominal palpation, joint assessment, skin and coat evaluation, and a thorough check of the eyes, ears, and mouth.",
        "Regular check-ups make it possible to detect serious conditions such as diabetes, kidney disease, heart disease, and cancer at an early stage. Early diagnosis shortens treatment, reduces costs, and directly improves your pet's quality of life. A condition identified before symptoms appear is, in many cases, fully treatable.",
        "At Animare Veterinary Clinic in Gönyeli / Lefkoşa, every patient has a dedicated health record updated at each visit. Vaccination schedules, antiparasitic treatment plans, and nutrition advice are all reviewed during the check-up. If your pet has an ongoing condition, monitoring frequency is agreed with you at the appointment.",
        "Conveniently located in North Cyprus, our clinic is a trusted choice for pet owners in Lefkoşa and across the TRNC. To book an appointment, call us on +90 533 844 91 92 or use our contact page.",
      ],
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
        {
          q: 'What should I expect at the first visit?',
          a: "Our vet will ask about your pet's birth and vaccination history, diet, and general behaviour, then carry out a full physical examination. Basic blood tests or a faecal check may be requested in the same session if needed.",
        },
        {
          q: 'Do I need to prepare my pet before the appointment?',
          a: 'Fasting is not required unless a blood test is planned. Bringing any previous vaccination records or medical history speeds up the process.',
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
      body: [
        'Düzenli aşılama, evcil hayvanınızı ölümcül ve bulaşıcı hastalıklardan korumanın en etkili ve kanıtlanmış yoludur. Kuduz, parvovirus, distemper ve kedi solunum yolu hastalıkları gibi ciddi enfeksiyonlara karşı bağışıklık oluşturmak için hayatın ilk haftalarından itibaren aşı programına başlanması gerekmektedir.',
        'Kliniğimizde köpek ve kediler için tüm temel ve destekleyici aşılar uygulanmaktadır. Veteriner hekimimiz hayvanınızın yaşını, yaşam koşullarını (iç mekân / dış mekân), sağlık geçmişini ve KKTC\'deki bölgesel hastalık risklerini göz önüne alarak kişiselleştirilmiş bir aşı takvimi hazırlar. Her aşı uygulamasının ardından aşı kartı güncellenir.',
        'Yavru köpek ve kediler, maternal bağışıklıkları azaldıkça ilk aşı serilerini 6–8 haftalıktan itibaren alır. Yetişkin hayvanlarda yıllık hatırlatma aşıları bağışıklığın sürdürülmesi açısından kritiktir. Bazı aşıların geçerliliği seyahat belgelerinde ve resmi işlemlerde de doğrudan etkili olduğundan takibin düzenli tutulması önerilir.',
        'Animare Veteriner Kliniği olarak Gönyeli / Lefkoşa\'da eksiksiz aşı hizmetleri sunuyoruz. Hayvanınızın aşı takimiyle ilgili bilgi almak veya randevu oluşturmak için +90 533 844 91 92 numaralı hattı arayabilirsiniz.',
      ],
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
        {
          q: 'Aşı öncesinde hazırlık gerekiyor mu?',
          a: 'Hayvanınızın randevu günü genel sağlık durumunun iyi olması önerilir. Ateş veya belirgin hastalık belirtisi varsa aşı ertelenebilir. Mevcut aşı kartını yanınızda getirmeniz takip açısından önemlidir.',
        },
        {
          q: 'Kuduz aşısı zorunlu mu?',
          a: 'Evet, KKTC\'de kuduz aşısı yasal olarak zorunludur. Aynı zamanda yurt dışı seyahatlerde ve köpek lisanslama işlemlerinde zorunlu belge kapsamındadır.',
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
      body: [
        "Regular vaccination is the most effective and evidence-based way to protect your pet from deadly and contagious diseases. Building immunity against serious infections such as rabies, parvovirus, distemper, and feline respiratory disease requires starting a vaccination programme from the earliest weeks of life.",
        "Our clinic provides all core and supplementary vaccines for dogs and cats. Our veterinarian designs a personalised schedule based on your pet's age, lifestyle (indoor/outdoor), health history, and regional disease risks in North Cyprus. Vaccination cards are updated after every appointment.",
        "Puppies and kittens begin their primary vaccination series from 6–8 weeks of age, as maternal immunity wanes. Annual booster doses are critical for maintaining immunity in adult pets. Keeping vaccinations current is also important for travel documentation and official licensing requirements.",
        "Animare Veterinary Clinic provides complete vaccination services in Gönyeli / Lefkoşa. For information about your pet's vaccine schedule or to book an appointment, call us on +90 533 844 91 92.",
      ],
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
        {
          q: 'How should I prepare for the vaccination visit?',
          a: 'Your pet should be in good general health on the day of the appointment. If fever or obvious illness is present, the vaccine may be postponed. Bring any existing vaccination records to help us maintain continuity.',
        },
        {
          q: 'Is rabies vaccination compulsory?',
          a: 'Yes, rabies vaccination is a legal requirement in North Cyprus. It is also mandatory for international travel and dog licensing documentation.',
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
      body: [
        'Kliniğimizde küçük hayvan cerrahisi alanında uzmanlaşmış Dr. Gökay Yeşilovalı önderliğinde gerçekleştirilen cerrahi hizmetler sunulmaktadır. Modern cerrahi ekipman ve titizlikle uygulanan anestezi protokolleriyle her operasyon, hasta güvenliği önceliklendirilerek planlanır.',
        'Operasyon öncesinde hastanın genel sağlık durumu, kan değerleri ve anestezi toleransı değerlendirilir. Operasyon sırasında vital bulgular kesintisiz izlenir; ağrı kontrolü hem anestezi sürecinde hem de iyileşme döneminde sağlanır. Operasyon sonrası her hastaya özel bakım planı hazırlanır ve sahiple detaylı şekilde paylaşılır.',
        'Kısırlaştırma (kastrasyon ve ovaryohisterektomi), KKTC\'deki evcil hayvan popülasyonu açısından hem bireysel sağlık hem de hayvan refahı için önem taşıyan rutin bir cerrahi prosedürdür. Erken kısırlaştırma; rahim iltihabı (pyometra), meme kanseri ve testis tümörü gibi ciddi hastalık risklerini önemli ölçüde azaltır.',
        'Animare Veteriner Kliniği olarak Gönyeli / Lefkoşa\'da sunduğumuz cerrahi hizmetlere ilişkin bilgi almak için +90 533 844 91 92 numaralı hattımızı arayabilir ya da iletişim sayfamızdan bize ulaşabilirsiniz. Operasyon tarihi planlaması ve ameliyat öncesi hazırlık talimatları randevu sırasında aktarılır.',
      ],
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
        {
          q: 'Operasyon için hangi kan testleri gerekiyor?',
          a: 'Rutin cerrahi öncesinde tam kan sayımı ve temel biyokimya paneli istenir. Bu testler anestezi riskini değerlendirmemize ve doğru protokolü seçmemize yardımcı olur.',
        },
        {
          q: 'Dikiş alımı için tekrar gelmem gerekiyor mu?',
          a: 'Evet, dikişler genellikle 7–10 gün sonra alınır. Bu randevuda iyileşme süreci de değerlendirilir; gerekirse ek tedavi planlanır.',
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
      body: [
        "Our surgical services are led by Dr. Gökay Yeşilovalı, a specialist in small animal surgery. Every procedure is planned with patient safety as the priority, using modern surgical equipment and carefully managed anaesthesia protocols.",
        "Before any operation, we assess the patient's general health, blood values, and anaesthesia tolerance. During surgery, vital signs are continuously monitored, and pain is controlled throughout both the anaesthetic and recovery phases. A personalised post-operative care plan is prepared for every patient and discussed in detail with the owner.",
        "Neutering (castration and ovariohysterectomy) is a routine surgical procedure that carries significant health and welfare benefits for pets in North Cyprus. Early neutering substantially reduces the risk of serious conditions such as pyometra, mammary tumours, and testicular cancer.",
        "For information about our surgical services at Animare Veterinary Clinic in Gönyeli / Lefkoşa, call us on +90 533 844 91 92 or use our contact page. Pre-operative instructions and scheduling are provided at the time of booking.",
      ],
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
        {
          q: 'Which blood tests are needed before surgery?',
          a: 'A complete blood count and basic biochemistry panel are requested before routine surgery. These results help us assess anaesthetic risk and select the correct protocol.',
        },
        {
          q: 'Do I need to come back to have stitches removed?',
          a: 'Yes, sutures are typically removed 7–10 days after the procedure. The healing process is also reviewed at this appointment, and any further treatment is arranged if needed.',
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
      body: [
        'Ağız sağlığı, evcil hayvanınızın genel sağlığıyla doğrudan ilişkilidir. Tedavi edilmeyen diş taşı ve diş eti iltihabı; ağrı ve beslenme güçlüğüne yol açmakla kalmaz, bakterilerin kan dolaşımına karışarak kalp, böbrek ve karaciğer hasarına neden olmasına da zemin hazırlayabilir.',
        'Kliniğimizde ultrasonik diş taşı temizliği, kapsamlı ağız içi muayene ve gerektiğinde diş çekimi hizmetleri sunulmaktadır. Diş taşı temizliği işlemi kısa süreli anestezi altında yapılır; bu sayede hayvanınız stres yaşamadan, güvenli bir ortamda eksiksiz bakım alır. İşlem sonrasında bir sonraki temizlik için önerilen süre ve ev bakım talimatları sizinle paylaşılır.',
        'Yetişkin köpek ve kedilerin büyük çoğunluğunda yaşın ilerlemesiyle birlikte diş taşı birikimi gözlemlenir. Yılda en az bir kez gerçekleştirilen profesyonel diş temizliği, diş kayıplarını ve ağız kaynaklı sistemik hastalıkları büyük ölçüde önler. Özellikle küçük ırk köpekler ve bazı kedi ırkları diş taşına genetik yatkınlık gösterdiğinden daha sık kontrol gerektirebilir.',
        'Gönyeli / Lefkoşa\'daki Animare Veteriner Kliniği\'nde evcil hayvanınızın ağız sağlığı için profesyonel destek alabilirsiniz. Randevu almak veya soru sormak için +90 533 844 91 92 numaralı hattımızı arayın.',
      ],
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
        {
          q: 'Diş eti kanaması veya ağız kokusu ne zaman veterinere gidilmesi gerektiğinin işareti?',
          a: 'Sürekli ağız kokusu, iştah kaybı, çiğneme güçlüğü veya diş eti kanaması diş probleminin ilerlediğine işaret eder. Bu belirtileri fark ettiğinizde en kısa sürede randevu almanız önerilir.',
        },
        {
          q: 'Ev bakımı gerçekten fark yaratıyor mu?',
          a: 'Evet. Haftada en az 3 kez köpek ve kedi için özel diş fırçasıyla yapılan fırçalama, diş taşı oluşumunu yavaşlatır ve profesyonel temizlik ihtiyacını önemli ölçüde azaltır.',
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
      body: [
        "Oral health is directly linked to your pet's overall wellbeing. Untreated tartar and gum disease don't just cause pain and difficulty eating — bacteria entering the bloodstream can lead to heart, kidney, and liver damage.",
        "Our clinic offers ultrasonic tartar cleaning, comprehensive intra-oral examination, and tooth extraction where necessary. Dental cleaning is performed under short-acting anaesthesia, ensuring your pet receives thorough, stress-free care in a safe environment. After the procedure, you'll receive guidance on the recommended interval before the next cleaning and tips for home care.",
        "Tartar accumulation affects the majority of adult dogs and cats as they age. Annual professional dental cleaning significantly prevents tooth loss and oral-source systemic disease. Certain small-breed dogs and cat breeds have a genetic predisposition to tartar build-up and may benefit from more frequent checks.",
        "For professional dental care for your pet at Animare Veterinary Clinic in Gönyeli / Lefkoşa, call us on +90 533 844 91 92 to book an appointment.",
      ],
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
        {
          q: 'When does gum bleeding or bad breath mean I should see a vet?',
          a: 'Persistent bad breath, loss of appetite, difficulty chewing, or gum bleeding are signs of advancing dental disease. If you notice these symptoms, book an appointment as soon as possible.',
        },
        {
          q: 'Does home care really make a difference?',
          a: 'Yes. Brushing with a pet-specific toothbrush at least three times a week slows tartar formation and significantly reduces the need for professional cleaning.',
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
      body: [
        'Dijital radyoloji, evcil hayvanınızdaki kemik kırıkları, organ büyüklükleri, tümörler, yabancı cisimler ve gebelik durumunu hızla ve doğrulukla değerlendirmemizi sağlar. Kliniğimizde hem dijital röntgen hem de ultrasonografi imkânları bir arada sunulmakta; bu sayede geniş bir tanısal spektrum kısa sürede kapsanmaktadır.',
        'Ultrasonografi özellikle karın organlarının (karaciğer, dalak, böbrekler, mesane, bağırsaklar) incelenmesinde, sıvı birikimi tespitinde ve hamilelik takibinde kritik bir araçtır. Tamamen radyasyon içermeyen bu yöntem, gerektiğinde sık aralıklı izleme için de güvenle kullanılabilir. Dijital röntgen ise iskelet sistemi ve göğüs boşluğunun değerlendirilmesinde vazgeçilmezdir.',
        'Tüm görüntüler dijital ortamda arşivlenir; gerektiğinde uzman referans hekimlere iletilebilir veya siz talep ettiğinizde paylaşılabilir. Acil durumlarda radyoloji işlemleri bekletilmeksizin uygulanabilir; tanı süreci en kısa sürede tamamlanır.',
        'Gönyeli / Lefkoşa\'daki Animare Veteriner Kliniği\'nde dijital röntgen ve ultrasonografi hizmetlerine ilişkin bilgi almak için +90 533 844 91 92 numaralı hattımızı arayabilirsiniz.',
      ],
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
        {
          q: 'Ultrasonografi için hayvanı aç bırakmak gerekiyor mu?',
          a: 'Karın ultrasonografisi için genellikle 4–6 saatlik açlık önerilir; dolu mide görüntü kalitesini düşürebilir. Veteriner hekimimiz randevu öncesinde size bilgi verecektir.',
        },
        {
          q: 'Görüntüleri paylaşabilir misiniz?',
          a: 'Evet. Dijital arşivimizde saklanan görüntüler talep halinde size elektronik ortamda iletilir veya referans hekime gönderilebilir.',
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
      body: [
        "Our digital radiology services allow rapid and accurate assessment of bone fractures, organ sizes, tumours, foreign bodies, and pregnancy in your pet. Our clinic offers both digital X-ray and ultrasonography, covering a broad diagnostic spectrum in a single visit.",
        "Ultrasonography is particularly valuable for examining abdominal organs (liver, spleen, kidneys, bladder, intestines), detecting fluid accumulation, and monitoring pregnancy. Completely radiation-free, it can safely be used for repeat imaging when needed. Digital X-ray is indispensable for evaluating the skeletal system and thoracic cavity.",
        "All images are stored digitally and can be forwarded to specialist referral vets or shared with you on request. In emergency situations, radiology can be performed without delay, so diagnosis is completed as quickly as possible.",
        "For information about digital X-ray and ultrasound services at Animare Veterinary Clinic in Gönyeli / Lefkoşa, call us on +90 533 844 91 92.",
      ],
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
        {
          q: 'Should my pet fast before an ultrasound?',
          a: 'For abdominal ultrasonography, fasting for 4–6 hours is generally recommended, as a full stomach reduces image quality. Our vet will advise you before the appointment.',
        },
        {
          q: 'Can I get a copy of the images?',
          a: 'Yes. Images stored in our digital archive can be sent to you electronically on request or forwarded directly to a referring specialist.',
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
      body: [
        "Evcil hayvanınız ani bir sağlık kriziyle karşı karşıya kaldığında, her dakika önem taşır. Kliniğimiz 7 gün 24 saat acil vakalar için erişilebilir durumdadır. Zehirlenme, trafik kazası, nefes güçlüğü, bilinç kaybı veya şiddetli yaralanma gibi kritik durumlarda hemen arayın: +90 533 844 91 92.",
        'Acil serviste hasta kliniğe ulaştığında öncelikli değerlendirme (triage) uygulanır: yaşamsal bulgular ölçülür, ağrı ve şok yönetimi başlatılır, gerekirse oksijen desteği ve intravenöz sıvı tedavisine geçilir. Tanıyı hızlandırmak için acil kan tahlili veya radyoloji görüntülemesi aynı anda devreye alınabilir.',
        'Hayvanınıza kliniğe gelene kadar nasıl davranmanız gerektiği konusunda telefonda rehberlik sunabiliyoruz. Panik yapmadan hayvanı sakin bir yere alın ve bizi arayın; durumu kısaca tarif edin. Yolda kendinizi ve hayvanı ek tehlikeden koruyun; kesinlikle ilaç vermekten kaçının.',
        'Gönyeli / Lefkoşa\'da 7/24 acil veteriner hizmeti arıyorsanız Animare Veteriner Kliniği\'ni arayın: +90 533 844 91 92. KKTC genelinde hizmet veren kliniğimiz, acil durumlarda yanınızda olmak için hazırdır.',
      ],
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
        {
          q: 'Acil hatta bekleme süresi var mı?',
          a: 'Gerçek acil vakalar öncelik sırasına göre değerlendirilir. Kliniği arayarak durumu kısaca tarif etmeniz triage sürecini hızlandırır.',
        },
        {
          q: 'Zehirlenme şüphesinde ne yapmalıyım?',
          a: 'Hayvanın yuttuğu maddeyi (ambalaj veya fotoğraf) kaydedin, kusmaya zorlamayın ve hemen kliniği arayın. Telefonda alacağınız yönlendirme ile klinik yolculuğu güvenle tamamlayın.',
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
      body: [
        "When your pet faces a sudden health crisis, every minute counts. Our clinic is accessible 24 hours a day, 7 days a week for emergency cases. Call immediately for poisoning, traffic accidents, breathing difficulties, loss of consciousness, or severe injuries: +90 533 844 91 92.",
        "When a patient arrives at our emergency clinic, triage is applied immediately: vital signs are measured, pain and shock management is started, and oxygen support or intravenous fluid therapy is initiated where needed. Emergency blood tests and radiology imaging can be carried out at the same time to speed up diagnosis.",
        "We can guide you by phone on how to handle your pet safely until you arrive. Stay calm, move your pet to a quiet place, and call us — briefly describe the situation. Protect both yourself and your pet from further harm on the way in, and avoid giving any medication.",
        "If you need a 24/7 emergency vet in Gönyeli / Lefkoşa, call Animare Veterinary Clinic: +90 533 844 91 92. Our clinic is ready to be by your side in critical moments across North Cyprus.",
      ],
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
        {
          q: 'Is there a wait at the emergency line?',
          a: 'Genuine emergency cases are triaged by priority. Calling ahead and briefly describing the situation helps speed up the triage process.',
        },
        {
          q: 'What should I do if I suspect poisoning?',
          a: 'Note or photograph the substance your pet may have ingested, do not induce vomiting, and call the clinic immediately. Follow our phone guidance safely on the way in.',
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
      body: [
        "Doğru teşhis için kapsamlı laboratuvar desteği sunuyoruz. Dr. Hazel Tamakan Yeşilovalı'nın mikrobiyoloji uzmanlığıyla desteklenen kliniğimizde kan sayımı, biyokimya, idrar analizi, parazit taraması ve enfeksiyöz hastalık testleri uygulanmaktadır. Sonuçların büyük çoğunluğu aynı gün değerlendirilerek tedavi planı oluşturulur.",
        'Tam kan sayımı (CBC) anemi, enfeksiyon ve bağışıklık sistemi bozukluklarını; biyokimya paneli karaciğer, böbrek ve pankreas işlevlerini ortaya koyar. İdrar analizi özellikle böbrek hastalığı ve idrar yolu enfeksiyonlarının erken tespitinde kritiktir. Parazit taraması ise dışkı muayenesiyle bağırsak parazitlerini saptamamızı sağlar.',
        'Rutin check-up ziyaretlerinizde yapılan laboratuvar testleri, klinik belirtiler ortaya çıkmadan önce pek çok hastalığı tespit eder. Kronik hastalar için ise periyodik kan takibi, ilaç dozunun doğru ayarlanması ve organ fonksiyonlarının izlenmesi açısından vazgeçilmezdir.',
        'Gönyeli / Lefkoşa\'daki Animare Veteriner Kliniği laboratuvar hizmetleri hakkında bilgi almak için +90 533 844 91 92 numaralı hattımızı arayabilirsiniz. Aynı gün sonuç alma imkânı, tanı sürecinizi hızlandırır ve tedaviye geç kalmadan başlanmasını sağlar.',
      ],
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
        {
          q: 'Hangi testler için dışarıya referans gerekiyor?',
          a: 'Bazı ileri mikrobiyoloji kültürleri veya nadir genetik testler için dış referans laboratuvarlarla çalışılabilir. Veteriner hekimimiz hangi testlerin klinik içinde, hangilerinin dışarıda yapılacağını bildirecektir.',
        },
        {
          q: 'Kronik hastalıkta ne sıklıkla kan kontrolü yapılmalı?',
          a: 'Böbrek veya karaciğer yetmezliği, diyabet, hipotiroidi gibi kronik hastalıklarda genellikle 3–6 ayda bir kan takibi önerilir. Kesin sıklık hastalığın evresi ve kullanılan ilaçlara göre belirlenir.',
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
      body: [
        "We offer comprehensive laboratory support for accurate diagnosis. Supported by Dr. Hazel Tamakan Yeşilovalı's microbiology expertise, our clinic performs blood counts, biochemistry, urinalysis, parasite screening, and infectious disease tests. The majority of results are evaluated the same day, allowing treatment to begin without delay.",
        "A complete blood count (CBC) reveals anaemia, infections, and immune system abnormalities; a biochemistry panel assesses liver, kidney, and pancreatic function. Urinalysis is particularly critical for early detection of kidney disease and urinary tract infections. Parasite screening via faecal examination identifies intestinal parasites accurately.",
        "Laboratory tests performed during routine check-up visits detect many conditions before clinical signs appear. For patients with chronic illness, periodic blood monitoring is indispensable for correct medication dosing and tracking organ function over time.",
        "For information about laboratory services at Animare Veterinary Clinic in Gönyeli / Lefkoşa, call us on +90 533 844 91 92. Same-day results speed up diagnosis and ensure treatment starts as quickly as possible.",
      ],
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
        {
          q: 'Which tests require an external referral laboratory?',
          a: 'Some advanced microbiological cultures or rare genetic tests may be sent to an external reference laboratory. Our vet will tell you which tests are performed in-house and which are referred out.',
        },
        {
          q: 'How often should blood be monitored in a chronic patient?',
          a: 'For chronic conditions such as kidney or liver disease, diabetes, or hypothyroidism, blood monitoring every 3–6 months is generally recommended. The exact frequency depends on disease stage and current medication.',
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
      body: [
        'Kliniğimiz bünyesindeki pet kuaförü hizmetiyle evcil hayvanınız hem kapsamlı bakımdan geçer hem de veteriner gözetiminde olur. Bakım sırasında fark edilen cilt sorunu, kulak iltihabı, parazit belirtisi veya anormal şişlik doğrudan veteriner hekimimize bildirilerek gerekirse aynı gün muayene planlanabilir.',
        'Köpek ve kedilerin düzenli tıraş ve yıkama hizmetleri; deri altı parazitlerin (pire, kene) erken fark edilmesini, sıcak mevsimlerde ısı stresinin azaltılmasını ve tüy matlaşması ile deri tahrişinin önlenmesini sağlar. Tırnak kesimi ise yürüyüş bozukluklarını ve tırnak içe dönmesini önlemesi açısından ihmal edilmemesi gereken rutin bir bakımdır.',
        'Kliniğimizde ırka özel tıraş teknikleri uygulanmaktadır. Golden Retriever, Poodle, Maltese gibi uzun tüylü ırklar ile kısa tüylü ırkların farklı bakım ihtiyaçları bireysel olarak değerlendirilir. Kedi bakımı da hizmetlerimizin ayrılmaz bir parçasıdır; stres minimize edilerek bakım gerçekleştirilir.',
        'Gönyeli / Lefkoşa\'da veteriner bünyesinde profesyonel pet kuaförü hizmeti almak için Animare Veteriner Kliniği\'ni arayın: +90 533 844 91 92. Randevu alarak hayvanınızın bakımını en iyi koşullarda gerçekleştirin.',
      ],
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
        {
          q: 'Saldırgan veya stresli hayvanlara da bakım yapılıyor mu?',
          a: 'Evet, kliniğimizde veteriner desteğiyle stres yönetimi sağlanabilir. Gerektiğinde sakinleştirici önlem alınarak bakım güvenle gerçekleştirilebilir.',
        },
        {
          q: 'Grooming ne sıklıkla yapılmalı?',
          a: 'Uzun tüylü ırklarda 6–8 haftada bir, kısa tüylü ırklarda 8–12 haftada bir ya da sezona göre öneri yapılır. Veteriner hekimimiz ırk ve tüy yapısına göre en uygun sıklığı belirler.',
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
      body: [
        'Our in-clinic grooming service ensures your pet receives thorough care while remaining under veterinary supervision. Any skin issue, ear inflammation, parasite sign, or abnormal lump noticed during grooming is immediately reported to our vet — an examination can often be arranged the same day.',
        'Regular trimming and bathing for dogs and cats allows early detection of subcutaneous parasites (fleas, ticks), reduces heat stress in warmer months, and prevents coat matting and skin irritation. Nail clipping is equally important as a routine procedure to prevent gait problems and ingrown nails.',
        'We apply breed-specific grooming techniques at our clinic. Long-coated breeds such as Golden Retrievers, Poodles, and Maltese dogs have different care requirements from short-coated breeds, and each pet is assessed individually. Cat grooming is also an integral part of our service, carried out with minimal stress.',
        'For professional pet grooming within a veterinary clinic in Gönyeli / Lefkoşa, call Animare Veterinary Clinic: +90 533 844 91 92. Book an appointment to give your pet the best possible care.',
      ],
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
        {
          q: 'Can you groom aggressive or anxious pets?',
          a: 'Yes. Veterinary support at our clinic means we can provide calming measures where needed, allowing grooming to be completed safely even for anxious pets.',
        },
        {
          q: 'How often should my pet be groomed?',
          a: 'Every 6–8 weeks for long-coated breeds and 8–12 weeks for short-coated breeds is a common starting point, adjusted by season and coat condition. Our vet can recommend the optimal frequency for your specific breed.',
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
      body: [
        "Doğru beslenme, evcil hayvanınızın uzun ve sağlıklı bir yaşam sürmesinin temel taşıdır. Kliniğimizde veteriner hekimimiz hayvanınızın yaşını, ırkını, kilo durumunu, aktivite seviyesini ve mevcut sağlık sorunlarını göz önüne alarak kişiselleştirilmiş bir beslenme planı hazırlar.",
        'Yanlış veya yetersiz beslenme birçok hastalığa zemin hazırlar: obezite, diyabet, böbrek yetmezliği, eklem hasarı ve alerjik deri reaksiyonları bunların başında gelir. Veteriner hekiminin önerdiği bilimsel formüllü mamalar, market ürünlerinin aksine hastalık riski ve sağlık gereksinimi gözetilerek üretilir.',
        'Kliniğimizde bulundurduğumuz N&D Farmina premium mama serisi; tahılsız formüller, yaşa özel çeşitler ve veteriner diyet ürünleriyle hayvanınızın ihtiyacına yönelik doğru seçim yapmanızı kolaylaştırır. Obez hayvanlar için kontrollü diyet programları, kronik hastalar için destek diyetleri ve yavru beslenmesi konularında uzman desteği sunuyoruz.',
        'Gönyeli / Lefkoşa\'daki Animare Veteriner Kliniği\'nde beslenme danışmanlığı hakkında bilgi almak için +90 533 844 91 92 numaralı hattımızı arayabilirsiniz. Hayvanınızın sağlıklı yaşam yolculuğu doğru bir beslenme planıyla başlar.',
      ],
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
        {
          q: 'Ham beslenme (BARF) veya ev yapımı mama uygun mu?',
          a: 'BARF diyeti, doğru hazırlanmadığında besin eksikliği ve bakteri riski taşır. Veteriner hekimimizle birlikte oluşturulan ev yapımı beslenme planları ise dengeli ve güvenli olabilir. Bu konuyu mutlaka bir uzmanla görüşerek karar vermeniz önerilir.',
        },
        {
          q: 'Kısırlaştırma sonrası beslenme programı değişmeli mi?',
          a: 'Evet. Kısırlaştırmanın ardından metabolizma yavaşladığından obezite riski artar. Veteriner hekimimiz kısırlaştırma sonrası dönem için uygun kalori ve besin içeriğini belirleyerek beslenme planını günceller.',
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
      body: [
        "Proper nutrition is the cornerstone of a long and healthy life for your pet. Our veterinarian prepares a personalised nutrition plan based on your pet's age, breed, weight, activity level, and existing health conditions.",
        "Poor or inadequate nutrition lays the groundwork for many conditions: obesity, diabetes, kidney disease, joint damage, and allergic skin reactions are among the most common. Scientifically formulated foods recommended by a veterinarian are produced with specific health requirements and disease risk in mind — unlike most supermarket products.",
        "The premium N&D Farmina range we stock at our clinic includes grain-free formulas, life-stage specific varieties, and veterinary diet products, making it easier to find the right choice for your pet's individual needs. We provide expert guidance on controlled weight-loss programmes for overweight pets, support diets for chronic patients, and correct puppy and kitten feeding.",
        "For nutrition consulting at Animare Veterinary Clinic in Gönyeli / Lefkoşa, call us on +90 533 844 91 92. Your pet's healthy life journey begins with the right nutrition plan.",
      ],
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
        {
          q: 'Is raw feeding (BARF) or home-cooked food appropriate?',
          a: 'Raw diets carry risks of nutritional deficiency and bacterial contamination if not properly formulated. A home-cooked plan developed together with our vet can be balanced and safe. We strongly recommend discussing this with a specialist before making any changes.',
        },
        {
          q: 'Should nutrition change after neutering?',
          a: 'Yes. Metabolism slows after neutering, increasing the risk of obesity. Our vet will update the nutrition plan for the post-neutering period, specifying the appropriate calorie and nutrient profile.',
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
