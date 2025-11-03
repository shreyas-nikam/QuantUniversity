import { CertificateDetailPage } from '../components/CertificateDetailPage';
import { certificates } from '../data/coursesAndCertificates';

interface QuantFinanceFoundationsCertPageProps {
  onNavigate: (page: string) => void;
}

export function QuantFinanceFoundationsCertPage({ onNavigate }: QuantFinanceFoundationsCertPageProps) {
  const certificate = certificates['quant-finance-foundations'];
  
  return <CertificateDetailPage certificate={certificate} onNavigate={onNavigate} />;
}
