export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  brand: string;
  rating: number;
  reviews: number;
  description: string;
  features: string[];
  specifications: Record<string, string>;
  inStock: boolean;
  stockQuantity: number;
  isNew?: boolean;
  isFeatured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  isAdmin?: boolean;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  createdAt: string;
  shippingAddress: {
    name: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
  };
}

export interface FilterOptions {
  category: string;
  priceRange: [number, number];
  brand: string;
  rating: number;
  inStock: boolean;
}