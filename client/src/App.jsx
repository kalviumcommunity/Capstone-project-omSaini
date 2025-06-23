import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { Filters } from './components/Filters';
import { ProductModal } from './components/ProductModal';
import { Cart } from './components/Cart';
import { Wishlist } from './components/Wishlist';
import { AuthModal } from './components/AuthModal';
import { Footer } from './components/Footer';
import { products } from './data/products';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  
  const [filters, setFilters] = useState({
    category: 'All Categories',
    priceRange: [0, 2000],
    brand: 'All Brands',
    rating: 0,
    inStock: false
  });

  // Filter products based on current filters
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Category filter
      if (filters.category !== 'All Categories' && product.category !== filters.category) {
        return false;
      }
      
      // Brand filter
      if (filters.brand !== 'All Brands' && product.brand !== filters.brand) {
        return false;
      }
      
      // Price range filter
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false;
      }
      
      // Rating filter
      if (filters.rating > 0 && product.rating < filters.rating) {
        return false;
      }
      
      // Stock filter
      if (filters.inStock && !product.inStock) {
        return false;
      }
      
      return true;
    });
  }, [filters]);

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const closeProductModal = () => {
    setIsProductModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header
        onCartClick={() => setIsCartOpen(true)}
        onWishlistClick={() => setIsWishlistOpen(true)}
        onAuthClick={() => setIsAuthModalOpen(true)}
      />

      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <Filters
              filters={filters}
              onFiltersChange={setFilters}
              isOpen={isFiltersOpen}
              onToggle={() => setIsFiltersOpen(!isFiltersOpen)}
            />
          </aside>

          {/* Products Section */}
          <div className="flex-1">
            <div className="mb-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  Premium Gym Equipment
                </h2>
                <p className="text-gray-600">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
                </p>
              </div>
              <p className="text-gray-600 mt-2">
                Discover high-quality fitness equipment from top brands worldwide
              </p>
            </div>

            <ProductGrid
              products={filteredProducts}
              onQuickView={handleQuickView}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ProductModal
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onClose={closeProductModal}
      />
      
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
      
      <Wishlist
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
      />
      
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </div>
  );
}

export default App; 