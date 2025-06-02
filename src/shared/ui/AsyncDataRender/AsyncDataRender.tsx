import { observer } from 'mobx-react-lite'
import React, {
  CSSProperties,
  ComponentType,
  ReactNode,
  cloneElement,
  isValidElement,
} from 'react'

import { showNotification } from '@/features/notifications'

import { LoaderPage } from '../Loader/Page/LoaderPage'
import { P } from '../P/P'

import s from './AsyncDataRender.module.scss'

export const AsyncDataRender = observer(
  <T,>({
    status,
    data,
    renderContent,
    renderItem,
    itemPropName = 'comment',
    loadingComponent,
    errorComponent,
    emptyComponent,
    noDataText = 'No data',
    needPending = true,
    isEmpty = (data: any) =>
      !data ||
      (Array.isArray(data) ? data.length === 0 : false),
    messageHeightPercent = 100,
  }: AsyncStateHandlerProps<T>) => {
    const messageContainerStyle: CSSProperties = {
      justifyContent:
        messageHeightPercent <= 50
          ? 'flex-start'
          : 'center',
      flex: messageHeightPercent <= 50 ? 0 : 1,
    }

    if (status === 'pending') {
      return (
        loadingComponent || (
          <div style={messageContainerStyle}>
            <LoaderPage colorLoader={'blue'} />
          </div>
        )
      )
    }

    if (status === 'rejected') {
      return errorComponent || showNotification('error', 'Error')
    }

    if (status === 'fulfilled') {
      if ((data && !isEmpty(data)) || !needPending) {
        if (renderContent) {
          return <>{renderContent(data!)}</>
        }

        if (Array.isArray(data)) {
          if (
            renderItem &&
            typeof renderItem === 'function'
          ) {
            const isReactComponent =
              typeof renderItem === 'function' &&
              ('displayName' in renderItem ||
                (renderItem.prototype &&
                  'isReactComponent' in
                    renderItem.prototype))

            if (isReactComponent) {
              const RenderComponent =
                renderItem as ComponentType<any>

              return (
                <>
                  {data.map((item, index) => {
                    const props = {
                      key: item.id || index,
                      [itemPropName]: item,
                    }

                    return <RenderComponent {...props} />
                  })}
                </>
              )
            } else {
              const renderFunction = renderItem as (
                item: any
              ) => ReactNode

              return (
                <>
                  {data.map((item, index) => {
                    const key = item.id || index

                    return (
                      <React.Fragment key={key}>
                        {renderFunction(item)}
                      </React.Fragment>
                    )
                  })}
                </>
              )
            }
          } else if (
            renderItem &&
            isValidElement(renderItem)
          ) {
            return (
              <>
                {data.map((item, index) => {
                  const props = {
                    key: item.id || index,
                    [itemPropName]: item,
                  }

                  return cloneElement(renderItem, props)
                })}
              </>
            )
          }
        }
      } else {
        return (
          emptyComponent || (
            <div className={s.container}>
              <div
                style={{
                  position: 'absolute',
                  top:
                    messageHeightPercent &&
                    messageHeightPercent !== 100
                      ? `${messageHeightPercent}%`
                      : '50%',
                  left: 0,
                  right: 0,
                  alignItems: 'center',
                }}
              >
                <P>{noDataText}</P>
              </div>
            </div>
          )
        )
      }
    }

    return null
  }
)

type AsyncStatus =
  | 'pending'
  | 'fulfilled'
  | 'rejected'
  | undefined

interface AsyncStateHandlerProps<T> {
  status: AsyncStatus
  data: T | undefined
  renderContent?: (data: T) => ReactNode
  renderItem?:
    | ((item: any) => ReactNode)
    | ComponentType<any>
    | ReactNode
  itemPropName?: string
  loadingComponent?: ReactNode
  errorComponent?: ReactNode
  emptyComponent?: ReactNode
  noDataText?: string
  isEmpty?: (data: T) => boolean
  messageHeightPercent?: number
  needPending?: boolean
}
