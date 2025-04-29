import { makeAutoObservable } from 'mobx'
import {
  mobxSaiFetch as mobxQuery,
  mobxSaiHandler as mobxQueryHandler,
  MobxSaiInstance as MobxQueryInstance,
} from 'mobx-toolbox'

import { levelsNavApi } from '../api/levelsNavApi'
import { LessonInfoApiRequestData, LessonInfoApiResponse, LevelsNavApiRequestData, LevelsNavApiResponse } from './types'

class LevelsNavStore {
  constructor() {
    makeAutoObservable(this)
  }

  // LEVELS NAV API

  getLevelsNavResponse: MobxQueryInstance<LevelsNavApiResponse> = {}

  getLevelsNavRequest = async (body: LevelsNavApiRequestData) => {
    this.getLevelsNavResponse = mobxQuery(levelsNavApi.getLevelsNav(body),
      { id: 'getLevelsNav' }
    )

    mobxQueryHandler(
      this.getLevelsNavResponse,
      (data) => {
        console.log(data)
      }, (error) => {
        console.log(error)
      })
  }

  // LESSON INFO API
  
  getLessonInfoResponse: MobxQueryInstance<LessonInfoApiResponse> = {}

  getLessonInfoRequest = async (body: LessonInfoApiRequestData) => {
    this.getLessonInfoResponse = mobxQuery(levelsNavApi.getLessonInfo(body),
      { id: `${body.lessonType}-${body.levelNumber}` }
    )

    mobxQueryHandler(
      this.getLessonInfoResponse,
      (data) => {
        console.log(data)
      }, (error) => {
        console.log(error)
      })
  }
}

export const levelsNavStore = new LevelsNavStore()
