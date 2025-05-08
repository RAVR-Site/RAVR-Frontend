import { Link } from 'react-router-dom'

import {
  EnglishLevelVariant,
  EnglishLevels,
} from '@/features/english-levels'
import { Search } from '@/features/search'
import { UserAvatar } from '@/features/user-avatar'
import { Logo } from '@/shared/ui'

import s from './Header.module.scss'

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.top}>
        <Link to={'/'}>
          <Logo
            color={'yellow'}
            size={{ width: 74, height: 76 }}
          />
        </Link>
        <h1 className={s.title}>
          FPS - Smart Studying at Lightning Speed
        </h1>
        <UserAvatar
          user={{}}
          blockSize={{ width: 84, height: 84 }}
        />
      </div>
      <EnglishLevels
        initialActiveLevel={'A1' as EnglishLevelVariant}
      />
      <Search />
    </header>
  )
}

