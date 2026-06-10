(function(){var l=document.createElement('link');l.rel='icon';l.type='image/png';l.href='/AniMare.png';document.head.appendChild(l);})();

const PATHS = {
  tr: {
    services:    '/tr/hizmetler/',
    about:       '/tr/hakkimizda/',
    contact:     '/tr/iletisim/',
    privacy:     '/tr/gizlilik/',
    blog:        '/tr/blog/',
    serviceSlug: (s) => `/tr/hizmetler/${s}/`,
    blogSlug:    (s) => `/tr/blog/${s}/`
  },
  en: {
    services:    '/en/services/',
    about:       '/en/about/',
    contact:     '/en/contact/',
    privacy:     '/en/privacy/',
    blog:        '/en/blog/',
    serviceSlug: (s) => `/en/services/${s}/`,
    blogSlug:    (s) => `/en/blog/${s}/`
  }
};

const ANIMARE_SERVICES = {
  tr: [
    { icon: '🩺', title: 'Genel Muayene',          slug: 'genel-muayene' },
    { icon: '💉', title: 'Aşılama',                 slug: 'asilama' },
    { icon: '🏥', title: 'Cerrahi',                 slug: 'cerrahi' },
    { icon: '🦷', title: 'Diş Bakımı',              slug: 'dis-bakimi' },
    { icon: '🩻', title: 'Radyoloji',               slug: 'radyoloji' },
    { icon: '🚨', title: 'Acil Hizmet',             slug: 'acil-hizmet' },
    { icon: '🔬', title: 'Laboratuvar',             slug: 'laboratuvar' },
    { icon: '✂️', title: 'Pet Kuaförü',             slug: 'pet-kuafor' },
    { icon: '🥗', title: 'Beslenme Danışmanlığı',   slug: 'beslenme-danismanligi' },
  ],
  en: [
    { icon: '🩺', title: 'General Check-up',        slug: 'general-checkup' },
    { icon: '💉', title: 'Vaccination',             slug: 'vaccination' },
    { icon: '🏥', title: 'Surgery',                 slug: 'surgery' },
    { icon: '🦷', title: 'Dental Care',             slug: 'dental-care' },
    { icon: '🩻', title: 'Radiology',               slug: 'radiology' },
    { icon: '🚨', title: 'Emergency Service',       slug: 'emergency' },
    { icon: '🔬', title: 'Laboratory',              slug: 'laboratory' },
    { icon: '✂️', title: 'Pet Grooming',            slug: 'pet-grooming' },
    { icon: '🥗', title: 'Nutrition Consulting',    slug: 'nutrition-consulting' },
  ]
};

