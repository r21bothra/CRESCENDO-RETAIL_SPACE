/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../assets/Gpaylogo.png";
import { useDispatch } from "react-redux";
import { logoutSuccess } from "../../reducer";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
const Header = () => {
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
      <div id="sticky-header" className="cryptobit_nav_manu">
        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div className="col-lg-3">
              <div className="logo">
                <a className="logo_img" href="/" title="cryptobit">
                  <Image height={70} src={logo} alt="" />
                </a>
                <a className="main_sticky" href="/" title="cryptobit">
                  <Image height={70} src={logo} alt="astute" />
                </a>
              </div>
            </div>
            <div className="col-lg-9">
              <nav
                className="cryptobit_menu"
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0 0px 0 1px",
                  justifyContent: "right",
                }}
              >
                <ul className="nav_scroll">
                  <li>
                    <Link href="/">Home</Link>
                    {/* <ul className="sub-menu">
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
                    </ul> */}
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  {/* <li>
                    <a href="#service">Service</a>
                  </li> */}
                  {/* <li>
                    <a href="#ico">Ico</a>
                  </li> */}
                  {/* <li>
                    <a href="#team">Team</a>
                  </li> */}
                  {user && user.email && (
                    <li>
                      <a href="/dashboard">Dashboard</a>
                    </li>
                  )}
                  <li>
                    <a href="#blogs">Blog</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
                <div className="header-button">
                  {!user && !user?.email ? (
                    <Link href="/login">
                      <i className="far fa-user"></i> Sign In
                    </Link>
                  ) : (
                    <Link href="" onClick={handlelogout}>
                      <i className="far fa-user"></i> Logout
                    </Link>
                  )}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Header;
