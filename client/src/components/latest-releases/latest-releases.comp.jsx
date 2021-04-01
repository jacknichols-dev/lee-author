import React from 'react';
import './latest-releases.styles.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

import mrLucky from '../../assets/mr-lucky-book@2x.png';
import LuckyBreak from '../../assets/lucky-break-book@2x.png';
import DeadLucky from '../../assets/dead-lucky-book@2x.png';
import LuckyStars from '../../assets/lucky-stars-book@2x.png';
import Boxset from '../../assets/box-set@2x.png';
import Button from '../button/button.comp';

const LatestReleases = () => {
    return (
        <div className="latest container">
            <ScrollAnimation animateIn="animate__fadeInLeft" duration="1">
                <div className="latest__left-container">
                    <h1>LATEST RELEASES</h1>
                    <p className="latest__review">
                        “Lee Wood writes his thrillers as if he were building roller coasters.”
                    </p>
                    <h2>- ASSOCIATED PRESS</h2>
                </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeIn" duration="1" animateOut="fadeOut">

                <div className="latest__items-container">
                    <div className="latest__item-container">
                        <img src={mrLucky} alt="Mr. Lucky" />
                        <Button>READ MORE</Button>
                    </div>
                    <div className="latest__item-container">
                        <img src={LuckyBreak} alt="Lucky Break" />
                        <Button>READ MORE</Button>
                    </div>
                    <div className="latest__item-container">
                        <img src={DeadLucky} alt="Dead Lucky" />
                        <Button>READ MORE</Button>
                    </div>
                    <div className="latest__item-container">
                        <img src={LuckyStars} alt="Lucky Stars" />
                        <Button>READ MORE</Button>
                    </div>
                    <div className="latest__item-container">
                        <img src={Boxset} alt="Box set" />
                        <Button>READ MORE</Button>
                    </div>
                </div>
            </ScrollAnimation>

        </div>
    )
}

export default LatestReleases
