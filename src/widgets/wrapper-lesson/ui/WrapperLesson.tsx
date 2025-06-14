import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

import {
  LessonType,
  selectedLessonStore,
} from '@/entities/lesson'
import { Button, P } from '@/shared/ui'
import { TipsIcon } from '@/shared/ui/icons'
import { Timer } from '@/shared/ui/Timer/ui/Timer'

import s from './WrapperLesson.module.scss'

export const WrapperLesson = ({
  children,
  lessonType,
}: WrapperLessonProps) => {
  const {
    selectedLessonState: { selectedLesson },
  } = selectedLessonStore

  if (!selectedLesson) {
    return <Navigate to={'/'} />
  }

  // FORMATTED DATA
  const data = selectedLesson

  const lessonMode =
    selectedLesson.lessonMode.charAt(0).toUpperCase() +
    selectedLesson.lessonMode.slice(1)

  return (
    <div className={s[lessonType]}>
      <div className={s.header}>
        <div className={s[`lessonNumber-${lessonType}`]}>
          <P
            fontFamily={'DaysOne'}
            fontSize={32}
            color={'black'}
          >
            {selectedLesson.lessonNumber}
          </P>
        </div>
        <P color={'black'}>
          Lesson #{selectedLesson.lessonNumber}
        </P>
        <div className={s.lessonMode}>
          <P color={'black'} fontSize={24}>
            {lessonMode}
          </P>
        </div>
        <Timer
          textColor={'black'}
          timeToFinish={data.lessonMode ? 90 : 60}
        />
      </div>
      {children}
      <div className={s.tips}>
        <TipsIcon size={{ width: 40, height: 40 }} />
      </div>
    </div>
  )
}

interface WrapperLessonProps {
  children: ReactNode
  lessonType: LessonType
}
