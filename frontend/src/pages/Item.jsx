import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { instance } from "../App";
import Map from "../components/Map";
import FooterADS from "../components/FooterADS";
import FooterBlack from "../components/FooterBlack";
import FooterNavbar from "../components/FooterNavbar";
import Header from "../components/header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Item = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const getData = async () => {
    const res = await instance.get(`items/${id}`);
    setData(res.data.data);
  };
  useEffect(() => {
    getData();
  }, [data]);
  const sags = async () => {
    try {
      await instance.put(
        `customers/sags/${JSON.parse(localStorage.getItem("user_id"))}`,
        {
          data: data,
          accept: false,
        }
      );
      toast("added to bag");
    } catch (error) {
      toast.error("aldaa");
    }
  };
  const style = {
    header: {
      display: "flex",
      width: "400px",
      justifyContent: "space-between",
    },
    image: {
      width: "950px",
      height: "750px",
    },
    addBagMain: {
      marginLeft: "3vw",
      marginTop: "4vh",
    },

    main: {
      display: "flex",
      marginLeft: "15vw",
    },
    star: {
      position: "relative",
      marginTop: "-2px",
    },
    title: {
      fontWeight: "700",
      fontSize: "30px",
    },
    name: {
      marginTop: "-5px",
      fontWeight: "bolder",
      fontSize: "25px",
    },
    price: {
      fontWeight: "bolder",
      marginTop: "3px",
    },
    color: {
      marginTop: "3px",
    },
    desp: {
      marginTop: "30px",
      width: "340px",
    },
    size: {
      fontWeight: "bolder",
      marginTop: "30px",
    },
    bag: {
      marginTop: "30px",
      backgroundColor: "black",
      color: "white",
      fontWeight: "bolder",
      padding: "10px",
      height: "45px",
    },
    stock: {
      fontWeight: "bolder",
    },
  };
  return (
    <div>
      <Header />
      <div style={style.main}>
        <img style={style.image} src={data && data.img} alt="" />
        <div style={style.addBagMain}>
          <div style={style.header}>
            <div>{data && data.type}`s running</div>
            <div style={style.star}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-star"
                viewBox="0 0 16 16"
              >
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
              </svg>
            </div>
          </div>
          <div style={style.title}>ULTRABOOST LIGHT</div>
          <div style={style.name}>{data && data.name}</div>
          <div style={style.header}>
            {" "}
            <div style={style.price}>${data && data.price}</div>
            <div style={style.stock}>{data && data.storage} in stock</div>
          </div>
          <div style={style.color}>{data && data.color}</div>
          <div style={style.desp}>
            This product is excluded from all promotional discount and offers
          </div>

          <div style={style.size}>Sizes</div>
          <div style={{ marginTop: "10px" }}>
            {" "}
            <Map />
          </div>
          <div style={style.bag} onClick={sags}>
            ADD TO BAG
          </div>
        </div>
      </div>

      <div style={{ marginTop: "10vh" }}>
        <FooterADS />
      </div>
      <FooterNavbar />
      <FooterBlack />
      <ToastContainer />
    </div>
  );
};
export default Item;
