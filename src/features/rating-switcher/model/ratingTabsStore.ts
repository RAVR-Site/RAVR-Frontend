import { makeAutoObservable } from 'mobx';
import { mobxState } from 'mobx-toolbox';

export type MainTabKey = 'grammar' | 'vocabulary' | 'practice';
export type SubTabKey = 'easy' | 'hard';
export type MainColor = '#575affe6' | '#9a5fff' | '#ff5f92';

class RatingTabsStore {
  constructor() {
    makeAutoObservable(this);
  }

  mainTabStore = mobxState<MainTabKey>('vocabulary')('mainTab');
  subTabStore = mobxState<SubTabKey>('easy')('subTab');
  mainColorStore = mobxState<MainColor>('#9a5fff')('mainColor');
}

export const ratingTabsStore = new RatingTabsStore(); 