import { Layout } from '@/widgets/layout'
import { LevelsNavigation } from '@/widgets/levels-nav'

import s from './Grammar.module.scss'

const Grammar = () => {
  return (
    <Layout padding={'1rem 1rem 3rem 1rem'} hasHeader>
      <section className={s.grammar}>
        <LevelsNavigation lessonType={'grammar'} />
      </section>
    </Layout>
  )
}

export default Grammar
