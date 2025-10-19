// src/types/product.ts

export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'shoes' | 'clothes' | 'bags' | 'accessories';
  image: string;
  description: string;
  sizes?: string[];
  colors?: string[];
  inStock: boolean;
  rating?: number;
  reviews?: number;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}
