/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useSelector } from "react-redux";
import Loading from "../layouts/Loading";
import firebase from "firebase/compat/app";
import { auth, db } from "../../config/Firebase";

const Login = () => {
  const { user } = useSelector((state) => state.user);
  const [signup, setsignup] = React.useState({
    name: "",
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
      signup.email.trim() == ""
      // signup.password.trim() == ""
    ) {
      toast.error("Please fill all the fields");
      return;
    }
    setLoading(true);

    const doc = await db
      .collection("users")
      .doc(signup.email)
      .get();
    if (doc.exists) {
      toast.error("Email already exists");
      return;
    }
    const data = {
      email: signup.email,
    };
    //https://esturay-client.vercel.app/
    const config = {
      url: "http://localhost:3000/verify",
      handleCodeInApp: true,
    };

    await auth.sendSignInLinkToEmail(signup.email, config);

    toast.success(
      `Email is sent to ${signup.email} Click the link to complete your Registration, also check Junk folder`
    );
    setLoading(false);
    window.localStorage.setItem("emailForRegistration", JSON.stringify(data));
    setsignup({
      // name: "",
      email: "",
      // password: "",
    });
  };
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (login.email.trim() != "" && login.password.trim() != "") {
      setLoading(true);
      try {
        await db
          .collection("users")
          // .where('uid', '==', user.email)
          .doc(login.email)
          .get()
          .then((snapshot) => {
            if (snapshot && snapshot.exists) {
              separatedString = snapshot.data();
              //use separatedString
            }
          })
          .catch((error) => {
            console.log(error);
          });
        var role_data = JSON.stringify(separatedString.role);
        var name_data = JSON.stringify(separatedString.name);
        await auth
          .signInWithEmailAndPassword(login.email, login.password)
          .then((res) => {
            dispatch(
              loginSuccess({
                name: name_data,
                email: login.email,
                role: role_data,
              })
            );
            setlogin({
              email: "",
              password: "",
            });
            setLoading(false);
            toast.success("Login Successful");
            window.location.href = "/dashboard";
          });
      } catch (error) {
        console.log(error);
        setLoading(false);
        setlogin({
          email: "",
          password: "",
        });
        toast.error(login.email + " email not found");
      }
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
