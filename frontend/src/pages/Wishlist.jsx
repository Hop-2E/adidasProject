import React from "react";
import Header from "../components/header";
import WishListItem from "../components/WishListItem";
import { useEffect } from "react";
import { useState } from "react";
import { instance } from "../App";
import FooterBlack from "../components/FooterBlack";
function WishList() {
  const [data, setData] = useState([]);
  const getWish = async () => {
    const res = await instance.get(
      `/customers/${JSON.parse(localStorage.getItem("user_id"))}`
    );
    setData(res.data.data.wishlist);
  };
  useEffect(() => {
    getWish();
  }, [data]);

  return (
    <div>
      <Header />
      <div style={WishListStyle.text}>
        <div style={WishListStyle.title}>MY WISHLIST</div>
        <div style={WishListStyle.item}>{data.length} ITEMS</div>
        <div style={WishListStyle.items} className="height">
          {data &&
            data.map((values) => {
              return <WishListItem values={values.value} />;
            })}
        </div>
      </div>
      <FooterBlack />
    </div>
  );
}
export default WishList;
const WishListStyle = {
  text: {
    marginLeft: "28.2%",
    marginBottom: "30px",
    rowGap: "0px",
  },
  title: {
    color: "#000000",
    fontWeight: "bolder",
    fontSize: "30px",
    marginTop: "30px",
  },
  item: {
    marginTop: "30px",
  },
  items: {
    display: "flex",
    flexDirection: "row",
    overflowX: "scroll",
    zIndex: "0",
    marginTop: "30px",
  },
};
