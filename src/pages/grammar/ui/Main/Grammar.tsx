
import { Layout } from '@/widgets/layout'

import s from './Grammar.module.scss'

const Grammar = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <Layout padding={'1rem 1rem 2.5rem 1rem'} hasHeader>
      <section className={s.grammar}>{children}</section>
    </Layout>
  )
}

export default Grammar
