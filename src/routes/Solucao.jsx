import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const Solucao = () => {
    const location = useLocation();

    const incentivoRef = useRef(null);
    const armazenamentoRef = useRef(null);
    const mobilidadeRef = useRef(null);

    useEffect(() => {
        // Scroll até a seção correspondente com base no hash da URL
        if (location.hash) {
            const sectionId = location.hash.substring(1); // remove o "#"
            const sectionRef = {
                'incentivo-energias-renovaveis': incentivoRef,
                'desenvolvimento-armazenamento': armazenamentoRef,
                'mobilidade-eletrica': mobilidadeRef
            }[sectionId];
            if (sectionRef?.current) {
                sectionRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <div className="w-full min-h-screen py-16 px-4">
            <h1 className="text-4xl font-bold text-center mb-16">Nossas Soluções</h1>
            
            {/* Seção 1: Incentivo e Expansão de Energias Renováveis */}
            <section ref={incentivoRef} id="incentivo-energias-renovaveis" className="mb-16">
                <img src="/solucao1.jpeg" alt="Incentivo e Expansão de Energias Renováveis" className="w-full h-64 object-cover rounded mb-6" />
                <h2 className="text-3xl font-semibold mb-4">Incentivo e Expansão de Energias Renováveis (Solar e Eólica)</h2>
                <p className="text-gray-700 mb-4">
                    <strong>Descrição:</strong> Investir em infraestruturas de energia solar e eólica é essencial para reduzir a dependência de combustíveis fósseis. Essa expansão pode incluir incentivos fiscais e subsídios governamentais para empresas e residências que adotam essas tecnologias.
                </p>
                <p className="text-gray-700 mb-4">
                    <strong>Impacto:</strong> A energia solar e eólica são fontes limpas e renováveis que podem suprir grande parte da demanda energética de regiões inteiras. Elas reduzem a emissão de gases de efeito estufa e contribuem para uma matriz energética mais sustentável.
                </p>
                <p className="text-gray-700 mb-6">
                    <strong>Exemplo:</strong> Instalação de painéis solares em prédios públicos e escolas, além de parques eólicos em regiões com grande potencial de ventos.
                </p>
                {/* Conteúdo da seção */}
            </section>

            <hr className="border-t border-gray-800 my-10 opacity-50" />

            {/* Seção 2: Desenvolvimento de Tecnologias de Armazenamento de Energia */}
            <section ref={armazenamentoRef} id="desenvolvimento-armazenamento" className="mb-16">
                <img src="/solucao2.jpeg" alt="Desenvolvimento de Tecnologias de Armazenamento de Energia" className="w-full h-64 object-cover rounded mb-6" />
                <h2 className="text-3xl font-semibold mb-4">Desenvolvimento de Tecnologias de Armazenamento de Energia</h2>
                <p className="text-gray-700 mb-4">
                    <strong>Descrição:</strong> Investir em baterias e outras tecnologias de armazenamento permite o uso de energia limpa mesmo em períodos em que não há geração (como noites ou dias sem vento). Essa medida ajuda a manter a estabilidade da rede e a aproveitar ao máximo a energia gerada.
                </p>
                <p className="text-gray-700 mb-4">
                    <strong>Impacto:</strong> Melhorar o armazenamento significa menos desperdício de energia e mais confiabilidade. Com isso, a rede elétrica pode ser mais eficiente e resistente, reduzindo a necessidade de fontes poluentes em horários de pico.
                </p>
                <p className="text-gray-700 mb-6">
                    <strong>Exemplo:</strong> Implementação de baterias de alta capacidade em cidades e comunidades, capazes de armazenar energia solar e eólica para uso durante a noite ou em dias nublados.
                </p>

                {/* Conteúdo da seção */}
            </section>

            <hr className="border-t border-gray-800 my-10 opacity-50" />

            {/* Seção 3: Investimento em Infraestruturas de Mobilidade Elétrica */}
            <section ref={mobilidadeRef} id="mobilidade-eletrica" className="mb-16">
                <img src="/solucao3.jpeg" alt="Investimento em Infraestruturas de Mobilidade Elétrica" className="w-full h-64 object-cover rounded mb-6" />
                <h2 className="text-3xl font-semibold mb-4">Investimento em Infraestruturas de Mobilidade Elétrica</h2>
                <p className="text-gray-700 mb-4">
                    <strong>Descrição:</strong> Incentivar o uso de veículos elétricos e construir infraestrutura de recarga em cidades pode reduzir consideravelmente as emissões do setor de transportes, um dos maiores responsáveis pela poluição e pelo uso de combustíveis fósseis.
                </p>
                <p className="text-gray-700 mb-4">
                    <strong>Impacto:</strong> A popularização dos veículos elétricos diminui a poluição nas cidades, melhora a qualidade do ar e reduz as emissões de CO₂, além de fomentar o uso de fontes de energia renovável na recarga.
                </p>
                <p className="text-gray-700 mb-6">
                    <strong>Exemplo:</strong> Criação de um sistema de recarga rápida em áreas urbanas e incentivos para a compra de veículos elétricos, incluindo transporte público elétrico, como ônibus e trens movidos a energia limpa.
                </p>
                {/* Conteúdo da seção */}
            </section>
        </div>
    );
};

export default Solucao;
