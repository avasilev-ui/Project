# Implementation plans

English only (see `AGENTS.md`). The owner executes work **phase by phase in new chats**; agents do not track progress inside plan files.

---

## When to create a plan

| Situation | Agent action |
|-----------|----------------|
| Trivial change (copy, color, small fix) | Implement immediately; no plan file |
| Complex feature, many files, or unclear scope | Create or update a plan here |
| Owner says “make a plan” / “plan this” | Create or update a plan here |
| Uncertain | One short question to the owner |

---

## File naming (plan ID)

Path: `docs/plans/YYYY-MM-DD-<slug>.md`

- **Date** = day the plan is created (UTC or owner local—be consistent within the repo).
- **Slug** = short topic (`onboarding`, `hero-scale`, `week-view`).
- **No** global sequential numbers across the repo (`plan-01`, `plan-02`).

Examples:

- `2026-05-17-onboarding.md`
- `2026-06-02-hero-scale.md`

Same calendar day, second plan on the same topic: add a suffix, e.g. `2026-05-17-onboarding-ui.md`.

Plans are safe across **git branches**: IDs come from date + slug, not from a shared counter.

---

## Plan structure

Each plan file should include:

1. **Title** — what outcome this plan delivers (one paragraph max).
2. **Context** — links to `product-spec.md`, `brand-book.md`, etc. if relevant.
3. **Phases** — see below.
4. **Out of scope** — what this plan explicitly does not do (reduces scope creep).

### Phases

- Use headings: `## Phase: <descriptive-slug>` (e.g. `## Phase: onboarding-form`).
- Target **3–6 phases** per plan. Avoid 15–30 micro-steps; merge related work.
- Each phase must be doable in **one new chat**, using roughly **≤50% of the context window** (implementation + tests + brief summary—not the whole MVP in one phase).
- Per phase, include:
  - **Goal** — one clear outcome.
  - **Scope** — files or areas touched.
  - **Done when** — how the owner knows the phase is complete (no checkbox lists).
  - **Not in this phase** — boundaries.

The owner may say: *“Execute phase `onboarding-form` from plan `2026-05-17-onboarding`.”*  
Referring to “phase 2” is allowed **only within that plan file** (order of `## Phase:` sections).

### Forbidden in plan files

- Markdown task checklists (`- [ ]`, `- [x]`).
- Progress tables (status / assignee / % complete).
- Agent-managed todo lists or “current sprint” tracking.

The owner tracks what is done; plans are **specifications for upcoming work**, not dashboards.

---

## Agent changes to `AGENTS.md`

Any **new or substantial** edit to `AGENTS.md` must be **proposed to the owner and approved** before committing. Planning details belong here in `docs/plans/README.md`, not in a growing `AGENTS.md`.

---

## Archived / superseded plans

Do not delete old plans without owner request. If a plan is obsolete, add at the top:

```markdown
**Status:** superseded by `YYYY-MM-DD-<other-slug>.md` (reason).
```
