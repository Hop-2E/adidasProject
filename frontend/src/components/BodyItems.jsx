import React from "react";
import { Link } from "react-router-dom";
import { instance } from "../App";

function BodyItems({ value }) {
  const navbarStyle = {
    navbarMain: {
      marginLeft: "20px",
      width: "278px",
      height: "370px",
    },
    navbarContainer: {
      display: "flex",
    },
    navbarHelper: {
      position: "relative",
      textAlign: "center",
    },
    navbarHelper2: {
      padding: "0px 10px 20px",
      marginTop: "10px",
      zIndex: "999",
      width: "100px",
    },
    navbarPrice: {
      position: "absolute",
      marginTop: "-25px",
      marginLeft: "5px",
      backgroundColor: "white",
    },
    navbarName: {
      color: "000000",
    },
    navbarTitle: {
      color: "000000",
    },
    navbarType: {
      color: "#767677",
    },
    navbarWishList: {
      alignItems: "end",
    },
  };

  const wishlist = async () => {
    const res = await instance.put(`/items/${value._id}`, {
      user_id: JSON.parse(localStorage.getItem("user_id")),
      token: JSON.parse(localStorage.getItem("token")),
    });
  };
  return (
    <Link to={`./item/${value._id}`}>
      <div className="navbarMain" style={navbarStyle.navbarMain}>
        <div style={navbarStyle.navbarHelper}>
          <img style={{ width: 278, height: 278 }} src={value.img} alt="" />
          <div style={navbarStyle.navbarPrice}>{value.price}$</div>
        </div>
        <div style={navbarStyle.navbarContainer}>
          <div style={navbarStyle.navbarHelper2}>
            <div style={navbarStyle.navbarName}>{value.name}</div>
            <div style={navbarStyle.navbarType}>{value.type}</div>
          </div>
          <svg
            style={navbarStyle.navbarWishList}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-heart"
            viewBox="0 0 16 16"
            onClick={wishlist}
          >
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

export default BodyItems;
