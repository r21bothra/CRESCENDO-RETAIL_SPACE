import "../styles/globals.css";
import { Provider } from "react-redux";
import { wrapper, store } from "../reducer/user";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../reducer";
import React from "react";
import axios from "axios";
import Loading from "../components/layouts/Loading";
import { auth, db } from "../config/Firebase";

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        await db
          .collection("users")
          .doc(user.email)
          .get()
          .then((doc) => {
            if (doc && doc.exists) {
              var separatedString1 = doc.data();
              dispatch(
                loginSuccess({
                  name: separatedString1.name,
                  email: separatedString1.email,
                  url: separatedString1.url,
                  date: separatedString1.date,
                  role: separatedString1.role,
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
    });
    return () => unsubscribe();
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
