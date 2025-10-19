import { Link } from 'react-router-dom';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { toast } from 'sonner';
import '@/styles/Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, getTotalItems, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center py-20 animate-fade-in-scale">
            <ShoppingBag className="h-24 w-24 text-pink-500/50 mx-auto mb-6 animate-pulse-pink" />
            <h2 className="text-3xl font-bold mb-4 text-white">Your Cart is Empty</h2>
            <p className="text-gray-300 mb-8">Start shopping to add items to your cart</p>
            <Link to="/shoes">
              <Button className="bg-pink-500 text-black hover:bg-pink-600 px-8 py-3 rounded-md font-semibold transition-colors animate-pulse-pink">
                Start Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-extrabold mb-8 text-pink-500 animate-fade-in-scale">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <div
                key={item.id}
                className={`bg-gray-900 border border-pink-500/30 rounded-lg p-6 flex gap-6 hover:border-pink-500 transition-all hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] animate-slide-up delay-${Math.min(index, 10)}`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 object-cover rounded-lg border border-pink-500/20"
                />
                
                <div className="flex-1">
                  <div className="flex justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                    <button
                      type="button"
                      onClick={() => {
                        removeFromCart(item.id);
                        toast.success(`${item.name} removed from cart`);
                      }}
                      className="text-pink-500 hover:text-pink-600 transition-colors"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  {item.sizes && (
                    <p className="text-gray-300 mb-4">Size: {item.sizes[0]}</p>
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
                        className="p-1 border border-pink-500/30 rounded hover:bg-pink-500/20 transition-colors"
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        <Minus className="h-4 w-4 text-pink-500" />
                      </button>
                      <span className="text-lg font-semibold w-8 text-center text-white">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          updateQuantity(item.id, item.quantity + 1);
                          toast.success(`Updated ${item.name} quantity`);
                        }}
                        className="p-1 border border-pink-500/30 rounded hover:bg-pink-500/20 transition-colors"
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        <Plus className="h-4 w-4 text-pink-500" />
                      </button>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-2xl font-bold text-pink-500">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                      <div className="text-sm text-gray-300">
                        ${item.price.toFixed(2)} each
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <Button
              className="mt-4 bg-pink-500 text-black hover:bg-pink-600 rounded-md font-semibold transition-colors"
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
            <div className="bg-gray-900 border border-pink-500/30 rounded-lg p-6 sticky top-24 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all animate-slide-up">
              <h2 className="text-2xl font-bold mb-6 text-pink-500">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-300">Subtotal</span>
                  <span className="font-semibold text-white">${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Shipping</span>
                  <span className="font-semibold text-pink-500">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Items</span>
                  <span className="font-semibold text-white">{getTotalItems()}</span>
                </div>
                <div className="border-t border-pink-500/30 pt-4">
                  <div className="flex justify-between text-xl">
                    <span className="font-bold text-white">Total</span>
                    <span className="font-bold text-pink-500">${getTotalPrice().toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <Link to="/checkout">
                <Button className="w-full mb-4 bg-pink-500 text-black hover:bg-pink-600 rounded-md font-semibold transition-colors animate-pulse-pink">
                  Proceed to Checkout
                </Button>
              </Link>
              
              <Link to="/shoes">
                <Button className="w-full border border-pink-500 text-pink-500 hover:bg-pink-500/20 hover:text-pink-500 rounded-md font-semibold transition-colors">
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