import React from "react";
import FooterBlack from "../components/FooterBlack";
import FooterNavbar from "../components/footerNavbar";
import Header from "../components/Header";
import WishListItem from "../components/WishListItem";
import { useEffect } from "react";
import { useState } from "react";
import { instance } from "../App";
import { useParams } from "react-router-dom";
import HeaderBlack from "../components/HeaderBlack";
function WishList() {
  const params = useParams();
  const [data, setData] = useState([]);
  const getWish = async () => {
    const res = await instance.get(`customers/${params.userid}`);
    setData(res.data.data.items);
    console.log(params);
  };
  useEffect(() => {
    getWish();
  }, [data]);
  const WishListStyle = {
    text: {
      alignItems: "start",
      marginLeft: "28.2%",
      marginBottom: "30px",
    },
    title: {
      color: "#000000",
      fontWeight: "bolder",
      fontSize: "30px",
      marginTop: "30px",
    },
    item: {
      marginTop: "10px",
    },
  };
  return (
    <div>
      <HeaderBlack />
      <Header />
      <div style={WishListStyle.text}>
        <div style={WishListStyle.title}>MY WISHLIST</div>
        <div style={WishListStyle.item}>0 ITEMS</div>
        <div style={{ display: "flex", marginLeft: 220, overflowX: "scroll" }}>
          {data &&
            data.map((values) => {
              return <WishListItem values={values} />;
            })}
        </div>
      </div>
      <FooterNavbar />
      <FooterBlack />
    </div>
  );
}

export default WishList;
