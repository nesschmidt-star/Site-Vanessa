import React from 'react';
import { Calendar, Salad } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative bg-sky-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-sky-50 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl font-serif-elegant">
                <span className="block xl:inline">Sua saúde transformada</span>{' '}
                <span className="block text-sky-600 xl:inline">com Vanessa Schmidt</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Nutrição humanizada e inteligente. Receba planos alimentares personalizados, tire dúvidas e agende sua consulta online ou presencial em Belo Horizonte.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="https://nessahnutri.taplink.ws/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn7JBiKicL7OhpE_UcYHfU3pDJrO-ay8lPwu-py6F3NXN5JkMnf-1VMAptYGU_aem_q9b280lw_vZ8z0lDJSD6-A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 md:py-4 md:text-lg transition-colors"
                  >
                    Agendar Consulta
                    <Calendar className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex items-center justify-center bg-sky-100">
        {/* Placeholder for a nice hero image */}
        <div className="relative h-56 w-full sm:h-72 md:h-96 lg:h-full bg-sky-200 flex items-center justify-center overflow-hidden">
           <img 
             src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=1932&auto=format&fit=crop" 
             alt="Alimentação Saudável" 
             className="absolute w-full h-full object-cover opacity-60 mix-blend-multiply"
           />
           <Salad className="h-32 w-32 text-sky-600 relative z-10 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Hero;