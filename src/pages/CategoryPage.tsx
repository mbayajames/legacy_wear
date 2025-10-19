import { useState } from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import '../styles/CategoryPage.css';

interface CategoryPageProps {
  category: 'shoes' | 'clothes' | 'bags' | 'accessories';
  title: string;
  description: string;
}

const CategoryPage = ({ category, title, description }: CategoryPageProps) => {
  const [sortBy, setSortBy] = useState<'default' | 'price-low' | 'price-high' | 'rating'>('default');
  const [priceRange, setPriceRange] = useState<'all' | 'under-50' | '50-150' | 'over-150'>('all');
  const [page, setPage] = useState(1);
  const itemsPerPage = 12;

  // Define price filters
  const priceFilters: Record<string, (price: number) => boolean> = {
    all: () => true,
    'under-50': (price) => price < 50,
    '50-150': (price) => price >= 50 && price <= 150,
    'over-150': (price) => price > 150,
  };

  // Filter products by category and price
  const filteredProducts = products
    .filter((p) => p.category === category)
    .filter((p) => priceFilters[priceRange](p.price));

  // Debug logging
  console.log('Filtered Products:', filteredProducts);

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') {
      const aRating = a.rating ?? 0;
      const bRating = b.rating ?? 0;
      return bRating - aRating || a.name.localeCompare(b.name);
    }
    return a.name.localeCompare(b.name); // Default sort by name
  });

  // Paginate products
  const paginatedProducts = sortedProducts.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 animate-fade-in-scale">
          <h1 className="text-5xl font-extrabold mb-4 text-pink-500">{title}</h1>
          <p className="text-xl text-gray-300">{description}</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8 p-6 bg-gray-900 border border-pink-500/30 rounded-lg hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all animate-slide-up">
          <div className="flex-1 min-w-[200px]">
            <label htmlFor="sort-select" className="block text-sm font-medium mb-2 text-gray-300">
              Sort By
            </label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'default' | 'price-low' | 'price-high' | 'rating')}
              aria-label="Sort products by"
              className="w-full px-4 py-2 bg-gray-800 border border-pink-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white hover:bg-pink-500/10 transition-colors"
            >
              <option value="default">Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          <div className="flex-1 min-w-[200px]">
            <label htmlFor="price-select" className="block text-sm font-medium mb-2 text-gray-300">
              Price Range
            </label>
            <select
              id="price-select"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value as 'all' | 'under-50' | '50-150' | 'over-150')}
              aria-label="Filter by price range"
              className="w-full px-4 py-2 bg-gray-800 border border-pink-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white hover:bg-pink-500/10 transition-colors"
            >
              <option value="all">All Prices</option>
              <option value="under-50">Under $50</option>
              <option value="50-150">$50 - $150</option>
              <option value="over-150">Over $150</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        {sortedProducts.length > 0 ? (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {paginatedProducts.map((product, index) => (
                <div
                  key={product.id}
                  className={`animate-slide-up delay-${Math.min(index, 11)}`}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
            {/* Pagination */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => setPage((p) => Math.max(p - 1, 1))}
                disabled={page === 1}
                className="px-4 py-2 bg-pink-500 text-black rounded-md hover:bg-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors animate-pulse-pink"
              >
                Previous
              </button>
              <button
                onClick={() => setPage((p) => p + 1)}
                disabled={page * itemsPerPage >= sortedProducts.length}
                className="px-4 py-2 bg-pink-500 text-black rounded-md hover:bg-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors animate-pulse-pink"
              >
                Next
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-20 animate-fade-in-scale">
            <p className="text-2xl text-gray-300">No products found matching your filters</p>
            <button
              onClick={() => {
                setSortBy('default');
                setPriceRange('all');
                setPage(1);
              }}
              className="mt-4 text-pink-500 hover:text-pink-600 underline transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;