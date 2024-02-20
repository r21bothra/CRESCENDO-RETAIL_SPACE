/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import Image from "next/image";
import logo from "../../components/assets/Gpaylogo.png";
import { useSelector } from "react-redux";
import Link from "next/link";

const Footer = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      <div className="footer-middle pt-4 pb-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div
                className="widgets-company-info pt-3 wow fadeInLeft"
                data-wow-delay=".4s"
              >
                <div className="cryptobit-logo">
                  <a className="logo_img" href="/" title="cryptobit">
                    <Image height={75} src={logo} alt="" />
                  </a>
                </div>
                <div className="company-info-desc ">
                  <p className="footer-content">
                  Empower your business with data-driven inventory management – optimize popularity, navigate seasons, and maximize profits.
                  </p>
                </div>
                {/* Footer share icons */}
                {/* <div className="company_icon">
                  <a className="facebook" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="twitter" href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="linkedin" href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a className="pinterest" href="#">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                </div> */}
              </div>
            </div>
            <div className="">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div
                    className="widget-nav-menu wow fadeInLeft"
                    data-wow-delay=".5s"
                  >
                    <h3 className="widget-title mb-4 font-bold">Quick Links</h3>
                    <div className="menu-quick-link-content">
                      <ul className="menu footer-menu">
                        <li>
                          <Link href="/">Home</Link>
                        </li>
                        <li>
                          <a href="#about">About</a>
                        </li>
                        <li>
                          <a href="#blogs">Blogs</a>
                        </li>
                        <li>
                          <Link href="/contact">Contact</Link>
                        </li>
                        {user && (
                          <li>
                            <a href="/dashboard">Dashboard</a>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-4 col-md-6 col-sm-12">
                  <div
                    className="widget-nav-menu upper wow fadeInLeft"
                    data-wow-delay=".6s"
                  >
                    <h4 className="widget-title">Quick Link</h4>
                    <div className="menu-quick-link-content">
                      <ul className="menu">
                        <li>
                          <Link href="/">Home</Link>
                        </li>
                        <li>
                          <a href="#about">About</a>
                        </li>
                        <li>
                          <a href="#blogs">Blogs</a>
                        </li>
                        <li>
                          <Link href="/contact">Contact</Link>
                        </li>
                        {user && (
                          <li>
                            <a href="/dashboard">Dashboard</a>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div> */}
                {/* <div className="col-lg-12 col-md-12 col-sm-12">
                  <div
                    className="widget-nav-menu upper1 wow fadeInLeft"
                    data-wow-delay=".7s"
                  >
                    <h4 className="widget-title">Newsletter</h4>
                    <div className="menu-quick-link">
                      <p>
                        Get now free 20% discount for all products on your first
                        order
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="row footer-bottom mt-2">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="footer-bottom-content">
                <div className="footer-bottom-content-copy">
                  <p>© R Space all Rights Reserved.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 ">
              <div className="footer-bottom-content">
                <div className="footer-bottom-menu md:mb-4 md:mt-2">
                  <ul>
                    <li>Privacy Policy</li>
                    <li>Terms & Condition</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="footer-bottom-shape md:mb-2">
                <img src="assets/images/resource/footer-b.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
