import { CourseDetailPageComponent } from '../components/CourseDetailPageComponent';
import { courses } from '../data/coursesAndCertificates';

interface IntroGenAICourseDetailPageProps {
  onNavigate: (page: string) => void;
}

export function IntroGenAICourseDetailPageNew({ onNavigate }: IntroGenAICourseDetailPageProps) {
  const course = courses['intro-genai'];
  
  return <CourseDetailPageComponent course={course} onNavigate={onNavigate} />;
}
