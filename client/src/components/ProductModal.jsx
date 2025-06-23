import React from 'react';
import { X, Star, ShoppingCart, Heart, Minus, Plus, Shield, Truck, RotateCcw } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { useWishlist } from '../hooks/useWishlist';

export const ProductModal = ({ product, isOpen, onClose }) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  if (!isOpen || !product) return null;

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

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      
      {/* Modal */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-xl font-semibold">Product Details</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Product Image */}
              <div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>

              {/* Product Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold">{product.name}</h3>
                  <p className="text-gray-600">{product.brand}</p>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-1">{product.rating}</span>
                  </div>
                  <span className="text-gray-500">({product.reviews} reviews)</span>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold">${product.price}</span>
                  {product.originalPrice && product.originalPrice > product.price && (
                    <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                  )}
                </div>

                <p className="text-gray-700">{product.description}</p>

                <div>
                  <h4 className="font-medium mb-2">Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center space-x-4">
                  <button
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                      product.inStock
                        ? 'bg-red-600 text-white hover:bg-red-700'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </button>
                  
                  <button
                    onClick={handleWishlistToggle}
                    className={`p-3 rounded-lg transition-colors ${
                      isInWishlist(product.id)
                        ? 'bg-red-100 text-red-600'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <Heart className={`h-5 w-5 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
                  </button>
                </div>

                {!product.inStock && (
                  <p className="text-red-600 font-medium">Out of Stock</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};