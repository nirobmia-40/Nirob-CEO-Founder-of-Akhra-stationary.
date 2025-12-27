import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CartSidebar from './components/CartSidebar';
import AIAssistant from './components/AIAssistant';
import Footer from './components/Footer';
import { PRODUCTS } from './constants';
import { Product, CartItem, Category, ViewState } from './types';
import { Filter } from 'lucide-react';

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [viewState, setViewState] = useState<ViewState>('HOME');

  // Cart Logic
  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    }));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  // Filter Logic
  const filteredProducts = selectedCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col font-sans text-ink bg-[#F9F7F2]">
      <Navbar 
        cartCount={cart.reduce((a, b) => a + b.quantity, 0)} 
        onCartClick={() => setIsCartOpen(true)}
        onLogoClick={() => {
            setViewState('HOME');
            window.scrollTo(0, 0);
        }}
        onAIClick={() => setIsAIOpen(true)}
      />
      
      <main className="flex-grow">
        {viewState === 'HOME' && (
            <>
                <Hero />
                
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                        <div>
                            <h2 className="text-2xl font-serif font-bold text-ink mb-1">জনপ্রিয় কালেকশন</h2>
                            <p className="text-sm text-gray-500 font-sans">আপনার পছন্দের স্টেশনারি খুঁজে নিন</p>
                        </div>
                        
                        {/* Categories Scroll */}
                        <div className="mt-4 md:mt-0 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                            <div className="flex space-x-2">
                                <button 
                                    onClick={() => setSelectedCategory('All')}
                                    className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${selectedCategory === 'All' ? 'bg-akhra-brown text-white' : 'bg-white border border-[#EBE5DA] text-gray-600 hover:bg-paper-dark'}`}
                                >
                                    সব দেখুন (All)
                                </button>
                                {Object.values(Category).map((cat) => (
                                    <button 
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${selectedCategory === cat ? 'bg-akhra-brown text-white' : 'bg-white border border-[#EBE5DA] text-gray-600 hover:bg-paper-dark'}`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
                        {filteredProducts.map(product => (
                            <ProductCard 
                                key={product.id} 
                                product={product} 
                                onAddToCart={addToCart}
                                onClick={(p) => console.log('View product', p.name)}
                            />
                        ))}
                    </div>
                    
                    {filteredProducts.length === 0 && (
                        <div className="text-center py-20 text-gray-500">
                            কোন পণ্য পাওয়া যায়নি।
                        </div>
                    )}
                </section>
                
                {/* Special Section: Exam Bundle */}
                <section className="bg-white py-16 border-y border-[#EBE5DA]">
                     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-akhra-green/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-1">
                                <span className="inline-block px-3 py-1 bg-white text-akhra-brown text-xs font-bold rounded-full mb-4">Exam Special</span>
                                <h2 className="text-3xl font-serif font-bold mb-4">পরীক্ষার প্রস্তুতি?</h2>
                                <p className="text-gray-600 mb-6">আমাদের "Exam Essentials" বান্ডেল প্যাকের সাথে নিশ্চিন্তে পরীক্ষার হলে যান। কলম, পেন্সিল, জ্যামিতি বক্স - সব একসাথে।</p>
                                <button className="px-6 py-3 bg-ink text-white rounded-xl font-medium hover:bg-gray-800 transition-colors">
                                    বান্ডেল কিনুন - ৳ ৫০০
                                </button>
                            </div>
                            <div className="flex-1 w-full flex justify-center">
                                <img src="https://picsum.photos/id/180/500/300" alt="Stationery Bundle" className="rounded-xl shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-500" />
                            </div>
                        </div>
                     </div>
                </section>
            </>
        )}
      </main>

      <Footer />

      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        onCheckout={() => alert('Checkout feature coming soon! (Payment Gateways: bKash, Nagad available)')}
      />

      <AIAssistant 
        isOpen={isAIOpen}
        onClose={() => setIsAIOpen(false)}
      />
    </div>
  );
}

export default App;