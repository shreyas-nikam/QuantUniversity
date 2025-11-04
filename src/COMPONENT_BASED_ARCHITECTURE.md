# QuantUniversity Component-Based Architecture

## Overview

The QuantUniversity website uses a component-based, data-driven architecture that allows you to add new content (courses, certificates, articles, testimonials) without modifying component code. All content is centralized in `/data` files.

## Key Principles

1. **Separation of Content and Presentation**: Content lives in TypeScript data files, presentation lives in reusable components
2. **Single Source of Truth**: Each type of content has one canonical data file
3. **Automatic Features**: New content automatically gets all UI features (modals, animations, responsive design, etc.)
4. **Type Safety**: TypeScript interfaces ensure data consistency
5. **Easy Maintenance**: Update content by editing data files, not components

## Architecture Overview

```
┌──────────────────────────────────────────────────────────────┐
│                     DATA LAYER (/data)                        │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐          │
│  │  articles   │  │   courses   │  │testimonials │          │
│  │    .ts      │  │     &       │  │    .ts      │          │
│  └─────────────┘  │certificates │  └─────────────┘          │
│                   │    .ts      │                            │
│  ┌─────────────┐  └─────────────┘  ┌─────────────┐          │
│  │  partners   │                   │     seo     │          │
│  │    .ts      │                   │    .ts      │          │
│  └─────────────┘                   └─────────────┘          │
└──────────────────────────────────────────────────────────────┘
                            ↓
┌──────────────────────────────────────────────────────────────┐
│              COMPONENT LAYER (/components)                    │
│  ┌────────────────────┐  ┌────────────────────────┐          │
│  │  ArticleCard       │  │  CertificateDetailPage │          │
│  │  CourseCard        │  │  TestimonialCard       │          │
│  │  ScrollableCarousel│  │  SEO                   │          │
│  └────────────────────┘  └────────────────────────┘          │
└──────────────────────────────────────────────────────────────┘
                            ↓
┌──────────────────────────────────────────────────────────────┐
│                PAGE LAYER (/pages)                            │
│  Each page imports data and uses components to render         │
└──────────────────────────────────────────────────────────────┘
```

## Content Types & Their Files

| Content Type | Data File | Component | Used On |
|--------------|-----------|-----------|---------|
| **Blog Articles** | `/data/articles.ts` | `ArticleCard.tsx` | HomePage, ThoughtLeadershipPage, BlogArticlePage |
| **Courses** | `/data/coursesAndCertificates.ts` | `CourseCard.tsx` | CoursesPage, Certificate pages |
| **Course Details** | `/data/coursesAndCertificates.ts` | `CourseDetailPageComponent.tsx` | Individual course detail pages |
| **Certificates** | `/data/coursesAndCertificates.ts` | `CertificateDetailPage.tsx` | CertificateProgramsPage, Individual cert pages |
| **Testimonials** | `/data/testimonials.ts` | `TestimonialCard.tsx` | HomePage, AboutPage, HowYouLearnPage |
| **Partners** | `/data/partners.ts` | `PartnerLogos.tsx` | HomePage, AboutPage, EnterprisePage |
| **SEO Metadata** | `/data/seo.ts` | `SEO.tsx` | All pages |

## Adding New Content - Quick Reference

### Articles
✏️ Edit: `/data/articles.ts`
📄 Docs: Inline comments in file

### Courses (Basic Listing)
✏️ Edit: `/data/coursesAndCertificates.ts`
📄 Docs: Inline comments in file

### Course Detail Pages
✏️ Edit: `/data/coursesAndCertificates.ts` + Create page file + Update App.tsx
📄 Docs: `/guidelines/GenerateCourseDetails.md` (comprehensive)
⚡ Quick: `/guidelines/COURSE_DETAILS_QUICK_START.md`

### Certificates
✏️ Edit: `/data/coursesAndCertificates.ts` + Create page file + Update App.tsx
📄 Docs: `/guidelines/GenerateCertificates.md` (comprehensive)
⚡ Quick: `/guidelines/CERTIFICATE_QUICK_START.md`

