import { CSSProperties } from 'react'
import { Link } from 'react-router-dom'

import { P } from '@/shared/ui'
import { ArrowIcon, CupIcon } from '@/shared/ui/icons'

import { NavItem } from '../../model/navList'

import s from './MainNavigationItem.module.scss'

export const MainNavigationItem = ({
  item,
  color,
}: MainNavigationItemProps) => {
  return (
    <Link to={item.link}>
      <li
        key={item.link}
        className={s.item}
        style={{ background: item.color } as CSSProperties}
      >
        {item?.image && (
          <div className={s.cup}>
            <CupIcon />
          </div>
        )}
        <P
          fontFamily={'DaysOne'}
          fontSize={32}
          color={color}
          textAlign={'center'}
        >
          {item.title}
        </P>
        <P textAlign={'center'} color={color}>
          {item.description}
        </P>

        <div className={s.arrow}>
          <ArrowIcon color={color} />
        </div>
      </li>
    </Link>
  )
}

interface MainNavigationItemProps {
  item: NavItem
  color: 'black' | 'white'
}
