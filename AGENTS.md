# Agent map — calorie tracker

**Repository status:** documentation only; application code not started.

`CLAUDE.md` is a symlink to this file (same instructions for Claude Code and Cursor).

---

## Language rules (mandatory)

| Context | Language |
|---------|----------|
| `AGENTS.md`, everything under `docs/` | **English only** |
| `README.md` / `README.MD` | **Russian only** (sole exception for human-facing root readme) |
| Source code | Any language; **comments in English** |
| Chat with the human (questions, explanations, summaries, PR descriptions to the owner) | **Same language as the user’s message** (default owner language: **Russian**) |
| In-app UI copy (labels, disclaimers shown in the product) | **Russian** (see `docs/product-spec.md`) |

Do not mix languages inside a given doc file. If the user writes in Russian, reply in Russian; if in English, reply in English. When updating the project overview for humans, edit `README.MD` in Russian; do not move long spec content into it.

---

## Project (one line)

Personal mobile-first web app for **weight loss**: hero metric = **kcal deficit remaining until goal weight** (not “calories left to eat today”).

---

## How to work here

1. Read this file first, then only what you need:
   - **Why / positioning** → `docs/vision.md`
   - **Formulas, MVP, screens, owner decisions** → `docs/product-spec.md`
   - **Stack** → `docs/stack.md` (when chosen)
2. **Do not bloat** `AGENTS.md` — add detail to `docs/`, not here.
3. **MVP discipline:** no FatSecret, Health APIs, AI coach, cloud sync, CI/doc-linters, or exec-plan folders unless the owner asks.
4. When product logic or formulas change, update `docs/product-spec.md` and mention it briefly to the user in their language.
5. Prefer small, clear changes; grow docs incrementally with development.

---

## MVP boundaries

| In scope (v1) | Out of scope (later) |
|---------------|----------------------|
| Onboarding, BMR/TDEE, hero “kcal to goal” scale | FatSecret, Apple/Google Health |
| Manual: weight, food, brisk walk minutes, workouts | AI coach, auto TDEE adaptation |
| Day + week deficit; date-range forecast | Body fat %, training profile in onboarding |
| WHO activity progress; weekly report | Strength 2×/week for WHO |
| Local browser storage only; PWA | Cloud auth, Telegram bot |
| New goal after target reached | Behavioral streaks / adherence gamification |

---

## Where to look

| Question | File |
|----------|------|
| Vision, differentiation, risks | `docs/vision.md` |
| Formulas, screens, acceptance criteria | `docs/product-spec.md` |
| Tech stack (TBD) | `docs/stack.md` |
| Docs index | `docs/README.md` |

---

## Owner decisions (quick reference)

- Brisk activity: **minutes of brisk walking** (not % of steps).
- Workouts: **add kcal on top of** daily TDEE (not inside PAL).
- Cumulative deficit: from **first day** in the app.
- Goal reached → prompt for **new goal**.
- Storage: **browser only**; warn on data loss.
- Deficit pace: owner sets **target deficit** manually.
- Extra profile fields: **after MVP**.
