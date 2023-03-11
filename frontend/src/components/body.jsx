import React from "react";
import BodyImg from "./BodyImg";
import BodyNavbar from "./BodyNavbar";
import Stories from "./Stories";
import Collection from "./Collection";
import BodyTitle from "./BodyTitle";

const Body = () => {
  return (
    <div
      style={{ width: "100vw", height: "4000px", border: "1px solid black" }}
    >
      <BodyImg />
      <div style={{ marginTop: "40px", marginBottom: "40px" }}>
        <BodyTitle />
        <BodyNavbar />
      </div>
      <div>
        <Collection />
      </div>
      <div>
        <Stories />
      </div>
    </div>
  );
};

export default Body;
