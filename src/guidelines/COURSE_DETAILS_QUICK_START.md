# Course Detail Pages - Quick Start Guide

Quick reference for adding course detail pages to QuantUniversity.

## Quick Add Checklist

- [ ] Add/update course data in `/data/coursesAndCertificates.ts`
- [ ] Set `hasDetailPage: true`
- [ ] Add extended fields (modules, features, testimonials, FAQs, etc.)
- [ ] Create page file in `/pages/[Name]DetailPage.tsx`
- [ ] Import component in `/App.tsx`
- [ ] Add route to PageType in `/App.tsx`
- [ ] Add case to renderPage() in `/App.tsx`
- [ ] Test the course detail page

## 1. Add Course Data

Edit `/data/coursesAndCertificates.ts`:

```typescript
'your-course-id': {
  // Basic fields (already exist)
  id: 'your-course-id',
  title: 'Your Course Title',
  description: 'Brief description',
  duration: '4 weeks',
  level: 'Beginner',
  modules: 7,
  price: 599,
  instructor: 'Instructor Name',
  rating: 4.9,
  students: 3500,
  category: 'Category',
  detailedDescription: 'Full description',
  learningOutcomes: ['Outcome 1', 'Outcome 2', ...],
  prerequisites: ['Prereq 1', 'Prereq 2', ...],
  
  // Extended fields for detail page
  hasDetailPage: true,  // REQUIRED!
  instructorTitle: 'CFA, Founder',
  instructorImage: 'SK',
  reviews: 892,
  heroImage: 'https://image-url.jpg',
  badge: 'Best Seller',
  tagline: 'Course tagline for hero',
  keyOutcome: 'By the end...',
  
  courseModules: [
    {
      title: 'Module 1: Title',
      duration: '1 week',
      lessons: 5,
      topics: ['Topic 1', 'Topic 2', ...]
    },
    // ... more modules
  ],
  
  features: [
    { emoji: '🎥', title: 'Videos', description: 'HD content' },
    // ... 6 features recommended
  ],
  
  testimonials: [
    {
      name: 'John Doe',
      role: 'Data Scientist',
      company: 'Google',
      rating: 5,
      text: 'Great course!',
      image: 'JD'
    },
    // ... 3 testimonials recommended
  ],
  
  faqs: [
    {
      question: 'Question?',
      answer: 'Answer...',
      links: [{ text: 'Link', url: '#' }]
    },
    // ... 4-6 FAQs recommended
  ],
  
  stats: {
    completionRate: 92,
    avgSalaryIncrease: '+$18K',
    careerAdvancement: '71%',
    studentSatisfaction: 98
  },
  
  includes: [
    'Lifetime access',
    'Certificate',
    // ... 6-8 items
  ],
  
  relatedCourseIds: ['course-1', 'course-2', 'course-3']
}
```

## 2. Create Page Component

Create `/pages/YourCourseDetailPage.tsx`:

```typescript
import { CourseDetailPageComponent } from '../components/CourseDetailPageComponent';
import { courses } from '../data/coursesAndCertificates';

interface YourCourseDetailPageProps {
  onNavigate: (page: string) => void;
}

export function YourCourseDetailPage({ onNavigate }: YourCourseDetailPageProps) {
  const course = courses['your-course-id'];
  
  return <CourseDetailPageComponent course={course} onNavigate={onNavigate} />;
}
```

## 3. Add Route

Edit `/App.tsx`:

```typescript
// 1. Import
import { YourCourseDetailPage } from './pages/YourCourseDetailPage';

// 2. Add to PageType
type PageType = '...' | 'your-course-detail';

// 3. Add case in renderPage()
case 'your-course-detail':
  return <YourCourseDetailPage onNavigate={handleNavigate} />;
```

## Field Reference

### Required Fields
- `id`: Course ID (kebab-case)
- `title`: Course name
- `description`: Brief description
- `duration`: Course length
- `level`: Beginner/Intermediate/Advanced
- `modules`: Number (just count)
- `price`: Number (dollars)
- `instructor`: Name
- `rating`: 1-5
- `students`: Number enrolled
- `category`: Category name
- `detailedDescription`: Full text
- `learningOutcomes`: Array of strings
- `prerequisites`: Array of strings
- **`hasDetailPage: true`** - Enable detail page

