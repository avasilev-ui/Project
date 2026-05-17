# Brand book — Burn

**Direction:** Carbon Precision Minimalism  
**Product name:** Burn (working title; wordmark and legal naming TBD)  
**MVP theme:** Dark only  
**Primary accent:** Titanium metallic — no chromatic accent in v1

Strategy and in-app copy tone: [`product.md`](./product.md), [`vision.md`](./vision.md). UI strings: **Russian** per `product-spec.md`.

---

## 1. Brand essence

### One-line idea

Carbon metallic + Apple-grade minimalism → a **technical, strict, premium, cold, precise** brand.

Not “sports car for the sake of sports car.” The feeling is: **engineering, control, power, clarity, high performance** — quiet confidence, not hype.

### Associations (yes)

| | |
|---|---|
| Premium | Engineering |
| Cold control | Strength without shouting |
| Science | High performance |
| Calm confidence | Apple minimalism + lab / motorsport character |

### Anti-associations (no)

Garage tuning, aggressive red racing stripes, flames, 3D skulls, acid neons, muscle icons, dumbbells, lightning bolts, “BRO” fitness posters, emoji coaching, gradient blobs, glassmorphism stacks, purple-on-black “AI app” clichés, generic vibecoded dashboards.

### Visual metaphor

Not “fitness motivation” — **state management system**:

- Instrument panel  
- Lab protocol  
- Engineering schematic  
- Premium native app  
- Apple Watch Ultra / black titanium  
- Scientific monitoring panel  

### Relationship to product tone

[`product.md`](./product.md): *restrained but stylish*, researcher mindset, hero scale carries personality. Visual design **must not compete** with the hero metric (remaining kcal to goal). Brand serves content; content is king (Apple HIG principle).

---

## 2. Design principles

Use these as gates before shipping any screen.

1. **Content first** — UI chrome is quiet; numbers and trends are loud.  
2. **Discipline over decoration** — luxury = space, type, alignment, not ornament.  
3. **One accent family** — ~90% black / white / gray; ~10% metal / titanium highlight.  
4. **Carbon is jewelry** — rare, never under long copy.  
5. **Readable dark** — contrast is non-negotiable (WCAG AA minimum).  
6. **Native calm** — motion is slow; no circus.  
7. **Honest density** — mobile-first; enough air for thumbs, not empty for show.  
8. **Anti-vibecoding** — if it looks like a template (rounded purple cards, random gradients, Inter + giant hero blob), redo it.

### Inspiration (study, do not copy)

