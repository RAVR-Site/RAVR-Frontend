import { GrammarLesson } from '@/features/grammar-lesson'
import { Layout } from '@/widgets/layout'
import { WrapperLesson } from '@/widgets/wrapper-lesson'

export default function GrammarLessonPage() {
  return (
    <Layout type={'lesson'} height={'100vh'}>
      <WrapperLesson lessonType={'grammar'}>
        <GrammarLesson />
      </WrapperLesson>
    </Layout>
  )
}
