# QuantUniversity Design System

## Color Palette

### Primary Colors
- **Primary Blue**: `#007CBF` - Main brand color for buttons, links, badges
- **Secondary Blue**: `#006A9C` - Hover states, secondary elements
- **Accent Blue**: `#0EA5E9` - Highlights and accents

### Unified Color Approach
- **All content uses Primary Blue (#007CBF)** - Courses, certificates, and all UI elements
- **No green, purple, or orange** - Removed for brand consistency
- **Exception**: Yellow for 2025 milestone highlight on About page

### Neutral Colors
- **Background**: `#F9FAFB` - Sections with light background
- **Text Primary**: `#0F172A` (text-gray-900)
- **Text Secondary**: `text-gray-600`, `text-gray-700`
- **Borders**: `border-gray-200`, `border-gray-300`

### Gradient Backgrounds
```css
/* Hero sections */
bg-gradient-to-br from-[#007CBF] via-[#006A9C] to-[#005580]

/* Certificate sections */
bg-gradient-to-br from-green-50 via-emerald-50 to-white

/* Light sections */
bg-gradient-to-br from-blue-50 to-white
bg-gradient-to-br from-gray-50 via-blue-50 to-white
```

## Typography

### Font Family
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
```

### Headings (DO NOT override these with Tailwind classes)
- **h1**: 64px (40px mobile), font-weight 700, line-height 1.2
- **h2**: 48px (32px mobile), font-weight 700, line-height 1.3
- **h3**: 32px (24px mobile), font-weight 700, line-height 1.4
- **h4**: 24px, font-weight 700, line-height 1.4

### Body Text
- **p**: 18px (16px mobile), line-height 1.6
- **text-xl**: Use for lead paragraphs and important descriptions
- **text-lg**: Use for secondary descriptions

### ⚠️ IMPORTANT: Do NOT use Tailwind typography classes
- ❌ DO NOT use: `text-2xl`, `text-3xl`, `text-4xl`, `text-5xl`, `text-6xl`
- ❌ DO NOT use: `font-bold`, `font-semibold` on headings (already set)
- ✅ DO use: Raw `<h1>`, `<h2>`, `<h3>`, `<h4>` tags without size classes
- ✅ DO use: `text-xl`, `text-lg`, `text-sm` for paragraph text only

## Spacing

### Section Padding
```css
/* Standard sections */
py-20

/* Hero sections */
py-32

/* Tight sections */
py-16
```

### Container
```html
<div className="max-w-[1440px] mx-auto px-8 lg:px-20">
```

### Gaps
- **Between sections**: `py-20` or `py-32`
- **Grid gaps**: `gap-8`, `gap-12`
- **Element gaps**: `gap-4`, `gap-6`

## Components

### Badges
```html
<!-- Primary badge -->
<Badge className="bg-[#007CBF]/10 text-[#007CBF] border-0">
  Badge Text
</Badge>

<!-- Certificate/Featured badge -->
<Badge className="bg-[#007CBF] text-white border-0">
  Certificate Badge
</Badge>

<!-- White badge on dark bg -->
<Badge className="bg-white/10 text-white border-white/20">
  White Badge
</Badge>
```

### Buttons
```html
<!-- Primary button -->
<Button className="bg-[#007CBF] hover:bg-[#006A9C] text-white h-12 px-8">
  Button Text
</Button>

<!-- All CTAs use Primary Blue -->
<Button className="bg-[#007CBF] hover:bg-[#006A9C] text-white h-12 px-8">
  Primary CTA
</Button>

<!-- Outline button -->
<Button variant="outline" className="border-2 border-gray-300 hover:border-[#007CBF] hover:text-[#007CBF] h-12 px-8">
  Outline Button
</Button>

<!-- White button on dark bg -->
<Button className="bg-white text-[#007CBF] hover:bg-gray-100">
  White Button
</Button>
```

### Cards
```html
<!-- Standard card -->
<Card className="border-2 border-gray-200 hover:border-[#007CBF] transition-all hover-lift">
  <CardContent className="p-8">
    <!-- Content -->
  </CardContent>
</Card>

<!-- Featured/Certificate card -->
<Card className="border-2 border-[#007CBF] bg-gradient-to-br from-blue-50 to-white">
  <CardContent className="p-8">
    <!-- Content -->
  </CardContent>
</Card>

<!-- Blue highlight card -->
<Card className="border-2 border-[#007CBF] bg-gradient-to-br from-blue-50 to-white">
  <CardContent className="p-8">
    <!-- Content -->
  </CardContent>
</Card>
```

### Section Headers
```html
<div className="text-center mb-16">
  <Badge className="mb-4 bg-[#007CBF]/10 text-[#007CBF] border-0">
    Section Category
  </Badge>
  <h2 className="text-gray-900 mb-4">Section Title</h2>
  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
    Section description goes here
  </p>
</div>
```

## Motion & Animations

### Hover Effects
```css
/* Lift on hover */
.hover-lift {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

/* Glow on hover */
.hover-glow:hover {
  box-shadow: 0 0 20px rgba(0, 124, 191, 0.3), 0 0 40px rgba(0, 124, 191, 0.1);
}
```

### Motion Components
```jsx
import { motion } from 'motion/react';

// Fade in on view
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: index * 0.1 }}
>
```

## Color Usage Rules

### When to Use Blue (#007CBF)
- Primary CTAs
- Course-related content
- Main navigation
- General badges and highlights
- Default hover states

### When to Use Primary Blue
- ✅ All course cards and badges
- ✅ All certificate program elements
- ✅ All badges (except red and yellow for emphasis)
- ✅ All buttons and CTAs
- ✅ All checkmarks and icons
- ✅ All borders and highlights

### Limited Use of Other Colors
- **Red**: Urgent badges only ("Limited Seats")
- **Yellow**: "Top Pick" badges and 2025 milestone highlight
- **Blue variations**: Only lighter shades (blue-50, blue-100) for backgrounds

## Background Patterns

### Light Sections
```html
<section className="py-20 bg-white">
```

### Alternating Sections
```html
<section className="py-20 bg-[#F9FAFB]">
```

### Hero Sections
```html
<section className="relative py-32 bg-gradient-to-br from-[#007CBF] via-[#006A9C] to-[#005580]">
  <!-- Animated background pattern -->
  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,...')] opacity-10"></div>
  <div className="max-w-[1440px] mx-auto px-8 lg:px-20 relative z-10">
    <!-- Content -->
  </div>
