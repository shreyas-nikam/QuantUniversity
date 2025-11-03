import { Quote, Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { motion } from 'motion/react';
import { Testimonial } from '../data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
  delay?: number;
}

export function TestimonialCard({ testimonial, delay = 0 }: TestimonialCardProps) {
  // Handle variations in field names
  const quote = testimonial.quote || testimonial.text || '';
  const authorName = testimonial.author || testimonial.name || '';
  const authorRole = testimonial.role || testimonial.title || '';
  const authorOrg = testimonial.company || testimonial.org || '';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <Card className="bg-white border-2 hover:border-[#007CBF] transition-all hover:shadow-lg h-full">
        <CardContent className="p-8">
          <Quote className="h-10 w-10 text-[#007CBF]/20 mb-4" />
          
          {testimonial.rating && (
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          )}

          <p className="text-gray-700 mb-6 italic leading-relaxed">
            "{quote}"
          </p>

          <div className="pt-4 border-t border-gray-100">
            <p className="text-gray-900">{authorName}</p>
            {authorRole && (
              <p className="text-sm text-gray-600">
                {authorRole}
                {authorOrg && `, ${authorOrg}`}
              </p>
            )}
            {testimonial.vertical && (
              <p className="text-xs text-[#007CBF] mt-2">{testimonial.vertical}</p>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
