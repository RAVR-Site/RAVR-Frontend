import { observer } from 'mobx-react-lite'
import {
  Navigate,
  useNavigate,
  useParams,
} from 'react-router-dom'

import {
  lessonApiStore,
  LessonType,
  selectedLessonStore,
} from '@/entities/lesson'
import { levelsNavStore } from '@/features/levels-nav'
import {
  AsyncDataRender,
  Button,
  LoaderPage,
  P,
} from '@/shared/ui'

import { lessonDescription } from '../../model/lessonDescription'
// import { mockLessonInfo } from '../../model/mockLessonInfoData'

import s from './LessonInfo.module.scss'

export const LessonInfo = observer(
  ({ lessonType }: LevelInfoProps) => {
    // HOOKS
    const { lessonNumber } = useParams()
    const navigate = useNavigate()

    // STORES
    const { getLessonInfoRequest } = lessonApiStore

    const {
      selectedLessonState: { setSelectedLesson },
    } = selectedLessonStore

    const {
      getLevelsNavResponse: { data: levelsData, status },
    } = levelsNavStore

    // FORMATTING VARIABLES
    const lessonTypeWithFirstLetterUppercase =
      lessonType.charAt(0).toUpperCase() +
      lessonType.slice(1)

    const lessonTypeFirstLetterUppercase = lessonType
      .charAt(0)
      .toUpperCase()

    // DATA FORMATTING
    const data = levelsData?.data[Number(lessonNumber) - 1]

    if (!data) return <Navigate to={'/'} />

    const formattedData = {
      ...data,
      easy: {
        ...data.easy,
        fpsRecord: '90',
        userRecord: '1:30 sec',
      },
      hard: { ...data.hard, fpsRecord: '120' },
    } // formatLessonInfo(data)

    // HANDLERS
    const handleEasyClick = () => {
      getLessonInfoRequest({ id: data.easyId })
      setSelectedLesson({
        lessonType: lessonType,
        lessonNumber: Number(lessonNumber),
        lessonMode: 'easy',
        modeData: data.easy,
      })
      navigate(`/${lessonType}/lesson/${lessonNumber}`)
    }

    const handleHardClick = () => {
      getLessonInfoRequest({ id: data.hardId })
      setSelectedLesson({
        lessonType: lessonType,
        lessonNumber: Number(lessonNumber),
        lessonMode: 'hard',
        modeData: data.hard,
      })
      navigate(`/${lessonType}/lesson/${lessonNumber}`)
    }

    const renderLessonInfo = () => {
      return (
        <>
          <div className={s.leftBlock}>
            <div className={s.imageContainer}>
              <img
                src={`/public/assets/img/${lessonType}.png`}
                className={s.image}
                alt={lessonType + ' image'}
              />
            </div>

            <P fontSize={16}>
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
                  {lessonTypeWithFirstLetterUppercase}
                </P>
              </div>
              <div className={s.levelInfo}>
                <div className={s.levelInfoType}>
                  <div className={s.levelInfoTypeTimers}>
                    <P>Easy:</P>
                    <P>Time to finish - {'1:30 sec'}</P>
                    <P>
                      Your record -{' '}
                      {formattedData.easy.userRecord ??
                        ' --:-- sec'}
                    </P>
                    <P>
                      FPS Record -{' '}
                      {formattedData.easy.fpsRecord ?? ''}
                    </P>
                  </div>
                  <P>
                    You will gain {100} Xp for completing
                    this lesson
                  </P>
                </div>
                {formattedData.hard && (
                  <div className={s.levelInfoType}>
                    <div className={s.levelInfoTypeTimers}>
                      <P>Hard:</P>
                      <P>Time to finish - {'1:00 sec'}</P>
                      <P>
                        Your record -{' '}
                        {formattedData.hard.userRecord ??
                          ' --:-- sec'}
                      </P>
                      <P>
                        FPS Record -{' '}
                        {formattedData.hard.fpsRecord ?? ''}
                      </P>
                    </div>
                    <P>
                      You will gain {200} Xp for completing
                      this lesson
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
      )
    }

    return (
      <div className={s[lessonType]}>
        <AsyncDataRender
          status={status}
          data={data}
          renderContent={renderLessonInfo}
          loadingComponent={
            <LoaderPage
              loaderSize={{ width: 340, height: 340 }}
              colorLoader={'white'}
            />
          }
        />
      </div>
    )
  }
)

interface LevelInfoProps {
  lessonType: LessonType
}
