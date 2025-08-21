import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem, Product } from '../types/product';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, size: number, color: string) => void;
  removeFromCart: (id: number, size: number, color: string) => void;
  updateQuantity: (id: number, size: number, color: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product, size: number, color: string) => {
    console.log('Adding to cart:', product.name, 'Size:', size, 'Color:', color);
    
    setCartItems(prevItems => {
      const existingItem = prevItems.find(
        item => item.id === product.id && item.selectedSize === size && item.selectedColor === color
      );

      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id && item.selectedSize === size && item.selectedColor === color
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, selectedSize: size, selectedColor: color, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id: number, size: number, color: string) => {
    console.log('Removing from cart:', id, 'Size:', size, 'Color:', color);
    setCartItems(prevItems =>
      prevItems.filter(item => !(item.id === id && item.selectedSize === size && item.selectedColor === color))
    );
  };

  const updateQuantity = (id: number, size: number, color: string, quantity: number) => {
    console.log('Updating quantity:', id, 'Size:', size, 'Color:', color, 'Quantity:', quantity);
    if (quantity <= 0) {
      removeFromCart(id, size, color);
      return;
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id && item.selectedSize === size && item.selectedColor === color
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    console.log('Clearing cart');
    setCartItems([]);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotalItems,
      getTotalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};