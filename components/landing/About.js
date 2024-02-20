/* eslint-disable @next/next/no-img-element */
import React from "react";

const About = () => {
  return (
    <>
      <div id="about" className="about-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div
                className="dreamit-about-thumb wow fadeInLeft"
                data-wow-delay=".4s"
              >
                <img
                  style={{
                    width: "80%",
                  }}
                  src="assets/images/resource/about-image.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div
                className="dreamit-section-title pb-5 wow fadeInLeft"
                data-wow-delay=".5s"
              >
                <h4>What is Retail space?</h4>
                <h1>Ready for strategic elevation?</h1>
                <h1 className="section-title">Unlock, Maximize, Prosper!</h1>
                <p
                  className="section-text"
                  style={{
                    textAlign: "justify",
                  }}
                >
                  Welcome to a transformative journey for your retail space!
                  Here, we believe in the power of strategic placement to
                  elevate your stores performance. By optimizing the layout and
                  arrangement of products
                </p>
                <p
                  style={{
                    textAlign: "justify",
                  }}
                >
                  we help you unlock untapped potential and maximize sales. Join
                  us as we embark on a journey to reshape your retail
                  environment and drive unparalleled success.
                </p>
              </div>
              {/* <div className="about-button wow fadeInLeft" data-wow-delay=".6s">
                <a href="#">Read More</a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
