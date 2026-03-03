# AquaFix — Plumber Template (Canalizador 24h)

## Project Overview

Professional plumber website template targeting **Cascais & Linha de Cascais**, Portugal. Part of a freelance web dev business building templates for local service businesses. This is the third template after a restaurant (Koya's Bistro) and a mechanic (Revicar).

**Live URL:** TBD (Vercel)
**Brand:** AquaFix — Canalizador 24h
**Target client:** Local plumbers in Cascais/Carcavelos area
**Business model:** €500 build (€250 upfront) + €50/month maintenance

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (via @tailwindcss/postcss)
- **Hosting:** Vercel
- **Fonts:** Inter (body) + Oswald (headings/brand) via Google Fonts CDN
- **CONTEXT:** always use context 7

## Color System

Navy/blue palette — trust, water, professionalism.

| Token    | Hex     | Usage                     |
| -------- | ------- | ------------------------- |
| navy-950 | #0a0f1f | Page background, deepest  |
| navy-900 | #0f1729 | Section alternating bg    |
| navy-800 | #162036 | Cards, elevated surfaces  |
| navy-700 | #1e2d4a | Borders, dividers         |
| navy-600 | #2a3f66 | Subtle borders            |
| navy-400 | #6b8cc7 | Secondary text            |
| navy-300 | #93b4e8 | Body text                 |
| navy-200 | #c0d4f5 | Emphasized body text      |
| blue-600 | #2563eb | Primary CTA, accents      |
| blue-500 | #3b82f6 | Hover states              |
| blue-400 | #60a5fa | Labels, icons, highlights |

## Project Structure

```text
plumber-site/
├── app/
│   ├── globals.css              # Theme, custom colors, animations
│   ├── layout.tsx               # Root layout (html/body)
│   ├── [locale]/
│   │   ├── layout.tsx           # Locale layout (metadata, JSON-LD)
│   │   └── page.tsx             # Page composition (all sections)
│   └── components/
│       ├── Navbar/Navbar.tsx
│       ├── HeroContent/HeroContent.tsx
│       ├── About/About.tsx
│       ├── Services/            # TODO
│       ├── Reviews/             # TODO
│       ├── Areas/               # TODO (service coverage map)
│       ├── FAQ/                 # TODO
│       ├── Contact/             # TODO
│       ├── Footer/              # TODO
│       └── CallBar/             # TODO (sticky mobile CTA)
├── dictionaries/
│   ├── en.json                  # English translations
│   └── pt.json                  # Portuguese translations
├── i18n-config.ts               # Locale config (pt default)
├── get-dictionary.ts            # Dictionary loader
├── middleware.ts                 # Locale redirect (/ → /pt)
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

## Architecture Rules

### Components

- One component per file, one folder per component
- All components are `"use client"` unless purely presentational
- Props type defined inline above component, named `Props`
- Dictionary type defined inline, matching dictionary keys exactly
- Every component receives its dict slice — never the whole dictionary

### i18n

- Default locale: `pt` (Portuguese)
- All user-facing text lives in dictionaries, never hardcoded
- Dictionary keys are flat within each section (no deep nesting)
- When adding a section, update BOTH en.json and pt.json simultaneously

### Styling

- Custom colors defined in `globals.css` under `@theme inline`
- Use navy-_for backgrounds/text, blue-_ for accents/CTAs
- Font: Oswald for headings/brand (`style={{ fontFamily: "'Oswald', sans-serif" }}`)
- Font: Inter for body text (loaded via globals.css Google Fonts import)
- Mobile-first: base styles → sm: → md: → lg:
- No arbitrary values when a theme token exists

### Animations

- IntersectionObserver for scroll-triggered fade-ins
- Staggered delays via inline `transitionDelay` style
- Counter animations for stat numbers (AnimatedNumber pattern)
- Ping/pulse animations: finite iterations only (2 max), never infinite

### SEO

- JSON-LD schema type: `"Plumber"`
- `areaServed`: Cascais, Carcavelos, Parede, Estoril, São Domingos de Rana, Alcabideche, Oeiras
- Full OpenGraph + Twitter card meta per locale
- Portuguese keywords targeting "canalizador cascais", "canalizador 24 horas", "desentupimentos"

## Section Build Order

1. ✅ Navbar — sticky, blur, emergency CTA, language toggle
2. ✅ Hero — tagline, brand, phone number (huge), dual CTAs, 4 trust badges
3. ✅ About — stats bar, company story, 3 highlight cards
4. ✅ Services — grid of plumbing services with icons
5. ✅ Reviews — customer testimonials, Google rating badge, CTA
6. ✅ Areas — 7-town grid with response times
7. ✅ FAQ — accordion Q&A (6 items, grid-rows transition)
8. ✅ Contact — WhatsApp form + phone/address cards
9. ✅ Footer — server component, 3-col, dynamic year
10. ✅ CallBar — sticky mobile bar, phone + WhatsApp

## Design Principles (Plumber-specific)

- **Urgency first:** Phone number prominent, emergency CTAs pulse on load (2x only)
- **Trust signals everywhere:** Licensed, insured, certified, years of experience
- **24/7 messaging:** Every section reinforces availability
- **Local credibility:** Real town names, real service area, Portuguese business terminology
- **Clean over flashy:** Competitors have terrible sites — professionalism IS the differentiator
- **Dark theme:** Navy backgrounds feel premium and serious (not playful)

## Workflow

When building a new section:

1. Create component file in `app/components/[Name]/[Name].tsx`
2. Define the dict type matching planned dictionary keys
3. Add dictionary entries to BOTH pt.json AND en.json
4. Import and add component to `page.tsx`
5. Test both `/pt` and `/en` routes
6. Check mobile (375px) and desktop (1440px)

## Phone / Contact Info (Demo)

- Phone: +351 910 123 456
- WhatsApp: same number
- Address: Cascais, Lisboa, Portugal
- Google Maps coords: 38.6979, -9.4215
