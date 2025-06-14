import Cookies from 'js-cookie'

export const getAccessToken = () => {
  const accessToken = Cookies.get('access_token')

  return accessToken
}

export const saveAccessToken = (accessToken: string) => {
  const cookie = Cookies.set('access_token', accessToken, {
    domain: 'localhost',
    sameSite: 'strict',
    expires: 360000,
  })

  return cookie
}

export const removeAccessToken = () => {
 Cookies.remove('access_token')
}
