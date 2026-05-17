import { VIGOROUS_TO_MODERATE_RATIO } from './types'

export interface WhoActivityInput {
  briskWalkMinutes: number
  vigorousMinutes: number
}

export interface WhoProgress {
  moderateEquivalentMinutes: number
  whoTargetMin: number
  percentOfTarget: number
}

const WHO_MODERATE_TARGET_MIN = 150

/** Brisk walk counts as moderate; vigorous uses 1:2 equivalence. */
export function calculateModerateEquivalentMinutes(
  briskWalkMinutes: number,
  vigorousMinutes: number,
): number {
  return briskWalkMinutes + vigorousMinutes * VIGOROUS_TO_MODERATE_RATIO
}

export function calculateWhoProgress(input: WhoActivityInput): WhoProgress {
  const moderateEquivalentMinutes = calculateModerateEquivalentMinutes(
    input.briskWalkMinutes,
    input.vigorousMinutes,
  )
  const percentOfTarget = Math.min(
    100,
    (moderateEquivalentMinutes / WHO_MODERATE_TARGET_MIN) * 100,
  )
  return {
    moderateEquivalentMinutes,
    whoTargetMin: WHO_MODERATE_TARGET_MIN,
    percentOfTarget,
  }
}
