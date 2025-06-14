import { observer } from 'mobx-react-lite'
import { useState } from 'react'

import {
  GrammarInput,
  grammarLessonStore,
} from '@/entities/grammar-input'
import {
  lessonApiStore,
  LessonInfoApiResponse,
  LessonInfoApiResponseData,
  LessonResult,
  selectedLessonStore,
  useGetLessonColor,
} from '@/entities/lesson'
import { LessonOverview } from '@/entities/lesson-overview'
import { AsyncDataRender, Button } from '@/shared/ui'
import { timerStore } from '@/shared/ui/Timer'

import s from './GrammarLesson.module.scss'

export const GrammarLesson = observer(() => {
  const {
    getLessonInfoResponse: { data: lessonInfo, status },
    setLessonResultRequest,
  } = lessonApiStore

  const { getSpentTime } = timerStore

  const {
    indexCoupleOfWordsState: { indexCoupleOfWords },
  } = grammarLessonStore

  const {
    selectedLessonState: { selectedLesson },
  } = selectedLessonStore

  const color = useGetLessonColor('grammar')

  const [submitted, setSubmitted] = useState(false)
  const [lessonResult, setLessonResult] =
    useState<LessonResult>('bad')

  const handleSubmit = () => {
    setSubmitted(true)

    const isCorrect =
      lessonInfo?.data?.lesson_data.answer_index[0] ===
      indexCoupleOfWords

    setLessonResult(isCorrect ? 'good' : 'bad')

    setLessonResultRequest({
      lesson_id: selectedLesson?.lessonNumber ?? 0,
      time_taken: getSpentTime(),
    })
  }

  const render = (data: LessonInfoApiResponseData) => {
    return (
      <>
        <div className={s.grammarLesson}>
          <GrammarInput
            sentence={data.lesson_data.sentences[0]}
            words={
              data.type === 'grammar'
                ? data.lesson_data.variants
                : []
            }
            type={selectedLesson?.lessonMode}
          />
        </div>
        {submitted ? (
          <LessonOverview
            lessonMode={'hard'}
            lessonResult={lessonResult}
            iconsSize={{ width: 64, height: 64 }}
          />
        ) : (
          <div className={s.buttons}>
            <Button
              backgroundColor={color.clear.backgroundColor}
              borderColor={color.clear.borderColor}
              textColor={color.clear.textColor}
              padding={'0.25rem 0'}
              width={'220px'}
            >
              Clear All
            </Button>
            <Button
              backgroundColor={color.submit.backgroundColor}
              textColor={color.submit.textColor}
              padding={'0.25rem 0'}
              width={'220px'}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        )}
      </>
    )
  }

  return (
    <AsyncDataRender
      status={status}
      data={lessonInfo?.data}
      renderContent={data => render(data)}
    />
  )
})
