import { navList } from '../../model/navList'
import { MainNavigationItem } from '../MainNavigationItem/MainNavigationItem'

import s from './MainNavigation.module.scss'

export const MainNavigation = ({}: MainNavigationProps) => {
  return (
    <ul className={s.list}>
      {navList.map(item => {
        const color =
          item.color === '#FFFFFF' ? 'black' : 'white'

        return (
          <MainNavigationItem item={item} color={color} />
        )
      })}
    </ul>
  )
}

interface MainNavigationProps {}
