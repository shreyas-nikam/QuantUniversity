import { CertificateDetailPage } from '../components/CertificateDetailPage';
import { certificates } from '../data/coursesAndCertificates';

interface ResponsibleGenAICertPageProps {
  onNavigate: (page: string) => void;
}

export function ResponsibleGenAICertPage({ onNavigate }: ResponsibleGenAICertPageProps) {
  const certificate = certificates['responsible-genai'];
  
  if (!certificate) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Certificate Not Found</h1>
          <button 
            onClick={() => onNavigate('certificate-programs')}
            className="text-[#007CBF] hover:underline"
          >
            Return to Certificate Programs
          </button>
        </div>
      </div>
    );
  }
  
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
