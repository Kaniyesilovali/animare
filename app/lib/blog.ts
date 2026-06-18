export type Faq = { q: string; a: string }

export type BlogPost = {
  slug: { tr: string; en: string }
  date: string
  category: { tr: string; en: string }
  icon: string
  tr: {
    title: string
    summary: string
    body: string
    meta: { title: string; description: string; keywords: string[] }
    faqs: Faq[]
  }
  en: {
    title: string
    summary: string
    body: string
    meta: { title: string; description: string; keywords: string[] }
    faqs: Faq[]
  }
}

export const blogPosts: BlogPost[] = [
  {
    slug: { tr: 'kopek-asi-takvimi', en: 'dog-vaccination-schedule' },
    date: '2026-05-20',
    category: { tr: 'Koruyucu Sağlık', en: 'Preventive Health' },
    icon: '💉',
    tr: {
      title: 'Köpeğinizin Aşı Takvimi Hakkında Bilmeniz Gerekenler',
      summary: 'Köpeklerde temel aşılar, doğru zamanlama ve yıllık hatırlatma programı hakkında kapsamlı bir rehber.',
      body: `## Neden Aşı Bu Kadar Önemli?

Aşılama, köpeğinizi pek çok ölümcül ve bulaşıcı hastalıktan korumanın en etkili ve en uygun maliyetli yoludur. Doğru bir aşı takvimi uygulandığında parvovirus, distemper, hepatit, leptospiroz ve kuduz gibi ciddi hastalıkların riski büyük ölçüde azalır.

## Yavru Köpeklerde Aşı Takvimi

Yavru köpekler, anneden aldıkları bağışıklık 6–8 hafta arasında zayıflamaya başladığında aşılanmaya hazır hale gelir:

- **6–8. hafta:** İlk kombine aşı (DHPPi)
- **10–12. hafta:** İkinci doz DHPPi + Leptospiroz
- **14–16. hafta:** Üçüncü doz DHPPi + Leptospiroz + Kuduz

Bu temel seri tamamlandıktan sonra yıllık hatırlatma aşıları bağışıklığı korur.

## Yetişkin Köpeklerde Yıllık Takip

Yetişkin köpekler için yılda bir kez veteriner kontrolü ve gerekli hatırlatma aşıları önerilir. Bazı aşılar (örneğin kuduz) bölgeye göre değişen yasal zorunluluklar çerçevesinde uygulanır.

## Aşı Sonrası Dikkat Edilecekler

Aşı sonrasında hafif yorgunluk veya iştahsızlık birkaç gün sürebilir; bu normaldir. Ancak şiddetli şişlik, soluk almada güçlük veya bilinç değişikliği gibi belirtiler görülürse derhal kliniğimizi arayın.

## Sonuç

Düzenli aşı takibi hem köpeğinizin sağlığını hem de çevresindeki diğer hayvanları korur. Randevu almak için [bize ulaşın](/tr/iletisim).`,
      meta: {
        title: 'Köpek Aşı Takvimi — Yavru & Yetişkin Aşı Rehberi | Animare',
        description:
          "Köpeğinizin aşı takvimi hakkında kapsamlı rehber. Parvovirus, distemper, kuduz aşıları ve yıllık hatırlatma programı — Animare Veteriner Kliniği, Gönyeli / Lefkoşa, KKTC.",
        keywords: [
          'köpek aşı takvimi',
          'yavru köpek aşı programı',
          'köpek parvovirus aşısı',
          'kuduz aşısı köpek KKTC',
          'veteriner aşı Lefkoşa',
        ],
      },
      faqs: [
        {
          q: 'Yavru köpeğime kaç yaşında ilk aşıyı yaptırmalıyım?',
          a: 'İlk kombine aşı (DHPPi) genellikle 6–8. haftada uygulanır. Bu dönemde anneden alınan bağışıklık zayıflamaya başlar ve aşılama için en uygun pencere açılır.',
        },
        {
          q: 'Köpeklerde hangi aşılar zorunludur?',
          a: 'KKTC\'de kuduz aşısı yasal zorunluluktur. Bunun yanı sıra parvovirus, distemper ve hepatite karşı kombine aşı (DHPPi) temel koruyucu aşılar arasında yer alır.',
        },
        {
          q: 'Aşı yaptırdıktan sonra köpeğim hasta gibi davranırsa ne yapmalıyım?',
          a: 'Hafif yorgunluk veya iştahsızlık 1–2 gün sürebilir; bu normaldir. Ancak ciddi şişlik, solunum güçlüğü veya bilinç değişikliği varsa kliniğimizi hemen arayın.',
        },
        {
          q: 'Yetişkin köpeğimde aşı takibini aksattım, ne yapmalıyım?',
          a: 'Geç kalınmış aşılar için veteriner hekiminiz mevcut bağışıklık durumuna göre yeni bir takvim hazırlar. Gecikme ne kadar uzun olursa olsun aşılamaya yeniden başlamak mümkündür.',
        },
      ],
    },
    en: {
      title: "Everything You Need to Know About Your Dog's Vaccination Schedule",
      summary: 'A comprehensive guide to core dog vaccines, correct timing, and annual booster programmes.',
      body: `## Why Is Vaccination So Important?

Vaccination is the most effective and cost-efficient way to protect your dog against many deadly and contagious diseases. A correct vaccination schedule dramatically reduces the risk of parvovirus, distemper, hepatitis, leptospirosis, and rabies.

## Puppy Vaccination Schedule

Puppies are ready for their first vaccines when the maternal immunity they received starts to wane, usually around 6–8 weeks:

- **6–8 weeks:** First combination vaccine (DHPPi)
- **10–12 weeks:** Second DHPPi + Leptospirosis
- **14–16 weeks:** Third DHPPi + Leptospirosis + Rabies

Once this core series is complete, annual booster doses maintain immunity throughout adulthood.

## Annual Check-ups for Adult Dogs

Adult dogs benefit from a yearly veterinary visit and the appropriate booster doses. Some vaccines (such as rabies) are subject to local legal requirements that vary by region.

## What to Watch After Vaccination

Mild lethargy or reduced appetite for a day or two after vaccination is normal. However, if you notice severe swelling, breathing difficulties, or changes in consciousness, contact our clinic immediately.

## Conclusion

Keeping vaccinations up to date protects your dog's health as well as other animals in the community. [Contact us](/en/contact) to book an appointment.`,
      meta: {
        title: "Dog Vaccination Schedule — Puppy & Adult Vaccine Guide | Animare",
        description:
          'Comprehensive guide to your dog\'s vaccination schedule. Parvovirus, distemper, rabies vaccines and annual boosters — Animare Veterinary Clinic, Gönyeli / Lefkoşa, North Cyprus.',
        keywords: [
          'dog vaccination schedule Lefkoşa',
          'puppy vaccine Nicosia',
          'dog parvovirus vaccine Lefkoşa',
          'rabies vaccine dog Gönyeli',
          'vet vaccination Lefkoşa',
        ],
      },
      faqs: [
        {
          q: 'At what age should I give my puppy its first vaccine?',
          a: 'The first combination vaccine (DHPPi) is typically given at 6–8 weeks of age, when maternal immunity begins to wane and the vaccination window opens.',
        },
        {
          q: 'Which vaccines are compulsory for dogs?',
          a: 'Rabies vaccination is a legal requirement in the TRNC. The core combination vaccine (DHPPi) covering parvovirus, distemper, and hepatitis is also strongly recommended as standard preventive care.',
        },
        {
          q: 'My dog seems unwell after a vaccine — what should I do?',
          a: 'Mild lethargy or reduced appetite for a day or two is normal. However, if you notice severe swelling, breathing difficulties, or changes in consciousness, contact our clinic immediately.',
        },
        {
          q: 'I missed my adult dog\'s booster — is it too late?',
          a: 'It is never too late to restart vaccination. Your vet will assess the situation and draw up a new schedule based on your dog\'s current immunity status, regardless of how long ago the last vaccine was given.',
        },
      ],
    },
  },
  {
    slug: { tr: 'kedilerde-dis-bakimi', en: 'cat-dental-care' },
    date: '2026-05-28',
    category: { tr: 'Ağız Sağlığı', en: 'Oral Health' },
    icon: '🦷',
    tr: {
      title: 'Kedilerde Diş Bakımı: Neden Bu Kadar Önemli?',
      summary: 'Kedi ağız sağlığının genel sağlığa etkisi, diş taşı belirtileri ve evde diş bakımı yöntemleri.',
      body: `## Kedi Ağız Sağlığını Neden Ciddiye Almalısınız?

Araştırmalar, 3 yaşın üzerindeki kedilerin büyük çoğunluğunun diş eti hastalığıyla karşılaştığını ortaya koymaktadır. Tedavi edilmeyen diş taşı ve iltihaplı diş etleri, bakterilerin kan dolaşımına karışmasına yol açarak **kalp, böbrek ve karaciğer** gibi hayati organları olumsuz etkileyebilir.

## Diş Sorununun Belirtileri

Aşağıdaki belirtileri fark ediyorsanız veterinere başvurmanız gerekir:

- Ağız kokusu (halitosis)
- Sarı-kahverengi diş taşı birikimi
- Diş etlerinde kızarıklık veya kanama
- Yemek yerken ağzını eğme veya yavaş yeme
- İştahsızlık

## Profesyonel Diş Bakımı

Kliniğimizde ultrasonik diş taşı temizliği kısa süreli anestezi altında yapılmaktadır. Bu sayede kedi hem stres yaşamaz hem de işlem güvenle tamamlanır. Temizleme sonrası diş eti sağlığı değerlendirilir; gerekirse hasarlı dişler çekilir.

## Evde Diş Bakımı İpuçları

- Kedilere özel yumuşak diş fırçası ve enzimli macun kullanın (insan macunu toksik olduğu için kesinlikle kullanmayın).
- Önce parmağınıza macun sürerek kedinin tatmasına izin verin; ardından kademeli olarak fırçalamaya geçin.
- Diş bakımını destekleyen özel mamalar ve çiğneme oyuncakları da yardımcı olabilir.

## Ne Sıklıkla Temizlik Yaptırmalıyım?

Yılda en az bir kez profesyonel temizlik önerilir. Diş taşına eğilimli ırklarda bu sıklık artabilir. [Randevu almak için bize ulaşın.](/tr/iletisim)`,
      meta: {
        title: 'Kedi Diş Bakımı — Ağız Sağlığı Rehberi | Animare',
        description:
          'Kedi diş taşı, diş eti iltihabı ve ağız sağlığı hakkında kapsamlı rehber. Evde diş bakımı ipuçları ve profesyonel temizlik — Animare Veteriner Kliniği, Lefkoşa, KKTC.',
        keywords: [
          'kedi diş bakımı',
          'kedi diş taşı temizliği Lefkoşa',
          'kedi ağız sağlığı KKTC',
          'kedi diş eti hastalığı',
          'veteriner diş bakımı Gönyeli',
        ],
      },
      faqs: [
        {
          q: 'Kedimde diş taşı olduğunu nasıl anlarım?',
          a: 'Dişlerde sarı-kahverengi birikinti, ağız kokusu, diş etlerinde kızarıklık veya yemek yerken ağzını eğme gibi belirtiler diş taşına işaret eder. Bu durumda veteriner kontrolü önerilir.',
        },
        {
          q: 'Kedi diş temizliği anestezi olmadan yapılabilir mi?',
          a: 'Etkili bir ultrasonik diş taşı temizliği için kısa süreli anestezi gereklidir. Anestezi olmadan yapılan "bilinçli" temizlik yüzeysel kalır ve stres yaratabilir.',
        },
        {
          q: 'Kedime kaç yılda bir diş temizliği yaptırmalıyım?',
          a: 'Çoğu kedi için yılda bir kez önerilir. Diş taşına eğilimli ırklar veya kronik ağız problemleri olan kedilerde bu sıklık artabilir.',
        },
        {
          q: 'Evde kedi dişi fırçalamak güvenli midir?',
          a: 'Evet, kedilere özel enzimli macun ve yumuşak diş fırçası ile yapılan düzenli fırçalama güvenlidir. İnsan macunu kullanmayın — içindeki florür kediler için toksiktir.',
        },
      ],
    },
    en: {
      title: "Cat Dental Care: Why It Matters More Than You Think",
      summary: 'The impact of oral health on your cat\'s overall wellbeing, signs of dental disease, and home care tips.',
      body: `## Why Take Your Cat's Dental Health Seriously?

Research shows that the vast majority of cats over the age of three have some degree of dental disease. Untreated tartar and gum inflammation allow bacteria to enter the bloodstream, potentially damaging vital organs such as the **heart, kidneys, and liver**.

## Signs of Dental Problems

See your vet if you notice any of the following:

- Bad breath (halitosis)
- Yellow or brown tartar build-up
- Red or bleeding gums
- Tilting the head or eating slowly
- Loss of appetite

## Professional Dental Care

At our clinic, ultrasonic tartar cleaning is performed under short-acting anaesthesia, ensuring the cat remains stress-free throughout the procedure. Gum health is assessed after cleaning, and damaged teeth are extracted where necessary.

## Home Dental Care Tips

- Use a soft toothbrush designed for cats and enzymatic toothpaste (never use human toothpaste — it is toxic to cats).
- Start by letting your cat lick the paste off your finger, then gradually introduce the brush.
- Dental-support diets and chew toys can also help maintain oral hygiene between professional cleans.

## How Often Should I Have My Cat's Teeth Cleaned?

Professional cleaning at least once a year is recommended. Breeds prone to tartar may benefit from more frequent appointments. [Contact us to book.](/en/contact)`,
      meta: {
        title: "Cat Dental Care — Oral Health Guide | Animare",
        description:
          "Comprehensive guide to cat dental disease, tartar, and gum health. Home care tips and professional cleaning — Animare Veterinary Clinic, Lefkoşa, North Cyprus.",
        keywords: [
          'cat dental care',
          'cat tartar cleaning Lefkoşa',
          'cat oral health Lefkoşa',
          'cat gum disease',
          'vet dental care Nicosia',
        ],
      },
      faqs: [
        {
          q: 'How do I know if my cat has dental disease?',
          a: 'Yellow or brown tartar build-up on the teeth, bad breath, red gums, or difficulty eating are common signs. A veterinary examination is recommended if you notice any of these.',
        },
        {
          q: 'Can cat teeth be cleaned without anaesthesia?',
          a: 'Effective ultrasonic tartar removal requires short-acting anaesthesia. Conscious "non-anaesthetic" cleaning is superficial at best and can be stressful for the cat.',
        },
        {
          q: 'How often should I have my cat\'s teeth professionally cleaned?',
          a: 'Once a year is the standard recommendation for most cats. Breeds prone to tartar build-up or those with chronic oral conditions may need more frequent cleaning.',
        },
        {
          q: 'Is it safe to brush my cat\'s teeth at home?',
          a: 'Yes — using a soft cat-specific toothbrush and enzymatic toothpaste designed for cats is perfectly safe. Never use human toothpaste, as the fluoride content is toxic to cats.',
        },
      ],
    },
  },
  {
    slug: { tr: 'yaz-sicaginda-evcil-hayvan', en: 'summer-heat-pet-safety' },
    date: '2026-06-05',
    category: { tr: 'Mevsimsel Sağlık', en: 'Seasonal Health' },
    icon: '☀️',
    tr: {
      title: 'Yaz Sıcaklarında Evcil Hayvanınızı Nasıl Korursunuz?',
      summary: "Kuzey Kıbrıs'ın sıcak yazlarında köpek ve kedilerde sıcak çarpması belirtileri ve koruyucu önlemler.",
      body: `## Kuzey Kıbrıs Yazında Hayvan Sağlığı

Kuzey Kıbrıs'ta yaz aylarında sıcaklık 40°C'yi aşabilir. Evcil hayvanlar, özellikle yaşlı, şişman veya kısa burunlu (brakisefal) ırklar, sıcak çarpmasına karşı oldukça savunmasızdır.

## Sıcak Çarpması Belirtileri

Acil veteriner müdahale gerektiren belirtiler şunlardır:

- Aşırı nefes nefese kalma veya ağızdan solunum
- Dilin ve dişetlerinin koyulaşması
- Halsizlik ve yürüyememe
- Kusma veya ishal
- Bilinç bulanıklığı ya da bayılma

Bu belirtilerden herhangi birini gördüğünüzde hayvanı serin bir ortama alın ve **hemen +90 533 844 91 92**'yi arayın.

## Korunma Yöntemleri

**Su:** Hayvanın her zaman temiz ve taze suya erişimi olsun. Sıcak havalarda su kaplarını gün içinde birkaç kez doldurun.

**Gölge:** Bahçede kalan hayvanlar için mutlaka gölgeli alan oluşturun; doğrudan güneş altında bırakmayın.

**Yürüyüş saati:** Sabah erken (07:00'den önce) veya akşam serinliğinde (19:00 sonrası) yürüyüşe çıkın. Asfalt yüzeyin pençe tabanlarını yakabileceğini unutmayın.

**Araba:** Hayvanı hiçbir zaman park halindeki araçta bırakmayın; birkaç dakika içinde ölümcül sıcaklıklara ulaşabilir.

**Tıraş:** Kıl yapısına göre seyreltme tıraşı serinlemeye yardımcı olabilir; ancak kesinlikle sıfırlanmamalıdır. Pet kuaförümüze danışın.

## Brakisefal Irklar İçin Ekstra Dikkat

Fransız Bulldog, Pug ve Pers kedisi gibi kısa burunlu ırklar düşük sıcaklıklarda bile solunum güçlüğü çekebilir. Bu ırklarda yaz aylarında klimanın devamlı çalıştırılması önerilir.

Sorularınız için [bize ulaşın](/tr/iletisim) ya da kliniğimizi arayın.`,
      meta: {
        title: 'Yaz Sıcağında Evcil Hayvan Bakımı — Sıcak Çarpması Rehberi | Animare',
        description:
          "Kuzey Kıbrıs yazında köpek ve kedi sağlığını koruma rehberi. Sıcak çarpması belirtileri, korunma yöntemleri ve acil müdahale — Animare Veteriner Kliniği, Lefkoşa, KKTC.",
        keywords: [
          'yaz sıcağında evcil hayvan',
          'köpek sıcak çarpması',
          'kedi yaz bakımı KKTC',
          'evcil hayvan sıcak koruma Lefkoşa',
          'brakisefal ırk yaz Lefkoşa',
        ],
      },
      faqs: [
        {
          q: 'Köpeğimde sıcak çarpması olduğunu nasıl anlarım?',
          a: 'Aşırı nefes nefese kalma, dilin ve diş etlerinin koyulaşması, halsizlik, kusma veya bilinç bulanıklığı sıcak çarpmasının belirtileridir. Bu durumda hayvanı serin bir yere alın ve acil olarak kliniğimizi arayın.',
        },
        {
          q: 'Köpeğimi sıcakta yürüyüşe çıkarabilir miyim?',
          a: 'Sabah 07:00\'den önce veya akşam 19:00\'dan sonra yürüyüşe çıkmanız güvenlidir. Gün ortasında asfaltta yürüyüş hem sıcak çarpması hem de pençe yanıklarına neden olabilir.',
        },
        {
          q: 'Kısa burunlu ırklarda yaz dönemi neden daha riskli?',
          a: 'Fransız Bulldog, Pug gibi brakisefal ırklar yapısal özellikleri nedeniyle solunumu zaten kısıtlıdır. Yüksek sıcaklıklarda bu durum belirginleşir; bu nedenle klimanın sürekli çalışması önerilir.',
        },
        {
          q: 'Evcil hayvanımı arabada bırakabilir miyim?',
          a: 'Hayır. Park halindeki bir araç, dış ortam 25°C iken bile birkaç dakika içinde 50°C\'yi aşabilir. Bu durum kısa sürede ölümcül sonuçlara yol açar.',
        },
      ],
    },
    en: {
      title: 'How to Keep Your Pet Safe in Summer Heat',
      summary: 'Heatstroke signs and protective measures for dogs and cats during North Cyprus\'s hot summers.',
      body: `## Pet Health During a North Cyprus Summer

Temperatures in North Cyprus can exceed 40 °C in summer. Pets — especially older, overweight, or short-nosed (brachycephalic) breeds — are particularly vulnerable to heatstroke.

## Signs of Heatstroke

The following symptoms require urgent veterinary attention:

- Excessive panting or open-mouth breathing
- Darkening of the tongue and gums
- Weakness and inability to walk
- Vomiting or diarrhoea
- Confusion or collapse

If you observe any of these signs, move your pet to a cool area immediately and **call +90 533 844 91 92 right away**.

## Prevention Tips

**Water:** Always ensure access to fresh, cool water. Refill bowls several times a day in hot weather.

**Shade:** Provide shaded areas for pets that spend time outdoors; never leave them in direct sunlight.

**Walk timing:** Walk your dog early morning (before 07:00) or in the cool of the evening (after 19:00). Remember that hot asphalt can burn paw pads.

**Cars:** Never leave your pet in a parked car; temperatures can reach lethal levels within minutes.

**Grooming:** A thinning trim (not a full shave) can help with heat management — consult our pet grooming service for breed-appropriate advice.

## Extra Care for Brachycephalic Breeds

Flat-faced breeds such as French Bulldogs, Pugs, and Persian cats can struggle to breathe even at moderate temperatures. Running air conditioning continuously through summer is strongly advised for these breeds.

[Contact us](/en/contact) with any questions or call our clinic directly.`,
      meta: {
        title: "Summer Pet Safety — Heatstroke Guide | Animare",
        description:
          "Guide to protecting your dog and cat during North Cyprus summers. Heatstroke signs, prevention tips, and emergency response — Animare Veterinary Clinic, Lefkoşa.",
        keywords: [
          'summer pet safety Lefkoşa',
          'dog heatstroke Nicosia',
          'cat summer care Lefkoşa',
          'pet heat protection Lefkoşa',
          'brachycephalic breed summer',
        ],
      },
      faqs: [
        {
          q: 'How do I know if my dog has heatstroke?',
          a: 'Signs include excessive panting, darkened tongue and gums, weakness, vomiting, or collapse. Move your pet to a cool area immediately and call our clinic for urgent advice.',
        },
        {
          q: 'When is it safe to walk my dog in North Cyprus summer?',
          a: 'Early morning (before 07:00) or evening (after 19:00) are the safest times. Midday walks on hot asphalt risk heatstroke and can burn paw pads.',
        },
        {
          q: 'Why are flat-faced breeds at higher risk in summer?',
          a: 'Brachycephalic breeds such as French Bulldogs and Pugs have structurally restricted airways that make breathing harder even at normal temperatures. Heat amplifies this significantly — air conditioning should run continuously.',
        },
        {
          q: 'Can I leave my pet in a parked car briefly?',
          a: 'No. A parked car can reach over 50 °C within minutes even when the outside temperature is only 25 °C. This can be fatal in a very short time.',
        },
      ],
    },
  },
  {
    slug: { tr: 'yaz-aylarinda-ektoparazit-koruma', en: 'ectoparasite-protection-summer' },
    date: '2026-06-10',
    category: { tr: 'Parazit Koruması', en: 'Parasite Protection' },
    icon: '🦟',
    tr: {
      title: 'Yaz Aylarında Ektoparazitlere Karşı Koruma Neden Hayati Önem Taşır?',
      summary: 'Pire, kene, sivrisinek ve kum sineğinin taşıdığı hastalıklar ve yaz aylarında ektoparazit korumasının önemi.',
      body: `## Neden Yaz Aylarında Ektoparazit Riski Artar?

Yüksek sıcaklık ve artan nem, pire, kene, sivrisinek ve kum sineği gibi ektoparazitlerin çoğalması için ideal koşulları oluşturur. Bu parazitler yalnızca kaşıntı ve deri problemlerine neden olmakla kalmaz, aynı zamanda ciddi hastalık etkenlerini de taşıyabilir.

## Hangi Parazitler Hangi Hastalıkları Taşır?

**Keneler**, babesiosis, ehrlichiosis ve anaplasmosis gibi yaşamı tehdit edebilen hastalıkların bulaşmasında rol oynayabilir.

**Pireler**, alerjik dermatit, yoğun kaşıntı ve deri enfeksiyonlarına neden olabilir; ayrıca bazı bağırsak parazitlerinin bulaşmasında ara konak görevi görür.

**Sivrisinekler**, köpeklerde kalp ve akciğer damarlarını etkileyen kalp kurdu hastalığının (Dirofilaria immitis) bulaşmasında önemli vektörlerdir.

**Kum sinekleri (tatarcıklar)** ise özellikle köpeklerde görülen Leishmaniosis hastalığını bulaştırabilir. Leishmaniosis; deri lezyonları, kilo kaybı, göz problemleri ve iç organlarda çeşitli hasarlara neden olabilen ciddi bir hastalıktır.

## Peki Ne Yapmalıyız?

- Veteriner hekiminizin önerdiği koruma programını düzenli olarak uygulayın.
- Koruyucu ürünlerin kullanım süresini takip edin.
- Yürüyüş sonrası tüy ve deri kontrolü yapın.
- Şüpheli bir durumda veteriner hekiminize danışın.

Düzenli ektoparazit koruması, yalnızca parazitleri uzaklaştırmak için değil, bu parazitlerin taşıdığı hastalıklara karşı da en etkili koruyucu sağlık uygulamalarından biridir.

Unutmayın, parazitlerle mücadelede en etkili yöntem tedavi değil, korumadır.

Koruma programı hakkında bilgi almak için [bize ulaşın](/tr/iletisim).`,
      meta: {
        title: 'Yaz Aylarında Ektoparazit Koruması — Pire, Kene, Leishmaniosis | Animare',
        description:
          'Yaz aylarında pire, kene, sivrisinek ve kum sineğinin taşıdığı hastalıklar ve ektoparazit korumasının önemi — Animare Veteriner Kliniği, Gönyeli / Lefkoşa, KKTC.',
        keywords: [
          'ektoparazit koruma köpek kedi',
          'kene babesiosis KKTC',
          'Leishmaniosis kum sineği KKTC Lefkoşa',
          'kalp kurdu sivrisinek köpek',
          'veteriner parazit koruması Lefkoşa',
        ],
      },
      faqs: [
        {
          q: 'Kuzey Kıbrıs\'ta Leishmaniosis riski gerçekten var mı?',
          a: 'Evet. Kum sinekleri (tatarcıklar) bölgemizde yaygındır ve Leishmaniosis\'i köpeklere bulaştırabilir. Hastalık deri lezyonları, kilo kaybı ve iç organ hasarına neden olabilir; koruyucu önlem almak kritik önem taşır.',
        },
        {
          q: 'Kalp kurdu (Dirofilaria) nedir ve köpeğimi nasıl etkiler?',
          a: 'Kalp kurdu, sivrisinekler aracılığıyla bulaşan ve köpeğin kalp ile akciğer damarlarında yerleşen bir parazittir. Erken dönemde belirti vermez; ilerledikçe öksürük, nefes darlığı ve kalp yetmezliğine yol açabilir.',
        },
        {
          q: 'Ektoparazit koruması için hangi ürünler kullanılmalı?',
          a: 'Spot-on (ense damlası), antiparaziter tasma veya ağızdan alınan tablet formları mevcuttur. Hangi ürünün uygun olduğunu evcil hayvanınızın yaşına, kilosuna ve sağlık durumuna göre veteriner hekiminiz belirlemelidir.',
        },
        {
          q: 'Kedileri de ektoparazitlerden korumak gerekiyor mu?',
          a: 'Evet, özellikle dışarı çıkan kediler pire ve kene riskiyle karşı karşıyadır. Kediler için bazı köpek antiparaziter ürünleri zehirli olabilir; mutlaka kedilere özel onaylı ürünler kullanılmalıdır.',
        },
      ],
    },
    en: {
      title: 'Why Ectoparasite Protection in Summer Is Vital for Your Pet',
      summary: 'The diseases carried by fleas, ticks, mosquitoes, and sand flies — and why summer ectoparasite prevention matters.',
      body: `## Why Does Ectoparasite Risk Increase in Summer?

High temperatures and rising humidity create ideal conditions for the proliferation of ectoparasites such as fleas, ticks, mosquitoes, and sand flies. These parasites do not only cause itching and skin problems — they also carry pathogens that can lead to serious diseases.

## Which Parasites Carry Which Diseases?

**Ticks** can transmit life-threatening conditions including babesiosis, ehrlichiosis, and anaplasmosis.

**Fleas** can cause allergic dermatitis, intense itching, and skin infections, and also act as intermediate hosts for certain intestinal parasites.

**Mosquitoes** are important vectors for heartworm disease (Dirofilaria immitis), which affects the heart and pulmonary vessels in dogs.

**Sand flies** can transmit Leishmaniosis, a disease seen mainly in dogs. Leishmaniosis is a serious condition that can cause skin lesions, weight loss, eye problems, and damage to internal organs.

## What Should We Do?

- Apply the protection programme recommended by your veterinarian regularly.
- Keep track of the duration of protective products.
- Check your pet's coat and skin after walks.
- Consult your veterinarian if you notice anything suspicious.

Regular ectoparasite protection is not only effective at repelling parasites — it is one of the most important preventive health measures against the diseases they carry.

Remember: the most effective way to fight parasites is prevention, not treatment.

[Contact us](/en/contact) to learn more about parasite prevention programmes.`,
      meta: {
        title: 'Summer Ectoparasite Protection — Fleas, Ticks & Leishmaniosis | Animare',
        description:
          'Diseases carried by fleas, ticks, mosquitoes, and sand flies in summer — and why ectoparasite prevention is essential. Animare Veterinary Clinic, Gönyeli / Lefkoşa, North Cyprus.',
        keywords: [
          'ectoparasite protection dog cat',
          'tick babesiosis Lefkoşa',
          'Leishmaniosis sand fly Nicosia',
          'heartworm mosquito dog',
          'vet parasite prevention Lefkoşa',
        ],
      },
      faqs: [
        {
          q: 'Is Leishmaniosis a real risk in North Cyprus?',
          a: 'Yes. Sand flies are common in the region and can transmit Leishmaniosis to dogs. The disease can cause skin lesions, weight loss, and internal organ damage — preventive treatment is essential.',
        },
        {
          q: 'What is heartworm and how does it affect my dog?',
          a: 'Heartworm (Dirofilaria immitis) is a parasite transmitted by mosquitoes that settles in the dog\'s heart and pulmonary vessels. It shows no symptoms early on but progresses to coughing, breathing difficulties, and heart failure if untreated.',
        },
        {
          q: 'What type of ectoparasite protection products are available?',
          a: 'Options include spot-on (topical) treatments, antiparasitic collars, and oral tablets. Your vet will recommend the most appropriate product based on your pet\'s age, weight, and health status.',
        },
        {
          q: 'Do cats also need ectoparasite protection?',
          a: 'Yes, especially cats that go outdoors. Cats are at risk from fleas and ticks. Importantly, many dog antiparasitic products are toxic to cats — only use products specifically approved for cats.',
        },
      ],
    },
  },
]

export function getBlogPost(slug: string, lang: 'tr' | 'en'): BlogPost | undefined {
  return blogPosts.find((p) => p.slug[lang] === slug)
}

export function getAllBlogSlugs(lang: 'tr' | 'en'): string[] {
  return blogPosts.map((p) => p.slug[lang])
}
