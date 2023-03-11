import { useEffect, useState } from "react";
import { instance } from "../App";
import FooterBlack from "../components/FooterBlack";
import Header from "../components/header";
import SagsItems from "../components/SagsItems";

const Sags = () => {
  const [data, setData] = useState();
  const getData = async () => {
    const res = await instance.get(
      `customers/${JSON.parse(localStorage.getItem("user_id"))}`
    );
    setData(res.data.data.sagsItem);
  };
  useEffect(() => {
    getData();
  }, [data]);
  return (
    <div>
      <Header />
      <div className="height">
        {data &&
          data.map((item) => {
            return <SagsItems item={item.data} />;
          })}
      </div>
      <FooterBlack />
    </div>
  );
};
export default Sags;
