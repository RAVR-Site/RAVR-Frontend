import { Layout } from '@/widgets/layout'

import s from './Home.module.scss'

const Home = () => {
  return (
    <Layout padding={'1rem 1rem 0 1rem'} hasHeader>
      <section className={s.home}>Home</section>
    </Layout>
  )
}

export default Home
