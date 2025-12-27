import React from 'react';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-[#EBE5DA] pt-12 pb-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            
            {/* Brand */}
            <div className="col-span-1 md:col-span-1">
                <span className="font-serif font-bold text-2xl text-ink">আখড়া</span>
                <p className="text-sm text-gray-500 mt-2 font-sans">
                    শিক্ষার্থী এবং সৃজনশীল মানুষের বিশ্বস্ত ঠিকানা।
                </p>
                <div className="flex gap-4 mt-4">
                    <Facebook size={20} className="text-gray-400 hover:text-akhra-brown cursor-pointer" />
                    <Instagram size={20} className="text-gray-400 hover:text-akhra-brown cursor-pointer" />
                </div>
            </div>

            {/* Links */}
            <div className="col-span-1">
                <h4 className="font-bold text-ink mb-4 font-sans">প্রয়োজনীয় লিংক</h4>
                <ul className="space-y-2 text-sm text-gray-500 font-sans">
                    <li className="hover:text-akhra-brown cursor-pointer">আমাদের গল্প</li>
                    <li className="hover:text-akhra-brown cursor-pointer">ডেলিভারি তথ্য</li>
                    <li className="hover:text-akhra-brown cursor-pointer">শর্তাবলী</li>
                    <li className="hover:text-akhra-brown cursor-pointer">গোপনীয়তা নীতি</li>
                </ul>
            </div>

            {/* Contact */}
            <div className="col-span-1">
                <h4 className="font-bold text-ink mb-4 font-sans">যোগাযোগ</h4>
                <ul className="space-y-3 text-sm text-gray-500 font-sans">
                    <li className="flex items-start gap-2">
                        <MapPin size={16} className="mt-1 flex-shrink-0" />
                        <span>Level 4, Dhanmondi 27, Dhaka-1209, Bangladesh</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <Phone size={16} />
                        <span>+880 1700-000000</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <Mail size={16} />
                        <span>hello@akhrastationery.com</span>
                    </li>
                </ul>
            </div>

             {/* Payment */}
             <div className="col-span-1">
                <h4 className="font-bold text-ink mb-4 font-sans">পেমেন্ট মেথড</h4>
                <div className="flex flex-wrap gap-2">
                    {['bKash', 'Nagad', 'Rocket', 'Cash On Delivery'].map(m => (
                        <span key={m} className="px-3 py-1 bg-gray-100 rounded text-xs text-gray-600 border border-gray-200">{m}</span>
                    ))}
                </div>
            </div>

        </div>
        <div className="border-t border-gray-100 pt-6 text-center text-xs text-gray-400 font-sans">
            &copy; {new Date().getFullYear()} Akhra Stationery. All rights reserved. Designed for Students.
        </div>
      </div>
    </footer>
  );
};

export default Footer;