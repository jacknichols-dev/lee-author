import React, { useState } from 'react';
import './hero-carousel.styles.scss';
import SLIDE_DATA from './slide-data';
import Button from '../button/button.comp';
import * as RiIcons from 'react-icons/ri';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import { Link } from 'react-router-dom';


SwiperCore.use([Navigation, Pagination, Autoplay]);


const HeroCarousel = () => {

    let sliderArr = SLIDE_DATA;

    const [x, setX] = useState(0);

    const goLeft = () => {
        x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
    };

    const goRight = () => {
        (x === -100 * (sliderArr.length - 1)) ? setX(0) : setX(x - 100);
    };


    return (
        <>
            <div className="banner-container">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    navigation
                    pagination
                    autoplay={{ delay: 12000 }}
                >


                    {
                        sliderArr.map((slide, index) => {
                            return (
                                <SwiperSlide>
                                    <div className="banner" key={index} style={{ transform: `translateX(${x}%` }}>

                                        <div style={{ backgroundImage: `url(${slide.bgImage})` }} className="banner__content--bg">
                                            <div className="banner__content container">
                                                <img src={slide.image} alt={slide.title} className="banner__content--image" />
                                                <div className="banner__content--desc">
                                                    <h1>{slide.title}</h1>
                                                    <h4 style={{ fontWeight: 'lighter' }}>{slide.author}</h4>
                                                    <br />
                                                    <p>
                                                        {slide.synopsis}
                                                    </p>
                                                    <Link to={`/books/${slide.title}`} >
                                                        <Button>Read more</Button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>
                < button className="banner__btn left" onClick={goLeft}><RiIcons.RiArrowLeftCircleLine /></button>
                <button className="banner__btn right" onClick={goRight}><RiIcons.RiArrowRightCircleLine /></button>


            </div>

        </>
    )

}

export default HeroCarousel