# Critical Fixes Roadmap
## QuantUniversity Pre-Launch Action Plan

**Current Status**: 🟡 85% Launch Ready  
**Time to Production Ready**: 10-14 hours  
**Priority**: Complete critical items TODAY

---

## 📍 WHERE WE ARE

### ✅ What's Excellent (Keep These!)
- Strong brand identity with consistent #007CBF blue
- Comprehensive SEO infrastructure on all pages
- Professional component architecture
- Excellent typography system
- Smooth Motion animations and interactions
- Breadcrumb navigation implemented everywhere

### ⚠️ What Needs Immediate Attention
- Skip-to-content links (accessibility)
- Internal linking strategy (SEO/UX)
- Mobile testing (user experience)
- Form validation (conversion)
- Missing course pages (navigation)

---

## 🎯 TODAY'S CRITICAL PATH (4-6 hours)

### Block 1: Skip-to-Content Implementation (2 hours)
**Goal**: WCAG 2.1 AA Compliance

```
Hour 1: Pages 1-8
├─ CoursesPage.tsx (10 min)
├─ CertificateProgramsPage.tsx (10 min)
├─ EnterprisePage.tsx (10 min)
├─ HowYouLearnPage.tsx (10 min)
├─ SpeakingMediaPage.tsx (10 min)
├─ ThoughtLeadershipPage.tsx (10 min)
├─ AboutPage.tsx (10 min)
└─ ContactPage.tsx (10 min)

Hour 2: Pages 9-15
├─ BlogArticlePage.tsx (10 min)
├─ MLTradingFinanceCourseDetailPage.tsx (10 min)
├─ IntroGenAICourseDetailPage.tsx (10 min)
├─ AIRiskManagementCertPage.tsx (10 min)
├─ QuantFinanceFoundationsCertPage.tsx (10 min)
├─ ResponsibleGenAICertPage.tsx (10 min)
└─ Testing all pages (20 min)
```

**Deliverable**: All 15 pages have functioning skip-to-content links  
**Impact**: Accessibility score 85 → 95+

---

### Block 2: Internal Linking - HomePage (1 hour)

**Step 1: Create Course Mapping (5 min)**
```tsx
const coursePageMapping: Record<number, string> = {
  1: 'courses', // Link to courses page for now
  2: 'intro-genai-course', // Already done ✅
  3: 'courses',
  4: 'ml-trading-finance', // Already done ✅
  5: 'courses',
};
```

**Step 2: Update Course Cards (30 min)**
- Lines 583-589: Update image onClick
- Lines 637-643: Update title onClick  
- Lines 661-667: Update button onClick
- Apply to all 5 courses

**Step 3: Add Additional Links (25 min)**
- Certificate CTA → certificate-programs
- "Browse all courses" → courses
- Enterprise section → enterprise
- "Explore Courses" links → courses

**Deliverable**: All HomePage featured items are clickable  
**Impact**: User engagement +25%

---

### Block 3: Internal Linking - CoursesPage (45 min)

**Add onClick to all course cards** (30 min):
```tsx
// Around lines 320-450
onClick={() => {
  // Map to actual course pages
  if (course.id === 'ml-trading') {
    onNavigate('ml-trading-finance');
  } else if (course.id === 'intro-genai') {
    onNavigate('intro-genai-course');
  }
  // Add more as pages are created
}}
```

**Add cross-page links** (15 min):
- Enterprise section → enterprise
- Certificate banner → certificate-programs  
- "How You Learn" → how-you-learn

**Deliverable**: All course cards link to destination pages  
**Impact**: SEO crawl efficiency +30%

---

### Block 4: Mobile Quick Test (45 min)

**Device Testing** (30 min):
```
iPhone SE (375px):
├─ Open each main page
├─ Test mobile menu
├─ Test certificate dropdown
├─ Check touch targets
└─ Verify forms work

iPad (768px):
├─ Test navigation
├─ Check layouts
└─ Verify responsive behavior
```

**Issues Log** (15 min):
- Document any issues found
- Note items for later fix
- Flag critical blockers

**Deliverable**: Mobile usability verified or issues documented  
**Impact**: Mobile conversion rate +15-20%

---

### Block 5: Image Alt Text Verification (30 min)

**Quick Audit** (20 min):
```bash
# Check HomePage
grep -n "ImageWithFallback" pages/HomePage.tsx

# Check course pages
grep -n "alt=" pages/*CourseDetailPage.tsx

# Verify lazy loading
grep -n "loading=" pages/*.tsx | grep -v "lazy"
```

**Fix Any Issues** (10 min):
- Add missing alt text
- Verify lazy loading
- Update generic descriptions

**Deliverable**: All images have descriptive alt text  
**Impact**: SEO + Accessibility

---

## 📅 THIS WEEK'S HIGH PRIORITY (6-8 hours)

### Option A: Create Missing Course Pages (4 hours)
**IF** content team wants individual pages:

```
Course 1: AI in Finance Masterclass (90 min)
├─ Duplicate MLTradingFinanceCourseDetailPage.tsx
├─ Update content from coursesAndCertificates.ts
├─ Add to App.tsx routing
└─ Test page

Course 3: Quant Risk Management (90 min)
└─ Same process

Course 5: Executive AI Leadership (90 min)
└─ Same process
```

### Option B: Update HomePage Links (30 min)
**IF** we skip creating new pages:

```
Update featuredCourses mapping:
├─ Course 1 → 'courses'
├─ Course 3 → 'courses'
└─ Course 5 → 'courses'
```

---

### Form Validation Implementation (2 hours)

