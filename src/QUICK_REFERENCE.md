# Quick Reference: Adding New Content

## 📝 Add a New Blog Article

**File**: `/data/articles.ts`  
**Time**: 3 minutes

```typescript
{
  id: 'my-article-slug',
  title: 'Article Title Here',
  excerpt: 'Brief description (1-2 sentences)',
  image: 'https://image-url.jpg',
  authorImage: 'https://author-pic.jpg',
  author: 'Sri Krishnamurthy, CFA',
  date: 'Nov 5, 2025',
  readTime: '8 min read',
  category: 'AI & Risk', // See categories below
  featured: false, // true = Featured badge
  views: 0,
  tags: ['Tag1', 'Tag2']
}
```

**Valid Categories**: 
- Technical Insights
- AI & Risk
- Model Risk
- Credit Risk
- Generative AI / GenAI
- Workforce Development
- MLOps

**Appears On**: HomePage, ThoughtLeadershipPage

---

## 📚 Add a New Course

**File**: `/data/coursesAndCertificates.ts`  
**Time**: 5 minutes

```typescript
'course-slug': {
  id: 'course-slug',
  title: 'Course Name',
  description: 'Short description',
  duration: '4 weeks',
  level: 'Beginner', // or 'Intermediate', 'Advanced'
  modules: 8,
  price: 599,
  instructor: 'Instructor Name',
  rating: 4.8,
  students: 2500,
  category: 'Category',
  detailedDescription: 'Full description',
  learningOutcomes: ['Outcome 1', 'Outcome 2'],
  prerequisites: ['Prereq 1', 'Prereq 2']
}
```

**Appears On**: CoursesPage, Certificate detail pages

---

## 🎓 Add a New Certificate Program

**File**: `/data/coursesAndCertificates.ts`  
**Time**: 8 minutes

```typescript
'cert-slug': {
  id: 'cert-slug',
  title: 'Certificate Name',
  shortDescription: 'Brief description',
  description: 'Full description',
  track: 'AI', // or 'Risk', 'Quant'
  duration: '12 weeks',
  format: 'Self-Paced', // or 'Cohort-Based'
  savings: '20%',
  color: 'from-blue-500 to-blue-600',
  price: 2499,
  courseIds: ['course-1', 'course-2'], // Must exist
  featured: true,
  outcomes: ['Learning outcome 1', 'Outcome 2'],
  recognizedBy: ['Company 1', 'Company 2']
}
```

**Appears On**: CertificateProgramsPage, HomePage

---

## 💬 Add a New Testimonial

**File**: `/data/testimonials.ts`  
**Time**: 2 minutes

```typescript
{
  id: 7,
  quote: "Testimonial text here",
  author: "Person Name",
  role: "Job Title",
  company: "Company Name",
  rating: 5
}
```

**Appears On**: HomePage (rotating), AboutPage

---

## 🏢 Add a New Partner Logo

**File**: `/data/partners.ts`  
**Time**: 1 minute

```typescript
{ name: 'Partner Name', category: 'client' }
// category: 'client', 'association', or 'technology'
```

**Appears On**: HomePage, AboutPage

---

## ✅ Checklist After Adding Content

- [ ] Saved the file
- [ ] Checked for typos
- [ ] Verified ID is unique
- [ ] Provided all required fields
- [ ] Tested on local dev server

---

## 📞 Need Help?

- **Data structure questions**: Check TypeScript interface in data file
- **Where it appears**: See "Appears On" above
- **Detailed guide**: See `/guidelines/MaintenanceGuide.md`
- **Design questions**: See `/guidelines/DesignSystem.md`

## 🎯 Pro Tips

1. **Use descriptive IDs**: `genai-best-practices` not `article-1`
2. **Keep excerpts concise**: 1-2 sentences max
3. **Use real images**: Unsplash URLs work great
4. **Set featured sparingly**: Only 1-2 articles should be featured
5. **Consistent dates**: Use format "MMM DD, YYYY"

---

**Last Updated**: November 3, 2025
