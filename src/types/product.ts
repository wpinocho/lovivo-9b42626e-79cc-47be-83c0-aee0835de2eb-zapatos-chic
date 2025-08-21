export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  sizes: number[];
  colors: string[];
  rating: number;
  reviews: number;
  isOnSale?: boolean;
}

export interface CartItem extends Product {
  selectedSize: number;
  selectedColor: string;
  quantity: number;
}