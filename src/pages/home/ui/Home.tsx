import { Layout } from '@/widgets/layout'
import { MainNavigation } from '@/widgets/main-nav'

import s from './Home.module.scss'

const Home = () => {
  return (
    <Layout padding={'1rem 1rem 3rem 1rem'} hasHeader>
      <section className={s.home}>
        <MainNavigation />
      </section>
    </Layout>
  )
}

export default Home
