# Lindsey Parker — Portfolio

A spatial, single-page portfolio site. Professional identity at the center, projects and experience radiating outward as navigable nodes on a dark constellation canvas.

**Live:** [lparker2283.vercel.app](https://lparker2283.vercel.app) *(update once deployed)*

---

## Concept

Not a scroll. Not a grid. A map you explore — click any node to open its detail panel. Each project has its own color palette and atmosphere.

```
        ○ Corpus          ○ TE Connectivity
         \                /
          \              /
   Coseer ----● Lindsey ----○ Exponent
          /   Parker    \
         /                \
○ House of Descent    ○ Soil & Stone
                ○ Shopify Academy
```

---

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Fonts | Playfair Display · IBM Plex Mono |
| Deploy | Vercel (static) |

No database. No auth. Fully static — deploys in seconds.

---

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Updating content

All copy, links, colors, and node positions live in one file:

```
src/components/data.ts
```

Each project entry has:
- `x` / `y` — position as % of viewport (adjust to reposition nodes)
- `colors` — primary, glow, border, panel background
- `panel` — title, category, description, role, status, links

No other files need to change for content updates.

---

## Deploying to Vercel

1. Push to GitHub
2. Import at [vercel.com/new](https://vercel.com/new) → select `portfolio`
3. No environment variables needed
4. Deploy — done

Every push to `main` redeploys automatically.
