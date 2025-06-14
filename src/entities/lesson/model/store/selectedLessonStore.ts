import { makeAutoObservable } from 'mobx';
import { mobxState } from 'mobx-toolbox';

import { SelectedLesson } from '../types';

class SelectLessonStore {
  constructor() {
    makeAutoObservable(this)
  }

  selectedLessonState = mobxState<SelectedLesson | null>(null)('selectedLesson')
}

export const selectedLessonStore = new SelectLessonStore()
