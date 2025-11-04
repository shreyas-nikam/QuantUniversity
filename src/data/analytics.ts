/**
 * Analytics Configuration
 * Centralized tracking IDs and event definitions
 */

export const analyticsConfig = {
  // Analytics Platform IDs
  googleAnalyticsId: 'G-XXXXXXXXXX', // Replace with actual GA4 ID
  googleTagManagerId: 'GTM-XXXXXXX', // Replace with actual GTM ID
  metaPixelId: 'XXXXXXXXXXXXX', // Replace with actual Meta Pixel ID
  linkedInPartnerId: 'XXXXXXX', // Replace with actual LinkedIn Partner ID
  
  // Conversion Tracking
  conversionIds: {
    courseEnrollment: 'CONV-001',
    certificateEnrollment: 'CONV-002',
    enterpriseInquiry: 'CONV-003',
    newsletterSignup: 'CONV-004',
    downloadWhitepaper: 'CONV-005',
    bookConsultation: 'CONV-006',
    watchVideo: 'CONV-007'
  }
};

/**
 * Analytics Event Categories
 */
export const EventCategory = {
  NAVIGATION: 'Navigation',
  ENGAGEMENT: 'Engagement',
  CONVERSION: 'Conversion',
  SOCIAL: 'Social',
  VIDEO: 'Video',
  DOWNLOAD: 'Download',
  FORM: 'Form'
} as const;

/**
 * Page-specific tracking IDs for elements
 */
export const trackingIds = {
  // Homepage
  home: {
    heroCtaPrimary: 'home-hero-cta-explore-courses',
    heroCtaSecondary: 'home-hero-cta-view-programs',
    featuredCourse: (courseId: string) => `home-featured-course-${courseId}`,
    certificateCta: 'home-certificate-cta',
    enterpriseCta: 'home-enterprise-cta',
    meetSriVideo: 'home-meet-sri-video',
    testimonialCard: (index: number) => `home-testimonial-${index}`,
    partnerLogo: (partnerId: string) => `home-partner-${partnerId}`,
    footerNewsletter: 'home-footer-newsletter',
    footerBookCall: 'home-footer-book-call'
  },
  
  // Courses Page
  courses: {
    filterCategory: (category: string) => `courses-filter-category-${category}`,
    filterDifficulty: (level: string) => `courses-filter-difficulty-${level}`,
    sortBy: (sortType: string) => `courses-sort-${sortType}`,
    courseCard: (courseId: string) => `courses-card-${courseId}`,
    courseCta: (courseId: string) => `courses-cta-${courseId}`,
    certificateBanner: 'courses-certificate-banner',
    howYouLearnCta: 'courses-how-you-learn-cta',
    enterpriseCta: 'courses-enterprise-cta',
    searchInput: 'courses-search-input'
  },
  
  // Course Detail Page
  courseDetail: {
    enrollCta: 'course-detail-enroll-cta',
    stickyEnrollCta: 'course-detail-sticky-enroll-cta',
    previewVideo: 'course-detail-preview-video',
    moduleAccordion: (moduleIndex: number) => `course-detail-module-${moduleIndex}`,
    tabSwitch: (tabName: string) => `course-detail-tab-${tabName}`,
    downloadSyllabus: 'course-detail-download-syllabus',
    shareButton: (platform: string) => `course-detail-share-${platform}`,
    relatedCourse: (courseId: string) => `course-detail-related-${courseId}`,
    faqExpand: (faqIndex: number) => `course-detail-faq-${faqIndex}`,
    certificateLink: (certId: string) => `course-detail-cert-link-${certId}`
  },
  
  // Certificate Programs Page
  certificates: {
    filterTrack: (track: string) => `certificates-filter-track-${track}`,
    filterDuration: (duration: string) => `certificates-filter-duration-${duration}`,
    filterFormat: (format: string) => `certificates-filter-format-${format}`,
    programCard: (certId: string) => `certificates-card-${certId}`,
    programCta: (certId: string) => `certificates-cta-${certId}`,
    comparePrograms: 'certificates-compare-programs',
    enterpriseCta: 'certificates-enterprise-cta'
  },
  
  // Certificate Detail Page
  certificateDetail: {
    enrollCta: 'cert-detail-enroll-cta',
    stickyEnrollCta: 'cert-detail-sticky-enroll-cta',
    courseModal: (courseId: string) => `cert-detail-course-modal-${courseId}`,
    viewCourseDetails: (courseId: string) => `cert-detail-view-course-${courseId}`,
    downloadBrochure: 'cert-detail-download-brochure',
    shareButton: (platform: string) => `cert-detail-share-${platform}`,
    testimonialSlide: (index: number) => `cert-detail-testimonial-${index}`
  },
  
  // Blog/Thought Leadership
  blog: {
    filterCategory: (category: string) => `blog-filter-category-${category}`,
    searchInput: 'blog-search-input',
    articleCard: (articleId: string) => `blog-article-card-${articleId}`,
    featuredArticle: (articleId: string) => `blog-featured-${articleId}`,
    authorFilter: (author: string) => `blog-author-${author}`,
    subscribeNewsletter: 'blog-subscribe-newsletter',
    downloadLeadMagnet: 'blog-download-lead-magnet'
  },
  
  // Blog Article Detail
  blogDetail: {
    shareButton: (platform: string) => `article-share-${platform}`,
    copyLink: 'article-copy-link',
    authorLinkedIn: 'article-author-linkedin',
    relatedArticle: (articleId: string) => `article-related-${articleId}`,
    midArticleCta: 'article-mid-cta',
    bottomCta: 'article-bottom-cta',
    commentSection: 'article-comments',
    downloadInfographic: 'article-download-infographic'
  },
  
  // Enterprise Page
  enterprise: {
    heroBookCall: 'enterprise-hero-book-call',
    solutionCard: (solutionId: string) => `enterprise-solution-${solutionId}`,
    testimonialSlide: (index: number) => `enterprise-testimonial-${index}`,
    caseStudyDownload: (caseStudyId: string) => `enterprise-case-study-${caseStudyId}`,
    prmiaSection: 'enterprise-prmia-section',
    calendlyEmbed: 'enterprise-calendly-embed',
    contactForm: 'enterprise-contact-form'
  },
  
  // About Page
  about: {
    founderVideo: 'about-founder-video',
    timelineMilestone: (year: string) => `about-timeline-${year}`,
    visionTile: (tileId: string) => `about-vision-${tileId}`,
    teamMember: (memberId: string) => `about-team-${memberId}`,
    joinCta: 'about-join-cta',
    socialLink: (platform: string) => `about-social-${platform}`
  },
  
  // Contact Page
  contact: {
    inquiryCard: (type: string) => `contact-inquiry-${type}`,
    formSubmit: 'contact-form-submit',
    bookCall: 'contact-book-call',
    mapPin: (location: string) => `contact-map-${location}`,
    faqAccordion: (index: number) => `contact-faq-${index}`
  },
  
  // How You Learn Page
  howYouLearn: {
    exploreCard: 'how-you-learn-explore',
    experienceCard: 'how-you-learn-experience',
    excelCard: 'how-you-learn-excel',
    platformLogo: (platform: string) => `how-you-learn-platform-${platform}`,
    testimonialSlide: (index: number) => `how-you-learn-testimonial-${index}`,
    browsePaths: 'how-you-learn-browse-paths'
  },
  
  // Speaking & Media Page
  speaking: {
    bookSpeaker: 'speaking-book-speaker',
    mediaAppearance: (mediaId: string) => `speaking-media-${mediaId}`,
    topicCard: (topicId: string) => `speaking-topic-${topicId}`,
    testimonialSlide: (index: number) => `speaking-testimonial-${index}`,
    downloadSpeakerKit: 'speaking-download-kit'
  },
  
  // Header Navigation
  header: {
    logo: 'header-logo',
    navLink: (page: string) => `header-nav-${page}`,
    mobileMenu: 'header-mobile-menu',
    ctaButton: 'header-cta-button'
  },
  
  // Footer
  footer: {
    link: (section: string, linkName: string) => `footer-${section}-${linkName}`,
    newsletter: 'footer-newsletter-submit',
    bookCall: 'footer-book-call',
    socialLink: (platform: string) => `footer-social-${platform}`
  }
};

