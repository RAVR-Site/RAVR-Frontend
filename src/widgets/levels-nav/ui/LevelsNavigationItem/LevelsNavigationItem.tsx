import { P } from '@/shared/ui'
import cn from 'classnames'

import { StarIcon } from '../../assets/StarIcon'
import { LevelData } from '../LevelsNavigation/LevelsNavigation'

import s from './LevelsNavigationItem.module.scss'

export const LevelsNavigationItem = ({
  level,
  isReversed = false,
  columnsCount,
}: LevelsNavigationItemProps) => {
  const positionInRow =
    (Number(level.levelNumber) - 1) % columnsCount

  const gridPosition = isReversed
    ? columnsCount - positionInRow
    : positionInRow + 1

  const lastElement =
    Number(level.levelNumber) % columnsCount === 0

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
        {level.levelNumber}
      </P>

      {level.hardIsDone && (
        <div className={s.hardIsDone}>
          <StarIcon />
        </div>
      )}
    </li>
  )
}

interface LevelsNavigationItemProps {
  level: LevelData
  isReversed?: boolean
  columnsCount: number
}
