# QuantUniversity Website - Maintenance Guide
**Last Updated**: November 4, 2025

## Overview

This guide explains how to add new content (articles, courses, certificates, testimonials) without modifying component code. All content is centralized in the `/data` folder for easy maintenance.

## 📘 Specialized Guides

For detailed instructions on specific topics:
- **Adding Certificate Programs**: See `/guidelines/GenerateCertificates.md` (comprehensive guide)
- **Quick Certificate Reference**: See `/guidelines/CERTIFICATE_QUICK_START.md` (quick checklist)
- **Adding Course Detail Pages**: See `/guidelines/GenerateCourseDetails.md` (comprehensive guide)
- **Quick Course Details Reference**: See `/guidelines/COURSE_DETAILS_QUICK_START.md` (quick checklist)

---

## Quick Start: Adding New Content

### 1. Adding a New Blog Article / Thought Leadership Post

**File**: `/data/articles.ts`

Simply add a new object to the `articles` array:

```typescript
{
  id: 'unique-slug-or-number',
  title: 'Your Article Title',
  excerpt: 'Brief description that appears on cards (1-2 sentences)',
  image: 'https://your-image-url.jpg',
  authorImage: 'https://author-image-url.jpg',
  author: 'Author Name',
  date: 'MMM DD, YYYY',
  readTime: 'X min read',
  category: 'Choose from: Technical Insights, AI & Risk, Model Risk, Credit Risk, Generative AI, GenAI, Workforce Development, MLOps',
  featured: true, // Optional: shows "Featured" badge
  views: 1234, // Optional: shows view count
  tags: ['Tag1', 'Tag2', 'Tag3'] // Optional: shows at bottom of card
}
```

**Where it appears**:
- HomePage: Recent articles section (first 4)
- ThoughtLeadershipPage: All articles with filtering
- Any page using `<ArticleCard>` component

---

### 2. Adding a New Course

**📚 For course detail pages, see `/guidelines/GenerateCourseDetails.md`**
**⚡ For quick reference, see `/guidelines/COURSE_DETAILS_QUICK_START.md`**

**Quick Summary**:

**File**: `/data/coursesAndCertificates.ts`

Add a new course to the `courses` object:

```typescript
'your-course-slug': {
  id: 'your-course-slug',
  title: 'Course Title',
  description: 'Short description for cards',
  duration: 'X weeks',
  level: 'Beginner' | 'Intermediate' | 'Advanced',
  modules: 8,
  price: 599,
  instructor: 'Instructor Name',
  rating: 4.8,
  students: 2500,
  category: 'Category Name',
  detailedDescription: 'Full course description for detail pages',
  learningOutcomes: ['Outcome 1', 'Outcome 2', 'Outcome 3'],
  prerequisites: ['Prerequisite 1', 'Prerequisite 2'],
  
  // Optional: For course detail pages, add:
  hasDetailPage: true,
  courseModules: [...],
  features: [...],
  testimonials: [...],
  faqs: [...],
  // See course detail guides for full reference
}
```

**Where it appears**:
- CoursesPage: All courses listing
- Certificate pages: As part of certificate bundles
- Course detail pages: Individual detailed pages (if hasDetailPage: true)

---

### 3. Adding a New Certificate Program

**📚 For comprehensive instructions, see `/guidelines/GenerateCertificates.md`**
**⚡ For quick reference, see `/guidelines/CERTIFICATE_QUICK_START.md`**

**Quick Summary**:

**Step 1**: Add certificate data to `/data/coursesAndCertificates.ts`

```typescript
'certificate-slug': {
  id: 'certificate-slug',
  title: 'Certificate Program Title',
  shortDescription: 'Brief description for cards',
  description: 'Full description for detail pages',
  track: 'AI' | 'Risk' | 'Quant',
  duration: 'X weeks',
  format: 'Self-Paced' | 'Cohort-Based',
  savings: '20%',
  color: 'from-blue-500 to-blue-600', // Tailwind gradient
  price: 2499,
  courseIds: ['course-slug-1', 'course-slug-2', 'course-slug-3'],
  featured: true,
  outcomes: ['Learning outcome 1', 'Learning outcome 2'],
  recognizedBy: ['Company 1', 'Company 2']
}
```

**Step 2**: Create page file `/pages/YourCertificateCertPage.tsx`
**Step 3**: Add route to `/App.tsx`

**Where it appears**:
- CertificateProgramsPage: All certificates listing
- HomePage: Featured certificates
- Individual certificate detail pages (auto-generated from data)

---

### 4. Adding a New Testimonial

**File**: `/data/testimonials.ts`

Add a new testimonial to the `testimonials` array:

```typescript
{
  id: 7,
  quote: "The testimonial quote text goes here.",
  author: "Person Name",
  role: "Job Title", // Optional
  company: "Company Name", // Optional
  rating: 5 // Optional: 1-5 stars
}
```

**Where it appears**:
- HomePage: Rotating testimonials
- AboutPage: Customer testimonials section
- Any page using `<TestimonialCard>` component

---

### 5. Adding a New Partner / Client Logo

**File**: `/data/partners.ts`

Add a new partner to the `partners` array:

```typescript
{ 
  name: 'Partner Name', 
  category: 'client' | 'association' | 'technology' 
}
```

**Where it appears**:
- HomePage: Partner logos section
- AboutPage: Trusted by section
- Any page using `<PartnerLogos>` component

---

## Component Architecture

### Reusable Components

All reusable components are in `/components`:

