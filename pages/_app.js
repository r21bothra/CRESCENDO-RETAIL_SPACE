import "../styles/globals.css";
import { Provider } from "react-redux";
import { wrapper, store } from "../reducer/user";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../reducer";
import React from "react";
import axios from "axios";
import Loading from "../components/layouts/Loading";

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    const token = localStorage.getItem("token");
    const getUser = async (token) => {
      if (token) {
        await axios
          .get(" api/auth/current-user", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((doc) => {
            if (doc && doc.data.user) {
              var separatedString1 = doc.data.user;
              dispatch(
                loginSuccess({
                  name: separatedString1.name,
                  withdraw:
                    separatedString1.withdraw ?? new Date(new Date().getTime()),
                  email: separatedString1.email,
                  id: separatedString1._id,
                  isVerified: separatedString1.isVerified,
                  isKYCApproved: separatedString1.isKYCApproved,
                  coins: separatedString1.coins,
                  isDataUpdated: separatedString1.isDataUpdated,
                  bankName: separatedString1.bankName,
                  accountNo: separatedString1.accountNo,
                  bankAddress: separatedString1.bankAddress,
                  ifscCode: separatedString1.ifscCode,
                  swiftCode: separatedString1.swiftCode,
                  panCardImage: separatedString1.panCardImage,
                  phoneNo: separatedString1.phoneNo,
                  referralCode: separatedString1.referralCode,
                  referredBy: separatedString1.referredBy,
                  role: separatedString1.role,
                  createdAt: separatedString1.createdAt,
                })
              );
            } else {
              dispatch(loginSuccess({}));
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };
    getUser(token);
  }, [dispatch]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => setLoading(true), 1000);
  }, []);
  return (
    <>
      {loading ? (
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default wrapper.withRedux(MyApp);
