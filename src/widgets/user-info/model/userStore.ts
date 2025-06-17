import { makeAutoObservable } from 'mobx';
import {
  mobxSaiFetch as mobxQuery,
  MobxSaiInstance as MobxQueryInstance,
  mobxSaiHandler as mobxQueryHandler,
} from 'mobx-toolbox';

import { userApi } from '../api/userApi';
import { UserResponse } from './types';

class UserStore {

  constructor() {
    makeAutoObservable(this)
  }

  getUserResponse: MobxQueryInstance<UserResponse> = {}

  getUserApiRequest = async () => {
    this.getUserResponse = mobxQuery(() => userApi.getUser())

    mobxQueryHandler(this.getUserResponse,
      data => {
        console.log(data)
      }, error => {
        console.log(error)
      })
  }
}

export const userStore = new UserStore()