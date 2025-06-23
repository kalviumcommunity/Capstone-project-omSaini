import React from 'react';
import { X, Heart, ShoppingCart } from 'lucide-react';
import { useWishlist } from '../hooks/useWishlist';
import { useCart } from '../hooks/useCart';

export const Wishlist = ({ isOpen, onClose }) => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (!isOpen) return null;

  const handleAddToCart = (product) => {
    addToCart(product);
    removeFromWishlist(product.id);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      
      {/* Wishlist Panel */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">Wishlist</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Wishlist Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {wishlistItems.length === 0 ? (
              <div className="text-center py-8">
                <Heart className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Your wishlist is empty</p>
              </div>
            ) : (
              <div className="space-y-4">
                {wishlistItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-gray-600">${item.price}</p>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="p-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                      >
                        <ShoppingCart className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => removeFromWishlist(item.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};