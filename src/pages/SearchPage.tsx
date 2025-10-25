import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import '../styles/CategoryPage.css';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q')?.trim() || '';
  const [sortBy, setSortBy] = useState<'default' | 'price-low' | 'price-high' | 'rating'>('default');
  const [priceRange, setPriceRange] = useState<'all' | 'under-50' | '50-150' | 'over-150'>('all');
  const [page, setPage] = useState(1);
  const itemsPerPage = 12;

  // === 1. FULL SEARCH (name, description, category, size, color) ===
  const filteredProducts = useMemo(() => {
    if (!searchQuery) return [];

    const q = searchQuery.toLowerCase();

    return products.filter((p) => {
      const matchesQuery =
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.colors && p.colors.some((c) => c.toLowerCase().includes(q))) ||
        (p.sizes && p.sizes.some((s) => s.toLowerCase().includes(q)));

      const matchesPrice = {
        all: true,
        'under-50': p.price < 50,
        '50-150': p.price >= 50 && p.price <= 150,
        'over-150': p.price > 150,
      }[priceRange];

      return matchesQuery && matchesPrice;
    });
  }, [searchQuery, priceRange]);

  // === 2. SORT ===
  const sortedProducts = useMemo(() => {
    const list = [...filteredProducts];
    if (sortBy === 'price-low') return list.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') return list.sort((a, b) => b.price - a.price);
    if (sortBy === 'rating')
      return list.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0) || a.name.localeCompare(b.name));
    return list.sort((a, b) => a.name.localeCompare(b.name));
  }, [filteredProducts, sortBy]);

  // === 3. PAGINATION (based on sorted list) ===
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const paginatedProducts = sortedProducts.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  // === 4. GROUP BY CATEGORY (optional visual grouping) ===
  const grouped = useMemo(() => {
    const groups: Record<string, typeof paginatedProducts> = {};
    paginatedProducts.forEach((p) => {
      const cat = p.category.charAt(0).toUpperCase() + p.category.slice(1);
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(p);
    });
    return groups;
  }, [paginatedProducts]);

  if (!searchQuery) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-2xl">Type something to search...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 animate-fade-in-scale text-center">
          <h1 className="text-5xl font-extrabold mb-4 text-pink-500">
            Results for "{searchQuery}"
          </h1>
          <p className="text-xl text-gray-300">
            Found <strong>{sortedProducts.length}</strong> matching items
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8 p-6 bg-gray-900 border border-pink-500/30 rounded-lg">
          <div className="flex-1 min-w-[200px]">
            <label htmlFor="sort-select" className="block text-sm font-medium mb-2 text-gray-300">
              Sort By
            </label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => {
                setSortBy(e.target.value as typeof sortBy);
                setPage(1);
              }}
              className="w-full px-4 py-2 bg-gray-800 border border-pink-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
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
              onChange={(e) => {
                setPriceRange(e.target.value as typeof priceRange);
                setPage(1);
              }}
              className="w-full px-4 py-2 bg-gray-800 border border-pink-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
            >
              <option value="all">All Prices</option>
              <option value="under-50">Under $50</option>
              <option value="50-150">$50 – $150</option>
              <option value="over-150">Over $150</option>
            </select>
          </div>
        </div>

        {/* No Results */}
        {sortedProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-300 mb-4">
              No products found for "<strong>{searchQuery}</strong>"
            </p>
            <button
              onClick={() => {
                setSortBy('default');
                setPriceRange('all');
                setPage(1);
  }}
              className="text-pink-500 hover:text-pink-400 underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <>
            {/* Category Sections */}
            {Object.entries(grouped).map(([category, items]) => (
              <section key={category} className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-pink-500 flex items-center">
                  {category} ({items.length})
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {items.map((product, idx) => (
                      <div
                        key={product.id}
                        className={`animate-slide-up delay-${idx}`}
                      >
                        <ProductCard product={product} />
                      </div>
                    ))}
                </div>
              </section>
            ))}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-4 mt-12">
                <button
                  onClick={() => setPage((p) => Math.max(p - 1, 1))}
                  disabled={page === 1}
                  className="px-6 py-2 bg-pink-500 text-black rounded-md hover:bg-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Previous
                </button>
                <span className="flex items-center px-4">
                  Page {page} of {totalPages}
                </span>
                <button
                  onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                  disabled={page === totalPages}
                  className="px-6 py-2 bg-pink-500 text-black rounded-md hover:bg-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SearchPage;