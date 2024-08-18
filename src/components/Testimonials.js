import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { TestimonialList } from "./TestimonialLists";
function Testimonials() {
  return (
    <section className="py-5" style={{ backgroundColor: "#F9F7F5" }} id="testimonials">
      <h2 className="text-center mb-5" style={{ color: "#1C2647" }}>
        Testimonials
      </h2>
      <Carousel indicators="false">
        {TestimonialList.map((testmony) => {
          return (
            <Carousel.Item key={testmony.id} className="pb-4">
              <div
                className="d-flex flex-column align-items-center justify-content-center gap-12"
                style={{ width: "100%" }}
              >
                <div>
                  <i class="fa-solid fa-quote-left fs-1"></i>
                </div>
                <p className="text-center" style={{ color: "#7E8B93" }}>
                  {testmony.content}
                </p>
                <div className="row">
                  <div className="col-3">
                    <img
                      src={testmony.url}
                      alt="testmonial-image..."
                      className="img-fluid rounded"
                    ></img>
                  </div>
                  <div className="col-9">
                    <h3 style={{ color: "#CCBBA9" }}>{testmony.name}</h3>
                    <p style={{ color: "#7E8B93" }}>{testmony.role}</p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
}

export default Testimonials;
