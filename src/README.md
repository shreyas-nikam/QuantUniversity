# QuantUniversity Website

A modern, education-first website for QuantUniversity — a leader in AI and finance education.

## 🎯 Overview

This website is designed to sell courses and subscriptions while projecting authority in AI and quantitative finance education. Built with React, TypeScript, and Tailwind CSS, it follows the exact specifications provided by your design team.

## 📄 Pages

### 1. Home Page (`/`)
**Goal**: Sell courses and subscriptions immediately while projecting authority

**Features**:
- Hero section with dual CTAs: "Explore Courses" and "Upskill Your Team"
- 3-pillar value proposition (Learn, Lead, Transform)
- Featured courses carousel with 5 bestsellers
- Global impact section showing reach across 13+ countries
- Founder introduction featuring Sri Krishnamurthy, CFA, CAP
- Blog teaser section with newsletter signup
- Lead magnet: Free AI Upskilling Playbook download

### 2. Courses & Certificates
**Goal**: Monetize individuals directly

**Features**:
- **Sticky multi-select filters** with category and difficulty levels (Beginner/Intermediate/Advanced/Executive)
- **Enhanced sort options**: Relevance, Popularity, Rating, Duration (shortest/longest), Price, Newest
- **Rich course cards** with:
  - Duration with hours per week (e.g., "12 weeks • 3 hrs/week")
  - User ratings with count (e.g., "⭐ 4.8 from 250")
  - CTA style variants ("Start Learning", "Enroll Now", "Apply Now")
- **Sticky certificate banner** with certificate mockup graphic
- **Floating mobile CTA** for certificate information
- **Horizontal enterprise CTA card** with team training image and benefits list

### 3. Learning Paths for Enterprises
**Goal**: Convert firms into corporate clients

**Features**:
- Hero: "Build AI Capability Across Your Organization"
- Stats showcase (150+ analysts trained, 40% reduction in audit time)
- 4-step process timeline (Assess → Train → Measure → Scale)
- Service offerings (AI Readiness Assessment, Team Certifications, Custom Workshops, LMS Integration)
- Case study: "Trained 150 analysts to implement ML risk frameworks"
- Client testimonials carousel
- Discovery call scheduling form

### 4. Thought Leadership & Blog
**Goal**: Authority building + SEO traffic

**Features**:
- Tabbed interface (Weekly Blog, Speaking & Media)
- Blog feed with 5,000+ readers tagline
- Speaking engagements showcase (Milken, CFA, BoA, Morgan Stanley)
- Newsletter signup sidebar
- Featured whitepaper promotion
- Popular topics filter

### 5. Whitepapers & Research (Gated)
**Goal**: Lead generation for advisory & enterprise courses

**Features**:
- Grid of research papers with download counts
- Gated lead capture form (Name, Email, Organization, Interest)
- Thank-you state with related course suggestions
- Automatic email delivery

### 6. About QuantUniversity
**Features**:
- Company story and founder biography
- Sri Krishnamurthy credentials and speaking highlights
- Mission & vision statements
- Timeline of company milestones (2015-2025)
- Core values showcase
- Global stats (10,000+ learners, 25+ enterprise clients, 13 countries)

### 7. Contact / Enroll Your Team
**Features**:
- Contact methods (Email, Phone, Global Presence)
- Simple form with interest dropdown options
- FAQ section
- Interactive global presence map
- "Let's Talk AI Upskilling" CTA

## 🎨 Design System

### Colors
- **Primary Blue**: #007CBF (QuantBlue)
- **Secondary Blue**: #006A9C
- **Accent**: #0EA5E9
- **Background**: #F9FAFB
- **Text**: #0F172A
- **Neutral**: #E5E7EB

### Typography
- **Font Family**: Inter (headings and body)
- **H1**: 64px / Line height 1.2
- **H2**: 48px / Line height 1.3
- **H3**: 32px / Line height 1.4
- **Body**: 18px / Line height 1.6

### Spacing
- **Section Padding**: 120px top/bottom
- **Block Gap**: 80px
- **Element Gap**: 32px
- **Sub Gap**: 24px

### Layout
- **Max Width**: 1440px
- **Grid**: 12 columns
- **Side Margins**: 80px
- **Gutters**: 32px

## 🚀 Key Features

### Conversion-Focused
- Multiple CTAs throughout every page
- Lead capture forms on Home, Enterprise, Whitepapers, and Contact pages
- Newsletter signups in footer and sidebars
- Clear value propositions

### Authority Building
- Founder credentials prominently displayed
- Speaking engagement showcase
- Client logos and testimonials
- Global reach statistics
- 5,000+ reader community

### Responsive Design
- Mobile-first approach
- Sticky navigation
- Collapsible mobile menu
- Responsive grid layouts

### Interactive Elements
- **Motion animations** using Framer Motion:
  - Floating particles in hero background
  - Smooth page transitions
  - Hover lift and glow effects
  - Animated CTAs with moving arrows
- **Micro-interactions**:
  - Card hover previews
  - Image scale effects
  - Icon animations
  - Testimonial rotation
- **Scrolling effects**:
  - Auto-scrolling logo marquee
  - Smooth reveal animations
- Course filtering and search
- Tabbed content sections
- Carousel components
- Modal forms

## 📱 Mobile Responsiveness

All pages are fully responsive with:
- Stacked layouts on mobile
- Touch-friendly navigation
- Optimized typography scaling
- Mobile-optimized forms

## 🔧 Technical Stack

