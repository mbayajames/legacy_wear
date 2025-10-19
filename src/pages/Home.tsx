import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowRight, Star, TrendingUp, Award } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import '../styles/Home.css';

const Home = () => {
  const featuredProducts = products.slice(0, 4);
  const bestSellers = products.filter(
    (p) => p.rating && p.rating >= 4.7
  ).slice(0, 4);

  return (
    <div className="min-h-screen bg-black text-white">
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
          @keyframes hero-zoom {
            0% { transform: scale(1); }
            100% { transform: scale(1.05); }
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
          .animate-hero-zoom {
            animation: hero-zoom 10s infinite alternate ease-in-out;
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-banner animate-hero-zoom">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
              <span className="text-white">Elevate Your</span>
              <br />
              <span className="text-pink-500">Style Legacy</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover premium fashion that defines confidence. Shop the latest
              collection of shoes, clothes, bags, and accessories.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/shoes">
                <Button className="bg-pink-500 text-black hover:bg-pink-600 px-6 py-3 rounded-md font-semibold transition-colors animate-pulse-pink">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button className="border border-pink-500 text-pink-500 hover:bg-pink-500/20 hover:text-pink-500 px-6 py-3 rounded-md font-semibold transition-colors">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-pink-500/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="h-8 w-8 text-pink-500" />,
                title: 'Premium Quality',
                desc: 'Handpicked collections from top designers',
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-pink-500" />,
                title: 'Latest Trends',
                desc: 'Stay ahead with our fashion-forward pieces',
              },
              {
                icon: <Award className="h-8 w-8 text-pink-500" />,
                title: 'Trusted Brand',
                desc: 'Join thousands of satisfied customers',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`text-center p-6 bg-gray-900 border border-pink-500/30 rounded-lg hover:border-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all animate-slide-up animate-slide-up-delay-${index}`}
              >
                <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-pink">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-scale">
          <h2 className="text-4xl font-extrabold mb-4 text-pink-500">Shop by Category</h2>
          <p className="text-gray-300 text-lg">Explore our curated collections</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'Shoes', path: '/shoes', emoji: '👟' },
            { name: 'Clothes', path: '/clothes', emoji: '👗' },
            { name: 'Bags', path: '/bags', emoji: '👜' },
            { name: 'Accessories', path: '/accessories', emoji: '💍' },
          ].map((category, index) => (
            <Link key={category.name} to={category.path} className="group">
              <div
                className={`bg-gray-900 border border-pink-500/30 rounded-lg p-8 text-center hover:border-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all animate-slide-up animate-slide-up-delay-${index}`}
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                  {category.emoji}
                </div>
                <h3 className="text-2xl font-semibold text-white group-hover:text-pink-500 transition-colors">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20 bg-pink-500/10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12 animate-fade-in-scale">
            <div>
              <h2 className="text-4xl font-extrabold mb-2 text-pink-500">New Arrivals</h2>
              <p className="text-gray-300">Fresh styles just for you</p>
            </div>
            <Link to="/shoes">
              <Button className="border border-pink-500 text-pink-500 hover:bg-pink-500/20 hover:text-pink-500 rounded-md font-semibold transition-colors">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`animate-slide-up animate-slide-up-delay-${index}`}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex justify-between items-center mb-12 animate-fade-in-scale">
          <div>
            <h2 className="text-4xl font-extrabold mb-2 text-pink-500">Best Sellers</h2>
            <p className="text-gray-300">Customer favorites</p>
          </div>
          <Link to="/clothes">
            <Button className="border border-pink-500 text-pink-500 hover:bg-pink-500/20 hover:text-pink-500 rounded-md font-semibold transition-colors">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product, index) => (
            <div
              key={product.id}
              className={`animate-slide-up animate-slide-up-delay-${index}`}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500/20 to-black">
        <div className="container mx-auto px-4 text-center animate-fade-in-scale">
          <h2 className="text-4xl font-extrabold mb-4 text-pink-500">Join the Legacy</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive offers, style tips, and
            early access to new collections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800 border border-pink-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white hover:bg-pink-500/10 transition-colors"
            />
            <Button className="bg-pink-500 text-black hover:bg-pink-600 rounded-md font-semibold transition-colors animate-pulse-pink">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;