### Testimonials
✏️ Edit: `/data/testimonials.ts`
📄 Docs: Inline comments in file

### Partners
✏️ Edit: `/data/partners.ts`
📄 Docs: Inline comments in file

## Benefits of This Architecture

### 1. Easy Content Updates
- Marketing team can update content without touching component code
- No risk of breaking UI when updating content
- Changes reflected across all pages automatically

### 2. Consistency
- Same data used everywhere ensures consistency
- Single update propagates to all instances
- Uniform styling and behavior

### 3. Type Safety
- TypeScript interfaces catch errors at compile time
- Autocomplete helps developers
- Documentation through types

### 4. Scalability
- Add hundreds of courses without performance issues
- Components are optimized and reused
- Code splitting and lazy loading built-in

### 5. Maintainability
- Clear separation of concerns
- Easy to find and fix issues
- New developers can contribute quickly

## File Structure

```
quantuniversity/
├── data/                           # 📊 All content data
│   ├── articles.ts                # Blog posts & thought leadership
│   ├── coursesAndCertificates.ts  # Courses & certificate programs
│   ├── testimonials.ts            # Customer testimonials
│   ├── partners.ts                # Partner/client logos
│   ├── seo.ts                     # SEO metadata
│   └── analytics.ts               # Analytics configuration
│
├── components/                     # 🧩 Reusable components
│   ├── ArticleCard.tsx            # Renders individual articles
│   ├── CourseCard.tsx             # Renders individual courses
│   ├── CertificateDetailPage.tsx  # Full certificate page template
│   ├── TestimonialCard.tsx        # Renders testimonials
│   ├── PartnerLogos.tsx           # Partner logo carousel
│   ├── SEO.tsx                    # SEO meta tags
│   └── ui/                        # shadcn/ui components
│
├── pages/                          # 📄 Page components
│   ├── HomePage.tsx
│   ├── CoursesPage.tsx
│   ├── CertificateProgramsPage.tsx
│   ├── AIRiskManagementCertPage.tsx      # Individual cert page
│   ├── QuantFinanceFoundationsCertPage.tsx
│   ├── ResponsibleGenAICertPage.tsx
│   └── ...
│
├── guidelines/                     # 📚 Documentation
│   ├── GenerateCertificates.md    # How to add certificates
│   ├── CERTIFICATE_QUICK_START.md # Quick certificate reference
│   ├── MaintenanceGuide.md        # General maintenance guide
│   ├── DesignSystem.md            # Design system documentation
│   └── SEO.md                     # SEO guidelines
│
└── App.tsx                        # 🎯 Main app & routing
```

## Examples

### Example 1: Adding a Blog Article

**Before** (Old way - not used):
- Create new component file
- Copy/paste HTML structure
- Duplicate code
- Add to multiple pages manually

**After** (Current way):
- Add one object to `/data/articles.ts`
- Automatically appears on HomePage and ThoughtLeadershipPage
- Gets all features (filtering, search, responsive, etc.)

### Example 2: Adding a Certificate Program

**Before** (Old way - not used):
- Create new page with 500+ lines of JSX
- Copy/paste from existing certificate
- Update all text manually
- High risk of inconsistencies

**After** (Current way):
- Add certificate object to `/data/coursesAndCertificates.ts` (50 lines)
- Create simple wrapper page (10 lines)
- Add route to App.tsx (3 lines)
- Gets all features automatically (pricing calc, course list, modals, etc.)

## Component Reusability

### Highly Reusable Components

These components are used across multiple pages:

- **ArticleCard**: Used on 3+ pages
- **CourseCard**: Used on 2+ pages
- **TestimonialCard**: Used on 3+ pages
- **CourseDetailPageComponent**: Used by all course detail pages
- **CertificateDetailPage**: Used by all certificate pages
- **PartnerLogos**: Used on 3+ pages
- **SEO**: Used on all pages
- **Header/Footer**: Used on all pages

### Page-Specific Components

Some pages have unique layouts and use custom sections, but they still pull data from the central data files.

