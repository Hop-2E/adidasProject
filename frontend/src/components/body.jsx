import React from "react";
import BodyImg from "./BodyImg";
import BodyNavbar from "./BodyNavbar";
import Stories from "./Stories";
import Collection from "./Collection";
import BodyTitle from "./BodyTitle";

const Body = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "auto",
        marginBottom: "200px",
      }}
    >
      <BodyImg />
      <div
        style={{
          marginTop: "40px",
        }}
      >
        <BodyTitle />
        <div
          style={{ width: "100vw", display: "flex", justifyContent: "center" }}
        >
          <BodyNavbar />
        </div>
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
