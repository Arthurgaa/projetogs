import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="w-full min-h-screen flex flex-col">
            {/* Banner */}
            <div className="w-full h-72 mb-12">
                <Slider {...settings}>
                    <div>
                        <img src="/banner1.png" alt="Banner 1" className="w-full h-72 object-cover" />
                    </div>
                    <div>
                        <img src="/banner2.png" alt="Banner 2" className="w-full h-72 object-cover" />
                    </div>
                    <div>
                        <img src="/banner3.png" alt="Banner 3" className="w-full h-72 object-cover" />
                    </div>
                </Slider>
            </div>

            {/* Cards Section */}
            <div className="flex-grow flex flex-col items-center justify-center mb-16 px-4">
                <h2 className="text-4xl font-bold mb-12 text-gray-800">Nossa Solução</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl">
                    <div className="bg-white shadow-lg rounded-lg p-10 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                        <div className="text-6xl mb-6">💡</div>
                        <h3 className="text-2xl font-semibold mb-4">Solução Inovadora</h3>
                        <p className="text-gray-600">Nossa abordagem resolve o problema de maneira eficaz e criativa, trazendo inovação para o mercado.</p>
                    </div>
                    
                    <div className="bg-white shadow-lg rounded-lg p-10 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                        <div className="text-6xl mb-6">⚙️</div>
                        <h3 className="text-2xl font-semibold mb-4">Tecnologia Avançada</h3>
                        <p className="text-gray-600">Utilizamos tecnologia de ponta para garantir o melhor desempenho e confiabilidade nos nossos serviços.</p>
                    </div>
                    
                    <div className="bg-white shadow-lg rounded-lg p-10 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                        <div className="text-6xl mb-6">🌍</div>
                        <h3 className="text-2xl font-semibold mb-4">Impacto Global</h3>
                        <p className="text-gray-600">Nosso trabalho gera um impacto positivo ao redor do mundo, beneficiando comunidades e o meio ambiente.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
