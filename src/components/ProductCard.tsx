import { useState } from 'react';
import type { Product } from '@/types/product';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string | null>(product.sizes ? product.sizes[0] : null);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    if (product.sizes && !selectedSize) {
      toast.error('Please select a size');
      return;
    }
    setIsAdding(true);
    try {
      addToCart({ ...product, sizes: selectedSize ? [selectedSize] : product.sizes }, 1);
      toast.success(`${product.name} added to cart`);
    } catch {
      toast.error('Failed to add to cart');
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className="group relative bg-gray-900 rounded-lg border border-pink-500/30 overflow-hidden transition-all hover:border-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] animate-slide-up">
      <style>
        {`
          @keyframes pulse-pink {
            0%, 100% { transform: scale(1); opacity: 0.7; }
            50% { transform: scale(1.1); opacity: 1; }
          }
          @keyframes slide-up {
            0% { transform: translateY(50px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          @keyframes fade-in-scale {
            0% { transform: scale(0.95); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
          .animate-pulse-pink {
            animation: pulse-pink 2s infinite ease-in-out;
          }
          .animate-slide-up {
            animation: slide-up 0.8s ease-out forwards;
          }
          .animate-fade-in-scale {
            animation: fade-in-scale 1s ease-out forwards;
          }
        `}
      </style>

      {/* Image */}
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
            <span className="text-pink-500 font-semibold">Out of Stock</span>
          </div>
        )}
        
        {/* Quick Add Button */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            className="w-full bg-pink-500 text-black hover:bg-pink-600 rounded-md font-semibold transition-colors animate-pulse-pink"
            onClick={handleAddToCart}
            disabled={!product.inStock || isAdding}
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            {isAdding ? 'Adding...' : 'Add to Cart'}
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-white group-hover:text-pink-500 transition-colors line-clamp-1">
            {product.name}
          </h3>
          {product.rating && (
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-pink-500 text-pink-500" aria-hidden="true" />
              <span className="text-sm text-gray-300">{product.rating}</span>
            </div>
          )}
        </div>
        
        <p className="text-sm text-gray-300 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between pt-2">
          <span className="text-2xl font-bold text-pink-500">
            ${product.price.toFixed(2)}
          </span>
          
          {product.reviews && (
            <span className="text-xs text-gray-300">
              {product.reviews} reviews
            </span>
          )}
        </div>

        {/* Sizes */}
        {product.sizes && product.sizes.length > 0 && (
          <div className="flex items-center space-x-2 pt-2">
            <label htmlFor={`size-${product.id}`} className="text-xs text-gray-300">
              Size:
            </label>
            <select
              id={`size-${product.id}`}
              value={selectedSize || ''}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="px-2 py-1 bg-gray-800 border border-pink-500/30 rounded-md text-sm text-white focus:outline-none focus:ring-2 focus:ring-pink-500 hover:bg-pink-500/10 transition-colors"
              aria-label={`Select size for ${product.name}`}
            >
              <option value="" disabled>Select size</option>
              {product.sizes.map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>
        )}

        {/* Colors */}
        {product.colors && product.colors.length > 0 && (
          <div className="flex items-center space-x-2 pt-2">
            <span className="text-xs text-gray-300">Colors:</span>
            <div className="flex space-x-1">
              {product.colors.slice(0, 3).map((color, index) => (
                <div
                  key={index}
                  className={`w-4 h-4 rounded-full border border-pink-500/30 transition-transform duration-300 group-hover:scale-125 ${
                    color.toLowerCase() === 'pink' ? 'bg-pink-500' :
                    color.toLowerCase() === 'black' ? 'bg-black' :
                    color.toLowerCase() === 'white' ? 'bg-white' :
                    color.toLowerCase() === 'grey' ? 'bg-gray-700' :
                    color.toLowerCase() === 'red' ? 'bg-pink-700' :
                    color.toLowerCase() === 'brown' ? 'bg-gray-900' :
                    color.toLowerCase() === 'gold' ? 'bg-pink-300' :
                    color.toLowerCase() === 'silver' ? 'bg-gray-500' :
                    color.toLowerCase() === 'rose gold' ? 'bg-pink-400' :
                    `bg-[${color.toLowerCase()}]`
                  }`}
                  title={color}
                  aria-label={`${color} color option`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;