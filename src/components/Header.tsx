import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import Logo from '@/assets/PHOTO-2025-10-18-12-29-30.jpg';
import '../styles/Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getTotalItems } = useCart();
  const location = useLocation();
  
  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT' },
    { path: '/services', label: 'SERVICES' },
    { path: '/shoes', label: 'SHOES' },
    { path: '/clothes', label: 'CLOTHES' },
    { path: '/bags', label: 'BAGS' },
    { path: '/accessories', label: 'ACCESSORIES' },
    { path: '/contact', label: 'CONTACT' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-pink-500/50 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Text */}
          <Link to="/" className="flex items-center space-x-3 group animate-fade-in-scale">
            <img
              src={Logo}
              alt="Legacy Wear Logo"
              className="h-16 w-auto group-hover:animate-logo-bounce transition-transform"
            />
            <div className="text-2xl font-extrabold hidden sm:block">
              <span className="text-white animate-text-glow">LEGACY</span>
              <span className="text-pink-500 animate-text-glow"> WEAR</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold tracking-wider transition-colors hover:text-pink-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.8)] px-4 py-2 rounded-xl animate-slide-up ${
                  isActive(link.path) ? 'text-pink-500 bg-pink-500/30 border border-pink-500/90 shadow-[0_0_15px_rgba(236,72,153,0.6)]' : 'text-gray-300'
                }`}
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Section - Search & Cart */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex text-pink-500 hover:bg-pink-500/50 hover:text-pink-200 hover:shadow-[0_0_15px_rgba(236,72,153,0.7)] transition-all animate-pulse-pink"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </Button>
            
            <Link to="/cart">
              <Button
                variant="ghost"
                size="icon"
                className="relative text-pink-500 hover:bg-pink-500/50 hover:text-pink-200 hover:shadow-[0_0_15px_rgba(236,72,153,0.7)] transition-all animate-pulse-pink"
                aria-label="View cart"
              >
                <ShoppingCart className="h-5 w-5" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-pink-500 text-black text-xs font-bold flex items-center justify-center animate-glow">
                    {getTotalItems()}
                  </span>
                )}
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-pink-500 hover:bg-pink-500/50 hover:text-pink-200 hover:shadow-[0_0_15px_rgba(236,72,153,0.7)] transition-all animate-pulse-pink"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 bg-gray-900/95 border-t border-pink-500/50 animate-fade-in-scale">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-semibold tracking-wider transition-colors hover:text-pink-300 hover:bg-pink-500/30 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] px-4 py-3 rounded-xl animate-slide-up ${
                    isActive(link.path) ? 'text-pink-500 bg-pink-500/30 border border-pink-500/90 shadow-[0_0_12px_rgba(236,72,153,0.6)]' : 'text-gray-300'
                  }`}
                  style={{ animationDelay: `${index * 0.12}s` }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