function renderNav(lang) {
  const isTr = lang === 'tr';
  const services = ANIMARE_SERVICES[lang];
  const rawPath = window.location.pathname.replace(/\/$/, '') || `/${lang}`;
  const otherLang = isTr ? 'en' : 'tr';
  const otherUrl = window.LANG_SWITCH_URL || `/${otherLang}/`;

  const L = {
    tr: { home: 'Ana Sayfa', services: 'Hizmetler', about: 'Hakkımızda', blog: 'Blog', contact: 'İletişim', openMenu: 'Menüyü aç', viewAll: 'Tümünü gör →', count: `${services.length} hizmet` },
    en: { home: 'Home', services: 'Services', about: 'About', blog: 'Blog', contact: 'Contact', openMenu: 'Open menu', viewAll: 'View all →', count: `${services.length} services` }
  }[lang];

  const active = (href) => {
    const h = href.replace(/\/$/, '');
    if (h === `/${lang}`) return rawPath === `/${lang}` || rawPath === '';
    return rawPath.startsWith(h);
  };
  const ac = (href) => active(href)
    ? 'text-[var(--color-primary)]'
    : 'text-[var(--color-muted)] hover:text-[var(--color-text)]';
  const acMob = (href) => active(href)
    ? 'bg-[var(--color-primary-light)] text-[var(--color-primary)]'
    : 'text-[var(--color-muted)] hover:bg-[var(--color-surface)]';

  const dropItems = services.map(s => {
    const href = PATHS[lang].serviceSlug(s.slug);
    const a = active(href);
    return `<a href="${href}" class="group flex items-center gap-2.5 rounded-xl px-3 py-2 transition-colors ${a ? 'bg-[var(--color-primary-light)]' : 'hover:bg-[var(--color-surface)]'}">
      <span class="text-base flex-shrink-0">${s.icon}</span>
      <span class="text-sm font-medium truncate ${a ? 'text-[var(--color-primary)]' : 'text-[var(--color-text)]'}">${s.title}</span>
    </a>`;
  }).join('');

  const mobItems = services.map(s =>
    `<a href="${PATHS[lang].serviceSlug(s.slug)}" class="flex items-center gap-3 px-4 py-2.5 text-sm bg-white text-[var(--color-text)] hover:bg-[var(--color-surface)] transition-colors">
      <span class="text-base w-6 text-center flex-shrink-0">${s.icon}</span>
      <span class="font-medium">${s.title}</span>
    </a>`
  ).join('');

  const servicesPath = PATHS[lang].services;
  const aboutPath = PATHS[lang].about;
  const blogPath = PATHS[lang].blog;
  const contactPath = PATHS[lang].contact;

  const html = `
<header class="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-[var(--color-border)] shadow-sm">
  <div class="mx-auto max-w-6xl px-4 sm:px-6">
    <div class="flex h-16 items-center justify-between">
      <a href="/${lang}/"><img src="/AniMare.png" alt="Animare Veteriner" class="h-16 w-auto object-contain" style="max-height:64px"></a>
      <nav class="hidden md:flex items-center gap-6">
        <a href="/${lang}/" class="text-sm font-medium transition-colors ${ac(`/${lang}/`)}">${L.home}</a>
        <div class="relative" id="sp">
          <a href="${servicesPath}" id="sbtn" class="flex items-center gap-1 text-sm font-medium transition-colors ${ac(servicesPath)}">
            ${L.services}
            <svg id="sarr" class="h-3.5 w-3.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
          </a>
          <div class="absolute inset-x-0 top-full h-3"></div>
          <div id="sdd" class="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50 transition-all duration-200 opacity-0 -translate-y-1 pointer-events-none" style="width:380px">
            <div class="flex justify-center -mb-px"><div class="w-3 h-3 bg-white border-l border-t border-[var(--color-border)] rotate-45 shadow-sm"></div></div>
            <div class="rounded-2xl border border-[var(--color-border)] bg-white shadow-xl overflow-hidden">
              <div class="p-2 grid grid-cols-2 gap-0.5">${dropItems}</div>
              <div class="px-5 py-3 border-t border-[var(--color-border)] bg-[var(--color-surface)] flex items-center justify-between">
                <span class="text-xs text-[var(--color-muted)]">${L.count}</span>
                <a href="${servicesPath}" class="text-xs font-medium text-[var(--color-primary)] hover:underline">${L.viewAll}</a>
              </div>
            </div>
          </div>
        </div>
        <a href="${aboutPath}" class="text-sm font-medium transition-colors ${ac(aboutPath)}">${L.about}</a>
        <a href="${blogPath}" class="text-sm font-medium transition-colors ${ac(blogPath)}">${L.blog}</a>
        <a href="${contactPath}" class="text-sm font-medium transition-colors ${ac(contactPath)}">${L.contact}</a>
      </nav>
      <div class="hidden md:flex items-center gap-3">
        <div class="flex items-center gap-1 rounded-full border border-[var(--color-border)] p-0.5 text-sm font-medium">
          <a href="${isTr ? `/${lang}/` : otherUrl}" class="${isTr ? 'rounded-full bg-[var(--color-primary)] px-3 py-1 text-white' : 'rounded-full px-3 py-1 text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors'}">TR</a>
          <a href="${!isTr ? `/${lang}/` : otherUrl}" class="${!isTr ? 'rounded-full bg-[var(--color-primary)] px-3 py-1 text-white' : 'rounded-full px-3 py-1 text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors'}">EN</a>
        </div>
        <a href="${contactPath}" class="rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--color-primary-dark)] transition-colors">${L.contact}</a>
      </div>
      <button id="hbg" class="md:hidden p-2 rounded-lg text-[var(--color-muted)] hover:bg-[var(--color-surface)]" aria-label="${L.openMenu}">
        <span class="block w-5 h-0.5 bg-current mb-1"></span>
        <span class="block w-5 h-0.5 bg-current mb-1"></span>
        <span class="block w-5 h-0.5 bg-current"></span>
      </button>
    </div>
    <div id="mm" class="hidden md:hidden border-t border-[var(--color-border)] py-3 flex flex-col gap-0.5">
      <a href="/${lang}/" class="px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${acMob(`/${lang}/`)}">${L.home}</a>
      <div>
        <button id="msbtn" class="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${acMob(servicesPath)}">
          <span>${L.services}</span>
          <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <div id="msm" class="hidden mt-1 mx-1 rounded-xl border border-[var(--color-border)] overflow-hidden">
          <div class="divide-y divide-[var(--color-border)]">${mobItems}</div>
        </div>
      </div>
      <a href="${aboutPath}" class="px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${acMob(aboutPath)}">${L.about}</a>
      <a href="${blogPath}" class="px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${acMob(blogPath)}">${L.blog}</a>
      <a href="${contactPath}" class="px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${acMob(contactPath)}">${L.contact}</a>
      <div class="pt-2 px-3">
        <div class="flex items-center gap-1 rounded-full border border-[var(--color-border)] p-0.5 text-sm font-medium w-fit">
          <a href="${isTr ? `/${lang}/` : otherUrl}" class="${isTr ? 'rounded-full bg-[var(--color-primary)] px-3 py-1 text-white' : 'rounded-full px-3 py-1 text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors'}">TR</a>
          <a href="${!isTr ? `/${lang}/` : otherUrl}" class="${!isTr ? 'rounded-full bg-[var(--color-primary)] px-3 py-1 text-white' : 'rounded-full px-3 py-1 text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors'}">EN</a>
        </div>
      </div>
    </div>
  </div>
</header>`;

  const el = document.getElementById('nav-placeholder');
  if (el) el.outerHTML = html;

  setTimeout(() => {
    const hbg = document.getElementById('hbg');
    const mm = document.getElementById('mm');
    if (hbg && mm) hbg.addEventListener('click', () => mm.classList.toggle('hidden'));

    const sp = document.getElementById('sp');
    const sdd = document.getElementById('sdd');
    const sarr = document.getElementById('sarr');
    if (sp && sdd) {
      let t, mx = 0, my = 0;
      document.addEventListener('mousemove', function(e){ mx = e.clientX; my = e.clientY; }, { passive: true });
      const over = function(el) { var r = el.getBoundingClientRect(); return mx >= r.left && mx <= r.right && my >= r.top && my <= r.bottom; };
      const show = () => { clearTimeout(t); sdd.classList.remove('opacity-0', '-translate-y-1', 'pointer-events-none'); sdd.classList.add('opacity-100', 'translate-y-0'); if (sarr) sarr.classList.add('rotate-180'); };
      const tryHide = () => { t = setTimeout(() => { if (over(sp) || over(sdd)) return; sdd.classList.add('opacity-0', '-translate-y-1', 'pointer-events-none'); sdd.classList.remove('opacity-100', 'translate-y-0'); if (sarr) sarr.classList.remove('rotate-180'); }, 120); };
      sp.addEventListener('mouseenter', show);
      sp.addEventListener('mouseleave', tryHide);
      sdd.addEventListener('mouseenter', show);
      sdd.addEventListener('mouseleave', tryHide);
    }

    const msbtn = document.getElementById('msbtn');
    const msm = document.getElementById('msm');
    if (msbtn && msm) msbtn.addEventListener('click', () => msm.classList.toggle('hidden'));
  }, 0);
}

