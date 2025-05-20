import { makeAutoObservable } from 'mobx'
import {
  mobxSaiFetch as mobxQuery,
  mobxSaiHandler as mobxQueryHandler,
  MobxSaiInstance as MobxQueryInstance,
  mobxState,
} from 'mobx-toolbox'

import { englishLevelsApi } from '../api/englishLevelsApi'
import { EnglishLevelApiResponse, EnglishLevelVariant } from './types'

class EnglishLevelStore {

  constructor() {
    makeAutoObservable(this)
  }

  // STATE
  currentEnglishLevel = mobxState<EnglishLevelVariant>('A1')('currentEnglishLevel', { reset: true })

  // API
  switchEnglishLevelResponse: MobxQueryInstance<EnglishLevelApiResponse> = {}

  switchEnglishLevelRequest = async (body: EnglishLevelVariant) => {
    this.switchEnglishLevelResponse = mobxQuery(englishLevelsApi.changeLevel(body), {
      id: 'switchEnglishLevel'
    })

    mobxQueryHandler(
      this.switchEnglishLevelResponse,
      response => {
        this.currentEnglishLevel.setCurrentEnglishLevel(response.data.changeLevel)
      },
      error => {
        console.log(error)
      }
    )
  }
}

export const englishLevelStore = new EnglishLevelStore()
