/* ==========================================================================
   COPPER FREQUENCY — site config + shared UI
   ========================================================================== */

/* ---- CAMPAIGN CONFIG — edit before launch ------------------------------- */
const CAMPAIGN = {
  // Paste the Kickstarter pre-launch or live URL here. While empty, every
  // "Back" button shows a "Launching soon on Kickstarter" badge instead.
  kickstarterUrl: '',
  status: 'prelaunch',           // 'prelaunch' | 'live' | 'funded'
  goal: 60000,                   // USD
  currency: '$',
  // Fill these in once the campaign is live (leave 0 before launch)
  pledged: 0,
  backers: 0,
  daysToGo: 0,
  retailPrice: 449,
  tiers: [
    { id: 'eb', name: 'Early bird', price: 289, limit: 300, gets: 'One jacket, any style, men\'s or women\'s line. Frequency module and meter plug-in included.', note: 'Lowest price' },
    { id: 'std', name: 'Frequency', price: 349, limit: null, gets: 'One jacket, any style. Frequency module, meter plug-in, travel pouch.', note: 'Standard pledge' },
    { id: 'founder', name: 'Founder edition', price: 549, limit: 100, gets: 'Numbered jacket with hand-finished copper hardware, your name engraved on the module, and a signed launch print.', note: 'Numbered 1–100' },
    { id: 'pair', name: 'The pair', price: 649, limit: null, gets: 'A matched men\'s and women\'s pair — Randy Racer + Luna, Bomber + Vesper, and so on. Two modules, two meters.', note: 'Save $49' },
  ],
  addOns: [
    { name: 'Spare frequency module', price: 79 },
    { name: 'Meter plug-in, chrome', price: 39 },
  ],
  stretch: [
    { at: 100000, title: 'Two new colourways', text: 'Backers vote on two new colourways across the racing block — Randy Racer and Luna first.' },
    { at: 150000, title: 'Storm shell upgrade', text: 'Mountain Monk and Aria move to a fully taped, waterproof 3-layer shell at no extra cost.' },
    { at: 250000, title: 'Wireless pairing', text: 'A Bluetooth version of the frequency module, using a pre-certified radio, offered as a free swap.' },
    { at: 400000, title: 'Chrome editions', text: 'Limited mirror-chrome plate editions of T3P0 and Nyx, open to every backer as an add-on.' },
  ],
  timeline: [
    { when: 'Now', what: 'Designs and copper trace templates for all twelve styles; first prototype round.' },
    { when: 'Campaign', what: '30 days on Kickstarter. Sizing survey goes out the week it ends.' },
    { when: 'Month 1–2', what: 'Salesman samples in every style; wash, wear and battery testing.' },
    { when: 'Month 3', what: 'Pre-production samples signed off; battery shipping and compliance paperwork filed.' },
    { when: 'Month 4–5', what: 'Production run, in-line QC and final inspection at the factory.' },
    { when: 'Month 6', what: 'Fulfilment. Early bird and Founder backers ship first.' },
  ],
};

const money = (n) => CAMPAIGN.currency + Number(n).toLocaleString('en-US');

/* ---- shared chrome ------------------------------------------------------ */
const LOGO = `<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="14.5" fill="none" stroke="#C8743A" stroke-width="2"/><path d="M5 16 h4 l2 -6 l3 12 l3 -15 l3 15 l2 -6 h5" fill="none" stroke="#F2A46A" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/></svg>`;

function backButton(cls = 'btn btn-cu', label = 'Back it on Kickstarter') {
  if (CAMPAIGN.kickstarterUrl) return `<a class="${cls}" href="${CAMPAIGN.kickstarterUrl}" target="_blank" rel="noopener">${label}</a>`;
  return `<span class="pill-soon">Launching soon on Kickstarter</span>`;
}