function renderFooter(lang) {
  const isTr = lang === 'tr';
  const T = (tr, en) => isTr ? tr : en;

  const html = `
<footer class="bg-[var(--color-text)] text-white">
  <div class="mx-auto max-w-6xl px-4 sm:px-6 py-12">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <div class="mb-4"><img src="/AniMare.png" alt="Animare Veteriner" class="h-12 w-auto object-contain"></div>
        <p class="text-sm text-white/70 leading-relaxed">${T('Dostlarınıza uzman ellerin sıcaklığıyla bakıyoruz.', 'We care for your companions with expert hands and warm hearts.')}</p>
        <div class="flex gap-3 mt-4">
          <a href="https://www.instagram.com/animare.vet/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="https://www.facebook.com/animare.vet" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
        </div>
      </div>
      <div>
        <h3 class="font-semibold mb-4 text-sm uppercase tracking-wide text-white/50">${T('Hızlı Bağlantılar', 'Quick Links')}</h3>
        <ul class="space-y-2">
          <li><a href="/${lang}/" class="text-sm text-white/70 hover:text-white transition-colors">${T('Ana Sayfa', 'Home')}</a></li>
          <li><a href="${PATHS[lang].services}" class="text-sm text-white/70 hover:text-white transition-colors">${T('Hizmetler', 'Services')}</a></li>
          <li><a href="${PATHS[lang].about}" class="text-sm text-white/70 hover:text-white transition-colors">${T('Hakkımızda', 'About')}</a></li>
          <li><a href="${PATHS[lang].blog}" class="text-sm text-white/70 hover:text-white transition-colors">Blog</a></li>
          <li><a href="${PATHS[lang].contact}" class="text-sm text-white/70 hover:text-white transition-colors">${T('İletişim', 'Contact')}</a></li>
        </ul>
      </div>
      <div>
        <h3 class="font-semibold mb-4 text-sm uppercase tracking-wide text-white/50">${T('İletişim', 'Contact')}</h3>
        <ul class="space-y-2 text-sm text-white/70">
          <li>+90 533 844 91 92</li>
          <li>info@animare.vet</li>
          <li class="leading-relaxed">${T('ŞHT Hüseyin Amca Cad Mar 101 Dük : 1, Gönyeli / Lefkoşa, Kuzey Kıbrıs (KKTC)', 'ŞHT Hüseyin Amca Cad Mar 101 Dük : 1, Gönyeli / Lefkoşa, North Cyprus (TRNC)')}</li>
        </ul>
      </div>
    </div>
    <div class="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
      <span>© 2026 Animare Veteriner Kliniği. ${T('Tüm hakları saklıdır.', 'All rights reserved.')} 🐾 ${T('Sevgiyle', 'Made with love by')} <a href="https://raptordigital.net/" target="_blank" rel="noopener noreferrer" class="underline hover:text-white/70">Raptor Digital</a></span>
      <a href="${PATHS[lang].privacy}" class="hover:text-white/70 transition-colors underline">${T('Gizlilik Politikası', 'Privacy Policy')}</a>
    </div>
  </div>
</footer>`;

  const el = document.getElementById('footer-placeholder');
  if (el) el.outerHTML = html;
  renderWhatsApp();
}

