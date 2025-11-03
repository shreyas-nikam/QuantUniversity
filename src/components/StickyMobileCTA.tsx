import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, Phone } from 'lucide-react';
import { Button } from './ui/button';

interface StickyMobileCTAProps {
  onNavigate: (page: string) => void;
}

export function StickyMobileCTA({ onNavigate }: StickyMobileCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 500px down
      if (window.scrollY > 500 && !isDismissed) {
        setIsVisible(true);
      } else if (window.scrollY <= 500) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
        >
          <div className="bg-gradient-to-r from-[#007CBF] to-[#006A9C] shadow-2xl border-t-2 border-white/20">
            <div className="px-4 py-3 flex items-center justify-between gap-3">
              <div className="flex-1">
                <p className="text-white text-sm mb-1">
                  Ready to transform your career?
                </p>
                <div className="flex items-center gap-2 text-white/90 text-xs">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                    Limited seats available
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Button 
                  size="sm"
                  className="bg-white text-[#007CBF] hover:bg-gray-100 shadow-lg h-10"
                  onClick={() => onNavigate('courses')}
                >
                  Explore
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
                
                <button
                  onClick={handleDismiss}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  aria-label="Dismiss"
                >
                  <X className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
