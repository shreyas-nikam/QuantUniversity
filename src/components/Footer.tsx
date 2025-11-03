import { GraduationCap, Linkedin, Twitter, Youtube, Mail, MapPin, Phone, Calendar } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#007CBF] p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">QuantUniversity</span>
                <p className="text-xs text-gray-400">AI & Risk Management</p>
              </div>
            </div>
            <p className="text-sm mb-6 text-gray-400">
              Empowering 10,000+ professionals across 13+ countries with world-class AI and finance education.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#007CBF] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#007CBF] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#007CBF] transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Learning Options */}
          <div>
            <h3 className="text-white font-semibold mb-4">Learning Options</h3>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => onNavigate('certificate-programs')} className="hover:text-[#007CBF] transition-colors">Certificate Programs</button></li>
              <li><button onClick={() => onNavigate('how-you-learn')} className="hover:text-[#007CBF] transition-colors">How It Works</button></li>
              <li><button onClick={() => onNavigate('certificate-programs')} className="hover:text-[#007CBF] transition-colors">Program Comparison</button></li>
            </ul>
          </div>

          {/* Programs & Courses */}
          <div>
            <h3 className="text-white font-semibold mb-4">Programs & Courses</h3>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => onNavigate('ai-risk-management')} className="hover:text-[#007CBF] transition-colors">AI & Risk Management</button></li>
              <li><button onClick={() => onNavigate('quant-finance-foundations')} className="hover:text-[#007CBF] transition-colors">Quant Finance</button></li>
              <li><button onClick={() => onNavigate('responsible-genai-cert')} className="hover:text-[#007CBF] transition-colors">Responsible GenAI</button></li>
              <li><button onClick={() => onNavigate('courses')} className="hover:text-[#007CBF] transition-colors">All Courses</button></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => onNavigate('enterprise')} className="hover:text-[#007CBF] transition-colors">Enterprise Solutions</button></li>
              <li><button onClick={() => onNavigate('speaking-media')} className="hover:text-[#007CBF] transition-colors">Speaking & Media</button></li>
              <li><button onClick={() => onNavigate('thought-leadership')} className="hover:text-[#007CBF] transition-colors">Thought Leadership</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-[#007CBF] transition-colors">About Us</button></li>
            </ul>
          </div>

          {/* Newsletter & CTA */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm mb-4 text-gray-400">Join 5,000+ professionals receiving weekly AI insights.</p>
            <div className="flex flex-col gap-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <div className="flex gap-2">
                <Button className="bg-[#007CBF] hover:bg-[#006A9C] text-white flex-1">
                  Subscribe
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white/20 text-white hover:bg-white/10 flex-shrink-0"
                  title="Book a Discovery Call"
                  onClick={() => onNavigate('contact')}
                >
                  <Calendar className="h-4 w-4" />
                </Button>
              </div>
              <Button 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10 w-full mt-2"
                onClick={() => onNavigate('contact')}
              >
                <Calendar className="h-4 w-4 mr-2" />
                Book a Discovery Call
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/10 pt-8 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-[#007CBF]" />
              <div>
                <p className="text-white">Email</p>
                <p className="text-gray-400">info@quantuniversity.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-[#007CBF]" />
              <div>
                <p className="text-white">Phone</p>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-[#007CBF]" />
              <div>
                <p className="text-white">Global Reach</p>
                <p className="text-gray-400">13+ Countries Worldwide</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; 2025 QuantUniversity, LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#007CBF] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#007CBF] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#007CBF] transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
