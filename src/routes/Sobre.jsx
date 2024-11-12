// sobre.jsx
import React from 'react';
import { FaLeaf, FaHandsHelping, FaLightbulb } from 'react-icons/fa';

const Sobre = () => {
  return (
    <div className="bg-white min-h-screen p-6 flex justify-center items-center">
      <div className="bg-gradient-to-b from-green-50 to-green-100 rounded-lg shadow-xl max-w-5xl p-8 md:flex">
        {/* Barra Lateral */}
        <aside className="md:w-1/3 flex flex-col items-center border-r border-gray-300 pr-6 mb-6 md:mb-0">
          {/* Logo */}
          <img src="/public/logo.png" alt="Logo da EcoSphere" className="w-32 h-32 mb-4" />
          <h1 className="text-3xl font-bold text-black text-center">EcoSphere</h1>

          {/* Imagem do Escritório */}
          <div className="w-full mt-6 mb-6">
            <img src="/public/sobre.png" alt="Escritório e equipe da EcoSphere" className="rounded-lg shadow-md" />
          </div>

          {/* Informações adicionais */}
          <p className="text-gray-600 text-center text-sm italic">
            "Impulsionando o futuro sustentável com soluções inovadoras de energia limpa."
          </p>
        </aside>

        {/* Conteúdo Principal */}
        <section className="md:w-2/3 px-6 flex flex-col">
          {/* Texto de Introdução */}
          <div className="mb-6">
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              <strong className="text-black">EcoSphere</strong> nasceu com a missão de impulsionar um futuro sustentável por meio de
              tecnologias inovadoras e soluções de energia limpa. Acreditamos que um mundo mais sustentável é possível,
              e dedicamos nossos esforços em desenvolver práticas e tecnologias de energia renovável que respeitam e
              preservam o meio ambiente.
            </p>
          </div>

          {/* Seções Missão e Visão */}
          <div className="space-y-8">
            {/* Missão */}
            <div className="flex items-center mb-6">
              <FaHandsHelping className="text-green-500 w-8 h-8 mr-3" />
              <div>
                <h2 className="text-2xl font-semibold text-black mb-2">Nossa Missão</h2>
                <p className="text-gray-700 leading-relaxed">
                  Promover o uso de energia limpa e renovável, buscando soluções que transformem o futuro e contribuam
                  para um planeta mais saudável e equilibrado.
                </p>
              </div>
            </div>

            {/* Visão */}
            <div className="flex items-center mb-6">
              <FaLightbulb className="text-yellow-500 w-8 h-8 mr-3" />
              <div>
                <h2 className="text-2xl font-semibold text-black mb-2">Nossa Visão</h2>
                <p className="text-gray-700 leading-relaxed">
                  Ser referência em inovação sustentável e energia limpa, contribuindo para um mundo onde o desenvolvimento
                  econômico e o respeito ao meio ambiente caminham juntos.
                </p>
              </div>
            </div>

            {/* Valores */}
            <div className="flex items-center mb-6">
              <FaLeaf className="text-green-400 w-8 h-8 mr-3" />
              <div>
                <h2 className="text-2xl font-semibold text-black mb-2">Nossos Valores</h2>
                <p className="text-gray-700 leading-relaxed">
                  Sustentabilidade, inovação e responsabilidade ambiental são os pilares que guiam nossas ações e decisões.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sobre;
