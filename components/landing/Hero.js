/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Hero = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      <div className="clearfix" style={{ clear: " both" }}></div>
      <div id="home" className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="hero-content wow fadeInLeft" data-wow-delay=".4s">
                <div className="hero-title">
                  {/* <span>0</span>
                  <h4>No Trading Commission</h4> */}
                  <h1 className="hero-title">Maximize Sales</h1>
                  <h1 className="hero">Retail Space</h1>
                </div>
                <div className="hero-text">
                  <p>
                    Transform your retail space,
                    <br />
                    Maximize sales with strategic placement.
                  </p>
                </div>
                {user ? (
                  <div className="hero-button">
                    <Link href="/dashboard">Get Started</Link>
                  </div>
                ) : (
                  <div className="hero-button">
                    <Link href="/login">Get Started</Link>
                  </div>
                )}
                {/* <div className="hero-bottom-text">
                  <p>
                    <span>
                      <i className="fas fa-check"></i>
                    </span>{" "}
                    available android & IOS Mobile Apps
                  </p>
                </div> */}
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="dreamit-hero-thumb wow fadeInLeft"
                data-wow-delay=".5s"
              >
                <div className="hero-main-thumb">
                  <img src="assets/images/slider/main.png" alt="" />
                </div>
                <div className="hero-thumb-inner1 bounce-animate4">
                  <img src="assets/images/slider/img1.png" alt="" />
                </div>
                {/* <div className="hero-thumb-inner2 bounce-animate">
                  <img src="assets/images/resource/product-hero.png" alt="" />
                </div> */}
                {/* <div className="hero-thumb-inner3 bounce-animate3">
                  <img src="assets/images/slider/img3.png" alt="" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="clearfix" style={{ clear: " both" }}></div>
    </>
  );
};

export default Hero;
