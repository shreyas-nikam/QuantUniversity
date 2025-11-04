# How to Add New Certificate Programs

This guide explains how to add new certificate programs to the QuantUniversity website using our component-based architecture.

## Overview

The certificate system uses a data-driven approach where all certificate content is defined in a single TypeScript file (`/data/coursesAndCertificates.ts`), and rendered using a reusable component (`/components/CertificateDetailPage.tsx`). This makes it easy to add new certificate programs without duplicating code.

## Architecture

### Data Flow
```
┌─────────────────────────────────────────────────┐
│ /data/coursesAndCertificates.ts                 │
│ ┌─────────────────┐  ┌───────────────────────┐ │
│ │  courses: {}    │  │  certificates: {}     │ │
│ │  - Course 1     │  │  - Certificate 1      │ │
│ │  - Course 2     │  │    courseIds: [...-]  │ │
│ │  - Course 3     │  │  - Certificate 2      │ │
│ └─────────────────┘  └───────────────────────┘ │
└─────────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────────┐
│ /pages/AIRiskManagementCertPage.tsx             │
│ - Imports certificate data by ID                │
│ - Passes to CertificateDetailPage component     │
│ - Optional: Maps course detail page routes      │
└─────────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────────┐
│ /components/CertificateDetailPage.tsx           │
│ - Renders hero with certificate info            │
│ - Auto-fetches courses from courseIds           │
│ - Calculates pricing/savings                    │
│ - Generates course curriculum section           │
│ - Creates outcomes section                      │
│ - Applies color theming                         │
│ - Handles all modals & interactions             │
└─────────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────────┐
│ User sees fully rendered certificate page       │
│ with all features & content                     │
└─────────────────────────────────────────────────┘
```

### Routing Architecture
```
User clicks certificate link
         ↓
App.tsx receives route (e.g., 'ai-risk-management')
         ↓
Renders AIRiskManagementCertPage
         ↓
AIRiskManagementCertPage fetches certificate['ai-risk-management']
         ↓
Passes to CertificateDetailPage component
         ↓
Component auto-fetches related courses
         ↓
Fully rendered page with all features
```

## Step-by-Step Guide

### Step 1: Add Course Definitions (if needed)

If your certificate includes new courses that don't exist yet, add them to the `courses` object in `/data/coursesAndCertificates.ts`:

```typescript
export const courses: Record<string, Course> = {
  // Existing courses...
  
  'your-course-id': {
    id: 'your-course-id',
    title: 'Your Course Title',
    description: 'Short description (1-2 sentences)',
    duration: '4 weeks',
    level: 'Beginner' | 'Intermediate' | 'Advanced',
    modules: 8,
    price: 599,
    instructor: 'Instructor Name',
    rating: 4.8,
    students: 2500,
    category: 'Category Name',
    detailedDescription: 'Detailed description (2-3 paragraphs)',
    learningOutcomes: [
      'Outcome 1',
      'Outcome 2',
      'Outcome 3',
      'Outcome 4'
    ],
    prerequisites: ['Prerequisite 1', 'Prerequisite 2']
  }
};
```

**Field Guide:**
- `id`: Unique identifier (kebab-case, e.g., 'intro-ml-finance')
- `title`: Display name of the course
- `description`: Brief description shown on cards
- `duration`: Time to complete (e.g., '4 weeks', '8 weeks')
- `level`: Difficulty level
- `modules`: Number of course modules
- `price`: Individual course price in dollars
- `instructor`: Name of the instructor
- `rating`: Course rating (0-5, typically 4.5-5.0)
- `students`: Number of enrolled students
- `category`: Course category for filtering
- `detailedDescription`: Full description for detail pages
- `learningOutcomes`: Array of skills students will gain
- `prerequisites`: Array of required knowledge/skills

### Step 2: Add Certificate Definition

Add your certificate to the `certificates` object in `/data/coursesAndCertificates.ts`:

