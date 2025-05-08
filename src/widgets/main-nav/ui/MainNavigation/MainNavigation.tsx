import { navList } from '../../model/navList'
import { MainNavigationItem } from '../MainNavigationItem/MainNavigationItem'

import s from './MainNavigation.module.scss'

export const MainNavigation = () => {
  return (
    <ul className={s.list}>
      {navList.map(item => {
        const color =
          item.color === '#FFFFFF' ? 'black' : 'white'

        return (
          <MainNavigationItem
            key={item.lessonType}
            item={item}
            color={color}
          />
        )
      })}
    </ul>
  )
}
