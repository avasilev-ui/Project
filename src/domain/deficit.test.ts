import { describe, expect, it } from 'vitest'
import { calculateDayDeficit, sumCumulativeDeficit } from './deficit'

describe('deficit', () => {
  it('positive deficit when expenditure exceeds intake', () => {
    expect(calculateDayDeficit(2500, 2000)).toBe(500)
  })

  it('negative deficit on surplus day', () => {
    expect(calculateDayDeficit(2000, 2500)).toBe(-500)
  })

  it('sums cumulative from first day', () => {
    expect(sumCumulativeDeficit([500, -200, 300])).toBe(600)
  })
})
