# How to Add New Course Detail Pages

This guide explains how to add course detail pages to the QuantUniversity website using our component-based architecture.

## Overview

The course detail page system uses a data-driven approach where all course content is defined in a single TypeScript file (`/data/coursesAndCertificates.ts`), and rendered using a reusable component (`/components/CourseDetailPageComponent.tsx`). This makes it easy to add new course detail pages without duplicating code.

## Architecture

### Data Flow
```
┌───────────────────────────────────────────────────┐
│ /data/coursesAndCertificates.ts                   │
│ ┌────────────────────────────────────────────────┐│
│ │  courses: {                                    ││
│ │    'course-id': {                              ││
│ │      Basic fields (id, title, price, etc.)     ││
│ │      Extended fields (modules, features, etc.) ││
│ │      hasDetailPage: true                       ││
│ │    }                                            ││
│ │  }                                              ││
│ └────────────────────────────────────────────────┘│
└───────────────────────────────────────────────────┘
                    ↓
┌───────────────────────────────────────────────────┐
│ /pages/YourCourseDetailPage.tsx                   │
│ - Imports course data by ID                       │
│ - Passes to CourseDetailPageComponent             │
└───────────────────────────────────────────────────┘
                    ↓
┌───────────────────────────────────────────────────┐
│ /components/CourseDetailPageComponent.tsx         │
│ - Renders hero with course info                   │
│ - Displays modules in accordion                   │
│ - Shows features, testimonials, FAQs              │
│ - Generates related courses section               │
│ - Handles all modals & interactions               │
└───────────────────────────────────────────────────┘
                    ↓
┌───────────────────────────────────────────────────┐
│ User sees fully rendered course detail page       │
│ with all features & content                       │
└───────────────────────────────────────────────────┘
```

### Routing Architecture
```
User clicks course link
         ↓
App.tsx receives route (e.g., 'ml-trading-finance')
         ↓
Renders MLTradingFinanceCourseDetailPage
         ↓
Page component fetches courses['ml-trading-finance']
         ↓
Passes to CourseDetailPageComponent
         ↓
Component auto-generates detail page with all features
         ↓
Fully rendered course detail page
```

## Step-by-Step Guide

### Step 1: Add/Update Course Definition

In `/data/coursesAndCertificates.ts`, add or update your course with the extended fields:

```typescript
'your-course-id': {
  // Basic fields (required)
  id: 'your-course-id',
  title: 'Your Course Title',
  description: 'Brief description for cards',
  duration: '4 weeks',
  level: 'Beginner' | 'Intermediate' | 'Advanced',
  modules: 7,
  price: 599,
  instructor: 'Instructor Name',
  rating: 4.9,
  students: 3500,
  category: 'Machine Learning',
  detailedDescription: 'Full course description',
  learningOutcomes: [
    'Outcome 1',
    'Outcome 2',
    'Outcome 3'
  ],
  prerequisites: [
    'Prerequisite 1',
    'Prerequisite 2'
  ],
  
  // Extended fields for detail pages
  hasDetailPage: true,  // IMPORTANT: Set to true
  instructorTitle: 'CFA, CAP, Founder of QuantUniversity',
  instructorImage: 'SK',  // Initials or image URL
  reviews: 892,  // Number of reviews
  heroImage: 'https://image-url.jpg',  // Hero background image
  badge: 'Best Seller',  // Badge text (e.g., 'Best Seller', 'Popular', 'New')
  tagline: 'Comprehensive tagline for the hero section',
  keyOutcome: 'By the end of this course, you\'ll be able to...',
  
  // Course modules (detailed curriculum)
  courseModules: [
    {
      title: 'Module 1: Introduction',
      duration: '1 week',
      lessons: 5,
      topics: [
        'Topic 1',
        'Topic 2',
        'Topic 3'
      ]
    },
    // ... more modules
  ],
  
  // Course features (with emojis)
  features: [
    { emoji: '🎥', title: '40+ Video Lectures', description: 'HD video content' },
    { emoji: '🧪', title: '10+ Labs', description: 'Hands-on exercises' },
    // ... more features
  ],
  
  // Student testimonials
  testimonials: [
    {
      name: 'John Doe',
      role: 'Data Scientist',
      company: 'Google',
      rating: 5,
      text: 'Amazing course! Really practical.',
      image: 'JD'  // Initials or image URL
    },
    // ... more testimonials
  ],
  
  // FAQs
  faqs: [
    {
      question: 'What is the time commitment?',
      answer: 'Expect 6-8 hours per week...',
      links: [
        { text: 'View schedule', url: '#' }
      ]
    },
    // ... more FAQs
  ],
  
  // Course statistics (optional)
  stats: {
    completionRate: 92,
    avgSalaryIncrease: '+$18K',
    careerAdvancement: '71%',
    studentSatisfaction: 98
  },
  
  // What's included (enrollment card)
  includes: [
    'Lifetime access to all course materials',
    '40+ HD video lectures',
    'Certificate of completion',
    '30-day money-back guarantee'
  ],
  
  // Related courses (by ID)
  relatedCourseIds: ['course-1-id', 'course-2-id', 'course-3-id']
}
```

