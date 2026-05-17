import { Link } from 'react-router-dom'
import { NAV_DEV_LINKS, SCREEN_TODAY } from '../strings'

const devRoutes = [
  { to: '/onboarding', label: 'Онбординг' },
  { to: '/week', label: 'Неделя' },
  { to: '/activity', label: 'Активность' },
  { to: '/settings', label: 'Настройки' },
] as const

export function TodayPage() {
  return (
    <main>
      <h1>{SCREEN_TODAY}</h1>
      <p>{NAV_DEV_LINKS}</p>
      <ul>
        {devRoutes.map(({ to, label }) => (
          <li key={to}>
            <Link to={to}>{label}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
