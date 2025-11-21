import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

const Locations: React.FC = () => {
  return (
    <section id="locations" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-sky-600 font-semibold tracking-wide uppercase">Onde me encontrar</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Locais de Atendimento Presencial
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Atendimento exclusivo em Belo Horizonte nos endereços abaixo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Local 1 */}
          <div className="bg-slate-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-sky-600 mr-2" />
                <h3 className="text-xl font-bold text-gray-900">Centro</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Rua Guajajaras 880, sala 706<br />
                Centro, Belo Horizonte - MG
              </p>
            </div>
            <div className="h-64 w-full bg-gray-200">
              <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight={0} 
                marginWidth={0} 
                src="https://maps.google.com/maps?q=Rua+Guajajaras+880+Centro+Belo+Horizonte&t=&z=15&ie=UTF8&iwloc=&output=embed"
                title="Mapa Rua Guajajaras"
                className="filter grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>

          {/* Local 2 */}
          <div className="bg-slate-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-sky-600 mr-2" />
                <h3 className="text-xl font-bold text-gray-900">Estrela do Oriente</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Rua Augusto José dos Santos, 801<br />
                Estrela do Oriente, Belo Horizonte - MG
              </p>
            </div>
            <div className="h-64 w-full bg-gray-200">
              <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight={0} 
                marginWidth={0} 
                src="https://maps.google.com/maps?q=Rua+Augusto+Jose+dos+Santos+801+Estrela+do+Oriente+Belo+Horizonte&t=&z=15&ie=UTF8&iwloc=&output=embed"
                title="Mapa Rua Augusto José dos Santos"
                className="filter grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;