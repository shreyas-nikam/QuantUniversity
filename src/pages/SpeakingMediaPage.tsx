import { useState } from 'react';
import { Calendar, Download, Play, Mic, FileText, Radio, Newspaper, Globe, Brain, TrendingUp, Shield, Rocket, Users, ArrowRight, ExternalLink, MapPin, Star, Quote, Mail, Phone, ChevronDown, Building2, Upload } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { ScrollableCarousel } from '../components/ScrollableCarousel';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { motion } from 'motion/react';

export function SpeakingMediaPage() {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const topics = [
    {
      icon: Brain,
      title: 'Generative AI & Responsible AI',
      description: 'Navigate the transformative power of GenAI while building ethical frameworks for responsible deployment in financial services.',
      emoji: '🧠'
    },
    {
      icon: TrendingUp,
      title: 'AI in Finance & Quantitative Modeling',
      description: 'Leverage machine learning for trading, risk analytics, portfolio optimization, and next-generation financial decision-making.',
      emoji: '💹'
    },
    {
      icon: Shield,
      title: 'AI Risk Management & Governance',
      description: 'Establish robust governance frameworks for AI model validation, monitoring, and regulatory compliance.',
      emoji: '🛡️'
    },
    {
      icon: Users,
      title: 'Future of Work & AI Fluency',
      description: 'Upskill your workforce for the AI era and build organizational capabilities that drive competitive advantage.',
      emoji: '🚀'
    },
    {
      icon: Rocket,
      title: 'Strategy & Leadership in the AI Age',
      description: 'Transform business strategy with AI-first thinking and lead organizational change in a rapidly evolving landscape.',
      emoji: '🧭'
    }
  ];

  const featuredOrganizations = [
    { name: 'Milken Institute', logo: 'MI' },
    { name: 'Bank of America', logo: 'BoA' },
    { name: 'CFA Institute', logo: 'CFA' },
    { name: 'PRMIA', logo: 'PRMIA' },
    { name: 'Morgan Stanley', logo: 'MS' },
    { name: 'Northeastern University', logo: 'NEU' },
    { name: 'AIAA', logo: 'AIAA' },
    { name: 'JPMorgan Chase', logo: 'JPM' }
  ];

  const mediaItems = [
    {
      type: 'talk',
      title: 'AI Risk Management in Financial Services',
      venue: 'Milken Institute Global Conference',
      date: 'May 2024',
      thumbnail: 'https://images.unsplash.com/photo-1563807893646-b6598a2b6fdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwc3BlYWtlciUyMHN0YWdlfGVufDF8fHx8MTc2MjE3MDQ3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: '#',
      icon: Play
    },
    {
      type: 'podcast',
      title: 'The Future of Quantitative Finance',
      venue: 'Morgan Stanley Podcast Series',
      date: 'March 2024',
      thumbnail: 'https://images.unsplash.com/photo-1733222765056-b0790217baa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBrZXlub3RlJTIwcHJlc2VudGF0aW9ufGVufDF8fHx8MTc2MjE5MTk3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: '#',
      icon: Radio
    },
    {
      type: 'deck',
      title: 'Generative AI: Opportunities & Risks',
      venue: 'Bank of America Innovation Summit',
      date: 'February 2024',
      thumbnail: 'https://images.unsplash.com/photo-1654609160632-7324716196fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbmZlcmVuY2UlMjBhdWRpZW5jZXxlbnwxfHx8fDE3NjIxNDc4NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: '#',
      icon: FileText
    },
    {
      type: 'talk',
      title: 'Building AI Literacy in Organizations',
      venue: 'CFA Institute Annual Conference',
      date: 'January 2024',
      thumbnail: 'https://images.unsplash.com/photo-1758507595623-811a2ea5cb7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMHNwZWFraW5nfGVufDF8fHx8MTc2MjE5MTk4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: '#',
      icon: Play
    },
    {
      type: 'press',
      title: 'Expert Commentary on AI Regulation',
      venue: 'Financial Times',
      date: 'December 2023',
      thumbnail: 'https://images.unsplash.com/photo-1563807893646-b6598a2b6fdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwc3BlYWtlciUyMHN0YWdlfGVufDF8fHx8MTc2MjE3MDQ3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: '#',
      icon: Newspaper
    },
    {
      type: 'talk',
      title: 'Machine Learning for Trading',
      venue: 'PRMIA Global Summit',
      date: 'November 2023',
      thumbnail: 'https://images.unsplash.com/photo-1654609160632-7324716196fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbmZlcmVuY2UlMjBhdWRpZW5jZXxlbnwxfHx8fDE3NjIxNDc4NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: '#',
      icon: Play
    }
  ];

  const testimonials = [
    {
      quote: "Sri's keynote was the most engaging session at our event. His blend of humor, deep insight, and hands-on examples made complex AI topics approachable and actionable for our entire investment team.",
      author: "Jennifer Martinez",
      role: "VP, Innovation",
      company: "Bank of America",
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400'
    },
    {
      quote: "We've hosted many speakers, but Sri stands out for his ability to bridge theory and practice. Our risk managers left with concrete frameworks they could implement immediately.",
      author: "David Chen",
      role: "Head of Professional Development",
      company: "PRMIA",
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400'
    },
    {
      quote: "Sri delivered a masterclass on generative AI that resonated with both our technical and non-technical audiences. His depth of knowledge and engaging presentation style made him the perfect choice for our conference.",
      author: "Sarah Thompson",
      role: "Director, Global Conferences",
      company: "Milken Institute",
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400'
    },
    {
      quote: "Outstanding speaker who brought real-world financial services experience to the table. His insights on AI governance were exactly what our members needed.",
      author: "Michael Roberts",
      role: "Events Director",
      company: "CFA Institute",
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400'
    },
    {
      quote: "Sri's ability to make complex quantitative concepts accessible is remarkable. Our students and faculty both gained tremendous value from his presentation.",
      author: "Dr. Emily Watson",
      role: "Professor & Program Director",
      company: "Northeastern University",
      image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400'
    }
  ];

  const speakingLocations = [
    { city: 'New York', country: 'USA', events: 15 },
    { city: 'London', country: 'UK', events: 8 },
    { city: 'Singapore', country: 'Singapore', events: 6 },
    { city: 'San Francisco', country: 'USA', events: 12 },
    { city: 'Hong Kong', country: 'China', events: 5 },
    { city: 'Boston', country: 'USA', events: 10 },
    { city: 'Chicago', country: 'USA', events: 7 },
    { city: 'Toronto', country: 'Canada', events: 4 }
  ];

  const filterTypes = [
    { value: 'all', label: 'All Media', icon: Globe },
    { value: 'talk', label: 'Talks', icon: Mic },
    { value: 'deck', label: 'Decks', icon: FileText },
    { value: 'podcast', label: 'Podcasts', icon: Radio },
    { value: 'press', label: 'Press', icon: Newspaper }
  ];

  const [activeFilter, setActiveFilter] = useState('all');

  const filteredMedia = activeFilter === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.type === activeFilter);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-[#006A9C] to-[#007CBF] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1563807893646-b6598a2b6fdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwc3BlYWtlciUyMHN0YWdlfGVufDF8fHx8MTc2MjE3MDQ3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Conference speaking"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-[#006A9C]/80 to-[#007CBF]/70"></div>
        </div>

        <div className="max-w-[1440px] mx-auto px-8 lg:px-20 relative z-10">
          <div className="max-w-4xl">
            <Badge className="mb-6 bg-white/10 text-white border-white/20">
              🎤 World-Renowned Speaker
            </Badge>
            <h1 className="text-white mb-6">Invite Sri Krishnamurthy, CFA — AI & Finance Speaker</h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Sri has inspired thousands across the globe — from Bank of America and the Milken Institute to CFA societies, PRMIA forums, and innovation summits. Bring world-class expertise to your next event.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <button 
                onClick={() => setShowBookingForm(true)}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-white text-[#007CBF] hover:bg-gray-100 px-8 h-14 text-lg font-medium transition-colors cursor-pointer"
              >
                <Calendar className="h-5 w-5" />
                Book Sri to Speak
              </button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#007CBF] px-8 rounded-lg h-14 text-lg"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Sample Talk
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#007CBF] px-8 rounded-lg h-14 text-lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Speaker Kit
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl text-white mb-1">50+</div>
                <div className="text-white/80 text-sm">Global Events</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl text-white mb-1">13</div>
                <div className="text-white/80 text-sm">Countries</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl text-white mb-1">10K+</div>
                <div className="text-white/80 text-sm">Attendees</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl text-white mb-1">5.0</div>
                <div className="text-white/80 text-sm">Avg Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Speaking Footprint */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#007CBF]/10 text-[#007CBF] border-0">
              🌍 Global Reach
            </Badge>
            <h2 className="text-gray-900 mb-4">As Featured In</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by the world's leading financial institutions, conferences, and educational organizations
            </p>
          </div>

          {/* Featured Organizations Logo Strip */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-16">
            {featuredOrganizations.map((org, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-lg px-8 py-6 border-2 border-gray-200 hover:border-[#007CBF] transition-all">
                  <div className="text-xl text-gray-600">{org.logo}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Speaking Locations */}
          <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
            <h3 className="text-gray-900 mb-6 text-center">Speaking Locations</h3>
            <div className="grid md:grid-cols-4 gap-4">
              {speakingLocations.map((location, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-[#F9FAFB] rounded-lg">
                  <MapPin className="h-5 w-5 text-[#007CBF] flex-shrink-0" />
                  <div>
                    <div className="text-gray-900">{location.city}</div>
                    <div className="text-sm text-gray-600">{location.events} events</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Topics Sri Covers */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#007CBF]/10 text-[#007CBF] border-0">
              🧠 Expertise
            </Badge>
            <h2 className="text-gray-900 mb-4">Topics Sri Covers</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From AI strategy to hands-on implementation, Sri delivers actionable insights tailored to your audience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="border-2 border-gray-200 hover:border-[#007CBF] transition-all hover-lift cursor-pointer h-full"
                  onClick={() => setSelectedTopic(topic.title)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-[#007CBF]/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                        <topic.icon className="h-6 w-6 text-[#007CBF]" />
                      </div>
                      <div className="text-3xl">{topic.emoji}</div>
                    </div>
                    <h3 className="text-gray-900 mb-3">{topic.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {topic.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-[#007CBF] text-[#007CBF] hover:bg-[#007CBF] hover:text-white"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Full Speaker Kit (PDF)
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Talks & Media */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#007CBF]/10 text-[#007CBF] border-0">
              🎥 Media Library
            </Badge>
            <h2 className="text-gray-900 mb-4">Featured Talks & Media Appearances</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Watch keynotes, access presentation decks, and explore media features
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filterTypes.map((filter) => (
              <Button
                key={filter.value}
                variant={activeFilter === filter.value ? 'default' : 'outline'}
                className={activeFilter === filter.value 
                  ? 'bg-[#007CBF] text-white hover:bg-[#006A9C]'
                  : 'border-2 border-gray-300 text-gray-700 hover:border-[#007CBF] hover:text-[#007CBF]'
                }
                onClick={() => setActiveFilter(filter.value)}
              >
                <filter.icon className="mr-2 h-4 w-4" />
                {filter.label}
              </Button>
            ))}
          </div>

          {/* Media Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMedia.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="border-2 border-gray-200 hover:border-[#007CBF] transition-all overflow-hidden group cursor-pointer">
                  <div className="relative h-48 bg-gray-100">
                    <ImageWithFallback
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-4 w-full">
                        <Badge className="bg-white/90 text-[#007CBF]">
                          <item.icon className="mr-1 h-3 w-3" />
                          {item.type}
                        </Badge>
                      </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-[#007CBF]/80">
                      <div className="bg-white rounded-full p-4">
                        <item.icon className="h-8 w-8 text-[#007CBF]" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-gray-900 mb-2 line-clamp-2">{item.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{item.venue}</p>
                    <p className="text-sm text-gray-500">{item.date}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials from Event Hosts */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#007CBF]/10 text-[#007CBF] border-0">
              💬 What Event Hosts Say
            </Badge>
            <h2 className="text-gray-900 mb-4">Trusted by Conference Organizers Worldwide</h2>
            <p className="text-xl text-gray-600">
              Hear from leaders who have hosted Sri at their events
            </p>
          </div>

          <ScrollableCarousel>
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]" style={{ scrollSnapAlign: 'start' }}>
                <Card className="border-2 border-gray-200 hover:border-[#007CBF] transition-all h-full">
                  <CardContent className="p-8">
                    <Quote className="h-12 w-12 text-[#007CBF]/20 mb-4" />
                    <p className="text-gray-700 mb-6 italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-4 border-t pt-6">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                        <ImageWithFallback
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-gray-900 mb-1">{testimonial.author}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                        <div className="text-sm text-[#007CBF]">{testimonial.company}</div>
                      </div>
                    </div>
                    <div className="flex gap-1 mt-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-[#007CBF] text-[#007CBF]" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </ScrollableCarousel>
        </div>
      </section>

      {/* Book Sri to Speak - Lead Form */}
      <section className="py-20 bg-gradient-to-br from-[#007CBF] to-[#005A8C]" id="booking-form">
        <div className="max-w-4xl mx-auto px-8 lg:px-20">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-white/10 text-white border-white/20">
              📥 Ready to Book?
            </Badge>
            <h2 className="text-white mb-4">Book Sri to Speak at Your Event</h2>
            <p className="text-xl text-white/90">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          <Card className="border-2 border-white/20">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <Input 
                      placeholder="John Doe"
                      className="border-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      Organization *
                    </label>
                    <Input 
                      placeholder="Company or Institution"
                      className="border-gray-300"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input 
                      type="email"
                      placeholder="john@company.com"
                      className="border-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      Phone
                    </label>
                    <Input 
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="border-gray-300"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      Event Type *
                    </label>
                    <Select>
                      <SelectTrigger className="border-gray-300">
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="conference">Conference</SelectItem>
                        <SelectItem value="corporate">Corporate Event</SelectItem>
                        <SelectItem value="academic">Academic Institution</SelectItem>
                        <SelectItem value="webinar">Virtual/Webinar</SelectItem>
                        <SelectItem value="workshop">Workshop</SelectItem>
                        <SelectItem value="podcast">Podcast/Media</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      Preferred Date
                    </label>
                    <Input 
                      type="date"
                      className="border-gray-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Topic of Interest
                  </label>
                  <Select>
                    <SelectTrigger className="border-gray-300">
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent>
                      {topics.map((topic, idx) => (
                        <SelectItem key={idx} value={topic.title}>
                          {topic.emoji} {topic.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Expected Audience Size
                  </label>
                  <Select>
                    <SelectTrigger className="border-gray-300">
                      <SelectValue placeholder="Select audience size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-50">1-50 attendees</SelectItem>
                      <SelectItem value="51-200">51-200 attendees</SelectItem>
                      <SelectItem value="201-500">201-500 attendees</SelectItem>
                      <SelectItem value="500+">500+ attendees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Additional Details
                  </label>
                  <Textarea 
                    placeholder="Tell us about your event, audience, and what you'd like Sri to cover..."
                    rows={4}
                    className="border-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Upload Event RFP (Optional)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#007CBF] transition-colors cursor-pointer">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-500 mt-1">PDF, DOC, or DOCX (max 10MB)</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button 
                    type="submit"
                    size="lg"
                    className="flex-1 bg-[#007CBF] hover:bg-[#006A9C] text-white h-12"
                  >
                    Submit Booking Request
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg border-2 border-[#007CBF] text-[#007CBF] hover:bg-[#007CBF] hover:text-white px-6 h-12 font-medium transition-colors cursor-pointer"
                  >
                    <Calendar className="h-5 w-5" />
                    Schedule Call
                  </button>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700 text-center">
                    <strong>Quick Response Guarantee:</strong> We'll respond within 24 hours with availability and next steps
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Direct Contact Options */}
          <div className="mt-8 text-center">
            <p className="text-white/90 mb-4">Prefer to reach out directly?</p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <a href="mailto:speaking@quantuniversity.com" className="flex items-center gap-2 text-white hover:text-white/80 transition-colors">
                <Mail className="h-5 w-5" />
                <span>speaking@quantuniversity.com</span>
              </a>
              <span className="text-white/40">|</span>
              <a href="tel:+1-555-0123" className="flex items-center gap-2 text-white hover:text-white/80 transition-colors">
                <Phone className="h-5 w-5" />
                <span>+1 (555) 012-3456</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Footer */}
      <section className="py-12 bg-white border-t">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="bg-gradient-to-r from-[#007CBF] to-[#005A8C] rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-white mb-4">Stay Updated on Speaking Events</h3>
                <p className="text-white/90 mb-6">
                  Get notified when Sri is speaking at an event near you or when new media features are published
                </p>
              </div>
              <div>
                <div className="flex gap-3">
                  <Input 
                    type="email"
                    placeholder="Your email address"
                    className="border-white/20 bg-white/10 text-white placeholder:text-white/60"
                  />
                  <Button className="bg-white text-[#007CBF] hover:bg-gray-100 whitespace-nowrap">
                    Subscribe
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <p className="text-white/70 text-sm mt-2">
                  Join 5,000+ professionals staying informed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
