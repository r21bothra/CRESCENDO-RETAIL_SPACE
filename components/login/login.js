/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useSelector } from "react-redux";
import Loading from "../layouts/Loading";
const Login = () => {
  const { user } = useSelector((state) => state.user);
  const [signup, setsignup] = React.useState({
    name: "",
    email: "",
    password: "",
    referralCode: "",
  });
  const [login, setlogin] = React.useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (user && user?.email) {
      window.location.href = "/";
    } else {
      return;
    }
  }, [user]);
  const handleChangesignup = (e) => {
    const { name, value } = e.target;
    setsignup((prev) => ({ ...prev, [name]: value }));
  };
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    if (
      signup.name.trim() == "" ||
      signup.email.trim() == "" ||
      signup.password.trim() == ""
    ) {
      toast.error("Please fill all the fields");
      return;
    }
    setLoading(true);
    await axios
      .post(" api/auth/register", signup)
      .then((doc) => {
        toast.success("You have received OTP at " + signup.email);
        setsignup({
          name: "",
          email: "",
          password: "",
          referralCode: "",
        });
        setLoading(false);
        window.location.href = "/dashboard";
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.response.data.message);
      });
  };
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (login.email.trim() != "" && login.password.trim() != "") {
      setLoading(true);
      await axios
        .post(" api/auth/login", login, {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((doc) => {
          localStorage.setItem("token", doc.data.token);
          console.log(doc.data);
          toast.success("Login Successfull");
          setlogin({
            email: "",
            password: "",
          });
          setLoading(false);
          window.location.href = "/dashboard";
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
          toast.error(error.response.data?.message ?? "email not found");
        });
    }
  };
  const handleChangelogin = (e) => {
    const { name, value } = e.target;
    setlogin((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
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
                      <div className="login-form">
                        <div className="title">Login</div>
                        <form onSubmit={handleLoginSubmit} action="#">
                          <div className="input-boxes">
                            <div className="input-box">
                              <i className="fas fa-envelope"></i>
                              <input
                                name="email"
                                onChange={handleChangelogin}
                                type="text"
                                value={login.email}
                                placeholder="Email"
                                required
                              />
                            </div>
                            <div className="input-box">
                              <i className="fas fa-lock"></i>
                              <input
                                type="Password"
                                name="password"
                                value={login.password}
                                onChange={handleChangelogin}
                                placeholder="Enter your password"
                                required
                              />
                            </div>
                            <div className="text">
                              <a href="#">Forgot password?</a>
                            </div>
                            <div className="button input-box">
                              <input type="submit" value="Login" />
                            </div>
                            <div className="text sign-up-text">
                              Don't have an account?{" "}
                              <label for="flip">Sign up</label>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="signup-form">
                        <div className="title">Sign up</div>
                        <form action="#">
                          <div className="input-boxes">
                            <div className="input-box">
                              <i className="fas fa-user"></i>
                              <input
                                name="name"
                                onChange={handleChangesignup}
                                type="text"
                                value={signup.name}
                                placeholder="Name"
                                required
                              />
                            </div>
                            <div className="input-box">
                              <i className="fas fa-envelope"></i>
                              <input
                                name="email"
                                onChange={handleChangesignup}
                                type="text"
                                value={signup.email}
                                placeholder="Email"
                                required
                              />
                            </div>
                            <div className="input-box">
                              <i className="fas fa-lock"></i>
                              <input
                                name="password"
                                onChange={handleChangesignup}
                                type="password"
                                value={signup.password}
                                placeholder="Password"
                                required
                              />
                            </div>
                            <div className="input-box">
                              <i className="fas fa-user"></i>
                              <input
                                type="text"
                                name="referralCode"
                                value={signup.referralCode}
                                onChange={handleChangesignup}
                                placeholder="Refferal Code (optional)"
                                required
                              />
                            </div>
                            <div className="button input-box">
                              <input
                                onClick={handleRegisterSubmit}
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
      )}
    </>
  );
};

export default Login;
