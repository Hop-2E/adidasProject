import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { instance } from "../App";
import Arrow from "../assets/arrow.png";
import BodySearch from "../components/BodySearch";
import Header from "../components/header";
import FooterBlack from "../components/FooterBlack";
const Search = () => {
  const styles = {
    back: {
      marginTop: "01%",
      marginLeft: "17%",
    },
    menshoes: {
      fontSize: "150%",
      fontWeight: "bolder",
    },
    mainType: {
      display: "flex",
      alignItems: "flex-end",
      gap: "2%",
      width: "100%",
    },
    shoes: {
      marginTop: "3%",
      display: "grid",
      gridTemplateColumns: "21.3% 21.3% 21.3% 21.3%",
      gap: "-10%",
      fontSize: "90%",
      color: "gray",
    },
    cart: {
      border: "1px solid black",
      width: "360px",
      height: "390px",
    },
    men: {
      marginTop: "3%",
      marginLeft: "17%",
    },
    mainShoes: {
      marginTop: "3%",
      marginLeft: "17%",
    },
    head: {
      border: "1px solid gray",
    },
    page: {
      marginLeft: "45%",
      fontSize: "120%",
      display: "flex",
      alignItems: "baseline",
      gap: "10px",
      minHeight: "200px",
    },
    title: {
      marginTop: "10px",
    },
    button: {
      fontSize: "100%",
      backgroundColor: "white",
      marginTop: "3%",
      border: "1px solid rgb(129 129 131)",
      width: " 7%",
      height: "40px",
    },
    NEXT: {
      marginLeft: "800px",
    },
  };
  const [data, setData] = useState();
  const { search } = useParams();
  const getData = async () => {
    const res = await instance.get("items");
    setData(res.data.data);
  };
  useEffect(() => {
    getData();
  });
  return (
    <div>
      <Header />
      <div>
        {" "}
        <p style={styles.back}>
          <Link to={`/${JSON.parse(localStorage.getItem("user_id"))}`}>
            <img src={Arrow} width="30" height="10" alt={Arrow} /> Back
          </Link>
        </p>
        <div style={styles.men}>
          <p style={styles.menshoes}>Search</p>
          <p style={styles.title}>
            Shop adidas for all styles of men's shoes including casual sneakers,
            high-performance running shoes, and <br />
            comfy slides.Browse styles for women and kids here.
          </p>
        </div>
        <div style={styles.mainShoes}>
          <div style={styles.mainType}>
            <Link to="/soccers">
              <div>Soccers</div>
            </Link>
            <Link to="/shirts">
              <div>Shirts</div>
            </Link>
            <Link to="/sneakers">
              <div>Sneakers</div>
            </Link>
            <Link to="/shorts">
              <div>Shorts</div>
            </Link>
            <Link to="/pants">
              <div>Pants</div>
            </Link>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          overflowX: "scroll",
          width: "79vw",
          height: "55vh",
          alignItems: "center",
          marginLeft: "16vw",
        }}
      >
        {" "}
        {data &&
          data.map((item) => {
            if (item.name.includes(search)) {
              return <BodySearch item={item} />;
            } else {
              return "";
            }
          })}
      </div>
      <FooterBlack />
    </div>
  );
};
export default Search;
