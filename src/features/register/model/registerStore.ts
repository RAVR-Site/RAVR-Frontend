import { UseFormReset } from 'react-hook-form';
import { NavigateFunction } from 'react-router-dom';
import { toast } from 'react-toastify';

import { showNotification } from '@/features/notifications';
import { makeAutoObservable } from 'mobx';
import {
  mobxSaiFetch as mobxQuery,
  mobxSaiHandler as mobxQueryHandler,
  MobxSaiInstance as MobxQueryInstance,
} from 'mobx-toolbox';

import { registerApi } from '../api/registerApi';
import { RegisterRequestData, RegisterResponse } from '../model/types';

class RegisterStore {
  constructor() {
    makeAutoObservable(this)
  }

  // API
  registerResponse: MobxQueryInstance<RegisterResponse> = {}

  registerRequest = (
    body: RegisterRequestData,
    reset: UseFormReset<RegisterRequestData>,
    navigate: NavigateFunction
  ) => {
    const newBody = {
      username: body.username,
      password: body.password,
      email: body.email,
    }

    this.registerResponse = mobxQuery(registerApi(newBody))

    const toastLoadingId = showNotification('loading', 'Registering...')

    mobxQueryHandler(
      this.registerResponse,
      () => {
        navigate('/login')

        setTimeout(() => {
          toast.dismiss(toastLoadingId)
        }, 750)

        showNotification('success', 'Registration successful', 2000)
      },
      error => {
        console.log(error)
        reset()

        
        setTimeout(() => {
          toast.dismiss(toastLoadingId)
        }, 750)

        showNotification('error', 'Registration failed: ' + error.response.data.message)
      }
    )
  }
}

export const registerStore = new RegisterStore()
