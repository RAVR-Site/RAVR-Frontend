import { EnglishLevels } from '../../../../features/english-levels/ui/EnglishLevels/EnglishLevels'
import { Search } from '../Search/Search'

import s from './Header.module.scss'

export const Header = ({}: HeaderProps) => {
  return (
    <header>
      <h1 className={s.title}>
        FPS - Smart Studying at Lightning Speed
      </h1>
      <EnglishLevels />
      <Search />
    </header>
  )
}

interface HeaderProps {}
