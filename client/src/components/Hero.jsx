import React from 'react';
import { ArrowRight, Dumbbell, Target, Trophy } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-red-50 via-white to-orange-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Build Your Dream</span>{' '}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500 xl:inline">
                  Home Gym
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Discover premium gym equipment from top brands. Whether you're setting up a home gym or upgrading your fitness center, we have everything you need to achieve your fitness goals.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
                <button className="group inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Shop Now
                  <ArrowRight className="ml-2 -mr-1 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-md hover:shadow-lg">
                  View Categories
                </button>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-lg mb-2">
                    <Dumbbell className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-500">Products</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto bg-blue-100 rounded-lg mb-2">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">50K+</div>
                  <div className="text-sm text-gray-500">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto bg-orange-100 rounded-lg mb-2">
                    <Trophy className="h-6 w-6 text-orange-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">15+</div>
                  <div className="text-sm text-gray-500">Top Brands</div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      
      {/* Hero Image */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Home gym equipment"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent lg:hidden"></div>
      </div>
    </div>
  );
};