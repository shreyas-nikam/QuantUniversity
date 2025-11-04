import { CertificateDetailPage } from '../components/CertificateDetailPage';
import { certificates } from '../data/coursesAndCertificates';

interface AIRiskManagementCertPageProps {
  onNavigate: (page: string) => void;
}

export function AIRiskManagementCertPage({ onNavigate }: AIRiskManagementCertPageProps) {
  const certificate = certificates['ai-risk-management'];
  
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
  
  return <CertificateDetailPage certificate={certificate} onNavigate={onNavigate} />;
}
