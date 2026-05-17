# Technology stack

High-level choices for MVP. Tactical versions may shift slightly at implementation time.

**Architecture:** client-only SPA + PWA. **No backend** in v1 (matches product strategy).

---

## Summary

| Layer | Choice | Why (short) |
|-------|--------|-------------|
| Language | **TypeScript** | Safer formulas, better agent/tooling support |
| UI framework | **React** | Mature ecosystem, PWA plugins, easy to hire/automate |
| Build tool | **Vite** | Fast dev, simple static output, standard for SPAs in 2026 |
| PWA | **vite-plugin-pwa** (Workbox) | Install on phone, offline shell, maintained defaults |
| Routing | **React Router** | Multiple screens without a server framework |
| State | **Zustand** | Small API, enough for profile + daily logs |
| Storage | **IndexedDB via Dexie** | Reliable history; not limited like `localStorage` |
| Styling | **Tailwind CSS** | Mobile-first layout, polished hero without a heavy UI kit |
| Charts (hero scale) | **Lightweight SVG/CSS first**; add **Recharts** only if needed | Avoid chart bloat on main screen |
| Tests | **Vitest** | Unit-test calculation/domain logic |
| Hosting | **Static** (Cloudflare Pages, Vercel, or Netlify) | Free tier; scales; no server to “fall over” |

---

## Explicitly not in MVP

| Item | Reason |
|------|--------|
| **Next.js** | SSR, API routes, and server deploy add complexity; not needed without backend or SEO |
| **Backend** (Node, Python, DB) | Data stays in browser per spec |
| **PostgreSQL / Firebase** | No cloud data in v1 |
| **Redux, React Query** | No server state to sync |
| **shadcn / MUI** (optional later) | Can add if UI grows; start with Tailwind to stay lean |
| **React Native** | Product is mobile-first **web** PWA, not a native app |

---

## Why this is “simple but not cheap”

- **Vite + React + TypeScript** is the mainstream 2026 default for production SPAs—not a toy stack.
- **No server** for MVP means there is nothing to overload at “three users”; static hosting serves files globally.
- **IndexedDB (Dexie)** is the right long-term store for dated logs; `localStorage` alone is fragile for years of entries.
- **PWA** gives “add to home screen” on iPhone/Android without app store complexity.

---

## Code organization (agent-friendly, shallow)

```
src/
  domain/     # pure functions: BMR, deficit, remaining kcal, forecasts
  data/       # Dexie schema, read/write
  store/      # Zustand
  ui/         # screens and components
  lib/        # dates, formatting
```

Keep **calculation logic pure** (easy to test with Vitest). UI only displays results.

---

## Later (not MVP)

- **Export/import** JSON file (backup)
- **Optional backend** only if sync across devices is required (e.g. Supabase)
- **Integrations** (Health, FatSecret) via separate adapters—still optional per `product.md`

---

## Local development (when coding starts)

```bash
npm create vite@latest . -- --template react-ts
# then add: vite-plugin-pwa, react-router-dom, zustand, dexie, tailwindcss, vitest
npm run dev
```

Exact install list will live in project `package.json` after scaffold.

---

## Decision log

| Date | Decision |
|------|----------|
| 2026-05 | Stack approved: Vite, React, TypeScript, PWA plugin, Zustand, Dexie, Tailwind, static host, no backend MVP |
| 2026-05-17 | App scaffold: `src/{domain,data,store,ui,lib}`, Vitest domain tests, Dexie v1, route stubs, PWA manifest **Burn** |
