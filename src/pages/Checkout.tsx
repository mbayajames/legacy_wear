import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { CreditCard, Smartphone, Building } from 'lucide-react';
import { toast } from 'sonner';

const Checkout = () => {
  const { cart, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<'mpesa' | 'card' | 'bank'>('mpesa');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    mpesaPhone: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const validateForm = () => {
    if (!formData.firstName || !formData.lastName) {
      toast.error('Please enter your full name');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return false;
    }
    if (!/^254\d{9}$/.test(formData.phone)) {
      toast.error('Please enter a valid Kenyan phone number (254XXXXXXXXX)');
      return false;
    }
    if (!formData.address || !formData.city || !formData.postalCode) {
      toast.error('Please complete all shipping address fields');
      return false;
    }
    if (paymentMethod === 'mpesa' && !/^254\d{9}$/.test(formData.mpesaPhone)) {
      toast.error('Please enter a valid M-Pesa phone number (254XXXXXXXXX)');
      return false;
    }
    if (paymentMethod === 'card') {
      if (!/^\d{16}$/.test(formData.cardNumber)) {
        toast.error('Please enter a valid 16-digit card number');
        return false;
      }
      if (!/^\d{2}\/\d{2}$/.test(formData.expiry)) {
        toast.error('Please enter a valid expiry date (MM/YY)');
        return false;
      }
      if (!/^\d{3}$/.test(formData.cvv)) {
        toast.error('Please enter a valid 3-digit CVV');
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    toast.success('Order placed successfully! 🎉');
    clearCart();
    setTimeout(() => navigate('/'), 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  if (cart.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="min-h-screen bg-black text-white py-16">
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
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-extrabold mb-8 text-pink-500 animate-fade-in-scale">Checkout</h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Billing Information */}
          <div className="bg-gray-900 border border-pink-500/30 rounded-lg p-6 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all animate-slide-up">
            <h2 className="text-2xl font-bold mb-6 text-pink-500">Billing Information</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium mb-2 text-gray-300">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-pink-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white hover:bg-pink-500/10 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium mb-2 text-gray-300">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-pink-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white hover:bg-pink-500/10 transition-colors"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-pink-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white hover:bg-pink-500/10 transition-colors"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-300">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="254XXXXXXXXX"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-pink-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white hover:bg-pink-500/10 transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="bg-gray-900 border border-pink-500/30 rounded-lg p-6 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all animate-slide-up">
            <h2 className="text-2xl font-bold mb-6 text-pink-500">Shipping Address</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="address" className="block text-sm font-medium mb-2 text-gray-300">Address</label>
                <input
                  id="address"
                  type="text"
                  placeholder="123 Main St"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-pink-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white hover:bg-pink-500/10 transition-colors"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium mb-2 text-gray-300">City</label>
                  <input
                    id="city"
                    type="text"
                    placeholder="Nairobi"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-gray-800 border border-pink-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white hover:bg-pink-500/10 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="postalCode" className="block text-sm font-medium mb-2 text-gray-300">Postal Code</label>
                  <input
                    id="postalCode"
                    type="text"
                    placeholder="00100"
                    required
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-gray-800 border border-pink-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white hover:bg-pink-500/10 transition-colors"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-gray-900 border border-pink-500/30 rounded-lg p-6 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all animate-slide-up">
            <h2 className="text-2xl font-bold mb-6 text-pink-500">Payment Method</h2>
            
            <div className="grid gap-4 mb-6">
              <label className={`flex items-center gap-4 p-4 border-2 rounded-lg transition-all cursor-pointer ${
                paymentMethod === 'mpesa' ? 'border-pink-500 bg-pink-500/10' : 'border-pink-500/30 hover:border-pink-500/50'
              } animate-pulse-pink`}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="mpesa"
                  checked={paymentMethod === 'mpesa'}
                  onChange={() => setPaymentMethod('mpesa')}
                  className="h-5 w-5 text-pink-500 focus:ring-pink-500"
                />
                <Smartphone className="h-6 w-6 text-pink-500" />
                <div className="text-left">
                  <div className="font-semibold text-white">M-Pesa</div>
                  <div className="text-sm text-gray-300">Pay with M-Pesa mobile money</div>
                </div>
              </label>

              <label className={`flex items-center gap-4 p-4 border-2 rounded-lg transition-all cursor-pointer ${
                paymentMethod === 'card' ? 'border-pink-500 bg-pink-500/10' : 'border-pink-500/30 hover:border-pink-500/50'
              } animate-pulse-pink`}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={() => setPaymentMethod('card')}
                  className="h-5 w-5 text-pink-500 focus:ring-pink-500"
                />
                <CreditCard className="h-6 w-6 text-pink-500" />
                <div className="text-left">
                  <div className="font-semibold text-white">Credit/Debit Card</div>
                  <div className="text-sm text-gray-300">Visa, Mastercard accepted</div>
                </div>
              </label>

              <label className={`flex items-center gap-4 p-4 border-2 rounded-lg transition-all cursor-pointer ${
                paymentMethod === 'bank' ? 'border-pink-500 bg-pink-500/10' : 'border-pink-500/30 hover:border-pink-500/50'
              } animate-pulse-pink`}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="bank"
                  checked={paymentMethod === 'bank'}
                  onChange={() => setPaymentMethod('bank')}
                  className="h-5 w-5 text-pink-500 focus:ring-pink-500"
                />
                <Building className="h-6 w-6 text-pink-500" />
                <div className="text-left">
                  <div className="font-semibold text-white">Bank Transfer</div>
                  <div className="text-sm text-gray-300">Direct bank payment</div>
                </div>
              </label>
            </div>

            {paymentMethod === 'mpesa' && (
              <div className="space-y-4 p-4 bg-pink-500/10 rounded-lg">
                <div>
                  <label htmlFor="mpesaPhone" className="block text-sm font-medium mb-2 text-gray-300">M-Pesa Phone Number</label>
                  <input
                    id="mpesaPhone"
                    type="tel"
                    placeholder="254XXXXXXXXX"
                    required
                    value={formData.mpesaPhone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-gray-800 border border-pink-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white hover:bg-pink-500/10 transition-colors"
                  />
                </div>
              </div>
            )}

            {paymentMethod === 'card' && (
              <div className="space-y-4 p-4 bg-pink-500/10 rounded-lg">
                <div>
                  <label htmlFor="cardNumber" className="block text-sm font-medium mb-2 text-gray-300">Card Number</label>
                  <input
                    id="cardNumber"
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    required
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-gray-800 border border-pink-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white hover:bg-pink-500/10 transition-colors"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="expiry" className="block text-sm font-medium mb-2 text-gray-300">Expiry Date</label>
                    <input
                      id="expiry"
                      type="text"
                      placeholder="MM/YY"
                      required
                      value={formData.expiry}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-gray-800 border border-pink-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white hover:bg-pink-500/10 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="cvv" className="block text-sm font-medium mb-2 text-gray-300">CVV</label>
                    <input
                      id="cvv"
                      type="password"
                      placeholder="123"
                      required
                      value={formData.cvv}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-gray-800 border border-pink-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white hover:bg-pink-500/10 transition-colors"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="bg-gray-900 border border-pink-500/30 rounded-lg p-6 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all animate-slide-up">
            <h2 className="text-2xl font-bold mb-6 text-pink-500">Order Summary</h2>
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-gray-300">
                    {item.name} x {item.quantity} {item.sizes ? `(Size: ${item.sizes[0]})` : ''}
                  </span>
                  <span className="font-semibold text-white">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t border-pink-500/30 pt-4">
                <div className="flex justify-between text-xl font-bold">
                  <span className="text-white">Total</span>
                  <span className="text-pink-500">${getTotalPrice().toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <Button type="submit" className="flex-1 bg-pink-500 text-black hover:bg-pink-600 rounded-md font-semibold transition-colors animate-pulse-pink">
              Complete Order
            </Button>
            <Link to="/cart">
              <Button className="flex-1 border border-pink-500 text-pink-500 hover:bg-pink-500/20 hover:text-pink-500 rounded-md font-semibold transition-colors">
                Back to Cart
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;