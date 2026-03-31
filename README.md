# Thu Tan — Premium Food & Beverage Storefront

Ứng dụng storefront thực phẩm & đồ uống cao cấp, xây dựng bằng **Next.js 16**, **Tailwind CSS**, **Framer Motion** và **Shadcn/ui** với thiết kế theo phong cách Apple / Linear / Vercel.

---

## Yêu cầu hệ thống

| Công cụ | Phiên bản tối thiểu |
|---------|---------------------|
| Node.js | >= 18.x             |
| npm     | >= 9.x              |

---

## Cài đặt & Chạy dự án

### 1. Clone hoặc mở thư mục dự án

```bash
cd thu-tan
```

### 2. Cài đặt dependencies

```bash
npm install
```

### 3. Chạy môi trường Development

```bash
npm run dev
```

Mở trình duyệt tại: [http://localhost:3000](http://localhost:3000)

---

## Các lệnh thường dùng

| Lệnh              | Mô tả                                      |
|-------------------|--------------------------------------------|
| `npm run dev`     | Khởi động server development (hot-reload)  |
| `npm run build`   | Build production                           |
| `npm run start`   | Chạy server production (sau khi build)     |
| `npm run lint`    | Kiểm tra lỗi ESLint                        |

---

## Cấu trúc dự án

```
thu-tan/
├── src/
│   ├── app/                  # Next.js App Router (layout, page)
│   ├── components/
│   │   ├── ui/               # Base Shadcn/ui components
│   │   ├── features/         # StoreHeader, CategorySidebar, ProductGrid, ProductModal
│   │   └── layout/           # ThemeProvider, root containers
│   ├── lib/
│   │   ├── mock-data.ts      # Dữ liệu mẫu (Store, Categories, Products)
│   │   ├── motion.ts         # Framer Motion variants
│   │   └── utils.ts          # Utility functions
│   └── types/                # TypeScript interfaces
├── public/                   # Static assets
├── tailwind.config.ts        # Cấu hình Tailwind CSS
├── next.config.ts            # Cấu hình Next.js
└── tsconfig.json             # Cấu hình TypeScript
```

---

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + Glassmorphism utilities
- **Components:** [Shadcn/ui](https://ui.shadcn.com/) (customized)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Theming:** [next-themes](https://github.com/pacocoursey/next-themes) (Dark mode)
- **Language:** TypeScript (Strict mode)

---

## Tính năng

- ✅ Dark / Light mode tự động theo hệ thống
- ✅ Glassmorphism UI (Apple / Linear style)
- ✅ Responsive: Mobile → Desktop
- ✅ Sidebar danh mục với active highlight effect
- ✅ Product Grid với hover animations
- ✅ Product Detail Modal với image gallery
- ✅ Framer Motion stagger & micro-interactions
- ✅ WCAG 2.2 AA accessibility

---

## Lưu ý khi phát triển

- **Dữ liệu mẫu** nằm tại `src/lib/mock-data.ts` — chỉnh sửa tại đây để thay đổi nội dung hiển thị.
- **Theme & màu sắc** được quản lý qua `tailwind.config.ts`.
- **Motion variants** dùng chung nằm tại `src/lib/motion.ts`.