#### Content Display Components
- **`ArticleCard.tsx`** - Displays blog posts/articles with hover effects
- **`TestimonialCard.tsx`** - Displays customer testimonials
- **`CourseCard.tsx`** - Displays individual courses
- **`PartnerLogos.tsx`** - Displays partner/client logos

#### Layout Components
- **`Header.tsx`** - Navigation header (uses data from pages for routing)
- **`Footer.tsx`** - Site footer with links and newsletter
- **`StickyMobileCTA.tsx`** - Mobile call-to-action bar

### Data Flow

```
/data/*.ts (Source of Truth)
    ↓
Pages import data
    ↓
Pages pass data to Components
    ↓
Components render with consistent styling
```

**Key Principle**: Never hard-code content in components. Always import from `/data` files.

---

## File Structure

```
/data
├── articles.ts              ← All blog posts/articles
├── coursesAndCertificates.ts ← All courses and certificates
├── testimonials.ts          ← All testimonials
└── partners.ts              ← All partner logos

/components
├── ArticleCard.tsx          ← Reusable article display
├── TestimonialCard.tsx      ← Reusable testimonial display
├── CourseCard.tsx           ← Reusable course display
├── PartnerLogos.tsx         ← Reusable partner logos
└── [other layout components]

/pages
├── HomePage.tsx             ← Imports data, uses components
├── ThoughtLeadershipPage.tsx ← Imports articles data
├── CoursesPage.tsx          ← Imports courses data
├── CertificateProgramsPage.tsx ← Imports certificates data
└── [other pages]
```

---

## Best Practices

### DO ✅

1. **Add new content to data files** - Always update `/data/*.ts` files
2. **Use helper functions** - Each data file includes helpers like `getFeaturedArticles()`, `getRecentArticles(count)`
3. **Keep IDs unique** - Use descriptive slugs for courses/certificates, sequential numbers for testimonials
4. **Test locally** - Verify new content appears correctly on all relevant pages
5. **Use consistent categories** - Stick to existing category names for proper styling

### DON'T ❌

1. **Don't hard-code content in pages** - Always import from data files
2. **Don't duplicate data** - If content needs to appear in multiple places, source it from one data file
3. **Don't modify component code** - Components are designed to work with data structure
4. **Don't change data interfaces** - If you need new fields, add them as optional properties
5. **Don't skip images** - Always provide valid image URLs (use Unsplash if needed)

---

## Common Tasks

### Update Homepage Featured Content

**Edit**: `/pages/HomePage.tsx`

Change which data is displayed:

```typescript
// Show different articles
const displayedArticles = getRecentArticles(3); // Change count

// Show different certificates
const displayedCerts = getAllCertificates().filter(c => c.featured);
```

### Add New Article Category

1. **Add to data**: `/data/articles.ts` - Use new category name
2. **Add styling**: `/components/ArticleCard.tsx` - Add to `categoryColors` object

```typescript
const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  // existing categories...
  'New Category': { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-300' }
};
```

### Connect Course to Multiple Certificates

**Edit**: `/data/coursesAndCertificates.ts`

Simply add the course ID to multiple certificate `courseIds` arrays:

```typescript
// Course can be reused across certificates
'certificate-1': {
  // ...
  courseIds: ['shared-course', 'course-2']
},
'certificate-2': {
  // ...
  courseIds: ['shared-course', 'course-3']
}
```

---

## Troubleshooting

### New content not showing?

1. **Check the data file** - Ensure you saved your changes
2. **Check the ID** - IDs must be unique
3. **Check imports** - Page must import the data file
4. **Check filters** - Some pages filter by `featured`, `category`, etc.

### Styling looks wrong?

1. **Check category spelling** - Must match exactly in `categoryColors`
2. **Check image URLs** - Broken images can affect layout
3. **Check required fields** - All required fields must be provided

### Need a new field?

1. **Add to interface** - Update the TypeScript interface in data file
2. **Make it optional** - Add `?` to avoid breaking existing data
3. **Update component** - Add rendering logic to component if needed

```typescript
// In data file
export interface Article {
  // existing fields...
  newField?: string; // Optional to avoid breaking existing data
}

// In component
{article.newField && <div>{article.newField}</div>}
```

---

## Performance Tips

1. **Image optimization** - Use appropriately sized images (max 1920px width)
2. **Lazy loading** - Components use Motion for viewport-based loading
3. **Data pagination** - For large datasets, consider using `slice()` or pagination
4. **Caching** - Helper functions can be memoized if performance issues arise

---

## Migration from Old System

If you have hard-coded content in pages:

1. **Extract data** - Copy content to appropriate data file
2. **Import data** - Add import statement to page
3. **Map over data** - Replace hard-coded JSX with `.map()` over data
4. **Use components** - Replace custom card JSX with `<ArticleCard>`, etc.

**Example**:

```typescript
// OLD ❌
<div>
  <h3>Hard-coded Article Title</h3>
  <p>Hard-coded description</p>
</div>

// NEW ✅
import { articles } from '../data/articles';
import { ArticleCard } from '../components/ArticleCard';

{articles.map(article => (
  <ArticleCard key={article.id} article={article} />
))}
```

---

## Support

For questions about:
- **Data structure**: Check TypeScript interfaces in data files
- **Components**: Check component prop interfaces
- **Styling**: Check DesignSystem.md
- **Best practices**: Re-read this guide

Remember: **The easier it is to add content, the more valuable the platform becomes.**
