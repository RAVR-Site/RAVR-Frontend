import { NotificationType } from '@/shared/model/types'
import { Loader } from '@/shared/ui'

import { ErrorIcon } from '../assets/ErrorIcon'
import { SuccessIcon } from '../assets/SuccessIcon'
import { WarningIcon } from '../assets/WarningIcon'

export const getNotificationIcon = (
  type: NotificationType
) => {
  switch (type) {
    case 'success':
      return <SuccessIcon />
    case 'error':
      return <ErrorIcon />
    case 'warning':
      return <WarningIcon />
    case 'loading':
      return (
        <Loader
          loaderSize={{ width: 30, height: 30 }}
          color={'black'}
        />
      )
  }
}
