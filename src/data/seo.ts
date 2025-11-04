/**
 * SEO Configuration
 * Centralized SEO metadata for all pages
 */

export interface PageSEO {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

export const siteSEO = {
  siteName: 'QuantUniversity',
  siteUrl: 'https://www.quantuniversity.com',
  defaultOgImage: 'https://www.quantuniversity.com/og-default.jpg',
  twitterHandle: '@QuantUniversity',
  founder: 'Sri Krishnamurthy, CFA',
  foundedYear: '2007',
  organizationSchema: {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    'name': 'QuantUniversity',
    'url': 'https://www.quantuniversity.com',
    'logo': 'https://www.quantuniversity.com/logo.png',
    'description': 'Leading AI & Finance education platform founded by Sri Krishnamurthy, CFA. Trusted by 10,000+ professionals globally.',
    'founder': {
      '@type': 'Person',
      'name': 'Sri Krishnamurthy',
      'jobTitle': 'Founder & CEO',
      'credential': 'CFA'
    },
    'address': {
      '@type': 'PostalAddress',
      'addressCountry': 'US'
    },
    'contactPoint': {
      '@type': 'ContactPoint',
      'contactType': 'Customer Service',
      'email': 'info@quantuniversity.com'
    },
    'sameAs': [
      'https://www.linkedin.com/company/quantuniversity',
      'https://twitter.com/QuantUniversity',
      'https://www.youtube.com/c/QuantUniversity'
    ]
  }
};

export const pageSEO: Record<string, PageSEO> = {
  home: {
    title: 'QuantUniversity - AI & Finance Education by Sri Krishnamurthy, CFA',
    description: 'Master AI, Machine Learning, and Quantitative Finance with expert-led courses. Founded by Sri Krishnamurthy, CFA. Trusted by 10,000+ professionals at top financial institutions.',
    keywords: ['AI education', 'machine learning finance', 'quantitative finance', 'Sri Krishnamurthy', 'financial AI courses', 'generative AI finance', 'risk management', 'algorithmic trading'],
    ogType: 'website',
    canonicalUrl: '/'
  },
  courses: {
    title: 'AI & Finance Courses - Machine Learning, Risk, Quant Trading | QuantUniversity',
    description: 'Explore 20+ expert-led courses in AI, Machine Learning, Quantitative Finance, and Risk Management. Learn from industry practitioners. Earn certificates recognized by employers.',
    keywords: ['AI courses', 'machine learning courses', 'finance courses', 'risk management courses', 'quant finance training', 'GenAI courses', 'algorithmic trading courses'],
    ogType: 'website',
    canonicalUrl: '/courses'
  },
  'certificate-programs': {
    title: 'Professional Certificate Programs in AI & Finance | QuantUniversity',
    description: 'Earn industry-recognized certificates in AI Risk Management, Responsible GenAI, and Quantitative Finance. Structured learning paths for career advancement.',
    keywords: ['AI certificate', 'finance certificate', 'professional certification', 'AI risk management', 'generative AI certificate', 'quant finance certification'],
    ogType: 'website',
    canonicalUrl: '/certificate-programs'
  },
  'how-you-learn': {
    title: 'How You Learn - Explore, Experience, Excel Framework | QuantUniversity',
    description: 'Discover our proven learning methodology: expert content, hands-on labs, and real-world case studies. Powered by AI, available 24/7. Learn at your own pace.',
    keywords: ['online learning', 'AI-powered education', 'hands-on labs', 'experiential learning', 'financial education', 'self-paced learning'],
    ogType: 'website',
    canonicalUrl: '/how-you-learn'
  },
  enterprise: {
    title: 'Enterprise AI & Finance Training Solutions | QuantUniversity',
    description: 'Upskill your teams with customized AI and finance training programs. Trusted by Fortune 500 companies. 150+ professionals trained across 13 countries.',
    keywords: ['enterprise training', 'corporate AI training', 'finance team training', 'custom learning solutions', 'B2B education', 'workplace training'],
    ogType: 'website',
    canonicalUrl: '/enterprise'
  },
  'thought-leadership': {
    title: 'AI & Finance Insights by Sri Krishnamurthy | QuantUniversity Blog',
    description: 'Expert insights on AI, Machine Learning, and Finance from Sri Krishnamurthy and industry leaders. Stay ahead with cutting-edge research and practical applications.',
    keywords: ['AI insights', 'finance blog', 'machine learning articles', 'generative AI', 'risk management insights', 'thought leadership'],
    ogType: 'blog',
    canonicalUrl: '/insights'
  },
  'speaking-media': {
    title: 'Sri Krishnamurthy - AI & Finance Speaker, Media Appearances | QuantUniversity',
    description: 'Book Sri Krishnamurthy, CFA for speaking engagements on AI, Risk Management, and Financial Technology. Featured speaker at global conferences.',
    keywords: ['AI speaker', 'finance speaker', 'Sri Krishnamurthy speaker', 'conference speaker', 'keynote speaker', 'fintech speaker'],
    ogType: 'website',
    canonicalUrl: '/speaking'
  },
  about: {
    title: 'About QuantUniversity - Founded by Sri Krishnamurthy, CFA',
    description: 'Since 2007, QuantUniversity has been democratizing AI and finance education. Learn about our mission, founder Sri Krishnamurthy, and our global impact.',
    keywords: ['about QuantUniversity', 'Sri Krishnamurthy', 'education mission', 'AI education history', 'finance education platform'],
    ogType: 'website',
    canonicalUrl: '/about'
  },
  contact: {
    title: 'Contact QuantUniversity - Get in Touch for Courses & Enterprise Solutions',
    description: 'Have questions about our courses or enterprise solutions? Contact QuantUniversity for personalized guidance. Book a discovery call with our team.',
    keywords: ['contact QuantUniversity', 'course inquiry', 'enterprise inquiry', 'support', 'book consultation'],
    ogType: 'website',
    canonicalUrl: '/contact'
  }
};

/**
 * Generate structured data for blog articles
 */
export function generateArticleSchema(article: {
  title: string;
  description: string;
  author: string;
  publishDate: string;
  modifiedDate?: string;
  image?: string;
  category: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': article.title,
    'description': article.description,
    'image': article.image || siteSEO.defaultOgImage,
    'datePublished': article.publishDate,
    'dateModified': article.modifiedDate || article.publishDate,
    'author': {
      '@type': 'Person',
      'name': article.author
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'QuantUniversity',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.quantuniversity.com/logo.png'
      }
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': siteSEO.siteUrl
    },
    'articleSection': article.category
  };
}

/**
 * Generate breadcrumb structured data
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': `${siteSEO.siteUrl}${item.url}`
    }))
  };
}

/**
 * Generate FAQ structured data
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };
}

/**
 * Generate Course structured data
 */
export function generateCourseSchema(course: {
  title: string;
  description: string;
  instructor: string;
  price: number;
  rating: number;
  duration: string;
  level: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    'name': course.title,
    'description': course.description,
    'provider': {
      '@type': 'Organization',
      'name': 'QuantUniversity',
      'sameAs': 'https://www.quantuniversity.com'
    },
    'instructor': {
      '@type': 'Person',
      'name': course.instructor
    },
    'offers': {
      '@type': 'Offer',
      'price': course.price,
      'priceCurrency': 'USD',
      'availability': 'https://schema.org/InStock',
      'url': siteSEO.siteUrl
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': course.rating,
      'bestRating': 5,
      'ratingCount': 100
    },
    'educationalLevel': course.level,
    'timeRequired': course.duration
  };
}
