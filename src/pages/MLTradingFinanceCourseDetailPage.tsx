import { CourseDetailPageComponent } from '../components/CourseDetailPageComponent';
import { courses } from '../data/coursesAndCertificates';
import { SEO } from '../components/SEO';
import { generateCourseSchema, generateFAQSchema, generateBreadcrumbSchema } from '../data/seo';

interface MLTradingFinanceCourseDetailPageProps {
  onNavigate: (page: string) => void;
}

export function MLTradingFinanceCourseDetailPage({ onNavigate }: MLTradingFinanceCourseDetailPageProps) {
  const course = courses['ml-trading-finance'];
  
  return (
    <>
      <SEO 
        customSEO={{
          title: `${course.title} | QuantUniversity`,
          description: course.description,
          keywords: ['machine learning', 'trading', 'finance', 'algorithmic trading', 'AI course', 'quant finance'],
          ogImage: course.heroImage,
          canonicalUrl: '/courses/ml-trading-finance'
        }}
        structuredData={[
          generateCourseSchema({
            title: course.title,
            description: course.detailedDescription,
            instructor: course.instructor,
            price: course.price,
            rating: course.rating,
            duration: course.duration,
            level: course.level
          }),
          ...(course.faqs ? [generateFAQSchema(course.faqs.map(faq => ({
            question: faq.question,
            answer: faq.answer
          })))] : []),
          generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Courses', url: '/courses' },
            { name: course.title, url: '/courses/ml-trading-finance' }
          ])
        ]}
      />
      <CourseDetailPageComponent course={course} onNavigate={onNavigate} />
    </>
  );
}
