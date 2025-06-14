import { makeAutoObservable } from 'mobx'
import { mobxState } from 'mobx-toolbox'

class GrammarLessonStore {
  constructor() {
    makeAutoObservable(this)
  }

  indexCoupleOfWordsState = mobxState<number>(0)('indexCoupleOfWords')
}

export const grammarLessonStore = new GrammarLessonStore()