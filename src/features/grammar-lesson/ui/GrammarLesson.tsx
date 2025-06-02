import { observer } from 'mobx-react-lite'
import { useState } from 'react'

import { GrammarInput } from '@/entities/grammar-input'
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

import s from './GrammarLesson.module.scss'

export const GrammarLesson = observer(() => {
  const {
    getLessonInfoResponse: { data: lessonInfo, status },
  } = lessonApiStore

  const {
    selectedLessonStore: { selectedLesson },
  } = selectedLessonStore

  const color = useGetLessonColor('grammar')

  const [submitted, setSubmitted] = useState(false)
  const [lessonResult, setLessonResult] =
    useState<LessonResult>('bad')

  const handleSubmit = () => {
    setSubmitted(true)

    const random = Math.random()

    if (selectedLesson?.lessonMode === 'easy') {
      if (random > 0.6) {
        setLessonResult('good')
      } else if (random > 0.3) {
        setLessonResult('normal')
      } else {
        setLessonResult('bad')
      }
    } else {
      if (random > 0.5) {
        setLessonResult('good')
      } else {
        setLessonResult('bad')
      }
    }
  }

  const render = (data: LessonInfoApiResponseData) => {
    return (
      <>
        <div className={s.grammarLesson}>
          <GrammarInput words={data.type === 'grammar' ? data.lesson_data.variants : []} />
        </div>
        {submitted ? (
          <LessonOverview
            lessonMode={selectedLesson?.lessonMode}
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
      renderContent={(data) => render(data)}
    />
  )
})