| Reference | What to borrow |
|-----------|----------------|
| [Linear](https://linear.app) | Dark surfaces, sidebar recedes, LCH-style neutral themes, Inter Display headings, reduced chrome, hierarchy via elevation not color |
| Apple HIG | Semantic hierarchy, Dynamic Type mindset, accessibility, brand defers to content |
| Cal AI (category) | Low-friction logging clarity — **not** their gamification / milestone trophy patterns (out of scope for Burn) |
| Apple hardware aesthetic | Materials, precision, titanium / space black language |

---

## 3. Color system

### 3.1 Core palette (dark MVP)

| Token | Hex | Role |
|-------|-----|------|
| `carbon-black` | `#050505` | App background, deepest layer |
| `graphite-black` | `#111111` | Cards, sections, grouped blocks |
| `dark-metal` | `#1C1C1E` | Inputs, chips, elevated controls |
| `steel-gray` | `#8E8E93` | Secondary text, metadata, captions |
| `silver-white` | `#F5F5F7` | Primary body text |
| `pure-white` | `#FFFFFF` | Hero numbers, H1, logo, strongest emphasis |

### 3.2 Metallic accent

| Token | Value | Role |
|-------|-------|------|
| `metallic-line` | `linear-gradient(90deg, #3A3A3C 0%, #F5F5F7 50%, #6E6E73 100%)` | 1px dividers, icon strokes, focus rings, progress track highlights — **never** full-area fills |
| `titanium` | `#D1D1D6` | Primary accent: active nav, key borders, selected states, slider thumbs, subtle icon emphasis |

### 3.3 Semantic colors (functional only)

Use sparingly; default to titanium / silver, not hue.

| Token | Hex | When |
|-------|-----|------|
| `success-muted` | `#30D158` at 80% opacity on dark | Goal reached, positive weekly trend — icon or 1px stroke only |
| `warning-muted` | `#FFD60A` at 80% opacity | Plateau copy, logging reminder — never full yellow buttons |
| `danger-muted` | `#FF453A` at 80% opacity | Destructive confirm, critical data loss warning |

**v1 rule:** No Cold Blue (`#0A84FF`) as brand accent. If a link must be distinguishable, use `titanium` + underline on hover, not system blue.

### 3.4 Surfaces & borders

```css
/* Reference tokens — implement in code when stack is live */
--border-subtle: rgba(255, 255, 255, 0.08);
--border-strong: rgba(255, 255, 255, 0.14);
--shadow-elevated: 0 4px 24px rgba(0, 0, 0, 0.45);
--overlay-scrim: rgba(0, 0, 0, 0.6);
```

Elevation: prefer **lighter surface + border** over heavy drop shadows.

### 3.5 Contrast (mandatory)

Target **WCAG 2.1 AA** minimum:

| Pair | Use | Min ratio |
|------|-----|-----------|
| `silver-white` on `carbon-black` | Body | 4.5:1 ✓ (verify in implementation) |
| `steel-gray` on `graphite-black` | Captions | 4.5:1 — if fail, lighten gray to `#A1A1A6` |
| `pure-white` on `dark-metal` | Hero metric | 3:1 large text OK; prefer 4.5:1 |

Check with a contrast tool before locking new pairs. “Beautiful but unreadable” is a fail.

### 3.6 Light mode

**Out of scope for MVP.** Document retained for future: invert surfaces (F5F5F7 base), carbon accents become even rarer. Do not design MVP screens in light mode.

---

## 4. Typography

### 4.1 Font stack

| Role | Family (priority order) |
|------|-------------------------|
| UI / body | `Inter`, `SF Pro Text`, `Helvetica Neue`, `Manrope`, system-ui, sans-serif |
| Display / headings | `Inter Display`, `Neue Haas Grotesk Display`, `SF Pro Display`, `Inter`, sans-serif |
| Metrics / numbers | `IBM Plex Mono`, `JetBrains Mono`, `SF Mono`, ui-monospace, monospace |

**Web MVP:** Inter + IBM Plex Mono via npm or self-hosted; avoid FOUT with `font-display: swap`.

### 4.2 Scale (mobile-first, `rem` in implementation)

| Style | Size | Weight | Tracking | Notes |
|-------|------|--------|----------|-------|
| Display / hero metric | 48–64px | 600 | -0.02em | Monospace numerals, `tabular-nums` |
| H1 | 32–40px | 600–700 | -0.02em | Screen titles |
| H2 | 24–28px | 600 | -0.01em | Section headers |
| H3 | 18–20px | 500–600 | 0 | Card titles |
| Body | 16–17px | 400 | 0 | Main copy |
| Caption | 12–13px | 400 | 0.01em | Disclaimers, metadata |
| Mono label | 11–12px | 500 | 0.04em | Uppercase optional: «ДЕФИЦИТ ЗА НЕДЕЛЮ» — use rarely |

Line height: 1.2 display, 1.45–1.5 body.

### 4.3 Copy style (Russian UI)

| Avoid | Prefer |
|-------|--------|
| «РАЗОРВИ СВОЙ ПОТЕНЦИАЛ!!!» | «Система, которая держит форму под нагрузкой.» |
| Shame, streaks, emoji | Calm, precise, researcher tone |
| Fake lab precision | «Оценка, не измерение» (per spec) |

Headlines: sentence case in Russian, not ALL CAPS shouting.

---

## 5. Layout & spacing

### 5.1 Grid

- Base unit: **4px**  
- Common spacing: 8, 12, 16, 24, 32, 48, 64  
- Screen horizontal padding: **16px** phone, **24px** tablet+  
- Max content width (tablet/desktop): **480–560px** for diary views; hero may go wider

### 5.2 Density

- **Hero zone:** generous top padding; metric centered or left-aligned with clear secondary row  
- **Lists / logs:** compact rows (min 44px touch target height)  
- **Cards:** 16–20px internal padding; 12–16px gap between cards  

### 5.3 Safe areas

Respect iOS safe-area-inset; PWA standalone mode must not clip hero metric under notch.

---

## 6. Materials & texture

### 6.1 Surface formula

```
matte black base
+ subtle metallic highlight (gradient line or top edge 1px)
+ optional carbon weave (masked, low opacity)
+ zero glossy plastic
```

### 6.2 Carbon fiber — when YES

- Hero background (masked, &lt;15% opacity)  
- Premium section header strip  
- Logo mark fill (masked)  
- Divider accent (thin band)  
- Future merch / export PDF cover  

### 6.3 Carbon — when NO

- Under paragraphs  
- Full-page wallpaper  
- Small buttons  
- Anywhere it hurts contrast  

### 6.4 Carbon asset spec

- Dark, near-matte  
- Diagonal twill weave, subtle  
- Tile size ~200–400px; overlay `mix-blend-mode: soft-light` or opacity 8–12%  
- Provide `@2x` raster or SVG pattern; no cheesy high-gloss 3D renders  

---

## 7. Logo & wordmark

### 7.1 Name

**Burn** — short, technical heat/energy without literal flame art.

### 7.2 Approved directions

1. **Wordmark** — `Burn` in Display weight, tight tracking (-0.03em), pure white on dark  
2. **Monogram** — `B` geometric construction on 8px grid  
3. **System mark** — abstract: axis, protocol tick, carbon weave cell, impulse line, scale module  

### 7.3 Construction rules

- Stroke weights: 1.5px / 2px at 24px icon size; scale proportionally  
- Clear space: height of capital `B` around mark  
- Minimum size: 24px height digital, 8mm print  

### 7.4 Forbidden

Flames, skulls, dumbbells, lightning, mascots, 3D chrome bevels, drop shadows on logo.

### 7.5 Color versions

| Background | Mark |
|------------|------|
| `carbon-black` | `pure-white` or metallic gradient stroke |
| Light (future) | `carbon-black` wordmark only |

---

## 8. UI components

### 8.1 Cards

- Background: `graphite-black`  
- Border: `1px solid var(--border-subtle)`  
- Radius: **12px** (standard), **16px** (hero card)  
- No colored drop shadows  

### 8.2 Buttons

| Variant | Style |
|---------|--------|
| Primary | `pure-white` fill, `carbon-black` text, radius **10px** or capsule for single CTA |
| Secondary | Transparent, `border-subtle`, `silver-white` text |
| Ghost | Text only `silver-white`, hover `titanium` |
| Destructive | `danger-muted` text + border, never solid red fill |

Min height **44px**. One primary CTA per screen when possible.

### 8.3 Inputs

- Background: `dark-metal`  
- Border: `border-subtle`; focus: `titanium` 1px + subtle outer glow `rgba(209,209,214,0.15)`  
- Placeholder: `steel-gray`  
- Numeric inputs: monospace, right-aligned optional for kcal  

### 8.4 Navigation

- Bottom tab bar (mobile PWA): `graphite-black` + top border `border-subtle`  
- Active: `titanium` icon + label; inactive: `steel-gray`  
- Icons: **outline** 1.5px stroke, 24px grid  

### 8.5 Hero metric (product-specific)

- Largest element on home screen  
- Monospace, `tabular-nums`, `pure-white`  
- Supporting row: week deficit, weight 7d avg, forecast range — `steel-gray` labels, `silver-white` values  
- Progress ring/bar: track `dark-metal`, fill `metallic-line` or `titanium`; no rainbow gradients  
- Tap hero → sheet with formula + disclaimer (spec)  

### 8.6 Data visualization

- Charts: 1–2 series max; thin lines 1.5–2px; no chartjunk  
- Grid lines: `border-subtle`  
- Forecast range: band or whiskers, not single date pin  
- WHO module: visually **secondary** to hero (smaller type, separate card)  

### 8.7 Icons

- Style: geometric outline, 24×24, 1.5px stroke  
- Source: prefer single family (e.g. Lucide) — customize stroke to match  
- No filled cartoon icons, no emoji as icons  

---

## 9. Motion & interaction

| Property | Guideline |
|----------|-----------|
| Duration | 150–250ms micro; 300–400ms sheets |
| Easing | `cubic-bezier(0.25, 0.1, 0.25, 1)` or ease-out; no bounce |
| Hero updates | Crossfade or count-up ≤600ms when kcal changes |
| Reduced motion | Respect `prefers-reduced-motion: reduce` |

No parallax, no confetti, no streak explosions.

---

## 10. Photography & illustration

**MVP:** none required. If added later:

- Monochrome or desaturated imagery  
- Human presence optional; no stock “screaming gym”  
- Prefer product UI screenshots, charts, abstract geometry  

Illustrations: line-based schematics only; match `metallic-line` palette.

---

## 11. Voice & microcopy (UI)

Align with [`product.md`](./product.md):

- Calm, precise, no hype  
- Disclaimers visible where spec requires  
- Error states: factual («Не удалось сохранить»), not cute  

Example labels:

| Element | Copy pattern |
|---------|----------------|
| Hero | «До цели осталось» + `{n}` + «ккал» |
| Week | «Дефицит за неделю» / факт vs план |
| Forecast | «Оценка: {from} – {to}» |
| Plateau | Neutral explainer, no blame |

---

## 12. Implementation checklist (for agents)

When building UI/CSS/components:

- [ ] Read this file first  
- [ ] Use design tokens (section 3–4), not one-off hex values  
- [ ] Verify contrast on real devices  
- [ ] Hero metric dominates; secondary modules visually quieter  
- [ ] Carbon ≤1 surface per screen average  
- [ ] No blue system links unless accessibility audit requires  
- [ ] Russian UI strings; English comments in code  
- [ ] Test PWA standalone + Safari iOS safe areas  

### Suggested CSS variables (starter)

```css
:root {
  --color-bg: #050505;
  --color-surface: #111111;
  --color-surface-raised: #1c1c1e;
  --color-text: #f5f5f7;
  --color-text-muted: #8e8e93;
  --color-text-strong: #ffffff;
  --color-accent: #d1d1d6;
  --color-border: rgba(255, 255, 255, 0.08);
  --font-sans: "Inter", system-ui, sans-serif;
  --font-display: "Inter Display", "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --radius-md: 12px;
  --radius-lg: 16px;
}
```

---

## 13. What we explicitly reject (vibecoding patterns)

- Full-screen purple/blue gradients  
- Rounded cards with random colored shadows  
- Oversized blob mascots  
- Mixed font families (4+ families)  
- Neon green “crypto dashboard” accents  
- Glass cards on busy backgrounds  
- Lorem-style fitness stock photos as hero  
- “AI sparkle” icons and gradient text  
- Inconsistent border radii (8/12/24/32 on one screen)  
- Centered everything with no hierarchy  

---

## 14. Document history

| Version | Date | Notes |
|---------|------|-------|
| 0.1 | 2026-05-17 | Initial brand book; owner: Burn, titanium accent, dark-only MVP |

---

## References

- Apple Human Interface Guidelines — content-first, typography, accessibility, dark mode  
- [Linear: How we redesigned the Linear UI](https://linear.app/now/how-we-redesigned-the-linear-ui) — LCH themes, contrast variable, Inter Display  
- [WCAG 2.1 SC 1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)  
- Owner direction: Carbon Precision Minimalism (2026-05)
