import { UseFormReset } from 'react-hook-form'
import { NavigateFunction } from 'react-router-dom'

import { saveTokenToStorage } from '@/shared/lib/token-utils'
import {
  LoginRequestData,
  LoginResponse,
  RegisterRequestData,
  RegisterResponse,
} from '@/shared/model/types'
import { makeAutoObservable } from 'mobx'
import {
  mobxSaiFetch as mobxQuery,
  mobxSaiHandler as mobxQueryHandler,
  MobxSaiInstance as MobxQueryInstance,
} from 'mobx-toolbox'

import { registerApi } from '../api/registerApi'

class RegisterStore {
  constructor() {
    makeAutoObservable(this)
  }

  // API
  registerResponse: MobxQueryInstance<RegisterResponse> = {}

  registerRequest = async (
    body: RegisterRequestData ,
    reset: UseFormReset<RegisterRequestData>,
    navigate: NavigateFunction
  ) => {
    const newBody = {
      username: body.username,
      password: body.password,
      email: body.email,
    }

    this.registerResponse = mobxQuery(registerApi(newBody))

    mobxQueryHandler(
      this.registerResponse,
      () => {
        navigate('/login')
      },
      error => {
        console.log(error)
        reset()
      }
    )
  }
}

export const registerStore = new RegisterStore()
