
import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Review {
  name: string;
  time: string;
  text: string;
  image: string;
}

const Testimonials: React.FC = () => {
  const reviews: Review[] = [
    {
      name: "Gisele Araujo",
      time: "4 avaliações",
      text: "Vanessa tem sido além de uma excelente profissional, é uma pessoa muito atenciosa. Tem me ajudado muito nessa luta contra a balança, suas orientações personalizadas e adequadas a minha rotina, estão fazendo com que o processo seja menos pesado e mais fácil de lhe dar, sem sofrimento. Obrigada Vanessa, vc está fazendo a diferença em minha qualidade de vida!",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      name: "Esau Marques",
      time: "3 avaliações",
      text: "Trata-se de uma profissional exemplar. Atendeu as minhas necessidades individuais e me incentivou a continuar cuidando da minha saúde.",
      image: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
      name: "Carolina Penna",
      time: "Local Guide",
      text: "Excelente profissional! Muito atenciosa e competente. O plano alimentar é super tranquilo de seguir.",
      image: "https://randomuser.me/api/portraits/women/12.jpg"
    },
    {
      name: "Jacqueline de Paula Almeida",
      time: "2 anos atrás",
      text: "Bom dia Vanessa. Estou muito feliz com o seu modo de trabalho e já estou vendo resultados. Como você não restringiu tudo da minha dieta eu estou conseguindo seguir e como eu sei que posso comer o açaí e chocolate, não estou tendo vontade, não é fantástico. É claro que o tratamento que eu iniciei para ansiedade também está fazendo toda a diferença na minha compulsão alimentar. Eu já emagreci 1 kg 😍. Nao vou ficar mais pesando, para não gerar ansiedade, mas já consegui sair do ciclo de engordar 😍 Muito obrigada, por me incentivar e por ser tão atenciosa e profissional.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Sylvia Rosenbloom",
      time: "3 avaliações",
      text: "Incrível... Super recomendo a todos !!! 💯 % Atenciosa, entende bem a nossa necessidade e dificuldades também. Tirei muitas dúvidas. Aprendi coisas novas e estou muito confiante no tratamento. Vou levar pra minha vida e sei que estou no lugar certo. Obrigada Vanessa, você é uma excelente profissional. Sucesso sempre !!! 💌",
      image: "https://randomuser.me/api/portraits/women/33.jpg"
    },
    {
      name: "Isabella Figueira",
      time: "3 avaliações",
      text: "Profissional atenciosa e competente. A consulta foi ótima. Pretendo seguir com o acompanhamento até atingir meus objetivos :)",
      image: "https://randomuser.me/api/portraits/women/22.jpg"
    },
    {
      name: "Regina Trópia",
      time: "1 avaliação",
      text: "Hoje foi minha primeira consulta e fiquei muito motivada para iniciar essa jornada. Vanessa é muito atenciosa e acolhedora. Elaborou um plano alimentar escutando as minhas necessidades, o que certamente vai trazer ótimos resultados.",
      image: "https://randomuser.me/api/portraits/women/55.jpg"
    },
    {
      name: "Lorraine Gonçalves",
      time: "1 avaliação",
      text: "Posso dizer que foi um dos melhores investimentos da vida, com a Vanessa estou aprendendo a comer, e a ter equilíbrio. Dieta facil e simples. Que venha a próxima estratégia 🔥",
      image: "https://randomuser.me/api/portraits/women/60.jpg"
    },
    {
      name: "Katy Anjos",
      time: "1 avaliação",
      text: "A minha experiência hoje com a nutricionista Vanessa Schmidt foi bem diferente pois já faço com ela a 5 anos e ela sempre procura mudar as estratégias, e dessa vez além de me mostra a relação entre está bem comigo mesma e os alimentos introduziu os óleos essenciais pra trabalhar na minha ansiedade, e na compulsão alimentar de um forma natural.",
      image: "https://randomuser.me/api/portraits/women/90.jpg"
    },
    {
      name: "Nasser Almeida",
      time: "Local Guide",
      text: "Vanessa foi uma grata surpresa proporcionada pelo Instagram. Profissional competente, é um amor de pessoa e muito empática. Diferencia-se dos demais, pois preocupa-se de fato com o bem estar do paciente e não somente com números na balança. Indico de olhos fechados!",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? reviews.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === reviews.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section id="testimonials" className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-sky-600 font-semibold tracking-wide uppercase">Depoimentos</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl font-serif-elegant">
            O que dizem meus pacientes
          </p>
          <div className="mt-4 flex justify-center items-center space-x-2">
            <div className="flex text-yellow-400">
              <Star className="h-6 w-6 fill-current" />
              <Star className="h-6 w-6 fill-current" />
              <Star className="h-6 w-6 fill-current" />
              <Star className="h-6 w-6 fill-current" />
              <Star className="h-6 w-6 fill-current" />
            </div>
            <span className="text-gray-600 font-medium">5.0 de avaliação média</span>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative group">
          
          {/* Card Central */}
          <div className="bg-slate-50 p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100 transition-all duration-500 ease-in-out min-h-[300px] flex flex-col justify-center relative mx-6 md:mx-0">
            
            {/* Ícone de Citação Decorativo */}
            <div className="absolute top-6 right-8 text-sky-100">
               <Quote className="h-20 w-20 opacity-50 transform rotate-12" />
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start mb-6 relative z-10">
              <img 
                src={reviews[currentIndex].image} 
                alt={reviews[currentIndex].name} 
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md mb-4 md:mb-0 md:mr-6"
              />
              <div className="text-center md:text-left">
                <h4 className="font-bold text-gray-900 text-lg">{reviews[currentIndex].name}</h4>
                <div className="flex items-center justify-center md:justify-start mt-2">
                  <div className="flex text-yellow-400 mr-2">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                  <span className="text-sm text-gray-500">{reviews[currentIndex].time}</span>
                </div>
              </div>
            </div>
            
            <div className="relative z-10">
              <p className="text-gray-700 text-lg leading-relaxed text-center md:text-left italic">
                "{reviews[currentIndex].text}"
              </p>
            </div>
          </div>

          {/* Seta Esquerda (Anterior) */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-16 z-20 p-3 rounded-full bg-white text-sky-600 shadow-lg hover:bg-sky-50 transition-all border border-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
            aria-label="Depoimento Anterior"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          {/* Seta Direita (Próximo) */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-16 z-20 p-3 rounded-full bg-white text-sky-600 shadow-lg hover:bg-sky-50 transition-all border border-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
            aria-label="Próximo Depoimento"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          {/* Dots Indicators */}
          <div className="flex justify-center py-6 space-x-2">
            {reviews.map((_, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`transition-all duration-300 cursor-pointer rounded-full ${currentIndex === slideIndex ? "p-1.5 bg-sky-600 w-4" : "p-1.5 bg-gray-300 w-1.5 hover:bg-sky-300"}`}
              ></div>
            ))}
          </div>

        </div>
        
        <div className="mt-8 text-center">
          <a 
            href="https://www.google.com/search?q=vanessa+schmidt+nutricionista" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sky-600 font-medium hover:text-sky-800 underline transition-colors"
          >
            Ver mais avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
