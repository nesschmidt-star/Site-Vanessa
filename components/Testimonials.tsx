import React from 'react';
import { Star } from 'lucide-react';

interface Review {
  name: string;
  time: string;
  text: string;
  image: string;
}

const Testimonials: React.FC = () => {
  const reviews: Review[] = [
    {
      name: "Jacqueline de Paula Almeida",
      time: "2 anos atrás",
      text: "Bom dia Vanessa. Estou muito feliz com o seu modo de trabalho e já estou vendo resultados. Como você não restringiu tudo da minha dieta eu estou conseguindo seguir e como eu sei que posso comer o açaí e chocolate, não estou tendo vontade, não é fantástico. É claro que o tratamento que eu iniciei para ansiedade também está fazendo toda a diferença na minha compulsão alimentar. Eu já emagreci 1 kg 😍. Nao vou ficar mais pesando, para não gerar ansiedade, mas já consegui sair do ciclo de engordar 😍 Muito obrigada, por me incentivar e por ser tão atenciosa e profissional.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Gisele Araujo",
      time: "4 avaliações",
      text: "Vanessa tem sido além de uma excelente profissional, é uma pessoa muito atenciosa. Tem me ajudado muito nessa luta contra a balança, suas orientações personalizadas e adequadas a minha rotina, estão fazendo com que o processo seja menos pesado e mais fácil de lhe dar, sem sofrimento. Obrigada Vanessa, vc está fazendo a diferença em minha qualidade de vida!",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
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
    }
  ];

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

        {/* Masonry Grid Layout Simulator with columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-slate-50 p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-fit">
              <div className="flex items-start mb-4">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-white shadow-sm"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                  <div className="flex items-center mt-1">
                    <div className="flex text-yellow-400 mr-2">
                      <Star className="h-3 w-3 fill-current" />
                      <Star className="h-3 w-3 fill-current" />
                      <Star className="h-3 w-3 fill-current" />
                      <Star className="h-3 w-3 fill-current" />
                      <Star className="h-3 w-3 fill-current" />
                    </div>
                    <span className="text-xs text-gray-400">{review.time}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="https://www.google.com/search?q=vanessa+schmidt+nutricionista" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sky-600 font-medium hover:text-sky-800 underline"
          >
            Ver mais avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;