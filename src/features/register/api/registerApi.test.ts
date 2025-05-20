import { api } from '@/shared/api/axios-instanse';
import { describe, expect, it, vi } from 'vitest';

import '@testing-library/jest-dom/vitest';

import { registerApi } from './registerApi';


describe('test register api', () => {
  it('register correct', async () => {
    const mockResponse = {
      success: true,
      message: 'Пользователь успешно зарегистрирован',
      timestamp: '2025-04-25T12:54:40.079582041',
      data: {
        id: 5,
        username: 'hukasfki',
        email: 'asfasf@gma.ru'
      }
    };

    // мокаем ТОЛЬКО для этого теста
    const mockedApi = vi.spyOn(api, 'post').mockResolvedValueOnce({ data: mockResponse });

    const regData = {
      username: 'hukasfki',
      email: 'asfasf@gma.ru',
      password: '12345678'
    }

    const result = await registerApi(regData)

    expect(result).toEqual(mockResponse)

    mockedApi.mockRestore();
  })

  it('register incorrect, user with this name already exists', async () => {
    const regData = {
      username: 'hukki',
      email: 'asfasf@gma.ru',
      password: '12345678'
    }

    try {
      await registerApi(regData)
    } catch (error: any) {
      expect(error.response.status).toBe(400);
      expect(error.response.data).toEqual(expect.objectContaining({
        success: false,
        message: 'Пользователь с таким именем уже существует',
        data: null
      }))
    }

  })

  it('register incorrect, user with this email already exists', async () => {
    const regData = {
      username: 'hukki1234',
      email: 'ryurickryurik@yandex.ru',
      password: '12345678'
    }

    try {
      await registerApi(regData)
    } catch (error: any) {
      expect(error.response.status).toBe(400);
      expect(error.response.data).toEqual(expect.objectContaining({
        success: false,
        message: 'Пользователь с таким email уже существует',
        data: null
      }))
    }
  })
})