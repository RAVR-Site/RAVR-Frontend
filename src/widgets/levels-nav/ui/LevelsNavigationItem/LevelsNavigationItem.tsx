import { useNavigate } from 'react-router-dom'

import {
  lessonApiStore,
  LessonType,
} from '@/entities/lesson'
import { LevelData } from '@/features/levels-nav'
import { P } from '@/shared/ui'
import cn from 'classnames'

import { StarIcon } from '../../assets/icon-components/StarIcon'

import s from './LevelsNavigationItem.module.scss'

export const LevelsNavigationItem = ({
  level,
  isReversed = false,
  columnsCount,
  lessonType,
}: LevelsNavigationItemProps) => {
  const navigate = useNavigate()

  const { getLessonInfoRequest } = lessonApiStore

  const positionInRow =
    (level.level - 1) % columnsCount

  const gridPosition = isReversed
    ? columnsCount - positionInRow
    : positionInRow + 1

  const lastElement =
    Number(level.level) % columnsCount === 0

  const handleLessonClick = () => {
    navigate(`/${lessonType}/lesson/${level.level}/info`)

    getLessonInfoRequest({
      lessonType,
      levelNumber: level.level,
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
        {level.level}
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
