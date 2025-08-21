import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Cart } from './Cart';

export const Header: React.FC = () => {
  const { getTotalItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const totalItems = getTotalItems();

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900">ShoesStore</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Inicio
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Hombres
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Mujeres
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Niños
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Ofertas
              </a>
            </nav>

            {/* Search and Cart */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-gray-900">
                <Search className="h-6 w-6" />
              </button>
              
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative text-gray-700 hover:text-gray-900"
              >
                <ShoppingCart className="h-6 w-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-gray-700 hover:text-gray-900"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
                <a href="#" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                  Inicio
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                  Hombres
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                  Mujeres
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                  Niños
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                  Ofertas
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Cart Sidebar */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};