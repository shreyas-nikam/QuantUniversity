import { CertificateDetailPage } from '../components/CertificateDetailPage';
import { certificates } from '../data/coursesAndCertificates';

interface ResponsibleGenAICertPageProps {
  onNavigate: (page: string) => void;
}

export function ResponsibleGenAICertPage({ onNavigate }: ResponsibleGenAICertPageProps) {
  const certificate = certificates['responsible-genai'];
  
  // Map course IDs to their detail page routes
  const courseDetailPageMap = {
    'intro-genai': 'intro-genai-course'
  };
  
  return (
    <CertificateDetailPage 
      certificate={certificate} 
      onNavigate={onNavigate}
      courseDetailPageMap={courseDetailPageMap}
    />
  );
}
