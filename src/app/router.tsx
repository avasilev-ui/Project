import { createBrowserRouter, Navigate } from 'react-router-dom'
import {
  ActivityPage,
  OnboardingPage,
  SettingsPage,
  TodayPage,
  WeekPage,
} from '@/ui/pages'

export const router = createBrowserRouter([
  { path: '/', element: <TodayPage /> },
  { path: '/onboarding', element: <OnboardingPage /> },
  { path: '/week', element: <WeekPage /> },
  { path: '/activity', element: <ActivityPage /> },
  { path: '/settings', element: <SettingsPage /> },
  { path: '*', element: <Navigate to="/" replace /> },
])
