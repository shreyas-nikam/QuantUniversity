# SEO & Analytics Implementation Checklist

## ✅ Completed Tasks

### Configuration Files Created

- [x] `/data/seo.ts` - SEO metadata and structured data generators
- [x] `/data/analytics.ts` - Analytics configuration and tracking IDs
- [x] `/components/SEO.tsx` - SEO component for meta tags
- [x] `/components/AnalyticsProvider.tsx` - Analytics initialization and context
- [x] `/guidelines/SEO.md` - Comprehensive SEO documentation

### Core Infrastructure

- [x] Site-wide SEO configuration defined
- [x] Page-specific SEO metadata templates
- [x] Schema.org structured data generators
  - [x] Organization schema
  - [x] Course schema
  - [x] Article/BlogPosting schema
  - [x] Breadcrumb schema
  - [x] FAQ schema
- [x] Analytics tracking ID registry
- [x] Event tracking helper functions
- [x] Analytics context provider

---

## 🔧 Required Configuration Updates

### Step 1: Update Analytics IDs

**File**: `/data/analytics.ts` (Lines 8-13)

Replace placeholder IDs with your actual platform IDs:

```typescript
export const analyticsConfig = {
  googleAnalyticsId: 'G-XXXXXXXXXX',    // ⚠️ UPDATE: Your GA4 Measurement ID
  googleTagManagerId: 'GTM-XXXXXXX',    // ⚠️ UPDATE: Your GTM Container ID
  metaPixelId: 'XXXXXXXXXXXXX',         // ⚠️ UPDATE: Your Meta Pixel ID
  linkedInPartnerId: 'XXXXXXX',         // ⚠️ UPDATE: Your LinkedIn Partner ID
  
  conversionIds: {
    courseEnrollment: 'CONV-001',       // ⚠️ UPDATE: Your conversion tracking IDs
    certificateEnrollment: 'CONV-002',
    enterpriseInquiry: 'CONV-003',
    newsletterSignup: 'CONV-004',
    downloadWhitepaper: 'CONV-005',
    bookConsultation: 'CONV-006',
    watchVideo: 'CONV-007'
  }
};
```

**Where to find IDs**:
- **Google Analytics**: Admin → Data Streams → Measurement ID
- **Google Tag Manager**: Admin → Container ID (top of page)
- **Meta Pixel**: Events Manager → Data Sources → Pixel ID
- **LinkedIn**: Campaign Manager → Account Assets → Insight Tag

---

### Step 2: Update Site URLs and Social Handles

**File**: `/data/seo.ts` (Lines 24-30)

Verify and update these values:

```typescript
export const siteSEO = {
  siteName: 'QuantUniversity',
  siteUrl: 'https://www.quantuniversity.com',      // ✅ Verify production URL
  defaultOgImage: 'https://www.quantuniversity.com/og-default.jpg',  // ⚠️ UPDATE: Add actual image
  twitterHandle: '@QuantUniversity',                // ✅ Verify Twitter handle
  founder: 'Sri Krishnamurthy, CFA',
  foundedYear: '2007',
  // ...
};
```

**Action Items**:
- [ ] Create default Open Graph image (1200x630px)
- [ ] Upload to `/public/og-default.jpg`
- [ ] Update `defaultOgImage` path
- [ ] Verify Twitter handle

---

### Step 3: Wrap App with Providers

**File**: `/App.tsx`

Add the analytics and SEO providers:

```tsx
import { AnalyticsProvider } from './components/AnalyticsProvider';
import { PreconnectLinks } from './components/SEO';

export default function App() {
  return (
    <AnalyticsProvider>
      <PreconnectLinks />
      {/* Existing app content */}
    </AnalyticsProvider>
  );
}
```

**Status**: ⚠️ REQUIRED - Must be done before analytics work

---

## 📄 Page-by-Page Implementation

### Homepage (`/pages/HomePage.tsx`)

**Priority**: 🔴 HIGH

#### Add SEO Component

```tsx
import { SEO } from '../components/SEO';
import { siteSEO } from '../data/seo';

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      <SEO 
        pageKey="home"
        structuredData={siteSEO.organizationSchema}
      />
      {/* Existing content */}
    </>
  );
}
```

