import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import Logo from '@/assets/PHOTO-2025-10-18-12-29-30.jpg';
import '../styles/Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { getTotalItems } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-pink-500/50 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/80">
      <div className="container mx-auto px-4">
        <div className="flex h-32 items-center justify-between">
          {/* ---------- LOGO + TEXT (flush left) ---------- */}
          <div className="flex items-center -ml-4 sm:ml-0">
            <Link
              to="/"
              className="flex items-center space-x-3 group animate-fade-in-scale"
            >
              <img
                src={Logo}
                alt="Legacy Wear Logo"
                className="h-24 w-auto brightness-150 group-hover:animate-logo-bounce transition-transform"
              />
              <div className="text-lg font-extrabold hidden sm:block">
                <span className="text-white animate-text-glow">LEGACY</span>
                <span className="text-pink-500 animate-text-glow"> WEAR</span>
              </div>
            </Link>
          </div>

          {/* ---------- DESKTOP NAV (100px gap from logo) ---------- */}
          <nav className="hidden lg:flex items-center ml-24">
            {navLinks.map((link, index) => {
              const isLast = index === navLinks.length - 1;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-semibold tracking-wider transition-colors hover:text-pink-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.8)] px-4 py-2 rounded-xl animate-slide-up ${
                    isActive(link.path)
                      ? 'text-pink-500 bg-pink-500/30 border border-pink-500/90 shadow-[0_0_15px_rgba(236,72,153,0.6)]'
                      : 'text-gray-300'
                  } ${isLast ? 'mr-14' : ''}`} // 50px gap before search
                  style={{ animationDelay: `${index * 0.12}s` }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* ---------- RIGHT SECTION (Search + Cart) ---------- */}
          <div className="flex items-center space-x-4">
            {/* Search Form */}
            <form onSubmit={handleSearch} className="hidden md:flex items-center">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-64 px-4 py-2 pr-10 text-sm bg-gray-800 border border-pink-500/30 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/50 transition-all"
                />
                <Button
                  type="submit"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full text-pink-500 hover:bg-pink-500/20"
                  aria-label="Search"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </form>

            {/* Cart */}
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

            {/* Mobile Menu Toggle */}
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

        {/* ---------- MOBILE NAV ---------- */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 bg-gray-900/95 border-t border-pink-500/50 animate-fade-in-scale">
            <div className="flex flex-col space-y-3">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="px-4 mb-3">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                    className="w-full px-4 py-2 pr-10 text-sm bg-gray-800 border border-pink-500/30 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/50 transition-all"
                  />
                  <Button
                    type="submit"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full text-pink-500 hover:bg-pink-500/20"
                    aria-label="Search"
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </form>

              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-semibold tracking-wider transition-colors hover:text-pink-300 hover:bg-pink-500/30 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] px-4 py-3 rounded-xl animate-slide-up ${
                    isActive(link.path)
                      ? 'text-pink-500 bg-pink-500/30 border border-pink-500/90 shadow-[0_0_12px_rgba(236,72,153,0.6)]'
                      : 'text-gray-300'
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