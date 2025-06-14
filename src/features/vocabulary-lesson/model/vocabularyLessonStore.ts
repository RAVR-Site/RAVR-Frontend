// VocabularyLessonStore.ts
import { lessonApiStore, LessonMode, selectedLessonStore, VocabularyLessonData } from '@/entities/lesson';
import { lessonApi } from '@/entities/lesson/api/lessonApi';
import { timerStore } from '@/shared/ui/Timer/model/timerStore';
import { makeAutoObservable } from 'mobx';

class VocabularyLessonStore {
  constructor() {
    makeAutoObservable(this);
  }

  vocabularyWords: VocabularyLessonData['variants'] | null = null;
  type: LessonMode = 'easy';
  selectedEnglish: string = '';
  selectedRussian: string[] = [];
  pickWords: [string, string[], boolean][] = [];
  allWordsMatched: boolean = false;
  lessonIsCompleted: boolean = false;
  results: {
    totalPairs: number;
    correctPairs: number;
    accuracyPercentage: number;
    pairsDetails: Array<{
      english: string;
      russian: string[];
      isCorrect: boolean;
    }>;
  } = {
      totalPairs: 0,
      correctPairs: 0,
      accuracyPercentage: 0,
      pairsDetails: []
    };

  setType = (type: LessonMode) => {
    this.type = type;
  };

  setVocabularyWords = (data: VocabularyLessonData['variants']) => {
    this.vocabularyWords = data;
    this.allWordsMatched = false;
    this.initializeResults(data);
  };

  initializeResults = (data: VocabularyLessonData['variants']) => {
    const totalPairs = Object.keys(data).length;

    this.results = {
      totalPairs,
      correctPairs: 0,
      accuracyPercentage: 0,
      pairsDetails: []
    };
  };

  setPickEnglishWord = (word: string) => {
    if (this.allWordsMatched) return;

    if (this.selectedEnglish === word) {
      this.selectedEnglish = '';

      return;
    }

    this.selectedEnglish = word;

    if (this.selectedRussian.length > 0) {
      this.checkPair();
    }
  };

  setPickRussianWord = (word: string) => {
    if (this.allWordsMatched) return;

    if (this.selectedRussian.includes(word)) {
      this.selectedRussian = this.selectedRussian.filter(w => w !== word);

      return;
    }

    if (this.type === 'easy') {
      this.selectedRussian = [word];
    } else if (this.selectedRussian.length < 2) {
      this.selectedRussian = [...this.selectedRussian, word];
    }

    if (this.selectedEnglish) {
      if (this.type === 'easy' || (this.type === 'hard' && this.selectedRussian.length === 2)) {
        this.checkPair();
      }
    }
  };

  checkPair = () => {
    if (!this.vocabularyWords || !this.selectedEnglish || this.selectedRussian.length === 0) return;

    let isCorrect = false;

    if (this.type === 'easy') {
      isCorrect = this.vocabularyWords[this.selectedEnglish] === this.selectedRussian[0];
    } else {
      const correctRussianWords = this.vocabularyWords[this.selectedEnglish];

      isCorrect = this.selectedRussian.every(word => correctRussianWords.includes(word)) &&
        this.selectedRussian.length === 2;
    }

    // Сохраняем пару в pickWords
    this.pickWords.push([this.selectedEnglish, [...this.selectedRussian], isCorrect]);

    // Обновляем результаты
    this.updateResults(this.selectedEnglish, this.selectedRussian, isCorrect);

    this.resetSelection('words');
    this.checkAllWordsMatched();
  };

  updateResults = (english: string, russian: string[], isCorrect: boolean) => {
    // Проверяем, не была ли уже эта пара сохранена
    const existingPairIndex = this.results.pairsDetails.findIndex(
      pair => pair.english === english &&
        pair.russian.length === russian.length &&
        pair.russian.every((w, i) => w === russian[i])
    );

    if (existingPairIndex === -1) {
      // Добавляем новую пару
      this.results.pairsDetails.push({
        english,
        russian,
        isCorrect
      });

      // Обновляем счетчики
      if (isCorrect) {
        this.results.correctPairs += 1;
      }

      // Пересчитываем процент правильности
      this.results.accuracyPercentage = Math.round(
        (this.results.correctPairs / this.results.totalPairs) * 100
      );
    } else {
      // Обновляем существующую пару, если новый результат лучше
      if (!this.results.pairsDetails[existingPairIndex].isCorrect && isCorrect) {
        this.results.pairsDetails[existingPairIndex].isCorrect = true;
        this.results.correctPairs += 1;
        this.results.accuracyPercentage = Math.round(
          (this.results.correctPairs / this.results.totalPairs) * 100
        );
      }
    }
  };

  checkAllWordsMatched = () => {
    if (!this.vocabularyWords) return;

    const allEnglishWords = Object.keys(this.vocabularyWords);
    const allRussianWords = Object.values(this.vocabularyWords).flat();

    const matchedEnglishWords = this.pickWords.map(([eng]) => eng);
    const matchedRussianWords = this.pickWords.flatMap(([_, rus]) => rus);

    const allEnglishMatched = allEnglishWords.every(word => matchedEnglishWords.includes(word));
    const allRussianMatched = allRussianWords.every(word => matchedRussianWords.includes(word));

    if (allEnglishMatched && allRussianMatched) {
      this.allWordsMatched = true;
      this.sendCompletedData();
    }
  };

  sendCompletedData = () => {
    const { setLessonResultRequest } = lessonApiStore;
    const { getSpentTime } = timerStore;
    const { selectedLessonState: { selectedLesson } } = selectedLessonStore;

    // Отправляем результаты на сервер
    setLessonResultRequest({
      lesson_id: selectedLesson?.lessonNumber ?? 0,
      time_taken: getSpentTime(),
    });

    this.lessonIsCompleted = true;
  };

  resetSelection = (type?: 'all' | 'words') => {
    this.selectedEnglish = '';
    this.selectedRussian = [];

    if (type === 'all') {
      this.pickWords = [];
      this.allWordsMatched = false;
      this.lessonIsCompleted = false;
      if (this.vocabularyWords) {
        this.initializeResults(this.vocabularyWords);
      }
    }
  };

  // Метод для получения результатов
  getResultsLesson = (lessonMode: LessonMode | undefined) => {
    const correctPercentage = this.results.accuracyPercentage

    if (lessonMode === 'easy') {
      if (correctPercentage > 67) {
        return 'good';
      }
      else if (correctPercentage > 34) {
        return 'normal';
      } else {
        return 'bad';
      }
    } else {
      if (correctPercentage > 65) {
        return 'good';
      } else {
        return 'bad';
      }
    }
  }
}

export const vocabularyLessonStore = new VocabularyLessonStore();