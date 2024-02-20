/* eslint-disable @next/next/no-img-element */
"use client";
import axios from "axios";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { loginSuccess } from "../../reducer";
import { useDispatch } from "react-redux";
import { useSearchParams } from "next/navigation";

// export const getServerSideProps = async (context) => {
//   const body = context.query.email;
//   console.log(body, "body");
//   return { props: { email: body } };
// };
const Otp = () => {
  const searchParams = useSearchParams();

  const email = searchParams.get("email");
  const [verifyotp, setsignup] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const dispatch = useDispatch();
  const handleverifyotp = (e) => {
    e.preventDefault();
    if (verifyotp.trim() == "") {
      toast.error("Please fill all the fields");
      return;
    }
    setLoading(true);
    axios
      .post(` api/auth/verify-otp?email=${email}`, {
        otp: verifyotp,
      })
      .then((doc) => {
        dispatch(
          loginSuccess({
            email: doc.data.email,
            name: doc.data.email.split("@")[0],
            referralCode: doc.data.referralCode,
            isVerified: doc.data.isVerified,
            createdAt: doc.data.createdAt,
          })
        );
        localStorage.setItem("token", doc.data.token);
        setLoading(false);
        toast.success("Login Successfull");
        window.location.href = "/dashboard";
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        toast.error(error.response.data.message ?? "email not found");
      });
  };

  return (
    <>
      {console.log(email, "email")}
      <div className="login-area pb-20">
        <div className="container">
          {/* <div className="row"> */}
          <div className="col-lg-8 mx-auto">
            <div className="container1">
              <input type="checkbox" id="flip" />
              <div className="cover">
                <div className="front">
                  <img src="assets/images/resource/blog-1.jpg" alt="" />
                </div>
                <div className="back">
                  <img
                    className="backImg"
                    src="assets/images/resource/blog-2.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="forms">
                <div className="form-content">
                  <div className="signup-form block">
                    <div className="title">Verify OTP</div>
                    <form action="#">
                      <div className="input-boxes">
                        <div className="input-box">
                          <i className="fas fa-user"></i>
                          <input
                            name="otp"
                            onChange={(e) => setsignup(e.target.value)}
                            type="text"
                            placeholder="OTP"
                            required
                          />
                        </div>

                        <div className="button input-box">
                          <input
                            onClick={handleverifyotp}
                            type="submit"
                            value="Signup"
                          />
                        </div>
                        <div className="text sign-up-text">
                          Already have an account?{" "}
                          <label for="flip">Login now</label>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Otp;
