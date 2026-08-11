import React from 'react';
import { Calendar, Salad, CheckCircle2 } from 'lucide-react';
import GitHubImage from './GitHubImage';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative bg-gradient-to-br from-sky-50 via-emerald-50/30 to-white overflow-hidden py-16 lg:py-24">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c70a_1px,transparent_1px),linear-gradient(to_bottom,#0284c70a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Column 1: Copy and CTA */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-8">
            <div className="inline-flex items-center space-x-2 bg-sky-100/80 backdrop-blur-sm border border-sky-200/50 px-3.5 py-1.5 rounded-full text-sky-800 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
              <span>✨ Nutrição Humanizada & Inteligente</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight font-extrabold text-slate-900 font-serif-elegant leading-tight">
              Sua saúde transformada <br className="hidden sm:inline" />
              <span className="text-sky-600 bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">com Vanessa Schmidt</span>
            </h1>
            
            <p className="text-lg font-medium text-sky-800 sm:text-xl md:text-2xl italic leading-relaxed border-l-4 border-sky-400 pl-4 py-1 text-left max-w-2xl mx-auto lg:mx-0">
              “Emagreça com estratégia, sem dietas restritivas e com acompanhamento real”
            </p>
            
            <p className="text-base text-slate-600 sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Receba planos alimentares personalizados que se adaptam à sua rotina real. Agende sua consulta online ou presencial em Belo Horizonte e conquiste o corpo e a saúde que você deseja sem passar fome.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="https://api.whatsapp.com/send/?phone=553182228501&text=Ola+Vanessa%2C+gostaria+de+saber+mais+sobre+os+valores+para+quem+tem+plano+de+saude&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-2xl text-white bg-sky-600 hover:bg-sky-700 hover:shadow-lg hover:shadow-sky-100 transition-all duration-300 md:text-lg transform hover:-translate-y-0.5"
              >
                Agendar Consulta
                <Calendar className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#about"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-slate-200 text-base font-semibold rounded-2xl text-slate-700 bg-white hover:bg-slate-50 transition-all duration-300 md:text-lg transform hover:-translate-y-0.5"
              >
                Conhecer a Vanessa
              </a>
            </div>
            
            {/* Quick trust points */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-y-2 gap-x-6 text-sm text-slate-500 pt-4">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500" />
                <span>+1.000 vidas transformadas</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500" />
                <span>Planos Alimentares sem frescura</span>
              </div>
            </div>
          </div>
          
          {/* Column 2: Modern Image showcase */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Soft decorative blur blobs in the background */}
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-sky-200/50 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-100/50 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse delay-700"></div>
              
              {/* Main Image frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white aspect-[4/3] lg:aspect-square">
                <GitHubImage 
                  baseName="vanessanutri" 
                  alt="Vanessa Schmidt Nutricionista" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  fallbackUrl="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop"
                />
              </div>
              
              {/* Floating Badge 1 - Left bottom */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center space-x-3 max-w-xs">
                <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl">
                  <Salad className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-slate-800">Planos Práticos</p>
                  <p className="text-xs text-slate-500">Adaptados à sua rotina</p>
                </div>
              </div>
              
              {/* Floating Badge 2 - Right top */}
              <div className="absolute -top-6 -right-4 sm:-right-6 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-xl border border-slate-100 flex items-center space-x-2">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-bold text-slate-700">Online & Presencial</span>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;