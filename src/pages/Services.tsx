import { Package, RefreshCw, Gift, Headphones, Truck, ShieldCheck } from 'lucide-react';

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
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're committed to providing an exceptional shopping experience with services designed around you.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-all hover:shadow-[var(--shadow-card)] animate-fade-in"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Delivery & Returns Policy */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-secondary/30 rounded-lg p-8 animate-slide-up">
            <h2 className="text-2xl font-bold mb-4">Delivery Policy</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Standard Delivery:</strong> 3-5 business days for most locations
              </p>
              <p>
                <strong className="text-foreground">Express Delivery:</strong> 1-2 business days (additional charges apply)
              </p>
              <p>
                <strong className="text-foreground">International:</strong> 7-14 business days depending on location
              </p>
              <p>
                All orders are processed within 24 hours and you'll receive tracking information via email.
              </p>
            </div>
          </div>

          <div className="bg-secondary/30 rounded-lg p-8 animate-slide-up">
            <h2 className="text-2xl font-bold mb-4">Return Policy</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">30-Day Returns:</strong> Return any unused item within 30 days
              </p>
              <p>
                <strong className="text-foreground">Condition:</strong> Items must be in original condition with tags
              </p>
              <p>
                <strong className="text-foreground">Refund:</strong> Full refund to original payment method
              </p>
              <p>
                Simply contact our support team to initiate a return and we'll guide you through the process.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary/20 to-primary/5 rounded-lg p-12 text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
          <p className="text-xl text-muted-foreground mb-6">
            Our customer service team is here to help
          </p>
          <a href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-semibold">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
