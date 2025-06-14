import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'

import {
  lessonApiStore,
  PracticeLessonData,
  useGetLessonData,
} from '@/entities/lesson'
import { LessonOverview } from '@/entities/lesson-overview'
import { showNotification } from '@/features/notifications'
import { AsyncDataRender, Button, P } from '@/shared/ui'
import { timerStore } from '@/shared/ui/Timer'
import cn from 'classnames'

import { practiceLessonStore } from '../../model/practiceLessonStore'
import { SentencesSwitcher } from '../sentences-switcher'

import s from './PracticeLesson.module.scss'

export const PracticeLesson = observer(() => {
  const {
    sentencesCountStore: { setSentencesCount },
    pickedVariants,
    setPickedVariants,
    sentencesSlice,
    getResultsLesson,
  } = practiceLessonStore

  const {
    getSpentTime,
    isTimeEndStore: { isTimeEnd },
  } = timerStore

  const {
    getLessonInfoResponse: { data: lessonInfo, status },
    setLessonResultRequest,
  } = lessonApiStore

  const data = useGetLessonData(
    lessonInfo?.data,
    'practice'
  )

  const [isSubmit, setIsSubmit] = useState(false)

  const pickedVariantSentenceIndex =
    pickedVariants[sentencesSlice()[0] / 2] ?? 0

  useEffect(() => {
    setSentencesCount(
      Math.floor(
        (data?.variants.length ?? 0) /
          (data?.sentences.length ?? 0)
      )
    )
  }, [setSentencesCount, data])

  const isPickedVariant = (index: number) => {
    return pickedVariantSentenceIndex === index
  }

  const handlePickedVariant = (index: number) => {
    if (isTimeEnd) {
      showNotification('error', 'Время закончилось')

      return
    }

    setPickedVariants(index)
  }

  const handleClearAll = () => setPickedVariants('clearAll')

  const handleSubmit = () => {
    setIsSubmit(true)

    setLessonResultRequest({
      lesson_id: lessonInfo?.data.id ?? 0,
      time_taken: getSpentTime(),
    })
  }

  const render = (data: PracticeLessonData) => {
    return (
      <>
        <div className={s.practiceLesson}>
          <div className={s.top}>
            <div className={s.condition}>
              <P
                color={'white'}
                fontFamily={'DaysOne'}
                fontSize={20}
              >
                {data.condition}
              </P>
            </div>
          </div>
          <div className={s.sentences}>
            {data.sentences
              .slice(
                sentencesSlice()[0] / 2,
                sentencesSlice()[1] / 2
              )
              .map(sentence => (
                <>
                  <div className={s.sentence}>
                    <SentencesSwitcher
                      color={'black'}
                      withText
                      clickable
                    />
                    <P
                      color={'black'}
                      fontFamily={'DaysOne'}
                      fontSize={20}
                    >
                      {sentence}
                    </P>
                  </div>
                  <div className={s.pickedVariant}>
                    <SentencesSwitcher />
                    <P
                      color={'black'}
                      fontFamily={'DaysOne'}
                      fontSize={20}
                    >
                      {`${String.fromCharCode(65 + pickedVariantSentenceIndex).toLowerCase()}.   ${data.variants[pickedVariantSentenceIndex + sentencesSlice()[0]]}`}
                    </P>
                  </div>
                </>
              ))}
          </div>
        </div>
        <div
          className={cn(
            s.buttons,
            isSubmit && s.buttonsSubmit
          )}
        >
          {data.variants
            .slice(...sentencesSlice())
            .map((variant, index) => (
              <Button
                key={`${variant}-${index}`}
                className={s.buttonVariant}
                onClick={() => handlePickedVariant(index)}
                backgroundColor={
                  isPickedVariant(index) ? 'blue' : 'none'
                }
                borderColor={
                  isPickedVariant(index) ? 'blue' : 'black'
                }
                padding={'5px 7rem'}
                withText={false}
              >
                <SentencesSwitcher
                  color={
                    isPickedVariant(index)
                      ? 'white'
                      : '#9A5FFF'
                  }
                  noSpace
                />
                <P
                  color={
                    isPickedVariant(index)
                      ? 'white'
                      : 'black'
                  }
                  fontFamily={'DaysOne'}
                  fontSize={24}
                >
                  {String.fromCharCode(
                    65 + index
                  ).toLowerCase()}
                  . {variant}
                </P>
              </Button>
            ))}
        </div>
      </>
    )
  }

  return (
    <div className={s.practiceLessonWrapper}>
      <AsyncDataRender
        status={status}
        data={data}
        renderContent={data => render(data)}
      />
      <div
        className={cn(
          s.nextButtons,
          isSubmit && s.nextButtonsSubmit
        )}
      >
        {isSubmit ? (
          <LessonOverview
            lessonResult={getResultsLesson()}
            lessonMode={'hard'}
          />
        ) : (
          <>
            <Button
              borderColor={'blue'}
              fontSize={20}
              textColor={'black'}
              padding={'3px 3rem'}
              onClick={handleClearAll}
            >
              Clear all
            </Button>
            <Button
              backgroundColor={'blue'}
              fontSize={20}
              textColor={'white'}
              padding={'3px 3rem'}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </>
        )}
      </div>
    </div>
  )
})
