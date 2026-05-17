# Product specification

Personal mobile-first PWA for weight loss. Hero metric: **kilocalories of cumulative deficit remaining until goal weight**.

MVP: single user. No AI. No third-party integrations. Data **browser-only** (`localStorage` / IndexedDB when needed).

---

## Owner decisions (locked)

| Topic | Decision |
|-------|----------|
| Brisk steps | **Minutes of brisk walking** (not % of steps) |
| Workouts | Each workout **adds kcal on top of** daily expenditure |
| Cumulative deficit | From **first day** in the app |
| Goal reached | Offer **new goal** (keep goal history locally) |
| Storage | **Browser only** on device |
| Deficit pace | Owner sets **target deficit** manually |
| Extra profile (body fat %, avg steps, training type) | **After MVP** |

---

## 1. Product summary

- Primary goal: **weight loss** (general wellness as context).
- Type: energy-balance calculator + self-monitoring diary.
- Priority: **accuracy** with clear “estimate, not measurement” disclaimers.
- Main screen: interactive **“kcal remaining to goal”** scale + weight, calories, activity, forecast.

Do not promise “grams of fat burned.” Show **deficit kcal remaining** using the **7700 kcal ≈ 1 kg** model with disclaimers.

---

## 2. Hero metric

```
kg_to_goal = max(0, weight_7d_avg - target_weight_kg)
total_kcal_needed = kg_to_goal * 7700

expenditure_day = TDEE_day + workout_kcal + brisk_walk_kcal
deficit_day = expenditure_day - intake_day

cumulative_deficit = sum(deficit_day)  # from first use
remaining_kcal = max(0, total_kcal_needed - cumulative_deficit)
```

- **Day:** today’s deficit.
- **Week:** 7-day average intake and expenditure — **primary** for judgments.

### Forecast

Date **range** from average **weekly** deficit (e.g. optimistic / base / conservative ±15–25%). Never a single exact date.

### Disclaimer (home + onboarding)

> Estimate, not a measurement. Weight swings from water, glycogen, salt, cycle, GI contents. 7700 kcal/kg is a simplification.

### Goal reached

When `remaining_kcal → 0`: “Goal reached” → enter **new target weight** (history stored locally).

---

## 3. Formulas (MVP)

### BMR — Mifflin–St Jeor

- Male: `(10 × kg) + (6.25 × cm) − (5 × age) + 5`
- Female: `(10 × kg) + (6.25 × cm) − (5 × age) − 161`

### TDEE (daily base)

```
TDEE_day = BMR × PAL
```

PAL from onboarding (sedentary 1.2 … very active ~1.725).  
**Workouts are not in PAL** — added separately.

### Daily expenditure

```
expenditure = TDEE_day + sum(workout_kcal) + brisk_walk_kcal
```

### Brisk walking

Input: **minutes of brisk walking**.

```
distance_km ≈ minutes × speed_kmh / 60
default speed: 5.5 km/h (brisk ~100+ steps/min equivalent)
brisk_walk_kcal ≈ weight_kg × distance_km × 0.65   // range 0.5–0.8, label as estimate
```

Optional v1.1: total steps field for WHO only (slow steps do not add deficit kcal).

### Intake (manual)

Required per day: **kcal, protein, fiber**.  
Optional: fat, carbs, alcohol.

### Deficit pace

Owner sets **target deficit** (kcal/day or kcal/week — pick one primary in UI, show conversion).  
App compares actual weekly deficit vs target (on track / below / above).  
Informational: ~0.5–1% body mass per week — no hard block.

No TEF, no auto TDEE adaptation in v1.

---

## 4. Weight

- Log **daily** (hint: morning, fasted, consistent conditions).
- Calculations use **7-day rolling average**.

### Plateau (show all hints)

1. Wait **2 weeks** (watch 7d average).  
2. Recalculate TDEE (settings).  
3. Logging accuracy checklist.  
4. Water / glycogen retention note.

---

## 5. WHO activity (MVP)

- 150–300 min moderate OR 75–150 min vigorous OR equivalent; **1 min vigorous = 2 min moderate**.
- Brisk walk minutes → moderate.
- Running and cardio → vigorous by type/duration.
- Strength 2×/week — **v2**.

Display: walk kcal, moderate-equivalent min/week, % of WHO target.

---

## 6. Workouts

Fields: type, duration (min), **kcal (manual)**.  
Types: strength, cardio, intervals, walk, run, bike, swim, yoga/mobility, other.

---

## 7. MVP scope

**In v1:** onboarding (sex, age, height, weight, goal kg, PAL, target deficit), BMR/TDEE, hero remaining-kcal scale, log weight/food/brisk/workouts, day+week views, forecast range, WHO block, weekly report, disclaimers, new goal flow, local-only + PWA, data-loss warning.

**Later:** FatSecret, Health, AI, auto TDEE, body fat %, avg steps, training profile, WHO strength minimum, streaks.

---

## 8. Screens

1. Onboarding  
2. **Today** (hero remaining-kcal scale)  
3. Add: food / weight / brisk / workout  
4. Week  
5. Activity (WHO)  
6. Settings + export / browser data warning  

---

## 9. Implementation notes

- Web, mobile-first, PWA.
- Stack: see `docs/stack.md`.
- Persistence: `localStorage`, IndexedDB if needed.
- **In-app UI language: Russian** (user-facing strings in the product).

---

## 10. MVP acceptance criteria

- [ ] Hero “X kcal remaining” after onboarding  
- [ ] Target vs actual weekly deficit  
- [ ] Workouts increase day expenditure  
- [ ] Brisk minutes → kcal  
- [ ] Forecast = date range  
- [ ] New goal after target reached  
- [ ] Warning: data only in this browser  
