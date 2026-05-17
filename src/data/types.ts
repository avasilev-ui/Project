import type { FoodIntake, ProfileInput, WorkoutEntry } from '@/domain/types'

export const PROFILE_ID = 'current' as const

export interface StoredProfile extends ProfileInput {
  id: typeof PROFILE_ID
  createdAt: string
  updatedAt: string
}

export interface StoredDayLog {
  dateKey: string
  weightKg?: number
  intake?: FoodIntake
  briskWalkMinutes?: number
  workouts?: WorkoutEntry[]
  updatedAt: string
}

export interface StoredGoalHistory {
  id?: number
  targetWeightKg: number
  reachedAt: string
}

export interface StoredMeta {
  key: string
  value: string
}

export interface AppBackupPayload {
  version: 1
  exportedAt: string
  profile: StoredProfile | null
  dayLogs: StoredDayLog[]
  goalHistory: StoredGoalHistory[]
  meta: StoredMeta[]
}
