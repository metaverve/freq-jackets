# Copper Frequency — freq-jackets

Website for the Copper Frequency jacket line: the collection, a Kickstarter campaign page, and the team manufacturing guide.

Plain static site — no build step. Vercel serves it as-is.

| Page | What it is |
|---|---|
| `index.html` | Home: interactive hero, men's and women's collection, how it works, pairs |
| `kickstarter.html` | Campaign page: rewards, stretch goals, timeline, risks, FAQ |
| `manufacturing.html` | Team guide: platform, style sheets with trace-template downloads, BOM, partners, electronics, assembly, QC checklist, sizing, samples, compliance (not indexed by search engines) |

## Editing

- **Jackets** (names, copy, colours, specs): `assets/jackets.js` → `JACKETS`
- **Campaign** (Kickstarter URL, goal, tiers, stretch goals, timeline): `assets/site.js` → `CAMPAIGN`
  - Paste the Kickstarter link into `kickstarterUrl` and every "Launching soon" badge becomes a live "Back it" button.
  - When the campaign is live, set `status: 'live'` and update `pledged`, `backers`, `daysToGo`.
- **Photos**: see `photos/README.md` — drop `photos/<slug>.jpg` and it replaces the render.

## Run locally

```bash
python app.py
```

Opens http://localhost:8765 in your browser.
