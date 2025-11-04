import { useState } from 'react';
import { Compass, FlaskConical, Trophy, ChartLine, Clock, BookOpen, Code, Award, Star, ArrowRight, Brain, Zap, Users, MessageCircle, ExternalLink, Play, Linkedin, BadgeCheck, Home, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from '../components/ui/breadcrumb';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ScrollableCarousel } from '../components/ScrollableCarousel';
import { motion, AnimatePresence } from 'motion/react';
import { SEO } from '../components/SEO';
import { pageSEO, generateFAQSchema, generateBreadcrumbSchema } from '../data/seo';

interface HowYouLearnPageProps {
  onNavigate?: (page: string) => void;
}

export function HowYouLearnPage({ onNavigate }: HowYouLearnPageProps = {}) {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [showChatbot, setShowChatbot] = useState(false);

  const learningSteps = [
    {
      icon: Compass,
      title: 'Explore',
      description: 'Start with curated, finance-specific AI and model risk content authored by industry leaders.',
      micro: 'Video + reading + quiz',
      color: 'from-blue-500 to-cyan-500',
      quote: '"Master the theory with expert-curated content designed for finance professionals."',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MjA1ODI0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      icon: FlaskConical,
      title: 'Experience',
      description: 'Apply concepts in guided labs, scenario-based exercises, and on-demand case studies that mirror real financial workflows.',
      micro: 'Hands-on labs powered by QuCreate.ai',
      color: 'from-cyan-500 to-teal-500',
      quote: '"Practice in realistic environments that mirror actual financial workflows."',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBsYXB0b3B8ZW58MXx8fHwxNzYyMTE0MDgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      icon: Trophy,
      title: 'Excel',
      description: 'Demonstrate mastery with graded assignments, capstones, and certificates recognized by financial institutions.',
      micro: 'Exportable evidence for employers / LMS',
      color: 'from-teal-500 to-green-500',
      quote: '"Earn industry-recognized credentials that prove your expertise."',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2hpZXZlbWVudCUyMGF3YXJkfGVufDF8fHx8MTc2MjExNDA4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      icon: BadgeCheck,
      title: 'Certificate Program',
      description: 'Complete structured learning pathways that bundle multiple courses into comprehensive professional certificates.',
      micro: 'Industry-recognized credentials',
      color: 'from-green-500 to-emerald-600',
      quote: '"Advance your career with professional certificates recognized by top financial institutions."',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VydGlmaWNhdGV8ZW58MXx8fHwxNzYyMTE0MDgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const aiPlatforms = [
    {
      name: 'QuCreate.ai',
      description: 'Auto-generates lessons, labs, and assessments from your source material.',
      benefit: 'Faster curriculum updates for fast-moving AI topics',
      icon: Brain,
      logo: '🧠',
      screenshot: 'https://images.unsplash.com/photo-1676276375900-dd41f828c985?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFybmluZyUyMG1hbmFnZW1lbnQlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzYyMTkwOTA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      demoContent: {
        title: 'QuCreate.ai Platform',
        description: 'AI-powered content creation engine that automatically generates learning materials from your source content.',
        features: [
          'Auto-generate lessons from PDFs, videos, and documents',
          'Create interactive labs and coding exercises',
          'Build assessments aligned to learning objectives',
          'Update content 10x faster than manual authoring',
          'Maintain consistency across all learning materials'
        ],
        stats: [
          { label: 'Content Generation Speed', value: '10x faster' },
          { label: 'Courses Created', value: '500+' },
          { label: 'Hours Saved', value: '50,000+' }
        ]
      }
    },
    {
      name: 'QuSkillbridge.ai',
      description: '24×7, learn-at-your-own-pace environment for professionals.',
      benefit: 'Track progress, revisit labs, and practice anytime',
      icon: Zap,
      logo: '⚡',
      screenshot: 'https://images.unsplash.com/photo-1588912914078-2fe5224fd8b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBjb3Vyc2UlMjBwbGF0Zm9ybXxlbnwxfHx8fDE3NjIxOTA5MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      demoContent: {
        title: 'QuSkillbridge.ai Platform',
        description: 'Intelligent learning management system designed specifically for financial professionals.',
        features: [
          'Access courses and labs 24/7 from anywhere',
          'Personalized learning paths based on your role',
          'Real-time progress tracking and analytics',
          'Integrated code environments for hands-on practice',
          'Mobile-responsive for learning on the go'
        ],
        stats: [
          { label: 'Active Learners', value: '25,000+' },
          { label: 'Course Completion Rate', value: '87%' },
          { label: 'Average Rating', value: '4.9/5' }
        ]
      }
    }
  ];

  const learningAssets = [
    {
      icon: Code,
      title: 'Guided Labs',
      description: 'Step-by-step exercises in Python/MATLAB/Snowflake to implement real AI use cases.',
      tag: 'Lab-ready'
    },
    {
      icon: BookOpen,
      title: 'Case Studies on Demand',
      description: 'Financial/risk scenarios available 24/7 — perfect for teams across time zones.',
      tag: '24/7 Access'
    },
    {
      icon: Award,
      title: 'Assessments & Certificates',
      description: 'Quizzes, scenario evaluations, and certificates aligned to industry practice.',
      tag: 'Industry-recognized'
    }
  ];

  const testimonials = [
    {
      quote: "The Explore-Experience-Excel framework gave our analysts the structured learning they needed to deploy AI responsibly. Sri's emphasis on model risk management was exactly what we needed.",
      name: "Sri Krishnamurthy",
      role: "Founder & Chief Learning Officer",
      org: "QuantUniversity",
      vertical: "AI Education",
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW58ZW58MXx8fHwxNzYyMTE0MDgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      isSri: true,
      hasCertificate: false,
      hasLinkedIn: false
    },
    {
      quote: "QuantUniversity gave our team exactly what we needed to understand AI risk — without the fluff. The hands-on labs made all the difference.",
      name: "Jennifer Park",
      role: "VP Model Validation",
      org: "Regional Bank",
      vertical: "Risk / Model Validation",
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbnxlbnwxfHx8fDE3NjIxMTQwODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      isSri: false,
      hasCertificate: false,
      hasLinkedIn: false
    },
    {
      quote: "Got hired as Quant Analyst after finishing the Risk Certificate. The structured program gave me exactly what I needed to transition from traditional finance to AI risk management.",
      name: "Michael Torres",
      role: "Quantitative Analyst",
      org: "Goldman Sachs",
      vertical: "AI & Risk Management Certificate",
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBoZWFkc2hvdHxlbnwxfHx8fDE3NjIxMTQwODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      isSri: false,
      hasCertificate: true,
      hasLinkedIn: true,
      certificateName: "AI & Risk Management"
    },
    {
      quote: "Being able to practice in the labs at 10pm was a game changer. The flexibility fits our global team perfectly.",
      name: "David Chen",
      role: "Quantitative Analyst",
      org: "Asset Management",
      vertical: "Data Science / Investment",
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhc2lhbiUyMG1hbnxlbnwxfHx8fDE3NjIxMTQwODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      isSri: false,
      hasCertificate: false,
      hasLinkedIn: false
    },
    {
      quote: "The Responsible GenAI Certificate transformed how I approach AI deployment. Got promoted to Senior AI Engineer within 3 months of completing the program.",
      name: "Sarah Williams",
      role: "Senior AI Engineer",
      org: "JPMorgan Chase",
      vertical: "Responsible GenAI Certificate",
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGhlYWRzaG90fGVufDF8fHx8MTc2MjExNDA4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      isSri: false,
      hasCertificate: true,
      hasLinkedIn: true,
      certificateName: "Responsible GenAI"
    },
    {
      quote: "We rolled this out to 120+ analysts in 3 countries. The AI-powered platform made it seamless.",
      name: "Maria Rodriguez",
      role: "Head of Learning & Development",
      org: "Global Investment Bank",
      vertical: "Enterprise Training",
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsYXRpbmElMjB3b21hbnxlbnwxfHx8fDE3NjIxMTQwODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      isSri: false,
      hasCertificate: false,
      hasLinkedIn: false
    },
    {
      quote: "Completed the Quant Finance Foundations Certificate while working full-time. The self-paced format and practical projects helped me land my dream role at a hedge fund.",
      name: "Alex Kumar",
      role: "Quantitative Trader",
      org: "Citadel",
      vertical: "Quant Finance Foundations Certificate",
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjIxMTQwODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      isSri: false,
      hasCertificate: true,
      hasLinkedIn: true,
      certificateName: "Quant Finance Foundations"
    }
  ];

  // FAQs for structured data
  const faqs = [
    {
      question: "What is the Explore-Experience-Excel framework?",
      answer: "Our proven learning methodology combines expert-curated content (Explore), hands-on labs and case studies (Experience), and graded assessments with industry-recognized certificates (Excel). This approach ensures both conceptual understanding and practical skills."
    },
    {
      question: "What is QuCreate.ai?",
      answer: "QuCreate.ai is our AI-powered content creation engine that automatically generates lessons, labs, and assessments from source materials. This enables us to update curriculum 10x faster than traditional methods, keeping pace with rapidly evolving AI topics."
    },
    {
      question: "What is QuSkillbridge.ai?",
      answer: "QuSkillbridge.ai is our intelligent learning management system that provides 24/7 access to courses and labs. It offers personalized learning paths, real-time progress tracking, and integrated code environments for hands-on practice."
    },
    {
      question: "Can I access the labs and courses anytime?",
      answer: "Yes! Our platform provides 24/7 access to all courses, labs, and case studies. This flexibility is perfect for busy professionals and teams across different time zones who need to learn at their own pace."
    },
    {
      question: "Are the certificates recognized by employers?",
      answer: "Yes, our certificates are recognized by top financial institutions globally. They can be exported as verifiable credentials and shared on LinkedIn or integrated into your organization's LMS."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title={pageSEO['how-you-learn'].title}
        description={pageSEO['how-you-learn'].description}
        keywords={pageSEO['how-you-learn'].keywords}
        canonicalUrl={pageSEO['how-you-learn'].canonicalUrl}
        ogType={pageSEO['how-you-learn'].ogType}
        structuredData={[
          generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'How You Learn', url: '/how-you-learn' }
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
                <BreadcrumbPage className="text-gray-900">How You Learn</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-50 via-blue-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDdDQkYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <Badge className="mb-6 bg-[#007CBF]/10 text-[#007CBF] border-0">
                Our Learning Approach
              </Badge>
              <h1 className="text-gray-900 mb-6">A proven, AI-powered way to learn AI in finance.</h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                Our Explore–Experience–Excel framework blends expert-led content, hands-on labs, and industry case studies, available 24/7 — powered by QuCreate.ai and delivered through QuSkillbridge.ai.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-[#007CBF] hover:bg-[#006A9C] text-white h-12 px-8"
                  onClick={() => onNavigate && onNavigate('courses')}
                  aria-label="Navigate to courses page to view all available AI and finance courses"
                >
                  View Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-gray-300 hover:border-[#007CBF] hover:text-[#007CBF] h-12 px-8"
                  onClick={() => onNavigate && onNavigate('enterprise')}
                  aria-label="Navigate to enterprise page to explore custom learning paths for organizations"
                >
                  See Enterprise Learning Paths
                </Button>
              </div>
            </div>
            
            <div className="lg:col-span-4">
              <Card className="border-2 border-[#007CBF]/20 shadow-xl">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-br from-[#007CBF] to-[#005A8C] rounded-lg p-6 text-white mb-4">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-white/20 text-white border-0">In Progress</Badge>
                      <ChartLine className="h-5 w-5" />
                    </div>
                    <h4 className="text-white mb-2">AI Risk Management</h4>
                    <p className="text-white/80 text-sm mb-4">Professional Certificate</p>
                    <Progress value={45} className="h-2 bg-white/20" />
                    <p className="text-white/90 text-sm mt-2">45% Complete</p>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                    <span>Next Module:</span>
                    <Badge variant="outline" className="text-[#007CBF] border-[#007CBF]">New</Badge>
                  </div>
                  <p className="text-gray-900 mb-4">Agentic AI Case Study</p>
                  <Button 
                    className="w-full bg-[#007CBF] hover:bg-[#006A9C] text-white"
                    aria-label="Resume learning AI Risk Management certificate program from where you left off"
                  >
                    Resume Learning
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Text */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              Learning AI in finance is different. You need relevance, hands-on practice, and access — not generic tech content. That's why we built an AI-powered learning model designed for banks, asset managers, insurers, and regulators.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Learning Journey - Explore, Experience, Excel */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Our Explore • Experience • Excel paradigm</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Designed for busy financial professionals who need both conceptual clarity and hands-on practice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {learningSteps.map((step, index) => (
              <motion.div
                key={index}
                onHoverStart={() => setHoveredStep(index)}
                onHoverEnd={() => setHoveredStep(null)}
                className="relative"
              >
                <Card 
                  className={`border-2 transition-all h-full overflow-hidden cursor-pointer ${
                    hoveredStep === index ? 'border-[#007CBF] shadow-2xl' : 'border-gray-200 hover:border-[#007CBF]'
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {hoveredStep === index ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="relative h-full"
                      >
                        {/* Expanded State with Image */}
                        <div className="relative h-64 overflow-hidden">
                          <ImageWithFallback
                            src={step.image}
                            alt={`${step.title} - ${step.description}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                          <div className="absolute inset-0 flex items-center justify-center p-8">
                            <div className={`bg-gradient-to-br ${step.color} w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl`}>
                              <step.icon className="h-10 w-10 text-white" />
                            </div>
                          </div>
                        </div>
                        <CardContent className="p-8">
                          <h3 className="text-gray-900 mb-4">{step.title}</h3>
                          <p className="text-gray-600 mb-6 leading-relaxed">
                            {step.description}
                          </p>
                          <div className="bg-blue-50 border-l-4 border-[#007CBF] p-4 rounded-r-lg mb-4">
                            <p className="text-gray-700 italic">
                              {step.quote}
                            </p>
                          </div>
                          <Badge variant="outline" className="text-[#007CBF] border-[#007CBF]">
                            {step.micro}
                          </Badge>
                        </CardContent>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Default State */}
                        <CardContent className="p-8">
                          <div className={`bg-gradient-to-br ${step.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                            <step.icon className="h-8 w-8 text-white" />
                          </div>
                          <h3 className="text-gray-900 mb-4">{step.title}</h3>
                          <p className="text-gray-600 mb-6 leading-relaxed">
                            {step.description}
                          </p>
                          <Badge variant="outline" className="text-[#007CBF] border-[#007CBF]">
                            {step.micro}
                          </Badge>
                          <div className="mt-6 text-sm text-gray-500 flex items-center gap-2">
                            <span>Hover to explore</span>
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        </CardContent>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI-Powered Delivery with Platform Logos */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-[#007CBF]/10 text-[#007CBF] border-0">
                AI Learning Stack
              </Badge>
              <h2 className="text-gray-900 mb-4">Powered by our AI learning stack</h2>
              <p className="text-xl text-gray-600 mb-8">
                We don't just teach AI — we use AI to create, adapt, and deliver the learning experience.
              </p>

              <div className="space-y-6">
                {aiPlatforms.map((platform, index) => (
                  <Dialog key={index}>
                    <DialogTrigger asChild>
                      <div className="border-2 hover:border-[#007CBF] transition-all cursor-pointer hover-lift group overflow-hidden rounded-lg bg-white">
                        <div className="grid md:grid-cols-[1fr_200px] gap-0">
                          <div className="p-6">
                            <div className="flex items-start gap-4 mb-4">
                              <div className="bg-[#007CBF]/10 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                <span className="text-4xl">{platform.logo}</span>
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                  <h4 className="text-gray-900">{platform.name}</h4>
                                  <ExternalLink className="h-4 w-4 text-[#007CBF] opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <p className="text-gray-600 mb-3">{platform.description}</p>
                                <div className="flex items-center gap-2 text-sm text-[#007CBF]">
                                  <Star className="h-4 w-4 fill-current" />
                                  <span>{platform.benefit}</span>
                                </div>
                              </div>
                            </div>
                            <div className="text-sm text-gray-500 flex items-center gap-2">
                              <Play className="h-4 w-4" />
                              <span>Click to see platform demo</span>
                            </div>
                          </div>
                          <div className="relative h-full min-h-[180px] hidden md:block">
                            <ImageWithFallback
                              src={platform.screenshot}
                              alt={`${platform.name} platform preview showing AI-powered learning management interface`}
                              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent"></div>
                          </div>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-5xl">{platform.logo}</span>
                          <DialogTitle>{platform.demoContent.title}</DialogTitle>
                        </div>
                        <DialogDescription>
                          {platform.demoContent.description}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-6">
                        
                        {/* Platform Screenshot */}
                        <div className="relative rounded-lg overflow-hidden border-2 border-gray-200 shadow-lg">
                          <ImageWithFallback
                            src={platform.screenshot}
                            alt={`${platform.name} platform screenshot showing AI-powered learning management system dashboard and features`}
                            className="w-full h-auto"
                            loading="lazy"
                          />
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-[#007CBF] text-white shadow-lg">
                              Platform Preview
                            </Badge>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-gray-900 mb-3">Key Features</h4>
                            <ul className="space-y-2">
                              {platform.demoContent.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <div className="w-5 h-5 rounded-full bg-[#007CBF]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <div className="w-2 h-2 rounded-full bg-[#007CBF]"></div>
                                  </div>
                                  <span className="text-gray-700 text-sm">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-gray-900 mb-3">Platform Stats</h4>
                            <div className="space-y-3">
                              {platform.demoContent.stats.map((stat, idx) => (
                                <Card key={idx} className="border-2">
                                  <CardContent className="p-4">
                                    <div className="text-2xl text-[#007CBF] mb-1">{stat.value}</div>
                                    <div className="text-xs text-gray-600">{stat.label}</div>
                                  </CardContent>
                                </Card>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <Button className="flex-1 bg-[#007CBF] hover:bg-[#006A9C] text-white">
                            <Play className="mr-2 h-4 w-4" />
                            Watch Demo
                          </Button>
                          <Button variant="outline" className="flex-1">
                            Learn More
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </div>

            <div>
              <Card className="border-2 border-[#007CBF]/20 shadow-xl bg-white">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-gray-900">Your Learning Path</h4>
                    <Badge className="bg-[#007CBF] text-white">Active</Badge>
                  </div>
                  
                  <div className="bg-gradient-to-br from-[#007CBF] to-[#005A8C] rounded-xl p-6 text-white mb-6">
                    <h3 className="text-white mb-2">AI in Risk Management</h3>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-white/90">45% Complete</span>
                      <span className="text-white/90">12 of 27 modules</span>
                    </div>
                    <Progress value={45} className="h-3 bg-white/20 mb-4" />
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <p className="text-sm text-white/80 mb-2">Next Up:</p>
                      <p className="text-white">Agentic AI Case Study</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#007CBF] flex items-center justify-center">
                          <Award className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-gray-700">5 modules completed</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                          <Code className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-gray-700">3 labs in progress</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
                          <Clock className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-gray-700">Available 24/7</span>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full mt-6 bg-[#007CBF] hover:bg-[#006A9C] text-white">
                    Resume Learning
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Hands-on Learning Assets */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Learn by doing — not by watching.</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every course includes practical artifacts so your teams can implement AI in real financial settings.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {learningAssets.map((asset, index) => (
              <Card key={index} className="border-2 hover:border-[#007CBF] transition-all hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-[#007CBF]/10 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                      <asset.icon className="h-7 w-7 text-[#007CBF]" />
                    </div>
                    <Badge className="bg-[#007CBF] text-white">{asset.tag}</Badge>
                  </div>
                  <h3 className="text-gray-900 mb-3">{asset.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{asset.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Success Stories */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#007CBF] text-white">
              <BadgeCheck className="h-3 w-3 mr-1" />
              Certificate Success Stories
            </Badge>
            <h2 className="text-gray-900 mb-4">Career advancement through certificates</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real professionals who completed our certificate programs and transformed their careers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.filter(t => t.hasCertificate).map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-2 border-[#007CBF] bg-gradient-to-br from-blue-50 to-white hover-lift h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-[#007CBF] text-white flex items-center gap-1">
                        <BadgeCheck className="h-3 w-3" />
                        Certificate Holder
                      </Badge>
                      <Linkedin className="h-5 w-5 text-[#0A66C2]" />
                    </div>
                    <div className="mb-6 flex items-center gap-4">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#007CBF]">
                          <ImageWithFallback
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#007CBF] flex items-center justify-center border-2 border-white">
                          <Award className="h-3 w-3 text-white" />
                        </div>
                      </div>
                      <div>
                        <div className="text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                        <div className="text-sm text-gray-500">{testimonial.org}</div>
                      </div>
                    </div>
                    <div className="mb-6">
                      <div className="text-4xl text-[#007CBF]/10 font-serif leading-none mb-2">"</div>
                    </div>
                    <p className="text-gray-700 mb-6 italic leading-relaxed">
                      {testimonial.quote}
                    </p>
                    <Badge variant="outline" className="text-[#007CBF] border-[#007CBF] bg-white">
                      {testimonial.vertical}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-[#007CBF] hover:bg-[#006A9C] text-white h-12 px-8"
              onClick={() => onNavigate && onNavigate('certificate-programs')}
            >
              Explore Certificate Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Dynamic Testimonials Slider */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <h2 className="text-gray-900">What finance professionals are saying</h2>
              <Badge className="bg-[#007CBF] text-white">
                <Star className="h-3 w-3 fill-current mr-1" />
                4.9 / 5 from 5000+ learners
              </Badge>
            </div>
          </div>

          <ScrollableCarousel>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]" style={{ scrollSnapAlign: 'start' }}>
                <Card className={`border-2 transition-all hover-lift bg-white h-full ${
                  testimonial.isSri ? 'border-[#007CBF] bg-gradient-to-br from-blue-50 to-white' : 
                  testimonial.hasCertificate ? 'border-[#007CBF] bg-gradient-to-br from-blue-50 to-white' :
                  'border-gray-200 hover:border-[#007CBF]'
                }`}>
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      {testimonial.isSri && (
                        <Badge className="bg-[#007CBF] text-white">
                          From Our Founder
                        </Badge>
                      )}
                      {testimonial.hasCertificate && (
                        <Badge className="bg-[#007CBF] text-white flex items-center gap-1">
                          <BadgeCheck className="h-3 w-3" />
                          Certificate Holder
                        </Badge>
                      )}
                      {testimonial.hasLinkedIn && (
                        <div className="ml-auto">
                          <Linkedin className="h-5 w-5 text-[#0A66C2]" />
                        </div>
                      )}
                    </div>
                    <div className="mb-6 flex items-center gap-4">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#007CBF]">
                          <ImageWithFallback
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {testimonial.isSri && (
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#007CBF] flex items-center justify-center border-2 border-white">
                            <Star className="h-3 w-3 text-white fill-current" />
                          </div>
                        )}
                        {testimonial.hasCertificate && (
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#007CBF] flex items-center justify-center border-2 border-white">
                            <Award className="h-3 w-3 text-white" />
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                        <div className="text-sm text-gray-500">{testimonial.org}</div>
                      </div>
                    </div>
                    <div className="mb-6">
                      <div className="text-4xl text-[#007CBF]/10 font-serif leading-none mb-2">"</div>
                    </div>
                    <p className="text-gray-700 mb-6 italic leading-relaxed">
                      {testimonial.quote}
                    </p>
                    <Badge variant="outline" className="text-[#007CBF] border-[#007CBF] bg-white">
                      {testimonial.vertical}
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            ))}
          </ScrollableCarousel>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-[#006A9C] to-[#007CBF]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20 text-center">
          <h2 className="text-white mb-4">Ready to learn this way?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start with an on-demand course today, or book an enterprise learning rollout.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {onNavigate && (
              <Button 
                size="lg" 
                className="bg-white text-[#007CBF] hover:bg-gray-100 h-14 px-8"
                onClick={() => onNavigate('courses')}
              >
                Browse Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            )}
            {onNavigate && (
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#007CBF] h-14 px-8"
                onClick={() => onNavigate('enterprise')}
              >
                Talk to us about enterprise
                <Users className="ml-2 h-5 w-5" />
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Sticky Browse Learning Paths CTA */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 right-6 z-50 flex gap-3"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            size="lg"
            className="bg-[#007CBF] hover:bg-[#006A9C] text-white shadow-2xl h-14 px-6"
            onClick={() => onNavigate && onNavigate('courses')}
          >
            <BookOpen className="mr-2 h-5 w-5" />
            Browse Learning Paths
          </Button>
        </motion.div>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            size="lg"
            variant="outline"
            className="bg-white border-2 border-[#007CBF] text-[#007CBF] hover:bg-[#007CBF] hover:text-white shadow-2xl h-14 px-6"
            onClick={() => setShowChatbot(!showChatbot)}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Course Advisor
          </Button>
        </motion.div>
      </motion.div>

      {/* Chatbot Modal */}
      <AnimatePresence>
        {showChatbot && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-96"
          >
            <Card className="border-2 border-[#007CBF] shadow-2xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#007CBF] flex items-center justify-center">
                      <MessageCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-gray-900">Course Advisor</h4>
                      <p className="text-xs text-gray-600">Ask me anything</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowChatbot(false)}
                  >
                    <ArrowRight className="h-4 w-4 rotate-90" />
                  </Button>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 mb-4 min-h-[200px]">
                  <div className="bg-white rounded-lg p-3 mb-3 shadow-sm">
                    <p className="text-sm text-gray-700">
                      👋 Hi! I'm your QuantUniversity course advisor. How can I help you find the perfect learning path?
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start text-left"
                      onClick={() => onNavigate && onNavigate('courses')}
                    >
                      Show me AI courses
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start text-left"
                      onClick={() => onNavigate && onNavigate('enterprise')}
                    >
                      Enterprise training options
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start text-left"
                    >
                      What's the best path for risk managers?
                    </Button>
                  </div>
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Type your question..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#007CBF]"
                  />
                  <Button size="sm" className="bg-[#007CBF] hover:bg-[#006A9C] text-white">
                    Send
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
