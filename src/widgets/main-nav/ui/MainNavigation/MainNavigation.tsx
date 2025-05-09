import { navList } from '../../model/navList'
import { MainNavigationItem } from '../MainNavigationItem/MainNavigationItem'

import s from './MainNavigation.module.scss'

export const MainNavigation = () => {
  return (
    <ul className={s.list}>
      {navList.map(item => (
        <MainNavigationItem
          key={item.lessonType}
          item={item}
          color={item.color === 'white' ? 'black' : 'white'}
        />
      ))}
    </ul>
  )
}