### Step 2: Create Course Detail Page Component

Create a new page file in `/pages/` named `[YourCourse]DetailPage.tsx`:

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

**Naming Convention:**
- File: `[CourseName]DetailPage.tsx` (PascalCase)
- Component: `[CourseName]DetailPage` (PascalCase)
- Example: `MLTradingFinanceCourseDetailPage.tsx` → `MLTradingFinanceCourseDetailPage`

### Step 3: Add Route to App.tsx

Add your new course detail page to the routing system in `/App.tsx`:

1. **Import the component:**
```typescript
import { YourCourseDetailPage } from './pages/YourCourseDetailPage';
```

2. **Add to PageType:**
```typescript
type PageType = 'home' | 'courses' | ... | 'your-course-detail';
```

3. **Add case to renderPage():**
```typescript
case 'your-course-detail':
  return <YourCourseDetailPage onNavigate={handleNavigate} />;
```

**Route Naming Convention:**
- Use kebab-case for routes
- Add '-detail' or course-specific suffix
- Examples:
  - 'ml-trading-finance'
  - 'intro-genai-course'
  - 'risk-modeling-course'

### Step 4: Link from Courses Page (Optional)

If you want the course to link to its detail page from the courses listing page, you'll need to add a click handler or navigation logic in the CoursesPage component.

## Field Reference

### Basic Course Fields (Already exists for all courses)
- `id`: Unique identifier
- `title`: Course name
- `description`: Brief description
- `duration`: Course length
- `level`: Difficulty level
- `modules`: Number of modules
- `price`: Course price
- `instructor`: Instructor name
- `rating`: Course rating (1-5)
- `students`: Number of students enrolled
- `category`: Course category
- `detailedDescription`: Full description
- `learningOutcomes`: Array of outcomes
- `prerequisites`: Array of prerequisites

### Extended Fields for Detail Pages

#### Required for Detail Pages
- `hasDetailPage: true` - **Must be set to enable detail page**

#### Recommended Fields
- `instructorTitle`: Instructor credentials/title
- `instructorImage`: Instructor initials or image URL
- `reviews`: Number of reviews
- `badge`: Badge text (e.g., 'Best Seller', 'Popular')
- `tagline`: Hero section tagline
- `keyOutcome`: Main outcome statement

#### Course Modules
```typescript
courseModules: CourseModule[]

interface CourseModule {
  title: string;      // Module title
  duration: string;   // Time to complete (e.g., '1 week', '3 days')
  lessons: number;    // Number of lessons
  topics: string[];   // Array of topics covered
}
```

#### Features
```typescript
features: CourseFeature[]

interface CourseFeature {
  emoji: string;       // Emoji icon
  title: string;       // Feature title
  description: string; // Feature description
}
```

**Common Feature Examples:**
- `{ emoji: '🎥', title: 'Video Lectures', description: 'HD video content' }`
- `{ emoji: '🧪', title: 'Hands-on Labs', description: 'Coding exercises' }`
- `{ emoji: '📊', title: 'Projects', description: 'Portfolio projects' }`
- `{ emoji: '🏆', title: 'Certificate', description: 'Completion certificate' }`
- `{ emoji: '💬', title: 'Live Q&A', description: 'Weekly office hours' }`
- `{ emoji: '📥', title: 'Resources', description: 'Downloadable materials' }`

#### Testimonials
```typescript
testimonials: CourseTestimonial[]

interface CourseTestimonial {
  name: string;        // Student name
  role: string;        // Job title
  company: string;     // Company name
  rating: number;      // Rating (1-5)
  text: string;        // Testimonial text
  image: string;       // Initials or image URL
}
```

#### FAQs
```typescript
faqs: CourseFAQ[]

interface CourseFAQ {
  question: string;
  answer: string;
  links?: { text: string; url: string; }[];  // Optional related links
}
```

