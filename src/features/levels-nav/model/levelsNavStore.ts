import { makeAutoObservable } from 'mobx';
import {
  mobxSaiFetch as mobxQuery,
  mobxSaiHandler as mobxQueryHandler,
  MobxSaiInstance as MobxQueryInstance,
} from 'mobx-toolbox';

import { levelsNavApi } from '../api/levelsNavApi';
import { LevelsNavApiRequestData, LevelsNavApiResponse } from './types';

class LevelsNavStore {
  constructor() {
    makeAutoObservable(this)
  }

  // LEVELS NAV API

  getLevelsNavResponse: MobxQueryInstance<LevelsNavApiResponse> = {}

  getLevelsNavRequest = (body: LevelsNavApiRequestData) => {
    this.getLevelsNavResponse = mobxQuery(levelsNavApi.getLevelsNav(body),
      {
        id: `getLevelsNav-${body.lessonType}`,
        fetchIfHaveData: false,
      }
    )

    mobxQueryHandler(
      this.getLevelsNavResponse,
      (data) => {
        console.log(data)
      }, (error) => {
        console.log(error)
      })
  }
}

export const levelsNavStore = new LevelsNavStore()
