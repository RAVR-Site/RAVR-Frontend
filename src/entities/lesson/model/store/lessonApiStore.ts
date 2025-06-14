import { showNotification } from '@/features/notifications';
import { makeAutoObservable } from 'mobx';
import {
  mobxSaiFetch as mobxQuery,
  mobxSaiHandler as mobxQueryHandler,
  MobxSaiInstance as MobxQueryInstance,
} from 'mobx-toolbox';

import { lessonApi } from '../../api/lessonApi';
import { LessonInfoApiRequestData, LessonInfoApiResponse, LessonResultApiRequestData, LessonResultApiResponse } from '../types';

class LessonApiStore {
  constructor() {
    makeAutoObservable(this)
  }

  // LESSON INFO API

  getLessonInfoResponse: MobxQueryInstance<LessonInfoApiResponse> = {}

  getLessonInfoRequest = async (body: LessonInfoApiRequestData) => {
    this.getLessonInfoResponse = mobxQuery(lessonApi.getLessonInfo(body),
      {
        id: `${body.id}`,
        fetchIfHaveData: false,
        fetchIfPending: false,
        cacheSystem: {
          setCache: () => { }
        }
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

  // LESSON RESULT API
  setLessonResultResponse: MobxQueryInstance<LessonResultApiResponse> = {}

  setLessonResultRequest = async (body: LessonResultApiRequestData) => {
    this.setLessonResultResponse = mobxQuery(lessonApi.setLessonResult(body))

    mobxQueryHandler(
      this.setLessonResultResponse,
      (data) => {
        console.log(data)
      }, (error) => {
        if (error.response.status === 401 && error.response.data.message === 'missing authorization header') {
          showNotification('warning', 'You are not authorized to save the result')
        }
      })
  }
}

export const lessonApiStore = new LessonApiStore()
