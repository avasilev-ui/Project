import type { ProfileInput } from '@/domain/types'
import { db } from '../db'
import { PROFILE_ID, type StoredProfile } from '../types'

export async function getProfile(): Promise<StoredProfile | undefined> {
  return db.profile.get(PROFILE_ID)
}

export async function upsertProfile(input: ProfileInput): Promise<StoredProfile> {
  const now = new Date().toISOString()
  const existing = await db.profile.get(PROFILE_ID)
  const record: StoredProfile = {
    id: PROFILE_ID,
    ...input,
    createdAt: existing?.createdAt ?? now,
    updatedAt: now,
  }
  await db.profile.put(record)
  return record
}

export async function deleteProfile(): Promise<void> {
  await db.profile.delete(PROFILE_ID)
}
