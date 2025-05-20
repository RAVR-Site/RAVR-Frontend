import { toast } from 'react-toastify'

import { notificationColors } from '@/shared/config/constants'
import { NotificationType } from '@/shared/model/types'
import { NotificationUI } from '@/shared/ui'

import { getNotificationIcon } from './getNotificationIcon'

import s from './showNotification.module.scss'

export const showNotification = (
  type: NotificationType,
  text: string,
  autoClose?: number
) => {
  const toastOptions = {
    style: {
      border: `2px solid ${notificationColors[type]}`,
    },
    className: s.toastContainer,
    icon: getNotificationIcon(type),
    autoClose: autoClose ?? 5000,
  }

  switch (type) {
    case 'success':
      return toast.success(
        <NotificationUI type={type} text={text} />,
        toastOptions
      )
    case 'error':
      return toast.error(
        <NotificationUI type={type} text={text} />,
        toastOptions
      )
    case 'warning':
      return toast.warning(
        <NotificationUI type={type} text={text} />,
        toastOptions
      )
    case 'loading':
      return toast.loading(
        <NotificationUI type={type} text={text} />,
        toastOptions
      )
    default:
      return toast(
        <NotificationUI type={type} text={text} />,
        toastOptions
      )
  }
}
