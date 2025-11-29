import React, { useState } from 'react';
import { Menu, X, Leaf, Instagram } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center text-sky-600">
              <Leaf className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl tracking-tight">Vanessa Schmidt Nutricionista</span>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-6">
              <a href="#home" className="text-gray-500 hover:text-sky-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Início</a>
              <a href="#about" className="text-gray-500 hover:text-sky-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Sobre Mim</a>
              <a href="#services" className="text-gray-500 hover:text-sky-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Serviços</a>
              <a href="#testimonials" className="text-gray-500 hover:text-sky-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Depoimentos</a>
              <a href="#locations" className="text-gray-500 hover:text-sky-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Locais</a>
              <a href="#calculator" className="text-gray-500 hover:text-sky-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">IMC</a>
            </div>
          </div>
          <div className="hidden md:flex items-center">
             <a 
                href="https://www.instagram.com/nessahnutri/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sky-600 hover:text-sky-700 transition-colors p-2"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-sky-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500"
            >
              <span className="sr-only">Abrir menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-sky-600 block px-3 py-2 rounded-md text-base font-medium">Início</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-sky-600 block px-3 py-2 rounded-md text-base font-medium">Sobre Mim</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-sky-600 block px-3 py-2 rounded-md text-base font-medium">Serviços</a>
            <a href="#testimonials" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-sky-600 block px-3 py-2 rounded-md text-base font-medium">Depoimentos</a>
            <a href="#locations" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-sky-600 block px-3 py-2 rounded-md text-base font-medium">Locais</a>
            <a href="#calculator" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-sky-600 block px-3 py-2 rounded-md text-base font-medium">IMC</a>
            <a href="https://www.instagram.com/nessahnutri/" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-700 block px-3 py-2 rounded-md text-base font-medium flex items-center">
              <Instagram className="h-5 w-5 mr-2" /> Instagram
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;