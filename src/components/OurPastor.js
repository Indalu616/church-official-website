import React, { useEffect } from "react";
import { PastorsList } from "./PastorsList";
import AOS  from "aos";
function OurPastor() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  });
  return (
    <section className="py-5">
      <h2 className="text-center mb-5 service-h2">Our Pastors</h2>
      <div className="container" data-aos="zoom-in">
        <div className="row">
          {PastorsList.map((pastor) => {
            return (
              <div className="col-md-6 mt-5">
                <div className="row">
                  <div className="col-3">
                    <img
                      src={pastor.url}
                      alt="pastor-image"
                      className="img-fluid rounded"
                    ></img>
                  </div>
                  <div className="col-9">
                    <h3 className="custom-font">{pastor.name}</h3>
                    <p style={{ color: "#C4AD96" }}>{pastor.role}</p>
                    <p className="text">
                      <i class="fa-solid fa-phone"></i> {pastor.phone}
                    </p>
                    <p className="text">{pastor.about}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-center mt-5">
        <button className="btn btn-secondary">View All Team</button>
      </div>
    </section>
  );
}

export default OurPastor;
