import React from "react";
import { instance } from "../App";
import { useState } from "react";
import { useEffect } from "react";
import BodyItems from "./BodyItems";
function BodyNavbar() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await instance.get("/items");
    setData(res.data.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        overflowX: "scroll",
        width: "100vw",
        height: "55vh",
        alignItems: "center",
        zIndex: "-1",
      }}
    >
      {data &&
        data.map((value) => {
          return <BodyItems value={value} />;
        })}
    </div>
  );
}

export default BodyNavbar;
