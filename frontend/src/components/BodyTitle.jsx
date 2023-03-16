import React from "react";
import { instance } from "../App";
import { useState } from "react";
import { useEffect } from "react";
import BodyItems from "./BodyItems";

function BodyTitle() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await instance.get("/items");
    setData(res.data.data);
  };
  useEffect(() => {
    getData();
  }, []);
  const style = {
    title: {
      fontWeight: "bolder",
      color: "#D3D7DA",
      fontSize: "30px",
      marginLeft: "35px",
    },
    Main: {
      display: "flex",
    },
  };
  return (
    <div>
      <div>
        <div
            style={{
            color: "black",
            fontSize: "30px",
            fontWeight: "bolder",
            marginLeft: "240px",
          }}>
            Still Interested?
          </div>
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
      </div>
      <div style={style.Main}>
        <div
          style={{
            color: "black",
            fontSize: "30px",
            fontWeight: "bolder",
            marginLeft: "240px",
          }}
        >
          New Arrivals
        </div>
        <div style={style.title}>What's Trending</div>
        <div style={style.title}>Member Exclusives</div>
      </div>
    </div>
  );
}

export default BodyTitle;
