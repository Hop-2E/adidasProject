import { useEffect, useState } from "react";
import { instance } from "../App";
import FooterBlack from "../components/FooterBlack";
import Header from "../components/Header";
import HeaderBlack from "../components/HeaderBlack";
import SagsItems from "../components/SagsItems";

const Sags = () => {
  const [data, setData] = useState();
  const getData = async () => {
    const res = await instance.get(
      `customers/${JSON.parse(localStorage.getItem("user_id"))}`
    );
    setData(res.data.data.sags);
  };
  useEffect(() => {
    getData();
  }, [data]);
  const Style = {
    title: {
      fontSize: "34px",
      fontWeight: "bolder",
    },
    main: {
      marginLeft: "22vw",
      marginTop: "8vh",
    },
    desp: {
      marginTop: "1vh",
    },
  };
  return (
    <div>
      <HeaderBlack />
      <Header />
      <div style={Style.main}>
        <div style={Style.title}>YOUR BAG</div>
        <div style={Style.desp}>
          Items in your bag are not reserved — check out now to make them yours.
        </div>

        <div>
          {data &&
            data.map((item) => {
              return <SagsItems item={item} />;
            })}
        </div>
      </div>
      <FooterBlack />
    </div>
  );
};
export default Sags;
