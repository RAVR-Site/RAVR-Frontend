import { Outlet, useLocation } from 'react-router-dom'

import { Layout } from '@/widgets/layout'
import { WrapperLesson } from '@/widgets/wrapper-lesson'

import s from './Vocabulary.module.scss'

const Vocabulary = () => {
  const { pathname } = useLocation()

  const isLesson =
    pathname.includes('/lesson') &&
    !pathname.includes('/info')

  if (isLesson) {
    return (
      <Layout type={'lesson'} height={'100vh'}>
        <WrapperLesson lessonType={'vocabulary'}>
          <Outlet />
        </WrapperLesson>
      </Layout>
    )
  }

  return (
    <Layout padding={'1rem 1rem 3rem 1rem'} hasHeader>
      <section className={s.vocabulary}>
        <Outlet />
      </section>
    </Layout>
  )
}

export default Vocabulary
