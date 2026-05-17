import {
  BRISK_WALK_KCAL_FACTOR,
  DEFAULT_BRISK_SPEED_KMH,
  type WorkoutEntry,
} from './types'

export function calculateBriskWalkKcal(
  weightKg: number,
  briskWalkMinutes: number,
  speedKmh: number = DEFAULT_BRISK_SPEED_KMH,
): number {
  if (briskWalkMinutes <= 0) return 0
  const distanceKm = (briskWalkMinutes * speedKmh) / 60
  return weightKg * distanceKm * BRISK_WALK_KCAL_FACTOR
}

export function sumWorkoutKcal(workouts: WorkoutEntry[] | undefined): number {
  if (!workouts?.length) return 0
  return workouts.reduce((sum, w) => sum + Math.max(0, w.kcal), 0)
}

/** Total daily expenditure: TDEE + workouts + brisk walking. */
export function calculateDailyExpenditure(
  tdeeDay: number,
  weightKg: number,
  briskWalkMinutes: number,
  workouts: WorkoutEntry[] | undefined,
): number {
  return (
    tdeeDay +
    sumWorkoutKcal(workouts) +
    calculateBriskWalkKcal(weightKg, briskWalkMinutes)
  )
}
