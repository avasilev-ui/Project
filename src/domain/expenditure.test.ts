import { describe, expect, it } from 'vitest'
import { calculateBriskWalkKcal, calculateDailyExpenditure } from './expenditure'

describe('calculateBriskWalkKcal', () => {
  it('30 min brisk walk at 80 kg', () => {
    // distance = 30 * 5.5 / 60 = 2.75 km; kcal = 80 * 2.75 * 0.65 = 143
    expect(calculateBriskWalkKcal(80, 30)).toBeCloseTo(143, 0)
  })

  it('zero minutes returns zero', () => {
    expect(calculateBriskWalkKcal(80, 0)).toBe(0)
  })
})

describe('calculateDailyExpenditure', () => {
  it('adds TDEE, workouts, and brisk walk', () => {
    const result = calculateDailyExpenditure(2000, 80, 30, [
      { type: 'strength', durationMin: 60, kcal: 250 },
    ])
    expect(result).toBeCloseTo(2000 + 250 + 143, 0)
  })
})
