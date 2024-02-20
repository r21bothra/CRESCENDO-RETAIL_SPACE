import React from "react";
import Otp from "../components/login/verify";
import SeoHead from "../components/seo/SeoHead";
import Header from "../components/header/Header";
import Mobile_Header from "../components/header/Mobile_Header";
const verify = () => {
  return (
    <>
      <SeoHead title="OTP" />
      <Header />
      <Mobile_Header />
      <Otp />
    </>
  );
};

export default verify;
