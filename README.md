# MULA Landing Page (Next.js App Router)

This folder contains the frontend implementation and PRD for the MULA landing page.

## Add to your existing project

Copy these folders/files into the root of your existing Next.js project, merging the folders:

- `app/page.tsx`
- `app/layout.tsx`
- `app/globals.css`
- `components/`
- `lib/site-config.ts`

The files use the `@/` import alias, which is the standard alias in a new Next.js app created with the default setup. If your project does not have it, configure `baseUrl`/`paths` in `tsconfig.json` or change the imports to relative paths.

## Existing logo assets

The code references:

- `/logogram.png`
- `/logotype.png` (reserved for pages that need the horizontal logo)

Keep your supplied MULA logo files inside `public/`. The code currently uses the logogram in the header and footer. If your actual extension differs, update `logogramSrc` and `logotypeSrc` in `lib/site-config.ts`.

## Replace the placeholders

- `components/hero-section.tsx`: replace the CSS phone mockups with final hero artwork when ready.
- `components/template-catalog.tsx`: replace `TemplateArtwork` with actual template cover images and update the `templates` array.
- `components/how-it-works.tsx`: replace the decorative botanical slot with a final decorative asset if desired.
- `lib/site-config.ts`: set the official WhatsApp and social URLs.

## Run locally

From your existing project folder:

```bash
npm run dev
```

Then open `http://localhost:3000`.

The implementation uses React state and native browser elements only. No additional UI or icon package is required. `next/font/google` is used for Manrope and Cormorant Garamond; the first build needs access to Google's font service. If you prefer local font files, put them in `public/fonts` and switch the font declarations in `app/layout.tsx` to `next/font/local`.
