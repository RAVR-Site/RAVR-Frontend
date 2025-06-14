import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'

import {
  lessonApiStore,
  selectedLessonStore,
  useGetLessonColor,
  useGetLessonData,
} from '@/entities/lesson'
import { LessonOverview } from '@/entities/lesson-overview'
import { Button } from '@/shared/ui'

import { vocabularyLessonStore } from '../../model/vocabularyLessonStore'
import { WordGroup } from '../WordGroup/WordGroup'

import s from './VocabularyLesson.module.scss'

export const VocabularyLesson = observer(
  ({}: VocabularyLessonProps) => {
    // STORES
    const {
      setVocabularyWords,
      resetSelection,
      lessonIsCompleted,
      getResultsLesson,
    } = vocabularyLessonStore

    const {
      getLessonInfoResponse: { data: lessonData },
    } = lessonApiStore

    const {
      selectedLessonState: { selectedLesson },
    } = selectedLessonStore

    // HOOKS
    const color = useGetLessonColor('vocabulary')
    const data = useGetLessonData(
      lessonData?.data,
      'vocabulary'
    )

    useEffect(() => {
      if (!data) return

      setVocabularyWords(data.variants)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    if (!data) return null

    const renderRussianWords = () => {
      const russianWords = Object.values(data.variants)
      const isHardMode =
        selectedLesson?.lessonMode === 'hard'

      if (isHardMode) {
        return (
          <>
            <WordGroup
              words={russianWords.slice(0, 3)}
              type={'russian'}
            />
            <WordGroup
              words={russianWords.slice(3, 7)}
              type={'russian'}
            />
            <WordGroup
              words={russianWords.slice(7)}
              type={'russian'}
            />
          </>
        )
      }

      return (
        <>
          <WordGroup
            words={russianWords.slice(0, 2)}
            type={'russian'}
          />
          <WordGroup
            words={russianWords.slice(2)}
            type={'russian'}
          />
        </>
      )
    }

    const renderEnglishWords = () => {
      const englishWords = Object.keys(data.variants)

      return (
        <>
          <WordGroup
            words={englishWords.slice(0, 4)}
            type={'english'}
          />
          <WordGroup
            words={englishWords.slice(4)}
            type={'english'}
          />
        </>
      )
    }

    return (
      <>
        <div className={s.vocabularyLesson}>
          <div className={s.russianWords}>
            {renderRussianWords()}
          </div>
          <div className={s.line} />
          <div className={s.englishWords}>
            {renderEnglishWords()}
          </div>
        </div>
        <div className={s.buttons}>
          {lessonIsCompleted ? (
            <LessonOverview
              lessonResult={getResultsLesson(
                selectedLesson?.lessonMode
              )}
              lessonMode={selectedLesson?.lessonMode}
            />
          ) : (
            <>
              <Button
                backgroundColor={
                  color.clear.backgroundColor
                }
                borderColor={color.clear.borderColor}
                textColor={color.clear.textColor}
                padding={'0.25rem 0'}
                width={'220px'}
                onClick={() => resetSelection('all')}
              >
                Clear All
              </Button>
              <Button
                backgroundColor={
                  color.submit.backgroundColor
                }
                textColor={color.submit.textColor}
                padding={'0.25rem 0'}
                width={'220px'}
              >
                Submit
              </Button>
            </>
          )}
        </div>
      </>
    )
  }
)

interface VocabularyLessonProps {}
