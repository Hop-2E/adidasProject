import { instance } from "../App";
import { useState, useEffect } from "react";

const SagsItems = ({ item }) => {
  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, [data]);

  const getData = async () => {
    const res = await instance.get(`items/${item}`);
    setData(res.data.data);
  };

  const removeSags = async () => {
    const res = await instance.put(
      `customers/removeSags/${JSON.parse(localStorage.getItem("user_id"))}`,
      {
        data: item,
      }
    );
  };

  return (
    <div>
      {data && (
        <div className="sagsMiniContainer" style={miniSagsStyles.container}>
          <div className="imgOfsags">
            <img src={data.img} alt="img" style={miniSagsStyles.img} />
          </div>
          <div className="contentOfsags" style={miniSagsStyles.content}>
            <div className="iconOfsags" style={miniSagsStyles.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x-lg"
                viewBox="0 0 16 16"
                onClick={removeSags}
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            </div>
            <div className="nameOfsags">{data.name}</div>
            <div className="colorOfsags">{data.color}</div>
            <div className="priceOfsags">{data.price}</div>
          </div>
        </div>
      )}
    </div>
  );
};
export default SagsItems;
const miniSagsStyles = {
  container: {
    display: "flex",
    flexDirection: "row",
    width: "500px",
    height: "240px",
    border: "1px solid grey",
    fontSize: "20px",
    margin: "50px",
  },
  img: {
    width: "240px",
    height: "240px",
  },
  content: {
    width: "260px",
    display: "flex",
    padding: "20px",
    flexDirection: "column",
  },
  icon: {
    width: "220px",
    display: "flex",
    justifyContent: "end",
  },
};
