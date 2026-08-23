# Animare Veteriner Kliniği — animare.vet

Elle yazılmış statik HTML sitesi. Framework yok. **Deploy buildless'tır** —
FTP yalnızca `html-site/` altını kopyalar. Tek istisna: Tailwind CSS'i
`npm run css` ile *önceden* derleyip çıktıyı commit'liyoruz (aşağıya bak).

## Yapı

```
html-site/          ← canlıya giden TEK kaynak
  tr/ en/           ← iki dil, 74 sayfa (15 TR + 15 EN blog yazısı)
  js/shared.js      ← nav, footer ve çerez bildirimini JS ile enjekte eder
  css/tw.css        ← ÜRETİLMİŞ dosya, elle düzenleme (npm run css)
  images/
  sitemap.xml robots.txt llms.txt
tailwind.config.js  ← derleme ayarı, deploy EDİLMEZ
tailwind-input.css  ← derleme girdisi, deploy EDİLMEZ
package.json        ← yalnızca `npm run css` için
.github/workflows/deploy.yml
animare-static.html ← kullanılmayan eski tek sayfalık taslak (deploy edilmiyor)
```

Analytics: gtag `G-MK6B03YGWY`.

## Tailwind — ÖNEMLİ

Tailwind artık CDN'den gelmiyor. `cdn.tailwindcss.com` tarayıcıda CSS derlediği
için mobil LCP'yi 9.7 saniyeye çıkarıyordu; yerine derlenmiş `html-site/css/tw.css`
kondu (126 KB JS → 22 KB CSS).

**Class ekler veya değiştirirsen CSS'i yeniden üretmen ŞART:**

```bash
npm run css        # tek seferlik
npm run css:watch  # düzenleme sırasında
```

Yapmazsan yeni class'lar hiçbir sayfada çalışmaz — hata da vermez, sessizce
görünüm bozulur. Üretilen `tw.css` commit'lenir; deploy hâlâ buildless kalır.

Sürüm 3.4.17'ye sabitlendi (CDN'in sunduğu sürüm) — böylece görünüm birebir aynı.
`tailwind.config.js` içindeki `content` listesi hem HTML'i hem `js/shared.js`'i
tarar; **shared.js'i listeden çıkarma**, nav ve footer class'ları orada template
literal içinde üretiliyor ve purge onları siler.

Bilinen sınır: `bg-[var(--color-accent)]/10` gibi `var()` üstüne opacity ekleyen
class'ları Tailwind 3 üretemez; sessizce atar. Bunlar CDN döneminde de
çalışmıyordu. Saydamlık gerekiyorsa `color-mix()` veya ayrı bir CSS değişkeni kullan.

## Görseller

`images/` içinde `<isim>-480.webp`, `-800.webp`, `-1200.webp` ve `-1200.jpg`
türevleri var; sayfalarda `<picture>` + `srcset` ile sunuluyor. Orijinal büyük
JPEG'ler türev üretmek için kaynak olarak duruyor, sayfalarda kullanılmıyor.

Yeni görsel eklerken türevlerini de üret ve `<picture>` kalıbını kullan; ham
1920px JPEG'i doğrudan `<img src>`'e koyma (hero 984 KB → 41 KB fark yaratıyor).

`<picture>` etiketinde `class="block w-full h-full"` kalmalı — kaldırırsan
içindeki `h-full` yüzdesi çözülemez ve görsel çöker.

## Deploy

`main` dalına push → `html-site/**` değiştiyse GitHub Actions FTP ile
`./public_html/` altına atar. Başka deploy yolu yok. Yayına almak için
commit + push yeterli, ~1 dakikada iner.

Bu yüzden `main`'e doğrudan commit edilir — feature branch açmak deploy'u
tetiklemez.

## Sayfa düzenlerken

- Her sayfa bağımsız bir `index.html`. Ortak bileşen yok; nav ve footer
  `shared.js` tarafından basılır, düzenlemesi o dosyadan yapılır.
- `<title>` ve `og:title` **birebir aynı** olmalı ve **60 karakterin altında**
  kalmalı. Önemli kelimeler başa, marka eki sonda: `... | Animare`.
  (`| Lefkoşa Veteriner — Animare` gibi uzun ekler kullanma.)
- Her sayfada `canonical` + `hreflang` üçlüsü var: `tr`, `en`, `x-default`.
  TR/EN karşılıklı birbirini göstermeli.
- JSON-LD `headline` alanı sayfanın **H1'i** olmalı — marka eki içermemeli.
- Yeni yazı eklerken `sitemap.xml`, `llms.txt` ve ilgili `blog/index.html`
  kartları elle güncellenir.

## Terminoloji

- Leishmaniasis'i taşıyan böcek: **küpdüşen sineği**. "tatarcık" veya
  "kum sineği" kullanma. EN tarafında "sandfly" kabul edilebilir.
- Hastalığın adı **Leishmaniasis**; böceğin adıyla anılmaz. Başlık, H1, meta,
  schema ve kartlarda `(... Hastalığı)` / `(Sandfly Disease)` gibi
  hastalık-adı parantezi kullanma.

## Geçmiş

Proje başlangıçta Next.js ile kurulmuştu. Next tarafı hiçbir zaman deploy
edilmedi ve içerik kaynağı (`app/lib/blog.ts`) 15 yazının yalnızca 5'ini
içerdiği için sürekli `html-site/` ile senkrondan çıktı. 22 Ağustos 2026'da
kaldırıldı; tüm Next dosyaları git geçmişinde `9573344` commit'inde duruyor.
