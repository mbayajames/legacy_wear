import { Product } from '@/types/product';

export const products: Product[] = [
  // Shoes
  {
    id: 'shoe-1',
    name: 'Classic Pink Sneakers',
    price: 89.99,
    category: 'shoes',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500',
    description: 'Comfortable and stylish pink sneakers for everyday wear',
    sizes: ['36', '37', '38', '39', '40', '41', '42'],
    colors: ['Pink', 'Black', 'White'],
    inStock: true,
    rating: 4.5,
    reviews: 128
  },
  {
    id: 'shoe-2',
    name: 'Elegant Heels',
    price: 129.99,
    category: 'shoes',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500',
    description: 'Perfect heels for special occasions',
    sizes: ['36', '37', '38', '39', '40', '41'],
    colors: ['Black', 'Pink', 'Red'],
    inStock: true,
    rating: 4.8,
    reviews: 89
  },
  {
    id: 'shoe-3',
    name: 'Sport Running Shoes',
    price: 99.99,
    category: 'shoes',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
    description: 'High-performance running shoes',
    sizes: ['37', '38', '39', '40', '41', '42', '43'],
    colors: ['Black', 'Pink', 'Grey'],
    inStock: true,
    rating: 4.7,
    reviews: 245
  },
  // Clothes
  {
    id: 'cloth-1',
    name: 'Designer Summer Dress',
    price: 149.99,
    category: 'clothes',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500',
    description: 'Beautiful summer dress with elegant design',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Pink', 'Black', 'White'],
    inStock: true,
    rating: 4.9,
    reviews: 156
  },
  {
    id: 'cloth-2',
    name: 'Casual T-Shirt',
    price: 39.99,
    category: 'clothes',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
    description: 'Comfortable cotton t-shirt for everyday wear',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Pink', 'White', 'Grey'],
    inStock: true,
    rating: 4.6,
    reviews: 312
  },
  {
    id: 'cloth-3',
    name: 'Premium Jacket',
    price: 199.99,
    category: 'clothes',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500',
    description: 'Stylish jacket for all seasons',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Pink'],
    inStock: true,
    rating: 4.8,
    reviews: 94
  },
  // Bags
  {
    id: 'bag-1',
    name: 'Luxury Handbag',
    price: 249.99,
    category: 'bags',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500',
    description: 'Premium leather handbag with elegant design',
    colors: ['Black', 'Pink', 'Brown'],
    inStock: true,
    rating: 4.9,
    reviews: 178
  },
  {
    id: 'bag-2',
    name: 'Backpack Deluxe',
    price: 89.99,
    category: 'bags',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500',
    description: 'Spacious and stylish backpack',
    colors: ['Black', 'Pink', 'Grey'],
    inStock: true,
    rating: 4.7,
    reviews: 203
  },
  {
    id: 'bag-3',
    name: 'Clutch Evening Bag',
    price: 79.99,
    category: 'bags',
    image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=500',
    description: 'Perfect for evening events',
    colors: ['Black', 'Pink', 'Gold'],
    inStock: true,
    rating: 4.6,
    reviews: 87
  },
  // Accessories
  {
    id: 'acc-1',
    name: 'Luxury Watch',
    price: 299.99,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500',
    description: 'Elegant timepiece for any occasion',
    colors: ['Black', 'Gold', 'Silver'],
    inStock: true,
    rating: 4.9,
    reviews: 134
  },
  {
    id: 'acc-2',
    name: 'Designer Sunglasses',
    price: 129.99,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500',
    description: 'Stylish UV protection sunglasses',
    colors: ['Black', 'Pink', 'Brown'],
    inStock: true,
    rating: 4.7,
    reviews: 256
  },
  {
    id: 'acc-3',
    name: 'Statement Necklace',
    price: 59.99,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500',
    description: 'Beautiful jewelry piece',
    colors: ['Gold', 'Silver', 'Rose Gold'],
    inStock: true,
    rating: 4.8,
    reviews: 167
  },
];