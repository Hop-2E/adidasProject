import { useState } from "react";

const SagsRequests = ({ sags, username }) => {
  return (
    <div style={stylesOfSags.bigContainer}>
      <div style={stylesOfSags.title}>{username}</div>
      <div style={stylesOfSags.miniContainer}>
        {sags &&
          sags.map((el) => {
            return (
              <div style={stylesOfSags.sagsContainer}>
                <img src={el.img} alt="" style={stylesOfSags.img} />
                <div>{el.name}</div>
                <div>{el.price}</div>
              </div>
            );
          })}
        <button style={stylesOfSags.button}>accept</button>
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
    height: "40px",
  },
  bigContainer: {
    border: "0.5px solid grey",
    margin: "20px",
    padding: "20px",
    borderRadius: "10px",
  },
};
