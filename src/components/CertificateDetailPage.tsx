import { useState } from 'react';
import { Check, Clock, Award, ArrowLeft, Play, CheckCircle, BookOpen, X, DollarSign, Users, Star, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Certificate, Course, getCoursesForCertificate, courses } from '../data/coursesAndCertificates';

interface CertificateDetailPageProps {
  certificate: Certificate;
  onNavigate: (page: string) => void;
  courseDetailPageMap?: Record<string, string>; // Maps course IDs to page routes
}

export function CertificateDetailPage({ certificate, onNavigate, courseDetailPageMap = {} }: CertificateDetailPageProps) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [courseModalOpen, setCourseModalOpen] = useState(false);

  const certificateCourses = getCoursesForCertificate(certificate.id);
  
  // Calculate individual course total
  const individualTotal = certificateCourses.reduce((sum, course) => sum + course.price, 0);
  const savings = individualTotal - certificate.price;
  const savingsPercent = Math.round((savings / individualTotal) * 100);

  const getColorClasses = () => {
    if (certificate.color.includes('blue')) {
      return {
        bg: 'from-[#007CBF] to-[#005A8C]',
        text: 'text-[#007CBF]',
        border: 'border-[#007CBF]',
        bgLight: 'bg-[#007CBF]/10',
        hoverBorder: 'hover:border-[#007CBF]'
      };
    } else if (certificate.color.includes('green')) {
      return {
        bg: 'from-[#007CBF] to-[#006A9C]',
        text: 'text-[#007CBF]',
        border: 'border-[#007CBF]',
        bgLight: 'bg-[#007CBF]/10',
        hoverBorder: 'hover:border-[#007CBF]'
      };
    } else if (certificate.color.includes('purple')) {
      return {
        bg: 'from-[#007CBF] to-[#006A9C]',
        text: 'text-[#007CBF]',
        border: 'border-[#007CBF]',
        bgLight: 'bg-[#007CBF]/10',
        hoverBorder: 'hover:border-[#007CBF]'
      };
    }
    return {
      bg: 'from-[#007CBF] to-[#005A8C]',
      text: 'text-[#007CBF]',
      border: 'border-[#007CBF]',
      bgLight: 'bg-[#007CBF]/10',
      hoverBorder: 'hover:border-[#007CBF]'
    };
  };

  const colors = getColorClasses();

  const openCourseModal = (course: Course) => {
    setSelectedCourse(course);
    setCourseModalOpen(true);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className={`relative py-20 bg-gradient-to-br ${colors.bg} overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="max-w-[1440px] mx-auto px-8 lg:px-20 relative z-10">
          <Button
            variant="ghost"
            className="text-white hover:bg-white/10 mb-6"
            onClick={() => onNavigate('certificate-programs')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Programs
          </Button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Badge className="mb-4 bg-white/10 text-white border-white/20">
                <Award className="h-4 w-4 mr-2" />
                Certificate Program
              </Badge>
              <h1 className="text-white mb-6">
                {certificate.title}
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                {certificate.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-2xl font-bold text-white mb-1">{certificateCourses.length}</div>
                  <div className="text-sm text-white/80">Courses</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-2xl font-bold text-white mb-1">{certificate.duration}</div>
                  <div className="text-sm text-white/80">Duration</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-2xl font-bold text-white mb-1">{certificate.format}</div>
                  <div className="text-sm text-white/80">Format</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-2xl font-bold text-white mb-1">Save {certificate.savings}</div>
                  <div className="text-sm text-white/80">vs Individual</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100 h-14 px-8"
                >
                  Enroll Now - ${certificate.price.toLocaleString()}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 h-14 px-8"
                  onClick={() => setIsVideoModalOpen(true)}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Preview
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <Card className="border-2 border-white/20 bg-white/10 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-0">
                  <div className={`aspect-video bg-gradient-to-br ${colors.bg} flex items-center justify-center relative group cursor-pointer`} onClick={() => setIsVideoModalOpen(true)}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform">
                      <Play className="h-10 w-10 text-gray-900 ml-1" />
                    </div>
                  </div>
                  <div className="p-6 bg-white">
                    <h4 className="text-gray-900 mb-3">What You'll Learn</h4>
                    <ul className="space-y-2">
                      {certificate.outcomes.slice(0, 3).map((outcome, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-[#007CBF] flex-shrink-0 mt-0.5" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Curriculum */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="text-center mb-12">
            <Badge className={`mb-4 ${colors.bgLight} ${colors.text} border-0`}>
              Curriculum
            </Badge>
            <h2 className="text-gray-900 mb-4">Certificate Curriculum</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {certificateCourses.length} comprehensive courses designed to build production-ready expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certificateCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`border-2 border-gray-200 ${colors.hoverBorder} transition-all group cursor-pointer`} onClick={() => openCourseModal(course)}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <Badge className={`${colors.bgLight} ${colors.text} border-0`}>
                        Course {index + 1}
                      </Badge>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Clock className="h-4 w-4" />
                          {course.duration}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <DollarSign className="h-4 w-4" />
                          ${course.price}
                        </div>
                      </div>
                    </div>
                    <h4 className="text-gray-900 mb-2">{course.title}</h4>
                    <p className="text-sm text-gray-600 mb-4">{course.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        {course.modules} modules
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {course.students.toLocaleString()} students
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        {course.rating}
                      </span>
                    </div>
                    <div className={`mt-4 text-sm ${colors.text} group-hover:underline`}>
                      Click to view details →
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Pricing Comparison */}
          <div className="mt-12">
            <Card className={`border-2 ${colors.border} bg-gradient-to-br from-blue-50 to-white`}>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="text-center">
                    <div className="text-sm text-gray-600 mb-2">Individual Courses</div>
                    <div className="text-3xl font-bold text-gray-900 line-through">
                      ${individualTotal.toLocaleString()}
                    </div>
                  </div>
                  <div className="text-center">
                    <Badge className="bg-[#007CBF] text-white border-0 mb-2">
                      Save {savingsPercent}%
                    </Badge>
                    <div className="text-4xl font-bold text-[#007CBF]">
                      ${savings.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">Total Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600 mb-2">Certificate Price</div>
                    <div className="text-4xl font-bold text-[#007CBF]">
                      ${certificate.price.toLocaleString()}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className={`mb-4 ${colors.bgLight} ${colors.text} border-0`}>
                Outcomes
              </Badge>
              <h2 className="text-gray-900 mb-6">What You'll Achieve</h2>
              <p className="text-lg text-gray-600 mb-8">
                By completing this certificate program, you'll master the essential skills for this domain.
              </p>
              <div className="space-y-4">
                {certificate.outcomes.map((outcome, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="bg-[#007CBF] w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-gray-700">{outcome}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card className={`border-2 ${colors.border}`}>
                <CardContent className="p-6">
                  <h4 className="text-gray-900 mb-4">Industry Recognition</h4>
                  <p className="text-gray-600 mb-4">
                    This certificate is recognized by leading institutions including:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {certificate.recognizedBy.map((company, idx) => (
                      <Badge key={idx} variant="outline" className={`${colors.border} ${colors.text}`}>
                        {company}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200">
                <CardContent className="p-6">
                  <h4 className="text-gray-900 mb-4">Certificate Includes</h4>
                  <ul className="space-y-3">
                    {[
                      'Shareable digital credential',
                      'LinkedIn certification badge',
                      'Downloadable PDF certificate',
                      'Lifetime access to course materials',
                      'Alumni community access'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600">
                        <Award className={`h-4 w-4 ${colors.text}`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 bg-gradient-to-r ${colors.bg}`}>
        <div className="max-w-4xl mx-auto px-8 lg:px-20 text-center">
          <h2 className="text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8">
            Enroll today and earn your industry-recognized certificate.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 h-14 px-8"
            >
              Enroll Now - ${certificate.price.toLocaleString()}
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
            Save {certificate.savings} compared to purchasing courses individually • 30-day money-back guarantee
          </p>
        </div>
      </section>

      {/* Video Modal */}
      <Dialog open={isVideoModalOpen} onOpenChange={setIsVideoModalOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{certificate.title} Preview</DialogTitle>
          </DialogHeader>
          <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
            <div className="text-center text-white">
              <Play className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p className="text-sm opacity-75">Program overview video would be embedded here</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Course Detail Modal */}
      <Dialog open={courseModalOpen} onOpenChange={setCourseModalOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          {selectedCourse && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedCourse.title}</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div>
                  <Badge className={`${colors.bgLight} ${colors.text} border-0 mb-3`}>
                    {selectedCourse.category}
                  </Badge>
                  <p className="text-gray-600 leading-relaxed">{selectedCourse.detailedDescription}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Clock className="h-6 w-6 mx-auto mb-2 text-[#007CBF]" />
                    <div className="font-semibold">{selectedCourse.duration}</div>
                    <div className="text-sm text-gray-600">Duration</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <BookOpen className="h-6 w-6 mx-auto mb-2 text-[#007CBF]" />
                    <div className="font-semibold">{selectedCourse.modules}</div>
                    <div className="text-sm text-gray-600">Modules</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Users className="h-6 w-6 mx-auto mb-2 text-[#007CBF]" />
                    <div className="font-semibold">{selectedCourse.students.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Students</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Star className="h-6 w-6 mx-auto mb-2 text-yellow-500 fill-yellow-500" />
                    <div className="font-semibold">{selectedCourse.rating}</div>
                    <div className="text-sm text-gray-600">Rating</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Learning Outcomes</h4>
                  <ul className="space-y-2">
                    {selectedCourse.learningOutcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#007CBF] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Prerequisites</h4>
                  <ul className="space-y-2">
                    {selectedCourse.prerequisites.map((prereq, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#007CBF] mt-2"></div>
                        <span className="text-gray-700">{prereq}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div>
                    <div className="text-sm text-gray-600">Instructor</div>
                    <div className="font-semibold text-gray-900">{selectedCourse.instructor}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Individual Price</div>
                    <div className="text-2xl font-bold text-[#007CBF]">${selectedCourse.price}</div>
                  </div>
                </div>

                <div className={`p-4 ${colors.bgLight} rounded-lg`}>
                  <p className={`text-sm ${colors.text} mb-2`}>
                    💡 <strong>Part of {certificate.title}</strong>
                  </p>
                  <p className="text-sm text-gray-700">
                    This course is included in the certificate program. Save {certificate.savings} when enrolling in the full program instead of individual courses.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t space-y-3">
                  {courseDetailPageMap[selectedCourse.id] && (
                    <Button
                      className={`w-full bg-gradient-to-r ${colors.bg} hover:opacity-90 text-white`}
                      onClick={() => {
                        setCourseModalOpen(false);
                        onNavigate(courseDetailPageMap[selectedCourse.id]);
                      }}
                    >
                      View Full Course Details
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    className="w-full border-2 border-[#007CBF] text-[#007CBF] hover:bg-[#007CBF]/5"
                    onClick={() => {
                      window.open('/courses#' + selectedCourse.id, '_blank');
                    }}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View on Courses Page
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