function renderCookie(lang) {
  const isTr = lang === 'tr';
  const T = (tr, en) => isTr ? tr : en;

  const html = `
<div id="cookie-banner" class="hidden fixed bottom-0 left-0 right-0 z-50 p-4">
  <div class="mx-auto max-w-2xl bg-[var(--color-text)] text-white rounded-2xl shadow-2xl px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
    <div class="flex-1">
      <p class="text-sm font-semibold mb-1">${T('Çerez Bildirimi', 'Cookie Notice')}</p>
      <p class="text-xs text-white/70">${T('Web sitemiz yalnızca temel işlevsellik için zorunlu çerezler kullanmaktadır.', 'This website uses only strictly necessary cookies for basic functionality.')} <a href="${PATHS[lang].privacy}" class="underline hover:text-white">${T('Gizlilik Politikası', 'Privacy Policy')}</a></p>
    </div>
    <button id="cookie-accept" class="flex-shrink-0 rounded-full bg-[var(--color-primary)] px-5 py-2 text-sm font-semibold text-white hover:bg-[var(--color-primary-dark)] transition-colors">${T('Anladım', 'Got it')}</button>
  </div>
</div>`;

  const el = document.getElementById('cookie-placeholder');
  if (el) el.outerHTML = html;

  setTimeout(() => {
    const banner = document.getElementById('cookie-banner');
    const btn = document.getElementById('cookie-accept');
    if (banner) {
      if (!localStorage.getItem('cookie-ok')) banner.classList.remove('hidden');
      if (btn) btn.addEventListener('click', () => { localStorage.setItem('cookie-ok', '1'); banner.classList.add('hidden'); });
    }
  }, 0);
}

