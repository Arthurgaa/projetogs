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
                        <img src="/card1.jpeg" alt="Solução Inovadora" className="w-full h-40 object-cover rounded mb-6" />
                        <h3 className="text-2xl font-semibold mb-4">Incentivo e Expansão de Energias Renováveis (Solar e Eólica)</h3>
                    </div>
                    
                    <div className="bg-white shadow-lg rounded-lg p-10 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                        <img src="/card2.jpeg" alt="Tecnologia Avançada" className="w-full h-40 object-cover rounded mb-6" />
                        <h3 className="text-2xl font-semibold mb-4">Desenvolvimento de Tecnologias de Armazenamento de Energia</h3>
                    </div>
                    
                    <div className="bg-white shadow-lg rounded-lg p-10 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                        <img src="/card3.jpeg" alt="Impacto Global" className="w-full h-40 object-cover rounded mb-6" />
                        <h3 className="text-2xl font-semibold mb-4">Investimento em Infraestruturas de Mobilidade Elétrica</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
