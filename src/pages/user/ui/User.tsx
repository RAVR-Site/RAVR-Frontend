import { observer } from 'mobx-react-lite'
import { useLayoutEffect } from 'react'

import { Layout } from '@/widgets/layout'
import { UserInfo, userStore } from '@/widgets/user-info'

import s from './User.module.scss'

const User = observer(() => {
  const { getUserApiRequest } = userStore

  useLayoutEffect(() => {
    getUserApiRequest()
  }, [getUserApiRequest])

  return (
    <Layout height={'100vh'}>
      <section className={s.user}>
        <UserInfo />
      </section>
    </Layout>
  )
})

export default User
