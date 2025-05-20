import Cookies from 'js-cookie'
import { describe, expect, it } from 'vitest'

import { saveAccessToken, getAccessToken, removeAccessToken } from './tokenUtils'


describe('tokenUtils', () => {
  it('should return token', () => {
    const token = saveAccessToken('testToken')

    expect(token).toBeDefined()
    expect(Cookies.get('access_token')).toBe('testToken')
  })

  it('should return token', () => {
    const token = saveAccessToken('testToken')

    expect(token).toBeDefined()

    const tokenFromStorage = getAccessToken()

    expect(tokenFromStorage).toBe('testToken')
  })

  it('should remove token', () => {
    const token = saveAccessToken('testToken')

    expect(token).toBeDefined()

    removeAccessToken()

    const tokenFromStorage = getAccessToken()

    expect(tokenFromStorage).toBeNull()
  })
})


