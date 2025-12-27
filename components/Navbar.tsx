import React from 'react';
import { ShoppingCart, Search, Menu, Sparkles, User } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  onLogoClick: () => void;
  onAIClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick, onLogoClick, onAIClick }) => {
  return (
    <nav className="sticky top-0 z-50 bg-[#F9F7F2]/90 backdrop-blur-md border-b border-[#EBE5DA] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile Menu Button */}
          <div className="flex items-center sm:hidden">
            <button className="p-2 rounded-md text-ink hover:bg-paper-dark">
              <Menu size={24} />
            </button>
          </div>

          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer"
            onClick={onLogoClick}
          >
            <div className="flex flex-col">
              <span className="font-serif font-bold text-2xl text-ink tracking-tight">আখড়া</span>
              <span className="text-[10px] text-akhra-brown uppercase tracking-widest -mt-1 font-sans">Stationery</span>
            </div>
          </div>

          {/* Desktop Search */}
          <div className="hidden sm:flex flex-1 mx-8 max-w-lg">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-[#EBE5DA] rounded-full leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-akhra-brown focus:border-akhra-brown sm:text-sm transition-all"
                placeholder="কি খুঁজতে চান? (Search...)"
              />
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button 
                onClick={onAIClick}
                className="hidden md:flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-akhra-green/20 to-akhra-brown/10 text-ink text-sm font-medium hover:shadow-sm transition-all border border-transparent hover:border-akhra-green"
            >
                <Sparkles size={16} className="mr-1.5 text-akhra-brown" />
                <span>Akhra AI</span>
            </button>

            <button className="p-2 text-ink hover:text-akhra-brown transition-colors">
                <User size={22} />
            </button>

            <button 
              className="relative p-2 text-ink hover:text-akhra-brown transition-colors"
              onClick={onCartClick}
            >
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-500 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Search (Visible only on small screens) */}
        <div className="sm:hidden pb-3">
             <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-[#EBE5DA] rounded-full leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-akhra-brown sm:text-sm"
                placeholder="Search products..."
              />
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;