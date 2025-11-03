import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CoursesPage } from './pages/CoursesPage';
import { HowYouLearnPage } from './pages/HowYouLearnPage';
import { EnterprisePage } from './pages/EnterprisePage';
import { SpeakingMediaPage } from './pages/SpeakingMediaPage';
import { ThoughtLeadershipPage } from './pages/ThoughtLeadershipPage';
import { WhitepapersPage } from './pages/WhitepapersPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { BlogArticlePage } from './pages/BlogArticlePage';
import { CourseDetailPage } from './pages/CourseDetailPage';
import { IntroGenAICourseDetailPage } from './pages/IntroGenAICourseDetailPage';
import { CertificateProgramsPage } from './pages/CertificateProgramsPage';
import { AIRiskManagementCertPage } from './pages/AIRiskManagementCertPage';
import { QuantFinanceFoundationsCertPage } from './pages/QuantFinanceFoundationsCertPage';
import { ResponsibleGenAICertPage } from './pages/ResponsibleGenAICertPage';

type PageType = 'home' | 'courses' | 'how-you-learn' | 'enterprise' | 'speaking-media' | 'thought-leadership' | 'whitepapers' | 'about' | 'contact' | 'blog-article' | 'course-detail' | 'intro-genai-course' | 'certificate-programs' | 'ai-risk-management' | 'quant-finance-foundations' | 'responsible-genai-cert';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page as PageType);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'certificate-programs':
        return <CertificateProgramsPage onNavigate={handleNavigate} />;
      case 'ai-risk-management':
        return <AIRiskManagementCertPage onNavigate={handleNavigate} />;
      case 'quant-finance-foundations':
        return <QuantFinanceFoundationsCertPage onNavigate={handleNavigate} />;
      case 'responsible-genai-cert':
        return <ResponsibleGenAICertPage onNavigate={handleNavigate} />;
      case 'courses':
        return <CoursesPage onNavigate={handleNavigate} />;
      case 'course-detail':
        return <CourseDetailPage onNavigate={handleNavigate} />;
      case 'intro-genai-course':
        return <IntroGenAICourseDetailPage onNavigate={handleNavigate} />;
      case 'how-you-learn':
        return <HowYouLearnPage onNavigate={handleNavigate} />;
      case 'enterprise':
        return <EnterprisePage />;
      case 'speaking-media':
        return <SpeakingMediaPage />;
      case 'thought-leadership':
        return <ThoughtLeadershipPage onNavigate={handleNavigate} />;
      case 'blog-article':
        return <BlogArticlePage onNavigate={handleNavigate} />;
      case 'whitepapers':
        return <WhitepapersPage />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
