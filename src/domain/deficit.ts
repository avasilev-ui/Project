import type { DeficitDayResult } from './types'

export function calculateDayDeficit(
  expenditureKcal: number,
  intakeKcal: number,
): number {
  return expenditureKcal - intakeKcal
}

export function buildDeficitDayResult(
  dateKey: string,
  expenditureKcal: number,
  intakeKcal: number,
): DeficitDayResult {
  return {
    dateKey,
    expenditureKcal,
    intakeKcal,
    deficitKcal: calculateDayDeficit(expenditureKcal, intakeKcal),
  }
}

export function sumCumulativeDeficit(deficitByDay: number[]): number {
  return deficitByDay.reduce((sum, d) => sum + d, 0)
}
