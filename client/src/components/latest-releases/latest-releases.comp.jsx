import React, { useContext } from 'react';
import './latest-releases.styles.scss';
import { DataContext } from '../Data/DataProvider';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import Button from '../button/button.comp';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const LatestReleases = () => {
    const [books, setBooks] = useContext(DataContext)
    return (
        <div className="latest container">

            <ScrollAnimation animateIn="animate__fadeInUp" duration="1" animateOnce >
                <div className="latest__left-container">
                    <h1>LATEST RELEASES</h1>
                    <p className="latest__review">
                        “Lee Wood writes his thrillers as if he were building roller coasters.”
                    </p>
                    <h2>- ASSOCIATED PRESS</h2>
                </div>
            </ScrollAnimation>



            <div className="latest__items-container">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    navigation
                    pagination
                    autoplay={{ delay: 4000 }}
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                            width: 600,
                            slidesPerView: 1,
                        },
                        // when window width is >= 768px
                        768: {
                            width: 768,
                            slidesPerView: 3,
                        },
                    }}
                >

                    {
                        books.map((book, index) => (
                            <div className="latest__item-container">
                                <SwiperSlide>
                                    <div className="latest__item-container--item">
                                        <ScrollAnimation animateIn="animate__fadeInUp" duration=".8" animateOnce >
                                            <img src={book.image} alt={book.title} className="latest__item-container--img" />

                                            <Link to={`/books/${book.title}`}>
                                                <Button>Read more</Button>
                                            </Link>

                                        </ScrollAnimation>
                                    </div>
                                </SwiperSlide>
                            </div>
                        ))
                    }

                </Swiper>

            </div>


        </div>
    )
}

export default LatestReleases