**Common FAQ Questions:**
- "What is the time commitment required?"
- "Do I need prior experience?"
- "What tools and software will I need?"
- "Is this course suitable for enterprise teams?"
- "What kind of certificate will I receive?"
- "What is your refund policy?"

#### Stats (Optional)
```typescript
stats?: CourseStats

interface CourseStats {
  completionRate?: number;      // Percentage (e.g., 92)
  avgSalaryIncrease?: string;   // e.g., '+$18K'
  careerAdvancement?: string;   // e.g., '71%'
  studentSatisfaction?: number; // Percentage (e.g., 98)
}
```

#### Includes (Enrollment Card)
```typescript
includes: string[]  // Array of what's included in enrollment
```

**Common Includes:**
- 'Lifetime access to all course materials'
- 'XX+ HD video lectures'
- 'Certificate of completion'
- 'Weekly live Q&A sessions'
- 'Access to private community'
- '30-day money-back guarantee'

#### Related Courses
```typescript
relatedCourseIds: string[]  // Array of related course IDs
```

## Complete Example

Here's a complete example adding a "Python for Financial Analysis" course detail page:

### 1. Add course data to coursesAndCertificates.ts:

```typescript
'python-financial-analysis': {
  id: 'python-financial-analysis',
  title: 'Python for Financial Analysis',
  description: 'Master Python programming for financial data analysis and modeling',
  duration: '6 weeks',
  level: 'Beginner',
  modules: 6,
  price: 399,
  instructor: 'Dr. Emily Zhang',
  rating: 4.8,
  students: 5240,
  category: 'Programming',
  detailedDescription: 'Learn Python from scratch with a focus on financial applications. Master Pandas, NumPy, and data visualization libraries to analyze financial data, build models, and automate workflows.',
  learningOutcomes: [
    'Write Python code for financial data analysis',
    'Use Pandas and NumPy for data manipulation',
    'Create visualizations with Matplotlib and Seaborn',
    'Build financial models and automate workflows',
    'Work with APIs to fetch real-time market data'
  ],
  prerequisites: [
    'No programming experience required',
    'Basic understanding of financial concepts',
    'A computer with internet connection'
  ],
  
  // Extended fields
  hasDetailPage: true,
  instructorTitle: 'PhD, Quantitative Finance Expert',
  instructorImage: 'EZ',
  reviews: 1240,
  heroImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
  badge: 'Beginner Friendly',
  tagline: 'Learn Python programming from scratch with a focus on financial applications—no prior coding experience required.',
  keyOutcome: 'By the end of this course, you\'ll be able to analyze financial data, build models, and automate tasks using Python—with confidence to tackle real-world financial analysis projects.',
  
  courseModules: [
    {
      title: 'Module 1: Python Fundamentals',
      duration: '1 week',
      lessons: 8,
      topics: [
        'Installing Python and setting up your environment',
        'Variables, data types, and operators',
        'Control flow: if statements and loops',
        'Functions and modules',
        'Hands-on: Your first Python script'
      ]
    },
    {
      title: 'Module 2: Data Structures for Finance',
      duration: '1 week',
      lessons: 7,
      topics: [
        'Lists, tuples, and dictionaries',
        'Working with dates and times',
        'File I/O: reading CSV and Excel files',
        'Error handling and debugging',
        'Lab: Import and clean financial data'
      ]
    },
    {
      title: 'Module 3: NumPy for Numerical Computing',
      duration: '1 week',
      lessons: 6,
      topics: [
        'NumPy arrays and vectorization',
        'Mathematical operations on arrays',
        'Statistical functions',
        'Matrix operations',
        'Project: Calculate portfolio returns and volatility'
      ]
    },
    {
      title: 'Module 4: Pandas for Data Analysis',
      duration: '2 weeks',
      lessons: 10,
      topics: [
        'DataFrames and Series',
        'Data cleaning and preprocessing',
        'Filtering, sorting, and aggregating data',
        'Merging and joining datasets',
        'Time series analysis with Pandas',
        'Lab: Analyze stock price data'
      ]
    },
    {
      title: 'Module 5: Data Visualization',
      duration: '1 week',
      lessons: 7,
      topics: [
        'Matplotlib fundamentals',
        'Line charts, bar charts, and scatter plots',
        'Customizing plots for presentations',
        'Seaborn for statistical visualizations',
        'Interactive charts with Plotly',
        'Project: Create a financial dashboard'
      ]
    },
    {
      title: 'Module 6: Working with Financial APIs',
      duration: '1 week',
      lessons: 6,
      topics: [
        'Making HTTP requests with requests library',
        'Working with JSON data',
        'Fetching data from Yahoo Finance API',
        'Alpha Vantage and other financial APIs',
        'Automating data updates',
        'Final project: Build a real-time market tracker'
      ]
    }
  ],
  
  features: [
    { emoji: '🎥', title: '50+ Video Lectures', description: 'Step-by-step coding tutorials' },
    { emoji: '🧪', title: '20+ Coding Exercises', description: 'Practice with real data' },
    { emoji: '📊', title: '4 Major Projects', description: 'Build your portfolio' },
    { emoji: '🏆', title: 'Certificate', description: 'Shareable completion certificate' },
    { emoji: '💬', title: 'Live Q&A', description: 'Weekly coding sessions' },
    { emoji: '📥', title: 'Code Templates', description: 'Ready-to-use scripts' }
  ],
  
  testimonials: [
    {
      name: 'Robert Kim',
      role: 'Financial Analyst',
      company: 'Wells Fargo',
      rating: 5,
      text: 'Perfect for beginners! I went from zero Python knowledge to automating my daily reports in 6 weeks. The financial focus made every lesson relevant to my job.',
      image: 'RK'
    },
    {
      name: 'Maria Santos',
      role: 'Investment Analyst',
      company: 'Fidelity',
      rating: 5,
      text: 'Dr. Zhang is an excellent instructor. The course is well-paced and the projects were challenging but achievable. I now use Python daily for portfolio analysis.',
      image: 'MS'
    },
    {
      name: 'James Lee',
      role: 'Risk Analyst',
      company: 'Bank of America',
      rating: 5,
      text: 'Best Python course for finance professionals. Practical, hands-on, and immediately applicable. The API module was especially useful for automating data collection.',
      image: 'JL'
    }
  ],
  
  faqs: [
    {
      question: 'Do I need any programming experience?',
      answer: 'No! This course is designed for complete beginners. We start with the absolute basics and build up to advanced topics. If you can use a computer and Excel, you can learn Python.',
      links: []
    },
    {
      question: 'What software do I need?',
      answer: 'You\'ll need a computer (Windows, Mac, or Linux) and an internet connection. We use free, open-source software (Python, Jupyter notebooks, VS Code). Detailed setup instructions are provided.',
      links: [{ text: 'View setup guide', url: '#' }]
    },
    {
      question: 'How much time should I dedicate per week?',
      answer: 'Plan for 6-8 hours per week including video lectures, coding exercises, and projects. The course is self-paced, so you can go faster or slower based on your schedule.',
      links: []
    },
    {
      question: 'Will I receive a certificate?',
      answer: 'Yes! Upon completion, you\'ll receive a QuantUniversity Certificate of Completion that you can share on LinkedIn and include in your resume.',
      links: [{ text: 'View sample certificate', url: '#' }]
    },
    {
      question: 'What if I get stuck?',
      answer: 'You have multiple support channels: weekly live Q&A sessions, discussion forums, and direct messaging with TAs. Most questions are answered within 24 hours.',
      links: []
    }
  ],
  
  stats: {
    completionRate: 85,
    avgSalaryIncrease: '+$12K',
    careerAdvancement: '58%',
    studentSatisfaction: 96
  },
  
  includes: [
    'Lifetime access to all course materials',
    '50+ video lectures with live coding',
    '20+ hands-on coding exercises',
    '4 portfolio-worthy projects',
    'Downloadable Python scripts and templates',
    'Certificate of completion',
    'Weekly live Q&A sessions',
    'Access to student community',
    '30-day money-back guarantee'
  ],
  
  relatedCourseIds: ['ml-trading-finance', 'time-series', 'risk-modeling', 'algo-trading']
}
```

