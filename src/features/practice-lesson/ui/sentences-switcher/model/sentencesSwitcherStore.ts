import { computed, makeAutoObservable } from 'mobx'
import { mobxState } from 'mobx-toolbox'

class SentencesSwitcherStore {
  constructor() {
    makeAutoObservable(this)
  }

  answerIndexStore = mobxState<number>(1)('answerIndex')
  
}

export const sentencesSwitcherStore = new SentencesSwitcherStore()

