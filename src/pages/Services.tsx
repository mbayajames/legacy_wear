import { Package, RefreshCw, Gift, Headphones, Truck, ShieldCheck } from 'lucide-react';
import '../styles/Services.css';

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: 'Free Delivery',
      description: 'Enjoy free shipping on all orders over $100. Fast and reliable delivery to your doorstep.',
      features: ['Orders over $100', '3-5 business days', 'Track your order']
    },
    {
      icon: RefreshCw,
      title: 'Easy Returns',
      description: 'Changed your mind? No problem. Return any item within 30 days for a full refund.',
      features: ['30-day return policy', 'Free return shipping', 'Hassle-free process']
    },
    {
      icon: Gift,
      title: 'Gift Wrapping',
      description: 'Make your purchase extra special with our complimentary gift wrapping service.',
      features: ['Beautiful packaging', 'Personalized notes', 'Perfect for gifting']
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Our dedicated customer service team is always here to help you.',
      features: ['Round-the-clock assistance', 'Multiple contact methods', 'Quick response time']
    },
    {
      icon: ShieldCheck,
      title: 'Secure Payment',
      description: 'Shop with confidence using our secure payment gateway. Your data is always protected.',
      features: ['SSL encryption', 'Multiple payment options', 'Safe transactions']
    },
    {
      icon: Package,
      title: 'Product Customization',
      description: 'Personalize select items to make them uniquely yours.',
      features: ['Monogramming available', 'Color options', 'Size adjustments']
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-scale">
          <h1 className="text-5xl font-extrabold mb-4">
            Our <span className="text-pink-500">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're committed to providing an exceptional shopping experience with services designed around you.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-gray-900 border border-pink-500/30 rounded-lg p-8 hover:border-pink-500 transition-all hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] animate-slide-up-delay-${index}`}
            >
              <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mb-6 animate-pulse-pink">
                <service.icon className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Delivery & Returns Policy */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gray-900/50 rounded-lg p-8 animate-slide-up">
            <h2 className="text-2xl font-bold mb-4 text-pink-500">Delivery Policy</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong className="text-white">Standard Delivery:</strong> 3-5 business days for most locations
              </p>
              <p>
                <strong className="text-white">Express Delivery:</strong> 1-2 business days (additional charges apply)
              </p>
              <p>
                <strong className="text-white">International:</strong> 7-14 business days depending on location
              </p>
              <p>
                All orders are processed within 24 hours and you'll receive tracking information via email.
              </p>
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-8 animate-slide-up">
            <h2 className="text-2xl font-bold mb-4 text-pink-500">Return Policy</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong className="text-white">30-Day Returns:</strong> Return any unused item within 30 days
              </p>
              <p>
                <strong className="text-white">Condition:</strong> Items must be in original condition with tags
              </p>
              <p>
                <strong className="text-white">Refund:</strong> Full refund to original payment method
              </p>
              <p>
                Simply contact our support team to initiate a return and we'll guide you through the process.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-pink-500/20 to-black rounded-lg p-12 text-center animate-fade-in-scale">
          <h2 className="text-3xl font-bold mb-4 text-white">Have Questions?</h2>
          <p className="text-xl text-gray-300 mb-6">
            Our customer service team is here to help
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-pink-500 text-black rounded-md hover:bg-pink-600 transition-colors font-semibold animate-pulse-pink"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;