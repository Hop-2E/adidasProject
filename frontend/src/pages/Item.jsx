import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { instance } from "../App";
import Header from "../components/header";
import RightArrow from "../assets/rightarrow.png";
import Arrow from "../assets/arrow.png";
import BodyItems from "../components/BodyItems";

const Item = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [filtered, setFiltered] = useState();
  const getData = async () => {
    const res = await instance.get(`items/${id}`);
    setData(res.data.data._id);
    setFiltered(
      data &&
        data.filter((el) => {
          if (el.type[0] === "man") {
            return el;
          }
        })
    );
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

  const styles = {
    back: {
      marginTop: "01%",
      marginLeft: "17%",
      fontSize:"70%"
    },
  }

  return (
    <div>
      <Header />
      <div class="grid-container">

        <div class="item3">
          <p style={styles.back}>
            <Link to={`/${JSON.parse(localStorage.getItem("user_id"))}`}>
              <img src={Arrow} width="30" height="10" alt="" /> Back
            </Link>
          </p>
          <div>
            
          {filtered &&
            filtered.map((el) => {
              return <BodyItems value={el} />;
            })}
          </div>
        </div>  
        <div class="item4">
          <p className="right">Mens's • Running</p>
          <strong>
            <p className="rightBold"> ADIDAS 4DFWD <br/>RUNNING SHOES</p>
            <p className="rightd">$200</p>
          </strong>
          <p className="right">Core Black / Core Black / Core Black</p>
          <p className="right">This product is excluded from all promotional<br/> discounts and offers.</p>
          <button onClick={sags} className="bag"> ADD TO BAG <img src={RightArrow} width="30px" height="30px"/></button>
          <p className="buy">Buy now and pay later with PayPal.</p>  
        </div>
      </div>

    </div>
  );
};
export default Item;
