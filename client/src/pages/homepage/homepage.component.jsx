import React from "react";
import "./homepage.styles.scss";

import HeroCarousel from '../../components/hero-carousel/hero-carousel.comp';
import LatestReleases from "../../components/latest-releases/latest-releases.comp";
import Testimonials from "../../components/testimonials/testimonials.comp";



const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage__hero">
        <HeroCarousel />
      </div>

      <div className="homepage__latest-releases">
        <LatestReleases />
      </div>

      <div className="homepage__testimonials">
        <Testimonials />
      </div>
      <div className="footer"></div>

    </div>
  );
};

export default HomePage;
