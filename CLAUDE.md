# CLAUDE.md - Project Guidelines
**Last updated:** 2026-04-01

---

## Quick Start
**Project:** Premium Food & Beverage Storefront
**Stack:** Next.js + TypeScript + Tailwind + Shadcn/ui + Framer Motion
**Goal:** Apple-grade minimal, clean UI with glassmorphism aesthetic
**Timeline:** Complete implementation from scratch

---

## 1. Project Overview

### Vision
Build a high-end food & beverage storefront with:
- Modern, minimal design (Apple / Vercel / Linear style)
- Smooth micro-interactions & animations
- Full dark mode support
- 100% responsive (mobile-first)
- WCAG 2.2 AA accessibility standards

### Core Brand Aesthetic
- **Typography:** Geist Sans (headings), Inter (body)
- **Colors:** Light & dark themes with glassmorphism
- **Spacing:** 4px grid system
- **Contrast:** Min 4.5:1 for all text
- **Motion:** Subtle, purposeful animations (no fluff)

---

## 2. Tech Stack & Setup

### Required Dependencies
```bash
npm install next@latest react@latest typescript
npm install tailwindcss postcss autoprefixer
npm install shadcn-ui @radix-ui/react-dialog framer-motion
npm install next-themes lucide-react
```

### Key Configurations
- **TypeScript:** Strict mode enabled
- **Tailwind:** Custom config with glassmorphism utilities
- **Next.js:** App Router (src/app structure)
- **Theming:** `next-themes` provider for light/dark switching

---

## 3. Project Architecture

### Folder Structure
```
src/
├── app/
│   ├── layout.tsx          # Root layout + theme provider
│   └── page.tsx            # Main storefront page
├── components/
│   ├── ui/                 # Shadcn base components
│   ├── features/
│   │   ├── StoreHeader.tsx
│   │   ├── CategoryNav.tsx
│   │   ├── ProductGrid.tsx
│   │   └── ProductModal.tsx
│   └── layout/
│       └── Container.tsx
├── lib/
│   ├── mock-data.ts        # Store & product data
│   ├── animation.ts        # Framer Motion variants
│   └── utils.ts            # Helper functions
└── types/
    └── index.ts            # TypeScript interfaces
```

---

## 4. Component Specifications

### A. StoreHeader Component
**Purpose:** Display brand identity and operating info

**Layout:**
- Avatar (rounded-full, 64px)
- Store name (large, bold)
- Status badge (Open/Closed)
- Info grid: Address, Hours, Phone (with Lucide icons)

**Styling:**
- Glassmorphism background (backdrop-blur, border)
- Responsive: Stack on mobile, flex-row on desktop
- Subtle shadows and borders

**Data Required:**
```typescript
{
  name: string
  avatar: string (image URL)
  status: "open" | "closed"
  address: string
  hours: string
  phone: string
}
```

### B. CategoryNav Component
**Purpose:** Filter products by category

**Desktop:**
- Vertical sidebar (left, sticky)
- Active state with sliding highlight
- Smooth scroll-to-section

**Mobile:**
- Horizontal scrollable bar (top)
- Category pills

**Categories:**
- Best Sellers (Món bán chạy)
- New Arrivals (Món mới)
- Food (Đồ ăn)
- Drinks (Đồ uống)

### C. ProductGrid Component
**Purpose:** Display products in responsive grid

**Layout:**
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3-4 columns

**Product Card:**
- Aspect-square image
- Product name & price
- Hover: Scale up + shadow grow
- Click: Open ProductModal

**Interactions:**
- Smooth hover transitions (Framer Motion)
- Price displayed as semi-bold

### D. ProductModal Component
**Purpose:** Detailed product view

**Trigger:** Click product card
**Content:**
- Image gallery (first image large, thumbnails below)
- Product name & price
- Full description
- "Add to Cart" button (primary action)

**Features:**
- Modal animation (fade + scale)
- Keyboard navigation support (Esc to close)
- Backdrop blur

---

## 5. Design System

### Color Palette
**Light Mode:**
- Background: #FFFFFF
- Text: #1A1A1A
- Accent: Brand primary (define based on aesthetic)
- Border: #E5E5E5

**Dark Mode:**
- Background: #0F0F0F
- Text: #FAFAFA
- Accent: Brand primary (adjusted)
- Border: #2A2A2A

### Typography
- **Headings:** Geist Sans, 600-700 weight
- **Body:** Inter, 400-500 weight
- **Scale:** 12px / 14px / 16px / 18px / 20px / 24px / 32px

