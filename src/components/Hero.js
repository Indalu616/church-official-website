import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { HerosList } from "./HeroImages";
function Hero() {
  return (
    <section className="hero">
      <Carousel style={{height:"100%"}}  slide="true" className="carousel-component">
        {HerosList.map((hero) => {
          return (
            <Carousel.Item  key={hero.id} className="item">
              <img src={hero.url} alt="hero-bg..." className="carousel-item-img" style={{height:"33.5rem",width:"100%",objectFit:"cover"}}></img>
              <Carousel.Caption className="banner">
                <h3 className="fs-4 text-center fw-6">{hero.title_1}</h3>
                <h2 className="fs-1 text-center fw-1">{hero.title_2}</h2>
                <p className="text-center fs-5 fw-1">{hero.description}</p>
                <button className="btn btn-primary">Learn more</button>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
}

export default Hero;
