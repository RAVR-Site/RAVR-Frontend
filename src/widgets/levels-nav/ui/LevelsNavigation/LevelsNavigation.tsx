import { useEffect, useRef } from 'react'

import { useElementSize } from '@/shared/lib/hooks/useElementSize'
import { calculateColumns } from '@/shared/lib/utils/calculateColumns'
import { P } from '@/shared/ui'

import { LevelsNavigationItem } from '../LevelsNavigationItem/LevelsNavigationItem'

import s from './LevelsNavigation.module.scss'

export type LevelData = {
  levelNumber: string
  hardIsDone: boolean
}

const levels: LevelData[] = Array.from(
  { length: 36 },
  (_, i) => ({
    levelNumber: `${i + 1}`,
    hardIsDone: Math.random() < 0.5,
  })
)

export const LevelsNavigation = ({
  lessonType,
}: LevelsNavigationProps) => {
  const levelsNavRef = useRef<HTMLUListElement>(null)
  const { width } = useElementSize(levelsNavRef)

  const title =
    lessonType.charAt(0).toUpperCase() + lessonType.slice(1)

  const columnsCount = calculateColumns(width)
  const rows = Math.ceil(levels.length / columnsCount)

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

          return (
            <>
              {isReversed
                ? [...rowLevels]
                    .reverse()
                    .map(level => (
                      <LevelsNavigationItem
                        key={level.levelNumber}
                        level={level}
                        columnsCount={columnsCount}
                        isReversed
                      />
                    ))
                : rowLevels.map(level => (
                    <LevelsNavigationItem
                      key={level.levelNumber}
                      level={level}
                      columnsCount={columnsCount}
                    />
                  ))}
            </>
          )
        })}
      </ul>
    </div>
  )
}

interface LevelsNavigationProps {
  lessonType: 'grammar' | 'vocabulary' | 'practice'
}
