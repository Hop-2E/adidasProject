import React from "react";
const Map = () => {
  const data1 = [4, 4.5, 5, 6, 6.5];
  const data2 = [7, 7.5, 8, 8.5, 9];
  const data3 = [9.5, 10, 10.5, 11, 11.5];
  const data4 = [12, 12.5, 13, 13.5, 14];
  const data5 = [15, 16, 17, 18];

  const style = {
    item: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "0.01px solid black",
      width: "80px",
      heigth: "45px",
    },
    helper: {
      display: "flex",
    },
  };
  return (
    <div style={style.main}>
      {" "}
      <div style={style.helper}>
        {data1 &&
          data1.map((e) => {
            return (
              <div className="map" style={style.item}>
                {e}
              </div>
            );
          })}
      </div>
      <div style={style.helper}>
        {data2 &&
          data2.map((e) => {
            return (
              <div className="map" style={style.item}>
                {e}
              </div>
            );
          })}
      </div>
      <div style={style.helper}>
        {data3 &&
          data3.map((e) => {
            return (
              <div className="map" style={style.item}>
                {e}
              </div>
            );
          })}
      </div>
      <div style={style.helper}>
        {data4 &&
          data4.map((e) => {
            return (
              <div className="map" style={style.item}>
                {e}
              </div>
            );
          })}
      </div>
      <div style={style.helper}>
        {data5 &&
          data5.map((e) => {
            return (
              <div className="map" style={style.item}>
                {e}
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Map;
