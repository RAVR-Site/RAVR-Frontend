import { makeAutoObservable } from 'mobx';
import {
  mobxSaiFetch as mobxQuery,
  mobxSaiHandler as mobxQueryHandler,
  MobxSaiInstance as MobxQueryInstance,
} from 'mobx-toolbox';

import { lessonApi } from '../../api/lessonApi';
import { LessonInfoApiResponse, LessonInfoApiRequestData } from '../types';

class LessonApiStore {
  constructor() {
    makeAutoObservable(this)
  }

  // LESSON INFO API

  getLessonInfoResponse: MobxQueryInstance<LessonInfoApiResponse> = {}

  getLessonInfoRequest = async (body: LessonInfoApiRequestData) => {
    this.getLessonInfoResponse = mobxQuery(lessonApi.getLessonInfo(body),
      {
        id: `${body.lessonType}-${body.levelNumber}`,
        fetchIfHaveData: false,
        fetchIfPending: false
      }
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

export const lessonApiStore = new LessonApiStore()
