import { useEffect, useRef } from 'react'

import { useElementSize } from '@/shared/lib/hooks/useElementSize'
import { calculateColumns } from '@/shared/lib/utils/calculateColumns'
import { P } from '@/shared/ui'

import { LevelsNavigationItem } from '../LevelsNavigationItem/LevelsNavigationItem'

import s from './LevelsNavigation.module.scss'

const levels = Array.from(
  { length: 36 },
  (_, i) => `${i + 1}`
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
                    .map(levelNumber => (
                      <LevelsNavigationItem
                        key={levelNumber}
                        level={levelNumber}
                        lastElement={
                          Number(levelNumber) %
                            columnsCount ===
                          0
                        }
                        rowIndex={rowIndex + 1}
                        columnsCount={columnsCount}
                        isReversed
                      />
                    ))
                : rowLevels.map(levelNumber => (
                    <LevelsNavigationItem
                      key={levelNumber}
                      level={levelNumber}
                      lastElement={
                        Number(levelNumber) %
                          columnsCount ===
                        0
                      }
                      rowIndex={rowIndex + 1}
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
