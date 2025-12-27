import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HERO_TAGLINE_BN, HERO_TAGLINE_EN } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-[#F9F7F2] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-akhra-green/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 rounded-full bg-akhra-brown/10 blur-3xl"></div>
      
      {/* Paper texture overlay (CSS pattern) */}
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(#D7CCC8 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-12 pb-16 sm:pt-20 sm:pb-24">
        <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-[#EBE5DA] shadow-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-red-500 mr-2 animate-pulse"></span>
                <span className="text-xs font-sans font-medium text-gray-500 tracking-wide uppercase">Made for Bangladeshi Students 🇧🇩</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-ink mb-4 leading-tight">
                {HERO_TAGLINE_BN}
            </h1>
            
            <p className="text-lg sm:text-xl font-sans text-gray-600 mb-8 max-w-2xl mx-auto">
                {HERO_TAGLINE_EN} <br/>
                <span className="text-sm text-gray-500 mt-2 block">Premium stationery, affordable prices.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="w-full sm:w-auto px-8 py-3 bg-akhra-brown text-white font-sans font-medium rounded-full shadow-md hover:bg-[#7a5e54] hover:shadow-lg transition-all flex items-center justify-center gap-2">
                    শপিং শুরু করুন <ArrowRight size={18} />
                </button>
                <button className="w-full sm:w-auto px-8 py-3 bg-white text-ink border border-[#EBE5DA] font-sans font-medium rounded-full hover:bg-paper-dark transition-all">
                    বান্ডেল অফার দেখুন
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;