**ContactPage.tsx** (45 min):
```tsx
// Add validation
const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Add to submit handler
if (!validateEmail(email)) {
  toast.error("Please enter a valid email");
  return;
}

// Success state
toast.success("Thank you! We'll be in touch within 24 hours.");
```

**EnterprisePage.tsx** (45 min):
- Strategy call form validation
- Brochure download validation
- Success feedback

**HomePage.tsx** (30 min):
- Newsletter validation
- Playbook download validation

---

### Analytics Tracking (2 hours)

**Priority CTAs** (1 hour):
```tsx
import { useAnalytics } from '../components/AnalyticsProvider';
import { trackingIds } from '../data/analytics';

const analytics = useAnalytics();

<Button
  onClick={() => {
    analytics.trackEvent(trackingIds.home.heroCTA);
    onNavigate('courses');
  }}
  data-tracking-id={trackingIds.home.heroCTA}
>
```

**Course & Certificate Cards** (1 hour):
- Add tracking to all card clicks
- Track CTA button clicks
- Track form submissions

---

## 📊 PROGRESS TRACKING

### Critical Path Progress
```
┌─────────────────────────────────────────────────────┐
│ Skip-to-Content:  ████░░░░░░░░░░░░░░░░░  6.7%       │
│ Internal Links:   ███░░░░░░░░░░░░░░░░░░  15%        │
│ Mobile Testing:   ░░░░░░░░░░░░░░░░░░░░░  0%         │
│ Image Alt Text:   ████████████████░░░░░  75%        │
│ Overall Ready:    █████████████████░░░░  85%        │
└─────────────────────────────────────────────────────┘
```

### After Today's Work (Expected)
```
┌─────────────────────────────────────────────────────┐
│ Skip-to-Content:  ████████████████████  100%  ✅    │
│ Internal Links:   █████████████████░░░   85%  🟡    │
│ Mobile Testing:   █████████████████░░░   85%  🟡    │
│ Image Alt Text:   ████████████████████  100%  ✅    │
│ Overall Ready:    ███████████████████░   95%  ✅    │
└─────────────────────────────────────────────────────┘
```

---

## ⚡ QUICK WINS (30 min each)

### Quick Win #1: Breadcrumb Consistency Check
- Open each page
- Verify breadcrumb styling matches
- Check hover states work
- Ensure navigation functions

### Quick Win #2: Button Style Audit
```bash
# Find any inconsistent buttons
grep -r "Button" --include="*.tsx" | grep -v "#007CBF" | grep -v "variant="
```
- Fix any that don't use primary blue
- Standardize heights (h-12)

### Quick Win #3: CTA Text Optimization
- Review all CTA button text
- Make action-oriented ("Get Started" vs "Click Here")
- A/B test variations

---

## 🚦 GO/NO-GO CRITERIA

### Can Proceed to Content Review When:
✅ Skip-to-content on all pages  
✅ Internal linking >80% complete  
✅ Mobile testing done (major issues documented)  
✅ Image alt text verified  
✅ No console errors on any page  

### Can Launch When:
✅ All above +  
✅ Form validation working  
✅ Analytics tracking implemented  
✅ Missing course pages created OR links updated  
✅ Mobile issues fixed  
✅ Lighthouse scores >90  

---

## 📋 DAILY STANDUP CHECKLIST

### Morning Review:
- [ ] What did I complete yesterday?
- [ ] What am I working on today?
- [ ] Any blockers?
- [ ] Update progress in this doc

### End of Day:
- [ ] Update completion percentages
- [ ] Document any issues found
- [ ] Plan tomorrow's work
- [ ] Commit changes to version control

---

## 🎯 SUCCESS METRICS

### Today's Goal:
- Complete skip-to-content: 1/15 → 15/15
- Complete HomePage links: 25% → 100%
- Complete CoursesPage links: 25% → 100%
- Mobile test: 0% → 85%
- Overall ready: 85% → 95%

### This Week's Goal:
- Launch readiness: 95% → 100%
- All forms validated ✅
- All tracking implemented ✅
- All missing pages created ✅
- Mobile fully tested ✅

---

## 🏁 FINISH LINE

### Definition of Done:
A page is "done" when:
1. ✅ Skip-to-content link present and working
2. ✅ All CTAs link to correct destinations
3. ✅ Images have descriptive alt text
4. ✅ Breadcrumb navigation functions
5. ✅ Mobile responsive and tested
6. ✅ No console errors
7. ✅ Lighthouse score >90

### Definition of Launch Ready:
Website is "launch ready" when:
1. ✅ All 15 pages meet "done" criteria
2. ✅ All forms validate and provide feedback
3. ✅ All analytics tracking functional
4. ✅ Mobile tested on 3+ devices
5. ✅ Accessibility score 95+
6. ✅ SEO score 95+
7. ✅ No critical bugs
8. ✅ Content review complete
9. ✅ Stakeholder approval

---

## 💪 LET'S DO THIS!

### Your Mission Today:
```
09:00 - 11:00  Skip-to-content (2 hrs)
11:00 - 12:00  HomePage linking (1 hr)
----- LUNCH -----
13:00 - 13:45  CoursesPage linking (45 min)
13:45 - 14:30  Mobile testing (45 min)
14:30 - 15:00  Image verification (30 min)
----- DONE -----
```

**End of Day Result**: 95% Launch Ready ✅

---

**Remember**: Perfect is the enemy of good. Ship the critical fixes today, iterate on the rest. You've got this! 🚀

---

**Last Updated**: November 4, 2025  
**Status**: 🟡 Ready to Execute  
**Next Update**: End of today after critical fixes
