import { useState } from 'react';
import { Award, Clock, BookOpen, TrendingUp, Users, Target, CheckCircle, ArrowRight, Sparkles, Building2, Share2, Filter, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import { getAllCertificates, Certificate } from '../data/coursesAndCertificates';

interface CertificateProgramsPageProps {
  onNavigate?: (page: string) => void;
}

export function CertificateProgramsPage({ onNavigate }: CertificateProgramsPageProps = {}) {
  const [selectedTrack, setSelectedTrack] = useState<string>('all');
  const [selectedDuration, setSelectedDuration] = useState<string>('all');
  const [selectedFormat, setSelectedFormat] = useState<string>('all');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const allCertificates = getAllCertificates();

  // Map certificate IDs to page routes
  const getCertificatePageRoute = (certId: string): string => {
    const routeMap: Record<string, string> = {
      'ai-risk-management': 'ai-risk-management',
      'quant-finance-foundations': 'quant-finance-foundations',
      'responsible-genai': 'responsible-genai-cert'
    };
    return routeMap[certId] || certId;
  };

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

  const testimonials = [
    {
      quote: "QuantUniversity's AI & Risk Management certificate helped me break into AI risk with confidence. The structured curriculum and real-world projects made all the difference.",
      name: "Sarah Chen",
      title: "VP, Model Risk Management",
      company: "Global Investment Bank"
    },
    {
      quote: "The Quant Finance certificate gave me the foundation I needed to transition from traditional finance to quantitative roles. The hands-on approach is invaluable.",
      name: "Michael Rodriguez",
      title: "Senior Quantitative Analyst",
      company: "Hedge Fund"
    },
    {
      quote: "Our team completed the Responsible GenAI certificate together. It transformed how we think about deploying AI safely and ethically in production.",
      name: "Jennifer Park",
      title: "Head of AI Governance",
      company: "Fortune 500 Bank"
    }
  ];

  const faqs = [
    {
      question: "What's the difference between a certificate and taking courses individually?",
      answer: "Certificates provide a structured learning path with curated courses designed to build comprehensive expertise in a specific domain. You'll save 15-25% compared to purchasing courses individually, receive a shareable credential upon completion, and benefit from a cohesive curriculum that ensures you master all essential skills in the right sequence. Individual courses offer flexibility but may lack the strategic sequencing and cost savings of a certificate program."
    },
    {
      question: "Can I upgrade to a certificate if I've already completed one course?",
      answer: "Absolutely! If you've completed any course that's part of a certificate program, you can upgrade by paying the difference between what you paid and the certificate price (minus the discount). Your progress carries over automatically, and you'll immediately gain access to all remaining courses in the certificate pathway. Contact our support team to process your upgrade."
    },
    {
      question: "Is the certificate accredited?",
      answer: "QuantUniversity certificates are industry-recognized credentials designed in collaboration with leading financial institutions and professional organizations including PRMIA, GARP, and CQF. While not formally accredited by regional accreditation bodies, our certificates are widely recognized by employers in banking, asset management, and fintech. Many alumni report that QuantUniversity credentials have directly contributed to promotions, role changes, and salary increases."
    },
    {
      question: "How long do I have to complete a certificate program?",
      answer: "You have 12 months of access from enrollment to complete your certificate at your own pace. Most learners finish within the estimated duration (10-16 weeks depending on the program), studying 6-8 hours per week. If you need additional time, extensions are available for a small fee. For cohort-based programs, you'll follow a structured schedule with weekly milestones."
    },
    {
      question: "Do certificate programs include live instruction or mentorship?",
      answer: "All certificate programs include access to expert office hours (bi-weekly live Q&A sessions), community forums with instructors and peers, and graded assignments with detailed feedback. Cohort-based certificates also include weekly live sessions with instructors. Enterprise certificate programs can be customized with dedicated mentorship, live workshops, and capstone project support."
    },
    {
      question: "Can my employer sponsor my certificate enrollment?",
      answer: "Yes! We offer enterprise enrollment options with invoicing, group discounts (20%+ for teams of 5+), and learning analytics dashboards for managers. Many employers sponsor certificate programs as part of professional development budgets. We can provide a detailed program overview and ROI justification to help you secure approval."
    }
  ];

  const filteredCertificates = allCertificates.filter(cert => {
    if (selectedTrack !== 'all' && cert.track !== selectedTrack) return false;
    if (selectedDuration !== 'all') {
      const weeks = parseInt(cert.duration);
      if (selectedDuration === 'short' && weeks > 10) return false;
      if (selectedDuration === 'medium' && (weeks <= 10 || weeks > 14)) return false;
      if (selectedDuration === 'intensive' && weeks <= 14) return false;
    }
    if (selectedFormat !== 'all' && cert.format !== selectedFormat) return false;
    return true;
  });

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getIconForTrack = (track: string) => {
    switch (track) {
      case 'AI':
        return Sparkles;
      case 'Quant':
        return TrendingUp;
      case 'Risk':
        return Target;
      default:
        return Award;
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-24 bg-gradient-to-br from-[#007CBF] to-[#005A8C] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 grid grid-cols-3 opacity-10">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1752937326758-f130e633b422?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJ0aWZpY2F0ZSUyMGRpcGxvbWElMjBhY2hpZXZlbWVudHxlbnwxfHx8fDE3NjIxNjY2NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Certificate"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#007CBF]/95 to-[#005A8C]/90"></div>
        </div>

        <div className="max-w-[1440px] mx-auto px-8 lg:px-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6 bg-white/10 text-white border-white/20">
                <Award className="h-4 w-4 mr-2" />
                Premium Certificate Programs
              </Badge>
              <h1 className="text-white mb-6">
                Structured Learning for the AI-Powered Finance World
              </h1>
              <p className="text-2xl text-white/90 mb-8 leading-relaxed">
                Bundle expert-led courses into guided, ROI-focused certificate programs with recognized credentials.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  size="lg"
                  className="bg-white text-[#007CBF] hover:bg-gray-100 h-14 px-8"
                  onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Browse Programs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 h-14 px-8"
                  onClick={() => onNavigate?.('contact')}
                >
                  Enterprise Enrollment
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scrolling Impact Stats Ticker */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="bg-white/10 backdrop-blur-sm border-t border-white/20 overflow-hidden">
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
        </div>
      </section>

      {/* Certificate Grid with Filtering */}
      <section id="programs" className="py-20 bg-[#F9FAFB]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#007CBF]/10 text-[#007CBF] border-0">
              All Programs
            </Badge>
            <h2 className="text-gray-900 mb-4">Choose Your Certificate Program</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Structured pathways designed by industry experts to accelerate your career in AI and quantitative finance
            </p>
          </div>

          {/* Filters */}
          <div className="mb-12">
            <Card className="border-2 border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Filter className="h-5 w-5 text-[#007CBF]" />
                  <h3 className="text-gray-900">Filter Programs</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Track</label>
                    <Select value={selectedTrack} onValueChange={setSelectedTrack}>
                      <SelectTrigger>
                        <SelectValue placeholder="All Tracks" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Tracks</SelectItem>
                        <SelectItem value="AI">AI & Machine Learning</SelectItem>
                        <SelectItem value="Risk">Risk Management</SelectItem>
                        <SelectItem value="Quant">Quantitative Finance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                    <Select value={selectedDuration} onValueChange={setSelectedDuration}>
                      <SelectTrigger>
                        <SelectValue placeholder="All Durations" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Durations</SelectItem>
                        <SelectItem value="short">Short (≤10 weeks)</SelectItem>
                        <SelectItem value="medium">Medium (11-14 weeks)</SelectItem>
                        <SelectItem value="intensive">Intensive (15+ weeks)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Format</label>
                    <Select value={selectedFormat} onValueChange={setSelectedFormat}>
                      <SelectTrigger>
                        <SelectValue placeholder="All Formats" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Formats</SelectItem>
                        <SelectItem value="Self-Paced">Self-Paced</SelectItem>
                        <SelectItem value="Cohort-Based">Cohort-Based</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCertificates.map((cert, index) => {
              const Icon = getIconForTrack(cert.track);
              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <Card className={`border-2 ${cert.featured ? 'border-[#007CBF]' : 'border-gray-200'} hover:border-[#007CBF] transition-all cursor-pointer h-full relative overflow-hidden group`}>
                    {cert.featured && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge className="bg-yellow-500 text-white border-0">
                          <Sparkles className="h-3 w-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                    )}
                    
                    {/* Save Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <Badge className="bg-green-500 text-white border-0">
                        Save {cert.savings}
                      </Badge>
                    </div>

                    {/* Gradient Header */}
                    <div className={`h-32 bg-gradient-to-br ${cert.color} flex items-center justify-center relative overflow-hidden`}>
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0" style={{
                          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                          backgroundSize: '20px 20px'
                        }}></div>
                      </div>
                      <Icon className="h-16 w-16 text-white relative z-10" />
                    </div>

                    <CardContent className="p-6">
                      <Badge className="mb-3 bg-gray-100 text-gray-700 border-0">
                        {cert.track}
                      </Badge>
                      <h3 className="text-gray-900 mb-3">{cert.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {cert.shortDescription}
                      </p>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <BookOpen className="h-4 w-4 text-[#007CBF]" />
                          <span>{cert.courseIds.length} Courses</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="h-4 w-4 text-[#007CBF]" />
                          <span>{cert.duration} • {cert.format}</span>
                        </div>
                      </div>

                      <Button 
                        className="w-full bg-[#007CBF] hover:bg-[#006A9C] text-white"
                        onClick={() => onNavigate?.(getCertificatePageRoute(cert.id))}
                      >
                        View Program
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {filteredCertificates.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No programs match your selected filters. Try adjusting your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Enroll in a Certificate */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#007CBF]/10 text-[#007CBF] border-0">
              Why Certificates?
            </Badge>
            <h2 className="text-gray-900 mb-4">Why Enroll in a Certificate Program?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Structured learning pathways designed for maximum impact and career advancement
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                emoji: '🎓',
                title: 'Shareable Credentials',
                description: 'Industry-recognized certificates you can add to LinkedIn, resume, and professional profiles',
                expandedContent: 'QuantUniversity certificates are co-branded with leading institutions including PRMIA, GARP, and CQF. Display your achievement with a verifiable digital credential that employers recognize and value.'
              },
              {
                icon: Target,
                emoji: '🧠',
                title: 'Structured Curriculum',
                description: 'Expertly sequenced courses that build comprehensive mastery in logical progression',
                expandedContent: 'Our certificate programs are designed by practitioners who understand the skills needed in real roles. Each course builds on the previous one, ensuring you develop both breadth and depth of expertise.'
              },
              {
                icon: Building2,
                emoji: '💼',
                title: 'Enterprise Recognition',
                description: 'Trusted by Fortune 500 banks and investment firms for team upskilling',
                expandedContent: 'JPMorgan, Bank of America, Goldman Sachs, and other leading institutions sponsor certificate programs for their teams. Your credential signals readiness for AI-powered finance roles.'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-2 border-gray-200 hover:border-[#007CBF] transition-all group cursor-pointer h-full">
                  <CardContent className="p-8 text-center">
                    <motion.div 
                      className="text-6xl mb-4"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {benefit.emoji}
                    </motion.div>
                    <div className="bg-[#007CBF]/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                      <benefit.icon className="h-8 w-8 text-[#007CBF]" />
                    </div>
                    <h3 className="text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 mb-4">
                      {benefit.description}
                    </p>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-sm text-gray-600">
                          {benefit.expandedContent}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto px-8 lg:px-20">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#007CBF]/10 text-[#007CBF] border-0">
              Success Stories
            </Badge>
            <h2 className="text-gray-900 mb-4">What Our Learners Say</h2>
          </div>

          <Card className="border-2 border-[#007CBF]">
            <CardContent className="p-12 relative">
              <div className="text-6xl text-[#007CBF] opacity-20 absolute top-8 left-8">"</div>
              
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="relative z-10"
              >
                <p className="text-xl text-gray-700 italic mb-8 leading-relaxed">
                  {testimonials[currentTestimonial].quote}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</div>
                    <div className="text-sm text-gray-600">{testimonials[currentTestimonial].title}</div>
                    <div className="text-sm text-[#007CBF]">{testimonials[currentTestimonial].company}</div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={prevTestimonial}
                      className="border-2 border-gray-300 hover:border-[#007CBF]"
                    >
                      ←
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={nextTestimonial}
                      className="border-2 border-gray-300 hover:border-[#007CBF]"
                    >
                      →
                    </Button>
                  </div>
                </div>
              </motion.div>

              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentTestimonial ? 'bg-[#007CBF] w-8' : 'bg-gray-300'
                    }`}
                    onClick={() => setCurrentTestimonial(idx)}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-8 lg:px-20">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#007CBF]/10 text-[#007CBF] border-0">
              FAQs
            </Badge>
            <h2 className="text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about certificate programs
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 border-gray-200 rounded-lg px-6 bg-white hover:border-[#007CBF] transition-colors"
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <h4 className="text-gray-900 text-left">{faq.question}</h4>
                </AccordionTrigger>
                <AccordionContent className="px-2 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <Card className="border-2 border-[#007CBF] bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-8">
                <h4 className="text-gray-900 mb-3">Still have questions?</h4>
                <p className="text-gray-600 mb-6">
                  Our team is here to help you choose the right certificate program for your goals.
                </p>
                <Button 
                  className="bg-[#007CBF] hover:bg-[#006A9C] text-white"
                  onClick={() => onNavigate?.('contact')}
                >
                  Contact Support
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#007CBF] to-[#006A9C]">
        <div className="max-w-4xl mx-auto px-8 lg:px-20 text-center">
          <h2 className="text-white mb-6">Ready to Accelerate Your Career?</h2>
          <p className="text-xl text-white/90 mb-8">
            Enroll in a certificate program today and join 10,000+ professionals mastering AI in finance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg"
              className="bg-white text-[#007CBF] hover:bg-gray-100 h-14 px-8"
              onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Browse All Programs
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 h-14 px-8"
              onClick={() => onNavigate?.('contact')}
            >
              Talk to an Advisor
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
