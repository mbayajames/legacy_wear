import { Link } from 'react-router-dom';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { toast } from 'sonner';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, getTotalItems, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <div className="text-center py-20 animate-fade-in">
            <ShoppingBag className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Your Cart is Empty</h2>
            <p className="text-muted-foreground mb-8">Start shopping to add items to your cart</p>
            <Link to="/shoes">
              <Button variant="hero" size="lg">
                Start Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 animate-fade-in">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-card border border-border rounded-lg p-6 flex gap-6 animate-fade-in"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 object-cover rounded-lg"
                />
                
                <div className="flex-1">
                  <div className="flex justify-between mb-2">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <button
                      type="button"
                      onClick={() => {
                        removeFromCart(item.id);
                        toast.success(`${item.name} removed from cart`);
                      }}
                      className="text-destructive hover:text-destructive/80 transition-colors"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  {item.sizes && (
                    <p className="text-muted-foreground mb-4">Size: {item.sizes[0]}</p>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <label htmlFor={`quantity-${item.id}`} className="sr-only">
                        Quantity for {item.name}
                      </label>
                      <button
                        type="button"
                        onClick={() => {
                          updateQuantity(item.id, item.quantity - 1);
                          toast.success(`Updated ${item.name} quantity`);
                        }}
                        className="p-1 border border-border rounded hover:bg-secondary transition-colors"
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="text-lg font-semibold w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          updateQuantity(item.id, item.quantity + 1);
                          toast.success(`Updated ${item.name} quantity`);
                        }}
                        className="p-1 border border-border rounded hover:bg-secondary transition-colors"
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        ${item.price.toFixed(2)} each
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <Button
              variant="destructive"
              className="mt-4"
              onClick={() => {
                clearCart();
                toast.success('Cart cleared');
              }}
            >
              Clear Cart
            </Button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-lg p-6 sticky top-24 animate-slide-up">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold">${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-semibold text-primary">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Items</span>
                  <span className="font-semibold">{getTotalItems()}</span>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between text-xl">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-primary">${getTotalPrice().toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <Link to="/checkout">
                <Button variant="hero" size="lg" className="w-full mb-4">
                  Proceed to Checkout
                </Button>
              </Link>
              
              <Link to="/shoes">
                <Button variant="outline" className="w-full">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;