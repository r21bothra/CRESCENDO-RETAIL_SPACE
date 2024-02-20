import Head from "next/head";
import Hero from "../components/landing/Hero";
import About from "../components/landing/About";
import Feature from "../components/landing/Feature";
// import Sale from "../components/landing/Sale";
import Roadmap from "../components/landing/Roadmap";

import Market from "../components/landing/Market";
import { Team } from "../components/landing/Team";
import Faq from "../components/landing/Faq";
import Footer from "../components/footer/Footer";
import Blogs from "../components/landing/Blogs";
import Header from "../components/header/Header";
import Mobile_Header from "../components/header/Mobile_Header";
import SeoHead from "../components/seo/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead title="GPay" />
      <Header />
      <Mobile_Header />
      <Hero />
      <About />
      <Feature />

      {/* <Stats /> */}
      {/* <Roadmap /> */}
      {/* <Market /> */}
      {/* <Team /> */}
      <Faq />
      <Blogs />
      <Footer />
    </>
  );
}
