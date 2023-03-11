import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { instance } from "../App";
import Header from "../components/header";

const Item = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const getData = async () => {
    const res = await instance.get(`items/${id}`);
    setData(res.data.data._id);
  };
  useEffect(() => {
    getData();
  }, []);
  const sags = async () => {
    const res = await instance.put(
      `customers/sags/${JSON.parse(localStorage.getItem("user_id"))}`,
      {
        data: data,
        accept: false,
      }
    );
  };

  return (
    <div>
      <Header />
      {id}
      <button onClick={sags}>sagsand hiih</button>
    </div>
  );
};
export default Item;
