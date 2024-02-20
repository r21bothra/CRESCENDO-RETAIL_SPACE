/* eslint-disable @next/next/no-img-element */
import { auth, db } from "../../config/Firebase";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { loginSuccess } from "../../reducer";
import { useDispatch } from "react-redux";
import { useSearchParams } from "next/navigation";

const Otp = () => {
  const searchParams = useSearchParams();

  // const email = searchParams.get("email");
  const [email, setEmail] = React.useState("");
  const [password, setpass] = React.useState("");

  const dispatch = useDispatch();
  React.useEffect(() => {
    setEmail(JSON.parse(window.localStorage.getItem("emailForRegistration")));
  }, []);

  const handleverifyotp = async (e) => {
    e.preventDefault();
    if (!email.email || !password) {
      toast.error("Password is required");
      return;
    }
    try {
      const result = await auth.signInWithEmailLink(
        email.email,
        window.location.href
      );
      if (result.user.emailVerified) {
        let user = auth.currentUser;
        await user.updatePassword(password);
        // const idTokenResult = await user.getIdTokenResult();
        const date = new Date();

        await db
          .collection("users")
          .doc(email.email)
          .set({
            name: email.email.split("@")[0],
            role: "user",
            date: date.toDateString(),
            email: email.email,
            url:
              "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
          })
          .then(async () => {
            dispatch(
              loginSuccess({
                name: email.email.split("@")[0],
                email: email.email,
                date: date.toDateString(),
                role: "user",
                url:
                  "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
              })
            );

            window.localStorage.removeItem("emailForRegistration");
            toast.success("successfully Register");
            window.location.href = "/";
          })
          .catch();
        // history.push("/");
      }
    } catch (err) {
      console.error(err);
      toast.error("Token expired!, Please try again");
    }
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
                            name="password"
                            onChange={(e) => setpass(e.target.value)}
                            type="password"
                            placeholder="Password"
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
