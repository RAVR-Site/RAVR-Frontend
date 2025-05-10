import { Outlet, useLocation } from 'react-router-dom'

import { Layout } from '@/widgets/layout'
import { WrapperLesson } from '@/widgets/wrapper-lesson'

import s from './Grammar.module.scss'

const Grammar = () => {
  const { pathname } = useLocation()

  const isLesson =
    pathname.includes('/lesson') &&
    !pathname.includes('/info')

  if (isLesson) {
    return (
      <Layout type={'lesson'} height={'100vh'}>
        <WrapperLesson lessonType={'grammar'}>
          <Outlet />
        </WrapperLesson>
      </Layout>
    )
  }

  return (
    <Layout padding={'1rem 1rem 2.5rem 1rem'} hasHeader>
      <section className={s.grammar}>
        <Outlet />
      </section>
    </Layout>
  )
}

export default Grammar
