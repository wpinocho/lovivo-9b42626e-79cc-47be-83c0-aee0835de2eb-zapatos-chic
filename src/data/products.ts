import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 1,
    name: "Air Max 270",
    brand: "Nike",
    price: 129.99,
    originalPrice: 159.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    category: "running",
    sizes: [38, 39, 40, 41, 42, 43, 44],
    colors: ["Black", "White", "Red"],
    rating: 4,
    reviews: 128,
    isOnSale: true
  },
  {
    id: 2,
    name: "Chuck Taylor All Star",
    brand: "Converse",
    price: 65.00,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop",
    category: "casual",
    sizes: [36, 37, 38, 39, 40, 41, 42],
    colors: ["Black", "White", "Red", "Blue"],
    rating: 5,
    reviews: 89
  },
  {
    id: 3,
    name: "Stan Smith",
    brand: "Adidas",
    price: 85.00,
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&h=500&fit=crop",
    category: "casual",
    sizes: [38, 39, 40, 41, 42, 43],
    colors: ["White", "Green"],
    rating: 4,
    reviews: 156
  },
  {
    id: 4,
    name: "Old Skool",
    brand: "Vans",
    price: 75.00,
    originalPrice: 95.00,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&h=500&fit=crop",
    category: "skate",
    sizes: [37, 38, 39, 40, 41, 42, 43],
    colors: ["Black", "White", "Navy"],
    rating: 4,
    reviews: 203,
    isOnSale: true
  },
  {
    id: 5,
    name: "Air Force 1",
    brand: "Nike",
    price: 110.00,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&h=500&fit=crop",
    category: "lifestyle",
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    colors: ["White", "Black"],
    rating: 5,
    reviews: 312
  },
  {
    id: 6,
    name: "Ultraboost 22",
    brand: "Adidas",
    price: 180.00,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop",
    category: "running",
    sizes: [39, 40, 41, 42, 43, 44],
    colors: ["Black", "White", "Blue"],
    rating: 5,
    reviews: 94
  },
  {
    id: 7,
    name: "Classic Leather",
    brand: "Reebok",
    price: 70.00,
    originalPrice: 90.00,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&h=500&fit=crop",
    category: "lifestyle",
    sizes: [38, 39, 40, 41, 42, 43],
    colors: ["White", "Black", "Brown"],
    rating: 4,
    reviews: 67,
    isOnSale: true
  },
  {
    id: 8,
    name: "Suede Classic",
    brand: "Puma",
    price: 80.00,
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&h=500&fit=crop",
    category: "lifestyle",
    sizes: [37, 38, 39, 40, 41, 42, 43],
    colors: ["Blue", "Red", "Green", "Black"],
    rating: 4,
    reviews: 145
  }
];