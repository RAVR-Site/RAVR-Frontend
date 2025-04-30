import { useLayoutEffect } from 'react'
import { useParams } from 'react-router-dom'

import { LessonType } from '@/entities/lesson'
import { englishLevelStore } from '@/features/english-levels'
import {
  LessonInfoApiResponse,
  levelsNavStore,
} from '@/features/levels-nav'
import { Button, P } from '@/shared/ui'

import { formatLessonInfo } from '../../lib/formatLessonInfo'
import { lessonDescription } from '../../model/lessonDescription'

import s from './LessonInfo.module.scss'

const mockLessonInfo: LessonInfoApiResponse = {
  success: true,
  message: 'success',
  timestamp: '2021-01-01T00:00:00.000Z',
  data: {
    id: 1,
    lessonNumber: 1,
    easy: {
      timeToFinish: 100,
      fpsRecord: 100,
      xp: 100,
      userRecord: 100,
    },
    hard: {
      timeToFinish: 150,
      fpsRecord: 150,
      xp: 150,
    },
  },
}

export const LevelInfo = ({
  lessonType,
}: LevelInfoProps) => {
  const { lessonNumber } = useParams()

  const {
    currentEnglishLevel: { currentEnglishLevel },
  } = englishLevelStore

  const {
    getLessonInfoRequest,
    getLessonInfoResponse: { data: getLessonInfoData },
  } = levelsNavStore

  const lessonTypeWithFirstLetterUppercase =
    lessonType.charAt(0).toUpperCase() + lessonType.slice(1)

  const lessonTypeFirstLetterUppercase = lessonType
    .charAt(0)
    .toUpperCase()

  useLayoutEffect(() => {
    getLessonInfoRequest({
      lessonType: lessonType,
      levelNumber: Number(lessonNumber),
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lessonType, lessonNumber])

  const data = formatLessonInfo(
    getLessonInfoData?.data || mockLessonInfo.data
  )

  const textType =
    lessonType === 'practice' ? 'practice' : 'base'

  return (
    <div className={s[lessonType]}>
      <div className={s.leftBlock}>
        <img
          src={`/public/assets/img/${lessonType}.png`}
          className={s.image}
        />
        <P fontSize={16} type={textType}>
          {lessonDescription[lessonType].description}
        </P>
      </div>
      <div className={s.rightBlock}>
        <div className={s.info}>
          <div className={s.title}>
            <P fontFamily={'DaysOne'} fontSize={40}>
              Lesson #{lessonNumber}.
              {lessonTypeFirstLetterUppercase}
            </P>
            <P fontFamily={'DaysOne'} fontSize={24}>
              {lessonTypeWithFirstLetterUppercase},{' '}
              {currentEnglishLevel}
            </P>
          </div>
          <div className={s.levelInfo}>
            <div className={s.levelInfoType}>
              <div className={s.levelInfoTypeTimers}>
                <P type={textType}>Easy:</P>
                <P type={textType}>
                  Time to finish - {data.easy.timeToFinish}
                </P>
                <P type={textType}>
                  Your record -{' '}
                  {data.easy.userRecord || ' --:-- sec'}
                </P>
                <P type={textType}>FPS Record - {data.easy.fpsRecord}</P>
              </div>
              <P type={textType}>
                You will gain {data.easy.xp} Xp for
                completing this lesson
              </P>
            </div>
            {data.hard && (
              <div className={s.levelInfoType}>
                <div className={s.levelInfoTypeTimers}>
                  <P type={textType}>Hard:</P>
                  <P type={textType}>
                    Time to finish -{' '}
                    {data.hard.timeToFinish}
                  </P>
                  <P type={textType}>
                    Your record -{' '}
                    {data.hard.userRecord || ' --:-- sec'}
                  </P>
                  <P type={textType}>FPS Record - {data.hard.fpsRecord}</P>
                </div>
                <P type={textType}>
                  You will gain {data.hard.xp} Xp for
                  completing this lesson
                </P>
              </div>
            )}
          </div>
        </div>
        <div className={s.buttons}>
          <Button
            backgroundColor={'white'}
            textColor={'black'}
            padding={'0.375rem 2rem'}
          >
            Start Easy
          </Button>
          <Button
            backgroundColor={'white'}
            textColor={'black'}
            padding={'0.375rem 2rem'}
          >
            Start Hard
          </Button>
        </div>
      </div>
    </div>
  )
}

interface LevelInfoProps {
  lessonType: LessonType
}
