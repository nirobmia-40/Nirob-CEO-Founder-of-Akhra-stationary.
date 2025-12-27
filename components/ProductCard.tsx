import React from 'react';
import { Plus, Star, ShoppingBag } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onClick }) => {
  return (
    <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-[#F0EAE0] overflow-hidden flex flex-col h-full">
      {/* Discount/New Badge */}
      {product.originalPrice && (
        <span className="absolute top-3 left-3 bg-red-50 text-red-600 text-[10px] font-bold px-2 py-1 rounded-full z-10 font-sans">
          - {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
        </span>
      )}
      {product.isNew && !product.originalPrice && (
        <span className="absolute top-3 left-3 bg-green-50 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full z-10 font-serif">
          নতুন
        </span>
      )}

      {/* Image */}
      <div 
        className="relative aspect-square overflow-hidden bg-[#F9F7F2] cursor-pointer"
        onClick={() => onClick(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Quick Add Overlay (Desktop) */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button 
                onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
                className="bg-white text-ink hover:text-akhra-brown px-4 py-2 rounded-full shadow-lg font-medium text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2"
            >
                <ShoppingBag size={16} />
                ব্যাগে যোগ করুন
            </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center space-x-1 mb-1">
            <Star size={12} className="text-yellow-400 fill-yellow-400" />
            <span className="text-xs text-gray-500 font-sans mt-0.5">{product.rating}</span>
        </div>

        <h3 
            className="font-serif font-bold text-lg text-ink leading-tight mb-1 cursor-pointer hover:text-akhra-brown transition-colors"
            onClick={() => onClick(product)}
        >
            {product.nameBn}
        </h3>
        <p className="text-xs text-gray-400 font-sans truncate mb-3">{product.name}</p>

        <div className="mt-auto flex items-center justify-between">
            <div className="flex flex-col">
                {product.originalPrice && (
                    <span className="text-xs text-gray-400 line-through font-sans">৳ {product.originalPrice}</span>
                )}
                <span className="text-lg font-bold text-akhra-brown font-sans">৳ {product.price}</span>
            </div>
            
            <button 
                onClick={() => onAddToCart(product)}
                className="sm:hidden w-8 h-8 flex items-center justify-center rounded-full bg-[#F9F7F2] text-ink hover:bg-akhra-brown hover:text-white transition-colors border border-[#EBE5DA]"
                aria-label="Add to cart"
            >
                <Plus size={18} />
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;