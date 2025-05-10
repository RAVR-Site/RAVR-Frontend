import { useLayoutEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { LessonType } from '@/entities/lesson'
import { lessonApiStore } from '@/entities/lesson'
import { selectedLessonStore } from '@/entities/lesson/model/store/selectedLessonStore'
import { englishLevelStore } from '@/features/english-levels'
import { Button, LoaderPage, P } from '@/shared/ui'

import { formatLessonInfo } from '../../lib/formatLessonInfo'
import { lessonDescription } from '../../model/lessonDescription'
import { mockLessonInfo } from '../../model/mockLessonInfoData'

import s from './LessonInfo.module.scss'

export const LevelInfo = ({
  lessonType,
}: LevelInfoProps) => {
  // HOOKS
  const { lessonNumber } = useParams()
  const navigate = useNavigate()

  // STORES
  const {
    currentEnglishLevel: { currentEnglishLevel },
  } = englishLevelStore

  const {
    getLessonInfoRequest,
    getLessonInfoResponse: {
      data: getLessonInfoData,
      isPending,
    },
  } = lessonApiStore

  const {
    selectedLesson: { setSelectedLesson },
  } = selectedLessonStore

  // FORMATTING VARIABLES
  const lessonTypeWithFirstLetterUppercase =
    lessonType.charAt(0).toUpperCase() + lessonType.slice(1)

  const lessonTypeFirstLetterUppercase = lessonType
    .charAt(0)
    .toUpperCase()

  const textType =
    lessonType === 'practice' ? 'practice' : 'base'

  // DATA FORMATTING
  const data =
    getLessonInfoData?.data || mockLessonInfo.data

  const formattedData = formatLessonInfo(data)

  // HANDLERS
  const handleEasyClick = () => {
    setSelectedLesson({
      lessonNumber: Number(lessonNumber),
      lessonMode: 'easy',
      modeData: data.easy,
    })
    navigate(`/${lessonType}/lesson/${lessonNumber}`)
  }

  const handleHardClick = () => {
    setSelectedLesson({
      lessonNumber: Number(lessonNumber),
      lessonMode: 'hard',
      modeData: data.easy,
    })
    navigate(`/${lessonType}/lesson/${lessonNumber}`)
  }

  // EFFECTS
  useLayoutEffect(() => {
    getLessonInfoRequest({
      lessonType: lessonType,
      levelNumber: Number(lessonNumber),
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lessonType, lessonNumber])

  return (
    <div className={s[lessonType]}>
      {false ? (
        <LoaderPage
          colorLoader={'white'}
          loaderSize={{ width: 340, height: 340 }}
        />
      ) : (
        <>
          <div className={s.leftBlock}>
            <div className={s.imageContainer}>
              <img
                src={`/public/assets/img/${lessonType}.png`}
                className={s.image}
              />
            </div>

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
                      Time to finish -{' '}
                      {formattedData.easy.timeToFinish}
                    </P>
                    <P type={textType}>
                      Your record -{' '}
                      {formattedData.easy.userRecord ??
                        ' --:-- sec'}
                    </P>
                    <P type={textType}>
                      FPS Record -{' '}
                      {formattedData.easy.fpsRecord}
                    </P>
                  </div>
                  <P type={textType}>
                    You will gain {formattedData.easy.xp} Xp
                    for completing this lesson
                  </P>
                </div>
                {formattedData.hard && (
                  <div className={s.levelInfoType}>
                    <div className={s.levelInfoTypeTimers}>
                      <P type={textType}>Hard:</P>
                      <P type={textType}>
                        Time to finish -{' '}
                        {formattedData.hard.timeToFinish}
                      </P>
                      <P type={textType}>
                        Your record -{' '}
                        {formattedData.hard.userRecord ??
                          ' --:-- sec'}
                      </P>
                      <P type={textType}>
                        FPS Record -{' '}
                        {formattedData.hard.fpsRecord}
                      </P>
                    </div>
                    <P type={textType}>
                      You will gain {formattedData.hard.xp}{' '}
                      Xp for completing this lesson
                    </P>
                  </div>
                )}
              </div>
            </div>
            <div className={s.buttons}>
              <Button
                width={'100%'}
                padding={'0.375rem 2rem'}
                backgroundColor={'white'}
                textColor={'black'}
                textAlign={'center'}
                onClick={handleEasyClick}
              >
                Start Easy
              </Button>
              <Button
                width={'100%'}
                padding={'0.375rem 2rem'}
                backgroundColor={'white'}
                textColor={'black'}
                textAlign={'center'}
                onClick={handleHardClick}
              >
                Start Hard
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

interface LevelInfoProps {
  lessonType: LessonType
}
