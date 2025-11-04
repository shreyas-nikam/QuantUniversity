import { useState } from 'react';
import { ArrowLeft, Calendar, User, Clock, BookOpen, Share2, Linkedin, Twitter, Link2, Play, X, ArrowRight, CheckCircle, Code, Shield, Zap, TrendingUp, ChevronRight, Home } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../components/ui/dialog';
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from '../components/ui/breadcrumb';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import { toast } from 'sonner@2.0.3';
import { SEO } from '../components/SEO';
import { generateArticleSchema, generateBreadcrumbSchema } from '../data/seo';
import { getArticleById } from '../data/articles';

interface BlogArticlePageProps {
  onNavigate: (page: string) => void;
  articleId?: string | number | null;
}

export function BlogArticlePage({ onNavigate, articleId }: BlogArticlePageProps) {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // Helper to convert date format from "Oct 31, 2025" to "2025-10-31"
  const convertToISODate = (dateStr: string): string => {
    try {
      const date = new Date(dateStr);
      return date.toISOString().split('T')[0];
    } catch {
      return '2025-10-31';
    }
  };

  // Get article from data or fall back to default "vibe-coding" article
  const articleData = articleId ? getArticleById(articleId) : getArticleById('vibe-coding');
  
  // Use the fetched article or fallback to hardcoded default
  const article = articleData ? {
    title: articleData.title,
    description: articleData.excerpt,
    author: articleData.author,
    publishDate: convertToISODate(articleData.date),
    displayDate: articleData.date,
    image: articleData.image,
    category: articleData.category,
    readTime: articleData.readTime,
    tags: articleData.tags || []
  } : {
    title: 'Beyond Vibe-Coding: Managing the Risks of Generative AI in Code Development',
    description: 'How do we know if AI-generated code is correct, efficient, and safe to deploy? Exploring validation frameworks from HumanEval to AeroEval.',
    author: 'Sri Krishnamurthy, CFA',
    publishDate: '2025-10-31',
    displayDate: 'Oct 31, 2025',
    image: 'https://images.unsplash.com/photo-1544847558-3ccacb31ee7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwcHJvZ3JhbW1pbmclMjBkZXZlbG9wbWVudCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYyMTEzNTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Technical Insights',
    readTime: '8 min read',
    tags: ['GenAI', 'Risk Management', 'Code Quality']
  };

  // Structured data
  const articleSchema = generateArticleSchema(article);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Insights', url: '/insights' },
    { name: article.title, url: '/insights/vibe-coding' }
  ]);

  const copyLinkToClipboard = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      toast.success('Link copied to clipboard!');
    });
  };

  const shareToLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(article.title);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  };

  const shareToTwitter = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(article.title);
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  };

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        customSEO={{
          title: `${article.title} | QuantUniversity`,
          description: article.description,
          keywords: ['generative AI', 'code development', 'AI risk management', 'code validation', 'HumanEval', 'vibe coding'],
          ogImage: article.image,
          ogType: 'article',
          canonicalUrl: '/insights/vibe-coding',
          author: article.author,
          publishedTime: article.publishDate,
          section: article.category,
          tags: ['GenAI', 'Risk Management', 'Code Quality']
        }}
        structuredData={[breadcrumbSchema, articleSchema]}
      />
      
      {/* Breadcrumb Navigation */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink 
                  onClick={() => onNavigate('home')}
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
                <BreadcrumbLink 
                  onClick={() => onNavigate('thought-leadership')}
                  className="cursor-pointer hover:text-[#007CBF]"
                >
                  Insights
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage className="text-gray-900 line-clamp-1">{article.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Hero Section with Overlay Images */}
      <section className="relative h-[500px] bg-gray-900 overflow-hidden">
        {/* Multiple layered background images for code+finance+AI motif */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 grid grid-cols-3">
            <div className="relative overflow-hidden">
              <ImageWithFallback
                src={article.image}
                alt={`${article.title} - featured article image`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1692598578454-570cb62ecf2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwY29kZXxlbnwxfHx8fDE3NjIxOTI3ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Artificial intelligence and machine learning technology - representing generative AI code generation"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1761850167081-473019536383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNlJTIwdGVjaG5vbG9neSUyMGRhdGF8ZW58MXx8fHwxNzYyMTU1NTAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Finance technology and data analytics - showcasing financial modeling and quantitative analysis"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#007CBF]/90 via-gray-900/80 to-gray-900/90"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-8 h-full flex flex-col justify-end pb-16">
          <Button 
            variant="ghost" 
            className="text-white hover:bg-white/10 mb-6 w-fit"
            onClick={() => onNavigate('thought-leadership')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Thought Leadership
          </Button>
          
          <Badge className="mb-4 bg-purple-500 text-white border-0 w-fit">
            {article.category}
          </Badge>
          
          <h1 className="text-white mb-6">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{article.displayDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{article.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{article.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-8">
          {/* Enhanced Author Info with LinkedIn */}
          <Card className="mb-12 border-2 border-gray-200 hover:border-[#007CBF] transition-colors">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-[#007CBF] flex-shrink-0">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
                    alt="Sri Krishnamurthy, CFA - Founder of QuantUniversity and author of this article"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-gray-900 mb-1">Sri Krishnamurthy, CFA, CAP</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Affiliate Faculty, Mason Autonomy and Robotics Center (MARC), George Mason University | Founder, QuantUniversity | Instructor, AIAA Professional Development Program
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-[#0077B5] text-[#0077B5] hover:bg-[#0077B5] hover:text-white"
                      onClick={() => window.open('https://www.linkedin.com', '_blank')}
                    >
                      <Linkedin className="h-4 w-4 mr-2" />
                      Connect on LinkedIn
                    </Button>
                    <Button 
                      variant="link" 
                      size="sm"
                      className="text-[#007CBF]"
                      onClick={() => onNavigate('thought-leadership')}
                    >
                      More from this author
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Article Body */}
          <article className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              In the past year, the explosion of large language models (LLMs) has transformed software engineering. Developers now routinely "prompt" their way into functional code, skipping traditional design and verification steps. This new workflow—often called "vibe coding"—feels magical but introduces deep and underexplored risks.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              The convenience of tools like GPT-4, Claude, or Gemini belies a serious engineering challenge: how do we know if the AI-generated code is correct, efficient, and safe to deploy?
            </p>

            <h2 className="text-gray-900 mb-4 mt-12">The New Validation Problem</h2>
            
            <p className="text-gray-700 leading-relaxed mb-8">
              Traditional software validation relies on static analysis, peer review, and unit testing. In contrast, LLM-generated code is probabilistic: each output depends on sampling temperature, model state, and subtle prompt phrasing. Two runs of the same prompt can yield entirely different implementations—both syntactically correct, but semantically divergent.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              This unpredictability poses challenges for aerospace, defense, and regulated domains where functional determinism and traceability are non-negotiable. For example, a flight dynamics routine generated by an LLM might pass initial tests but fail under edge conditions or degrade numerical stability due to silent precision errors.
            </p>

            <div className="bg-blue-50 border-l-4 border-[#007CBF] p-6 my-8">
              <p className="text-gray-700 italic leading-relaxed">
                "The question is not if but how we ensure safety, accountability, and reproducibility in AI-generated code systems."
              </p>
            </div>

            <h2 className="text-gray-900 mb-4 mt-12">HumanEval and the Benchmarking Imperative</h2>
            
            <p className="text-gray-700 leading-relaxed mb-8">
              To bring discipline to this space, the research community developed standardized benchmarks such as HumanEval—a dataset of programming tasks with canonical solutions and unit tests. HumanEval allows engineers to measure LLM code correctness using objective metrics such as pass@k, functional accuracy, and test coverage.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              However, HumanEval tasks are generic—primarily algorithmic. For safety-critical fields like finance and aerospace, we need domain-specific evaluation frameworks that reflect real-world complexity, physical laws, and system constraints.
            </p>

            {/* LLM Validation Lifecycle Infographic */}
            <div className="my-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border-2 border-[#007CBF]">
              <h3 className="text-gray-900 text-center mb-8">LLM Validation Lifecycle</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0 }}
                >
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg border-2 border-[#007CBF]">
                    <Code className="h-8 w-8 text-[#007CBF]" />
                  </div>
                  <h4 className="text-gray-900 mb-2">1. Generation</h4>
                  <p className="text-sm text-gray-600">
                    LLM produces code from prompt with temperature & sampling
                  </p>
                </motion.div>

                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg border-2 border-purple-500">
                    <Shield className="h-8 w-8 text-purple-500" />
                  </div>
                  <h4 className="text-gray-900 mb-2">2. Validation</h4>
                  <p className="text-sm text-gray-600">
                    Unit tests, benchmarks, & domain-specific checks
                  </p>
                </motion.div>

                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg border-2 border-[#007CBF]">
                    <Zap className="h-8 w-8 text-[#007CBF]" />
                  </div>
                  <h4 className="text-gray-900 mb-2">3. Refinement</h4>
                  <p className="text-sm text-gray-600">
                    Self-critique, compiler feedback, & iterative improvement
                  </p>
                </motion.div>

                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg border-2 border-emerald-500">
                    <CheckCircle className="h-8 w-8 text-emerald-500" />
                  </div>
                  <h4 className="text-gray-900 mb-2">4. Deployment</h4>
                  <p className="text-sm text-gray-600">
                    Auditable, traceable, & production-ready code
                  </p>
                </motion.div>
              </div>
            </div>

            <h2 className="text-gray-900 mb-4 mt-12">Toward Domain-Aware Evaluation: The AeroEval Example</h2>
            
            <p className="text-gray-700 leading-relaxed mb-8">
              I am teaching a course for AIAA, geared towards engineers developing and validating GenAI generated code. To extend benchmarking to applied domains, my team at QuantUniversity developed <strong>AeroEval</strong>, a dataset of aerospace engineering functions ranging from Standard Atmosphere modeling to Orbital Mechanics calculations. Each task includes canonical physics-based solutions and tests that validate numerical precision and physical plausibility.
            </p>

            {/* AeroEval Framework Infographic */}
            <div className="my-12 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 rounded-xl p-8 border-2 border-indigo-500">
              <h3 className="text-gray-900 text-center mb-2">AeroEval Framework</h3>
              <p className="text-center text-gray-600 text-sm mb-8">Domain-Specific Code Validation for Aerospace Engineering</p>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-indigo-500">
                  <div className="flex items-start gap-4">
                    <div className="bg-indigo-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-indigo-600 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-gray-900 mb-2">Physics-Based Test Cases</h4>
                      <p className="text-sm text-gray-600">Standard Atmosphere, Orbital Mechanics, Flight Dynamics with canonical solutions</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-purple-500">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-gray-900 mb-2">Numerical Precision Checks</h4>
                      <p className="text-sm text-gray-600">Dimensional consistency, stability analysis, edge case validation</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-500">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-gray-900 mb-2">Advanced LLM Methods</h4>
                      <p className="text-sm text-gray-600">AlphaCodium (2-phase), Reflexion (self-critique), Compiler-in-the-Loop</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-emerald-500">
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-600 font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="text-gray-900 mb-2">Auditability & Traceability</h4>
                      <p className="text-sm text-gray-600">Every decision point documented for mission-critical workflows</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-8">
              By applying modern LLM methods—like AlphaCodium (two-phase reasoning), Reflexion (self-critique), or Compiler-in-the-Loop refinement—we can systematically evaluate whether generative models produce dimensionally consistent, stable, and explainable code.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              This structured approach is not about replacing human engineers; it's about making human–AI collaboration auditable. It ensures that when AI-generated code enters mission-critical workflows—flight control, simulation, or systems integration—we can trace every decision and failure point.
            </p>

            {/* Animated Mid-Article CTA with Video Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="my-12 border-2 border-[#007CBF] bg-gradient-to-br from-[#007CBF] to-[#005A8C] text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
                
                <CardContent className="p-8 relative z-10">
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div>
                      <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                        <TrendingUp className="h-4 w-4" />
                        <span className="text-sm">Most Popular Course</span>
                      </div>
                      <h3 className="text-white mb-3">Master AI Code Generation & Validation</h3>
                      <p className="text-white/90 mb-4">
                        Learn structured approaches to code generation, evaluation, and AI assurance from HumanEval to AeroEval in this comprehensive AIAA course.
                      </p>
                      <ul className="space-y-2 mb-6 text-white/90 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-300 flex-shrink-0" />
                          <span>Benchmark-driven development</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-300 flex-shrink-0" />
                          <span>Domain-specific validation frameworks</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-300 flex-shrink-0" />
                          <span>Production-ready AI code practices</span>
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-3">
                        <Button 
                          className="bg-white text-[#007CBF] hover:bg-gray-100"
                          onClick={() => onNavigate('course-detail')}
                        >
                          View Course Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button 
                          variant="outline"
                          className="border-2 border-white text-white hover:bg-white/10"
                          onClick={() => setVideoModalOpen(true)}
                        >
                          <Play className="mr-2 h-4 w-4" />
                          Watch Preview
                        </Button>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                        <div className="aspect-video bg-white/5 rounded-lg flex items-center justify-center mb-4 cursor-pointer group" onClick={() => setVideoModalOpen(true)}>
                          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:bg-white transition-colors">
                            <Play className="h-8 w-8 text-[#007CBF] ml-1" />
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-sm text-white/80">
                          <span>12 Weeks • Self-Paced</span>
                          <span>Certificate Included</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <h2 className="text-gray-900 mb-4 mt-12">Designing for Explainability and Efficiency</h2>
            
            <p className="text-gray-700 leading-relaxed mb-8">
              Validation must go beyond correctness. LLM-based coding introduces computational inefficiency through token overuse and iterative retries. Methods like Uncertainty-Guided Chain-of-Thought (CoT) and Self-Consistency sampling can significantly reduce token waste by applying reasoning only when uncertainty is high or by voting across multiple solutions.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              This highlights a broader lesson: responsible AI development is not just about getting the right answer—it's about getting it right efficiently and transparently.
            </p>

            <h2 className="text-gray-900 mb-4 mt-12">The Road Ahead</h2>
            
            <p className="text-gray-700 leading-relaxed mb-8">
              Generative AI is entering the aerospace engineering stack, from autonomous vehicle control to mission simulation. The question is not if but how we ensure safety, accountability, and reproducibility in these systems.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Frameworks like HumanEval and AeroEval point the way toward an AI verification culture—one where engineers treat LLMs not as oracles, but as collaborators whose outputs must be tested, scored, and trusted through evidence.
            </p>

            {/* Share Section with Copy Link */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-gray-900 mb-2">Share this article</h4>
                  <p className="text-sm text-gray-600">Help others discover this content</p>
                </div>
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="border-2 border-[#0077B5] text-[#0077B5] hover:bg-[#0077B5] hover:text-white"
                    onClick={shareToLinkedIn}
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="border-2 border-[#1DA1F2] text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white"
                    onClick={shareToTwitter}
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="border-2 border-gray-300 hover:border-[#007CBF] hover:text-[#007CBF]"
                    onClick={copyLinkToClipboard}
                  >
                    <Link2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* LinkedIn Preview Image Meta Tags Info */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-xs text-gray-600">
                  <strong>LinkedIn Preview:</strong> When sharing on LinkedIn, this article will display with the hero image and excerpt for optimal engagement.
                </p>
              </div>
            </div>
          </article>

          {/* Keep Learning Section - Related Articles & Courses */}
          <section className="mt-16 pt-16 border-t-2 border-gray-200">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#007CBF] text-white">Keep Learning</Badge>
              <h2 className="text-gray-900 mb-4">Continue Your Journey</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore related articles and courses to deepen your understanding of AI in code development, risk management, and financial engineering.
              </p>
            </div>

            {/* Related Content Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Article 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0 }}
              >
                <Card className="border-2 hover:border-[#007CBF] transition-all cursor-pointer h-full hover-lift group">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MjA1ODI0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="AI risk management dashboard showing data analytics and model monitoring for financial institutions"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-[#007CBF] text-white border-0">Article</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <Badge className="mb-3 bg-[#007CBF]/10 text-[#007CBF] border-0">
                      AI & Risk
                    </Badge>
                    <h4 className="text-gray-900 mb-2">The Future of AI in Risk Management: Trends for 2025</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Exploring how generative AI and agentic systems are reshaping financial risk frameworks and model governance...
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        Nov 1, 2025
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        8 min
                      </span>
                    </div>
                    <Button 
                      variant="link" 
                      className="text-[#007CBF] p-0 h-auto"
                      onClick={() => onNavigate('thought-leadership')}
                    >
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Course */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Card className="border-2 hover:border-[#007CBF] transition-all cursor-pointer h-full hover-lift group bg-gradient-to-br from-blue-50 to-indigo-50">
                  <div className="relative h-48 bg-gradient-to-br from-[#007CBF] to-[#005A8C] flex items-center justify-center">
                    <BookOpen className="h-16 w-16 text-white opacity-20" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-[#007CBF] text-white border-0">Course</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <Badge className="mb-3 bg-blue-100 text-blue-700 border-0">
                      Machine Learning
                    </Badge>
                    <h4 className="text-gray-900 mb-2">Machine Learning for Trading & Finance</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Master ML techniques for algorithmic trading, portfolio optimization, and risk modeling with hands-on projects...
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span>12 Weeks</span>
                      <span>•</span>
                      <span>Certificate</span>
                    </div>
                    <Button 
                      className="w-full bg-[#007CBF] hover:bg-[#006A9C] text-white"
                      onClick={() => onNavigate('course-detail')}
                    >
                      Explore Course
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Article 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Card className="border-2 hover:border-[#007CBF] transition-all cursor-pointer h-full hover-lift group">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1758691736722-cda1858056e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBsZWFybmluZyUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NjIxMTA4MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Business team learning and training in classroom setting - building AI-ready teams for financial institutions"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-green-500 text-white border-0">Article</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <Badge className="mb-3 bg-orange-100 text-orange-700 border-0">
                      Workforce Development
                    </Badge>
                    <h4 className="text-gray-900 mb-2">Building AI-Ready Teams: A Framework for Financial Institutions</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      How leading banks are upskilling their workforce for the AI era with systematic training programs...
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        Oct 28, 2025
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        6 min
                      </span>
                    </div>
                    <Button 
                      variant="link" 
                      className="text-[#007CBF] p-0 h-auto"
                      onClick={() => onNavigate('thought-leadership')}
                    >
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Browse All CTA */}
            <div className="text-center">
              <Button 
                variant="outline"
                className="border-2 border-[#007CBF] text-[#007CBF] hover:bg-[#007CBF] hover:text-white"
                onClick={() => onNavigate('thought-leadership')}
              >
                Browse All Content
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </section>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto px-8">
          <Card className="border-2 border-[#007CBF]">
            <CardContent className="p-8 text-center">
              <h3 className="text-gray-900 mb-4">Stay Updated</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Get the latest insights on AI in finance, risk management, and quantitative analysis delivered to your inbox weekly.
              </p>
              <div className="flex gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#007CBF] focus:outline-none"
                />
                <Button className="bg-[#007CBF] hover:bg-[#006A9C] text-white px-6">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                Join 5,000+ professionals. No spam, unsubscribe anytime.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Video Modal */}
      <Dialog open={videoModalOpen} onOpenChange={setVideoModalOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Course Preview: AI Code Generation & Validation</DialogTitle>
            <DialogDescription>Watch an introduction to HumanEval & AeroEval Frameworks</DialogDescription>
          </DialogHeader>
          <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
            <div className="text-center text-white">
              <Play className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p className="text-sm opacity-75">Video player would be embedded here</p>
              <p className="text-xs opacity-50 mt-2">Sample: Introduction to HumanEval & AeroEval Frameworks</p>
            </div>
          </div>
          <div className="flex justify-end gap-3 mt-4">
            <Button variant="outline" onClick={() => setVideoModalOpen(false)}>
              Close
            </Button>
            <Button className="bg-[#007CBF] hover:bg-[#006A9C] text-white" onClick={() => onNavigate('course-detail')}>
              View Full Course
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
