import { useState, useEffect, useRef } from 'react';
import { Search, Award, Users, Clock, Star, Filter, ArrowRight, Lightbulb, X, GraduationCap, Info, Sparkles } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Checkbox } from '../components/ui/checkbox';
import { Popover, PopoverContent, PopoverTrigger } from '../components/ui/popover';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { getAllCourses, getCertificatesForCourse, Course, Certificate } from '../data/coursesAndCertificates';
import { motion, AnimatePresence } from 'motion/react';

interface CoursesPageProps {
  onNavigate?: (page: string) => void;
}

export function CoursesPage({ onNavigate }: CoursesPageProps = {}) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['all']);
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('relevance');
  const [showCertBanner, setShowCertBanner] = useState(true);
  const [showOnlyCertificateCourses, setShowOnlyCertificateCourses] = useState(false);
  const [hoveredCourseId, setHoveredCourseId] = useState<string | null>(null);
  const [highlightedCourseId, setHighlightedCourseId] = useState<string | null>(null);
  const courseRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const allCourses = getAllCourses();

  // Handle URL hash to scroll to specific course
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      setHighlightedCourseId(hash);
      // Wait for render, then scroll
      setTimeout(() => {
        const element = courseRefs.current[hash];
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          // Clear highlight after 3 seconds
          setTimeout(() => setHighlightedCourseId(null), 3000);
        }
      }, 300);
    }
  }, []);

  // Generate images for courses based on category
  const getCourseImage = (category: string) => {
    const images: Record<string, string> = {
      'Machine Learning': 'https://images.unsplash.com/photo-1709120395858-92f1c7c577f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZmluYW5jZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYyMTEwODM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'Risk Management': 'https://images.unsplash.com/photo-1599580546605-a86af98dbdb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MjA3OTQ2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'Quantitative Finance': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MjA1ODI0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'Derivatives': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MjA1ODI0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'Generative AI': 'https://images.unsplash.com/photo-1709120395858-92f1c7c577f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZmluYW5jZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYyMTEwODM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    };
    return images[category] || images['Machine Learning'];
  };

  const handleCategoryToggle = (categoryId: string) => {
    if (categoryId === 'all') {
      setSelectedCategories(['all']);
    } else {
      const newCategories = selectedCategories.filter(c => c !== 'all');
      if (newCategories.includes(categoryId)) {
        const filtered = newCategories.filter(c => c !== categoryId);
        setSelectedCategories(filtered.length === 0 ? ['all'] : filtered);
      } else {
        setSelectedCategories([...newCategories, categoryId]);
      }
    }
  };

  const handleDifficultyToggle = (difficulty: string) => {
    if (selectedDifficulties.includes(difficulty)) {
      setSelectedDifficulties(selectedDifficulties.filter(d => d !== difficulty));
    } else {
      setSelectedDifficulties([...selectedDifficulties, difficulty]);
    }
  };

  const filteredCourses = allCourses.filter(course => {
    const matchesCategory = selectedCategories.includes('all') || selectedCategories.includes(course.category);
    const matchesDifficulty = selectedDifficulties.length === 0 || selectedDifficulties.includes(course.level);
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter for certificate courses
    const isInCertificate = getCertificatesForCourse(course.id).length > 0;
    const matchesCertificateFilter = !showOnlyCertificateCourses || isInCertificate;
    
    return matchesCategory && matchesDifficulty && matchesSearch && matchesCertificateFilter;
  });

  // Sort courses
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case 'relevance':
        return b.students - a.students; // Use students as proxy for popularity/relevance
      case 'rating':
        return b.rating - a.rating;
      case 'popularity':
        return b.students - a.students;
      case 'duration-short':
        return parseInt(a.duration) - parseInt(b.duration);
      case 'duration-long':
        return parseInt(b.duration) - parseInt(a.duration);
      case 'newest':
        return b.students - a.students; // Newer courses typically have fewer students
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      default:
        return 0;
    }
  });

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'Machine Learning', name: 'Machine Learning' },
    { id: 'Risk Management', name: 'Risk Management' },
    { id: 'Quantitative Finance', name: 'Quantitative Finance' },
    { id: 'Generative AI', name: 'Generative AI' },
  ];

  const difficulties = [
    { id: 'Beginner', name: 'Beginner' },
    { id: 'Intermediate', name: 'Intermediate' },
    { id: 'Advanced', name: 'Advanced' },
  ];

  const activeFiltersCount = (selectedCategories.filter(c => c !== 'all').length) + selectedDifficulties.length + (showOnlyCertificateCourses ? 1 : 0);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#007CBF] to-[#006A9C] overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/10 text-white border-white/20">
              QuAcademy
            </Badge>
            <h1 className="text-white mb-6">Learn AI the QuantUniversity Way</h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {allCourses.length}+ expert-led courses designed to transform your career in artificial intelligence and quantitative finance
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search courses by title or topic..."
                  className="pl-12 pr-4 py-6 bg-white border-0 shadow-xl text-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Programs CTA Banner */}
      <section className="bg-gradient-to-r from-amber-50 to-yellow-50 border-b-2 border-amber-200">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20 py-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-amber-500 to-yellow-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-gray-900 mb-1">Looking for structured learning?</h3>
                <p className="text-gray-600">Explore our Certificate Programs and save 15-25% on bundled courses</p>
              </div>
            </div>
            <Button
              className="bg-[#007CBF] hover:bg-[#006A9C] text-white flex-shrink-0"
              onClick={() => onNavigate?.('certificate-programs')}
            >
              View Certificate Programs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Filter Bar - Sticky */}
      <section className="sticky top-20 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20 py-4">
          <div className="space-y-4">
            {/* Category Filters */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Category:</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const isSelected = selectedCategories.includes(category.id);
                  return (
                    <Button
                      key={category.id}
                      variant={isSelected ? 'default' : 'outline'}
                      size="sm"
                      className={isSelected 
                        ? 'bg-[#007CBF] hover:bg-[#006A9C] text-white' 
                        : 'border-gray-300 text-gray-700 hover:border-[#007CBF] hover:text-[#007CBF]'
                      }
                      onClick={() => handleCategoryToggle(category.id)}
                    >
                      {category.name}
                    </Button>
                  );
                })}
              </div>

              {activeFiltersCount > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSelectedCategories(['all']);
                    setSelectedDifficulties([]);
                    setShowOnlyCertificateCourses(false);
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-4 w-4 mr-1" />
                  Clear all ({activeFiltersCount})
                </Button>
              )}

              <div className="ml-auto flex gap-2">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevance</SelectItem>
                    <SelectItem value="popularity">Most Popular</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="duration-short">Duration: Shortest</SelectItem>
                    <SelectItem value="duration-long">Duration: Longest</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Difficulty + Certificate Filters */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Difficulty:</span>
              </div>
              
              <div className="flex flex-wrap gap-4">
                {difficulties.map((difficulty) => (
                  <label
                    key={difficulty.id}
                    className="flex items-center gap-2 cursor-pointer group"
                  >
                    <Checkbox
                      checked={selectedDifficulties.includes(difficulty.id)}
                      onCheckedChange={() => handleDifficultyToggle(difficulty.id)}
                      className="data-[state=checked]:bg-[#007CBF] data-[state=checked]:border-[#007CBF]"
                    />
                    <span className="text-sm text-gray-700 group-hover:text-[#007CBF]">
                      {difficulty.name}
                    </span>
                  </label>
                ))}
              </div>

              {/* Certificate Filter */}
              <div className="ml-8 pl-8 border-l border-gray-200">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <Checkbox
                    checked={showOnlyCertificateCourses}
                    onCheckedChange={setShowOnlyCertificateCourses}
                    className="data-[state=checked]:bg-amber-500 data-[state=checked]:border-amber-500"
                  />
                  <Award className="h-4 w-4 text-amber-600" />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-amber-600">
                    Part of Certificate Program
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 bg-[#F9FAFB]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="mb-8">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-gray-900">{sortedCourses.length}</span> courses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedCourses.map((course) => {
              const courseCertificates = getCertificatesForCourse(course.id);
              const isInCertificate = courseCertificates.length > 0;
              const isHighlighted = highlightedCourseId === course.id;
              
              return (
                <motion.div
                  key={course.id}
                  ref={(el) => { courseRefs.current[course.id] = el; }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className={`overflow-hidden hover:shadow-2xl transition-all hover-lift border-2 hover:border-[#007CBF] bg-white h-full flex flex-col ${isHighlighted ? 'border-[#007CBF] ring-4 ring-[#007CBF]/20 shadow-2xl' : ''}`}>
                    <div 
                      className="relative h-48 cursor-pointer group"
                      onClick={() => {
                        if (course.id === 'ml-trading-finance' && onNavigate) {
                          onNavigate('course-detail');
                        }
                      }}
                    >
                      <ImageWithFallback
                        src={getCourseImage(course.category)}
                        alt={course.title}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-[#007CBF] text-white border-0">
                          {course.level}
                        </Badge>
                      </div>
                      {isInCertificate && (
                        <Popover>
                          <PopoverTrigger asChild>
                            <div className="absolute top-4 left-4 cursor-help">
                              <Badge className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white border-0 hover:from-amber-600 hover:to-yellow-700 transition-all">
                                <Award className="h-3 w-3 mr-1" />
                                In Certificate Path
                              </Badge>
                            </div>
                          </PopoverTrigger>
                          <PopoverContent className="w-80" side="bottom" align="start">
                            <div className="space-y-3">
                              <h4 className="font-semibold text-gray-900">Certificate Programs</h4>
                              <p className="text-sm text-gray-600">
                                This course is part of {courseCertificates.length} certificate program{courseCertificates.length > 1 ? 's' : ''}:
                              </p>
                              {courseCertificates.map((cert) => (
                                <div key={cert.id} className="p-3 bg-blue-50 rounded-lg">
                                  <div className="flex items-start justify-between gap-2 mb-2">
                                    <h5 className="font-semibold text-gray-900 text-sm">{cert.title}</h5>
                                    <Badge className="bg-[#007CBF] text-white border-0 flex-shrink-0">
                                      Save {cert.savings}
                                    </Badge>
                                  </div>
                                  <p className="text-xs text-gray-600 mb-2">{cert.shortDescription}</p>
                                  <Button
                                    size="sm"
                                    className="w-full bg-[#007CBF] hover:bg-[#006A9C] text-white text-xs"
                                    onClick={() => onNavigate?.(cert.id)}
                                  >
                                    View Full Program →
                                  </Button>
                                </div>
                              ))}
                            </div>
                          </PopoverContent>
                        </Popover>
                      )}
                    </div>

                    <CardContent className="p-6 flex-1 flex flex-col">
                      <Badge className="mb-3 bg-gray-100 text-gray-700 border-0 w-fit">
                        {course.category}
                      </Badge>
                      
                      <h4 
                        className={`text-gray-900 mb-2 line-clamp-2 ${course.id === 'ml-trading-finance' ? 'cursor-pointer hover:text-[#007CBF] transition-colors' : ''}`}
                        onClick={() => {
                          if (course.id === 'ml-trading-finance' && onNavigate) {
                            onNavigate('course-detail');
                          }
                        }}
                      >
                        {course.title}
                      </h4>
                      
                      {/* Duration */}
                      <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration} • {course.modules} modules</span>
                      </div>

                      <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-1">
                        {course.description}
                      </p>

                      {/* Rating and students */}
                      <div className="flex items-center justify-between text-sm mb-4 pb-4 border-b">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium text-gray-900">{course.rating}</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-500">
                          <Users className="h-4 w-4" />
                          <span>{course.students.toLocaleString()}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-[#007CBF]">${course.price}</span>
                        <Button 
                          className="bg-[#007CBF] hover:bg-[#006A9C] text-white"
                          onClick={() => {
                            if (course.id === 'ml-trading-finance' && onNavigate) {
                              onNavigate('course-detail');
                            }
                          }}
                        >
                          {course.id === 'ml-trading-finance' ? 'View Details' : 'Start Learning'}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How You Learn Call-out Section */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <Card className="border-2 border-[#007CBF] bg-gradient-to-br from-blue-50 to-white overflow-hidden">
            <CardContent className="p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-[#007CBF]/10 w-12 h-12 rounded-xl flex items-center justify-center">
                      <Lightbulb className="h-6 w-6 text-[#007CBF]" />
                    </div>
                    <Badge className="bg-[#007CBF] text-white">Our Learning Approach</Badge>
                  </div>
                  <h2 className="text-gray-900 mb-4">Learn AI the QuantUniversity way</h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Our proven Explore–Experience–Excel framework combines expert content, hands-on labs, and real-world case studies—powered by AI and available 24/7.
                  </p>
                  {onNavigate && (
                    <Button 
                      size="lg" 
                      className="bg-[#007CBF] hover:bg-[#006A9C] text-white"
                      onClick={() => onNavigate('how-you-learn')}
                    >
                      See How You Learn
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  )}
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white rounded-xl p-6 text-center shadow-lg border-2 border-gray-100 hover:border-[#007CBF] transition-all">
                    <div className="text-4xl mb-3">📚</div>
                    <h4 className="text-gray-900 mb-2">Explore</h4>
                    <p className="text-sm text-gray-600">Expert-led content</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-lg border-2 border-gray-100 hover:border-[#007CBF] transition-all">
                    <div className="text-4xl mb-3">🧪</div>
                    <h4 className="text-gray-900 mb-2">Experience</h4>
                    <p className="text-sm text-gray-600">Hands-on labs</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-lg border-2 border-gray-100 hover:border-[#007CBF] transition-all">
                    <div className="text-4xl mb-3">🏆</div>
                    <h4 className="text-gray-900 mb-2">Excel</h4>
                    <p className="text-sm text-gray-600">Earn certificates</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-16 bg-[#F9FAFB]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <Card className="border-2 border-[#007CBF] overflow-hidden bg-white">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0 items-center">
                <div className="p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-[#007CBF]/10 w-16 h-16 rounded-xl flex items-center justify-center">
                      <Users className="h-8 w-8 text-[#007CBF]" />
                    </div>
                    <Badge className="bg-[#007CBF] text-white">For Teams</Badge>
                  </div>
                  <h3 className="text-gray-900 mb-4">Transform Your Entire Team</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Unlock enterprise pricing, custom learning paths, and dedicated support. Get your entire organization AI-ready with QuantUniversity.
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-[#007CBF] hover:bg-[#006A9C] text-white px-8"
                    onClick={() => onNavigate && onNavigate('enterprise')}
                  >
                    Talk to Us About Enterprise Training
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                <div className="relative h-full min-h-[400px] lg:min-h-[500px] bg-gradient-to-br from-[#007CBF]/5 to-[#006A9C]/10">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1758691736082-b69a65770026?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjB0cmFpbmluZ3xlbnwxfHx8fDE3NjIxODkxNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Enterprise team training"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
