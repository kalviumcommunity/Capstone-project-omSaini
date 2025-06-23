import React from 'react';
import { Filter, X } from 'lucide-react';
import { categories, brands } from '../data/products';

export const Filters = ({ filters, onFiltersChange, isOpen, onToggle }) => {
  const handleCategoryChange = (category) => {
    onFiltersChange({ ...filters, category });
  };

  const handleBrandChange = (brand) => {
    onFiltersChange({ ...filters, brand });
  };

  const handlePriceChange = (min, max) => {
    onFiltersChange({ ...filters, priceRange: [min, max] });
  };

  const handleRatingChange = (rating) => {
    onFiltersChange({ ...filters, rating });
  };

  const handleStockChange = (inStock) => {
    onFiltersChange({ ...filters, inStock });
  };

  const clearFilters = () => {
    onFiltersChange({
      category: 'All Categories',
      priceRange: [0, 2000],
      brand: 'All Brands',
      rating: 0,
      inStock: false
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden flex items-center justify-between mb-4">
        <button
          onClick={onToggle}
          className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <Filter className="h-4 w-4" />
          <span>Filters</span>
        </button>
        {isOpen && (
          <button
            onClick={onToggle}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Filter Content */}
      <div className={`lg:block ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Filters</h3>
          <button
            onClick={clearFilters}
            className="text-sm text-red-600 hover:text-red-700"
          >
            Clear All
          </button>
        </div>

        {/* Category Filter */}
        <div className="mb-6">
          <h4 className="font-medium mb-3">Category</h4>
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category} className="flex items-center">
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={filters.category === category}
                  onChange={() => handleCategoryChange(category)}
                  className="mr-2"
                />
                <span className="text-sm">{category}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Brand Filter */}
        <div className="mb-6">
          <h4 className="font-medium mb-3">Brand</h4>
          <div className="space-y-2">
            {brands.map((brand) => (
              <label key={brand} className="flex items-center">
                <input
                  type="radio"
                  name="brand"
                  value={brand}
                  checked={filters.brand === brand}
                  onChange={() => handleBrandChange(brand)}
                  className="mr-2"
                />
                <span className="text-sm">{brand}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range Filter */}
        <div className="mb-6">
          <h4 className="font-medium mb-3">Price Range</h4>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <input
                type="number"
                placeholder="Min"
                value={filters.priceRange[0]}
                onChange={(e) => handlePriceChange(parseInt(e.target.value) || 0, filters.priceRange[1])}
                className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
              />
              <span className="text-gray-500">-</span>
              <input
                type="number"
                placeholder="Max"
                value={filters.priceRange[1]}
                onChange={(e) => handlePriceChange(filters.priceRange[0], parseInt(e.target.value) || 2000)}
                className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
              />
            </div>
          </div>
        </div>

        {/* Rating Filter */}
        <div className="mb-6">
          <h4 className="font-medium mb-3">Minimum Rating</h4>
          <div className="space-y-2">
            {[4, 3, 2, 1].map((rating) => (
              <label key={rating} className="flex items-center">
                <input
                  type="radio"
                  name="rating"
                  value={rating}
                  checked={filters.rating === rating}
                  onChange={() => handleRatingChange(rating)}
                  className="mr-2"
                />
                <span className="text-sm">{rating}+ stars</span>
              </label>
            ))}
          </div>
        </div>

        {/* Stock Filter */}
        <div className="mb-6">
          <h4 className="font-medium mb-3">Availability</h4>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={filters.inStock}
              onChange={(e) => handleStockChange(e.target.checked)}
              className="mr-2"
            />
            <span className="text-sm">In Stock Only</span>
          </label>
        </div>
      </div>
    </div>
  );
};