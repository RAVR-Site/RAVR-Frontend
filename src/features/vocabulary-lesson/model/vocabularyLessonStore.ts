import { VocabularyLesson } from '@/entities/lesson';
import { makeAutoObservable } from 'mobx';
import { mobxState } from 'mobx-toolbox';

class VocabularyLessonStore {
  constructor() {
    makeAutoObservable(this)
  }

  vocabularyWordsState = mobxState<VocabularyLesson>({
    words: new Map(),
  })('vocabularyWords')

  selectedEnglish: string = ''
  selectedRussian: string = ''
  pickWords: [string, string, boolean][] = []

  setPickEnglishWord = (word: string) => {
    this.selectedEnglish = word

    if (this.selectedRussian) {
      this.checkPair(this.selectedEnglish, this.selectedRussian)
      this.resetSelection('words')
    }
  }

  setPickRussianWord = (word: string) => {
    this.selectedRussian = word

    if (this.selectedEnglish) {
      this.checkPair(this.selectedEnglish, this.selectedRussian)
      this.resetSelection('words')
    }
  }

  resetSelection = (type?: 'all' | 'words') => {
    this.selectedEnglish = ''
    this.selectedRussian = ''

    if (!type) this.pickWords = []
  }

  checkPair = (englishWord: string, russianWord: string) => {
    const isCorrect = this.vocabularyWordsState.vocabularyWords.words.get(englishWord) === russianWord

    this.pickWords.push([englishWord, russianWord, isCorrect])
  }

  setVocabularyWords = (data: VocabularyLesson) => {
    this.vocabularyWordsState.vocabularyWords = data
  }
}

export const vocabularyLessonStore = new VocabularyLessonStore()