## TypeScript Interfaces

All content types have strongly-typed interfaces:

```typescript
// From coursesAndCertificates.ts
export interface Course {
  id: string;
  title: string;
  description: string;
  // ... more fields
}

export interface Certificate {
  id: string;
  title: string;
  courseIds: string[];
  // ... more fields
}

// From articles.ts
export interface Article {
  id: string | number;
  title: string;
  excerpt: string;
  // ... more fields
}
```

These interfaces:
- Provide autocomplete in IDEs
- Catch errors at compile time
- Serve as documentation
- Make refactoring safer

## Best Practices

### When Adding Content

1. **Use the data files**: Never hardcode content in components
2. **Follow naming conventions**: kebab-case for IDs, PascalCase for components
3. **Test across pages**: Content may appear on multiple pages
4. **Verify types**: Ensure your data matches the TypeScript interface
5. **Check responsive**: Test on mobile and desktop

### When Updating Components

1. **Keep components generic**: Don't hardcode content-specific logic
2. **Accept props**: Make components configurable via props
3. **Use TypeScript**: Define prop interfaces
4. **Add documentation**: Comment complex logic
5. **Test reusability**: Can it be used in different contexts?

### When Creating Pages

1. **Import from data files**: Never duplicate data
2. **Use existing components**: Leverage the component library
3. **Follow patterns**: Look at existing pages for guidance
4. **Add to routing**: Update App.tsx with new routes
5. **Add SEO**: Use the SEO component on all pages

## Migration Notes

The site was recently refactored to use this component-based architecture. Previously, content was hardcoded in page components, making updates difficult and error-prone.

Key migrations:
- ✅ Courses moved to `/data/coursesAndCertificates.ts`
- ✅ Certificates moved to `/data/coursesAndCertificates.ts`
- ✅ Articles moved to `/data/articles.ts`
- ✅ Testimonials moved to `/data/testimonials.ts`
- ✅ Partners moved to `/data/partners.ts`
- ✅ SEO metadata moved to `/data/seo.ts`

## Documentation Index

| Document | Purpose | Audience |
|----------|---------|----------|
| **This file** | Architecture overview | Developers, maintainers |
| `/guidelines/MaintenanceGuide.md` | General content updates | Content editors, developers |
| `/guidelines/GenerateCertificates.md` | Adding certificate programs | Developers |
| `/guidelines/CERTIFICATE_QUICK_START.md` | Quick certificate reference | Developers |
| `/guidelines/GenerateCourseDetails.md` | Adding course detail pages | Developers |
| `/guidelines/COURSE_DETAILS_QUICK_START.md` | Quick course details reference | Developers |
| `/guidelines/DesignSystem.md` | Design tokens & components | Designers, developers |
| `/guidelines/SEO.md` | SEO best practices | SEO specialists, developers |
| `/REFACTORING_COMPLETE.md` | Refactoring summary | Project managers |

## Future Enhancements

Possible future improvements to the architecture:

1. **CMS Integration**: Connect data files to a headless CMS
2. **Database Backend**: Move data to a database for dynamic updates
3. **Admin Panel**: Build an admin interface for content management
4. **API Layer**: Create REST/GraphQL API for content
5. **Internationalization**: Add multi-language support
6. **A/B Testing**: Built-in support for testing variations
7. **Analytics Integration**: Track content performance
8. **Version Control**: Track content changes over time

## Questions?

- Architecture questions: See this file
- Adding certificates: `/guidelines/GenerateCertificates.md`
- General maintenance: `/guidelines/MaintenanceGuide.md`
- Design system: `/guidelines/DesignSystem.md`
- SEO: `/guidelines/SEO.md`

## Summary

The QuantUniversity website uses a modern, component-based architecture that:
- ✅ Separates content from presentation
- ✅ Enables easy content updates
- ✅ Ensures consistency across pages
- ✅ Provides type safety
- ✅ Scales efficiently
- ✅ Is maintainable long-term

This architecture allows developers and content editors to work efficiently without stepping on each other's toes.
