import { Layout } from '@/widgets/layout'
import { LevelsNavigation } from '@/widgets/levels-nav'

import s from './Vocabulary.module.scss'

const Vocabulary = () => {
  return (
    <Layout padding={'1rem 1rem 3rem 1rem'} hasHeader>
      <section className={s.vocabulary}>
        <LevelsNavigation lessonType={'vocabulary'} />
      </section>
    </Layout>
  )
}

export default Vocabulary
