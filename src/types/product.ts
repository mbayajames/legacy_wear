export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
  rating?: number;
  reviews?: number;
  inStock: boolean;
  colors?: string[];
  sizes?: string[];
  category: 'shoes' | 'clothes' | 'bags' | 'accessories';
}

export interface CartItem extends Product {
  quantity: number;
}