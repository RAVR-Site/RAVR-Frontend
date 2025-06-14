import { lessonApiStore } from '@/entities/lesson'
import { sentencesSwitcherStore } from '@/features/practice-lesson/ui/sentences-switcher'
import { makeAutoObservable } from 'mobx'
import { mobxState } from 'mobx-toolbox'

class PracticeLessonStore {
  constructor() {
    makeAutoObservable(this)
  }

  pickedVariants: number[] = [0, 0]

  setPickedVariants = (variant: number | 'clearAll') => {
    if (variant === 'clearAll') {
      this.pickedVariants = []

      return
    }

    const index = this.sentencesSlice()[0] / 2
    const sentencesCount = this.sentencesCountStore.sentencesCount

    const { answerIndexStore: { setAnswerIndex } } = sentencesSwitcherStore

    if (!this.pickedVariants[sentencesCount - 1] && this.pickedVariants[sentencesCount - 1] !== 0) {
      setAnswerIndex(prev => {
        if (prev === sentencesCount) return prev

        return prev + sentencesCount / 2
      })
    }

    this.pickedVariants[index] = variant
  }

  sentencesCountStore = mobxState<number>(1)('sentencesCount')

  sentencesSlice = () => {
    const { answerIndexStore } = sentencesSwitcherStore

    const start = this.sentencesCountStore.sentencesCount * (answerIndexStore.answerIndex - 1)
    const end = start + this.sentencesCountStore.sentencesCount

    return [start, end]
  }

  getResultsLesson = () => {
    const { getLessonInfoResponse: { data: lessonInfo } } = lessonApiStore

    const comparisonVariants = [this.pickedVariants[0], this.pickedVariants[1] + this.sentencesCountStore.sentencesCount]

    if (lessonInfo?.data.lesson_data.answer_index === comparisonVariants) {
      return 'good'
    } else {
      return 'bad'
    }
  }
}

export const practiceLessonStore = new PracticeLessonStore()
