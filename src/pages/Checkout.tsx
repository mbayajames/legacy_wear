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
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 animate-fade-in">Checkout</h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Billing Information */}
          <div className="bg-card border border-border rounded-lg p-6 animate-slide-up">
            <h2 className="text-2xl font-semibold mb-6">Billing Information</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="254XXXXXXXXX"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="bg-card border border-border rounded-lg p-6 animate-slide-up">
            <h2 className="text-2xl font-semibold mb-6">Shipping Address</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="address" className="block text-sm font-medium mb-2">Address</label>
                <input
                  id="address"
                  type="text"
                  placeholder="123 Main St"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium mb-2">City</label>
                  <input
                    id="city"
                    type="text"
                    placeholder="Nairobi"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="postalCode" className="block text-sm font-medium mb-2">Postal Code</label>
                  <input
                    id="postalCode"
                    type="text"
                    placeholder="00100"
                    required
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-card border border-border rounded-lg p-6 animate-slide-up">
            <h2 className="text-2xl font-semibold mb-6">Payment Method</h2>
            
            <div className="grid gap-4 mb-6">
              <label className={`flex items-center gap-4 p-4 border-2 rounded-lg transition-all cursor-pointer ${
                paymentMethod === 'mpesa' ? 'border-primary bg-primary/10' : 'border-border hover:border-primary/50'
              }`}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="mpesa"
                  checked={paymentMethod === 'mpesa'}
                  onChange={() => setPaymentMethod('mpesa')}
                  className="h-5 w-5 text-primary focus:ring-primary"
                />
                <Smartphone className="h-6 w-6 text-primary" />
                <div className="text-left">
                  <div className="font-semibold">M-Pesa</div>
                  <div className="text-sm text-muted-foreground">Pay with M-Pesa mobile money</div>
                </div>
              </label>

              <label className={`flex items-center gap-4 p-4 border-2 rounded-lg transition-all cursor-pointer ${
                paymentMethod === 'card' ? 'border-primary bg-primary/10' : 'border-border hover:border-primary/50'
              }`}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={() => setPaymentMethod('card')}
                  className="h-5 w-5 text-primary focus:ring-primary"
                />
                <CreditCard className="h-6 w-6 text-primary" />
                <div className="text-left">
                  <div className="font-semibold">Credit/Debit Card</div>
                  <div className="text-sm text-muted-foreground">Visa, Mastercard accepted</div>
                </div>
              </label>

              <label className={`flex items-center gap-4 p-4 border-2 rounded-lg transition-all cursor-pointer ${
                paymentMethod === 'bank' ? 'border-primary bg-primary/10' : 'border-border hover:border-primary/50'
              }`}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="bank"
                  checked={paymentMethod === 'bank'}
                  onChange={() => setPaymentMethod('bank')}
                  className="h-5 w-5 text-primary focus:ring-primary"
                />
                <Building className="h-6 w-6 text-primary" />
                <div className="text-left">
                  <div className="font-semibold">Bank Transfer</div>
                  <div className="text-sm text-muted-foreground">Direct bank payment</div>
                </div>
              </label>
            </div>

            {paymentMethod === 'mpesa' && (
              <div className="space-y-4 p-4 bg-secondary/30 rounded-lg">
                <div>
                  <label htmlFor="mpesaPhone" className="block text-sm font-medium mb-2">M-Pesa Phone Number</label>
                  <input
                    id="mpesaPhone"
                    type="tel"
                    placeholder="254XXXXXXXXX"
                    required
                    value={formData.mpesaPhone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
            )}

            {paymentMethod === 'card' && (
              <div className="space-y-4 p-4 bg-secondary/30 rounded-lg">
                <div>
                  <label htmlFor="cardNumber" className="block text-sm font-medium mb-2">Card Number</label>
                  <input
                    id="cardNumber"
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    required
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="expiry" className="block text-sm font-medium mb-2">Expiry Date</label>
                    <input
                      id="expiry"
                      type="text"
                      placeholder="MM/YY"
                      required
                      value={formData.expiry}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="cvv" className="block text-sm font-medium mb-2">CVV</label>
                    <input
                      id="cvv"
                      type="password"
                      placeholder="123"
                      required
                      value={formData.cvv}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="bg-card border border-border rounded-lg p-6 animate-slide-up">
            <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    {item.name} x {item.quantity} {item.sizes ? `(Size: ${item.sizes[0]})` : ''}
                  </span>
                  <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t border-border pt-4">
                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span className="text-primary">${getTotalPrice().toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <Button type="submit" variant="hero" size="lg" className="flex-1">
              Complete Order
            </Button>
            <Link to="/cart">
              <Button variant="outline" size="lg" className="flex-1">
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