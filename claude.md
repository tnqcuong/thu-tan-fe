# CLAUDE.md - Project Guidelines
**Last updated:** 2026-03-31

## 1. Context & Role
- **Role:** Senior Frontend Engineer & UI/UX Specialist.
- **Goal:** Build a modern, high-end food & beverage storefront.
- **Core Aesthetic:** Apple / Linear / Vercel style (Minimal, Clean, Professional, Glassmorphism).

## 2. Tech Stack & Requirements
- **Framework:** Next.js.
- **Styling:** Tailwind CSS, Lucide Icons.
- **Components:** Shadcn/ui (Customized for high-end feel).
- **Theming:** `next-themes` (Dark mode support 100%).
- **Animation:** `framer-motion` (Smooth transitions, stagger effects).
- **Type Safety:** TypeScript (Strict mode).
- **Typography:** Geist Sans (Headings) & Inter (Body).
- **Standards:** WCAG 2.2 AA (Accessible, Semantic HTML, Contrast >= 4.5:1).
- **Design System:** 4px spacing grid, consistent hierarchy.

## 3. Project Architecture
Organize the code into the following structure:
- `src/components/ui/`: Base Shadcn components.
- `src/components/features/`: StoreHeader, CategorySidebar, ProductGrid, ProductModal.
- `src/components/layout/`: Root layout and containers.
- `src/lib/`: Utility functions and Framer Motion variants.
- `src/types/`: Interfaces for Store and Product data.

## 4. Detailed Page Specifications
### A. Store Header (Brand Identity)
- **Layout:** Responsive flex/grid with store avatar (rounded-full).
- **Content:** Store name, Operating Status (Badge: Open/Closed), Address, Hours, Phone.
- **Icons:** Use Lucide icons for each piece of info.
- **Visual:** Light glassmorphism background with subtle border.

### B. Navigation & Sidebar
- **Left Sidebar (Desktop):** Sticky navigation with categories (Best Sellers, New Arrivals, Food, Drinks).
- **Interaction:** Smooth scroll to sections, active state with sliding highlight effect.
- **Mobile:** Horizontal scrollable category bar or a clean drawer.

### C. Product Sections (Body)
- **Grid:** Responsive cards (1 column mobile, 3-4 columns desktop).
- **Product Card:** Aspect-square image, hover scale effect, price tag with semi-bold font.
- **Micro-interactions:** Hover/Press states using Framer Motion.

### D. Product Detail Modal
- **Trigger:** Click on Product Card.
- **Component:** Shadcn `Dialog` with custom motion.
- **Details:** Multi-image gallery, rich description text, price, and primary Action Button.

## 5. Execution Instructions
1. **Plan first:** Output a step-by-step implementation plan.
2. **Setup Foundation:** Define Tailwind configuration, global CSS (glassmorphism utils), and theme provider.
3. **Component Development:** Build from atomic (UI) to composite (Features).
4. **Integration:** Assemble the main page with the provided Mock Data.
5. **Quality Check:** Ensure clean code, comments, and flawless responsiveness.

## 6. Mock Data (For Implementation)
*Please use this data to populate the UI. Store this in `src/lib/mock-data.ts`.*

```typescript
export const STORE_DATA = {
  name: "Antigravity Premium Deli",
  avatar: "[https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=200&h=200&auto=format&fit=crop](https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=200&h=200&auto=format&fit=crop)",
  status: "open", // "open" | "closed"
  address: "123 Minimalism St, Design District, SG",
  hours: "08:00 AM - 10:00 PM",
  phone: "+84 901 234 567",
};

export const CATEGORIES = [
  { id: "best-sellers", label: "Món bán chạy" },
  { id: "new-arrivals", label: "Món mới" },
  { id: "food", label: "Đồ ăn" },
  { id: "drinks", label: "Đồ uống" },
];

export const PRODUCTS = [
  {
    id: "p1",
    categoryId: "best-sellers",
    name: "Truffle Wagyu Burger",
    price: 250000,
    description: "Thịt bò Wagyu thượng hạng kết hợp với sốt nấm Truffle đen đặc trưng, phô mai Gruyère tan chảy và rau mầm tươi.",
    images: [
      "[https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop](https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop)",
      "[https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop](https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop)"
    ],
  },
  {
    id: "p2",
    categoryId: "food",
    name: "Salmon Avocado Toast",
    price: 185000,
    description: "Bánh mì đen nướng giòn, cá hồi xông khói Na Uy, bơ sáp nghiền và trứng chần lòng đào mượt mà.",
    images: [
      "[https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop](https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop)"
    ],
  },
  {
    id: "p3",
    categoryId: "drinks",
    name: "Cold Brew Nitro Coffee",
    price: 85000,
    description: "Cà phê ủ lạnh 24h bằng công nghệ Nitro tạo lớp bọt mịn màng như nhung và hậu vị ngọt thanh.",
    images: [
      "[https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=800&auto=format&fit=crop](https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=800&auto=format&fit=crop)"
    ],
  },
  {
    id: "p4",
    categoryId: "drinks",
    name: "Matcha Latte Zen",
    price: 95000,
    description: "Bột Matcha cao cấp từ Uji, Nhật Bản hòa quyện cùng sữa yến mạch không đường, mang lại cảm giác thanh khiết.",
    images: [
      "[https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=800&auto=format&fit=crop](https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=800&auto=format&fit=crop)"
    ],
  }
];