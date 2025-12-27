export interface Product {
  id: string;
  name: string;
  nameBn: string; // Bangla Name
  category: Category;
  price: number;
  originalPrice?: number;
  rating: number;
  image: string;
  isNew?: boolean;
  description: string;
}

export enum Category {
  NOTEBOOKS = 'Notebooks & Diaries',
  PENS = 'Pens & Pencils',
  ART = 'Art Supplies',
  EXAM = 'Exam Essentials',
  GIFTS = 'Gifts & Creative',
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
}

export type ViewState = 'HOME' | 'PRODUCT_DETAILS' | 'CART' | 'CHECKOUT' | 'AI_ASSISTANT';