import React, { useState } from 'react';
import './hero-carousel.styles.scss';
import SLIDE_DATA from './slide-data';
import Button from '../button/button.comp';
import * as RiIcons from 'react-icons/ri';


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

                {
                    sliderArr.map((slide, index) => {
                        return (
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
                                            <Button link={`/books/${slide.title}`}>Read more</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                < button className="banner__btn left" onClick={goLeft}><RiIcons.RiArrowLeftCircleLine /></button>
                <button className="banner__btn right" onClick={goRight}><RiIcons.RiArrowRightCircleLine /></button>


            </div>

        </>
    )

}

export default HeroCarousel