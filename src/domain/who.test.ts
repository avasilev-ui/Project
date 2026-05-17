import { describe, expect, it } from 'vitest'
import { calculateModerateEquivalentMinutes, calculateWhoProgress } from './who'

describe('WHO activity', () => {
  it('vigorous minutes count double toward moderate', () => {
    expect(calculateModerateEquivalentMinutes(60, 30)).toBe(120)
  })

  it('percent of 150 min target', () => {
    const progress = calculateWhoProgress({ briskWalkMinutes: 75, vigorousMinutes: 0 })
    expect(progress.percentOfTarget).toBe(50)
  })
})
