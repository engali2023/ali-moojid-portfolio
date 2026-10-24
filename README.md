# Ali Moojid Abbas Portfolio

Bilingual, multi-page personal portfolio built with Next.js 14, React, TypeScript, Tailwind CSS, and Framer Motion.

## Features
- Separate Arabic (`/ar/...`) and English (`/en/...`) pages, with language selection on the home page.
- Dedicated pages for cover, about, experience, education, projects, expertise, and contact.
- Updated personal portrait in `public/images/ali-moojid.jpg`.
- Animated page entrances and refined hover transitions using Framer Motion and CSS.
- Email address and email contact action removed; contact page links to GitHub only.
- Removed the placeholder sentence about adding testimonials later.

## Run locally
```bash
npm install
npm run dev
```

Production build:
```bash
npm run build
```

## Thmanyah Serif Display
The CSS is configured to load the font from `public/fonts/ThmanyahSerifDisplay.woff2` and optionally `public/fonts/ThmanyahSerifDisplay-Italic.woff2`. The font files themselves were not provided, so add your licensed WOFF2 files to that folder for the exact typeface to display. Until then, the browser uses the listed fallback fonts.
