import { describe, expect, it } from 'vitest'
import { calculateBmr } from './bmr'

describe('calculateBmr', () => {
  it('male reference case', () => {
    // 80 kg, 180 cm, 35 y → (800 + 1125 - 175 + 5) = 1755
    expect(calculateBmr('male', 80, 180, 35)).toBe(1755)
  })

  it('female reference case', () => {
    // 65 kg, 165 cm, 30 y → (650 + 1031.25 - 150 - 161) = 1370.25
    expect(calculateBmr('female', 65, 165, 30)).toBeCloseTo(1370.25, 2)
  })
})
