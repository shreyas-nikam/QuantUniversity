import { useState } from 'react';
import { Award, Users, Globe, TrendingUp, Target, CheckCircle, ArrowRight, Mic, Rocket, GraduationCap, Building2, Sparkles, Calendar, BookOpen, Play, X, MessageSquare, Linkedin, Trophy, Lightbulb, ChevronDown, Briefcase, DollarSign, Home, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../components/ui/dialog';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../components/ui/collapsible';
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from '../components/ui/breadcrumb';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion, AnimatePresence } from 'motion/react';
import { SEO } from '../components/SEO';
import { generateBreadcrumbSchema, siteSEO } from '../data/seo';

interface AboutPageProps {
  onNavigate?: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps = {}) {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [openMission, setOpenMission] = useState(false);
  const [openVision, setOpenVision] = useState(false);

  const milestones = [
    { 
      year: '2015', 
      event: 'QuantUniversity Founded', 
      description: 'Launched with mission to democratize AI education in finance',
      icon: Rocket,
      color: 'from-[#007CBF] to-[#006A9C]'
    },
    { 
      year: '2017', 
      event: '1,000 Students', 
      description: 'Reached first thousand learners across 5 countries',
      icon: GraduationCap,
      color: 'from-[#007CBF] to-[#006A9C]'
    },
    { 
      year: '2019', 
      event: 'Enterprise Programs', 
      description: 'Launched corporate training for Fortune 500 financial institutions',
      icon: Building2,
      color: 'from-[#007CBF] to-[#006A9C]'
    },
    { 
      year: '2020', 
      event: 'Certificate Programs Launched', 
      description: 'Introduced structured certificate pathways for global finance professionals',
      icon: Award,
      color: 'from-[#007CBF] to-[#006A9C]'
    },
    { 
      year: '2021', 
      event: 'Global Expansion', 
      description: 'Expanded to 13+ countries with localized content',
      icon: Globe,
      color: 'from-[#007CBF] to-[#006A9C]'
    },
    { 
      year: '2023', 
      event: 'GenAI Curriculum', 
      description: 'First to market with comprehensive GenAI for finance courses',
      icon: Sparkles,
      color: 'from-[#007CBF] to-[#006A9C]'
    },
    { 
      year: '2025', 
      event: '10,000+ Learners', 
      description: 'Milestone achievement with 25+ enterprise clients',
      icon: Trophy,
      color: 'from-yellow-500 to-amber-600',
      highlight: true
    },
  ];

  const impactStats = [
    '10,000+ Learners Worldwide',
    '25+ Enterprise Clients',
    '13 Countries Served',
    '100+ Expert-Led Courses',
    '95% Completion Rate',
    '4.8/5 Average Rating',
    '85% Career Advancement',
    '$25M+ in Salary Increases',
  ];

  const stats = [
    { value: '10,000+', label: 'Learners Worldwide', icon: Users },
    { value: '25+', label: 'Enterprise Clients', icon: Building2 },
    { value: '13', label: 'Countries', icon: Globe },
    { value: '100+', label: 'Expert-Led Courses', icon: BookOpen },
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We deliver world-class education with rigorous academic standards and practical applications.'
    },
    {
      icon: Users,
      title: 'Impact',
      description: 'We measure success by the career transformations and organizational outcomes we enable.'
    },
    {
      icon: Globe,
      title: 'Accessibility',
      description: 'We make cutting-edge AI education accessible to professionals worldwide, regardless of background.'
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'We stay at the forefront of AI and finance, updating curriculum as the field evolves.'
    },
  ];

  const founderQA = [
    {
      question: "Why did you build QuantUniversity?",
      answer: "I saw a massive gap between academic AI research and practical application in finance. Finance professionals needed hands-on, practitioner-led training that bridges theory and real-world implementation. QuantUniversity exists to fill that gap and accelerate AI adoption responsibly in financial services."
    },
    {
      question: "What makes QuantUniversity different?",
      answer: "Three things: practitioner-led curriculum (not just academics), focus on production-ready skills (not just theory), and strong emphasis on responsible AI and governance. We teach what actually works in enterprise environments, with case studies from JPMorgan, BoA, Goldman Sachs, and other leading institutions."
    },
    {
      question: "What's your vision for the next decade?",
      answer: "I want QuantUniversity to be the global standard for AI education in finance. Every major financial institution should have teams trained through our programs. We're building a community of 100,000+ AI-enabled finance professionals who are shaping the future of the industry."
    }
  ];

  // Structured data
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' }
  ]);

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        pageKey="about"
        structuredData={[breadcrumbSchema, siteSEO.organizationSchema]}
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
                <BreadcrumbPage className="text-gray-900">About Us</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Hero Section with Background Overlay + Scrolling Ticker */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1760546465497-d9319a137fe2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBrZXlub3RlJTIwc3BlYWtlciUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NjIxOTMzODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Sri Krishnamurthy delivering a professional keynote presentation on AI and finance at a major conference"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#007CBF]/95 via-[#006A9C]/90 to-[#005580]/95"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        </div>
        
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl blur-3xl"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759922378092-14917cba3f59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzcGVha2VyJTIwcHJlc2VudGF0aW9ufGVufDF8fHx8MTc2MjAyMjc4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Sri Krishnamurthy, CFA, CAP - Founder and CEO of QuantUniversity, recognized thought leader in AI and quantitative finance"
                className="relative rounded-2xl shadow-2xl w-full aspect-square object-cover border-4 border-white/20"
                loading="lazy"
              />
            </div>
            <div className="text-white">
              <Badge className="mb-6 bg-white/10 text-white border-white/20">
                Our Story
              </Badge>
              <h1 className="text-white mb-6">Bridging the Gap Between AI and Finance</h1>
              <p className="text-xl text-white/90 mb-6 leading-relaxed">
                Founded by Sri Krishnamurthy, CFA, CAP — a recognized thought leader in AI and quantitative finance with 25+ years of experience.
              </p>
              <blockquote className="border-l-4 border-white/50 pl-6 mb-8 italic text-white/90">
                "Our mission is to bridge the gap between emerging AI technologies and real-world financial decision-making. We're not just teaching concepts — we're building the next generation of AI-enabled finance professionals."
              </blockquote>
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={() => onNavigate?.('speaking-media')}
                  variant="secondary"
                  className="bg-white text-[#007CBF] hover:bg-gray-100"
                  aria-label="Navigate to speaking and media page to book Sri Krishnamurthy for speaking engagements"
                >
                  <Mic className="mr-2 h-5 w-5" />
                  Book Sri to Speak
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10"
                  onClick={() => setVideoModalOpen(true)}
                  aria-label="Open video modal to watch QuantUniversity's story"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Story
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Scrolling Impact Stats Ticker */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm border-t border-white/20 overflow-hidden">
          <motion.div
            className="flex gap-12 py-4 whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...impactStats, ...impactStats].map((stat, index) => (
              <div key={index} className="flex items-center gap-3 text-white">
                <Sparkles className="h-4 w-4 text-yellow-300" />
                <span className="font-semibold">{stat}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#F9FAFB] border-b">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-[#007CBF]/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-[#007CBF]" />
                </div>
                <div className="text-5xl font-bold text-[#007CBF] mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision - Collapsible Tiles with Hover Animations */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#007CBF]/10 text-[#007CBF] border-0">
              Our Purpose
            </Badge>
            <h2 className="text-gray-900 mb-4">Mission & Vision</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              What we stand for and where we're headed
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission Tile */}
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Collapsible open={openMission} onOpenChange={setOpenMission}>
                <Card className="border-2 hover:border-[#007CBF] transition-all cursor-pointer relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#007CBF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="bg-gradient-to-br from-[#007CBF] to-[#005A8C] w-16 h-16 rounded-xl flex items-center justify-center shadow-lg">
                        <Target className="h-8 w-8 text-white" />
                      </div>
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="icon" className="group-hover:bg-[#007CBF]/10">
                          <motion.div
                            animate={{ rotate: openMission ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="h-5 w-5 text-[#007CBF]" />
                          </motion.div>
                        </Button>
                      </CollapsibleTrigger>
                    </div>
                    <h3 className="text-gray-900 mb-4">Our Mission</h3>
                    <p className="text-gray-600 leading-relaxed line-clamp-3 group-hover:line-clamp-none">
                      To empower finance professionals with the AI skills and knowledge needed to thrive in an increasingly automated industry.
                    </p>
                    <CollapsibleContent>
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 pt-4 border-t border-gray-200"
                      >
                        <p className="text-gray-600 leading-relaxed mb-4">
                          We provide rigorous, practical education that combines academic excellence with real-world application, ensuring our learners can immediately apply their knowledge to drive business value.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle className="h-4 w-4 text-[#007CBF]" />
                            <span>Practitioner-led curriculum</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle className="h-4 w-4 text-[#007CBF]" />
                            <span>Production-ready skills</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle className="h-4 w-4 text-[#007CBF]" />
                            <span>Immediate business impact</span>
                          </div>
                        </div>
                      </motion.div>
                    </CollapsibleContent>
                  </CardContent>
                </Card>
              </Collapsible>
            </motion.div>

            {/* Vision Tile */}
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Collapsible open={openVision} onOpenChange={setOpenVision}>
                <Card className="border-2 hover:border-[#007CBF] transition-all cursor-pointer relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="bg-gradient-to-br from-purple-500 to-purple-700 w-16 h-16 rounded-xl flex items-center justify-center shadow-lg">
                        <TrendingUp className="h-8 w-8 text-white" />
                      </div>
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="icon" className="group-hover:bg-purple-500/10">
                          <motion.div
                            animate={{ rotate: openVision ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="h-5 w-5 text-purple-600" />
                          </motion.div>
                        </Button>
                      </CollapsibleTrigger>
                    </div>
                    <h3 className="text-gray-900 mb-4">Our Vision</h3>
                    <p className="text-gray-600 leading-relaxed line-clamp-3 group-hover:line-clamp-none">
                      To be the global leader in AI and quantitative finance education, recognized for producing professionals who shape the future of financial services.
                    </p>
                    <CollapsibleContent>
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 pt-4 border-t border-gray-200"
                      >
                        <p className="text-gray-600 leading-relaxed mb-4">
                          We envision a world where every financial institution has the AI talent and capability needed to innovate responsibly and compete effectively in the digital economy.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle className="h-4 w-4 text-purple-600" />
                            <span>100,000+ trained professionals by 2030</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle className="h-4 w-4 text-purple-600" />
                            <span>Global standard for AI in finance</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle className="h-4 w-4 text-purple-600" />
                            <span>Industry-shaping thought leadership</span>
                          </div>
                        </div>
                      </motion.div>
                    </CollapsibleContent>
                  </CardContent>
                </Card>
              </Collapsible>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline with Icons and Motion for 2025 Goal */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#007CBF]/10 text-[#007CBF] border-0">
              Our Journey
            </Badge>
            <h2 className="text-gray-900 mb-4">A Decade of Impact</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From a vision to transform AI education to serving 10,000+ learners worldwide
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#007CBF]/20 transform -translate-x-1/2"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`flex gap-8 items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <motion.div
                      whileHover={{ scale: milestone.highlight ? 1.08 : 1.05, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className={`border-2 ${milestone.highlight ? 'border-yellow-400 bg-gradient-to-br from-yellow-50 to-amber-50' : 'border-gray-200 hover:border-[#007CBF]'} transition-all bg-white relative overflow-hidden group`}>
                        {milestone.highlight && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-yellow-200/20 via-amber-200/20 to-yellow-200/20"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                          />
                        )}
                        <CardContent className="p-6 relative z-10">
                          <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'lg:flex-row-reverse lg:justify-end' : 'lg:flex-row'}`}>
                            <div className={`bg-gradient-to-br ${milestone.color} w-12 h-12 rounded-lg flex items-center justify-center shadow-lg`}>
                              <milestone.icon className="h-6 w-6 text-white" />
                            </div>
                            <div className={`text-3xl font-bold ${milestone.highlight ? 'text-yellow-600' : 'text-[#007CBF]'}`}>
                              {milestone.year}
                            </div>
                          </div>
                          <h4 className="text-gray-900 mb-2 flex items-center gap-2 justify-start">
                            {milestone.event}
                            {milestone.highlight && (
                              <motion.div
                                animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                <Trophy className="h-5 w-5 text-yellow-600" />
                              </motion.div>
                            )}
                          </h4>
                          <p className="text-gray-600 text-sm">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                  <div className={`hidden lg:block w-4 h-4 rounded-full ${milestone.highlight ? 'bg-yellow-500 ring-4 ring-yellow-200' : 'bg-[#007CBF]'} border-4 border-white shadow-lg relative z-10`}>
                    {milestone.highlight && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-yellow-500"
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </div>
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#007CBF]/10 text-[#007CBF] border-0">
              Our Values
            </Badge>
            <h2 className="text-gray-900 mb-4">What Drives Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at QuantUniversity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="border-2 hover:border-[#007CBF] transition-all text-center h-full">
                  <CardContent className="p-8">
                    <div className="bg-[#007CBF]/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                      <value.icon className="h-8 w-8 text-[#007CBF]" />
                    </div>
                    <h4 className="text-gray-900 mb-3">{value.title}</h4>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Profile with Q&A Section */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#007CBF]/10 text-[#007CBF] border-0">
              Meet Our Founder
            </Badge>
            <h2 className="text-gray-900 mb-4">Sri Krishnamurthy, CFA, CAP</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Recognized thought leader in AI and quantitative finance with 25+ years of experience
            </p>
          </div>

          <Card className="border-2 border-[#007CBF] overflow-hidden mb-12">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-5 gap-8">
                <div className="lg:col-span-2 relative group">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1759922378092-14917cba3f59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzcGVha2VyJTIwcHJlc2VudGF0aW9ufGVufDF8fHx8MTc2MjAyMjc4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Sri Krishnamurthy, CFA, CAP - Founder of QuantUniversity and expert in AI and quantitative finance"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Video Play Overlay */}
                  <div 
                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                    onClick={() => setVideoModalOpen(true)}
                  >
                    <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center">
                      <Play className="h-10 w-10 text-[#007CBF] ml-1" />
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-3 p-8">
                  <Badge className="mb-4 bg-[#007CBF]/10 text-[#007CBF] border-0">
                    Founder & CEO
                  </Badge>
                  <h3 className="text-gray-900 mb-4">Sri Krishnamurthy, CFA, CAP</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Sri is a recognized thought leader in AI and quantitative finance with over 25 years of experience. He has spoken at prestigious forums including the Milken Institute, Morgan Stanley, Bank of America, and CFA Institute.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-[#007CBF] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-900">Keynote Speaker</div>
                        <div className="text-gray-600 text-sm">Milken Institute, Morgan Stanley, Bank of America</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-[#007CBF] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-900">Media Appearances</div>
                        <div className="text-gray-600 text-sm">CFA Institute Interviews, Morgan Stanley Podcasts</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-[#007CBF] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-900">Certifications</div>
                        <div className="text-gray-600 text-sm">Chartered Financial Analyst (CFA), Certified Analytics Professional (CAP)</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-[#007CBF] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-900">Academic Background</div>
                        <div className="text-gray-600 text-sm">Affiliate Faculty at George Mason University (MARC)</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button 
                      className="bg-[#007CBF] hover:bg-[#006A9C] text-white"
                      onClick={() => onNavigate?.('speaking-media')}
                    >
                      Invite Sri to Speak
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline"
                      className="border-2 border-[#0077B5] text-[#0077B5] hover:bg-[#0077B5] hover:text-white"
                      onClick={() => window.open('https://www.linkedin.com', '_blank')}
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      Connect on LinkedIn
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Why I Built QuantUniversity Q&A */}
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-gray-200">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-gradient-to-br from-[#007CBF] to-[#005A8C] w-12 h-12 rounded-lg flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-gray-900">Why I Built QuantUniversity</h3>
                </div>

                <div className="space-y-6">
                  {founderQA.map((qa, index) => (
                    <motion.div
                      key={index}
                      className="border-l-4 border-[#007CBF] pl-6 py-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <h4 className="text-gray-900 mb-3 flex items-center gap-2">
                        <Lightbulb className="h-5 w-5 text-[#007CBF]" />
                        {qa.question}
                      </h4>
                      <p className="text-gray-600 leading-relaxed italic">
                        "{qa.answer}"
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                  <Button 
                    variant="outline"
                    className="border-2 border-[#007CBF] text-[#007CBF] hover:bg-[#007CBF] hover:text-white"
                    onClick={() => setVideoModalOpen(true)}
                  >
                    <Play className="mr-2 h-4 w-4" />
                    Watch Full Story Video
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - Join Community */}
      <section className="py-20 bg-gradient-to-r from-[#007CBF] to-[#006A9C]">
        <div className="max-w-4xl mx-auto px-8 lg:px-20 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            Join Us
          </Badge>
          <h2 className="text-white mb-6">Join the QuantUniversity Community</h2>
          <p className="text-xl text-white/90 mb-8">
            Whether you're an individual looking to upskill or an organization seeking to build AI capability, we're here to help.
          </p>

          {/* Community Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <Users className="h-12 w-12 text-white mx-auto mb-4" />
              <h4 className="text-white mb-2">Community</h4>
              <p className="text-white/80 text-sm">
                Connect with 10,000+ AI professionals in finance
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <Award className="h-12 w-12 text-white mx-auto mb-4" />
              <h4 className="text-white mb-2">Mentors</h4>
              <p className="text-white/80 text-sm">
                Learn from practitioners at JPMorgan, Goldman Sachs, BoA
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <Trophy className="h-12 w-12 text-white mx-auto mb-4" />
              <h4 className="text-white mb-2">Certificates</h4>
              <p className="text-white/80 text-sm">
                Industry-recognized credentials from top institutions
              </p>
            </motion.div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-white text-[#007CBF] hover:bg-gray-100 px-8 rounded-lg h-14"
              onClick={() => onNavigate?.('courses')}
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Explore Courses
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white/10 px-8 rounded-lg h-14"
              onClick={() => onNavigate?.('enterprise')}
            >
              <Briefcase className="mr-2 h-5 w-5" />
              Enterprise Solutions
            </Button>
          </div>

          {/* Community Links */}
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-white/80 mb-4">Join our community channels:</p>
            <div className="flex justify-center gap-4">
              <Button 
                variant="outline"
                className="border-2 border-white/40 text-white hover:bg-white/10"
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                Slack Community
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white/40 text-white hover:bg-white/10"
              >
                <Users className="mr-2 h-4 w-4" />
                Discord Server
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Video Modal */}
      <Dialog open={videoModalOpen} onOpenChange={setVideoModalOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Why I Built QuantUniversity - Sri Krishnamurthy</DialogTitle>
            <DialogDescription>From Wall Street to AI Education: The QuantUniversity Journey</DialogDescription>
          </DialogHeader>
          <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
            <div className="text-center text-white">
              <Play className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p className="text-sm opacity-75">Founder story video would be embedded here</p>
              <p className="text-xs opacity-50 mt-2">From Wall Street to AI Education: The QuantUniversity Journey</p>
            </div>
          </div>
          <div className="flex justify-end gap-3 mt-4">
            <Button variant="outline" onClick={() => setVideoModalOpen(false)}>
              Close
            </Button>
            <Button 
              className="bg-[#007CBF] hover:bg-[#006A9C] text-white"
              onClick={() => onNavigate?.('courses')}
            >
              Explore Courses
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
