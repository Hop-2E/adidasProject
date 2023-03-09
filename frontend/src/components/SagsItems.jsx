import { instance } from "../App";

const SagsItems = ({ item }) => {
  const removeSags = async () => {
    const res = await instance.put(`items/${item._id}`, {
      token: JSON.parse(localStorage.getItem("token")),
      sags: [],
    });
  };
  return (
    <div className="sagsMiniContainer" style={miniSagsStyles.container}>
      <div className="imgOfsags">
        <img src={item.img} alt="img" style={miniSagsStyles.img} />
      </div>
      <div className="contentOfsags" style={miniSagsStyles.content}>
        <div className="iconOfsags" style={miniSagsStyles.icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-x-lg"
            viewBox="0 0 16 16"
            onClick={removeSags}
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </div>
        <div className="nameOfsags">{item.name}</div>
        <div className="colorOfsags">{item.color}</div>
        <div className="priceOfsags">{item.price}</div>
      </div>
    </div>
  );
};
export default SagsItems;
const miniSagsStyles = {
  container: {
    display: "flex",
    flexDirection: "row",
    width: "500px",
    height: "240px",
    border: "1px solid grey",
    fontSize: "20px",
    margin: "50px",
  },
  img: {
    width: "240px",
    height: "240px",
  },
  content: {
    width: "260px",
    display: "flex",
    padding: "20px",
    flexDirection: "column",
  },
  icon: {
    width: "220px",
    display: "flex",
    justifyContent: "end",
  },
};
