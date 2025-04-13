import { CSSProperties, ReactNode } from 'react'

import { Header } from '@/widgets/header'

import s from './Layout.module.scss'

export const Layout = ({
  children,
  height,
  padding,
  hasHeader = false,
}: LayoutProps) => {
  return (
    <div
      className={s.layout}
      style={
        {
          height,
          padding,
        } as CSSProperties
      }
    >
      {hasHeader && <Header />}
      {children}
    </div>
  )
}

interface LayoutProps {
  children: ReactNode
  height?: string
  padding?: string
  hasHeader?: boolean
}
