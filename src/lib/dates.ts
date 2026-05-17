/** Local calendar date as YYYY-MM-DD. */
export function toDateKey(date: Date = new Date()): string {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

export function parseDateKey(dateKey: string): Date {
  const [y, m, d] = dateKey.split('-').map(Number)
  return new Date(y, m - 1, d)
}

/** Inclusive range [start, end] as date keys. */
export function listDateKeysInRange(startKey: string, endKey: string): string[] {
  const keys: string[] = []
  const cursor = parseDateKey(startKey)
  const end = parseDateKey(endKey)
  while (cursor <= end) {
    keys.push(toDateKey(cursor))
    cursor.setDate(cursor.getDate() + 1)
  }
  return keys
}

/** Monday–Sunday week containing `dateKey` (local time). */
export function getWeekBounds(dateKey: string): { start: string; end: string } {
  const date = parseDateKey(dateKey)
  const day = date.getDay()
  const diffToMonday = day === 0 ? -6 : 1 - day
  const monday = new Date(date)
  monday.setDate(date.getDate() + diffToMonday)
  const sunday = new Date(monday)
  sunday.setDate(monday.getDate() + 6)
  return { start: toDateKey(monday), end: toDateKey(sunday) }
}
