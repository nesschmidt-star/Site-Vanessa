import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Canetas Emagrecedoras",
      subtitle: "Acompanhamento Ozempic e Mounjaro",
      description: "Acompanhamento nutricional especializado para usuários de injetáveis, focado em minimizar efeitos colaterais e evitar a perda de massa muscular.",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Hipertrofia",
      subtitle: "Ganho de Massa Muscular",
      description: "Planejamento dietético estratégico com cálculo preciso de macronutrientes para potencializar seus treinos e resultados estéticos.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Controle do Diabetes",
      subtitle: "Tipo 1, 2 e Gestacional",
      description: "Estratégias para controle glicêmico eficiente, prevenindo complicações e permitindo uma vida leve e saborosa.",
      // Nova imagem de aparelho de glicemia (Glucometer) garantida
      image: "https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Saúde da Tireoide",
      subtitle: "Hipotireoidismo e Hashimoto",
      description: "Nutrição funcional focada na desinflamação e otimização metabólica para recuperar sua energia e disposição.",
      image: "https://images.unsplash.com/photo-1579126038374-6064e9370f0f?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Controle da Hipertensão",
      subtitle: "Saúde Cardiovascular",
      description: "Planejamento alimentar focado na redução da pressão arterial e proteção do coração, com estratégias saborosas para controle do sódio.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Emagrecimento Definitivo",
      subtitle: "Sem dietas restritivas",
      description: "Reeducação alimentar focada em mudança de hábitos e resultados sustentáveis, respeitando sua rotina e preferências.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
    }
  ];

  return (
    <section id="services" className="py-16 bg-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-sky-600 font-semibold tracking-wide uppercase">Especialidades</h2>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl font-serif-elegant">
            Como posso te ajudar
          </h3>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Protocolos personalizados baseados em ciência e adaptados à sua realidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
              <div className="h-48 overflow-hidden relative bg-gray-200">
                <div className="absolute inset-0 bg-sky-900/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-2 py-1 rounded-full">
                    {service.subtitle}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 font-serif-elegant">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;