/**
 * Analytics Event Definitions
 */
export interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
  nonInteraction?: boolean;
}

/**
 * Helper function to track events
 * This will be implemented in the analytics service
 */
export function trackEvent(event: AnalyticsEvent): void {
  // Implementation will depend on analytics platform
  if (typeof window !== 'undefined') {
    try {
      // Google Analytics 4
      if ((window as any).gtag) {
        (window as any).gtag('event', event.action, {
          event_category: event.category,
          event_label: event.label,
          value: event.value,
          non_interaction: event.nonInteraction
        });
      }
      
      // Meta Pixel
      if ((window as any).fbq) {
        (window as any).fbq('trackCustom', event.action, {
          category: event.category,
          label: event.label
        });
      }
      
      // Console log for development
      console.log('Analytics Event:', event);
    } catch (error) {
      console.warn('Error tracking analytics event:', error);
    }
  }
}

/**
 * Pre-defined event helpers
 */
export const trackingHelpers = {
  // Navigation
  trackPageView: (pageName: string, pageUrl: string) => {
    trackEvent({
      category: EventCategory.NAVIGATION,
      action: 'page_view',
      label: pageName
    });
  },
  
  // Engagement
  trackButtonClick: (buttonId: string, buttonText: string) => {
    trackEvent({
      category: EventCategory.ENGAGEMENT,
      action: 'button_click',
      label: `${buttonId}:${buttonText}`
    });
  },
  
  trackVideoPlay: (videoId: string, videoTitle: string) => {
    trackEvent({
      category: EventCategory.VIDEO,
      action: 'video_play',
      label: `${videoId}:${videoTitle}`
    });
  },
  
  trackFormSubmit: (formName: string, formType: string) => {
    trackEvent({
      category: EventCategory.FORM,
      action: 'form_submit',
      label: `${formName}:${formType}`
    });
  },
  
  // Conversions
  trackCourseEnrollment: (courseId: string, courseTitle: string, price: number) => {
    trackEvent({
      category: EventCategory.CONVERSION,
      action: 'course_enrollment',
      label: `${courseId}:${courseTitle}`,
      value: price
    });
  },
  
  trackDownload: (resourceType: string, resourceName: string) => {
    trackEvent({
      category: EventCategory.DOWNLOAD,
      action: 'resource_download',
      label: `${resourceType}:${resourceName}`
    });
  },
  
  // Social
  trackSocialShare: (platform: string, contentType: string, contentId: string) => {
    trackEvent({
      category: EventCategory.SOCIAL,
      action: 'social_share',
      label: `${platform}:${contentType}:${contentId}`
    });
  }
};
