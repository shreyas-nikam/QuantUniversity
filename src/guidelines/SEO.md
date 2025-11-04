# SEO Implementation Guide

## Overview

This guide provides comprehensive instructions for implementing and maintaining SEO best practices across the QuantUniversity website. Our SEO strategy focuses on technical optimization, content discoverability, and conversion tracking.

## Table of Contents

1. [Quick Start](#quick-start)
2. [SEO Component Usage](#seo-component-usage)
3. [Structured Data (Schema.org)](#structured-data)
4. [Analytics Integration](#analytics-integration)
5. [Image Optimization](#image-optimization)
6. [Content Guidelines](#content-guidelines)
7. [Technical SEO Checklist](#technical-seo-checklist)
8. [Configuration Files](#configuration-files)

---

## Quick Start

### 1. Adding SEO to a Page

```tsx
import { SEO } from '../components/SEO';
import { generateCourseSchema } from '../data/seo';

export function MyPage() {
  // Use predefined page SEO
  return (
    <>
      <SEO pageKey="home" />
      {/* Your page content */}
    </>
  );
}
```

### 2. Custom SEO for Dynamic Pages

```tsx
export function CourseDetailPage({ courseId }) {
  const course = getCourseById(courseId);
  
  return (
    <>
      <SEO 
        customSEO={{
          title: `${course.title} | QuantUniversity`,
          description: course.description,
          keywords: ['AI course', 'machine learning', course.category],
          ogImage: course.image,
          canonicalUrl: `/courses/${courseId}`
        }}
        structuredData={generateCourseSchema(course)}
      />
      {/* Your course content */}
    </>
  );
}
```

---

## SEO Component Usage

### Available Page Keys

The `SEO` component accepts predefined page keys from `/data/seo.ts`:

- `home` - Homepage
- `courses` - Courses listing page
- `certificate-programs` - Certificate programs page
- `how-you-learn` - Learning methodology page
- `enterprise` - Enterprise solutions page
- `thought-leadership` - Blog/insights page
- `speaking-media` - Speaking engagements page
- `about` - About us page
- `contact` - Contact page

### Props

```typescript
interface SEOProps {
  pageKey?: keyof typeof pageSEO;  // Use predefined SEO
  customSEO?: Partial<PageSEO>;     // Override or add custom SEO
  structuredData?: object | object[]; // Add Schema.org data
  noIndex?: boolean;                 // Prevent indexing (dev/staging)
}
```

### Examples

#### Basic Page

```tsx
<SEO pageKey="courses" />
```

#### Custom Meta Tags

```tsx
<SEO 
  customSEO={{
    title: 'New Course Launch | QuantUniversity',
    description: 'Join our newest AI course...',
    keywords: ['AI', 'machine learning', 'finance']
  }}
/>
```

#### With Structured Data

```tsx
<SEO 
  pageKey="courses"
  structuredData={[
    siteSEO.organizationSchema,
    generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Courses', url: '/courses' }
    ])
  ]}
/>
```

---

## Structured Data

### Available Schema Generators

#### 1. Organization Schema

Used on homepage and key pages to establish site identity:

```tsx
import { siteSEO } from '../data/seo';

<SEO structuredData={siteSEO.organizationSchema} />
```

#### 2. Course Schema

For individual course pages:

```tsx
import { generateCourseSchema } from '../data/seo';

const courseSchema = generateCourseSchema({
  title: course.title,
  description: course.description,
  instructor: course.instructor,
  price: course.price,
  rating: course.rating,
  duration: course.duration,
  level: course.level
});

<SEO structuredData={courseSchema} />
```

#### 3. Article/BlogPosting Schema

For blog articles and thought leadership content:

```tsx
import { generateArticleSchema } from '../data/seo';

const articleSchema = generateArticleSchema({
  title: article.title,
  description: article.excerpt,
  author: article.author,
  publishDate: article.date,
  modifiedDate: article.updatedDate,
  image: article.image,
  category: article.category
});

<SEO 
  customSEO={{
    author: article.author,
    publishedTime: article.date,
    section: article.category,
    tags: article.tags
  }}
  structuredData={articleSchema}
/>
```

#### 4. Breadcrumb Schema

For pages with navigation hierarchy:

```tsx
import { generateBreadcrumbSchema } from '../data/seo';

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Courses', url: '/courses' },
  { name: 'Machine Learning', url: '/courses/ml' }
]);

<SEO structuredData={breadcrumbSchema} />
```

#### 5. FAQ Schema

For pages with frequently asked questions:

```tsx
import { generateFAQSchema } from '../data/seo';

const faqSchema = generateFAQSchema([
  {
    question: 'How long is the course?',
    answer: 'The course is 8 weeks long with 3-5 hours per week.'
  },
  {
    question: 'Do I get a certificate?',
    answer: 'Yes, you receive a verified certificate upon completion.'
  }
]);

<SEO structuredData={faqSchema} />
```

### Combining Multiple Schemas

```tsx
<SEO 
  structuredData={[
    siteSEO.organizationSchema,
    generateCourseSchema(course),
    generateBreadcrumbSchema(breadcrumbs),
    generateFAQSchema(faqs)
  ]}
/>
```

---

## Analytics Integration

### Setup

1. **Update Configuration** (`/data/analytics.ts`):

```typescript
export const analyticsConfig = {
  googleAnalyticsId: 'G-XXXXXXXXXX',     // Your GA4 ID
  googleTagManagerId: 'GTM-XXXXXXX',     // Your GTM ID
  metaPixelId: 'XXXXXXXXXXXXX',          // Meta Pixel ID
  linkedInPartnerId: 'XXXXXXX'           // LinkedIn ID
};
```

2. **Wrap App with Provider** (`App.tsx`):

```tsx
import { AnalyticsProvider } from './components/AnalyticsProvider';

export default function App() {
  return (
    <AnalyticsProvider>
      {/* Your app content */}
    </AnalyticsProvider>
  );
}
```

### Using Analytics

#### In Functional Components

```tsx
import { useAnalytics } from '../components/AnalyticsProvider';
import { trackingIds } from '../data/analytics';

function CourseCard({ course }) {
  const analytics = useAnalytics();
  
  const handleEnroll = () => {
    analytics.trackCourseEnrollment(
      course.id,
      course.title,
      course.price
    );
    // Handle enrollment...
  };
  
  return (
    <button
      data-tracking-id={trackingIds.courses.courseCta(course.id)}
      onClick={handleEnroll}
    >
      Enroll Now
    </button>
  );
}
```

#### Tracking Button Clicks

```tsx
const handleClick = () => {
  analytics.trackButtonClick(
    trackingIds.home.heroCtaPrimary,
    'Explore Courses'
  );
  onNavigate('courses');
};

<Button
  data-tracking-id={trackingIds.home.heroCtaPrimary}
  onClick={handleClick}
>
  Explore Courses
</Button>
```

#### Tracking Video Views

```tsx
const handleVideoPlay = () => {
  analytics.trackVideoPlay(
    'intro-video',
    'Course Introduction'
  );
};

<video
  data-tracking-id={trackingIds.courseDetail.previewVideo}
  onPlay={handleVideoPlay}
>
  {/* Video content */}
</video>
```

#### Tracking Form Submissions

```tsx
const handleSubmit = (e) => {
  e.preventDefault();
  
  analytics.trackFormSubmit(
    'contact-form',
    'enterprise-inquiry'
  );
  
  // Handle form submission...
};
```

#### Tracking Downloads

```tsx
const handleDownload = () => {
  analytics.trackDownload(
    'whitepaper',
    'AI Risk Framework 2025'
  );
};
```

#### Tracking Social Shares

```tsx
const handleShare = (platform: string) => {
  analytics.trackSocialShare(
    platform,
    'course',
    course.id
  );
};
```

### Available Tracking IDs

All tracking IDs are centralized in `/data/analytics.ts`. Access them via:

```tsx
import { trackingIds } from '../data/analytics';

// Homepage
trackingIds.home.heroCtaPrimary
trackingIds.home.featuredCourse('ml-101')
trackingIds.home.testimonialCard(0)

// Courses
trackingIds.courses.courseCard('ml-101')
trackingIds.courses.courseCta('ml-101')

// Course Detail
trackingIds.courseDetail.enrollCta
trackingIds.courseDetail.previewVideo
trackingIds.courseDetail.shareButton('linkedin')

// Blog
trackingIds.blog.articleCard('blog-123')
trackingIds.blogDetail.shareButton('twitter')

// And many more...
```

---

## Image Optimization

### Best Practices

1. **Use Descriptive Alt Text**

```tsx
<ImageWithFallback
  src={course.image}
  alt={`${course.title} - Learn ${course.category} with QuantUniversity`}
  className="w-full h-64 object-cover"
/>
```

2. **Implement Lazy Loading**

```tsx
<img
  src={image.url}
  alt={image.alt}
  loading="lazy"
  decoding="async"
/>
```

3. **Use Appropriate Sizes**

```tsx
<ImageWithFallback
  src={heroImage}
  alt="AI Learning Platform"
  width={1920}
  height={1080}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

4. **Open Graph Images**

- Recommended size: 1200x630px
- Format: JPG or PNG
- Max file size: 8MB
- Include text overlay with branding

---

## Content Guidelines

### Page Titles

**Format**: `Primary Keyword | Secondary Keyword | QuantUniversity`

✅ Good:
- `Machine Learning for Finance Course | AI Education | QuantUniversity`
- `AI Risk Management Certificate | Professional Training | QuantUniversity`

❌ Bad:
- `Course` (too generic)
- `QuantUniversity - Machine Learning for Finance Course` (brand first)

### Meta Descriptions

- **Length**: 150-160 characters
- **Include**: Primary keyword, value proposition, call-to-action
- **Tone**: Action-oriented, benefit-focused

✅ Good:
```
Master AI and machine learning for finance. Expert-led courses, hands-on labs, 
industry-recognized certificates. Join 10,000+ professionals. Enroll today!
```

❌ Bad:
```
This is a course about machine learning.
```

### Keywords

- **Primary keyword**: Main topic (e.g., "AI courses")
- **Secondary keywords**: Related terms (e.g., "machine learning finance", "GenAI training")
- **Long-tail keywords**: Specific phrases (e.g., "best AI risk management certificate 2025")

### Content Structure

1. **H1**: One per page, include primary keyword
2. **H2-H6**: Logical hierarchy, include secondary keywords
3. **Paragraphs**: 2-3 sentences, scannable
4. **Lists**: Break up content, improve readability
5. **Internal Links**: Link to related courses, articles, pages

---

## Technical SEO Checklist

### Page Level

- [ ] Unique `<title>` tag (50-60 characters)
- [ ] Unique meta description (150-160 characters)
- [ ] Canonical URL specified
- [ ] Open Graph tags (og:title, og:description, og:image, og:url)
- [ ] Twitter Card tags
- [ ] Structured data (Schema.org JSON-LD)
- [ ] Responsive meta viewport tag
- [ ] Language attribute on `<html>` tag

### Content Level

- [ ] One H1 per page
- [ ] Logical heading hierarchy (H1 → H2 → H3)
- [ ] Alt text for all images
- [ ] Descriptive link text (avoid "click here")
- [ ] Internal linking to related content
- [ ] External links open in new tab
- [ ] No broken links

### Performance

- [ ] Images optimized and compressed
- [ ] Lazy loading for below-fold images
- [ ] Preconnect to external domains
- [ ] Minified CSS and JavaScript
- [ ] Font optimization

### Mobile

- [ ] Mobile-responsive design
- [ ] Touch-friendly buttons (min 44x44px)
- [ ] Readable font sizes (min 16px)
- [ ] No horizontal scrolling
- [ ] Fast mobile page speed

### Analytics

- [ ] Tracking ID on all buttons and CTAs
- [ ] Form submission tracking
- [ ] Video play tracking
- [ ] Download tracking
- [ ] Social share tracking
- [ ] Conversion tracking setup

---

## Configuration Files

### 1. `/data/seo.ts`

**Purpose**: Centralized SEO metadata for all pages

**Update When**:
- Adding new pages
- Changing page titles or descriptions
- Updating keywords
- Adding new structured data types

**Key Exports**:
- `siteSEO` - Site-wide configuration
- `pageSEO` - Page-specific metadata
- `generateCourseSchema()` - Course structured data
- `generateArticleSchema()` - Article structured data
- `generateBreadcrumbSchema()` - Breadcrumb navigation
- `generateFAQSchema()` - FAQ structured data

### 2. `/data/analytics.ts`

**Purpose**: Analytics configuration and tracking IDs

**Update When**:
- Adding new tracking events
- Creating new page sections
- Adding new CTAs or buttons
- Implementing new forms

**Key Exports**:
- `analyticsConfig` - Platform IDs and credentials
- `trackingIds` - Centralized tracking ID registry
- `trackEvent()` - Generic event tracking
- `trackingHelpers` - Pre-built tracking functions

### 3. `/components/SEO.tsx`

**Purpose**: SEO component for rendering meta tags

**Update When**:
- Adding new meta tag types
- Implementing new SEO features
- Changing meta tag logic

**Usage**: Import and use in page components

### 4. `/components/AnalyticsProvider.tsx`

**Purpose**: Analytics initialization and context provider

**Update When**:
- Adding new analytics platforms
- Implementing new tracking methods
- Changing initialization logic

**Usage**: Wrap app in provider, use `useAnalytics()` hook

---

## Implementation Checklist

### Phase 1: Core SEO (Priority: HIGH)

- [x] Create SEO configuration file (`/data/seo.ts`)
- [x] Create SEO component (`/components/SEO.tsx`)
- [x] Add organization schema
- [x] Create course schema generator
- [x] Create article schema generator
- [x] Create breadcrumb schema generator
- [x] Create FAQ schema generator
- [ ] Add SEO component to all pages
- [ ] Test meta tags in production
- [ ] Submit sitemap to search engines

### Phase 2: Analytics (Priority: HIGH)

- [x] Create analytics configuration (`/data/analytics.ts`)
- [x] Create analytics provider component
- [x] Define tracking IDs for all pages
- [x] Create tracking helper functions
- [ ] Update `analyticsConfig` with real IDs
- [ ] Add tracking IDs to all buttons/CTAs
- [ ] Implement form tracking
- [ ] Implement video tracking
- [ ] Test analytics in development
- [ ] Verify tracking in production

### Phase 3: Content Optimization (Priority: MEDIUM)

- [ ] Audit all page titles
- [ ] Audit all meta descriptions
- [ ] Update all image alt text
- [ ] Add internal linking between pages
- [ ] Create pillar content pages
- [ ] Optimize for featured snippets
- [ ] Add FAQ sections to key pages

### Phase 4: Technical Improvements (Priority: MEDIUM)

- [ ] Implement lazy loading for images
- [ ] Add preconnect links
- [ ] Optimize font loading
- [ ] Implement breadcrumb navigation
- [ ] Add JSON-LD structured data to all pages
- [ ] Set up canonical URLs
- [ ] Create XML sitemap
- [ ] Create robots.txt

### Phase 5: Advanced Features (Priority: LOW)

- [ ] Implement rich snippets for courses
- [ ] Add video structured data
- [ ] Implement review/rating schema
- [ ] Add person schema for Sri Krishnamurthy
- [ ] Implement event tracking for scroll depth
- [ ] Add heatmap tracking
- [ ] Implement A/B testing framework

---

## Testing and Validation

### SEO Testing Tools

1. **Google Search Console**: Monitor indexing, search performance
2. **Google Rich Results Test**: Validate structured data
3. **Schema Markup Validator**: Test Schema.org markup
4. **Facebook Sharing Debugger**: Test Open Graph tags
5. **Twitter Card Validator**: Test Twitter Card tags
6. **PageSpeed Insights**: Test performance and SEO score

### Manual Testing

```bash
# View page source and check for:
- Unique title tag
- Meta description
- Open Graph tags
- Twitter Card tags
- JSON-LD structured data
- Canonical URL
- No duplicate content
```

### Analytics Testing

```bash
# In browser console:
# Check Google Analytics
window.gtag

# Check Meta Pixel
window.fbq

# Check LinkedIn Insight
window._linkedin_partner_id

# View dataLayer
window.dataLayer
```

---

## Maintenance

### Monthly Tasks

- [ ] Review Search Console for errors
- [ ] Check analytics for broken tracking
- [ ] Update structured data if course/content changes
- [ ] Audit new pages for SEO compliance
- [ ] Review and update meta descriptions

### Quarterly Tasks

- [ ] Comprehensive SEO audit
- [ ] Update keywords based on search trends
- [ ] Review competitor SEO strategies
- [ ] Update schema markup as needed
- [ ] A/B test meta descriptions and titles

### Annual Tasks

- [ ] Complete site SEO overhaul
- [ ] Update organization schema
- [ ] Refresh all page metadata
- [ ] Implement new schema types
- [ ] Review and update analytics tracking

---

## Support and Resources

### Schema.org References

- [Schema.org Documentation](https://schema.org/)
- [Course Schema](https://schema.org/Course)
- [Article Schema](https://schema.org/Article)
- [Organization Schema](https://schema.org/Organization)
- [FAQ Schema](https://schema.org/FAQPage)

### Analytics Documentation

- [Google Analytics 4](https://support.google.com/analytics)
- [Google Tag Manager](https://support.google.com/tagmanager)
- [Meta Pixel](https://www.facebook.com/business/help/742478679120153)
- [LinkedIn Insight Tag](https://www.linkedin.com/help/lms/answer/a417880)

### SEO Best Practices

- [Google Search Central](https://developers.google.com/search)
- [Moz SEO Learning Center](https://moz.com/learn/seo)
- [Ahrefs SEO Blog](https://ahrefs.com/blog/)

---

## Questions?

For SEO implementation questions, contact:
- **Technical Lead**: [Add contact]
- **Marketing Team**: [Add contact]
- **Development Team**: [Add contact]

Last Updated: November 4, 2025
