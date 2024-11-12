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
        <div className="w-full">
            {/* Banner */}
            <div className="w-full h-64 mb-8">
                <Slider {...settings}>
                    <div>
                        <img src="/banner1.png" alt="Banner 1" className="w-full h-64 object-cover" />
                    </div>
                    <div>
                        <img src="/banner2.png" alt="Banner 2" className="w-full h-64 object-cover" />
                    </div>
                    <div>
                        <img src="/banner3.png" alt="Banner 3" className="w-full h-64 object-cover" />
                    </div>
                </Slider>
            </div>

            {/* Cards Section */}
            <div className="flex flex-wrap justify-center gap-6 px-4">
                <div className="bg-white shadow-lg rounded-lg p-6 w-72 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="text-4xl mb-4">💡</div>
                    <h3 className="text-xl font-semibold mb-2">Solução Inovadora</h3>
                    <p className="text-gray-600">Nossa abordagem resolve o problema de maneira eficaz e criativa.</p>
                </div>
                
                <div className="bg-white shadow-lg rounded-lg p-6 w-72 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="text-4xl mb-4">⚙️</div>
                    <h3 className="text-xl font-semibold mb-2">Tecnologia Avançada</h3>
                    <p className="text-gray-600">Utilizamos tecnologia de ponta para garantir o melhor desempenho.</p>
                </div>
                
                <div className="bg-white shadow-lg rounded-lg p-6 w-72 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="text-4xl mb-4">🌍</div>
                    <h3 className="text-xl font-semibold mb-2">Impacto Global</h3>
                    <p className="text-gray-600">Nosso trabalho gera um impacto positivo para pessoas ao redor do mundo.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
