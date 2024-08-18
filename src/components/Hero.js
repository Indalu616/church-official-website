import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { HerosList } from "./HeroImages";
import AOS from "aos";
function Hero() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  });
  AOS.init({ duration: 3000 });
  return (
    <section className="hero">
      <Carousel
        controls={false}
        indicators={false}
        style={{ height: "100%" }}
        slide="true"
        className="carousel-component"
      >
        {HerosList.map((hero) => {
          return (
            <Carousel.Item key={hero.id} className="item">
              <img
                src={hero.url}
                alt="hero-bg..."
                className="carousel-item-img"
                style={{ height: "33.5rem", width: "100%", objectFit: "cover" }}
              ></img>
              <div className="banner-holder">
                <Carousel.Caption className="banner">
                  <h3 className="fs-4 text-center hero-h3" data-aos="zoom-in">
                    {hero.title_1}
                  </h3>
                  <h2 className="fs-1 text-center hero-h2" data-aos="zoom-in">
                    {hero.title_2}
                  </h2>
                  <p className="text-center hero-p" data-aos="fade-right">
                    {hero.description}
                  </p>
                  <button className="btn btn-primary" data-aos="fade-up">
                    Learn more
                  </button>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
}

export default Hero;
