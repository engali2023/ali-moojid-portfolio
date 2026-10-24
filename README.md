# Ali Moojid Abbas Portfolio

Bilingual personal portfolio for Eng. Ali Moojid Abbas, built with Next.js 14, React, TypeScript, and Tailwind CSS.

## Separate pages (not a collage)

- `/` — language selection page (Arabic / English)
- `/ar/cover` — Arabic cover
- `/en/cover` — English cover
- Each section is a separate page with its own URL in both languages:
  `about`, `experience`, `education`, `projects`, `project-ai`, `project-data`, `project-web`, `expertise`, `contact`.

Use the navigation controls on each page to move between sections. The language switch changes to the equivalent portfolio language.

## Portrait

The portrait at `public/images/ali-moojid.jpg` has been replaced with the newly supplied black-and-white portrait. The cover pages use this image.

## Run locally

```bash
npm install
npm run dev
```

## Thmanyah Serif Display

The styles are configured to use `Thmanyah Serif Display` for Arabic and selected editorial labels. To load the exact typeface, add your licensed font file here:

`public/fonts/ThmanyahSerifDisplay.woff2`

Until the font file is added, the browser uses the fallback fonts.

## Deploy to Vercel

- Framework preset: Next.js
- Root directory: `./` (the directory containing `package.json`)
- Build command: `npm run build`
- Output directory: default
- Install command: default

Commit and push the project files to the connected GitHub branch; Vercel should redeploy automatically.
