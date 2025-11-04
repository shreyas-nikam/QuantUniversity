import { ArrowRight, BookOpen, TrendingUp, Target, Users, Globe, Award, Download, ChevronRight, Star, Clock, Quote, Play, Sparkles, BadgeCheck, Linkedin } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { motion } from 'motion/react';
import { useState, useEffect, useMemo } from 'react';
import { getRecentArticles } from '../data/articles';
import { testimonials } from '../data/testimonials';
import { partners } from '../data/partners';
import { ArticleCard } from '../components/ArticleCard';
import { PartnerLogosTicker } from '../components/PartnerLogos';
import { ScrollableCarousel } from '../components/ScrollableCarousel';
import { SEO } from '../components/SEO';
import { siteSEO } from '../data/seo';
import { useAnalytics } from '../components/AnalyticsProvider';
import { trackingIds } from '../data/analytics';
import { SkipToContent } from '../components/SkipToContent';

interface HomePageProps {
  onNavigate: (page: string) => void;
  setSelectedArticleId: (id: string | number | null) => void;
  setSelectedCourseId: (id: string | number | null) => void;
}

export function HomePage({ onNavigate, setSelectedArticleId, setSelectedCourseId }: HomePageProps) {
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const analytics = useAnalytics();
  
  // Pre-compute particle animations to avoid hydration issues
  const particles = useMemo(() => {
    return Array.from({ length: 5 }, (_, i) => ({
      id: i,
      initialX: Math.random() * 1440,
      initialY: Math.random() * 800,
      targetY: Math.random() * 800,
      duration: 10 + Math.random() * 10
    }));
  }, []);

  const featuredCourses = [
    {
      id: 1,
      title: 'AI in Finance: Complete Masterclass',
      outcome: 'Build production-ready AI models for financial forecasting and risk assessment',
      mode: 'Live + On-Demand',
      duration: '12 weeks',
      price: '$499',
      image: 'https://images.unsplash.com/photo-1709120395858-92f1c7c577f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZmluYW5jZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYyMTEwODM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4.9,
      students: 8420,
      badge: 'Top Pick',
      preview: 'Most comprehensive AI finance program'
    },
    {
      id: 2,
      title: 'Generative AI for Financial Services',
      outcome: 'Deploy GPT and LLMs for financial analysis, compliance, and customer service',
      mode: 'On-Demand',
      duration: '10 weeks',
      price: '$449',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MjA1ODI0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4.8,
      students: 6250,
      badge: 'New',
      preview: 'Master cutting-edge LLM applications'
    },
    {
      id: 3,
      title: 'Quantitative Risk Management',
      outcome: 'Master VaR, stress testing, and regulatory compliance frameworks',
      mode: 'Live',
      duration: '8 weeks',
      price: '$399',
      image: 'https://images.unsplash.com/photo-1599580546605-a86af98dbdb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MjA3OTQ2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4.9,
      students: 5890,
      badge: '',
      preview: 'Essential for risk professionals'
    },
    {
      id: 4,
      title: 'Machine Learning for Trading',
      outcome: 'Build and backtest ML-powered algorithmic trading strategies',
      mode: 'Live + On-Demand',
      duration: '10 weeks',
      price: '$449',
      image: 'https://images.unsplash.com/photo-1709120395858-92f1c7c577f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZmluYW5jZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYyMTEwODM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4.8,
      students: 7320,
      badge: 'Limited Seats',
      preview: 'Hands-on algorithmic trading'
    },
    {
      id: 5,
      title: 'Executive AI Leadership Program',
      outcome: 'Strategic AI implementation for C-suite and senior executives',
      mode: 'Live',
      duration: '6 weeks',
      price: '$799',
      image: 'https://images.unsplash.com/photo-1759922378092-14917cba3f59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzcGVha2VyJTIwcHJlc2VudGF0aW9ufGVufDF8fHx8MTc2MjAyMjc4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5.0,
      students: 1240,
      badge: '',
      preview: 'For senior executives only'
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Risk Management: Trends for 2025',
      excerpt: 'Exploring how generative AI and agentic systems are reshaping financial risk frameworks...',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MjA1ODI0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      author: 'Sri Krishnamurthy, CFA',
      date: 'Nov 1, 2025',
      readTime: '8 min read',
      category: 'AI & Risk'
    },
    {
      id: 2,
      title: 'Building AI-Ready Teams: A Framework for Financial Institutions',
      excerpt: 'How leading banks are upskilling their workforce for the AI era...',
      image: 'https://images.unsplash.com/photo-1758691736722-cda1858056e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBsZWFybmluZyUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NjIxMTA4MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      author: 'Sri Krishnamurthy, CFA',
      date: 'Oct 28, 2025',
      readTime: '6 min read',
      category: 'Workforce Development'
    },
    {
      id: 3,
      title: 'Agentic AI: The Next Evolution in Financial Decision-Making',
      excerpt: 'Understanding autonomous AI agents and their applications in finance...',
      image: 'https://images.unsplash.com/photo-1709120395858-92f1c7c577f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZmluYW5jZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYyMTEwODM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      author: 'Sri Krishnamurthy, CFA',
      date: 'Oct 25, 2025',
      readTime: '10 min read',
      category: 'Generative AI'
    },
    {
      id: 4,
      title: 'Model Risk Management in the Age of GenAI',
      excerpt: 'New frameworks for validating and governing generative AI models...',
      image: 'https://images.unsplash.com/photo-1599580546605-a86af98dbdb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MjA3OTQ2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      author: 'Sri Krishnamurthy, CFA',
      date: 'Oct 22, 2025',
      readTime: '7 min read',
      category: 'Model Risk'
    },
  ];

  const partnerLogos = [
    'CFA Institute',
    'GARP',
    'Bank of America',
    'Morgan Stanley',
    'Goldman Sachs',
    'JP Morgan',
    'Citi',
    'PRMIA',
    'Wells Fargo',
    'Deutsche Bank'
  ];

  const shortTestimonials = [
    {
      quote: "QuantUniversity transformed our team's AI capabilities in just 3 months.",
      author: "VP of Risk, Top 10 Bank"
    },
    {
      quote: "Sri's approach to teaching AI in finance is unmatched in the industry.",
      author: "Chief Data Officer, Asset Manager"
    },
    {
      quote: "The ROI on our enterprise program was evident within the first quarter.",
      author: "Head of Learning, Global Financial Services"
    }
  ];

  const detailedTestimonials = [
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

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % shortTestimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [shortTestimonials.length]);

  return (
    <>
      <SEO 
        pageKey="home"
        structuredData={[siteSEO.organizationSchema]}
      />
      <SkipToContent />
      <main id="main-content" className="bg-white">
      {/* Hero Section with Motion Background */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#007CBF] via-[#006A9C] to-[#005580] overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')]"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </div>
        
        {/* Floating Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 bg-white rounded-full"
            initial={{ 
              x: particle.initialX, 
              y: particle.initialY,
              opacity: 0.1
            }}
            animate={{
              y: [null, particle.targetY],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
        
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20 py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20">
                <span className="flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  Built by world-renowned AI Risk experts
                </span>
              </div>
              <h1 className="text-white mb-6">Master AI, Risk & Quant Finance</h1>
              <p className="text-xl text-white/90 mb-4 leading-relaxed max-w-xl">
                Trusted by 10,000+ professionals across 13+ countries. Industry-tested courses with measurable ROI.
              </p>
              <div className="flex items-center gap-3 mb-8 text-white/80 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>4.9/5 Rating</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>10K+ Students</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Globe className="h-4 w-4" />
                  <span>13+ Countries</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    className="bg-white text-[#007CBF] hover:bg-gray-100 px-8 rounded-lg text-lg h-14 group"
                    data-tracking-id={trackingIds.home.heroCtaPrimary}
                    onClick={() => {
                      analytics.trackButtonClick(trackingIds.home.heroCtaPrimary, 'Explore Courses');
                      onNavigate('courses');
                    }}
                    aria-label="Explore all AI and Finance courses"
                  >
                    Explore Courses
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.div>
                  </Button>
                </motion.div>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white/10 px-8 rounded-lg text-lg h-14"
                  data-tracking-id={trackingIds.home.heroCtaSecondary}
                  onClick={() => {
                    analytics.trackButtonClick(trackingIds.home.heroCtaSecondary, 'Upskill Your Team');
                    onNavigate('enterprise');
                  }}
                  aria-label="Explore enterprise training solutions"
                >
                  Upskill Your Team
                </Button>
              </div>
            </motion.div>
            <motion.div 
              className="hidden lg:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#007CBF]/20 to-[#0EA5E9]/20 rounded-2xl blur-3xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MjA1ODI0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="AI-powered financial data analytics dashboard showcasing machine learning models and quantitative analysis tools used in QuantUniversity courses"
                    className="w-full h-auto"
                    loading="eager"
                  />
                  {/* Video Play Overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer"
                    whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                  >
                    <motion.div
                      className="bg-white rounded-full p-6"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Play className="h-8 w-8 text-[#007CBF] fill-[#007CBF]" />
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3-Pillar Value Section with Enhanced Animations */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 124, 191, 0.1), 0 10px 10px -5px rgba(0, 124, 191, 0.04)' }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-2 hover:border-[#007CBF] transition-all bg-white h-full">
                <CardContent className="p-8">
                  <div className="bg-[#007CBF]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 relative">
                    <BookOpen className="h-8 w-8 text-[#007CBF]" />
                    <div className="absolute top-0 right-0 text-2xl">📘</div>
                  </div>
                  <h3 className="text-gray-900 mb-4">Learn</h3>
                  <p className="text-gray-600 mb-6">
                    Industry-tested courses in AI, data science, and model risk management. From beginner to advanced, on-demand and live instruction.
                  </p>
                  <Button 
                    variant="link" 
                    className="text-[#007CBF] p-0 h-auto group"
                    onClick={() => onNavigate('courses')}
                  >
                    Explore Courses <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 124, 191, 0.1), 0 10px 10px -5px rgba(0, 124, 191, 0.04)' }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-2 hover:border-[#007CBF] transition-all bg-white h-full">
                <CardContent className="p-8">
                  <div className="bg-[#007CBF]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 relative">
                    <TrendingUp className="h-8 w-8 text-[#007CBF]" />
                    <div className="absolute top-0 right-0 text-2xl">🎯</div>
                  </div>
                  <h3 className="text-gray-900 mb-4">Lead</h3>
                  <p className="text-gray-600 mb-6">
                    Executive programs and certifications for C-suite leaders driving AI transformation in financial services.
                  </p>
                  <Button 
                    variant="link" 
                    className="text-[#007CBF] p-0 h-auto group"
                    onClick={() => onNavigate('courses')}
                  >
                    Executive Programs <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 124, 191, 0.1), 0 10px 10px -5px rgba(0, 124, 191, 0.04)' }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-2 hover:border-[#007CBF] transition-all bg-white h-full">
                <CardContent className="p-8">
                  <div className="bg-[#007CBF]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 relative">
                    <Target className="h-8 w-8 text-[#007CBF]" />
                    <div className="absolute top-0 right-0 text-2xl">🚀</div>
                  </div>
                  <h3 className="text-gray-900 mb-4">Transform</h3>
                  <p className="text-gray-600 mb-6">
                    Enterprise learning paths with measurable ROI. Custom AI workshops and team certification programs.
                  </p>
                  <Button 
                    variant="link" 
                    className="text-[#007CBF] p-0 h-auto group"
                    onClick={() => onNavigate('enterprise')}
                  >
                    Enterprise Solutions <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How You Learn - Call-out Section */}
      <section className="py-20 bg-gradient-to-br from-[#007CBF] to-[#005A8C]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Badge className="mb-6 bg-white/10 text-white border-white/20">
                Our Learning Approach
              </Badge>
              <h2 className="text-white mb-4">A proven, AI-powered way to learn AI in finance</h2>
              <p className="text-xl text-white/90 mb-6 leading-relaxed">
                Our Explore–Experience–Excel framework blends expert-led content, hands-on labs, and industry case studies—delivered 24/7 through QuCreate.ai and QuSkillbridge.ai.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-[#007CBF] hover:bg-gray-100"
                onClick={() => onNavigate('how-you-learn')}
              >
                See How You Learn
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <Card className="border-0 bg-white/10 backdrop-blur-sm text-white">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-2">📚</div>
                  <h4 className="text-white text-sm mb-1">Explore</h4>
                  <p className="text-white/80 text-xs">Expert content</p>
                </CardContent>
              </Card>
              <Card className="border-0 bg-white/10 backdrop-blur-sm text-white">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-2">🧪</div>
                  <h4 className="text-white text-sm mb-1">Experience</h4>
                  <p className="text-white/80 text-xs">Hands-on labs</p>
                </CardContent>
              </Card>
              <Card className="border-0 bg-white/10 backdrop-blur-sm text-white">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-2">🏆</div>
                  <h4 className="text-white text-sm mb-1">Excel</h4>
                  <p className="text-white/80 text-xs">Earn certificates</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#007CBF]/10 text-[#007CBF] border-0">
              Most Popular
            </Badge>
            <h2 className="text-gray-900 mb-4">Featured Courses</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transform your career with our bestselling AI and finance courses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {featuredCourses.slice(0, 4).map((course) => (
              <motion.div
                key={course.id}
                whileHover={{ y: -8 }}
                onHoverStart={() => setHoveredCourse(course.id)}
                onHoverEnd={() => setHoveredCourse(null)}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all border-2 hover:border-[#007CBF] h-full">
                  <div 
                    className="relative h-48 cursor-pointer overflow-hidden"
                    onClick={() => {
                      if (course.id === 2) {
                        onNavigate('intro-genai-course');
                      } else if (course.id === 4) {
                        onNavigate('ml-trading-finance');
                      }
                    }}
                  >
                    <ImageWithFallback
                      src={course.image}
                      alt={`${course.title} - ${course.duration} ${course.mode} course covering ${course.outcome}`}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Badge className="bg-[#007CBF] text-white border-0">
                        {course.mode}
                      </Badge>
                    </div>
                    {course.badge && (
                      <div className="absolute top-4 left-4">
                        <Badge className={`${
                          course.badge === 'Limited Seats' ? 'bg-red-500' : 
                          course.badge === 'New' ? 'bg-[#007CBF]' : 
                          'bg-yellow-500'
                        } text-white border-0 flex items-center gap-1`}>
                          {course.badge === 'Top Pick' && <Sparkles className="h-3 w-3" />}
                          {course.badge}
                        </Badge>
                      </div>
                    )}
                    {/* Hover Preview Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end p-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredCourse === course.id ? 1 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-white space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>{course.rating} Rating</span>
                        </div>
                        <p className="text-xs text-white/90 italic">"{course.preview}"</p>
                      </div>
                    </motion.div>
                  </div>
                  <CardContent className="p-6">
                    <h4 
                      className="text-gray-900 mb-2 cursor-pointer hover:text-[#007CBF] transition-colors"
                      onClick={() => {
                        if (course.id === 2) {
                          onNavigate('intro-genai-course');
                        } else if (course.id === 4) {
                          onNavigate('ml-trading-finance');
                        }
                      }}
                    >
                      {course.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {course.outcome}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{course.duration}</span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {course.students.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-2xl font-bold text-[#007CBF]">{course.price}</span>
                      <Button 
                        className="bg-[#007CBF] hover:bg-[#006A9C] text-white"
                        onClick={() => {
                          if (course.id === 2) {
                            onNavigate('intro-genai-course');
                          } else if (course.id === 4) {
                            onNavigate('ml-trading-finance');
                          }
                        }}
                      >
                        {(course.id === 2 || course.id === 4) ? 'View Details' : 'Enroll Now'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-[#007CBF] text-[#007CBF] hover:bg-[#007CBF] hover:text-white"
              onClick={() => onNavigate('courses')}
            >
              View All Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Global Impact / Social Proof with Marquee & Testimonials */}
      <section className="py-16 bg-[#007CBF] overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Globe className="h-8 w-8 text-white" />
              <h3 className="text-white">Global Impact</h3>
            </div>
            <p className="text-xl text-white/90 mb-6">
              Trusted by 10,000+ professionals across 13 countries
            </p>
            
            {/* Rotating Testimonial */}
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto border border-white/20"
            >
              <Quote className="h-8 w-8 text-white/50 mb-3 mx-auto" />
              <p className="text-white text-lg italic mb-3">
                "{testimonials[currentTestimonial].quote}"
              </p>
              <p className="text-white/70 text-sm">
                — {testimonials[currentTestimonial].author}
              </p>
            </motion.div>
          </div>

          {/* Scrolling Logo Marquee */}
          <PartnerLogosTicker speed={30} />
        </div>
      </section>

      {/* Founder Intro / Why QU - Enhanced Two-Column Layout */}
      <section className="py-20 bg-white" id="about-sri">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#007CBF]/10 text-[#007CBF] border-0">
              Our Founder
            </Badge>
            <h2 className="text-gray-900 mb-4">Meet Sri Krishnamurthy, CFA, CAP</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              World-renowned expert in AI, risk management, and quantitative finance
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Video Intro Section */}
            <div className="space-y-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#007CBF]/20 to-[#0EA5E9]/20 rounded-2xl blur-3xl"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-200">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1759922378092-14917cba3f59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzcGVha2VyJTIwcHJlc2VudGF0aW9ufGVufDF8fHx8MTc2MjAyMjc4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Sri Krishnamurthy"
                    className="w-full aspect-video object-cover"
                  />
                  {/* Video Play Overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center cursor-pointer"
                    whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                  >
                    <motion.div
                      className="bg-white rounded-full p-6 mb-4"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Play className="h-8 w-8 text-[#007CBF] fill-[#007CBF]" />
                    </motion.div>
                    <p className="text-white text-sm">Watch: Why I Built QuantUniversity (2:30)</p>
                  </motion.div>
                </div>
              </div>
              
              {/* Quote Card */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-gradient-to-br from-[#007CBF] to-[#006A9C] border-0 text-white">
                  <CardContent className="p-8">
                    <Quote className="h-12 w-12 text-white/30 mb-4" />
                    <h4 className="text-white mb-4">Why I Built QuantUniversity</h4>
                    <p className="text-white/90 text-lg leading-relaxed italic">
                      "After 25 years in quantitative finance, I saw a critical gap: finance professionals needed practical AI skills, not just theory. QuantUniversity bridges that gap with real-world applications, expert instruction, and a community of forward-thinking practitioners."
                    </p>
                    <div className="mt-6 pt-6 border-t border-white/20">
                      <p className="text-white/80 text-sm">— Sri Krishnamurthy, Founder & CEO</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Content Section */}
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Sri Krishnamurthy is a recognized thought leader in AI and quantitative finance. He has spoken at prestigious forums including the Milken Institute, Morgan Stanley, Bank of America, and CFA Institute.
              </p>
              
              <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                <h4 className="text-gray-900">Credentials & Recognition</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-[#007CBF] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Speaker at Milken Institute, Morgan Stanley, Bank of America</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-[#007CBF] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Featured in CFA Institute Interviews & Podcasts</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-[#007CBF] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">25+ Years in Quantitative Finance & AI</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-[#007CBF] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">CFA Charterholder & Certified Analytics Professional (CAP)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-[#007CBF] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Former quantitative analyst at leading investment banks</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6">
                <h4 className="text-gray-900 mb-3">Featured Publications & Media</h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>• "The Future of AI in Risk Management" - Financial Times</p>
                  <p>• "Building AI-Ready Organizations" - Harvard Business Review</p>
                  <p>• "Agentic AI for Finance" - CFA Institute Podcast</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="outline" 
                  className="border-2 border-[#007CBF] text-[#007CBF] hover:bg-[#007CBF] hover:text-white"
                  onClick={() => onNavigate('thought-leadership')}
                >
                  View Speaking & Media
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  className="bg-[#007CBF] hover:bg-[#006A9C] text-white"
                  onClick={() => onNavigate('about')}
                >
                  Full Bio & Story
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Teaser Section */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#007CBF]/10 text-[#007CBF] border-0">
              Thought Leadership
            </Badge>
            <h2 className="text-gray-900 mb-4">Latest Insights</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay ahead with weekly insights on AI, risk management, and financial innovation
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.map((article, index) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    onNavigate={(page) => {
                      setSelectedArticleId(article.id);
                      onNavigate(page);
                    }}
                    onHover={(id) => setHoveredCourse(typeof id === 'number' ? id : null)}
                    isHovered={hoveredCourse === article.id}
                  />
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <Card className="border-2 border-[#007CBF]">
                <CardContent className="p-6">
                  <h4 className="text-gray-900 mb-4">Join 5,000+ Readers</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Get weekly AI insights delivered to your inbox
                  </p>
                  <div className="space-y-3">
                    <Input 
                      type="email" 
                      placeholder="Your email"
                      className="border-gray-300"
                    />
                    <Button className="w-full bg-[#007CBF] hover:bg-[#006A9C] text-white">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-[#007CBF] to-[#006A9C] border-0 text-white">
                <CardContent className="p-6">
                  <Download className="h-10 w-10 mb-4 text-white" />
                  <h4 className="text-white mb-2">Featured Whitepaper</h4>
                  <p className="text-white/90 text-sm mb-4">
                    AI Risk Management in Finance 2025: A Comprehensive Guide
                  </p>
                  <Button 
                    variant="secondary" 
                    className="w-full bg-white text-[#007CBF] hover:bg-gray-100"
                    onClick={() => onNavigate('whitepapers')}
                  >
                    Download Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet Banner */}
      <section className="py-16 bg-gradient-to-r from-[#007CBF] to-[#006A9C]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h2 className="text-white mb-4">Download the AI Upskilling Playbook for Financial Enterprises</h2>
              <p className="text-xl text-white/90">
                Free guide: Build AI capability across your organization with proven frameworks
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-2xl">
              <div className="space-y-4">
                <Input 
                  type="text" 
                  placeholder="Your name"
                  className="border-gray-300"
                />
                <Input 
                  type="email" 
                  placeholder="Work email"
                  className="border-gray-300"
                />
                <Button className="w-full bg-[#007CBF] hover:bg-[#006A9C] text-white h-12 text-lg">
                  Download Playbook
                  <Download className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  By downloading, you agree to receive updates from QuantUniversity
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
