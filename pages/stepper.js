import toast, { Toaster } from "react-hot-toast";
import * as csvtojson from "csvtojson";
import * as XLSX from "xlsx";
import React, { useState } from "react";
import SeoHead from "../components/seo/SeoHead";
import Header from "../components/header/Header";
import Mobile_Header from "../components/header/Mobile_Header";
import { db, storage } from "../config/Firebase";
import { Select, Space } from "antd";
import raw_data from "../components/assets/mock_data.json";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useSelector } from "react-redux";

const Stepper = () => {
  const { user } = useSelector((state) => ({ ...state }));
  const [stage, setstage] = useState(1);
  const [space, setspace] = useState("");
  const [data, setdata] = useState([
    {
      product_name: "",
      id: "",
      category: "",
      image: "",
      price: "",
      season: "",
      space: "",
    },
  ]);
  const handleAdd = (option) => {
    if (option == "add") {
      if (
        space -
          data.reduce((acc, curr) => acc + parseFloat(curr.space || 0), 0) <=
        0
      ) {
        return;
      }
      setdata((prev) => [
        ...prev,
        {
          product_name: "",
          space: "",
          id: "",
          category: "",
          image: "",
          price: "",
          season: "",
        },
      ]);
    } else {
      console.log(data);
      setdata((prev) => {
        let arrayCopy = [...prev]; // Create a copy of the original array
        arrayCopy.pop(); // Remove the last element
        return arrayCopy; // Return the modified array
      });
    }
  };
  React.useEffect(() => {
    document.querySelector("body").style.background = "#1e1e1e";

    // Cleanup function to revert background color when the component unmounts
    return () => {
      document.querySelector("body").style.background = ""; // Revert to default background color
    };
  }, []);
  const handleSubmitdata = async () => {
    console.log(data);
    if (
      space - data.reduce((acc, curr) => acc + parseFloat(curr.space || 0), 0) <
      0
    ) {
      toast.error("Space is in Negative");
      return;
    }
    await db
      .collection("custom-data")
      .doc(user.user.email)
      .set({
        total_space: space,
        data: data,
        user: user.user.email,
        created_at: new Date(),
      })
      .then(() => {
        setdata([
          {
            product_name: "",
            id: "",
            space: "",
            category: "",
            image: "",
            price: "",
            season: "",
          },
        ]);
      });

    window.location.href = "/dashboard";
    toast.success("Data saved!");
  };
  const handleChange = (val, ind) => {
    const temp = raw_data.find((item) => item.id == val);
    setdata((prev) => {
      prev[ind].product_name = temp.product_name;
      prev[ind].id = ind;
      prev[ind].category = temp.category;
      prev[ind].image = temp.image;
      prev[ind].price = temp.price;
      prev[ind].season = temp.season;
      return prev;
    });
  };
  const [file, setfile] = React.useState("");

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

                <span
                  style={{
                    color: "white",
                  }}
                  className="hidden sm:block"
                >
                  {" "}
                  Upload
                </span>
              </li>

              <li className="flex items-center gap-2 p-2">
                <span
                  className={`size-6 rounded-full ${
                    stage == 2 ? "bg-blue-600" : "bg-gray-100"
                  } text-center p-2  font-bold`}
                >
                  2
                </span>

                <span
                  style={{
                    color: "white",
                  }}
                  className="hidden sm:block"
                >
                  {" "}
                  Inventory
                </span>
              </li>

              {/* <li className="flex items-center gap-2 p-2">
                <span
                  className={`size-6 rounded-full ${
                    stage == 3 ? "bg-blue-600" : "bg-gray-100"
                  } text-center p-2  font-bold`}
                >
                  {" "}
                  3{" "}
                </span>

                <span
                  style={{
                    color: "white",
                  }}
                  className="hidden sm:block"
                >
                  {" "}
                  Payment{" "}
                </span>
              </li> */}
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
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <button type="submit">
                      <span
                        style={{
                          color: "white",
                        }}
                      >
                        Upload
                      </span>
                    </button>
                    <button
                      onClick={() => {
                        setstage(2);
                      }}
                      style={{
                        color: "white",
                      }}
                    >
                      Skip
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
              <div className="font-bold text-white">Enter Inventory</div>
              <div className="flex-grow" />
            </div>
          </div>
          <div style={{ margin: "0px 20%" }}>
            <input
              type="number"
              id="total"
              value={space}
              style={{
                width: "100%",
                marginBottom: "20px",
              }}
              onChange={(e) => setspace(e.target.value)}
              className="form-control"
              placeholder="Total space"
            />
            <h2>
              Available space{" "}
              {space -
                data.reduce(
                  (acc, curr) => acc + parseFloat(curr.space || 0),
                  0
                )}
            </h2>
            {data.map((i, ind) => {
              return (
                <div style={{ marginBottom: "5px" }} key={ind}>
                  <Select
                    // mode="multiple"

                    allowClear
                    style={{
                      width: "100%",
                    }}
                    placeholder="Select Product"
                    onChange={(value) => handleChange(value, ind)}
                    options={raw_data.map((i) => {
                      return {
                        label: i.product_name,
                        value: i.id,
                      };
                    })}
                  />
                  <input
                    type="number"
                    style={{
                      width: "100%",
                      marginTop: "5px",
                    }}
                    value={i.space}
                    onChange={(e) => {
                      const { value } = e.target;
                      setdata((prev) => {
                        const newData = [...prev];
                        newData[ind] = { ...newData[ind], space: value }; // Update space property
                        return newData;
                      });
                    }}
                    className="form-control"
                    placeholder="Space"
                  />
                </div>
              );
            })}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button
                style={{ color: "white" }}
                onClick={() => handleAdd("add")}
              >
                Add
              </button>
              {data.length > 1 && (
                <button
                  style={{ color: "white" }}
                  onClick={() => handleAdd("remove")}
                >
                  Remove
                </button>
              )}
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <button type="button" onClick={handleSubmitdata}>
                <span
                  style={{
                    color: "white",
                    fontSize: "20px",
                  }}
                >
                  Submit
                </span>
              </button>
              <button
                onClick={() => {
                  setstage(1);
                }}
                style={{
                  color: "white",
                }}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Stepper;
