import { useState } from "react";
import { instance } from "../App";
import { useEffect } from "react";
import SagsRequests from "./SagsRequests";

const BodyAdmin = () => {
  const [items, setItems] = useState();
  const getItems = async () => {
    const res = await instance.get("customers");
    setItems(res.data.data);
  };
  useEffect(() => {
    getItems();
  }, [items]);
  return (
    <div style={styleSags.container}>
      <div style={styleSags.miniContainer}>
        {items &&
          items.map((item) => {
            return (
              <SagsRequests sags={item.sagsItem} username={item.username} />
            );
          })}
      </div>
    </div>
  );
};
export default BodyAdmin;
const styleSags = {
  container: {
    width: "100vw",
    display: "flex",
    justifyContent: "center",
  },
  miniContainer: {
    width: "70vw",
    minHeight: "80vh",
  },
};
