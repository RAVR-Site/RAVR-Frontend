import { grammarLessonStore } from '@/entities/grammar-input/'
import { lessonApiStore } from '@/entities/lesson'
import { practiceLessonStore } from '@/features/practice-lesson'
import { vocabularyLessonStore } from '@/features/vocabulary-lesson'
import { makeAutoObservable } from 'mobx'

class ResetStore {
  constructor() {
    makeAutoObservable(this)
  }

  reset = () => {
    const { saveLessonResultState: { setSaveLessonResult }, setLessonResultResponse: { reset: resetLessonResult } } = lessonApiStore
    const { resetSelection } = vocabularyLessonStore
    const { setPickedVariants } = practiceLessonStore
    const { indexCoupleOfWordsState: { setIndexCoupleOfWords } } = grammarLessonStore

    resetSelection('all')
    setPickedVariants('clearAll')
    setIndexCoupleOfWords(0)
    setSaveLessonResult(null)
    resetLessonResult?.()
  }
} 

export const resetStore = new ResetStore()