### 2. Create PythonFinancialAnalysisDetailPage.tsx:

```typescript
import { CourseDetailPageComponent } from '../components/CourseDetailPageComponent';
import { courses } from '../data/coursesAndCertificates';

interface PythonFinancialAnalysisDetailPageProps {
  onNavigate: (page: string) => void;
}

export function PythonFinancialAnalysisDetailPage({ onNavigate }: PythonFinancialAnalysisDetailPageProps) {
  const course = courses['python-financial-analysis'];
  
  return <CourseDetailPageComponent course={course} onNavigate={onNavigate} />;
}
```

### 3. Update App.tsx:

```typescript
// Add import
import { PythonFinancialAnalysisDetailPage } from './pages/PythonFinancialAnalysisDetailPage';

// Add to PageType
type PageType = '...' | 'python-financial-analysis';

// Add case
case 'python-financial-analysis':
  return <PythonFinancialAnalysisDetailPage onNavigate={handleNavigate} />;
```

## Features Automatically Included

When you add a course detail page using this system, you automatically get:

### Course Detail Page Sections
- ✅ Hero section with course overview and instructor info
- ✅ Enrollment card with pricing and "What's Included"
- ✅ Certificate callout (if course is part of a certificate program)
- ✅ Course features grid with emoji icons
- ✅ Tabbed content: Overview, Curriculum, Instructor, Reviews
- ✅ Detailed curriculum with expandable modules
- ✅ Learning outcomes grid
- ✅ Prerequisites list
- ✅ Course statistics sidebar (completion rate, etc.)
- ✅ Student testimonials/reviews
- ✅ FAQ accordion
- ✅ Related courses carousel
- ✅ Bottom CTA section
- ✅ Video preview modal
- ✅ Responsive design for all devices
- ✅ Motion animations throughout
- ✅ Consistent QuantUniversity branding (#007CBF blue)

### Interactive Elements
- ✅ Video preview modal
- ✅ Expandable curriculum modules
- ✅ Collapsible FAQs
- ✅ Tab navigation
- ✅ Smooth scrolling
- ✅ Hover effects

## Best Practices

### Content Guidelines

1. **Modules**: Include 4-8 modules per course
2. **Topics**: 4-8 topics per module
3. **Features**: Use 6 features (fits grid layout perfectly)
4. **Testimonials**: Include 3 testimonials (shows credibility without overwhelming)
5. **FAQs**: 4-6 FAQs covering common concerns
6. **Related Courses**: 3-4 related courses

### Writing Guidelines

1. **Module Titles**: Be specific and descriptive
2. **Topics**: Use action verbs ("Building...", "Implementing...", "Analyzing...")
3. **Testimonials**: Keep under 200 characters for better readability
4. **FAQs**: Answer completely but concisely
5. **Key Outcome**: Focus on transformation/ability gained

### Technical Guidelines

1. **Course IDs**: Use kebab-case consistently
2. **Set hasDetailPage: true**: Required for detail pages to work
3. **Image URLs**: Use high-quality images (1920x1080 recommended)
4. **Emojis**: Use standard emojis that render everywhere
5. **Related Courses**: Only reference courses that exist in the data file

## Updating Existing Courses

To add a detail page to an existing course:

1. Find the course in `/data/coursesAndCertificates.ts`
2. Add the extended fields (see Step 1 above)
3. Set `hasDetailPage: true`
4. Create the detail page component (see Step 2 above)
5. Add route to App.tsx (see Step 3 above)

## Testing Checklist

After adding a course detail page, verify:

- [ ] Course detail page loads correctly
- [ ] All sections render properly
- [ ] Hero image displays
- [ ] Instructor information shows
- [ ] Enrollment card is functional
- [ ] Video modal opens
- [ ] Tabs switch correctly
- [ ] Curriculum modules expand/collapse
- [ ] Testimonials display
- [ ] FAQs expand/collapse
- [ ] Related courses show (if applicable)
- [ ] Certificate callout appears (if course is in a certificate)
- [ ] Responsive design works on mobile
- [ ] All links/buttons work
- [ ] Back to Courses button works

## Troubleshooting

### Detail page not showing
- Check that `hasDetailPage: true` is set
- Verify the course ID matches exactly
- Ensure route is added to App.tsx

### Modules not expanding
- Verify `courseModules` array is properly formatted
- Check that each module has all required fields

### Related courses not showing
- Ensure `relatedCourseIds` contains valid course IDs
- Check that those courses exist in the data file

### Certificate callout not appearing
- Verify the course is included in a certificate's `courseIds` array
- Check that the certificate exists in the certificates object

## Migration from Old Pages

If you have existing course detail pages with hardcoded content:

1. Extract all content to the data file
2. Add extended fields to the course object
3. Create new page using CourseDetailPageComponent
4. Test thoroughly
5. Delete old hardcoded page
6. Update routes in App.tsx

## Questions?

For more information:
- Review existing course detail pages in `/data/coursesAndCertificates.ts` (intro-genai, ml-trading-finance)
- Check the CourseDetailPageComponent in `/components/CourseDetailPageComponent.tsx`
- See examples in `/pages/MLTradingFinanceCourseDetailPage.tsx` and `/pages/IntroGenAICourseDetailPageNew.tsx`
- Refer to `/COMPONENT_BASED_ARCHITECTURE.md` for overall system architecture
