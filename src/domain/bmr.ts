import type { Sex } from './types'

/**
 * Mifflin–St Jeor BMR (kcal/day).
 * @see docs/product-spec.md §3
 */
export function calculateBmr(
  sex: Sex,
  weightKg: number,
  heightCm: number,
  ageYears: number,
): number {
  const base = 10 * weightKg + 6.25 * heightCm - 5 * ageYears
  return sex === 'male' ? base + 5 : base - 161
}
