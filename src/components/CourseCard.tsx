import { Clock, Users, Star } from 'lucide-react';
import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  duration: string;
  students: number;
  rating: number;
  price: string;
  level: string;
  category: string;
  featured?: boolean;
}

export function CourseCard({
  title,
  description,
  image,
  duration,
  students,
  rating,
  price,
  level,
  category,
  featured = false,
}: CourseCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow border border-gray-200 group">
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <Badge className="absolute top-4 right-4 bg-[#007CBF] text-white border-0">
          {category}
        </Badge>
        {featured && (
          <Badge className="absolute top-4 left-4 bg-white text-[#007CBF] border-0">
            Featured
          </Badge>
        )}
      </div>
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="outline" className="border-[#007CBF] text-[#007CBF]">
            {level}
          </Badge>
          <div className="flex items-center gap-1 text-sm">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-gray-700">{rating}</span>
          </div>
        </div>
        <h3 className="text-gray-900 mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{students.toLocaleString()}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex items-center justify-between border-t border-gray-100">
        <span className="text-2xl font-bold text-[#007CBF]">{price}</span>
        <Button className="bg-[#007CBF] hover:bg-[#006A9C] text-white">
          Enroll Now
        </Button>
      </CardFooter>
    </Card>
  );
}
