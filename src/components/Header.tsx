import { useState } from 'react';
import { Menu, X, GraduationCap, ChevronDown, Award } from 'lucide-react';
import { Button } from './ui/button';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [certificateDropdownOpen, setCertificateDropdownOpen] = useState(false);
  const [mobileCertificateOpen, setMobileCertificateOpen] = useState(false);

  const certificatePrograms = [
    { name: 'AI & Risk Management', id: 'ai-risk-management' },
    { name: 'Quant Finance Foundations', id: 'quant-finance-foundations' },
    { name: 'Responsible Generative AI', id: 'responsible-genai-cert' }
  ];

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Certificate Programs', id: 'certificate-programs', hasDropdown: true },
    { name: 'Courses', id: 'courses' },
    { name: 'How You Learn', id: 'how-you-learn' },
    { name: 'Enterprise', id: 'enterprise' },
    { name: 'Speaking & Media', id: 'speaking-media' },
    { name: 'Thought Leadership', id: 'thought-leadership' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
        <div className="flex justify-between items-center h-20">
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => onNavigate('home')}
          >
            <img 
              src="/src/assets/logos/quantuniversity-logo.jpg" 
              alt="QuantUniversity Logo" 
              className="h-14 object-contain transition-transform group-hover:scale-105"
            />
            <div>
              <span className="text-xl font-bold text-gray-900">QuantUniversity</span>
              <p className="text-xs text-gray-500">AI & Risk Management Education</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-end mr-4">
            {navItems.map((item) => (
              item.hasDropdown ? (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => setCertificateDropdownOpen(true)}
                  onMouseLeave={() => setCertificateDropdownOpen(false)}
                >
                  <button
                    onClick={() => onNavigate(item.id)}
                    className={`px-2 xl:px-3 py-2 rounded-md transition-colors flex items-center gap-1 text-sm ${
                      currentPage === item.id || certificatePrograms.some(p => p.id === currentPage)
                        ? 'text-[#007CBF] bg-[#007CBF]/5'
                        : 'text-gray-700 hover:text-[#007CBF] hover:bg-gray-50'
                    }`}
                  >
                    <span className="whitespace-nowrap">{item.name}</span>
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform ${certificateDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Dropdown Menu */}
                  {certificateDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 animate-in fade-in slide-in-from-top-2">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Award className="h-4 w-4" />
                          <span>All Programs</span>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          onNavigate('certificate-programs');
                          setCertificateDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-[#007CBF] hover:bg-[#007CBF]/5 transition-colors"
                      >
                        View All Certificate Programs
                      </button>
                      <div className="border-t border-gray-100 my-2"></div>
                      {certificatePrograms.map((program) => (
                        <button
                          key={program.id}
                          onClick={() => {
                            onNavigate(program.id);
                            setCertificateDropdownOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                            currentPage === program.id
                              ? 'text-[#007CBF] bg-[#007CBF]/5'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {program.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-2 xl:px-3 py-2 rounded-md transition-colors text-sm whitespace-nowrap ${
                    currentPage === item.id
                      ? 'text-[#007CBF] bg-[#007CBF]/5'
                      : 'text-gray-700 hover:text-[#007CBF] hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </button>
              )
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
            <Button 
              className="bg-[#007CBF] hover:bg-[#006A9C] text-white px-4 xl:px-6 rounded-lg transition-all hover-lift text-sm"
              onClick={() => onNavigate('courses')}
            >
              Enroll Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                item.hasDropdown ? (
                  <div key={item.id}>
                    <button
                      onClick={() => setMobileCertificateOpen(!mobileCertificateOpen)}
                      className={`w-full text-left py-3 px-4 rounded-md transition-colors flex items-center justify-between ${
                        currentPage === item.id || certificatePrograms.some(p => p.id === currentPage)
                          ? 'text-[#007CBF] bg-[#007CBF]/5'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${mobileCertificateOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileCertificateOpen && (
                      <div className="ml-4 mt-2 space-y-2">
                        <button
                          onClick={() => {
                            onNavigate('certificate-programs');
                            setMobileMenuOpen(false);
                            setMobileCertificateOpen(false);
                          }}
                          className="w-full text-left py-2 px-4 text-sm text-[#007CBF] hover:bg-[#007CBF]/5 rounded-md transition-colors"
                        >
                          View All Programs
                        </button>
                        {certificatePrograms.map((program) => (
                          <button
                            key={program.id}
                            onClick={() => {
                              onNavigate(program.id);
                              setMobileMenuOpen(false);
                              setMobileCertificateOpen(false);
                            }}
                            className={`w-full text-left py-2 px-4 text-sm rounded-md transition-colors ${
                              currentPage === program.id
                                ? 'text-[#007CBF] bg-[#007CBF]/5'
                                : 'text-gray-600 hover:bg-gray-50'
                            }`}
                          >
                            {program.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`text-left py-3 px-4 rounded-md transition-colors ${
                      currentPage === item.id
                        ? 'text-[#007CBF] bg-[#007CBF]/5'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </button>
                )
              ))}
              <div className="pt-4 border-t mt-2">
                <Button 
                  className="w-full bg-[#007CBF] hover:bg-[#006A9C] text-white"
                  onClick={() => {
                    onNavigate('courses');
                    setMobileMenuOpen(false);
                  }}
                >
                  Enroll Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
