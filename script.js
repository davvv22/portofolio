'use strict';
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const EP = 'https://api.web3forms.com/submit';
  const GH = 'https://api.github.com/users/davvv22';
  const PROJECTS = []; // Tambahkan proyek nyata di sini: { name: '', desc: '', url: 'https://...' }
  const SK = [['HTML', 'HTML'], ['CSS', 'CSS'], ['JavaScript', 'JavaScript'], ['Git & GitHub', 'Git & GitHub'], ['Desain web responsif', 'Responsive web design'], ['Logika pemrograman', 'Programming logic'], ['Pemecahan masalah', 'Problem solving']];

  const D = {
    id: {
      skip: 'Lewati ke konten', nAbout: 'Tentang', nSkills: 'Skill', nProjects: 'Proyek', nContact: 'Kontak', menu: 'Menu',
      learning: 'Sedang belajar web development', h1: 'Masih belajar, terus membangun.',
      lead: 'Davvv adalah identitas digital David Raihan. Saya menjelajahi kode, teknologi, dan apa pun yang memancing rasa ingin tahu.',
      altPf: 'Foto profil David Raihan',
      a1: 'Saya sedang belajar coding dan menjelajahi dunia teknologi, selangkah demi selangkah. Fokus saya sekarang adalah fondasi web: HTML, CSS, dan JavaScript.',
      a2: 'Di luar layar saya suka bermain game, menonton anime dan donghua, nongkrong bersama teman, dan menikmati Americano yang pas. Ada juga seseorang yang spesial, tapi itu cerita lain.',
      tSkills: 'Yang sedang saya pelajari', lrn: 'Masih Belajar',
      pe: 'Proyek akan ditambahkan di sini seiring dikembangkan. Belum ada yang dipamerkan.',
      ghLoad: 'Memuat data GitHub…', ghErr: 'Data GitHub tidak dapat dimuat. Muat ulang halaman untuk mencoba lagi.',
      ghRate: 'Batas permintaan GitHub tercapai. Coba lagi beberapa saat lagi.', ghNone: 'Belum ada repositori publik.',
      ghN: n => `${n} repositori publik`,
      tTerm: 'Terminal', cmd: 'Perintah terminal', hint: 'Ketik “help” untuk melihat perintah.',
      unk: c => `Perintah tidak dikenal: ${c}. Ketik “help”.`,
      help: 'Perintah tersedia:\nhelp      daftar perintah\nabout     tentang saya\nskills    yang sedang dipelajari\nprojects  status proyek\nroadmap   arah belajar\nsocial    tautan sosial\ngithub    data GitHub publik\nclear     bersihkan layar',
      tAbout: 'Davvv (David Raihan). Masih belajar coding, terus membangun.',
      tProj: 'Projects in Progress. Proyek akan ditambahkan seiring dikembangkan.',
      tRoad: 'Sekarang: HTML, CSS, JavaScript.\nBerikutnya: Git & GitHub, desain web responsif.\nTujuan: membuat proyek nyata pertama dan menampilkannya di sini.',
      tStatus: 'Status langsung', lJkt: 'Waktu Jakarta (WIB)', ghOk: 'Terhubung', ghBad: 'Gagal dimuat', ghWait: 'Memeriksa…', ghLimit: 'Batas permintaan tercapai',
      stNote: 'Hanya data yang benar-benar diperiksa yang ditampilkan.',
      tMusic: 'Lagu', spot: 'Cari di Spotify', yt: 'Cari di YouTube', tSocial: 'Sosial',
      fName: 'Nama', fEmail: 'Email', fMsg: 'Pesan', send: 'Kirim pesan', sending: 'Mengirim…', req: 'Wajib diisi.', badMail: 'Masukkan alamat email yang valid.',
      okMsg: 'Pesan terkirim. Terima kasih!', fail: 'Pesan gagal dikirim. Coba lagi, atau kirim email langsung.',
      net: 'Koneksi bermasalah. Periksa jaringan lalu coba lagi.', mailAlt: 'Atau kirim email langsung:',
      palP: 'Ketik untuk mencari…', palL: 'Palet perintah', palNo: 'Tidak ada hasil', swLang: 'Ganti bahasa ke English', ext: '(tab baru)'
    },
    en: {
      skip: 'Skip to content', nAbout: 'About', nSkills: 'Skills', nProjects: 'Projects', nContact: 'Contact', menu: 'Menu',
      learning: 'Currently learning web development', h1: 'Still learning, still building.',
      lead: 'Davvv is the digital identity of David Raihan. I explore code, technology, and whatever sparks curiosity.',
      altPf: 'Profile photo of David Raihan',
      a1: 'I am learning to code and exploring technology, one step at a time. My focus right now is the web fundamentals: HTML, CSS, and JavaScript.',
      a2: 'Away from the screen I enjoy gaming, anime and donghua, time with friends, and a well-made Americano. There is someone special too, but that is another story.',
      tSkills: 'What I am learning', lrn: 'Learning',
      pe: 'Projects will be added here as they are built. Nothing to show yet.',
      ghLoad: 'Loading GitHub data…', ghErr: 'GitHub data could not be loaded. Reload the page to try again.',
      ghRate: 'GitHub rate limit reached. Try again shortly.', ghNone: 'No public repositories yet.',
      ghN: n => `${n} public ${n === 1 ? 'repository' : 'repositories'}`,
      tTerm: 'Terminal', cmd: 'Terminal command', hint: 'Type “help” to see the commands.',
      unk: c => `Unknown command: ${c}. Type “help”.`,
      help: 'Available commands:\nhelp      list commands\nabout     about me\nskills    what I am learning\nprojects  project status\nroadmap   learning direction\nsocial    social links\ngithub    public GitHub data\nclear     clear the screen',
      tAbout: 'Davvv (David Raihan). Still learning to code, still building.',
      tProj: 'Projects in Progress. Projects will be added as they are built.',
      tRoad: 'Now: HTML, CSS, JavaScript.\nNext: Git & GitHub, responsive web design.\nGoal: build my first real project and show it here.',
      tStatus: 'Live status', lJkt: 'Jakarta time (WIB)', ghOk: 'Connected', ghBad: 'Failed to load', ghWait: 'Checking…', ghLimit: 'Rate limited',
      stNote: 'Only data that is actually checked is shown.',
      tMusic: 'Song', spot: 'Search on Spotify', yt: 'Search on YouTube', tSocial: 'Social',
      fName: 'Name', fEmail: 'Email', fMsg: 'Message', send: 'Send message', sending: 'Sending…', req: 'Required.', badMail: 'Enter a valid email address.',
      okMsg: 'Message sent. Thank you!', fail: 'The message could not be sent. Try again, or email directly.',
      net: 'Connection problem. Check your network and try again.', mailAlt: 'Or email directly:',
      palP: 'Type to search…', palL: 'Command palette', palNo: 'No results', swLang: 'Switch language to Bahasa Indonesia', ext: '(new tab)'
    }
  }; // END-D

  let lang = 'id';
  try { if (localStorage.getItem('lang') === 'en') lang = 'en'; } catch {}
  const T = (k, ...a) => { const v = D[lang][k]; return typeof v === 'function' ? v(...a) : v ?? ''; };
  const put = (e, k) => { e.dataset.i = k; e.textContent = T(k); };
  const el = (t, c, x) => { const e = document.createElement(t); if (c) e.className = c; if (x != null) e.textContent = x; return e; };
  const ext = (a, u) => { if (/^https:\/\//.test(u)) { a.href = u; a.target = '_blank'; a.rel = 'noopener noreferrer'; } return a; };
  const SOC = () => $$('#sl a').map(a => [a.firstElementChild.textContent, a.href]);

  /* ---------- GitHub (API publik, tanpa token) ---------- */
  let gh = null;
  async function loadGH() {
    try {
      const c = JSON.parse(sessionStorage.getItem('davvv-gh'));
      if (c && Date.now() - c.t < 6e5) { gh = c.d; return renderGH(); }
    } catch {}
    try {
      const [u, r] = await Promise.all([fetch(GH), fetch(GH + '/repos?per_page=30&sort=updated')]);
      if ([u, r].some(x => x.status === 403 || x.status === 429)) gh = { err: 'ghRate' };
      else if (!u.ok || !r.ok) throw new Error('http');
      else {
        const [uj, rj] = await Promise.all([u.json(), r.json()]);
        gh = { n: uj.public_repos, repos: rj.map(x => ({ name: x.name, url: x.html_url, desc: x.description, lang: x.language })) };
        try { sessionStorage.setItem('davvv-gh', JSON.stringify({ t: Date.now(), d: gh })); } catch {}
      }
    } catch { gh = { err: 'ghErr' }; }
    renderGH();
  }
  function renderGH() {
    const box = $('#gh'), s = $('#ghs');
    box.replaceChildren();
    if (!gh) { box.append(el('p', 'note', T('ghLoad'))); return put(s, 'ghWait'); }
    if (gh.err) { box.append(el('p', 'note', T(gh.err))); return put(s, gh.err === 'ghRate' ? 'ghLimit' : 'ghBad'); }
    put(s, 'ghOk');
    if (!gh.repos.length) return box.append(el('p', 'note', T('ghNone')));
    box.append(el('p', 'note', T('ghN', gh.n)));
    const ul = el('ul', 'rows');
    gh.repos.forEach(r => {
      const li = el('li'), d = el('div');
      d.append(ext(el('a', '', r.name), r.url));
      if (r.desc) d.append(el('p', 'note', r.desc));
      li.append(d);
      if (r.lang) li.append(el('span', 'lb', r.lang));
      ul.append(li);
    });
    box.append(ul);
  }

  /* ---------- Proyek ---------- */
  function renderProj() {
    $('#pe').hidden = PROJECTS.length > 0;
    const ul = $('#plist');
    ul.hidden = !PROJECTS.length;
    ul.replaceChildren(...PROJECTS.map(p => {
      const li = el('li');
      li.append(ext(el('a', '', p.name), p.url), el('p', 'note', p.desc || ''));
      return li;
    }));
  }

  /* ---------- Jam Jakarta ---------- */
  function tick() {
    if (document.hidden) return;
    const d = new Date(), z = { timeZone: 'Asia/Jakarta' };
    $('#clk').textContent = d.toLocaleTimeString('en-GB', { ...z, hour12: false });
    $('#dt').textContent = d.toLocaleDateString(lang === 'id' ? 'id-ID' : 'en-GB', { ...z, weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  }

  /* ---------- Terminal (simulasi aman: hanya perintah yang ditentukan) ---------- */
  const out = $('#out'), ti = $('#ti');
  const say = (t, c = 'r') => { out.append(el('div', c, t)); out.scrollTop = out.scrollHeight; };
  const CMD = {
    help: () => T('help'),
    about: () => T('tAbout'),
    skills: () => SK.map(s => `${s[lang === 'id' ? 0 : 1]} [${T('lrn')}]`).join('\n'),
    projects: () => T('tProj'),
    roadmap: () => T('tRoad'),
    social: () => SOC().map(s => `${s[0]}: ${s[1]}`).join('\n'),
    github: () => !gh ? T('ghLoad') : gh.err ? T(gh.err) : `github.com/davvv22: ${T('ghN', gh.n)}`
  };
  $('#tf').addEventListener('submit', e => {
    e.preventDefault();
    const raw = ti.value.trim();
    ti.value = '';
    if (!raw) return;
    const c = raw.split(/\s+/)[0].toLowerCase();
    if (c === 'clear') return out.replaceChildren();
    say('$ ' + raw, 'c');
    say(Object.hasOwn(CMD, c) ? CMD[c]() : T('unk', c.slice(0, 40)));
  });

  /* ---------- Command palette ---------- */
  const pal = $('#pal'), pi = $('#pi'), pl = $('#pl2');
  let items = [], view = [], act = 0;
  const run = it => { pal.close(); it[1](); };
  function buildPal() {
    items = [
      ...[['nAbout', '#about'], ['nSkills', '#skills'], ['nProjects', '#projects'], ['tTerm', '#terminal'], ['tStatus', '#status'], ['tMusic', '#music'], ['nContact', '#contact']].map(([k, h]) => [T(k), () => { location.hash = h; }]),
      [T('swLang'), () => setLang(lang === 'id' ? 'en' : 'id')],
      ...SOC().map(([n, u]) => [n, () => { if (u.startsWith('mailto:')) location.href = u; else window.open(u, '_blank', 'noopener,noreferrer'); }])
    ];
    filter();
  }
  function filter() {
    const q = pi.value.trim().toLowerCase();
    view = items.filter(i => i[0].toLowerCase().includes(q));
    act = 0;
    pl.replaceChildren(...(view.length ? view.map((it, n) => {
      const li = el('li', '', it[0]);
      li.id = 'po' + n;
      li.setAttribute('role', 'option');
      li.onclick = () => run(it);
      return li;
    }) : [el('li', 'no', T('palNo'))]));
    mark();
  }
  function mark() {
    $$('#pl2 [role=option]').forEach((l, n) => l.setAttribute('aria-selected', n === act));
    pi.setAttribute('aria-activedescendant', view.length ? 'po' + act : '');
    const cur = $('#po' + act);
    if (cur) cur.scrollIntoView({ block: 'nearest' });
  }
  const openPal = () => { pi.value = ''; filter(); pal.showModal(); };
  pi.addEventListener('input', filter);
  pi.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      if (view.length) { act = (act + (e.key === 'ArrowDown' ? 1 : -1) + view.length) % view.length; mark(); }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (view[act]) run(view[act]);
    }
  });
  pal.addEventListener('click', e => { if (e.target === pal) pal.close(); });
  $('#kb').addEventListener('click', openPal);
  document.addEventListener('keydown', e => {
    if (!(e.ctrlKey || e.metaKey) || e.key.toLowerCase() !== 'k' || e.target.tagName === 'TEXTAREA') return;
    e.preventDefault();
    if (pal.open) pal.close(); else openPal();
  });
  $('#kbk').textContent = /Mac|iP(hone|ad)/.test(navigator.userAgent) ? '⌘K' : 'Ctrl K';

  /* ---------- Bahasa ---------- */
  function apply() {
    document.documentElement.lang = lang;
    $$('[data-i]').forEach(e => { e.textContent = T(e.dataset.i); });
    $$('[data-a]').forEach(e => { const [a, k] = e.dataset.a.split(':'); e.setAttribute(a, T(k)); });
    $('#lang').textContent = lang === 'id' ? 'EN' : 'ID';
    $('#lang').setAttribute('aria-label', T('swLang'));
    $('#sk').replaceChildren(...SK.map(s => { const li = el('li'); li.append(el('span', '', s[lang === 'id' ? 0 : 1]), el('span', 'lb', T('lrn'))); return li; }));
    renderGH();
    $$('a[target=_blank]').forEach(a => a.setAttribute('aria-label', a.textContent.trim().replace(/\s+/g, ' ') + ' ' + T('ext')));
    tick();
    buildPal();
  }
  function setLang(l) {
    lang = l;
    try { localStorage.setItem('lang', l); } catch {}
    apply();
  }
  $('#lang').addEventListener('click', () => setLang(lang === 'id' ? 'en' : 'id'));

  /* ---------- Form kontak (Web3Forms) ---------- */
  const f = $('#cf'), sb = $('#sb'), cs = $('#cs');
  let busy = false;
  const status = (k, bad) => { put(cs, k); cs.className = 'cs' + (bad ? ' bad' : ''); };
  f.addEventListener('submit', async e => {
    e.preventDefault();
    if (busy) return;
    let first = null;
    for (const k of ['name', 'email', 'message']) {
      const i = f.elements[k], v = i.value.trim();
      const m = !v ? 'req' : k === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? 'badMail' : '';
      i.setAttribute('aria-invalid', String(!!m));
      put($('#e-' + k), m);
      if (m && !first) first = i;
    }
    if (first) return first.focus();
    if (f.elements.botcheck.checked) return;
    busy = true; sb.disabled = true; put(sb, 'sending'); status('sending');
    try {
      const r = await fetch(EP, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(f)))
      });
      const j = await r.json().catch(() => ({}));
      if (r.ok && j.success === true) { f.reset(); status('okMsg'); } else status('fail', true);
    } catch { status('net', true); }
    busy = false; sb.disabled = false; put(sb, 'send');
  });

  /* ---------- Foto, intro, navigasi aktif, init ---------- */
  const pf = $('#pf');
  pf.addEventListener('load', () => pf.classList.add('on'));
  pf.addEventListener('error', () => pf.remove());
  if (pf.complete) { if (pf.naturalWidth) pf.classList.add('on'); else pf.remove(); }

  const skipIntro = () => { const i = $('#intro'); if (i) i.remove(); };
  addEventListener('pointerdown', skipIntro, { once: true });
  addEventListener('keydown', skipIntro, { once: true });

  const links = $$('nav a');
  const io = new IntersectionObserver(es => es.forEach(en => {
    if (!en.isIntersecting) return;
    links.forEach(a => { if (a.hash === '#' + en.target.id) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current'); });
  }), { rootMargin: '-45% 0px -50% 0px' });
  links.forEach(a => { const s = $(a.hash); if (s) io.observe(s); });

  $('#yr').textContent = new Date().getFullYear();
  apply();
  renderProj();
  say(T('hint'));
  loadGH();
  setInterval(tick, 1000);
  document.addEventListener('visibilitychange', tick);
})();