### Spacing & Sizing
- Grid unit: 4px
- Common spacing: 8px, 16px, 24px, 32px, 48px
- Radius: 8px (cards), 12px (inputs)

---

## 6. Implementation Checklist

### Phase 1: Foundation
- [ ] Next.js project setup
- [ ] Install dependencies
- [ ] Configure TypeScript (strict mode)
- [ ] Setup Tailwind & global styles
- [ ] Create glassmorphism utility classes
- [ ] Setup theme provider (`next-themes`)
- [ ] Create type definitions (`src/types/index.ts`)
- [ ] Add mock data (`src/lib/mock-data.ts`)

### Phase 2: Components
- [ ] Build base UI components (from Shadcn)
- [ ] Create StoreHeader
- [ ] Create CategoryNav
- [ ] Create ProductCard (within Grid)
- [ ] Create ProductGrid
- [ ] Create ProductModal

### Phase 3: Integration
- [ ] Assemble main page (src/app/page.tsx)
- [ ] Wire up category filtering
- [ ] Add Framer Motion animations
- [ ] Test dark mode switching
- [ ] Implement responsive behavior

### Phase 4: Polish
- [ ] Accessibility audit (WCAG 2.2 AA)
- [ ] Performance optimization
- [ ] Responsive design testing
- [ ] Cross-browser testing
- [ ] Code cleanup & documentation

---

## 7. Mock Data

### Store Information
```typescript
export const STORE_DATA = {
  name: "Antigravity Premium Deli",
  avatar: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=200&h=200&auto=format&fit=crop",
  status: "open",
  address: "123 Minimalism St, Design District, SG",
  hours: "08:00 AM - 10:00 PM",
  phone: "+84 901 234 567",
};
```

### Categories
```typescript
export const CATEGORIES = [
  { id: "best-sellers", label: "Món bán chạy" },
  { id: "new-arrivals", label: "Món mới" },
  { id: "food", label: "Đồ ăn" },
  { id: "drinks", label: "Đồ uống" },
];
```

### Products
```typescript
export const PRODUCTS = [
  {
    id: "p1",
    categoryId: "best-sellers",
    name: "Truffle Wagyu Burger",
    price: 250000,
    description: "Thịt bò Wagyu thượng hạng kết hợp với sốt nấm Truffle đen đặc trưng, phô mai Gruyère tan chảy và rau mầm tươi.",
    images: [
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop"
    ],
  },
  {
    id: "p2",
    categoryId: "food",
    name: "Salmon Avocado Toast",
    price: 185000,
    description: "Bánh mì đen nướng giòn, cá hồi xông khói Na Uy, bơ sáp nghiền và trứng chần lòng đào mượt mà.",
    images: [
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop"
    ],
  },
  {
    id: "p3",
    categoryId: "drinks",
    name: "Cold Brew Nitro Coffee",
    price: 85000,
    description: "Cà phê ủ lạnh 24h bằng công nghệ Nitro tạo lớp bọt mịn màng như nhung và hậu vị ngọt thanh.",
    images: [
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=800&auto=format&fit=crop"
    ],
  },
  {
    id: "p4",
    categoryId: "drinks",
    name: "Matcha Latte Zen",
    price: 95000,
    description: "Bột Matcha cao cấp từ Uji, Nhật Bản hòa quyện cùng sữa yến mạch không đường, mang lại cảm giác thanh khiết.",
    images: [
      "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=800&auto=format&fit=crop"
    ],
  }
];
```

---

## 8. Key Development Notes

### Accessibility (WCAG 2.2 AA)
- Use semantic HTML (`<button>`, `<nav>`, `<article>`)
- Ensure 4.5:1 contrast on all text
- Support keyboard navigation (Tab, Escape)
- Add ARIA labels for icons & interactive elements
- Test with screen readers

### Animation Best Practices
- Keep animations under 300ms for snappy feel
- Use `framer-motion` for consistency
- No auto-playing animations on load (respect `prefers-reduced-motion`)

### Performance
- Optimize images (next/image)
- Lazy load components if needed
- Minimize re-renders with React.memo for cards
- Code-split modal component if possible

### Responsive Design
- Mobile-first approach
- Use Tailwind breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Test on real devices, not just browser DevTools

---

## 9. Decision Log
*Document important architectural or design decisions here.*

(Add entries as decisions are made during implementation)

---

## Questions?
Refer back to this document before implementing. If unclear, clarify with the team before coding.