```typescript
export const certificates: Record<string, Certificate> = {
  // Existing certificates...
  
  'your-certificate-id': {
    id: 'your-certificate-id',
    title: 'Your Certificate Title',
    shortDescription: 'Brief tagline for cards (1 sentence)',
    description: 'Full description shown on detail page (2-3 sentences)',
    track: 'AI' | 'Risk' | 'Quant',
    duration: '12 weeks',
    format: 'Self-Paced' | 'Cohort-Based',
    savings: '20%',
    color: 'from-blue-500 to-blue-600',
    price: 2499,
    courseIds: [
      'course-id-1',
      'course-id-2',
      'course-id-3'
    ],
    featured: true,
    outcomes: [
      'Major outcome 1',
      'Major outcome 2',
      'Major outcome 3',
      'Major outcome 4',
      'Major outcome 5',
      'Major outcome 6'
    ],
    recognizedBy: ['Company 1', 'Company 2', 'Company 3', 'Company 4']
  }
};
```

**Field Guide:**
- `id`: Unique identifier (kebab-case, e.g., 'ai-risk-management')
- `title`: Display name of the certificate program
- `shortDescription`: Brief description for certificate cards
- `description`: Full description for the certificate detail page
- `track`: Program track ('AI', 'Risk', or 'Quant')
- `duration`: Total time to complete (e.g., '12 weeks', '16 weeks')
- `format`: 'Self-Paced' or 'Cohort-Based'
- `savings`: Percentage saved vs. individual courses (e.g., '20%', '25%')
- `color`: Gradient color classes (e.g., 'from-blue-500 to-blue-600', 'from-green-500 to-green-600')
- `price`: Bundle price in dollars (should be less than sum of individual courses)
- `courseIds`: Array of course IDs included in this certificate
- `featured`: Boolean - whether to show on homepage/featured sections
- `outcomes`: Array of key learning outcomes (6-8 recommended)
- `recognizedBy`: Array of companies/institutions that recognize this certificate

**Color Options:**
- Blue: `'from-blue-500 to-blue-600'` (AI programs)
- Green: `'from-green-500 to-green-600'` (Quant programs)
- Purple: `'from-purple-500 to-purple-600'` (GenAI programs)

### Step 3: Create Certificate Page Component

Create a new page file in `/pages/` named `[YourCertificate]CertPage.tsx`:

```typescript
import { CertificateDetailPage } from '../components/CertificateDetailPage';
import { certificates } from '../data/coursesAndCertificates';

interface YourCertificateCertPageProps {
  onNavigate: (page: string) => void;
}

export function YourCertificateCertPage({ onNavigate }: YourCertificateCertPageProps) {
  const certificate = certificates['your-certificate-id'];
  
  // Optional: Map specific course IDs to their detail page routes
  // Only needed if you have custom course detail pages
  const courseDetailPageMap = {
    'course-id-1': 'course-1-detail-page-route'
  };
  
  return (
    <CertificateDetailPage 
      certificate={certificate} 
      onNavigate={onNavigate}
      courseDetailPageMap={courseDetailPageMap} // Optional
    />
  );
}
```

**Naming Convention:**
- File: `[CertificateName]CertPage.tsx` (PascalCase)
- Component: `[CertificateName]CertPage` (PascalCase)
- Example: `AIRiskManagementCertPage.tsx` → `AIRiskManagementCertPage`

### Step 4: Add Route to App.tsx

Add your new certificate to the routing system in `/App.tsx`:

1. **Import the component:**
```typescript
import { YourCertificateCertPage } from './pages/YourCertificateCertPage';
```

2. **Add to PageType:**
```typescript
type PageType = 'home' | 'courses' | ... | 'your-certificate-route';
```

3. **Add case to renderPage():**
```typescript
case 'your-certificate-route':
  return <YourCertificateCertPage onNavigate={handleNavigate} />;
```

**Route Naming Convention:**
- Use kebab-case for routes
- Match the certificate ID for consistency
- Examples:
  - 'ai-risk-management'
  - 'quant-finance-foundations'
  - 'responsible-genai-cert'

### Step 5: Update Certificate Programs Page (Optional)

If you want your certificate to appear on the Certificate Programs listing page, it will automatically show if `featured: true` is set in the certificate definition.

