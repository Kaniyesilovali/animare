# Animare Veteriner Kliniği — animare.vet

Elle yazılmış statik HTML sitesi. **Build adımı yok, framework yok, npm yok.**

## Yapı

```
html-site/          ← canlıya giden TEK kaynak
  tr/ en/           ← iki dil, 74 sayfa (15 TR + 15 EN blog yazısı)
  js/shared.js      ← nav, footer ve çerez bildirimini JS ile enjekte eder
  images/
  sitemap.xml robots.txt llms.txt
.github/workflows/deploy.yml
animare-static.html ← kullanılmayan eski tek sayfalık taslak (deploy edilmiyor)
```

Tailwind `cdn.tailwindcss.com` üzerinden CDN ile geliyor; derlenmiyor.
Analytics: gtag `G-MK6B03YGWY`.

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