- **React** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS v4.0** - Styling
- **Motion (Framer Motion)** - Animations and micro-interactions
- **Shadcn/UI** - Component library
- **Lucide React** - Icons
- **Unsplash** - Stock imagery

## 🎬 2025 Design Enhancements

### Sri Krishnamurthy Branding
- Prominent founder positioning throughout the site
- Video introduction elements with play overlays
- Quote blocks showcasing thought leadership
- Enhanced credentials and media mentions
- Personal highlights and speaking engagements

### Conversion-Centered Design (CCD)
- Subtle animations to guide user attention
- Urgency indicators ("Limited Seats" badges)
- Social proof elements (testimonials, ratings, student counts)
- Multiple strategic CTAs with hover states
- "Book a Discovery Call" footer CTA

### Visual Storytelling
- Motion backgrounds with animated particles
- Scrolling marquees for partner logos
- Rotating testimonials with smooth transitions
- Hover previews on course cards
- Dynamic badges and visual indicators
- Emoji iconography for personality

### Mobile-First Responsiveness
- Optimized touch targets for mobile
- Responsive animations
- Collapsible navigation
- Mobile-optimized card layouts
- Sticky CTAs for mobile conversion

## 📚 Course Detail Page Enhancements

### Interactive Hero
- **Video preview modal** with "Watch Course Preview" button
- Clickable preview button in enrollment card
- Play overlay showcasing intro lecture content

### Enhanced Course Summary
- **Emoji-based feature cards** (🎥 Videos, 🧪 Labs, 📊 Projects)
- Hover animations with scale effects
- Motion reveal animations on scroll

### Visual Course Stats
- **Dynamic progress bars** with contextual descriptions
- Animated stat reveals on viewport entry
- Industry benchmark comparisons (completion rate, job placement, recommendations)

### Content Highlights
- **Blue callout boxes** for key phrases and important information
- **"Key Outcomes" hero card** with gradient background
- Highlighted real-world applications and portfolio projects
- Icon-led benefit sections

### Accordion FAQ with Icons
- **Icon-based FAQ items** (Clock, HelpCircle, Code, Users, Award, AlertCircle)
- Expandable answers with embedded links
- Support links to refund policy, setup guides, and resources
- External link indicators

### Related Courses Carousel
- **Horizontally scrollable carousel** using custom ScrollableCarousel
- Visual course cards with images and stats
- **"Bundle & Save 20%" promotion** with highlighted CTA
- Responsive breakpoints (3 columns → 2 → 1)
- Custom QuantUniversity blue navigation dots and arrows

## 🎓 How You Learn Page Enhancements

### Interactive 3-Part Learning Journey (Explore • Experience • Excel)
- **Hover-to-expand cards** with smooth Motion animations
- Full-screen visual reveals showing contextual images
- **Inspirational 1-line quotes** in blue callout boxes
- Animated icon badges with gradient backgrounds
- "Hover to explore" hints for discoverability

### Platform Logo Cards (QuCreate.ai & QuSkillbridge.ai)
- **Clickable emoji-based logo cards** (🧠 Brain, ⚡ Lightning)
- **Visual platform screenshots** displayed on card preview (visible on desktop)
- Gradient overlay revealing screenshot preview on hover
- "Click to see platform demo" call-to-action
- **Interactive demo modals** with full platform screenshots
  - Large hero screenshot with "Platform Preview" badge
  - Feature lists with key capabilities
  - Real-time stats (content speed, active learners, ratings)
  - "Watch Demo" and "Learn More" CTAs for microsite exploration
- Hover scale effects and external link indicators
- Scrollable modal for comprehensive platform information

### Dynamic Testimonials Slider
- **Scrollable carousel** with professional headshots
- Real photos for authentic social proof
- **Sri Krishnamurthy featured testimonial** with special "From Our Founder" badge
- Firm names, job titles, and industry verticals displayed
- Star icon badge for Sri's highlighted testimonial
- Border highlighting for founder's card
- Responsive layout (3 columns → 2 → 1)

### Sticky CTAs
- **Fixed bottom-right "Browse Learning Paths" button** with BookOpen icon
- **Interactive "Course Advisor" chatbot trigger** with MessageCircle icon
- Animated entry with Motion (slides up after 1s delay)
- Scale hover effects on both buttons
- **Chatbot modal** with:
  - Friendly greeting message
  - Quick-action buttons (AI courses, enterprise, role-based paths)
  - Message input field
  - Dismissable card interface
  - AnimatePresence for smooth show/hide transitions

## 📊 Analytics & Conversion

The site is structured for easy integration with:
- Google Analytics 4
- HubSpot tracking
- Email marketing platforms
- CRM systems

Key conversion funnels:
1. Blog traffic → Email signup → Course purchase
2. Whitepaper download → Enterprise inquiry
3. Course browse → Individual enrollment
4. Homepage → Enterprise consultation

## 🎯 Business Goals

1. **Individual Course Sales**: Direct enrollment through course catalog
2. **Enterprise Contracts**: Custom training programs for organizations
3. **Lead Generation**: Email capture for nurture campaigns
4. **Authority Building**: Thought leadership content and speaking engagements
5. **Community Growth**: Newsletter subscribers and blog readership

## 🌐 Global Reach

Website supports QuantUniversity's presence in:
- United States (Headquarters)
- United Kingdom
- Singapore
- India
- And 9+ other countries

## 📈 Success Metrics

- Course enrollments
- Enterprise inquiries
- Newsletter subscriptions
- Whitepaper downloads
- Blog readership
- Speaking engagement requests

---

**Built with precision following exact design specifications to transform QuantUniversity's digital presence and drive measurable business outcomes.**
