import { memo } from 'react'

import { LessonType } from '@/entities/lesson'
import { LevelData } from '@/features/levels-nav/model/types'

import { LevelsNavigationItem } from '../LevelsNavigationItem/LevelsNavigationItem'

export const LevelsNavigationRow = memo(
  ({
    rowLevels,
    lessonType,
    columnsCount,
    isReversed,
  }: LevelsNavigationRowProps) => (
    <>
      {(isReversed
        ? [...rowLevels].reverse()
        : rowLevels
      ).map(level => (
        <LevelsNavigationItem
          key={level.level}
          lessonType={lessonType}
          level={level}
          columnsCount={columnsCount}
          isReversed={isReversed}
        />
      ))}
    </>
  )
)


interface LevelsNavigationRowProps {
  rowLevels: LevelData[]
  lessonType: LessonType
  columnsCount: number
  isReversed: boolean
}