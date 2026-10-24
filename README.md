# Ali Moojid Abbas — Cinematic Studio Portfolio

A bilingual (Arabic RTL / English LTR) multi-page portfolio built with Next.js 14, Tailwind CSS, and Framer Motion.

## Cinematic art direction
- Dark studio / screening-room palette with ivory typography and restrained deep-red accents.
- Film perforation rails and subtle grain texture.
- Clapperboard scene labels on each page.
- Contextual Lucide icons for introduction, experience, education, projects, analytics, web tools, expertise, and contact.
- Responsive layout for desktop, tablet, and mobile.
- Existing portrait is preserved at `public/images/ali-moojid.jpg`.
- Thmanyah font stylesheet is linked from the app layout; add a licensed local font file if you prefer self-hosting.

## Routes
- `/` — language selector
- `/ar/cover` and `/en/cover` — portfolio covers
- Other sections each have their own route under `/ar/` and `/en/`.

## Local development
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
```
