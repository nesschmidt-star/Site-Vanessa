import React from 'react';
import { MessageCircle } from 'lucide-react';

const CtaSection: React.FC = () => {
  const whatsappLink = "https://wa.me/553182228501?text=gostaria%20de%20saber%20mais%20informacoes";

  return (
    <section className="py-20 bg-gradient-to-r from-sky-600 to-blue-700 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl font-serif-elegant mb-6">
          Não deixe sua saúde para depois
        </h2>
        <p className="mt-4 text-xl text-sky-100 max-w-2xl mx-auto mb-10">
          Dê o primeiro passo hoje mesmo. Agende sua consulta e vamos construir juntos a sua melhor versão com um plano alimentar que cabe na sua rotina.
        </p>
        
        <div className="flex justify-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-sky-700 bg-white shadow-2xl hover:bg-sky-50 hover:scale-105 transition-all duration-300 ring-4 ring-white/30"
          >
            <MessageCircle className="w-6 h-6 mr-3 group-hover:animate-bounce" />
            QUERO AGENDAR AGORA
          </a>
        </div>
        <p className="mt-6 text-sm text-sky-200 opacity-90">
          Atendimento Online e Presencial em Belo Horizonte
        </p>
      </div>
    </section>
  );
};

export default CtaSection;