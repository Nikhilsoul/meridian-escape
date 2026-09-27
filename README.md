# Meridian Escapes — Holiday Packages Website (React)

A responsive holiday-packages website built with **React + Vite**. Same
design and functionality as the plain-HTML version, rebuilt as reusable
components with proper state management (hooks, controlled forms, filtering).

**Live preview:** _add your deployed link here after step 3 below_
**Repo:** _add your GitHub link here after step 1 below_

## Sections → components

| Component | What it does |
|---|---|
| `Navbar.jsx` | Sticky header, anchor links, mobile menu state managed with `useState`. |
| `Hero.jsx` | Headline, CTAs, key stats, animated SVG route map. |
| `About.jsx` | Company story + three service highlights (mapped from an array). |
| `Packages.jsx` | 6 sample holiday packages, region filter ("All / Within India / Abroad") driven by `useState`, data sourced from `src/data/packages.js`. |
| `Process.jsx` | 4-step "how it works" explainer. |
| `Contact.jsx` | Fully controlled form (name, email, phone, destination, message) with field-level validation, inline errors, and a submit/loading/success state — all via hooks, no external form libraries. |
| `Footer.jsx` | Sitemap, contact details, social links, dynamic copyright year. |

## Tech stack

- React 19 + Vite (fast dev server, optimized production build)
- Plain CSS with custom properties/design tokens (`src/index.css`) — no CSS
  framework, so there's nothing extra to learn to modify styles
- No external state or form libraries — everything is `useState` /
  controlled inputs, kept intentionally simple and readable
- Google Fonts: Fraunces (display) + Inter (body)

## Project structure

```
meridian-escapes-react/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx           # React entry point
│   ├── App.jsx             # composes all sections
│   ├── index.css           # design tokens + layout + responsive rules
│   ├── data/
│   │   └── packages.js     # holiday package data
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Packages.jsx
│       ├── Process.jsx
│       ├── Contact.jsx
│       └── Footer.jsx
└── README.md
```

## Running it locally

```bash
npm install
npm run dev       # http://localhost:5173
```

Build for production:

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build locally
```

## The contact form

`Contact.jsx` does full client-side validation (required fields, email
format, phone format, minimum message length) with inline errors and a
success/error status message — but since this is a front-end-only project,
submissions currently log to the browser console rather than sending an
email. To make it actually send mail, without needing your own backend:

- **[Formspree](https://formspree.io)** — create a free form endpoint, then
  uncomment/point the `fetch()` call already stubbed in the `handleSubmit`
  function at your endpoint.
- **[EmailJS](https://www.emailjs.com)** — similar, sends straight to your
  inbox from client-side JS.

## Deploying

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Meridian Escapes React site"
git branch -M main
git remote add origin https://github.com/<your-username>/meridian-escapes-react.git
git push -u origin main
```

(Create the empty repo first at github.com/new, then use the URL it gives
you above. The included `.gitignore` already excludes `node_modules/` and
`dist/`.)

### 2. Deploy — pick any one

**Vercel (recommended for Vite apps)**
1. Go to [vercel.com/new](https://vercel.com/new), sign in with GitHub, and
   import the repo.
2. Vercel auto-detects Vite: build command `npm run build`, output
   directory `dist`. Click **Deploy**.
3. Live in under a minute at something like `meridian-escapes-react.vercel.app`.

**Netlify**
1. Go to [app.netlify.com/start](https://app.netlify.com/start), connect
   GitHub, pick the repo.
2. Build command: `npm run build`. Publish directory: `dist`.
3. Deploy.

**GitHub Pages**
1. Add `base: '/meridian-escapes-react/'` to `vite.config.js` (inside
   `defineConfig({ ... })`), matching your repo name.
2. `npm install -D gh-pages`, add `"deploy": "gh-pages -d dist"` to
   `package.json` scripts.
3. `npm run build && npm run deploy` — enables the site at
   `https://<your-username>.github.io/meridian-escapes-react/`.

## Notes on responsiveness

Mobile-first CSS with breakpoints at `960px` and `680px`: grids (packages,
process steps, footer) collapse from 3–4 columns → 2 → 1, the hero visual
re-orders above the copy on tablet, and the nav switches from a horizontal
bar to a `Navbar.jsx`-managed hamburger menu on mobile.
