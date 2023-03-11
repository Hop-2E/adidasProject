import Header from "./header";
import "../App.css";
import Arrow from "../assets/arrow.png";
import BottomArrow from "../assets/bottomArrow.png";
import { useDebugValue, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { instance } from "../App";
import BodyItems from "./BodyItems";

const styles = {
  back: {
    marginTop: "01%",
    marginLeft: "17%",
  },
  menshoes: {
    fontSize: "150%",
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

const KidsShoes = () => {
  const [data, setData] = useState();
  const [filtered, setFiltered] = useState();
  const getData = async () => {
    const res = await instance.get(`/items`);
    setData(res.data.data);
    setFiltered(
      data &&
        data.filter((el) => {
          if (el.type[0] === "kids") {
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
          <img src={Arrow} width="30" height="10" /> Back
        </Link>
      </p>
      <div style={styles.men}>
        <p style={styles.menshoes}>KIDS SHOES </p>
        <p>
          Shop adidas for all styles of men's shoes including casual sneakers,
          high-performance running shoes, and <br />
          comfy slides.Browse styles for women and kids here.
        </p>
      </div>
      <div style={styles.mainShoes}>
        <div style={styles.mainType}>
          <div>All Men's Shoes</div>
          <div>Sneakers</div>
          <div>Soccer</div>
          <div>Sandals & Slides</div>
          <div>Workout & Gym</div>
          <div>Basketball</div>
          <div>Shoes $100 & Under</div>
          <div>Golf</div>
          <div>Baseball</div>
          <div>Football</div>
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
            <img src={BottomArrow} width="15" height="15" />
          </button>
          <p>
            of 33
            <a href="https://www.adidas.com/us/men-shoes" style={styles.NEXT}>
              NEXT
            </a>
          </p>
        </p>
      </div>
    </div>
  );
};
export default KidsShoes;
