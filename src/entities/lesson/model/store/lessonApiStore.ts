import { showNotification } from '@/features/notifications';
import { timerStore } from '@/shared/ui/Timer';
import { makeAutoObservable } from 'mobx';
import {
  mobxSaiFetch as mobxQuery,
  mobxSaiHandler as mobxQueryHandler,
  MobxSaiInstance as MobxQueryInstance,
  mobxState,
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
    this.getLessonInfoResponse = mobxQuery(lessonApi.getLessonInfo(body))

    mobxQueryHandler(
      this.getLessonInfoResponse,
      (data) => {
        console.log(data)
      }, (error) => {
        console.log(error)
      })
  }

  saveLessonResultState = mobxState<{ data: LessonResultApiRequestData } | null>(null)('saveLessonResult')

  // LESSON RESULT API
  setLessonResultResponse: MobxQueryInstance<LessonResultApiResponse> = {}

  setLessonResultRequest = async (body: LessonResultApiRequestData) => {
    const { isTimeEndStore: { isTimeEnd } } = timerStore

    const bodyWithEarnedExperience = {
      ...body,
      lessonId: body.lessonId.toString(),
      earnedExperience: isTimeEnd ? 0 : body.earnedExperience,
      completionTime: body.completionTime
    }

    this.saveLessonResultState.setSaveLessonResult({ data: bodyWithEarnedExperience })

    this.setLessonResultResponse = mobxQuery(() => lessonApi.setLessonResult(bodyWithEarnedExperience))

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
