import type { ForecastRange } from './types'

const OPTIMISTIC_DEFICIT_FACTOR = 1.25
const CONSERVATIVE_DEFICIT_FACTOR = 0.75

function addDays(date: Date, days: number): Date {
  const result = new Date(date)
  result.setDate(result.getDate() + Math.ceil(days))
  return result
}

/**
 * Forecast date range from average weekly deficit.
 * Optimistic = faster (higher deficit); conservative = slower (lower deficit).
 */
export function calculateForecastRange(
  remainingKcal: number,
  weeklyDeficitKcal: number,
  fromDate: Date = new Date(),
): ForecastRange | null {
  if (remainingKcal <= 0) return null
  if (weeklyDeficitKcal <= 0) return null

  const dailyBase = weeklyDeficitKcal / 7
  const baseDays = remainingKcal / dailyBase
  const optimisticDays = remainingKcal / ((weeklyDeficitKcal * OPTIMISTIC_DEFICIT_FACTOR) / 7)
  const conservativeDays =
    remainingKcal / ((weeklyDeficitKcal * CONSERVATIVE_DEFICIT_FACTOR) / 7)

  return {
    optimisticDate: addDays(fromDate, optimisticDays),
    baseDate: addDays(fromDate, baseDays),
    conservativeDate: addDays(fromDate, conservativeDays),
  }
}