function renderWhatsApp() {
  const btn = document.createElement('a');
  btn.href = 'https://wa.me/905338449192';
  btn.target = '_blank';
  btn.rel = 'noopener noreferrer';
  btn.setAttribute('aria-label', 'WhatsApp');
  btn.style.cssText = 'position:fixed;bottom:24px;right:24px;z-index:9999;display:flex;align-items:center;justify-content:center;width:56px;height:56px;border-radius:50%;background-color:#25D366;box-shadow:0 4px 16px rgba(0,0,0,0.18);transition:transform 0.15s,box-shadow 0.15s;';
  btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="28" height="28"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';
  btn.addEventListener('mouseenter', () => { btn.style.transform = 'scale(1.1)'; btn.style.boxShadow = '0 6px 20px rgba(0,0,0,0.25)'; });
  btn.addEventListener('mouseleave', () => { btn.style.transform = 'scale(1)'; btn.style.boxShadow = '0 4px 16px rgba(0,0,0,0.18)'; });
  document.body.appendChild(btn);
}

function renderOtherServices(lang, currentSlug) {
  const isTr = lang === 'tr';
  const services = ANIMARE_SERVICES[lang];
  const others = services.filter(s => s.slug !== currentSlug);
  const title = isTr ? 'Diğer Hizmetlerimiz' : 'Our Other Services';

  const links = others.map(s =>
    `<a href="${PATHS[lang].serviceSlug(s.slug)}" class="flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-sm text-[var(--color-text)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors">
      <span>${s.icon}</span>
      <span>${s.title}</span>
    </a>`
  ).join('');

  const html = `
<section class="py-12 bg-[var(--color-surface)]">
  <div class="mx-auto max-w-6xl px-4 sm:px-6">
    <h2 class="text-lg font-bold text-[var(--color-text)] mb-6 text-center">${title}</h2>
    <div class="flex flex-wrap justify-center gap-3">${links}</div>
  </div>
</section>`;

  const el = document.getElementById('other-services-placeholder');
  if (el) el.outerHTML = html;
}

function initContactForm(lang) {
  const isTr = lang === 'tr';
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const consent = document.getElementById('gdpr-consent');
    const consentErr = document.getElementById('consent-error');
    if (consent && !consent.checked) {
      if (consentErr) consentErr.classList.remove('hidden');
      return;
    }
    if (consentErr) consentErr.classList.add('hidden');
    const btn = form.querySelector('button[type="submit"]');
    if (btn) { btn.disabled = true; btn.textContent = isTr ? 'Gönderiliyor...' : 'Sending...'; }
    setTimeout(() => {
      form.innerHTML = `<div class="rounded-2xl bg-green-50 border border-green-200 p-8 text-center">
        <div class="text-4xl mb-3">✅</div>
        <p class="font-semibold text-green-800">${isTr ? 'Mesajınız alındı! En kısa sürede sizi arayacağız.' : 'Your message has been received! We will call you as soon as possible.'}</p>
      </div>`;
    }, 1000);
  });
}
