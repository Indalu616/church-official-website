import React from "react";
import pastor from "../assets/Images/pastor.png";
import { WorshipList } from "./WorshipList";
function Welcome() {
  return (
    <section className="mt-5">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-6">
            <h2>Welcome! We love God!</h2>
            <h3 className="welcome-h3">
              We aim to express our love of Jesus Christ by living the will of
              the Father.
            </h3>
            <p className="text">
              Our church is a perfect place for all local residents to come in
              with their families and join for a prayer and a newfound peace of
              mind and soul. Farite is built on a core set of beliefs, in which
              we have unity and on which we base our fundamental decisions.
            </p>
            <button className="btn btn-secondary text-white mb-4">
              Learn more <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div className="col-md-6">
            <img
              src={pastor}
              alt="pastor..."
              className="img-fluid rounded"
            ></img>
          </div>
        </div>
      </div>
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "#F9F7F5" }}
      >
        <div className="container">
          <div className="row">
            {WorshipList.map((worship) => {
              return (
                <div className="col" key={worship.id}>
                  <div className="row">
                    <div className="col-md-3">
                      <img src={worship.url}></img>
                    </div>
                    <div className="col-md-9">
                      <h3 className="custom-font">{worship.title}</h3>
                      <p className="text">{worship.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="container-fluid welcome-container py-5">
        <h2>Join Our Church</h2>
        <h1 className="text-center">A church that loves God and people</h1>
        <p>
          We believe that the Church is God’s instrument for ministry here on
          Earth, and that makes it the greatest force on the face of the Earth.
          Click the button below to learn more about our advantages.
        </p>
        <button className="btn btn-secondary">View more</button>
      </div>
    </section>
  );
}

export default Welcome;
