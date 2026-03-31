export interface Store {
  name: string;
  avatar: string;
  status: "open" | "closed";
  address: string;
  hours: string;
  phone: string;
}

export interface Category {
  id: string;
  label: string;
}

export interface Product {
  id: string;
  categoryId: string;
  name: string;
  price: number;
  description: string;
  images: string[];
}
