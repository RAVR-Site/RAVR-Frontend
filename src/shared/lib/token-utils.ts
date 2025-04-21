import Cookies from 'js-cookie'

export const getAccessToken = () => {
  const accessToken = Cookies.get('access_token')

  return accessToken || null
}

export const saveTokenToStorage = (accessToken: string) => {
  Cookies.set('access_token', accessToken, {
    domain: 'localhost',
    sameSite: 'strict',
    expires: 360000,
  })
}

export const removeAccessToken = () => {
  Cookies.remove('access_token')
}
