import React from "react";
import BodyImg from "./BodyImg";
import BodyNavbar from "./BodyNavbar";
import BodyItems from "./BodyItems";

const Body = () => {
  return (
    <div
      style={{ width: "100vw", height: "4000px", border: "1px solid black" }}
    >
      <BodyImg />

      <div style={{ marginTop: "40px" }}>
        <BodyNavbar />
      </div>
    </div>
  );
};

export default Body;