function mountChrome(active) {
  const links = [
    ['index.html#collection', 'Collection', 'collection'],
    ['index.html#platform', 'How it works', 'platform'],
    ['kickstarter.html', 'Kickstarter', 'kickstarter'],
    ['manufacturing.html', 'Team guide', 'manufacturing'],
  ];
  const header = document.getElementById('top');
  if (header) {
    header.className = 'top';
    header.innerHTML = `<div class="wrap">
      <a class="mark" href="index.html">${LOGO}<span>Copper Frequency</span></a>
      <button class="menu-btn" aria-label="Open menu" aria-expanded="false">☰</button>
      <nav id="nav">${links.map(([h, t, k]) => `<a href="${h}" ${k === active ? 'aria-current="page"' : ''}>${t}</a>`).join('')}</nav>
      ${CAMPAIGN.kickstarterUrl ? `<a class="btn btn-cu btn-sm" href="${CAMPAIGN.kickstarterUrl}" target="_blank" rel="noopener">Back it</a>` : `<a class="btn btn-line btn-sm" href="kickstarter.html">See the campaign</a>`}
    </div>`;
    const btn = header.querySelector('.menu-btn'), nav = header.querySelector('nav');
    btn.addEventListener('click', () => { const o = nav.classList.toggle('open'); btn.setAttribute('aria-expanded', o); });
    nav.addEventListener('click', (e) => { if (e.target.tagName === 'A') nav.classList.remove('open'); });
  }
  const foot = document.getElementById('foot');
  if (foot) {
    foot.className = 'foot';
    foot.innerHTML = `<div class="wrap">
      <div><a class="mark" href="index.html">${LOGO}<span>Copper Frequency</span></a>
      <p style="margin-top:12px">Jackets wired to be heard and felt. Designed in Los Angeles.</p></div>
      <nav>${links.map(([h, t]) => `<a href="${h}">${t}</a>`).join('')}</nav>
      <p style="margin:0">© ${new Date().getFullYear()} Copper Frequency</p>
    </div>`;
  }
}

/* ---- jacket detail dialog ---------------------------------------------- */
function openJacket(slug) {
  const j = jacketBySlug(slug);
  if (!j) return;
  let d = document.getElementById('jkDialog');
  if (!d) {
    d = document.createElement('dialog');
    d.id = 'jkDialog'; d.className = 'jk-dialog';
    d.addEventListener('click', (e) => { if (e.target === d) d.close(); });
    document.body.appendChild(d);
  }
  const pair = j.pair ? jacketBySlug(j.pair) : null;
  d.innerHTML = `<button class="dlg-close" aria-label="Close" onclick="this.closest('dialog').close()">✕</button>
    <div class="dlg">
      <div class="stage plinth" id="dlgStage"></div>
      <div class="dlg-body">
        <p class="muted" style="margin:0">${j.line === 'men' ? "Men's line" : "Women's line"}</p>
        <h2 style="font-size:clamp(48px,6vw,76px)">${j.name}</h2>
        <p style="margin:0">${j.desc}</p>
        <dl class="spec">
          <dt>Shell</dt><dd>${j.shell}</dd>
          <dt>Fit</dt><dd>${j.fit}</dd>
          <dt>Transducers</dt><dd>${j.transducers}, tactile</dd>
          <dt>Port</dt><dd>Frequency port at the hem, takes the meter plug-in</dd>
          ${pair ? `<dt>Pairs with</dt><dd><a href="#" data-open="${pair.slug}">${pair.name}</a></dd>` : ''}
        </dl>
        <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:auto">${backButton()}<a class="btn btn-line" href="kickstarter.html#rewards">See rewards</a></div>
      </div>
    </div>`;
  mountJacket(d.querySelector('#dlgStage'), j, { animate: true });
  d.querySelectorAll('[data-open]').forEach((a) => a.addEventListener('click', (e) => { e.preventDefault(); openJacket(a.dataset.open); }));
  if (!d.open) d.showModal();
}

function toast(msg) {
  let t = document.querySelector('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
  t.textContent = msg; t.classList.add('show');
  clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('show'), 2200);
}

/* ---- safe localStorage --------------------------------------------------- */
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
};
