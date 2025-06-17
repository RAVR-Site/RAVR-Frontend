import { observer } from 'mobx-react-lite'

import { UserAvatar } from '@/features/user-avatar'
import { AsyncDataRender, P, TrendIcon } from '@/shared/ui'
import cn from 'classnames'

import { ratingStore } from '../model/ratingStore'
import { RatingGetApiResponse } from '../model/types'

import s from './RatingTableWidget.module.scss'

const mockRows = [
  {
    id: 1,
    name: 'Lily flower 76',
    number: 33,
    time: '01:39',
    xp: 854,
    isYou: false,
    avatar: '/public/assets/user-placeholder.svg',
  },
  {
    id: 2,
    name: 'You',
    number: 34,
    time: '01:40',
    xp: 754,
    isYou: true,
    avatar: '/public/assets/user-placeholder.svg',
  },
  {
    id: 3,
    name: 'User 8584',
    number: 35,
    time: '01:38',
    xp: 954,
    isYou: false,
    avatar: '/public/assets/user-placeholder.svg',
  },
  {
    id: 4,
    name: 'Lily flower 76',
    number: 36,
    time: '01:39',
    xp: 854,
    isYou: false,
    avatar: '/public/assets/user-placeholder.svg',
  },
  {
    id: 5,
    name: 'You',
    number: 37,
    time: '01:40',
    xp: 754,
    avatar: '/public/assets/user-placeholder.svg',
  },
  {
    id: 6,
    name: 'User 8584',
    number: 38,
    time: '01:38',
    xp: 954,
    isYou: false,
    avatar: '/public/assets/user-placeholder.svg',
  },
]

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