#### Add Tracking IDs

Elements to track:
- [ ] Hero CTA - "Explore Courses" button
  - Tracking ID: `trackingIds.home.heroCtaPrimary`
- [ ] Hero CTA - "View Programs" button
  - Tracking ID: `trackingIds.home.heroCtaSecondary`
- [ ] Featured course cards (all 4)
  - Tracking ID: `trackingIds.home.featuredCourse(courseId)`
- [ ] Certificate program CTA
  - Tracking ID: `trackingIds.home.certificateCta`
- [ ] Enterprise CTA
  - Tracking ID: `trackingIds.home.enterpriseCta`
- [ ] Meet Sri video
  - Tracking ID: `trackingIds.home.meetSriVideo`
- [ ] Testimonial cards
  - Tracking ID: `trackingIds.home.testimonialCard(index)`
- [ ] Partner logos
  - Tracking ID: `trackingIds.home.partnerLogo(partnerId)`
- [ ] Footer newsletter signup
  - Tracking ID: `trackingIds.home.footerNewsletter`

**Example Implementation**:

```tsx
import { useAnalytics } from '../components/AnalyticsProvider';
import { trackingIds } from '../data/analytics';

function HomePage({ onNavigate }) {
  const analytics = useAnalytics();
  
  const handleExploreCourses = () => {
    analytics.trackButtonClick(
      trackingIds.home.heroCtaPrimary,
      'Explore Courses'
    );
    onNavigate('courses');
  };
  
  return (
    <>
      <SEO pageKey="home" structuredData={siteSEO.organizationSchema} />
      
      <Button
        data-tracking-id={trackingIds.home.heroCtaPrimary}
        onClick={handleExploreCourses}
      >
        Explore Courses
      </Button>
      {/* Rest of page */}
    </>
  );
}
```

---

### Courses Page (`/pages/CoursesPage.tsx`)

**Priority**: 🔴 HIGH

#### Add SEO Component

```tsx
import { SEO } from '../components/SEO';
import { siteSEO, generateBreadcrumbSchema } from '../data/seo';

export function CoursesPage({ onNavigate }: CoursesPageProps) {
  return (
    <>
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
      {/* Existing content */}
    </>
  );
}
```

#### Add Tracking IDs

Elements to track:
- [ ] Search input
  - Tracking ID: `trackingIds.courses.searchInput`
- [ ] Category filters
  - Tracking ID: `trackingIds.courses.filterCategory(category)`
- [ ] Difficulty filters
  - Tracking ID: `trackingIds.courses.filterDifficulty(level)`
- [ ] Sort dropdown
  - Tracking ID: `trackingIds.courses.sortBy(sortType)`
- [ ] Course cards
  - Tracking ID: `trackingIds.courses.courseCard(courseId)`
- [ ] Course CTAs ("View Details" / "Start Learning")
  - Tracking ID: `trackingIds.courses.courseCta(courseId)`
- [ ] Certificate banner
  - Tracking ID: `trackingIds.courses.certificateBanner`
- [ ] "How You Learn" CTA
  - Tracking ID: `trackingIds.courses.howYouLearnCta`
- [ ] Enterprise CTA
  - Tracking ID: `trackingIds.courses.enterpriseCta`

---

### Course Detail Pages

**Priority**: 🔴 HIGH

#### Machine Learning Course (`/pages/CourseDetailPage.tsx`)

```tsx
import { SEO } from '../components/SEO';
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from '../data/seo';

export function CourseDetailPage({ onNavigate }: CourseDetailPageProps) {
  const course = courses['ml-trading-finance'];
  
  return (
    <>
      <SEO 
        customSEO={{
          title: `${course.title} | Expert-Led AI Course | QuantUniversity`,
          description: course.detailedDescription,
          keywords: ['machine learning', 'AI finance', 'trading algorithms', 'quant finance'],
          ogImage: 'https://www.quantuniversity.com/og-ml-course.jpg',
          canonicalUrl: '/courses/machine-learning-trading-finance'
        }}
        structuredData={[
          generateCourseSchema(course),
          generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Courses', url: '/courses' },
            { name: course.title, url: '/courses/ml-trading-finance' }
          ]),
          generateFAQSchema(faqs.map(faq => ({
            question: faq.question,
            answer: faq.answer
          })))
        ]}
      />
      {/* Existing content */}
    </>
  );
}
```