The `/pages/CertificateProgramsPage.tsx` automatically reads all certificates from the data file and displays featured ones.

## Complete Example

Here's a complete example of adding a new "Blockchain & DeFi Finance" certificate:

### 1. Add courses to coursesAndCertificates.ts:
```typescript
'blockchain-fundamentals': {
  id: 'blockchain-fundamentals',
  title: 'Blockchain Fundamentals for Finance',
  description: 'Understanding blockchain technology and its applications in finance',
  duration: '3 weeks',
  level: 'Beginner',
  modules: 6,
  price: 499,
  instructor: 'Dr. Sarah Johnson',
  rating: 4.8,
  students: 1850,
  category: 'Blockchain',
  detailedDescription: 'Comprehensive introduction to blockchain technology...',
  learningOutcomes: [
    'Understand blockchain architecture and consensus mechanisms',
    'Analyze smart contracts and their financial applications',
    'Evaluate blockchain use cases in finance',
    'Assess security and scalability trade-offs'
  ],
  prerequisites: ['Basic finance knowledge', 'Programming basics']
},
'defi-protocols': {
  id: 'defi-protocols',
  title: 'DeFi Protocols & Tokenomics',
  description: 'Deep dive into decentralized finance protocols',
  duration: '4 weeks',
  level: 'Intermediate',
  modules: 7,
  price: 599,
  instructor: 'Mark Stevens',
  rating: 4.9,
  students: 1420,
  category: 'DeFi',
  detailedDescription: 'Master the major DeFi protocols...',
  learningOutcomes: [
    'Understand major DeFi protocols (Uniswap, Aave, Compound)',
    'Analyze tokenomics and incentive structures',
    'Model liquidity provision and impermanent loss',
    'Design DeFi strategies and risk management'
  ],
  prerequisites: ['Blockchain fundamentals', 'Financial markets']
}
```

### 2. Add certificate to coursesAndCertificates.ts:
```typescript
'blockchain-defi-finance': {
  id: 'blockchain-defi-finance',
  title: 'Blockchain & DeFi Finance Certificate',
  shortDescription: 'Master blockchain technology and decentralized finance protocols',
  description: 'Master blockchain technology and decentralized finance protocols. Build production-ready expertise in digital assets and Web3 finance.',
  track: 'Quant',
  duration: '10 weeks',
  format: 'Self-Paced',
  savings: '25%',
  color: 'from-green-500 to-green-600',
  price: 1999,
  courseIds: [
    'blockchain-fundamentals',
    'defi-protocols',
    'smart-contract-dev',
    'crypto-trading'
  ],
  featured: true,
  outcomes: [
    'Understand blockchain architecture and consensus mechanisms',
    'Master major DeFi protocols and their mechanics',
    'Design and analyze tokenomics models',
    'Build and audit smart contracts',
    'Trade and manage crypto portfolios',
    'Assess blockchain investment opportunities'
  ],
  recognizedBy: ['Coinbase', 'Circle', 'BlockFi', 'Galaxy Digital']
}
```

### 3. Create BlockchainDeFiFinanceCertPage.tsx:
```typescript
import { CertificateDetailPage } from '../components/CertificateDetailPage';
import { certificates } from '../data/coursesAndCertificates';

interface BlockchainDeFiFinanceCertPageProps {
  onNavigate: (page: string) => void;
}

export function BlockchainDeFiFinanceCertPage({ onNavigate }: BlockchainDeFiFinanceCertPageProps) {
  const certificate = certificates['blockchain-defi-finance'];
  
  return <CertificateDetailPage certificate={certificate} onNavigate={onNavigate} />;
}
```

### 4. Update App.tsx:
```typescript
// Add import
import { BlockchainDeFiFinanceCertPage } from './pages/BlockchainDeFiFinanceCertPage';

// Add to PageType
type PageType = '...' | 'blockchain-defi-finance';

// Add case
case 'blockchain-defi-finance':
  return <BlockchainDeFiFinanceCertPage onNavigate={handleNavigate} />;
```

## Features Automatically Included

