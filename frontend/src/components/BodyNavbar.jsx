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
  }, [data]);
  return (
    <div style={{ display: "flex", marginLeft: 220, overflowX: "scroll" }}>
      {data &&
        data.map((value) => {
          return <BodyItems value={value} />;
        })}
    </div>
  );
}

export default BodyNavbar;
