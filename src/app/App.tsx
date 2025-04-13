import { RouterProvider } from 'react-router-dom'

import { Layout } from '@/widgets/layout'

import '@/shared/styles/global.scss'

import { router } from './config/router'

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
