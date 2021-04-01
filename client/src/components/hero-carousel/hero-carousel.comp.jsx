import React from 'react';
import './hero-carousel.styles.scss';

import SLIDE_DATA from './slide-data';
import Button from '../button/button.comp';

const HeroCarousel = () => {


    return (
        <>
            {
                SLIDE_DATA.map((slide, index) => {
                    return (
                        <div className="banner" key={index}>
                            <div style={{ backgroundImage: `url(${slide.bgImage})` }} className="banner__content--bg">
                                <div className="banner__content container">
                                    <img src={slide.image} alt={slide.title} className="banner__content--image" />
                                    <div className="banner__content--desc">
                                        <h1>{slide.title}</h1>
                                        <h4>{slide.author}</h4>
                                        <br />
                                        <p>
                                            {slide.synopsis}
                                        </p>
                                        <Button>READ MORE</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </>
    )

}

export default HeroCarousel