import { makeAutoObservable } from 'mobx'
import { mobxState } from 'mobx-toolbox'

class TimerStore {
  constructor() {
    makeAutoObservable(this)
  }

  allSecondsStore = mobxState<number>(0)('allSeconds')
  secondsStore = mobxState<number>(0)('seconds')
  isTimeEndStore = mobxState<boolean>(false)('isTimeEnd')

  getSpentTime = () => {
    return this.allSecondsStore.allSeconds - this.secondsStore.seconds
  }
}

export const timerStore = new TimerStore()