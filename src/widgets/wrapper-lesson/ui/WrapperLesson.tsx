import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

import {
  LessonType,
  selectedLessonStore,
} from '@/entities/lesson'
import { P } from '@/shared/ui'
import { Timer } from '@/shared/ui/Timer/Timer'

import s from './WrapperLesson.module.scss'

export const WrapperLesson = ({
  children,
  lessonType,
}: WrapperLessonProps) => {
  const {
    selectedLesson: { selectedLesson },
  } = selectedLessonStore

  // const color = useGetLessonColor(lessonType)

  if (!selectedLesson) {
    return <Navigate to={'/'} />
  }

  // FORMATTED DATA
  const data = selectedLesson.modeData

  const lessonMode =
    selectedLesson.lessonMode.charAt(0).toUpperCase() +
    selectedLesson.lessonMode.slice(1)

  return (
    <div className={s[lessonType]}>
      <div className={s[`lessonNumber-${lessonType}`]}>
        <P
          fontFamily={'DaysOne'}
          fontSize={32}
          color={'black'}
        >
          {selectedLesson.lessonNumber}
        </P>
      </div>
      <div className={s.header}>
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
          timeToFinish={data.timeToFinish}
        />
      </div>
      {children}
      {/* <div className={s.buttons}>
        <Button
          backgroundColor={color.clear.backgroundColor}
          borderColor={color.clear.borderColor}
          textColor={color.clear.textColor}
        >
          Clear All
        </Button>
        <Button
          backgroundColor={color.submit.backgroundColor}
          textColor={color.submit.textColor}
        >
          Submit
        </Button>
      </div> */}
      <div className={s.tips} />
    </div>
  )
}

interface WrapperLessonProps {
  children: ReactNode
  lessonType: LessonType
}
