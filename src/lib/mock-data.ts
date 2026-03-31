import type { Store, Category, Product } from "@/types";

export const STORE_DATA: Store = {
  name: "Antigravity Premium Deli",
  avatar:
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=200&h=200&auto=format&fit=crop",
  status: "open",
  address: "123 Minimalism St, Design District, SG",
  hours: "08:00 AM - 10:00 PM",
  phone: "+84 901 234 567",
};

export const CATEGORIES: Category[] = [
  { id: "best-sellers", label: "Món bán chạy" },
  { id: "new-arrivals", label: "Món mới" },
  { id: "food", label: "Đồ ăn" },
  { id: "drinks", label: "Đồ uống" },
];

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    categoryId: "best-sellers",
    name: "Truffle Wagyu Burger",
    price: 250000,
    description:
      "Thịt bò Wagyu thượng hạng kết hợp với sốt nấm Truffle đen đặc trưng, phô mai Gruyère tan chảy và rau mầm tươi.",
    images: [
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop",
    ],
  },
  {
    id: "p2",
    categoryId: "food",
    name: "Salmon Avocado Toast",
    price: 185000,
    description:
      "Bánh mì đen nướng giòn, cá hồi xông khói Na Uy, bơ sáp nghiền và trứng chần lòng đào mượt mà.",
    images: [
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop",
    ],
  },
  {
    id: "p3",
    categoryId: "drinks",
    name: "Cold Brew Nitro Coffee",
    price: 85000,
    description:
      "Cà phê ủ lạnh 24h bằng công nghệ Nitro tạo lớp bọt mịn màng như nhung và hậu vị ngọt thanh.",
    images: [
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=800&auto=format&fit=crop",
    ],
  },
  {
    id: "p4",
    categoryId: "drinks",
    name: "Matcha Latte Zen",
    price: 95000,
    description:
      "Bột Matcha cao cấp từ Uji, Nhật Bản hòa quyện cùng sữa yến mạch không đường, mang lại cảm giác thanh khiết.",
    images: [
      "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=800&auto=format&fit=crop",
    ],
  },
];
