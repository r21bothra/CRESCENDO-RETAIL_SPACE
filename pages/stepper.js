import * as csvtojson from "csvtojson";
import * as XLSX from "xlsx";
import React, { useState } from "react";
import SeoHead from "../components/seo/SeoHead";
import Header from "../components/header/Header";
import Mobile_Header from "../components/header/Mobile_Header";
import { db, storage } from "../config/Firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useSelector } from "react-redux";

const Stepper = () => {
  const [stage, setstage] = useState(2);
  React.useEffect(() => {
    // Change background color when the component mounts
    document.querySelector("body").style.background = "#1e1e1e";

    // Cleanup function to revert background color when the component unmounts
    return () => {
      document.querySelector("body").style.background = ""; // Revert to default background color
    };
  }, []);

  const initialState = {
    url: "",
  };

  const [file, setfile] = React.useState("");
  // const [data, setData] = React.useState(initialState);
  const { user } = useSelector((state) => ({ ...state }));
  const handleSubmit = async (e) => {
    e.preventDefault();
    const storage = getStorage();
    // const mountainsRef = ref(storage, file.name);
    const storageRef = ref(storage, file.name);

    // const uploadTask = fileRef.put(file);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        // setProgress(uploadProgress);
      },
      (error) => {
        console.error("Error uploading file:", error);
      },
      () => {
        // Upload completed successfully
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          db.collection("files").add({
            url: downloadURL,
            filename: file.name,
            user: user.user.email,
            created_at: new Date(),
          });
        });
        setfile("");
        setstage(2);
      }
    );
  };

  return (
    <>
      <div>
        <SeoHead title="Stepper" />
        <Header />
        <Mobile_Header />
        <div>
          <div className="relative after pt-40">
            <ol
              style={{
                justifyContent: "center",
                alignContent: "center",
              }}
              className="relative z-10 flex justify-between text-sm font-medium "
            >
              <li className="flex items-center gap-2 p-2">
                <span
                  className={`size-6 rounded-full ${
                    stage == 1 ? "bg-blue-600" : "bg-gray-100"
                  } text-center p-2  font-bold`}
                >
                  {" "}
                  1{" "}
                </span>

                <span className="hidden sm:block"> Details </span>
              </li>

              <li className="flex items-center gap-2 p-2">
                <span
                  className={`size-6 rounded-full ${
                    stage == 2 ? "bg-blue-600" : "bg-gray-100"
                  } text-center p-2  font-bold`}
                >
                  2
                </span>

                <span className="hidden sm:block"> Address </span>
              </li>

              <li className="flex items-center gap-2 p-2">
                <span
                  className={`size-6 rounded-full ${
                    stage == 3 ? "bg-blue-600" : "bg-gray-100"
                  } text-center p-2  font-bold`}
                >
                  {" "}
                  3{" "}
                </span>

                <span className="hidden sm:block"> Payment </span>
              </li>
            </ol>
          </div>
        </div>

        <div
          style={{
            display: stage == 1 ? "" : "none",
          }}
          className="flex p-4 h-full flex-col"
        >
          <div className="d-flex justify-content-center pt-3 pb-6">
            <div className="flex items-center">
              <div className="font-bold text-white">Upload file</div>
              <div className="flex-grow" />
            </div>
          </div>
          <form className="my-form" onSubmit={handleSubmit}>
            <div className="container">
              <ul>
                <li>
                  <div className="grid grid-2">
                    <label
                      className="form-label"
                      htmlFor="basic-default-fullname"
                    >
                      File
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      //placeholder="numbers.xls"
                      value={file.name}
                      disabled
                    />
                    <input
                      name="bankAddress"
                      type="file"
                      required
                      onChange={(e) => setfile(e.target.files[0])}
                      accept=".xlsx,.xls,.csv"
                    />
                  </div>
                </li>

                <li>
                  <div>
                    <button type="submit">
                      <span
                        style={{
                          color: "white",
                        }}
                      >
                        Upload
                      </span>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </form>
        </div>
        <div
          style={{
            display: stage == 2 ? "" : "none",
          }}
          className="flex p-4 h-full flex-col"
        >
          <div className="d-flex justify-content-center pt-3 pb-6">
            <div className="flex items-center">
              <div className="font-bold text-white">Upload file</div>
              <div className="flex-grow" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stepper;
