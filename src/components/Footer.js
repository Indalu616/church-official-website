import React from "react";
function Footer() {
  return (
    <footer
      className="py-5 text-white"
      style={{ backgroundColor: "#192531" }}
      id="contacts"
    >
      <div className="container">
        <div className="row">
          <div className=" col-sm-12 col-md-4 ">
            <h2 className="footer-h2">About us</h2>
            <p className="footer-p footer-info-p">
              Living Water Church is a Family of Faith that is committed to
              Bible teaching and joyful worship. People of all ages are
              ministered to and given opportunities to serve the Lord by serving
              others at our welcoming community.
            </p>
          </div>
          <div className=" col-sm-6 col-md-4 ">
            <h2 className="footer-h2">Contact Information</h2>
            <div className="row">
              <div className="col-3"></div>
              <div className="col-9">
                <p className="footer-p">
                  <i class="fa-solid fa-location-dot me-2"></i>airport road
                  behind immigration authority17th street
                </p>
                <p className="footer-p">Abu Dhabi, United Arab Emirates</p>
                <p className="footer-p">
                  <i class="fa-solid fa-phone me-2"></i> 056 440 8355
                </p>
                <p className="footer-p">
                  <i class="fa-solid fa-envelope me-2"></i>
                  livingwateremirates@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className=" col-sm-6 col-md-4 ">
            <h2 className="footer-h2">News letter</h2>
            <p className="footer-p footer-info-p">
              Sign up to our newsletter and be the first to know about the
              latest news, updates, and activities available at our church.
            </p>
            <div class="input-group mb-3">
              <input
                type="email"
                class="form-control"
                placeholder="Email"
                aria-label="Recipient's email"
                aria-describedby="basic-addon2"
              />
              <span class="input-group-text" id="basic-addon2" role="button">
                Send
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
