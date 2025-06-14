import { useState } from 'react'

import { GrammarInput } from '@/entities/grammar-input'
import {
  LessonResult,
  selectedLessonStore,
  useGetLessonColor,
} from '@/entities/lesson'
import { LessonOverview } from '@/entities/lesson-overview'
import { Button } from '@/shared/ui'

import s from './GrammarLesson.module.scss'

export const GrammarLesson = () => {
  const {
    selectedLessonStore: { selectedLesson },
  } = selectedLessonStore

  const color = useGetLessonColor('grammar')

  const [submitted, setSubmitted] = useState(false)
  const [lessonResult, setLessonResult] =
    useState<LessonResult>('bad')

  const wordsArr = [
    ['Is', 'is', 'is', 'is', 'is', 'is', 'is'],
    ['Is', 'is', 'is', 'is', 'is', 'is', 'is'],
    ['Is', 'is', 'is', 'is', 'is', 'is', 'is'],
  ]

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

  return (
    <>
      <div className={s.grammarLesson}>
        <GrammarInput words={wordsArr[0]} />
        <GrammarInput words={wordsArr[1]} />
        <GrammarInput words={wordsArr[2]} />
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
