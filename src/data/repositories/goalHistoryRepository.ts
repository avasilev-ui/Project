import { db } from '../db'
import type { StoredGoalHistory } from '../types'

export async function addGoalToHistory(
  entry: Omit<StoredGoalHistory, 'id'>,
): Promise<number> {
  return db.goalHistory.add(entry)
}

export async function listGoalHistory(): Promise<StoredGoalHistory[]> {
  return db.goalHistory.orderBy('reachedAt').reverse().toArray()
}
