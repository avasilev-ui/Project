# Product vision

## What this is

A **personal** mobile-first web app (PWA) for **weight loss**, built around one idea:

> Show how many **kilocalories of deficit remain** until the user reaches their **goal weight** — as the main, beautiful, interactive screen element.

It is not a generic calorie diary. It is an **energy-balance calculator + self-monitoring log** with a marathon view (path to goal), not only a daily calorie cap.

## Audience (MVP)

- **Owner first** — one user who already understands calories and wants a tool tuned to their workflow.
- Later: possibly similar “advanced” users; not beginners who need a food database on day one.

## Core beliefs

1. **Weekly deficit matters more than one bad day** — reduces anxiety and matches physiology.
2. **Honesty over false precision** — disclaimers about water, glycogen, the 7700 kcal/kg rule, and manual input quality.
3. **Accuracy of logging beats fancy integrations** for v1 — manual entry, browser-only storage.
4. **Hero metric = “kcal remaining to goal”** — everything else supports that number.

## Differentiation vs typical trackers

| Typical apps | This app |
|--------------|----------|
| “Calories left today” | “Deficit kcal remaining to goal weight” |
| Weight as a side chart | 7-day average weight tied to the goal model |
| Steps as a ring | WHO progress + deficit in one logic |
| Often imply lab precision | Explicit **estimates** |

## Owner decisions (product level)

- Brisk walking logged as **minutes** (not slow steps at home).
- Each workout **adds kcal** on top of PAL-based TDEE.
- Cumulative deficit from **day one** in the app.
- Target reached → **new goal** flow.
- User sets **own target deficit**; app shows plan vs actual (week).
- Data stays **in the browser** only (export/backup recommended later).

## UX direction (main screen)

- Large visual: **remaining kcal to goal** (ring or bar).
- Secondary row: this week deficit (actual vs target), weight (today + 7d avg), forecast **date range** (not a single date).
- Tap hero → short “how this is calculated” + disclaimer.

## Strengths

- Clear emotional hook (“how much left on the journey”).
- Aligns with evidence-based habits (weekly trends, 7d weight average).
- Small MVP scope is shippable and testable on real daily use.

## Risks (design for these)

1. **Scale can feel “wrong”** when weight stalls but deficit exists → plateau copy (wait 2 weeks, recheck logging, water, recalc TDEE).
2. **Garbage in, garbage out** — manual calories dominate error; gentle reminders, not shame.
3. **PAL + workout kcal** — must not double-count; workouts are explicitly on top of PAL.
4. **Browser-only** — data loss on device change; v1 should add export when coding starts.
5. **Large “remaining kcal”** can intimidate beginners — OK for MVP audience.

## Out of scope for vision (v1)

Integrations (FatSecret, wearables), AI coach, auto metabolic adaptation, exercise libraries, adherence gamification.
