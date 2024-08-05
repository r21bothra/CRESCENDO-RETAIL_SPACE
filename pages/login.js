import React from "react";
import Login from "../components/login/login";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Mobile_Header from "../components/header/Mobile_Header";
import SeoHead from "../components/seo/SeoHead";
const BlogsDetails = () => {
  return (
    (
    <>
      <SeoHead title="Login" />
      <Header />
      <Mobile_Header />
      <Login />
      {/* <Footer /> */}
    </>
  )
);
};

export default BlogsDetails;