#### Intro to GenAI Course (`/pages/IntroGenAICourseDetailPage.tsx`)

- [ ] Add SEO component with course schema
- [ ] Add breadcrumb schema
- [ ] Add FAQ schema
- [ ] Add tracking IDs to all buttons

#### Tracking IDs for Course Details

Elements to track:
- [ ] Enroll CTA (main)
  - Tracking ID: `trackingIds.courseDetail.enrollCta`
- [ ] Sticky enroll CTA
  - Tracking ID: `trackingIds.courseDetail.stickyEnrollCta`
- [ ] Preview video
  - Tracking ID: `trackingIds.courseDetail.previewVideo`
- [ ] Module accordions
  - Tracking ID: `trackingIds.courseDetail.moduleAccordion(moduleIndex)`
- [ ] Tab switches
  - Tracking ID: `trackingIds.courseDetail.tabSwitch(tabName)`
- [ ] Download syllabus
  - Tracking ID: `trackingIds.courseDetail.downloadSyllabus`
- [ ] Share buttons
  - Tracking ID: `trackingIds.courseDetail.shareButton(platform)`
- [ ] Related courses
  - Tracking ID: `trackingIds.courseDetail.relatedCourse(courseId)`
- [ ] FAQ expansions
  - Tracking ID: `trackingIds.courseDetail.faqExpand(faqIndex)`

---

### Certificate Programs Page (`/pages/CertificateProgramsPage.tsx`)

**Priority**: 🔴 HIGH

```tsx
import { SEO } from '../components/SEO';
import { siteSEO, generateBreadcrumbSchema } from '../data/seo';

export function CertificateProgramsPage({ onNavigate }: CertificateProgramsPageProps) {
  return (
    <>
      <SEO 
        pageKey="certificate-programs"
        structuredData={[
          siteSEO.organizationSchema,
          generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Certificate Programs', url: '/certificate-programs' }
          ])
        ]}
      />
      {/* Existing content */}
    </>
  );
}
```

Elements to track:
- [ ] Filter dropdowns (track, duration, format)
- [ ] Program cards
- [ ] "View Program" CTAs
- [ ] Compare programs feature
- [ ] Enterprise CTA

---

### Certificate Detail Pages

**Priority**: 🔴 HIGH

All certificate detail pages:
- `/pages/ResponsibleGenAICertPage.tsx`
- `/pages/AIRiskManagementCertPage.tsx`
- `/pages/QuantFinanceFoundationsCertPage.tsx`

```tsx
import { SEO } from '../components/SEO';
import { generateBreadcrumbSchema } from '../data/seo';

// Add to each certificate page
<SEO 
  customSEO={{
    title: `${certificate.title} | Professional Certificate | QuantUniversity`,
    description: certificate.description,
    keywords: [certificate.track, 'certificate', 'professional training'],
    canonicalUrl: `/certificates/${certificate.id}`
  }}
  structuredData={generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Certificate Programs', url: '/certificate-programs' },
    { name: certificate.title, url: `/certificates/${certificate.id}` }
  ])}
/>
```

Elements to track:
- [ ] Enroll CTA
- [ ] Course modals
- [ ] "View Course Details" links
- [ ] Download brochure
- [ ] Share buttons
- [ ] Testimonial slides

---

### Blog/Thought Leadership (`/pages/ThoughtLeadershipPage.tsx`)

**Priority**: 🟡 MEDIUM

```tsx
import { SEO } from '../components/SEO';
import { siteSEO, generateBreadcrumbSchema } from '../data/seo';

export function ThoughtLeadershipPage({ onNavigate }: ThoughtLeadershipPageProps) {
  return (
    <>
      <SEO 
        pageKey="thought-leadership"
        structuredData={[
          siteSEO.organizationSchema,
          generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Insights', url: '/insights' }
          ])
        ]}
      />
      {/* Existing content */}
    </>
  );
}
```

