import { api } from '@/shared/api/axios-instanse';
import { describe, expect, it, Mock, Mocked, vi } from 'vitest';

import '@testing-library/jest-dom/vitest'

import { login } from './loginApi';


describe('test login api', () => {
  it('login correct', async () => {

    const loginData = {
      username: 'hukasfki',
      password: '12345678'
    }

    const result = await login(loginData)

    expect(result).toEqual(expect.objectContaining({
      success: true,
      message: 'Вход выполнен успешно',
    }))

  })

  it('login incorrect, password or name incorrect', async () => {
    const regData = {
      username: 'hukki',
      email: 'asfasf@gma.ru',
      password: '1234567'
    }

    try {
      const result = await login(regData)
    } catch (error: any) {
      expect(error.response.status).toBe(401);
      expect(error.response.data).toEqual(expect.objectContaining({
        success: false,
        message: 'Неверное имя пользователя или пароль',
        data: null
      }))
    }

  })
})