// Central data source for all testimonials
// To add new testimonials, simply add them to this array

export interface Testimonial {
  id?: number;
  quote: string;
  author?: string;  // Made optional for flexibility
  name?: string;    // Some pages use 'name' instead of 'author'
  role?: string;
  title?: string;   // Some pages use 'title' instead of 'role'
  company?: string;
  org?: string;     // Some pages use 'org' instead of 'company'
  image?: string;
  logo?: string;    // For company logos
  rating?: number;
  text?: string;    // Some pages use 'text' instead of 'quote'
  // Additional fields for specific pages
  vertical?: string;
  hasCertificate?: boolean;
  hasLinkedIn?: boolean;
  isSri?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "QuantUniversity transformed our team's AI capabilities in just 3 months. The practical, hands-on approach made the difference.",
    author: "Sarah Johnson",
    role: "VP of Risk",
    company: "Top 10 Bank",
    rating: 5
  },
  {
    id: 2,
    quote: "Sri's approach to teaching AI in finance is unmatched in the industry. Our team now deploys production-ready models with confidence.",
    author: "Michael Chen",
    role: "Chief Data Officer",
    company: "Asset Manager",
    rating: 5
  },
  {
    id: 3,
    quote: "The ROI on our enterprise program was evident within the first quarter. Highly recommended for any financial institution.",
    author: "Jennifer Martinez",
    role: "Head of Learning",
    company: "Global Financial Services",
    rating: 5
  },
  {
    id: 4,
    quote: "Best investment in my career. The AI & Risk Management certificate opened doors I didn't know existed.",
    author: "David Kumar",
    role: "Risk Analyst",
    company: "Goldman Sachs",
    rating: 5
  },
  {
    id: 5,
    quote: "The Quant Finance program gave me the mathematical rigor and practical skills to transition into quantitative trading.",
    author: "Emily Zhang",
    role: "Quantitative Trader",
    company: "Hedge Fund",
    rating: 5
  },
  {
    id: 6,
    quote: "Comprehensive, practical, and immediately applicable. The GenAI course exceeded all my expectations.",
    author: "Robert Williams",
    role: "ML Engineer",
    company: "JPMorgan Chase",
    rating: 5
  }
];

// Helper functions
export const getRandomTestimonials = (count: number = 3): Testimonial[] => {
  const shuffled = [...testimonials].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const getTestimonialById = (id: number): Testimonial | undefined => {
  return testimonials.find(t => t.id === id);
};

export const getAllTestimonials = (): Testimonial[] => testimonials;
