import { CSSProperties } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { TUser } from '@/entities/user'
import { getAccessToken } from '@/shared/lib/utils/token-utils'
import { Size } from '@/shared/model/types'

import s from './UserAvatar.module.scss'

export const UserAvatar = ({
  user,
  blockSize,
  avatarSize,
  hasBorder = false,
}: UserAvatarProps) => {
  const navigate = useNavigate()

  const userAvatar = user.avatar
    ? `${user?.avatar}`
    : '/public/assets/user-placeholder.svg'

  const handleAvatarClick = () => {
    console.log(getAccessToken())
    if (getAccessToken()) {
      navigate('/user')
    } else {
      navigate('/login')
    }
  }

  return (
    <div
      onClick={handleAvatarClick}
      className={s.avatar}
      style={
        {
          maxWidth: blockSize?.width,
          maxHeight: blockSize?.height,
          border: hasBorder ? '6px solid black' : '',
        } as CSSProperties
      }
      role={'button'}
      tabIndex={5}
    >
      <img
        src={userAvatar}
        className={s.avatarImage}
        style={
          {
            width: avatarSize?.width,
            height: avatarSize?.height,
          } as CSSProperties
        }
        alt={'Your avatar'}
      />
    </div>
  )
}

interface UserAvatarProps {
  user: Pick<TUser, 'avatar'>
  blockSize?: Size
  avatarSize?: Size
  hasBorder?: boolean
}
