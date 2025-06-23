import React from 'react';
import { Star, ShoppingCart, Heart, Eye } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { useWishlist } from '../hooks/useWishlist';

export const ProductCard = ({ product, onQuickView }) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleQuickView = (e) => {
    e.stopPropagation();
    onQuickView(product);
  };

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      {/* Image Container */}
      <div className="relative aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
              NEW
            </span>
          )}
          {discount > 0 && (
            <span className="bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
              -{discount}%
            </span>
          )}
          {!product.inStock && (
            <span className="bg-gray-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
              OUT OF STOCK
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={handleWishlistToggle}
            className={`p-2 rounded-full ${
              isInWishlist(product.id)
                ? 'bg-red-600 text-white'
                : 'bg-white text-gray-600 hover:text-red-600'
            } shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110`}
          >
            <Heart className={`h-4 w-4 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
          </button>
          <button
            onClick={handleQuickView}
            className="p-2 rounded-full bg-white text-gray-600 hover:text-blue-600 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110"
          >
            <Eye className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Brand & Category */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
          <span className="font-medium">{product.brand}</span>
          <span>{product.category}</span>
        </div>

        {/* Product Name */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-red-600 transition-colors duration-200">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className={`w-full flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            product.inStock
              ? 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-md hover:shadow-lg transform hover:scale-105'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
};