### Recommended Extended Fields
- `instructorTitle`: Credentials
- `instructorImage`: Initials or URL
- `reviews`: Number of reviews
- `badge`: 'Best Seller', 'Popular', 'New'
- `tagline`: Hero tagline
- `keyOutcome`: Main transformation
- `courseModules`: Detailed curriculum
- `features`: 6 feature objects
- `testimonials`: 3 testimonial objects
- `faqs`: 4-6 FAQ objects
- `stats`: Stats object (optional)
- `includes`: What's in enrollment
- `relatedCourseIds`: Related course IDs

## Data Structure Templates

### Module
```typescript
{
  title: 'Module X: Name',
  duration: '1-2 weeks',
  lessons: 5-10,
  topics: ['Topic 1', 'Topic 2', ...]  // 4-8 topics
}
```

### Feature
```typescript
{ 
  emoji: '🎥',  // Use standard emojis
  title: 'Feature Name',  // Short
  description: 'Brief desc'  // Very short
}
```

**Common Emojis:**
- 🎥 Videos
- 🧪 Labs/Exercises
- 📊 Projects
- 🏆 Certificate
- 💬 Live Sessions
- 📥 Downloads

### Testimonial
```typescript
{
  name: 'Full Name',
  role: 'Job Title',
  company: 'Company Name',
  rating: 5,  // 1-5
  text: 'Keep under 200 chars',
  image: 'XX'  // Initials
}
```

### FAQ
```typescript
{
  question: 'Clear question?',
  answer: 'Complete but concise answer.',
  links: [  // Optional
    { text: 'Link text', url: '#' }
  ]
}
```

**Common FAQs:**
- Time commitment?
- Prior experience needed?
- Tools/software required?
- Enterprise teams?
- Certificate?
- Refund policy?

### Stats (Optional)
```typescript
{
  completionRate: 85,  // Percentage
  avgSalaryIncrease: '+$15K',  // String
  careerAdvancement: '65%',  // String
  studentSatisfaction: 96  // Percentage
}
```

## Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| Course ID | kebab-case | `ml-trading-finance` |
| File Name | PascalCase + DetailPage.tsx | `MLTradingFinanceDetailPage.tsx` |
| Component | PascalCase + DetailPage | `MLTradingFinanceDetailPage` |
| Route Name | kebab-case | `ml-trading-finance` |

## Content Guidelines

| Field | Recommendation |
|-------|----------------|
| Modules | 4-8 modules |
| Topics per module | 4-8 topics |
| Features | Exactly 6 (grid layout) |
| Testimonials | Exactly 3 (best display) |
| FAQs | 4-6 questions |
| Includes | 6-8 items |
| Related Courses | 3-4 courses |

## Examples

### Existing Course Detail Pages
- `ml-trading-finance` - Machine Learning for Trading & Finance
- `intro-genai` - Introduction to Generative AI

See `/data/coursesAndCertificates.ts` for full data.

### Example Page Components
- `/pages/MLTradingFinanceCourseDetailPage.tsx`
- `/pages/IntroGenAICourseDetailPageNew.tsx`

## Common Mistakes

❌ **Don't:**
- Forget to set `hasDetailPage: true`
- Use different course ID in page vs. data
- Leave courseModules empty (curriculum won't show)
- Use more/less than 6 features (layout optimized for 6)
- Write testimonials over 200 chars

✅ **Do:**
- Test on mobile and desktop
- Use consistent naming (kebab-case IDs)
- Include all recommended fields
- Write clear, concise content
- Link to existing courses for related courses

## Testing Checklist

After adding a course detail page:

1. ✓ Page loads without errors
2. ✓ Hero section displays correctly
3. ✓ Instructor info shows
4. ✓ Enrollment card renders
5. ✓ Video modal opens
6. ✓ All tabs work
7. ✓ Modules expand/collapse
8. ✓ Testimonials display
9. ✓ FAQs expand
10. ✓ Related courses show (if applicable)
11. ✓ Certificate callout (if in certificate)
12. ✓ Responsive on mobile
13. ✓ Back button works

## Quick Troubleshooting

| Issue | Solution |
|-------|----------|
| Page doesn't load | Check `hasDetailPage: true` is set |
| Modules don't show | Verify `courseModules` array exists and is formatted correctly |
| No certificate callout | Check course is in a certificate's `courseIds` |
| Related courses missing | Verify `relatedCourseIds` has valid IDs |
| Layout broken | Check you have exactly 6 features |

## Need More Details?

See `/guidelines/GenerateCourseDetails.md` for comprehensive documentation including:
- Complete field explanations
- Full working example
- Migration guide
- Advanced customization
- Architecture details
