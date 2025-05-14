import { Outlet } from 'react-router-dom'

import { Layout } from '@/widgets/layout'

import s from './Practice.module.scss'

const Practice = () => {

  return (
    <Layout padding={'1rem 1rem 3rem 1rem'} hasHeader>
      <section className={s.practice}>
        <Outlet />
      </section>
    </Layout>
  )
}

export default Practice
