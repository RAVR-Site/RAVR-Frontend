import { observer } from 'mobx-react-lite'
import { CSSProperties, useLayoutEffect } from 'react'

import { ratingTabsStore } from '@/features/rating-switcher'
import { Layout } from '@/widgets/layout'
import {
  ratingStore,
  RatingTableWidget,
} from '@/widgets/rating-table'
import { RatingTabsWidget } from '@/widgets/rating-tabs'

import s from './Rating.module.scss'

const Rating = observer(() => {
  const {
    mainColorStore: { mainColor },
  } = ratingTabsStore

  const { getRatingApiRequest } = ratingStore

  useLayoutEffect(() => {
    getRatingApiRequest({})
  }, [getRatingApiRequest])

  return (
    <Layout padding={'3rem 4rem'}>
      <section
        className={s.rating}
        style={
          { '--color-main': mainColor } as CSSProperties
        }
      >
        <RatingTabsWidget />
        <RatingTableWidget />
      </section>
    </Layout>
  )
})

export default Rating
