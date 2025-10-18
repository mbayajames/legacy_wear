import { useState } from 'react';
import { Product } from '@/types/product';
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
    <div className="group relative bg-card rounded-lg border border-border overflow-hidden transition-all hover:border-primary hover:shadow-[var(--shadow-card)] animate-fade-in">
      {/* Image */}
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-semibold">Out of Stock</span>
          </div>
        )}
        
        {/* Quick Add Button */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            variant="hero"
            className="w-full"
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
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
            {product.name}
          </h3>
          {product.rating && (
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
              <span className="text-sm text-muted-foreground">{product.rating}</span>
            </div>
          )}
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between pt-2">
          <span className="text-2xl font-bold text-primary">
            ${product.price.toFixed(2)}
          </span>
          
          {product.reviews && (
            <span className="text-xs text-muted-foreground">
              {product.reviews} reviews
            </span>
          )}
        </div>

        {/* Sizes */}
        {product.sizes && product.sizes.length > 0 && (
          <div className="flex items-center space-x-2 pt-2">
            <label htmlFor={`size-${product.id}`} className="text-xs text-muted-foreground">
              Size:
            </label>
            <select
              id={`size-${product.id}`}
              value={selectedSize || ''}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="px-2 py-1 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
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
            <span className="text-xs text-muted-foreground">Colors:</span>
            <div className="flex space-x-1">
              {product.colors.slice(0, 3).map((color, index) => (
                <div
                  key={index}
                  className={`w-4 h-4 rounded-full border border-border transition-transform duration-300 group-hover:scale-125 ${
                    color.toLowerCase() === 'pink' ? 'bg-[hsl(var(--primary))]' :
                    color.toLowerCase() === 'black' ? 'bg-black' :
                    color.toLowerCase() === 'white' ? 'bg-white' :
                    color.toLowerCase() === 'grey' ? 'bg-gray-500' :
                    color.toLowerCase() === 'red' ? 'bg-red-500' :
                    color.toLowerCase() === 'brown' ? 'bg-brown-500' :
                    color.toLowerCase() === 'gold' ? 'bg-yellow-600' :
                    color.toLowerCase() === 'silver' ? 'bg-gray-300' :
                    color.toLowerCase() === 'rose gold' ? 'bg-rose-300' :
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