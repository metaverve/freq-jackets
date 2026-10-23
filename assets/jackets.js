/* ==========================================================================
   COPPER FREQUENCY — collection data + jacket renderer
   --------------------------------------------------------------------------
   Edit JACKETS to change names, copy, colours or specs. Every page reads it.

   PHOTOS: drop a real photo at photos/<slug>.jpg (e.g. photos/randy-racer.jpg)
   and it replaces the rendered visual automatically. No code change needed.
   ========================================================================== */

const JACKETS = [
  // ---------------------------------------------------------------- MEN
  {
    slug: 'randy-racer', name: 'Randy Racer', line: 'men', pair: 'luna',
    tagline: 'The original. White F1 racer, red sleeve stripes, copper circuit.',
    desc: 'A white F1-style racing jacket with bold twin red sleeve stripes, a snap band collar and a copper circuit that runs from four chest transducers down to the frequency port at the hem.',
    base: '#F1EEE8', trim: '#D3262D', accent: '#1A1A1A', collar: 'band', layout: 'racer', stripes: true,
    shell: 'Bonded twill, water-resistant finish', transducers: 4, fit: 'Regular, racing cut',
  },
  {
    slug: 'lipte-rahl', name: 'Líptė Rähł', line: 'men',
    tagline: 'Racer, inverted. Black base, red stripes, full copper system.',
    desc: 'The Randy Racer turned to black. Same racing block and twin red stripes, with the full copper frequency system — six transducers, sleeve traces to both cuffs.',
    base: '#141414', trim: '#D3262D', accent: '#2a2a2a', collar: 'band', layout: 'racerFull', stripes: true,
    shell: 'Bonded twill, matte black', transducers: 6, fit: 'Regular, racing cut',
  },
  {
    slug: 'trombone', name: 'Trombone', line: 'men',
    tagline: 'An asymmetric moto jacket with copper running the zip line.',
    desc: 'A classic asymmetric motorcycle jacket in cognac leather. Copper traces follow the diagonal zip and the lapel edge; transducers sit under the chest panels.',
    base: '#6A341D', trim: '#2a160d', accent: '#C9C3B8', collar: 'moto', layout: 'moto',
    shell: 'Lambskin leather, cognac', transducers: 4, fit: 'Slim, cropped at hip',
  },
  {
    slug: 'bomber', name: 'Bomber', line: 'men', pair: 'vesper',
    tagline: 'MA-1 silhouette over a distributed transducer array.',
    desc: 'The flight bomber everyone knows, rebuilt on a copper conductive shell. Six transducers spread across chest and ribs on a single bus, with the signature orange lining at the collar.',
    base: '#4A5740', trim: '#E2732A', accent: '#2f3829', collar: 'rib', layout: 'array', rib: true, sleevePocket: true,
    shell: 'Nylon flight twill, copper conductive layer', transducers: 6, fit: 'Boxy, ribbed hem',
  },
  {
    slug: 'london-calling', name: 'London Calling', line: 'men', pair: 'riot',
    tagline: 'Oversized punk, with the circuitry left on the outside.',
    desc: 'Dropped shoulders, a spread collar and the copper wiring stitched on top of the shell instead of hidden inside it. Studded shoulders, raw energy, eight transducers.',
    base: '#24242A', trim: '#B8212A', accent: '#bdbdbd', collar: 'spread', layout: 'exposed', oversize: true, studs: true,
    shell: 'Washed heavy canvas', transducers: 8, fit: 'Oversized, dropped shoulder',
  },
  {
    slug: 'mountain-monk', name: 'Mountain Monk', line: 'men', pair: 'aria',
    tagline: 'A hooded technical shell with transducers aligned to the spine.',
    desc: 'A technical hooded outdoor jacket in deep maroon with saffron cords. Transducers run in two columns along the spine line, so the low end travels the length of your back.',
    base: '#5A1E24', trim: '#D58A1E', accent: '#3a1216', collar: 'hood', layout: 'spine',
    shell: '3-layer technical shell', transducers: 8, fit: 'Regular, articulated sleeve',
  },
  {
    slug: 't3p0', name: 'T3P0', line: 'men', pair: 'nyx',
    tagline: 'Dark tactical sci-fi with a copper endoskeleton.',
    desc: 'Gunmetal tactical layering with chest plates and strapping, and a copper endoskeleton of rib-like traces wrapping the torso. The most transducers in the line.',
    base: '#1E2225', trim: '#7E8A90', accent: '#2c3236', collar: 'funnel', layout: 'endo', plates: true,
    shell: 'Ripstop with TPU-bonded plates', transducers: 10, fit: 'Athletic, layered',
  },
  // -------------------------------------------------------------- WOMEN
  {
    slug: 'luna', name: 'Luna', line: 'women', pair: 'randy-racer',
    tagline: "The women's Randy Racer. Tailored white F1, refined copper nodes.",
    desc: 'The Randy Racer re-cut with a defined waist and slimmer sleeve. Twin red stripes, a snap band collar and smaller, refined copper nodes.',
    base: '#F1EEE8', trim: '#D3262D', accent: '#1A1A1A', collar: 'band', layout: 'racer', stripes: true, women: true,
    shell: 'Bonded twill, water-resistant finish', transducers: 4, fit: 'Tailored, defined waist',
  },
  {
    slug: 'vesper', name: 'Vesper', line: 'women', pair: 'bomber',
    tagline: "The women's Bomber. Waist definition, elegant copper detailing.",
    desc: 'A cropped black bomber with a shaped waist. The copper array is finer here, with fine-line traces and polished nodes against the black.',
    base: '#17161A', trim: '#C8743A', accent: '#262429', collar: 'rib', layout: 'array', rib: true, women: true, cropped: true,
    shell: 'Satin-finish nylon, copper conductive layer', transducers: 6, fit: 'Cropped, defined waist',
  },
  {
    slug: 'riot', name: 'Riot', line: 'women', pair: 'london-calling',
    tagline: "The women's London Calling. Tailored punk copper.",
    desc: 'London Calling re-tailored in oxblood. The exposed wiring and studs stay; the shape sharpens.',
    base: '#3E151A', trim: '#E2B07A', accent: '#bdbdbd', collar: 'spread', layout: 'exposed', women: true, studs: true,
    shell: 'Washed heavy canvas, oxblood', transducers: 6, fit: 'Tailored, slightly cropped',
  },
  {
    slug: 'aria', name: 'Aria', line: 'women', pair: 'mountain-monk',
    tagline: "The women's Mountain Monk. Contoured hooded technical.",
    desc: 'The Mountain Monk contoured for a closer fit, in warm stone with saffron cords and the same spine-aligned transducer columns.',
    base: '#B5AC9C', trim: '#D58A1E', accent: '#8e8677', collar: 'hood', layout: 'spine', women: true,
    shell: '3-layer technical shell', transducers: 6, fit: 'Contoured, articulated sleeve',
  },
  {
    slug: 'nyx', name: 'Nyx', line: 'women', pair: 't3p0',
    tagline: "The women's T3P0. Sculpted dark tactical.",
    desc: 'T3P0 sculpted: matte black, sharper plates, and the copper endoskeleton traced closer to the body.',
    base: '#111214', trim: '#6E777C', accent: '#22262a', collar: 'funnel', layout: 'endo', plates: true, women: true,
    shell: 'Ripstop with TPU-bonded plates', transducers: 8, fit: 'Sculpted, layered',
  },
];

