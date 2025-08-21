import React from 'react';
import { Filter } from 'lucide-react';

interface FiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedBrand: string;
  onBrandChange: (brand: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
}

export const Filters: React.FC<FiltersProps> = ({
  selectedCategory,
  onCategoryChange,
  selectedBrand,
  onBrandChange,
  priceRange,
  onPriceRangeChange
}) => {
  const categories = ['all', 'running', 'casual', 'lifestyle', 'skate'];
  const brands = ['all', 'Nike', 'Adidas', 'Converse', 'Vans', 'Reebok', 'Puma'];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <Filter className="h-5 w-5 mr-2" />
        <h3 className="text-lg font-semibold">Filtros</h3>
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <h4 className="font-medium mb-3">Categoría</h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center">
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="mr-2"
              />
              <span className="text-sm capitalize">
                {category === 'all' ? 'Todas' : category}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Brand Filter */}
      <div className="mb-6">
        <h4 className="font-medium mb-3">Marca</h4>
        <div className="space-y-2">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center">
              <input
                type="radio"
                name="brand"
                value={brand}
                checked={selectedBrand === brand}
                onChange={(e) => onBrandChange(e.target.value)}
                className="mr-2"
              />
              <span className="text-sm">
                {brand === 'all' ? 'Todas' : brand}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h4 className="font-medium mb-3">Rango de Precio</h4>
        <div className="space-y-3">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Mínimo: ${priceRange[0]}</label>
            <input
              type="range"
              min="0"
              max="200"
              step="10"
              value={priceRange[0]}
              onChange={(e) => onPriceRangeChange([parseInt(e.target.value), priceRange[1]])}
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Máximo: ${priceRange[1]}</label>
            <input
              type="range"
              min="0"
              max="200"
              step="10"
              value={priceRange[1]}
              onChange={(e) => onPriceRangeChange([priceRange[0], parseInt(e.target.value)])}
              className="w-full"
            />
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          onCategoryChange('all');
          onBrandChange('all');
          onPriceRangeChange([0, 200]);
        }}
        className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-lg font-medium hover:bg-gray-300 transition-colors"
      >
        Limpiar Filtros
      </button>
    </div>
  );
};