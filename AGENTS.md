# Agent map — calorie tracker

**Repository status:** app skeleton in `src/` (domain + tests, Dexie, route stubs); UI/features not built. Stack: `docs/stack.md`.

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
   - **Product strategy** → `docs/product.md`
   - **Positioning / risks** → `docs/vision.md`
   - **Formulas, MVP, screens, owner decisions** → `docs/product-spec.md`
   - **Visual identity, UI, CSS, assets** → `docs/brand-book.md` (**mandatory** for any UI/visual work)
   - **Stack** → `docs/stack.md`
   - **Implementation plans** → `docs/plans/` (conventions: `docs/plans/README.md`)
2. **Do not bloat** `AGENTS.md` — add detail to `docs/`, not here. **Before adding or substantially changing instructions in this file:** propose changes to the owner and wait for approval.
3. **MVP discipline:** no FatSecret, Health APIs, AI coach, cloud sync, CI/doc-linters unless the owner asks.
4. When product logic or formulas change, update `docs/product-spec.md` and mention it briefly to the user in their language.
5. Prefer small, clear changes; grow docs incrementally with development.
6. **Visual work:** follow `docs/brand-book.md` (colors, type, spacing, components, motion). Do not invent a new palette or “template” look per screen.

---

## Planning (owner workflow)

- **Triage:** trivial fixes (copy, color, small UI tweak) → implement immediately. Complex work, multi-screen features, or an explicit “make a plan” request → write or update a plan under `docs/plans/`. If unsure, ask one short question.
- **Plan files:** `docs/plans/YYYY-MM-DD-<slug>.md`. Use date + slug (e.g. `2026-05-17-onboarding.md`). **No** repo-wide sequential plan numbers (`plan-01`, …)—branches must not collide on IDs. Same day, second plan: add suffix (`-ui`, `-b`).
- **Plan content:** split into **phases** for **one fresh chat each**, sized to fit roughly **≤50% of context** (typically **3–6 phases**, not dozens of micro-steps). Phase headings: `## Phase: <descriptive-slug>` (e.g. `onboarding-form`). Each phase: goal, scope (files/areas), done-when, out-of-scope. **No** checklists (`- [ ]`), progress tables, or status tracking in plan files—the owner tracks progress.
- **Execution:** owner runs phases in new chats, e.g. *“Execute phase `onboarding-form` from plan `2026-05-17-onboarding`.”* Optional: refer to phases by order inside that file only (“phase 2 of plan …”).
- Full conventions: [`docs/plans/README.md`](docs/plans/README.md).

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
| Strategy, principles, anti-goals, roadmap | `docs/product.md` |
| Positioning, differentiation, risks | `docs/vision.md` |
| Formulas, screens, acceptance criteria | `docs/product-spec.md` |
| Brand, UI tokens, logo, anti-patterns | `docs/brand-book.md` |
| Tech stack | `docs/stack.md` |
| Implementation plans | `docs/plans/` |
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
