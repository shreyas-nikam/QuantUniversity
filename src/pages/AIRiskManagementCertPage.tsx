import { CertificateDetailPage } from '../components/CertificateDetailPage';
import { certificates } from '../data/coursesAndCertificates';

interface AIRiskManagementCertPageProps {
  onNavigate: (page: string) => void;
}

export function AIRiskManagementCertPage({ onNavigate }: AIRiskManagementCertPageProps) {
  const certificate = certificates['ai-risk-management'];
  
  return <CertificateDetailPage certificate={certificate} onNavigate={onNavigate} />;
}
