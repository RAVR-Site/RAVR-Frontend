import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'

import '@/shared/styles/global.scss'

import { router } from './config/router'

export const App = observer(() => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
})
