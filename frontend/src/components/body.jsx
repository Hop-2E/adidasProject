import React from "react";
import BodyImg from "./BodyImg";
import BodyNavbar from "./BodyNavbar";
import Stories from "./Stories";
import Collection from "./Collection";
import BodyTitle from "./BodyTitle";
import { Opacity } from "../App";
import { useContext } from "react";

const Body = () => {
  const { isOpacity } = useContext(Opacity);
  return (
    <div
      style={{
        width: "100vw",
        height: "auto",
        marginBottom: "200px",
        opacity: isOpacity ? "1" : "0.2",
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
