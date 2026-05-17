import { calculateBmr } from './bmr'
import type { PalMultiplier, Sex } from './types'

/** Daily base expenditure: BMR × PAL (workouts excluded). */
export function calculateTdee(
  sex: Sex,
  weightKg: number,
  heightCm: number,
  ageYears: number,
  pal: PalMultiplier,
): number {
  return calculateBmr(sex, weightKg, heightCm, ageYears) * pal
}

export function calculateTdeeFromBmr(bmr: number, pal: PalMultiplier): number {
  return bmr * pal
}
