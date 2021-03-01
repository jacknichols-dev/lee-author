import React from "react";
import "./homepage.styles.scss";

import HeroCarousel from '../../components/hero-carousel/hero-carousel.comp';


const HomePage = () => {
  return (
    <div className="homepage">
      <HeroCarousel />
      <div className="latest-releases"></div>
      <div className="testimonials"></div>
      <div className="footer"></div>

    </div>
  );
};

export default HomePage;