Elements to track:
- [ ] Category filters
- [ ] Search input
- [ ] Article cards
- [ ] Featured article
- [ ] Newsletter signup
- [ ] Lead magnet download

---

### Blog Article Detail (`/pages/BlogArticlePage.tsx`)

**Priority**: 🟡 MEDIUM

```tsx
import { SEO } from '../components/SEO';
import { generateArticleSchema, generateBreadcrumbSchema } from '../data/seo';

export function BlogArticlePage({ onNavigate }: BlogArticlePageProps) {
  const article = getArticleBySlug(slug);
  
  return (
    <>
      <SEO 
        customSEO={{
          title: `${article.title} | QuantUniversity Insights`,
          description: article.excerpt,
          keywords: article.tags,
          author: article.author,
          publishedTime: article.date,
          section: article.category,
          tags: article.tags,
          ogImage: article.image,
          canonicalUrl: `/insights/${article.slug}`
        }}
        structuredData={[
          generateArticleSchema({
            title: article.title,
            description: article.excerpt,
            author: article.author,
            publishDate: article.date,
            image: article.image,
            category: article.category
          }),
          generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Insights', url: '/insights' },
            { name: article.title, url: `/insights/${article.slug}` }
          ])
        ]}
      />
      {/* Existing content */}
    </>
  );
}
```

Elements to track:
- [ ] Share buttons (LinkedIn, Twitter, Facebook, copy link)
- [ ] Author LinkedIn
- [ ] Related articles
- [ ] Mid-article CTA
- [ ] Bottom CTA
- [ ] Download infographic

---

### Enterprise Page (`/pages/EnterprisePage.tsx`)

**Priority**: 🟡 MEDIUM

```tsx
<SEO 
  pageKey="enterprise"
  structuredData={generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Enterprise Solutions', url: '/enterprise' }
  ])}
/>
```

Elements to track:
- [ ] Hero "Book Call" CTA
- [ ] Solution cards
- [ ] Testimonial slides
- [ ] Case study downloads
- [ ] PRMIA section
- [ ] Calendly embed
- [ ] Contact form

---

### How You Learn Page (`/pages/HowYouLearnPage.tsx`)

**Priority**: 🟡 MEDIUM

```tsx
<SEO 
  pageKey="how-you-learn"
  structuredData={generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'How You Learn', url: '/how-you-learn' }
  ])}
/>
```

Elements to track:
- [ ] Explore/Experience/Excel cards
- [ ] Platform logos (QuCreate, QuSkillbridge)
- [ ] Testimonial slides
- [ ] "Browse Learning Paths" CTA

---

### About Page (`/pages/AboutPage.tsx`)

**Priority**: 🟢 LOW

```tsx
<SEO 
  pageKey="about"
  structuredData={[
    siteSEO.organizationSchema,
    generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'About', url: '/about' }
    ])
  ]}
/>
```

Elements to track:
- [ ] Founder video
- [ ] Timeline milestones
- [ ] Vision/mission tiles
- [ ] Join CTA
- [ ] Social links

---

### Contact Page (`/pages/ContactPage.tsx`)

**Priority**: 🟢 LOW

```tsx
<SEO 
  pageKey="contact"
  structuredData={generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' }
  ])}
/>
```

Elements to track:
- [ ] Inquiry type cards
- [ ] Contact form submission
- [ ] "Book Call" CTA
- [ ] Map location pins
- [ ] FAQ accordion

---

### Speaking & Media Page (`/pages/SpeakingMediaPage.tsx`)

**Priority**: 🟢 LOW

```tsx
<SEO 
  pageKey="speaking-media"
  structuredData={generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Speaking & Media', url: '/speaking' }
  ])}
/>
```

Elements to track:
- [ ] "Book Speaker" CTA
- [ ] Media appearances
- [ ] Topic cards
- [ ] Testimonial slides
- [ ] Download speaker kit

---

## 🎨 Image SEO Tasks

### Create Open Graph Images

**Specifications**:
- Size: 1200x630px
- Format: JPG or PNG
- Max file size: 1MB
- Include QuantUniversity branding

