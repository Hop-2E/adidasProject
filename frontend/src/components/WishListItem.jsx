import React from "react";

function WishListItem({ values }) {
  const navbarStyle = {
    navbarMain: {
      marginRight: "30px",
      width: "278px",
      height: "400px",
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
  return (
    <div className="navbarMain" style={navbarStyle.navbarMain}>
      <div style={navbarStyle.navbarHelper}>
        <img style={{ width: 278, height: 278 }} src={values.img} alt="" />
        <div style={navbarStyle.navbarPrice}>{values.price}$</div>
      </div>
      <div style={navbarStyle.navbarContainer}>
        <div style={navbarStyle.navbarHelper2}>
          <div style={navbarStyle.navbarName}>{values.name}</div>
          <div style={navbarStyle.navbarType}>{values.type}</div>
          <div style={navbarStyle.navbarTitle}>{values.title}</div>
        </div>
      </div>
    </div>
  );
}

export default WishListItem;
