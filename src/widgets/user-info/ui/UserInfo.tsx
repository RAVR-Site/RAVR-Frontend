import { observer } from 'mobx-react-lite'

import { AsyncDataRender, P } from '@/shared/ui'
import { EditIcon } from '@/shared/ui/icons'

import { UserResponseData } from '../model/types'
import { userStats } from '../model/userStats'
import { userStore } from '../model/userStore'

import s from './UserInfo.module.scss'

export const UserInfo = observer(() => {
  const {
    getUserResponse: { data, status },
  } = userStore

  const render = (data: UserResponseData) => {
    const userName =
      data.first_name && data.last_name
        ? `${data.first_name} ${data.last_name}`
        : data.username

    return (
      <div className={s.userInfo}>
        <EditIcon className={s.editIcon} />
        <div className={s.userInfoTop}>
          <P
            fontSize={48}
            fontFamily={'DaysOne'}
            color={'black'}
          >
            {userName}
          </P>
          <P fontSize={20} color={'black'}>
            {data.first_name && data.last_name
              ? data.username
              : ''}
          </P>
        </div>
        <div className={s.userStatsContainer}>
          <P
            fontSize={32}
            fontFamily={'DaysOne'}
            color={'black'}
          >
            Overview
          </P>
          <div className={s.userStats}>
            {Object.entries(data.stats).map(
              ([key, value]) => (
                <div key={key} className={s.userStatsItem}>
                  <div className={s.userStatsItemTitle}>
                    <P
                      fontSize={24}
                      fontFamily={'DaysOne'}
                      color={'black'}
                    >
                      {value}
                    </P>
                    <P
                      fontSize={24}
                      fontFamily={'DaysOne'}
                      color={'black'}
                    >
                      {
                        userStats[
                          key as keyof typeof userStats
                        ].title
                      }
                    </P>
                  </div>
                  <P fontSize={20} color={'black'}>
                    <P fontSize={20} color={'black'}>
                      {
                        userStats[
                          key as keyof typeof userStats
                        ].description
                      }
                    </P>
                  </P>
                </div>
              )
            )}
          </div>
        </div>
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
