/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../assets/Gpaylogo.png";
import { useDispatch } from "react-redux";
import { logoutSuccess } from "../../reducer";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
const Mobile_Header = () => {
  const [show, setShow] = React.useState(false);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handlelogout = (e) => {
    e.preventDefault();
    toast.success("Logout Successfull");
    localStorage.removeItem("token");
    dispatch(logoutSuccess());
  };
  return (
    <>
      <div className="mobile-menu-area d-sm-block d-md-block d-lg-none">
        <div className="mobile-menu mean-container">
          <div className="mean-bar">
            <Link
              onClick={(e) => setShow((prev) => !prev)}
              href=""
              className="meanmenu-reveal"
              style={{
                right: "0px",
                left: " auto",
                textAlign: " center",
                textIndent: " 0px",
                fontSize: "18px",
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </Link>
            <nav className="mean-nav">
              <ul
                className="nav_scroll"
                style={{
                  display: show ? "block" : "none",
                  transition: show ? "all 0.5s ease " : "all 0.5s ease",
                }}
              >
                <li onClick={(e) => setShow((prev) => !prev)}>
                  <Link href="/">Home</Link>
                </li>
                <li onClick={(e) => setShow((prev) => !prev)}>
                  <a href="#about">About</a>
                </li>
                {user && user.email && (
                  <li>
                    <a href="/dashboard">Dashboard</a>
                  </li>
                )}
                <li onClick={(e) => setShow((prev) => !prev)}>
                  <a href="#blogs">blog</a>
                </li>
                <li className="mean-last">
                  <a href="/contact">Contact</a>
                </li>
                <li className="mean-last">
                  {!user && !user?.email ? (
                    <Link href="/login">
                      <i className="far fa-user"></i> Sign In
                    </Link>
                  ) : (
                    <Link href="" onClick={handlelogout}>
                      <i className="far fa-user"></i> Logout
                    </Link>
                  )}
                </li>
              </ul>
            </nav>
          </div>
          {/* <div className="mean-push"></div> */}
          {/* <nav className="cripto_menu" style={{ display: "none" }}>
            <ul className="nav_scroll">
              <li>
                <a href="#home">
                  Home <span>+</span>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="index.html">Main Home</a>
                  </li>
                  <li>
                    <a href="index-2.html">Home Animation</a>
                  </li>
                  <li>
                    <a href="index-3.html">Home Particles</a>
                  </li>
                  <li>
                    <a href="index-4.html">Landing Page</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="#service">
                  Services <span>+</span>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="service.html">Services</a>
                  </li>
                  <li>
                    <a href="service-details.html">Services Details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  Pages <span>+</span>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="service.html">Services</a>
                  </li>
                  <li>
                    <a href="service-details.html">Services Details</a>
                  </li>
                  <li>
                    <a href="team.html">Team</a>
                  </li>
                  <li>
                    <a href="road-map.html">Roadmap</a>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  Blog <span>+</span>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                  <li>
                    <a href="blog-details.html">Blog Details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav> */}
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Mobile_Header;
