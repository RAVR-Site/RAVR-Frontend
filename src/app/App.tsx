import { observer } from 'mobx-react-lite'
import { RouterProvider } from 'react-router-dom'

import '@/shared/styles/global.scss'

import { router } from './config/router'
import { Toast } from './config/toast'

export const App = observer(() => {
  return (
    <>
      <Toast />
      <RouterProvider router={router} />
      {/* <Loader
        loaderSize={{ width: 300, height: 300 }}
        color={'purple'}
      /> */}
    </>
  )
})
