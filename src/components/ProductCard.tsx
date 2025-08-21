import React, { useState } from 'react';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../types/product';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]);
  const [isLiked, setIsLiked] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Por favor selecciona una talla');
      return;
    }
    
    addToCart(product, selectedSize, selectedColor);
    console.log('Producto agregado al carrito:', product.name);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        {product.isOnSale && (
          <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded">
            OFERTA
          </span>
        )}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md hover:bg-gray-50"
        >
          <Heart className={`h-5 w-5 ${isLiked ? 'text-red-500 fill-current' : 'text-gray-400'}`} />
        </button>
      </div>

      <div className="p-4">
        <div className="mb-2">
          <h3 className="text-lg font-semibold text-gray-900 truncate">{product.name}</h3>
          <p className="text-sm text-gray-600">{product.brand}</p>
        </div>

        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {renderStars(product.rating)}
          </div>
          <span className="ml-2 text-sm text-gray-600">({product.reviews})</span>
        </div>

        <div className="mb-3">
          {product.isOnSale && product.originalPrice ? (
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-red-600">${product.price}</span>
              <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
            </div>
          ) : (
            <span className="text-lg font-bold text-gray-900">${product.price}</span>
          )}
        </div>

        {/* Color Selection */}
        <div className="mb-3">
          <p className="text-sm font-medium text-gray-700 mb-2">Color:</p>
          <div className="flex space-x-2">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-6 h-6 rounded-full border-2 ${
                  selectedColor === color ? 'border-gray-800' : 'border-gray-300'
                }`}
                style={{ backgroundColor: color.toLowerCase() }}
                title={color}
              />
            ))}
          </div>
        </div>

        {/* Size Selection */}
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Talla:</p>
          <div className="grid grid-cols-4 gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`py-1 px-2 text-sm border rounded ${
                  selectedSize === size
                    ? 'border-gray-800 bg-gray-800 text-white'
                    : 'border-gray-300 text-gray-700 hover:border-gray-400'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full bg-black text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
        >
          <ShoppingCart className="h-4 w-4" />
          <span>Agregar al Carrito</span>
        </button>
      </div>
    </div>
  );
};