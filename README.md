# WOW! Authorized Dealer — One-Page Website

A fast, modern, animation-rich single-page marketing site for an **independent authorized
dealer** of WOW! (WideOpenWest) internet, TV, mobile and home-phone services, plus the full set
of policy pages.

> ⚠️ **This is a dealer/reseller template, not the official WOW! site.** It is built to present
> you clearly as an *independent authorized dealer*. Before you publish, make sure you actually
> hold an authorized-dealer agreement that permits use of the WOW! name and logo, and have your
> own legal counsel review the policy pages.

---

## Tech stack

| Concern | Choice | Why |
|---|---|---|
| Framework | **Next.js 14** (App Router, `output: 'export'`) | Pre-rendered static HTML for every route → great SEO/AEO/GEO **and** page speed |
| Styling | **Hand-written CSS** (`src/app/globals.css`) with design tokens | Fully bespoke, unique structure — not a copy of the source site |
| Fonts | **DM Sans** + **Plus Jakarta Sans** via `next/font` (self-hosted) | The exact WOW! type pairing, with no render-blocking font request |
| Animation | **Framer Motion**, **GSAP + ScrollTrigger**, **CSS 3D transforms**, **Lenis** smooth scroll | Scroll reveals, kinetic type, magnetic buttons, 3D tilt console, fiber light-streaks, aurora flow, parallax |
| Structured data | JSON-LD (Organization, WebSite, Product/Offer, FAQ, Breadcrumb) | Rich results + answer-engine friendliness |

Colours and fonts are taken directly from the official WOW! brand; the layout, CSS and copy are
original to this project.

---

## Getting started

```bash
npm install       # install dependencies
npm run dev       # local dev server (hot reload) — open the printed localhost URL
npm run build     # production build → static files in ./out
npm run serve     # serve the built ./out folder locally (run build first)
```

> The animations are `requestAnimationFrame`-driven, so they only play in a **visible** browser
> tab (browsers suspend rAF in background tabs). Use `npm run dev` in a normal window to see the
> full experience.

---

## What to customise before launch

Everything you're likely to change lives in a few files:

### 1. `src/lib/site.config.ts` — your details (one place, used everywhere)
- `phoneDisplay` / `phoneHref` — **replace the placeholder `1-800-555-0100`** with your real number
- `email`, `hoursDisplay`
- `siteUrl` — **your real domain** (drives canonical URLs, sitemap, Open Graph)
- `leadEndpoint` — point at your CRM / webhook / form handler. Left blank = demo mode (the form
  validates and shows a success message without sending anywhere)
- `states`, `customerCount` — coverage details

### 2. `src/lib/content.ts` — the marketing copy
Plans, pricing, features, bundles, testimonials and FAQs. Pricing/speeds reflect publicly
advertised WOW! offers and should be confirmed against current WOW! terms.

### 3. `src/lib/legalDocs.ts` — the 8 policy pages
Privacy & Data Protection, Disclaimer, Cookies, TCPA, Trademarks, Marketing, Service Fulfillment,
PCI DSS. These are **plain-language templates** — have your lawyer review and tailor them.

### 4. `public/og.svg` — social share image
Swap for a **1200×630 PNG/JPG** (`og.png`) for best compatibility, then update the `images` paths
in `src/app/layout.tsx`.

---

## Deployment

`npm run build` produces a fully static `./out` folder. Drop it on any static host:

- **Vercel / Netlify / Cloudflare Pages** — build command `npm run build`, output dir `out`
- **Amazon S3 + CloudFront**, GitHub Pages, or any web server — upload `out/`

No server runtime is required.

---

## SEO / AEO / GEO / compliance checklist (already built in)

- ✅ Server-rendered HTML content on every route (crawlable without JS)
- ✅ Per-page `<title>`, meta description, canonical, Open Graph, Twitter cards
- ✅ JSON-LD: Organization, WebSite, Product + Offers, FAQPage, BreadcrumbList
- ✅ `robots.txt` + `sitemap.xml` generated automatically
- ✅ Accessible: landmarks, skip link, alt text, focus states, `prefers-reduced-motion`
- ✅ Cookie-consent banner + full Cookies Policy
- ✅ TCPA-compliant consent language on the lead form
- ✅ Prominent **independent authorized dealer** disclosure in header + footer + legal pages
- ✅ Transparent pricing disclaimers (promotional, taxes/fees, subject to availability)

### Still to do (yours)
- [ ] Replace placeholder phone/email/domain in `site.config.ts`
- [ ] Wire the lead form to a real endpoint
- [ ] Provide a 1200×630 OG image
- [ ] Have counsel review the policy pages
- [ ] Confirm your authorized-dealer agreement covers use of WOW! marks
- [ ] Verify current plan pricing/speeds against WOW!'s live terms

---

## Project structure

```
src/
  app/
    layout.tsx            # root shell, fonts, metadata, site-wide JSON-LD, header/footer
    page.tsx              # the one-page site (assembles all sections)
    globals.css           # the entire bespoke design system
    robots.ts, sitemap.ts # auto-generated robots.txt & sitemap.xml
    not-found.tsx         # 404
    legal/<slug>/page.tsx # 8 policy routes
  components/
    Header, Hero, Hero3D, TrustBar, Plans, Features, Products,
    Fiber, Coverage, Steps, Testimonials, FAQ, CTASection,
    LeadForm, Footer, CookieConsent, Logo, LegalPage
    ui/                   # animation primitives (Reveal, AnimatedHeading, WordRotator,
                          #   TiltCard, MagneticButton, Counter, SmoothScroll)
  lib/
    site.config.ts        # ← your details
    content.ts            # ← marketing copy
    legalDocs.ts          # ← policy content
    icons.tsx, jsonld.ts
public/                   # favicon.svg, og.svg, site.webmanifest
scripts/static-server.mjs # tiny zero-dependency static server for ./out
```
