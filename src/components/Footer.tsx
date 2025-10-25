import { Link } from 'react-router-dom';
import { Facebook, Instagram, PlayCircle, Mail, Phone, MapPin, CreditCard, Truck, ShieldCheck } from 'lucide-react';
import Logo from '@/assets/PHOTO-2025-10-18-12-29-30.jpg';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-pink-500/30 mt-20">
      <style>
        {`
          @keyframes pulse-pink {
            0%, 100% { transform: scale(1); opacity: 0.7; }
            50% { transform: scale(1.1); opacity: 1; }
          }
          @keyframes slide-up {
            0% { transform: translateY(20px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          @keyframes fade-in-scale {
            0% { transform: scale(0.95); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
          .animate-pulse-pink { animation: pulse-pink 2s infinite ease-in-out; }
          .animate-slide-up { animation: slide-up 0.6s ease-out forwards; }
          .animate-slide-up-delay-1 { animation: slide-up 0.6s ease-out 0.1s forwards; opacity: 0; }
          .animate-slide-up-delay-2 { animation: slide-up 0.6s ease-out 0.2s forwards; opacity: 0; }
          .animate-slide-up-delay-3 { animation: slide-up 0.6s ease-out 0.3s forwards; opacity: 0; }
          .animate-fade-in-scale { animation: fade-in-scale 0.8s ease-out forwards; }
        `}
      </style>

      <div className="container mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="animate-slide-up">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={Logo}
                alt="Legacy Wear Logo"
                className="h-20 w-auto brightness-150"
              />
              <h3 className="text-xl font-extrabold">
                <span className="text-white">LEGACY</span>
                <span className="text-pink-500"> WEAR</span>
              </h3>
            </div>
            <p className="text-gray-300 mb-4">
              Your destination for premium fashion and accessories. Style, quality, and confidence.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-pink-500 transition-colors animate-pulse-pink"
                aria-label="Visit our Facebook page"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/legacyy_wear?igsh=MTVrNGtsMnBvbDdyYg=="
                className="text-gray-300 hover:text-pink-500 transition-colors animate-pulse-pink"
                aria-label="Visit our Instagram page"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@legacyy_wear?_t=ZM-90qVHgs9tZU&_r=1" 
                className="text-gray-300 hover:text-pink-500 transition-colors animate-pulse-pink"
                aria-label="Visit our TikTok page"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PlayCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-up animate-slide-up-delay-1">
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-pink-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-pink-500 transition-colors">About</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-pink-500 transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-pink-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Shop */}
          <div className="animate-slide-up animate-slide-up-delay-2">
            <h4 className="font-semibold mb-4 text-white">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/shoes" className="text-gray-300 hover:text-pink-500 transition-colors">Shoes</Link></li>
              <li><Link to="/clothes" className="text-gray-300 hover:text-pink-500 transition-colors">Clothes</Link></li>
              <li><Link to="/bags" className="text-gray-300 hover:text-pink-500 transition-colors">Bags</Link></li>
              <li><Link to="/accessories" className="text-gray-300 hover:text-pink-500 transition-colors">Accessories</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-slide-up animate-slide-up-delay-3">
            <h4 className="font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-gray-300">
                <MapPin className="h-5 w-5 text-pink-500 mt-0.5 flex-shrink-0 animate-pulse-pink" />
                <span>123 Fashion Street, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-5 w-5 text-pink-500 flex-shrink-0 animate-pulse-pink" />
                <span>+254 780 983 590</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-5 w-5 text-pink-500 flex-shrink-0 animate-pulse-pink" />
                <span>tamarairungu@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-y border-pink-500/30">
          <div className="flex items-center space-x-4 animate-slide-up">
            <div className="p-3 bg-pink-500/20 rounded-lg animate-pulse-pink">
              <Truck className="h-6 w-6 text-pink-500" />
            </div>
            <div>
              <h5 className="font-semibold text-white">Free Delivery</h5>
              <p className="text-sm text-gray-300">On orders over $100</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 animate-slide-up animate-slide-up-delay-1">
            <div className="p-3 bg-pink-500/20 rounded-lg animate-pulse-pink">
              <ShieldCheck className="h-6 w-6 text-pink-500" />
            </div>
            <div>
              <h5 className="font-semibold text-white">Secure Payment</h5>
              <p className="text-sm text-gray-300">100% secure transactions</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 animate-slide-up animate-slide-up-delay-2">
            <div className="p-3 bg-pink-500/20 rounded-lg animate-pulse-pink">
              <CreditCard className="h-6 w-6 text-pink-500" />
            </div>
            <div>
              <h5 className="font-semibold text-white">Easy Returns</h5>
              <p className="text-sm text-gray-300">30-day return policy</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 space-y-4 md:space-y-0 animate-fade-in-scale">
          <p className="text-sm text-gray-300">
            Copyright 2024 Legacy Wear. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            <Link to="#" className="text-sm text-gray-300 hover:text-pink-500 transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-sm text-gray-300 hover:text-pink-500 transition-colors">
              Terms & Conditions
            </Link>
            <Link to="#" className="text-sm text-gray-300 hover:text-pink-500 transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;