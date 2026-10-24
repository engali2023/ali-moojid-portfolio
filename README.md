# Ali Moojid Abbas Portfolio

Bilingual portfolio for Eng. Ali Moojid Abbas, built with Next.js 14, React, TypeScript, Tailwind CSS and Framer Motion dependencies.

## Separate pages

- `/` — language selection
- `/ar/cover` — Arabic portfolio cover
- `/en/cover` — English portfolio cover
- Each portfolio section has its own route in both languages: `about`, `experience`, `education`, `projects`, `project-ai`, `project-data`, `project-web`, `expertise`, `contact`.

## Run locally

```bash
npm install
npm run dev
```

## Thmanyah Serif Display font

The styles are configured to use `Thmanyah Serif Display` from `/fonts/ThmanyahSerifDisplay.woff2`. Add your licensed `.woff2` font file at `public/fonts/ThmanyahSerifDisplay.woff2` to activate the exact font. Until the file is added, the browser uses the specified serif fallbacks.

## Deploy

Import the GitHub repository in Vercel. Use Next.js preset, root directory `./`, default output directory, and `npm run build`.
