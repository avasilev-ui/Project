import { KCAL_PER_KG_FAT } from './types'

export function calculateTotalKcalNeeded(kgToGoal: number): number {
  return kgToGoal * KCAL_PER_KG_FAT
}

export function calculateRemainingKcal(
  totalKcalNeeded: number,
  cumulativeDeficitKcal: number,
): number {
  return Math.max(0, totalKcalNeeded - cumulativeDeficitKcal)
}

export function isGoalReached(remainingKcal: number): boolean {
  return remainingKcal <= 0
}
