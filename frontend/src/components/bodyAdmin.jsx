import { useState } from "react";
import { instance } from "../App";
import { useEffect } from "react";

const BodyAdmin = () => {
  const [items, setItems] = useState();
  const getItems = async () => {
    const res = await instance.get("items");
    setItems(res.data.data);
  };
  useEffect(() => {
    getItems();
  }, [items]);
  return (
    <div>
      {items &&
        items.map((item) => {
          return item.name;
        })}
    </div>
  );
};
export default BodyAdmin;
