# animare.vet

[Animare Veteriner Kliniği](https://animare.vet) — Gönyeli / Lefkoşa, Kuzey Kıbrıs.

Elle yazılmış, iki dilli (TR/EN) statik HTML sitesi. Build adımı, framework
veya bağımlılık yok.

## Geliştirme

Depoyu klonlayıp `html-site/` içindeki dosyaları doğrudan düzenle. Yerelde
görmek için herhangi bir statik sunucu yeterli:

```bash
cd html-site
python3 -m http.server 8000   # http://localhost:8000
```

`file://` ile açma — `shared.js` nav ve footer'ı mutlak yollardan çektiği için
düzgün çalışmaz.

## Yayına alma

`main` dalına push et. `html-site/**` altında değişiklik varsa GitHub Actions
siteyi FTP ile sunucuya atar (`.github/workflows/deploy.yml`). Yaklaşık bir
dakikada canlıya iner.

```bash
git add html-site/
git commit -m "..."
git push origin main
```

Gerekli repo secret'ları: `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`.

## Yapı

| Yol | Açıklama |
|---|---|
| `html-site/tr/`, `html-site/en/` | Sayfalar — her biri bağımsız `index.html` (toplam 74) |
| `html-site/js/shared.js` | Nav, footer ve çerez bildirimi (JS ile enjekte edilir) |
| `html-site/images/` | Görseller |
| `html-site/sitemap.xml` | Elle güncellenir |
| `html-site/llms.txt` | AI arama motorları için içerik indeksi |
| `animare-static.html` | Kullanılmayan eski taslak; deploy edilmiyor |

İçerik ve SEO kuralları için [AGENTS.md](AGENTS.md).
