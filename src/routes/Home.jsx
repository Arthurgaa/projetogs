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
        <div className="w-full h-screen">
            <Slider {...settings}>
                <div>
                    <img src="/banner1.png" alt="Banner 1" className="w-full h-screen object-cover" />
                </div>
                <div>
                    <img src="/banner2.png" alt="Banner 2" className="w-full h-screen object-cover" />
                </div>
                <div>
                    <img src="/banner3.png" alt="Banner 3" className="w-full h-screen object-cover" />
                </div>
            </Slider>
        </div>
    );
};

export default Home;