**Required Images**:
- [ ] Default OG image (`/public/og-default.jpg`)
- [ ] Homepage OG image (`/public/og-home.jpg`)
- [ ] Courses page OG image (`/public/og-courses.jpg`)
- [ ] ML course OG image (`/public/og-ml-course.jpg`)
- [ ] GenAI course OG image (`/public/og-genai-course.jpg`)
- [ ] Certificate programs OG image (`/public/og-certificates.jpg`)
- [ ] Blog default OG image (`/public/og-blog.jpg`)

### Update Image Alt Text

Audit all pages for:
- [ ] Descriptive alt text on all images
- [ ] Include keywords where natural
- [ ] Describe image content for accessibility

---

## 🔍 Header & Footer Updates

### Header Component (`/components/Header.tsx`)

Add tracking to:
- [ ] Logo click
  - Tracking ID: `trackingIds.header.logo`
- [ ] Navigation links
  - Tracking ID: `trackingIds.header.navLink(page)`
- [ ] Mobile menu toggle
  - Tracking ID: `trackingIds.header.mobileMenu`
- [ ] CTA button
  - Tracking ID: `trackingIds.header.ctaButton`

### Footer Component (`/components/Footer.tsx`)

Add tracking to:
- [ ] All footer links
  - Tracking ID: `trackingIds.footer.link(section, linkName)`
- [ ] Newsletter signup
  - Tracking ID: `trackingIds.footer.newsletter`
- [ ] "Book Call" button
  - Tracking ID: `trackingIds.footer.bookCall`
- [ ] Social links
  - Tracking ID: `trackingIds.footer.socialLink(platform)`

---

## 📊 Testing & Validation

### Before Launch

- [ ] Test all meta tags with browser inspector
- [ ] Validate structured data with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Test Open Graph tags with [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Test Twitter Cards with [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [ ] Verify analytics firing with browser console
- [ ] Test on mobile devices
- [ ] Check page speed with [PageSpeed Insights](https://pagespeed.web.dev/)

### After Launch

- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify Google Analytics tracking
- [ ] Verify Meta Pixel tracking
- [ ] Verify LinkedIn Insight Tag tracking
- [ ] Monitor Search Console for errors
- [ ] Set up Analytics dashboards
- [ ] Set up conversion tracking goals

---

## 📝 Additional Files to Create

### Sitemap.xml

Create `/public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.quantuniversity.com/</loc>
    <lastmod>2025-11-04</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.quantuniversity.com/courses</loc>
    <lastmod>2025-11-04</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <!-- Add all pages -->
</urlset>
```

### Robots.txt

Create `/public/robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://www.quantuniversity.com/sitemap.xml
```

---

## 🎯 Priority Summary

### Week 1 (🔴 Critical)
1. Update analytics IDs in `/data/analytics.ts`
2. Wrap App with AnalyticsProvider
3. Add SEO component to Homepage
4. Add SEO component to Courses page
5. Add SEO component to Course Detail pages
6. Create Open Graph images
7. Test tracking in development

### Week 2 (🔴 High Priority)
1. Add tracking IDs to Homepage CTAs
2. Add tracking IDs to Courses page
3. Add tracking IDs to Course Detail pages
4. Add SEO to Certificate pages
5. Submit sitemap to search engines
6. Verify analytics in production

### Week 3 (🟡 Medium Priority)
1. Add SEO to Blog pages
2. Add SEO to Enterprise page
3. Add tracking to all remaining pages
4. Audit image alt text
5. Set up conversion tracking

### Week 4 (🟢 Lower Priority)
1. Add SEO to About page
2. Add SEO to Contact page
3. Add SEO to Speaking page
4. Optimize images
5. Create comprehensive analytics dashboards

---

## 📞 Support Contacts

**Technical Issues**:
- File location: `/guidelines/SEO.md`
- Configuration: `/data/seo.ts` and `/data/analytics.ts`

**Questions**:
- Refer to SEO.md documentation
- Check implementation examples above
- Review Schema.org documentation

Last Updated: November 4, 2025
Version: 1.0
