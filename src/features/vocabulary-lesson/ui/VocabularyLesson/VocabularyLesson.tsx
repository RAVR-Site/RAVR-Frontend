// import { observer } from 'mobx-react-lite'
// import { useEffect } from 'react'

// import {
//   selectedLessonStore,
//   useGetLessonColor,
//   useGetLessonData,
// } from '@/entities/lesson'
// import { Button, P } from '@/shared/ui'
// import cn from 'classnames'

// import { vocabularyLessonStore } from '../../model/vocabularyLessonStore'
// import { WordTile } from '../WordTile/WordTile'

// import s from './VocabularyLesson.module.scss'

// export const VocabularyLesson = observer(
//   ({}: VocabularyLessonProps) => {
//     const {
//       vocabularyWordsState: { setVocabularyWords },
//       pickWords,
//       selectedEnglish,
//       selectedRussian,
//       resetSelection,
//       checkPair,
//     } = vocabularyLessonStore

//     const {
//       selectedLessonStore: { selectedLesson },
//     } = selectedLessonStore

//     const color = useGetLessonColor('vocabulary')
//     const data = useGetLessonData({
//       ...selectedLesson,
//       lessonData: {
//         words: new Map([
//           ['hello', 'привет'],
//           ['world', 'мир'],
//           ['cat', 'кошка'],
//           ['dog', 'собака'],
//           ['house', 'дом'],
//         ]),
//       },
//       lessonType: 'vocabulary',
//     })

//     const isWordSelected = (
//       word: string,
//       type: 'english' | 'russian'
//     ) => {
//       // console.log(word, type)

//       if (type === 'english') {
//         return selectedEnglish === word
//       }

//       return selectedRussian === word
//     }

//     const isWordInCorrectPair = (
//       word: string,
//       type: 'english' | 'russian'
//     ) => {
//       return pickWords.some(([eng, rus]) =>
//         type === 'english' ? eng === word : rus === word
//       )
//     }

//     const isWordInWrongPair = (
//       word: string,
//       type: 'english' | 'russian'
//     ) => {
//       return pickWords.some(
//         ([eng, rus, isCorrect]) =>
//           !isCorrect &&
//           (type === 'english' ? eng === word : rus === word)
//       )
//     }

//     const isWordCheckOptions = (
//       word: string,
//       type: 'english' | 'russian'
//     ) => {
//       return {
//         isSelected: isWordSelected(word, type),
//         isCorrect: isWordInCorrectPair(word, type),
//         isWrong: isWordInWrongPair(word, type),
//       }
//     }

//     useEffect(() => {
//       if (!data) return

//       setVocabularyWords(data)
//       // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [data])

//     if (!data) return null

//     return (
//       <>
//         <div className={s.vocabularyLesson}>
//           <div className={s.russianWords}>
//             <div className={s.russianWordsTop}>
//               {Array.from(data.words.values())
//                 .slice(0, 2)
//                 .map((russianWord, index) => (
//                   <WordTile
//                     key={index}
//                     type={'russian'}
//                     word={russianWord}
//                     {...isWordCheckOptions(
//                       russianWord,
//                       'russian'
//                     )}
//                   />
//                 ))}
//             </div>

//             <div className={s.russianWordsBottom}>
//               {Array.from(data.words.values())
//                 .slice(2)
//                 .map((russianWord, index) => (
//                   <WordTile
//                     key={index + 2}
//                     type={'russian'}
//                     word={russianWord}
//                     {...isWordCheckOptions(
//                       russianWord,
//                       'russian'
//                     )}
//                   />
//                 ))}
//             </div>
//           </div>
//           <div className={s.line} />
//           <div className={s.englishWords}>
//             <div className={s.englishWordsTop}>
//               {Array.from(data.words.keys())
//                 .slice(0, 3)
//                 .map((englishWord, index) => (
//                   <WordTile
//                     key={index}
//                     type={'english'}
//                     word={englishWord}
//                     {...isWordCheckOptions(
//                       englishWord,
//                       'english'
//                     )}
//                   />
//                 ))}
//             </div>

//             <div className={s.englishWordsBottom}>
//               {Array.from(data.words.keys())
//                 .slice(3)
//                 .map((englishWord, index) => (
//                   <WordTile
//                     key={index + 3}
//                     type={'english'}
//                     word={englishWord}
//                     {...isWordCheckOptions(
//                       englishWord,
//                       'english'
//                     )}
//                   />
//                 ))}
//             </div>
//           </div>
//         </div>
//         <div className={s.buttons}>
//           <Button
//             backgroundColor={color.clear.backgroundColor}
//             borderColor={color.clear.borderColor}
//             textColor={color.clear.textColor}
//             padding={'0.25rem 0'}
//             width={'220px'}
//             onClick={() => resetSelection()}
//           >
//             Clear All
//           </Button>
//           <Button
//             backgroundColor={color.submit.backgroundColor}
//             textColor={color.submit.textColor}
//             padding={'0.25rem 0'}
//             width={'220px'}
//             onClick={() => {
//               if (selectedEnglish && selectedRussian) {
//                 checkPair(selectedEnglish, selectedRussian)
//               }
//             }}
//           >
//             Submit
//           </Button>
//         </div>
//       </>
//     )
//   }
// )

// interface VocabularyLessonProps {}
