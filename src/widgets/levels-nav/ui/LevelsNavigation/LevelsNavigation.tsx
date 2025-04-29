import { useLayoutEffect, useRef } from 'react'

import { LessonType } from '@/entities/lesson'
import { levelsNavStore } from '@/features/levels-nav'
import { useElementSize } from '@/shared/lib/hooks/useElementSize'
import { calculateColumns } from '@/shared/lib/utils/calculateColumns'
import { P } from '@/shared/ui'

import { LevelData } from '../../../../features/levels-nav/model/types'
import { LevelsNavigationItem } from '../LevelsNavigationItem/LevelsNavigationItem'

import s from './LevelsNavigation.module.scss'

const levels: LevelData[] = Array.from(
  { length: 36 },
  (_, i) => ({
    levelNumber: `${i + 1}`,
    hardIsDone: Math.random() < 0.4,
  })
)

export const LevelsNavigation = ({
  lessonType,
}: LevelsNavigationProps) => {
  const {
    getLevelsNavResponse: { data: levelsData, isPending },
    getLevelsNavRequest,
  } = levelsNavStore

  const data = levelsData?.data.levels || levels

  const levelsNavRef = useRef<HTMLUListElement>(null)
  const { width } = useElementSize(levelsNavRef)

  const title =
    lessonType.charAt(0).toUpperCase() + lessonType.slice(1)

  const columnsCount = calculateColumns(width)
  const rows = Math.ceil(data.length / columnsCount)

  const renderLevels = (
    isReversed: boolean,
    rowLevels: LevelData[]
  ) => {
    if (isReversed) {
      return [...rowLevels]
        .reverse()
        .map(level => (
          <LevelsNavigationItem
            key={level.levelNumber}
            lessonType={lessonType}
            level={level}
            columnsCount={columnsCount}
            isReversed
          />
        ))
    } else {
      return rowLevels.map(level => (
        <LevelsNavigationItem
          key={level.levelNumber}
          lessonType={lessonType}
          level={level}
          columnsCount={columnsCount}
        />
      ))
    }
  }

  useLayoutEffect(() => {
    getLevelsNavRequest({ lessonType: lessonType })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lessonType])

  if (isPending) {
    return <div>Loading...</div>
  }

  return (
    <div className={s[lessonType]}>
      <P fontFamily={'DaysOne'} fontSize={32}>
        {title}
      </P>
      <ul className={s.list} ref={levelsNavRef}>
        {Array.from({ length: rows }).map((_, rowIndex) => {
          const start = rowIndex * columnsCount
          const end = start + columnsCount
          const rowLevels = levels.slice(start, end)
          const isReversed = rowIndex % 2 !== 0

          return renderLevels(isReversed, rowLevels)
        })}
      </ul>
    </div>
  )
}

interface LevelsNavigationProps {
  lessonType: LessonType
}
