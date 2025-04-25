import { P } from '@/shared/ui'
import cn from 'classnames'

import s from './LevelsNavigationItem.module.scss'

export const LevelsNavigationItem = ({
  level,
  lastElement,
  isReversed = false,
  rowIndex,
  columnsCount,
}: LevelsNavigationItemProps) => {
  const positionInRow = (Number(level) - 1) % columnsCount
  const gridPosition = isReversed
    ? columnsCount - positionInRow
    : positionInRow + 1

  return (
    <li
      className={cn(
        s.item,
        isReversed ? s.reverseElement : s.notReverseElement,
        lastElement && s.lastElement
      )}
      style={{
        gridColumn: gridPosition,
      }}
    >
      <P
        fontFamily={'DaysOne'}
        fontSize={32}
        color={'black'}
      >
        {level}
      </P>
    </li>
  )
}

interface LevelsNavigationItemProps {
  level: string
  lastElement: boolean
  isReversed?: boolean
  rowIndex: number
  columnsCount: number
}
