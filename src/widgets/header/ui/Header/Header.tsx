import s from './Header.module.scss'

export const Header = ({}: HeaderProps) => {
  return (
    <header>
      <h1 className={s.title}>
        FPS - Smart Studying at Lightning Speed
      </h1>
    </header>
  )
}

interface HeaderProps {}
