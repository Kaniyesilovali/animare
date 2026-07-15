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
  {
    slug: { tr: 'kedi-kopek-otitis-eksterna', en: 'otitis-externa-cats-dogs' },
    date: '2026-07-15',
    category: { tr: 'Kulak Sağlığı', en: 'Ear Health' },
    icon: '👂',
    tr: {
      title: 'Kedi ve Köpeklerde Otitis Eksterna (Dış Kulak İltihabı) Neden Oluşur?',
      summary: 'Kedi ve köpeklerde dış kulak yolu iltihabının en sık nedenleri, belirtileri ve ne zaman veterinere başvurmanız gerektiği.',
      body: `## Otitis Eksterna Nedir?

Otitis eksterna, dış kulak yolunun iltihaplanmasıdır. Kedi ve köpeklerde en sık görülen kulak problemidir ve tek başına bir hastalık değil, altta yatan bir sorunun sonucudur. Sürekli kaşıma, başını sallama ve kötü kokan akıntı çoğu hayvan sahibinin ilk fark ettiği belirtilerdir.

Peki bu iltihap neden oluşur? Cevap genellikle tek bir nedene değil, birkaç faktörün birleşimine dayanır.

## En Sık Görülen Nedenler

**Kulak uyuzu (parazitler):** Özellikle yavru kedilerde ve köpeklerde *Otodectes* kulak akarı yaygındır. Yoğun kaşıntıya ve kahverengi-siyah, kahve telvesini andıran kir birikimine yol açar.

**Nem ve su:** Kuzey Kıbrıs'ın sıcak ve nemli iklimi, kulak yolunda nemin uzun süre kalmasına neden olur. Banyo veya denizde yüzme sonrası kuru bırakılmayan kulaklar, maya ve bakteri üremesi için ideal ortam oluşturur.

**Alerjiler:** Besin alerjileri ve atopik dermatit (çevresel alerji), köpeklerde tekrarlayan kulak iltihaplarının en sık gözden kaçan nedenidir. Kulak, çoğu zaman alerjinin ilk belirti verdiği yerdir.

**Maya ve bakteri üremesi:** *Malassezia* mayası ve çeşitli bakteriler sağlıklı kulakta da bulunur; ancak nem, alerji veya kir birikimi dengeyi bozunca aşırı çoğalarak iltihaba yol açar.

**Kulak yapısı ve ırk:** Cocker Spaniel, Basset Hound gibi sarkık kulaklı ırklar ile kulak kanalında yoğun tüy bulunan ırklarda hava dolaşımı azdır; bu da riski artırır.

**Yabancı cisimler:** Özellikle ilkbahar ve yaz aylarında ot tohumları (arpa başağı) kulak kanalına kaçarak ani, tek taraflı ve şiddetli bir iltihaba neden olabilir.

**Kulak kiri birikimi ve altta yatan hastalıklar:** Aşırı kir üretimi, hormonal bozukluklar veya bağışıklık sistemi sorunları da kronik kulak iltihaplarını tetikleyebilir.

## Hangi Belirtilere Dikkat Etmelisiniz?

- Kulağını sık sık kaşıma veya yere/eşyaya sürtme
- Başını tek yöne eğme veya sürekli sallama
- Kulaktan gelen kötü koku
- Kahverengi, sarı veya iltihaplı akıntı
- Kulak kepçesinde kızarıklık, şişlik veya sıcaklık
- Kulağına dokunulduğunda acı belirtisi göstermesi

## Kulağı Evde Kendiniz Temizlemeyin

Birçok hayvan sahibi kulağı pamuklu çubukla temizlemeye çalışır. Bu, kiri kanalın derinine iterek durumu kötüleştirebilir ve kulak zarına zarar verebilir. Kulak zarının sağlam olup olmadığı bilinmeden kullanılan damlalar da kalıcı işitme kaybına yol açabilir.

Doğru yaklaşım, otoskopla kulak kanalını ve kulak zarını değerlendirmek, gerekirse akıntıdan alınan örneği mikroskopla incelemektir. Bu sayede sorunun parazit mi, maya mı yoksa bakteri kaynaklı mı olduğu belirlenir ve tedavi buna göre planlanır.

## Lefkoşa ve Gönyeli'de Kulak Sağlığı

Gönyeli / Lefkoşa'daki kliniğimizde kedi ve köpeklerde otitis eksterna sık karşılaştığımız şikâyetlerden biridir. Bölgemizin sıcak ve nemli iklimi, özellikle yaz aylarında kulak iltihaplarını artırır. Erken müdahale, tekrarlayan ve kronikleşen kulak problemlerinin önüne geçmenin en etkili yoludur.

Evcil dostunuzda yukarıdaki belirtilerden birini fark ettiyseniz, kulağın kendi kendine geçmesini beklemeyin. [Randevu almak için bize ulaşın.](/tr/iletisim)`,
      meta: {
        title: 'Kedi ve Köpeklerde Otitis Eksterna Nedenleri | Lefkoşa Veteriner — Animare',
        description:
          'Kedi ve köpeklerde otitis eksterna (dış kulak iltihabı) neden oluşur? Kulak uyuzu, nem, alerji ve maya kaynaklı kulak iltihabının belirtileri ve tedavisi — Animare Veteriner Kliniği, Gönyeli / Lefkoşa, KKTC.',
        keywords: [
          'kedi köpek kulak iltihabı Lefkoşa',
          'otitis eksterna köpek kedi',
          'dış kulak iltihabı belirtileri',
          'kulak uyuzu tedavisi Gönyeli',
          'veteriner Lefkoşa Gönyeli',
        ],
      },
      faqs: [
        {
          q: 'Köpeğimin kulağı sürekli kaşınıyor ve kötü kokuyor, ne yapmalıyım?',
          a: 'Bu belirtiler dış kulak iltihabına (otitis eksterna) işaret eder. Evde temizlik yapmadan veteriner hekiminize başvurun; kulak kanalının otoskopla değerlendirilmesi ve akıntının mikroskopla incelenmesi doğru tedavi için gereklidir.',
        },
        {
          q: 'Kulak iltihabı bulaşıcı mıdır?',
          a: 'Nedenine göre değişir. Alerji veya maya kaynaklı iltihaplar bulaşıcı değildir; ancak kulak uyuzu (Otodectes akarı) diğer kedi ve köpeklere kolayca bulaşır. Bu nedenle evde birden fazla hayvan varsa hepsinin kontrol edilmesi önerilir.',
        },
        {
          q: 'Kulağı pamuklu çubukla temizleyebilir miyim?',
          a: 'Hayır. Pamuklu çubuk kiri kanalın derinine iterek durumu kötüleştirir ve kulak zarına zarar verebilir. Kulak temizliği, kulak zarının sağlam olduğu doğrulandıktan sonra uygun bir solüsyonla yapılmalıdır.',
        },
        {
          q: 'Kulak iltihabı neden tekrarlıyor?',
          a: 'Tekrarlayan kulak iltihaplarının arkasında çoğu zaman besin alerjisi, atopik dermatit veya kulak yapısı gibi altta yatan bir neden vardır. Sadece belirtiyi tedavi etmek yeterli olmaz; asıl nedenin belirlenmesi gerekir.',
        },
      ],
    },
    en: {
      title: 'Why Do Cats and Dogs Get Otitis Externa (Outer Ear Infection)?',
      summary: 'The most common causes of outer ear inflammation in cats and dogs, warning signs, and when to see your vet.',
      body: `## What Is Otitis Externa?

Otitis externa is inflammation of the outer ear canal. It is the most common ear problem in cats and dogs, and it is not a disease in itself but the result of an underlying issue. Constant scratching, head shaking, and foul-smelling discharge are usually the first signs owners notice.

So why does this inflammation develop? The answer is rarely a single cause — it is usually a combination of factors.

## The Most Common Causes

**Ear mites (parasites):** *Otodectes* ear mites are common, especially in kittens and puppies. They cause intense itching and a dark, coffee-ground-like build-up of debris.

**Moisture and water:** The warm, humid climate of North Cyprus keeps moisture trapped in the ear canal. Ears left damp after bathing or swimming create the ideal environment for yeast and bacteria to grow.

**Allergies:** Food allergies and atopic dermatitis (environmental allergy) are the most frequently overlooked cause of recurring ear infections in dogs. The ear is often the first place an allergy shows itself.

**Yeast and bacterial overgrowth:** *Malassezia* yeast and various bacteria live in healthy ears too — but when moisture, allergy, or debris upset the balance, they multiply and cause inflammation.

**Ear anatomy and breed:** Breeds with floppy ears such as Cocker Spaniels and Basset Hounds, or those with heavy hair in the canal, have poor airflow, which raises the risk.

**Foreign bodies:** Especially in spring and summer, grass seeds (awns) can lodge in the ear canal, causing a sudden, one-sided, and severe inflammation.

**Wax build-up and underlying conditions:** Excessive wax production, hormonal disorders, or immune problems can also trigger chronic ear infections.

## Signs to Watch For

- Frequent scratching or rubbing the ear against furniture or the floor
- Tilting the head to one side or persistent head shaking
- A bad smell coming from the ear
- Brown, yellow, or infected discharge
- Redness, swelling, or warmth in the ear flap
- Signs of pain when the ear is touched

## Do Not Clean the Ear at Home

Many owners reach for a cotton bud. This can push debris deeper into the canal, worsening the problem and risking damage to the eardrum. Drops used without knowing whether the eardrum is intact can even cause permanent hearing loss.

The correct approach is to examine the ear canal and eardrum with an otoscope and, where needed, to examine a sample of the discharge under a microscope. This determines whether the cause is parasitic, yeast, or bacterial, so treatment can be planned accordingly.

## Ear Health in Lefkoşa and Gönyeli

At our clinic in Gönyeli / Lefkoşa, otitis externa is one of the complaints we see most often in cats and dogs. The region's warm, humid climate increases ear infections, particularly in summer. Early intervention is the most effective way to prevent recurring and chronic ear problems.

If you notice any of the signs above in your pet, do not wait for the ear to heal on its own. [Contact us to book an appointment.](/en/contact)`,
      meta: {
        title: 'Otitis Externa in Cats and Dogs — Causes | Lefkoşa Vet — Animare',
        description:
          'Why do cats and dogs get otitis externa (outer ear infection)? Signs and treatment of ear infections caused by mites, moisture, allergy, and yeast — Animare Veterinary Clinic, Gönyeli / Lefkoşa, North Cyprus.',
        keywords: [
          'cat dog ear infection Lefkoşa',
          'otitis externa dog cat',
          'outer ear inflammation signs',
          'ear mite treatment Gönyeli',
          'vet Lefkoşa Nicosia',
        ],
      },
      faqs: [
        {
          q: 'My dog keeps scratching its ear and it smells bad — what should I do?',
          a: 'These signs point to outer ear inflammation (otitis externa). Do not clean it at home first; see your vet. Examining the ear canal with an otoscope and the discharge under a microscope is essential for correct treatment.',
        },
        {
          q: 'Is an ear infection contagious?',
          a: 'It depends on the cause. Allergy- or yeast-related infections are not contagious, but ear mites (Otodectes) spread easily between cats and dogs. If you have more than one pet at home, all of them should be checked.',
        },
        {
          q: 'Can I clean the ear with a cotton bud?',
          a: 'No. A cotton bud pushes debris deeper into the canal, worsens the problem, and can damage the eardrum. Ear cleaning should be done with a suitable solution only after the eardrum is confirmed to be intact.',
        },
        {
          q: 'Why does the ear infection keep coming back?',
          a: 'Recurring ear infections usually have an underlying cause such as a food allergy, atopic dermatitis, or ear anatomy. Treating the symptom alone is not enough — the root cause must be identified.',
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
