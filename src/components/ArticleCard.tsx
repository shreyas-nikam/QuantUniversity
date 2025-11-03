import { Calendar, Clock, ArrowRight, Eye } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Article } from '../data/articles';

interface ArticleCardProps {
  article: Article;
  onNavigate?: (page: string) => void;
  isHovered?: boolean;
  onHover?: (id: string | number | null) => void;
}

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

export function ArticleCard({ article, onNavigate, isHovered, onHover }: ArticleCardProps) {
  const categoryStyle = getCategoryStyle(article.category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => onHover?.(article.id)}
      onMouseLeave={() => onHover?.(null)}
    >
      <Card 
        className="overflow-hidden hover:shadow-2xl transition-all cursor-pointer border-2 hover:border-[#007CBF] group h-full"
        onClick={() => onNavigate?.('blog-article')}
      >
        <div className="relative overflow-hidden aspect-[16/9]">
          <ImageWithFallback
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {article.featured && (
            <Badge className="absolute top-4 left-4 bg-[#007CBF] text-white border-0">
              Featured
            </Badge>
          )}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-gradient-to-t from-[#007CBF]/90 via-[#007CBF]/50 to-transparent flex items-end p-6"
          >
            <Button className="bg-white text-[#007CBF] hover:bg-gray-100 w-full">
              Read Article <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>

        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <Badge className={`${categoryStyle.bg} ${categoryStyle.text} border-0`}>
              {article.category}
            </Badge>
            {article.views && (
              <span className="flex items-center gap-1 text-sm text-gray-500">
                <Eye className="h-4 w-4" />
                {article.views.toLocaleString()}
              </span>
            )}
          </div>

          <h3 className="text-gray-900 mb-3 line-clamp-2 group-hover:text-[#007CBF] transition-colors">
            {article.title}
          </h3>

          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {article.excerpt}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <ImageWithFallback
                src={article.authorImage}
                alt={article.author}
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="text-sm text-gray-900">{article.author}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {article.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {article.readTime}
              </span>
            </div>
          </div>

          {article.tags && article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
              {article.tags.map((tag, idx) => (
                <span key={idx} className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
