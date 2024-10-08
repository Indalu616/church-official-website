import React, { useEffect } from "react";
import { ServicesList } from "./ServicesList";
import AOS from "aos";
function Services() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  });
  return (
    <section
      style={{ backgroundColor: "#F9F7F5" }}
      className="py-5"
      id="services"
    >
      <h2 className="text-center service-h2 mb-5 custom-color">Services</h2>
      <div className="container" data-aos="zoom-in">
        <div className="row mt-5">
          {ServicesList.map((service) => {
            return (
              <div
                className="col-sm-6 col-md-4 d-flex flex-column align-items-center justify-content-center"
                key={service.id}
              >
                <img
                  src={service.url}
                  alt="service-image...."
                  className="img-fluid mt-4"
                  style={{ width: "60px" }}
                ></img>
                <h2 className="text-center mt-4 custom-font">
                  {service.title}
                </h2>
                <p className="text text-center">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
