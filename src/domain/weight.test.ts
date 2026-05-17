import { describe, expect, it } from 'vitest'
import { calculateKgToGoal, calculateWeight7dAverage } from './weight'

describe('weight rolling average', () => {
  const series = [
    { dateKey: '2026-05-01', weightKg: 82 },
    { dateKey: '2026-05-02', weightKg: 81.5 },
    { dateKey: '2026-05-03', weightKg: 81 },
    { dateKey: '2026-05-04', weightKg: 80.5 },
    { dateKey: '2026-05-05', weightKg: 80 },
    { dateKey: '2026-05-06', weightKg: 79.5 },
    { dateKey: '2026-05-07', weightKg: 79 },
  ]

  it('7-day average on day 7', () => {
    expect(calculateWeight7dAverage(series, '2026-05-07')).toBeCloseTo(80.5, 2)
  })

  it('uses fewer than 7 days when history is short', () => {
    expect(calculateWeight7dAverage(series.slice(0, 3), '2026-05-03')).toBeCloseTo(
      (82 + 81.5 + 81) / 3,
      2,
    )
  })

  it('kg to goal is non-negative', () => {
    expect(calculateKgToGoal(80.5, 75)).toBe(5.5)
    expect(calculateKgToGoal(74, 75)).toBe(0)
  })
})
