import React, { useState } from 'react';
import { Menu, X, Instagram } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20"> {/* Aumentei um pouco a altura para acomodar as duas linhas */}
          
          {/* Logo e Links */}
          <div className="flex items-center flex-1">
            {/* Logo Brand */}
            <div className="flex-shrink-0 flex items-center text-sky-600 mr-4">
              {/* Ícone de Melancia Minimalista - Traço Fino e Elegante */}
              <svg 
                viewBox="0 0 24 24" 
                className="h-7 w-7 mr-2 text-sky-500" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Casca (Arco simples) */}
                <path 
                  d="M20 10C20 14.4183 16.4183 18 12 18C7.58172 18 4 14.4183 4 10" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                />
                {/* Parte reta de cima */}
                <path 
                  d="M4 10H20" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                />
                {/* Sementes (Pequenos pontos delicados) */}
                <circle cx="9" cy="13" r="1" fill="currentColor" />
                <circle cx="12" cy="15" r="1" fill="currentColor" />
                <circle cx="15" cy="13" r="1" fill="currentColor" />
              </svg>

              <div className="flex flex-col">
                <span className="font-bold text-xl leading-none font-serif-elegant text-sky-700">Vanessa Schmidt</span>
                <span className="text-xs uppercase tracking-[0.2em] text-sky-500 font-medium mt-0.5">Nutricionista</span>
              </div>
            </div>

            {/* Desktop Menu Links */}
            <div className="hidden md:flex md:ml-auto md:space-x-4 lg:space-x-8 items-center">
              <a href="#home" className="text-gray-500 hover:text-sky-600 px-2 py-2 rounded-md text-sm font-medium transition-colors">Início</a>
              <a href="#about" className="text-gray-500 hover:text-sky-600 px-2 py-2 rounded-md text-sm font-medium transition-colors">Sobre Mim</a>
              <a href="#services" className="text-gray-500 hover:text-sky-600 px-2 py-2 rounded-md text-sm font-medium transition-colors">Serviços</a>
              <a href="#testimonials" className="text-gray-500 hover:text-sky-600 px-2 py-2 rounded-md text-sm font-medium transition-colors">Depoimentos</a>
              <a href="#locations" className="text-gray-500 hover:text-sky-600 px-2 py-2 rounded-md text-sm font-medium transition-colors">Locais</a>
              <a href="#calculator" className="text-gray-500 hover:text-sky-600 px-2 py-2 rounded-md text-sm font-medium transition-colors">IMC</a>
            </div>
          </div>

          {/* Instagram Icon (Desktop) */}
          <div className="hidden md:flex items-center ml-4 border-l border-gray-100 pl-4">
             <a 
                href="https://www.instagram.com/nessahnutri/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sky-600 hover:text-sky-700 transition-colors p-2 bg-sky-50 rounded-full hover:bg-sky-100"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
          </div>

          {/* Mobile Menu Button */}
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

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-sky-600 block px-3 py-2 rounded-md text-base font-medium">Início</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-sky-600 block px-3 py-2 rounded-md text-base font-medium">Sobre Mim</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-sky-600 block px-3 py-2 rounded-md text-base font-medium">Serviços</a>
            <a href="#testimonials" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-sky-600 block px-3 py-2 rounded-md text-base font-medium">Depoimentos</a>
            <a href="#locations" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-sky-600 block px-3 py-2 rounded-md text-base font-medium">Locais</a>
            <a href="#calculator" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-sky-600 block px-3 py-2 rounded-md text-base font-medium">IMC</a>
            <a href="https://www.instagram.com/nessahnutri/" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-700 block px-3 py-2 rounded-md text-base font-medium flex items-center bg-sky-50 mt-2">
              <Instagram className="h-5 w-5 mr-2" /> Siga no Instagram
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;