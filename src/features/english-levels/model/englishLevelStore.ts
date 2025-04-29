import { makeAutoObservable } from 'mobx'
import {
  mobxSaiFetch as mobxQuery,
  mobxSaiHandler as mobxQueryHandler,
  MobxSaiInstance as MobxQueryInstance,
  mobxState,
} from 'mobx-toolbox'

import { englishLevelsApi } from '../api/englishLevelsApi'
import { EnglishLevelApiRequestData, EnglishLevelApiResponse, EnglishLevelVariant } from './types'

class EnglishLevelStore {

  constructor() {
    makeAutoObservable(this)
  }

  // STATE
  currentEnglishLevel: EnglishLevelVariant = 'A1'

  // API
  switchEnglishLevelResponse: MobxQueryInstance<EnglishLevelApiResponse> = {}

  switchEnglishLevelRequest = async (body: EnglishLevelApiRequestData) => {
    this.switchEnglishLevelResponse = mobxQuery(englishLevelsApi.changeLevel(body), {
      id: 'switchEnglishLevel'
    })

    mobxQueryHandler(
      this.switchEnglishLevelResponse,
      response => {
        this.currentEnglishLevel = response.data.changeLevel
      },
      error => {
        this.currentEnglishLevel = body
        console.log(error)
      }
    )
  }
}

export const englishLevelStore = new EnglishLevelStore()
