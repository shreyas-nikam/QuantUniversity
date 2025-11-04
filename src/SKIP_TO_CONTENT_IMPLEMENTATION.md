# Skip-to-Content Implementation Guide

## Status: 🔄 IN PROGRESS

**Priority**: CRITICAL  
**Impact**: WCAG 2.1 AA Compliance, Accessibility Score +10 points  
**Time Required**: 2 hours for all pages

---

## ✅ Implementation Pattern

Every page must follow this exact pattern:

### Step 1: Import the Component
```tsx
import { SkipToContent } from '../components/SkipToContent';
```

### Step 2: Add After SEO Component
```tsx
return (
  <>
    <SEO pageKey="..." />
    <SkipToContent />  {/* ADD THIS LINE */}
    <main id="main-content">  {/* CHANGE: div → main, ADD id */}
      {/* All page content goes here */}
    </main>
  </>
);
```

### Key Points:
1. **SkipToContent** must be placed immediately after `<SEO />` component
2. **Main content wrapper** must be `<main id="main-content">` (not `<div>`)
3. The skip link is **hidden by default**, only visible when focused with Tab key
4. **DO NOT** change any other styling or content

---

## 📋 Implementation Checklist

### ✅ COMPLETED

#### 1. HomePage.tsx ✅
- [x] Import added
- [x] SkipToContent component added
- [x] Main wrapper changed to `<main id="main-content">`

**Changes Made:**
```tsx
// Line 18: Added import
import { SkipToContent } from '../components/SkipToContent';

// Line 268: Added skip link after SEO
<SkipToContent />

// Line 271: Changed div to main with id
<main id="main-content" className="bg-white">

// Line 959: Closed main tag
</main>
```

---

### ⏳ PENDING (14 pages remaining)

#### Priority 1: Main Navigation Pages (7 pages)

##### 2. CoursesPage.tsx ⏳
**Location**: `/pages/CoursesPage.tsx`
```tsx
// Line ~10: Add import
import { SkipToContent } from '../components/SkipToContent';

// After SEO component (around line 184):
<SkipToContent />

// Change wrapper (around line 187):
<div className="bg-white min-h-screen">  // CHANGE THIS
<main id="main-content" className="bg-white min-h-screen">  // TO THIS

// Close main tag at end
</main>  // INSTEAD OF </div>
```

##### 3. CertificateProgramsPage.tsx ⏳
**Location**: `/pages/CertificateProgramsPage.tsx`
```tsx
// Add import
import { SkipToContent } from '../components/SkipToContent';

// After SEO component:
<SkipToContent />

// Update wrapper:
<main id="main-content" className="bg-white min-h-screen">
```

##### 4. EnterprisePage.tsx ⏳
**Location**: `/pages/EnterprisePage.tsx`
```tsx
// Add import
import { SkipToContent } from '../components/SkipToContent';

// After SEO component:
<SkipToContent />

// Update wrapper:
<main id="main-content">
```

##### 5. HowYouLearnPage.tsx ⏳
**Location**: `/pages/HowYouLearnPage.tsx`

##### 6. SpeakingMediaPage.tsx ⏳
**Location**: `/pages/SpeakingMediaPage.tsx`

##### 7. ThoughtLeadershipPage.tsx ⏳
**Location**: `/pages/ThoughtLeadershipPage.tsx`

##### 8. AboutPage.tsx ⏳
**Location**: `/pages/AboutPage.tsx`

##### 9. ContactPage.tsx ⏳
**Location**: `/pages/ContactPage.tsx`

---

#### Priority 2: Detail Pages (6 pages)

##### 10. MLTradingFinanceCourseDetailPage.tsx ⏳
**Location**: `/pages/MLTradingFinanceCourseDetailPage.tsx`

##### 11. IntroGenAICourseDetailPage.tsx ⏳
**Location**: `/pages/IntroGenAICourseDetailPage.tsx`

##### 12. AIRiskManagementCertPage.tsx ⏳
**Location**: `/pages/AIRiskManagementCertPage.tsx`

##### 13. QuantFinanceFoundationsCertPage.tsx ⏳
**Location**: `/pages/QuantFinanceFoundationsCertPage.tsx`

##### 14. ResponsibleGenAICertPage.tsx ⏳
**Location**: `/pages/ResponsibleGenAICertPage.tsx`

##### 15. BlogArticlePage.tsx ⏳
**Location**: `/pages/BlogArticlePage.tsx`

---

## 🧪 Testing Instructions

### Keyboard Navigation Test:
1. Open the page in browser
2. Press **Tab** key
3. **Skip to main content** link should appear at top-left
4. Press **Enter** to activate
5. Focus should jump past navigation to main content
6. Continue tabbing to verify focus order

### Visual Test:
1. The skip link should be **invisible** by default
2. When focused (Tab key), it should appear as a **blue button** at top-left
3. Button should say "Skip to main content"
4. Button styling:
   - Background: #007CBF (QuantUniversity blue)
   - Text: White
   - Padding: 4px 16px
   - Rounded corners
   - Shadow

### Screen Reader Test:
1. Enable screen reader (NVDA, JAWS, VoiceOver)
2. Navigate to page
3. Screen reader should announce "Skip to main content" link first
4. Activating link should move to main content area

---

## 📊 Expected Results

### Before Implementation:
- Lighthouse Accessibility Score: ~85
- WCAG 2.1 Level: Partial AA
- Keyboard users: Must tab through all navigation

### After Implementation:
- Lighthouse Accessibility Score: 95+
- WCAG 2.1 Level: AA Compliant ✅
- Keyboard users: Can skip directly to content

---

## 🚨 Common Mistakes to Avoid

### ❌ WRONG:
```tsx
// Don't use div
<div id="main-content">

// Don't nest inside another div
<div>
  <main id="main-content">
```

### ✅ CORRECT:
```tsx
// Use main tag directly after SkipToContent
<SkipToContent />
<main id="main-content">
  {/* Content */}
</main>
```

---

## 📈 Progress Tracking

**Completed**: 1/15 pages (6.7%)  
**Remaining**: 14 pages  
**Estimated Time**: 1.5 hours remaining  
**Target Completion**: Today

### Time Breakdown:
- Per page: 6-8 minutes
- Testing per page: 2 minutes
- Total: ~120 minutes

---

## 🎯 Next Steps

1. **Implement on remaining 14 pages** (use this guide)
2. **Test keyboard navigation** on each page
3. **Run Lighthouse audit** to verify accessibility score
4. **Update this document** with completion status
5. **Mark task complete** in PHASE_3_ACTION_PLAN.md

---

**Last Updated**: November 4, 2025  
**Implemented By**: [Your Name]  
**Status**: HomePage complete, 14 pages remaining
