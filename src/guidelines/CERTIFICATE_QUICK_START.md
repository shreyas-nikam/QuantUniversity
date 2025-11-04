# Certificate Quick Start Guide

Quick reference for adding new certificate programs to QuantUniversity.

## Quick Add Checklist

- [ ] Add courses to `/data/coursesAndCertificates.ts` (if new)
- [ ] Add certificate definition to `/data/coursesAndCertificates.ts`
- [ ] Create page file in `/pages/[Name]CertPage.tsx`
- [ ] Import component in `/App.tsx`
- [ ] Add route to PageType in `/App.tsx`
- [ ] Add case to renderPage() in `/App.tsx`
- [ ] Test the certificate page

## 1. Add Certificate Data

Edit `/data/coursesAndCertificates.ts`:

```typescript
export const certificates: Record<string, Certificate> = {
  'your-cert-id': {
    id: 'your-cert-id',
    title: 'Your Certificate Title',
    shortDescription: 'Brief tagline',
    description: 'Full description',
    track: 'AI' | 'Risk' | 'Quant',
    duration: '12 weeks',
    format: 'Self-Paced' | 'Cohort-Based',
    savings: '20%',
    color: 'from-blue-500 to-blue-600',
    price: 2499,
    courseIds: ['course-1', 'course-2', 'course-3'],
    featured: true,
    outcomes: ['Outcome 1', 'Outcome 2', ...],
    recognizedBy: ['Company 1', 'Company 2', ...]
  }
};
```

## 2. Create Page Component

Create `/pages/YourCertificateCertPage.tsx`:

```typescript
import { CertificateDetailPage } from '../components/CertificateDetailPage';
import { certificates } from '../data/coursesAndCertificates';

interface YourCertificateCertPageProps {
  onNavigate: (page: string) => void;
}

export function YourCertificateCertPage({ onNavigate }: YourCertificateCertPageProps) {
  const certificate = certificates['your-cert-id'];
  return <CertificateDetailPage certificate={certificate} onNavigate={onNavigate} />;
}
```

## 3. Add Route

Edit `/App.tsx`:

```typescript
// 1. Import
import { YourCertificateCertPage } from './pages/YourCertificateCertPage';

// 2. Add to PageType
type PageType = '...' | 'your-cert-route';

// 3. Add case in renderPage()
case 'your-cert-route':
  return <YourCertificateCertPage onNavigate={handleNavigate} />;
```

## Field Reference

### Required Certificate Fields
- `id`: Unique identifier (kebab-case)
- `title`: Display name
- `shortDescription`: Card description
- `description`: Full description
- `track`: 'AI', 'Risk', or 'Quant'
- `duration`: e.g., '12 weeks'
- `format`: 'Self-Paced' or 'Cohort-Based'
- `savings`: e.g., '20%'
- `color`: Tailwind gradient classes
- `price`: Bundle price (number)
- `courseIds`: Array of course IDs
- `featured`: true/false
- `outcomes`: Array of outcomes
- `recognizedBy`: Array of companies

### Color Options
- Blue (AI): `'from-blue-500 to-blue-600'`
- Green (Quant): `'from-green-500 to-green-600'`
- Purple (GenAI): `'from-purple-500 to-purple-600'`

## Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| Certificate ID | kebab-case | `ai-risk-management` |
| File Name | PascalCase + CertPage.tsx | `AIRiskManagementCertPage.tsx` |
| Component Name | PascalCase + CertPage | `AIRiskManagementCertPage` |
| Route Name | kebab-case | `ai-risk-management` |

## Examples

### Existing Certificates
Look at these for reference:
- `/pages/AIRiskManagementCertPage.tsx`
- `/pages/QuantFinanceFoundationsCertPage.tsx`
- `/pages/ResponsibleGenAICertPage.tsx`

### Certificate Data Examples
See `/data/coursesAndCertificates.ts` for complete examples of:
- `'ai-risk-management'`
- `'quant-finance-foundations'`
- `'responsible-genai'`

## Common Mistakes

❌ **Don't:**
- Create custom certificate layouts (use CertificateDetailPage)
- Hardcode certificate content in components
- Forget to add route to App.tsx
- Use spaces in IDs (use kebab-case)
- Set price higher than individual course sum

✅ **Do:**
- Use the CertificateDetailPage component
- Define all content in coursesAndCertificates.ts
- Test on mobile and desktop
- Use consistent naming conventions
- Calculate realistic savings (15-30% off)

## Testing

After adding a certificate, test:

1. Navigate to certificate from Certificate Programs page
2. Check all course cards display
3. Verify pricing calculations are correct
4. Test video modal
5. Test course detail modals
6. Verify responsive design
7. Check back navigation works

## Need More Details?

See `/guidelines/GenerateCertificates.md` for comprehensive documentation.
