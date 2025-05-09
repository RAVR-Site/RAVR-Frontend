import { Outlet } from 'react-router-dom'

import { Layout } from '@/widgets/layout'
import { LevelsNavigation } from '@/widgets/levels-nav'

import s from './Grammar.module.scss'

const Grammar = () => {
  return (
    <Layout padding={'1rem 1rem 2.5rem 1rem'} hasHeader>
      <section className={s.grammar}>
        <Outlet />
      </section>
    </Layout>
  )
}

export default Grammar
