# SEO & Analytics Quick Start Guide

## 🚀 5-Minute Setup

### 1. Update Your Analytics IDs

**File**: `/data/analytics.ts` (Lines 8-11)

```typescript
export const analyticsConfig = {
  googleAnalyticsId: 'G-YOUR-ID-HERE',
  googleTagManagerId: 'GTM-YOUR-ID-HERE',
  metaPixelId: 'YOUR-PIXEL-ID-HERE',
  linkedInPartnerId: 'YOUR-PARTNER-ID-HERE'
};
```

### 2. Wrap Your App

**File**: `/App.tsx`

```tsx
import { AnalyticsProvider } from './components/AnalyticsProvider';
import { PreconnectLinks } from './components/SEO';

export default function App() {
  return (
    <AnalyticsProvider>
      <PreconnectLinks />
      {/* Your existing app content */}
    </AnalyticsProvider>
  );
}
```

### 3. Add SEO to a Page

```tsx
import { SEO } from '../components/SEO';

export function YourPage() {
  return (
    <>
      <SEO pageKey="home" />
      {/* Your page content */}
    </>
  );
}
```

### 4. Track a Button Click

```tsx
import { useAnalytics } from '../components/AnalyticsProvider';
import { trackingIds } from '../data/analytics';

function YourComponent() {
  const analytics = useAnalytics();
  
  const handleClick = () => {
    analytics.trackButtonClick(
      trackingIds.home.heroCtaPrimary,
      'Explore Courses'
    );
    // Your button action
  };
  
  return (
    <button
      data-tracking-id={trackingIds.home.heroCtaPrimary}
      onClick={handleClick}
    >
      Explore Courses
    </button>
  );
}
```

---

## 📖 Available Page Keys

Use these with `<SEO pageKey="..." />`

| Page Key | Page |
|----------|------|
| `home` | Homepage |
| `courses` | Courses listing |
| `certificate-programs` | Certificate programs |
| `how-you-learn` | Learning methodology |
| `enterprise` | Enterprise solutions |
| `thought-leadership` | Blog/insights |
| `speaking-media` | Speaking engagements |
| `about` | About us |
| `contact` | Contact page |

---

## 🎯 Common Tracking Scenarios

### Track Course Enrollment

```tsx
analytics.trackCourseEnrollment(
  course.id,
  course.title,
  course.price
);
```

### Track Video Play

```tsx
analytics.trackVideoPlay(
  'intro-video',
  'Course Introduction'
);
```

### Track Form Submit

```tsx
analytics.trackFormSubmit(
  'contact-form',
  'enterprise-inquiry'
);
```

### Track Download

```tsx
analytics.trackDownload(
  'whitepaper',
  'AI Risk Framework 2025'
);
```

### Track Social Share

```tsx
analytics.trackSocialShare(
  'linkedin',    // platform
  'course',      // content type
  course.id      // content ID
);
```

---

## 🏗️ Structured Data Examples

### Course Page

```tsx
import { generateCourseSchema } from '../data/seo';

<SEO 
  customSEO={{
    title: `${course.title} | QuantUniversity`,
    description: course.description,
    canonicalUrl: `/courses/${course.id}`
  }}
  structuredData={generateCourseSchema(course)}
/>
```

### Blog Article

```tsx
import { generateArticleSchema } from '../data/seo';

<SEO 
  customSEO={{
    title: article.title,
    description: article.excerpt,
    author: article.author,
    publishedTime: article.date
  }}
  structuredData={generateArticleSchema(article)}
/>
```

### With Breadcrumbs

```tsx
import { generateBreadcrumbSchema } from '../data/seo';

<SEO 
  pageKey="courses"
  structuredData={generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Courses', url: '/courses' }
  ])}
/>
```

### With FAQ

```tsx
import { generateFAQSchema } from '../data/seo';

<SEO 
  structuredData={generateFAQSchema([
    {
      question: 'How long is the course?',
      answer: 'The course is 8 weeks long.'
    }
  ])}
/>
```

---

## 🆔 Finding Tracking IDs

All tracking IDs are in `/data/analytics.ts` under `trackingIds`

### Common Patterns

```tsx
// Homepage
trackingIds.home.heroCtaPrimary
trackingIds.home.featuredCourse(courseId)
trackingIds.home.testimonialCard(index)

// Courses
trackingIds.courses.courseCard(courseId)
trackingIds.courses.courseCta(courseId)

// Course Detail
trackingIds.courseDetail.enrollCta
trackingIds.courseDetail.previewVideo

// Blog
trackingIds.blog.articleCard(articleId)
trackingIds.blogDetail.shareButton(platform)

// Header/Footer
trackingIds.header.navLink(page)
trackingIds.footer.link(section, linkName)
```

---

## ⚡ Quick Checklist for New Pages

1. [ ] Add `<SEO pageKey="..." />` at top of component
2. [ ] Add structured data if applicable (course, article, breadcrumbs, FAQ)
3. [ ] Add `data-tracking-id` to all buttons and links
4. [ ] Call appropriate tracking function on click/submit
5. [ ] Test meta tags in browser inspector
6. [ ] Validate structured data with Google Rich Results Test

---

## 🐛 Troubleshooting

### Analytics not firing?

1. Check browser console for errors
2. Verify IDs in `/data/analytics.ts`
3. Confirm AnalyticsProvider wraps your app
4. Check `window.gtag` or `window.fbq` in console

### Meta tags not showing?

1. View page source (not inspector)
2. Check SEO component is before content
3. Verify pageKey exists in `/data/seo.ts`
4. Hard refresh browser (Ctrl+Shift+R)

### Structured data errors?

1. Validate with [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Check schema generator functions
3. Ensure all required fields are provided
4. Verify JSON-LD is valid

---

## 📚 Full Documentation

- **Complete Guide**: `/guidelines/SEO.md`
- **Implementation Checklist**: `/SEO_IMPLEMENTATION_CHECKLIST.md`
- **Config Files**: `/data/seo.ts` and `/data/analytics.ts`
- **Components**: `/components/SEO.tsx` and `/components/AnalyticsProvider.tsx`

---

## 🎓 Learn More

- [Schema.org Documentation](https://schema.org/)
- [Google Analytics 4](https://support.google.com/analytics)
- [Google Search Central](https://developers.google.com/search)

---

Last Updated: November 4, 2025
