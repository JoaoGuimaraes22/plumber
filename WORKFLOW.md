# Template Business — Build Workflow

## Overview

Freelance web dev business building website templates for local service businesses in Cascais/Carcavelos, Portugal. Each template is a complete, deployable Next.js site that serves as both a portfolio piece and a ready-to-pitch client solution.

## Templates Built

| #   | Template   | Brand         | Target                  | Status      | URL                      |
| --- | ---------- | ------------- | ----------------------- | ----------- | ------------------------ |
| 1   | Restaurant | Koya's Bistro | Mercado de Carcavelos   | ✅ Deployed | koyo.vercel.app          |
| 2   | Mechanic   | Revicar       | Auto repair, Carcavelos | ✅ Deployed | mechanic-five.vercel.app |
| 3   | Plumber    | AquaFix       | Canalizador, Cascais    | 🔨 Building | TBD                      |
| 4   | Hair Salon | TBD           | TBD                     | ⬜ Planned  | —                        |
| 5   | Contractor | TBD           | TBD                     | ⬜ Planned  | —                        |

## New Template Workflow

### Phase 1: Research & Brand

1. **Market research** — Search for real local businesses in the target trade
2. **Competitor analysis** — Identify what existing websites look like (usually terrible)
3. **Brand creation** — Name, color palette, typography that fits the trade
4. **Define sections** — Which components this trade needs (varies by business type)

### Phase 2: Scaffold

1. Create repo and `create-next-app`
2. Add project files from Claude: `Claude.md`, i18n config, middleware, globals.css, dictionaries
3. Delete default Next.js files (`app/page.tsx` at root, default styles)
4. `npm install && npm run dev` — verify clean start
5. Push to GitHub, connect to Vercel

### Phase 3: Build (Section by Section)

For each section:

1. **Claude generates:** Component `.tsx` + dictionary entries (both PT and EN) + updated `page.tsx`
2. **You add files** to your local project
3. **You verify** in browser at both `/pt` and `/en`
4. **You flag issues** — share errors or visual feedback
5. **Claude fixes** — iterate until section is solid
6. **Git commit** the working section before moving on

### Phase 4: Polish & Deploy

1. Mobile testing (375px iPhone SE, 390px iPhone 14, 412px Android)
2. Desktop testing (1440px, 1920px)
3. Lighthouse audit (performance, SEO, accessibility)
4. Final deploy to Vercel
5. Screenshot for portfolio

### Phase 5: Pitch Prep

1. PDF proposal with live site link
2. Portuguese pitch script
3. WhatsApp message template
4. In-person visit to local businesses

## Shared Architecture (All Templates)

### Stack

- Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- Vercel hosting
- Bilingual: Portuguese (default) + English

### File Structure (Consistent Across Templates)

```files
template-name/
├── Claude.md                    # Project-specific instructions
├── app/
│   ├── globals.css
│   ├── layout.tsx               # Root (html/body only)
│   ├── [locale]/
│   │   ├── layout.tsx           # Metadata, JSON-LD, SEO
│   │   └── page.tsx             # Section composition
│   └── components/
│       └── [SectionName]/[SectionName].tsx
├── dictionaries/
│   ├── en.json
│   └── pt.json
├── i18n-config.ts
├── get-dictionary.ts
├── middleware.ts
├── public/img/
└── package.json
```

### Common Components (Present in Most Templates)

| Component | Purpose                            | Notes                               |
| --------- | ---------------------------------- | ----------------------------------- |
| Navbar    | Navigation + CTA + language toggle | Always sticky, blur on scroll       |
| Hero      | First impression, main CTA         | Trade-specific urgency/style        |
| About     | Trust builder, stats, story        | Animated counters on scroll         |
| Services  | What the business offers           | Grid or carousel depending on count |
| Reviews   | Social proof                       | Fake but realistic testimonials     |
| FAQ       | Common questions                   | Accordion, 2-col on desktop         |
| Contact   | Form + map + phone/WhatsApp        | Always includes Google Maps embed   |
| Footer    | Links, copyright, socials          | Dynamic year                        |
| CallBar   | Sticky mobile CTA                  | Phone + WhatsApp, bottom of screen  |

### Trade-Specific Components

| Component            | Used In             | Purpose                      |
| -------------------- | ------------------- | ---------------------------- |
| Brands (car logos)   | Mechanic            | Shows multi-brand capability |
| Areas/Coverage       | Plumber, Contractor | Service area towns           |
| Gallery/Before-After | Contractor          | Visual proof of work         |
| Menu                 | Restaurant          | Food offerings               |
| Pricing              | Hair Salon          | Service prices               |

## Communication Protocol with Claude

### When starting a session

- Reference the project name so Claude loads the right context
- If continuing work, say what section is next

### When sharing errors

- Paste the EXACT terminal error message
- Mention which file/route triggered it

### When giving visual feedback

- Be specific: "the spacing between X and Y is too tight on mobile"
- Screenshot if possible

### File delivery

- Claude generates files → you download and add to your project
- Always replace BOTH dictionary files (they work as a pair)

## Design System Per Trade

| Trade      | Primary Color | Vibe                 | Key Differentiator           |
| ---------- | ------------- | -------------------- | ---------------------------- |
| Restaurant | Amber/warm    | Inviting, appetizing | Menu, ambiance photos        |
| Mechanic   | Red/dark      | Bold, reliable       | Brand logos, technical trust |
| Plumber    | Navy/blue     | Urgent, professional | 24/7, phone number huge      |
| Hair Salon | TBD           | Elegant, modern      | Pricing, before/after        |
| Contractor | TBD           | Solid, trustworthy   | Gallery, certifications      |

## Pricing Model

- **Website build:** €500 (€250 upfront + €250 on delivery)
- **Monthly maintenance:** €50/month
- **Approach:** In-person visits, relationship-based (Portuguese business culture)
