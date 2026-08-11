import React from 'react';
import { Instagram, Globe, MapPin } from 'lucide-react';
import GitHubImage from './GitHubImage';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Foto Principal da Nutri (vanessanutri) */}
          <div className="relative mb-10 lg:mb-0 flex flex-col items-center">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-sky-100 bg-sky-50 flex items-center justify-center relative group">
              <GitHubImage 
                baseName="vanessanutri" 
                alt="Vanessa Schmidt Nutricionista" 
                className="object-cover object-center w-full h-full transition-transform duration-500 hover:scale-105"
                fallbackUrl="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop"
              />

              {/* Ícone flutuante do Instagram */}
              <div className="absolute -bottom-2 right-1/4 bg-white p-3 rounded-full shadow-xl border border-sky-100 hidden md:block z-10">
                <a 
                  href="https://www.instagram.com/nessahnutri/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sky-600 hover:text-sky-700"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-400">
              Foto sincronizada do GitHub: <span className="font-semibold text-sky-600">vanessanutri.jpg</span>
            </p>
          </div>

          {/* Conteúdo de Texto e Atendimento Online / Presencial */}
          <div className="text-center lg:text-left">
            <h2 className="text-base text-sky-600 font-semibold tracking-wide uppercase">Sobre Mim</h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl font-serif-elegant">
              Vanessa Schmidt
            </h3>
            <p className="mt-4 text-lg text-gray-500">
              Olá! Sou nutricionista apaixonada por transformar vidas através da alimentação equilibrada e consciente. 
              Meu objetivo é ajudar você a alcançar seus objetivos de saúde de forma leve, sem dietas restritivas e com muito sabor.
            </p>
            
            {/* Bloco Atendimento Online e Presencial com Foto vanessanutri1 */}
            <div className="mt-8 bg-sky-50/60 p-6 rounded-3xl border border-sky-100 shadow-sm">
              <div className="flex flex-col md:flex-row items-center gap-6">
                
                {/* Moldura da Segunda Foto (vanessanutri1) */}
                <div className="relative w-full md:w-44 h-48 flex-shrink-0 rounded-2xl overflow-hidden shadow-md border-2 border-white bg-white group">
                  <GitHubImage 
                    baseName="vanessanutri1" 
                    alt="Atendimento Online e Presencial Vanessa Schmidt" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    fallbackUrl="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/80 to-transparent p-2 text-center">
                    <span className="text-[10px] font-bold text-white tracking-wider uppercase">
                      vanessanutri1
                    </span>
                  </div>
                </div>

                {/* Descrição dos Modalidades */}
                <div className="space-y-4 flex-grow text-left">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-9 w-9 rounded-lg bg-sky-500 text-white shadow-sm">
                        <Globe className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-base font-bold text-gray-900">Atendimento Online</h4>
                      <p className="text-sm text-gray-600">
                        Consultas via videochamada para pacientes no Brasil e exterior.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-9 w-9 rounded-lg bg-emerald-500 text-white shadow-sm">
                        <MapPin className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-base font-bold text-gray-900">Atendimento Presencial</h4>
                      <p className="text-sm text-gray-600">
                        Consultórios no Centro e Estrela do Oriente (Belo Horizonte - MG).
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-8 flex justify-center lg:justify-start">
              <a 
                href="https://api.whatsapp.com/send/?phone=553182228501&text=Ola+Vanessa%2C+gostaria+de+saber+mais+sobre+os+valores+para+quem+tem+plano+de+saude&type=phone_number&app_absent=0" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-sky-600 hover:bg-sky-700 transition-colors shadow-lg hover:shadow-sky-100"
              >
                Agendar Consulta
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;