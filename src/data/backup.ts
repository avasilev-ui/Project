import type { AppBackupPayload } from './types'
import { getProfile } from './repositories/profileRepository'
import { listAllDayLogs } from './repositories/dayLogRepository'
import { listGoalHistory } from './repositories/goalHistoryRepository'
import { listMeta } from './repositories/metaRepository'

/** Export all local data as JSON (implementation stub — file download in a later phase). */
export async function exportBackup(): Promise<AppBackupPayload> {
  const [profile, dayLogs, goalHistory, meta] = await Promise.all([
    getProfile(),
    listAllDayLogs(),
    listGoalHistory(),
    listMeta(),
  ])
  return {
    version: 1,
    exportedAt: new Date().toISOString(),
    profile: profile ?? null,
    dayLogs,
    goalHistory,
    meta,
  }
}

/** Restore from backup payload (stub — validates version only). */
export async function importBackup(payload: AppBackupPayload): Promise<void> {
  if (payload.version !== 1) {
    throw new Error(`Unsupported backup version: ${payload.version}`)
  }
  throw new Error('importBackup is not implemented yet')
}
