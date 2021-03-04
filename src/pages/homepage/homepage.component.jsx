import React from "react";
import "./homepage.styles.scss";

import HeroCarousel from '../../components/hero-carousel/hero-carousel.comp';
import LatestReleases from "../../components/latest-releases/latest-releases.comp";


const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage__hero">
        <HeroCarousel />
      </div>

      <div className="homepage__latest-releases">
        <LatestReleases />
      </div>

      <div className="testimonials"></div>
      <div className="footer"></div>

    </div>
  );
};

export default HomePage;
