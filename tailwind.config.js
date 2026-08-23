/**
 * Tailwind derleme yapilandirmasi — animare.vet
 *
 * Bu dosya deploy EDILMEZ; yalnizca html-site/css/tw.css uretmek icin var.
 * Deploy hala buildless: FTP sadece html-site/ altini kopyalar.
 *
 * CSS'i yeniden uretmek icin (repo kokunde):
 *   npm run css
 *
 * Surum, daha once cdn.tailwindcss.com'un sundugu 3.4.17'ye sabitlendi;
 * boylece derlenmis cikti canlidaki gorunumle birebir ayni kalir.
 */
module.exports = {
  content: [
    './html-site/**/*.html',
    './html-site/js/**/*.js', // nav/footer class'lari burada template literal icinde uretiliyor
  ],
  theme: { extend: {} },
  plugins: [],
};
