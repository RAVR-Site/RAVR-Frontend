import { UseFormReset } from 'react-hook-form'
import { NavigateFunction } from 'react-router-dom'

import { saveTokenToStorage } from '@/shared/lib/utils/token-utils'
import { makeAutoObservable } from 'mobx'
import {
  mobxSaiFetch as mobxQuery,
  mobxSaiHandler as mobxQueryHandler,
  MobxSaiInstance as MobxQueryInstance,
} from 'mobx-toolbox'

import { login } from '../api/loginApi'
import {
  LoginRequestData,
  LoginResponse,
} from '../model/types'

class LoginStore {
  constructor() {
    makeAutoObservable(this)
  }

  // API
  loginResponse: MobxQueryInstance<LoginResponse> = {}

  loginRequest = async (
    body: LoginRequestData,
    reset: UseFormReset<LoginRequestData>,
    navigate: NavigateFunction
  ) => {
    this.loginResponse = mobxQuery(login(body))

    mobxQueryHandler(
      this.loginResponse,
      response => {
        saveTokenToStorage(response.data.accessToken)

        navigate('/')
      },
      error => {
        console.log(error)
        reset()
      }
    )
  }
}

export const loginStore = new LoginStore()
