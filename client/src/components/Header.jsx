import React, { useState } from 'react';
import { Search, ShoppingCart, Heart, User, Menu, X } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { useWishlist } from '../hooks/useWishlist';

export const Header = ({ onCartClick, onWishlistClick, onAuthClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { getCartItemsCount } = useCart();
  const { wishlistItems } = useWishlist();

  const cartItemsCount = getCartItemsCount();
  const wishlistCount = wishlistItems.length;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                FitKart
              </h1>
            </div>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                placeholder="Search for gym equipment..."
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={onWishlistClick}
              className="relative p-2 text-gray-600 hover:text-red-600 transition-colors duration-200"
            >
              <Heart className="h-6 w-6" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>
            
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-600 hover:text-red-600 transition-colors duration-200"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
            
            <button
              onClick={onAuthClick}
              className="p-2 text-gray-600 hover:text-red-600 transition-colors duration-200"
            >
              <User className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-red-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Search for gym equipment..."
            />
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <button
              onClick={() => {
                onWishlistClick();
                setIsMenuOpen(false);
              }}
              className="flex items-center w-full px-3 py-2 text-base font-medium text-gray-600 hover:text-red-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
            >
              <Heart className="h-5 w-5 mr-3" />
              Wishlist ({wishlistCount})
            </button>
            
            <button
              onClick={() => {
                onCartClick();
                setIsMenuOpen(false);
              }}
              className="flex items-center w-full px-3 py-2 text-base font-medium text-gray-600 hover:text-red-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
            >
              <ShoppingCart className="h-5 w-5 mr-3" />
              Cart ({cartItemsCount})
            </button>
            
            <button
              onClick={() => {
                onAuthClick();
                setIsMenuOpen(false);
              }}
              className="flex items-center w-full px-3 py-2 text-base font-medium text-gray-600 hover:text-red-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
            >
              <User className="h-5 w-5 mr-3" />
              Account
            </button>
          </div>
        </div>
      )}
    </header>
  );
};