const jacketBySlug = (s) => JACKETS.find((j) => j.slug === s);

/* ==========================================================================
   Renderer — builds a front technical illustration of a jacket as SVG.
   renderJacket(j, { animate:true, tracesOnly:false }) -> svg string
   ========================================================================== */
(function () {
  const C = 300; // centre x
  const COPPER_HI = '#F6B27A', COPPER = '#C8743A', COPPER_LO = '#7A3E19';

  const r = (n) => Math.round(n * 10) / 10;
  const P = (pts) => pts.map((p, i) => (i ? 'L' : 'M') + r(p[0]) + ' ' + r(p[1])).join(' ');
  const lerp = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
  const mirror = (pts) => pts.map(([x, y]) => [2 * C - x, y]);
  const lum = (hex) => {
    const n = parseInt(hex.slice(1), 16);
    return (0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255)) / 255;
  };

  function geometry(j) {
    const w = !!j.women, o = !!j.oversize;
    const g = {
      neckW: w ? 34 : 40, neckY: 112,
      sW: o ? 150 : w ? 112 : 128,  // half shoulder width
      sY: o ? 150 : 132,
      cW: o ? 150 : w ? 104 : 120,  // half chest width at armpit
      aY: o ? 300 : 268,            // armpit y
      wW: w ? 92 : o ? 150 : 116,   // half waist
      hW: w ? 108 : o ? 152 : 118,  // half hem
      hY: j.cropped ? 520 : o ? 612 : 598,
      angle: o ? 0.2 : 0.3,         // sleeve angle (rad from vertical)
      sleeveL: o ? 372 : w ? 420 : 438,
      cuffW: w ? 54 : o ? 82 : 64,
    };
    return g;
  }

  function sleeve(g) {
    const S = [C - g.sW, g.sY], A = [C - g.cW, g.aY];
    const out = [S[0] - g.sleeveL * Math.sin(g.angle), S[1] + g.sleeveL * Math.cos(g.angle)];
    const inn = [out[0] + g.cuffW * Math.cos(g.angle), out[1] + g.cuffW * Math.sin(g.angle) * 0.6];
    return { S, A, out, inn };
  }

  // Trace layouts: arrays of polylines (left side; mirrored unless `both`)
  function layoutTraces(j, g) {
    const sl = sleeve(g);
    const port = [C + 70, g.hY - 46];
    const L = [], nodes = [], solo = [];
    const sleeveRun = (t) => [lerp(sl.S, sl.A, 0.45), lerp(lerp(sl.S, sl.A, 0.45), lerp(sl.out, sl.inn, 0.5), t)];
    switch (j.layout) {
      case 'racer':
      case 'racerFull': {
        nodes.push([C - 62, 214], [C - 66, 388]);
        L.push([[C - 62, 214], [C - 62, 300], [C - 66, 300], [C - 66, 388]]);
        L.push([[C - 66, 388], [C - 66, 470], [C - 20, 470], [C - 20, g.hY - 46]]);
        L.push([[C - 62, 214], [C - 96, 214], [C - 104, 206], [C - g.cW + 14, 206]]);
        if (j.layout === 'racerFull') { nodes.push([C - 92, 300]); L.push([[C - 66, 300], [C - 92, 300]]); L.push(sleeveRun(0.95)); }
        else L.push(sleeveRun(0.55));
        solo.push([[C - 20, g.hY - 46], port, [port[0], port[1]]]);
        break;
      }
      case 'moto': {
        nodes.push([C - 70, 236], [C - 60, 420]);
        // diagonal follows asymmetric zip
        solo.push([[C + 96, 150], [C + 40, 230], [C - 10, 360], [C - 40, 470], [C - 40, g.hY - 34]]);
        L.push([[C - 70, 236], [C - 70, 330], [C - 60, 340], [C - 60, 420]]);
        L.push([[C - 60, 420], [C - 60, 500], [port[0] - 140, 500]]);
        L.push(sleeveRun(0.7));
        solo.push([[C + 70, 500], port]);
        solo.push([[C - 60, 500], [C + 70, 500]]);
        break;
      }
      case 'array': {
        const ys = j.cropped ? [210, 300, 390] : [214, 320, 430];
        ys.forEach((y, i) => nodes.push([C - (i === 1 ? 86 : 64), y]));
        L.push([[C - 64, ys[0]], [C - 86, ys[1]], [C - 64, ys[2]]].map((p) => p));
        L.push([[C - 64, ys[0]], [C - 30, ys[0] - 26], [C - 30, ys[2] + 30]]);
        L.push([[C - 64, ys[2]], [C - 30, ys[2] + 30]]);
        L.push(sleeveRun(0.5));
        solo.push([[C - 30, ys[2] + 30], [C + 30, ys[2] + 30]]);
        solo.push([[C + 30, ys[2] + 30], [port[0], ys[2] + 30], [port[0], Math.min(port[1], g.hY - 40)]]);
        break;
      }
      case 'exposed': {
        const n = j.women ? 3 : 4;
        for (let i = 0; i < n; i++) nodes.push([C - (i % 2 ? 92 : 56), 200 + i * (j.women ? 110 : 96)]);
        const zz = [[C - 20, 170]];
        for (let i = 0; i < n; i++) zz.push(nodes[i], [C - 22, 230 + i * (j.women ? 110 : 96)]);
        zz.push([C - 22, g.hY - 50]);
        L.push(zz);
        L.push(sleeveRun(0.9));
        L.push([[C - g.sW + 20, g.sY + 20], [C - 56, 200]]);
        solo.push([[C - 22, g.hY - 50], [port[0], g.hY - 50], port]);
        break;
      }
      case 'spine': {
        const n = j.women ? 3 : 4;
        for (let i = 0; i < n; i++) nodes.push([C - 46, 200 + i * (j.women ? 112 : 98)]);
        L.push([[C - 46, 170], [C - 46, nodes[n - 1][1]], [C - 46, g.hY - 60]]);
        L.push([[C - 46, 200], [C - 100, 240], [C - 100, 380]]);
        L.push(sleeveRun(0.6));
        solo.push([[C - 46, g.hY - 60], [port[0], g.hY - 60], port]);
        solo.push([[C + 46, g.hY - 60], [C - 46, g.hY - 60]]);
        break;
      }
      case 'endo': {
        const n = j.women ? 4 : 5;
        for (let i = 0; i < n; i++) {
          const y = 196 + i * (j.women ? 80 : 74);
          const span = g.cW - 18 - Math.abs(i - 1.5) * 6;
          L.push([[C - 10, y], [C - 40, y - 6], [C - span * 0.7, y + 4], [C - span, y + 26]]);
          nodes.push([C - span * 0.62, y + 3]);
        }
        solo.push([[C - 10, 180], [C - 10, g.hY - 50]]);
        solo.push([[C + 10, 180], [C + 10, g.hY - 50]]);
        solo.push([[C + 10, g.hY - 50], [port[0], g.hY - 50], port]);
        L.push(sleeveRun(0.85));
        break;
      }
    }
    // count trimming so mirrored nodes match transducer spec visually
    return { L, nodes, solo, port };
  }

  function renderJacket(j, opts = {}) {
    const id = 'j' + j.slug.replace(/[^a-z0-9]/gi, '') + Math.random().toString(36).slice(2, 7);
    const g = geometry(j);
    const sl = sleeve(g);
    const dark = lum(j.base) < 0.3;
    const line = dark ? 'rgba(255,255,255,.14)' : 'rgba(0,0,0,.22)';
    const stitch = dark ? 'rgba(255,255,255,.18)' : 'rgba(0,0,0,.18)';
    const edge = dark ? '#000' : '#2b2724';

    // ---------- shapes
    const bodyL = [
      [C - g.neckW, g.neckY],
      [C - g.sW, g.sY],
      [C - g.cW, g.aY],
      [C - g.wW, 420],
      [C - g.hW, g.hY],
    ];
    const body = 'M' + r(C) + ' ' + (g.neckY + 40) + ' ' +
      P([...bodyL.slice().reverse().map((p) => p), ]).replace('M', 'L') + ' ' +
      P(mirror(bodyL)).replace('M', 'L') + ' Z';
    // build body clean: neck centre -> left neck -> shoulder -> armpit -> waist -> hem -> right hem ... -> right neck
    const bodyPath =
      `M${C} ${g.neckY + 34} Q ${C - g.neckW * 0.55} ${g.neckY + 26} ${C - g.neckW} ${g.neckY} ` +
      `L${C - g.sW} ${g.sY} L${C - g.cW} ${g.aY} Q ${C - g.wW - 6} 350 ${C - g.wW} 420 ` +
      `L${C - g.hW} ${g.hY} Q ${C} ${g.hY + 10} ${C + g.hW} ${g.hY} L${C + g.wW} 420 ` +
      `Q ${C + g.wW + 6} 350 ${C + g.cW} ${g.aY} L${C + g.sW} ${g.sY} L${C + g.neckW} ${g.neckY} ` +
      `Q ${C + g.neckW * 0.55} ${g.neckY + 26} ${C} ${g.neckY + 34} Z`;
    void body;
    const sleevePath = (m) => {
      const pts = [sl.S, sl.out, sl.inn, sl.A];
      const q = m ? mirror(pts) : pts;
      return `M${r(q[0][0])} ${r(q[0][1])} Q ${r((q[0][0] + q[1][0]) / 2 + (m ? 8 : -8))} ${r((q[0][1] + q[1][1]) / 2)} ${r(q[1][0])} ${r(q[1][1])} L${r(q[2][0])} ${r(q[2][1])} L${r(q[3][0])} ${r(q[3][1])} Z`;
    };

    let s = '';
    s += `<svg viewBox="0 0 600 700" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${j.name} jacket render" class="jk ${opts.animate ? 'jk-live' : ''}">`;
    s += `<defs>
      <linearGradient id="${id}cu" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${COPPER_HI}"/><stop offset=".5" stop-color="${COPPER}"/><stop offset="1" stop-color="${COPPER_LO}"/></linearGradient>
      <linearGradient id="${id}vol" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#000" stop-opacity=".34"/><stop offset=".22" stop-color="#fff" stop-opacity="${dark ? 0.07 : 0.12}"/>
        <stop offset=".5" stop-color="#fff" stop-opacity="0"/><stop offset=".78" stop-color="#000" stop-opacity=".1"/><stop offset="1" stop-color="#000" stop-opacity=".38"/></linearGradient>
      <linearGradient id="${id}fall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity="${dark ? 0.06 : 0.1}"/><stop offset=".6" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".22"/></linearGradient>
      <radialGradient id="${id}node" cx=".4" cy=".35" r=".7"><stop offset="0" stop-color="#3a3836"/><stop offset="1" stop-color="#050505"/></radialGradient>
      <filter id="${id}glow" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="3.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      <filter id="${id}shadow" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="18" stdDeviation="18" flood-color="#000" flood-opacity=".55"/></filter>
      <clipPath id="${id}clipB"><path d="${bodyPath}"/></clipPath>
    </defs>`;

    if (!opts.tracesOnly) {
      // floor shadow
      s += `<ellipse cx="300" cy="${g.hY + 52}" rx="${g.hW + 90}" ry="16" fill="#000" opacity=".45" filter="url(#${id}glow)"/>`;
      s += `<g filter="url(#${id}shadow)">`;
      // hood behind
      if (j.collar === 'hood') {
        s += `<path d="M${C - 96} ${g.sY - 4} C ${C - 120} 40, ${C + 120} 40, ${C + 96} ${g.sY - 4} L ${C + 48} ${g.neckY + 20} L ${C - 48} ${g.neckY + 20} Z" fill="${j.base}" stroke="${edge}" stroke-width="2"/>`;
        s += `<path d="M${C - 96} ${g.sY - 4} C ${C - 120} 40, ${C + 120} 40, ${C + 96} ${g.sY - 4}" fill="none" stroke="#000" stroke-opacity=".35" stroke-width="10"/>`;
        s += `<path d="M${C - 62} ${g.neckY + 4} C ${C - 70} 74, ${C + 70} 74, ${C + 62} ${g.neckY + 4} Z" fill="#000" opacity=".55"/>`;
      }
      // sleeves
      [0, 1].forEach((m) => {
        s += `<path d="${sleevePath(m)}" fill="${j.base}" stroke="${edge}" stroke-width="2" stroke-linejoin="round"/>`;
        s += `<path d="${sleevePath(m)}" fill="url(#${id}vol)" opacity=".9"/>`;
        // cuff
        const c1 = m ? mirror([sl.out])[0] : sl.out, c2 = m ? mirror([sl.inn])[0] : sl.inn;
        const back = (p, d) => [p[0] + (m ? -1 : 1) * Math.sin(g.angle) * d, p[1] - Math.cos(g.angle) * d];
        const cb1 = back(c1, j.rib ? 34 : 18), cb2 = back(c2, j.rib ? 34 : 18);
        s += `<path d="${P([c1, c2, cb2, cb1])} Z" fill="${j.rib ? j.accent : j.base}" stroke="${edge}" stroke-width="1.6"/>`;
        if (j.rib) for (let t = 0.1; t < 1; t += 0.12) { const a = lerp(c1, c2, t), b = lerp(cb1, cb2, t); s += `<path d="${P([a, b])}" stroke="${line}" stroke-width="1.4"/>`; }
        else s += `<path d="${P([cb1, cb2])}" stroke="${stitch}" stroke-width="1.2" stroke-dasharray="3 3"/>`;
        // racing stripes
        if (j.stripes) {
          const S = m ? mirror([sl.S])[0] : sl.S, A = m ? mirror([sl.A])[0] : sl.A;
          const O = cb1, I = cb2;
          [[0.16, 0.3], [0.38, 0.52]].forEach(([a, b]) => {
            s += `<path d="${P([lerp(S, A, a), lerp(S, A, b), lerp(O, I, b), lerp(O, I, a)])} Z" fill="${j.trim}"/>`;
          });
        }
        // MA-1 sleeve pocket
        if (j.sleevePocket && !m) {
          const top = lerp(lerp(sl.S, sl.A, 0.3), lerp(sl.out, sl.inn, 0.3), 0.22);
          s += `<g transform="rotate(${(g.angle * 180) / Math.PI} ${top[0]} ${top[1]})"><rect x="${top[0] - 22}" y="${top[1]}" width="44" height="66" rx="4" fill="${j.base}" stroke="${line}" stroke-width="2"/><rect x="${top[0] - 14}" y="${top[1] + 10}" width="10" height="10" fill="${line}"/><rect x="${top[0] + 2}" y="${top[1] + 10}" width="10" height="10" fill="${line}"/></g>`;
        }
      });
      // body
      s += `<path d="${bodyPath}" fill="${j.base}" stroke="${edge}" stroke-width="2.2" stroke-linejoin="round"/>`;
      s += `<g clip-path="url(#${id}clipB)">`;
      s += `<rect x="0" y="0" width="600" height="700" fill="url(#${id}vol)"/><rect x="0" y="0" width="600" height="700" fill="url(#${id}fall)"/>`;
      // seams
      s += `<path d="M${C - 98} ${g.sY + 6} C ${C - 86} 280, ${C - 104} 420, ${C - 92} ${g.hY}" fill="none" stroke="${line}" stroke-width="1.6"/>`;
      s += `<path d="M${C + 98} ${g.sY + 6} C ${C + 86} 280, ${C + 104} 420, ${C + 92} ${g.hY}" fill="none" stroke="${line}" stroke-width="1.6"/>`;
      s += `<path d="M${C - 95} ${g.sY + 10} C ${C - 82} 280, ${C - 100} 420, ${C - 88} ${g.hY}" fill="none" stroke="${stitch}" stroke-width="1" stroke-dasharray="3 3"/>`;
      // pockets
      if (j.collar !== 'moto') {
        s += `<path d="M${C - 120} ${g.hY - 150} L ${C - 86} ${g.hY - 92}" stroke="${dark ? 'rgba(255,255,255,.22)' : 'rgba(0,0,0,.35)'}" stroke-width="3" stroke-linecap="round"/>`;
        s += `<path d="M${C + 120} ${g.hY - 150} L ${C + 86} ${g.hY - 92}" stroke="${dark ? 'rgba(255,255,255,.22)' : 'rgba(0,0,0,.35)'}" stroke-width="3" stroke-linecap="round"/>`;
      }
      // tactical plates
      if (j.plates) {
        [[-1], [1]].forEach(([d]) => {
          s += `<path d="M${C + d * 22} 168 L ${C + d * 104} 186 L ${C + d * 112} 276 L ${C + d * 30} 290 Z" fill="${j.accent}" stroke="${j.trim}" stroke-opacity=".55" stroke-width="1.5"/>`;
          s += `<path d="M${C + d * 30} 300 L ${C + d * 108} 292" stroke="#000" stroke-opacity=".6" stroke-width="10"/>`;
          s += `<rect x="${C + d * 70 - 9}" y="285" width="18" height="16" rx="2" fill="${j.trim}"/>`;
        });
        s += `<path d="M${C - g.wW} 470 L ${C + g.wW} 470" stroke="#000" stroke-opacity=".55" stroke-width="14"/>`;
        s += `<rect x="${C - 22}" y="462" width="44" height="16" rx="3" fill="${j.trim}"/>`;
      }
      // rib hem
      if (j.rib) {
        s += `<path d="M${C - g.hW - 4} ${g.hY - 38} L ${C + g.hW + 4} ${g.hY - 38} L ${C + g.hW + 4} ${g.hY + 12} L ${C - g.hW - 4} ${g.hY + 12} Z" fill="${j.accent}"/>`;
        for (let x = C - g.hW; x < C + g.hW; x += 9) s += `<path d="M${x} ${g.hY - 36} V ${g.hY + 10}" stroke="${line}" stroke-width="1.4"/>`;
      } else {
        s += `<path d="M${C - g.hW} ${g.hY - 20} Q ${C} ${g.hY - 10} ${C + g.hW} ${g.hY - 20}" fill="none" stroke="${stitch}" stroke-width="1.2" stroke-dasharray="3 3"/>`;
      }
      // moto belt
      if (j.collar === 'moto') {
        s += `<path d="M${C - g.hW - 4} ${g.hY - 44} L ${C + g.hW + 4} ${g.hY - 44} L ${C + g.hW + 4} ${g.hY + 8} L ${C - g.hW - 4} ${g.hY + 8} Z" fill="${j.trim}" opacity=".65"/>`;
        s += `<rect x="${C - 128}" y="${g.hY - 38}" width="26" height="30" rx="3" fill="none" stroke="${j.accent}" stroke-width="3.5"/>`;
        s += `<path d="M${C - 40} 340 L ${C - 92} 352" stroke="${j.accent}" stroke-width="2.5"/><path d="M${C + 60} 420 L ${C + 110} 410" stroke="${j.accent}" stroke-width="2.5"/>`;
      }
      s += `</g>`; // end clip

      // zipper
      const zip = j.collar === 'moto'
        ? [[C + 96, 150], [C + 40, 230], [C - 10, 360], [C - 40, 470], [C - 40, g.hY + 6]]
        : [[C, g.neckY + 30], [C, g.hY + 6]];
      const zipCol = j.collar === 'moto' ? j.accent : dark ? '#8a8a8a' : '#3a3a3a';
      s += `<path d="${P(zip)}" fill="none" stroke="#000" stroke-opacity=".5" stroke-width="7"/>`;
      s += `<path d="${P(zip)}" fill="none" stroke="${zipCol}" stroke-width="3" stroke-dasharray="1.6 2.2"/>`;
      const pull = zip[0];
      s += `<rect x="${pull[0] - 5}" y="${pull[1] + 4}" width="10" height="24" rx="3" fill="${zipCol}"/>`;

      // collars
      const nL = C - g.neckW, nY = g.neckY;
      if (j.collar === 'band') {
        s += `<path d="M${nL - 4} ${nY + 2} L ${nL + 2} ${nY - 30} Q ${C} ${nY - 40} ${C + g.neckW - 2} ${nY - 30} L ${C + g.neckW + 4} ${nY + 2} Q ${C} ${nY - 10} ${nL - 4} ${nY + 2} Z" fill="${j.base}" stroke="${edge}" stroke-width="2"/>`;
        s += `<path d="M${nL + 2} ${nY - 30} Q ${C} ${nY - 40} ${C + g.neckW - 2} ${nY - 30}" fill="none" stroke="${j.trim}" stroke-width="4"/>`;
        s += `<rect x="${C - 3}" y="${nY - 34}" width="40" height="18" rx="6" fill="${j.base}" stroke="${edge}" stroke-width="1.5"/><circle cx="${C + 28}" cy="${nY - 25}" r="3.5" fill="${COPPER}"/>`;
      } else if (j.collar === 'rib') {
        s += `<path d="M${nL - 10} ${nY + 8} Q ${C} ${nY + 48} ${C + g.neckW + 10} ${nY + 8} L ${C + g.neckW + 2} ${nY - 18} Q ${C} ${nY + 18} ${nL - 2} ${nY - 18} Z" fill="${j.accent}" stroke="${edge}" stroke-width="1.8"/>`;
        s += `<path d="M${nL + 6} ${nY + 4} Q ${C} ${nY + 36} ${C + g.neckW - 6} ${nY + 4}" fill="none" stroke="${j.trim}" stroke-width="3" opacity=".9"/>`;
      } else if (j.collar === 'moto') {
        // lapels
        s += `<path d="M${C - g.neckW} ${nY} L ${C - 92} 214 L ${C - 40} 250 L ${C - 20} ${nY + 40} Z" fill="${j.base}" stroke="${edge}" stroke-width="2"/>`;
        s += `<path d="M${C + g.neckW} ${nY} L ${C + 140} 196 L ${C + 96} 150 L ${C + 40} ${nY + 18} Z" fill="${j.base}" stroke="${edge}" stroke-width="2"/>`;
        s += `<path d="M${C - g.neckW} ${nY} L ${C - 92} 214 L ${C - 40} 250" fill="none" stroke="#000" stroke-opacity=".35" stroke-width="5"/>`;
        s += `<circle cx="${C - 78}" cy="214" r="5" fill="${j.accent}"/><circle cx="${C + 124}" cy="190" r="5" fill="${j.accent}"/>`;
        s += `<path d="M${nL - 4} ${nY + 4} Q ${C} ${nY - 18} ${C + g.neckW + 4} ${nY + 4} L ${C + g.neckW} ${nY - 16} Q ${C} ${nY - 38} ${nL} ${nY - 16} Z" fill="${j.base}" stroke="${edge}" stroke-width="2"/>`;
      } else if (j.collar === 'spread') {
        s += `<path d="M${C - 6} ${nY + 30} L ${nL - 30} ${nY + 64} L ${nL - 18} ${nY - 6} L ${nL + 4} ${nY - 14} Z" fill="${j.base}" stroke="${edge}" stroke-width="2"/>`;
        s += `<path d="M${C + 6} ${nY + 30} L ${C + g.neckW + 30} ${nY + 64} L ${C + g.neckW + 18} ${nY - 6} L ${C + g.neckW - 4} ${nY - 14} Z" fill="${j.base}" stroke="${edge}" stroke-width="2"/>`;
        s += `<path d="M${nL - 30} ${nY + 64} L ${nL - 18} ${nY - 6}" stroke="${j.trim}" stroke-width="3"/>`;
      } else if (j.collar === 'funnel') {
        s += `<path d="M${nL - 8} ${nY + 6} L ${nL - 2} ${nY - 50} Q ${C} ${nY - 62} ${C + g.neckW + 2} ${nY - 50} L ${C + g.neckW + 8} ${nY + 6} Q ${C} ${nY + 18} ${nL - 8} ${nY + 6} Z" fill="${j.accent}" stroke="${edge}" stroke-width="2"/>`;
        s += `<path d="M${C} ${nY - 56} L ${C} ${nY + 14}" stroke="#000" stroke-opacity=".5" stroke-width="5"/>`;
        s += `<path d="M${nL + 4} ${nY - 30} L ${C + g.neckW - 4} ${nY - 30}" stroke="${j.trim}" stroke-width="2" stroke-dasharray="6 4"/>`;
      } else if (j.collar === 'hood') {
        // drawcords
        s += `<path d="M${C - 22} ${nY + 26} q -6 60 4 110" fill="none" stroke="${j.trim}" stroke-width="4" stroke-linecap="round"/><path d="M${C + 22} ${nY + 26} q 6 60 -4 110" fill="none" stroke="${j.trim}" stroke-width="4" stroke-linecap="round"/>`;
        s += `<rect x="${C - 28}" y="${nY + 132}" width="12" height="18" rx="3" fill="${j.accent}"/><rect x="${C + 16}" y="${nY + 132}" width="12" height="18" rx="3" fill="${j.accent}"/>`;
      }
      // studs
      if (j.studs) {
        for (let i = 0; i < 5; i++) {
          const a = lerp([C - g.sW + 10, g.sY + 6], [C - g.neckW - 8, g.neckY + 10], i / 4.5);
          s += `<circle cx="${a[0]}" cy="${a[1] + 8}" r="4.2" fill="#d9d9d9" stroke="#555"/><circle cx="${2 * C - a[0]}" cy="${a[1] + 8}" r="4.2" fill="#d9d9d9" stroke="#555"/>`;
        }
      }
      // chest badge
      {
        const bp = mirror([lerp(lerp(sl.S, sl.A, 0.8), lerp(sl.out, sl.inn, 0.8), 0.16)])[0];
        s += `<g transform="translate(${r(bp[0])} ${r(bp[1])}) rotate(${r((-g.angle * 180) / Math.PI)})"><rect x="-19" y="-11" width="38" height="22" rx="3" fill="#0d0d0d" stroke="url(#${id}cu)" stroke-width="1.6"/><text x="0" y="4.5" text-anchor="middle" font-family="Arial, sans-serif" font-weight="700" font-size="11" fill="${COPPER_HI}" letter-spacing="1">CF</text></g>`;
      }
      s += `</g>`; // end shadow group
    }

    if (opts.tracesOnly) {
      // garment outline as a reference for the factory template
      [0, 1].forEach((m) => { s += `<path d="${sleevePath(m)}" fill="none" stroke="#999" stroke-width="1.5" stroke-dasharray="6 5"/>`; });
      s += `<path d="${bodyPath}" fill="none" stroke="#999" stroke-width="1.5" stroke-dasharray="6 5"/>`;
      s += `<text x="20" y="30" font-family="Arial, sans-serif" font-size="14" fill="#666">${j.name} — copper trace template (front, proportional; scale to size block)</text>`;
    }

    // ---------- copper circuit
    const T = layoutTraces(j, g);
    const allPaths = [];
    T.L.forEach((pl) => { allPaths.push(pl, mirror(pl)); });
    T.solo.forEach((pl) => allPaths.push(pl));
    const nodes = [...T.nodes, ...mirror(T.nodes)];
    const thick = j.layout === 'exposed' ? 1.5 : 1;
    s += `<g class="cu" ${opts.tracesOnly ? '' : `filter="url(#${id}glow)"`}>`;
    allPaths.forEach((pl) => { s += `<path d="${P(pl)}" fill="none" stroke="${COPPER_LO}" stroke-width="${6 * thick}" stroke-linejoin="round" stroke-linecap="round" opacity=".85"/>`; });
    allPaths.forEach((pl) => { s += `<path d="${P(pl)}" fill="none" stroke="url(#${id}cu)" stroke-width="${3 * thick}" stroke-linejoin="round" stroke-linecap="round"/>`; });
    if (opts.animate) allPaths.forEach((pl) => { s += `<path class="flow" d="${P(pl)}" fill="none" stroke="${COPPER_HI}" stroke-width="${2 * thick}" stroke-linecap="round" stroke-dasharray="2 26"/>`; });
    allPaths.forEach((pl) => pl.slice(1, -1).forEach((p) => { s += `<circle cx="${r(p[0])}" cy="${r(p[1])}" r="${2.6 * thick}" fill="${COPPER_HI}"/>`; }));
    s += `</g>`;

    // transducers
    const nr = j.women ? 14 : 17;
    nodes.forEach((n, i) => {
      s += `<g class="node" style="--i:${i}">`;
      s += `<circle class="halo" cx="${r(n[0])}" cy="${r(n[1])}" r="${nr + 7}" fill="none" stroke="${COPPER_HI}" stroke-width="1.5" opacity="0"/>`;
      s += `<circle cx="${r(n[0])}" cy="${r(n[1])}" r="${nr}" fill="url(#${id}node)" stroke="url(#${id}cu)" stroke-width="3.2"/>`;
      s += `<circle cx="${r(n[0])}" cy="${r(n[1])}" r="${nr * 0.55}" fill="none" stroke="${COPPER}" stroke-opacity=".7" stroke-width="1.2"/>`;
      s += `<circle cx="${r(n[0])}" cy="${r(n[1])}" r="${nr * 0.18}" fill="${COPPER_HI}"/>`;
      s += `</g>`;
    });

    // frequency port
    const pt = T.port;
    s += `<g class="port"><rect x="${pt[0] - 16}" y="${pt[1] - 12}" width="32" height="24" rx="6" fill="#0a0a0a" stroke="url(#${id}cu)" stroke-width="2.4"/><circle cx="${pt[0]}" cy="${pt[1]}" r="5.5" fill="#000" stroke="${COPPER_HI}" stroke-width="2"/></g>`;

    s += `</svg>`;
    return s;
  }

  // Mount helper: render into el, then swap to a real photo if photos/<slug>.jpg exists
  // One lookup per jacket per page load, shared by every place it's shown.
  const photoCache = new Map();
  function findPhoto(slug, base) {
    if (!photoCache.has(slug)) {
      photoCache.set(slug, new Promise((resolve) => {
        const tryExt = (exts) => {
          if (!exts.length) return resolve(null);
          const img = new Image();
          img.onload = () => resolve(img.src);
          img.onerror = () => tryExt(exts.slice(1));
          img.src = base + slug + exts[0];
        };
        tryExt(['.jpg', '.webp']);
      }));
    }
    return photoCache.get(slug);
  }

  // Until a real photo exists, show the jacket's actual colourway and spec — never a drawing.
  function swatchHTML(j) {
    const dark = lum(j.base) < 0.35;
    return `<div class="sw" style="--base:${j.base};--trim:${j.trim};--ink:${dark ? '#EFE7DC' : '#1a1410'}">
      <div class="sw-trim"></div>
      <div class="sw-body">
        <dl class="sw-spec"><dt>Shell</dt><dd>${j.shell}</dd><dt>Colourway</dt><dd>${j.base} / ${j.trim}</dd></dl>
      </div>
    </div>`;
  }

  function mountJacket(el, j, opts = {}) {
    el.innerHTML = swatchHTML(j);
    if (opts.noPhoto || window.CF_NO_PHOTOS) return;
    findPhoto(j.slug, opts.photoBase || 'photos/').then((src) => {
      if (!src || !el.isConnected) return;
      const img = new Image();
      img.src = src; img.alt = j.name + ' jacket'; img.className = 'jk-photo'; img.decoding = 'async';
      el.innerHTML = ''; el.appendChild(img); el.classList.add('has-photo');
    });
  }

  // Trace template export (for factory) — copper layer only, as standalone SVG
  function traceTemplate(j) {
    const svg = renderJacket(j, { tracesOnly: true, animate: false });
    return svg.replace('<svg ', '<svg width="600" height="700" ');
  }

  window.renderJacket = renderJacket;
  window.mountJacket = mountJacket;
  window.swatchHTML = swatchHTML;
  window.traceTemplate = traceTemplate;
})();
