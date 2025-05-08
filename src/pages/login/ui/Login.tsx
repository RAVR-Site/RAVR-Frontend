import { Link } from 'react-router-dom'

import { LoginForm } from '@/features/login/ui/LoginForm'
import { Logo, P } from '@/shared/ui'
import { Layout } from '@/widgets/layout'

import s from './Login.module.scss'

const Login = () => {
  return (
    <Layout height={'100vh'}>
      <section className={s.loginPage}>
        <div className={s.top}>
          <Logo color={'blue'} hasMargin />
          <div className={s.text}>
            <P type={'bigTitle'} color={'black'}>
              LOG IN
            </P>
            <div className={s.smallText}>
              <P color={'black'}>New User?</P>
              <Link to={'/register  '}>
                <P color={'blue'}>Create an Account</P>
              </Link>
            </div>
          </div>
        </div>
        <LoginForm />
      </section>
    </Layout>
  )
}

export default Login
