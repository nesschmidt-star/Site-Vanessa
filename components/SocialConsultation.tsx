import React from 'react';
import { Heart, MessageCircle } from 'lucide-react';

const SocialConsultation: React.FC = () => {
  const whatsappLink = "https://wa.me/553182228501?text=Ola%20Vanessa,%20gostaria%20de%20saber%20mais%20sobre%20a%20consulta%20com%20valor%20social";

  return (
    <section id="social-value" className="bg-white pb-12 pt-4">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-50/50 rounded-2xl p-6 md:p-8 border border-emerald-100 text-center">
          <div className="inline-flex items-center justify-center w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full mb-4">
            <Heart className="w-5 h-5 fill-current" />
          </div>
          
          <h3 className="text-xl font-bold text-emerald-800 font-serif-elegant mb-2">
            Consulta com Valor Social
          </h3>
          
          <p className="text-gray-600 mb-4 text-sm md:text-base">
            Oferecemos modalidades de atendimento com valor social a partir de <span className="font-bold text-emerald-600">R$ 120,00</span>. Acreditamos na nutrição acessível para todos.
          </p>

          <div className="flex justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2 text-sm font-bold rounded-full text-white bg-emerald-600 hover:bg-emerald-700 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Consultar condições e horários
            </a>
          </div>
          
          <p className="mt-4 text-[10px] text-gray-400 italic">
            *Sujeito à disponibilidade de horários e análise de condições.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialConsultation;
