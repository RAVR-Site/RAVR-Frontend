import { useNavigate } from 'react-router-dom'

import { LessonType } from '@/entities/lesson'
import { P } from '@/shared/ui'
import cn from 'classnames'

import { levelsNavStore } from '../../../../features/levels-nav/model/levelsNavStore'
import { LevelData } from '../../../../features/levels-nav/model/types'
import { StarIcon } from '../../assets/icon-components/StarIcon'

import s from './LevelsNavigationItem.module.scss'

export const LevelsNavigationItem = ({
  level,
  isReversed = false,
  columnsCount,
  lessonType,
}: LevelsNavigationItemProps) => {
  const navigate = useNavigate()

  const { getLessonInfoRequest } = levelsNavStore

  const positionInRow =
    (Number(level.levelNumber) - 1) % columnsCount

  const gridPosition = isReversed
    ? columnsCount - positionInRow
    : positionInRow + 1

  const lastElement =
    Number(level.levelNumber) % columnsCount === 0

  const handleLessonClick = () => {
    navigate(`/${lessonType}/lesson/${level.levelNumber}`)

    getLessonInfoRequest({
      lessonType,
      levelNumber: Number(level.levelNumber),
    })
  }

  return (
    <li
      className={cn(
        s.item,
        isReversed ? s.reverseElement : s.notReverseElement,
        lastElement && s.lastElement
      )}
      style={{ gridColumn: gridPosition }}
      onClick={handleLessonClick}
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
  lessonType: LessonType
}
