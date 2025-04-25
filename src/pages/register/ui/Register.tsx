import { Link } from 'react-router-dom'

import { RegisterForm } from '@/features/register/ui/RegisterForm'
import { Logo, P } from '@/shared/ui'
import { Layout } from '@/widgets/layout'

import s from './Register.module.scss'

const Register = () => {
  return (
    <Layout height={'100vh'}>
      <section className={s.registerPage}>
        <div className={s.top}>
          <Logo color={'purple'} hasMargin />
          <div className={s.text}>
            <P type={'bigTitle'} color={'black'}>
              SIGN UP
            </P>
            <div className={s.smallText}>
              <P color={'black'}>
                Already have an account ?
              </P>
              <Link to={'/login'}>
                <P color={'purple'}>Log In</P>
              </Link>
            </div>
          </div>
        </div>
        <RegisterForm />
      </section>
    </Layout>
  )
}

export default Register
