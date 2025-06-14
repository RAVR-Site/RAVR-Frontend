import { PracticeLesson } from '@/features/practice-lesson/ui/PracticeLesson/PracticeLesson'
import { Layout } from '@/widgets/layout'
import { WrapperLesson } from '@/widgets/wrapper-lesson'

export default function PracticeLessonPage() {
  return (
    <Layout type={'lesson'} height={'100vh'}>
      <WrapperLesson lessonType={'practice'}>
        <PracticeLesson />
      </WrapperLesson>
    </Layout>
  )
}
