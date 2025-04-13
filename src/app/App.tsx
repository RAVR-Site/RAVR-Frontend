import { RouterProvider } from 'react-router-dom'

import '@/shared/styles/global.scss'

import { router } from './config/router'

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
