import { observer } from 'mobx-react-lite'
import { useLayoutEffect, useMemo, useRef } from 'react'

import { LessonType } from '@/entities/lesson'
import {
  LevelData,
  levelsNavStore,
} from '@/features/levels-nav'
import { useElementSize } from '@/shared/lib/hooks/useElementSize/useElementSize'
import { calculateColumns } from '@/shared/lib/utils/calculate-columns/calculateColumns'
import { AsyncDataRender, LoaderPage, P } from '@/shared/ui'
import cn from 'classnames'

import { LevelsNavigationRow } from '../LevelsNavigationRow/LevelsNavigationRow'

import s from './LevelsNavigation.module.scss'

export const LevelsNavigation = observer(
  ({ lessonType }: LevelsNavigationProps) => {
    const {
      getLevelsNavResponse: { data: levelsData, status },
      getLevelsNavRequest,
    } = levelsNavStore

    const levelsNavRef = useRef<HTMLUListElement>(null)
    const { width } = useElementSize(levelsNavRef)

    useLayoutEffect(() => {
      getLevelsNavRequest({ lessonType: lessonType })
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lessonType])

    const title =
      lessonType.charAt(0).toUpperCase() +
      lessonType.slice(1)

    const calculateColumnsRes = calculateColumns(width)

    const { columnsCount, rows } = useMemo(() => {
      const dataLength = levelsData?.data?.length || 0

      const columns =
        calculateColumnsRes > dataLength
          ? dataLength
          : calculateColumnsRes

      const rowsCount =
        dataLength > 0 ? Math.ceil(dataLength / columns) : 0

      return { columnsCount: columns, rows: rowsCount }
    }, [calculateColumnsRes, levelsData?.data])

    
    const renderLevelsNav = (data: LevelData[]) => {
      return (
        <ul
          className={cn(
            s.list,
            calculateColumnsRes > data.length &&
              s.listColumns
          )}
          ref={levelsNavRef}
        >
          {Array.from({ length: rows }).map(
            (_, rowIndex) => {
              const start = rowIndex * columnsCount
              const end = start + columnsCount
              const rowLevels = data.slice(start, end)
              const isReversed = rowIndex % 2 !== 0

              return (
                <LevelsNavigationRow
                  key={`row-${rowIndex}`}
                  rowLevels={rowLevels}
                  lessonType={lessonType}
                  columnsCount={columnsCount}
                  isReversed={isReversed}
                />
              )
            }
          )}
        </ul>
      )
    }

    return (
      <div className={s[lessonType]}>
        <P fontFamily={'DaysOne'} fontSize={32}>
          {title}
        </P>
        <AsyncDataRender
          status={status}
          data={levelsData?.data}
          renderContent={data => renderLevelsNav(data)}
          loadingComponent={
            <LoaderPage
              colorText={'white'}
              loaderSize={{ width: 275, height: 275 }}
            />
          }
        />
      </div>
    )
  }
)

interface LevelsNavigationProps {
  lessonType: LessonType
}
