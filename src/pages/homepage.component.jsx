import React from "react";
import "./homepage.styles.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="header"></header>
      <div className="banner">
        <div className="banner__content container">
          <img src="" alt="banner background image" className="banner__content--bg" />
          <img src="" alt="mr lucky" className="banner__content--image" />
          <div className="banner__content--desc">
            <h1>MR. LUCKY</h1>
            <h3>By Lee Wood</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>

      <div className="latest-releases"></div>
      <div className="testimonials"></div>
      <div className="footer"></div>
    </div>
  );
};

export default HomePage;
