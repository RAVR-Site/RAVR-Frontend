import { EnglishLevels } from '@/features/english-levels'
import { Search } from '@/features/search'
import { UserAvatar } from '@/features/user-avatar'
import { Logo } from '@/shared/ui'

import s from './Header.module.scss'

export const Header = ({}: HeaderProps) => {
  return (
    <header className={s.header}>
      <div className={s.top}>
        <Logo
          color={'yellow'}
          size={{ width: 74, height: 76 }}
        />
        <h1 className={s.title}>
          FPS - Smart Studying at Lightning Speed
        </h1>
        <UserAvatar
          user={{}}
          blockSize={{ width: 84, height: 84 }}
        />
      </div>
      <EnglishLevels initialActiveLevel={'A1'} />
      <Search />
    </header>
  )
}

interface HeaderProps {}
