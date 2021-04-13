import React, { useContext } from 'react';
import './latest-releases.styles.scss';
import { DataContext } from '../Data/DataProvider';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

import mrLucky from '../../assets/mr-lucky-book@2x.png';
import LuckyBreak from '../../assets/lucky-break-book@2x.png';
import DeadLucky from '../../assets/dead-lucky-book@2x.png';
import LuckyStars from '../../assets/lucky-stars-book@2x.png';
import Boxset from '../../assets/box-set@2x.png';
import Button from '../button/button.comp';

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

                {
                    books.map((book, index) => (
                        <div className="latest__item-container">
                            <div className="latest__item-container--item">
                                <ScrollAnimation animateIn="animate__fadeInUp" duration=".8" animateOnce >
                                    <img src={book.image} alt="Mr. Lucky" className="latest__item-container--img" />
                                    <Button link="/books/1">Read more</Button>
                                </ScrollAnimation>
                            </div>
                        </div>
                    ))
                }

                {/* <div className="latest__item-container">
                    <ScrollAnimation animateIn="animate__fadeInUp" duration=".3" animateOnce >
                        <img src={LuckyBreak} alt="Lucky Break" />
                        <Button link="/books/2">Read more</Button>
                    </ScrollAnimation>
                </div>
                <div className="latest__item-container">
                    <ScrollAnimation animateIn="animate__fadeInUp" duration=".4" animateOnce >
                        <img src={DeadLucky} alt="Dead Lucky" />
                        <Button link="/books/3">Read more</Button>
                    </ScrollAnimation>
                </div>
                <div className="latest__item-container">
                    <ScrollAnimation animateIn="animate__fadeInUp" duration=".5" animateOnce >
                        <img src={LuckyStars} alt="Lucky Stars" />
                        <Button link="/books/4">Read more</Button>
                    </ScrollAnimation>
                </div>
                <div className="latest__item-container">
                    <ScrollAnimation animateIn="animate__fadeInUp" duration=".6" animateOnce >
                        <img src={Boxset} alt="Box set" />
                        <Button link="/books/5">Read more</Button>
                    </ScrollAnimation>
                </div> */}
            </div>


        </div>
    )
}

export default LatestReleases
