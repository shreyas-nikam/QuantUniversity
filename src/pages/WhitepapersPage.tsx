import { Download, FileText, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function WhitepapersPage() {
  const whitepapers = [
    {
      id: 1,
      title: 'AI Risk Management in Finance 2025',
      description: 'Comprehensive framework for implementing AI governance, model validation, and regulatory compliance in financial institutions.',
      pages: '45 pages',
      downloads: '3,200+',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MjA1ODI0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: true
    },
    {
      id: 2,
      title: 'Agentic AI in Financial Workflows',
      description: 'Exploring autonomous AI agents and their applications in trading, compliance, and customer service automation.',
      pages: '38 pages',
      downloads: '2,800+',
      image: 'https://images.unsplash.com/photo-1709120395858-92f1c7c577f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZmluYW5jZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYyMTEwODM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: true
    },
    {
      id: 3,
      title: 'Building the AI-Enabled Workforce',
      description: 'Strategic guide for upskilling finance professionals with AI capabilities and measuring training ROI.',
      pages: '52 pages',
      downloads: '4,100+',
      image: 'https://images.unsplash.com/photo-1758691736722-cda1858056e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBsZWFybmluZyUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NjIxMTA4MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: true
    },
    {
      id: 4,
      title: 'Generative AI for Credit Risk Modeling',
      description: 'Practical applications of LLMs and generative models in credit assessment, default prediction, and portfolio management.',
      pages: '42 pages',
      downloads: '2,500+',
      image: 'https://images.unsplash.com/photo-1599580546605-a86af98dbdb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MjA3OTQ2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: false
    },
    {
      id: 5,
      title: 'Model Risk Management Framework',
      description: 'Best practices for SR 11-7 compliance, model validation, and governance in the age of AI.',
      pages: '48 pages',
      downloads: '3,600+',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MjA1ODI0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: false
    },
    {
      id: 6,
      title: 'NLP Applications in Banking & Finance',
      description: 'Natural language processing use cases from sentiment analysis to automated compliance monitoring.',
      pages: '36 pages',
      downloads: '2,200+',
      image: 'https://images.unsplash.com/photo-1709120395858-92f1c7c577f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZmluYW5jZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYyMTEwODM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: false
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#007CBF] via-[#006A9C] to-[#005580] overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/10 text-white border-white/20">
              Research & Insights
            </Badge>
            <h1 className="text-white mb-6">Download Our Research on AI & Risk Management</h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Get research-backed reports and frameworks to accelerate your AI journey in finance. Free access with registration.
            </p>
          </div>
        </div>
      </section>

      {/* Whitepapers Grid */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whitepapers.map((paper) => (
              <Card key={paper.id} className="overflow-hidden hover:shadow-2xl transition-all hover-lift border-2 hover:border-[#007CBF] bg-white">
                <div className="relative h-64">
                  <ImageWithFallback
                    src={paper.image}
                    alt={paper.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  {paper.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white text-[#007CBF] border-0">
                        Featured
                      </Badge>
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3 text-white text-sm">
                      <span className="flex items-center gap-1">
                        <FileText className="h-4 w-4" />
                        {paper.pages}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Download className="h-4 w-4" />
                        {paper.downloads}
                      </span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h4 className="text-gray-900 mb-3 line-clamp-2">{paper.title}</h4>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                    {paper.description}
                  </p>
                  <Button className="w-full bg-[#007CBF] hover:bg-[#006A9C] text-white">
                    Download Now
                    <Download className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form Modal Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-8 lg:px-20">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#007CBF]/10 text-[#007CBF] border-0">
              Quick Access
            </Badge>
            <h2 className="text-gray-900 mb-4">Register Once, Access All Research</h2>
            <p className="text-xl text-gray-600">
              Fill out the form below to unlock instant access to all our whitepapers
            </p>
          </div>

          <Card className="border-2 border-gray-200 shadow-xl">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <Input 
                      placeholder="John Doe"
                      className="border-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input 
                      type="email"
                      placeholder="john@company.com"
                      className="border-gray-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Organization *
                  </label>
                  <Input 
                    placeholder="Your Company"
                    className="border-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Interest
                  </label>
                  <Select>
                    <SelectTrigger className="border-gray-300">
                      <SelectValue placeholder="What brings you here?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="individual">Individual Course</SelectItem>
                      <SelectItem value="enterprise">Enterprise Training</SelectItem>
                      <SelectItem value="advisory">Advisory Discussion</SelectItem>
                      <SelectItem value="research">Research Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="bg-[#F9FAFB] rounded-lg p-6 border border-gray-200">
                  <h4 className="text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-[#007CBF]" />
                    What you'll get:
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-[#007CBF]" />
                      Instant access to all whitepapers
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-[#007CBF]" />
                      Weekly AI insights newsletter
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-[#007CBF]" />
                      Early access to new research
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-[#007CBF]" />
                      Invitations to exclusive webinars
                    </li>
                  </ul>
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-[#007CBF] hover:bg-[#006A9C] text-white h-12"
                >
                  Get Instant Access
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting, you agree to receive communications from QuantUniversity. Unsubscribe anytime.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Thank You State Preview */}
      <section className="py-16 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto px-8 lg:px-20">
          <Card className="border-2 border-[#007CBF] shadow-xl bg-white">
            <CardContent className="p-12 text-center">
              <div className="bg-[#007CBF]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-[#007CBF]" />
              </div>
              <h3 className="text-gray-900 mb-4">Thank You! Check Your Email</h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                We've sent your whitepapers to your inbox. While you're here, explore related courses to deepen your expertise.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <Card className="border-2 hover:border-[#007CBF] transition-all hover-lift">
                  <CardContent className="p-6 text-left">
                    <h4 className="text-gray-900 mb-2">AI in Finance Masterclass</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      Turn research into practice with hands-on projects
                    </p>
                    <Button variant="outline" className="w-full border-[#007CBF] text-[#007CBF] hover:bg-[#007CBF] hover:text-white">
                      Explore Course
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border-2 hover:border-[#007CBF] transition-all hover-lift">
                  <CardContent className="p-6 text-left">
                    <h4 className="text-gray-900 mb-2">Enterprise Training</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      Upskill your entire team with custom programs
                    </p>
                    <Button variant="outline" className="w-full border-[#007CBF] text-[#007CBF] hover:bg-[#007CBF] hover:text-white">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <Button 
                variant="link" 
                className="text-[#007CBF]"
              >
                Return to Home
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
