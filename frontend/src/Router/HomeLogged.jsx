import React from "react";
import { instance } from "../App";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
function HomeLogged() {
  const params = useParams();
  const [value, setValue] = useState([]);
  const getUsername = async () => {
    const res = await instance.get(`/customers/${params.userid}`);
    setValue(res.data.data);
    console.log("");
  };
  useEffect(() => {
    getUsername();
  }, []);
  return (
    <div>
      <Header />
      <div
        style={{
          width: "100vw",
          height: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid black",
        }}
      >
        Hi {value.username}
      </div>
      <Footer />
    </div>
  );
}

export default HomeLogged;
