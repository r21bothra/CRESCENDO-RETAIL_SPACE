/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import Mobile_Header from "../components/header/Mobile_Header";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import SeoHead from "../components/seo/SeoHead";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const [contact, setcontact] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChangeContact = async (e) => {
    setcontact({ ...contact, [e.target.name]: e.target.value });
  };
  const handleContact = async (e) => {
    e.preventDefault();
    await axios
      .post(" api/auth/contact-form", {
        name: contact.name,
        email: contact.email,
        subject: contact.subject,
        message: contact.message,
      })
      .then(() => {
        setcontact({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        toast.success("Your message sent successfully ");
      });
  };
  return (
    <>
      <SeoHead title="Contact us" />
      <Header />
      <Mobile_Header />
      <div className="clearfix" style={{ clear: "both" }}></div>
      <div className="breatcome-area style-two d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breatcome-content text-center">
                <div className="breatcome-title">
                  <h1>Contact Us</h1>
                </div>
                <div className="breatcome-text">
                  <a href="/">
                    <span>Home</span> Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="clearfix" style={{ clear: "both" }}></div>
      <div className="contact-info-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div
                style={{ height: "100%" }}
                className="contact-info-single-box wow fadeInLeft"
                data-wow-delay=".3s"
              >
                <div className="contact-info-thumb">
                  <img src="assets/images/resource/contact-1.png" alt="" />
                </div>
                <div className="contact-info-title">
                  <h2>Address Ifno</h2>
                  <p>
                    Head Office 711, Al Zahara Building, Bank Street, Dubai,
                    United Arab Emirates 🇦🇪
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                style={{ height: "100%" }}
                className="contact-info-single-box wow fadeInLeft"
                data-wow-delay=".4s"
              >
                <div className="contact-info-thumb">
                  <img src="assets/images/resource/contact-2.png" alt="" />
                </div>
                <div className="contact-info-title">
                  <h2>Phone Calls</h2>
                  <p>
                    <a href="tel:+44 7441445045">+44 7441445045</a>
                    <br />
                    <a href="tel:+97 1555780884">+97 1555780884</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                style={{ height: "100%" }}
                className="contact-info-single-box wow fadeInLeft"
                data-wow-delay=".5s"
              >
                <div className="contact-info-thumb">
                  <img src="assets/images/resource/contact-3.png" alt="" />
                </div>
                <div className="contact-info-title">
                  <h2>E-Mail Address</h2>
                  <p>
                    <a href="mailto:globalpay517@gmail.com">
                      globalpay517@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-form-area style-two pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="dreamit-section-title text-center upper1 pb-70">
              <h4>Contact Info</h4>
              <h1 className="section-title">Write Us Something</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div
                className="contact-form-thumb wow fadeInRight"
                data-wow-delay=".4s"
              >
                <img src="assets/images/resource/cartoon-bg.png" alt="" />
                <div className="form-inner-thumb bounce-animate3">
                  <img src="assets/images/resource/cartoon.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="row">
                <div
                  className="contact-form-box wow fadeInLeft"
                  data-wow-delay=".4s"
                >
                  <div className="contact-form-title">
                    <h3>Get In Touch</h3>
                  </div>
                  <form id="dreamit-form">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="from-box">
                          <input
                            type="text"
                            value={contact.name}
                            name="name"
                            onChange={handleChangeContact}
                            placeholder="Your Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="from-box">
                          <input
                            type="text"
                            value={contact.email}
                            onChange={handleChangeContact}
                            name="email"
                            placeholder="Enter E-Mail"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-sm-12">
                        <div className="from-box">
                          <input
                            type="text"
                            value={contact.subject}
                            name="subject"
                            onChange={handleChangeContact}
                            placeholder="Subject"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="from-box">
                          <textarea
                            name="message"
                            value={contact.message}
                            id="massage"
                            onChange={handleChangeContact}
                            placeholder="Massage"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="from-box">
                      <button onClick={handleContact} type="submit">
                        Send Message
                      </button>
                    </div>
                  </form>
                  <div id="status"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
