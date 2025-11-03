import { useState } from 'react';
import { Check, Clock, Users, Award, Star, Calendar, Download, PlayCircle, FileText, Video, BookOpen, Code, TrendingUp, ChevronDown, Share2, ArrowLeft, Play, HelpCircle, ExternalLink, AlertCircle, Lightbulb, Target, X } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import { ScrollableCarousel } from '../components/ScrollableCarousel';

interface CourseDetailPageProps {
  onNavigate: (page: string) => void;
}

export function CourseDetailPage({ onNavigate }: CourseDetailPageProps) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const courseModules = [
    {
      title: 'Module 1: Introduction to Machine Learning in Finance',
      duration: '2 weeks',
      lessons: 8,
      topics: [
        'Overview of ML applications in finance',
        'Supervised vs. Unsupervised Learning',
        'Feature engineering for financial data',
        'Model evaluation metrics for finance',
        'Hands-on: Building your first financial ML model'
      ]
    },
    {
      title: 'Module 2: Regression Models for Financial Forecasting',
      duration: '2 weeks',
      lessons: 10,
      topics: [
        'Linear and polynomial regression',
        'Ridge, Lasso, and Elastic Net regularization',
        'Time series regression techniques',
        'Forecasting stock prices and returns',
        'Lab: Implementing regression models in Python'
      ]
    },
    {
      title: 'Module 3: Classification in Trading and Risk',
      duration: '2 weeks',
      lessons: 9,
      topics: [
        'Logistic regression for credit scoring',
        'Decision trees and random forests',
        'Support Vector Machines (SVM)',
        'Gradient Boosting (XGBoost, LightGBM)',
        'Case study: Credit default prediction'
      ]
    },
    {
      title: 'Module 4: Deep Learning for Finance',
      duration: '3 weeks',
      lessons: 12,
      topics: [
        'Neural networks fundamentals',
        'LSTM and RNN for time series',
        'Convolutional Neural Networks for pattern recognition',
        'Attention mechanisms and Transformers',
        'Project: Building a sentiment analysis model for market news'
      ]
    },
    {
      title: 'Module 5: Reinforcement Learning for Algorithmic Trading',
      duration: '2 weeks',
      lessons: 8,
      topics: [
        'Q-Learning and Deep Q-Networks (DQN)',
        'Policy gradient methods',
        'Building trading agents',
        'Backtesting and performance evaluation',
        'Lab: Implementing a reinforcement learning trading bot'
      ]
    },
    {
      title: 'Module 6: Portfolio Optimization with ML',
      duration: '2 weeks',
      lessons: 7,
      topics: [
        'Modern Portfolio Theory revisited',
        'ML-based asset allocation',
        'Risk parity and factor models',
        'Black-Litterman with ML insights',
        'Project: Build an ML-powered portfolio optimizer'
      ]
    },
    {
      title: 'Module 7: Model Risk Management and MLOps',
      duration: '1 week',
      lessons: 6,
      topics: [
        'Model validation and governance',
        'Explainability (SHAP, LIME)',
        'ML pipeline deployment',
        'Monitoring and retraining strategies',
        'Regulatory compliance (SR 11-7)'
      ]
    }
  ];

  const learningOutcomes = [
    'Build production-ready ML models for financial forecasting, trading, and risk assessment',
    'Implement supervised and unsupervised learning algorithms using Python and popular libraries',
    'Apply deep learning techniques including LSTMs, CNNs, and Transformers to financial data',
    'Develop reinforcement learning agents for algorithmic trading strategies',
    'Optimize portfolios using machine learning-enhanced asset allocation techniques',
    'Deploy ML models with proper validation, explainability, and governance frameworks',
    'Understand and apply model risk management principles for regulatory compliance',
    'Work with real financial datasets and industry-standard tools (Python, TensorFlow, PyTorch, Scikit-learn)'
  ];

  const prerequisites = [
    'Basic understanding of finance and financial markets',
    'Intermediate Python programming skills',
    'Fundamental knowledge of statistics and probability',
    'Familiarity with linear algebra (helpful but not required)',
    'No prior ML experience required - we start from fundamentals'
  ];

  const courseFeatures = [
    { emoji: '🎥', title: '60+ Video Lectures', description: 'High-quality recorded sessions with live coding' },
    { emoji: '🧪', title: '15+ Hands-on Labs', description: 'Coding exercises and real-world projects' },
    { emoji: '📊', title: '5 Major Projects', description: 'Portfolio-worthy capstone projects' },
    { emoji: '🏆', title: 'Certificate', description: 'Industry-recognized completion certificate' },
    { emoji: '💬', title: 'Live Q&A Sessions', description: 'Weekly office hours with the instructor' },
    { emoji: '📥', title: 'Downloadable Resources', description: 'Code templates, datasets, and slides' }
  ];

  const testimonials = [
    {
      name: 'Michael Chen',
      role: 'Quantitative Analyst',
      company: 'JP Morgan',
      rating: 5,
      text: 'This course transformed how I approach ML in finance. The hands-on labs were particularly valuable - I implemented several models at work within weeks of completing the course.',
      image: 'MC'
    },
    {
      name: 'Sarah Johnson',
      role: 'Risk Manager',
      company: 'Goldman Sachs',
      rating: 5,
      text: 'Sri\'s teaching style is exceptional. He breaks down complex concepts and shows real-world applications. The model risk management module alone was worth the investment.',
      image: 'SJ'
    },
    {
      name: 'Rahul Patel',
      role: 'Data Scientist',
      company: 'Citadel',
      rating: 5,
      text: 'Best ML for finance course I\'ve taken. Covers everything from fundamentals to advanced deep learning, all with financial applications. Highly recommend for anyone serious about quant finance.',
      image: 'RP'
    }
  ];

  const faqs = [
    {
      icon: Clock,
      question: 'What is the time commitment required?',
      answer: 'The course is designed for working professionals. Expect to spend 8-12 hours per week including video lectures, hands-on labs, and assignments. The course runs for 12 weeks, but you have lifetime access to all materials.',
      links: [
        { text: 'View full schedule', url: '#' }
      ]
    },
    {
      icon: HelpCircle,
      question: 'Do I need prior machine learning experience?',
      answer: 'No prior ML experience is required. We start with fundamentals and build up to advanced techniques. However, you should be comfortable with Python programming and have basic statistics knowledge.',
      links: [
        { text: 'Check prerequisites', url: '#' }
      ]
    },
    {
      icon: Code,
      question: 'What tools and software will I need?',
      answer: 'You\'ll need a computer with Python 3.8+ installed. We use free, open-source libraries including Scikit-learn, TensorFlow, PyTorch, and Pandas. All datasets and code templates are provided.',
      links: [
        { text: 'Setup guide', url: '#' }
      ]
    },
    {
      icon: Users,
      question: 'Is this course suitable for enterprise teams?',
      answer: 'Absolutely! We offer enterprise licenses with team dashboards, progress tracking, and customized training paths. Contact us for volume pricing and dedicated support.',
      links: [
        { text: 'Get enterprise pricing', url: '#' },
        { text: 'View team features', url: '#' }
      ]
    },
    {
      icon: Award,
      question: 'What kind of certificate will I receive?',
      answer: 'Upon successful completion, you\'ll receive a QuantUniversity Certificate of Completion with verification credentials. The certificate is shareable on LinkedIn and recognized by major financial institutions.',
      links: [
        { text: 'View sample certificate', url: '#' }
      ]
    },
    {
      icon: AlertCircle,
      question: 'What is your refund policy?',
      answer: 'We offer a 30-day money-back guarantee. If you\'re not satisfied with the course for any reason within the first 30 days, we\'ll provide a full refund, no questions asked.',
      links: [
        { text: 'Full refund policy', url: '#' }
      ]
    }
  ];

  const relatedCourses = [
    {
      title: 'Generative AI for Financial Services',
      price: '$449',
      duration: '10 weeks',
      hoursPerWeek: 2.5,
      students: 6250,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MjA1ODI0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Quantitative Risk Management',
      price: '$399',
      duration: '8 weeks',
      hoursPerWeek: 4,
      students: 5890,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1599580546605-a86af98dbdb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MjA3OTQ2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Python for Financial Analysis',
      price: '$299',
      duration: '6 weeks',
      hoursPerWeek: 2,
      students: 9540,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MjA1ODI0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Deep Learning for NLP in Finance',
      price: '$429',
      duration: '9 weeks',
      hoursPerWeek: 3,
      students: 4680,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1709120395858-92f1c7c577f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZmluYW5jZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYyMTEwODM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];



  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1591453089816-0fbb971b454c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBmaW5hbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjIxMTM4NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Machine Learning"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-20">
          <Button 
            variant="ghost" 
            className="text-white hover:bg-white/10 mb-6"
            onClick={() => onNavigate('courses')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Courses
          </Button>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Badge className="mb-4 bg-[#007CBF] text-white">
                Best Seller
              </Badge>
              <h1 className="text-white mb-4">Machine Learning for Trading & Finance</h1>
              <p className="text-xl text-white/90 mb-6 leading-relaxed">
                Master ML algorithms, deep learning, and reinforcement learning to build production-ready models for financial forecasting, trading, and risk management.
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-white/90 mb-8">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-xl">4.9</span>
                  <span className="text-white/70">(1,847 reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span>7,320 students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>12 weeks</span>
                </div>
              </div>

              {/* Video Preview Button */}
              <Dialog open={isVideoModalOpen} onOpenChange={setIsVideoModalOpen}>
                <DialogTrigger asChild>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-white text-white hover:bg-white hover:text-gray-900 mb-8"
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
                        <p className="text-sm text-white/70 mt-2">Sample intro lecture showcasing course content</p>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#007CBF] to-[#005A8C] flex items-center justify-center text-white text-xl">
                  SK
                </div>
                <div>
                  <p className="text-white">Taught by</p>
                  <p className="text-white/90">Sri Krishnamurthy, CFA, CAP</p>
                  <p className="text-sm text-white/70">Founder, QuantUniversity</p>
                </div>
              </div>
            </div>

            {/* Enrollment Card */}
            <div className="lg:col-span-1">
              <Card className="border-2 border-[#007CBF] shadow-2xl sticky top-24 bg-white">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-4xl text-gray-900 mb-2">$449</div>
                    <p className="text-gray-600">One-time payment</p>
                    <Badge className="mt-2 bg-green-500 text-white">
                      Limited Time Offer
                    </Badge>
                  </div>

                  <div className="space-y-4 mb-6">
                    <Button className="w-full bg-[#007CBF] hover:bg-[#006A9C] text-white h-12">
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
                      <Check className="h-4 w-4 text-[#007CBF]" />
                      <span>Lifetime access to course materials</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#007CBF]" />
                      <span>15+ hands-on coding projects</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#007CBF]" />
                      <span>Certificate of completion</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#007CBF]" />
                      <span>Weekly live Q&A sessions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#007CBF]" />
                      <span>Access to private community</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#007CBF]" />
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
                <Card className="border-2 hover:border-[#007CBF] transition-all text-center group hover:shadow-lg">
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
              <TabsTrigger value="overview" className="data-[state=active]:bg-[#007CBF] data-[state=active]:text-white">
                Overview
              </TabsTrigger>
              <TabsTrigger value="curriculum" className="data-[state=active]:bg-[#007CBF] data-[state=active]:text-white">
                Curriculum
              </TabsTrigger>
              <TabsTrigger value="instructor" className="data-[state=active]:bg-[#007CBF] data-[state=active]:text-white">
                Instructor
              </TabsTrigger>
              <TabsTrigger value="reviews" className="data-[state=active]:bg-[#007CBF] data-[state=active]:text-white">
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
                    <Card className="bg-gradient-to-br from-[#007CBF] to-[#006A9C] border-0 text-white">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-3 mb-4">
                          <Target className="h-8 w-8" />
                          <h3 className="text-white">Key Outcomes</h3>
                        </div>
                        <p className="text-xl text-white/95 leading-relaxed">
                          By the end of this course, you'll be able to <strong>build and deploy production-ready ML models</strong> for financial forecasting, algorithmic trading, and risk management—with confidence in your ability to handle <strong>real-world financial applications</strong>.
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
                            <Check className="h-5 w-5 text-[#007CBF] flex-shrink-0 mt-0.5" />
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
                          Machine learning is revolutionizing the financial industry, from algorithmic trading to credit risk assessment. This comprehensive 12-week course takes you from ML fundamentals to building production-ready models specifically designed for financial applications.
                        </p>
                        <p>
                          You'll start by learning the core concepts of supervised and unsupervised learning, then progress to advanced techniques including deep learning with LSTMs and Transformers, reinforcement learning for trading agents, and ML-enhanced portfolio optimization.
                        </p>
                        
                        {/* Blue Highlight Callout */}
                        <div className="bg-blue-50 border-l-4 border-[#007CBF] p-6 rounded-r-lg my-6">
                          <div className="flex items-start gap-3">
                            <Lightbulb className="h-6 w-6 text-[#007CBF] flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-gray-900 mb-2">
                                <strong>What sets this course apart:</strong>
                              </p>
                              <p className="text-gray-700">
                                Focus on <strong className="text-[#007CBF]">real-world financial applications</strong>. Every concept is taught with practical examples from trading, risk management, and portfolio optimization. You'll work with actual financial datasets and build models that mirror what's used in top financial institutions.
                              </p>
                            </div>
                          </div>
                        </div>

                        <p>
                          The course also covers critical topics often overlooked in other ML courses: model risk management, explainability (SHAP, LIME), regulatory compliance (SR 11-7), and MLOps best practices for deploying models in production environments.
                        </p>

                        {/* Another Highlight Callout */}
                        <div className="bg-blue-50 border-l-4 border-[#007CBF] p-6 rounded-r-lg my-6">
                          <div className="flex items-start gap-3">
                            <Award className="h-6 w-6 text-[#007CBF] flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-gray-700">
                                By the end of this course, you'll have a <strong className="text-[#007CBF]">portfolio of 15+ projects</strong> demonstrating your ability to apply machine learning to solve real financial problems—from predicting credit defaults to building reinforcement learning trading bots.
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
                            <div className="w-6 h-6 rounded-full bg-[#007CBF]/10 flex items-center justify-center flex-shrink-0">
                              <span className="text-xs text-[#007CBF]">{index + 1}</span>
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
                  {/* Quick Stats with Visual Progress */}
                  <Card className="bg-gradient-to-br from-[#007CBF] to-[#006A9C] border-0 text-white">
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
                            <span className="text-white font-semibold">87%</span>
                          </div>
                          <Progress value={87} className="h-2 bg-white/20" />
                          <p className="text-xs text-white/70 mt-1">Above industry average</p>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 }}
                        >
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-white/80">Job Placement</span>
                            <span className="text-white font-semibold">76%</span>
                          </div>
                          <Progress value={76} className="h-2 bg-white/20" />
                          <p className="text-xs text-white/70 mt-1">Within 6 months of completion</p>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 }}
                        >
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-white/80">Would Recommend</span>
                            <span className="text-white font-semibold">94%</span>
                          </div>
                          <Progress value={94} className="h-2 bg-white/20" />
                          <p className="text-xs text-white/70 mt-1">Based on student surveys</p>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Enterprise Option */}
                  <Card className="bg-white border-2 border-[#007CBF]">
                    <CardContent className="p-6">
                      <Users className="h-10 w-10 text-[#007CBF] mb-4" />
                      <h4 className="text-gray-900 mb-2">For Teams</h4>
                      <p className="text-gray-600 text-sm mb-4">
                        Train your entire team with custom learning paths, progress tracking, and dedicated support.
                      </p>
                      <Button 
                        className="w-full bg-[#007CBF] hover:bg-[#006A9C] text-white"
                        onClick={() => onNavigate('enterprise')}
                      >
                        Get Enterprise Pricing
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Learning Path */}
                  <Card className="bg-white border-2">
                    <CardContent className="p-6">
                      <TrendingUp className="h-10 w-10 text-[#007CBF] mb-4" />
                      <h4 className="text-gray-900 mb-2">Recommended Path</h4>
                      <p className="text-gray-600 text-sm mb-4">
                        This course is part of our AI in Finance learning path. Continue your journey:
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-gray-700">
                          <Check className="h-4 w-4 text-green-500" />
                          <span>Python for Finance</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#007CBF]">
                          <div className="w-4 h-4 rounded-full border-2 border-[#007CBF]"></div>
                          <span>ML for Trading (You are here)</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>
                          <span>Advanced Deep Learning</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="curriculum" className="space-y-8">
              <Card className="bg-white border-2">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h2 className="text-gray-900 mb-2">Course Curriculum</h2>
                    <p className="text-gray-600">
                      7 modules • 60 lessons • 12 weeks • 15+ hands-on projects
                    </p>
                  </div>

                  <Accordion type="single" collapsible className="space-y-4">
                    {courseModules.map((module, index) => (
                      <AccordionItem key={index} value={`module-${index}`} className="border-2 rounded-lg px-6">
                        <AccordionTrigger className="hover:no-underline">
                          <div className="flex items-center gap-4 text-left">
                            <div className="bg-[#007CBF]/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                              <span className="text-[#007CBF]">{index + 1}</span>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-gray-900 mb-1">{module.title}</h4>
                              <div className="flex items-center gap-4 text-sm text-gray-600">
                                <span className="flex items-center gap-1">
                                  <Clock className="h-4 w-4" />
                                  {module.duration}
                                </span>
                                <span className="flex items-center gap-1">
                                  <PlayCircle className="h-4 w-4" />
                                  {module.lessons} lessons
                                </span>
                              </div>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-4">
                          <ul className="space-y-2">
                            {module.topics.map((topic, topicIndex) => (
                              <li key={topicIndex} className="flex items-start gap-3 text-gray-700">
                                <Check className="h-4 w-4 text-[#007CBF] flex-shrink-0 mt-0.5" />
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

            <TabsContent value="instructor" className="space-y-8">
              <Card className="bg-white border-2">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#007CBF] to-[#005A8C] flex items-center justify-center text-white text-3xl flex-shrink-0">
                      SK
                    </div>
                    <div className="flex-1">
                      <h2 className="text-gray-900 mb-2">Sri Krishnamurthy, CFA, CAP</h2>
                      <p className="text-gray-600 mb-4">
                        Founder, QuantUniversity | Affiliate Faculty, George Mason University
                      </p>
                      <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          <span>25,000+ students</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>4.9 instructor rating</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4" />
                          <span>15+ courses</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      Sri Krishnamurthy is a globally recognized expert in AI, machine learning, and quantitative finance. As the founder of QuantUniversity, he has trained over 25,000 professionals from leading financial institutions including Goldman Sachs, JP Morgan, Bank of America, and Morgan Stanley.
                    </p>
                    <p>
                      With over 15 years of experience in quantitative finance and machine learning, Sri holds a CFA charter and is a Certified Analytics Professional (CAP). He serves as Affiliate Faculty at the Mason Autonomy and Robotics Center (MARC) at George Mason University and is an instructor for the AIAA Professional Development Program.
                    </p>
                    <p>
                      Sri's teaching philosophy combines rigorous academic foundations with practical, industry-tested applications. His courses are known for their hands-on approach, real-world case studies, and focus on building production-ready solutions. He has published extensively on AI in finance and is a frequent speaker at major industry conferences including Milken Institute, GARP, and CFA Institute events.
                    </p>
                    <p>
                      Before founding QuantUniversity, Sri held senior roles at major financial institutions where he built and deployed ML systems for trading, risk management, and portfolio optimization.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="space-y-8">
              <Card className="bg-white border-2">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <h2 className="text-gray-900 mb-6">Student Reviews</h2>
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div className="text-center">
                        <div className="text-6xl text-gray-900 mb-2">4.9</div>
                        <div className="flex justify-center gap-1 mb-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <p className="text-gray-600">Based on 1,847 reviews</p>
                      </div>
                      <div className="space-y-2">
                        {[5, 4, 3, 2, 1].map((rating) => (
                          <div key={rating} className="flex items-center gap-3">
                            <span className="text-sm text-gray-600 w-12">{rating} stars</span>
                            <Progress 
                              value={rating === 5 ? 87 : rating === 4 ? 10 : rating === 3 ? 2 : 1} 
                              className="flex-1 h-2" 
                            />
                            <span className="text-sm text-gray-600 w-12">
                              {rating === 5 ? '87%' : rating === 4 ? '10%' : rating === 3 ? '2%' : '1%'}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {testimonials.map((testimonial, index) => (
                      <Card key={index} className="border-2">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#007CBF] to-[#005A8C] flex items-center justify-center text-white flex-shrink-0">
                              {testimonial.image}
                            </div>
                            <div className="flex-1">
                              <h4 className="text-gray-900">{testimonial.name}</h4>
                              <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
                              <div className="flex gap-1 mt-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section with Icons */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-8 lg:px-20">
          <h2 className="text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="border-2 rounded-lg px-6">
                <AccordionTrigger className="text-gray-900 hover:no-underline">
                  <div className="flex items-center gap-3 text-left">
                    <div className="bg-[#007CBF]/10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <faq.icon className="h-5 w-5 text-[#007CBF]" />
                    </div>
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed pl-13">
                  <p className="mb-3">{faq.answer}</p>
                  {faq.links && faq.links.length > 0 && (
                    <div className="flex flex-wrap gap-3 mt-4">
                      {faq.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          className="inline-flex items-center gap-1 text-sm text-[#007CBF] hover:underline"
                        >
                          {link.text}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      ))}
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Related Courses Carousel */}
      <section className="py-16 bg-[#F9FAFB]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-gray-900">Related Courses</h2>
            <Badge className="bg-green-500 text-white">Bundle & Save 20%</Badge>
          </div>
          
          <ScrollableCarousel>
            {relatedCourses.map((course, index) => (
              <div key={index} className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]" style={{ scrollSnapAlign: 'start' }}>
                <Card className="border-2 hover:border-[#007CBF] transition-all hover-lift bg-white h-full">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="flex items-center gap-2 text-white text-sm">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration} • {course.hoursPerWeek} hrs/week</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-gray-900 mb-4 line-clamp-2">{course.title}</h4>
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <span className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        {course.rating}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {course.students.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-2xl text-[#007CBF]">{course.price}</span>
                      <Button 
                        size="sm"
                        className="bg-[#007CBF] hover:bg-[#006A9C] text-white"
                        onClick={() => onNavigate('courses')}
                      >
                        View Course
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </ScrollableCarousel>

          {/* Bundle CTA */}
          <Card className="mt-8 border-2 border-[#007CBF] bg-gradient-to-br from-blue-50 to-white">
            <CardContent className="p-8 text-center">
              <Badge className="mb-4 bg-green-500 text-white">Limited Time Offer</Badge>
              <h3 className="text-gray-900 mb-3">Bundle All AI Courses & Save 20%</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Get access to all 4 courses in our AI in Finance track for $1,349 (save $227). Perfect for building comprehensive ML expertise.
              </p>
              <Button size="lg" className="bg-[#007CBF] hover:bg-[#006A9C] text-white">
                Get Bundle Deal - $1,349
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-[#007CBF]">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-white mb-4">Ready to Master Machine Learning for Finance?</h2>
          <p className="text-xl text-white/90 mb-8">
            Join 7,320+ students and start building production-ready ML models for trading and finance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-[#007CBF] hover:bg-gray-100 h-14 px-8">
              Enroll Now - $449
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-[#007CBF] h-14 px-8"
              onClick={() => onNavigate('enterprise')}
            >
              Enterprise Pricing
            </Button>
          </div>
          <p className="text-white/80 mt-6 text-sm">30-day money-back guarantee • Lifetime access • Certificate included</p>
        </div>
      </section>
    </div>
  );
}
