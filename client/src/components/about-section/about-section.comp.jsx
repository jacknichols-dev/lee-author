import React from 'react';
import './about-section.styles.scss';
import Lee from '../../assets/lee.png';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const AboutSection = () => {
    return (
        <>
            <div className="about-me">
                <div className="container">
                    <div className="about-me__content">
                        <img src={Lee} alt="lee wood" className="about-me__img" />
                        <div className="about-me__desc">
                            <ScrollAnimation animateIn="animate__fadeIn" duration="1" animateOnce >
                                <p>
                                    Before semi-retiring and turning to write novels, Lee had a varied career. He spent more than 20 years working in the music industry. Everything from playing in bands as a teenager to running an indie record label and record shop during the punk rock era to starting a music collector’s magazine and building it from zero to a circulation of 14,000 copies a month.
                                <br></br>
                                    <br></br>
                                    He’s met virtually every top ‘pop star’ and achieved one of his lifetime ambitions when he became manager of The Troggs, one of his all-time favourite bands from his teens.
                                <br></br>
                                    <br></br>

                                    He wrote a best-selling book on the Sex Pistols in 1988, which was published by Omnibus Press and thanks to their well-oiled publicity machine sold a respectable 60,000 copies. It was also published in Japan – in Japanese!
                                <br></br>
                                    <br></br>

                                    He has lived in Cambridge for most of his life and looks on writing as a new adventure. He still finds time to play the guitar (Fender Stratocaster) and is currently learning to play the drums with his wife. They found a drum teacher who has a studio with two kits and they are learning to play together side by side.
                                <br></br>
                                    <br></br>

                                    Mr Lucky, his first novel is available in eBook and paperback formats.
                                <br></br>
                                    <br></br>

                                    Lee suffers from ADD, (Attention Deficit Disorder) but has still managed to overcome it and complete his novel. He believes if he can do it, anyone can.
                            </p>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSection
