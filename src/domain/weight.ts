/**
 * Seven-day rolling average of weight (kg).
 * Uses up to the last 7 entries on or before `asOfDateKey`, sorted by date.
 */
export function calculateWeight7dAverage(
  weightByDateKey: Array<{ dateKey: string; weightKg: number }>,
  asOfDateKey: string,
): number | null {
  const eligible = weightByDateKey
    .filter((e) => e.dateKey <= asOfDateKey && e.weightKg > 0)
    .sort((a, b) => a.dateKey.localeCompare(b.dateKey))

  if (eligible.length === 0) return null

  const lastSeven = eligible.slice(-7)
  const sum = lastSeven.reduce((acc, e) => acc + e.weightKg, 0)
  return sum / lastSeven.length
}

export function calculateKgToGoal(
  weight7dAvgKg: number,
  targetWeightKg: number,
): number {
  return Math.max(0, weight7dAvgKg - targetWeightKg)
}
