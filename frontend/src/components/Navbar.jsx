import React from 'react';
import { Menu, Search, Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md shadow-sm border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-4">
            <img 
              src="/logo.png" 
              alt="Bettada Huvu Logo" 
              className="h-12 w-12 md:h-16 md:w-16 object-cover rounded-full shadow-md border-[3px] border-white/80"
              onError={(e) => e.target.style.display = 'none'}
            />
            <span className="font-bold text-2xl tracking-tighter text-primary-green">
              BETTADA<span className="text-accent-sun">HUVU</span>
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-earth-dark hover:text-primary-green font-medium transition-colors">Home</a>
            <a href="#destinations" className="text-earth-dark hover:text-primary-green font-medium transition-colors">Destinations</a>
            <a href="#packages" className="text-earth-dark hover:text-primary-green font-medium transition-colors">Packages</a>
            <a href="#about" className="text-earth-dark hover:text-primary-green font-medium transition-colors">About Us</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-earth-dark hover:text-primary-green transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <a href="tel:+910000000000" className="bg-primary-green text-white px-5 py-2.5 rounded-full font-medium flex items-center gap-2 hover:bg-green-800 transition-colors shadow-lg shadow-green-900/20">
              <Phone className="w-4 h-4" />
              Book Now
            </a>
          </div>
          
          <div className="md:hidden flex items-center">
            <button className="text-earth-dark">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
