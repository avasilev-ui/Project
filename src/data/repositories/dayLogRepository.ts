import { db } from '../db'
import type { StoredDayLog } from '../types'

export async function getDayLog(dateKey: string): Promise<StoredDayLog | undefined> {
  return db.dayLogs.get(dateKey)
}

export async function upsertDayLog(
  log: Omit<StoredDayLog, 'updatedAt'>,
): Promise<StoredDayLog> {
  const record: StoredDayLog = {
    ...log,
    updatedAt: new Date().toISOString(),
  }
  await db.dayLogs.put(record)
  return record
}

export async function listDayLogsInRange(
  startKey: string,
  endKey: string,
): Promise<StoredDayLog[]> {
  return db.dayLogs.where('dateKey').between(startKey, endKey, true, true).toArray()
}

export async function listAllDayLogs(): Promise<StoredDayLog[]> {
  return db.dayLogs.orderBy('dateKey').toArray()
}
