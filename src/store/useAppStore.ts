import { create } from 'zustand'
import {
  calculateKgToGoal,
  calculateRemainingKcal,
  calculateTotalKcalNeeded,
  calculateWeight7dAverage,
} from '@/domain'
import type { StoredDayLog, StoredProfile } from '@/data/types'
import { getProfile } from '@/data/repositories/profileRepository'
import { listAllDayLogs } from '@/data/repositories/dayLogRepository'
import { ensureFirstUseDate } from '@/data/repositories/metaRepository'
import { toDateKey } from '@/lib/dates'

export type HydrationStatus = 'idle' | 'loading' | 'ready' | 'error'

interface AppState {
  profile: StoredProfile | null
  dayLogs: StoredDayLog[]
  selectedDate: string
  hydrationStatus: HydrationStatus
  hydrationError: string | null
  loadFromDb: () => Promise<void>
  setSelectedDate: (dateKey: string) => void
}

export const useAppStore = create<AppState>((set) => ({
  profile: null,
  dayLogs: [],
  selectedDate: toDateKey(),
  hydrationStatus: 'idle',
  hydrationError: null,

  loadFromDb: async () => {
    set({ hydrationStatus: 'loading', hydrationError: null })
    try {
      const [profile, dayLogs] = await Promise.all([getProfile(), listAllDayLogs()])
      await ensureFirstUseDate(toDateKey())
      set({ profile, dayLogs, hydrationStatus: 'ready' })
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to load data'
      set({ hydrationStatus: 'error', hydrationError: message })
    }
  },

  setSelectedDate: (dateKey) => set({ selectedDate: dateKey }),
}))

export function selectRemainingKcal(state: AppState): number | null {
  const { profile, dayLogs } = state
  if (!profile) return null

  const weights = dayLogs
    .filter((d) => d.weightKg != null)
    .map((d) => ({ dateKey: d.dateKey, weightKg: d.weightKg! }))

  const weight7d = calculateWeight7dAverage(weights, state.selectedDate)
  if (weight7d == null) return null

  const kgToGoal = calculateKgToGoal(weight7d, profile.targetWeightKg)
  const totalNeeded = calculateTotalKcalNeeded(kgToGoal)
  // Cumulative deficit from domain will be wired when day deficits are computed in UI phase.
  const cumulativeDeficit = 0
  return calculateRemainingKcal(totalNeeded, cumulativeDeficit)
}

export function useRemainingKcal(): number | null {
  return useAppStore(selectRemainingKcal)
}
