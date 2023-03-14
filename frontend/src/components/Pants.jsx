import Header from "./header";
import "../App.css";
import Arrow from "../assets/arrow.png";
import BottomArrow from "../assets/bottomArrow.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { instance } from "../App";
import BodyItems from "./BodyItems";
import FooterBlack from "./FooterBlack";
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

const Pants = () => {
  const [data, setData] = useState();
  const [filtered, setFiltered] = useState();
  const getData = async () => {
    const res = await instance.get(`/items`);
    setData(res.data.data);
    setFiltered(
      data &&
        data.filter((el) => {
          if (el.typeOfClothes === "pants") {
            return el;
          }
        })
    );
  };

  useEffect(() => {
    getData();
  }, [data]);

  return (
    <div>
      <div style={styles.head}>
        <Header />
      </div>

      <p style={styles.back}>
        <Link to={`/${JSON.parse(localStorage.getItem("user_id"))}`}>
          <img src={Arrow} width="30" height="10" alt={Arrow} /> Back
        </Link>
      </p>
      <div style={styles.men}>
        <p style={styles.menshoes}>Pants </p>
        <p>
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
        <div style={styles.shoes}>
          {filtered &&
            filtered.map((el) => {
              return <BodyItems value={el} />;
            })}
        </div>
      </div>
      <div>
        <p style={styles.page}>
          <p>Page:</p>
          <button style={styles.button}>
            1
            <img src={BottomArrow} alt={BottomArrow} width="15" height="15" />
          </button>
          <p>
            of 33
            <a href="https://www.adidas.com/us/men-shoes" style={styles.NEXT}>
              NEXT
            </a>
          </p>
        </p>
      </div>
      <FooterBlack />
    </div>
  );
};
export default Pants;
