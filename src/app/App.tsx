import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import {
  RouterProvider,
} from 'react-router-dom'

import { navigationStore } from '@/shared/model/navigationStore'

import '@/shared/styles/global.scss'

import { router } from './config/router'

export const App = observer(() => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
})
