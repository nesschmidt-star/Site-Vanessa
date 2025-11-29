import React from 'react';
import { Instagram } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Locations from './components/Locations';
import BMICalculator from './components/BMICalculator';
import WhatsAppButton from './components/WhatsAppButton';
import Testimonials from './components/Testimonials';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <main className="flex flex-col w-full">
        <AboutMe />
        <Services />
        <Testimonials />
        <Locations />
        <BMICalculator />
      </main>
      <WhatsAppButton />
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-sky-400 mb-4">Vanessa Schmidt Nutricionista</h3>
            <p className="text-gray-400 text-sm">
              Tecnologia avançada aliada ao cuidado humano para transformar sua saúde.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-sky-400 mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Sobre Mim</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Depoimentos</a></li>
              <li><a href="#locations" className="hover:text-white transition-colors">Locais de Atendimento</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">Calculadora IMC</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-sky-400 mb-4">Siga-me</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/nessahnutri/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Vanessa Schmidt. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
};

export default App;