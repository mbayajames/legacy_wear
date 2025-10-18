import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, CreditCard, Truck, ShieldCheck } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-foreground">LEGACY</span>
              <span className="text-primary"> WEAR</span>
            </h3>
            <p className="text-muted-foreground mb-4">
              Your destination for premium fashion and accessories. Style, quality, and confidence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Visit our Facebook page">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Visit our Instagram page">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Visit our Twitter page">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/shoes" className="text-muted-foreground hover:text-primary transition-colors">Shoes</Link></li>
              <li><Link to="/clothes" className="text-muted-foreground hover:text-primary transition-colors">Clothes</Link></li>
              <li><Link to="/bags" className="text-muted-foreground hover:text-primary transition-colors">Bags</Link></li>
              <li><Link to="/accessories" className="text-muted-foreground hover:text-primary transition-colors">Accessories</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>123 Fashion Street, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span>+254 700 000 000</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span>info@legacywear.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-y border-border">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Truck className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h5 className="font-semibold text-foreground">Free Delivery</h5>
              <p className="text-sm text-muted-foreground">On orders over $100</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <ShieldCheck className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h5 className="font-semibold text-foreground">Secure Payment</h5>
              <p className="text-sm text-muted-foreground">100% secure transactions</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <CreditCard className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h5 className="font-semibold text-foreground">Easy Returns</h5>
              <p className="text-sm text-muted-foreground">30-day return policy</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 Legacy Wear. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms & Conditions
            </Link>
            <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
