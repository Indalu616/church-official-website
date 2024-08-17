import React from "react";
import { Gallerylist } from "./GalleryList";
function Gallery() {
  return (
    <section className="py-5">
      <h2 className="text-center mb-4">Our Gallery</h2>
      <div className="container">
        <div className="row">
          {Gallerylist.map((item) => {
            return (
              <div className="col-sm-6 col-md-4 p-2" key={item.id}>
                <div className="img-holder">
                  <img
                    src={item.url}
                    className="img-fluid"
                    alt="gallery-image..."
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      height: "100%",
                    }}
                  ></img>
                  <div className="info mt-4">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <button className="btn btn-secondary">+</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-center mt-5 mb-5">
        <button className="btn btn-secondary">View More</button>
      </div>
      <div className="container-fluid d-flex align-items-center justify-content-center bg-dark text-white p-5">
        <div className="row">
          <div className="col-md-9">
            <h4 className="text-center">Experience God's unconditional grace and forgiveness.</h4>
          </div>
          <div className="col-md-3">
            <div className="text-center">
              <button className="btn btn-secondary">Get started</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
