import React, { useState, useEffect } from 'react';
import { Target, TrendingUp, Award, Users, CheckCircle, ArrowRight, BarChart, Shield, Zap, Handshake, Star, GraduationCap, Globe, Building2, Calendar, ChevronDown, ChevronUp, Mail, Phone, ExternalLink, Clock, Home, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../components/ui/collapsible';
import { ScrollableCarousel } from '../components/ScrollableCarousel';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from '../components/ui/breadcrumb';
import { motion, useInView } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { SEO } from '../components/SEO';
import { pageSEO, generateFAQSchema, generateBreadcrumbSchema } from '../data/seo';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

function AnimatedCounter({ end, duration = 2000, suffix = '', prefix = '' }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      const startTime = Date.now();
      const endTime = startTime + duration;

      const updateCounter = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * end);
        
        setCount(currentCount);

        if (now < endTime) {
          requestAnimationFrame(updateCounter);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(updateCounter);
    }
  }, [isInView, end, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

export function EnterprisePage() {
  const [isPrmiaOpen, setIsPrmiaOpen] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);

  const stats = [
    {
      icon: Users,
      value: 5000,
      suffix: '+',
      label: 'Professionals Trained',
      description: 'at leading financial institutions'
    },
    {
      icon: TrendingUp,
      value: 40,
      suffix: '%',
      label: 'Reduction',
      description: 'in model audit time'
    },
    {
      icon: Globe,
      value: 13,
      suffix: '+',
      label: 'Countries',
      description: 'global reach'
    },
    {
      icon: Building2,
      value: 150,
      suffix: '+',
      label: 'Organizations',
      description: 'trust QuantUniversity'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Assess',
      description: 'AI Readiness Assessment to identify skill gaps and opportunities',
      icon: BarChart
    },
    {
      number: '02',
      title: 'Train',
      description: 'Custom learning paths with live instruction and hands-on projects',
      icon: Target
    },
    {
      number: '03',
      title: 'Measure',
      description: 'Track progress with analytics dashboards and skill assessments',
      icon: TrendingUp
    },
    {
      number: '04',
      title: 'Scale',
      description: 'Expand AI capability across departments with proven frameworks',
      icon: Zap
    }
  ];

  const testimonials = [
    {
      quote: "QuantUniversity's enterprise training program equipped our investment team with cutting-edge AI and machine learning capabilities. The practical, hands-on approach delivered immediate value to our portfolio management process.",
      author: "Investment Analytics Team",
      role: "Portfolio Management Division",
      company: "Virginia Retirement Systems",
      logo: "VRS",
      image: 'https://images.unsplash.com/photo-1684679674829-fc7b436ec8e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBpbnN0aXR1dGlvbiUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2MjE5MTM4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      quote: "The custom AI risk management workshop transformed how our analysts approach model validation and deployment. We've seen measurable improvements in both efficiency and risk oversight across our investment operations.",
      author: "Risk Analytics Leadership",
      role: "Investment Office",
      company: "CalPERS",
      logo: "CPS",
      image: 'https://images.unsplash.com/photo-1684679674829-fc7b436ec8e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBpbnN0aXR1dGlvbiUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2MjE5MTM4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      quote: "Working with QuantUniversity to upskill our quantitative team has been transformational. The integration with our existing systems was seamless, and we trained over 200 professionals in advanced AI techniques within 6 months.",
      author: "Learning & Development",
      role: "Enterprise Training Division",
      company: "MassMutual",
      logo: "MM",
      image: 'https://images.unsplash.com/photo-1684679674829-fc7b436ec8e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBpbnN0aXR1dGlvbiUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2MjE5MTM4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      quote: "The AI governance training helped us establish robust frameworks for responsible AI deployment. QuantUniversity's expertise in financial services made all the difference.",
      author: "Chief Data Officer",
      role: "Enterprise Risk Management",
      company: "JPMorgan Chase",
      logo: "JPM",
      image: 'https://images.unsplash.com/photo-1684679674829-fc7b436ec8e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBpbnN0aXR1dGlvbiUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2MjE5MTM4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      quote: "Outstanding training program that bridged the gap between theoretical AI concepts and practical banking applications. Highly recommend for any financial institution.",
      author: "VP of Analytics",
      role: "Digital Banking Division",
      company: "Bank of America",
      logo: "BoA",
      image: 'https://images.unsplash.com/photo-1684679674829-fc7b436ec8e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBpbnN0aXR1dGlvbiUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2MjE5MTM4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const offerings = [
    {
      icon: Target,
      title: 'AI Readiness Assessment',
      description: 'Comprehensive evaluation of your organization\'s AI maturity, skill gaps, and strategic opportunities',
      whatsInside: 'Deep-dive analysis with executive roadmap and implementation plan',
      features: [
        'Current state analysis',
        'Skill gap identification',
        'Custom roadmap development',
        'Executive presentation'
      ]
    },
    {
      icon: Award,
      title: 'Team Certification Programs',
      description: 'Industry-recognized certifications for your entire team with dedicated cohort management',
      whatsInside: 'Structured learning paths with progress tracking and team analytics',
      features: [
        'Group discounts',
        'Dedicated cohort',
        'Progress tracking',
        'Team certifications'
      ]
    },
    {
      icon: Users,
      title: 'Custom AI & Risk Workshops',
      description: 'Tailored workshops addressing your specific use cases, data, and business challenges',
      whatsInside: 'Hands-on training using your real data and business scenarios',
      features: [
        'Custom curriculum',
        'Real data & use cases',
        'Expert instructors',
        'Hands-on projects'
      ]
    },
    {
      icon: Shield,
      title: 'LMS Integration',
      description: 'Seamless integration with your existing learning management system and HR platforms',
      whatsInside: 'Plug-and-play setup with full SSO and reporting capabilities',
      features: [
        'SCORM compatible',
        'SSO integration',
        'Progress sync',
        'Custom reporting'
      ]
    }
  ];

  // FAQs for structured data
  const faqs = [
    {
      question: "What types of organizations does QuantUniversity work with?",
      answer: "We work with banks, asset managers, insurance companies, fintech firms, and regulatory bodies globally. Our enterprise training programs have been deployed across 150+ organizations in 13+ countries."
    },
    {
      question: "How does the enterprise training process work?",
      answer: "We follow a 4-step process: Assess your AI readiness and skill gaps, Train with custom learning paths and live instruction, Measure progress with analytics dashboards, and Scale AI capability across departments with proven frameworks."
    },
    {
      question: "Can the training content be customized for our organization?",
      answer: "Yes, we offer fully customized learning paths tailored to your organization's specific needs, industry context, and skill levels. We can integrate with your existing systems and LMS platforms."
    },
    {
      question: "How do you measure the ROI of enterprise training?",
      answer: "We track key metrics including completion rates, skill assessments, time-to-competency, and business impact measures such as reduction in model audit time (typically 40%) and increased deployment velocity."
    },
    {
      question: "Do you offer bulk pricing for teams?",
      answer: "Yes, we offer flexible pricing models for enterprise clients including team licenses, department-wide deployments, and organization-wide programs. Contact us for a custom quote based on your specific needs."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title={pageSEO.enterprise.title}
        description={pageSEO.enterprise.description}
        keywords={pageSEO.enterprise.keywords}
        canonicalUrl={pageSEO.enterprise.canonicalUrl}
        ogType={pageSEO.enterprise.ogType}
        structuredData={[
          generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Enterprise Solutions', url: '/enterprise' }
          ]),
          generateFAQSchema(faqs)
        ]}
      />
      
      {/* Breadcrumb Navigation */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink 
                  onClick={() => onNavigate?.('home')}
                  className="cursor-pointer hover:text-[#007CBF] flex items-center gap-1"
                >
                  <Home className="h-3.5 w-3.5" />
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage className="text-gray-900">Enterprise Solutions</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Hero Section with Animated Metrics */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-[#006A9C] to-[#007CBF] overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <Badge className="mb-6 bg-white/10 text-white border-white/20">
              Enterprise Solutions
            </Badge>
            <h1 className="text-white mb-6">Build AI Capability Across Your Organization</h1>
            <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
              Accelerate AI adoption with custom learning paths, team certifications, and measurable ROI. Trusted by leading financial institutions worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Dialog open={showCalendly} onOpenChange={setShowCalendly}>
                <DialogTrigger asChild>
                  <button 
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-white text-[#007CBF] hover:bg-gray-100 px-8 h-14 text-lg font-medium transition-colors cursor-pointer"
                    aria-label="Open calendar dialog to schedule a strategy call with QuantUniversity enterprise team"
                  >
                    <Calendar className="h-5 w-5" />
                    Book a Strategy Call
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Schedule Your Strategy Call</DialogTitle>
                    <DialogDescription>
                      Choose a time that works best for you to discuss your organization's AI training needs.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-6">
                    {/* Calendly Embed Placeholder */}
                    <div className="bg-gray-50 rounded-lg p-8 text-center border-2 border-dashed border-gray-300">
                      <Calendar className="h-16 w-16 text-[#007CBF] mx-auto mb-4" />
                      <h4 className="text-gray-900 mb-2">Calendly Integration</h4>
                      <p className="text-gray-600 mb-6">
                        In production, this would embed the Calendly widget for direct scheduling.
                      </p>
                      <div className="space-y-3 text-left max-w-md mx-auto">
                        <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                          <Clock className="h-5 w-5 text-[#007CBF]" />
                          <div>
                            <div className="text-sm text-gray-900">30-minute consultation</div>
                            <div className="text-xs text-gray-500">Learn about your needs</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                          <Users className="h-5 w-5 text-[#007CBF]" />
                          <div>
                            <div className="text-sm text-gray-900">Meet with our team</div>
                            <div className="text-xs text-gray-500">Enterprise solutions experts</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                          <Target className="h-5 w-5 text-[#007CBF]" />
                          <div>
                            <div className="text-sm text-gray-900">Custom proposal</div>
                            <div className="text-xs text-gray-500">Tailored to your goals</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button className="flex-1 bg-[#007CBF] hover:bg-[#006A9C] text-white">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Open Calendly
                      </Button>
                      <Button variant="outline" className="flex-1" onClick={() => setShowCalendly(false)}>
                        Close
                      </Button>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-2">Prefer to reach out directly?</p>
                      <div className="flex items-center justify-center gap-4 text-sm">
                        <a href="mailto:enterprise@quantuniversity.com" className="flex items-center gap-2 text-[#007CBF] hover:underline">
                          <Mail className="h-4 w-4" />
                          enterprise@quantuniversity.com
                        </a>
                        <span className="text-gray-300">|</span>
                        <a href="tel:+1-555-0123" className="flex items-center gap-2 text-[#007CBF] hover:underline">
                          <Phone className="h-4 w-4" />
                          +1 (555) 012-3456
                        </a>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#007CBF] px-8 rounded-lg h-14 text-lg"
                aria-label="Download enterprise training brochure PDF with program details and pricing"
              >
                Download Brochure
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Animated Stats Dashboard */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="border-2 border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-4xl text-white mb-2">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2000} />
                    </div>
                    <div className="text-lg text-white/90 mb-1">{stat.label}</div>
                    <p className="text-white/70 text-sm">{stat.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Programs Value Block */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-blue-50 to-white border-t border-blue-100">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-[#007CBF] text-white flex items-center gap-1 w-fit">
                <Award className="h-3 w-3" />
                Enterprise Certificate Programs
              </Badge>
              <h2 className="text-gray-900 mb-6">Looking to upskill teams with proven learning paths?</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Explore our enterprise-ready certificate programs in AI, Risk, and Quant Finance. Structured pathways designed for teams to master complex skills together.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="bg-[#007CBF] w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1">Comprehensive Learning Paths</div>
                    <p className="text-gray-600 text-sm">Bundle multiple courses into cohesive certificate programs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#007CBF] w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1">Group Discounts & Cohort Management</div>
                    <p className="text-gray-600 text-sm">Train entire teams with dedicated support and tracking</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#007CBF] w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1">Industry-Recognized Credentials</div>
                    <p className="text-gray-600 text-sm">Digital certificates with LinkedIn integration</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg"
                  className="bg-[#007CBF] hover:bg-[#006A9C] text-white h-12 px-8"
                  onClick={() => window.location.href = '/certificate-programs'}
                  aria-label="Navigate to certificate programs page to explore structured learning paths"
                >
                  Explore Certificate Programs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#007CBF] text-[#007CBF] hover:bg-blue-50 h-12 px-8"
                  onClick={() => {
                    // Trigger download of 1-pager PDF
                    const link = document.createElement('a');
                    link.href = '/assets/certificate-programs-enterprise.pdf';
                    link.download = 'QuantUniversity-Certificate-Programs.pdf';
                    link.click();
                  }}
                  aria-label="Download one-page PDF overview of certificate programs for enterprise training"
                >
                  Download 1-Pager
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            <Card className="border-2 border-[#007CBF] bg-white shadow-xl">
              <CardContent className="p-8">
                <h4 className="text-gray-900 mb-6">Available Certificate Programs</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg border-2 border-blue-200 hover:border-[#007CBF] transition-all cursor-pointer">
                    <div className="bg-[#007CBF] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-gray-900 mb-1">AI & Risk Management</div>
                      <div className="text-sm text-gray-600">5 courses • 60 hours</div>
                    </div>
                    <Badge className="bg-[#007CBF] text-white">Popular</Badge>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg border-2 border-blue-200 hover:border-[#007CBF] transition-all cursor-pointer">
                    <div className="bg-[#007CBF] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-gray-900 mb-1">Responsible GenAI</div>
                      <div className="text-sm text-gray-600">5 courses • 50 hours</div>
                    </div>
                    <Badge className="bg-[#007CBF] text-white">New</Badge>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg border-2 border-blue-200 hover:border-[#007CBF] transition-all cursor-pointer">
                    <div className="bg-[#007CBF] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-gray-900 mb-1">Quant Finance Foundations</div>
                      <div className="text-sm text-gray-600">6 courses • 72 hours</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
                  <div className="flex items-center gap-2 text-[#007CBF] mb-2">
                    <Users className="h-5 w-5" />
                    <span className="font-semibold">Team Pricing Available</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Save up to 30% when enrolling teams of 5 or more
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#007CBF]/10 text-[#007CBF] border-0">
              Our Process
            </Badge>
            <h2 className="text-gray-900 mb-4">Your Path to AI Excellence</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven 4-step framework to build and scale AI capability in your organization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="border-2 border-gray-200 hover:border-[#007CBF] transition-all hover-lift h-full">
                  <CardContent className="p-6">
                    <div className="text-6xl text-[#007CBF]/10 mb-4">{step.number}</div>
                    <div className="bg-[#007CBF]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <step.icon className="h-6 w-6 text-[#007CBF]" />
                    </div>
                    <h4 className="text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </CardContent>
                </Card>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-[#007CBF]/20" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid with Hover Overlays */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#007CBF]/10 text-[#007CBF] border-0">
              What We Offer
            </Badge>
            <h2 className="text-gray-900 mb-4">Comprehensive Enterprise Solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Flexible programs designed to meet your organization's unique needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {offerings.map((offering, index) => (
              <div key={index} className="group relative">
                <Card className="border-2 hover:border-[#007CBF] transition-all hover-lift bg-white overflow-hidden h-full">
                  <CardContent className="p-8 relative">
                    <div className="bg-[#007CBF]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                      <offering.icon className="h-8 w-8 text-[#007CBF]" />
                    </div>
                    <h3 className="text-gray-900 mb-3">{offering.title}</h3>
                    <p className="text-gray-600 mb-6">{offering.description}</p>
                    <ul className="space-y-3">
                      {offering.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-3 text-gray-700">
                          <CheckCircle className="h-5 w-5 text-[#007CBF] flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Hover Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-br from-[#007CBF] to-[#005A8C] p-8 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <div className="bg-white/20 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                        <offering.icon className="h-10 w-10 text-white" />
                      </div>
                      <h4 className="text-white mb-4">What's Inside</h4>
                      <p className="text-white/90 text-lg leading-relaxed max-w-sm">
                        {offering.whatsInside}
                      </p>
                      <Button className="mt-6 bg-white text-[#007CBF] hover:bg-gray-100">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRMIA Partnership - Collapsible Section */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <Collapsible open={isPrmiaOpen} onOpenChange={setIsPrmiaOpen}>
            <div className="bg-gradient-to-br from-[#007CBF] to-[#005A8C] rounded-2xl overflow-hidden">
              <div className="p-8 lg:p-12">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    {/* PRMIA Logo Badge */}
                    <div className="bg-white rounded-xl p-4 shadow-lg">
                      <div className="flex items-center gap-2">
                        <Handshake className="h-8 w-8 text-[#007CBF]" />
                        <div className="text-left">
                          <div className="text-xs text-gray-600">Partner</div>
                          <div className="text-[#007CBF]">PRMIA</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Badge className="bg-white/10 text-white border-white/20 text-sm mb-2">
                        Official Partnership
                      </Badge>
                      <h2 className="text-white">PRMIA Partnership Benefits</h2>
                    </div>
                  </div>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" className="text-white hover:bg-white/10">
                      {isPrmiaOpen ? (
                        <>
                          <ChevronUp className="h-5 w-5 mr-2" />
                          Show Less
                        </>
                      ) : (
                        <>
                          <ChevronDown className="h-5 w-5 mr-2" />
                          Learn More
                        </>
                      )}
                    </Button>
                  </CollapsibleTrigger>
                </div>

                <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl">
                  QuantUniversity is proud to partner with the Professional Risk Managers' International Association (PRMIA) to advance risk management education globally.
                </p>

                <CollapsibleContent>
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="grid lg:grid-cols-2 gap-8 mt-8">
                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-white/10 backdrop-blur-sm w-12 h-12 rounded-lg flex items-center justify-center border border-white/20 flex-shrink-0">
                            <Star className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="text-white mb-2">10% Additional Member Discount</h4>
                            <p className="text-white/80">
                              PRMIA members receive an exclusive 10% discount on all QuantUniversity courses and certification programs
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <div className="bg-white/10 backdrop-blur-sm w-12 h-12 rounded-lg flex items-center justify-center border border-white/20 flex-shrink-0">
                            <GraduationCap className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="text-white mb-2">Earn CRL Credits</h4>
                            <p className="text-white/80">
                              Complete courses and earn Continuing Risk Learning (CRL) credits to maintain your PRMIA professional designation
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="bg-white/10 backdrop-blur-sm w-12 h-12 rounded-lg flex items-center justify-center border border-white/20 flex-shrink-0">
                            <Users className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="text-white mb-2">Exclusive Member Events</h4>
                            <p className="text-white/80">
                              Access to joint webinars, workshops, and networking events for PRMIA members
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                        <div className="text-center mb-6">
                          <div className="text-6xl text-white mb-3">10%</div>
                          <div className="text-xl text-white/90">Member Discount</div>
                          <div className="text-sm text-white/60 mt-2">On all courses & certifications</div>
                        </div>
                        
                        <div className="h-px bg-white/20 my-6"></div>
                        
                        <div className="space-y-3">
                          <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                            <span className="text-white">CRL Credits Available</span>
                            <CheckCircle className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                            <span className="text-white">All Certification Programs</span>
                            <CheckCircle className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                            <span className="text-white">Team Training Eligible</span>
                            <CheckCircle className="h-6 w-6 text-white" />
                          </div>
                        </div>

                        <Button 
                          variant="secondary" 
                          className="w-full mt-6 bg-white text-[#007CBF] hover:bg-gray-100"
                        >
                          Claim PRMIA Discount
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </CollapsibleContent>
              </div>
            </div>
          </Collapsible>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#007CBF]/10 text-[#007CBF] border-0">
              Success Stories
            </Badge>
            <h2 className="text-gray-900 mb-4">Real Results from Real Clients</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how leading financial institutions transformed their teams with QuantUniversity
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Original Case Study */}
            <div className="bg-gradient-to-br from-[#007CBF] to-[#006A9C] rounded-2xl p-8 lg:p-12 text-white">
              <Badge className="mb-6 bg-white/10 text-white border-white/20">
                Case Study
              </Badge>
              <h3 className="text-white mb-4">Trained 150 Analysts to Implement ML Risk Frameworks</h3>
              <p className="text-lg text-white/90 mb-6">
                A global investment bank partnered with QuantUniversity to upskill their entire risk analytics team in machine learning and AI risk management.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-white" />
                  <span className="text-white/90">40% reduction in model validation time</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-white" />
                  <span className="text-white/90">150 analysts certified in 6 months</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-white" />
                  <span className="text-white/90">Deployed 12 new ML risk models</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-3xl text-white mb-1">150</div>
                  <div className="text-white/80 text-sm">Analysts Trained</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-3xl text-white mb-1">40%</div>
                  <div className="text-white/80 text-sm">Time Saved</div>
                </div>
              </div>
              <Button 
                variant="secondary" 
                className="bg-white text-[#007CBF] hover:bg-gray-100 w-full"
              >
                Read Full Case Study
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Citizens Bank Certificate Case Study */}
            <div className="bg-gradient-to-br from-[#007CBF] to-[#006A9C] rounded-2xl p-8 lg:p-12 text-white">
              <Badge className="mb-6 bg-white/10 text-white border-white/20 flex items-center gap-1 w-fit">
                <Award className="h-3 w-3" />
                Certificate Program Success
              </Badge>
              <h3 className="text-white mb-4">Citizens Bank: 30+ Model Risk Analysts Certified</h3>
              <p className="text-lg text-white/90 mb-6">
                Citizens Bank upskilled 30+ model risk analysts using our AI Risk Certificate program, achieving measurable improvements in validation efficiency and AI governance.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-white" />
                  <span className="text-white/90">30+ analysts earned AI Risk Certificate</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-white" />
                  <span className="text-white/90">Completed in 4 months with cohort model</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-white" />
                  <span className="text-white/90">35% faster model audit workflows</span>
                </div>
              </div>

              {/* Certificate Mockup */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border-2 border-white/20 mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70 mb-1">QuantUniversity Certificate</div>
                    <div className="text-white">AI & Risk Management</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/10 rounded p-3">
                    <div className="text-2xl text-white mb-1">30+</div>
                    <div className="text-white/80 text-xs">Certificates Earned</div>
                  </div>
                  <div className="bg-white/10 rounded p-3">
                    <div className="text-2xl text-white mb-1">35%</div>
                    <div className="text-white/80 text-xs">Efficiency Gain</div>
                  </div>
                </div>
              </div>

              <Button 
                variant="secondary" 
                className="bg-white text-[#007CBF] hover:bg-gray-100 w-full"
              >
                View Certificate Programs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#007CBF]/10 text-[#007CBF] border-0">
              What Leaders Say
            </Badge>
            <h2 className="text-gray-900 mb-4">Trusted by Financial Institutions Worldwide</h2>
            <p className="text-xl text-gray-600">
              Join JPMorgan Chase, Bank of America, and other leading institutions
            </p>
          </div>

          <ScrollableCarousel>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]" style={{ scrollSnapAlign: 'start' }}>
                <Card className="border-2 hover:border-[#007CBF] transition-all hover-lift bg-white h-full">
                  <CardContent className="p-8">
                    {/* Company Logo/Image */}
                    <div className="relative h-32 mb-6 rounded-lg overflow-hidden bg-gray-100">
                      <ImageWithFallback
                        src={testimonial.image}
                        alt={`${testimonial.company} financial institution building - enterprise client of QuantUniversity`}
                        className="w-full h-full object-cover opacity-40"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white rounded-xl p-4 shadow-lg">
                          <div className="text-2xl text-[#007CBF]">{testimonial.logo}</div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="text-5xl text-[#007CBF]/10 font-serif leading-none">"</div>
                    </div>
                    <p className="text-gray-700 mb-6 italic leading-relaxed">
                      {testimonial.quote}
                    </p>
                    <div className="border-t pt-4">
                      <div className="text-gray-900 mb-1">{testimonial.author}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-sm text-[#007CBF] mt-2">{testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </ScrollableCarousel>

          {/* Client Logos Row */}
          <div className="mt-12 pt-8 border-t">
            <p className="text-center text-gray-600 mb-6">Trusted by leading financial institutions</p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {['JPM', 'BoA', 'VRS', 'CPS', 'MM'].map((logo, idx) => (
                <div key={idx} className="bg-gray-50 rounded-lg px-8 py-4 border border-gray-200">
                  <div className="text-xl text-gray-400">{logo}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form with Calendly CTA */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto px-8 lg:px-20">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#007CBF]/10 text-[#007CBF] border-0">
              Get Started
            </Badge>
            <h2 className="text-gray-900 mb-4">Schedule a Discovery Call</h2>
            <p className="text-xl text-gray-600">
              Let's discuss how QuantUniversity can help your organization build AI capability
            </p>
          </div>

          <Card className="border-2 border-gray-200">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      Name *
                    </label>
                    <Input 
                      placeholder="John Doe"
                      className="border-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      Organization *
                    </label>
                    <Input 
                      placeholder="Your Company"
                      className="border-gray-300"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      Work Email *
                    </label>
                    <Input 
                      type="email"
                      placeholder="john@company.com"
                      className="border-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      Team Size *
                    </label>
                    <Select>
                      <SelectTrigger className="border-gray-300">
                        <SelectValue placeholder="Select team size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 people</SelectItem>
                        <SelectItem value="11-50">11-50 people</SelectItem>
                        <SelectItem value="51-200">51-200 people</SelectItem>
                        <SelectItem value="200+">200+ people</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Interest
                  </label>
                  <Select>
                    <SelectTrigger className="border-gray-300">
                      <SelectValue placeholder="What are you looking for?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="assessment">AI Readiness Assessment</SelectItem>
                      <SelectItem value="certification">Team Certification Program</SelectItem>
                      <SelectItem value="workshop">Custom Workshop</SelectItem>
                      <SelectItem value="integration">LMS Integration</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your training needs..."
                    rows={4}
                    className="border-gray-300"
                  />
                </div>

                <div className="flex gap-3">
                  <Button 
                    type="submit"
                    size="lg"
                    className="flex-1 bg-[#007CBF] hover:bg-[#006A9C] text-white h-12"
                  >
                    Submit Inquiry
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    type="button"
                    size="lg"
                    variant="outline"
                    className="flex-1 border-2 border-[#007CBF] text-[#007CBF] hover:bg-[#007CBF] hover:text-white h-12"
                    onClick={() => setShowCalendly(true)}
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Book a Call Instead
                  </Button>
                </div>

                <p className="text-sm text-gray-500 text-center">
                  We'll respond within 24 hours to schedule your consultation
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
export default EnterprisePage;