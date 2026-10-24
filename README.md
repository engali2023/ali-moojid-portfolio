# Ali Moojid Abbas — Portfolio

A responsive Next.js 14 + Tailwind CSS + Framer Motion portfolio inspired by the supplied red-and-beige presentation. Includes your supplied portrait, textured cards, editorial typography, project galleries, sticky section dots, Arabic bio, and contact section.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Personalize before publishing

- Replace the sample project descriptions/images with your real projects.
- Replace the capability-style testimonial cards with real testimonials (the current cards are explicitly labeled as sample statements).
- Update the email and social URLs in `src/app/page.tsx`.
- The requested **Thmanyah Serif Display** font is referenced as a preferred fallback for the script/Arabic styles. To use the actual font, add a licensed font file under `public/fonts/` and define it with `@font-face` in `src/app/globals.css`.
- Project gallery photos use Unsplash source URLs and need an internet connection. Your portrait is bundled locally at `public/images/ali-moojid.jpg`.

## Build

```bash
npm run build
npm start
```
