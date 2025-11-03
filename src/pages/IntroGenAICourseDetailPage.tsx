import { useState } from 'react';
import { Check, Clock, Users, Award, Star, Calendar, Download, PlayCircle, FileText, Video, BookOpen, Code, TrendingUp, ChevronDown, Share2, ArrowLeft, Play, HelpCircle, ExternalLink, AlertCircle, Lightbulb, Target, X, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../components/ui/collapsible';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import { ScrollableCarousel } from '../components/ScrollableCarousel';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../components/ui/breadcrumb';
import { courses, certificates, getCertificatesForCourse } from '../data/coursesAndCertificates';

interface IntroGenAICourseDetailPageProps {
  onNavigate: (page: string) => void;
}

export function IntroGenAICourseDetailPage({ onNavigate }: IntroGenAICourseDetailPageProps) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isCertBoxOpen, setIsCertBoxOpen] = useState(true);

  const course = courses['intro-genai'];
  const courseCertificates = getCertificatesForCourse(course.id);
  const certificate = courseCertificates[0]; // Get the first certificate this course is part of

  const courseModules = [
    {
      title: 'Module 1: Introduction to Generative AI',
      duration: '3 days',
      lessons: 5,
      topics: [
        'What is Generative AI and why it matters in finance',
        'Evolution from discriminative to generative models',
        'Key applications: content generation, data augmentation, synthetic data',
        'Generative AI landscape: LLMs, diffusion models, GANs',
        'Hands-on: Your first API call to GPT-4'
      ]
    },
    {
      title: 'Module 2: Transformer Architecture Deep Dive',
      duration: '5 days',
      lessons: 7,
      topics: [
        'Attention mechanisms and self-attention',
        'Multi-head attention explained',
        'Positional encoding and embeddings',
        'Encoder-decoder architecture',
        'BERT vs GPT: bidirectional vs autoregressive models',
        'Lab: Building a mini-transformer from scratch',
        'Understanding tokenization (BPE, WordPiece, SentencePiece)'
      ]
    },
    {
      title: 'Module 3: Large Language Models (LLMs)',
      duration: '5 days',
      lessons: 8,
      topics: [
        'Evolution of LLMs: GPT-3, GPT-4, Claude, LLaMA',
        'Model architectures and scaling laws',
        'Prompt engineering fundamentals',
        'Zero-shot, few-shot, and chain-of-thought prompting',
        'Working with OpenAI, Anthropic, and Azure OpenAI APIs',
        'Context windows and token limits',
        'Lab: Building a financial document Q&A system',
        'Cost optimization for API usage'
      ]
    },
    {
      title: 'Module 4: Fine-Tuning for Financial Use Cases',
      duration: '4 days',
      lessons: 6,
      topics: [
        'When to fine-tune vs prompt engineering',
        'Transfer learning for NLP',
        'Parameter-efficient fine-tuning (LoRA, QLoRA)',
        'Preparing financial datasets for fine-tuning',
        'Project: Fine-tune a model for financial sentiment analysis',
        'Evaluation metrics for fine-tuned models'
      ]
    },
    {
      title: 'Module 5: Diffusion Models and Image Generation',
      duration: '3 days',
      lessons: 5,
      topics: [
        'Introduction to diffusion models (DALL-E, Stable Diffusion, Midjourney)',
        'Forward and reverse diffusion processes',
        'Denoising and sampling techniques',
        'Applications in financial data visualization',
        'Lab: Generate synthetic financial charts and diagrams'
      ]
    },
    {
      title: 'Module 6: Evaluating GenAI Model Performance',
      duration: '4 days',
      lessons: 6,
      topics: [
        'Evaluation challenges for generative models',
        'Perplexity, BLEU, ROUGE scores for text generation',
        'Human evaluation and A/B testing',
        'Hallucination detection and mitigation',
        'Benchmarking LLMs on financial tasks',
        'Case study: Evaluating a trading strategy assistant'
      ]
    },
    {
      title: 'Module 7: Production Deployment and Best Practices',
      duration: '4 days',
      lessons: 6,
      topics: [
        'Deploying GenAI models in production',
        'API rate limiting and caching strategies',
        'Monitoring model performance and drift',
        'Security considerations: prompt injection, data leakage',
        'Cost management for production LLM applications',
        'Final project: Build and deploy a GenAI financial assistant'
      ]
    }
  ];

  const learningOutcomes = course.learningOutcomes;
  const prerequisites = course.prerequisites;

  const courseFeatures = [
    { emoji: '🎥', title: '40+ Video Lectures', description: 'Comprehensive video content with demos' },
    { emoji: '🧪', title: '10+ Hands-on Labs', description: 'Real-world coding exercises' },
    { emoji: '📊', title: '3 Major Projects', description: 'Portfolio-ready capstone projects' },
    { emoji: '🏆', title: 'Certificate', description: 'Industry-recognized completion certificate' },
    { emoji: '💬', title: 'Live Q&A Sessions', description: 'Weekly office hours with instructor' },
    { emoji: '📥', title: 'Downloadable Resources', description: 'Code templates, notebooks, and slides' }
  ];

  const testimonials = [
    {
      name: 'Jessica Martinez',
      role: 'AI Research Scientist',
      company: 'Goldman Sachs',
      rating: 5,
      text: 'Dr. Lee\'s course is the best introduction to GenAI I\'ve found. The focus on financial applications made it immediately applicable to my work. Highly recommended!',
      image: 'JM'
    },
    {
      name: 'David Wong',
      role: 'Product Manager',
      company: 'Morgan Stanley',
      rating: 5,
      text: 'Perfect balance of theory and practice. I went from knowing nothing about transformers to deploying a GenAI assistant for our trading desk in 4 weeks.',
      image: 'DW'
    },
    {
      name: 'Aisha Khan',
      role: 'Data Scientist',
      company: 'BlackRock',
      rating: 5,
      text: 'The hands-on labs were exceptional. Building a financial Q&A system and fine-tuning models for sentiment analysis gave me practical skills I use daily.',
      image: 'AK'
    }
  ];

  const faqs = [
    {
      icon: Clock,
      question: 'What is the time commitment required?',
      answer: 'This is a 4-week course designed for busy professionals. Expect to spend 6-8 hours per week including video lectures, hands-on labs, and project work. You have lifetime access to all materials.',
      links: [
        { text: 'View full schedule', url: '#' }
      ]
    },
    {
      icon: HelpCircle,
      question: 'Do I need prior GenAI experience?',
      answer: 'No prior GenAI experience required. We start from the fundamentals. However, you should have basic Python programming skills and understand ML basics (what is a neural network, training, etc.).',
      links: [
        { text: 'Check prerequisites', url: '#' }
      ]
    },
    {
      icon: Code,
      question: 'What tools and APIs will I need?',
      answer: 'You\'ll need Python 3.8+ and access to OpenAI API (we provide $50 in credits). We also cover Azure OpenAI and Anthropic APIs. All code templates and Jupyter notebooks are provided.',
      links: [
        { text: 'Setup guide', url: '#' }
      ]
    },
    {
      icon: Award,
      question: 'Can I get a certificate for this course?',
      answer: 'Yes! Upon completion, you receive a QuantUniversity Certificate of Completion. This course is also part of the Responsible GenAI Certificate Program, which includes 5 courses and saves you 20%.',
      links: [
        { text: 'View certificate program', url: '#' }
      ]
    },
    {
      icon: AlertCircle,
      question: 'What is your refund policy?',
      answer: 'We offer a 30-day money-back guarantee. If you\'re not satisfied for any reason within 30 days, we\'ll provide a full refund, no questions asked.',
      links: [
        { text: 'Full refund policy', url: '#' }
      ]
    }
  ];

  const relatedCourses = [
    {
      title: 'Bias Detection in GenAI Systems',
      price: '$549',
      duration: '3 weeks',
      hoursPerWeek: 2.5,
      students: 2134,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZXRoaWNzfGVufDF8fHx8MTc2MjExNjc1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Model Cards & Documentation',
      price: '$449',
      duration: '2 weeks',
      hoursPerWeek: 3,
      students: 1876,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MjA1ODI0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Ethical Frameworks for AI',
      price: '$499',
      duration: '3 weeks',
      hoursPerWeek: 2,
      students: 2543,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZXRoaWNzfGVufDF8fHx8MTc2MjExNjc4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'AI Safety & Alignment',
      price: '$699',
      duration: '4 weeks',
      hoursPerWeek: 3.5,
      students: 1456,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMHNhZmV0eXxlbnwxfHx8fDE3NjIxMTY4MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink 
                  onClick={() => onNavigate('home')}
                  className="cursor-pointer hover:text-[#007CBF]"
                >
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink 
                  onClick={() => onNavigate('certificate-programs')}
                  className="cursor-pointer hover:text-[#007CBF]"
                >
                  Certificate Programs
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink 
                  onClick={() => onNavigate('responsible-genai-cert')}
                  className="cursor-pointer hover:text-[#007CBF]"
                >
                  {certificate?.title || 'Responsible GenAI'}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{course.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 py-16">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZXRoaWNzfGVufDF8fHx8MTc2MjExNjc1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Generative AI"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-20">
          <Button 
            variant="ghost" 
            className="text-white hover:bg-white/10 mb-6"
            onClick={() => onNavigate('responsible-genai-cert')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Certificate Program
          </Button>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Badge className="mb-4 bg-purple-600 text-white">
                <Sparkles className="h-3 w-3 mr-1" />
                Popular Course
              </Badge>
              <h1 className="text-white mb-4">{course.title}</h1>
              <p className="text-xl text-white/90 mb-6 leading-relaxed">
                {course.detailedDescription}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-white/90 mb-8">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-xl">{course.rating}</span>
                  <span className="text-white/70">({Math.round(course.students * 0.25)} reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>{course.duration}</span>
                </div>
              </div>

              {/* Video Preview Button */}
              <Dialog open={isVideoModalOpen} onOpenChange={setIsVideoModalOpen}>
                <DialogTrigger asChild>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-white text-white hover:bg-white hover:text-purple-900 mb-8"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch Course Preview
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <DialogHeader>
                    <DialogTitle>Course Preview</DialogTitle>
                  </DialogHeader>
                  <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <PlayCircle className="h-20 w-20 mx-auto mb-4 opacity-50" />
                        <p className="text-lg">Video preview would play here</p>
                        <p className="text-sm text-white/70 mt-2">Sample intro lecture on GenAI fundamentals</p>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center text-white text-xl">
                  SL
                </div>
                <div>
                  <p className="text-white">Taught by</p>
                  <p className="text-white/90">{course.instructor}</p>
                  <p className="text-sm text-white/70">AI Research Lead, QuantUniversity</p>
                </div>
              </div>
            </div>

            {/* Enrollment Card */}
            <div className="lg:col-span-1">
              <Card className="border-2 border-purple-600 shadow-2xl sticky top-24 bg-white">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-4xl text-gray-900 mb-2">${course.price}</div>
                    <p className="text-gray-600">One-time payment</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white h-12">
                      Enroll Now
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-2 border-gray-300 h-12"
                      onClick={() => setIsVideoModalOpen(true)}
                    >
                      <Play className="mr-2 h-4 w-4" />
                      Watch Preview
                    </Button>
                  </div>

                  <div className="space-y-3 text-sm text-gray-700 border-t pt-4">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-purple-600" />
                      <span>Lifetime access to course materials</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-purple-600" />
                      <span>10+ hands-on coding labs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-purple-600" />
                      <span>Certificate of completion</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-purple-600" />
                      <span>Weekly live Q&A sessions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-purple-600" />
                      <span>Access to private community</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-purple-600" />
                      <span>30-day money-back guarantee</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t text-center">
                    <p className="text-sm text-gray-600 mb-2">Share this course</p>
                    <div className="flex justify-center gap-2">
                      <Button variant="outline" size="icon">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Certificate Program Cross-Sell Box */}
              {certificate && (
                <Collapsible 
                  open={isCertBoxOpen} 
                  onOpenChange={setIsCertBoxOpen}
                  className="mt-6 lg:block"
                >
                  <Card className="border-2 border-purple-200 bg-purple-50">
                    <CardContent className="p-6">
                      <CollapsibleTrigger asChild>
                        <Button 
                          variant="ghost" 
                          className="w-full flex items-center justify-between p-0 h-auto hover:bg-transparent mb-4 lg:cursor-default"
                        >
                          <div className="flex items-center gap-2">
                            <Sparkles className="h-5 w-5 text-purple-600" />
                            <span className="font-semibold text-gray-900">💡 This course is part of:</span>
                          </div>
                          <ChevronDown className={`h-5 w-5 text-gray-600 transition-transform lg:hidden ${isCertBoxOpen ? 'rotate-180' : ''}`} />
                        </Button>
                      </CollapsibleTrigger>
                      
                      <CollapsibleContent className="space-y-4">
                        <div>
                          <h4 className="text-gray-900 mb-2">{certificate.title}</h4>
                          <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                            <span>{certificate.courseIds.length} courses</span>
                            <span>•</span>
                            <span>~{certificate.duration}</span>
                            <span>•</span>
                            <Badge className="bg-green-500 text-white border-0">
                              Save {certificate.savings}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-700 mb-4">
                            Enroll in the full certificate program and save ${(certificate.courseIds.length * course.price - certificate.price).toLocaleString()} compared to buying courses individually.
                          </p>
                        </div>
                        
                        <Button 
                          className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                          onClick={() => onNavigate('responsible-genai-cert')}
                        >
                          View Full Program
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CollapsibleContent>
                    </CardContent>
                  </Card>
                </Collapsible>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Course Features with Emojis */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {courseFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-2 hover:border-purple-600 transition-all text-center group hover:shadow-lg">
                  <CardContent className="p-4">
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                      {feature.emoji}
                    </div>
                    <h4 className="text-gray-900 text-sm mb-1">{feature.title}</h4>
                    <p className="text-xs text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-[#F9FAFB]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="bg-white border shadow-sm">
              <TabsTrigger value="overview" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                Overview
              </TabsTrigger>
              <TabsTrigger value="curriculum" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                Curriculum
              </TabsTrigger>
              <TabsTrigger value="instructor" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                Instructor
              </TabsTrigger>
              <TabsTrigger value="reviews" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                Reviews
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  {/* Key Outcomes Callout */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-gradient-to-br from-purple-600 to-purple-700 border-0 text-white">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-3 mb-4">
                          <Target className="h-8 w-8" />
                          <h3 className="text-white">Key Outcomes</h3>
                        </div>
                        <p className="text-xl text-white/95 leading-relaxed">
                          Master <strong>generative AI fundamentals</strong> including transformers, LLMs, and diffusion models. Learn to <strong>build, fine-tune, and deploy</strong> GenAI applications for financial services with hands-on projects.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* What You'll Learn */}
                  <Card className="bg-white border-2">
                    <CardContent className="p-8">
                      <h2 className="text-gray-900 mb-6">What You'll Learn</h2>
                      <div className="grid md:grid-cols-2 gap-4">
                        {learningOutcomes.map((outcome, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Course Description with Highlight Callouts */}
                  <Card className="bg-white border-2">
                    <CardContent className="p-8">
                      <h2 className="text-gray-900 mb-4">Course Description</h2>
                      <div className="space-y-4 text-gray-700 leading-relaxed">
                        <p>
                          Generative AI is revolutionizing financial services, from automated report generation to sophisticated trading assistants. This comprehensive 4-week course provides a solid foundation in GenAI technologies, with a specific focus on financial applications.
                        </p>
                        <p>
                          You'll start by understanding transformer architecture and attention mechanisms, then progress to working with large language models (LLMs) like GPT-4, Claude, and open-source alternatives. Learn prompt engineering, fine-tuning techniques, and how to evaluate GenAI model performance.
                        </p>
                        
                        {/* Highlight Callout */}
                        <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg my-6">
                          <div className="flex items-start gap-3">
                            <Lightbulb className="h-6 w-6 text-purple-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-gray-900 mb-2">
                                <strong>What sets this course apart:</strong>
                              </p>
                              <p className="text-gray-700">
                                <strong className="text-purple-600">Financial services focus</strong>. Every concept is taught with financial use cases: from building document Q&A systems for regulatory compliance to fine-tuning models for financial sentiment analysis and market commentary generation.
                              </p>
                            </div>
                          </div>
                        </div>

                        <p>
                          The course covers both text generation (LLMs) and image generation (diffusion models), giving you a comprehensive understanding of the GenAI landscape. You'll also learn critical production considerations: API cost optimization, hallucination detection, security (prompt injection), and monitoring.
                        </p>

                        {/* Another Highlight Callout */}
                        <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg my-6">
                          <div className="flex items-start gap-3">
                            <Award className="h-6 w-6 text-purple-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-gray-700">
                                By the end, you'll have built <strong className="text-purple-600">3 portfolio projects</strong>: a financial document Q&A system, a fine-tuned sentiment analysis model, and a production-ready GenAI financial assistant—all deployable and demonstrable to employers.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Prerequisites */}
                  <Card className="bg-white border-2">
                    <CardContent className="p-8">
                      <h2 className="text-gray-900 mb-4">Prerequisites</h2>
                      <div className="space-y-3">
                        {prerequisites.map((prereq, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-purple-600/10 flex items-center justify-center flex-shrink-0">
                              <span className="text-xs text-purple-600">{index + 1}</span>
                            </div>
                            <span className="text-gray-700">{prereq}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1 space-y-6">
                  {/* Quick Stats */}
                  <Card className="bg-gradient-to-br from-purple-600 to-purple-700 border-0 text-white">
                    <CardContent className="p-6">
                      <h4 className="text-white mb-4">Course Stats</h4>
                      <div className="space-y-4">
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                        >
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-white/80">Completion Rate</span>
                            <span className="text-white font-semibold">92%</span>
                          </div>
                          <Progress value={92} className="h-2 bg-white/20" />
                          <p className="text-xs text-white/70 mt-2">Higher than average</p>
                        </motion.div>

                        <div className="border-t border-white/20 pt-4 space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-white/80">Total Students</span>
                            <span className="text-white font-semibold">{course.students.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-white/80">Average Rating</span>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-white font-semibold">{course.rating}</span>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-white/80">Course Level</span>
                            <span className="text-white font-semibold">{course.level}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Tools & Technologies */}
                  <Card className="border-2">
                    <CardContent className="p-6">
                      <h4 className="text-gray-900 mb-4">Tools & Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {['Python', 'OpenAI API', 'Transformers', 'GPT-4', 'Claude', 'LangChain', 'Jupyter', 'Azure OpenAI'].map((tech, index) => (
                          <Badge key={index} variant="outline" className="border-purple-600 text-purple-600">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Who This Is For */}
                  <Card className="border-2">
                    <CardContent className="p-6">
                      <h4 className="text-gray-900 mb-4">Who This Course Is For</h4>
                      <ul className="space-y-3 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span>Data scientists exploring GenAI applications</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span>ML engineers building LLM applications</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span>Financial analysts wanting AI automation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span>Product managers overseeing GenAI products</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="curriculum" className="space-y-6">
              <Card className="border-2">
                <CardContent className="p-8">
                  <h2 className="text-gray-900 mb-6">Course Curriculum</h2>
                  <p className="text-gray-600 mb-8">
                    {course.modules} modules • {courseModules.reduce((acc, m) => acc + m.lessons, 0)} lessons • 4 weeks
                  </p>
                  
                  <Accordion type="single" collapsible className="space-y-4">
                    {courseModules.map((module, index) => (
                      <AccordionItem key={index} value={`module-${index}`} className="border-2 rounded-lg px-6">
                        <AccordionTrigger className="hover:no-underline">
                          <div className="flex items-center gap-4 text-left">
                            <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center flex-shrink-0">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <h4 className="text-gray-900 mb-1">{module.title}</h4>
                              <div className="flex items-center gap-4 text-sm text-gray-600">
                                <span className="flex items-center gap-1">
                                  <Clock className="h-4 w-4" />
                                  {module.duration}
                                </span>
                                <span className="flex items-center gap-1">
                                  <BookOpen className="h-4 w-4" />
                                  {module.lessons} lessons
                                </span>
                              </div>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-4">
                          <ul className="space-y-2 ml-14">
                            {module.topics.map((topic, topicIndex) => (
                              <li key={topicIndex} className="flex items-start gap-3 text-gray-700">
                                <Check className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="instructor" className="space-y-6">
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center text-white text-3xl flex-shrink-0">
                      SL
                    </div>
                    <div>
                      <h2 className="text-gray-900 mb-2">{course.instructor}</h2>
                      <p className="text-gray-600 mb-4">AI Research Lead, QuantUniversity</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          <span>15,000+ students</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>4.9 instructor rating</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4" />
                          <span>8 courses</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      Dr. Sophia Lee is an AI Research Lead at QuantUniversity specializing in large language models and generative AI applications in finance. She holds a Ph.D. in Computer Science from Stanford University, where her research focused on transformer architectures and efficient fine-tuning methods.
                    </p>
                    <p>
                      Before joining QuantUniversity, Dr. Lee led the GenAI initiatives at a top-tier investment bank, where she built and deployed production LLM systems for research automation, client reporting, and compliance monitoring. Her work on parameter-efficient fine-tuning for financial domain adaptation has been published in leading ML conferences.
                    </p>
                    <p>
                      Dr. Lee is passionate about making cutting-edge AI accessible to finance professionals. Her teaching philosophy emphasizes hands-on learning with real-world datasets and production-oriented best practices. She has trained over 15,000 students across 8 courses at QuantUniversity.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="space-y-6">
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h2 className="text-gray-900 mb-2">Student Reviews</h2>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                          <span className="text-3xl text-gray-900">{course.rating}</span>
                        </div>
                        <div className="text-gray-600">
                          <p>{Math.round(course.students * 0.25)} reviews</p>
                          <p className="text-sm">{course.students.toLocaleString()} students</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {testimonials.map((testimonial, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="border-b pb-6 last:border-b-0"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center flex-shrink-0">
                            {testimonial.image}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <p className="text-gray-900">{testimonial.name}</p>
                                <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
                              </div>
                              <div className="flex items-center gap-1">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about the course</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-2 hover:border-purple-600 transition-all h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <faq.icon className="h-5 w-5 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-gray-900 mb-2">{faq.question}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed mb-3">{faq.answer}</p>
                        {faq.links && (
                          <div className="flex flex-wrap gap-2">
                            {faq.links.map((link, linkIndex) => (
                              <Button
                                key={linkIndex}
                                variant="link"
                                className="h-auto p-0 text-purple-600 text-sm"
                              >
                                {link.text}
                                <ExternalLink className="ml-1 h-3 w-3" />
                              </Button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="py-16 bg-[#F9FAFB]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-gray-900 mb-2">Related Courses</h2>
              <p className="text-gray-600">Continue your learning journey</p>
            </div>
          </div>

          <ScrollableCarousel>
            {relatedCourses.map((relatedCourse, index) => (
              <div key={index} className="flex-shrink-0 w-80">
                <Card className="border-2 hover:border-purple-600 transition-all overflow-hidden group hover:shadow-xl h-full">
                  <div className="relative h-48">
                    <ImageWithFallback
                      src={relatedCourse.image}
                      alt={relatedCourse.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-gray-900 mb-3 line-clamp-2">{relatedCourse.title}</h4>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{relatedCourse.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{relatedCourse.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl text-purple-600">{relatedCourse.price}</span>
                      <Button variant="outline" size="sm" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </ScrollableCarousel>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-8 lg:px-20 text-center">
          <h2 className="text-white mb-6">Ready to Master Generative AI?</h2>
          <p className="text-xl text-white/90 mb-8">
            Join {course.students.toLocaleString()} students learning to build GenAI applications for finance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 h-14 px-8">
              Enroll Now - ${course.price}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 h-14 px-8"
              onClick={() => onNavigate('responsible-genai-cert')}
            >
              View Certificate Program
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
