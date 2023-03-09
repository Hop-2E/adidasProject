import React from "react";

function BodyTitle() {
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
  );
}

export default BodyTitle;
