import Dexie, { type Table } from 'dexie'
import type { StoredDayLog, StoredGoalHistory, StoredMeta, StoredProfile } from './types'

export class BurnDatabase extends Dexie {
  profile!: Table<StoredProfile, string>
  dayLogs!: Table<StoredDayLog, string>
  goalHistory!: Table<StoredGoalHistory, number>
  meta!: Table<StoredMeta, string>

  constructor() {
    super('burn')
    this.version(1).stores({
      profile: 'id',
      dayLogs: 'dateKey',
      goalHistory: '++id, reachedAt',
      meta: 'key',
    })
  }
}

export const db = new BurnDatabase()