</section>
```

### All Hero Sections Use Primary Blue
```html
<section className="relative py-32 bg-gradient-to-br from-[#007CBF] via-[#006A9C] to-[#005580]">
  <div className="max-w-[1440px] mx-auto px-8 lg:px-20 relative z-10">
    <!-- Content -->
  </div>
</section>
```

## Icons

### Lucide React
```jsx
import { IconName } from 'lucide-react';

// Standard size
<Icon className="h-6 w-6 text-[#007CBF]" />

// Small size
<Icon className="h-4 w-4 text-[#007CBF]" />

// Large size
<Icon className="h-8 w-8 text-[#007CBF]" />
```

## Responsive Design

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Grid Patterns
```html
<!-- 2 columns on desktop -->
<div className="grid md:grid-cols-2 gap-8">

<!-- 3 columns -->
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<!-- 4 columns -->
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
```

## Best Practices

1. **Consistency**: Use the same component patterns across all pages
2. **Spacing**: Maintain consistent py-20 or py-32 for sections
3. **Typography**: Never override h1-h4 sizes with Tailwind classes
4. **Colors**: Stick to the defined color palette
5. **Hover States**: Always add hover-lift to cards
6. **Badges**: Use consistent badge styling for categories
7. **Buttons**: Maintain consistent button heights (h-12 or h-14)
8. **Containers**: Always use max-w-[1440px] mx-auto px-8 lg:px-20

## Common Mistakes to Avoid

❌ Using custom font sizes on headings (`text-3xl`, `text-4xl`, etc.)
❌ Using green for non-certificate content
❌ Inconsistent button heights
❌ Missing hover states on cards
❌ Using different container widths
❌ Skipping the section badge
❌ Inconsistent section padding

✅ Use semantic HTML headings (h1, h2, h3, h4)
✅ Green only for certificates
✅ Consistent button sizing (h-12 or h-14)
✅ hover-lift class on all cards
✅ max-w-[1440px] mx-auto px-8 lg:px-20
✅ Badge + h2 + description pattern
✅ py-20 or py-32 section padding
