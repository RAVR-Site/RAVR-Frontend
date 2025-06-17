import { LessonMode, LessonType } from '@/entities/lesson'
import { makeAutoObservable } from 'mobx'
import {
  mobxSaiFetch as mobxQuery,
  MobxSaiInstance as MobxQueryInstance,
  mobxSaiHandler as mobxQueryHandler,
} from 'mobx-toolbox';

import { ratingApi } from '../api/ratingApi';
import { RatingGetResponse } from './types';

class RatingStore {
  constructor() {
    makeAutoObservable(this)
  }

  getRatingApiResponse: MobxQueryInstance<RatingGetResponse> = {}

  getRatingApiRequest = async ({
    type,
    mode,
  }: {
    type?: LessonType
    mode?: LessonMode
  }) => {
    this.getRatingApiResponse = mobxQuery(() => ratingApi.getRating({}))

    mobxQueryHandler(this.getRatingApiResponse,
      (data) => {
        console.log(data)
      }, error => {
        console.log(error)
      })
  }
}

export const ratingStore = new RatingStore()