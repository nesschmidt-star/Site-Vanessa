import React from 'react';
import { MessageCircle } from 'lucide-react';

const InsuranceInfo: React.FC = () => {
  const whatsappLink = "https://wa.me/553182228501?text=Ola%20Vanessa,%20gostaria%20de%20saber%20mais%20sobre%20os%20valores%20para%20quem%20tem%20plano%20de%20saude";

  return (
    <section className="bg-white pb-16 pt-6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-r from-sky-50 to-blue-50 rounded-3xl p-8 md:p-12 shadow-lg border border-sky-100 overflow-hidden">
          {/* Elemento decorativo de fundo */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-sky-100 opacity-50 blur-3xl"></div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-sky-800 font-serif-elegant mb-4">
              Você possui Plano de Saúde?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Oferecemos <span className="font-bold text-sky-600 bg-sky-100 px-2 py-1 rounded">valores exclusivos e diferenciados</span> para beneficiários dos principais convênios como Casu, Amil, Sulamérica, Bradesco e Unimed. Cuide da sua saúde com a qualidade que você merece.
            </p>

            <div className="flex justify-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold rounded-full text-white bg-sky-600 hover:bg-sky-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Confira
              </a>
            </div>
            
            <p className="mt-6 text-sm text-gray-500">
              *Consulte condições de reembolso e elegibilidade do seu plano pelo WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceInfo;