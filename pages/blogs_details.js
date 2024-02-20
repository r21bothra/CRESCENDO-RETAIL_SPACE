import React from "react";
import Blogs_Details from "../components/blogs/Blogs_Details";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Mobile_Header from "../components/header/Mobile_Header";
import SeoHead from "../components/seo/SeoHead";

const BlogsDetails = () => {
  return (
    <>
      <SeoHead title="Blogs" />
      <Header />
      <Mobile_Header />
      <Blogs_Details />
      <Footer />
    </>
  );
};

export default BlogsDetails;
