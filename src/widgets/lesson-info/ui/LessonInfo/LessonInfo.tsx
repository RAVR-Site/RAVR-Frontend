import { useLayoutEffect } from 'react'
import { useParams } from 'react-router-dom'

import { LessonType } from '@/entities/lesson'
import { englishLevelStore } from '@/features/english-levels'
import { levelsNavStore } from '@/features/levels-nav'
import { P } from '@/shared/ui'

import { lessonDescription } from '../../model/lessonDescription'

import s from './LessonInfo.module.scss'

export const LevelInfo = ({
  lessonType,
}: LevelInfoProps) => {
  const { lessonNumber } = useParams()

  const {
    currentEnglishLevel: { currentEnglishLevel },
  } = englishLevelStore

  const { getLessonInfoRequest, getLessonInfoResponse } =
    levelsNavStore

  const lessonTypeWithFirstLetterUppercase =
    lessonType.charAt(0).toUpperCase() + lessonType.slice(1)

  const lessonTypeFirstLetterUppercase = lessonType
    .charAt(0)
    .toUpperCase()

  useLayoutEffect(() => {
    console.log(getLessonInfoResponse)

    console.log(
      !getLessonInfoResponse.isPending &&
        !getLessonInfoResponse.isFulfilled &&
        !getLessonInfoResponse.data
    )

    console.log(
      !getLessonInfoResponse.isPending,
      !getLessonInfoResponse.isFulfilled,
      !getLessonInfoResponse.data
    )

    // TODO: ИСПРАВИТЬ КОГДА БУДЕТ РЕАЛЬНЫЙ API
    if (
      !getLessonInfoResponse.isPending &&
      !getLessonInfoResponse.isFulfilled &&
      !getLessonInfoResponse.data
    )
      getLessonInfoRequest({
        lessonType: lessonType,
        levelNumber: Number(lessonNumber),
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lessonType, lessonNumber])

  return (
    <div className={s[lessonType]}>
      <div className={s.leftBlock}>
        <img
          src={`@/widgets/lesson-info/assets/img/${lessonType}.png`}
          className={s.image}
        />
        <P>{lessonDescription[lessonType].description}</P>
      </div>
      <div className={s.rightBlock}>
        <P fontFamily={'DaysOne'} fontSize={40}>
          Lesson #{lessonNumber}.
          {lessonTypeFirstLetterUppercase}
        </P>
        <P fontFamily={'DaysOne'} fontSize={24}>
          {lessonTypeWithFirstLetterUppercase},{' '}
          {currentEnglishLevel}
        </P>
      </div>
    </div>
  )
}

interface LevelInfoProps {
  lessonType: LessonType
}
