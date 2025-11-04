import { useState } from 'react';
import { Check, Clock, Users, Award, Star, Download, PlayCircle, BookOpen, Share2, ArrowLeft, Play, HelpCircle, Lightbulb, Target, ChevronRight, Sparkles, Home } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { ScrollableCarousel } from './ScrollableCarousel';
import { Course, courses, getCertificatesForCourse } from '../data/coursesAndCertificates';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './ui/breadcrumb';

interface CourseDetailPageComponentProps {
  course: Course;
  onNavigate: (page: string) => void;
}

export function CourseDetailPageComponent({ course, onNavigate }: CourseDetailPageComponentProps) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isCertBoxOpen, setIsCertBoxOpen] = useState(true);

  const courseCertificates = getCertificatesForCourse(course.id);
  const certificate = courseCertificates[0]; // Get the first certificate this course is part of

  // Get related courses
  const relatedCourses = course.relatedCourseIds?.map(id => courses[id]).filter(Boolean) || [];

  return (
    <div className="bg-white min-h-screen">
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
                  onClick={() => onNavigate('courses')}
                  className="cursor-pointer hover:text-[#007CBF]"
                >
                  Courses
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage className="text-gray-900">{course.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16">
        {course.heroImage && (
          <div className="absolute inset-0 opacity-20">
            <ImageWithFallback
              src={course.heroImage}
              alt={course.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
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
              {course.badge && (
                <Badge className="mb-4 bg-[#007CBF] text-white">
                  {course.badge}
                </Badge>
              )}
              <h1 className="text-white mb-4">{course.title}</h1>
              <p className="text-xl text-white/90 mb-6 leading-relaxed">
                {course.tagline || course.description}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-white/90 mb-8">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-xl">{course.rating}</span>
                  {course.reviews && <span className="text-white/70">({course.reviews.toLocaleString()} reviews)</span>}
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
                    className="border-2 border-white text-white hover:bg-white hover:text-gray-900 mb-8"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch Course Preview
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <DialogHeader>
                    <DialogTitle>Course Preview</DialogTitle>
                    <DialogDescription>Watch a sample intro lecture showcasing course content</DialogDescription>
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

              {/* Instructor */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#007CBF] to-[#005A8C] flex items-center justify-center text-white text-xl">
                  {course.instructorImage || course.instructor.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="text-white">Taught by</p>
                  <p className="text-white/90">{course.instructor}</p>
                  {course.instructorTitle && <p className="text-sm text-white/70">{course.instructorTitle}</p>}
                </div>
              </div>
            </div>

            {/* Enrollment Card */}
            <div className="lg:col-span-1">
              <Card className="border-2 border-[#007CBF] shadow-2xl sticky top-24 bg-white">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-4xl text-gray-900 mb-2">${course.price}</div>
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

                  {course.includes && (
                    <div className="space-y-3 text-sm text-gray-700 border-t pt-4">
                      {course.includes.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-[#007CBF]" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

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

      {/* Certificate Callout (if part of a certificate) */}
      {certificate && isCertBoxOpen && (
        <section className="py-4 bg-gradient-to-r from-purple-50 to-blue-50 border-b border-purple-100">
          <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4 flex-1">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#007CBF] to-[#005A8C] flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-gray-900 mb-1">Part of {certificate.title}</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    This course is included in our certificate program. Save {certificate.savings} when you enroll in the full program instead of individual courses.
                  </p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-[#007CBF] text-[#007CBF] hover:bg-[#007CBF]/5"
                    onClick={() => onNavigate('responsible-genai-cert')}
                  >
                    View Certificate Program
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="flex-shrink-0"
                onClick={() => setIsCertBoxOpen(false)}
              >
                <span className="sr-only">Close</span>
                <span className="text-gray-400 hover:text-gray-600">×</span>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Course Features with Emojis */}
      {course.features && (
        <section className="py-12 bg-white border-b">
          <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
              {course.features.map((feature, index) => (
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
      )}

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
                  {course.keyOutcome && (
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
                            {course.keyOutcome}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )}

                  {/* What You'll Learn */}
                  <Card className="bg-white border-2">
                    <CardContent className="p-8">
                      <h2 className="text-gray-900 mb-6">What You'll Learn</h2>
                      <div className="grid md:grid-cols-2 gap-4">
                        {course.learningOutcomes.map((outcome, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-[#007CBF] flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Course Description */}
                  <Card className="bg-white border-2">
                    <CardContent className="p-8">
                      <h2 className="text-gray-900 mb-4">Course Description</h2>
                      <div className="space-y-4 text-gray-700 leading-relaxed">
                        <p>{course.detailedDescription}</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Prerequisites */}
                  <Card className="bg-white border-2">
                    <CardContent className="p-8">
                      <h2 className="text-gray-900 mb-4">Prerequisites</h2>
                      <div className="space-y-3">
                        {course.prerequisites.map((prereq, index) => (
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
                  {course.stats && (
                    <Card className="bg-gradient-to-br from-[#007CBF] to-[#006A9C] border-0 text-white">
                      <CardContent className="p-6">
                        <h4 className="text-white mb-4">Course Stats</h4>
                        <div className="space-y-4">
                          {course.stats.completionRate && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                            >
                              <div className="flex justify-between text-sm mb-2">
                                <span className="text-white/80">Completion Rate</span>
                                <span className="text-white font-semibold">{course.stats.completionRate}%</span>
                              </div>
                              <Progress value={course.stats.completionRate} className="h-2 bg-white/20" />
                            </motion.div>
                          )}

                          {course.stats.studentSatisfaction && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                            >
                              <div className="flex justify-between text-sm mb-2">
                                <span className="text-white/80">Student Satisfaction</span>
                                <span className="text-white font-semibold">{course.stats.studentSatisfaction}%</span>
                              </div>
                              <Progress value={course.stats.studentSatisfaction} className="h-2 bg-white/20" />
                            </motion.div>
                          )}

                          {course.stats.avgSalaryIncrease && (
                            <div className="pt-4 border-t border-white/20">
                              <div className="text-sm text-white/80 mb-1">Avg Salary Increase</div>
                              <div className="text-2xl text-white">{course.stats.avgSalaryIncrease}</div>
                            </div>
                          )}

                          {course.stats.careerAdvancement && (
                            <div>
                              <div className="text-sm text-white/80 mb-1">Career Advancement</div>
                              <div className="text-2xl text-white">{course.stats.careerAdvancement}</div>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Skills You'll Gain */}
                  <Card className="bg-white border-2">
                    <CardContent className="p-6">
                      <h4 className="text-gray-900 mb-4">Skills You'll Gain</h4>
                      <div className="flex flex-wrap gap-2">
                        {[course.category, 'Python', 'Data Analysis', 'Financial Modeling'].map((skill, idx) => (
                          <Badge key={idx} variant="outline" className="border-[#007CBF] text-[#007CBF]">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="curriculum" className="space-y-6">
              <Card className="bg-white border-2">
                <CardContent className="p-8">
                  <h2 className="text-gray-900 mb-6">Course Curriculum</h2>
                  <p className="text-gray-600 mb-8">
                    {course.courseModules?.length || course.modules} comprehensive modules designed to build your expertise step by step.
                  </p>

                  {course.courseModules ? (
                    <Accordion type="single" collapsible className="space-y-4">
                      {course.courseModules.map((module, index) => (
                        <AccordionItem key={index} value={`module-${index}`} className="border-2 border-gray-200 rounded-lg px-6">
                          <AccordionTrigger className="hover:no-underline">
                            <div className="flex items-center gap-4 text-left">
                              <div className="w-10 h-10 rounded-full bg-[#007CBF]/10 flex items-center justify-center flex-shrink-0">
                                <span className="text-[#007CBF]">{index + 1}</span>
                              </div>
                              <div className="flex-1">
                                <h4 className="text-gray-900 text-base">{module.title}</h4>
                                <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
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
                          <AccordionContent className="pt-4 pb-2">
                            <ul className="space-y-2 ml-14">
                              {module.topics.map((topic, topicIdx) => (
                                <li key={topicIdx} className="flex items-start gap-2 text-gray-700">
                                  <Check className="h-4 w-4 text-[#007CBF] flex-shrink-0 mt-0.5" />
                                  <span>{topic}</span>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  ) : (
                    <p className="text-gray-600">Detailed curriculum information coming soon.</p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="instructor">
              <Card className="bg-white border-2">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#007CBF] to-[#005A8C] flex items-center justify-center text-white text-3xl flex-shrink-0">
                      {course.instructorImage || course.instructor.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h2 className="text-gray-900 mb-2">{course.instructor}</h2>
                      {course.instructorTitle && <p className="text-lg text-gray-600 mb-4">{course.instructorTitle}</p>}
                      <p className="text-gray-700 leading-relaxed">
                        Expert instructor with years of experience in {course.category.toLowerCase()} and financial applications.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews">
              {course.testimonials && course.testimonials.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {course.testimonials.map((testimonial, idx) => (
                    <Card key={idx} className="bg-white border-2">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#007CBF] to-[#005A8C] flex items-center justify-center text-white">
                            {testimonial.image}
                          </div>
                          <div>
                            <h4 className="text-gray-900 text-sm">{testimonial.name}</h4>
                            <p className="text-xs text-gray-600">{testimonial.role}</p>
                            <p className="text-xs text-gray-500">{testimonial.company}</p>
                          </div>
                        </div>
                        <div className="flex gap-1 mb-3">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">{testimonial.text}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="bg-white border-2">
                  <CardContent className="p-8">
                    <p className="text-gray-600 text-center">Student reviews coming soon.</p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQs */}
      {course.faqs && course.faqs.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#007CBF]/10 text-[#007CBF] border-0">
                FAQ
              </Badge>
              <h2 className="text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about this course
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {course.faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`faq-${idx}`} className="border-2 border-gray-200 rounded-lg px-6">
                    <AccordionTrigger className="hover:no-underline text-left">
                      <h4 className="text-gray-900">{faq.question}</h4>
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 pb-4">
                      <p className="text-gray-700 leading-relaxed mb-3">{faq.answer}</p>
                      {faq.links && faq.links.length > 0 && (
                        <div className="flex flex-wrap gap-3">
                          {faq.links.map((link, linkIdx) => (
                            <a
                              key={linkIdx}
                              href={link.url}
                              className="text-sm text-[#007CBF] hover:underline flex items-center gap-1"
                            >
                              {link.text}
                              <ChevronRight className="h-3 w-3" />
                            </a>
                          ))}
                        </div>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      )}

      {/* Related Courses */}
      {relatedCourses.length > 0 && (
        <section className="py-16 bg-[#F9FAFB]">
          <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#007CBF]/10 text-[#007CBF] border-0">
                Related Courses
              </Badge>
              <h2 className="text-gray-900">You Might Also Like</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedCourses.map((relatedCourse, idx) => (
                <Card key={idx} className="bg-white border-2 hover:border-[#007CBF] transition-all group cursor-pointer">
                  <CardContent className="p-6">
                    <Badge className="mb-3 bg-[#007CBF]/10 text-[#007CBF] border-0">
                      {relatedCourse.category}
                    </Badge>
                    <h4 className="text-gray-900 mb-2 group-hover:text-[#007CBF] transition-colors">
                      {relatedCourse.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">{relatedCourse.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {relatedCourse.duration}
                      </div>
                      <div className="text-[#007CBF]">${relatedCourse.price}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#007CBF] to-[#006A9C]">
        <div className="max-w-4xl mx-auto px-8 lg:px-20 text-center">
          <h2 className="text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8">
            Join {course.students.toLocaleString()}+ students already enrolled in this course.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 h-14 px-8"
            >
              Enroll Now - ${course.price}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 h-14 px-8"
              onClick={() => onNavigate('contact')}
            >
              Talk to an Advisor
            </Button>
          </div>
          <p className="text-sm text-white/70 mt-6">
            30-day money-back guarantee • Lifetime access • Certificate included
          </p>
        </div>
      </section>
    </div>
  );
}
