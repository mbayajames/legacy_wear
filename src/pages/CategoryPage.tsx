import { useState } from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

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
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-muted-foreground">{description}</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8 p-6 bg-card rounded-lg border border-border animate-slide-up">
          <div className="flex-1 min-w-[200px]">
            <label htmlFor="sort-select" className="block text-sm font-medium mb-2">
              Sort By
            </label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'default' | 'price-low' | 'price-high' | 'rating')}
              aria-label="Sort products by"
              className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="default">Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          <div className="flex-1 min-w-[200px]">
            <label htmlFor="price-select" className="block text-sm font-medium mb-2">
              Price Range
            </label>
            <select
              id="price-select"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value as 'all' | 'under-50' | '50-150' | 'over-150')}
              aria-label="Filter by price range"
              className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
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
              {paginatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            {/* Pagination */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => setPage((p) => Math.max(p - 1, 1))}
                disabled={page === 1}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={() => setPage((p) => p + 1)}
                disabled={page * itemsPerPage >= sortedProducts.length}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-2xl text-muted-foreground">No products found matching your filters</p>
            <button
              onClick={() => {
                setSortBy('default');
                setPriceRange('all');
                setPage(1);
              }}
              className="mt-4 text-primary underline"
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