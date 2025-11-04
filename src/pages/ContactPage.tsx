import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Users, Briefcase, ArrowRight, Globe, Calendar as CalendarIcon, Clock, HelpCircle, Book, Building, Award, CheckCircle, Home, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';
import { toast } from 'sonner';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from '../components/ui/breadcrumb';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { generateFAQSchema, generateBreadcrumbSchema } from '../data/seo';

interface ContactPageProps {
  onNavigate?: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps = {}) {
  const [selectedInquiryType, setSelectedInquiryType] = useState('');
  const [showCalendly, setShowCalendly] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    inquiryType: '',
    course: '',
    industry: '',
    message: '',
    consent: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('interest_in', formData.inquiryType);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('organization', formData.organization);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('course', formData.course);
      formDataToSend.append('industry', formData.industry);
      formDataToSend.append('receive_updates', formData.consent.toString());

      const response = await fetch('http://localhost:8003/post_contact_interest', {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        organization: '',
        phone: '',
        inquiryType: '',
        course: '',
        industry: '',
        message: '',
        consent: false
      });
      
      // Show success message
      toast.success('Thank you for your message!', {
        description: "We'll get back to you within 24 hours.",
        duration: 5000,
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      toast.error('Failed to send message', {
        description: 'Please try again or email us directly at info@quantuniversity.com',
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: '💬',
      title: 'Email Us',
      details: 'info@quantuniversity.com',
      description: 'Response within 24 hours',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri, 9AM-6PM EST',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '🌍',
      title: 'Global Presence',
      details: '13+ Countries',
      description: 'Serving learners worldwide',
      color: 'from-purple-500 to-purple-600'
    },
  ];

  const inquiryTypes = [
    {
      icon: Users,
      emoji: '💬',
      title: 'Individual Course Enrollment',
      description: 'Questions about courses, pricing, or getting started'
    },
    {
      icon: Briefcase,
      emoji: '📞',
      title: 'Enterprise Training',
      description: 'Custom programs for your organization'
    },
    {
      icon: MessageSquare,
      emoji: '🌍',
      title: 'Advisory & Consulting',
      description: 'Strategic guidance on AI implementation'
    },
  ];

  const courses = [
    'Machine Learning for Trading & Finance',
    'Deep Learning in Finance',
    'Natural Language Processing for Finance',
    'Time Series Analysis & Forecasting',
    'AI Risk Management & Model Governance',
    'Python for Financial Analysis',
    'Algorithmic Trading with Python',
    'Credit Risk Modeling',
    'All Courses / Not Sure Yet'
  ];

  const industries = [
    'Banking & Financial Services',
    'Investment Management',
    'Insurance',
    'Fintech',
    'Consulting',
    'Technology',
    'Government & Regulatory',
    'Academic / Research',
    'Other'
  ];

  // Global locations with coordinates for animation
  const globalLocations = [
    { name: 'New York', country: 'USA', x: 25, y: 35, region: 'North America' },
    { name: 'London', country: 'UK', x: 50, y: 30, region: 'Europe' },
    { name: 'Singapore', country: 'Singapore', x: 75, y: 55, region: 'Asia' },
    { name: 'Mumbai', country: 'India', x: 70, y: 50, region: 'Asia' },
    { name: 'Toronto', country: 'Canada', x: 22, y: 32, region: 'North America' },
    { name: 'Sydney', country: 'Australia', x: 85, y: 75, region: 'Oceania' },
    { name: 'Dubai', country: 'UAE', x: 62, y: 48, region: 'Middle East' },
    { name: 'São Paulo', country: 'Brazil', x: 32, y: 70, region: 'South America' }
  ];

  const faqs = [
    {
      question: "What's the best way to get started with QuantUniversity?",
      answer: "Browse our course catalog to find programs matching your goals. We recommend starting with our Python for Financial Analysis course if you're new to programming, or Machine Learning for Trading if you have coding experience. Contact us for personalized recommendations based on your background and objectives.",
      icon: Book,
      tags: ['Individual Learners', 'Getting Started']
    },
    {
      question: "Do you offer group discounts for enterprise teams?",
      answer: "Yes! We offer custom enterprise programs with volume pricing (20%+ discount for teams of 10+), dedicated support, tailored curriculum, and learning analytics. Programs include live instructor-led sessions, custom capstone projects, and executive reporting.",
      icon: Building,
      tags: ['Enterprise', 'Pricing']
    },
    {
      question: "Can I speak with someone before enrolling?",
      answer: "Absolutely! Book a free 15-minute consultation using the Calendly widget below, or email us directly at info@quantuniversity.com. We're happy to discuss your learning goals, recommend courses, and answer any questions.",
      icon: HelpCircle,
      tags: ['Individual Learners', 'Support']
    },
    {
      question: "What certifications do you offer?",
      answer: "All courses include a Certificate of Completion. Our flagship programs also offer industry-recognized credentials including CQF partnership certificates, PRMIA Professional Certifications, and GARP collaboration certificates that enhance your professional profile.",
      icon: Award,
      tags: ['Certifications', 'Career']
    },
    {
      question: "How long does it take to complete a course?",
      answer: "Most courses are designed for 8-12 weeks of study (6-8 hours/week). You have 6 months of access to complete at your own pace. Enterprise programs can be customized for accelerated 4-week intensives or extended 16-week tracks.",
      icon: Clock,
      tags: ['Individual Learners', 'Enterprise']
    }
  ];

  // Structured data
  const faqSchema = generateFAQSchema(faqs.map(faq => ({
    question: faq.question,
    answer: faq.answer
  })));

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' }
  ]);

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        pageKey="contact"
        structuredData={[breadcrumbSchema, faqSchema]}
      />
      
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
                <BreadcrumbPage className="text-gray-900">Contact</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#007CBF] to-[#006A9C]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/10 text-white border-white/20">
              Get in Touch
            </Badge>
            <h1 className="text-white mb-6">Let's Talk AI Upskilling</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Whether you're looking to enroll in a course, explore enterprise solutions, or discuss custom training needs — we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods with Hover Glow */}
      <section className="py-16 bg-[#F9FAFB] border-b">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="border-2 hover:border-[#007CBF] transition-all bg-white relative overflow-hidden group cursor-pointer">
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-[#007CBF]/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <CardContent className="p-8 text-center relative z-10">
                    <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {method.icon}
                    </div>
                    <h4 className="text-gray-900 mb-2">{method.title}</h4>
                    <p className="text-lg font-semibold text-[#007CBF] mb-1">{method.details}</p>
                    <p className="text-gray-600 text-sm">{method.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Types with Icons and Glow */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">How Can We Help?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the type of inquiry that best matches your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {inquiryTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card 
                  className="border-2 hover:border-[#007CBF] transition-all cursor-pointer relative overflow-hidden group h-full"
                  onClick={() => setSelectedInquiryType(type.title)}
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#007CBF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#007CBF]/10 rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                        {type.emoji}
                      </div>
                      <div className="bg-[#007CBF]/10 w-12 h-12 rounded-lg flex items-center justify-center">
                        <type.icon className="h-6 w-6 text-[#007CBF]" />
                      </div>
                    </div>
                    <h4 className="text-gray-900 mb-2">{type.title}</h4>
                    <p className="text-gray-600 text-sm">{type.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form with Lead Segmentation */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto px-8 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Send Us a Message</h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          <Card className="border-2 border-gray-200 shadow-xl bg-white">
            <CardContent className="p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="border-gray-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input 
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@company.com"
                      className="border-gray-300"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Organization
                    </label>
                    <Input 
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      placeholder="Your Company (Optional)"
                      className="border-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <Input 
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 000-0000"
                      className="border-gray-300"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      I'm interested in... *
                    </label>
                    <Select 
                      required 
                      value={formData.inquiryType}
                      onValueChange={handleSelectChange('inquiryType')}
                    >
                      <SelectTrigger className="border-gray-300">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="individual">Enroll in a Course</SelectItem>
                        <SelectItem value="enterprise">Enterprise Training</SelectItem>
                        <SelectItem value="advisory">Advisory Discussion</SelectItem>
                        <SelectItem value="speaking">Book Sri to Speak</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Which course interests you?
                    </label>
                    <Select
                      value={formData.course}
                      onValueChange={handleSelectChange('course')}
                    >
                      <SelectTrigger className="border-gray-300">
                        <SelectValue placeholder="Select a course" />
                      </SelectTrigger>
                      <SelectContent>
                        {courses.map((course, idx) => (
                          <SelectItem key={idx} value={course.toLowerCase().replace(/\s+/g, '-')}>
                            {course}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Industry / Sector
                  </label>
                  <Select
                    value={formData.industry}
                    onValueChange={handleSelectChange('industry')}
                  >
                    <SelectTrigger className="border-gray-300">
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map((industry, idx) => (
                        <SelectItem key={idx} value={industry.toLowerCase().replace(/\s+/g, '-')}>
                          {industry}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more about what you're looking for..."
                    rows={6}
                    className="border-gray-300"
                    required
                  />
                </div>

                <div className="bg-[#F9FAFB] rounded-lg p-4 border border-gray-200">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input 
                      type="checkbox" 
                      name="consent"
                      checked={formData.consent}
                      onChange={handleInputChange}
                      className="mt-1"
                      required
                    />
                    <span className="text-sm text-gray-600">
                      I agree to receive communications from QuantUniversity about courses, events, and updates. I can unsubscribe at any time.
                    </span>
                  </label>
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-[#007CBF] hover:bg-[#006A9C] text-white h-14 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Submit contact form to send your message to QuantUniversity"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 h-5 w-5" />
                </Button>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <p className="text-sm text-green-700">
                      Thank you! Your message has been sent successfully.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
                    <span className="text-red-600">⚠️</span>
                    <p className="text-sm text-red-700">
                      There was an error. Please try again or email us directly.
                    </p>
                  </div>
                )}

                <p className="text-sm text-gray-500 text-center">
                  We'll respond within 24 hours during business days
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Global Map with Animated Pins */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#007CBF]/10 text-[#007CBF] border-0">
              Global Presence
            </Badge>
            <h2 className="text-gray-900 mb-4">Serving Learners in 13+ Countries</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              With students and enterprise clients across North America, Europe, Asia, and beyond
            </p>
          </div>

          <Card className="border-2 border-gray-200 overflow-hidden">
            <CardContent className="p-0">
              {/* Interactive Map with Pins */}
              <div className="bg-gradient-to-br from-[#007CBF]/5 via-blue-50 to-indigo-50 h-[500px] relative overflow-hidden">
                {/* Background grid pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle, #007CBF 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                  }}></div>
                </div>

                {/* Animated connection lines */}
                <svg className="absolute inset-0 w-full h-full">
                  <motion.line
                    x1="25%" y1="35%" x2="50%" y2="30%"
                    stroke="#007CBF"
                    strokeWidth="1"
                    opacity="0.2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                  />
                  <motion.line
                    x1="50%" y1="30%" x2="75%" y2="55%"
                    stroke="#007CBF"
                    strokeWidth="1"
                    opacity="0.2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
                  />
                </svg>

                {/* Location Pins */}
                {globalLocations.map((location, index) => (
                  <motion.div
                    key={index}
                    className="absolute"
                    style={{ left: `${location.x}%`, top: `${location.y}%` }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                  >
                    {/* Pulsing ring */}
                    <motion.div
                      className="absolute -inset-4 bg-[#007CBF] rounded-full"
                      initial={{ opacity: 0.5, scale: 0 }}
                      animate={{ opacity: 0, scale: 2 }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    />
                    
                    {/* Pin */}
                    <div className="relative group cursor-pointer">
                      <div className="w-4 h-4 bg-[#007CBF] rounded-full border-2 border-white shadow-lg group-hover:scale-150 transition-transform duration-300"></div>
                      
                      {/* Tooltip */}
                      <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                        <div className="bg-gray-900 text-white text-xs px-3 py-2 rounded-lg shadow-xl">
                          <div className="font-semibold">{location.name}</div>
                          <div className="text-gray-300">{location.country}</div>
                        </div>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-3 h-3 bg-[#007CBF] rounded-full"></div>
                    <span>Active Locations</span>
                  </div>
                </div>
              </div>
              
              <div className="p-8 grid md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Globe className="h-6 w-6 text-[#007CBF]" />
                    <h4 className="text-gray-900">Headquarters</h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">United States</p>
                  <p className="text-gray-500 text-sm">Primary operations and course development</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="h-6 w-6 text-[#007CBF]" />
                    <h4 className="text-gray-900">Regional Hubs</h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">UK, Singapore, India</p>
                  <p className="text-gray-500 text-sm">Local support and partnerships</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="h-6 w-6 text-[#007CBF]" />
                    <h4 className="text-gray-900">Global Reach</h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">13+ Countries</p>
                  <p className="text-gray-500 text-sm">10,000+ learners worldwide</p>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Answers - Accordion with Icons */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto px-8 lg:px-20">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#007CBF]/10 text-[#007CBF] border-0">
              FAQ
            </Badge>
            <h2 className="text-gray-900 mb-4">Quick Answers</h2>
            <p className="text-xl text-gray-600">
              Common questions before you reach out
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`} className="border-2 border-gray-200 rounded-lg px-6 bg-white hover:border-[#007CBF] transition-colors">
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex items-start gap-4 text-left">
                      <div className="bg-[#007CBF]/10 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <faq.icon className="h-5 w-5 text-[#007CBF]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-gray-900 mb-2">{faq.question}</h4>
                        <div className="flex flex-wrap gap-2">
                          {faq.tags.map((tag, tagIdx) => (
                            <Badge key={tagIdx} variant="outline" className="text-xs border-[#007CBF] text-[#007CBF]">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-14 pr-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          {/* Dynamic suggestion based on visitor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8"
          >
            <Card className="border-2 border-[#007CBF] bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#007CBF] w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-gray-900 mb-2">Still have questions?</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      Book a free 15-minute consultation with our team to discuss your specific needs and get personalized recommendations.
                    </p>
                    <Button 
                      className="bg-[#007CBF] hover:bg-[#006A9C] text-white"
                      onClick={() => setShowCalendly(true)}
                      aria-label="Open calendar to book a free 15-minute consultation call with QuantUniversity team"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      Book a Call
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section with Calendly */}
      <section className="py-16 bg-gradient-to-r from-[#007CBF] to-[#006A9C]">
        <div className="max-w-4xl mx-auto px-8 lg:px-20">
          <div className="text-center mb-8">
            <h3 className="text-white mb-4">Ready to Transform Your Career or Team?</h3>
            <p className="text-xl text-white/90 mb-8">
              Don't wait — explore our courses or schedule a call to discuss your goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Browse Courses CTA */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white cursor-pointer h-full"
                onClick={() => onNavigate?.('courses')}
              >
                <CardContent className="p-6 text-center">
                  <Book className="h-12 w-12 mx-auto mb-4 text-white" />
                  <h4 className="text-white mb-2">Browse Our Courses</h4>
                  <p className="text-white/80 text-sm mb-4">
                    Explore 20+ expert-led programs in AI, ML, and finance
                  </p>
                  <Button 
                    size="lg" 
                    className="w-full bg-white text-[#007CBF] hover:bg-gray-100"
                  >
                    View Courses
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Book a Call CTA */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white cursor-pointer h-full"
                onClick={() => setShowCalendly(true)}
              >
                <CardContent className="p-6 text-center">
                  <CalendarIcon className="h-12 w-12 mx-auto mb-4 text-white" />
                  <h4 className="text-white mb-2">Book a 15-Min Call</h4>
                  <p className="text-white/80 text-sm mb-4">
                    Get personalized recommendations from our experts
                  </p>
                  <Button 
                    size="lg" 
                    className="w-full border-2 border-white text-white hover:bg-white/10"
                    variant="outline"
                  >
                    Schedule Now
                    <CalendarIcon className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Calendly Embed */}
          {showCalendly && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-2 border-white bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-gray-900">Schedule Your Consultation</h4>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setShowCalendly(false)}
                    >
                      Close
                    </Button>
                  </div>
                  <div className="bg-gray-100 rounded-lg h-[600px] flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <CalendarIcon className="h-16 w-16 mx-auto mb-4 text-[#007CBF]" />
                      <p className="mb-2">Calendly scheduling widget would be embedded here</p>
                      <p className="text-sm text-gray-500">Integration: https://calendly.com/quantuniversity/15min</p>
                      <div className="mt-6 space-y-2 text-sm text-left max-w-md mx-auto">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-[#007CBF]" />
                          <span>15-minute consultation</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-[#007CBF]" />
                          <span>Discuss your learning goals</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-[#007CBF]" />
                          <span>Get course recommendations</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-[#007CBF]" />
                          <span>Explore enterprise options</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
