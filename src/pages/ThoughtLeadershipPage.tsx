import { useState } from 'react';
import { Calendar, Clock, ArrowRight, Download, BookOpen, TrendingUp, Star, User, Gift, Sparkles, Eye, Home, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
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
import { articles, getFeaturedArticles } from '../data/articles';
import { ArticleCard } from '../components/ArticleCard';
import { SEO } from '../components/SEO';
import { generateBreadcrumbSchema } from '../data/seo';

interface ThoughtLeadershipPageProps {
  onNavigate?: (page: string) => void;
}

export function ThoughtLeadershipPage({ onNavigate }: ThoughtLeadershipPageProps = {}) {
  const [hoveredPost, setHoveredPost] = useState<number | string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Category color mapping
  const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
    'Generative AI': { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-300' },
    'GenAI': { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-300' },
    'AI & Risk': { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-300' },
    'Model Risk': { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-300' },
    'Credit Risk': { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-300' },
    'Technical Insights': { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-300' },
    'Workforce Development': { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-300' },
    'MLOps': { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-300' }
  };

  const getCategoryStyle = (category: string) => {
    return categoryColors[category] || { bg: 'bg-gray-100', text: 'text-gray-700', border: 'border-gray-300' };
  };

  // Use centralized data - Filter by category if selected
  const blogPosts = selectedCategory === 'all' 
    ? articles 
    : articles.filter(a => a.category === selectedCategory);

  /* OLD HARD-CODED DATA - NOW IMPORTED FROM /data/articles.ts
  const blogPosts = [
    {
      id: 'vibe-coding',
      title: 'Beyond Vibe-Coding: Managing the Risks of Generative AI in Code Development',
      excerpt: 'How do we know if AI-generated code is correct, efficient, and safe to deploy? Exploring validation frameworks from HumanEval to AeroEval.',
      image: 'https://images.unsplash.com/photo-1544847558-3ccacb31ee7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwcHJvZ3JhbW1pbmclMjBkZXZlbG9wbWVudCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYyMTEzNTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      author: 'Sri Krishnamurthy, CFA',
      date: 'Oct 31, 2025',
      readTime: '8 min read',
      category: 'Technical Insights',
      featured: true,
      views: 2847,
      tags: ['GenAI', 'Risk Management', 'Code Quality']
    },
    {
      id: 1,
      title: 'The Future of AI in Risk Management: Trends for 2025',
      excerpt: 'Exploring how generative AI and agentic systems are reshaping financial risk frameworks and model governance practices.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MjA1ODI0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      author: 'Sri Krishnamurthy, CFA',
      date: 'Nov 1, 2025',
      readTime: '8 min read',
      category: 'AI & Risk',
      featured: false,
      views: 1923,
      tags: ['Risk Management', 'AI Governance', 'GenAI']
    },
    {
      id: 2,
      title: 'Building AI-Ready Teams: A Framework for Financial Institutions',
      excerpt: 'How leading banks are upskilling their workforce for the AI era with systematic training programs and measurable outcomes.',
      image: 'https://images.unsplash.com/photo-1758691736722-cda1858056e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBsZWFybmluZyUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NjIxMTA4MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      author: 'Sri Krishnamurthy, CFA',
      date: 'Oct 28, 2025',
      readTime: '6 min read',
      category: 'Workforce Development',
      featured: false,
      views: 1654,
      tags: ['Team Building', 'Upskilling', 'Leadership']
    },
    {
      id: 3,
      title: 'Agentic AI: The Next Evolution in Financial Decision-Making',
      excerpt: 'Understanding autonomous AI agents and their applications in trading, compliance monitoring, and customer service.',
      image: 'https://images.unsplash.com/photo-1709120395858-92f1c7c577f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZmluYW5jZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYyMTEwODM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      author: 'Sri Krishnamurthy, CFA',
      date: 'Oct 25, 2025',
      readTime: '10 min read',
      category: 'Generative AI',
      featured: false,
      views: 3211,
      tags: ['GenAI', 'Autonomous Systems', 'Finance']
    },
    {
      id: 4,
      title: 'Model Risk Management in the Age of GenAI',
      excerpt: 'New frameworks for validating and governing generative AI models under SR 11-7 and emerging regulatory guidance.',
      image: 'https://images.unsplash.com/photo-1599580546605-a86af98dbdb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MjA3OTQ2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      author: 'Sri Krishnamurthy, CFA',
      date: 'Oct 22, 2025',
      readTime: '7 min read',
      category: 'Model Risk',
      featured: false,
      views: 2134,
      tags: ['Model Governance', 'SR 11-7', 'Compliance']
    },
    {
      id: 5,
      title: 'Credit Risk Modeling with Large Language Models',
      excerpt: 'Practical approaches to integrating LLMs into credit assessment workflows while maintaining model interpretability.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MjA1ODI0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      author: 'Sri Krishnamurthy, CFA',
      date: 'Oct 18, 2025',
      readTime: '9 min read',
      category: 'Credit Risk',
      featured: false,
      views: 1789,
      tags: ['LLMs', 'Credit Modeling', 'Interpretability']
    },
    {
      id: 6,
      title: 'MLOps Best Practices for Financial Services',
      excerpt: 'Building robust ML pipelines with proper versioning, monitoring, and governance for production environments.',
      image: 'https://images.unsplash.com/photo-1709120395858-92f1c7c577f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZmluYW5jZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYyMTEwODM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      author: 'Sri Krishnamurthy, CFA',
      date: 'Oct 15, 2025',
      readTime: '11 min read',
      category: 'MLOps',
      featured: false,
      views: 2456,
      tags: ['MLOps', 'DevOps', 'Model Monitoring']
    },
  ]; */

  // Top 5 Articles by views
  const topArticles = [...blogPosts]
    .sort((a, b) => (b.views || 0) - (a.views || 0))
    .slice(0, 5);

  // Sri's Picks (featured articles)
  const srisPicks = getFeaturedArticles().slice(0, 3);

  // Trending Topics
  const trendingTopics = [
    { name: 'Generative AI', count: 234, color: 'blue' },
    { name: 'Risk Management', count: 189, color: 'green' },
    { name: 'Model Governance', count: 156, color: 'green' },
    { name: 'Workforce AI', count: 142, color: 'orange' },
    { name: 'LLMs', count: 128, color: 'purple' },
    { name: 'MLOps', count: 98, color: 'indigo' },
  ];

  // Structured data
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Insights', url: '/insights' }
  ]);

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        pageKey="thought-leadership"
        structuredData={breadcrumbSchema}
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#007CBF] to-[#006A9C]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/10 text-white border-white/20">
              Thought Leadership
            </Badge>
            <h1 className="text-white mb-6">Insights from the Frontlines of AI in Finance</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Weekly insights on AI, risk management, and financial innovation. Join 5,000+ professionals staying ahead of the curve.
            </p>
          </div>
        </div>
      </section>

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
                <BreadcrumbPage className="text-gray-900">Thought Leadership</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-[#F9FAFB]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Blog Feed */}
            <div className="lg:col-span-8 space-y-8">
              {blogPosts.map((post, idx) => {
                const categoryStyle = getCategoryStyle(post.category);
                return (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Card 
                      className="overflow-hidden hover:shadow-xl transition-all hover-lift border-2 hover:border-[#007CBF] bg-white cursor-pointer"
                      onMouseEnter={() => setHoveredPost(post.id)}
                      onMouseLeave={() => setHoveredPost(null)}
                    >
                      <div className="grid md:grid-cols-5 gap-6">
                        <div className="md:col-span-2 relative h-64 md:h-auto group">
                          <ImageWithFallback
                            src={post.image}
                            alt={`Featured image for article: ${post.title} - ${post.category}`}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                          />
                          {post.featured && (
                            <div className="absolute top-4 left-4">
                              <Badge className="bg-[#007CBF] text-white">
                                <Star className="h-3 w-3 mr-1 fill-white" />
                                Featured
                              </Badge>
                            </div>
                          )}
                          {/* Author face visible on hover */}
                          <motion.div
                            className="absolute bottom-4 right-4 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-full px-3 py-2 shadow-lg"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: hoveredPost === post.id ? 1 : 0, y: hoveredPost === post.id ? 0 : 10 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-[#007CBF]">
                              <ImageWithFallback
                                src={post.authorImage}
                                alt={`Profile photo of ${post.author}, author of ${post.title}`}
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            </div>
                            <span className="text-xs text-gray-900 font-medium pr-1">{post.author.split(',')[0]}</span>
                          </motion.div>
                        </div>
                        <div className="md:col-span-3 p-6">
                          <div className="flex flex-wrap items-center gap-2 mb-3">
                            <Badge className={`${categoryStyle.bg} ${categoryStyle.text} border-0`}>
                              {post.category}
                            </Badge>
                            <span className="text-sm text-gray-500 flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {post.date}
                            </span>
                            <span className="text-sm text-gray-500 flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {post.readTime}
                            </span>
                            <span className="text-sm text-gray-500 flex items-center gap-1">
                              <Eye className="h-3 w-3" />
                              {post.views.toLocaleString()}
                            </span>
                          </div>
                          <h3 className="text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                          <p className="text-gray-600 mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                          {/* Tags with colors */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag, tagIdx) => {
                              const tagStyle = getCategoryStyle(tag);
                              return (
                                <span
                                  key={tagIdx}
                                  className={`text-xs px-2 py-1 rounded ${tagStyle.bg} ${tagStyle.text}`}
                                >
                                  {tag}
                                </span>
                              );
                            })}
                          </div>
                          <Button 
                            variant="link" 
                            className="text-[#007CBF] p-0 h-auto"
                            onClick={() => {
                              if (post.id === 'vibe-coding' && onNavigate) {
                                onNavigate('blog-article');
                              }
                            }}
                          >
                            Read Full Article
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}

              <div className="text-center pt-8">
                <Button 
                  variant="outline"
                  className="border-2 border-[#007CBF] text-[#007CBF] hover:bg-[#007CBF] hover:text-white"
                >
                  Load More Articles
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              {/* Lead Magnet - AI Readiness Toolkit */}
              <Card className="border-2 border-[#007CBF] bg-gradient-to-br from-[#007CBF] to-[#006A9C] text-white sticky top-24">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Gift className="h-8 w-8 text-white" />
                    <Sparkles className="h-5 w-5 text-yellow-300" />
                  </div>
                  <h4 className="text-white mb-3">Get the AI Readiness Toolkit Free</h4>
                  <p className="text-white/90 text-sm mb-4">
                    Exclusive framework used by Fortune 500 banks to assess AI maturity. Includes templates, checklists, and implementation guides.
                  </p>
                  <ul className="text-white/90 text-sm space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-300">✓</span>
                      <span>AI Maturity Assessment Matrix</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-300">✓</span>
                      <span>Risk Framework Templates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-300">✓</span>
                      <span>Implementation Roadmap</span>
                    </li>
                  </ul>
                  <div className="space-y-3">
                    <Input 
                      type="email" 
                      placeholder="Your work email"
                      className="border-white/20 bg-white/10 text-white placeholder:text-white/60"
                    />
                    <Button className="w-full bg-white text-[#007CBF] hover:bg-gray-100">
                      Download Free Toolkit
                      <Download className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-white/70 mt-3 text-center">
                    Instant access. No credit card required.
                  </p>
                </CardContent>
              </Card>

              {/* Top 5 Articles */}
              <Card className="bg-white border-2">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="h-5 w-5 text-[#007CBF]" />
                    <h4 className="text-gray-900">Top 5 Articles</h4>
                  </div>
                  <div className="space-y-4">
                    {topArticles.map((article, idx) => {
                      const categoryStyle = getCategoryStyle(article.category);
                      return (
                        <div 
                          key={article.id} 
                          className="flex gap-3 pb-4 border-b last:border-0 cursor-pointer hover:bg-gray-50 -mx-2 px-2 py-2 rounded transition-colors"
                          onClick={() => {
                            if (article.id === 'vibe-coding' && onNavigate) {
                              onNavigate('blog-article');
                            }
                          }}
                        >
                          <div className="text-2xl font-bold text-[#007CBF]/30 leading-none pt-1">
                            {idx + 1}
                          </div>
                          <div className="flex-1">
                            <Badge className={`${categoryStyle.bg} ${categoryStyle.text} border-0 text-xs mb-2`}>
                              {article.category}
                            </Badge>
                            <p className="text-sm text-gray-900 line-clamp-2 mb-1">
                              {article.title}
                            </p>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              <Eye className="h-3 w-3" />
                              <span>{article.views.toLocaleString()} views</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Sri's Picks */}
              <Card className="bg-white border-2 border-amber-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="h-5 w-5 text-amber-500 fill-amber-500" />
                    <h4 className="text-gray-900">Sri's Picks</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Personally selected articles by Sri Krishnamurthy
                  </p>
                  <div className="space-y-4">
                    {srisPicks.map((article) => {
                      const categoryStyle = getCategoryStyle(article.category);
                      return (
                        <div 
                          key={article.id}
                          className="cursor-pointer hover:bg-amber-50 -mx-2 px-2 py-2 rounded transition-colors"
                          onClick={() => {
                            if (article.id === 'vibe-coding' && onNavigate) {
                              onNavigate('blog-article');
                            }
                          }}
                        >
                          <Badge className={`${categoryStyle.bg} ${categoryStyle.text} border-0 text-xs mb-2`}>
                            {article.category}
                          </Badge>
                          <p className="text-sm text-gray-900 line-clamp-2 mb-1">
                            {article.title}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <Clock className="h-3 w-3" />
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Trending Topics */}
              <Card className="bg-white border-2">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="h-5 w-5 text-[#007CBF]" />
                    <h4 className="text-gray-900">Trending Topics</h4>
                  </div>
                  <div className="space-y-3">
                    {trendingTopics.map((topic, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center justify-between cursor-pointer hover:bg-gray-50 -mx-2 px-2 py-2 rounded transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full bg-${topic.color}-500`}></div>
                          <span className="text-sm text-gray-900">{topic.name}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {topic.count}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="bg-white border-2">
                <CardContent className="p-6">
                  <h4 className="text-gray-900 mb-3">Subscribe to Newsletter</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Join 5,000+ professionals receiving weekly AI insights
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
                  <p className="text-xs text-gray-500 mt-3 text-center">
                    No spam. Unsubscribe anytime.
                  </p>
                </CardContent>
              </Card>

              {/* Featured Whitepaper */}
              <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-0 text-white">
                <CardContent className="p-6">
                  <Download className="h-10 w-10 mb-4 text-white" />
                  <h4 className="text-white mb-2">Featured Whitepaper</h4>
                  <p className="text-white/90 text-sm mb-4">
                    AI Risk Management in Finance 2025: A Comprehensive Guide
                  </p>
                  <Button 
                    variant="secondary" 
                    className="w-full bg-white text-gray-900 hover:bg-gray-100"
                  >
                    Download Free
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
