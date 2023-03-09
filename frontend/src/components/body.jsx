import React from "react";
import BodyImage from "./BodyImage";
import BodyNavbar from "./BodyNavbar";
import BodyTitle from "./BodyTitle";
import Collection from "./Collection";
import ItemNavbar from "./ItemNavbar";
import Stories from "./Stories";

const Body = () => {
  return (
    <div
      style={{ width: "100vw", height: "4000px", border: "1px solid black" }}
    >
      <BodyImage />
      <div style={{ marginTop: "100px" }}>
        <ItemNavbar />
      </div>
      <BodyTitle />
      <div style={{ marginTop: "40px" }}>
        <BodyNavbar />
      </div>
      <div style={{ marginTop: "100px" }}>
        {" "}
        <Collection />
      </div>
      <Stories />
    </div>
  );
};

export default Body;
