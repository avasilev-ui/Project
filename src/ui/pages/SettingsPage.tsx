import { DATA_LOSS_WARNING, SCREEN_SETTINGS } from '../strings'

export function SettingsPage() {
  return (
    <main>
      <h1>{SCREEN_SETTINGS}</h1>
      <p>{DATA_LOSS_WARNING}</p>
    </main>
  )
}
