import React from 'react';
import './testimonials.styles.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);


const Testimonials = () => {
    return (
        <div className="testimonials container">
            <h1>TESTIMONIALS</h1>
            <div className="testimonials__container">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    navigation
                    pagination
                    autoplay={{ delay: 12000 }}
                >
                    <SwiperSlide>
                        <div className="testimonials__testimonial">
                            <p>
                                “Once you start reading, you won’t want to stop until you finish. It’s got a strong narrative drive as we learn how the paths of homeless man and a major drug dealer cross thanks to $100M lottery win. The characters are well drawn and believable.”
                            </p>
                            <br></br>
                            <h4>- James C.</h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><div className="testimonials__testimonial">
                        <p>
                            “Once you start reading, you won’t want to stop until you finish. It’s got a strong narrative drive as we learn how the paths of homeless man and a major drug dealer cross thanks to $100M lottery win. The characters are well drawn and believable.”
                        </p>
                        <br></br>
                        <h4>- James C.</h4>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide> <div className="testimonials__testimonial">
                        <p>
                            “Once you start reading, you won’t want to stop until you finish. It’s got a strong narrative drive as we learn how the paths of homeless man and a major drug dealer cross thanks to $100M lottery win. The characters are well drawn and believable.”
                        </p>
                        <br></br>
                        <h4>- James C.</h4>
                    </div>
                    </SwiperSlide>
                </Swiper>

            </div>

        </div>
    )
}

export default Testimonials
