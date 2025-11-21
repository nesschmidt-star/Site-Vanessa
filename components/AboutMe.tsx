import React, { useState, useRef } from 'react';
import { Instagram, Globe, MapPin, Camera, Upload } from 'lucide-react';

const AboutMe: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string>('/vanessa.jpg');
  const [hasError, setHasError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageSrc(imageUrl);
      setHasError(false);
    }
  };

  const handleImageError = () => {
    setHasError(true);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <section id="about" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Foto da Nutri com Upload - Agora Circular e Centralizada */}
          <div className="relative mb-10 lg:mb-0 group cursor-pointer flex justify-center" onClick={triggerFileInput}>
            <div className={`w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-sky-100 ${hasError ? 'bg-sky-50 border-dashed border-sky-300' : 'bg-sky-100'}`}>
              
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleImageUpload} 
                className="hidden" 
                accept="image/*"
              />

              {!hasError ? (
                <>
                  <img 
                    src={imageSrc} 
                    alt="Vanessa Schmidt Nutricionista" 
                    className="object-cover object-center w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                    onError={handleImageError}
                  />
                  {/* Overlay de Edição ao passar o mouse */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center rounded-full">
                    <div className="opacity-0 group-hover:opacity-100 text-white flex flex-col items-center font-medium transition-opacity duration-300">
                      <Camera className="h-10 w-10 mb-2" />
                      <span>Trocar Foto</span>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center h-full w-full text-sky-600 p-8 text-center">
                  <div className="bg-sky-100 p-4 rounded-full mb-4">
                    <Upload className="h-8 w-8" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">Clique para adicionar sua foto</h4>
                  <p className="text-sm text-sky-500">Selecione o arquivo no seu dispositivo</p>
                </div>
              )}
            </div>

            {!hasError && (
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
            )}
          </div>

          {/* Conteúdo de Texto */}
          <div className="text-center lg:text-left">
            <h2 className="text-base text-sky-600 font-semibold tracking-wide uppercase">Sobre Mim</h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Vanessa Schmidt
            </h3>
            <p className="mt-4 text-lg text-gray-500">
              Olá! Sou nutricionista apaixonada por transformar vidas através da alimentação equilibrada e consciente. 
              Meu objetivo é ajudar você a alcançar seus objetivos de saúde de forma leve, sem dietas restritivas e com muito sabor.
            </p>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-start justify-center lg:justify-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-sky-500 text-white">
                    <Globe className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4 text-left">
                  <h4 className="text-lg leading-6 font-medium text-gray-900">Atendimento Online</h4>
                  <p className="mt-2 text-base text-gray-500">
                    Consultas completas via videochamada para pacientes em qualquer lugar do mundo.
                  </p>
                </div>
              </div>

              <div className="flex items-start justify-center lg:justify-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-sky-500 text-white">
                    <MapPin className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4 text-left">
                  <h4 className="text-lg leading-6 font-medium text-gray-900">Atendimento Presencial</h4>
                  <p className="mt-2 text-base text-gray-500">
                    Atendimento personalizado em dois endereços em Belo Horizonte: Centro e Estrela do Oriente.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center lg:justify-start">
              <a 
                href="https://nessahnutri.taplink.ws/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn7JBiKicL7OhpE_UcYHfU3pDJrO-ay8lPwu-py6F3NXN5JkMnf-1VMAptYGU_aem_q9b280lw_vZ8z0lDJSD6-A" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 transition-colors shadow-lg"
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