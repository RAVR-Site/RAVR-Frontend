import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { setNavigate } from '@/shared/lib/utils/navigate-to/navigateTo'
import { Layout } from '@/widgets/layout'
import { MainNavigation } from '@/widgets/main-nav'

import s from './Home.module.scss'

const Home = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setNavigate(navigate)
  }, [navigate])

  return (
    <Layout padding={'1rem 1rem 3rem 1rem'} hasHeader>
      <section className={s.home}>
        <MainNavigation />
      </section>
    </Layout>
  )
}

export default Home
