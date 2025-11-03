// Central data source for all thought leadership articles/blog posts
// To add new articles, simply add them to this array

export interface Article {
  id: string | number;
  title: string;
  excerpt: string;
  image: string;
  authorImage: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  featured?: boolean;
  views?: number;
  tags?: string[];
}

export const articles: Article[] = [
  {
    id: 'vibe-coding',
    title: 'Beyond Vibe-Coding: Managing the Risks of Generative AI in Code Development',
    excerpt: 'How do we know if AI-generated code is correct, efficient, and safe to deploy? Exploring validation frameworks from HumanEval to AeroEval.',
    image: 'https://images.unsplash.com/photo-1544847558-3ccacb31ee7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwcHJvZ3JhbW1pbmclMjBkZXZlbG9wbWVudCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYyMTEzNTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
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
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MjA1ODI0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
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
    image: 'https://images.unsplash.com/photo-1758691736722-cda1858056e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBsZWFybmluZyUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NjIxMTA4MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
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
    image: 'https://images.unsplash.com/photo-1709120395858-92f1c7c577f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZmluYW5jZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYyMTEwODM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
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
    image: 'https://images.unsplash.com/photo-1599580546605-a86af98dbdb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MjA3OTQ2OXww&ixlib=rb-4.1.0&q=80&w=1080',
    authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    author: 'Sri Krishnamurthy, CFA',
    date: 'Oct 22, 2025',
    readTime: '7 min read',
    category: 'Model Risk',
    featured: false,
    views: 2103,
    tags: ['Model Risk', 'GenAI', 'Governance']
  },
  {
    id: 5,
    title: 'Implementing RLHF at Scale: Lessons from Financial Services',
    excerpt: 'Best practices for reinforcement learning from human feedback in production GenAI systems.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MjA1ODI0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    author: 'Sri Krishnamurthy, CFA',
    date: 'Oct 18, 2025',
    readTime: '9 min read',
    category: 'MLOps',
    featured: false,
    views: 1876,
    tags: ['RLHF', 'GenAI', 'Production']
  },
  {
    id: 6,
    title: 'Credit Risk Modeling with Machine Learning',
    excerpt: 'Advanced techniques for credit scoring, PD modeling, and loss forecasting.',
    image: 'https://images.unsplash.com/photo-1599580546605-a86af98dbdb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MjA3OTQ2OXww&ixlib=rb-4.1.0&q=80&w=1080',
    authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    author: 'Sri Krishnamurthy, CFA',
    date: 'Oct 15, 2025',
    readTime: '8 min read',
    category: 'Credit Risk',
    featured: false,
    views: 2234,
    tags: ['Credit Risk', 'ML', 'Banking']
  }
];

// Helper functions
export const getFeaturedArticles = () => articles.filter(a => a.featured);
export const getRecentArticles = (count: number = 4) => articles.slice(0, count);
export const getArticlesByCategory = (category: string) => articles.filter(a => a.category === category);
export const getArticleById = (id: string | number) => articles.find(a => a.id === id);
