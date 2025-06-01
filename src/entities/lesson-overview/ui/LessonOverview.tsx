import { LessonMode, LessonResult } from '@/entities/lesson'
import { Size } from '@/shared/model/types'

import { BadIcon } from '../assets/icon/BadIcon'
import { GoodIcon } from '../assets/icon/GoodIcon'
import { NormalIcon } from '../assets/icon/NormalIcon'

import s from './LessonOverview.module.scss'

export const LessonOverview = ({
  lessonMode,
  lessonResult,
  iconsSize,
}: LessonOverviewProps) => {
  if (lessonMode === 'easy') {
    return (
      <div className={s.lessonOverview}>
        <GoodIcon
          active={lessonResult === 'good'}
          size={iconsSize}
        />
        <NormalIcon
          active={lessonResult === 'normal'}
          size={iconsSize}
        />
        <BadIcon
          active={lessonResult === 'bad'}
          size={iconsSize}
        />
      </div>
    )
  }

  return (
    <div className={s.lessonOverview}>
      <GoodIcon
        active={lessonResult === 'good'}
        size={iconsSize}
      />
      <BadIcon
        active={lessonResult === 'bad'}
        size={iconsSize}
      />
    </div>
  )
}

interface LessonOverviewProps {
  lessonMode?: LessonMode
  lessonResult: LessonResult
  iconsSize?: Size
}
