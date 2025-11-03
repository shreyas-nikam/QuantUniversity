import { motion } from 'motion/react';
import { partners, Partner } from '../data/partners';

interface PartnerLogosProps {
  category?: Partner['category'];
  className?: string;
  animate?: boolean;
}

export function PartnerLogos({ category, className = '', animate = true }: PartnerLogosProps) {
  const displayPartners = category 
    ? partners.filter(p => p.category === category)
    : partners;

  const LogoGrid = () => (
    <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 ${className}`}>
      {displayPartners.map((partner, index) => (
        <motion.div
          key={partner.name}
          initial={animate ? { opacity: 0, y: 20 } : undefined}
          whileInView={animate ? { opacity: 1, y: 0 } : undefined}
          viewport={animate ? { once: true } : undefined}
          transition={animate ? { delay: index * 0.05 } : undefined}
          className="flex items-center justify-center p-6 bg-white rounded-lg border border-gray-200 hover:border-[#007CBF] transition-all hover:shadow-md group"
        >
          <p className="text-center text-sm text-gray-600 group-hover:text-[#007CBF] transition-colors">
            {partner.name}
          </p>
        </motion.div>
      ))}
    </div>
  );

  return <LogoGrid />;
}

// Scrolling ticker version for hero sections
export function PartnerLogosTicker({ category, speed = 30 }: { category?: Partner['category']; speed?: number }) {
  const displayPartners = category 
    ? partners.filter(p => p.category === category)
    : partners;

  // Duplicate for seamless loop
  const duplicatedPartners = [...displayPartners, ...displayPartners];

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        <motion.div
          className="flex gap-8 items-center"
          animate={{
            x: [0, -1000],
          }}
          transition={{
            x: {
              duration: speed,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {duplicatedPartners.map((partner, index) => (
            <div 
              key={`${partner.name}-${index}`}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center h-20 min-w-[160px] border border-white/20 flex-shrink-0"
            >
              <span className="text-white text-sm text-center font-medium whitespace-nowrap">{partner.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
