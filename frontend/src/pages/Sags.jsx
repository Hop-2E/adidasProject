import { useEffect, useState } from "react";
import { instance } from "../App";

import FooterBlack from "../components/FooterBlack";
import Header from "../components/header";
import SagsItems from "../components/SagsItems";


const Sags = () => {
  const style = {
    bill: {
      marginTop: "50px",
    },
    checkout: {
      width: "340px",
      height: "50px",
      color: "white",
      fontWeight: "bolder",
      display: "flex",
      alignItems: "center",
      paddingLeft: "10px",
      backgroundColor: "black",
    },
    order: {
      fontWeight: "bolder",
      fontSize: "18px",
    },
    middle: {
      width: "350px",
      height: "50px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    paypal: {
      border: "1px solid black",
      width: "340px",
      height: "50px",
      color: "blue",
      fontWeight: "bolder",
      display: "flex",
      alignItems: "center",
      paddingLeft: "10px",
    },
    container: {
      display: "flex",
      flexDirection: "column",
    },
    title: {
      fontWeight: "bolder",
      fontSize: "35px",
    },
    header: {
      marginLeft: "20vw",
      marginTop: "10vh",
    },
    text: {
      marginTop: "1vh",
    },
    items: {
      marginTop: "20px",
      display: "flex",
    },
    main: {
      display: "flex",
    },
    helperMain: {
      marginLeft: "10vw",
      marginTop: "11vh",
      width: "350px",
    },
    price: {
      position: "absolute",
      marginLeft: "15vw",
    },
    total: {
      marginTop: "20px",
      fontWeight: "bolder",
      display: "flex",
    },
  };
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

      <div style={style.main}>
        <div>
          <div style={style.header}>
            <div style={style.title}>YOUR BAG</div>
            <div style={style.text}>Total:( {data && data.length} items)</div>
            <div style={style.text}>
              Items in your bag are not reserved — check out now to make them
              yours.
            </div>
          </div>
          <div>
            {" "}
            {data &&
              data.map((item) => {
                return <SagsItems item={item.data} />;
              })}
          </div>
        </div>
        <div style={style.helperMain}>
          <div style={style.container}>
            <div style={style.checkout}>CHECKOUT</div>
            <div style={style.middle}>OR</div>
            <div style={style.paypal}>PAYPAL</div>
          </div>
          <div style={style.bill}>
            <div style={style.order}>ORDER SUMMARY</div>
            <div style={style.items}>
              <div>{data && data.length} items</div>
              <div style={style.price}>$169</div>
            </div>
            <div style={style.items}>
              <div>Original price</div>
              <div style={style.price}>-----</div>
            </div>
            <div style={style.items}>
              <div>Sales tax</div>
              <div style={style.price}>-----</div>
            </div>
            <div style={style.items}>
              <div>Delivery</div>
              <div style={style.price}>-----</div>
            </div>
            <hr style={{ marginTop: "20px" }} />
            <div style={style.total}>
              <div>Total</div>
              <div style={style.price}>$169</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "5vh" }}>
        <FooterBlack />
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
