import { useEffect, useState } from "react";
import { instance } from "../App";
import Accept from "./Accept";

const SagsRequests = ({ sags, username }) => {
  return (
    <div style={stylesOfSags.bigContainer}>
      <div style={stylesOfSags.title}>{username}</div>
      <div style={stylesOfSags.miniContainer}>
        {sags.length !== 0 &&
          sags.map((el) => {
            return <Accept accept={el.data} />;
          })}
      </div>
    </div>
  );
};
export default SagsRequests;
const stylesOfSags = {
  title: {
    fontSize: "30px",
  },
  img: {
    width: "100px",
    height: "100px",
  },
  miniContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  sagsContainer: {
    margin: "10px",
  },
  button: {
    width: "100px",
    height: "30px",
  },
  bigContainer: {
    border: "0.5px solid grey",
    margin: "20px",
    padding: "20px",
    borderRadius: "10px",
  },
};
