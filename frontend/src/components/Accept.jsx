import { instance } from "../App";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Accept = ({ accept }) => {
  const [data, setData] = useState();
  const getData = async () => {
    const res = await instance.get(`items/${accept._id}`);
    setData(res.data.data);
  };

  useEffect(() => {
    getData();
  }, []);
  const accepted = async () => {
    if (!data.accept) {
      await instance.put(`items/${accept._id}`, {
        token: JSON.parse(localStorage.getItem("token")),
        storage: data.storage - 1,
        accept: true,
      });
      setData((prev) => {
        return {
          ...prev,
          storage: prev.storage - 1,
          accept: true,
        };
      });
    } else {
      toast("already accepted");
    }
  };
  return (
    <div style={stylesOfSags.sagsContainer}>
      {data && (
        <div>
          <img src={data.img} alt="" style={stylesOfSags.img} />
          <div>name: {data.name}</div>
          <div>price: {data.price}</div>
          <div>remaining: {data.storage}</div>
          <button style={stylesOfSags.button} onClick={accepted}>
            {data.accept ? "accepted" : "accept"}
          </button>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};
export default Accept;
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
    backgroundColor: "#363738",
    color: "white",
    borderRaduis: "10px",
  },
  bigContainer: {
    border: "0.5px solid grey",
    margin: "20px",
    padding: "20px",
    borderRadius: "10px",
  },
};
