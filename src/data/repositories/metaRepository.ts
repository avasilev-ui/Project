import { db } from '../db'
import type { StoredMeta } from '../types'

export const META_FIRST_USE = 'firstUseDate'
export const META_SCHEMA_VERSION = 'schemaVersion'

export async function getMeta(key: string): Promise<string | undefined> {
  const row = await db.meta.get(key)
  return row?.value
}

export async function setMeta(key: string, value: string): Promise<void> {
  await db.meta.put({ key, value })
}

export async function listMeta(): Promise<StoredMeta[]> {
  return db.meta.toArray()
}

export async function ensureFirstUseDate(dateKey: string): Promise<void> {
  const existing = await getMeta(META_FIRST_USE)
  if (!existing) {
    await setMeta(META_FIRST_USE, dateKey)
  }
}
