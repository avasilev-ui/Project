# Product strategy

High-level direction only. Formulas, screens, and MVP details live in [`product-spec.md`](./product-spec.md). Narrative positioning in [`vision.md`](./vision.md).

---

## One sentence

A **personal, restrained-but-stylish energy-balance instrument** whose hero metric is **kilocalories of cumulative deficit remaining until goal weight** — for people who already track intake and want **transparent estimates**, not marketing precision.

---

## Why this exists

| Today | This product |
|-------|----------------|
| Tools like MyFitnessPal center **today** and **food logging** | Centers **distance to goal** and **cumulative deficit** |
| Implicit precision, distractions | **Numbers + transparency** (how calculated, disclaimers) |
| Weight, calories, activity scattered | One **marathon** view of the path |

**Relationship to MyFitnessPal:** **TBD** — may replace or complement after MVP is validated in daily use.

---

## Success definition (MVP)

The MVP succeeds when:

> The **main “kcal remaining to goal” scale** is **beautiful, stylish, and honest** — something you want to open daily and **trust** (you understand the model and its limits).

Secondary: low-friction daily logging, weekly deficit vs your target, 7-day average weight trend.

Not success metrics: user count, virality, feature parity with food databases.

---

## Horizon and audience

| Horizon | Intent |
|---------|--------|
| **Now** | Single owner — personal tool |
| **Later** | Abstract possibility for similar advanced users — **no** active plan to scale, sell to clients, or build a social product |
| **Not targeting** | Calorie beginners, coach dashboards, leaderboards, gamification |

---

## Strategic principles

1. **Honesty over pretty lies** — estimates, 7700 kcal/kg simplification, water/plateau context; never promise “grams of fat burned.”
2. **Accuracy and aesthetics are both mandatory** — may sacrifice input speed; must not sacrifice hero visual quality or math without caveats.
3. **The week beats one day** — weekly deficit vs target reduces anxiety; daily view is supporting.
4. **Food logging = daily totals only** (kcal, protein, fiber) — **never** become a product catalog or barcode scanner app.
5. **Science-first tone** — user as informed observer; **education stays outside** the app (in-app: numbers, disclaimers, short “how calculated”).
6. **Privacy-simple for MVP** — browser-local storage; export/sync not a strategic pillar yet (may follow if needed).
7. **Integrations optional later** — FatSecret, Health, wearables are **not** the product goal; allowed only if MVP proves value.
8. **Wellness, not medicine** — self-monitoring only; no treatment or diagnosis framing.

---

## What we are not (anti-goals)

- Not MyFitnessPal (meal database, scanners, social feed).
- Not an AI coach or motivation app.
- Not a medical or diagnostic service.
- Not a social network, challenges, or streaks for their own sake.

---

## Product pillars (priority)

| Priority | Scope |
|----------|--------|
| **Core** | Remaining deficit kcal to goal; cumulative deficit from day one; weekly actual vs target deficit; 7-day weight average; goal forecast as a **date range** |
| **Context** | WHO activity — **light module**, off the hero screen; keep in MVP in minimal form, may simplify further if it hurts focus |

After a goal is reached: user sets **new loss goal** or **maintenance** — same instrument, new target.

---

## Brand tone

**Restrained but stylish** — like a well-designed research tool: no emoji coaching, no hype. The hero scale carries most of the personality.

Visual identity (colors, typography, UI components, logo): [`brand-book.md`](./brand-book.md).

In-app copy language: **Russian** (see `product-spec.md`).

---

## Emotional job

Primary: **“I see the path with clear assumptions”** (researcher mindset).  
Not: cheerleading, shame, or pseudo-lab precision.

---

## Roadmap (strategy level only)

| Phase | Intent |
|-------|--------|
| **MVP** | Prove hero scale + deficit-to-goal model; manual input; browser-only; Russian UI |
| **After MVP** | Optional export; optional integrations; clarify replace vs complement MFP |
| **Not planned** | Food database, AI coach, social, medical claims, audience growth as a goal |

Tactical backlog and acceptance checks: `product-spec.md`.

---

## Documentation map

| File | Role | Max size guideline |
|------|------|-------------------|
| `product.md` (this file) | Strategy | ~200 lines |
| `vision.md` | Positioning, differentiation, risks | ~200 lines |
| `product-spec.md` | Formulas, MVP scope, criteria | ~200 lines per file policy |
| `stack.md` | Technology when chosen | short |

When strategy changes, update this file first; keep `product-spec.md` aligned for anything that affects build decisions.
