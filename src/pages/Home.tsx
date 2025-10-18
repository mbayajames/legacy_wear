import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button'; // ✅ Fixed import path
import { ArrowRight, Star, TrendingUp, Award } from 'lucide-react';
import { products } from '../data/products'; // ✅ Fixed import path
import ProductCard from '../components/ProductCard'; // ✅ Fixed import path
import '../styles/Home.css'; // ✅ Your CSS file

const Home = () => {
  const featuredProducts = products.slice(0, 4);
  const bestSellers = products.filter(
    (p) => p.rating && p.rating >= 4.7
  ).slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-banner">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-foreground">Elevate Your</span>
              <br />
              <span className="text-primary">Style Legacy</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover premium fashion that defines confidence. Shop the latest
              collection of shoes, clothes, bags, and accessories.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/shoes">
                <Button variant="hero" size="lg">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="h-8 w-8 text-primary" />,
                title: 'Premium Quality',
                desc: 'Handpicked collections from top designers',
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-primary" />,
                title: 'Latest Trends',
                desc: 'Stay ahead with our fashion-forward pieces',
              },
              {
                icon: <Award className="h-8 w-8 text-primary" />,
                title: 'Trusted Brand',
                desc: 'Join thousands of satisfied customers',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-card rounded-lg border border-border animate-fade-in"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Shop by Category</h2>
          <p className="text-muted-foreground text-lg">
            Explore our curated collections
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'Shoes', path: '/shoes', emoji: '👟' },
            { name: 'Clothes', path: '/clothes', emoji: '👗' },
            { name: 'Bags', path: '/bags', emoji: '👜' },
            { name: 'Accessories', path: '/accessories', emoji: '💍' },
          ].map((category) => (
            <Link key={category.name} to={category.path} className="group">
              <div className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary transition-all hover:shadow-[var(--shadow-card)] animate-fade-in">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                  {category.emoji}
                </div>
                <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">New Arrivals</h2>
              <p className="text-muted-foreground">Fresh styles just for you</p>
            </div>
            <Link to="/shoes">
              <Button variant="outline">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-2">Best Sellers</h2>
            <p className="text-muted-foreground">Customer favorites</p>
          </div>
          <Link to="/clothes">
            <Button variant="outline">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/20 to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Join the Legacy</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive offers, style tips, and
            early access to new collections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button variant="hero">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;