import React from 'react';
import './hero-carousel.styles.scss';

import SLIDE_DATA from './slide-data';

const HeroCarousel = () => {


    return (
        <>
            {SLIDE_DATA.map((slide) => {
                return (
                    <div className="banner">
                        <div style={{ backgroundImage: `url(${slide.bgImage})` }} className="banner__content--bg">
                            <div className="banner__content container">
                                <img src={slide.image} alt={slide.title} className="banner__content--image" />
                                <div className="banner__content--desc">
                                    <h1>{slide.title}</h1>
                                    <h3>{slide.author}</h3>
                                    <p>
                                        {slide.synopsis}
                                    </p>
                                    <button type="button" className="btn">Read more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}

        </>
    )

}

export default HeroCarousel