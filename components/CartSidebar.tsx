import React from 'react';
import { X, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  onCheckout: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ 
  isOpen, 
  onClose, 
  cart, 
  onUpdateQuantity, 
  onRemove,
  onCheckout 
}) => {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryCharge = 60; // Fixed delivery charge for demo
  const finalTotal = total > 0 ? total + deliveryCharge : 0;

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 right-0 w-full sm:w-96 bg-[#F9F7F2] shadow-2xl z-[51] transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}>
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#EBE5DA] flex items-center justify-between bg-white">
          <h2 className="text-lg font-serif font-bold text-ink">আপনার ব্যাগ ({cart.length})</h2>
          <button onClick={onClose} className="p-2 hover:bg-paper-dark rounded-full transition-colors">
            <X size={20} className="text-gray-500" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
               <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                 <span className="text-4xl">🛒</span>
               </div>
               <p className="text-gray-500 font-sans">ব্যাগ খালি! কিছু কেনাকাটা করুন।</p>
               <button 
                 onClick={onClose}
                 className="px-6 py-2 border border-akhra-brown text-akhra-brown rounded-full text-sm font-medium hover:bg-akhra-brown hover:text-white transition-colors"
               >
                 ব্রাউজ করুন
               </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4 bg-white p-3 rounded-xl border border-[#EBE5DA]">
                <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-50 flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif font-medium text-ink text-sm line-clamp-1">{item.nameBn}</h3>
                    <p className="text-xs text-gray-500 font-sans">{item.name}</p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-sans font-bold text-akhra-brown">৳ {item.price * item.quantity}</span>
                    <div className="flex items-center gap-3 bg-[#F9F7F2] rounded-full px-2 py-1">
                       <button 
                         onClick={() => onUpdateQuantity(item.id, -1)}
                         className="p-1 hover:text-red-500 transition-colors"
                         disabled={item.quantity <= 1}
                       >
                         <Minus size={12} />
                       </button>
                       <span className="text-xs font-medium w-3 text-center">{item.quantity}</span>
                       <button 
                         onClick={() => onUpdateQuantity(item.id, 1)}
                         className="p-1 hover:text-green-600 transition-colors"
                       >
                         <Plus size={12} />
                       </button>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => onRemove(item.id)}
                  className="text-gray-300 hover:text-red-400 self-start"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-6 bg-white border-t border-[#EBE5DA]">
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Subtotal</span>
                <span className="font-sans">৳ {total}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Delivery</span>
                <span className="font-sans">৳ {deliveryCharge}</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-ink pt-2 border-t border-dashed border-gray-200">
                <span>Total</span>
                <span className="font-sans">৳ {finalTotal}</span>
              </div>
            </div>
            <button 
              onClick={onCheckout}
              className="w-full py-3 bg-akhra-brown text-white rounded-xl font-medium shadow-md hover:bg-[#7a5e54] transition-all flex items-center justify-center gap-2"
            >
              চেকআউট (Checkout) <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;