import { notificationColors } from '@/shared/config/constants'
import cn from 'classnames'

import { P } from '../P/P'

import s from './NotificationUI.module.scss'

export const NotificationUI = ({
  type,
  text,
}: NotificationProps) => {
  return (
    <div className={cn(s.notification)}>
      <P color={notificationColors[type]}>{text}</P>
    </div>
  )
}

interface NotificationProps {
  type: 'success' | 'error' | 'warning' | 'loading'
  text: string
}
