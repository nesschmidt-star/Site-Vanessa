
import React, { useState } from 'react';
import { Activity } from 'lucide-react';

const BMICalculator: React.FC = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    const h = parseFloat(height) / 100; // cm to m
    const w = parseFloat(weight);
    if (h > 0 && w > 0) {
      const result = w / (h * h);
      setBmi(parseFloat(result.toFixed(1)));
    }
  };

  const getBmiCategory = (val: number) => {
    if (val < 18.5) return { label: 'Abaixo do peso', color: 'text-blue-500', bg: 'bg-blue-100' };
    if (val < 24.9) return { label: 'Peso normal', color: 'text-sky-500', bg: 'bg-sky-100' };
    if (val < 29.9) return { label: 'Sobrepeso', color: 'text-yellow-500', bg: 'bg-yellow-100' };
    return { label: 'Obesidade', color: 'text-red-500', bg: 'bg-red-100' };
  };

  const category = bmi ? getBmiCategory(bmi) : null;

  return (
    <section id="calculator" className="py-16 bg-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Calculadora de IMC
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Verifique rapidamente seu Índice de Massa Corporal para entender melhor sua saúde atual.
          </p>
        </div>

        <div className="mt-10 max-w-lg mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <form onSubmit={calculateBMI} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="height" className="block text-sm font-medium text-gray-700">Altura (cm)</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type="number"
                      name="height"
                      id="height"
                      required
                      className="focus:ring-sky-500 focus:border-sky-500 block w-full pl-4 pr-12 sm:text-lg border-gray-300 rounded-md py-3"
                      placeholder="175"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="weight" className="block text-sm font-medium text-gray-700">Peso (kg)</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type="number"
                      name="weight"
                      id="weight"
                      required
                      className="focus:ring-sky-500 focus:border-sky-500 block w-full pl-4 pr-12 sm:text-lg border-gray-300 rounded-md py-3"
                      placeholder="70"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 md:text-lg transition-colors"
              >
                <Activity className="mr-2 h-5 w-5" />
                Calcular
              </button>
            </form>

            {bmi && category && (
              <div className={`mt-8 p-6 rounded-xl ${category.bg} text-center transition-all duration-500 ease-in-out`}>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Seu IMC</p>
                <p className="mt-2 text-5xl font-extrabold text-gray-900">{bmi}</p>
                <p className={`mt-2 text-lg font-bold ${category.color}`}>{category.label}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;
