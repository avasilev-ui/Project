export type Sex = 'male' | 'female'

/** Physical activity level multiplier (MVP onboarding). */
export type PalMultiplier = number

export type WorkoutType =
  | 'strength'
  | 'cardio'
  | 'intervals'
  | 'walk'
  | 'run'
  | 'bike'
  | 'swim'
  | 'yoga'
  | 'other'

export interface WorkoutEntry {
  type: WorkoutType
  durationMin: number
  kcal: number
}

export interface FoodIntake {
  kcal: number
  proteinG: number
  fiberG: number
  fatG?: number
  carbsG?: number
  alcoholG?: number
}

export interface DayLogInput {
  dateKey: string
  weightKg?: number
  intake?: FoodIntake
  briskWalkMinutes?: number
  workouts?: WorkoutEntry[]
}

export interface ProfileInput {
  sex: Sex
  ageYears: number
  heightCm: number
  weightKg: number
  targetWeightKg: number
  pal: PalMultiplier
  /** Target deficit in kcal per day (owner-set pace). */
  targetDeficitKcalPerDay: number
}

export interface GoalHistoryEntry {
  targetWeightKg: number
  reachedAt: string
}

export interface DeficitDayResult {
  dateKey: string
  expenditureKcal: number
  intakeKcal: number
  deficitKcal: number
}

export interface ForecastRange {
  optimisticDate: Date
  baseDate: Date
  conservativeDate: Date
}

export const KCAL_PER_KG_FAT = 7700
export const DEFAULT_BRISK_SPEED_KMH = 5.5
export const BRISK_WALK_KCAL_FACTOR = 0.65
export const VIGOROUS_TO_MODERATE_RATIO = 2
