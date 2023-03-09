import { instance } from "../App";

const SagsItems = ({ item, value }) => {
  const removeSags = async () => {
    const res = await instance.put(`items/${item._id}`, {
      token: JSON.parse(localStorage.getItem("token")),
      sags: 123,
    });
  };
  const wishlist = async () => {
    const res = await instance.put(`/items/${value._id}`, {
      user_id: JSON.parse(localStorage.getItem("user_id")),
    });
    console.log(value._id, JSON.parse(localStorage.getItem("user_id")));
  };
  return (
    <div style={miniSagsStyles.main}>
      <div className="sagsMiniContainer" style={miniSagsStyles.container}>
        <div className="imgOfsags">
          <img src={item.img} alt="img" style={miniSagsStyles.img} />
        </div>
        <div className="contentOfsags" style={miniSagsStyles.content}>
          <div className="iconOfsags" style={miniSagsStyles.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-x-lg"
              viewBox="0 0 16 16"
              onClick={removeSags}
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </div>
          <div style={miniSagsStyles.helperContainer}>
            <div>{item.name}</div>
            <div style={miniSagsStyles.price}>{item.price}</div>
          </div>
          <div>
            <div style={miniSagsStyles.icon}>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-heart"
                viewBox="0 0 16 16"
                onClick={wishlist}
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
            </div>
            <div>{item.size}</div>
            <div>{item.type}</div>
          </div>
          <div className="colorOfsags">{item.color}</div>
        </div>
      </div>
      <div style={miniSagsStyles.bill}>
        <div style={miniSagsStyles.checkout}>
          CHECKOUT
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default SagsItems;
const miniSagsStyles = {
  checkout: {
    width: "18vw",
    backgroundColor: "black",
    color: "white",
    fontWeight: "bolder",
    fontSize: "15px",
    padding: "13px",
  },
  helperContainer: {
    display: "flex",
  },
  bill: {
    marginTop: "3vh",
    marginLeft: "3vw",
    border: "1px solid black",
    height: "50vh",
  },
  main: {
    display: "flex",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    width: "700px",
    height: "240px",
    border: "1px solid grey",
    fontSize: "20px",
    marginTop: "3vh",
  },
  img: {
    width: "240px",
    height: "240px",
  },
  content: {
    width: "420px",
    display: "flex",
    padding: "20px",
    flexDirection: "column",
  },
  icon: {
    position: "absolute",
    marginLeft: "19.5vw",
    display: "flex",
    justifyContent: "end",
  },
  price: {
    position: "absolute",
    marginLeft: "15.5vw",
  },
};
