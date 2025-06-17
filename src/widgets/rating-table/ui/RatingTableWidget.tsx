import { observer } from 'mobx-react-lite'

import { UserAvatar } from '@/features/user-avatar'
import { AsyncDataRender, P, TrendIcon } from '@/shared/ui'
import cn from 'classnames'

import { ratingStore } from '../model/ratingStore'
import { RatingGetApiResponse } from '../model/types'

import s from './RatingTableWidget.module.scss'


export const RatingTableWidget = observer(() => {
  const {
    getRatingApiResponse: { data, status },
  } = ratingStore

  const render = (data: RatingGetApiResponse[]) => {
    console.log(data)

    return (
      <div className={s.tableWrapper}>
        {data.map((row, index) => {
          // Определяем, находится ли текущая строка ПЕРЕД строкой "You"
          const isBeforeYou = index === 0

          return (
            <div
              key={row.user_id}
              className={cn(
                s.row,
                index === 1 && s.rowActive,
                isBeforeYou && s.rowBeforeYou
              )}
            >
              <UserAvatar
                user={{ avatar: '' }}
                blockSize={{ width: 60, height: 60 }}
                avatarSize={{ width: 33, height: 33 }}
                notLink
              />
              <div className={s.info}>
                <P fontSize={20} color={'black'}>
                  {row.username}
                </P>
                <P
                  fontSize={20}
                  fontFamily={'DaysOne'}
                  color={'black'}
                >
                  № {row.position}
                </P>
              </div>

              <div className={s.timeAndXp}>
                <TrendIcon trend={row.trend} />
                <P
                  fontSize={20}
                  fontFamily={'DaysOne'}
                  color={'black'}
                >
                  {row.experience} XP
                </P>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <AsyncDataRender
      status={status}
      data={data?.data}
      renderContent={data => render(data)}
    />
  )
})