When you add a certificate using this system, you automatically get:

### Certificate Detail Page
- ✅ Hero section with certificate overview
- ✅ Course curriculum with course cards
- ✅ Pricing comparison (individual vs. bundle)
- ✅ Learning outcomes section
- ✅ Industry recognition badges
- ✅ Video preview modal
- ✅ Enrollment CTAs
- ✅ Course detail modals with full information
- ✅ Responsive design for all devices
- ✅ Motion animations
- ✅ Proper color theming based on track

### Automatic Data Calculations
- ✅ Total number of courses
- ✅ Individual course prices sum
- ✅ Savings calculation ($ and %)
- ✅ Course sequencing

### Navigation
- ✅ Back to certificate programs page
- ✅ Links to individual course pages (if available)
- ✅ "View on Courses Page" links
- ✅ Contact advisor CTAs

## Advanced Customization

### Custom Course Detail Pages

If you want certain courses in your certificate to link to custom detail pages:

```typescript
const courseDetailPageMap = {
  'intro-genai': 'intro-genai-course',
  'advanced-genai': 'advanced-genai-course'
};

return (
  <CertificateDetailPage 
    certificate={certificate} 
    onNavigate={onNavigate}
    courseDetailPageMap={courseDetailPageMap}
  />
);
```

### Customizing Colors

The CertificateDetailPage component automatically applies colors based on the certificate's `color` field. All UI elements (buttons, badges, borders, etc.) will use this color scheme automatically.

## Testing Checklist

After adding a new certificate, verify:

- [ ] Certificate appears in Certificate Programs page (if featured: true)
- [ ] Certificate detail page loads correctly
- [ ] All courses are displayed
- [ ] Pricing calculation is correct
- [ ] Video modal opens
- [ ] Course detail modals open
- [ ] Navigation works (back button, CTAs)
- [ ] Responsive design works on mobile
- [ ] Colors are applied correctly
- [ ] All learning outcomes are displayed
- [ ] Industry recognition badges show

## Maintenance

### Updating Certificate Content
To update certificate content, simply edit the data in `/data/coursesAndCertificates.ts`. Changes will automatically reflect across all pages.

### Adding Courses to Existing Certificates
1. Add the new course to the `courses` object
2. Add the course ID to the certificate's `courseIds` array
3. Update the certificate's `price` if needed
4. Update `outcomes` and `description` if applicable

### Changing Certificate Pricing
1. Update the `price` field in the certificate definition
2. Update the `savings` percentage if needed
3. The system will automatically recalculate the savings display

## Troubleshooting

### Certificate not showing on listing page
- Check that `featured: true` is set
- Verify the certificate ID is correct
- Check that the certificate is in the `certificates` object

### Course not displaying in certificate
- Verify the course ID in `courseIds` matches the course's `id`
- Check that the course exists in the `courses` object
- Ensure there are no typos in the course ID

### Navigation not working
- Check that the route is added to the PageType in App.tsx
- Verify the case statement in renderPage() matches the route
- Ensure the component is properly imported

### Colors not applying
- Use supported color classes: blue, green, or purple gradients
- Format: `'from-[color]-500 to-[color]-600'`
- The CertificateDetailPage handles color mapping automatically

## Best Practices

1. **Consistent Pricing**: Ensure bundle price is 15-30% less than individual course total
2. **Course Order**: List courses in logical learning sequence
3. **Outcomes**: Provide 6-8 specific, measurable learning outcomes
4. **Descriptions**: Keep short description under 100 characters
5. **Recognition**: List 4-6 relevant companies that recognize the certificate
6. **Duration**: Set realistic completion time (10-20 weeks for most certificates)
7. **Course Count**: Include 4-8 courses per certificate for good value
8. **IDs**: Use kebab-case consistently across all IDs

## Questions?

For more information:
- Review existing certificates in `/data/coursesAndCertificates.ts`
- Check the CertificateDetailPage component in `/components/CertificateDetailPage.tsx`
- See existing certificate pages in `/pages/`
- Refer to `/guidelines/MaintenanceGuide.md` for overall system architecture
