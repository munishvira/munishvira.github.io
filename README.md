# Munish Vira — React Portfolio (Vite + Tailwind)

Static React build of your portfolio (no Next.js), tuned for GitHub Pages and offline viewing.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:5173

## Build
```bash
npm run build
```
Output in `dist/`.

## Deploy to GitHub Pages (gh-pages branch)
```bash
npm run deploy
```

Notes:
- Uses relative asset paths (`base: './'`) so CSS/JS load correctly on GitHub Pages and when opened directly via file://
- Resume is at `public/resume.pdf` and downloads from the header button.
