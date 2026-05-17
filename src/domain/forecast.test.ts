import { describe, expect, it } from 'vitest'
import { calculateForecastRange } from './forecast'

describe('forecast range', () => {
  const from = new Date('2026-05-01T12:00:00')

  it('returns null when no remaining kcal', () => {
    expect(calculateForecastRange(0, 3500, from)).toBeNull()
  })

  it('optimistic date is sooner than conservative', () => {
    const range = calculateForecastRange(7700, 3500, from)
    expect(range).not.toBeNull()
    expect(range!.optimisticDate.getTime()).toBeLessThan(range!.baseDate.getTime())
    expect(range!.baseDate.getTime()).toBeLessThan(range!.conservativeDate.getTime())
  })
})
