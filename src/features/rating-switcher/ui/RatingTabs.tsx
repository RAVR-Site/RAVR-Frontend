import { observer } from 'mobx-react-lite'

import { TextParagraphColors } from '@/shared/model/types'
import { Button } from '@/shared/ui'
import cn from 'classnames'

import {
  MainColor,
  MainTabKey,
  ratingTabsStore,
  SubTabKey,
} from '../model/ratingTabsStore'
import {
  colors,
  mainTabs,
  subTabs,
  Tab,
} from '../model/tabs'

import styles from './RatingTabs.module.scss'

export const RatingTabs = observer(() => {
  const {
    mainTabStore: { mainTab, setMainTab },
    subTabStore: { subTab, setSubTab },
    mainColorStore: { mainColor, setMainColor },
  } = ratingTabsStore

  const handleMainTabClick = (tab: Tab) => {
    setMainTab(tab.key as MainTabKey)
    setMainColor(tab.color as MainColor)
  }

  const sortedTabs = [...mainTabs]
  const activeIndex = mainTabs.findIndex(
    tab => tab.key === mainTab
  )

  if (activeIndex !== -1) {
    const middleIndex = Math.floor(mainTabs.length / 2)
    // Перемещаем активную вкладку в середину
    const [activeTab] = sortedTabs.splice(activeIndex, 1)

    sortedTabs.splice(middleIndex, 0, activeTab)
  }

  return (
    <div className={styles.tabsWrapper}>
      <div className={styles.mainTabs}>
        {sortedTabs.map(tab => {
          const isActive = mainTab === tab.key

          const textColor = isActive
            ? (colors[
                mainColor as keyof typeof colors
              ] as TextParagraphColors)
            : 'black'

          console.log(textColor)

          return (
            <Button
              key={tab.key}
              className={
                isActive
                  ? styles.activeTab
                  : styles.notActive
              }
              textColor={
                isActive
                  ? (colors[
                      mainColor as keyof typeof colors
                    ] as TextParagraphColors)
                  : 'black'
              }
              fontSize={isActive ? 48 : 32}
              onClick={() => handleMainTabClick(tab)}
            >
              {tab.label}
            </Button>
          )
        })}
      </div>
      <div className={styles.subTabs}>
        {subTabs.map(tab => (
          <Button
            key={tab.key}
            className={cn(
              subTab === tab.key
                ? styles.activeSubTab
                : styles.notActiveSubTab
            )}
            onClick={() => setSubTab(tab.key as SubTabKey)}
            textColor={'black'}
          >
            {tab.label}
          </Button>
        ))}
      </div>
    </div>
  )
})
