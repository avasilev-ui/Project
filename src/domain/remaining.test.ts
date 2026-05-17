import { describe, expect, it } from 'vitest'
import {
  calculateRemainingKcal,
  calculateTotalKcalNeeded,
  isGoalReached,
} from './remaining'

describe('remaining kcal to goal', () => {
  it('total kcal from kg to goal', () => {
    expect(calculateTotalKcalNeeded(5)).toBe(38500)
  })

  it('remaining decreases with cumulative deficit', () => {
    expect(calculateRemainingKcal(38500, 10000)).toBe(28500)
  })

  it('remaining floors at zero when goal reached', () => {
    expect(calculateRemainingKcal(38500, 40000)).toBe(0)
    expect(isGoalReached(0)).toBe(true)
  })
})
