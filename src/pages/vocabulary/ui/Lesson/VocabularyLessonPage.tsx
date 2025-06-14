import { VocabularyLesson } from '@/features/vocabulary-lesson'
import { Layout } from '@/widgets/layout'
import { WrapperLesson } from '@/widgets/wrapper-lesson'

export default function VocabularyLessonPage() {
  return (
    <Layout type={'lesson'} height={'100vh'}>
      <WrapperLesson lessonType={'vocabulary'}>
        <VocabularyLesson />
      </WrapperLesson>
    </Layout>
  )
}
