import React, { useState, useEffect } from 'react';
import { Instagram, Globe, MapPin, UserRound, RefreshCw } from 'lucide-react';

const AboutMe: React.FC = () => {
  // Estado para controlar qual imagem exibir
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [attempts, setAttempts] = useState(0);

  // Lista de tentativas de nomes de arquivo (O código vai testar um por um)
  const baseUrl = "https://raw.githubusercontent.com/nesschmidt-star/Site-Vanessa/main/";
  const possibleNames = [
    "vanessa.jpg",      // Padrão
    "Vanessa.jpg",      // Com maiúscula
    "vanessa.jpeg",     // Formato jpeg
    "Vanessa.jpeg",     // Jpeg com maiúscula
    "vanessa.png",      // Formato png
    "vanessa.jpg.jpg",  // Erro comum do Windows
    "foto.jpg"          // Nome genérico
  ];

  // Função que testa as imagens
  const findImage = () => {
    setLoading(true);
    let found = false;
    
    // Adiciona timestamp para evitar cache (?t=...)
    const timestamp = new Date().getTime();

    // Tenta carregar a primeira imagem que funcionar
    const tryNextImage = (index: number) => {
      if (index >= possibleNames.length) {
        setLoading(false); // Nenhuma funcionou
        return;
      }

      const img = new Image();
      const urlToTest = `${baseUrl}${possibleNames[index]}?t=${timestamp}`;
      
      img.onload = () => {
        setCurrentImage(urlToTest);
        setLoading(false);
        found = true;
      };

      img.onerror = () => {
        if (!found) tryNextImage(index + 1);
      };

      img.src = urlToTest;
    };

    tryNextImage(0);
  };

  // Tenta buscar a imagem assim que a tela abre
  useEffect(() => {
    findImage();
  }, [attempts]);

  return (
    <section id="about" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Foto da Nutri */}
          <div className="relative mb-10 lg:mb-0 flex flex-col items-center">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-sky-100 bg-sky-50 flex items-center justify-center relative group">
              
              {currentImage ? (
                <img 
                  src={currentImage}
                  alt="Vanessa Schmidt Nutricionista" 
                  className="object-cover object-center w-full h-full transition-transform duration-500 hover:scale-105"
                />
              ) : (
                /* Ícone Neutro se a foto não for encontrada */
                <div className="flex flex-col items-center justify-center text-sky-300 w-full h-full bg-sky-50 p-6 text-center animate-pulse">
                   {loading ? (
                     <RefreshCw className="h-16 w-16 animate-spin mb-2" />
                   ) : (
                     <UserRound className="h-32 w-32 opacity-50 mb-2" />
                   )}
                  <p className="text-xs text-sky-500 font-bold">
                    {loading ? "Procurando sua foto..." : "Aguardando Foto"}
                  </p>
                  {!loading && (
                    <p className="text-[10px] text-sky-400 mt-1">
                      Salve sua foto no GitHub com o nome <b>vanessa.jpg</b>
                    </p>
                  )}
                </div>
              )}

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

            {/* Botão de Forçar Atualização (Útil se a pessoa acabou de subir a foto) */}
            <button 
              onClick={() => setAttempts(a => a + 1)}
              className="mt-4 flex items-center text-xs text-gray-400 hover:text-sky-600 transition-colors"
              title="Clique aqui se você acabou de subir a foto"
            >
              <RefreshCw className={`h-3 w-3 mr-1 ${loading ? 'animate-spin' : ''}`} />
              Atualizar foto
            </button>
          </div>

          {/* Conteúdo de Texto */}
          <div className="text-center lg:text-left">
            <h2 className="text-base text-sky-600 font-semibold tracking-wide uppercase">Sobre Mim</h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl font-serif-elegant">
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